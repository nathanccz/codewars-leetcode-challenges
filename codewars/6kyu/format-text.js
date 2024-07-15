/*
Date of completion: 07-15-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Write a function format that takes two arguments, text and width, and formats the text to fit the width.

Your function should divide the given text into lines using newline characters. It should fit as many words into each line as possible without exceeding the given width or splitting any words between two lines. There should not be a space at the beginning or end of any line. For example, here is some text formatted with a width of 50:

Lorem ipsum dolor sit amet, consectetur adipiscing
elit. Aliquam nec consectetur risus. Cras vel urna
a tellus dapibus consequat. Duis bibendum
tincidunt viverra. Phasellus dictum efficitur sem
quis porttitor. Mauris luctus auctor diam id
ultrices. Praesent laoreet in enim ut placerat.
Praesent a facilisis turpis.

And the same text formatted with a width of 30:

Lorem ipsum dolor sit amet,
consectetur adipiscing elit.
Aliquam nec consectetur risus.
Cras vel urna a tellus dapibus
consequat. Duis bibendum
tincidunt viverra. Phasellus
dictum efficitur sem quis
porttitor. Mauris luctus
auctor diam id ultrices.
Praesent laoreet in enim ut
placerat. Praesent a facilisis
turpis.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

String of text and a number indicating width

-----

Return:

A new string, formatted

-----

Examples: 

See description above

------

Pseudo Code: 

function format(text, width)
    array <- holds text as array
    result <- '', limit = width

    loop through each word of array
        if word length is less than limit, 
            add word to result + ''
            subtract word length from limit
        else
            limit = width 
            add word to result + \n
            subtract word length from limit

    return result


--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

//NOTE: This will be solved without regex. 

function format(text, width) {
    const array = text.split(' ')
    let result = '',
        limit = width

    for (let word of array) {
        if (word.length <= limit) {
            result += word + ' '
            limit -= word.length + 1
        } else {
            result = result.trim()
            result += '\n' + word + ' '
            limit = width
            limit -= word.length + 1
        }
    }

    return result.trim()
}