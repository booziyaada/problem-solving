// Problem Link - https://leetcode.com/problems/longest-common-prefix/description/
function longestCommonPrefix(strs) {
  let result = "";
  let first = strs[0];
  for(let i = 0; i < first.length; i++){
      for(let j = 1; j < strs.length; j++){
          if(first[i] != strs[j][i]){
              return result;
          }
      }
      result += first[i];
  }
  return result;
}
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
