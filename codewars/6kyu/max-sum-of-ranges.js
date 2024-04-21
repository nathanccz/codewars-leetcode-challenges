/*
Date of completion: 04-21-2024 
Codewars or Leetcode Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Given an array arr that contains some integers(positive, negative or 0), and a range list such as [[start1,end1],[start2,end2],...], start and end are the index of arr and start always less than end. Your task is to calculate the sum value of each range (start index and end index are both inclusive), and return the maximum sum value.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

The array always has at least five elements.

The ranges always have at least one element.

-----

Return:

The function should return a positive integer. 

-----

Examples: 

Given arr = [1,-2,3,4,-5,-4,3,2,1], 
       range = [[1,3],[0,4],[6,8]]
 should return 6
 
 calculation process:
 range[1,3] = arr[1]+arr[2]+arr[3] = 5
 range[0,4] = arr[0]+arr[1]+arr[2]+arr[3]+arr[4] = 1
 range[6,8] = arr[6]+arr[7]+arr[8] = 6
 So the maximum sum value is 6

------

Pseudo Code: 

function maxSum(arr, range)
    sums <- reduce range array
        sum <- slice arr by index held in curr[0] up to index held in curr[1], then sum each element
        store each sum in a new index in the outer reduce array
        return that array 
    return the maximum value in the sums array


--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function maxSum(arr, range) {
    const sums = range.reduce((array,curr,ind) => {
        const sum = arr.slice(curr[0],curr[1] + 1).reduce((sum,num) => sum + num, 0)    
        array[ind] = sum
        return array
    }, [])
    return Math.max(...sums)
}