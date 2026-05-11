class Solution {
    getOpen(bracket) {

        if (bracket === '}') return '{'

        if (bracket === ']') return '['

        if (bracket === ')') return '('

        return ''
    }
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let arr = [];
        

        for (let i = 0; i < s.length; i++) {
            const isOpen = s[i] === '[' || s[i] === '(' || s[i] === '{';

            if (isOpen) {
                arr.push(s[i]);
            } else if (this.getOpen(s[i]) === arr[arr.length - 1]) {
                arr.pop();
            } else {
                return false;
            }
        }

        return arr.length === 0
    }
}
