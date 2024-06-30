/*
Date of completion: 07-01-2024 
Codewars or Leetcode Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Write a function which takes one parameter representing the dimensions of a checkered board. The board will always be square, so 5 means you will need a 5x5 board.

The dark squares will be represented by a unicode white square, while the light squares will be represented by a unicode black square (the opposite colours ensure the board doesn't look reversed on code wars' dark background). It should return a string of the board with a space in between each square and taking into account new lines.

An even number should return a board that begins with a dark square. An odd number should return a board that begins with a light square.

The squares are characters ■ and □ with codes \u25A0 and \u25A1.
Do not use HTML entities for the squares (e.g. □ for white square) as the code doesn't consider it a valid square. A good way to check is if your solution prints a correct checker board on your local terminal.

Ruby note: CodeWars has encoding issues with rendered unicode in Ruby. You'll need to use unicode source code (e.g. "\u25A0") instead of rendered unicode (e.g "■").




--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A number

-----

Return:

A string

-----

Examples: 

checkeredBoard(10),"□ ■ □ ■ □ ■ □ ■ □ ■\n■ □ ■ □ ■ □ ■ □ ■ □\n□ ■ □ ■ □ ■ □ ■ □ ■\n■ □ ■ □ ■ □ ■ □ ■ □\n□ ■ □ ■ □ ■ □ ■ □ ■\n■ □ ■ □ ■ □ ■ □ ■ □\n□ ■ □ ■ □ ■ □ ■ □ ■\n■ □ ■ □ ■ □ ■ □ ■ □\n□ ■ □ ■ □ ■ □ ■ □ ■\n■ □ ■ □ ■ □ ■ □ ■ □"

describe("Odd inputs", () => {
  it("n=3", () => {
    assertEqualsPrettyPrint(checkeredBoard(3), "■ □ ■\n□ ■ □\n■ □ ■", "Incorrect answer for n=3")
  });

  it("n=7", () => {
    assertEqualsPrettyPrint(checkeredBoard(7), "■ □ ■ □ ■ □ ■\n□ ■ □ ■ □ ■ □\n■ □ ■ □ ■ □ ■\n□ ■ □ ■ □ ■ □\n■ □ ■ □ ■ □ ■\n□ ■ □ ■ □ ■ □\n■ □ ■ □ ■ □ ■", "Incorrect answer for n=7")
  });

------

Pseudo Code: 

function checkeredBoard(dimension)
    result <- empty string
    colors <- array with \u25A1 and \u25A0
    let start = colors [dimension mod 2], other = colors [1 - dimension mod 2]

    for loop up to dimension i
        for loop up to dimension j
            if j is odd, result += start
                else result += other
        start = other
        other = colors [1 - colors.indexOf(other)]
        result += '\n'

    return result
--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function checkeredBoard(dimension) {
    const colors = ['\u25A0', '\u25A1']
    let result = '', 
        start = colors[dimension % 2],
        other = colors[1 - dimension % 2]

    for (let i = 1; i <= dimension; i++) {
        for (let j = 1; j <= dimension; j++) {
            if (j % 2 === 0) result += start + ' '
                else result += other + ' '
        }
        start = other
        other = colors[1 - colors.indexOf(other)]
        result = result.trim()
        if (i === dimension) break
        result += '\n'
    }

    return result
}