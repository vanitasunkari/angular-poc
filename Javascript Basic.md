# What are async vs defer attributes in Javascript
> These are attributes to the script tag and determine the loading and execution of the javascript.
* Without async/defer: Page load parsing untill script tag found > Script tag found|Starts fetching > After fetching completes, Execution starts > After Execution completes, rest of page parsing continues
* With Async: Page parsing > Script tag found and fetching starts with parsing continuing in parllel > Fetching Complete|Parsing Stops|Execution Starts > Execution completes|Parsing Continues 
* With defer: Parsing continues untill end without break. Fetching is done in parllel when script tag found. Execution is done at the end of parsing.

[VIEW VISUAL](./images/script_tag_async_defer.png)

# What is prototype
> Prototypes are the mechanism by which JavaScript objects inherit methods and properties from one another.

> (OR) Objects can have a prototype object, which acts as a template object, from which it inherits methods and properties.

# What is Constructor function
> 

# What is prototype chain
> An object's prototype object may also have a prototype object, which it inherits methods and properties from, and so on. This is often referred to as a prototype chain.

# What is prototype and __proto__(Or Object.getPrototypeOf(obj))
> `__proto__` is the property on each instance, and `prototype` is the property on the constructor.
* `Object.getPrototypeOf(new Foobar()) / __proto__` refers to the same object as `Foobar.prototype`.

# What is Differential Inheritance
> Methods and properties are not copied from one object to another in the prototype chain. They are accessed by walking up the chain.

> (OR) When JS comes across a method call, it first looks for object property/method, if not found, it will look up to the parent prototype, and all the way up the proptotype chain untill it finds it. 

https://jsbin.com/jekihar/4/edit?js,console


# What’s the Difference Between Class & Prototypal Inheritance?

https://medium.com/javascript-scene/master-the-javascript-interview-what-s-the-difference-between-class-prototypal-inheritance-e4cd0a7562e9

# What are Built-in JavaScript Constructors

```
var x1 = new Object();    // A new Object object
var x2 = new String();    // A new String object
var x3 = new Number();    // A new Number object
var x4 = new Boolean();   // A new Boolean object
var x5 = new Array();     // A new Array object
var x6 = new RegExp();    // A new RegExp object
var x7 = new Function();  // A new Function object
var x8 = new Date();      // A new Date object
```
* NOTE: The Math() object is not in the list. Math is a global object. The new keyword cannot be used on Math.


# What is Class inheritance
# What are javasscript Objects
# What is a Closure
> A closure is the combination of a function and the lexical environment within which that function was declared.  This environment consists of any local variables that were in-scope at the time the closure was created.

```
function makeFunc() {
  var name = 'Mozilla';
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();
```
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

# What are JavaScript Functions 
# What are JavaScript DataTypes
* Primitives — Strings, Numbers, Booleans, Undefined, and Null.
* Objects — Arrays, Functions, Dates

# What is a Arrow Function
# What is a Promise
# What is Promises chaining
# What is async and await
# What are Generators in ES6
# What is Javascript Mutation and Pure Functions
# What are Polyfills
# What are Modules in JavaScript
> A module usually contains a class or a library of functions. Generally these are placed in a single js file and exported.

# What is Event Bubbling, Event Capturing, Event Delegation.

# List of Array functions - map, reduce, filter etc....

https://www.w3schools.com/jsref/jsref_obj_array.asp

# List of Object functions - 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods


# What are primitive elements
A primitive (primitive value, primitive data type) is data that is not an object and has no methods. In JavaScript, there are 6 primitive data types: string, number, boolean, null, undefined, symbol (new in ECMAScript 2015).

All primitives are immutable, i.e., they cannot be altered. The variable may be reassigned a new value(a new memory reference is created, unlike mutable objects where memory reference is passed on), but the existing value can not be changed in the ways that objects, arrays, and functions can be altered(Coz memory reference is passed on).

# Define Mutable - immutable 
A mutable object is an object whose state can be modified after it is created.

Immutables are the objects whose state cannot be changed once the object is created.


Mutable is a type of variable that can be changed. In JavaScript, only objects and arrays are mutable, not primitive values.

