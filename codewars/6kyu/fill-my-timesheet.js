/*
Date of completion: 08-15-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

At work I need to keep a timesheet, by noting which project I was working on every 15 minutes. I have an timer that beeps every 15 minutes to prompt me to note down what I was working on at that point, but sometimes when I'm away from my desk or working continuously on one project, I don't note anything down and these get recorded as null.

Help me populate my timesheet by replacing any null values in the array with the correct project name which is given by surrounding matching values.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.

n: a positive integer, the number of checkout tills.

-----

Return:

The function should return an integer, the total time required.

-----

Examples: 

fillGaps([1,null,1]) -> [1,1,1]   # Replace nulll values surrounded by matching values

fillGaps([1,null,null,null,1]) -> [1,1,1,1,1]  # There may be multiple nulls

fillGaps([1,null,1,2,null,2]) -> [1,1,1,2,2,2]  # There may be multiple replacements required

fillGaps([1,null,2,null,2,null,1]) -> [1,null,2,2,2,null,1]  # No nesting.

fillGaps([1,null,2]) -> [1,null,2] # No replacement if ends don't match

fillGaps([null,1,null]) -> [null,1,null] # No replacement if ends don't match off the ends of the array

fill_gaps(['codewars', null, null, 'codewars', 'real work', null, null, 'real work']) -> ["codewars", "codewars", "codewars", "codewars", "real work", "real work", "real work", "real work"] # Works with strings too

------

Pseudo Code: 

function fillGaps(timesheet)
    let result = empty array,
        placeholder = empty array
    
    for loop through timesheet
        if curr is not null and placeholder length > 0
            if last el of result is the same as curr
                concat placeholder.fill(curr), curr
        else if curr is not null, push to result
            else push to placeholder

return result

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */
//NOTE: This passes all the example tests above, but there was a problem in Codewars where the JavaScript version lacked random tests. 

function fillGaps(timesheet) {
    let result = [],
        placeholder = []

    for (let i = 0; i < timesheet.length; i++) {
        let curr = timesheet[i]

        if (curr !== null && placeholder.length > 0) {
            if (result[result.length - 1] === curr) {
                result.push(placeholder.fill(curr))
                result.push(curr)
              placeholder = []
            } else {
              result.push(placeholder)
              result.push(curr)
              placeholder = []
            }
        } else if (curr !== null) result.push(curr)
            else placeholder.push(curr)
        
    }
    result.push(placeholder)
    return result.flat()
}