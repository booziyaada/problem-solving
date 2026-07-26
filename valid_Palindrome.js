var isPalindrome = function(s) {
    s = s.replaceAll(" ", "")
    s = s.replace(/[^a-zA-Z0-9]/g, "");
    for(i=0;i<s.length/2;i++){
        for(j=s.length - 1;j>s.length/2;j--){
            if(s[i] === s[j]){
                return true
            } else {
                return false
            }
        }
    }
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))