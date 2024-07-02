/*
Date of completion: 07-02-2024 
Codewars or Leetcode Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Some new cashiers started to work at your restaurant.

They are good at taking orders, but they don't know how to capitalize words, or use a space bar!

All the orders they create look something like this:

"milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"

The kitchen staff are threatening to quit, because of how difficult it is to read the orders.

Their preference is to get the orders as a nice clean string with spaces and capitals like so:

"Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"

The kitchen staff expect the items to be in the same order as they appear in the menu.

The menu items are fairly simple, there is no overlap in the names of the items:

1. Burger
2. Fries
3. Chicken
4. Pizza
5. Sandwich
6. Onionrings
7. Milkshake
8. Coke

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A string of lower case letters

-----

Return:

A new string with capital letters and spaces

-----

Examples: 

getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza")
                returns "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke");

getOrder("pizzachickenfriesburgercokemilkshakefriessandwich")
                 returns "Burger Fries Fries Chicken Pizza Sandwich Milkshake Coke");

------

Pseudo Code: 

function getOrder(input)
    let result = '', string = input
    const menu = array of items

    loop through menu
        while(input includes menu item)
            result += item[0] to upper case + item.substring(1)
            replace item in string with empty string

    return result

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function getOrder(input){
    let result = '', string = input
    const menu = ['burger','fries','chicken','pizza', 'sandwich','onionrings','milkshake','coke']

    for (let item of menu) {
        while(string.includes(item)) {
            result += item[0].toUpperCase() + item.substring(1) + ' '
            string = string.replace(item, '')
        }
    }

    return result.trim()
}