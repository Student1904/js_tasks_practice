//-----Function Definition-----
let b = 10,
    a = 20;

//Parametrize function
function sum(a, b) /*Parameters */ {
    let total = a + b;
    return total; //Return Keyword
}

console.log(sum(10, 20) /*Argument Passing */ );

//------Function Parameter and Function Arguments

// Why Function?  

// 1- you can reuse code: Define the code once, and use it any times.
// 2- you can use the same code many times with differnt arguments.
// 3- To produce Different Result
// or
// A fuction is  GROUP OF REUSABLE code which can be calledaywher
// in your Program. This eliminates the need of writting of same code
// again and again. 

// DRY => donot repeat yourself.

// ------ Function Expression ------
//" function expression Simply means "
// create A function and put it into the variable


let funExp = sum(5, 3); //this is called Function Expression
console.log('The sum of Two Numbers :' + funExp);

// Anonymus Function
//A Function with no but the value is assignig with function expression 
// and the return Statement

let funExp2 = function(a, b)
    /*function define with no name 
    but the Function Expression */
    {
        return a + b; // Retrun Keyword
    }

// for calling The function we use variable name ie funExp
// i.e where the value is returning
console.log(funExp2(6, 9)); //calling Anomyms Function
funExp2(3, 9); //Cannot Call like this
console.log('The sum of Two Numbers :' + funExp2(5, 10));

console.log(funExp > funExp2); // comparing values of Function


// Call BackFuntion and HighOrder function

// paasing function name by argument and calling it 

// let sum=(a,b)=> a+b;
// let sub=(a,b)=> a-b;
// let mul=(a,b)=> a*b;
// let div=(a,b)=> a/b;

// let calculation=(num1,num2,operation)=>
// {
// return operation(num1,num2)
// }

// console.log(calculation(5,3,sum));