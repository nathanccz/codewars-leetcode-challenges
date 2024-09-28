/*
Date of completion: 09-27-2024 
Codewars or Leetcode Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

You are writing a chat room app for your company.

Users have provided feedback that seeing everyone's full names on the screen creates too much noise, and have asked for it to be reduced. However, we still want to be able to uniquely identify everyone. The team have come up with a few rules that will hopefully help in solving this problem!

Note: It can be assumed that names are in the format of a first name and a last name consisting solely of letters from the English alphabet, both uppercase (A-Z) and lowercase (a-z), separated by a single space and if no names are provided, we should return an empty array.

1. If only one person in the chat room has a specific first name, only their first name will be written out.

John Smith -> John

2. If two or more people have a specific first name, but don't share a second name initial, their first name and second name initial will be written out.

 John Smith -> John S    
 John Adams -> John A
3. Finally, if two or more people have a specific first name and last name initial, their full name will be written out.

 John Smith -> John Smith    
 John Simms -> John Simms

To help tidy up the output, management have also asked that the chat room list should be alphabetised, by the users screen names and should all be in Title Case.

JOHN smith -> John Smith
For our purposes, when we receive the names casing is not important, meaning JOHn SmiTh is equal to john smith, after we've tidied up the casings, these should be interpreted as the same name.

Our company also has an unusual policy - we don't hire somebody if an employee already exists with the same full name, as our HR platform identifies staff by a combination of their first and last names. Due to this, we don't have to worry about multiple instances of the same full name.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

An array of strings representing full names

-----

Return:

A new array of shortened names. 

-----

Examples: 


const names = ["Joe Bloggs", "John Smith"];
const expectedResult = ["Joe", "John"];

const names = ["Joe Bloggs", "John Smith", "Jane Doe"];
const expectedResult = ["Jane", "Joe", "John"];

const names = ["Joe Bloggs", "John Smith", "Jane Doe", "Jane Bloggs"];
const expectedResult = ["Jane B", "Jane D", "Joe", "John"];
 

------

Pseudo Code: 

function generateChatRoomNames(users)
    result = []
    hash = {}

    loop through users
        let name = name converted to title case, split to an arry
        if hash doesn't have first name, set to empty array
        hash[firstname].push(name joined to string)

    loop through hash
        if hash[name].length === 1, push hash[name].split(' ')[0]


--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function generateChatRoomNames(users) {
    let result = [],
        hash = {}

    users.forEach(user => {
        let name = user.split(' ').map(e => e[0].toUpperCase() + e.substring(1).toLowerCase())
        if (!hash[name[0]]) hash[name[0]] = []
        hash[name[0]].push(name.join(' '))
    })
    
    for (let firstName in hash) {
        if (hash[firstName].length === 1) result.push(firstName)
            else {
                for (let name of hash[firstName]) {
                    let arr = name.split(' ')
                    if (hash[firstName].filter(e => e !== name).some(e => e.split(' ')[1][0] === arr[1][0])) {
                        result.push(name)
                    } else result.push(arr[0] + ' ' + arr[1][0])
                }
            }
    }

    return result.sort((a, b) => a.localeCompare(b))
}