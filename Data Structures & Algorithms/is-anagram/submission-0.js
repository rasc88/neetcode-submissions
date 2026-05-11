class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const aCode = 'a'.charCodeAt(0); 
        const alphabet = new Array(26).fill(0);
        const size = s.length;
        
        for (let i = 0; i < size; i++) {
            const indexS = s.charCodeAt(i) - aCode;
            
            alphabet[indexS] += 1;
        
            const indexT = t.charCodeAt(i) - aCode;
            
            alphabet[indexT] -= 1;
        }

        return alphabet.every(a => a === 0);
    }
}
