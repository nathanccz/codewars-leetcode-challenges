/*
Date of completion: 04-28-2025
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

In a string we describe a road. There are cars that move to the right and we denote them with ">" and cars that move to the left and we denote them with "<". There are also cameras that are indicated by: " . ".
A camera takes a photo of a car if it moves to the direction of the camera.

Task:

Your task is to write a function such that, for the input string that represents a road as described, returns the total number of photos that were taken by the cameras. The complexity should be strictly O(N) in order to pass all the tests..

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A string 

-----

Return:

A number as integer

-----

Examples: 

For ">>." -> 2 photos were taken
For ".>>" -> 0 photos were taken
For ">.<." -> 3 photos were taken
For ".><.>>.<<" -> 11 photos were taken

------

Pseudo Code: 

function letterPattern(words)
    create variables to track results, cameras and right cars

    loop through words
        if char is right car, add to right cars variable
        else if char is left car, add cameras to result
        else add right cars to result and increment camera count


    return result

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function countPhotos(road) {
  let result = 0,
    cameras = 0,
    rightCars = 0;

  for (const char of road) {
    if (char === ">") rightCars++;
    else if (char === ".") {
      result += rightCars;
      cameras++;
    } else if (char === "<") result += cameras;
  }

  return result;
}
