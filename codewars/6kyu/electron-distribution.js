/*
Date of completion: 06-18-2025 
Codewars or Leetcode Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

https://www.codewars.com/kata/59175441e76dc9f9bc00000f/train/javascript

You are a khmmadkhm scientist and you decided to play with electron distribution among atom's shells. You know that basic idea of electron distribution is that electrons should fill a shell until it's holding the maximum number of electrons.

Rules:

-Maximum number of electrons in a shell is distributed with a rule of 2n^2 (n being position of a shell).
-For example, maximum number of electrons in 3rd shell is 2*3^2 = 18.
-Electrons should fill the lowest level shell first.
-If the electrons have completely filled the lowest level shell, the other unoccupied electrons will fill the higher level shell and so on.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A number representing atomic number

-----

Return:

An array of integers representing shells

-----

Examples: 

atomicNumber(1); should return [1]
atomicNumber(10); should return [2, 8]
atomicNumber(11); should return [2, 8, 1]
atomicNumber(47); should return [2, 8, 18, 19]

------

Pseudo Code: 

function atomicNumber(num)
    create results variable initialized as empty array
    create atomicN to hold num to subtract from
    create iterator to track shell iterations, initialized at 1

    while atomicN is greater than zero
        create max variable as 2 * iterator**2 

        if max <= atomicN
            push max to results array
            else push difference of atomicN - max to results 

        atomicN -= max

    return results

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function atomicNumber(num) {
  const shells = []
  let atomicNum = num,
    i = 1

  while (atomicNum > 0) {
    const max = 2 * i ** 2

    if (max <= atomicNum) {
      shells.push(max)
      atomicNum -= max
    } else {
      shells.push(atomicNum)
      break
    }

    i++
  }

  return shells
}
