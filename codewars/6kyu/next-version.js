/*
Date of completion: 01-21-2025 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Create a function nextVersion, that will take a string in parameter, and will return a string containing the next version number.

For example:

Current           ->  Next version
"1.2.3"           ->  "1.2.4"
"0.9.9"           ->  "1.0.0"
"1"               ->  "2"
"1.2.3.4.5.6.7.8" ->  "1.2.3.4.5.6.7.9"
"9.9"             ->  "10.0"

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A string representing version number

-----

Return:

A new string with updated version

-----

Examples: 

see above

------

Pseudo Code: 

function nextVersion(version)
    const nums = version.split('.')

    if nums length === 1, return nums[0] + 1

    loop through nums backwards
        const curr = nums[i] + 1

        if curr < 10 or i === 0, nums[i] = curr and BREAK
            else nums[i] = 0

    return nums.join('.')

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function nextVersion(version){
    const nums = version.split('.')
  
    if (nums.length === 1) {
      return String(+nums[0] + 1)
    }
    
    for (let i = nums.length - 1; i >= 0; i--) {
      const curr = +nums[i] + 1
  
      if (curr < 10 || i === 0) {
        nums[i] = curr
        break
      } else {
        nums[i] = 0
      }
    }
    
    return nums.join('.')
  }