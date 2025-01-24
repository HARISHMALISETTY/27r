// // number methods:

// let num=new Number(25);

// console.log(typeof num)

// let num=125;

// let k=num.toString();

// // returns string by converting num to string but it wont modifies existing one

// console.log(typeof k);

// let num=4.1567;

// let k=num.toPrecision(2);

// console.log(k)

// The toPrecision() method formats a number to a specified length.

// A decimal point and nulls are added (if needed), to create the specified length.

// let num1=1.2444;

// let op1=num1.toFixed(3);

// console.log(op1)

// let num1 = "ha123";
// let op1 = parseInt(num1);
// console.log(op1);

// let op2 = parseFloat(num1);
// console.log(op2);

// let ip="123ha";

// console.log(isNaN(ip*2));

// math methods:

// let x=Math.PI;

// console.log(x)

// let y=Math.sqrt(25);
// console.log(y)

// let z=Math.round(1245.48);

// console.log(z)

// let x1=Math.ceil(1245.09);
// console.log(x1);

// let y1=Math.floor(-4.234);

// console.log(y1)

// let y=parseInt(-4.52);

// console.log(y)

// let z=Math.trunc("45are");
// console.log(z)

// let z=parseInt("11AB",16);

// console.log(z)

// let x=Math.random()*1000000;

// let otp=Math.floor(x);

// if(otp<100000){
//     console.log(otp+100000)
// }
// else
// console.log(otp)

let x = Math.random() * 100000;
let otp = Math.floor(x);
if (otp < 10000) console.log(otp + 10000);
else console.log(otp);
