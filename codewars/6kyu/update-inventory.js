/*
Date of completion: 04-17-2025 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

You will be given an array which lists the current inventory of stock in your store and another array which lists the new inventory being delivered to your store today.

Your task is to write a function that returns the updated list of your current inventory in alphabetical order.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

Two arrays each containing subarrays with a number and a string.

-----

Return:

A new sorted array

-----

Example: 

currentStock = [[25, 'HTC'], [1000, 'Nokia'], [50, 'Samsung'], [33, 'Sony'], [10, 'Apple']]
newStock = [[5, 'LG'], [10, 'Sony'], [4, 'Samsung'], [5, 'Apple']]

updateInventory(currentStock, newStock)  ==>
[[15, 'Apple'], [25, 'HTC'], [5, 'LG'], [1000, 'Nokia'], [54, 'Samsung'], [43, 'Sony']]


------

Pseudo Code: 

function updateInventory(curStock, newStock) 
    put current stock in hashmap for easy lookup

    loop through new stock array
        create brand variable
        create count variable

        if hashmap has brand
            get current value of brand and update it by count variable
            else add brand and count to hash map

    return map object entries sorted alphabetically

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function updateInventory(curStock, newStock) {
  const hashMap = new Map()

  for (let item of curStock) {
    const [count, brand] = item
    hashMap.set(brand, count)
  }

  for (let item of newStock) {
    const [count, brand] = item

    if (hashMap.has(brand)) {
      const currCount = hashMap.get(brand)
      hashMap.set(brand, currCount + count)
    } else {
      hashMap.set(brand, count)
    }
  }

  const entries = [...hashMap.entries()].map(([key, value]) => [value, key])
  const sorted = entries.sort((a, b) => a[1].localeCompare(b[1]))

  return sorted
}
