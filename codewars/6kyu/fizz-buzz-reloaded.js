/*
Date of completion: 08-05-2025 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

In this kata you must implement the "fizz buzz reloaded function". This function takes the following arguments:

start (integer >= 0). -> this is the point where we start counting (inclusive).
stop (integer >= 1) -> this is the point where we stop counting (inclusive).
step (integer) if step is positive count forwards, if count is negative count backwards.
for example:

start = 2, end = 10, step = 2
  sequence: 2 4 6 8 10

start = 10, end = 1, step = -3
  sequence: 10 7 4 1
The final paremeter is a dictionary/Map object of functions (where the key is the name of the function, and the value is the function itself). These functions take the following form:

func(x): return bool
For each number in the range, your task is to create a string where you combine the name of all functions that equate to true for the number.

for example, suppose the dictionary/Map object looks like this:

new Map([["flash", x => x % 3 === 0], ["bang", x => x % 5 === 0]])
for the number 3, the string ought to be "fizz", for the number 15 it ought to be "fizzbuzz" (no spaces) because both of the functions are true. If NO functions equate to true, return the number

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

Start number, stop number, step number, and Map of functions

-----

Return:

A new string

-----

Examples: 

let funcs1 = new Map([["fizz",x=>true]])
Test.assertEquals(fizzBuzzReloaded(1, 3, 1, funcs1), "fizz fizz fizz")

let funcs2 = new Map([["fizz",x=>false]])
Test.assertEquals(fizzBuzzReloaded(1, 3, 1, funcs2), "1 2 3")

let funcs3 = new Map([["fizz",x=>x%3===0], ["buzz",x=>x%5===0]])
Test.assertEquals(fizzBuzzReloaded(1, 19, 1, funcs3), "1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz 13 14 fizzbuzz 16 17 fizz 19")
Test.assertEquals(fizzBuzzReloaded(19, 1, -1, funcs3), "19 fizz 17 16 fizzbuzz 14 13 fizz 11 buzz fizz 8 7 fizz buzz 4 fizz 2 1")

------

Pseudo Code: 

function fizzBuzzReloaded(start, stop, step, functions) 
    create results array, initalized as empty
    create funcs array as entries in 'functions' argument

    create for loop starting at start, ending at end, and stepping by step
        create num from current iteration
        loop through funcs array
            create name variable as first element
            create func variable as second element
            call func with num passed in
            if true, push name to results array

    return results


--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function fizzBuzzReloaded(start, stop, step, functions) {
  const results = []
  const funcs = Array.from(functions.entries())
  const loopCondition = step > 0 ? (i) => i <= stop : (i) => i >= stop

  for (let i = start; loopCondition(i); i += step) {
    const result = []

    for (const entry of funcs) {
      const name = entry[0]
      const func = entry[1]

      if (func(i)) {
        result.push(name)
      }
    }

    if (result.length > 0) {
      results.push(result.join(''))
    } else {
      results.push(i)
    }
  }

  return results.join(' ')
}
