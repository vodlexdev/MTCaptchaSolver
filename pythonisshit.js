var FoldChlg = {
    URLSafeBase64CharCode2IntMap: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, -1, -1, -1, -1, -1, -1, -1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, -1, -1, -1, -1, 63, -1, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    URLSafeBase64Int2CharMap: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "-", "_"],
    URLSafeBase64CharToInt: function (p197) {
      if (typeof p197 === "string") {
        p197 = p197.charCodeAt(0);
      }
      var v200 = FoldChlg.URLSafeBase64CharCode2IntMap[p197 % 256];
      if (v200 < 0) {
        throw "arg charCode must be within chars [a-zA-Z0-9:;] '" + p197 + "'";
      }
      return v200;
    },
    URLSafeBase64IntToChar: function (p198) {
      if (p198 < 0 || p198 > 63) {
        throw "arg i must be between 0 .. 63 inclusive";
      }
      return FoldChlg.URLSafeBase64Int2CharMap[p198 % 64];
    },
    URLSafeBase4096IntToChar: function (p199) {
      if (p199 > 4095 || p199 < 0) {
        throw "arg i must be between 0 .. 4095 inclusive";
      }
      return "" + FoldChlg.URLSafeBase64IntToChar(p199 >> 6) + FoldChlg.URLSafeBase64IntToChar(p199 & 63);
    },
    URLSafeBase64Str2IntArray: function (p200) {
      var v201 = [];
      for (var v202 = 0; v202 < p200.length; v202++) {
        v201.push(FoldChlg.URLSafeBase64CharToInt(p200.charAt(v202)));
      }
      return v201;
    },
    hashIntAry: function (p202) {
      var v205 = 0;
      var v206;
      for (v206 = 0; v206 < p202.length; v206++) {
        v205 = (v205 << 5) - v205 + p202[v206];
        v205 = v205 & v205;
      }
      if (v205 < 0) {
        v205 *= -1;
      }
      return v205;
    },
    solve: function (p203, p204, p205) {
      if (!p203 || p204 < 1) {
        return "0";
      }
      var v207 = [];
      var v208 = FoldChlg.URLSafeBase64Str2IntArray(p203);
      var v209 = null;
      for (var v210 = 0; v210 < p204; v210++) {
        v208 = FoldChlg.foldBase64IntArray(v208, 31);
        v209 = FoldChlg.hashIntAry(FoldChlg.foldBase64IntArray(v208, p205));
        v207.push(FoldChlg.URLSafeBase4096IntToChar(v209 % 4096));
      }
      return v207.join("");
    },
    foldBase64IntArray: function (a1, foldCount) {
      var a2 = a1.slice().reverse();
      var a3 = a1.slice();
      var offset = 0;
      var x = 0;
      var y = 0;
      var z = 0;
      var i = 0;
      for (i = 0; i < foldCount; i++) {
        offset++;
        for (x = 0; x < a1.length; x++) {
          a3[x] = (Math.floor((a3[x] + a2[(x + offset) % a2.length]) * 73 / 8) + y + z) % 64;
          z = Math.floor(y / 2);
          y = Math.floor(a3[x] / 2);
        }
      }
      return a3;
    }
  };
var kee = {
    URLSafeBase64CharCode2IntMap: FoldChlg.URLSafeBase64CharCode2IntMap,
    URLSafeBase64Int2CharMap: FoldChlg.URLSafeBase64Int2CharMap,
    TAIL_KEEINT: "",
    initTS: Date.now(),
    lastKeeTS: -1,
    ciderb64int: null,
    keehist: null,
    keehistPos: 0,
    tf: "",
    prevString: "",
    init: function (p206) {
      kee.TAIL_KEEINT = FoldChlg.URLSafeBase64CharCode2IntMap[95];
      kee.lastKeeTS = -1;
      kee.ciderb64int = null;
      kee.keehist = null;
      kee.keehistPos = 0;
      kee.prevString = "";
      if (p206 == null || p206.length < 64) {
        return;
      }
      if (p206.length >= 64) {
        p206 = p206.substring(0, 64);
      }
      var v211 = new Array(p206.length);
      var v212 = FoldChlg.URLSafeBase64CharCode2IntMap[p206.charCodeAt(p206.length - 1)];
      for (var v213 = 0; v213 < p206.length; v213++) {
        var v214 = p206.charCodeAt(v213);
        var v215 = FoldChlg.URLSafeBase64CharCode2IntMap[v214];
        v211[v213] = v215 ^ v212;
        v212 = v215;
      }
      kee.ciderb64int = v211;
      kee.keehist = v211.slice(0, v211.length);
      kee.keehistPos = 0;
    },
    getKey: function (p207) {
      var v216 = "";
      var vP207 = p207;
      var v217 = kee.prevString;
      if (vP207 != null && v217.length <= vP207.length) {
        vP207.split("").forEach(function (p208, p209) {
          if (p208 != v217.charAt(p209)) {
            v216 += p208;
          }
        });
        kee.prevString = vP207;
        return v216[0];
      } else {
        kee.prevString = vP207 == null ? "" : vP207;
        return "Backspace";
      }
    },
    play: function (p210) {
      var v218 = kee.ciderb64int;
      if (v218 == null) {
        return false;
      }
      var v219 = kee.getKey(p210.value);
      var v220 = kee.keehist;
      var v221 = kee.keehistPos;
      var v222 = Date.now();
      var v223 = kee.lastKeeTS;
      if (v221 === 0) {
        var v224 = Math.round((v222 - this.initTS) / 500);
        if (v224 > 3900) {
          v224 = 3900;
        }
        var p210 = Math.floor(v224 / 64);
        var v225 = Math.round(v224 % 64);
        v220[0] = v218[0] ^ p210;
        v220[1] = v218[1] ^ v225;
        v220[2] = v218[2] ^ this.TAIL_KEEINT;
        v221 += 2;
        kee.keehistPos = v221;
      }
      if (v219 === "-" || v219 === 45) {
        return false;
      }
      if (v219 === "Backspace" || v219 === 8) {
        v219 = "-";
      }
      if (typeof v219 === "string" && v219.length > 1) {
        return false;
      }
      var v226 = typeof v219 === "string" ? v219.charCodeAt(0) : v219;
      var v227 = v226 in kee.URLSafeBase64CharCode2IntMap ? kee.URLSafeBase64CharCode2IntMap[v226] : -1;
      var v228 = p210.ctrlKey || p210.altKey;
      if (v228 || v227 < 0 || v221 > 52) {
        return false;
      }
      var v224 = Math.round((v223 < 0 ? 0 : v222 - v223) / 30);
      if (v224 > 63) {
        v224 = 63;
      }
      v220[v221] = v218[v221] ^ v227;
      v220[v221 + 1] = v218[v221 + 1] ^ v224;
      v220[v221 + 2] = v218[v221 + 2] ^ kee.TAIL_KEEINT;
      kee.keehistPos = v221 + 2;
      kee.lastKeeTS = v222;
      return true;
    },
    getKeesString: function () {
      if (kee.ciderb64int == null) {
        return "0";
      }
      var v229 = new Array(kee.keehist.length);
      for (var v230 = 0; v230 < kee.keehist.length; v230++) {
        v229[v230] = this.URLSafeBase64Int2CharMap[this.keehist[v230]];
      }
      return v229.join("");
    }
  };