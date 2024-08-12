/*
Date of completion: 08-12-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Write a function that can take an array of addresses as input, and return an array with the count of addresses for each state.

The input objects will have the following structure:

{
  house: 1234,
  street: "Lonely St.",
  city: "Soldotna",
  zipcode: 99669,
  state: "AK"
}
The returned objects must have the following structure:

{
  state: "AK",
  count: 25
}

The states must be ordered by first appearance.

An error is expected if an input object doesn't have a state property.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

An array of objects

-----

Return:

A new array of objects 

-----

Examples: 

Not available

------

Pseudo Code: 

function count(addresses)
    result = empty array

    for each address of addresses
        let index = result.findIndex obj.state === address.state
        if index !== -1, result[index].state++
            else result.push({state: address.state, count: 1}) 

    return result

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function count(addresses) {
    let result = []

    for (let address of addresses) {
        if (!address.state) throw new Error('No state property!')
        let indexOfState = result.findIndex(e => e.state === address.state)
        if (indexOfState !== -1) result[indexOfState].count++
            else result.push({state: address.state, count: 1})
    }

    return result
}