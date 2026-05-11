class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const uniqueNumbers = [...new Set(nums)];

        return uniqueNumbers.length != nums.length
    }
}

