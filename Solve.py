import base64
import hashlib
import time
import uuid
import execjs
import httpx
import easyocr


with open("pythonisshit.js") as f:
    pythonisshit = execjs.compile(f.read())
config = {
    "site_key": "MTPublic-0f0IX2GGc",
    "act": "register",
    "host": "platform.unite.eu",
    "tp": "m"
}
client = httpx.Client(headers={
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:134.0) Gecko/20100101 Firefox/134.0",
    "Accept": "*/*",
    "Accept-Language": "en-US,en;q=0.5",
    "Accept-Encoding": "gzip, deflate, br, zstd",
    "Connection": "keep-alive",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "TE": "trailers"
})
tsh = f"TH[{hashlib.md5(b"mtcap@mtcaptcha.com" + config["site_key"].encode()).hexdigest()}]"
ss = f"S1{uuid.uuid4()}"
challenge_response = client.get("https://service.mtcaptcha.com/mtcv1/api/getchallenge.json", params={
    "sk": config["site_key"],
    "bd": config["host"],
    "rt": int(time.time() * 1000),
    "tsh": tsh,
    "act": "$",
    "ss": ss,
    "lf": "0",
    "tl": "$",
    "lg": "en",
    "tp": "s"
})
challenge = challenge_response.json()["result"]["challenge"]
ct = challenge["ct"]
print(challenge_response.text)
fold_challenge = challenge["foldChlg"]
solve = pythonisshit.call("FoldChlg.solve", fold_challenge["fseed"], fold_challenge["fslots"], fold_challenge["fdepth"])
image = client.get("https://service.mtcaptcha.com/mtcv1/api/getimage.json", params={
    "sk": config["site_key"],
    "ct": ct,
    "fa": ("$", solve)[fold_challenge["preRes"]],
    "ss": ss
})
print(image.status_code, image.text)
with open("captcha.png", "wb") as f:
    f.write(base64.b64decode(image.json()["result"]["img"]["image64"]))
# reader = easyocr.Reader(['en'])
# result = reader.readtext('D:\\MTCaptcha\\captcha.png', detail=0)
# print(result)
print("Answer:")
pythonisshit.call("kee.init", fold_challenge["fseed"])
solvetext = ""
for i in range(challenge["textChlg"]["textlen"]):
    solvetext += input(f"{i}: ")
    pythonisshit.call("kee.play", {"value": solvetext})
solve = client.get("https://service.mtcaptcha.com/mtcv1/api/solvechallenge.json", headers={
    "Priority": "u=0"
}, params={
    "ct": ct,
    "sk": config["site_key"],
    "st": solvetext,
    "lf": "0",
    "bd": config["host"],
    "rt": int(time.time() * 1000),
    "tsh": tsh,
    "fa": solve,
    "qh": "$",
    "act": "$",
    "ss": ss,
    "tl": "$",
    "lg": "en",
    "tp": "s",
    "kt": pythonisshit.call("kee.getKeesString"),
    "fs": fold_challenge["fseed"]
})
print(solve.text)