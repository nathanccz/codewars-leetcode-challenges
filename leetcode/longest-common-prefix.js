/*
Date of completion: 11-18-2024 
Leetcode

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
 

Constraints:

- 1 <= strs.length <= 200
- 0 <= strs[i].length <= 200
- strs[i] consists of only lowercase English letters.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

An array of strings with lower-case letters

-----

Return:

A string with the common prefix

-----

Examples: 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

------

Pseudo Code: 

const longestCommonPrefix(strs)
    
    for let str of strs


--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

const longestCommonPrefix = strs => {
    const sorted = strs.sort((a, b) => a.length - b.length)
    
    let curr = sorted[0].split('')
    
    for (let str of sorted.slice(1)) {
        for (let i = 0; i < str.length; i++) {
            if (curr[i] !== str[i] || !curr[i]) {
                curr = curr.slice(0, i)
                break
            } 
        }
    }

   return curr.join('')
}