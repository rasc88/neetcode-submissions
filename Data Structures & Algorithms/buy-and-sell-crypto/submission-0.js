class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buyDay = 0;
        let maxProfit = 0;

        for(let i = 1; i < prices.length; i++){
            maxProfit = Math.max(maxProfit, prices[i] - prices[buyDay]);
            
            if(prices[i] < prices[buyDay]){
                buyDay = i;
            }
        }

        return maxProfit;
    }

}
