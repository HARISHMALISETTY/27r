var a = 2;

let b = 4;

const c = 6;

// here a,b,c are having global scope.

// function demo() {
//   console.log(a);
// }

// demo();

// if (true) {
//   console.log(b);
// }

// if (true) {
//   console.log(c);
// }

//1.whenever we declare any varaibles globally in particular script, then they can
// be accessible around that script.

// now, lets declare variables in a block.

if (true) {
  var a1 = "iam var";
  let b1 = "iam let";
  const c1 = "iam const";
  console.log(b1)
}
console.log(a1)
// var will have global scope if we declare in a block.

// console.log(b1) 
// let will have block scope only but not global  because it is declared inside a block.

// console.log(c1);
// const will have block scope only but not global  because it is declared inside a block.



