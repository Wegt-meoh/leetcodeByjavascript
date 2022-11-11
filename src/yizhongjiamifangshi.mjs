function decode (s) {
  let res = "";
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    const _ = c.charCodeAt() - 1;
    c = String.fromCharCode(_);
    res += c;
  }

  return strrev(res);
}

function str_rot13_reverse (s) {
  let res = "";
  for (let i = 0; i < s.length; i++) {
    let c;
    if (s[i] >= "a" && s[i] <= "z") {
      c = s[i].charCodeAt() - "a".charCodeAt();
      c += 13;
      c %= 26;
      c = String.fromCharCode(c + "a".charCodeAt());
    } else if (s[i] >= "A" && s[i] <= "Z") {
      c = s[i].charCodeAt() - "A".charCodeAt();
      c += 13;
      c %= 26;
      c = String.fromCharCode(c + "A".charCodeAt());
    } else {
      c = s[i];
    }
    res += c;
  }
  return res;
}

function strrev (s) {
  let t = "";
  for (let i = s.length - 1; i >= 0; i--) {
    t += s[i];
  }
  return t;
}

const cipher = "=pJovuTsWOUrtIJZtcKZ2OJMzEJZyMTLdIas";
console.log(strrev(str_rot13_reverse(cipher)));
const decipher_ = "~uj`fe1dfe`v1z`1e`xpI|hbmg";
console.log(decode(decipher_));
