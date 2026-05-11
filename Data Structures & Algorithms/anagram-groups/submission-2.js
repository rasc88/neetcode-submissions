class Solution {
    /**
     * @param {string} word
     * @return {string}
     */
    buildAnagramKey(word){
        const alphabet = new Array(26).fill(0);
        const size = word.length;
        const aCode = 'a'.charCodeAt(0);

        for (let j = 0; j < size; j++) {
            alphabet[word.charCodeAt(j) - aCode] += 1;
        }

        return alphabet.join(',');
    }

    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagrams = new Map();

        for(let i=0; i<strs.length; i++){
            const currentStr = strs[i];
            const key = this.buildAnagramKey(currentStr);

            if (anagrams.has(key)){
                anagrams.set(key,[currentStr,...anagrams.get(key)])
            } else {
                anagrams.set(key,[currentStr] )
            }  
        }

        return Array.from(anagrams.values());

    }
}
