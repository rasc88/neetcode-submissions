class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let count = new Map();
        let result = 0;
        let l = 0;
        let maxFrequency = 0;

        for (let r = 0; r < s.length; r++) {
            const rightChar = s[r];
            const currentCount = count.get(rightChar) || 0;
            count.set(rightChar, currentCount + 1);

            const rightCharCount = count.get(rightChar);
            maxFrequency = Math.max(maxFrequency, rightCharCount);

            const windowSize = r - l + 1;
            const replacementsNeeded = windowSize - maxFrequency;
            const windowIsInvalid = replacementsNeeded > k;

            if (windowIsInvalid) {
                const leftChar = s[l];
                const leftCharCount = count.get(leftChar);
                count.set(leftChar, leftCharCount - 1);

                l++;
            }

            const currentWindowSize = r - l + 1;
            result = Math.max(result, currentWindowSize);
        }
        
        return result;
    }
}
