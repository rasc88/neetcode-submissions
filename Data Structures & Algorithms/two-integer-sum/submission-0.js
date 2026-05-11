class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const differences = new Map();

        for(let i=0; i< nums.length; i++) {
            const differenceKey = target - nums[i];
            const firtsIndex = differences.get(differenceKey); 

            if ( firtsIndex !== undefined ){
                return [firtsIndex, i]
            } 

            differences.set(nums[i],i);
        }

    }
}
