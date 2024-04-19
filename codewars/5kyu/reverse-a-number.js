/*
First attempt: 04-17-2024 
Codewars Level 5 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Given a string representing an integer, return a string with every sequence of ascending or descending digits reversed.

Such sequences are not required to be strictly ascending / descending:

12333  ---> 33321     // ascending sequence 12333
66654  ---> 45666     // descending sequence 66654
133555224466  ---> 555331664422   // ascending sequence 133555, ascending sequence 224466 

If a digit (or several of the same consecutive digits) is at the junction part of ascending and descending sequence, it should belong to the left part of the junction:

12321  ---> 32112  
digit 3 may be part of an ascending order(123)
It can also be a part of a descending order(321)

135642  --->  653124
digit 6 may be part of an ascending order(1356)
It can also be a part of a descending order(642)

13555432  ---> 55531234
consecutive digits 555 may be part of an ascending order(13555)
It can also be a part of a descending order(555432)

If the number is a negative number, the symbol - does not reverse:

-123  ---> -321
-123321  --->  -332112

After reverse, if the digit 0 is in the first place (ignoring the sign), it should be removed:

420135  ---> 024531  ---> 24531
-520025  ---> -002552  --->  -2552


--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

We're given a number as a single string.

-----

Return:

The function should return a new string. 

-----

Examples: 

123456  --->  654321  // ascending sequence 123456
654321  --->  123456  // descending sequence 654321 
135246  --->  531642  // ascending sequence 135, ascending sequence 246
642531  --->  246135  // descending sequence 642, descending sequence 531

------

Pseudo Code: 




--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */
//NOTE: This solution passes most tests, but needs a lot more refactoring/rethinking.


function reverseNumber(s) {
    const arr = [...Math.abs(s).toString()]
    let result = '', sequence = []
    const firstUnique = array => arr.findIndex(num => num !== arr[0])
    let sign = Math.sign(arr[0] - arr[firstUnique(arr)])

    for (let i = 0; i < arr.length; i++) {
        let curr = +arr[i], next = +arr[i + 1]
        if (Math.sign(curr - next) === sign || curr === next) {
            sequence.push(curr)
        } else {
                sequence.push(curr)
                console.log(sequence)
                result += sequence.reverse().join('')
                sequence = []
                const unique = firstUnique(arr.slice([i + 2]))
                sign = Math.sign(next - arr[unique])
            }
    }
    return (+result * Math.sign(s)).toString()
}