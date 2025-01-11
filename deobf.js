(function () {
  if (window.self === window.top) {
    return;
  }
  var v3 = {};
  var v4 = {};
  var v5 = "";
  var v6;
  var v7;
  var v8 = "";
  var v9 = "0px";
  var v10 = 0;
  var v11 = 0;
  var v12 = 0;
  var v13 = false;
  var v14 = false;
  var v15 = false;
  var v16 = false;
  var v17 = 19;
  var v18 = 16;
  var v19 = 14;
  var v20 = 18;
  var v21 = 1.4;
  var v22;
  var vV17 = v17;
  var vV18 = v18;
  var vV19 = v19;
  var vV20 = v20;
  var v23 = 0;
  var v24 = false;
  var v25;
  var v26 = false;
  var v27 = 0;
  var v28 = new Date().getTime();
  v3.kee = {};
  v3.autoPlay = false;
  v3.constant = {
    standard: "standard",
    mini: "mini",
    defaultMiniHeight: 45,
    minMiniHeight: 42,
    maxMiniHeight: 55,
    minMiniWidth: 265,
    maxMiniWidth: 600,
    minTextFieldWidth: 95,
    miniMaxBorderWidth: 5,
    miniMinBorderWidth: 1
  };
  v3.asserts = {
    alrtImg: "data:image/png;base64,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",
    audio: "data:audio/mp3;base64,/+MYxAAAAANIAUAAAASEEB/jwOFM/0MM/90b/+RhST//w4NFwOjf///PZu////9lns5GFDv//l9GlUIEEIAAAgIg8Ir/JGq3/+MYxDsLIj5QMYcoAP0dv9HIjUcH//yYSg+CIbkGP//8w0bLVjUP///3Z0x5QCAv/yLjwtGKTEFNRTMuOTeqqqqqqqqqqqqq/+MYxEkNmdJkUYc4AKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
    ripple: "data:image/png;base64,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",
    noCSS: "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAABQCAMAAACkuKloAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQua/w2Z/wya/w6c/xCb/xGc/xKe/xSc/xWe/xie/xyf/xeg/xqg/x2g/x6i/yCh/yGi/yKk/ySj/yWk/yam/yik/ymm/yym/yqo/y2o/y+q/zCo/zKq/zSp/zWq/zas/zir/zmt/jms/zqu/zyt/jyt/z6u/j2u/z6w/0Cu/0Gw/0Ky/0Wx/kSw/0Wy/0e0/0iy/0q0/kq0/0u2/0yz/060/k20/062/1C1/1G2/lG2/1S2/lS3/1K4/lK4/1a4/lW4/1a6/1i5/li4/1m6/lm6/1u8/lq8/127/ly6/128/l28/1++/2G8/mC8/2K+/mK+/2S9/2W+/mW+/2m//mi//2bA/mbA/2rA/mnA/2vC/mrC/2zB/mzB/23C/m3C/2/E/m7E/3DD/nDC/3LE/nHE/3LG/3TF/nTE/3XG/nXG/3fI/3nG/njG/3zH/3rI/nnI/33I/n3I/3/K/n/K/4DJ/oDJ/4HK/oHK/4PM/4TL/oTL/4XM/obM/4jN/ojM/4rO/orO/4zO/o3O/47Q/o7Q/5DP/5HQ/pHQ/5LS/pLS/5TR/pTR/5XS/pXS/5bU/pbU/5jT/5nU/pnU/5zV/5zW/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOqGwnoAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQBwYWludC5uZXQgNC4wLjE51NayZAAAIDRJREFUeF6VnPt/VNd1xVUMsUl4ipcJGFxcysMBEzVGQKksIqgtZAiBYqEqQsWAwZTGgTqADRgsIBAKMjLu/9v12PucM6PBTpfua2bED/p+1n6de4e+P/1XT/HtP8VnOHHT7mvrCrYrV7iHLufh8uWLVy5f7NL58+fOT5+brpqanpyenjx75/n3P/zww0vq+/uXxsdPYZNOnDhxHNtxbGOp0bGxI0c+PGKNjBwaOTRsDR08YO07sG9w715se/cODAzswQbttnbt3rVr586dO7Dt2LEt9M4Wa/OWzZs2b5I2Qhs2bFgvrVv35lppzapVq1Zj71+5sg9/O/5wHAykMElmeVE+EC6x4r/zgRIzEgOzi5cvfwZwvEqdBzYItLiLGbaJM19//8NLQjO3l9/PnDUzQPs9gYHcx2NjBjc6Osp9NKkFMWho+MCB4DY4OGhowgZue/a8t1vcdu1+F8ysAm3bO5CxBTUyI7QN681t3ZvGtmY1uUEr+1f0BTSxkK78p08kRVaFl/BoFyrDAhvi4UmXMBl+Cq7zOljwWtXU9PTExOTUhcf/m05LPb9Ks8FpAEZux49/3LgtiFGHDo0UcENDQwFtL6iZmajJa3Tbrl3Yd+7atYtWg9m2bRe0rVuFDNr8towmbBv4k9TEbO3a1WtlNah/BdwmCjoaiaEkFX/Il/EL/i1e0F8C5di0zYiMbuMhqZFb0Go0NT01cel59VnR9zdPnXCAkhlkYJ1OQ4AGMTCj0xLbgX2mZq8RW4Qn49MRih8h27YVVttir22G1zbRbWTGfb1jdN26dQFuzSr+QCvpNgEolKRKEOfLPAre5fZ3rPSYkSEyO8NSh3PnaLOLAUs+m5yYnJycmJi4FAHape/ATW4TOENjVhsdQ1Ijt5ERWG04ucFpQ4VaeC2IMbXtdmqDz0SN4HZs22GvAds2WW3LJmFLq2WAAtm6cNvqVWtgtn5SWwm32SqxV3xghTf8Sp80zAyLRtML6rPLF7F1C8zOn5s+d47Qit+mpqYnpght8uzzeVabm3v5Yu7Fd5+zFhjbGLkVo6XbgCyoHTzInGZqZOZN1FwMGKDyG6iJG6kFtBqhWwStTWz2WlQDmC0S24r+FVAfo8x/PQ7JRkCEJ695djxyEzPxKnmsA5qMBgWsjhCdAjHrm2DV6sWLudkXs3/9xAEKZlkLRoksoY0MZ4yqgNZikNXgNwRHanYaf9JrO7dtN7WtWQxQQrOGRlpDYjO1ajZTW4nEJmz82wOaYFRCekuvfIjXjETl/YsXP2uSf4cinWE/16S1qanJySnGp8l9/n2gCs3h58Xs3Cx1R9RqWqvIGKHFasMHh1hDrcFaDxictht9RnC7drqK7kBFcIC+syW9Rmjmll5zYivMmNhWq/VA82FsSt9XPiMBUuFGZOV8BZT8BgRmF7ExjVVeneRA7KICkx6rXZp6NHJDcAraxMRM4Cqam6PXpOefwGeA1nitQhux1Q5iL90amjWHJ/SbgYHfMK8xQHFAVkPnYa/tyKTGehDUVA42b9poszGz2WrY1wa3KAZw24oIUjlH5iGKz5ChiIGXgiUqhuTd73QpgxIm8xawqqYmp10GQqcnzrZmm0N4GljoZq0FY6NHmr4D8UlmEqBF4zHIFrdSo9sIbvceprVaDVBDt2ef+05mtigGEEOU1LIcFGqyGmVo6bZEYTJX8BNSROpdvKUL/1JPIf3P5wVN2mYNtInxidN/DmIUfAabAVyYbXb2oZ3GWuDqSWLw2sihSq2jxTWybDtcDVwOdu3eWfOa3bZ127Yt0eNyNBA3BSgjlG4Ds6S2Zg2qqNSP1CZoy4itl4DGCH9CtNk5Nhnnkf5FDccq9GZghnQGZp3UxsdrjBoZS0HV85NkJq8RXAjRWYYptmspYktu6jqiFsBoTGsJbXsUAzS5pc3dvOltg6PVBA3UNiBCs19j72H1s/X4UWy9BESk5N1heQ6XSPqEFsg67MYWTWWACa2AGx8/jX0c3Yf1Yg7qYEZdsNUKsi6jHUS7lm2HqRFbdVoWAwTou0Ftx87tCFFhi3EKIrRNmzcisdlr6zf8UmZbv3b9WrktGw96TVaDli3ru6iqJwpGQfl1yi/8S7GLG/ox9WWR+rsClE6jz6jqtdOc07mfYWpD6XzRzSt0le1tjdARZjX0uNZQ06ypGshq7TjlJpdey6yGcpD1gFbL2YAByp3QNiYzHGpiW7N2lYXpQFq+bGnftAg03JjS/UInnvEWPMWPIPQUQAVmaP1JqosWxbIJTpMT8FlXdEITWuMANrrsxeyLuZdBqurp7NNrYwJGbsppIxhBAxqwFWb70HWkVAZwKCFKswkatWO70xomKgxUkdk6EpuKKGOU0IIazBYxyulAWrZ06dI+/tUMMbsJr84j8hB1wQsRiEtSumhPYVLCW/w18eoBLaISOa12thSRcVnICxxnvsviOc9uT58+ffL0am06aDW0HYEMcwEqQTYeFRrMxqRGdCYmr9XGI9JaM1CVhSIge0udB6gxq3EOTa+t5kwFMauZ27LlwIa/HBj813N8VEpnk+rAO88ODB8wgYmtSfGsXyhCHsNhEjWT49OUfNbK0HIpbfzUyecvVT7n6ens7BNg+zy8RmpcVMuFtYOwWTLrLKFym4wWZkMJLW7bkbMBjRaZbfOmGKnkNVIjtzCboWUV7V+ZIboMIjZSKAR8YSZAowGcgfkTUjPLuNSM3hGXp7G7BiilJbdTJx4DUY+89vTZk6fg9vQPxWusnzlL2WqZ1EAtejWo1IKIT6a1Cq2MoaAWC5MlQp3YApmpJbhsc+E2i9CErZfAKX31Y9JSo06mxbppWI2MDDIwHzGo3+lhtadIauAGPf5IwJzVmgAdPlCGKUILqRQENnVropaLkiwHhobhvcxUIFZClNA2gpq41UG0bT2yjNJrr8L2I1IwlhPyGHhJE0plxHbt8V9nrgoZZJuhDGRS86LQieNXA1UjJTVCe/LkG3pNC0SlfKpXG2KQSpg/S4QGNGycpiTGZ5oN8VnMBmDYOb17XZLQxE3U1OYWaGE1RGgwC2jAhr8/EPxNwu9yTJKxKKDyKpADE4c/POYq2suZUgO6RGSnMKWffB6wikzN3D6X17isBgU4NGplEddpraEmp0FixvgsNRRtRzQe77CI5ngQ8fmWoCmxqfWg1cRtTWnZYDXltWWR2JYugduQxEEAQIDDCOPUSLkLuZ47/cWrIIU9kFlnHruJfflQ2OAxgssCaqPxNsHxEzeDlkRkjR4eZoyy52i6DkRoyMg6qImbmKEUuPEQuB07tyU1eq3MobXxiAC11kWXyxqanQdCVFZbsWKpsS1d0ucQ03ECHpqe5qUZ4Ug8TF24ihkJlCanTQjSkkaH6iLaHaIqZtM69+8NjUfY7X8CGaCheoZM72parVJDq9ZEaJYCtbgxuDtC4TOEaNTQFto25LWQoGEjNWBTWit5LWK0TAexVgRoorZs6ZIlS/qcxAXEPSpnyHgNTXmxh8ggfhTq7MlS480i2veXqsvks1O8PeD1R52+SGYonB1ee3L/MLCxvQ1qB0FsuKPtCKsNYM8RlD92Wx3dOYZmhEaLu2ULclqEqLDRbpgO0KxxNzOEaHOfykKMwmjLliwBtz7+sWJhK1HmFjJAXHRwKh9T43EaPz1+Zi6YUc8LNLrMFtOBGjs+duyOqD19UqwWmvkdm46iITZr/klsNhug2WvJjQFa8hoXJGG2FHgpQlENWEWTmpaKHKLreGuvK0IRoLWGuh7AbIuFrSoQ5bG3pToEVuQ2fmoCBXP8ThCD5uYQppCJQcFLZy4LgduMkhrb21YPzxxB01EL6HBZVSuFwCHKpGZm7DoYoIImm3kdt9xF3vrOtq1tMeAuq23c+MuN65naXEIjQs0MVgtkDTRgW2y3pTo89JOSybgEBHKnxk+T2n9g0BQyLzx+d0YZjcgEC4cTXLWNOwRjo8fu15aj6OEZLg8VakNNfytobVYjNJcDh2dt1ui2MrojQDNCCzRSY/2MtIYQfTOchtlARbQfAdofvQd7XGMjNbgNLbx7+VcrPo1ghGgwAnMQRiTixCoKl3Flg6PT3H0kNN2DMjpgy3XuY1pMGz3652CVevRk5mjwgpDQUAay6+Bah5FRAU2lAIp13HfrPIXRvZRQ8ApuUUJJDbXA47sjNDuPeiO5qaHkRr+B2pLFcBusclrxxbOIWIUR3h0/jcNp/A7zF85qLSCQ4stC7RKZkZrXHV+8eH7WvYadJqPZaYTGWwSjR07OBDDr4YXfBjKqNmqUFta64pPgSE1qnlZonvFgBXXfsVn3qJLaxg1Epy6XejPW1/BT7xysjFVwFYOARm59+GvVxJOKAo3ZahwgE48+xm+JrX8PV6AkXMFMLzGdv5zl+jZXg7y+PUNQEjjJanZZQBsdHTty+Pd3HgezRw/PHh5u14dapylChQwys2jWMkAJLbzGpbWsoB4NRE0KanHbwMwis8lrq8sgmkWUNnNqc4gueaOPf7J4GF9e8pVgEB9PyPn6yJt2H+IIXUVgvgSydj3oLJF9rE3RSWSExh/P6jge/uiTC5cunD16uCkDVJ3ZO9NajVAXA1MDsFIN6i3kctcAKgtF9BrtJmoeqQAM3NZgC2ZQqaEkxgPdBnBvLCa28ocbD0yHS7+nS7/LN8BQb6fy1Qnup5/3WNF4fCzCskhO89NWdcmbQ3vHmvdB14HgNjjIETSQtdAoUeuqBtubITQHA7gtn47ZtMnjlKDJbHYahIJgcGhza+tBZJnYYDe6TTz011u+Dm71g7gCQF9QwKVaqTbjJoJzvi7BZqOFnI02+mFzi50aOcIF7+o13jRGgJoZqe3lHb02qwWxzGu73t31blnw8DIuVVckITgtQpRGU4g2s0FSy8VcVlBh02Sg1SJbbfHiN7rc1q3yPi9OzP81T0s4sVL+27zRXHp8zMAk2IzY8rE+aIRDlIaBNkDhsiatgVo8RjSYpSCxmRnvTwUzCD5rKmjXEGpoQCa3yWnEFtAwGUSM9qP3IDRyU4jabIRGbn2yChGYBNUDT3NKc1WxszhxHK1rT31ekCmdfUivhbjYzRW1ZsWbajIaxBssGZ8DaNaiEGjlew/HdjW5QQxpLZdxodKsKa1lLRA1Q8NGp6GIUiihZYGtDKLZ5iY1RCgEbPILjzqZjgAxAPmKmz+rwNSJkZaZHT9+trfZZp/99RgNJmxMZ43TIC5xAFmhxvt4QwdKLRjcFzlN3AAt5k9VApsNTqsTKARo9lq9hbzlbXotw3Oj8lozvQe0mtVILe4bLCc0cSM07jKbsRFA8iia9wbx5IUOPLkhg7jGPU9PZ58+efY1CkDUzaYGaN22Xbil2N4aGLVPSQ3EElqEJ7ZcjWR0wmrihmGqrOJC9UaLoRVsxWtktn792jcdoxwNbDbWgrj9voxrRYUazCZowia/zIdkKr6UApZI6ZJO0xH7pwGq1TNOTthOjiE2834KhNhkRuPCUFs9ZbRaBrgPDu6LQhBJzQEqo2HjElEZCjS4dwZomE0BamquBhmgDNGYqKCABmWTWyMU1BSihkZs4RptPJiGLkP+THz8KT/BBTsxnT8+fqwrRDGgE5qXzx7+K5C1zYYXhbqaNEGri0NyWu06OqERWXqtTFMgFs9gQXUI3bJpEwyXzIJamq2U0BqgflySMcr6WRObrBbcXu/Tny+BgOEUYH7fb8eLzpN6MvYW14DqGYOSwKAnzwgsx/SzwSs0cgj9RrsyBHmMqhEqaBSO/+TwZHSSm6KT4nJkDVCNU8SGpFaZcZkoltcMLYlJa+P5GN7YW539WjzoQW5KbfaaQ9TQXic2TYo9lGgKIgsvtYiR4qtjgsaolMVi2dHXlG5DWbyloqXuaja2tjBbAKPQpWX59JqaZKM13MpYAHG1IyK0jU+lNSmYRefB2wZwm61GbqtzfO++cdAdoK9jW9SHP1p/u8fsboT8NC598bFJmZauUCTHbobLGJgOzk7dVK/BnAZKHfnMD/a1hYDQEJyJTbWABVTUcpJiToubx1xX28HljoTGZaKKbVNQAzdV0JzcWQ7KzRY6rTRsMhqUiU1WA7c3+CNwi17vIwZKKEiCJyHxQR8Ikl/ql/TpGJp/afTY7DMaTSE5f/2M+p2GJxbOruBEbLLrCGAUeWWEZk4r8t0CJ7barKEaGBkU7a0krzW1QD5LbsxqSS1uiK5UEc1ykIlN1Gg3U3sd1OA2IhEpMxAsbqKUL/TJ6HE6y/5Sw68z9vs9UbV6qOdt23bjIJBFHWigyWMVmrBlTqPRZDZ6bXc+ixtWC25bt8JsZTDIYarUgsZrqKARovWRIleDoFastnTxUoZoxiipEVvz93eqfcfOQvtFdGpf/ZKt/8k2jfXQI2wIUySzxmlaFHJwBjY+slwmT6gu3xIdiGVSYwHFDFqwlVkKUnRyp8/aewZgpi1WPEoJLd0aRK+VQVRjKKQAFTWbjdQW9XlMTPOUq2KmOFO8BCf/C11IR3K5rLcePXn04NFfHp4NXCEO68TV3o6i1+w2Qgtg9NnAnt3viZtzWswFDE6oVIII0GYIbaqBQxQuw851okKN62sJLZ8pKl5buuTnymyLf6EIfR3lQNQWAhslEAnH7wiYLvWCv9K8455f09LZxz9qNegv2B9+FMAgxGV97pZybwtYTXQCXI5SZSbQzK5mjQK37Tt2lLtTXMRFOajQzKxEaFIDN/W4Aa7MofmdAyirgfIaWw/abDE7j5+RGtzGTvSIoAUPISSifOljnLh9aGY6Yn+F2YAK+wOcsD949GDG3NRtEFVXGbDRgpiRmZnMZpEaKwGoKaeBWTzrxwOoZb9maG1eEzQ5jdiyW2sClGuS9lphBsFrjFEPohGgENwmbtKHBKOTenoek50+52e6gOKfQFcDU4iJDLzkMjJ79OABmGk/imyG/I+ERqPtP/zv165dOvovJTZTmdOIDtAQniWrsVULn+GgpiPz2tYtKAVBDdhEjDI0cct68CbGUDsN1HI4WJnPx6hhS2Rc8VjMECW012m3wOa/vWHDE3ay0xsSEfJNv2g+OHL4YfCCgMzABI2y0YgNmjmzn4VT/tr/yZ1voQcz98/ubxduaTR5TT4jr2q1+q0MC9RKMWhu6QlacGN0Unwm1+I6kaGtqbdDWQxcQ5eVe3tLkNi85gHpALcRGRXYpATFY5DphNdLN00sBFIVGZl16uvfghi4/fPJbwjt23s6HC7lsxgNkSlwmdUIDcjyoW+ITssGV99oqdRimOoaQhWhBRpvGpTH13SLKqrBcj5jKmxExmIAZNhktJ/Ja4sWLSA2rRaWU8NpNN+iuA7bKXb9R8tdp5ACM85ps6r714598MHhs4YmavfuffvNBxWaUhqP77XQKIJLYf6Ez0oFhdNQP8ntbeU1GS3jM5DZauvX5uqaSmhwQ4AGtGUrzCyymloPJjbG588iQhe99hrdRhy5CwXP5VW+hsor7If4xB7a/jslkRVSopXIOsGZViigYb+zn8jSa3SZmQmaJ4I2OrmC2/RqHfcLKjQoezVyIzmWgmjYUAxKXisPxzCrLc9VydqvWcEMUbpgwYI+/O3AwJVpnuLQofxcv4kPh3HCjub10MixhwGMEakLcvIbnUIeM61vHzg0CYyne9hvvi9gMloRcKFRY6sGZrzdHtT4bGRdV1N45kQFZonNj/u5GITVooBK9WtU/aBmblzwiCoaRqPMLKEtRIQuWLigL1r3Qw5CkjEYvAFOwnloWOz4K9AwrvgfIuif3ScoNmZmI2g9JFxVQlV19+7da79ObuSl6kmPyWv8GkvxGgb3JjpZP+MB5mDGg7CRGr0W1ZMtLr+wl9UARqs1NNwWRgtqP2+hUaK2cOEC2g3YAM7zNQ8cHPW/RByCu/RcnlDx7eH2MVoIL84ASdhLFz2pFZtRjkzK57uEBn1KZCU+aTQeiI1loFJDJahDAYnVAspiEF4zMQdnY7Zo15DW/D9TGBpqqNT0a5hDzQw7yQU0mg1WY5A26169ZFIA2vlrJHxo+Lff0GtBpyc0IOtKaHRa8dpdHaRjwGWvAVky8xemAhra253bcgLdamgZnfRauXccPiM1M/MTf/KZlUu5/ZUamLX9WsQoiNFuZgYtfE3U7LaUPKejr+q5ty4FnHm8vvXWpXRanCgjkz5idOonmEXtFDQi40/zmJ/rZxOhEZ0RnqBGcDYaW9yKrax/11pAq4XXAA39mriRGFRq6GsLXxO0Lmw/KX5huOjgyP1XhCUkTtQ9XNpeTYBKgatof5oMiilqp4b2mNnrzXaqDU7e0DMyKKiBmdIa9i6zlW5Nac1mo9fqPSrXAwDjGMrWQ9DotTDb34JNrBKYzkN6LnToi0BUJZcZVypeziiXcRO6IJW6zcOd94MZkaF8QjqI23bdyyt5DdCEzewaahvfeotzgXyWwxSLgYSshkOmNa3jCtpyPs0sqwHa0ghQt2vwGnhxXwhqZgb1cbmQX2kVFGgozo1AiE+38wqTuF7zjslRmK0VmM2LSxpNrETNuptlIAVot/lzUzfZaTRCc4iKmp4gArMCrRaCzYI2z2slrQFa+SYQxPCsxWAFvAZuGKjK05LRrnkKZWZDgBoaOw/Vgz7uGHZI4SBOXDgcPsAlauwBikeai6woj5S6AXCt0pqPK+TwhAo0Oa2T221yA7bbX3hBzQpm8hpvSdUQhcfqBGpo4rYxboMCGpcjxUwq4Mp/UwRoq3xXD2JaK2bTAlvhBmaOUHhNnUeoDxwATKtfgsIzoQiSWfEtwcLO7zzx4wMHjs1E2sfegY1xKIlV5YWrbp9ZxHb39le3b339aea0ItSB7WxwU3zIb2u5w8K0BmTmFiMooEVaU3jmfRZCa24gt21HIGvSWikGpc1d9Jo7jxDcBhGIjQRuMJ6+r4mX4S6y04UPPn39KpMpf/HUYbF5+Sx0m/rqFnX71s0zjM1mYGeEAlY6DXMUgQU0PrGm+CSziqxCYyngcqS5oYCW+ORDHuYmbHZbQy3atTq8Z+cRMrZQQKFw2bwKte+cFJseundvxrgaaPNtpnxmoxHb7Vs4gtzNj3RrRdzUcBBY8Rqnz8ZpiYwytHncGKFmRq9lhOpr77FQBGJ2m6BF4yG3eSlXdmOX22G3Dmz/D+3XcllRDUyogxqA9fIZa4DAfQWT3dIBO/y2n8QIjF9gqTM7129ZPqvZwmm2WiQ1UxMyRWiFpmbNZuNXaiNC6bVc8xAzuY3MKFjNMQqndXiN2PgdiWDxt4nLsQcu3HtAW4XIh4cOYBS49ISmCoCzgMFn/LGu/dpGE7JWTRlQfL6dRssIFTLfmopSUJKaqRkamSU1Pslss4kZrPaLiE8uFcVwwDE0aBX1DQ7uHeSjd4LHk+UX/MnX+/RicHCQz099ILOBS4AyuVacmwJSl2QzZjRACmDJjLr2K1hNDUfDjctpgBbc3HUUbhUaH1kLs1VoVE1rbtcoOq2UA36TSmnNXmMFjbTGxdxusy3o09MW1F7QAEEiKhDxRtn26cEMLygOXjAzB6cwQeWid8GEGJXFaCJXbZa68TkzWttwcPpMcKKmp2EEjf81kaFprxUUzLyRGZfWmiIa2HTfPay2ZDE7NiY2G439mqnRbKbGfi3VJwoUn1s0Q4NK8Y5vfMLfJL/Bw3fIqPVb6BWZLOSE1uLqZgbduP5pUwU4svMLUwYmwWiEJqvJaJCf/NbzkVoianvc1cAW0FgLIkSXr4jF7ywGfFASzMJtZXovIdpSM7aQwOwFGP34LV74fb0iNxyuGpKIaRXDAdmbGC0mkyUy5DORU5h26MtbN7D/98lgRtXvS+lYmg4LxFQJNmpdrYnP8mgpCkFZ/HZik2iztoR6okpqiE9XUEDj/N4dow22QGM13OqpHD6i1UwNrHg0tnkyMQvcvkqzkde84LxxA9BuXL/+5fVrh1tmTcthpxVsZsbwXO/1SLW3/H5jRCefJcLonuXAxCDf1DO1nytGgU2raw7R0uaCmwfRv9OxqHVbgQTVqy4N7N37/jViErFA8qNSJmNGa0jNN9oNOO3Gl9ev3wC469f2ExqIcWWoA5pTmpmFmhUiQmNaK7fcyyxFrWyrgZBB9lqajVkNeS2YsfPoLWCLux+BJeSX+eYAMJbrgZOvCsduRWDe/QqHr9RqEFi4rdENeu1LGo3QuF/7NeoAv6TdMtv0dg1PtWriJa8BmP+/GJktkNloEaANMw/uAucZVODATBFKp2W7FiW0y2pQXz6ArbPY8NJ8/Ea8V37x/ZuG8krRXfYXj4xNuYvU5ptMB/rsho3GHfr8V1v4TEdSc8tBpwW4aHAJ7Zf2GUO0q+toH8jtj//nT1bLxsPfqaXPuAlac4cKOe2VbtNdDz2vKFoC0y2T9PXAwJmg01vkpDNtRmocOMnN1OZxQx2g0+C1ABa68I9BjIqUJmQ8lOjETqGE0mtcxM2mw/emsPUbW/a48axCeE2xSdlqymnOa4jQBXV9rVt9XMGPH0q3w3VVzwN7+H9kkq7e+xGziVjiQjK7y9ik1UhrvtOQz259qcCUOrn94R+CWUAjMioWOuQ0fl+bNnNmq1YjNLBKrxVmUHUaoTk+5TOK8Wm3LWQ5CEY9RGxkEdh0iFNc675IvMOLPQLUIRoMlHgll4W3bK6IT566hNhUFUB0QoZV9cdjf1+p8T+nEzOKTVq1mZBFfNYQXYW5PbJaP6jlXXdazSU0VtZITSUURwRoaXIX0Wrk1tGuFTlI9+y2mQiHJ9LhVlCRm88DxFYZ8Ri0cLIKKaDR5XxizGm015fIafOJXb/+J/5f+R+JGesAoLXcBA0ntbcKTt5iKYmNz181JbR0uKRGn2WAChuJRXzWmwag1rXA1iW4jU8NWPUKhPBC2AjLes8EgSmRKSANjDtwBCXsOvYARpfZaFB3ZDb64/Uv2Ns2bZqYqbuV0Up7qwJa/rNXhmj4jE7r1/+8JmTLY5gyNhLTZCBoDNFFsQDO+HQNnV9CpQUL/g8wCO/0+2Tn3QAAAABJRU5ErkJggg==",
    error: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA+CAYAAABzwahEAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAABl0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC4xOdTWsmQAAAPHSURBVGhD7dpZqFVVAMbx22BiZqRZWUKY0IASPYSRODQQSiRBaNgg5EDRAIFBoPiQFviSQQmiCGrggyBUFAoJhg9iFAhhYKFGGBKaWkRpaVr0/w7sy+bcb8/rnLv34Xzwe1tr77XOsPeaBvrpp+O5CjPwHGbjavR8HsFR/BdzHE+gZ/M0/kG805HLWIKey734C67TkYt4ED2TK3AArrPtvkXP/Oefh+tkktfQ+IzGCbgOJjmDcWh03oHrXJb1aGwmIeuBlkRP/6loZHbCdSqvPWhcHoLrTFFPojHRkPQbuI4UpVHeSDQiL8F1oqw3UfvcgF/gOlDW75iAWuc9uMbH/Q09uLZiN87BlYvbgtrmbmi87Roe2YeJiOcmfAZXPqJJzP2oZfTtuUZHvoNGci4j8DVcvch+aNxfqzwO19g4LTykJc81nkVtom/re7iGxt2CtIyCftKubuQnXItaZDlcI9upY1m5AFc3bjWGPXow/QbXwHb3IC03w9Vrdx63Y1izCa5xznykZRZcPWcHhi334RJcw5ysn+jLcPWcf6EPaliid7JrVJKPkRbNwV29JAdxJbqaBXCNSXMMafkCrl6aZeha9HT+Ea4hafSqug5JOQVXL81JXI+uZBVcI/J4AC43wpXP4110PBpn/wnXgDyWwmUmXPk89O6/Ex3Ndrib55X07bwIVz4vTXI6Fu1y6DXibpzXLrisgytfxFwEj14bX8HdsAgtJbl8Cle+iMPQvCFoXoC7WVGar7stIjXalS/qdQTLGPwMd6MyJiMe/ZrKrr+3+xXjESRr4W5S1sOIR+tprlxZG1A5+na0RuZuUNYixDMNrlxZmj9oW7pSPoK7eBUa478f8wlcuSr2onQehbtoUzyFwtGT9xDcBZviBxTehXkF7mJVaQC0DToEpGGmTj1tRJF5fRErkTtjcRruQlVodrYQLjr1lLUmX8YfuBW5ogeOu0hVHyAtb8PVq+pDZGYKko5kVZW10a+Zn6tXlf5eSdPhwXwOVzmEPA+a0GOGyJdI3IWZB1cplNuQFq3OVJ39pWkfOLVyDY7AVQgl6xiXGubqhaLTV0P27t6AKxzSWdwFF20QhJwIJVmDwejb1qKdKxiaXpOLEW0n6X//DLrRadEhg8EFzzy7lKHpna3O5tkrC00fdCtvwRXoVTq10UqI9a4m2YxWXoUr0KtWoBVt2FdZK28SDZDuwGD0h+/UULUuNEnS+v2QTIc27rKOYzSNRoM6ONS+1jckOuXwGHTQRqOpptJhozmo/eHAfvrpp59AGRj4H6lAyP+Ua43tAAAAAElFTkSuQmCC"
  };
  v3.messages = {
    lang: {
      en: {
        inputPrompt: "Enter text from image",
        loading: "loading",
        reload: "reloading...",
        verifying: "validating...",
        verifyFail: "Please try again..",
        verifySuccess: "Verified Successfully",
        captchaExpired: "Challenge expired, please start again",
        verifyExpired: "Challenge expired, click to refresh",
        emptyCaptcha: "Please complete the challenge",
        incompleteCaptcha: "Characters missing, please complete...",
        audioPlay: "Click to play audio challenge",
        audioPlaying: "Playing audio...",
        continueAudio: "Click to continue audio playback",
        downloadAudio: "Click to download the audio challenge",
        audioDownloading: "Downloading audio...",
        connectionError: "Failed to reach web service, Please check your internet connection and try again",
        miniConnectionError: "Failed to connect to the internet, Please try again",
        captchaRefresh: "Get new challenge",
        privacy: "Privacy",
        terms: "Terms",
        byMT: "Powered by MTCaptcha&trade;"
      },
      fr: {
        inputPrompt: "Entrer le texte de l'image",
        loading: "chargement",
        reload: "rechargement ...",
        verifying: "en validant ...",
        verifyFail: "Veuillez réessayer..",
        verifySuccess: "Vérifié avec succès",
        verifyExpired: "Défi expiré, cliquez pour actualiser",
        captchaExpired: "Défi expiré, veuillez recommencer",
        emptyCaptcha: "S'il vous plaît compléter le défi",
        incompleteCaptcha: "Caractères manquants, veuillez compléter ...",
        audioPlay: "Cliquez pour jouer au défi audio",
        audioPlaying: "Lecture audio ...",
        continueAudio: "Cliquez pour continuer la lecture audio",
        downloadAudio: "Cliquez pour télécharger le défi audio",
        audioDownloading: "Téléchargement audio ...",
        connectionError: "Échec de l'accès au service Web. Vérifiez votre connexion Internet et réessayez.",
        captchaRefresh: "Obtenir un nouveau défi",
        privacy: "Confidentialité",
        terms: "Conditions",
        byMT: "Propulsé par MTCaptcha&trade;"
      },
      es: {
        inputPrompt: "Ingrese el texto de la imagen",
        loading: "cargando",
        reload: "recargando ...",
        verifying: "validando ...",
        verifyFail: "Inténtalo de nuevo..",
        verifySuccess: "Verificado con éxito",
        verifyExpired: "Desafío expirado, haga clic para actualizar",
        captchaExpired: "El desafío expiró, por favor comience nuevamente",
        emptyCaptcha: "Por favor completa el desafío",
        incompleteCaptcha: "Faltan caracteres, por favor complete ...",
        audioPlay: "Haz clic para reproducir el desafío de audio",
        audioPlaying: "Reproduciendo audio ...",
        continueAudio: "Haga clic para continuar la reproducción de audio.",
        downloadAudio: "Haga clic para descargar el desafío de audio",
        audioDownloading: "Descargando audio ...",
        connectionError: "No se pudo acceder al servicio web. Comprueba tu conexión a Internet y vuelve a intentarlo.",
        captchaRefresh: "Consigue un nuevo desafío",
        privacy: "Intimidad",
        terms: "Condiciones",
        byMT: "Desarrollado por MTCaptcha&trade;"
      },
      it: {
        inputPrompt: "Inserisci il testo dall'immagine",
        loading: "Caricamento in corso",
        reload: "ricaricare ...",
        verifying: "convalidare ...",
        verifyFail: "Per favore riprova ..",
        verifySuccess: "Verificato con successo",
        verifyExpired: "Sfida scaduta, fai clic per aggiornare",
        captchaExpired: "Sfida scaduta, ricominciare",
        emptyCaptcha: "Per favore completa la sfida",
        incompleteCaptcha: "Caratteri mancanti, per favore completa ...",
        audioPlay: "Fai clic per riprodurre la sfida audio",
        audioPlaying: "Riproduzione audio ...",
        continueAudio: "Fare clic per continuare la riproduzione audio",
        downloadAudio: "Fai clic per scaricare la sfida audio",
        audioDownloading: "Download audio ...",
        connectionError: "Impossibile raggiungere il servizio Web. Verifica la connessione a Internet e riprova",
        captchaRefresh: "Ottieni una nuova sfida",
        privacy: "vita privata",
        terms: "condizioni",
        byMT: "Realizzato da MTCaptcha&trade;"
      },
      "zh-tw": {
        inputPrompt: "輸入圖片文字",
        loading: "裝貨",
        reload: "正在重新加載...",
        verifying: "證實...",
        verifyFail: "請再試一次..",
        verifySuccess: "已成功驗證",
        verifyExpired: "挑戰已過期，請單擊刷新",
        captchaExpired: "挑戰已過期，請重新開始",
        emptyCaptcha: "請完成挑戰",
        incompleteCaptcha: "缺少字符，請填寫...",
        audioPlay: "點擊播放音頻挑戰",
        audioPlaying: "播放音頻...",
        continueAudio: "單擊以繼續播放音頻",
        downloadAudio: "點擊下載音頻挑戰",
        audioDownloading: "正在下載音頻...",
        connectionError: "無法訪問網絡服務，請檢查您的互聯網連接，然後重試",
        captchaRefresh: "迎接新挑戰",
        privacy: "隱私",
        terms: "條款",
        byMT: "由MTCaptcha&trade;提供支持"
      },
      "zh-hk": {
        inputPrompt: "輸入圖片文字",
        loading: "裝貨",
        reload: "正在重新加載...",
        verifying: "證實...",
        verifyFail: "請再試一次..",
        verifySuccess: "已成功驗證",
        verifyExpired: "挑戰已過期，請單擊刷新",
        captchaExpired: "挑戰已過期，請重新開始",
        emptyCaptcha: "請完成挑戰",
        incompleteCaptcha: "缺少字符，請填寫...",
        audioPlay: "點擊播放音頻挑戰",
        audioPlaying: "播放音頻...",
        continueAudio: "單擊以繼續播放音頻",
        downloadAudio: "點擊下載音頻挑戰",
        audioDownloading: "正在下載音頻...",
        connectionError: "無法訪問網絡服務，請檢查您的互聯網連接，然後重試",
        captchaRefresh: "迎接新挑戰",
        privacy: "隱私",
        terms: "條款",
        byMT: "由MTCaptcha&trade;提供支持"
      },
      zh: {
        inputPrompt: "输入图片文字",
        loading: "装货",
        reload: "正在重新加载...",
        verifying: "证实...",
        verifyFail: "请再试一次..",
        verifySuccess: "已成功验证",
        verifyExpired: "挑战已过期，请单击刷新",
        captchaExpired: "挑战已过期，请重新开始",
        emptyCaptcha: "请完成挑战",
        incompleteCaptcha: "缺少字符，请填写...",
        audioPlay: "点击播放音频挑战",
        audioPlaying: "播放音频...",
        continueAudio: "单击以继续播放音频",
        downloadAudio: "点击下载音频挑战",
        audioDownloading: "正在下载音频...",
        connectionError: "无法访问网络服务，请检查您的互联网连接，然后重试",
        captchaRefresh: "迎接新挑战",
        privacy: "隐私",
        terms: "条款",
        byMT: "由MTCaptcha&trade;提供支持"
      },
      "zh-cn": {
        inputPrompt: "输入图片文字",
        loading: "装货",
        reload: "正在重新加载...",
        verifying: "证实...",
        verifyFail: "请再试一次..",
        verifySuccess: "已成功验证",
        verifyExpired: "挑战已过期，请单击刷新",
        captchaExpired: "挑战已过期，请重新开始",
        emptyCaptcha: "请完成挑战",
        incompleteCaptcha: "缺少字符，请填写...",
        audioPlay: "点击播放音频挑战",
        audioPlaying: "播放音频...",
        continueAudio: "单击以继续播放音频",
        downloadAudio: "点击下载音频挑战",
        audioDownloading: "正在下载音频...",
        connectionError: "无法访问网络服务，请检查您的互联网连接，然后重试",
        captchaRefresh: "迎接新挑战",
        privacy: "隐私",
        terms: "条款",
        byMT: "由MTCaptcha&trade;提供支持"
      },
      nl: {
        inputPrompt: "Voer tekst uit afbeelding in",
        loading: "bezig met laden",
        reload: "herladen ...",
        verifying: "valideren ...",
        verifyFail: "Probeer het opnieuw ..",
        verifySuccess: "Succesvol geverifieerd",
        verifyExpired: "Uitdaging verlopen, klik om te vernieuwen",
        captchaExpired: "De uitdaging is verlopen, begin opnieuw",
        emptyCaptcha: "Voltooi de uitdaging",
        incompleteCaptcha: "Tekens ontbreken, graag invullen ...",
        audioPlay: "Klik om audio-uitdaging te spelen",
        audioPlaying: "Audio afspelen ...",
        continueAudio: "Klik om door te gaan met afspelen van audio",
        downloadAudio: "Klik om de audio-uitdaging te downloaden",
        audioDownloading: "Audio downloaden ...",
        connectionError: "Kan webservice niet bereiken. Controleer je internetverbinding en probeer het opnieuw",
        captchaRefresh: "Krijg nieuwe uitdaging",
        privacy: "Privacy",
        terms: "Voorwaarden",
        byMT: "Aangedreven door MTCaptcha&trade;"
      },
      de: {
        inputPrompt: "Geben Sie den Text aus dem Bild ein",
        loading: "Wird geladen",
        reload: "Neuladen...",
        verifying: "validieren ...",
        verifyFail: "Bitte versuche es erneut..",
        verifySuccess: "Erfolgreich verifiziert",
        verifyExpired: "Herausforderung abgelaufen, zum Aktualisieren klicken",
        captchaExpired: "Herausforderung abgelaufen, bitte neu starten",
        emptyCaptcha: "Bitte vervollständige die Herausforderung",
        incompleteCaptcha: "Zeichen fehlen, bitte ausfüllen ...",
        audioPlay: "Klicken Sie hier, um die Audio-Challenge abzuspielen",
        audioPlaying: "Audio abspielen ...",
        continueAudio: "Klicken Sie, um die Audiowiedergabe fortzusetzen",
        downloadAudio: "Klicken Sie hier, um die Audio-Challenge herunterzuladen",
        audioDownloading: "Audio wird heruntergeladen ...",
        connectionError: "Webdienst konnte nicht erreicht werden. Bitte überprüfen Sie Ihre Internetverbindung und versuchen Sie es erneut",
        captchaRefresh: "Holen Sie sich neue Herausforderung",
        privacy: "Privatsphäre",
        terms: "Nutzungsbedingungen",
        byMT: "Unterstützt von MTCaptcha&trade;"
      }
    },
    miniLang: {
      en: {
        inputPrompt: "captcha",
        loading: "loading",
        reload: "reloading...",
        verifying: "validating...",
        verifyFail: "Please try again..",
        verifySuccess: "Verified Successfully",
        captchaExpired: "Challenge expired, please start again",
        verifyExpired: "Challenge expired, click to refresh",
        emptyCaptcha: "Please complete the challenge",
        incompleteCaptcha: "Characters missing, please complete...",
        audioPlay: "Click to play audio challenge",
        audioPlaying: "Playing audio...",
        continueAudio: "Click to continue audio playback",
        downloadAudio: "Click to download the audio challenge",
        audioDownloading: "Downloading audio...",
        connectionError: "Failed to reach web service, Please check your internet connection and try again",
        miniConnectionError: "Failed to connect to the internet, Please try again",
        captchaRefresh: "Get new challenge",
        privacy: "Privacy",
        terms: "Terms",
        miniByMT: "MTCaptcha&trade;",
        enterTextMsg: "Enter text from Image"
      },
      fr: {
        inputPrompt: "captcha",
        loading: "chargement",
        reload: "rechargement ...",
        verifying: "validation ...",
        verifyFail: "Veuillez réessayer..",
        verifySuccess: "Vérifié avec succès",
        captchaExpired: "Le défi a expiré, veuillez recommencer",
        verifyExpired: "Le défi a expiré, cliquez pour rafraîchir",
        emptyCaptcha: "Veuillez relever le défi",
        incompleteCaptcha: "Caractères manquants, veuillez compléter ...",
        audioPlay: "Cliquez pour lire le défi audio",
        audioPlaying: "Lecture audio ...",
        continueAudio: "Cliquez pour continuer la lecture audio",
        downloadAudio: "Cliquez pour télécharger le défi audio",
        audioDownloading: "Téléchargement audio ...",
        connectionError: "Impossible d&#39;accéder au service Web, veuillez vérifier votre connexion Internet et réessayer",
        miniConnectionError: "Impossible de se connecter à Internet, veuillez réessayer",
        captchaRefresh: "Obtenez un nouveau défi",
        privacy: "Confidentialité",
        terms: "Conditions",
        miniByMT: "MTCaptcha ™",
        enterTextMsg: "Entrez le texte de l&#39;image"
      },
      es: {
        inputPrompt: "captcha",
        loading: "cargando",
        reload: "recargando ...",
        verifying: "validando ...",
        verifyFail: "Inténtalo de nuevo..",
        verifySuccess: "Verificado con éxito",
        captchaExpired: "El desafío expiró, por favor comience nuevamente",
        verifyExpired: "Desafío expirado, haga clic para actualizar",
        emptyCaptcha: "Por favor completa el desafío",
        incompleteCaptcha: "Faltan caracteres, por favor complete ...",
        audioPlay: "Haz clic para reproducir el desafío de audio",
        audioPlaying: "Reproduciendo audio ...",
        continueAudio: "Haga clic para continuar la reproducción de audio.",
        downloadAudio: "Haga clic para descargar el desafío de audio",
        audioDownloading: "Descargando audio ...",
        connectionError: "No se pudo acceder al servicio web. Comprueba tu conexión a Internet y vuelve a intentarlo.",
        miniConnectionError: "No se pudo conectar a Internet. Vuelve a intentarlo.",
        captchaRefresh: "Consigue un nuevo desafío",
        privacy: "Intimidad",
        terms: "Condiciones",
        miniByMT: "MTCaptcha ™",
        enterTextMsg: "Ingrese el texto de la imagen"
      },
      it: {
        inputPrompt: "captcha",
        loading: "Caricamento in corso",
        reload: "ricaricare ...",
        verifying: "convalidare ...",
        verifyFail: "Per favore riprova..",
        verifySuccess: "Verificato con successo",
        captchaExpired: "Sfida scaduta, ricominciare",
        verifyExpired: "Sfida scaduta, fai clic per aggiornare",
        emptyCaptcha: "Per favore completa la sfida",
        incompleteCaptcha: "Caratteri mancanti, per favore completa ...",
        audioPlay: "Fai clic per riprodurre la sfida audio",
        audioPlaying: "Riproduzione audio ...",
        continueAudio: "Fare clic per continuare la riproduzione audio",
        downloadAudio: "Fai clic per scaricare la sfida audio",
        audioDownloading: "Download audio ...",
        connectionError: "Impossibile raggiungere il servizio Web. Verifica la connessione a Internet e riprova",
        miniConnectionError: "Impossibile connettersi a Internet, riprova",
        captchaRefresh: "Ottieni una nuova sfida",
        privacy: "vita privata",
        terms: "condizioni",
        miniByMT: "MTCaptcha ™",
        enterTextMsg: "Inserisci il testo dall&#39;immagine"
      },
      "zh-tw": {
        inputPrompt: "驗證碼",
        loading: "裝貨",
        reload: "正在重新加載...",
        verifying: "證實...",
        verifyFail: "請再試一遍..",
        verifySuccess: "已成功驗證",
        captchaExpired: "挑戰已過期，請重新開始",
        verifyExpired: "挑戰已過期，請單擊刷新",
        emptyCaptcha: "請完成挑戰",
        incompleteCaptcha: "缺少字符，請填寫...",
        audioPlay: "點擊播放音頻挑戰",
        audioPlaying: "播放音頻...",
        continueAudio: "單擊以繼續播放音頻",
        downloadAudio: "點擊下載音頻挑戰",
        audioDownloading: "正在下載音頻...",
        connectionError: "無法訪問網絡服務，請檢查您的互聯網連接，然後重試",
        miniConnectionError: "無法連接到互聯網，請重試",
        captchaRefresh: "迎接新挑戰",
        privacy: "隱私",
        terms: "條款",
        miniByMT: "MTCaptcha™",
        enterTextMsg: "輸入圖片中的文字"
      },
      "zh-hk": {
        inputPrompt: "驗證碼",
        loading: "裝貨",
        reload: "正在重新加載...",
        verifying: "證實...",
        verifyFail: "請再試一遍..",
        verifySuccess: "已成功驗證",
        captchaExpired: "挑戰已過期，請重新開始",
        verifyExpired: "挑戰已過期，請單擊刷新",
        emptyCaptcha: "請完成挑戰",
        incompleteCaptcha: "缺少字符，請填寫...",
        audioPlay: "點擊播放音頻挑戰",
        audioPlaying: "播放音頻...",
        continueAudio: "單擊以繼續播放音頻",
        downloadAudio: "點擊下載音頻挑戰",
        audioDownloading: "正在下載音頻...",
        connectionError: "無法訪問網絡服務，請檢查您的互聯網連接，然後重試",
        miniConnectionError: "無法連接到互聯網，請重試",
        captchaRefresh: "迎接新挑戰",
        privacy: "隱私",
        terms: "條款",
        miniByMT: "MTCaptcha™",
        enterTextMsg: "輸入圖片中的文字"
      },
      zh: {
        inputPrompt: "验证码",
        loading: "装货",
        reload: "正在重新加载...",
        verifying: "证实...",
        verifyFail: "请再试一遍..",
        verifySuccess: "已成功验证",
        captchaExpired: "挑战已过期，请重新开始",
        verifyExpired: "挑战已过期，请单击刷新",
        emptyCaptcha: "请完成挑战",
        incompleteCaptcha: "缺少字符，请填写...",
        audioPlay: "点击播放音频挑战",
        audioPlaying: "播放音频...",
        continueAudio: "单击以继续播放音频",
        downloadAudio: "点击下载音频挑战",
        audioDownloading: "正在下载音频...",
        connectionError: "无法访问网络服务，请检查您的互联网连接，然后重试",
        miniConnectionError: "无法连接到互联网，请重试",
        captchaRefresh: "迎接新挑战",
        privacy: "隐私",
        terms: "条款",
        miniByMT: "MTCaptcha™",
        enterTextMsg: "输入图片中的文字"
      },
      "zh-cn": {
        inputPrompt: "验证码",
        loading: "装货",
        reload: "正在重新加载...",
        verifying: "证实...",
        verifyFail: "请再试一遍..",
        verifySuccess: "已成功验证",
        captchaExpired: "挑战已过期，请重新开始",
        verifyExpired: "挑战已过期，请单击刷新",
        emptyCaptcha: "请完成挑战",
        incompleteCaptcha: "缺少字符，请填写...",
        audioPlay: "点击播放音频挑战",
        audioPlaying: "播放音频...",
        continueAudio: "单击以继续播放音频",
        downloadAudio: "点击下载音频挑战",
        audioDownloading: "正在下载音频...",
        connectionError: "无法访问网络服务，请检查您的互联网连接，然后重试",
        miniConnectionError: "无法连接到互联网，请重试",
        captchaRefresh: "迎接新挑战",
        privacy: "隐私",
        terms: "条款",
        miniByMT: "MTCaptcha™",
        enterTextMsg: "输入图片中的文字"
      },
      nl: {
        inputPrompt: "captcha",
        loading: "bezig met laden",
        reload: "herladen ...",
        verifying: "valideren ...",
        verifyFail: "Probeer het opnieuw ..",
        verifySuccess: "Succesvol geverifieerd",
        captchaExpired: "De uitdaging is verlopen, begin opnieuw",
        verifyExpired: "Uitdaging verlopen, klik om te vernieuwen",
        emptyCaptcha: "Voltooi de uitdaging",
        incompleteCaptcha: "Tekens ontbreken, graag invullen ...",
        audioPlay: "Klik om audio-uitdaging te spelen",
        audioPlaying: "Audio afspelen ...",
        continueAudio: "Klik om door te gaan met afspelen van audio",
        downloadAudio: "Klik om de audio-uitdaging te downloaden",
        audioDownloading: "Audio downloaden ...",
        connectionError: "Kan webservice niet bereiken. Controleer je internetverbinding en probeer het opnieuw",
        miniConnectionError: "Kan geen verbinding maken met internet. Probeer het opnieuw",
        captchaRefresh: "Krijg nieuwe uitdaging",
        privacy: "Privacy",
        terms: "Voorwaarden",
        miniByMT: "MTCaptcha ™",
        enterTextMsg: "Voer tekst uit afbeelding in"
      },
      de: {
        inputPrompt: "captcha",
        loading: "Wird geladen",
        reload: "Neuladen...",
        verifying: "validieren ...",
        verifyFail: "Bitte versuche es erneut..",
        verifySuccess: "Erfolgreich verifiziert",
        captchaExpired: "Herausforderung abgelaufen, bitte neu starten",
        verifyExpired: "Herausforderung abgelaufen, zum Aktualisieren klicken",
        emptyCaptcha: "Bitte vervollständige die Herausforderung",
        incompleteCaptcha: "Zeichen fehlen, bitte ausfüllen ...",
        audioPlay: "Klicken Sie hier, um die Audio-Challenge abzuspielen",
        audioPlaying: "Audio abspielen ...",
        continueAudio: "Klicken Sie, um die Audiowiedergabe fortzusetzen",
        downloadAudio: "Klicken Sie hier, um die Audio-Challenge herunterzuladen",
        audioDownloading: "Audio wird heruntergeladen ...",
        connectionError: "Webdienst konnte nicht erreicht werden. Bitte überprüfen Sie Ihre Internetverbindung und versuchen Sie es erneut",
        miniConnectionError: "Verbindung zum Internet fehlgeschlagen. Bitte versuchen Sie es erneut",
        captchaRefresh: "Holen Sie sich neue Herausforderung",
        privacy: "Privatsphäre",
        terms: "Nutzungsbedingungen",
        miniByMT: "MTCaptcha ™",
        enterTextMsg: "Geben Sie den Text aus dem Bild ein"
      }
    },
    aria: {
      en: {
        default: {
          requireCSS: "",
          privacyLink: "M T Captcha privacy policy.",
          termsLink: "M T Captcha terms and conditions.",
          poweredByLink: "Powered by M T Captcha trademark",
          audioButton: "captcha audio, click to play or pause.",
          image: "captcha image.",
          inputTextForm: "enter text from captcha to verify you are not a bot. use comma key to play or pause captcha audio, use question mark key to get new captcha challenge.",
          statusButton: "get new captcha challenge."
        },
        audioDownloading: {
          audioButton: "audio downloading.",
          inputTextForm: "audio downloading."
        },
        audioPlaying: {},
        loadingNew: {
          audioButton: "loading new captcha.",
          inputTextForm: "loading new captcha.",
          statusButton: "loading new captcha."
        },
        captchaNewlyLoaded: {
          inputTextForm: "new captcha loaded.",
          statusButton: "new captcha loaded."
        },
        challengeIncomplete: {
          inputTextForm: "characters missing, please complete."
        },
        verifyingInput: {
          audioButton: "captcha verifying.",
          inputTextForm: "captcha verifying.",
          statusButton: "captcha verifying."
        },
        validationFailed: {
          audioButton: "verification failed.",
          inputTextForm: "verification failed.",
          statusButton: "verification failed."
        },
        validationSuccess: {
          audioButton: "",
          inputTextForm: "captcha verified successfully.",
          statusButton: "captcha verified successfully."
        },
        tokenTimeOut: {
          audioButton: "verification timed out click to do captcha again.",
          inputTextForm: "verification timed out click to do captcha again.",
          statusButton: "verification timed out click to do captcha again."
        }
      },
      fr: {
        default: {
          requireCSS: "",
          privacyLink: "Politique de confidentialité de M T Captcha.",
          termsLink: "Termes et conditions M T Captcha.",
          poweredByLink: "Propulsé par M T Captcha Trademark",
          audioButton: "captcha audio, cliquez pour lire ou mettre en pause.",
          image: "image captcha.",
          inputTextForm: "entrez le texte de captcha pour vérifier que vous n'êtes pas un bot. utilisez la touche virgule pour lire ou mettre en pause l'audio captcha, utilisez la touche point d'interrogation pour obtenir un nouveau défi Captcha.",
          statusButton: "obtenir un nouveau défi captcha."
        },
        audioDownloading: {
          audioButton: "téléchargement audio.",
          inputTextForm: "téléchargement audio."
        },
        audioPlaying: {},
        loadingNew: {
          audioButton: "chargement du nouveau captcha.",
          inputTextForm: "chargement du nouveau captcha.",
          statusButton: "chargement du nouveau captcha."
        },
        captchaNewlyLoaded: {
          inputTextForm: "nouveau captcha chargé.",
          statusButton: "nouveau captcha chargé."
        },
        challengeIncomplete: {
          inputTextForm: "caractères manquants, veuillez compléter."
        },
        verifyingInput: {
          audioButton: "captcha vérifiant.",
          inputTextForm: "captcha vérifiant.",
          statusButton: "captcha vérifiant."
        },
        validationFailed: {
          audioButton: "échec de la vérification.",
          inputTextForm: "échec de la vérification.",
          statusButton: "échec de la vérification."
        },
        validationSuccess: {
          audioButton: "",
          inputTextForm: "captcha vérifié avec succès.",
          statusButton: "captcha vérifié avec succès."
        },
        tokenTimeOut: {
          audioButton: "la vérification a expiré, cliquez pour refaire captcha.",
          inputTextForm: "la vérification a expiré, cliquez pour refaire captcha.",
          statusButton: "la vérification a expiré, cliquez pour refaire captcha."
        }
      },
      es: {
        default: {
          requireCSS: "",
          privacyLink: "Política de privacidad de M T Captcha.",
          termsLink: "Términos y condiciones de M T Captcha.",
          poweredByLink: "Desarrollado por M T Captcha Marca registrada",
          audioButton: "captcha de audio, haga clic para reproducir o pausar.",
          image: "imagen CAPTCHA.",
          inputTextForm: "Ingresa el texto de captcha para verificar que no eres un bot. use la tecla de coma para reproducir o pausar el audio captcha, use la tecla de signo de interrogación para obtener el nuevo desafío de captcha.",
          statusButton: "Consigue nuevo reto captcha."
        },
        audioDownloading: {
          audioButton: "Descarga de audio.",
          inputTextForm: "Descarga de audio."
        },
        audioPlaying: {},
        loadingNew: {
          audioButton: "Cargando nuevo captcha.",
          inputTextForm: "Cargando nuevo captcha.",
          statusButton: "Cargando nuevo captcha."
        },
        captchaNewlyLoaded: {
          inputTextForm: "nuevo captcha cargado.",
          statusButton: "nuevo captcha cargado."
        },
        challengeIncomplete: {
          inputTextForm: "caracteres que faltan, por favor complete"
        },
        verifyingInput: {
          audioButton: "Verificación de captcha.",
          inputTextForm: "Verificación de captcha.",
          statusButton: "Verificación de captcha."
        },
        validationFailed: {
          audioButton: "Fallo en la verificación.",
          inputTextForm: "Fallo en la verificación.",
          statusButton: "Fallo en la verificación."
        },
        validationSuccess: {
          audioButton: "",
          inputTextForm: "Captcha verificado con éxito.",
          statusButton: "Captcha verificado con éxito."
        },
        tokenTimeOut: {
          audioButton: "verificación agotada en el tiempo haga clic para hacer captcha de nuevo.",
          inputTextForm: "verificación agotada en el tiempo haga clic para hacer captcha de nuevo.",
          statusButton: "verificación agotada en el tiempo haga clic para hacer captcha de nuevo."
        }
      },
      it: {
        default: {
          requireCSS: "",
          privacyLink: "Informativa sulla privacy di M T Captcha.",
          termsLink: "Termini e condizioni M T Captcha.",
          poweredByLink: "Alimentato dal marchio M T Captcha",
          audioButton: "captcha audio, fare clic per riprodurre o mettere in pausa.",
          image: "immagine captcha.",
          inputTextForm: "inserisci il testo da captcha per verificare che non sei un bot. usa il tasto virgola per riprodurre o mettere in pausa l'audio captcha, usa il tasto punto interrogativo per ottenere una nuova sfida captcha.",
          statusButton: "ottieni una nuova sfida captcha."
        },
        audioDownloading: {
          audioButton: "download audio.",
          inputTextForm: "download audio."
        },
        audioPlaying: {},
        loadingNew: {
          audioButton: "caricamento nuovo captcha.",
          inputTextForm: "caricamento nuovo captcha.",
          statusButton: "caricamento nuovo captcha."
        },
        captchaNewlyLoaded: {
          inputTextForm: "nuovo captcha caricato.",
          statusButton: "nuovo captcha caricato."
        },
        challengeIncomplete: {
          inputTextForm: "caratteri mancanti, per favore completa."
        },
        verifyingInput: {
          audioButton: "captcha verifica.",
          inputTextForm: "captcha verifica.",
          statusButton: "captcha verifica."
        },
        validationFailed: {
          audioButton: "verifica fallita.",
          inputTextForm: "verifica fallita.",
          statusButton: "verifica fallita."
        },
        validationSuccess: {
          audioButton: "",
          inputTextForm: "captcha verificato con successo.",
          statusButton: "captcha verificato con successo."
        },
        tokenTimeOut: {
          audioButton: "verifica scaduta per fare di nuovo captcha.",
          inputTextForm: "verifica scaduta per fare di nuovo captcha.",
          statusButton: "verifica scaduta per fare di nuovo captcha."
        }
      },
      "zh-tw": {
        default: {
          requireCSS: "",
          privacyLink: "M T Captcha隱私政策。",
          termsLink: "M T Captcha條款和條件。",
          poweredByLink: "由M T Captcha商標提供支持",
          audioButton: "驗證碼音頻，點擊播放或暫停。",
          image: "驗證碼圖像。",
          inputTextForm: "從驗證碼輸入文本以驗證您不是機器人。使用逗號鍵播放或暫停驗證碼音頻，使用問號鍵獲取新的驗證碼挑戰。",
          statusButton: "獲得新的驗證碼挑戰。"
        },
        audioDownloading: {
          audioButton: "音頻下載。",
          inputTextForm: "音頻下載。"
        },
        audioPlaying: {},
        loadingNew: {
          audioButton: "加載新的驗證碼。",
          inputTextForm: "加載新的驗證碼。",
          statusButton: "加載新的驗證碼。"
        },
        captchaNewlyLoaded: {
          inputTextForm: "新的驗證碼已加載。",
          statusButton: "新的驗證碼已加載。"
        },
        challengeIncomplete: {
          inputTextForm: "字符缺失，請完成。"
        },
        verifyingInput: {
          audioButton: "驗證碼驗證。",
          inputTextForm: "驗證碼驗證。",
          statusButton: "驗證碼驗證。"
        },
        validationFailed: {
          audioButton: "驗證失敗。",
          inputTextForm: "驗證失敗。",
          statusButton: "驗證失敗。"
        },
        validationSuccess: {
          audioButton: "",
          inputTextForm: "驗證碼驗證成功。",
          statusButton: "驗證碼驗證成功。"
        },
        tokenTimeOut: {
          audioButton: "驗證超時點擊再次執行驗證碼。",
          inputTextForm: "驗證超時點擊再次執行驗證碼。",
          statusButton: "驗證超時點擊再次執行驗證碼。"
        }
      },
      "zh-hk": {
        default: {
          requireCSS: "",
          privacyLink: "M T Captcha隱私政策。",
          termsLink: "M T Captcha條款和條件。",
          poweredByLink: "由M T Captcha商標提供支持",
          audioButton: "验证码音频，点击播放或暂停。",
          image: "验证码图像。",
          inputTextForm: "从验证码输入文本以验证您不是机器人。使用逗号键播放或暂停验证码音频，使用问号键获取新的验证码挑战。",
          statusButton: "获得新的验证码挑战。"
        },
        audioDownloading: {
          audioButton: "音频下载。",
          inputTextForm: "音频下载。"
        },
        audioPlaying: {},
        loadingNew: {
          audioButton: "加载新的验证码。",
          inputTextForm: "加载新的验证码。",
          statusButton: "加载新的验证码。"
        },
        captchaNewlyLoaded: {
          inputTextForm: "新的验证码已加载。",
          statusButton: "新的验证码已加载。"
        },
        challengeIncomplete: {
          inputTextForm: "字符缺失，请完成。"
        },
        verifyingInput: {
          audioButton: "验证码验证。",
          inputTextForm: "验证码验证。",
          statusButton: "验证码验证。"
        },
        validationFailed: {
          audioButton: "验证失败。",
          inputTextForm: "验证失败。",
          statusButton: "验证失败。"
        },
        validationSuccess: {
          audioButton: "",
          inputTextForm: "验证码验证成功。",
          statusButton: "验证码验证成功。"
        },
        tokenTimeOut: {
          audioButton: "验证超时点击再次执行验证码。",
          inputTextForm: "验证超时点击再次执行验证码。",
          statusButton: "验证超时点击再次执行验证码。"
        }
      },
      zh: {
        default: {
          requireCSS: "",
          privacyLink: "M T Captcha隐私政策。",
          termsLink: "M T Captcha条款和条件。",
          poweredByLink: "由M T Captcha商标提供支持",
          audioButton: "验证码音频，点击播放或暂停。",
          image: "验证码图像。",
          inputTextForm: "从验证码输入文本以验证您不是机器人。使用逗号键播放或暂停验证码音频，使用问号键获取新的验证码挑战。",
          statusButton: "获得新的验证码挑战。"
        },
        audioDownloading: {
          audioButton: "音频下载。",
          inputTextForm: "音频下载。"
        },
        audioPlaying: {},
        loadingNew: {
          audioButton: "加载新的验证码。",
          inputTextForm: "加载新的验证码。",
          statusButton: "加载新的验证码。"
        },
        captchaNewlyLoaded: {
          inputTextForm: "新的验证码已加载。",
          statusButton: "新的验证码已加载。"
        },
        challengeIncomplete: {
          inputTextForm: "字符缺失，请完成。"
        },
        verifyingInput: {
          audioButton: "验证码验证。",
          inputTextForm: "验证码验证。",
          statusButton: "验证码验证。"
        },
        validationFailed: {
          audioButton: "验证失败。",
          inputTextForm: "验证失败。",
          statusButton: "验证失败。"
        },
        validationSuccess: {
          audioButton: "",
          inputTextForm: "验证码验证成功。",
          statusButton: "验证码验证成功。"
        },
        tokenTimeOut: {
          audioButton: "验证超时点击再次执行验证码。",
          inputTextForm: "验证超时点击再次执行验证码。",
          statusButton: "验证超时点击再次执行验证码。"
        }
      },
      "zh-cn": {
        default: {
          requireCSS: "",
          privacyLink: "M T Captcha隐私政策。",
          termsLink: "M T Captcha条款和条件。",
          poweredByLink: "由M T Captcha商标提供支持",
          audioButton: "验证码音频，点击播放或暂停。",
          image: "验证码图像。",
          inputTextForm: "从验证码输入文本以验证您不是机器人。使用逗号键播放或暂停验证码音频，使用问号键获取新的验证码挑战。",
          statusButton: "获得新的验证码挑战。"
        },
        audioDownloading: {
          audioButton: "音频下载。",
          inputTextForm: "音频下载。"
        },
        audioPlaying: {},
        loadingNew: {
          audioButton: "加载新的验证码。",
          inputTextForm: "加载新的验证码。",
          statusButton: "加载新的验证码。"
        },
        captchaNewlyLoaded: {
          inputTextForm: "新的验证码已加载。",
          statusButton: "新的验证码已加载。"
        },
        challengeIncomplete: {
          inputTextForm: "字符缺失，请完成。"
        },
        verifyingInput: {
          audioButton: "验证码验证。",
          inputTextForm: "验证码验证。",
          statusButton: "验证码验证。"
        },
        validationFailed: {
          audioButton: "验证失败。",
          inputTextForm: "验证失败。",
          statusButton: "验证失败。"
        },
        validationSuccess: {
          audioButton: "",
          inputTextForm: "验证码验证成功。",
          statusButton: "验证码验证成功。"
        },
        tokenTimeOut: {
          audioButton: "验证超时点击再次执行验证码。",
          inputTextForm: "验证超时点击再次执行验证码。",
          statusButton: "验证超时点击再次执行验证码。"
        }
      },
      nl: {
        default: {
          requireCSS: "",
          privacyLink: "M T Captcha privacybeleid.",
          termsLink: "M T Captcha algemene voorwaarden.",
          poweredByLink: "Mogelijk gemaakt door M T Captcha Handelsmerk",
          audioButton: "captcha-audio, klik om af te spelen of te pauzeren.",
          image: "captcha afbeelding.",
          inputTextForm: "voer de tekst van captcha in om te verifiëren dat je geen bot bent. gebruik de komma-toets om captcha-audio af te spelen of te pauzeren, gebruik de vraagtekentoets om een nieuwe captcha-uitdaging te krijgen.",
          statusButton: "krijg nieuwe Captcha-uitdaging."
        },
        audioDownloading: {
          audioButton: "audio downloaden.",
          inputTextForm: "audio downloaden."
        },
        audioPlaying: {},
        loadingNew: {
          audioButton: "nieuwe captcha laden.",
          inputTextForm: "nieuwe captcha laden.",
          statusButton: "nieuwe captcha laden."
        },
        captchaNewlyLoaded: {
          inputTextForm: "nieuwe captcha geladen.",
          statusButton: "nieuwe captcha geladen."
        },
        challengeIncomplete: {
          inputTextForm: "tekens ontbreken, vul alsjeblieft in."
        },
        verifyingInput: {
          audioButton: "captcha-verificatie.",
          inputTextForm: "captcha-verificatie.",
          statusButton: "captcha-verificatie."
        },
        validationFailed: {
          audioButton: "verificatie mislukt.",
          inputTextForm: "verificatie mislukt.",
          statusButton: "verificatie mislukt."
        },
        validationSuccess: {
          audioButton: "",
          inputTextForm: "captcha is geverifieerd.",
          statusButton: "captcha is geverifieerd."
        },
        tokenTimeOut: {
          audioButton: "verificatie timed out klik om opnieuw captcha te doen.",
          inputTextForm: "verificatie timed out klik om opnieuw captcha te doen.",
          statusButton: "verificatie timed out klik om opnieuw captcha te doen."
        }
      },
      de: {
        default: {
          requireCSS: "",
          privacyLink: "M T Captcha Datenschutzerklärung.",
          termsLink: "Allgemeine Geschäftsbedingungen von M T Captcha.",
          poweredByLink: "Powered by M T Captcha Trademark",
          audioButton: "Captcha-Audio, klicken Sie zum Abspielen oder Anhalten.",
          image: "CAPTCHA Bild.",
          inputTextForm: "Geben Sie Text aus dem Captcha ein, um sicherzustellen, dass Sie kein Bot sind. Verwenden Sie die Kommataste, um Captcha-Audio abzuspielen oder anzuhalten. Verwenden Sie die Fragezeichen-Taste, um eine neue Captcha-Abfrage zu erhalten.",
          statusButton: "Neue Captcha-Herausforderung erhalten."
        },
        audioDownloading: {
          audioButton: "Audio herunterladen.",
          inputTextForm: "Audio herunterladen."
        },
        audioPlaying: {},
        loadingNew: {
          audioButton: "lade neues captcha.",
          inputTextForm: "lade neues captcha.",
          statusButton: "lade neues captcha."
        },
        captchaNewlyLoaded: {
          inputTextForm: "Neues Captcha geladen.",
          statusButton: "Neues Captcha geladen."
        },
        challengeIncomplete: {
          inputTextForm: "Zeichen fehlen, bitte ausfüllen."
        },
        verifyingInput: {
          audioButton: "Captcha-Überprüfung.",
          inputTextForm: "Captcha-Überprüfung.",
          statusButton: "Captcha-Überprüfung."
        },
        validationFailed: {
          audioButton: "Verifizierung fehlgeschlagen.",
          inputTextForm: "Verifizierung fehlgeschlagen.",
          statusButton: "Verifizierung fehlgeschlagen."
        },
        validationSuccess: {
          audioButton: "",
          inputTextForm: "captcha erfolgreich verifiziert.",
          statusButton: "captcha erfolgreich verifiziert."
        },
        tokenTimeOut: {
          audioButton: "Zeitüberschreitung der Überprüfung Klicken Sie, um das Captcha erneut zu erstellen.",
          inputTextForm: "Zeitüberschreitung der Überprüfung Klicken Sie, um das Captcha erneut zu erstellen.",
          statusButton: "Zeitüberschreitung der Überprüfung Klicken Sie, um das Captcha erneut zu erstellen."
        }
      }
    }
  };
  function f3(p6, p7) {
    var v29 = [p6, p7];
    var v30 = v29.reduce(function (p8, p9) {
      Object.keys(p9).forEach(function (p10) {
        p8[p10] = p9[p10];
      });
      return p8;
    }, {});
    return v30;
  }
  if (typeof mtlang !== "undefined") {
    v3.messages.lang = f3(v3.messages.lang, mtlang.lang);
    v3.messages.miniLang = f3(v3.messages.miniLang, mtlang.miniLang);
    v3.messages.aria = f3(v3.messages.aria, mtlang.aria);
  }
  if (window.addEventListener) {
    v6 = window.addEventListener;
  } else if (window.attachEvent) {
    v6 = window.attachEvent;
  }
  if (!Date.now) {
    Date.now = function () {
      return new Date().getTime();
    };
  }
  if (!document.getElementsByClassName) {
    var v31 = [].indexOf || function (p11) {
      for (var v32 = 0; v32 < this.length; v32++) {
        if (this[v32] === p11) {
          return v32;
        }
      }
      return -1;
    };
    function f4(p12, p13) {
      var v33 = document.querySelectorAll ? p13.querySelectorAll("." + p12) : function () {
        var v34 = p13.getElementsByTagName("*");
        var v35 = [];
        var v36 = 0;
        for (; v36 < v34.length; v36++) {
          if (v34[v36].className && (" " + v34[v36].className + " ").indexOf(" " + p12 + " ") > -1 && v31.call(v35, v34[v36]) === -1) {
            v35.push(v34[v36]);
          }
        }
        return v35;
      }();
      return v33;
    }
    document.getElementsByClassName = function (p14) {
      return f4(p14, document);
    };
    if (Element) {
      Element.prototype.getElementsByClassName = function (p15) {
        return f4(p15, this);
      };
    }
  }
  if (!Object.keys) {
    Object.keys = function (p16) {
      var v37 = [];
      for (var v38 in p16) {
        if (p16.hasOwnProperty(v38)) {
          v37.push(v38);
        }
      }
      return v37;
    };
  }
  v3.util = {
    setUserInputWidgetSize: function (p17, p18, p19, p20) {
      var v39 = p17.miniFormWidth || p19;
      var v40 = p17.miniFormHeight || p20;
      var v41 = v39 - v3.util.getBorderOfCaptcha(p18);
      var vV40 = v40;
      vV40 = this.enforceMinMax(vV40, v3.constant.minMiniHeight, v3.constant.maxMiniHeight);
      v41 = this.enforceMinMax(v41, v3.constant.minMiniWidth, v3.constant.maxMiniWidth);
      vV40 -= 2;
      var vVV40 = vV40;
      var vVV402 = vV40;
      var v42 = -1;
      var v43 = v41 * 0.6 - vVV40;
      var vVV403 = vV40;
      var v44 = -1;
      v43 = this.enforceMinMax(v43, v3.config.miniDefaults.minCaptchaWidth, v3.config.miniDefaults.maxCaptchaWidth);
      var v45 = v41 - vVV40 - v43;
      var vVV404 = vV40;
      var v46 = -1;
      if (v45 < v3.constant.minTextFieldWidth) {
        var v47 = v3.constant.minTextFieldWidth - v45;
        v45 = v3.constant.minTextFieldWidth;
        vVV40 -= v47;
      }
      if (p18.audioControl != null) {
        var v48 = p18.audioControl.scrollWidth;
        var v49 = v45 - Math.floor(v48 / 2) - 4;
        var v50 = 1;
        this.setCSSLeftTopWidthHeight(p18.audioControl, v49, v50 - 1, null, null);
      }
      v44 = v45;
      v42 = v45 + v43 - 1;
      this.setCSSLeftTopWidthHeight(p18.main, null, null, v41, vV40);
      this.setCSSLeftTopWidthHeight(p18.card, null, null, v41, vV40);
      this.setCSSLeftTopWidthHeight(p18.inputbox, v46, -1, v45, vVV404);
      this.setCSSLeftTopWidthHeight(p18.imageContainer, v44, -1, v43 - 2, vVV403);
      this.setCSSLeftTopWidthHeight(p18.stsBox, v42, -1, vVV40, vVV402);
      this.setCSSLeftTopWidthHeight(p18.msgContainer, null, null, v41, null);
      p17.widgetWidth = v41;
      p17.widgetHeight = vV40;
      var v51 = v45 < 112 ? "smaller" : "medium";
      p18.inputText.style.fontSize = v51;
    },
    convertTimeHexToNumber: function (p21) {
      if (p21) {
        var v52 = p21.substring(1);
        var vParseInt = parseInt(v52, 16);
        var v53 = (vParseInt * 47 + 11) % 256 * 100;
        return v53;
      } else {
        return 0;
      }
    },
    getColorFromBorder: function (p22) {
      return p22.slice(p22.search("#"));
    },
    getBorderOfCaptcha: function (p23) {
      if (p23.card.style.border) {
        return p23.card.offsetWidth - p23.card.clientWidth;
      } else {
        return 2;
      }
    },
    addEvent: function (p24, p25, p26) {
      if (p24 == null || typeof p24 == "undefined") {
        return;
      }
      if (p24.addEventListener) {
        p24.addEventListener(p25, p26, false);
      } else if (p24.attachEvent) {
        p24.attachEvent("on" + p25, p26);
      } else {
        p24["on" + p25] = p26;
      }
    },
    enforceMinMax: function (p27, p28, p29) {
      if (p27 < p28) {
        return p28;
      }
      if (p27 > p29) {
        return p29;
      }
      return p27;
    },
    setCSSLeftTopWidthHeight: function (p30, p31, p32, p33, p34) {
      if (typeof p31 === "number") {
        p30.style.left = p31 + "px";
      }
      if (typeof p32 === "number") {
        p30.style.top = p32 + "px";
      }
      if (typeof p33 === "number") {
        p30.style.width = p33 + "px";
      }
      if (typeof p34 === "number") {
        p30.style.height = p34 + "px";
      }
    },
    validateMinMaxValue: function (p35) {
      if (p35 < v3.config.miniDefaults.minCaptchaWidth) {
        return v3.config.miniDefaults.minCaptchaWidth;
      }
      if (p35 > v3.config.miniDefaults.maxCaptchaWidth) {
        return v3.config.miniDefaults.maxCaptchaWidth;
      }
      return p35;
    },
    setObject: function (p36) {
      v4[p36.widgetInstance] = this.assign(p36);
    },
    isBolean: function (p37) {
      return typeof p37 === "boolean";
    },
    isObject: function (p38) {
      return typeof p38 === "object";
    },
    isString: function (p39) {
      return typeof p39 === "string";
    },
    isArray: function (p40) {
      return Object.prototype.toString.call(p40) === "[object Array]";
    },
    canSolveChallenge: function () {
      var v54 = v3.UI.e[v346.widgetInstance].inputText;
      return v54.value.length >= v346.anslen && v54.value != v54.getAttribute("placeholder") && v346.sCode != v3.status.code.general.CAP_EXPIRED && v346.isVerifying !== true;
    },
    removePlaceholderText: function () {
      var v55 = v3.UI.e[v346.widgetInstance].inputText;
      if (typeof v7 !== "undefined" && v7 !== "" && v55.value === v55.getAttribute("placeholder")) {
        v55.value = "";
      }
    },
    getFixPositionOfDom: function (p41) {
      var v56 = p41.getBoundingClientRect();
      var v57 = window.pageXOffset || document.documentElement.scrollLeft;
      var v58 = window.pageYOffset || document.documentElement.scrollTop;
      return {
        top: v56.top + v58,
        left: v56.left + v57
      };
    },
    updateErrorCardHeight: function (p42) {
      var v59 = p42.card.scrollHeight;
      var v60 = v3.util.getFixPositionOfDom(p42.card);
      var v61 = p42.errCard.scrollHeight;
      if (v59 < v61) {
        p42.card.style.height = v61;
        v3.util.widgetHeightChange(v346);
      }
      var v62 = (p42.card.offsetHeight - p42.card.clientHeight) / 2;
      p42.errCard.style.top = v60.top + v62 + 2 + "px";
    },
    detectAutoplaySupport: function () {
      if (typeof v346 !== "undefined" && v346.challengeType !== "undefined" && v346.challengeType == "imageonly") {
        return;
      }
      var v63 = new Audio();
      v63.src = v3.asserts.audio;
      v63.autoplay = true;
      v63.volume = 0;
      v63.id = "testAudio";
      document.getElementsByTagName("body")[0].appendChild(v63);
      var v64 = document.getElementById("testAudio");
      setTimeout(function () {
        if (!v64.paused) {
          v3.autoPlay = true;
        }
        document.getElementsByTagName("body")[0].removeChild(v63);
      }, 100);
    },
    addEvent: function (p43, p44, p45) {
      if (p44 instanceof Array) {
        for (var v65 = 0; v65 < p44.length; v65++) {
          if (p43.addEventListener) {
            p43.addEventListener(p44[v65], p45);
          } else if (p43.attachEvent) {
            p43.attachEvent(p44[v65], p45);
          }
        }
      } else if (p43.addEventListener) {
        p43.addEventListener(p44, p45);
      } else if (p43.attachEvent) {
        p43.attachEvent(p44, p45);
      }
    },
    getIEVersion: function () {
      var v66 = !!window.ActiveXObject && +/msie\s(\d+)/i.exec(navigator.userAgent)[1] || NaN;
      if (v66 === 8) {
        return "ie8";
      } else if (v66 === 9) {
        return "ie9";
      }
    },
    getRGBAtoRGB: function (p46) {
      var v67 = Math.round((1 - p46[3]) * 255 + p46[3] * p46[0]);
      var v68 = Math.round((1 - p46[3]) * 255 + p46[3] * p46[1]);
      var v69 = Math.round((1 - p46[3]) * 255 + p46[3] * p46[2]);
      return "rgb(" + v67 + "," + v68 + "," + v69 + ")";
    },
    getColor: function (p47) {
      if (typeof v7 !== "undefined" && v7 === "ie8") {
        var v70 = p47.split(",");
        for (var v71 = 0; v71 < v70.length; v71++) {
          v70[v71] = Number(v70[v71]);
        }
        return v3.util.getRGBAtoRGB(v70);
      } else {
        return "rgba(" + p47 + ")";
      }
    },
    getObject: function (p48) {
      if (v4[p48] !== undefined) {
        return v4[p48];
      }
    },
    IsJsonString: function (p49) {
      try {
        JSON.parse(p49);
      } catch (_0x2f9a9b) {
        return false;
      }
      return true;
    },
    confExtractorFrmURI: function () {
      var v72 = {};
      var v73 = document.location.href.replace(/^[^\?]+\??/, "");
      var v74 = v73.split("&");
      for (var v75 = 0; v75 < v74.length; v75++) {
        var v76 = v74[v75].split("=");
        v72[v76[0]] = decodeURIComponent(v76[1]);
      }
      return v72;
    },
    assign: function (p50) {
      var v77 = JSON.parse(JSON.stringify(p50, function (p51, p52) {
        if (typeof p52 === "function") {
          return p52.toString();
        } else {
          return p52;
        }
      }));
      for (var v78 in v77) {
        if (typeof v77[v78] == "string" && v77[v78].indexOf("function") >= 0) {
          v77[v78] = new Function("return (" + v77[v78] + ")")();
        }
      }
      return v77;
    },
    constructURI: function (p53, p54) {
      var v79 = "";
      var v80 = v3.api.request.getAPIURL(p54);
      for (var v81 in p53) {
        var v82 = p53[v81];
        v79 += encodeURIComponent(v81) + "=" + encodeURIComponent(v82) + "&";
      }
      if (v79.length > 0) {
        v79 = v79.substring(0, v79.length - 1);
        return v80 + "?" + v79;
      } else {
        return v80;
      }
    },
    generateSessionGUID: function () {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (p55) {
        var v83 = Math.random() * 16 | 0;
        var v84 = p55 === "x" ? v83 : v83 & 3 | 8;
        return v84.toString(16);
      });
    },
    overlayConf: function (p56, p57) {
      for (var v85 in p56) {
        if (typeof p57[v85] === "undefined") {
          continue;
        } else if (typeof p56[v85] === typeof p57[v85]) {
          p56[v85] = p57[v85];
        }
      }
      return p56;
    },
    clearAnimation: function (p58) {
      p58.style["-webkit-animation"] = "";
      p58.style["-moz-animation"] = "";
      p58.style["-o-animation"] = "";
      p58.style.animation = "";
    },
    doAnimation: function (p59, p60) {
      this.clearAnimation(p59);
      setTimeout(function () {
        p59.style["-webkit-animation"] = p60;
        p59.style["-moz-animation"] = p60;
        p59.style["-o-animation"] = p60;
        p59.style.animation = p60;
      }, 20);
    },
    isMiniWidget: function (p61) {
      if (p61.widgetSize === v3.constant.mini) {
        true;
      } else {
        false;
      }
    },
    widgetHeightChange: function (p62) {
      var v86 = document.getElementById("mtcap-main-" + p62.counter).scrollHeight + "px";
      if (v9 !== v86) {
        v9 = v86;
        v3.postMessage(p62, "widgetheightchange", {
          h: v86,
          msg: "Captcha rendered"
        });
      }
    },
    isAudioPlay: function (p63) {
      if (p63.prevStatusMsg === p63.langTxt.audioPlay) {
        return true;
      } else {
        return false;
      }
    },
    isAudioPlaying: function (p64) {
      if (p64.prevStatusMsg === p64.langTxt.audioPlaying) {
        return true;
      } else {
        return false;
      }
    },
    isAudioContinue: function (p65) {
      if (p65.prevStatusMsg === p65.langTxt.continueAudio) {
        return true;
      } else {
        return false;
      }
    },
    showTouchRippleAtPos: function (p66, p67, p68) {
      var v87 = p66 + "::" + p67;
      var v88 = Date.now();
      if (v88 - v12 < 650 && v87 === v8) {
        return;
      }
      v12 = v88;
      var v89 = document.getElementById("mtcap-ripple-" + p68.counter);
      v8 = v87;
      v89.style.left = p66 + "px";
      v89.style.top = p67 + "px";
      v3.util.doAnimation(v89, "mt-ripple-kf 0.6s linear");
    },
    updateAriaMessageState: function (p69) {
      var v90 = v3.status.code;
      var v91 = v3.UI.e[v346.widgetInstance];
      switch (p69) {
        case v90.internal.CAPTCHA_LOADED:
          this.updateAriaMessage(v91.privacyLink, v346.ariaTxt.default.privacyLink, true, true);
          this.updateAriaMessage(v91.termsLink, v346.ariaTxt.default.termsLink, true, true);
          this.updateAriaMessage(v91.ariaAudio, v346.ariaTxt.default.audioButton, false, true);
          this.updateAriaMessage(v91.imageContainer, v346.ariaTxt.default.image, true, true);
          this.updateAriaMessage(v91.noCssImage, v346.ariaTxt.default.image, true, true);
          this.updateAriaMessage(v91.ariaInput, v346.ariaTxt.default.inputTextForm, false, false);
          this.updateAriaMessage(v91.ariaStatus, v346.ariaTxt.default.statusButton, false, false);
          this.updateAriaMessage(v91.ariaCaptchaStatus, "", false, false);
          break;
        case v90.internal.AUDIO_DOWNLOADING:
          break;
        case v90.internal.AUDIO_PLAYING:
          break;
        case v90.internal.LOADING_NEW:
          break;
        case v90.internal.RELOADING_NEW:
          this.updateAriaMessage(v91.ariaCaptchaStatus, v346.ariaTxt.loadingNew.statusButton, false, false);
          break;
        case v90.internal.CAPTCHA_NEWLY_LOADED:
          this.updateAriaMessage(v91.ariaCaptchaStatus, v346.ariaTxt.captchaNewlyLoaded.statusButton, false, false);
          break;
        case v90.internal.CAPTCHA_SOLUTION_INCOMPLETE:
          this.updateAriaMessage(v91.ariaCaptchaStatus, v346.ariaTxt.challengeIncomplete.inputTextForm, false, false);
          break;
        case v90.internal.VERIFIYING_INPUT:
          this.updateAriaMessage(v91.ariaCaptchaStatus, v346.ariaTxt.verifyingInput.statusButton, false, false);
          break;
        case v90.internal.VALIDATION_FAILED:
          this.updateAriaMessage(v91.ariaCaptchaStatus, v346.ariaTxt.validationFailed.statusButton, false, false);
          break;
        case v90.internal.VALIDATION_SUCCESS:
          this.updateAriaMessage(v91.ariaInput, v346.ariaTxt.validationSuccess.inputTextForm, false, true);
          this.updateAriaMessage(v91.ariaStatus, v346.ariaTxt.validationSuccess.statusButton, false, true);
          this.updateAriaMessage(v91.ariaCaptchaStatus, v346.ariaTxt.validationSuccess.statusButton, false);
          break;
        case v90.internal.TOKEN_TIMEOUT:
          this.updateAriaMessage(v91.ariaAudio, v346.ariaTxt.tokenTimeOut.audioButton, false, false);
          this.updateAriaMessage(v91.inputText, v346.ariaTxt.tokenTimeOut.inputTextForm, true, false);
          this.updateAriaMessage(v91.ariaStatus, v346.ariaTxt.tokenTimeOut.statusButton, false, false);
          this.updateAriaMessage(v91.ariaCaptchaStatus, v346.ariaTxt.tokenTimeOut.statusButton, false, false);
          break;
        case v90.internal.ERROR:
          this.updateAriaMessage(v91.privacyLink, v346.ariaTxt.default.privacyLink, true, true);
          this.updateAriaMessage(v91.termsLink, v346.ariaTxt.default.termsLink, true, true);
          this.updateAriaMessage(v91.ariaAudio, "", false, true);
          this.updateAriaMessage(v91.imageContainer, "", true, true);
          this.updateAriaMessage(v91.noCssImage, "", true, true);
          this.updateAriaMessage(v91.inputText, "", true, true);
          this.updateAriaMessage(v91.ariaStatus, "", false, true);
          this.updateAriaMessage(v91.ariaCaptchaStatus, "", false, true);
          break;
      }
    },
    updateAriaMessage: function (p70, p71, p72, p73) {
      if (!p70 || p71 === undefined && p71 === null) {
        return;
      }
      if (p72) {
        if (p70.getAttribute("aria-label") !== p71) {
          if (new Date().getTime() - v27 < 2100 && !p73) {
            v28 += 1000;
          } else {
            v28 = 0;
          }
          setTimeout(function () {
            p70.setAttribute("aria-label", p71);
          }, v28);
          v27 = new Date().getTime();
        }
      } else if (p70.innerHTML !== p71) {
        if (new Date().getTime() - v27 < 2100 && !p73) {
          v28 += 1000;
        } else {
          v28 = 0;
        }
        setTimeout(function () {
          p70.innerHTML = p71;
        }, v28);
        v27 = new Date().getTime();
      }
    },
    updateUI: function (p74) {
      var v92 = v3.status.code;
      var v93 = v3.UI.e[v346.widgetInstance];
      var v94 = v3.UI.events;
      switch (p74) {
        case v92.internal.CAPTCHA_LOADED:
          break;
        case v92.internal.AUDIO_DOWNLOADING:
          v94.audio.update(4);
          break;
        case v92.internal.AUDIO_PLAYING:
          v93.audio.style.color = v3.style.iconColors.audiofocus;
          break;
        case v92.internal.LOADING_NEW:
          if (v346.widgetSize === v3.constant.mini) {
            v93.main.style.maxWidth = v3.constant.maxMiniWidth;
          }
          break;
        case v92.internal.RELOADING_NEW:
          v94.status.toggleImg(v346, 4);
          v93.inputText.value = "";
          v94.status.rotateImg(true);
          if (v346.challengeType !== "imageonly") {
            if (v346.widgetSize === v3.constant.standard) {
              v93.audio.style.color = v3.style.iconColors.audio;
            } else {
              v93.audio.style.color = v3.style.miniIconColors.audio;
            }
          }
          v3.widget.disable(v346.widgetInstance, true);
          if (v346.challengeType !== "imageonly" && v94.audio.status === 1) {
            if (v346.widgetSize === v3.constant.standard) {
              v93.audio.style.color = v3.style.iconColors.audio;
            } else {
              v93.audio.style.color = v3.style.miniIconColors.audio;
            }
            v93.audioContainer.pause();
            v94.audio.status = 0;
          }
          break;
        case v92.internal.CAPTCHA_SOLUTION_INCOMPLETE:
          v94.status.showIncomplete(v346);
          break;
        case v92.internal.VERIFIYING_INPUT:
          v94.status.showStatusMsg(v346, 1, v346.langTxt.verifying);
          v94.status.toggleImg(v346, 1);
          v94.status.rotateImg(true);
          break;
        case v92.internal.VALIDATION_FAILED:
          if (v346.challengeType !== "imageonly") {
            v94.audio.toggleImg(v346, false, 0);
          }
          v94.status.showStatusMsg(v346, 2, v346.langTxt.verifyFail);
          v94.status.toggleImg(v346, 3);
          v3.widget.disable(v346.widgetInstance, true);
          break;
        case v92.internal.VALIDATION_SUCCESS:
          v94.status.toggleImg(v346, 2);
          v94.status.showStatusMsg(v346, 1, v346.langTxt.verifySuccess);
          v3.widget.disable(v346.widgetInstance, true);
          setTimeout(function () {
            v3.UI.e[v346.widgetInstance].inputText.blur();
          }, 3000);
          break;
        case v92.internal.TOKEN_TIMEOUT:
          v3.widget.userReset(v346, v346.langTxt.verifyExpired);
          break;
        case v92.internal.ERROR:
          if (!v346.widgetEnabled) {
            v3.UI.renderCaptcha(v346);
            v3.util.widgetHeightChange(v346);
          }
          v93 = v3.UI.e[v346.widgetInstance];
          if (v346.widgetSize === v3.constant.standard) {
            v93.errCard.style.display = "block";
            v93.errCard.style.zIndex = "5";
            v93.stsBtn.style.position = "absolute";
            v3.util.widgetHeightChange(v346);
          }
          v3.widget.disable(v346.widgetInstance, true);
          v94.status.showStatusMsg(v346, 0);
          v94.status.rotateImg(false);
          break;
      }
    },
    canShowText: function (p75, p76, p77, p78) {
      return p75 || p76 || p77;
    },
    canHideText: function (p79, p80, p81, p82) {
      return !p79 && !p80 && p81 && !p82;
    }
  };
  v3.theme = {
    overcast: {
      cardColor: "#F5F5F5",
      cardShadowColor: v3.util.getColor("0,0,0,0.13"),
      cardBorder: "1px solid white",
      inputBackgroundColor: "#F8F8F8"
    },
    neowhite: {
      inputTextColor: "#444444",
      placeHolderColor: "#999999",
      msgTextColor: "#777777",
      invalidMsgTextColor: "#F74E39",
      inputBorderColor: {
        byDefault: "white",
        hover: "white",
        active: "white"
      }
    },
    goldbezel: {
      cardBorder: "3px solid #DDCCAA",
      inputBorderColor: {
        byDefault: "#CCBBAA",
        hover: "#AA9988",
        active: "#AA9988"
      },
      buttonIconColor: {
        audio: "#333333",
        audiofocus: "#AA9988"
      }
    },
    blackmoon: {
      cardColor: "#393C44",
      cardShadowColor: v3.util.getColor("0,0,0,0.07"),
      cardBorder: "1px solid #30333C",
      inputTextColor: "#DDDDDD",
      placeHolderColor: "#BBBBBB",
      msgTextColor: "#222222",
      invalidMsgTextColor: "#FF7500",
      inputBorderColor: {
        byDefault: "#999999",
        hover: "#BABABA",
        active: "#BBAA99"
      },
      inputBackgroundColor: v3.util.getColor("255,255,255,0.1"),
      buttonIconColor: {
        refresh: "#DDDDDD",
        verify: "#55CAF1",
        audio: "#DDDDDD",
        audiofocus: "#FFFFFF"
      }
    },
    darkruby: {
      cardColor: "#33383B",
      inputTextColor: "#33383B",
      placeHolderColor: "#90060B",
      inputBorderColor: {
        byDefault: "#773333",
        hover: "#222222",
        active: "#222222"
      },
      inputBackgroundColor: "#E7362B",
      buttonIconColor: {
        verify: "#65DAF1",
        fail: "#FFBBBB",
        audio: "#E7362B",
        audiofocus: "#ff5555"
      }
    },
    touchoforange: {
      cardColor: "#F5F5F5",
      cardBorder: "#9EA1A0",
      inputTextColor: "#F87800",
      placeHolderColor: "#F89300",
      inputBorderColor: {
        byDefault: "#F89300",
        hover: "#F07000",
        active: "#F07000"
      },
      buttonIconColor: {
        audio: "#F89300",
        audiofocus: "#F07000"
      },
      inputBackgroundColor: "#FAFAFA"
    },
    caribbean: {
      cardColor: "#C8E8F1",
      cardShadowColor: v3.util.getColor("0,0,0,0.13"),
      cardBorder: "#9B9CA2",
      inputTextColor: "#333333",
      placeHolderColor: "#767676",
      inputBorderColor: {
        byDefault: "#7B7C82",
        hover: "#3B3C42",
        active: "#3B3C42"
      },
      inputBackgroundColor: "#F0F7F7"
    },
    woodyallen: {
      cardColor: "#D1C9CA",
      cardShadowColor: v3.util.getColor("0,0,0,0.13"),
      cardBorder: "#9B9CA2",
      inputTextColor: "#333333",
      placeHolderColor: "#767676",
      inputBorderColor: {
        byDefault: "#7B7C82",
        hover: "#3B3C42",
        active: "#3B3C42"
      },
      inputBackgroundColor: v3.util.getColor("245,255,255,0.6"),
      buttonIconColor: {
        audio: "#000000",
        audiofocus: "#335500"
      }
    },
    chrome: {
      cardBGGradient: "-15deg,#FCFCFC, #FCFCFC 27%, #C0C0C0",
      buttonIconColor: {
        audio: "#000000",
        audiofocus: "#555555"
      }
    },
    highcontrast: {
      inputTextColor: "#222222",
      placeHolderColor: "#404040",
      msgTextColor: "#404040",
      invalidMsgTextColor: "#FF0000",
      cardShadowColor: v3.util.getColor("0,0,0,0.3")
    }
  };
  v3.miniTheme = {
    overcast: {
      cardColor: "#F5F5F5",
      cardBorder: "1px solid #DDDDDD",
      cardBorderRadius: 0,
      cardShadowColor: "",
      inputBackgroundColor: "#F5F5F5",
      inputBorderColor: {
        byDefault: "#DDDDDD",
        hover: "#26A0DA",
        active: "#26A0DA"
      }
    },
    neowhite: {
      inputTextColor: "#444444",
      cardBorder: "1px solid #E0E0E0",
      cardBorderRadius: 0,
      cardShadowColor: "",
      placeHolderColor: "#999999",
      msgTextColor: "#777777",
      invalidMsgTextColor: "#F74E39",
      inputBorderColor: {
        byDefault: "#E0E0E0",
        hover: "#B8B8B8",
        active: "#B8B8B8"
      }
    },
    goldbezel: {
      cardBorder: "3px solid #DDCCAA",
      cardBorderRadius: 0,
      cardShadowColor: "",
      inputBorderColor: {
        byDefault: "#DDCCAA",
        hover: "#AA9988",
        active: "#AA9988"
      },
      buttonIconColor: {
        refresh: "#757575",
        audio: "#757575",
        audiofocus: "#AA9988"
      }
    },
    blackmoon: {
      cardColor: "#393C44",
      cardBorder: "2px solid #41454E",
      cardBorderRadius: 0,
      cardShadowColor: "",
      inputTextColor: "#DDDDDD",
      placeHolderColor: "#BBBBBB",
      msgTextColor: "#222222",
      invalidMsgTextColor: "#FF7500",
      inputBorderColor: {
        byDefault: "#41454E",
        hover: "#BABABA",
        active: "#BABABA"
      },
      inputBackgroundColor: "#393C44",
      buttonIconColor: {
        refresh: "#DDDDDD",
        verify: "#55CAF1",
        audio: "#DDDDDD",
        audiofocus: "#FFFFFF"
      }
    },
    darkruby: {
      cardColor: "#E7362B",
      cardBorder: "1px solid #33383B",
      cardBorderRadius: 0,
      cardShadowColor: "",
      inputTextColor: "#33383B",
      placeHolderColor: "#90060B",
      inputBorderColor: {
        byDefault: "#33383B",
        hover: "#AD2920",
        active: "#AD2920"
      },
      inputBackgroundColor: "#E7362B",
      buttonIconColor: {
        refresh: "#3A4044",
        verify: "#65DAF1",
        fail: "#FFBBBB",
        audio: "#3A4044",
        audiofocus: "#DDDDDD"
      }
    },
    touchoforange: {
      cardColor: "#F5F5F5",
      cardBorder: "1px solid #F89300",
      cardBorderRadius: 0,
      cardShadowColor: "",
      inputTextColor: "#F87800",
      placeHolderColor: "#F89300",
      inputBorderColor: {
        byDefault: "#F89300",
        hover: "#F07000",
        active: "#F07000"
      },
      buttonIconColor: {
        refresh: "#F89300",
        audio: "#F89300",
        audiofocus: "#F07000",
        fail: "#FFBBBB",
        verify: "#65DAF1"
      },
      inputBackgroundColor: "#F5F5F5"
    },
    caribbean: {
      cardColor: "#C8E8F1",
      cardBorder: "1px solid #9B9CA2",
      cardBorderRadius: 0,
      cardShadowColor: "",
      inputTextColor: "#333333",
      placeHolderColor: "#767676",
      inputBorderColor: {
        byDefault: "#9B9CA2",
        hover: "#3B3C42",
        active: "#3B3C42"
      },
      inputBackgroundColor: "#C8E8F1"
    },
    woodyallen: {
      cardColor: "#D1C9CA",
      cardBorder: "1px solid #9B9CA2",
      cardBorderRadius: 0,
      cardShadowColor: "",
      inputTextColor: "#333333",
      placeHolderColor: "#767676",
      inputBorderColor: {
        byDefault: "#9B9CA2",
        hover: "#3B3C42",
        active: "#3B3C42"
      },
      inputBackgroundColor: "#D1C9CA",
      buttonIconColor: {
        refresh: "#000000",
        audio: "#000000",
        audiofocus: "#335500",
        fail: "#FF3200",
        verify: "#35AAD1"
      }
    },
    highcontrast: {
      inputTextColor: "#222222",
      cardBorder: "1px solid #888888",
      cardBorderRadius: 0,
      cardShadowColor: "",
      placeHolderColor: "#404040",
      msgTextColor: "#404040",
      invalidMsgTextColor: "#FF0000",
      buttonIconColor: {
        refresh: "#333333",
        audio: "#333333",
        audiofocus: "#26A0DA"
      },
      inputBorderColor: {
        byDefault: "#888888",
        hover: "#26A0DA",
        active: "#26A0DA"
      }
    }
  };
  v3.style = {
    defaults: {
      showCard: true,
      cardColor: "#FFFFFF",
      cardShadowColor: v3.util.getColor("0,0,0,0.16"),
      cardBorder: v3.util.getColor("0,0,0,0.12"),
      inputTextColor: "#555555",
      inputTextFont: "'Verdana', 'Arial', 'Helvetica', 'sans-serif'",
      placeHolderColor: "#999999",
      msgTextColor: "#888888",
      invalidMsgTextColor: "#FF0000",
      msgTextFont: "'Verdana', 'Arial', 'Helvetica', 'sans-serif'",
      inputBackgroundColor: "#FFFFFF",
      inputBorderColor: {
        byDefault: "#888888",
        hover: "#26A0DA",
        active: "#000000"
      },
      buttonIconColor: {
        refresh: "#333333",
        verify: "#35AAD1",
        success: "#00EE00",
        fail: "#FF3200",
        audio: "#333333",
        audiofocus: "#26A0DA"
      }
    },
    miniDefaults: {
      showCard: true,
      cardColor: "#FFFFFF",
      cardBorder: "1px solid #888888",
      cardBorderRadius: 0,
      cardShadowColor: "",
      inputTextColor: "#555555",
      inputTextFont: "'Verdana', 'Arial', 'Helvetica', 'sans-serif'",
      placeHolderColor: "#999999",
      msgTextColor: "#888888",
      invalidMsgTextColor: "#FF0000",
      msgTextFont: "'Verdana', 'Arial', 'Helvetica', 'sans-serif'",
      inputBackgroundColor: "#FFFFFF",
      inputBorderColor: {
        byDefault: "#888888",
        hover: "#26A0DA",
        active: "#000000"
      },
      buttonIconColor: {
        refresh: "#757575",
        verify: "#35AAD1",
        success: "#00EE00",
        fail: "#FF3200",
        audio: "#757575",
        audiofocus: "#26A0DA"
      }
    },
    iconColors: {
      refresh: "#333333",
      verify: "#35AAD1",
      success: "#00EE00",
      fail: "#FF3200",
      audio: "#333333",
      audiofocus: "#26A0DA"
    },
    miniIconColors: {
      refresh: "#757575",
      verify: "#35AAD1",
      success: "#00EE00",
      fail: "#FF3200",
      audio: "#757575",
      audiofocus: "#26A0DA"
    },
    validateCustomCSSConf: function (p83) {
      if (v3.util.isObject(p83.customStyle)) {
        var v95 = "";
        var v96 = false;
        for (var v97 = 0; v97 < Object.keys(p83.customStyle).length; v97++) {
          v95 = /^[0-9A-Za-z_\#\-\'\(\)\.\,\s\%]+[0-9A-Za-z_\#\-\'\(\)\.\,\s\%]*$/g;
          var v98 = p83.customStyle[Object.keys(p83.customStyle)[v97]];
          if (v3.util.isString(v98)) {
            if (!v95.test(v98)) {
              v96 = true;
            } else if (v98.length > 90) {
              v3.log.warn(p83, "Maximum allowed customStyle value is 90 characters");
              v98 = v98.substring(0, 90);
            }
          } else if (v3.util.isObject(v98)) {
            for (var v99 = 0; v99 < Object.keys(v98).length; v99++) {
              if (v3.util.isString(v98[Object.keys(v98)[v99]])) {
                v95 = /^[0-9A-Za-z_\#\-\'\(\)\.\,\s\%]+[0-9A-Za-z_\#\-\'\(\)\.\,\s\%]*$/g;
                if (!v95.test(v98[Object.keys(v98)[v99]])) {
                  v96 = true;
                } else if (v98[Object.keys(v98)[v99]].length > 90) {
                  v3.log.warn(p83, "Maximum allowed customStyle value is 90 characters");
                  v98[Object.keys(v98)[v99]] = v98[Object.keys(v98)[v99]].substring(0, 90);
                }
              } else if (!v3.util.isBolean(v98)) {
                v96 = true;
              }
            }
          } else if (!v3.util.isBolean(v98)) {
            v96 = true;
          }
        }
        if (v96) {
          p83.customStyle = this.defaults.customStyle;
          v3.log.warn(p83, p83, "Entered invalid characters in customStyle");
        }
      } else {
        p83.customStyle = this.defaults.customStyle;
        v3.log.warn(p83, p83, "Entered invalid characters in customStyle");
      }
    },
    apply: function (p84) {
      if (p84.theme === "basic" && p84.customStyle === undefined) {
        return;
      }
      if (p84.widgetSize === v3.constant.standard && v3.theme.hasOwnProperty(p84.theme)) {
        var v100 = v3.util.assign(this.defaults);
        var v101 = v3.util.overlayConf(v100, v3.theme[p84.theme]);
        this.set(p84, v101);
      } else if (p84.widgetSize === v3.constant.mini && v3.miniTheme.hasOwnProperty(p84.theme)) {
        var v100 = v3.util.assign(this.miniDefaults);
        var v101 = v3.util.overlayConf(v100, v3.miniTheme[p84.theme]);
        this.set(p84, v101);
      }
      if (p84.customStyle !== undefined) {
        this.set(p84, p84.customStyle);
      }
    },
    set: function (p85, p86) {
      var v102 = v3.UI.e[p85.widgetInstance];
      for (var v103 in p86) {
        switch (v103) {
          case "showCard":
            this.setShowCard(v102.card, p86[v103]);
            break;
          case "cardColor":
            this.setCardColor(v102, p86[v103], p85.widgetSize);
            if (p85.challengeType != "imageonly") {
              this.setAudioControlColor(v102, p86[v103], p85.widgetSize);
            }
            break;
          case "cardShadowColor":
            this.setCardShadowColor(v102, p86[v103]);
            break;
          case "cardBorder":
            this.setCardBorder(v102, p86[v103], p85.widgetSize);
            break;
          case "inputTextColor":
            this.setInputTextColor(p86[v103]);
            break;
          case "inputTextFont":
            this.setInputTextFontFamily(p86[v103]);
            break;
          case "placeHolderColor":
            this.setPlaceHolderColor(p86[v103]);
            break;
          case "msgTextColor":
            this.setMsgColor(p86[v103]);
            break;
          case "invalidMsgTextColor":
            this.setInvalidMsgTextColor(p86[v103]);
            break;
          case "msgTextFont":
            this.setMsgFontFamily(v102.msg, p86[v103]);
            break;
          case "inputBackgroundColor":
            this.setInputBackgoundColor(v102, p86[v103]);
            break;
          case "inputBorderColor":
            this.setInputBorderColor(p86[v103]);
            break;
          case "buttonIconColor":
            this.setButtonIconColors(p85, p86[v103]);
            break;
          case "cardBorderRadius":
            this.setCardBorderRadius(v102, p86);
            break;
        }
      }
    },
    addToStyleSheet: function (p87) {
      var v104 = document.createElement("style");
      if (v104.styleSheet) {
        v104.styleSheet.cssText = p87;
      } else {
        v104.appendChild(document.createTextNode(p87));
      }
      (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(v104);
    },
    setButtonIconColors: function (p88, p89) {
      if (p88.widgetSize === v3.constant.standard) {
        if (p89.refresh) {
          this.iconColors.refresh = p89.refresh;
        }
        if (p89.verify) {
          this.iconColors.verify = p89.verify;
        }
        if (p89.success) {
          this.iconColors.success = p89.success;
        }
        if (p89.fail) {
          this.iconColors.fail = p89.fail;
        }
        if (p89.audio) {
          this.iconColors.audio = p89.audio;
        }
        if (p89.audiofocus) {
          this.iconColors.audiofocus = p89.audiofocus;
        }
      } else {
        if (p89.refresh) {
          this.miniIconColors.refresh = p89.refresh;
        }
        if (p89.verify) {
          this.miniIconColors.verify = p89.verify;
        }
        if (p89.success) {
          this.miniIconColors.success = p89.success;
        }
        if (p89.fail) {
          this.miniIconColors.fail = p89.fail;
        }
        if (p89.audio) {
          this.miniIconColors.audio = p89.audio;
        }
        if (p89.audiofocus) {
          this.miniIconColors.audiofocus = p89.audiofocus;
        }
      }
      v3.UI.events.status.toggleImg(p88, 0);
      if (p88.challengeType != "imageonly") {
        this.setAudioCtrlIconColor(p88);
      }
    },
    setAudioCtrlIconColor: function (p90) {
      var v105 = v3.UI.e[p90.widgetInstance];
      if (p90.widgetSize === v3.constant.standard) {
        v105.audio.style.color = this.iconColors.audio;
      } else {
        v105.audio.style.color = this.miniIconColors.audio;
        v105.audio.style.borderRightColor = this.miniIconColors.audio;
      }
    },
    setInputBorderColor: function (p91) {
      var v106 = ".mtcap-inputborder-custom{border-color:" + p91.byDefault + ";}  .mtcap-inputborder-custom:hover{border-color:" + p91.hover + ";}  .mtcap-inputborder-custom:focus{border-color:" + p91.active + ";}  .mtcap-inputborder-custom:focus-within{border-color:" + p91.active + ";}  .mtcap-inputborder-custom:hover:active,mtcap-inputborder-custom:focus:active{border-color:" + p91.active + ";}  ";
      this.addToStyleSheet(v106);
    },
    setInputBackgoundColor: function (p92, p93) {
      p92.inputbox.style.backgroundColor = p93;
      if (v346.widgetSize === "mini" && v346.challengeType != "imageonly") {
        p92.audio.style.backgroundColor = p93;
        p92.audioControl.style.backgroundColor = p93;
      }
    },
    setMsgFontFamily: function (p94, p95) {
      if (!p95) {
        p95 = "'Verdana', 'Arial', 'Helvetica', 'sans-serif'";
      }
      p94.style.fontFamily = p95;
    },
    setInputTextFontFamily: function (p96) {
      if (!p96) {
        p96 = "'Verdana', 'Arial', 'Helvetica', 'sans-serif'";
      }
      var v107 = ".mtcap-inputtext-custom{font-family:" + p96 + ";}  ";
      this.addToStyleSheet(v107);
    },
    setMsgColor: function (p97) {
      var v108 = ".mtcap-msg-custom{color:" + p97 + ";}  a.mtcap-msglink-custom:link,a.mtcap-msglink-custom:visited,a.mtcap-msglink-custom:hover,a.mtcap-msglink-custom:active{color:" + p97 + ";}  ";
      this.addToStyleSheet(v108);
    },
    setInvalidMsgTextColor: function (p98) {
      var v109 = ".mtcap-invalidmsg-custom{color:" + p98 + ";}  ";
      this.addToStyleSheet(v109);
    },
    setInputTextColor: function (p99) {
      var v110 = ".mtcap-inputtext-custom{color:" + p99 + ";}  ";
      this.addToStyleSheet(v110);
    },
    setPlaceHolderColor: function (p100) {
      var v111 = ".mtcap-inputtext-custom::placeholder{ opacity:1.0; color:" + p100 + "; }  .mtcap-inputtext-custom::-ms-input-placeholder{ color:" + p100 + "; }  .mtcap-inputtext-custom:-ms-input-placeholder{  color:" + p100 + "; }  ";
      this.addToStyleSheet(v111);
    },
    setShowCard: function (p101, p102) {
      if (p102 === "false") {
        p102 = false;
      }
      if (p102) {
        p101.style.padding = v346.widgetSize === v3.constant.mini ? "0px" : "5px";
        p101.style.boxShadow = "0 2px 2px 0 " + v3.util.getColor("0,0,0,0.16") + ",0 0 0 1px" + v3.util.getColor("0,0,0,0.13");
        p101.style.backgroundColor = "white";
      } else {
        p101.style.padding = "0px";
        p101.style.boxShadow = "none";
        p101.style.backgroundColor = v3.util.getColor("0,0,0,0");
      }
    },
    setCardColor: function (p103, p104, p105) {
      if (p105 === v3.constant.mini) {
        p103.stsBox.style.backgroundColor = p104;
      } else {
        p103.card.style.backgroundColor = p104;
      }
    },
    setAudioControlColor: function (p106, p107, p108) {
      if (p108 === v3.constant.standard) {
        p106.audioControlBG.style.backgroundColor = p107;
      }
    },
    setCardShadowColor: function (p109, p110) {
      if (p110) {
        p109.card.style.boxShadow = "0 2px 2px 0 " + p110 + ",0 0 0 1px " + p110;
      } else {
        p109.card.style.boxShadow = "none";
      }
    },
    setCardBorder: function (p111, p112, p113) {
      var v112 = v3.util.getColorFromBorder(p112);
      if (p113 === v3.constant.mini && v112 && p112) {
        var v113 = p112.split(" ");
        var vParseInt2 = parseInt(v113[0].match(/-?\d+/));
        if (v113.length === 3 && !isNaN(vParseInt2) && v113[1].toLowerCase() === "solid") {
          if (vParseInt2 > v3.constant.miniMaxBorderWidth) {
            vParseInt2 = v3.constant.miniMaxBorderWidth;
            v3.log.warn(v346, "The maximum bordered pixel value for mini is 5px");
          } else if (vParseInt2 < v3.constant.miniMinBorderWidth) {
            v3.log.warn(v346, "The minimum bordered pixel value for mini is 1px");
            vParseInt2 = v3.constant.miniMinBorderWidth;
          }
          p112 = vParseInt2 + "px " + v113[1] + " " + v113[2];
        } else {
          p112 = v3.style.miniDefaults.cardBorder;
          v3.log.warn(v346, "Entered invalid characters in container border for Modern Mini");
        }
        p111.card.style.border = p112;
        p111.imageContainer.style.borderColor = v112;
        if (v346.challengeType != "imageonly") {
          p111.audioControl.style.borderColor = v112;
        }
      } else if (p113 !== v3.constant.mini && p112) {
        p111.card.style.border = p112;
      } else {
        p111.style.border = "0px none";
      }
    },
    setCardBGGradient: function (p114, p115) {
      var v114 = p114.card;
      var v115 = p114.audioControlBG;
      if (p115) {
        v114.style.background = "linear-gradient(" + p115 + ")";
        v115.style.background = "linear-gradient(" + p115 + ")";
      } else {
        v114.style.background = "";
        v115.style.background = "";
      }
    },
    setCardBorderRadius: function (p116, p117) {
      p116.card.style.borderRadius = p117.cardBorderRadius + "px";
      p116.inputbox.style.borderTopLeftRadius = p117.cardBorderRadius + "px";
      p116.inputbox.style.borderBottomLeftRadius = p117.cardBorderRadius + "px";
      p116.stsBox.style.borderTopRightRadius = p117.cardBorderRadius + "px";
      p116.stsBox.style.borderBottomRightRadius = p117.cardBorderRadius + "px";
    }
  };
  v3.lang = {
    defaults: v3.messages.lang,
    miniDefaults: v3.messages.miniLang,
    aria: v3.messages.aria,
    validateCustomLangConf: function (p118) {
      if (p118.customLangText) {
        if (v3.util.isObject(p118.customLangText)) {
          var v116 = false;
          for (var v117 = 0; v117 < Object.keys(p118.customLangText).length; v117++) {
            var v118 = p118.customLangText[Object.keys(p118.customLangText)[v117]];
            if (v3.util.isObject(v118)) {
              var v119 = Object.keys(v118);
              for (var v120 = 0; v120 < v119.length; v120++) {
                var v121 = v118[v119[v120]];
                if (v3.util.isString(v121)) {
                  if (v121.length > 90) {
                    v3.log.warn(p118, "Maximum allowed customLangText value is 90 characters");
                    v118[v119[v120]] = v121.replace(/</g, "").replace(/>/g, "").replace(/\//g, "").substring(0, 90);
                  } else {
                    v118[v119[v120]] = v121.replace(/</g, "").replace(/>/g, "").replace(/\//g, "");
                  }
                } else {
                  v116 = true;
                }
              }
            } else {
              v116 = true;
            }
          }
          if (v116) {
            p118.customLangText = v3.config.defaults.customLangText;
            v3.log.warn(p118, "Entered invalid characters in customLangText");
          }
        } else {
          p118.customLangText = v3.config.defaults.customLangText;
          v3.log.warn(p118, "Entered invalid characters in customLangText");
        }
      }
      if (Object.keys(p118.customLangText).length != 0) {
        for (var v122 in p118.customLangText) {
          if (p118.customLangText[v122].privacy) {
            delete p118.customLangText[v122].privacy;
          }
          if (p118.customLangText[v122].terms) {
            delete p118.customLangText[v122].terms;
          }
          if (p118.widgetSize === v3.constant.mini) {
            p118.customLangText[v122] = v3.util.overlayConf(v3.lang.miniDefaults[v122], p118.customLangText[v122]);
          } else {
            p118.customLangText[v122] = v3.util.overlayConf(v3.lang.defaults[v122], p118.customLangText[v122]);
          }
        }
      }
    }
  };
  v3.config = {
    defaults: {
      sitekey: "",
      widgetSize: "standard",
      theme: "basic",
      lang: "en",
      challengeType: "standard",
      widgetInstance: "",
      iframeId: "",
      enableTestMode: "",
      action: "",
      autoFormValidate: false,
      autoFadeOuterText: false,
      custom: false,
      textLength: 0,
      sCode: 0,
      host: "",
      hostname: "",
      v: 0,
      customStyle: {},
      customLangText: {},
      testmode_lowFrictionInvisible: "",
      lowFrictionInvisible: "",
      enableMouseFlow: false,
      isMTCLinksDisabled: false,
      isMTCPowByDisabled: false
    },
    miniDefaults: {
      sitekey: "",
      widgetSize: "mini",
      theme: "basic",
      lang: "en",
      challengeType: "standard",
      widgetInstance: "",
      iframeId: "",
      enableTestMode: "",
      action: "",
      autoFormValidate: false,
      autoFadeOuterText: true,
      custom: false,
      textLength: 0,
      sCode: 0,
      host: "",
      hostname: "",
      v: 0,
      customStyle: {},
      customLangText: {},
      testmode_lowFrictionInvisible: "",
      lowFrictionInvisible: "",
      enableMouseFlow: false,
      isMTCLinksDisabled: false,
      isMTCPowByDisabled: false,
      miniFormWidth: 0,
      miniFormHeight: 45,
      minCaptchaWidth: 140,
      maxCaptchaWidth: 250,
      minCpatchaHeight: 42,
      maxCaptchaHeight: 55,
      audioWidth: 20,
      audioHeight: 20
    },
    validateConf: function (p119, p120, p121) {
      var v123 = v3.util.assign(p119);
      p121 = p121 || p120;
      for (var v124 in v123) {
        if (v123.hasOwnProperty(v124)) {
          var v125 = p120[v124];
          var v126 = typeof v123[v124];
          if (v125 === undefined || v125 === null || v125 === "" || v125 === "undefined" || v125 === "null") {
            delete v123[v124];
          } else if (v126 === "string") {
            if (typeof v125 == "string") {
              if (v124 !== "host" && v124 !== "hostname") {
                v125 = v125.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\//g, "");
                v125 = v125.replace(/"/g, " ").replace(/'/g, " ").replace(/{/g, "").replace(/}/g, "");
              }
              v123[v124] = v125;
            } else {
              v3.log.warn(p121, "Entered the invalid string for " + v124);
              delete v123[v124];
            }
          } else if (v126 === "number") {
            v125 = parseInt(v125);
            if (isNaN(v125)) {
              v3.log.warn(p121, "Entered the invalid number for " + v124);
              delete v123[v124];
            } else {
              v123[v124] = v125;
            }
          } else if (v126 === "boolean") {
            v125 = v125.toString().toLowerCase();
            if (v125 === "true" || v125 === "t" || v125 === "1") {
              v123[v124] = true;
            } else if (v125 === "false" || v125 === "f" || v125 === "0") {
              v123[v124] = false;
            } else {
              delete v123[v124];
              v3.log.warn(p121, "Entered the invalid boolean value for " + v124);
            }
          }
        }
      }
      v123 = this.confCheck(v123);
      return v123;
    },
    confCheck: function (p122) {
      var vP122 = p122;
      var v127 = "";
      if (p122.sitekey) {
        v127 = /^[0-9A-Za-z-\_]+[0-9A-Za-z-\_]*$/g;
        p122.sitekey = p122.sitekey.trim();
        if (!v127.test(p122.sitekey)) {
          p122.sitekey = this.defaults.sitekey;
          v3.log.warn(vP122, "Entered invalid characters in sitekey");
        } else if (p122.sitekey.length > 120) {
          p122.sitekey = this.defaults.sitekey;
          v3.log.warn(vP122, "Entered characters in sitekey exceeds maximum allowed characters limit of 120");
        }
      }
      if (p122.enableTestMode) {
        v127 = /^[0-9A-Za-z-\_]+[0-9A-Za-z-\_]*$/g;
        if (!v127.test(p122.enableTestMode)) {
          p122.enableTestMode = this.defaults.enableTestMode;
          v3.log.warn(vP122, "Entered invalid characters in enableTestMode");
        } else if (p122.enableTestMode.length > 120) {
          p122.enableTestMode = this.defaults.enableTestMode;
          v3.log.warn(vP122, "Entered characters in enableTestMode exceeds maximum allowed characters limit of 120");
        }
      }
      if (p122.theme) {
        v127 = /^[0-9A-Za-z-\_]+[0-9A-Za-z-\_]*$/g;
        if (!v127.test(p122.theme)) {
          p122.theme = this.defaults.theme;
          v3.log.warn(vP122, "Entered invalid characters in theme");
        } else if (p122.theme.length > 30) {
          p122.theme = this.defaults.theme;
          v3.log.warn(vP122, "Entered characters in theme exceeds maximum allowed characters limit of 30");
        } else if (p122.theme !== "basic" && v3.theme[p122.theme] === undefined) {
          p122.theme = this.defaults.theme;
          v3.log.warn(vP122, "Entered theme is not a valid theme");
        }
      }
      if (p122.challengeType) {
        v127 = /^[A-Za-z]+[A-Za-z]*$/g;
        if (!v127.test(p122.challengeType)) {
          p122.challengeType = this.defaults.challengeType;
          v3.log.warn(vP122, "Entered invalid characters in challengeType");
        } else if (p122.challengeType.length > 120) {
          p122.challengeType = this.defaults.challengeType;
          v3.log.warn(vP122, "Entered characters in challengeType exceeds maximum allowed characters limit of 120");
        } else if (p122.challengeType !== "imageonly" && p122.challengeType !== "standard") {
          p122.challengeType = this.defaults.challengeType;
          v3.log.warn(vP122, "Challenge type can only be `imageonly`");
        }
      }
      if (p122.autoFadeOuterText) {
        v127 = /^[A-Za-z]+[A-Za-z]*$/g;
        if (!v127.test(p122.autoFadeOuterText)) {
          p122.autoFadeOuterText = this.defaults.autoFadeOuterText;
          v3.log.warn(vP122, "Entered invalid characters in autoFadeOuterText");
        } else if (p122.autoFadeOuterText.length > 5) {
          p122.autoFadeOuterText = this.defaults.autoFadeOuterText;
          v3.log.warn(vP122, "Entered characters in autoFadeOuterText exceeds maximum allowed characters limit of 5");
        } else if (p122.autoFadeOuterText === "true") {
          p122.autoFadeOuterText = true;
        } else if (p122.autoFadeOuterText === "false") {
          p122.autoFadeOuterText = false;
        } else if (typeof p122.autoFadeOuterText !== "boolean") {
          p122.autoFadeOuterText = this.defaults.autoFadeOuterText;
          v3.log.warn(vP122, "autoFadeOuterText can either only be true or false");
        }
      }
      if (p122.action) {
        v127 = /^[a-zA-Z0-9\-\_\.\,]*$/g;
        if (!v127.test(p122.action)) {
          p122.action = p122.action.replace(/[^a-zA-Z0-9\-\_\.\,]/g, "");
          v3.log.warn("Entered invalid characters in action");
        }
        if (p122.action.length > 30) {
          p122.action = p122.action.substring(0, 30);
          v3.log.warn("Entered characters in action exceeds maximum allowed characters limit of 30");
        }
      }
      if (p122.lang) {
        v127 = /^[0-9A-Za-z-\_]+[0-9A-Za-z-\_]*$/g;
        if (!v127.test(p122.lang)) {
          p122.lang = this.defaults.lang;
          v3.log.warn(vP122, "Entered invalid characters in lang");
        } else if (v3.messages.lang[p122.lang] === undefined) {
          p122.lang = this.defaults.lang;
          v3.log.warn(vP122, "Entered lang is not valid");
        }
      }
      if (p122.textLength) {
        v127 = /^[0-9]+[0-9]*$/g;
        if (!v127.test(p122.textLength)) {
          p122.textLength = this.defaults.textLength;
          v3.log.warn(vP122, "Entered invalid characters in textLength");
        } else if (p122.textLength < 1 || p122.textLength > 20) {
          v3.log.warn(vP122, "Entered invalid values in textLength");
          p122.textLength = this.defaults.textLength;
        }
      }
      if (p122.lowFrictionInvisible) {
        var v128 = true;
        p122.lowFrictionInvisible = p122.lowFrictionInvisible.toLowerCase();
        v127 = /^[A-Za-z-]+[A-Za-z-]*$/g;
        if (!v127.test(p122.lowFrictionInvisible)) {
          v128 = false;
          v3.log.warn(vP122, "Entered invalid characters in lowFrictionInvisible");
        } else if (p122.lowFrictionInvisible !== "force-visible") {
          v128 = false;
          v3.log.warn(vP122, "Entered invalid value in lowFrictionInvisible");
        }
        if (!v128) {
          p122.lowFrictionInvisible = this.defaults.lowFrictionInvisible;
        }
      }
      if (p122.testmode_lowFrictionInvisible) {
        var v128 = true;
        p122.testmode_lowFrictionInvisible = p122.testmode_lowFrictionInvisible.toLowerCase();
        v127 = /^[A-Za-z-]+[A-Za-z-]*$/g;
        if (!v127.test(p122.testmode_lowFrictionInvisible)) {
          v128 = false;
          v3.log.warn(vP122, "Entered invalid characters in testmode_lowFrictionInvisible");
        } else if (p122.testmode_lowFrictionInvisible !== "force-visible" && p122.testmode_lowFrictionInvisible !== "force-invisible") {
          v128 = false;
          v3.log.warn(vP122, "testmode_lowFrictionInvisible can only be either 'force-visible' or 'force-invisible'");
        } else if (p122.enableTestMode === "") {
          v128 = false;
          v3.log.error(vP122, "No test key is set via enableTestMode parameter which is required to use testmode_lowFrictionInvisible feature");
        }
        if (!v128) {
          p122.testmode_lowFrictionInvisible = this.defaults.testmode_lowFrictionInvisible;
        }
      }
      if (p122.miniFormWidth) {
        p122.miniFormWidth = parseInt(p122.miniFormWidth);
        if (isNaN(p122.miniFormWidth)) {
          v3.log.warn("Entered characters for miniFormWidth should only be of numbers, within a range of 265 - 600");
          p122.miniFormWidth = this.defaultMiniConfig.miniFormWidth;
        } else if (p122.miniFormWidth < v3.constant.minMiniWidth || p122.miniFormWidth > v3.constant.maxMiniWidth) {
          v3.log.warn("Entered Width Value should be in range of 265 - 600");
          p122.miniFormWidth = this.defaultMiniConfig.miniFormWidth;
        }
      }
      if (p122.miniFormHeight) {
        p122.miniFormHeight = parseInt(p122.miniFormHeight);
        if (isNaN(p122.miniFormHeight)) {
          v3.log.warn("Entered characters for miniFormHeight should only be of numbers, within a range of 42 - 55");
          p122.miniFormHeight = this.defaultMiniConfig.miniFormHeight;
        } else if (p122.miniFormHeight < v3.constant.minMiniHeight || p122.miniFormHeight > v3.constant.maxMiniHeight) {
          v3.log.warn("Entered Height Value should be in range of 42 - 55");
          p122.miniFormHeight = this.defaultMiniConfig.miniFormHeight;
        }
      }
      return p122;
    },
    isValidSitekey: function (p123) {
      var v129 = p123.sitekey;
      if (v129 === "" || v129 === null || v129 == undefined) {
        v3.log.error(p123, "Missing Required Parameter: sitekey", 2410);
        return false;
      } else if (v129.length > 200) {
        v3.log.error(p123, "Sitekey Provided is Invalid", 2410);
        return false;
      }
      return true;
    },
    validateAndSetAction: function (p124) {
      var v130 = p124.action.trim();
      if (v130 == "" || v130 == null || v130 == undefined) {
        v130 = "";
      } else {
        v130 = v130.replace(/[^a-zA-Z0-9-_,.$]/gi, "").slice(0, 30);
      }
      return v130;
    },
    validateCustomConf: function (p125) {
      var v131 = v3.util.getObject(p125.widgetInstance);
      v131.customLangText = p125.eventinfo.customLangText;
      v131.customStyle = p125.eventinfo.customStyle;
      if (v131.customLangText !== undefined) {
        v3.lang.validateCustomLangConf(v131);
      }
      if (v131.customStyle !== undefined) {
        v3.style.validateCustomCSSConf(v131);
      }
    },
    confSumm: "",
    setConfigForSummary: function (p126) {
      this.confSumm = this.getConfigSummaryString(p126);
      document.cookie = "mtv1ConfSum=" + this.confSumm + "; path=/;secure;SameSite=None;Partitioned;";
    },
    getConfigSummaryString: function (p127) {
      if (!p127) {
        return "(noconf)";
      }
      var v132 = "|";
      var v133 = "{";
      v133 += "v:01" + v132;
      if (p127.widgetSize) {
        if (p127.widgetSize === v3.constant.standard) {
          v133 += "wdsz:std";
        } else if (p127.widgetSize === v3.constant.mini) {
          v133 += "wdsz:min";
        } else {
          v133 += "wdsz:OTH";
        }
        v133 += v132;
      }
      if (p127.theme) {
        v133 += "thm:" + p127.theme + v132;
      }
      if (p127.lang) {
        v133 += "lan:" + p127.lang + v132;
      }
      if (p127.challengeType) {
        if (p127.challengeType === "standard") {
          v133 += "chlg:std";
        } else if (p127.challengeType === "imageonly") {
          v133 += "chlg:img";
        } else {
          v133 += "chlg:OTH";
        }
        v133 += v132;
      }
      if (p127.customLangText) {
        v133 += "clan:1" + v132;
      }
      if (p127.customStyle) {
        v133 += "cstyl:1" + v132;
      }
      if (typeof p127.autoFormValidate == "boolean") {
        v133 += "afv:" + (p127.autoFormValidate ? "1" : "0") + v132;
      }
      if (typeof p127.autoFadeOuterText == "boolean") {
        v133 += "afot:" + (p127.autoFadeOuterText ? "1" : "0") + v132;
      }
      if (p127.render) {
        if (p127.render === "auto") {
          v133 += "rnd:aut";
        } else if (p127.render === "explicit") {
          v133 += "rnd:exp";
        } else {
          v133 += "rnd:OTH";
        }
        v133 += v132;
      }
      if (typeof p127.waitForDom == "number") {
        v133 += "wfd:" + p127.waitForDom + v132;
      }
      if (v133.length > 150) {
        v133 = v133.substring(0, 150) + "...";
      }
      v133 += "}";
      return v133;
    }
  };
  v3.log = {
    error: function (p128, p129, p130) {
      p128.sCode = p130 || 400;
      v3.status.code[p130] = p129;
      v3.postMessage(p128, "error", {
        msg: p129
      });
    },
    warn: function (p131, p132, p133) {
      p131.sCode = p133 || 2300;
      v3.status.code[p133] = p132;
      v3.postMessage(p131, "warning", {
        msg: p132
      });
    }
  };
  v3.jsBuildVersion = {
    num: "2024-11-14.21.25.03",
    setInCookie: function (p134) {
      if (!p134) {
        return;
      }
      p134 = p134.replace(",", "_");
      p134 = p134.replace(";", "-");
      p134 = p134.replace(" ", "");
      document.cookie = "jsV=" + p134 + "; path=/;secure;SameSite=None;Partitioned;";
    }
  };
  v3.status = {
    code: {
      api: {
        OK: 1200,
        RESTART_CAPTCHA_TRANSACTION: 1310,
        RESTART_CAPTCHA_CHALLENGE_EXPIRED: 1315,
        REQ_ERR: 1400,
        BAD_SITEKEY: 1410,
        SITEKEY_EXPIRED: 1411,
        DOMAIN_NOTMATCH: 1415,
        BAD_TESTKEY: 1416,
        VOID_TESTKEY: 1417,
        BAD_CHALLENGETOKEN: 1431,
        BAD_CPUFOLD_ANSWER: 1432,
        MISMATCH_CHALLENGETOKEN_DATA: 1451
      },
      http: {
        HTTP_ERROR: 400,
        HTTP_ERROR404: 404,
        TOO_MANY_REQUEST: 429,
        INTERNAL_SERVER_ERROR: 500,
        CONNECTION_TIMEOUT: 503
      },
      general: {
        CAP_LOADING: 0,
        CAP_VERIFYING: 2205,
        CAP_VERIFIED: 2100,
        CAP_NOT_VERIFIED: 2200,
        CAP_EXPIRED: 2211,
        CAP_VERIFIED_TOKEN_EXPIRED: 2210,
        CONNECTION_ERR: 2301
      },
      internal: {
        CAPTCHA_LOADED: "CAPTCHA_LOADED",
        AUDIO_DOWNLOADING: "AUDIO_DOWNLOADING",
        AUDIO_PLAYING: "AUDIO_PLAYING",
        LOADING_NEW: "LOADING_NEW",
        RELOADING_NEW: "RELOADING_NEW",
        CAPTCHA_NEWLY_LOADED: "CAPTCHA_NEWLY_LOADED",
        CAPTCHA_SOLUTION_INCOMPLETE: "CAPTCHA_SOLUTION_INCOMPLETE",
        VERIFIYING_INPUT: "VERIFIYING_INPUT",
        VALIDATION_FAILED: "VALIDATION_FAILED",
        VALIDATION_SUCCESS: "VALIDATION_SUCCESS",
        TOKEN_TIMEOUT: "TOKEN_TIMEOUT",
        ERROR: "ERROR"
      }
    },
    internalStatus: "",
    messages: {
      0: "Loading",
      2100: "Verified",
      2200: "Not Verified",
      2205: "Verifying",
      2210: "Verified Token Expired",
      2301: "Network/Connection Error",
      1400: "Malformed Request",
      1410: "ERROR for site owner: \n Invalid Sitekey \n (1410)",
      1411: "ERROR for site owner: Sitekey Expired (1411)",
      1415: "This website is not within the supported domains for this Sitekey",
      1416: "ERROR for site owner: Invalid Testkey (1416)",
      400: "Error Occurred, Please try again.. (400)",
      404: "Error Occurred, Please try again.. (404)",
      429: "The IP or network you are on is temporarily blocked due to misuse, please try again later.  (429)",
      500: "Internal server error occurred, Please try again..  (500)",
      503: "Service unavailable, Please try again later... (503)"
    },
    httpErrorMessages: {
      429: "Too Many Requests (429)",
      500: "Internal Server Error (500)",
      400: "Bad Request (400)",
      404: "Page Not Found (404)",
      503: "Service Unavailable (503)"
    },
    getStatus: function (p135, p136) {
      var v134 = {};
      if (typeof p135 !== "undefined") {
        v134.element = p135.widgetInstance;
        v134.domID = p135.widgetInstance;
        v134.statusCode = p135.sCode || 0;
        v134.verifiedToken = p135.sCode == v3.status.code.general.CAP_VERIFIED ? p135.verifiedToken : "";
        v134.isVerified = p135.sCode == v3.status.code.general.CAP_VERIFIED ? true : false;
        v134.statusDesc = this.code[p135.sCode] || p136 || "";
        v134.isLowFriction = p135.isLowFriction;
        v134.isVisible = p135.isVisible;
        v134.lf = p135.lf;
      }
      return v134;
    },
    getInternalStatus: function () {
      return this.internalStatus;
    },
    getIsError: function () {
      var v135 = v3.status.code;
      return this.internalStatus === v135.internal.CAPTCHA_SOLUTION_INCOMPLETE || this.internalStatus === v135.internal.VALIDATION_FAILED || this.internalStatus === v135.internal.TOKEN_TIMEOUT || this.internalStatus === v135.internal.ERROR;
    },
    setStatus: function (p137) {
      var v136 = v3.status.code;
      this.internalStatus = p137;
      switch (p137) {
        case v136.internal.CAPTCHA_LOADED:
          v3.util.updateAriaMessageState(v136.internal.CAPTCHA_LOADED);
          break;
        case v136.internal.AUDIO_DOWNLOADING:
          v3.util.updateAriaMessageState(v136.internal.AUDIO_DOWNLOADING);
          v3.util.updateUI(v136.internal.AUDIO_DOWNLOADING);
          break;
        case v136.internal.AUDIO_PLAYING:
          v3.util.updateAriaMessageState(v136.internal.AUDIO_PLAYING);
          v3.util.updateUI(v136.internal.AUDIO_PLAYING);
          break;
        case v136.internal.LOADING_NEW:
          v346.sCode = v3.status.code.general.CAP_LOADING;
          v3.util.updateAriaMessageState(v136.internal.LOADING_NEW);
          v3.util.updateUI(v136.internal.LOADING_NEW);
          break;
        case v136.internal.RELOADING_NEW:
          v346.sCode = v3.status.code.general.CAP_LOADING;
          v3.util.updateAriaMessageState(v136.internal.RELOADING_NEW);
          v3.util.updateUI(v136.internal.RELOADING_NEW);
          break;
        case v136.internal.CAPTCHA_NEWLY_LOADED:
          v3.util.updateAriaMessageState(v136.internal.CAPTCHA_NEWLY_LOADED);
          break;
        case v136.internal.CAPTCHA_SOLUTION_INCOMPLETE:
          v3.util.updateUI(v136.internal.CAPTCHA_SOLUTION_INCOMPLETE);
          v3.util.updateAriaMessageState(v136.internal.CAPTCHA_SOLUTION_INCOMPLETE);
          v3.widget.showOrHideOuterText();
          break;
        case v136.internal.VERIFIYING_INPUT:
          v346.sCode = v3.status.code.general.CAP_VERIFYING;
          if (!v346.isLowFriction) {
            v3.util.updateAriaMessageState(v136.internal.VERIFIYING_INPUT);
            v3.util.updateUI(v136.internal.VERIFIYING_INPUT);
          }
          v3.postMessage(v346, "verifystatuschange", {
            msg: v3.status.messages[v3.status.code.general.CAP_VERIFYING]
          });
          break;
        case v136.internal.VALIDATION_FAILED:
          v346.sCode = v3.status.code.general.CAP_NOT_VERIFIED;
          v346.verifiedToken = "";
          v346.verifyFail = true;
          v346.isVerifying = false;
          if (!v346.isLowFriction) {
            v13 = true;
            v3.util.updateAriaMessageState(v136.internal.VALIDATION_FAILED);
            v3.util.updateUI(v136.internal.VALIDATION_FAILED);
            v3.widget.showOrHideOuterText();
          }
          v346.resetTimer = setTimeout(function () {
            v3.render.reset(v346.widgetInstance);
          }, 1000);
          break;
        case v136.internal.VALIDATION_SUCCESS:
          v346.sCode = v3.status.code.general.CAP_VERIFIED;
          v346.isVerifying = false;
          if (!v346.isLowFriction) {
            v3.util.updateAriaMessageState(v136.internal.VALIDATION_SUCCESS);
            v3.util.updateUI(v136.internal.VALIDATION_SUCCESS);
          }
          v3.postMessage(v346, "verifystatuschange", {
            msg: v3.status.messages[v3.status.code.general.CAP_VERIFIED]
          });
          break;
        case v136.internal.TOKEN_TIMEOUT:
          v346.sCode = v3.status.code.general.CAP_VERIFIED_TOKEN_EXPIRED;
          if (!v346.isLowFriction) {
            v3.util.updateAriaMessageState(v136.internal.TOKEN_TIMEOUT);
            v3.util.updateUI(v3.status.code.internal.TOKEN_TIMEOUT);
            v3.widget.showOrHideOuterText();
          }
          break;
        case v136.internal.ERROR:
          v3.util.updateUI(v3.status.code.internal.ERROR);
          v3.util.updateAriaMessageState(v3.status.code.internal.ERROR);
          v3.widget.showOrHideOuterText();
          break;
        default:
          break;
      }
    }
  };
  v3.postMessage = function (p138, p139, p140) {
    try {
      var v137 = JSON.stringify({
        mtcap: 1,
        widgetInstance: p138.widgetInstance,
        event: p139,
        eventinfo: p140,
        status: v3.status.getStatus(p138, p140.msg)
      });
      window.parent.postMessage(v137, p138.host);
    } catch (_0x2ebc79) {
      v3.log.warn(p138, "Error occurred - " + _0x2ebc79);
    }
  };
  v3.eventEmitter = {
    events: {
      setConfigCustom: function () {
        var v138 = v3.util.getObject(this.widgetInstance);
        if (v138.renderDelayTimer == null) {
          v3.postMessage(v138, "warning", {
            msg: "Custom Config Received late."
          });
        } else {
          clearTimeout(v138.renderDelayTimer);
          v3.config.validateCustomConf(this);
          v3.render.doRender(v138);
        }
      },
      showRequired: function () {
        v3.status.setStatus(v3.status.code.internal.CAPTCHA_SOLUTION_INCOMPLETE);
        v3.UI.events.status.showRequired(v346, true);
      },
      enableTestMode: function () {
        var v139 = v3.util.getObject(this.widgetInstance);
        v139.enableTestMode = this.eventinfo.enableTestMode;
      },
      autoFadeOuterText: function () {
        var v140 = v3.util.getObject(this.widgetInstance);
        v140.autoFadeOuterText = this.eventinfo.autoFadeOuterText;
      },
      getStatus: function () {
        var v141 = v3.util.getObject(this.widgetInstance);
        v3.postMessage(v141, "status", {
          msg: this.eventinfo.msg
        });
      },
      focus: function () {
        var v142 = v3.util.getObject(this.widgetInstance);
        v3.UI.e[v142.widgetInstance].inputText.focus();
      },
      errorCardHeightChange: function () {
        var v143 = v3.UI.e[v346.widgetInstance];
        v3.util.updateErrorCardHeight(v143);
      },
      errorCardClicked: function () {
        var v144 = v3.UI.e[this.widgetInstance];
        v3.render.reset(this.widgetInstance);
        v144.stsBtn.style.position = "absolute";
      }
    },
    trigger: function (p141, p142) {
      if (this.events[p141]) {
        this.events[p141].apply(p142);
      }
    }
  };
  v6("message", function (p143) {
    try {
      var v145 = v3.util.IsJsonString(p143.data);
      if (!v145) {
        return;
      }
      var v146 = JSON.parse(p143.data);
      if (v146.mtcap != 2) {
        return;
      }
      v3.eventEmitter.trigger(v146.event, v146);
    } catch (_0x12a956) {
      v3.log.warn(v346, "Error occurred - " + _0x12a956);
    }
  }, false);
  v3.hash = {
    md5cycle: function (p144, p145) {
      var v147 = p144[0];
      var v148 = p144[1];
      var v149 = p144[2];
      var v150 = p144[3];
      v147 = v3.hash.ff(v147, v148, v149, v150, p145[0], 7, -680876936);
      v150 = v3.hash.ff(v150, v147, v148, v149, p145[1], 12, -389564586);
      v149 = v3.hash.ff(v149, v150, v147, v148, p145[2], 17, 606105819);
      v148 = v3.hash.ff(v148, v149, v150, v147, p145[3], 22, -1044525330);
      v147 = v3.hash.ff(v147, v148, v149, v150, p145[4], 7, -176418897);
      v150 = v3.hash.ff(v150, v147, v148, v149, p145[5], 12, 1200080426);
      v149 = v3.hash.ff(v149, v150, v147, v148, p145[6], 17, -1473231341);
      v148 = v3.hash.ff(v148, v149, v150, v147, p145[7], 22, -45705983);
      v147 = v3.hash.ff(v147, v148, v149, v150, p145[8], 7, 1770035416);
      v150 = v3.hash.ff(v150, v147, v148, v149, p145[9], 12, -1958414417);
      v149 = v3.hash.ff(v149, v150, v147, v148, p145[10], 17, -42063);
      v148 = v3.hash.ff(v148, v149, v150, v147, p145[11], 22, -1990404162);
      v147 = v3.hash.ff(v147, v148, v149, v150, p145[12], 7, 1804603682);
      v150 = v3.hash.ff(v150, v147, v148, v149, p145[13], 12, -40341101);
      v149 = v3.hash.ff(v149, v150, v147, v148, p145[14], 17, -1502002290);
      v148 = v3.hash.ff(v148, v149, v150, v147, p145[15], 22, 1236535329);
      v147 = v3.hash.gg(v147, v148, v149, v150, p145[1], 5, -165796510);
      v150 = v3.hash.gg(v150, v147, v148, v149, p145[6], 9, -1069501632);
      v149 = v3.hash.gg(v149, v150, v147, v148, p145[11], 14, 643717713);
      v148 = v3.hash.gg(v148, v149, v150, v147, p145[0], 20, -373897302);
      v147 = v3.hash.gg(v147, v148, v149, v150, p145[5], 5, -701558691);
      v150 = v3.hash.gg(v150, v147, v148, v149, p145[10], 9, 38016083);
      v149 = v3.hash.gg(v149, v150, v147, v148, p145[15], 14, -660478335);
      v148 = v3.hash.gg(v148, v149, v150, v147, p145[4], 20, -405537848);
      v147 = v3.hash.gg(v147, v148, v149, v150, p145[9], 5, 568446438);
      v150 = v3.hash.gg(v150, v147, v148, v149, p145[14], 9, -1019803690);
      v149 = v3.hash.gg(v149, v150, v147, v148, p145[3], 14, -187363961);
      v148 = v3.hash.gg(v148, v149, v150, v147, p145[8], 20, 1163531501);
      v147 = v3.hash.gg(v147, v148, v149, v150, p145[13], 5, -1444681467);
      v150 = v3.hash.gg(v150, v147, v148, v149, p145[2], 9, -51403784);
      v149 = v3.hash.gg(v149, v150, v147, v148, p145[7], 14, 1735328473);
      v148 = v3.hash.gg(v148, v149, v150, v147, p145[12], 20, -1926607734);
      v147 = v3.hash.hh(v147, v148, v149, v150, p145[5], 4, -378558);
      v150 = v3.hash.hh(v150, v147, v148, v149, p145[8], 11, -2022574463);
      v149 = v3.hash.hh(v149, v150, v147, v148, p145[11], 16, 1839030562);
      v148 = v3.hash.hh(v148, v149, v150, v147, p145[14], 23, -35309556);
      v147 = v3.hash.hh(v147, v148, v149, v150, p145[1], 4, -1530992060);
      v150 = v3.hash.hh(v150, v147, v148, v149, p145[4], 11, 1272893353);
      v149 = v3.hash.hh(v149, v150, v147, v148, p145[7], 16, -155497632);
      v148 = v3.hash.hh(v148, v149, v150, v147, p145[10], 23, -1094730640);
      v147 = v3.hash.hh(v147, v148, v149, v150, p145[13], 4, 681279174);
      v150 = v3.hash.hh(v150, v147, v148, v149, p145[0], 11, -358537222);
      v149 = v3.hash.hh(v149, v150, v147, v148, p145[3], 16, -722521979);
      v148 = v3.hash.hh(v148, v149, v150, v147, p145[6], 23, 76029189);
      v147 = v3.hash.hh(v147, v148, v149, v150, p145[9], 4, -640364487);
      v150 = v3.hash.hh(v150, v147, v148, v149, p145[12], 11, -421815835);
      v149 = v3.hash.hh(v149, v150, v147, v148, p145[15], 16, 530742520);
      v148 = v3.hash.hh(v148, v149, v150, v147, p145[2], 23, -995338651);
      v147 = v3.hash.ii(v147, v148, v149, v150, p145[0], 6, -198630844);
      v150 = v3.hash.ii(v150, v147, v148, v149, p145[7], 10, 1126891415);
      v149 = v3.hash.ii(v149, v150, v147, v148, p145[14], 15, -1416354905);
      v148 = v3.hash.ii(v148, v149, v150, v147, p145[5], 21, -57434055);
      v147 = v3.hash.ii(v147, v148, v149, v150, p145[12], 6, 1700485571);
      v150 = v3.hash.ii(v150, v147, v148, v149, p145[3], 10, -1894986606);
      v149 = v3.hash.ii(v149, v150, v147, v148, p145[10], 15, -1051523);
      v148 = v3.hash.ii(v148, v149, v150, v147, p145[1], 21, -2054922799);
      v147 = v3.hash.ii(v147, v148, v149, v150, p145[8], 6, 1873313359);
      v150 = v3.hash.ii(v150, v147, v148, v149, p145[15], 10, -30611744);
      v149 = v3.hash.ii(v149, v150, v147, v148, p145[6], 15, -1560198380);
      v148 = v3.hash.ii(v148, v149, v150, v147, p145[13], 21, 1309151649);
      v147 = v3.hash.ii(v147, v148, v149, v150, p145[4], 6, -145523070);
      v150 = v3.hash.ii(v150, v147, v148, v149, p145[11], 10, -1120210379);
      v149 = v3.hash.ii(v149, v150, v147, v148, p145[2], 15, 718787259);
      v148 = v3.hash.ii(v148, v149, v150, v147, p145[9], 21, -343485551);
      p144[0] = v3.hash.add32(v147, p144[0]);
      p144[1] = v3.hash.add32(v148, p144[1]);
      p144[2] = v3.hash.add32(v149, p144[2]);
      p144[3] = v3.hash.add32(v150, p144[3]);
    },
    cmn: function (p146, p147, p148, p149, p150, p151) {
      p147 = v3.hash.add32(v3.hash.add32(p147, p146), v3.hash.add32(p149, p151));
      return v3.hash.add32(p147 << p150 | p147 >>> 32 - p150, p148);
    },
    ff: function (p152, p153, p154, p155, p156, p157, p158) {
      return v3.hash.cmn(p153 & p154 | ~p153 & p155, p152, p153, p156, p157, p158);
    },
    gg: function (p159, p160, p161, p162, p163, p164, p165) {
      return v3.hash.cmn(p160 & p162 | p161 & ~p162, p159, p160, p163, p164, p165);
    },
    hh: function (p166, p167, p168, p169, p170, p171, p172) {
      return v3.hash.cmn(p167 ^ p168 ^ p169, p166, p167, p170, p171, p172);
    },
    ii: function (p173, p174, p175, p176, p177, p178, p179) {
      return v3.hash.cmn(p175 ^ (p174 | ~p176), p173, p174, p177, p178, p179);
    },
    md51: function (p180) {
      var v151 = p180.length;
      var v152 = [1732584193, -271733879, -1732584194, 271733878];
      var v153;
      for (v153 = 64; v153 <= p180.length; v153 += 64) {
        v3.hash.md5cycle(v152, v3.hash.md5blk(p180.substring(v153 - 64, v153)));
      }
      p180 = p180.substring(v153 - 64);
      var v154 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      for (v153 = 0; v153 < p180.length; v153++) {
        v154[v153 >> 2] |= p180.charCodeAt(v153) << (v153 % 4 << 3);
      }
      v154[v153 >> 2] |= 128 << (v153 % 4 << 3);
      if (v153 > 55) {
        v3.hash.md5cycle(v152, v154);
        for (v153 = 0; v153 < 16; v153++) {
          v154[v153] = 0;
        }
      }
      v154[14] = v151 * 8;
      v3.hash.md5cycle(v152, v154);
      return v152;
    },
    md5blk: function (p181) {
      var v155 = [];
      var v156;
      for (v156 = 0; v156 < 64; v156 += 4) {
        v155[v156 >> 2] = p181.charCodeAt(v156) + (p181.charCodeAt(v156 + 1) << 8) + (p181.charCodeAt(v156 + 2) << 16) + (p181.charCodeAt(v156 + 3) << 24);
      }
      return v155;
    },
    hex_chr: "0123456789abcdef".split(""),
    rhex: function (p182) {
      var v157 = "";
      var v158 = 0;
      for (; v158 < 4; v158++) {
        v157 += v3.hash.hex_chr[p182 >> v158 * 8 + 4 & 15] + v3.hash.hex_chr[p182 >> v158 * 8 & 15];
      }
      return v157;
    },
    hex: function (p183) {
      for (var v159 = 0; v159 < p183.length; v159++) {
        p183[v159] = v3.hash.rhex(p183[v159]);
      }
      return p183.join("");
    },
    md5: function (p184) {
      return v3.hash.hex(v3.hash.md51(p184));
    },
    add32: function (p185, p186) {
      var v160 = (p185 & 65535) + (p186 & 65535);
      var v161 = (p185 >> 16) + (p186 >> 16) + (v160 >> 16);
      return v161 << 16 | v160 & 65535;
    },
    generate: {
      automatedTestCode: function (p187, p188) {
        var v162 = v3.hash.md5(p188 + p187);
        return "QH(" + v162.substring(0, 8) + ")";
      },
      transactionSignature: function (p189, p190) {
        return "TH[" + v3.hash.md5(p190 + p189) + "]";
      },
      secureHash: function (p191, p192) {
        if (!p191 || !p192) {
          return 0;
        }
        var v163 = v3.hash;
        var v164 = p191.length > 64 ? p191.substring(0, 64) : p191;
        var v165 = v163.reverseStr(p192);
        var v166 = v163.splitEvenOddStr(p192);
        var v167 = v163.splitEvenOddStr(v165);
        var v168 = v163.hashStr(v164 + v166[0]);
        var v169 = v163.hashStr(v164 + v166[1]);
        var v170 = v163.hashStr(v167[0] + v164);
        var v171 = v163.hashStr(v167[1] + v164);
        var v172 = v163.hashStr(v164 + p192);
        var v173 = v163.hashStr(v163.reverseStr(v164) + p192);
        var v174 = v163.hashStr(v164 + "|" + v168 + "|" + v169 + "|" + v170 + "|" + v171 + "|" + v172 + "|" + v173);
        if (v174 === 0) {
          v174 = 12345;
        } else if (v174 < 0) {
          v174 *= -1;
        }
        return v174;
      }
    },
    reverseStr: function (p193) {
      var v175 = p193.split("");
      var v176 = v175.reverse();
      return v176.join("");
    },
    splitEvenOddStr: function (p194) {
      var v177 = [];
      var v178 = [];
      var v179 = p194.split("");
      for (var v180 = 0; v180 < v179.length; v180++) {
        if (v180 % 2 === 0) {
          v177.push(v179[v180]);
        } else {
          v178.push(v179[v180]);
        }
      }
      return [v177.join(""), v178.join("")];
    },
    hashStr: function (p195) {
      var v181 = 0;
      var v182;
      if (p195.length == 0) {
        return v181;
      }
      for (v182 = 0; v182 < p195.length; v182++) {
        var v183 = p195.charCodeAt(v182);
        v181 = (v181 << 5) - v181 + v183;
        v181 = v181 & v181;
      }
      return v181;
    }
  };
  v3.browser = {
    win: window,
    cd: new Date(),
    calcW1nfo: function (p196) {
      var v184 = v3.hash.reverseStr;
      var v185 = this[v184("niw")];
      var v186 = v185[v184("rotagivan")];
      var v187 = v185[v184("tnemucod")];
      var v188 = v185.Math.random;
      var v189 = v185.Math.abs;
      var v190 = v185.Math.floor;
      var v191 = {
        v: [0, 1]
      };
      v191.r = [v190(v188() * 4095.99), v190(v188() * 4095.99)];
      v191.n = Math.floor(window.Date.now() / 1000);
      v191.z = v190(new Date().getTimezoneOffset() / 10);
      v191.a = v186["use" + v184("gAr") + "ent"];
      v191.c = v187[v184("ooc") + "kie"];
      v191.d = v187[v184("rerrefer")] + "";
      v191.l = v186["la" + v184("augn") + "ge"];
      v191.h = v186.hardwareConcurrency;
      var v192 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      v191.res = v192;
      v192[0] = v191.v[0];
      v192[1] = v191.v[1];
      v192[2] = v191.r[0];
      v192[3] = v191.r[1];
      _0x379605: {
        var v193 = Math.floor(v191.n / 4194304) % 4096;
        var v194 = (v191.n % 4194304 >> 11) % 4096;
        var v195 = v191.n % 4194304 % 2048;
        v192[4] = v193;
        v192[5] = v194;
        v192[6] = v195;
      }
      v192[7] = v189(Math.floor(v191.z / 10) % 4096);
      v192[8] = v189(v3.hash.hashStr((v191.a + "").toLowerCase())) % 4096;
      var v196 = (v191.d + "").toLowerCase().match(`^(?:https?://)?(?:[^@/
]+@)?(?:www.)?([^:/
]+)`);
      v196 = v196 == null ? "" : v196[1];
      v192[9] = v189(v3.hash.hashStr(v196.toLowerCase())) % 4096;
      v192[10] = v189(v3.hash.hashStr((v191.l + "").toLowerCase())) % 4096;
      v192[11] = v191.h % 4096;
      var v197 = 0;
      for (var v198 = 0; v198 < 12; v198++) {
        v197 = v197 * 31 + v192[v198];
        v197 = v197 & v197;
      }
      v197 = Math.abs(v197);
      v192[12] = v197 % 4096;
      for (var v198 = 4; v198 < v192.length; v198++) {
        v192[v198] = v192[v198] ^ v191.r[v198 % 2];
      }
      var v199 = [];
      for (var v198 = 0; v198 < v192.length; v198++) {
        v199.push(v3.FoldChlg.URLSafeBase4096IntToChar(v192[v198]));
      }
      v191.base4096 = v199.join("");
      if (!v185.TMs) {
        v185.TMs = {};
      }
      v185.TMs.hi = v191.base4096;
      v187[v184("ooc") + v184("eik")] = "m" + v184("P1vt") + "ulse=" + v191.base4096 + ";path=/;secure;SameSite=None;Partitioned;";
      if (!v185.TMs.ef) {
        v185.TMs.ef = v185["se" + v184("etnIt") + "rval"](function () {
          v3.browser.calcW1nfo(true);
        }, 1350);
      }
    }
  };
  v3.FoldChlg = {
    URLSafeBase64CharCode2IntMap: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, -1, -1, -1, -1, -1, -1, -1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, -1, -1, -1, -1, 63, -1, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    URLSafeBase64Int2CharMap: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "-", "_"],
    URLSafeBase64CharToInt: function (p197) {
      if (typeof p197 === "string") {
        p197 = p197.charCodeAt(0);
      }
      var v200 = this.URLSafeBase64CharCode2IntMap[p197 % 256];
      if (v200 < 0) {
        throw "arg charCode must be within chars [a-zA-Z0-9:;] '" + p197 + "'";
      }
      return v200;
    },
    URLSafeBase64IntToChar: function (p198) {
      if (p198 < 0 || p198 > 63) {
        throw "arg i must be between 0 .. 63 inclusive";
      }
      return this.URLSafeBase64Int2CharMap[p198 % 64];
    },
    URLSafeBase4096IntToChar: function (p199) {
      if (p199 > 4095 || p199 < 0) {
        throw "arg i must be between 0 .. 4095 inclusive";
      }
      return "" + this.URLSafeBase64IntToChar(p199 >> 6) + this.URLSafeBase64IntToChar(p199 & 63);
    },
    URLSafeBase64Str2IntArray: function (p200) {
      var v201 = [];
      for (var v202 = 0; v202 < p200.length; v202++) {
        v201.push(this.URLSafeBase64CharToInt(p200.charAt(v202)));
      }
      return v201;
    },
    URLSafeBase64IntArray2String: function (p201) {
      var v203 = [];
      for (var v204 = 0; v204 < p201.length; v204++) {
        v203.push(this.URLSafeBase64IntToChar(p201[v204]));
      }
      return v203.join("");
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
      var v208 = this.URLSafeBase64Str2IntArray(p203);
      var v209 = null;
      for (var v210 = 0; v210 < p204; v210++) {
        v208 = this.foldBase64IntArray(v208, 31);
        v209 = this.hashIntAry(this.foldBase64IntArray(v208, p205));
        v207.push(this.URLSafeBase4096IntToChar(v209 % 4096));
      }
      return v207.join("");
    },
    //Skipping below block from obscuring for the performance consistence between browsers while foldchallenge computation
    // javascript-obfuscator:disable
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
    } // javascript-obfuscator:enable
  };
  v3.kee = {
    URLSafeBase64CharCode2IntMap: v3.FoldChlg.URLSafeBase64CharCode2IntMap,
    URLSafeBase64Int2CharMap: v3.FoldChlg.URLSafeBase64Int2CharMap,
    TAIL_KEEINT: "",
    initTS: Date.now(),
    lastKeeTS: -1,
    ciderb64int: null,
    keehist: null,
    keehistPos: 0,
    tf: "",
    prevString: "",
    init: function (p206) {
      this.TAIL_KEEINT = this.URLSafeBase64CharCode2IntMap[95];
      this.lastKeeTS = -1;
      this.ciderb64int = null;
      this.keehist = null;
      this.keehistPos = 0;
      this.prevString = "";
      if (p206 == null || p206.length < 64) {
        return;
      }
      if (p206.length >= 64) {
        p206 = p206.substring(0, 64);
      }
      var v211 = new Array(p206.length);
      var v212 = this.URLSafeBase64CharCode2IntMap[p206.charCodeAt(p206.length - 1)];
      for (var v213 = 0; v213 < p206.length; v213++) {
        var v214 = p206.charCodeAt(v213);
        var v215 = this.URLSafeBase64CharCode2IntMap[v214];
        v211[v213] = v215 ^ v212;
        v212 = v215;
      }
      this.ciderb64int = v211;
      this.keehist = v211.slice(0, v211.length);
      this.keehistPos = 0;
    },
    getKey: function (p207) {
      var v216 = "";
      var vP207 = p207;
      var v217 = this.prevString;
      if (vP207 != null && v217.length <= vP207.length) {
        vP207.split("").forEach(function (p208, p209) {
          if (p208 != v217.charAt(p209)) {
            v216 += p208;
          }
        });
        this.prevString = vP207;
        return v216[0];
      } else {
        this.prevString = vP207 == null ? "" : vP207;
        return "Backspace";
      }
    },
    play: function (p210) {
      var v218 = this.ciderb64int;
      if (v218 == null) {
        return false;
      }
      var v219 = this.getKey(p210.value);
      var v220 = this.keehist;
      var v221 = this.keehistPos;
      var v222 = Date.now();
      var v223 = this.lastKeeTS;
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
        this.keehistPos = v221;
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
      var v227 = v226 in this.URLSafeBase64CharCode2IntMap ? this.URLSafeBase64CharCode2IntMap[v226] : -1;
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
      v220[v221 + 2] = v218[v221 + 2] ^ this.TAIL_KEEINT;
      this.keehistPos = v221 + 2;
      this.lastKeeTS = v222;
      return true;
    },
    getKeesString: function () {
      if (this.ciderb64int == null) {
        return "0";
      }
      var v229 = new Array(this.keehist.length);
      for (var v230 = 0; v230 < this.keehist.length; v230++) {
        v229[v230] = this.URLSafeBase64Int2CharMap[this.keehist[v230]];
      }
      return v229.join("");
    },
    _DEBUG_getkeehistoryReadable: function () {
      if (this.ciderb64int == null) {
        return "";
      }
      var v231 = "";
      var v232 = "";
      var v233 = this.keehist[0] ^ this.ciderb64int[0];
      var v234 = this.keehist[1] ^ this.ciderb64int[1];
      var v235 = (v233 * 64 + v234) / 2;
      for (var v236 = 2; v236 < this.keehist.length; v236 += 2) {
        var v237 = this.ciderb64int[v236];
        var v238 = this.keehist[v236] ^ v237;
        var v239 = this.URLSafeBase64Int2CharMap[v238];
        v231 += v239;
        if (v239 == "_") {
          lastpos = v236;
        }
        v237 = this.ciderb64int[v236 + 1];
        v238 = this.keehist[v236 + 1] ^ v237;
        v232 += v238 + ",";
      }
      return v231 + "|" + v232 + "| FirstKeyTimeSec: " + v235;
    }
  };
  var v240 = v3.util.confExtractorFrmURI();
  v5 = v240.serviceDomain;
  v3.api = {
    request: {
      logUnexpectedJsError: function (p211, p212) {
        var v241 = v3.util.constructURI({
          sk: v346.sitekey,
          bd: v346.hostname,
          info: p211,
          stack: p212
        }, "logJSError");
        v3.api.request.AJAXRequest(v241);
      },
      getCT: function (p213) {
        var v242 = v3.util.constructURI({
          sk: p213.sitekey,
          bd: p213.hostname,
          rt: Math.floor(Date.now()),
          tsh: v3.hash.generate.transactionSignature(p213.sitekey, "mtcap@mtcaptcha.com") || "$",
          act: p213.action || "$",
          ss: p213.sessionID,
          lf: p213.lf,
          tl: p213.textLength != 0 ? p213.textLength : "$",
          lg: p213.lang,
          tp: p213.widgetSize == v3.constant.standard ? "s" : "m"
        }, "challengeToken");
        this.AJAXRequest(v242, p213, v3.api.callback.ctCallback);
      },
      getImg: function (p214) {
        var v243 = v3.util.constructURI({
          sk: p214.sitekey,
          ct: p214.ct,
          fa: p214.fa || "$",
          ss: p214.sessionID
        }, "image");
        this.AJAXRequest(v243, p214, v3.api.callback.imageCallback);
      },
      getAudio: function (p215) {
        var v244 = v3.util.constructURI({
          sk: p215.sitekey,
          ct: p215.ct,
          fa: p215.fa || "$",
          ss: p215.sessionID
        }, "audio");
        this.AJAXRequest(v244, p215, v3.api.callback.audioCallback);
      },
      solvechallenge: function (p216, p217) {
        var v245 = Math.floor(Date.now());
        var v246 = v3.util.getObject(p217);
        v246.isVerifying = true;
        if (v246.isLowFriction) {
          var v247 = "$";
        } else {
          if (v246.challengeType != "imageonly") {
            v3.UI.events.audio.stop(v246);
          }
          var v247 = v3.UI.e[p217].inputText.value;
          v247 = v247.replace(/[^a-z0-9$]/gi, "");
          if (v247.length < v246.anslen) {
            setTimeout(function () {
              if (document.activeElement != v3.UI.e[v246.widgetInstance].inputText) {
                v246.incompleteSol = true;
                v3.status.setStatus(v3.status.code.internal.CAPTCHA_SOLUTION_INCOMPLETE);
              }
            }, 2000);
            return;
          } else if (v247.length > v246.anslen) {
            v247 = v247.substring(0, v246.anslen);
            v3.UI.e[p217].inputText.value = v247;
          }
          v246.incompleteSol = false;
        }
        if (v246.sCode != v3.status.code.general.CAP_VERIFIED) {
          v3.status.setStatus(v3.status.code.internal.VERIFIYING_INPUT);
          v246.qh = v246.enableTestMode != undefined && v246.enableTestMode != "" ? v3.hash.generate.automatedTestCode(v246.ct, v246.enableTestMode) : "$";
          var v248 = {
            ct: v246.ct,
            sk: v246.sitekey,
            st: v247,
            lf: v246.lf,
            bd: v246.hostname,
            rt: v245,
            tsh: v3.hash.generate.transactionSignature(v246.sitekey, "mtcap@mtcaptcha.com") || "$",
            fa: v246.hasFoldChlg && !v246.foldChlg.preRes ? v3.FoldChlg.solve(v246.foldChlg.fseed, v246.foldChlg.fslots, v246.foldChlg.fdepth) : v246.fa,
            qh: v246.qh || "$",
            act: v246.action || "$",
            ss: v246.sessionID,
            tl: v246.textLength != 0 ? v246.textLength : "$",
            lg: v246.lang,
            tp: v246.widgetSize == v3.constant.standard ? "s" : "m",
            kt: v3.kee.getKeesString(),
            fs: v246.foldChlg.fseed ? v246.foldChlg.fseed : 0
          };
          v248 = v3.util.constructURI(v248, "solvechallenge");
          if (v246.hasWaitChlg && !v246.enableTestMode) {
            if (v246.waitChlg > new Date().getTime()) {
              setTimeout(function () {
                v3.api.request.AJAXRequest(v248, v246, v3.api.callback.validateCallback);
              }, v246.waitChlg - new Date().getTime());
            } else {
              this.AJAXRequest(v248, v246, v3.api.callback.validateCallback);
            }
          } else {
            this.AJAXRequest(v248, v246, v3.api.callback.validateCallback);
          }
        }
        if (p216) {
          if (p216.preventDefault) {
            p216.preventDefault();
          } else {
            p216.returnValue = false;
          }
        }
      },
      getAPIURL: function (p218) {
        var v249 = window.location.protocol + "//" + v5 + "/mtcv1/api/";
        switch (p218) {
          case "challengeToken":
            v249 += "getchallenge.json";
            break;
          case "image":
            v249 += "getimage.json";
            break;
          case "audio":
            v249 += "getaudio.json";
            break;
          case "solvechallenge":
            v249 += "solvechallenge.json";
            break;
          case "downloadAudio":
            v249 += "getaudio.mp3";
            break;
          case "logJSError":
            v249 += "logJSError.json";
            break;
        }
        return v249;
      },
      AJAXRequest: function (p219, p220, p221) {
        if (p219 === undefined || p219 === null || p219 === "") {
          return;
        }
        var v250 = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
        try {
          v250.open("GET", p219, true);
          v250.timeout = 20000;
          v250.onreadystatechange = function () {
            if (v250.readyState == 4) {
              if (v250.status == 200) {
                try {
                  p221(JSON.parse(v250.response || v250.responseText));
                } catch (_0x24b217) {
                  if (!p220.widgetEnabled) {
                    v3.UI.renderCaptcha(p220);
                    v3.postMessage(p220, "showCaptcha", {});
                    v3.util.widgetHeightChange(p220);
                  }
                  v3.widget.error(p220, "Error Occurred, Please try again...");
                  v3.log.warn(p220, "Error occurred - " + _0x24b217);
                }
              } else if (v250.status != 0) {
                if (!p220.widgetEnabled) {
                  v3.UI.renderCaptcha(p220);
                  v3.postMessage(p220, "showCaptcha", {});
                  v3.util.widgetHeightChange(p220);
                }
                v3.api.callback.handleHTTPLevelError(v250.status);
              }
            }
          };
          v250.ontimeout = function () {
            if (!p220.widgetEnabled) {
              v3.UI.renderCaptcha(p220);
              v3.util.widgetHeightChange(p220);
            }
            v3.widget.error(p220, p220.langTxt.connectionError, v3.status.code.general.CONNECTION_ERR);
            v3.log.error(p220, p220.langTxt.connectionError, v3.status.code.general.CONNECTION_ERR);
          };
          v250.onerror = function (p222) {
            if (!p220.widgetEnabled) {
              v3.UI.renderCaptcha(p220);
              v3.util.widgetHeightChange(p220);
            }
            v3.widget.networkFailed(p220, v3.status.code.general.CONNECTION_ERR);
            v3.log.error(p220, "Network Connectivity Issues", v3.status.code.general.CONNECTION_ERR);
          };
          v250.send();
        } catch (_0x457d12) {
          v3.log.warn(p220, "Error occurred - " + _0x457d12);
        }
      }
    },
    callback: {
      handleAPILevelError: function (p223) {
        var v251 = v3.status.code.api;
        var v252 = p223.code;
        switch (v252) {
          case v251.BAD_SITEKEY:
            v3.widget.error(v346, v3.status.messages[v251.BAD_SITEKEY], v251.BAD_SITEKEY, true);
            v3.log.error(v346, v3.status.messages[v251.BAD_SITEKEY], v251.BAD_SITEKEY);
            break;
          case v251.SITEKEY_EXPIRED:
            v3.widget.error(v346, v3.status.messages[v251.SITEKEY_EXPIRED], v251.SITEKEY_EXPIRED, true);
            v3.log.error(v346, v3.status.messages[v251.SITEKEY_EXPIRED], v251.SITEKEY_EXPIRED);
            break;
          case v251.DOMAIN_NOTMATCH:
            v3.widget.error(v346, v3.status.messages[v251.DOMAIN_NOTMATCH], v251.DOMAIN_NOTMATCH, true);
            v3.log.error(v346, v3.status.messages[v251.DOMAIN_NOTMATCH], v251.DOMAIN_NOTMATCH);
            break;
          case v251.BAD_TESTKEY:
            v3.widget.error(v346, v3.status.messages[v251.BAD_TESTKEY], v251.BAD_TESTKEY, true);
            v3.log.error(v346, v3.status.messages[v251.BAD_TESTKEY], v251.BAD_TESTKEY);
            break;
          case v251.RESTART_CAPTCHA_TRANSACTION:
          case v251.RESTART_CAPTCHA_CHALLENGE_EXPIRED:
            v346.initialLoad = false;
            v3.api.request.getCT(v346);
            break;
          case v251.REQ_ERR:
          case v251.BAD_CHALLENGETOKEN:
          case v251.BAD_CPUFOLD_ANSWER:
          case v251.MISMATCH_CHALLENGETOKEN_DATA:
          default:
            v3.widget.error(v346, "Something went wrong, Please try again...", v252);
            v3.log.error(v346, p223.result.msgs.errUsrMsg || "Something went wrong, Please try again... (" + v252 + ")", v252);
            v3.util.widgetHeightChange(v346);
            break;
        }
      },
      handleHTTPLevelError: function (p224) {
        var v253 = v3.status.code.http;
        switch (p224) {
          case v253.HTTP_ERROR:
            v3.widget.error(v346, v3.status.messages[v253.HTTP_ERROR], v253.HTTP_ERROR);
            v3.log.error(v346, v3.status.httpErrorMessages[v253.HTTP_ERROR], v253.HTTP_ERROR);
            break;
          case v253.HTTP_ERROR404:
            v3.widget.error(v346, v3.status.messages[v253.HTTP_ERROR404], v253.HTTP_ERROR404);
            v3.log.error(v346, v3.status.httpErrorMessages[v253.HTTP_ERROR404], v253.HTTP_ERROR404);
            break;
          case v253.TOO_MANY_REQUEST:
            v3.widget.error(v346, v3.status.messages[v253.TOO_MANY_REQUEST], v253.TOO_MANY_REQUEST);
            v3.log.error(v346, v3.status.httpErrorMessages[v253.TOO_MANY_REQUEST], v253.TOO_MANY_REQUEST);
            break;
          case v253.INTERNAL_SERVER_ERROR:
            v3.widget.error(v346, v3.status.messages[v253.INTERNAL_SERVER_ERROR], v253.INTERNAL_SERVER_ERROR);
            v3.log.error(v346, v3.status.httpErrorMessages[v253.INTERNAL_SERVER_ERROR], v253.INTERNAL_SERVER_ERROR);
            break;
          case v253.CONNECTION_TIMEOUT:
            v3.widget.error(v346, v3.status.messages[v253.CONNECTION_TIMEOUT], v253.CONNECTION_TIMEOUT);
            v3.log.error(v346, v3.status.httpErrorMessages[v253.CONNECTION_TIMEOUT], v253.CONNECTION_TIMEOUT);
            break;
          default:
            v3.widget.error(v346, "Error Occurred, Please try again...", p224);
            v3.log.error(v346, "Error Occurred, Please try again...", p224);
        }
      },
      ctCallback: function (p225) {
        if (p225.code !== v3.status.code.api.OK) {
          v3.api.callback.handleAPILevelError(p225);
          return;
        }
        if (p225.result.msgs && p225.result.msgs.warnSysMsg) {
          v3.log.warn(v346, p225.result.msgs.warnSysMsg);
        }
        var v254 = p225.result;
        if (v254.challenge.hasFoldChlg) {
          v3.kee.init(v254.challenge.foldChlg.fseed);
        } else {
          v3.kee.init(null);
        }
        if (v254.challenge) {
          v346.captcahRenderedTime = new Date().getTime();
          v346.anslen = v254.challenge.textChlg.textlen;
          v346.ct = v254.challenge.ct;
          v346.hasFoldChlg = v254.challenge.hasFoldChlg;
          v346.foldChlg = v254.challenge.foldChlg;
          v346.isDevMode = v254.context.devMode;
          v346.fa = v346.hasFoldChlg && v346.foldChlg.preRes ? v3.FoldChlg.solve(v346.foldChlg.fseed, v346.foldChlg.fslots, v346.foldChlg.fdepth) : "$";
          v346.isMTCLinksDisabled = v254.context.hideTerms;
          v346.isMTCPowByDisabled = v254.context.hidePowBy;
          v346.hasWaitChlg = v254.challenge.hasWaitChlg;
          v346.hasTextChlg = v254.challenge.hasTextChlg;
          v346.waitChlg = v346.captcahRenderedTime + v3.util.convertTimeHexToNumber(v254.challenge.waitChlg.time);
          v3.expire.setCTExpireTimer(v346, v254.challenge.ctttl);
          if (v254.challenge.hasTextChlg) {
            v346.isLowFriction = false;
            if (!v346.isVisible) {
              v3.postMessage(v346, "showCaptcha", {});
            }
            v346.isVisible = true;
            if (v346.enableMouseFlow == true && !v346.isMouseFlowEnabled) {
              window._mfq = window._mfq || [];
              var v255 = document.createElement("script");
              v255.type = "text/javascript";
              v255.async = true;
              v255.src = "//cdn.mouseflow.com/projects/IFRAME_MOUSE_FLOW_KEY.js";
              document.getElementsByTagName("head")[0].appendChild(v255);
              v346.isMouseFlowEnabled = true;
            }
            v3.UI.renderCaptcha(v346);
            if (v346.initialLoad) {
              v346.sCode = 2200;
              v3.postMessage(v346, "rendered", {
                msg: "Captcha rendered"
              });
            }
            v3.api.request.getImg(v346);
            if (!v3.autoPlay && v346.challengeType != "imageonly") {
              v24 = false;
              v3.api.request.getAudio(v346);
            }
          } else if (v254.challenge.textChlg.textlen == -1) {
            v346.isLowFriction = true;
            v346.isVisible = false;
            v3.postMessage(v346, "removeAnimation", {});
            v3.api.request.solvechallenge(null, v346.widgetInstance);
          }
        }
      },
      imageCallback: function (p226) {
        if (p226.code !== v3.status.code.api.OK) {
          v3.api.callback.handleAPILevelError(p226);
          return;
        }
        if (p226.result.msgs && p226.result.msgs.warnSysMsg) {
          v3.log.warn(v346, p226.result.msgs.warnSysMsg);
        }
        var v256 = v3.UI.e[v346.widgetInstance].imageContainer;
        var v257 = v3.UI.e[v346.widgetInstance].noCssImage;
        v346.image = p226.result.img.image64;
        v257.src = "data:image/png;base64," + v346.image;
        if (!v346.initialLoad) {
          v3.util.doAnimation(v256, "fadein 1s ease-out");
        }
        v256.style.backgroundImage = "url('data:image/png;base64," + v346.image + "')";
        v256.style.filter = "none";
        v256.style.backgroundRepeat = "no-repeat";
        v256.style.backgroundSize = "auto";
        v3.widget.enable(v346);
        if (v3.util.canSolveChallenge()) {
          v3.api.request.solvechallenge(event, v346.widgetInstance);
        }
        if (v346.isMouseWithinAudioContainer && v346.challengeType != "imageonly") {
          v3.UI.events.audio.update(v3.UI.events.audio.status);
        }
        if (typeof v7 != "undefined" && v7 != "" && v3.UI.e[v346.widgetInstance].inputText.value == "") {
          v3.UI.e[v346.widgetInstance].inputText.value = v3.UI.e[v346.widgetInstance].inputText.getAttribute("placeholder");
        }
        if (v13 == true) {
          v3.UI.e[v346.widgetInstance].inputText.focus();
          if (document.body.contains(v25)) {
            document.getElementsByTagName("body")[0].removeChild(v25);
          }
          v13 = false;
        }
      },
      audioCallback: function (p227) {
        if (p227.code !== v3.status.code.api.OK) {
          v3.api.callback.handleAPILevelError(p227);
          return;
        }
        if (p227.result.msgs && p227.result.msgs.warnSysMsg) {
          v3.log.warn(v346, p227.result.msgs.warnSysMsg);
        }
        v346.audio = p227.result.aud.audio64;
        v3.UI.e[v346.widgetInstance].audioContainer.src = "data:audio/" + p227.result.aud.format + ";base64," + v346.audio;
        if (v3.autoPlay && v24) {
          v3.UI.events.audio.play(v346);
        }
      },
      validateCallback: function (p228) {
        if (p228.code !== v3.status.code.api.OK) {
          v3.api.callback.handleAPILevelError(p228);
          return;
        }
        if (p228.result.msgs && p228.result.msgs.warnSysMsg) {
          v3.log.warn(v346, p228.result.msgs.warnSysMsg);
        }
        var v258 = p228.result;
        clearTimeout(v346.challengeExpireTimer);
        if (!v346.isLowFriction) {
          v3.UI.events.status.showRequired(v346, false);
        }
        if (v258.verifyResult.isVerified) {
          v346.verifiedToken = v258.verifyResult.verifiedToken.vt;
          v3.expire.setSTExpireTimer(v346, v258.verifyResult.verifiedToken.vtttl);
          v3.status.setStatus(v3.status.code.internal.VALIDATION_SUCCESS);
        } else {
          if (v346.isLowFriction) {
            v26 = true;
            v346.lf = v346.testmode_lowFrictionInvisible === "" ? "t0" : 0;
            v346.isLowFriction = true;
            v346.isVisible = false;
          }
          v3.status.setStatus(v3.status.code.internal.VALIDATION_FAILED);
        }
      }
    }
  };
  window.MTerr = {};
  var v259 = window.MTerr;
  v259.errCount = 0;
  v259.logCount = 0;
  v259.lastErr = null;
  v259.logErr = v3.api.request.logUnexpectedJsError;
  v259.onUnexpectedJSError = function (p229) {
    v259.storeLastError(p229.error);
    v259.tryLogLastError();
  };
  v259.storeLastError = function (p230) {
    try {
      if (!p230) {
        return;
      }
      v259.errCount++;
      var v260 = {
        info: p230 + "",
        stack: p230.stack ? p230.stack + "" : "(nostack)"
      };
      v260.timestamp = Date.now();
      v259.lastErr = v260;
      if (v260.info.length > 30) {
        v260.info = v260.info.substring(0, 31) + "...";
      }
      if (v260.stack.length > 500) {
        v260.stack.substring(0, 501) + "...";
      }
    } catch (_0x40c88d) {
      v3.log.warn(v346, "Error occurred - " + _0x40c88d);
    }
  };
  v259.tryLogLastError = function () {
    try {
      if (!v259.lastErr) {
        return;
      }
      if (v259.logCount >= 2) {
        return;
      }
      v259.logCount++;
      var v261 = v259.lastErr;
      v259.logErr(v261.info, v261.stack);
    } catch (_0x4fb462) {
      v3.log.warn(v346, "Error occurred - " + _0x4fb462);
    }
  };
  v3.UI = {
    renderCaptcha: function (p231) {
      if (v3.lang.aria[p231.lang] === undefined) {
        p231.ariaTxt = v3.lang.aria.en;
        document.querySelector("html").setAttribute("lang", "en");
      } else {
        p231.ariaTxt = v3.lang.aria[p231.lang];
        document.querySelector("html").setAttribute("lang", p231.lang);
      }
      if (p231.widgetSize == v3.constant.mini) {
        p231.langTxt = p231.customLangText != undefined && p231.customLangText.hasOwnProperty(p231.lang) ? p231.customLangText[p231.lang] : v3.lang.miniDefaults[p231.lang];
        if (!p231.langTxt) {
          p231.langTxt = v3.lang.miniDefaults.en;
        }
        if (p231.initialLoad) {
          this.createMiniWidget(p231.counter, p231.langTxt);
        }
        this.postRender(p231);
        if (p231.miniFormWidth || p231.miniFormHeight) {
          var v262 = v3.UI.e[p231.widgetInstance];
          var v263 = v262 ? v262.card.clientWidth + v3.util.getBorderOfCaptcha(v262) : undefined;
          v3.util.setUserInputWidgetSize(p231, v3.UI.e[p231.widgetInstance], v263);
        }
      } else {
        p231.langTxt = p231.customLangText != undefined && p231.customLangText.hasOwnProperty(p231.lang) ? p231.customLangText[p231.lang] : v3.lang.defaults[p231.lang];
        if (!p231.langTxt) {
          p231.langTxt = v3.lang.defaults.en;
        }
        if (p231.initialLoad) {
          this.createStandardWidget(p231.counter, p231.langTxt);
        }
        this.postRender(p231);
      }
    },
    createMiniWidget: function (p232, p233) {
      try {
        var v264 = "";
        if (v346.autoFadeOuterText) {
          v264 = "mtcap-hidden";
        }
        document.getElementById("mtcap-main-" + p232).innerHTML = "";
        document.getElementById("mtcap-main-" + p232).style.padding = "0px";
        document.getElementById("mtcap-main-" + p232).style.transform = "scale(1)";
        this.append("div", {
          class: "mtcap-card-mini",
          id: "mtcap-card-" + p232
        }, "mtcap-main-" + p232);
        if (navigator.maxTouchPoints || "ontouchstart" in document.documentElement) {
          this.append("div", {
            id: "mtcap-touchripple-container-" + p232,
            class: "mtcap-touchripple-container-mini"
          }, "mtcap-main-" + p232).append("div", {
            class: "mtcap-touchripple-canvas-mini",
            id: "mtcap-touchripple-canvas-" + p232
          }, "mtcap-touchripple-container-" + p232).append("img", {
            class: "mtcap-ripple-mini",
            "aria-hidden": "true",
            id: "mtcap-ripple-" + p232,
            src: v3.asserts.ripple,
            width: "50",
            height: "50"
          }, "mtcap-touchripple-canvas-" + p232);
        }
        this.append("div", {
          class: "divTable mtcap-inputbox-mini mtcap-inputborder-mini mtcap-inputborder-custom",
          id: "mtcap-inputbox-" + p232,
          cellspacing: "0"
        }, "mtcap-card-" + p232);
        if (v346.challengeType != "imageonly") {
          this.append("div", {
            class: "mtcap-audioctrl-mini " + v264,
            id: "mtcap-audioctrl-" + p232
          }, "mtcap-card-" + p232).append("span", {
            class: "mtcap-show-if-nocss-mini",
            "aria-hidden": "true",
            id: "desc4AudioButton-" + p232
          }, "mtcap-audioctrl-" + p232, v346.ariaTxt.default.audioButton).append("input", {
            class: "mtcap-audioctrlicon-mini",
            id: "mtcap-audioctrlicon-" + p232,
            title: v346.ariaTxt.default.audioButton,
            type: "button",
            value: "",
            "aria-keyshortcuts": ",",
            "aria-labelledby": "desc4AudioButton-" + p232
          }, "mtcap-audioctrl-" + p232).append("div", {
            class: "mtcap-audioctrlbg-mini",
            id: "mtcap-audioctrlbg-" + p232
          }, "mtcap-audioctrl-" + p232).append("audio", {
            id: "mtcap-audio-" + p232,
            preload: "auto"
          }, "mtcap-main-" + p232);
        }
        this.append("span", {
          class: "mtcap-show-if-nocss-mini",
          "aria-hidden": "true",
          id: "desc4InputText-" + p232
        }, "mtcap-inputbox-" + p232, v346.ariaTxt.default.inputTextForm).append("input", {
          class: "mtcap-noborder mtcap-inputtext-mini mtcap-inputtext-custom",
          id: "mtcap-inputtext-" + p232,
          type: "text",
          placeholder: p233.inputPrompt,
          autocomplete: "off",
          autocorrect: "off",
          pattern: "[a-zA-Z0-9]*",
          "aria-labelledby": "desc4InputText-" + p232
        }, "mtcap-inputbox-" + p232).append("div", {
          class: "mtcap-image-mini",
          id: "mtcap-image-" + p232,
          style: "filter : hue-rotate(" + Math.floor(Math.random() * 37) * 10 + "deg);"
        }, "mtcap-card-" + p232).append("img", {
          class: "mtcap-show-if-nocss-mini",
          id: "mtcap-image-nocss-" + p232,
          src: v3.asserts.noCSS
        }, "mtcap-image-" + p232).append("div", {
          class: "mtcap-statusbox-wh-mini mtcap-inputborder-mini mtcap-inputborder-custom divTableRow",
          id: "mtcap-statusbox-" + p232
        }, "mtcap-card-" + p232).append("span", {
          class: "mtcap-hidden-aria",
          "aria-live": "assertive",
          "aria-hidden": "false",
          id: "desc4CaptchaStatus-" + p232
        }, "mtcap-statusbox-" + p232, v346.ariaTxt.default.statusButton).append("span", {
          class: "mtcap-show-if-nocss-mini",
          "aria-hidden": "true",
          id: "desc4StatusButton-" + p232
        }, "mtcap-statusbox-" + p232, v346.ariaTxt.default.statusButton).append("input", {
          class: "mtcap-noborder mtcap-statusimg-mini",
          id: "mtcap-statusimg-" + p232,
          type: "text",
          readonly: "readonly",
          tabindex: "-1",
          value: String.fromCharCode(59648)
        }, "mtcap-statusbox-" + p232).append("input", {
          class: "mtcap-noborder mtcap-mozbutton mtcap-statusbutton-mini",
          id: "mtcap-statusbutton-" + p232,
          type: "button",
          "aria-labelledby": "desc4StatusButton-" + p232,
          value: " "
        }, "mtcap-statusbox-" + v346.counter).append("div", {
          class: "mtcap-msgbox " + v264,
          id: "mtcap-msgbox-" + p232
        }, "mtcap-main-" + p232).append("div", {
          class: "mtcap-msg mtcap-msg-custom",
          id: "mtcap-msg-" + p232
        }, "mtcap-msgbox-" + p232).append("a", {
          id: "mtcap-msglink-powered-by-" + p232,
          class: "mtcap-msglink-active mtcap-msglink-custom mtcap-poweredby-link " + v264,
          href: "https://www.mtcaptcha.com",
          target: "_blank"
        }, "mtcap-msg-" + p232, v346.langTxt.miniByMT).append("a", {
          id: "mtcap-msglink-privacy-" + p232,
          class: "mtcap-msglink-active mtcap-msglink-custom" + v264,
          href: "https://www.mtcaptcha.com/legal-privacy-captcha",
          tabindex: "0",
          role: "link",
          target: "_blank"
        }, "mtcap-msg-" + p232, v346.langTxt.privacy).append("a", {
          id: "mtcap-msglink-terms-" + p232,
          class: "mtcap-msglink-active mtcap-msglink-custom" + v264,
          href: "https://www.mtcaptcha.com/legal-terms",
          tabindex: "0",
          role: "link",
          target: "_blank"
        }, "mtcap-msg-" + p232, v346.langTxt.terms);
        var v265 = document.getElementById("mtcap-image-" + p232);
        v3.util.doAnimation(v265, "fadein 1s ease-out");
        v3.util.addEvent(window, "resize", function () {
          v3.util.setUserInputWidgetSize(v346, v3.UI.e[v346.widgetInstance], window.innerWidth, window.innerHeight);
        });
      } catch (_0xd927f) {
        v3.log.warn(_0xd927f);
      }
    },
    postRender: function (p234) {
      this.cacheDOMEle(p234);
      v3.style.apply(p234);
      if (p234.initialLoad) {
        v3.util.widgetHeightChange(p234);
        this.events.bind(p234);
        p234.sCode = 1201;
        v3.widget.load(p234, false);
        v3.status.setStatus(v3.status.code.internal.CAPTCHA_LOADED);
      } else {
        v3.util.addEvent(v3.UI.e[p234.widgetInstance].inputText, "keyup", v3.UI.events.inputKeyup);
        p234.sCode = v3.status.code.general.CAP_NOT_VERIFIED;
        p234.statusDesc = v3.status.messages[v3.status.code.general.CAP_NOT_VERIFIED];
        v3.status.setStatus(v3.status.code.internal.CAPTCHA_NEWLY_LOADED);
        setTimeout(function () {
          v3.status.setStatus(v3.status.code.internal.CAPTCHA_LOADED);
        }, 2000);
      }
      p234.widgetEnabled = true;
      v3.util.widgetHeightChange(p234);
      vV17 = v17;
      vV19 = v19;
      vV20 = v20;
    },
    createStandardWidget: function (p235, p236) {
      try {
        var v266 = "";
        var v267 = "";
        if (v346.autoFadeOuterText) {
          v266 = "mtcap-hidden";
        }
        document.getElementById("mtcap-main-" + p235).innerHTML = "";
        this.append("div", {
          class: "mtcap-card error-card",
          id: "mtcap-error-card-" + p235
        }, "mtcap-main-" + p235);
        if (!v346.isMTCLinksDisabled) {
          this.append("div", {
            id: "mtcap-legal-" + p235,
            class: "mtcap-msg mtcap-msg-custom mtcap-msg-legal-block "
          }, "mtcap-main-" + p235).append("a", {
            id: "mtcap-msglink-privacy-" + p235,
            class: "mtcap-msglink-active mtcap-msglink-custom " + v266,
            href: "https://www.mtcaptcha.com/legal-privacy-captcha",
            tabindex: "0",
            role: "link",
            target: "_blank"
          }, "mtcap-legal-" + p235, v346.langTxt.privacy).append("span", {
            class: "mtcap-msglink mtcap-msglink-custom " + v266,
            id: "mtcap-ampersand-" + p235
          }, "mtcap-legal-" + p235, " &amp; ").append("a", {
            id: "mtcap-msglink-terms-" + p235,
            class: "mtcap-msglink-active mtcap-msglink-custom " + v266,
            href: "https://www.mtcaptcha.com/legal-terms",
            tabindex: "0",
            role: "link",
            target: "_blank"
          }, "mtcap-legal-" + p235, v346.langTxt.terms);
        } else {
          this.append("div", {
            id: "mtcap-legal-" + p235,
            class: "mtcap-msg",
            tabindex: "-1",
            style: "height:15px"
          }, "mtcap-main-" + p235);
        }
        this.append("div", {
          class: "mtcap-card",
          id: "mtcap-card-" + p235
        }, "mtcap-main-" + p235);
        if (navigator.maxTouchPoints || "ontouchstart" in document.documentElement) {
          this.append("div", {
            id: "mtcap-touchripple-container-" + p235,
            class: "mtcap-touchripple-container"
          }, "mtcap-main-" + p235).append("div", {
            class: "mtcap-touchripple-canvas",
            id: "mtcap-touchripple-canvas-" + p235
          }, "mtcap-touchripple-container-" + p235).append("img", {
            class: "mtcap-ripple",
            "aria-hidden": "true",
            id: "mtcap-ripple-" + p235,
            src: v3.asserts.ripple,
            width: "50",
            height: "50"
          }, "mtcap-touchripple-canvas-" + p235);
        }
        if (v346.challengeType != "imageonly") {
          this.append("div", {
            class: "mtcap-audioctrl",
            id: "mtcap-audioctrl-" + p235
          }, "mtcap-card-" + p235).append("span", {
            class: "mtcap-show-if-nocss",
            "aria-hidden": "true",
            id: "desc4AudioButton-" + p235
          }, "mtcap-audioctrl-" + p235, v346.ariaTxt.default.audioButton).append("input", {
            class: "mtcap-audioctrlicon",
            id: "mtcap-audioctrlicon-" + p235,
            title: v346.ariaTxt.default.audioButton,
            type: "button",
            value: "",
            "aria-keyshortcuts": ",",
            "aria-labelledby": "desc4AudioButton-" + p235
          }, "mtcap-audioctrl-" + p235).append("div", {
            class: "mtcap-audioctrlbg",
            id: "mtcap-audioctrlbg-" + p235
          }, "mtcap-audioctrl-" + p235).append("audio", {
            id: "mtcap-audio-" + p235,
            preload: "auto"
          }, "mtcap-main-" + p235);
        }
        this.append("div", {
          class: "mtcap-image",
          "aria-label": "captcha image.",
          id: "mtcap-image-" + p235,
          style: "filter : hue-rotate(" + Math.floor(Math.random() * 37) * 10 + "deg);"
        }, "mtcap-card-" + p235).append("img", {
          class: "mtcap-show-if-nocss",
          "aria-label": "captcha image.",
          id: "mtcap-image-nocss-" + p235,
          src: v3.asserts.noCSS
        }, "mtcap-image-" + p235).append("div", {
          class: "divTable mtcap-inputbox",
          id: "mtcap-inputbox-" + p235,
          cellspacing: "0"
        }, "mtcap-card-" + p235).append("div", {
          id: "mtcap-tr-" + p235,
          class: "divTableRow"
        }, "mtcap-inputbox-" + p235).append("div", {
          class: "mtcap-inputborder mtcap-inputborder-custom mtcap-td-block",
          style: "border-right:0px",
          id: "mtcap-td-" + p235
        }, "mtcap-tr-" + p235).append("span", {
          class: "mtcap-show-if-nocss-mini",
          "aria-hidden": "true",
          id: "desc4InputText-" + p235
        }, "mtcap-inputbox-" + p235, v346.ariaTxt.default.inputTextForm).append("input", {
          class: "mtcap-noborder mtcap-inputtext mtcap-inputtext-custom",
          id: "mtcap-inputtext-" + p235,
          type: "text",
          placeholder: p236.inputPrompt,
          autocomplete: "off",
          autocorrect: "off",
          pattern: "[a-zA-Z0-9]*",
          "aria-labelledby": "desc4InputText-" + p235
        }, "mtcap-td-" + p235).append("div", {
          class: "mtcap-inputborder mtcap-inputborder-custom mtcap-statusbox-wh",
          id: "mtcap-statusbox-" + p235
        }, "mtcap-tr-" + p235).append("span", {
          class: "mtcap-hidden-aria",
          "aria-live": "assertive",
          "aria-hidden": "false",
          id: "desc4CaptchaStatus-" + p235
        }, "mtcap-statusbox-" + p235, v346.ariaTxt.default.statusButton).append("span", {
          class: "mtcap-show-if-nocss",
          "aria-hidden": "true",
          id: "desc4StatusButton-" + p235
        }, "mtcap-statusbox-" + p235, v346.ariaTxt.default.statusButton).append("input", {
          class: "mtcap-noborder mtcap-statusimg",
          id: "mtcap-statusimg-" + p235,
          type: "text",
          readonly: "readonly",
          tabindex: "-1",
          value: String.fromCharCode(59648)
        }, "mtcap-statusbox-" + p235).append("input", {
          class: "mtcap-noborder mtcap-mozbutton mtcap-statusbutton",
          id: "mtcap-statusbutton-" + p235,
          type: "button",
          "aria-labelledby": "desc4StatusButton-" + p235,
          value: " "
        }, "mtcap-statusbox-" + v346.counter).append("div", {
          class: "mtcap-msgbox " + v266,
          id: "mtcap-msgbox-" + p235
        }, "mtcap-main-" + p235).append("div", {
          class: "mtcap-msg mtcap-msg-custom",
          id: "mtcap-msg-" + p235
        }, "mtcap-msgbox-" + p235);
        if (!v346.isMTCPowByDisabled) {
          this.append("a", {
            id: "mtcap-msglink-powered-by-" + p235,
            class: "mtcap-msglink-active mtcap-msglink-custom mtcap-poweredby-link",
            href: "https://www.mtcaptcha.com",
            target: "_blank"
          }, "mtcap-msg-" + p235, v346.langTxt.byMT);
        }
        this.append("div", {
          class: "mtcap-alert",
          id: "mtcap-alert-" + p235
        }, "mtcap-error-card-" + p235).append("img", {
          class: "mtcap-alert-img",
          id: "mtcap-alert-img-" + p235,
          alt: "alert image",
          src: v3.asserts.alrtImg
        }, "mtcap-alert-" + p235).append("div", {
          class: "mtcap-alert-msg",
          id: "mtcap-alert-msg-" + p235,
          "aria-live": "assertive",
          "aria-invalid": "true",
          tabindex: "0"
        }, "mtcap-alert-" + p235, v346.langTxt.connectionError).append("div", {
          class: "error-block",
          id: "error-block-" + p235
        }, "mtcap-alert-" + p235).append("span", {
          class: "error-code",
          id: "error-code-" + p235
        }, "error-block-" + p235).append("input", {
          class: "mtcap-alert-btn",
          id: "mtcap-alert-btn-" + p235,
          type: "button",
          value: "OK"
        }, "error-block-" + p235);
        var v268 = document.getElementById("mtcap-image-" + p235);
        v3.util.doAnimation(v268, "fadein 1s ease-out");
      } catch (_0x20563d) {
        v3.log.warn(v346, _0x20563d);
      }
    },
    append: function (p237, p238, p239, p240) {
      var v269 = document.createElement(p237);
      var v270 = document.getElementById(p239);
      this.setAttributes(v269, p238);
      if (p240 != undefined) {
        v269.innerHTML = p240;
      }
      v270.appendChild(v269);
      return this;
    },
    setAttributes: function (p241, p242) {
      for (var v271 in p242) {
        p241.setAttribute(v271, p242[v271]);
      }
    },
    e: {},
    cacheDOMEle: function (p243) {
      var v272 = {
        audio: document.getElementById("mtcap-audioctrlicon-" + p243.counter),
        audioControl: document.getElementById("mtcap-audioctrl-" + p243.counter),
        audioControlBG: document.getElementById("mtcap-audioctrlbg-" + p243.counter),
        stsBtn: document.getElementById("mtcap-statusbutton-" + p243.counter),
        stsImg: document.getElementById("mtcap-statusimg-" + p243.counter),
        inputText: document.getElementById("mtcap-inputtext-" + p243.counter),
        main: document.getElementById("mtcap-main-" + p243.counter),
        imageContainer: document.getElementById("mtcap-image-" + p243.counter),
        noCssImage: document.getElementById("mtcap-image-nocss-" + p243.counter),
        audioContainer: document.getElementById("mtcap-audio-" + p243.counter),
        card: document.getElementById("mtcap-card-" + p243.counter),
        msg: document.getElementById("mtcap-msg-" + p243.counter),
        inputbox: document.getElementById("mtcap-inputbox-" + p243.counter),
        errCard: document.getElementById("mtcap-error-card-" + p243.counter),
        alrtbtn: document.getElementById("mtcap-alert-btn-" + p243.counter),
        ariaAudio: document.getElementById("desc4AudioButton-" + p243.counter),
        ariaInput: document.getElementById("desc4InputText-" + p243.counter),
        ariaStatus: document.getElementById("desc4StatusButton-" + p243.counter),
        ariaCaptchaStatus: document.getElementById("desc4CaptchaStatus-" + p243.counter),
        alrtImg: document.getElementById("mtcap-alert-img-" + p243.counter),
        alrtMsg: document.getElementById("mtcap-alert-msg-" + p243.counter),
        alert: document.getElementById("mtcap-alert-" + p243.counter),
        requireCSS: document.getElementById("mtcap-require-css-msg-" + p243.counter),
        privacyLink: document.getElementById("mtcap-msglink-privacy-" + p243.counter),
        termsLink: document.getElementById("mtcap-msglink-terms-" + p243.counter),
        ampersand: document.getElementById("mtcap-ampersand-" + p243.counter),
        iframe: document.getElementById("mtcaptcha-iframe-" + p243.counter),
        msgContainer: document.getElementById("mtcap-msgbox-" + p243.counter),
        invalidMsg: document.getElementById("mtcap-invalid-msg-" + p243.counter),
        errorCode: document.getElementById("error-code-" + p243.counter),
        stsBox: document.getElementById("mtcap-statusbox-" + p243.counter)
      };
      if (p243.widgetSize == v3.constant.mini) {
        delete v272.alrtbtn;
        delete v272.errCard;
        delete v272.alrtImg;
        delete v272.alrtMsg;
        delete v272.alert;
      }
      this.e[p243.widgetInstance] = v272;
    },
    upateAriaMessage: function (p244, p245) {},
    events: {
      bind: function (p246) {
        var v273 = v3.UI.e[p246.widgetInstance];
        var v274 = v273.audioControl;
        var v275 = v273.inputText;
        var v276 = v273.stsBtn;
        var v277 = v273.alrtbtn;
        if (v274 != null) {
          v3.util.addEvent(v274, ["mouseenter", "focus", "focusin"], function () {
            p246.isMouseWithinAudioContainer = true;
            if (p246.challengeType != "imageonly") {
              v3.UI.e[p246.widgetInstance].audio.style.color = p246.widgetSize == v3.constant.mini ? v3.style.miniIconColors.audiofocus : v3.style.iconColors.audiofocus;
              if (v3.UI.e[p246.widgetInstance].audioContainer.src == "") {
                v3.UI.events.audio.update(3);
              } else {
                v3.UI.events.audio.update(v3.UI.events.audio.status);
              }
            }
          });
          v3.util.addEvent(v274, ["touchend"], function (p247) {
            p247.preventDefault();
            v3.UI.events.toggleAudioCtrl();
          });
          v3.util.addEvent(v274, ["click"], v3.UI.events.toggleAudioCtrl);
          v3.util.addEvent(v274, ["mouseleave", "focusout"], function () {
            p246.isMouseWithinAudioContainer = false;
            if (p246.challengeType != "imageonly" && v3.UI.events.audio.status != 1) {
              if (p246.widgetSize == v3.constant.standard) {
                v3.UI.e[p246.widgetInstance].audio.style.color = v3.style.iconColors.audio;
              } else {
                v3.UI.e[p246.widgetInstance].audio.style.color = v3.style.miniIconColors.audio;
              }
            }
            if (!v3.util.isAudioPlay(p246) && !v3.util.isAudioContinue(p246) && !v3.UI.e[p246.widgetInstance].audioContainer.src == "") {
              return;
            } else if (!p246.audioTimer) {
              v3.UI.events.audio.update(0);
              v3.UI.events.status.showStatusMsg(p246, 0);
            }
          });
        }
        v3.util.addEvent(v275, ["focusout"], function (p248) {
          if (typeof v7 != "undefined" && v7 != "" && this.value == "") {
            this.value = this.getAttribute("placeholder");
          }
          if (v3.util.canSolveChallenge()) {
            v3.api.request.solvechallenge(p248, p246.widgetInstance);
          }
          if (p246.sCode != v3.status.code.general.CAP_VERIFIED) {
            v3.UI.events.status.showStatusMsg(p246, 0);
          }
        });
        v3.util.addEvent(v275, "focusin", function (p249) {
          var vThis = this;
          setTimeout(function () {
            vThis.selectionStart = vThis.selectionEnd;
          }, 1);
          v3.util.removePlaceholderText();
          p246.autoReloadCnt = 0;
          if (p246.sCode == v3.status.code.general.CAP_EXPIRED || p246.sCode == v3.status.code.general.CAP_VERIFIED_TOKEN_EXPIRED) {
            v3.UI.events.status.showStatusMsg(p246, 0);
            v3.render.reset(p246.widgetInstance);
            return;
          } else if (p246.sCode == v3.status.code.general.CAP_VERIFIED) {
            return;
          } else if (p246.widgetSize == v3.constant.mini) {
            v3.UI.events.status.showStatusMsg(p246, 1, p246.langTxt.enterTextMsg);
          } else {
            v3.UI.events.status.showStatusMsg(p246, 0);
          }
        });
        v3.util.addEvent(v275, "input", function (p250) {
          v3.UI.events.inputKeyPress(v275, p250);
          v3.kee.play(v275);
        });
        v3.util.addEvent(v275, "keyup", v3.UI.events.inputKeyup);
        v3.util.addEvent(v275, "keydown", v3.UI.events.inputKeyDown);
        v3.util.addEvent(v276, "mousedown", function (p251) {
          if (v3.UI.events.isCaptchaFieldsDisabled(p251)) {
            return;
          }
          v3.UI.events.status.showStatusPressed(p246, true, v3.UI.e[p246.widgetInstance].stsImg);
        });
        v3.util.addEvent(v276, "mouseup", function (p252) {
          if (v3.UI.events.isCaptchaFieldsDisabled(p252)) {
            return;
          }
          v3.UI.events.status.showStatusPressed(p246, false, v3.UI.e[p246.widgetInstance].stsImg);
        });
        v3.util.addEvent(v276, "mouseleave", function (p253) {
          if (v3.UI.events.isCaptchaFieldsDisabled(p253)) {
            return;
          }
          v3.UI.events.status.showStatusPressed(p246, false, v3.UI.e[p246.widgetInstance].stsImg);
        });
        v3.util.addEvent(v276, ["mouseenter", "focus"], function (p254) {
          if (v3.UI.events.isCaptchaFieldsDisabled(p254) || v3.status.getInternalStatus() == v3.status.code.internal.ERROR) {
            return;
          }
          v3.UI.events.status.showStatusMsg(p246, 1, p246.langTxt.captchaRefresh);
        });
        v3.util.addEvent(v276, ["mouseleave", "focusout"], function (p255) {
          if (v3.UI.events.isCaptchaFieldsDisabled(p255)) {
            return;
          }
          if (p246.incompleteSol == true) {
            v3.UI.events.status.showIncomplete(p246);
          } else {
            v3.UI.events.status.showStatusMsg(p246, 0);
          }
        });
        v3.util.addEvent(v276, "click", v3.UI.events.toggleStatusImg);
        v3.util.addEvent(v276, "touchend", function (p256) {
          p256.preventDefault();
          v3.UI.events.toggleStatusImg();
        });
        if (p246.widgetSize == v3.constant.standard) {
          v3.util.addEvent(v277, "click", function () {
            v3.render.reset(p246.widgetInstance);
            v3.widget.online(p246.widgetInstance);
          });
        }
      },
      isCaptchaFieldsDisabled: function (p257) {
        var v278 = v3.status.internalStatus;
        var v279 = v3.status.code.internal;
        if (v278 == v279.RELOADING_NEW || v278 == v279.LOADING_NEW || v278 == v279.VALIDATION_SUCCESS) {
          if (p257) {
            p257.preventDefault();
          }
          return true;
        }
        return false;
      },
      isInputFieldDisabled: function (p258) {
        var v280 = v3.status.internalStatus;
        var v281 = v3.status.code.internal;
        if (v280 != v281.LOADING_NEW && v280 != v281.CAPTCHA_LOADED && v280 != v281.CAPTCHA_NEWLY_LOADED && v280 != v281.AUDIO_DOWNLOADING && v280 != v281.AUDIO_PLAYING && v280 != v281.CAPTCHA_SOLUTION_INCOMPLETE) {
          if (p258 && p258.keyCode != 9) {
            p258.preventDefault();
          }
          return true;
        }
        return false;
      },
      inputKeyDown: function (p259) {
        if (v3.UI.events.isInputFieldDisabled(p259)) {
          return;
        }
        v3.util.removePlaceholderText();
      },
      inputKeyup: function (p260) {
        if (v3.UI.events.isInputFieldDisabled(p260)) {
          return;
        }
        v3.util.removePlaceholderText();
        this.value = this.value.replace(/[^a-z0-9$]/gi, "");
        var v282 = typeof p260.which == "number" ? p260.which : p260.keyCode;
        if (v282 == 44 || v282 == 63 || v282 == 188 || v282 == 9) {
          return;
        }
        v3.UI.events.status.showStatusMsg(v346, 0);
        clearTimeout(v346.completeTimer);
        clearTimeout(v346.validateTimer);
        if (this.value.length >= v346.anslen) {
          v3.kee.tf.onkeydown = null;
          v3.UI.e[v346.widgetInstance].inputText.removeEventListener("keyup", v3.UI.events.inputKeyup);
          if (v346.isVerifying !== true) {
            v3.api.request.solvechallenge(p260, v346.widgetInstance);
          }
        } else if (this.value.length < v346.anslen) {
          if (p260.keyCode == 13) {
            v3.status.setStatus(v3.status.code.internal.CAPTCHA_SOLUTION_INCOMPLETE);
          }
          v346.validateTimer = setTimeout(function () {
            v346.incompleteSol = true;
            v3.status.setStatus(v3.status.code.internal.CAPTCHA_SOLUTION_INCOMPLETE);
          }, 5000);
        }
      },
      inputKeyPress: function (p261, p262) {
        if (v3.UI.events.isInputFieldDisabled(p262)) {
          return;
        }
        v3.util.removePlaceholderText();
        var v283 = false;
        var v284 = false;
        if (p261.value.indexOf(",") >= 0) {
          v283 = true;
        }
        if (p261.value.indexOf("?") >= 0) {
          v284 = true;
        }
        if (v283) {
          p262.preventDefault();
          var v285 = Date.now();
          if (v285 > v10 + 800) {
            v10 = v285;
            setTimeout(function () {
              v3.UI.events.toggleAudioCtrl();
            }, 700);
          }
        } else if (v284) {
          p262.preventDefault();
          var v285 = Date.now();
          if (v285 > v11 + 1000) {
            v11 = v285;
            v3.UI.events.toggleStatusImg();
          }
        }
      },
      toggleAudioCtrl: function () {
        if (v346.challengeType != "imageonly") {
          var v286 = v3.UI.e[v346.widgetInstance].audioContainer;
          if (navigator.maxTouchPoints || "ontouchstart" in document.documentElement) {
            if (v346.widgetSize == v3.constant.standard) {
              v3.util.showTouchRippleAtPos(-12, -12, v346);
            } else {
              var v287 = v3.UI.e[v346.widgetInstance].inputbox;
              var v288 = v287.scrollWidth;
              v3.util.showTouchRippleAtPos(v288, 1, v346);
            }
          }
          if (v286.src == "") {
            v3.status.setStatus(v3.status.code.internal.AUDIO_DOWNLOADING);
            v24 = true;
            v3.api.request.getAudio(v346);
            v3.status.setStatus(v3.status.code.internal.CAPTCHA_LOADED);
          } else {
            v3.UI.events.audio.play(v346);
            v3.UI.events.audio.update(v3.UI.events.audio.status);
          }
        }
      },
      toggleStatusImg: function () {
        if (v3.UI.events.isCaptchaFieldsDisabled()) {
          return;
        }
        if (navigator.maxTouchPoints || "ontouchstart" in document.documentElement) {
          var v289 = document.getElementById("mtcap-card-" + v346.counter);
          var v290 = v289.scrollWidth - 50;
          v3.util.showTouchRippleAtPos(v290, 78, v346);
        }
        v13 = true;
        v25 = document.createElement("input");
        v3.UI.setAttributes(v25, {
          type: "text",
          "aria-hidden": "true",
          readonly: "true",
          style: "border: 0; position: absolute; opacity : 0; height : 0; font-size: 16px;"
        });
        document.body.appendChild(v25);
        v25.focus();
        v3.render.reset(v346.widgetInstance);
      },
      audio: {
        status: 0,
        play: function (p263) {
          var v291 = v3.UI.e[p263.widgetInstance].audioContainer;
          var v292 = v3.UI.events;
          var v293 = v291.duration * 1000;
          var v294;
          if (v291.paused && v3.status.getInternalStatus() != v3.status.code.internal.VERIFIYING_INPUT && v3.status.getInternalStatus() != v3.status.code.internal.VALIDATION_SUCCESS) {
            v291.play();
            v3.status.setStatus(v3.status.code.internal.AUDIO_PLAYING);
            v292.audio.update(1);
            v292.audio.status = 1;
            setTimeout(function checkAudEnded() {
              clearTimeout(v294);
              if (v3.status.getInternalStatus() == v3.status.code.internal.VERIFIYING_INPUT || v3.status.getInternalStatus() == v3.status.code.internal.VALIDATION_SUCCESS) {
                v3.UI.events.audio.stop(p263);
              } else if (v291.ended) {
                v292.audio.status = 0;
                if (p263.isMouseWithinAudioContainer && p263.challengeType != "imageonly") {
                  v292.audio.update(v292.audio.status);
                } else {
                  v292.audio.toggleImg(p263, false, 0);
                  v292.status.showStatusMsg(p263, 0);
                  v3.UI.e[p263.widgetInstance].audio.style.color = v3.style.iconColors.audio;
                }
              } else {
                v294 = setTimeout(checkAudEnded, 1000);
              }
            }, v293);
          } else {
            v291.pause();
            v292.audio.status = 2;
          }
        },
        stop: function (p264) {
          var v295 = v3.UI.e[p264.widgetInstance].audioContainer;
          var v296 = v3.UI.events;
          if (!v295.paused) {
            v295.pause();
            v296.audio.status = 2;
          }
        },
        update: function (p265) {
          var v297 = v3.UI.events.audio;
          var v298 = v3.UI.events.status;
          switch (p265) {
            case 1:
              v297.toggleImg(v346, false, 1);
              v298.showStatusMsg(v346, 1, v346.langTxt.audioPlaying);
              break;
            case 2:
              v297.toggleImg(v346, false, 0);
              v298.showStatusMsg(v346, 1, v346.langTxt.continueAudio);
              break;
            case 3:
              v297.toggleImg(v346, false, 2);
              v298.showStatusMsg(v346, 1, v346.langTxt.downloadAudio);
              break;
            case 4:
              v297.toggleImg(v346, false, 3);
              v298.showStatusMsg(v346, 1, v346.langTxt.audioDownloading);
              break;
            default:
              v297.toggleImg(v346, false, 0);
              v298.showStatusMsg(v346, 1, v346.langTxt.audioPlay);
              break;
          }
        },
        toggleImg: function (p266, p267, p268) {
          var v299 = v3.UI.e[p266.widgetInstance].audio;
          var v300 = "";
          var v301 = 0;
          var v302 = v3.UI.events.audio;
          p267 = p267 || false;
          if (p267 || p268 > 4) {
            p268 = 0;
          }
          if (!document.createElement("audio").canPlayType && p268 == 1) {
            p268 = 3;
          }
          switch (p268) {
            case 0:
              v300 = "";
              break;
            case 1:
              v300 = ["", "", ""];
              v301 = 400;
              break;
            case 2:
              v300 = ["", "", ""];
              v301 = 400;
              break;
            case 3:
              v300 = ["", "", ""];
              v301 = 300;
              break;
          }
          if (p268 === 0) {
            v302.clearRotateChars(p266);
            v299.value = v300;
          } else {
            v302.rotateChars(v299, v300, v301, p266);
          }
        },
        rotateChars: function (p269, p270, p271, p272) {
          var v303 = v3.UI.events.audio;
          if (p272.rotateCharIntv) {
            clearInterval(p272, p272.rotateCharIntv);
          }
          if (!p272.rotateCharObj) {
            p272.rotateCharObj = {};
          }
          p272.rotateCharObj.dom = p269;
          p272.rotateCharObj.chars = p270;
          p272.rotateCharObj.startTS = Date.now();
          p272.rotateCharObj.intvMS = p271;
          p272.rotateCharObj.pos = 0;
          v303.doCharsRotate(p272);
          p272.rotateCharIntv = setInterval(function () {
            v303.doCharsRotate(p272);
          }, p271 / 2);
        },
        clearRotateChars: function (p273, p274) {
          if (p273.rotateCharIntv) {
            clearInterval(p273.rotateCharIntv);
          }
          if (p273.rotateCharObj) {
            var v304 = p273.rotateCharObj.dom;
            p273.rotateCharObj.dom = null;
            if (v304 && p274) {
              v304.value = p274;
            }
          }
        },
        doCharsRotate: function (p275) {
          if (!p275.rotateCharObj || !p275.rotateCharObj.dom) {
            return;
          }
          var v305 = Math.floor(Date.now() / p275.rotateCharObj.intvMS) % p275.rotateCharObj.chars.length;
          if (p275.rotateCharObj.pos != v305) {
            p275.rotateCharObj.pos = v305;
            p275.rotateCharObj.dom.value = decodeURI(p275.rotateCharObj.chars[v305]);
          }
        },
        showAudioCtrl: function (p276) {
          var v306 = v3.UI.e[p276.widgetInstance];
          v306.audioControl.style.visibility = "visible";
          v306.audio.style.visibility = "visible";
          v22 = setInterval(f5, 1000);
        },
        hideAudioCtrl: function (p277) {
          if (v22) {
            clearInterval(v22);
          }
          var v307 = v3.UI.e[p277.widgetInstance];
          v307.audioControl.style.visibility = "hidden";
          v307.audio.style.visibility = "hidden";
        }
      },
      status: {
        showRequired: function (p278, p279) {
          var v308 = v3.UI.e[p278.widgetInstance];
          if (p279) {
            if (p278.isShowingRequired) {
              return;
            }
            p278.isShowingRequired = true;
            if (p278.widgetSize == v3.constant.mini) {
              v308.card.style.borderColor = "#FF5151";
              v308.imageContainer.style.borderColor = "#FF5151";
              v308.inputbox.style.borderColor = "#FF5151";
              v308.stsBox.style.borderColor = "#FF5151";
              if (p278.challengeType != "imageonly") {
                v308.audioControl.style.borderColor = "#FF5151";
              }
            } else {
              v308.card.style.boxShadow = "0px 0px 0px 2px red";
            }
          } else {
            if (!p278.isShowingRequired) {
              return;
            }
            p278.isShowingRequired = false;
            if (p278.widgetSize == v3.constant.mini) {
              v308.card.style.borderColor = "";
              v308.inputbox.style.borderColor = "";
              v308.imageContainer.style.borderColor = "";
              v308.stsBox.style.borderColor = "";
              if (p278.challengeType != "imageonly") {
                v308.audioControl.style.borderColor = "";
              }
              if (v3.miniTheme.hasOwnProperty(p278.theme) || p278.customStyle) {
                v3.style.apply(p278);
              } else {
                v3.style.set(p278, v3.style.miniDefaults);
              }
            } else {
              v308.card.style.boxShadow = "";
            }
          }
        },
        showStatusMsg: function (p280, p281, p282) {
          v3.UI.events.status.toggleMsg(p280, p281, p282);
        },
        showIncomplete: function (p283) {
          var v309 = v3.UI.e[p283.widgetInstance].inputText.value.length;
          if (v309 == 0) {
            v3.UI.events.status.showStatusMsg(p283, 2, p283.langTxt.emptyCaptcha);
          } else {
            v3.UI.events.status.showStatusMsg(p283, 2, p283.langTxt.incompleteCaptcha);
          }
        },
        showStatusPressed: function (p284, p285, p286) {
          if (p284.prevStatusPressed == p285) {
            return;
          }
          p284.prevStatusPressed = p285;
          var v310 = "";
          if (p285) {
            v310 = "scale(0.8)";
          } else {}
          p286.style.transform = v310;
        },
        toggleMsg: function (p287, p288, p289) {
          var v311 = v3.UI.e[p287.widgetInstance].msg;
          if (p287.prevStatusMsg == p289) {
            return;
          }
          if (p288 > 3) {
            p288 = 0;
          }
          p287.prevStatusMsg = p289;
          p287.msgNo = p288;
          v311.innerHTML = "";
          switch (p288) {
            case 0:
              if (p287.widgetSize == v3.constant.mini) {
                if (!p287.isMTCPowByDisabled && !p287.isMTCLinksDisabled) {
                  v311.innerHTML += `${"<a class=\"mtcap-msglink-active mtcap-msglink-custom\" id = 'mtcap-msglink-powered-by-" + p287.counter + "'aria-label='" + p287.ariaTxt.default.poweredByLink}'href="https://www.mtcaptcha.com" target="_blank" tabindex="0">${p287.langTxt.miniByMT}</a><span class="mini-dot"> . </span>`;
                } else if (!p287.isMTCPowByDisabled && p287.isMTCLinksDisabled) {
                  v311.innerHTML += `<a class="mtcap-msglink-active mtcap-msglink-custom" id = 'mtcap-msglink-powered-by-${p287.counter}'aria-label='${p287.ariaTxt.default.poweredByLink}'href="https://www.mtcaptcha.com" target="_blank" tabindex="0">${p287.langTxt.miniByMT}</a>`;
                }
                if (!p287.isMTCLinksDisabled) {
                  v311.innerHTML += `<a class="mtcap-msglink-active mtcap-msglink-custom" id = 'mtcap-msglink-privacy-${p287.counter}' aria-label='${p287.ariaTxt.default.privacyLink}'href="https://www.mtcaptcha.com/legal-privacy-captcha" tabindex:"0" target="_blank" role:"link">${p287.langTxt.privacy}</a><span class="mini-dot"> . </span><a class="mtcap-msglink-active mtcap-msglink-custom" id = 'mtcap-msglink-terms-${p287.counter}'aria-label='${p287.ariaTxt.default.termsLink}' href="https://www.mtcaptcha.com/legal-terms" tabindex:"0" target="_blank" role:"link">${p287.langTxt.terms}</a>`;
                }
              } else if (!p287.isMTCPowByDisabled) {
                v311.innerHTML += `<a class="mtcap-msglink-active mtcap-msglink-custom" id = 'mtcap-msglink-powered-by-${p287.counter}' aria-label='${p287.ariaTxt.default.poweredByLink}' href="https://www.mtcaptcha.com" target="_blank" tabindex:"0">${p287.langTxt.byMT}</a>`;
              }
              break;
            case 1:
              v311.innerHTML = "<p>" + p289 + "</p>";
              break;
            case 2:
              v311.innerHTML = "<p class='mtcap-invalidmsg mtcap-invalidmsg-custom' id='mtcap-invalid-msg-" + p287.counter + "'  aria-invalid='true' tabindex='0'>" + p289 + "</p>";
              break;
          }
          v3.util.widgetHeightChange(p287);
          v3.util.doAnimation(v311, "fadein 260ms ease");
        },
        rotateImg: function (p290) {
          var v312 = v3.UI.e[v346.widgetInstance].stsImg;
          if (p290) {
            v3.util.doAnimation(v312, "rotate 650ms linear infinite");
          } else {
            v3.util.doAnimation(v312, "none");
          }
        },
        toggleImg: function (p291, p292) {
          var v313 = v3.UI.e[p291.widgetInstance];
          var v314 = v313.stsImg;
          var v315 = p291.widgetSize;
          var v316;
          if (v315 == v3.constant.mini) {
            v316 = v3.style.miniIconColors;
          } else {
            v316 = v3.style.iconColors;
          }
          if (p292 > 4) {
            p292 = 0;
          }
          switch (p292) {
            case 0:
              v314.value = String.fromCharCode(59648);
              v314.style.color = v316.refresh;
              break;
            case 1:
              v314.value = String.fromCharCode(59649);
              v314.style.color = v316.verify;
              break;
            case 2:
              v314.value = String.fromCharCode(59650);
              v314.style.color = v316.success;
              break;
            case 3:
              v314.value = String.fromCharCode(59651);
              v314.style.color = v316.fail;
              break;
            case 4:
              v314.value = String.fromCharCode(59648);
              v314.style.color = v316.verify;
              break;
          }
          if (p292 === 2) {
            v3.util.doAnimation(v314, "fadeinbounce 350ms ease");
            v313.stsBtn.tabIndex = -1;
            v313.stsBtn.setAttribute("aria-hidden", "true");
          } else {
            v3.util.doAnimation(v314, "fadein 350ms ease");
            v313.stsBtn.tabIndex = 0;
            v313.stsBtn.removeAttribute("aria-hidden");
          }
        }
      }
    }
  };
  v3.expire = {
    setCTExpireTimer: function (p293, p294) {
      var v317 = (p294 - 5) * 1000;
      p293.challengeExpireTimer = setTimeout(function () {
        p293.sCode = v3.status.code.general.CAP_EXPIRED;
        v3.log.warn(p293, "Captcha has been expired - " + p293.widgetInstance, v3.status.code.general.CAP_EXPIRED);
        v3.widget.expire(p293);
        if (p293.autoReloadCnt < 3) {
          setTimeout(function () {
            v3.render.reset(p293.widgetInstance);
            p293.autoReloadCnt++;
          }, 1500);
        } else {
          v3.UI.e[p293.widgetInstance].inputText.blur();
          clearTimeout(p293.challengeExpireTimer);
          p293.autoReloadCnt = 0;
          v3.status.setStatus(v3.status.code.internal.TOKEN_TIMEOUT);
        }
      }, v317);
    },
    setSTExpireTimer: function (p295, p296) {
      var v318 = (p296 - 5) * 1000;
      p295.successTokenExpireTimer = setTimeout(function () {
        p295.sCode = v3.status.code.general.CAP_VERIFIED_TOKEN_EXPIRED;
        v3.postMessage(p295, "verifystatuschange", {
          msg: "verifyexpired"
        });
        if (!p295.isLowFriction) {
          v3.widget.expire(p295);
        }
        v3.status.setStatus(v3.status.code.internal.TOKEN_TIMEOUT);
        setTimeout(function () {
          v3.render.reset(p295.widgetInstance);
        }, 1500);
      }, v318);
    }
  };
  v3.widget = {
    enable: function (p297) {
      var v319 = v3.UI.e[p297.widgetInstance];
      var v320 = v3.UI.events;
      if (p297.challengeType != "imageonly") {
        v320.audio.toggleImg(p297, false, 0);
      }
      if (!p297.isVerifying) {
        v320.status.toggleImg(p297, 0);
        v320.status.showStatusMsg(p297, 0);
        v320.status.rotateImg(false);
      }
      if (!p297.initialLoad) {
        v319.inputText.value = "";
      }
      this.disable(p297.widgetInstance, false);
      if (p297.verifyFail && p297.widgetSize == v3.constant.mini) {
        v319.inputText.focus();
        v320.status.showStatusMsg(p297, 1, p297.langTxt.enterTextMsg);
        p297.verifyFail = false;
      } else {
        v320.status.showStatusMsg(p297, 0);
        p297.verifyFail = false;
      }
    },
    expire: function (p298) {
      var v321 = v3.UI.e[p298.widgetInstance];
      var v322 = v3.UI.events;
      if (p298.challengeType != "imageonly") {
        v322.audio.toggleImg(p298, false, 0);
      }
      v322.status.toggleImg(p298, 3);
      v322.status.showStatusMsg(p298, 2, p298.langTxt.captchaExpired);
      v321.inputText.value = "";
      this.disable(p298.widgetInstance, true);
    },
    userReset: function (p299, p300) {
      var v323 = v3.UI.events;
      v323.status.toggleImg(p299, 0);
      v323.status.showStatusMsg(p299, 2, p300);
    },
    load: function (p301, p302) {
      if (p302) {
        v3.UI.events.status.showStatusMsg(p301, 1, p301.langTxt.reload);
        v3.status.setStatus(v3.status.code.internal.RELOADING_NEW);
      } else {
        v3.UI.events.status.showStatusMsg(p301, 1, p301.langTxt.loading);
        v3.status.setStatus(v3.status.code.internal.LOADING_NEW);
      }
    },
    networkFailed: function (p303, p304) {
      v3.status.setStatus(v3.status.code.internal.ERROR);
      var v324 = v3.UI.e[p303.widgetInstance];
      if (p303.widgetSize == v3.constant.standard) {
        v324.alrtImg.src = v3.asserts.alrtImg;
        v324.alrtMsg.innerHTML = p303.langTxt.connectionError;
        v324.errorCode.innerHTML = "(Error " + p304 + ")";
        v3.util.updateErrorCardHeight(v324);
      } else {
        var v325 = v3.UI.e[p303.widgetInstance].card;
        v3.postMessage(p303, "miniError", {
          errorMsg: p303.langTxt.connectionError,
          errorcode: p304,
          showPlainCard: false,
          width: p303.widgetWidth,
          height: p303.widgetHeight,
          errorCardWidth: v325.clientWidth,
          errorType: 1
        });
      }
    },
    error: function (p305, p306, p307, p308) {
      v3.status.setStatus(v3.status.code.internal.ERROR);
      var v326 = v3.UI.e[p305.widgetInstance];
      if (p305.widgetSize == v3.constant.standard) {
        v326.alrtImg.src = v3.asserts.error;
        v326.alrtMsg.innerHTML = p306;
        v326.errorCode.innerHTML = "(Error " + p307 + ")";
        if (p308) {
          v326.alrtbtn.style.display = "none";
          v326.alert.style.margin = "18px";
          v326.alrtImg.style.marginTop = "-4px";
        }
        v3.util.updateErrorCardHeight(v326);
      } else {
        var v327 = v3.UI.e[p305.widgetInstance].card;
        v3.postMessage(p305, "miniError", {
          errorMsg: p306,
          errorcode: p307,
          showPlainCard: p308,
          width: p305.widgetWidth,
          height: p305.widgetHeight,
          errorCardWidth: v327.clientWidth,
          errorType: 2
        });
      }
    },
    online: function (p309) {
      var v328 = v3.UI.e[p309];
      v328.errCard.style.display = "none";
      v328.stsBtn.style.position = "absolute";
    },
    disable: function (p310, p311) {
      var v329 = v3.util.getObject(p310);
      if (v329.challengeType != "imageonly") {
        if (p311) {
          v3.UI.events.audio.hideAudioCtrl(v329);
        } else {
          v3.UI.events.audio.showAudioCtrl(v329);
        }
      }
    },
    randomColor: function () {
      var v330 = "0123456789ABCDEF";
      var v331 = "#";
      for (var v332 = 0; v332 < 6; v332++) {
        v331 += v330[Math.floor(Math.random() * 16)];
      }
      return v331;
    },
    showOrHideOuterText: function () {
      if (!v346.autoFadeOuterText) {
        return;
      }
      var v333 = v3.UI.e[v346.widgetInstance];
      var v334 = false;
      if (v3.status.getIsError()) {
        v334 = true;
      }
      if (v333 === undefined || v333 === null) {
        return;
      }
      if (v3.util.canShowText(v334, v15, v16, v14)) {
        clearTimeout(v23);
        if (!v14) {
          v14 = true;
          if (v346.widgetSize != v3.constant.mini) {
            v3.util.doAnimation(v333.privacyLink, "mtcap-fadein 300ms forwards linear");
            v3.util.doAnimation(v333.termsLink, "mtcap-fadein 300ms forwards linear");
          }
          v3.util.doAnimation(v333.msg, "mtcap-fadein 300ms forwards linear");
          if (v346.challengeType != "imageonly") {
            if (v346.widgetSize != v3.constant.mini) {
              v3.util.doAnimation(v333.ampersand, "mtcap-fadein 300ms forwards linear");
            } else {
              v3.util.doAnimation(v333.audioControl, "mtcap-fadein 300ms forwards linear");
            }
          }
          v3.util.doAnimation(v333.msgContainer, "mtcap-fadein 300ms forwards linear");
        }
      } else if (v3.util.canHideText(v15, v16, v14, v334)) {
        v23 = setTimeout(function () {
          v14 = false;
          if (v346.widgetSize != v3.constant.mini) {
            v3.util.doAnimation(v333.privacyLink, "mtcap-fadeout 300ms forwards linear");
            v3.util.doAnimation(v333.termsLink, "mtcap-fadeout 300ms forwards linear");
          }
          v3.util.doAnimation(v333.msg, "mtcap-fadeout 300ms forwards linear");
          if (v346.challengeType != "imageonly") {
            if (v346.widgetSize != v3.constant.mini) {
              v3.util.doAnimation(v333.ampersand, "mtcap-fadeout 300ms forwards linear");
            } else {
              v3.util.doAnimation(v333.audioControl, "mtcap-fadeout 300ms forwards linear");
            }
          }
          v3.util.doAnimation(v333.msgContainer, "mtcap-fadeout 300ms forwards linear");
        }, 3000);
      }
    }
  };
  v3.render = {
    doCustomRender: function (p312) {
      p312.renderDelayTimer = setTimeout(function () {
        v3.render.renderWidgetOnTimeout(p312);
      }, 1200);
      v3.postMessage(p312, "waitConfigCustom", {});
    },
    doRender: function (p313) {
      p313.autoReloadCnt = 0;
      p313.initialLoad = true;
      v7 = v3.util.getIEVersion();
      v3.config.setConfigForSummary(p313);
      v3.jsBuildVersion.setInCookie(v3.jsBuildVersion.num);
      p313.sessionID = "S" + p313.counter + v3.util.generateSessionGUID();
      p313.action = v3.config.validateAndSetAction(p313);
      v3.api.request.getCT(p313);
    },
    renderWidgetOnTimeout: function (p314) {
      p314.renderDelayTimer = null;
      v3.log.warn(p314, "Couldn’t get Custom Config in time - Rendering with defaults");
      this.doRender(p314);
    },
    reset: function (p315) {
      var v335 = v3.util.getObject(p315);
      v335.isVerifying = false;
      if (!v335.isLowFriction) {
        v335.lf = 0;
        if (v335.challengeType != "imageonly") {
          v3.widget.load(v335, true);
          v3.UI.e[p315].audioContainer.removeAttribute("src");
          v3.UI.events.status.showRequired(v335, false);
        }
      }
      this.resetProp(v335);
      if (!v26) {
        v335.initialLoad = false;
      } else {
        v26 = false;
        v335.initialLoad = true;
      }
      v3.api.request.getCT(v335);
      v335.sCode = v3.status.code.general.CAP_NOT_VERIFIED;
      v3.postMessage(v335, "verifystatuschange", {
        msg: v3.status.messages[v3.status.code.general.CAP_NOT_VERIFIED]
      });
    },
    resetProp: function (p316) {
      clearTimeout(p316.challengeExpireTimer);
      clearTimeout(p316.resetTimer);
      clearTimeout(p316.successTokenExpireTimer);
      clearTimeout(p316.completeTimer);
      delete p316.ct;
      delete p316.image;
      delete p316.audio;
      delete p316.status;
      delete p316.anslen;
      delete p316.verifiedToken;
      delete p316.incompleteSol;
    }
  };
  function f5() {
    var v336 = v3.UI.e[v346.widgetInstance];
    var v337 = v336.audio.clientWidth;
    var v338 = v346.widgetSize == v3.constant.mini ? vV18 : vV17;
    var v339 = v346.widgetSize == v3.constant.mini ? v18 : v17;
    v3.util.widgetHeightChange(v346);
    if (!v337) {
      return;
    }
    if (v337 != v338) {
      var v340 = v336.audio;
      var v341 = v336.stsImg;
      var v342 = v337 / v339;
      var v343 = 0;
      while ((v342 < 0.95 || v342 > v21) && v343 < 3) {
        v343++;
        if (v342 < 1) {
          vV19 += 1;
          vV20 += 1;
        } else if (v342 > v21) {
          vV19 -= 1;
          vV20 -= 1;
        }
        v340.style.fontSize = vV19 + "pt";
        v341.style.fontSize = vV20 + "pt";
        v3.util.widgetHeightChange(v346);
        v337 = v336.audio.clientWidth;
        v342 = v337 / v17;
      }
    }
  }
  v3.browser.calcW1nfo(false);
  v3.postMessage(v240, "loaded", {
    msg: "Iframe Loaded"
  });
  var v344;
  var v345;
  if (v240.widgetSize == v3.constant.mini) {
    v344 = v3.config.validateConf(v3.config.miniDefaults, v240);
    v345 = v3.util.overlayConf(v3.config.miniDefaults, v344);
  } else {
    v344 = v3.config.validateConf(v3.config.defaults, v240);
    v345 = v3.util.overlayConf(v3.config.defaults, v344);
  }
  if (v3.config.isValidSitekey(v345)) {
    v3.util.setObject(v345);
    var v346 = v3.util.getObject(v345.widgetInstance);
    v346.counter = parseInt(v346.iframeId.substr(v346.iframeId.lastIndexOf("-") + 1, 1));
    document.getElementsByClassName("mtcap-main")[0].setAttribute("id", "mtcap-main-" + v346.counter);
    v3.util.detectAutoplaySupport();
    if (v346.textLength) {
      v346.lf = 0;
    } else if (v346.lowFrictionInvisible === "force-visible") {
      v346.lf = 0;
    } else if (v346.testmode_lowFrictionInvisible === "force-visible") {
      v346.lf = "t0";
    } else if (v346.testmode_lowFrictionInvisible === "force-invisible") {
      v346.lf = "t1";
    } else {
      v346.lf = 1;
    }
    v346.isMouseFlowEnabled = false;
    if (v346.custom) {
      v3.render.doCustomRender(v346);
    } else {
      v3.render.doRender(v346);
    }
    v3.util.addEvent(document.getElementsByTagName("body")[0], ["focusin"], function () {
      v15 = true;
      v3.widget.showOrHideOuterText();
    });
    v3.util.addEvent(document.getElementsByTagName("body")[0], ["focusout"], function () {
      v15 = false;
      v3.widget.showOrHideOuterText();
    });
    v3.util.addEvent(document.getElementsByTagName("body")[0], ["mouseenter"], function () {
      v16 = true;
      v3.widget.showOrHideOuterText();
    });
    v3.util.addEvent(document.getElementsByTagName("body")[0], ["mouseleave"], function () {
      v16 = false;
      v3.widget.showOrHideOuterText();
    });
  }
})();