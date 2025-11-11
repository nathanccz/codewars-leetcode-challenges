/*
Date of completion: 11-10-2025 
Codewars Level 5 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

John bought a bag of candy from the shop. Fortunately, he became the 10000000000000000000000th customer of the XXX confectionery company. Now he can choose as many candies as possible from the company's prizes. With only one condition: the sum of all the candies he chooses must be multiples of k.

Your task is to help John choose the prizes, returns the maximum possible amount of candies that John can got.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

prizes - array of positive integers
k - a positive integer

-----

Return:

maximum amount of candies as a positive integer

-----

Examples: 

luckyCandies([1,2,3,4,5], 5), 15;
luckyCandies([1,2,3,4,5], 7), 14;
luckyCandies([1,2,3,4,5], 8), 8;

------

Pseudo Code: 

function luckyCandies(prizes, k)
    create result variable, initialized to 0
    create sum variable

    loop through prizes


--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */
function luckyCandies(prizes, k) {
  // Initialize dp array to track the highest sum for each remainder
  const dp = new Array(k).fill(-Infinity)
  dp[0] = 0 // Base case: sum 0 gives remainder 0

  for (const num of prizes) {
    // Copy the current dp to avoid overwriting during iteration
    const next = [...dp]

    for (let r = 0; r < k; r++) {
      if (dp[r] !== -Infinity) {
        const newSum = dp[r] + num
        const newRemainder = ((newSum % k) + k) % k // handle negatives safely

        next[newRemainder] = Math.max(next[newRemainder], newSum)
      }
    }

    // Move to the next iteration
    for (let i = 0; i < k; i++) {
      dp[i] = next[i]
    }
  }

  return dp[0] === -Infinity ? 0 : dp[0] // if no valid subset, return 0
}

maxDivisibleSubsetSum([1, 2, 3, 4, 5], 8)
