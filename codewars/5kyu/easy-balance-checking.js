/*
Date of completion: 02-19-2026 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

You are given a (small) check book as a - sometimes - cluttered (by non-alphanumeric characters) string:

"1000.00
125 Market 125.45
126 Hardware 34.95
127 Video 7.45
128 Book 14.32
129 Gasoline 16.10"
The first line shows the original balance. Each other line (when not blank) gives information: check number, category, check amount. (Input form may change depending on the language).

First you have to clean the lines keeping only letters, digits, dots and spaces.

Then return a report as a string (underscores show spaces -- don't put them in your solution. They are there so you can see them and how many of them you need to have):

"Original_Balance:_1000.00
125_Market_125.45_Balance_874.55
126_Hardware_34.95_Balance_839.60
127_Video_7.45_Balance_832.15
128_Book_14.32_Balance_817.83
129_Gasoline_16.10_Balance_801.73
Total_expense__198.27
Average_expense__39.65"
On each line of the report you have to add the new balance and then in the last two lines the total expense and the average expense. So as not to have a too long result string we don't ask for a properly formatted result.

Notes
See input examples in Sample Tests.
It may happen that one (or more) line(s) is (are) blank.
Round to 2 decimals your calculated results (Elm: without traling 0)
The line separator of results may depend on the language \n or \r\n. See examples in the "Sample tests".
R language: Don't use R's base function "mean()" that could give results slightly different from expected ones.


--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A string 

-----

Return:

A newly formated string

-----

Example: 

var b1 = `1000.00!=

125 Market !=:125.45
126 Hardware =34.95
127 Video! 7.45
128 Book :14.32
129 Gasoline ::16.10
`
var b1sol = `Original Balance: 1000.00\r
125 Market 125.45 Balance 874.55\r
126 Hardware 34.95 Balance 839.60\r
127 Video 7.45 Balance 832.15\r
128 Book 14.32 Balance 817.83\r
129 Gasoline 16.10 Balance 801.73\r
Total expense  198.27\r
Average expense  39.65`

------

Pseudo Code: 

function balance(book)
    create array by splitting by \n
    create sum variable, initialized at 0
    create balance variable
    create lineItems variable to hold 
    create result variable as empty array
    
    loop through array starting at second index
        create cleanLine variable as empty array
        destructure line by splitting by empty space: checkNumber category cost
        push checkNumber to cleanLine
        clean item and push to cleanLine
        clean cost and push to cleanLine
        substract cost from balance and push to cleanLine
        add cost to sum variable
        
        join cleanLine by empty space and push to lineItems array

    push lineItems to result array
    
    create totalExpense variable as string with sum
    create averageExpense variable as string with sum / lineItems.length

    push totalExpense and averageExpense to result array

    return result joined by \n

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */
function isAlphabetic(char) {
  const code = char.charCodeAt(0)
  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122)
}

function cleanCategoryText(str) {
  return str
    .split('')
    .filter((char) => isAlphabetic(char))
    .join('')
}

function cleanNumber(str) {
  const array = str.split('')
  const firstNumInd = array.findIndex((char) => !isNaN(+char))
  const lastNumInd = array.findLastIndex((char) => !isNaN(+char))

  return Number(array.slice(firstNumInd, lastNumInd + 1).join(''))
}

function balance(book) {
  const bookArray = book.split('\n').filter((line) => line)
  const lineItems = []

  let balance = cleanNumber(bookArray[0])
  let sum = 0
  let result = [`Original Balance: ${balance.toFixed(2)}`]

  for (const line of bookArray.slice(1)) {
    const cleanLine = []
    const [checkNumber, category, cost] = line.split(' ')
    const costNumber = cleanNumber(cost)

    balance -= costNumber
    sum += costNumber

    cleanLine.push(
      checkNumber,
      cleanCategoryText(category),
      costNumber.toFixed(2),
      `Balance ${balance.toFixed(2)}`
    )

    lineItems.push(cleanLine.join(' '))
  }

  const totalExpense = `Total expense  ${sum.toFixed(2)}`
  const averageExpense = `Average expense  ${(sum / lineItems.length).toFixed(2)}`

  result.push(...lineItems, totalExpense, averageExpense)

  return result.join('\n')
}
