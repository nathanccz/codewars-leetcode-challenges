/*
Date of completion: 09-23-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

You have been watching a video for some time. Knowing the total video duration find out what portion of the video you have already watched.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

Two strings, the first representing time spent watching, and the second representing total video length

-----

Return:

An array [a, b] where a/b is a reduced fraction

-----

Examples: 

videoPart("02:20:00","07:00:00") -> [1, 3]

videoPart("25:26:20","25:26:20") -> [1, 1]

videoPart("00:02:20","00:10:00") -> [7, 30]


------

Pseudo Code: 

function videoPart(part, total) 
    toSeconds <- function that takes in a string
        split string by ':'
        return arr[0] * 3600 + arr[1] * 60 + arr[2]

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
  }
  
function reduceFraction(numerator, denominator) {
  const gcdValue = gcd(numerator, denominator);
  return [numerator / gcdValue, denominator / gcdValue];
}

function videoPart(part, total) {
    const toSeconds = str => {
        let arr = str.split(':')
        return arr[0] * 3600 + arr[1] * 60 + arr[2]
    }

    let partToSec = toSeconds(part),
        totalToSec = toSeconds(total)

        
}