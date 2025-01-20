# 27r
27r-10000coders


APPLICATION...?
---------------
it is a collection of programmes to recieve a request and provides 
response by applying some business logic.


1.makes works easy
2.access from anywhere


ANY APPLICATION

FOR RECEIVING REQUEST...?

FROM FRONTEND/UI

WITH HTML,CSS AND BOOTSTRAP WE CAN BUILD A FRONTEND PART.

1.STATIC APPLICATION--HTML,CSS,BOOTSTRAP.
2.DYNAMIC APPLICATION--HTML,CSS,BS,AND JS.


WITH JS WE CAN MAKE AN APPLICATION DYNAMIC.

DYNAMIC MEANS--->application runs based on req-res model.

enduser will raise the request through frontend/ui.

we need one processor/server for providing response based on the request.

this server should maintain at the backend.



why js?
-------
1.for making application dynamic
2.for form validation
3.rasing requests from frontend and providing response through backend
4.in frontend, js will be act as a scripting language
5.in backend,js will be act as a programming language.
6.js can run only in browsers with the help of js engines(v8,spidermonkey,nitro..)
7.if we want to run js out of the browser, then nodejs will helps us.
8.nodejs will create a runtime environment for js with the help of v8 engine.
9.any application will works based on the req-res model.
10.so, it should have 3-phases-->frontend,backend and database.

js history:
-----------
An employee of netscape named brendan eich developed js in just 10 days in the year 1995 and 
named it as 'mocha'. and renamed to javascript later by inspiring java.

netscape navigator 2.0, they have started using js in their browser.

explorer also invented a language named 'jscript'.

in 1997,ECMA adopted js to add standards to it.

first edition of ES1 was published in 1997.
es2,es3 were release in 1998 and 1999.

from 2009, nodejs was introduced as runtime environment for js, and to run at server-side.

now, latest version is ES15 in 2024.

implementation of javascript:
-----------------------------
we have mainly two ways for implementing javascript.

1.internal javascript
2.external javascript in a file with extension .js

with these we can run js only in browser.

whenever we want to run javascript in local system, then we need to install nodejs and file extension should be always .js


js will uses interpreter as a translator which will executes line by line.

basically js is based on interpreter but from modern js, starts using JIT compiler(Just in time).


intially js is a single threaded synchronous based language, which blocks the other operations until current operation
get completes.

core features of js:
---------------
1.dynamically typed language:- no need to mention the data type which is assigning to a variable.
2.object-oriented programming:-mainly follows inheritance,polymorphism and encapsulation.
3.functional programming:js follows the functional way of programming which follows callbackfunctions,higher order functions and closures..
4.First-class Funcitons:functions in js are first-class why beacause, they can be pass as arguements and they can returns another function and they can be store in data structures.
5.prototype-based inheritance:js uses prototype based-inheritance, where objects inherit properties from their prototypes.

web development features:
--------------------------
1.DOM MANIPULATION.
2.EVENT HANDLING
3.FETCH API/HTTP REQUESTS
4.WEB STORAGES-localstorage/session storage and cookies.


modern features:
----------------
1.Async/Await
2.Promises
3.Classes
4.Modules
5.TypeScript
6.JSON-javascript object notation. which can be used in interchanging the data b/w the two systems.
7.Error handling
8.Regular expressions one of the datatype in js.


Variable..?
-----------
var
let and const

1.decleration
2.assignment
3.intialisation---decleration+assignment.




// some of the rules to be follow for variable names:
//-------------------------------------------------------
//we can't use reserved words/keywords as variable names.
// variable name can starts with symbols _ and $.
// cannnot starts with numbers
// cannot take any value as a variable.
// variable names should not contains any empty spaces in b/w
// variable names should not contain any operators like(-,*,+,/,%) 





datatypes are nothing but just data.

they are classified into two types:

1.primitive
    a.number--- just any kind of number
    b.string-- group of characters, can be denoted with ' ' or " "
    c.boolean-- true/ false
    d.undefined
    e.null
    f.symbol
    g.bigint
2.non-primitive
    a.array
    
        collection of different data
        denotes with []
        length can be find with .length
        indexes for every data will be starts from 0
        it will allows only positive indexes to access values
        eg:array[index].

    b.object
    c.function    
    d.date
    e.regex

NaN(Not a Number)---special data type.

prompt-->is a browser method to take the inputs from the user.

prompt("message");

alert--->it is a browser method to show the output as an alert with in the browser.

alert("output")



<!-- type conversion:
--------------------
1.implicit conversion: done automatically according to the value/data and operator.

2.explicit conversion:
need to specify explicitly by the developer. 


-->



terinary operator syntax:
------------------------
condition?true statement:false statement;



Hoisting:
---------

it is a mechanism where all declerations move to the top of the scope before its intialisation.

hoisting will happens differently in var, let and const.

in var case we will get undefined because only decleration part of the var will moves to 
top of the scope.


in let and const, they will also hoist but store in TDZ(temporal dead zone). so we can't access them before its

