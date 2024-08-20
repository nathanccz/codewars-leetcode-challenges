/*
Date of completion: 08-19-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Task:

You will be given a list of objects. Each object has type, material, and possibly secondMaterial. The existing materials are: paper, glass, organic, and plastic.

Your job is to sort these objects across the 4 recycling bins according to their material (and secondMaterial if it's present), by listing the type's of objects that should go into those bins.

Notes:

- The bins should come in the same order as the materials listed above
- All bins should be listed in the output, even if some of them are empty
- If an object is made of two materials, its type should be listed in both of the respective bins
- The order of the type's in each bin should be the same as the order of their respective objects was in the input list

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

An array of objects containing strings

-----

Return:

A new array of four arrays containing strings

-----

Examples: 


------

Pseudo Code: 

function recycle(array)
    let materials be paper, glass, organic, and plastic

    reduce array
        if subarray doesn't exist, then create it
        arr[materials.indexOf curr.material] = curr.material
        if (curr.secondMaterial) arr[materials.indexOf curr.secondmaterial] = curr.secondmaterial
        return arr


--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function recycle(array) {
    const materials = ['paper', 'glass', 'organic', 'plastic']

    return array.reduce((bins, curr) => {
        let firstMaterialInd = materials.indexOf(curr.material),
            secondMaterialInd = materials.indexOf(curr.secondMaterial)
        bins[firstMaterialInd].push(curr.type)
        if (secondMaterialInd !== -1) bins[secondMaterialInd].push(curr.type)
        return bins
    }, [[],[],[],[]])
}