class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t === "") return "";

        let needMap = new Map();
        let haveMap = new Map();

        for (const c of t) {
            needMap.set(c, (needMap.get(c) || 0) + 1);
        }

        let need = needMap.size;
        let have = 0;

        let result = "";
        let resultLen = Infinity;
        let l = 0;

        for (let r = 0; r < s.length; r++) {
            const rightChar = s[r];
            haveMap.set(rightChar, (haveMap.get(rightChar) || 0) + 1);

            const charIsNeeded = needMap.has(rightChar);
            const haveEnoughOfThisChar = haveMap.get(rightChar) === needMap.get(rightChar);

            if (charIsNeeded && haveEnoughOfThisChar) {
                have++;
            }

            while (have === need) {
                const currentWindowSize = r - l + 1;
                const foundSmallerWindow = currentWindowSize < resultLen;

                if (foundSmallerWindow) {
                    result = s.substring(l, r + 1);
                    resultLen = currentWindowSize;
                }

                const leftChar = s[l];
                haveMap.set(leftChar, haveMap.get(leftChar) - 1);

                const leftIsNeeded = needMap.has(leftChar);
                const nowBelowNeed = haveMap.get(leftChar) < needMap.get(leftChar);

                if (leftIsNeeded && nowBelowNeed) {
                    have--;
                }

                l++;
            }
        }

        return result;
    }
}
