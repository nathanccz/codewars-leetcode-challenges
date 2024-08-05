/*
Date of completion: 08-05-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Let's implement the zipObject function that enables such results

zipObject(['fred', 'barney'], [30, 40])
=> { 'fred': 30, 'barney': 40 }

zipObject([['fred', 30], ['barney', 40]])
=> { 'fred': 30, 'barney': 40 }

The zipObject creates an object composed from arrays of keys and values. It is provided with either a single two dimensional array, i.e. [[key1, value1], [key2, value2]] or with two arrays, one of keys and one of corresponding values.

If only keys are given, then set the values to undefined.

zipObject(['fred', 'barney'])
{ fred: undefined, barney: undefined }
If neither keys nor values are specified, then return {}

zipObject()
{}

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

An array of strings and an array of integers, either separately or within an array

-----

Return:

An object with key/value pairs

-----

Example: 

See description above

------

Pseudo Code: 

function zipObject(keys, values)
    if length of arguments array is one
        return keys reduce to object
            obj[el] = values[ind] || undefined
        return obj
    else 
        return arguments[0] reduced
            obj[el[0]] = el[1] || undefined
        return obj

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function zipObject(keys, values) {
    if (arguments.length === 2) {
        return keys.reduce((obj, curr, ind) => {
            if (!isNaN(values[ind])) obj[curr] = values[ind] 
              else obj[curr] = undefined
            return obj
        }, {})
    } else {
        return arguments[0].reduce((obj, curr) => {
            if (!isNaN(curr[1])) obj[curr[0]] = curr[1] 
              else obj[curr[0]] = undefined
            return obj
        }, {})
    }
}
