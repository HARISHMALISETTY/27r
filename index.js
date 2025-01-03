// var x = function () {
//   console.log("iam a variable func");
// };

// x();
// y()
// console.log(y)

// var y=()=>{
//   console.log("hello")
//   console.log("welcome")

// }

// console.log(z)
// const z=3

// function userName(cbf1,cbf2) {
//   console.log("iam harish");
//   cbf1();
//   cbf2();

//   return "hello"
// }

// console.log(userName(
//   function skill() {
//     console.log("iam a fullstack developer");
//   },
//   function hobbies() {
//     console.log("i love travelling");
//   }
// ))

// here userName is higher ordered function.
// skill is callback function.

// function demo1(){

//   return function demo2(){
//     // console.log("helloooo")
//     return "hello"
//   }
// }

// // console.log(demo1())

// let x=demo1();
// console.log(x())

function _1000Coders() {
  console.log("10000-coders");

  return function () {
    console.log("27r-batch");
    return "wonderful batch";
  };
}

let op = _1000Coders();
console.log(op());


// function which takes another function as a arguement and also 
// returns another function,
// then it can be called as a higher-ordered function


