/*
Date of completion: 08-24-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Given an array of integers, sort its elements by the difference of their largest and smallest digits. In the case of a tie, that with the larger index in the array should come first.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

An array of numbers

-----

Return:

A new array of numbers, sorted

-----

Example: 

For a = [152, 23, 7, 887, 243], the output should be [7, 887, 23, 243, 152].

Here are the differences of all the numbers:

``` 152: difference = 5 - 1 = 4; 23: difference = 3 - 2 = 1; 7: difference = 7 - 7 = 0; 887: difference = 8 - 7 = 1; 243: difference = 4 - 2 = 2.

23 and 887 have the same difference, but 887 goes after 23 in a, so in the sorted array it comes first.```

------

Pseudo Code: 

function digitDifferenceSort(arr) 
    create function taking in number and find difference
        let arr = num to string, split to array, then mapped to numbers
        return max of arr - min of arr

    hash variable to store difference-to-array of numbers
        difference <- result of findDifference
        if has doesn't have difference, set to empty array
        push number to the key of hash that matches difference

    return Object vales of hash where every array is reversed, then flatten
   
--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function digitDifferenceSort(arr) {
  
    const findDifference = num => {
      let arr = [...String(num)].map(e => +e)
      let result = Math.max(...arr) - Math.min(...arr)
      return result
    }

    const hash = {}

    for (num of arr) {
        let difference = findDifference(num)
        if (!hash[difference]) hash[difference] = []
        hash[difference].push(num)
    }

    return Object.values(hash).map(e => e.reverse()).flat()
}