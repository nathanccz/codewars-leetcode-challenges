/*
Date of completion: 04-16-2024 
Codewars Level 5 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

INFO:
Timmy spends a lot of time talking on the phone and he would like to see which friends he talks to the most. 

TASK:
Complete the function closestFriends that takes an array history as input. Each element of history is a string in the following format "(000) 000-0000 00:00:00" (where the first part "(000) 000-0000" represents the phone number Timmy talked to and the second "00:00:00" is the call duration (hours : minutes : seconds). Your job is to find the three contacts Timmy talked to the most and return their names in an array sorted by total call durations.

A global variable phonebook is preloaded and contains all the contacts and their phone numbers.

var phonebook = {
    'John' : '(555) 010-3535',
    'Melissa' : '(442) 130-5165',
    'Jack' : '(333) 010-5135'
    //and so on...
};

The input history array will always have at least three different phone numbers.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

We're given an array of strings. There will be no empty strings or arrays. 

-----

Return:

The function should return an array of names (strings). The output array length should always be three. 

-----

Examples: 

var history = ["(555) 010-3535 00:13:24", 
               "(442) 130-5165 01:36:26",
               "(333) 010-5135 01:38:24"];

closestFriends(history)  // should return ['Jack','Melissa','John'];

------

Pseudo Code: 

function closestFriends(history) 
    phonelog <- reduce history into object
        name <- key in object whose value is equal to the phone number
        if phonelog obj doesn't have a key of name, set to 0
        add the duration of the call to each entry in the phonelog obj
        return obj
    
    return phonelog object keys sorted from highest to lowest, then filter out indexes 3 and above


--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function closestFriends(history) {

    const phonelog = 

        history.reduce((obj,item) => {
            const name = Object.keys(phonebook).find(key => phonebook[key] === item.substring(0,14))
            if (!obj[name]) obj[name] = 0
            obj[name] += item.substring(15).split(':').reduce((sum,n,i) =>         i === 0 ? 
                                                                sum += (+n)*3600 : i === 1 ? 
                                                                sum += (+n)*60 : sum += +n, 0)
            return obj
            
        }, {})

    return Object.keys(phonelog).sort((a,b) => phonelog[b] - phonelog[a]).filter((_,ind) => ind < 3)
    
}