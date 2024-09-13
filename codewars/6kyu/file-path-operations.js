/*
Date of completion: 09-13-2024 
Codewars Level 6 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

This kata requires you to write an object that receives a file path and does operations on it.

const fm = new FileMaster('/Users/person1/Pictures/house.png');
fm.extension(); // output: 'png'
fm.filename(); // output: 'house'
fm.dirpath(); // output: '/Users/person1/Pictures/'


--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

A string

-----

Return:

A new string based on the method used

-----

Example: 

describe('FileMaster', () => {
  const fm = new FileMaster('/Users/person1/Pictures/house.png');
  
  it('extension', () => {
    assert.equal(fm.extension(), 'png');
  });
  
  it('filename', () => {
    assert.equal(fm.filename(), 'house');
  });
  
  it('dirpath', () => {
    assert.equal(fm.dirpath(), '/Users/person1/Pictures/');
  });
});


------

Pseudo Code: 
 
class FileMaster
    constructor(filepath)
        this.filepath = filepath

    extension()
        split string by period and return second element

    filename()
        split string by /, split the last element by period, then return first element

    dirpath()
        find last index of /
        return substring of filepath from 0 index up to last index of / + 1

--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

//NOTE: This kata will be solved without regex.

class FileMaster {
    constructor(filepath) {
      this.filepath = filepath
    }
    
    extension() {
      return  this.filepath.split('.')[1]
    }
    
    filename() {
      const arr = this.filepath.split('/')
      return arr[arr.length - 1].split('.')[0]
    }
    
    dirpath() {
        const indexOfPeriod = this.filepath.split('').findLastIndex(e => e === '/')
      return this.filepath.substring(0, indexOfPeriod + 1)
    }
  }