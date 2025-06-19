/*
Date of completion: 06-19-2025 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

In this Kata you are fish in a pond that needs to survive by eating other fish. You can only eat fish that are the same size or smaller than yourself. 
You must create a function that takes a shoal of fish as an input string. From this you must work out how many fish you can eat and ultimately the size 
you will grow to and return this as an integer.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A string of integers representing a shoal of fish

-----

Return:

An integer representing the final size of the fish

-----

Examples: 


"11112222" => 3

=> 4 fish of size 1
=> 4 fish of size 2


shoal = "111111111111" => 3

=> 12 fish of size 1

------

Pseudo Code: 
 
function fish(shoal) 
    create hash of fish sizes and their counts
    create myFishSize variable intialized to 1
    create eatenFish variable initialized to 0

    loop through each fish of shoal
        if size is greater than 0
            add to hash or increment by one

    loop through each size in hash
        if size is less than or equal to myFishSize
            add size * count to eatenFish
            calculate size by dividing eatenFish by 4 and flooring it

    return 



--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function fish(shoal) {
  const hash = {}
  let eatenFish = 0,
    myFishSize = 1

  for (const fish of shoal) {
    if (Number(fish) > 0) {
      hash[fish] = hash[fish] + 1 || 1
    }
  }

  for (const size in hash) {
    const currSize = Number(size)
    if (currSize <= myFishSize) {
      eatenFish += hash[size] * currSize
      myFishSize = calculateSize(eatenFish)
    } else {
      break
    }
  }

  return myFishSize
}

const calculateSize = (num) => {
  const divisor = Math.floor(num / 4)
  let size = 1,
    curr = 0,
    totalNeeded = 4

  for (let i = 1; i <= divisor; i++) {
    curr += 4
    if (curr === totalNeeded) {
      size++
      totalNeeded += 4 * size
    }
  }

  return size
}
