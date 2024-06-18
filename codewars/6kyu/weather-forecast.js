/*
Date of completion: 06-18-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Find the most frequently occurring elements in arrays.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A 5-day JSON weather forecast which consist of 5 arrays. Each of the 5 arrays includes 8 numbers which represent 3-hourlytemperature forecast for a given day.

-----

Return:

An array which includes the most frequent number (temperature) from each of the 5 arrays (days). In case there is a tie, return the value present later in a given array (day).

-----

Examples: 

const forecast_01 = {
   "temperature": [
       [15,17,19,21,21,21,20,16],
       [16,17,22,22,22,22,20,16],
       [12,17,19,20,20,20,20,18],
       [14,15,19,19,20,22,18,17],
       [15,17,24,24,24,20,20,20]
   ]
};


getMostFrequent(forecast_01)  // should return [21,22,20,19,20]

------

Pseudo Code: 

function getMostFrequent(json)
    result <- empty array
    loop through json.temperature as day
        cache <- new Map
        loop through day
            if (!cache.has(temp)) map.set(temp, 0)
            map.set(temp, map.get(temp) + 1)
        let max = Max value in cache
        let match = Last value in day equal to max
        push match to result
    return result

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function getMostFrequent(json) {
    const result = []
    for (let day of json.temperature) {
        let cache = new Map()
        for (let temp of day) {
            if (!cache.has(temp)) cache.set(temp, 0)
            cache.set(temp, cache.get(temp) + 1)
        }
        let max = Math.max(...Array.from(cache.values()))
        let match = day.findLast(temp => cache.get(temp) === max)
        result.push(match)
    }
    return result
}
