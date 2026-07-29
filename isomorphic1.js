// Problem Link - https://leetcode.com/problems/isomorphic-strings/submissions/2083677687
var isIsomorphic = function (s, t) {
    let map = {};
    function getMap(el) {
        for (const [k, v] of Object.entries(map)) {
            if (el === k)
                return v;
        }
        return undefined;
    }
    function hasvalue(value) {
        for (let key in map) {
            if (map[key] === value) {
                return true;
            }
        }
        return false;
    }
    for (let i = 0; i < s.length; i++) {
        if (!getMap(s[i])) {
            if (hasvalue(t[i])) {
                return false;        //this slove the badc and baba case 
            }
            map[s[i]] = t[i]
        }
        if (getMap(s[i]) !== t[i]) {
            return false
        }
        // if(getMap(t[i]) !== s[i]){
        //     return false
        // }
    }

    return true;
};