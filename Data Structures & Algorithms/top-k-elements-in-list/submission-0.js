class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        const buckets = Array.from({length : nums.length + 1}, ()=> []);

        for(let i= 0; i< nums.length; i++){
            let value = 1;

            if(map.has(nums[i])){
                value = map.get(nums[i]) + 1; 
            }

            map.set(nums[i], value);
        }

        for(let [number,frequency] of map){
            buckets[frequency].push(number);
        }
        
        const result = [];
        for (let i = buckets.length - 1; i >= 0; i--) {
            for (let num of buckets[i]) {  
                result.push(num);
                if (result.length === k) return result;
            }
        }
    }
}
