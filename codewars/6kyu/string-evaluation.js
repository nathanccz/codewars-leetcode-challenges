/*
Date of completion: 08-04-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Evaluate the given string with the given conditons.

The conditions will be passed in an array and will be formatted like this:

{symbol or digit}{comparison operator}{symbol or digit}
Return the results in an array.

The characters in the conditions will always be in the string. Characters in the string are chosen from ascii letters + @#$%^&*()_{}[]

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A string of lower-case letters

-----

Return:

A number

-----

Examples: 

stringEvaluation('aab#HcCcc##l#', ['a<b','#==4','c>=C','H!=a']) returns [false,true,true,true]

stringEvaluation('abc#$%KDAyyaa@@@', ['#>@','A==2','a>A','$!=2']) returns [false,false,true,true]

stringEvaluation('abb', ['a>b','b==a','b<=a','b>a','b!=b','a==1','b==1']) returns [false,false,false,true,false,true,false]

------

Pseudo Code: 
 
function stringEvaluation(string, conditions)
    create hash variable to store char count
    create "results" array, initialized as empty
    
    loop through string
        increment each char by one for each time they're found

    loop through the conditions
        let operator = condition substring from second char up to second from last char
        create "left" variable as the hash value of the first character
        create "right" variable as the hash value of the last character

        switch (operator)
            case "<":
                results.push(left < right)

    return results

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function stringEvaluation(string, conditions) {
  const hash = {}
  const results = []

  for (const char of string) {
    hash[char] = hash[char] + 1 || 1
  }

  for (const condition of conditions) {
    const firstChar = condition[0]
    const lastChar = condition[condition.length - 1]
    const operator = condition.substring(1, condition.length - 1)
    const left = hash[condition[0]] || Number(firstChar)
    const right = hash[lastChar] || Number(lastChar)

    switch (operator) {
      case '<':
        results.push(left < right)
        break
      case '<=':
        results.push(left <= right)
        break
      case '>':
        results.push(left > right)
        break
      case '>=':
        results.push(left >= right)
        break
      case '==':
        results.push(left == right)
        break
      case '!=':
        results.push(left != right)
        break
    }
  }

  return results
}
