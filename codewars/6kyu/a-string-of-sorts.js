/*
Date of completion: 04-24-2025 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Define a method that accepts 2 strings as parameters. The method returns the first string sorted by the second.

To elaborate, the second string defines the ordering. It is possible that in the second string characters repeat, so you should remove repeating characters, leaving only the first occurrence.

Any character in the first string that does not appear in the second string should be sorted to the end of the result in original order.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

Two strings

-----

Return:

A new string 

-----

Examples: 

sortString("foos", "of")       => "oofs"
sortString("string", "gnirts") => "gnirts"
sortString("banana", "abn")    => "aaabnn"

------

Pseudo Code: 

sortString(string, ordering) 
    create set from ordering
    create filtered array of differences
    filter STRING so that it contains only characters in ORDERING
        sort STRING as array by the index of each character in ORDERING

    return sorted STRING + differences

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

//NOTE: This solution will not use RegEx.

function sortString(string, ordering) {
  const orderingSet = new Set(ordering)
  let differences = '',
    intersection = ''

  for (let char of string) {
    if (orderingSet.has(char)) {
      intersection += char
    } else {
      differences += char
    }
  }

  const orderingArr = Array.from(orderingSet)
  const sorted = intersection
    .split('')
    .sort((a, b) => orderingArr.indexOf(a) - orderingArr.indexOf(b))
    .join('')

  return sorted + differences
}
