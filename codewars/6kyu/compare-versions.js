/*
Date of completion: 06-27-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Karan's company makes software that provides different features based on the version of operating system of the user.

To compare versions, Karan currently parses both version numbers as floats.

While this worked for OS versions 10.6, 10.7, 10.8 and 10.9, the operating system company just released OS version 10.10. This causes his method to fail, as 10.9 is greater than 10.10 when interpreting both as numbers, despite being a lesser version.

Help Karan by writing him a function which compares two versions, and returns whether or not the first one is greater than or equal to the second.

Specification notes:

Versions are provided as strings of one or more integers separated by '.'.
    The version strings will never be empty.
    The two versions are not guaranteed to have an equal amount of sub-versions, when this happens assume that all missing sub-versions are zero.
    Two versions which differ only by trailing zero sub-versions will never be given.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

Two string

-----

Return:

A Boolean value

-----

Examples: 

compareVersions("11", "10") -> true

compareVersions("11", "11") -> false

compareVersions("10.4.6", "10.4") -> true

compareVersions("10.4", "11") -> false

------

Pseudo Code: 

function compareVersions(v1, v2)
    v1

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

//NOTE: This solution will not use Regex.

function compareVersions(version1, version2) {
    let v1 = version1.split('.').map(e => +e),
        v2 = version2.split('.').map(e => +e)
    const longer = Math.max(v1.length, v2.length)
    
    for (let i = 0; i < longer; i++) {
        let n1 = v1[i] || 0, n2 = v2[i] || 0
        if (n1 === n2) continue
        return n1 > n2 
    }

    return true
}