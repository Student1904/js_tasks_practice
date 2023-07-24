//***********Control Statement and Loops************

// If-else conditions
//Checking Conditions
// Truthy and Falsy Values
let tomr = "rain";

if (tomr == "rain") {
    console.log("Take raincoat");
} else {
    console.log("No need for Raincoat");
}

//Challage # pta ni //checking if year is lea year or not
let year = 2020;
if (year % 4 == 0 || year % 400 == 0) {
    console.log("THis is leap year");
} else {
    console.log("THis is not leap year");
}

//Another Method 
year = 2020;
if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            console.log("THis is leap year");
        } else {
            console.log("THis is not leap year");

        }

    } else {
        console.log("THis is leap year");
    }
} else {
    console.log("THis is not leap year");

}

// what is Truthy and Falsy values 

// we have total 5 falsy values in javascript
// 0," ",undefined, null,NaN,False** is false anyway
// always move to the else part
if (score = 0) {
    console.log("Ooh we lost the Math");
} else {
    console.log("YaY we Won the Math");
}
if (score = "") {
    console.log("Ooh we lost the Math");
} else {
    console.log("YaY we Won the Math");
}
if (score = null) {
    console.log("Ooh we lost the Math");
} else {
    console.log("YaY we Won the Math");
}
if (score = undefined) {
    console.log("Ooh we lost the Math");
} else {
    console.log("YaY we Won the Math");
}
if (score = NaN) {
    console.log("Ooh we lost the Math");
} else {
    console.log("YaY we Won the Math");
}
if (score = false) {
    console.log("Ooh we lost the Math");
} else {
    console.log("YaY we Won the Math");
}

// conditional ternary operators 
//It takes three operands 
//variable =(condition)? x (True) : y (False)

console.log((num1 == num2) ? "True" : 'False');

//Example
let age = 17;

if (age >= 18) {
    console.log('You are eligible to vote');
} else {
    console.log('You are not eligible to vote');
}

console.log((age >= 18) ? 'You are eligible to vote' : 'You are not eligible to vote');

//********Switch case******

let area = 'Circle';
let PI = 3.142,
    l = 5,
    B = 6,
    r = 3;

    // IN switch we Use === means Both the data Type and Value is compared
switch (area) {
    case 'Circle':
        console.log('Area of a circle is ' + PI * r ** 2);
        break;
    case 'Rectangle':
        console.log('Area of a Rectangle is ' + (l * B));
        break;
    case 'Triangle':
        console.log('Area of a Triangle is ' + (l * B) / 2);
        break;

    default:
        console.log('Enter a valid Data');
        break;
}

//*********While Loop */
// firstly Condition is checked then loop works
let n = 0;
while (n != 10) {
    console.log(n);
    n++;
}
console.log(n);

//*********Do while Loop */
// first loops works then condition is checked
{
    let n = 0;
    do {
        console.log(n);
        n++;
    } while (n != 10);
}

/**********For Loop*******/

var x = 0;
for (let index = 0; index < 10; index++) {

    console.log(x);
    x++;
}

// Challenge to make a table of any number

var number = 6;
for (let i = 1; i <= 20; i++) {
    console.log(number + " * " + i + " = " + number * i);
}

var number = 30;
for (let i = 1; i <= 20; i++) {
    console.log(number + " * " + i + " = " + number * i);
}
//*************** Break */

outer : for(let i=0;i<10;i++)
{
    console.log(i);
    for (let name = 0; name < 10; name++) {
        console.log("continue...");
        if (i==10) {
            break;
        }
        
    }
}