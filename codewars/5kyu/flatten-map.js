/*
Date of completion: 08-06-2025 
Codewars Level 5 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

https://www.codewars.com/kata/52859abdf8fc1b12e0000141/train/javascript

Write a function that takes a hierarchical map of properties and converts it to a single, flattened map, with the different levels separated by a forward slash ('/').

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

An object, possibly empty

-----

Return:

A flat object with levels separated by forward slash

-----

Example: 

{
  'a': {
    'b': {
      'c': 12,
      'd': 'Hello World'
    },
    'e': [1,2,3]
  }
}

return a new map:

{
  'a/b/c': 12,
  'a/b/d': 'Hello World',
  'a/e': [1,2,3]
}

------

Pseudo Code: 

function flattenMap(map)
    create result as empty object

    loop through keys in map
        if it's an object and not an array and not null, call recursive function

    return result
    
function recurse(obj)
    for each key in obj

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function flattenMap(map) {
  let result = {}

  for (const i in map) {
    if (
      typeof map[i] === 'object' &&
      !Array.isArray(map[i]) &&
      map[i] !== null
    ) {
      const temp = flattenMap(map[i])
      for (const j in temp) {
        result[i + '/' + j] = temp[j]
      }
    } else {
      result[i] = map[i]
    }
  }

  return result
}
