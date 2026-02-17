/*
Date of completion: 02-17-2026 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

In this Kata, you will be given a series of times at which an alarm sounds. Your task will be to determine the maximum time interval between alarms. 
Each alarm starts ringing at the beginning of the corresponding minute and rings for exactly one minute. The times in the array are not in chronological order. 
Ignore duplicate times, if any.


--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

An array of strings representing the time in HH:MM

-----

Return:

A new string representing the largest time interval, also in HH:MM

-----

Examples: 

solve(["14:51"]) returns "23:59"
solve(["23:00","04:22","18:05","06:24"]) returns "11:40"
solve(["21:14", "15:34", "14:51", "06:25", "15:30"]) returns "09:10"

["23:00","18:05","06:24","04:22"]

    4:54, 11:40, 2:02
------

Pseudo Code: 

function strToMin
    destructure the array after splitting by colon
    multiply first element (turn to Number) by 60

    return first element + second element

function minToStr
    create minutes variable from min % 60
    create hours variable from math floor (min / 60)

    return hours:minutes (remember to padStart with 0)

function solve(arr)
    create intervals variable as empty array
    create sorted variable and sort by calling strToMin on a abd b
    
    loop through sorted array
        create prev variable as sorted[ind - 1]
        create curr variable as strToMin() + 1

        push difference to intervals variable

    create maxInterval as Math.max(...intervals)

    return minToStr(maxInterval)

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function strToMin(str) {
  const [hour, minute] = str.split(':')

  return Number(hour) * 60 + Number(minute)
}

function minToStr(num) {
  const minute = (num % 60).toString().padStart(2, '0')
  const hour = Math.floor(num / 60)
    .toString()
    .padStart(2, '0')

  return `${hour}:${minute}`
}

function solve(arr) {
  if (arr.length === 1) return '23:59'

  const intervals = []
  const sorted = [...arr].sort((a, b) => strToMin(b) - strToMin(a))

  intervals[0] =
    1439 - strToMin(sorted[0]) + strToMin(sorted[sorted.length - 1])

  sorted.slice(1).forEach((time, index) => {
    const prev = strToMin(sorted[index])
    const curr = strToMin(time) + 1
    const difference = Math.abs(prev - curr)

    intervals.push(difference)
  })

  const maxInterval = Math.max(...intervals)

  return minToStr(maxInterval)
}
