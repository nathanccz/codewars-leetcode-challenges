/*
Date of completion: 04-13-2024 
Codewars Level 5 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

We're given two objects: one with required ingredients, and the other with our stock of ingredients.

-----

Return:

The function should return an integer. 

-----

Examples: 

// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 

// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 

------

Pseudo Code: 

function cakes(recipe, available) 
    stock <- keys in available that also exist in recipe
    ingredients <- keys in recipe
    if all keys in ingredients don't exist in available return 0
        else map the stock array with results of dividing each available key by that key in recipe
    return the minimum value in that array

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function cakes(recipe,available) {
    const stock = Object.keys(available).filter(key => recipe[key])
    const ingredients = Object.keys(recipe)
    return (!ingredients.every(ing => available[ing])) ? 0 :
           Math.min(...stock.map(item => Math.floor(available[item] / recipe[item])))
}