/*
Date of completion: 08-13-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

A stream of data is received and needs to be reversed.

Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

11111111  00000000  00001111  10101010
 (byte1)   (byte2)   (byte3)   (byte4)

 should become:

10101010  00001111  00000000  11111111
 (byte4)   (byte3)   (byte2)   (byte1)

 The total number of bits will always be a multiple of 8.

The data is given in an array as such:

[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
Note: In the C and NASM languages you are given the third parameter which is the number of segment blocks.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

An array of zeros and ones

-----

Return:

A new array 

-----

Examples: 

const data1 = [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
const data2 = [1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1]
assert.deepEqual(dataReverse(data1),data2)

const data3 = [0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1]
const data4 = [0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0]
assert.deepEqual(dataReverse(data3),data4)

------

Pseudo Code: 

function dataReverse(data)
    result <- empty array
    currInd = 0
    for loop through data
        push to result[currInd]
        if i % 8 is 0, currInd++

    return result reversed

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function dataReverse(data){
    let result = [],
        currInd = 0

    for (let i = 1; i <= data.length; i++) {
        if (!result[currInd]) result[currInd] = []
        result[currInd].push(data[i - 1])
        if (i % 8 === 0) currInd++
    }

    return result.reverse().flat()
}