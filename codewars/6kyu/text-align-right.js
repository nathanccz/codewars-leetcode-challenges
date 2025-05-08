/*
Date of completion: 05-08-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Your task in this Kata is to emulate text justify right in monospace font. You will be given a single-lined text and the expected justification width. The longest word will never be greater than this width.

Here are the rules:

- Use spaces to fill in the gaps on the left side of the words.
- Each line should contain as many words as possible.
- Use '\n' to separate lines.
- Gap between words can't differ by more than one space.
- Lines should end with a word not a space.
- '\n' is not included in the length of a line.
- Last line should not contain '\n'

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A string

-----

Return:

A new formatted string

-----

Examples: 

Example with width=30:

        Bacon ipsum dolor amet
excepteur ut kevin burgdoggen,
   shankle cupim dolor officia
       ground round id ullamco
   deserunt nisi. Commodo tail
    qui salami, brisket boudin 
tri-tip. Labore flank laboris,
  cow enim proident aliqua sed
      hamburger consequat. Sed
     consequat ut non bresaola
   capicola shoulder excepteur
 veniam, bacon kevin. Pastrami
   shank laborum est excepteur
 non eiusmod bresaola flank in
nostrud. Corned beef ex pig do
   kevin filet mignon in irure
 deserunt ipsum qui duis short
        loin. Beef ribs dolore
  meatball officia rump fugiat
  in enim corned beef non est.

------

function alignRight(text, width)
    initialize currLine variable
               charCount variable
               resultStr variable

    loop through text as array
        if charCount < width
            
--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

function alignRight(text, width) {
  const arrOfWords = text.split(" ");
  const trimLine = (str) => str.trimEnd().padStart(width, " ");

  let result = "",
    currLine = "";

  for (let word of arrOfWords) {
    const line = currLine + word;
    if (line.length > width) {
      result += trimLine(currLine) + "\n";
      currLine = word + " ";
    } else {
      currLine += word + " ";
    }
  }

  return result + trimLine(currLine);
}
