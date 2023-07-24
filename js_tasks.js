


//  ------------------------1st task ---------------------------



function BMI(W, H) {
 
  const bmi = W / (H * H);
  return bmi.toFixed(2);
}


const W = 10; 
const H = 2.5; 

const D = BMI(W, H);
console.log(D); 

// -----------------------------2nd task -------------------------------

function swap(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    return { a, b };
  }
  
  
  let a = 5;
  let b = 10;
  
  const swapped = swap(a, b);
  console.log("a =", swapped.a, ", b =", swapped.b);

//   ------------------------------3rd task------------------------------

function factorial(num) {
   
    if (num === 0 || num === 1) {
      return 1;
    }
  
    return num * factorial(num - 1);
  }
  
  const number = 14;
  const Factorial = factorial(number);
  console.log(Factorial); // Output: 120
  
  