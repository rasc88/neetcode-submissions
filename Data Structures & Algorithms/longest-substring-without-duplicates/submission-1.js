class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const map = new Map(); 
        let start = 0;
        let max = 0;

        for (let current = 0; current < s.length; current++) {
            const char = s[current];

            if (map.has(char) && map.get(char) >= start) {
                start = map.get(char) + 1;
            }

            map.set(char, current);
            max = Math.max(max, current - start + 1);
        }

        return max;
    }
}
