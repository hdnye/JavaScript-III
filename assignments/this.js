/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - .this keyword defaults to the window object. 'use strict'; will default to undefined.
* 2. Explicit Binding - Uses call, apply, or bind to call a specific function with a specific value for .this
* 3. Implicit Binding - .this will be automatically assigned to the object left of the method 
* 4. New Binding - sets .this to a new object & returns the object 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
'use strict'; //keeps code from breaking //

function winBin(){
    console.log(this);
};
winBin('anything'); // w/o 'use strict', will return all global js objects //

// Principle 2

// code example for Implicit Binding

const anyName = {
    name: 'Joe',
    job: 'Button Pusher',
    forJob: function() {
    return `${this.name} is a ${this.job}`;
    }
};
console.log(anyName.forJob()); //f() is called inside c.l. //

// Principle 3

// code example for New Binding

function Person(me) {
    this.thing = me;
}

let myPerson = new Person('Heather says hi');

console.log(myPerson.thing);

// Principle 4

// code example for Explicit Binding

function someFunc(){
    console.log(`${this.name} says ${this.word}`);
}

const person = {
    name: 'Heather',
    word: 'hello',
}

someFunc.call(person); // invoking the f() here. .call passes arg's one by one. //
someFunc.apply(person); // .apply passes arg's as an array //
// otherFunc = someFunc.bind(person); //bind creates a new f() that can be called later //
// otherFunc(); 

//bind is used to create a new f() that's perm. bound to a .this value //