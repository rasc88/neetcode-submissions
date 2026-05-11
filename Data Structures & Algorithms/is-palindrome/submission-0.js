class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;

        while(l < r){
            if(!s[l].match(/[a-zA-Z0-9]/)){
                l++;
            } else if(!s[r].match(/[a-zA-Z0-9]/)){
                r--;
            }else if(s[l].toLowerCase() !== s[r].toLowerCase()){
                return false;
            } else {
                l++;
                r--;
            }
        }

        return true;
    }
}
