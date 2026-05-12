class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const output = new Array(n).fill(1);

        
        let prefixProduct = 1;
        for (let i = 0; i < n; i++) {
            output[i] = prefixProduct;
            prefixProduct *= nums[i];
        }
        
    

        let suffixProduct = 1;
        for (let i = n - 1; i >= 0; i--) {
            output[i] *= suffixProduct;
            suffixProduct *= nums[i];
        }


        return output;
    }
}
