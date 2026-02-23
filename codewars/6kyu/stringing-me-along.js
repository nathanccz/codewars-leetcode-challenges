/*
Date of completion: 02-23-2026 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Implement a function that receives a string, and lets you extend it with repeated calls. When no argument is passed you should return a string consisting of space-separated words you've received earlier.

Note: There will always be at least 1 string; all inputs will be non-empty.

For example:

createMessage("Hello")("World!")("how")("are")("you?")() === "Hello World! how are you?"

Tip (helpful, but not necessary): Try using classes!

Good luck and happy coding!


--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

An array of strings representing the time in HH:MM

-----

Return:

A new string representing the largest time interval, also in HH:MM

-----

Examples: 

createMessage("Hello")("World!")("how")("are")("you?")() === "Hello World! how are you?"

------

Pseudo Code: 

    define Class Message
        this.parts initialized as array with text

    define append method
        if text is undefined return this.parts joined
        if there's text push it to parts array
        return function that calls this.append with new text


    function createText
        create new msg instance of Message class and pass in text
        return msg with next text

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

class Message {
  constructor(text) {
    this.parts = [text]
  }

  append = (text) => {
    if (text === undefined) return this.parts.join(' ')
    this.parts.push(text)
    return (nextText) => this.append(nextText)
  }
}

const createMessage = (text) => {
  const msg = new Message(text)
  return (nextText) => msg.append(nextText)
}
