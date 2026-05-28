class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;

        while (l <= r) {
            const mid = Math.floor((l + r) / 2);

            if (nums[mid] === target) return mid;

            const leftHalfIsSorted = nums[l] <= nums[mid];

            if (leftHalfIsSorted) {
                const targetIsInLeftHalf = target >= nums[l] && target < nums[mid];
                if (targetIsInLeftHalf) {
                    r = mid - 1;
                } else {
                    l = mid + 1;
                }
            } else {
                const targetIsInRightHalf = target > nums[mid] && target <= nums[r];
                if (targetIsInRightHalf) {
                    l = mid + 1;
                } else {
                    r = mid - 1;
                }
            }
        }

        return -1;
    }
}