You can make a variable name point to a new value, but the previous value is still held in memory. Hence the need for garbage collection.

```
a={k1: 10};
b=a;
b.k1 = 20;
console.log(a.k1); // Will return 20; Coz b is assigned the memory reference of a not a copy of it / a is mutable.
```

https://developer.mozilla.org/en-US/docs/Glossary/Mutable

# How can you stop mutation of object
Object.freeze()

The Object.freeze() method freezes an object. A frozen object can no longer be changed i.e it becomes immutable.
```
const object1 = {
  property1: 42
};

const object2 = Object.freeze(object1);

object2.property1 = 33;
// Throws an error in strict mode; object2.property1 still remains 42
```

# Object.seal()
The Object.seal() method seals an object by: 
- Preventing new properties from being added to it and marking all existing properties as non-configurable. 
- Values of present properties can still be changed as long as they are writable. 
- Existing Properties cannot be deleted.

# Self invoking function / IIFE (Immediately Invoked Function Expression)
A self-invoking expression is invoked right after its created/ is defined. This is basically used for avoiding naming conflict as well as for achieving encapsulation. The variables or declared objects are not accessible outside this function.
```
// Generally we return a Object / Function. For this ex. we return a variable.
var result = (function () { 
    var name = "Barry"; 
    return name; 
})(); 
// Immediately creates the output: 
result; // "Barry"
name; // throws "Uncaught ReferenceError". Variable is not accessible from the outside scope
```

# Hoisting
Variable and function declarations are physically moved to the top of your code
```
catName("Chloe");

function catName(name) {
  console.log("My cat's name is " + name);
}
// THIS WORKS 
```
JavaScript only hoists declarations, not initializations. If a variable is declared and initialized after using it, the value will be undefined.
```
console.log(num); // Returns undefined 
var num;
num = 6;
```
https://developer.mozilla.org/en-US/docs/Glossary/Hoisting


# Differences between function .call .apply .bind
with _call()_ you pass arguments individually and _apply()_ as an argument array.

The bind() method creates a new function that, when called, has its “this” keyword set to the provided value
```
var module = {
  x: 42,
  getX: function() {
    return this.x;
  }
}

var unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

unboundGetX.call(module); // Outputs 42 as well; Here, we are calling the unboundGetX providing a this poinitng to module.

var boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42; Bind returns a new function with its this scoped to module.


// Create Own bind function ::
function bindMe(fn, _this){
	return function(){ return fn.call(_this); }
}
var modBindNew = bindme(modX, {x:'MMJ'});
modBindNew(); // Outputs "MMJ";

```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

# Ajax States
```
0	The request is not initialized
1	The request has been set up
2	The request has been sent
3	The request is in process
4	The request is complete
```

# Exception Handling (try, catch, finally, throw)

# Dom operations dynamically.

# What is strict mode in JavaScript?

# What is this in JavaScript
- `this` is equal to the object the code is inside.
- Inside a prototype function/method it points to the object instance.

By default it refers to window object if it is not called inside any object block.
```
let a = { 
    name: 'L1', 
    say: function(){ console.log('(a.say) Hi, Am'+this.name ); this.l2.say.call(this); } ,
	
    l2: { 
        name: 'L2', 
        say: function(){ console.log('(a.l2.say) Hi, Am '+this.name ); } 
    } 
};

a.say(); // Returns Hi, Am L1
a.l2.say(); // Returns Hi, Am L2

```

# Loop a Object using Javascript
```
var obj = { first: "John", last: "Doe" };

// IN / ES 5 WAY:
for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
        //Do your logic with the property here
    }
}

// OF / ES 6 WAY:
for (const key of Object.keys(obj)) {
    console.log(key, obj[key]);
}

// forEach
Object.keys(obj).forEach(function(key) {
    console.log(key, obj[key]);
});

```

# Differences between cookie, localStorage, sesisonStorage
* sessionStorage will persists untill the browser is closed/untill browser session and also is not shared across tabs. | localStorage is shared across tabs and persists untill cleared. | cookie are expired dependening on expiry time; can be made persistant by specifying expiry time and with expiry to long future date.
* cookies are sent in headers in every request | localStorage and sessionStorage are not sent.
* cookies limit 4KB | local/sessionStorage limit ~10MB Chrome; ~5MB for other browsers.
* 

