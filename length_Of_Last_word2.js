// problem Link - https://leetcode.com/problems/length-of-last-word/description/
var lengthOfLastWord = function (s) {
  let p = "";
  let j = s.length - 1;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " ") continue;
    else {
      j = i;
      break;
    }
  }

  for (j; j >= 0; j--) {
    if (s[j] !== " ") p = p + s[j];
    else break;
  }

  return p.length;
};
