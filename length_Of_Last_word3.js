// problem Link - https://leetcode.com/problems/length-of-last-word/description/
function lengthOfLastWord(s){
    let a = s.length -1;

    for(a; a >= 1; a--){
        if(s[a] == " ")
            continue;
        else
            break;
    }

    let b = a;

    for(b ; b >= 1; b--){
        if(s[b - 1] === " ")
            break;
        else 
            continue;
    }

    if(a == 0)
        return 1;
    return a - b + 1;
}