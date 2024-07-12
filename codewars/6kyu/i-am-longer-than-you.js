/*
Date of completion: 07-11-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Create a function longer that accepts a string and sorts the words in it based on their respective lengths in an ascending order. If there are two words of the same lengths, sort them alphabetically. 

Assume that only only Alphabets will be entered as the input. Uppercase characters have priority over lowercase characters. 

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A string of words

-----

Return:

A new string of words, sorted

-----

Examples: 

longer("Another Green World") => Green World Another
longer("Darkness on the edge of Town") => of on the Town edge Darkness
longer("Have you ever Seen the Rain") => the you Have Rain Seen ever

------

Pseudo Code: 

function longer(s)
    s split into array 
    cache <- new Map to store length:words
    loop through array and add to cache



--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

//NOTE: This will be solved without regex. 

function longer(s) {
    const array = s.split(' ').sort((a, b) => a.length - b.length)
    let cache = new Map()

    for (let str of array) {
        if (!cache.has(str.length)) cache.set(str.length, [])
        let arr = cache.get(str.length)
        arr.push(str)
        cache.set(str.length, arr)
    }
    
    let cacheToArr = Array.from(cache.values()),
        result = ''
    
    for (let val of cacheToArr) {
      if (val.length > 1) {
        val.sort()
        result += val.join(' ') + ' '
      } else result += val[0] + ' '
    }
  
    return result.trim()
}