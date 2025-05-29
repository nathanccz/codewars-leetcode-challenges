/*
Date of completion: 05-23-2025 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Consider the following class:

var Animal = { 
    name: "Cat", 
    numberOfLegs: 4 
}
Write a method that accepts a list of objects of type Animal, and returns a new list. The new list should be a copy of the original list, sorted first by the animal's number of legs, and then by its name.

If an empty list is passed in, it should return an empty list back.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

An array of objects

-----

Return:

A sorted array

-----

Example: 

This input,
[
      { name: "Cat", numberOfLegs: 4 },
      { name: "Snake", numberOfLegs: 0 },
      { name: "Dog", numberOfLegs: 4 },
      { name: "Pig", numberOfLegs: 4 },
      { name: "Human", numberOfLegs: 2 },
      { name: "Bird", numberOfLegs: 2 }
]

Should return:
[
      { name: 'Snake', numberOfLegs: 0 },
      { name: 'Bird', numberOfLegs: 2 },
      { name: 'Human', numberOfLegs: 2 },
      { name: 'Cat', numberOfLegs: 4 },
      { name: 'Dog', numberOfLegs: 4 },
      { name: 'Pig', numberOfLegs: 4 }
]

------

Pseudo Code: 
 
function sortAnimal(animals)
   create hash with numOfLegs as keys
   create result variable as empty array

   loop through animals
        store animal in hash by number of legs

    create values variable from hash values
    
    loop through values
        create sorted variable from value array sort alphabetically
        push to result

    return result

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function sortAnimal(animals) {
  const hash = {}
  const result = []

  for (let animal of animals) {
    const numOfLegs = animal.numberOfLegs
    ;(hash[numOfLegs] ||= []).push(animal)
  }

  const hashValues = Object.values(hash)

  for (let value of hashValues) {
    const sorted = value.sort((a, b) => a.name.localeCompare(b.name))
    for (let animal of sorted) {
      result.push(animal)
    }
  }

  return result
}
