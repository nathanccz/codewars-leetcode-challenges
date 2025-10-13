/*
Date of completion: 10-13-2025 
Codewars Level 5 kyu

--------------------------------------------------------
CHALLENGE DESCRIPTION
--------------------------------------------------------

Define a class called Lamp. It will have a string attribute for color and boolean attribute, on, that will refer to whether the lamp is on or not. Define your class constructor with a parameter for color and assign on as false on initialize.

Give the lamp an instance method called toggleSwitch that will switch the value of the on attribute.

Define another instance method called state that will return "The lamp is on." if it's on and "The lamp is off." otherwise.

--------------------------------------------------------
ANALYSIS
-------------------------------------------------------- 

Parameters:

An instance of Class object

-----

Return:

A string for myLamp.color
A Boolean for myLamp.on
A string for myLamp.state

-----

Examples: 

N/A

------

Pseudo Code: 


--------------------------------------------------------
SOLUTION
-------------------------------------------------------- */

class Lamp {
    constructor(color) {
        this.on = false
        this.color = color
    }
    toggleSwitch() {
        this.on = !this.on
        return this.on
    }
    state() {
        return this.on ? "The lamp is on" : "The lamp is off"
    }
}