/*
Date of completion: 04-08-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

In an attempt to boost sales, the manager of the pizzeria you work at has devised a pizza rewards system: if you already made at least 5 orders of at least 20 dollars, you get a free 12 inch pizza with 3 toppings of your choice.

However, the rewards system may change in the future. Your manager wants you to implement a function that, given a dictionary of customers, a minimum number of orders and a minimum order value, returns a set of the customers who are eligible for a reward.

Customers in the dictionary are represented as:

{ 'customerName' : [list_of_order_values_as_integers] }


--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

We're given three parameters: 1) an object with customer names paired with an array of  order values, 2) a number indicating the minimum orders, and 3) a number indicating the minimum price. 

-----

Return:

The function should return an array of eligible customers. 

-----

Examples: 

const minOrders = 5
const minPrice = 20
const customers = {
    'John Doe': [22, 30, 11, 17, 15, 52, 27, 12], // Only has three orders above 20$, so no pizza
    'Jane Doe': [5, 17, 30, 33, 40, 22, 26, 10, 11, 45] // Has six orders above 20$, which means FREE PIZZA!
  }

const minOrders = 2
const minPrice = 50
const customers = {
    'Joey Bonzo': [22, 67, 53, 29], // Has two orders above 50$, which means FREE PIZZA!
    'Jennifer Bonzo': [51, 19] // Only has one order above 50$, so no pizza
  }

------

Pseudo Code: 

function pizzaRewards(customers, minOrders, minPrice) 
  eligibles <- empty array
  for each customer in customers
    orders <- filter array of orders > minPrice
    if orders.length >= minOrders, then push to eligibles array
  return eligibles

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function pizzaRewards(customers, minOrders, minPrice) {
    const eligibles = []
    for (let name in customers) {
        const orders = customers[name].filter(order => order >= minPrice)
        if (orders.length >= minOrders) eligibles.push(name)
    }
    return eligibles
}