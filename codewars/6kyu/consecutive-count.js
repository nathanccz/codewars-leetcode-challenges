/*
Date of completion: 09-15-2025 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

I want to know the size of the longest consecutive elements of X in Y. You will receive two arguments: items and key. Return the length of the longest segment of consecutive keys in the given items.

Notes:

- The items and the key will be either an integer or a string (consisting of letters only)
- If the key does not appear in the items, return 0

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A number or a string of lower-cases, and a key (can be number or string)

-----

Return:

A number

-----

Examples: 

90000, 0           -->  4
"abcdaaadse", "a"  -->  3
"abcdaaadse", "z"  -->  0

------

Pseudo Code: 

function getConsectiveItems(items, key)
    create finalCount variable, initialized at 0
    create currCount variable, initialed at 0
    create itemStr variable, coerce items to string

    loop through itemStr
        if item is the key, currCount++
            else:
                if currCount is greater than finalCount, finalCount = currCount

    return finalCount

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function getConsectiveItems(items, key) {
  let finalCount = 0
  let currCount = 0
  const itemStr = items.toString()

  for (const item of itemStr) {
    if (item === key.toString()) {
      currCount++
    } else {
      if (currCount > finalCount) {
        finalCount = currCount
      }
      currCount = 0
    }
  }

  return finalCount > currCount ? finalCount : currCount
}
