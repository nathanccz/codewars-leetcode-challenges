/*
Date of completion: 04-25-2025 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

In this Kata, you will be given two numbers, a and b, and your task is to determine if the first number a is divisible by all the prime factors of the second number b. For example: solve(15,12) = False because 15 is not divisible by all the prime factors of 12 (which include2).

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

Two positive integers

-----

Return:

A boolean

-----

Examples: 

solve(9,243) returns true
solve(15,12) returns false
solve(21,2893401) returns true

------

Pseudo Code: 
 
function solve(a, b)
    prime helper function
    primeFactors = []
    loop through b / 2
        if b mod num is 0 AND num is prime
            push to primeFactors

    return primeFactors.every(num => a mod num is 0)


--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

const isPrime = (n) => {
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

function solve(a, b) {
  const primeFactors = []

  for (let i = 2; i <= Math.sqrt(b); i++) {
    if (b % i === 0 && isPrime(i)) {
      primeFactors.push(i)
    }
  }

  if (isPrime(b)) primeFactors.push(b)

  return primeFactors.every((num) => a % num === 0)
}
