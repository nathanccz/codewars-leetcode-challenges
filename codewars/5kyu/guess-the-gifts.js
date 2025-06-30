/*
Date of completion: 06-30-2025 
Codewars Level 5 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

https://www.codewars.com/kata/52ae6b6623b443d9090002c8/train/javascript

Your Task:

You will be given a wishlist (array), containing all possible items. Each item is in the format: {name: "toy car", size: "medium", clatters: "a bit", weight: "medium"} (Ruby version has an analog hash structure, see example below)

You also get a list of presents (array), you see under the christmas tree, which have the following format each: {size: "small", clatters: "no", weight: "light"}

Your task is to return the names of all wishlisted presents that you might have gotten.

Rules:
-Possible values for size: "small", "medium", "large"
-Possible values for clatters: "no", "a bit", "yes"
-Possible values for weight: "light", "medium", "heavy"
-Don't add any item more than once to the result
-The order of names in the output doesn't matter
-It's possible, that multiple items from your wish list have the same attribute values. If they match the attributes of one of the presents, add all of them.


--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

An array of objects representing your wishlist, plus an array of objects representing gifts

-----

Return:

An array of strings with all possible gift names. 

-----

Example: 

const wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];

const presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
];

guessGifts(wishlist, presents); // must return ["Toy Car", "Mini Puzzle"]

------

Pseudo Code: 

function guessGifts(wishlist, presents)
    create results variable initialized as empty array

    loop through present array
        create properties variable as array from current obj values
        create matches variable and filter wishlist 

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function guessGifts(wishlist, presents) {
  const results = []
  const hash = {}

  for (const item of wishlist) {
    hash[item.name] = `${item.size}, ${item.clatters}, ${item.weight}`
  }

  for (const present of presents) {
    const properties = Object.values(present).join(', ')
    const matches = Object.entries(hash).filter((e) => e[1] === properties)

    for (const match of matches) {
      const name = match[0]
      if (!results.includes(name)) {
        results.push(name)
      }
    }
  }

  return results
}
