/*
Date of completion: 09-03-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

The value of the username property is composed by concatenating:

firstName in lower-case;

first letter of the lastName in lower-case; and

the birth year which for the purpose of this kata is calculated simply by subtracting age from the current year. Please make sure that your function delivers the correct birth year irrespective of when it will be executed, for example it should also work correctly for a meetup organised in 10-years-time. The example above assumes that the function is run in year 2020.

Notes:

The input array will always be valid and formatted as in the example above.

Age is represented by a number which can be any positive integer.
Lastname will always be one upper-cased letter followed by dot, e.g. 'N.'

Order of the objects in the array should be maintained but order of the properties in the individual objects does not matter.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

An array of objects representing users

-----

Return:

A new array of objects with a userName property

-----

Examples: 

var list1 = [
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
];

should return

[
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby', 
    username: 'emilyn1990' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure', 
    username: 'nore2000' }
]

------

Pseudo Code: 

function addUsername(list)
    let date = new Date,
        year = date to string, split, third index

    return list mapped
        let userName = curr.firstName to lowercase + curr.lastName[0] to lowerCase
        let birthYear = year - curr.age 
        curr.username = userName + birthyear

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function addUsername(list) {
    let year = new Date().getFullYear()

    list.forEach(user => {
        let name = user.firstName.toLowerCase() + user.lastName[0].toLowerCase()
        let birthYear = year - user.age
        user.username = name + birthYear.toString()
    })
  
    return list
}