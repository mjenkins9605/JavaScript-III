/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding
* 2. implicit binding
* 3. explicit binding
* 4. new binding
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function greet() {
    "use strict"
    console.log(this);
}
greet();

// Principle 2

// code example for Implicit Binding
const animal = {
    type: 'cats',
    activity: 'sleep',
    hobby: function() {
        console.log(`A ${this.type} favorite hobby is to ${this.activity}!`);
    }
}
animal.hobby();

// Principle 3

// code example for New Binding
function Idiot(tattoo){
    this.tattoo = tattoo;
    this.whatsMine = "What's mine say?"
    this.speak = function() {
        console.log(`${this.tattoo}, ${this.whatsMine}`)
    }
}

const jesse = new Idiot('Sweet');
const chester = new Idiot('Dude');

jesse.speak();
chester.speak();

// Principle 4

// code example for Explicit Binding
const person = {
    name: 'Napolean' 
}

const skills = ['nunchuck skills', 'bow hunting skills', 'computer hacking skills'];

function intro(skill1, skill2, skill3) {
    "use strict";
    console.log(`I don't even have any good skills. You know like ${skill1}, ${skill2}, ${skill3}. Girls only want boyfriends who have great skills!”-${this.name}.`);
}
intro.apply(person, skills);