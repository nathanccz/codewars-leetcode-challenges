/*
Date of completion: 05-26-2025 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

You have the job to implement a countdown function that will be used for the next NASA spatial mission. The function takes a duration in milliseconds and return a string in countdown format.

If it's counting down, the first character should be '-', if it's counting up it should be '+'. Then it should return the number of: hours (min 2 units), minutes (2 units) and seconds (2 units).

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A positive or negative integer

-----

Return:

A string

-----

Examples: 

countdown(-154800000)  // return  '-43:00:00'
countdown(0)           // return  '+00:00:00'
countdown(61000)       // return  '+00:01:01'
countdown(360000000)   // return '+100:00:00'

------

Pseudo Code: 

function countdown(millisecs)
    create sign variable: Math.sign(millisecs) === 1 ? "+" : "-"



--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function countdown(millisecs) {
  const abs = Math.abs(millisecs)
  const hours = Math.floor(abs / 3600000)
  const minutes = Math.floor((abs % 3600000) / 60000)
  const seconds = Math.floor((abs % 60000) / 1000)

  const sign = millisecs > 0 ? '+' : '-'
  const formatted = [hours, minutes, seconds]
    .map((n) => String(n).padStart(2, '0'))
    .join(':')

  return sign + formatted
}
