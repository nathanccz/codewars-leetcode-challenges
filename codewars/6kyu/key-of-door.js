/*
Date of completion: 03-01-2025 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

You are in a maze. There are a lot of doors, you have to find the passcode to open them. There are some numbers next to each door, and you need to find the passcode from these numbers.

You will receive an integer array nums containing some numbers like this:

[153456,123406,124456,323456,123458,123756]

How to find the passcode? Let's change the arrangement method:

[
153456,
123406,
124456,
323456,
123458,
123756
]

We can see that each column has one number different from the others, they are the passcode.

Please find out the passcode and return it as a string value.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

An array of numbers

-----

Return:

Password as string

-----

Examples: 

[153456,123406,124456,323456,123458,123756]
should return "354708"

[7347289,3647289,3357289,3344289,3347389,3347229,3347281]
should return "7654321"

[232326,232363,232523,235323,242323,432323]
should return "445566"

[13579,13579,13579,13579,24680]
should return "24680"

------

Pseudo Code: 
 
function findKey(nums)
    const hash = {}

    loop through nums
        const string = nums.split('')
        loop through string
            if (!hash[i]) hash[i] = num
            if (hash[i] !== num)
                hash[i] = 


--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function findKey(nums){
    const hash = {}
    
    nums.forEach((num) => {
        const string = num.toString().split('')
        
        for (let i = 0; i < string.length; i++) {
            if (!hash[i]) {
                hash[i] = []
            }
            hash[i].push(string[i])
        }
    })
    
    const results = Object.values(hash)
    const uniques = results.map(arr => arr.find(num => arr.indexOf(num) === arr.lastIndexOf(num)))
    
    return uniques.join('')
}
  