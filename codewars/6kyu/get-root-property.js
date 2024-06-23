/*
Date of completion: 06-22-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Given an object of likely nested objects, where the final element is an array containing positive integers, write a function that returns the name of the root property that a particular integer lives in.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

An object and a number

-----

Return:

A string

-----

Examples: 

let object = {
    "r1n": {
        "mkg": {
            "zma": [21, 45, 66, 111],
            "mii": {
                "ltf": [2, 5, 3, 9, 21]
             },
             "fv": [1, 3, 6, 9]
         },
         "rmk": {
             "amr": [50, 50, 100, 150, 250]
         }
    },
    "fik": {
        "er": [592, 92, 32, 13],
        "gp": [12, 34, 116, 29]
    }
}

getRootProperty(object, 250); //=> "r1n"
getRootProperty(object, 116); //=> "fik"
getRootProperty(object, 111); //=> "r1n"

getRootProperty(object, 999); //=> null


------

Pseudo Code: 

currentProp <- holds current property name
iterator <- function that checks if property is array 
index <- 0
loop through obj argument
    currentProp <- Object keys at iterator index
    loop through property
        run iterator function
    return null
--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */


//NOTE: Need to refactor so that recursion breaks when "val" is found. 

function getRootProperty(obj, val) {
    let currentProp, index = 0, isFound = false

    const traverseObj = object => {
        if (isFound) return
        if (Array.isArray(object)) {
            if (object.includes(val)) isFound = true
        } else {
            for (let key in object) {
                traverseObj(object[key])
            }
        }
    }

    for (let prop in obj) {
        currentProp = Object.keys(obj)[index]
        traverseObj(obj[prop])
        if (isFound) break
            else index++   
    }

    return isFound ? currentProp : null
}