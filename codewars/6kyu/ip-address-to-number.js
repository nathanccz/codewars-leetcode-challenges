/*
Date of completion: 06-26-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

An IPv4 address is a 32-bit number that identifies a device on the internet.

While computers read and write IP addresses as a 32-bit number, we prefer to read them in dotted-decimal notation, which is basically the number split into 4 chunks of 8 bits, converted to decimal, and delmited by a dot.

In this kata, you will create the function ipToNum (or ip_to_num, depending on the language) that takes an ip address and converts it to a number, as well as the function numToIp (or num_to_ip) that takes a number and converts it to an IP address string. Input will always be valid.

//original IP address
192.168.1.1

//breaks down into 4 binary octets
11000000 . 10101000 . 00000001 . 00000001

//which are merged together (unsigned 32-bit binary)
11000000101010000000000100000001

//and finally converted to base 10
3232235777

Note that the binary octets are unsigned (so we can't have negative numbers).

Be careful: JavaScript does bitwise arithmetic on signed 32-bits integers.


--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

First function takes in an IP string
Second function takes in a number

-----

Return:

First function returns a number
Second function returns an IP string
-----

Examples: 

'192.168.1.1' converts to 3232235777
'10.0.0.0'    converts to  167772160
'176.16.0.1'  converts to 2953838593

3232235777 converts to '192.168.1.1'
 167772160 converts to    '10.0.0.0'
2953838593 converts to  '176.16.0.1'

------

Pseudo Code: 

function ipToNum(ip)
    octets <- ip split by period
    merged <- ''
    for each octet
        binary <- ''
        while (num > 0)
            binary += num % 2
            num -= Math.floor(num / 2)
        merged += binary.reverse



function numToIp(num)


--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

//NOTE: This solution will not use Regex.
//Will be refactored using bitwise operators.

function ipToNum(ip) {
    const octets = ip.split('.')
    let merged = ''
    octets.forEach(oct =>  {
        let binary = '', num = +oct
        while (num > 0) {
            binary += num % 2
            num = Math.floor(num / 2)
        }
        binary = binary.padEnd(8, '0')
        merged += binary.split('').reverse().join('')
    })
    return merged.split('').reverse().reduce((s, n, i) => s + +n * Math.pow(2, i), 0)
    
}

function numToIp(num) {
    let binary = '', n = num 
    while(n > 0) {
        binary += n % 2
        n = Math.floor(n / 2)
    }
    binary = binary.padEnd(32, '0')
    binary = binary.split('').reverse()

    let subInd = 0
    const octets = binary.reduce((arr, curr) => {
        if (!arr[subInd]) arr[subInd] = []
        arr[subInd].push(curr)
        if (arr[subInd].length > 7) subInd++
        return arr
    }, [])

    return octets.reduce((arr,curr) => {
        const octNum = curr.reverse().reduce((s, n, i) => s + +n * Math.pow(2, i), 0)
        arr.push(octNum)
        return arr
    }, []).join('.')
}