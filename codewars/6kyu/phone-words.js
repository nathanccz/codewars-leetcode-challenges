/*
Date of completion: 06-19-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Given a string of numbers, you must perform a method in which you will translate this string into text, based on the number pad on traditional phones. 

For example if you get "22" return "b", if you get "222" you will return "c". If you get "2222" return "ca".

Further details:

- 0 is a space in the string.

- 1 is used to separate letters with the same number.

- always transform the number to the letter with the maximum value, as long as it does not have a 1 in the middle. So, "777777" -->  "sq" and "7717777" --> "qs".

- you cannot return digits.

- Given a empty string, return empty string.

- Return a lowercase string.


--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

String of numbers

-----

Return:

String of lower case letters

-----

Examples: 

phoneWords("443355555566604466690277733099966688") -> "hello how are you"

phoneWords("55282") ->  "kata"

phoneWords("44460208337777833777") ->  "im a tester"


------

Pseudo Code: 

function phoneWords(stringOfNums)
    result <- empty string
    hash <- object with num to character pairs
    prev <- previous number
    
    loop through stringOfNums
        match number to hash and add to result string
            if number is equal to prev, overwrite last character of string to next value in object array
    
    return result

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

//NOTE: This solution will not use RegEx.

function phoneWords(stringOfNums) {
    
    let index = 0

    const hash = {
        1: '', 2: 'abc', 3: 'def', 4: 'ghi',
        5: 'jkl', 6: 'mno', 7: 'pqrs',
        8: 'tuv', 9: 'wxyz', 0: ' '
    }

    const subArrays = stringOfNums.split('').reduce((acc, curr) => {
        if (acc[index] && (curr !== acc[index][0] || 
            acc[index].length >= hash[curr].length)) index++
        if (!acc[index]) acc[index] = []
        acc[index].push(curr)
        return acc
    }, [])

    return subArrays ? subArrays.map(el => hash[el[0]][el.length - 1]).join('') : ''

}