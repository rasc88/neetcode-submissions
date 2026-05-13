class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buyDay = 0;
        let maxProfit = 0;

        for(let sellDay = 1; sellDay < prices.length; sellDay++){
            maxProfit = Math.max(maxProfit, prices[sellDay] - prices[buyDay]);
            
            if(prices[sellDay] < prices[buyDay]){
                buyDay = sellDay;
            }
        }

        return maxProfit;
    }

}
