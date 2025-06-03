/*
Date of completion: 06-03-2025 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Task:

Yesterday you found some shoes in your room. Each shoe is described by two values:

type indicates if it's a left or a right shoe;
size is the size of the shoe.

Your task is to check whether it is possible to pair the shoes you found in such a way that each pair consists of a right and a left shoe of an equal size.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

An array of subarrays, each with two integers

-----

Return:

A boolean

-----

Examples: 


doTest([[0,20],[0,21],[1,19],[1,22]], false);
doTest([[0, 21], [1, 23], [1, 21], [0, 23]], true);
doTest([[0, 23], [1, 23], [1, 23], [0, 23], [0, 23], [0, 23]], false);

------

Pseudo Code: 
 
function pairOfShoes(shoes)
    create empty hash object

    loop through shoes 
        group shoes by size

    loop through hash object
        check if length is even and sum of first elements are half the length
        early return if false

    return true

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function pairOfShoes(shoes) {
  const hash = {}

  for (const shoe of shoes) {
    const size = shoe[1]

    if (!hash[size]) {
      hash[size] = [shoe]
    } else {
      hash[size].push(shoe)
    }
  }

  for (let key in hash) {
    const shoes = hash[key]
    const sumOfTypes = shoes.reduce((sum, curr) => sum + curr[0], 0)

    if (shoes.length % 2 !== 0 || sumOfTypes !== shoes.length / 2) return false
  }

  return true
}
