/*
Date of completion: 05-09-2025 
Codewars Level 6 kyu*

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Vanya gets bored one day and decides to enumerate a large pile of rocks. He first counts the rocks and finds out that he has n rocks in the pile, then he goes to the store to buy labels for enumeration.

Each of the labels is a digit from 0 to 9 and each of the n rocks should be assigned a unique number from 1 to n.

If each label costs $1, how much money will Vanya spend on this project?

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

integer  

-----

Return:

integer

-----

Example: 

For n = 13, the result should be 17.

the numbers from 1 to n are:
1 2 3 4 5 6 7 8 9 10 11 12 13

we need 17 single digit labels:
1 2 3 4 5 6 7 8 9 1 0 1 1 1 2 1 3

each label cost $1, so the output should be 17.

------

Pseudo Code: 

function rocks(n)
    if n is less than 10 return n

    now we have all numbers to work with

    

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function rocks(n) {
  if (n < 10) return n;

  let places = 2,
    result = 9;

  for (let i = 10; i <= n; i *= 10) {
    const max = 10 ** places;
    if (n < max) {
      result += (n - i + 1) * places;
      break;
    } else {
      result += (max - i) * places;
    }
    places++;
  }

  return result;
}
