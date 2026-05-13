class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let result = 0;
        let l = 0;
        let r = heights.length - 1;

        while (l < r) {
            const currentHeight = Math.min(heights[l], heights[r]);
            const currentWidth = r - l;
            const area = currentHeight * currentWidth;
            result = Math.max(result, area);

            if (heights[l] < heights[r]) {
                l++;
            } else {
                r--;
            }
        }
        return result;
    }
}
