/*
Date of completion: 09-18-2024 
Codewars or Leetcode Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

The Problem:

Dan, president of a Large company could use your help. He wants to implement a system that will switch all his devices into offline mode depending on his meeting schedule. When he's at a meeting and somebody texts him, he wants to send an automatic message informing that he's currently unavailable and the time when he's going to be back.

What To Do:

Your task is to write a helper function checkAvailability that will take 2 arguments:

- schedule, which is going to be a nested array with Dan's schedule for a given day. Inside arrays will consist of 2 elements - start and finish time of a given appointment,

- currentTime - is a string with specific time in hh:mm 24-h format for which the function will check availability based on the schedule.

    - If no appointments are scheduled for currentTime, the function should return true. If there are no appointments for the day, the output should also be true
    - If Dan is in the middle of an appointment at currentTime, the function should return a string with the time he's going to be available.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

An array of strings representing Dan's schedule, and a string representing the current time

-----

Return:

A value of "true" if Dan is available OR a string representing the time when Dan is free

-----

Examples: 

checkAvailability([["09:30", "10:15"], ["12:20", "15:50"]], "11:00"); should return true

checkAvailability([["09:30", "10:15"], ["12:20", "15:50"]], "10:00"); should return "10:15"

------

Pseudo Code: 

function setDate(str)
    let date = new Date
        arr = str.split(':')
    date.setHours(arr[0], arr[1], 0)
    return date

function checkAvailability(schedule, currentTime)
    let currTime = setDate(currTime)
    for each array of schedule
        start <- setDate(arr[0])
        end <- setDate(arr[1])
        if curr time is between start and less than or equal toend, return true
    
    return seclast element of schedule


--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function strToHours(str) {
    let date = new Date(),
        arr = str.split(':')
    date.setHours(+arr[0], +arr[1], 0)
    return date
}

function checkAvailability(schedule, currentTime) {
    let currTimeToHours = strToHours(currentTime)

    for (let meeting of schedule) {
        const [start, end] = [strToHours(meeting[0]), strToHours(meeting[1])]
        if (currTimeToHours > start && currTimeToHours <= end) return meeting[1]
    }
    
    return true
}