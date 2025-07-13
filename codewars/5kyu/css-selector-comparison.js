/*
Date of completion: 07-13-2025 
Codewars Level 5 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Cascading Style Sheets (CSS) is a style sheet language used for describing the look and formatting of a document written in a markup language. A style sheet consists of a list of rules. Each rule or rule-set consists of one or more selectors, and a declaration block. Selector describes which element it matches.

Sometimes element is matched to multiple selectors. In this case, element inherits multiple styles, from each rule it matches. Rules can override each other. To solve this problem, each selector has it's own 'specificity' - e.g. weight. The selector with greater specificity overrides the other selector.

Your task is to calculate the weights of two selectors and determine which of them will beat the other one.

For simplicity, all selectors in test cases are CSS1-compatible, test cases don't include pseudoclasses, pseudoelements, attribute selectors, etc. Below is an explanation on how to weight two selectors. You can read more about specificity here.

The simplest selector type is tagname selector. It writes as a simple alphanumeric identifier: eg body, div, h1, etc. It has the least weight. If selectors have multiple elements - the selector with more elements win. For example, body p beats div, because it refers to 2 (nested) elements rather than 1.

Another simple selector is .class selector. It begins with dot and refer to element with specific class attribute. Class selectors can also be applied to tagname selectors, so div.red refer to <div class="red"> element. They can be grouped, for example, .red.striped. Class selector beats tagname selector.

The most weighted selector type in stylesheet is #id selector. It begins with hash sign and refer to element with specific id attribute. It can also be standalone, or applied to an element. Id selector beats both selector types.

And the least weighted selector is *, which has no specificity and can be beat by any other selector.

Selectors can be combined, for example, body #menu ul li.active refers to li element with class="active", placed inside ul element, placed inside element width id="menu", placed inside body.


--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

Two strings representing selectors

-----

Return:

The string that beats out the other string

-----

Examples: 

"body p",  "div"     --->  return "body p"
".class",  "#id"     --->  return "#id"
"div.big", ".small"  --->  return "div.big"
".big",    ".small"  --->  return ".small" (because it appears later)

------

Pseudo Code: 

function compare(a, b)
  calculate aScore
  calculate bScore

  loop three times
    if a equals b, continue
      else return the higher score

  return b if everything is equal

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function compare(a, b) {
  const aScore = calculateSpecificity(a.split(' '))
  const bScore = calculateSpecificity(b.split(' '))

  for (let i = 0; i < 3; i++) {
    if (aScore[i] === bScore[i]) {
      continue
    } else {
      return aScore[i] > bScore[i] ? a : b
    }
  }

  return b
}

const calculateSpecificity = (selectors) => {
  const regex = /(?=[.#])/
  let weight = [0, 0, 0]

  for (const selector of selectors) {
    if (
      !selector.includes('.') &&
      !selector.includes('#') &&
      selector !== '*'
    ) {
      weight[2] += 1
    } else {
      const parts = selector.split(regex)

      for (const part of parts) {
        switch (part.charAt(0)) {
          case '.':
            weight[1] += 1
            break
          case '#':
            weight[0] += 1
            break
          case '*':
            break
          default:
            weight[2] += 1
            break
        }
      }
    }
  }

  return weight
}
