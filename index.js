// // // // function decleration
// // // // function greeting() {
// // // //   console.log("hello iam a function");
// // // // }

// // // // function invoke/call

// // // // greeting();
// // // // debugger;
// // // // console.log(greeting1());

// // // // function greeting1() {
// // // //   console.log("hello");
// // // //   return "hiii";
// // // //   return "hello00000";
// // // //  console.log("something");
// // // // }

// // // console.log(demo());
// // // function demo(){

// // //   console.log("iam demo");
// // //   // return "demo here"
// // // }

// // // function addition(x,y){

// // //   var sum=x+y;
// // //   return sum;

// // // }

// // // console.log(sum)

// // // // addition(4,5) // function invoking

// // // console.log(addition(4,5)) //9
// // // console.log(addition(10,12)) // 22
// // // console.log(addition(15,22)) // 37

// // // function sample(){

// // //   console.log("hello iam sample")
// // // }

// // // sample();

// // function sample(x,a="10000-coders")
// // {

// //   console.log(`${x} from ${a}`)

// // }

// // // sample("naveen")
// // // sample("praveen")
// // // sample("sunil")
// // // sample("ram")

// // // function sample1(a,b)
// // // {
// // //   console.log(a*b)
// // // }

// // // sample1()

// // // function billing(item1,item2,m_c=5){

// // //   let total_bill=item1+item2+m_c;

// // //   return total_bill;

// // // }

// // // console.log(billing(25,45))

// // // console.log(billing(15,35))

// // var x=function (){

// //   return "hello"
// // }

// // console.log(x())

// // var x1=()=>{

// //   return "hello"
// // }

// // // function sample(){}
// // // var x11=function(){}
// // // var x2=()=>{}

// // var x11 = function (a, b) {
// //   console.log(a + b);
// // };

// // x11(4, 5);

// // var y11 = (x, y) => {console.log(x + y);};

// // y11(1, 2);

// // var z=()=>{return "hello"};

// // var z=()=>("hello");

// // var z=(a,b)=>{ return a+b};
// // var z=(a,b)=>(a+b)

// var z=a=>a*2;

// console.log(z(4,5))


function checkEvenOrOdd(x)
{

  if (x % 2 == 0) {
    console.log("x is even");
  } else {
    console.log("x is odd");
  }

}

checkEvenOrOdd(125)
checkEvenOrOdd(124)
checkEvenOrOdd(12)

