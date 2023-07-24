//       *******************
/******* String in JavaScript *********/
//      *******************

//What Are Strings?
// A javaScript String is zero or more characters written inside Quotes

// JavaScript String use for storing and Manuplating text.
// you can use single or double quotes
// Strings can be created as Primitives.
// from string literals, or as objects ,using the String() constructor

let myName = 'Hira';
let myNickname = "Heer";

// with constructor String() // should not use
let ytName = new String(" Hira"); // Returns Array // [String: 'Muhammad Hashim']

console.log(myName);
console.log(ytName);

//     ``````1-String.prototype.length()  `````````  //
console.log(myName.length); // 15
console.log(ytName.length); // 15

//     Escape Character
// Are those Character which escapes the next character in string

// we want Software Engineering in Quotation!!
let mysentence = 'We are so called \'Software Engineer\' in Pakistan';
console.log(mysentence);

//AnOther Method  // Alternative quotes
{
    let mysentence = 'We are so called "Software Engineer" in Pakistan';
    console.log(mysentence);
}


//     ``````2-Array.prototype.indexOf()`````````  //  Find A String in a String

// Case Sensitive
// Method returns the index of (the position of) the "first"
// occurrence of a specified text in a string
// move forward   ----->  returns the index first found value

const myBioData = 'My Name is hira amanat';
console.log(myBioData.indexOf('amanat'));
console.log(myBioData.indexOf('a', 6));


//     ``````3-Array.prototype.lastIndexOf()`````````  //  Find A String in a String

// Case Sensitive
// Method returns the index of (the position of) the "first"
// occurrence of a specified text in a string
//Move Backward     <------

{
    const myBioData = 'My Name is Hira amanat';
    console.log(myBioData.lastIndexOf('amanat'));
    console.log(myBioData.lastIndexOf('a', 6));
}


//     ``````4-Array.prototype.search()`````````  //  Search for a String in a String

// the search() method searches a string for a specified
//  value and returns the position of the Match

{
    const myBioData = 'My Name is Hira Amanat';
    console.log(myBioData.search('Amanat'));
    console.log(myBioData.search('a', 6)); // be done
}


//          ********************************
/********** Extracting string from string    *********/
//          ********************************

// 1- slice(start ,end)
// 2- substring(start ,end)
// 3- substr(start ,length)


//     ``````4-Array.prototype.slice()`````````  //
// 1- slice(start ,end)

//  slice() extract a part of a string and returns the extracted part
//  in anew string

{
    let mysentence = "My name is Hira. I am 19 year old. I am Software Engineer";
    let req = mysentence.slice(mysentence.indexOf('I'), mysentence.lastIndexOf('old.') + 4);
    // not include end index // if put "-x" vlaues at end it leave last "x" characters
    console.log(req);
    //
    {
        let req = mysentence.slice(mysentence.indexOf('I'), Infinity);
        console.log(req);
    }
}

// -------------------- Challenge time ------------------

// Display only first 280 characters of a string like 
// one used in Twitter??

let Sampletxt = "Let’s take a closer look at the program. Line 8 defines a constant double named PI, with the value 3.14159. This constant will be used for the value of pi in the program’scalulation. Line 9 defines a constant double named DIAMETER, initialized with the value 10. This will be end. for the circle’s diameter. Line 12 defines a double variable named circumference, which will be used to hold the circle’s circumference. Line 15 calculates the circle’s circumference by multiplying PI by DIAMETER. The result of the calculation is assigned to the circumference variable. Line 18 displays the circle’s circumference."

let reqtxt = Sampletxt.slice(0, 280); //0-279= 280 Characters
console.log(reqtxt);
console.log(Sampletxt.length); // 612
console.log(reqtxt.length); // 280


//     ``````5-Array.prototype.substring()`````````  //
// 1- substring(start ,end)

//  substring() similar to slice difference is cannot accept negative index

{
    let mysentence = "My name is Hira. I am 19 year old. I am Software Engineer";
    let req = mysentence.substring(mysentence.indexOf('I'), mysentence.lastIndexOf('old.') + 4);
    console.log(req);
    //
    {
        let req = mysentence.substring(mysentence.indexOf('I'), -2);
        // we write negative  it star from zero index to starting
        console.log(req);
    }
}