intialisation.


control statements:
--------------------
1.looping statements.
    a.while
    b.do-while
    c.for-loop
        1.for repeteting the task 
        2.for iterating an array/string.here we can start where ever we want and end where ever we want in the string and arrays.

        syntax:
        --------
        for(intialisation;condition;iteration)
        {

            //block of code to be executed
        }


    d.for-in 
        syntax:for(iterator in  str/arr/obj){}

        with for-in loop we can iterate every index in array and string, every key in object.


    e.for-of
        for(iterator of str/array){}
        used to iterate string and arrays but not object.
        iterator will store the value as per the index.

2.conditional statements.



1.let arr=["arvindh","suresh","karthik","ramya","bhavya"];

o/p-->
1-arvindh
2-suresh
3-karthik
4-ramya
5-bhavya

using both for-in and for-of loop.



while loop and do-while loop:
-----------------------------

it will iterates based on the condition either it may false or true;

syntax:
--------
while(condition){

    set of statements;
}


do-while loop:
--------------

it will perform the very first task before checking the 
condition, and performs rest of the tasks based on the 
condition.


do{
    set of statements;
}
while(condition)




In conditionals, we have

a.simple-if
    if(condition)
    {
        set of statements // true block
    }
b.if-else
    if(condition)
    {
        set of statements // true block
    }
    else
    {   
        set of statements // false block
    }
c.nested-if
    if(condition){
        // statements

            if(condition){

                // statements      // true block

            }


    }
    else{

                // false block

    }



d.else-if ladder
    if (condition1){
        // executes if condition is true

    }
    else-if(condition2){
        // executes if cond1 is fail and cond2 is true

    }

    else-if(condition3){
        // executes if cnd1,cnd2 are fail and cnd3 gets true.

    }
    else{
        // executes if all above conditions fails

    }


e.switch

switch(exp/value){

case exp1: execution;
    break;

case exp2 : execution;
        break;

case exp3 : execution;
    break;

default: expression;

}






break and continue:
--------------------
used to control the loops

break--->exit the loop if condition is true.

continue--->skip the particular iteration if the condition is true.


Functions in javascript:
------------------------

1.Functions are building blocks for any kind of application
2.Function contains a block of code which will executes, performs
certain task and returns the value.


// function decleration.

function fun_name()
{

reusable - code

// performs some task


// return value;

}

fun_name()




3.One of the main use of function is re-usability and modularity


Basically functions are categorized into two types:

1.Pre-defined
2.User-Defined


Right now, we are discussing about User-defined.
In user defined functions, we have many types

1.Named functions
    1.1. Named functions with parameters
    1.2. Named functions without parameters
    1.3. Named functions with return
    1.4. Named functions without return
    1.5. Named functions with default parameters
2.anonymous function
3.variable function-- can not be hoisted
4.arrow function
5.Call back functions
6.Higher-ordered functions
7.self-invoking/immediately invoking functions
8.pure functions
9.impure functions
10.first-class functions.

named functions:
-----------------

1.function fun_name(parameters...){

}


fun_name(arguments...)

2.anonymous functions
--------------------


2.function (params....){

}


variable functions:
-------------------
3.var x=function(params...){


}

x(args...)

arrow functions:
-----------------


4.1 var x=(params...)=>{ return "value"} // arrow function returning some value using return keyword
	
x(args...)


4.2 var x=(params...)=>("value") // arrow function returning some value without using return keyword


4.3 var x=param=>returning value
// arrow function with single parameter and single returning value.


5.cbf:
------
function which passes as a argument to the other function then that can be called as a callback function.

6.higher ordered function:
----------------------------

function which will accepts other function as a parameter then that can be called as higher order function.

or

function which returns other function also can be called as higher ordered function.

Scope:
-----
In JavaScript, scope defines the accessibility of variables, functions, and objects in your code. It determines where these entities can be accessed and used.

1.global scope:
Variables declared outside any function or block have global scope. 
They can be accessed from anywhere within your script.
2.function scope
3.block scope



topics:
-------
callback functions-basic implementation
higher ordered functions--basic implementation
scope--global and block 



task:
-----
complete pending problems using arrow functions
practise cbf and hof 
learn about function scope with proper example

    




DOM:
-----
html---



DOM METHODS:
-------------
FOR GETTING HTML ELEMENTS we have:
1.getElementById();--->it will returns the single element.
2.getElementsByTagName()-->it will returns all matching elements as a collection
3.getElementsByClassName()-->it will returns all matching elemtns as a collection
4.queryselector()-->with this we can get based on id/class/tagname it will returns only first matching element.
5.queryselectorAll()-->with this we can get based on id/class.tagname, it will returns all matched elements.

innerHTML:
------------
Returns the HTML markup and text content of an element, including spacing and line breaks. It's used to manipulate the structure and content of an element with HTML. 

innerText:
----------
Returns the text content of an element, excluding HTML tags, hidden content, and formatting. It's used to see what's in the element without the formatting