# What is a constructor function.

JavaScript uses special functions called constructor functions to define and initialize objects and their (prototype) properties.

# Define Encapsulation, NameSpace, Abstraction, Inheritance, Polymorphism, ?

# Factory Functions in JavaScript?

# Find prototype of object
```
Object.getPrototypeOf(obj);
obj.prototype;


```

# Find constructor of object
```
obj.constructor; // OR : obj.constructor.name;
obj instanceof ConstructorFunctionName
```

The `instanceof` operator tests whether the prototype property of a constructor appears anywhere in the prototype chain of an object.

# What is Property Shadowing
When we have own property and prototype property with same name. Both exists but, Precedence is given to own property while accessing. This is called Property Shadowing.
```
let myFun = function(){
  this.a = 1;
  this.b = 2;
}
myFun.prototype.b = function(){ return this.a+this.b; };

obj = new myFun();

console.log(obj.b); // Outputs 2 tough we also have b prototype property.

```

# List new features in ES 6
https://webapplog.com/es6/

# Differences between arrow and normal function 
Arrow functions don't have their own this or arguments binding.  Instead, these(this or arguments) identifiers are resolved in the nearest lexical scope like any other variable.

https://stackoverflow.com/questions/34361379/arrow-function-vs-function-declaration-expressions-are-they-equivalent-exch

# All about arrow function.
- Basic Definitions
  ```
  let myFunc = () => {} // Empty Arrow function basic minimum syntax
  let myFunc2 = (a,b) => a+b; // Function returns without a return statement and {} needed only for multi statement.
  let myFunc3 = () => ({ foo: 'bar' }); // Use () to wrap obbject return; else foo: will be considered as label and 'bar' is unassigned / not returned; thereby funciton returns undefined;
  let myFunc4 = ({a, b}) => {
    return [a,b];
  }; // DESTRUCTURING: above paramemers are split into 2 arguments a,b as we pass a object while calling the funciton.
  myFunc4({'a': 1, 'b':2});
  // DESTRUCTURING: With Array;
  let myFunc5 = ([key,value]) => ({ [key]: value });
  myFunc5(['c','d']);
  
  // DEFAULT PARAMS
  const createUser = ({
    userName = 'Anonymous',
    avatar = 'anon.png'
  } = {}) => ({
    userName,
    avatar
  }); // = {} in params is because you can’t try to access properties from undefined and default to {} if no param passed.
  
  createUser(); // Returns: { userName: "Anonymous", avatar: 'anon.png' }
  createUser({ userName: 'MMJ' }); // Returns:  { userName: "MMJ", avatar: 'anon.png' }
  ```

# Differences between foreach, for..in and for..of (ES6)

* for..in loops over enumerable property names of an object / operates on any object. it serves as a way to inspect properties on this object.
* for..of (new in ES6) does use an object-specific iterator and loops over the values generated by that.
* for..in returns a list of keys on the object being iterated
* for..of returns a list of values of the numeric properties of the object being iterated.

in >> iterates over Array Index/Object Keys ; iterates Object, Array

of >> iterates over Array values ; iterates Array Only

foreach >> iterates over Array keys, values ; iterates Array Only

TAG LINE: in keys ; of values

```
var obj = { first: "John", last: "Doe" };

// IN / ES 5 WAY:
for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
        //Do your logic with the property here
    }
}

// OF / ES 6 WAY:
for (const key of Object.keys(obj)) {
    console.log(key, obj[key]);
}

// forEach
Object.keys(obj).forEach(function(arrValue, arrKey) {
    console.log(arrValue, obj[arrValue]);
});

```

# ES 7 New Features
https://derickbailey.com/2017/06/06/3-features-of-es7-and-beyond-that-you-should-be-using-now/


# Constant in ES 6
* Constants are used to make variables which cannot be re-assigned new value. "const" keyword makes variable itself immutable, not its assigned content (for instance, in case the content is an object, this means the object itself can still be altered).
* Variables defined with const are not hoisted to the top.
* Both Const and Let are block scoped.


# Debouncing and Throttling.
