/*
Date of completion: 09-04-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Given the following input array:

var list1 = [
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];

write a function that

1. adds the question property to each object in the input array where the developer has not provided the relevant details (marked with a null value in JavaScript, with the default value in COBOL). The value of the question property should be the following string:
Hi, could you please provide your <property name>.

2. and returns only the developers with missing details:

[
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java', 
  question: 'Hi, could you please provide your firstName.' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null, 
  question: 'Hi, could you please provide your language.' }
]

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

An array of objects representing users

-----

Return:

A filtered array of objects 

-----

Example: 

See description above.

------

Pseudo Code: 

function askForMissingDetails(list)
    result <- empty array

    loop through list
        let properties = array of object entries
            emptyProp = find el of properties where second el is 0, get first el
        if (emptyProp exists)
            currProp.question = question string with emptyProp name
            push to results

    return result

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function askForMissingDetails(list) {
    const result = []

    for (let dev of list) {
        let properties = Object.entries(dev),
            emptyProp = properties.find(prop => prop[1] == null)

        if (emptyProp) {
            dev.question = `Hi, could you please provide your ${emptyProp[0]}.`
            result.push(dev)
        }
    }

    return result
}