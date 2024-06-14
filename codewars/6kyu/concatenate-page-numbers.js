/*
Date of completion: 06-13-2024 
Codewars or Leetcode Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Say we run a site that manages informational books for students. If a students searches for a topic (say, 'Kangaroos'), our platform will give them a list of each page in their schoolbook that pertains to kangaroos.

We have a server and database that, given a query of a topic, will return us the page numbers the topic appears on. Problem is, if a topic appears on pages 20 through 50, we don't want to show the student of a list of each individual page ('20, 21, 22, 23....'), we would want to show them a page range, like '20-50'.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

An array of numbers.

-----

Return:

A string, separated by comma, of each page in the array with sequential pages represented by a hyphenated range. The array must be in ascending order.

-----

Examples: 

paginate([1,3,4,5,7,9,10]) => '1, 3-5, 7, 9-10'
paginate([13,9,11,7,12]) => '7, 9, 11-13'

------

Pseudo Code: 

function paginate(arr)
    sorted <- array sorted in ascending order
    result <- empty string


--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function paginate(arr) {
    const sorted = arr.sort((a,b) => a - b)
    let output = '', prevPage = null
    for (let i = 0; i < sorted.length; i++) {
        let currPage = sorted[i]
        if (prevPage && currPage - 1 === prevPage) {
            if (output.includes(`-${prevPage}`)) {
                output = output.replace(`-${prevPage}`, `-${currPage}`)
            } else output = output.replace(`${prevPage}`, `${prevPage}-${currPage}`)
        } else {
            output += `${currPage}, `
        }
        prevPage = currPage
    }
    return output.substring(0, output.length - 2)
}