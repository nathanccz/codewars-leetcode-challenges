/*
Date of completion: 07-06-2024 
Codewars or Leetcode Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A string of words each containing a string number

-----

Return:

A new string of sorted words

The same string if none are found

-----

Examples: 

"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"

"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""

------

Pseudo Code: 

function order(words)
    let result = ''


--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function order(words){
    let result = []
    let arrOfWords = words.split(' ')
    arrOfWords.forEach(word => {
      const index = [...word].find(char => !isNaN(+char)) - 1
      result[index] = word
     })
    return result.join(' ')
}