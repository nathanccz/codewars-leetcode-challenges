/*
Date of completion: 09-26-2025 
Codewars Level 5 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

https://www.codewars.com/kata/57d60e5476da831f5600011e/train/javascript

Description:
You are a fruit ninja, your skill is cut fruit. You cut some fruit by your knife in last kata. You want to know how many fruits have been successfully cut, so you need to count the number of fruits. For example:

halfFruits=["app","le","pe","ar","ban","ana"]
countFruits(halfFruits)={"apple":1,"pear":1,"banana":1}

As you see, you should return an object that contains all fruits and its number. We only count the whole fruit, the excess will be ignored:

halfFruits=["app","le","app","le","le","le"]
countFruits(halfFruits)={"apple":2}  //two "le" has been ignored

The fruit which are not uniformly cut will be ignored. That is, When the length of fruit's name is a even number, the length of two parts should equal; When the length of fruit's name is an odd number, the left part is 1 character longer than right part.

halfFruits=["app","le","appl","e","ap","ple","ale","pp","bo","mb"]
countFruits(halfFruits)={"apple":1}  //only "app","le" is what we want

In order to make clear what is the fruit, you may need a list fruitsName. It's a preloaded variable, you can use it directly. e` :[

Task:
Complete function countFruits that accepts an argument halfFruits. Returns the result in accordance with the rules above.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

An array of strings

-----

Return:

An object with string keys and number values

-----

Examples: 

countFruits(["app","le","pe","ar","ban","ana"]) returns {"apple":1,"pear":1,"banana":1}

countFruits(["app","le","app","le","le","le"]) returns {"apple":2}

countFruits(["app","le","appl","e","ap","ple"]) returns {"apple":1}

countFruits(["le","le","app","app","app"]) returns {"apple":2}

------

Pseudo Code: 

function countFruits(halfFruits)
    create result variable, initialized as empty object
    
    loop through halfFruits
        if 
--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

const fruitsName = ['apple', 'pear', 'banana']

function countFruits(halfFruits) {
  const result = {}
  const available = {}

  for (const half of halfFruits) {
    for (const fruit of fruitsName) {
      const leftLen = Math.ceil(fruit.length / 2)
      const rightLen = Math.floor(fruit.length / 2)

      if (half.length === leftLen && fruit.startsWith(half)) {
        available[fruit] = available[fruit] || { first: 0, second: 0 }
        available[fruit].first++
      } else if (half.length === rightLen && fruit.endsWith(half)) {
        available[fruit] = available[fruit] || { first: 0, second: 0 }
        available[fruit].second++
      }
    }
  }

  for (const fruit in available) {
    const count = Math.min(available[fruit].first, available[fruit].second)
    if (count > 0) {
      result[fruit] = count
    }
  }

  return result
}

countFruits(['app', 'le', 'pe', 'ar', 'ban', 'ana'])
