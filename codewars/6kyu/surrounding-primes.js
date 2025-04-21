/*
Date of completion: 04-21-2025 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

We need a function prime_bef_aft() that gives the largest prime below a certain given value n,

befPrime or bef_prime (depending on the language),

and the smallest prime larger than this value,

aftPrime/aft_prime (depending on the language).

The result should be output in a list like the following:

primeBefAft == [befPrime, aftPrime]

If n is a prime number it will give two primes, n will not be included in the result.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A number

-----

Return:

A pair of numbers as an array

-----

Examples: 

primeBefAft(100) == [97, 101]

primeBefAft(97) == [89, 101]

primeBefAft(101) == [97, 103]
   
------

Pseudo Code: 

create helper function isPrime


function primeBefAft(num)

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

function primeBefAft(num) {
  const result = []

  for (let i = num + 1; ; i++) {
    if (isPrime(i)) {
      result[1] = i
      break
    }
  }

  for (let i = num - 1; ; i--) {
    if (isPrime(i)) {
      result[0] = i
      break
    }
  }

  return result
}
