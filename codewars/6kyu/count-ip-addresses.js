/*
Date of completion: 08-14-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

IP address as string

-----

Return:

Number

-----

Examples: 

* With input "10.0.0.0", "10.0.0.50"  => return   50 
* With input "10.0.0.0", "10.0.1.0"   => return  256 
* With input "20.0.0.10", "20.0.1.0"  => return  246

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

function ipsBetween(start, end){
  
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
    
    return Math.abs(ipToNum(start) - ipToNum(end))
}