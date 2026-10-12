// PLAN ( APPRAOCH ONE )
// step 1: pass the prices array into the function
// step 2: set the smallest buying price to the first price in the array
// step 3: create a variable to track the maximum profit and set it to 0
// step 4: loop through the prices array starting from index 1
// step 5: check if the current price is smaller than the smallest buying price
// step 6: if it is smaller, update the smallest buying price
// step 7: otherwise, calculate the new profit or loss by subtracting the smallest buying price from the current price
// step 8: update the maximum profit by comparing it with the new profit or loss
// step 9: return the maximum profit

const maxProfit = (prices) => {
  let smallestBuy = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    smallestBuy = Math.min(smallestBuy, prices[i - 1]);
    const newProfitorLoss = prices[i] - smallestBuy;
    profit = Math.max(newProfitorLoss, profit);
  }

  return profit;
};

// PLAN ( APPROACH TWO )
// step 1: pass the prices array into the function
// step 2: set the smallest buying price to the first price in the array
// step 3: create a variable to track the maximum profit and set it to 0
// step 4: loop through the prices array starting from index 1
// step 5: check if the current price is smaller than the smallest buying price
// step 6: if it is smaller, update the smallest buying price
// step 7: otherwise, calculate the new profit by subtracting the smallest buying price from the current price
// step 8: update the maximum profit by comparing it with the new profit
// step 9: return the maximum profit

const maxProfit = (prices) => {
  let smallestBuy = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < smallestBuy) {
      smallestBuy = prices[i];
    } else {
      const newProfit = prices[i] - smallestBuy;
      profit = Math.max(profit, newProfit);
    }
  }

  return profit;
};
