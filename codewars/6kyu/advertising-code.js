/*
Date of completion: 02-26-2025 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Hey, young man, very glad to see you again in the madhouse, thank you for giving me a lot of help last time.

Now I have a great job, are you interested in?

My colleague myjinxin wanted to find a girlfriend, we as great programmers, what should we do?

I have a good idea, insert ads in the code!

We can do this:

1. when someone converted numbers to a string, 
   we put the advertisement insertion strings inside.
2. But if we do this, ads appear too frequently, 
   we should set a condition, only display ads in prime number
OK, this is my great idea, we can imagine, myjinxin will be able to find a girlfriend very quickly, and soon the wedding, and soon gave birth to a child, is really great!

I have written the advertising text, the rest of the work to you.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A number

-----

Return:

A string with ad copy if number is prime

-----

Examples: 


Test.assertEquals((1+0).toString(),"1", "mission failed")
Test.assertEquals((1+1).toString(),ads+2, "mission failed")
Test.assertEquals((1+2).toString(),ads+3, "mission failed")
Test.assertEquals((1+3).toString(),"4", "mission failed")
Test.assertEquals((1+4).toString(),ads+5, "mission failed")

------

Pseudo Code: 
 


--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

const ads=
"\nNow is the time for advertisements:\n"+
"My name is myjinxin, 25 years old, Male, \n"+
"unmarried, handsome, rich, looking for\n"+
"a lovely woman as a life partner\n";
//do something here 

Number.prototype.toString = function() {
    const number = this.valueOf()
    if (typeof number === 'number' && isPrime(number)) {
        return `${ads}${number}`
    } else {
        return `${number}`
    }
}

const isPrime = (n) => {
    if (n <= 1) {
        return false
    } else {
        for (let i = 2; i * i <= n; i++) {
            if (n % i === 0) {
                return false
            }
        }
        return true
    }
}