//     ``````6-Array.prototype.substr()`````````  //
// 1- substr(start ,length)

//  substr() similar to slice difference instead of index take length
// 

{
    let mysentence = "My name is Hira. I am 19 year old. I am Software Engineer";
    let req = mysentence.substr(mysentence.indexOf('I'), 17);
    console.log(req);
    //
    {
        let req = mysentence.substr(-22);
        // can not write negative because 2nd is length so just write a negative number 
        // and it will count from last
        console.log(req);
    }
}



//     ``````6-Array.prototype.replace()`````````  // Replacing
// 1- replace(searchfor, replacewith)

//  By Default replace() only replace first match value not all
// Donot Change the string
// called on ie returns a new string
//  case sensitive


{
    let mysentence = "My name is Hira Amanat. I am 19 year old.";
    let req = mysentence.replace('19', '20');
    console.log(req);
}




//          ********************************
/********** Extracting Character from string    *********/
//          ********************************

// charAt(position)
// charCode(position)
// Property access[]


//     ``````7-Array.prototype.charAt()`````````  // 
// 1- charAt(position) // returns Character

{
    let mysentence = "HELLO WORLD";
    let req = mysentence.charAt(0);
    console.log(req);

}


//     ``````8-Array.prototype.charCodeAt()`````````  // 
// 1- charCodeAt(position) 
// 2- character at specified index in a string:

//  returns Uni-Code according to Utf-16 code
// ( an integer between "0-65535")

/*

------------ Uni-Code------------------
The Uni-Code sstandard provide a unique for every Charcter
No Matter the platform, device,Application or language. UTF-8 is
popular Unicode encoding which has 88-bit code Units  

*/

{
    let mysentence = "HELLO WORLD";
    let req = mysentence.charCodeAt(0);
    console.log(req);
}


// --------------Challange-------------
// Returns the unicode of the last character in a string!!!!!!1

{
    let mysentence = "HELLO WORLD";
    let req = mysentence.charCodeAt(mysentence.length - 1);
    console.log(req);
}


//     ``````Property access`````````  // 
// ECMAScript 5 (2009) allows property access [ ] on string 
// Enter Index and it will return Character at that index

{
    let mysentence = "HELLO WORLD";
    let req = mysentence[0];
    console.log(req);
}



//          ********************************
/**********       Some useful Method    *********/
//          ********************************



//     ``````-Array.prototype.toUpperCase()`````````  // 
// 1- toUpperCase() // returns new array with capital letters

{
    let mysentence = "hello World";
    let req = mysentence.toUpperCase();
    console.log(req); //HELLO WORLD

}

//     ``````-Array.prototype.toLowerCase()`````````  // 
// 1- toLowerCase() // returns new array with small letters

{
    let mysentence = "HELLO WORLD";
    let req = mysentence.toLowerCase();
    console.log(req); //hello world

}

//     ``````-Array.prototype.concat()`````````  // 
// 1- concat() // write two or more string together

{
    let fname = "Hira";
    let lname = 'Amanat'
    let req = (fname.concat(lname));
    console.log(req);
    req = (fname.concat(" ", lname));
    console.log(req);
}


//     ``````-Array.prototype.trim()`````````  // 
// 1- trim(position) // dremove extra spaces form both side

{
    let mysentence = "               HELLO WORLD!             ";
    let req = mysentence.trim();
    console.log(req); //HELLO WORLD!

}


//     ``````-Array.prototype.split()`````````  // 
// 1- split() // returns new array with small letters

{
    let mysentence = "a,b,c | d,e,f"; // String
    console.log(mysentence.split(",")); //Split on commas //['a','b','c','d','e','f']     
    console.log(mysentence.split(" ")); //Split on spaces // Jahan jahan Space hogi wahan split hoga
    console.log(mysentence.split("|")); //Split on pipe //Jahan jahan Pipe hoga wahan split hoga
}

let test ="This is the start up program or practice";

let flag=test.includes("start"); // returns bool and tell the prescence or abscence

console.log(flag);