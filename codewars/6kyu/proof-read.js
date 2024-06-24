/*
Date of completion: 06-24-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

You've just finished writing the last chapter for your novel when a virus suddenly infects your document. It has swapped the 'i's and 'e's in 'ei' words and capitalised random letters. Write a function which will:

a) remove the spelling errors in 'ei' words. (Example of 'ei' words: their, caffeine, deceive, weight)

b) only capitalise the first letter of each sentence. Make sure the rest of the sentence is in lower case.

Example: He haD iEght ShOTs of CAffIEne. --> He had eight shots of caffeine.


--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A string of randomly upper- and lower-cased letters

-----

Return:

A new string with proper sentence structure

-----

Examples: 

proofread("ThiEr DEcIEt wAs INconcIEVablE. sHe SIeZeD thE moMENT.") -> "Their deceit was inconceivable. She seized the moment."); 

proofread("HIs nieghBOur wAs oVerwieGht.") -> "His neighbour was overweight."); 

proofread("SHe rEcieveD a pIegNor.") -> "She received a peignor."); 



------

Pseudo Code: 

function proofread(str)
    const sentences = str split '. '
    return sentences mapped
        firstLetter to uppercase
        other letters to lowercase
        swapped <- otherletters mapped where 'ie' is replaced with 'ei'
        return firstLetter + swapped

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

//NOTE: This solution will not use RegEx.

function proofread(str) {
    const sentences = str.split('. ')
    return sentences.map(e => {
        let firstLetter = e[0].toUpperCase()
        let otherLetters = e.substring(1).toLowerCase()
        let swapped = otherLetters.split(' ').map(word => {
           return (word.includes('ie')) ? word.replace('ie', 'ei') : word
        }).join(' ')
        return firstLetter + swapped
    }).join('. ')
}