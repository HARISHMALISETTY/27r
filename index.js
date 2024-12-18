// // // // //     var a; // decleration of a

// // // // //     a=25; // assigning a value to a

// // // // //     var a; // re-decleration

// // // // //     a=40; // re-assigning

// // // // //     var a=5; // intialisation

// // // // //     var a=10; // re-intialisation.

// // // // //     console.log(a)

// // // // //     var a=25
// // // // //     //  at line 2, iam using this for addition

// // // // //  var a=35

// // // // //  // at line 1002, iam using this for subtraction.

// // // // //  // line no 1350,

// // // // //  let x; // decleration

// // // // //  x=20;// assigning

// // // // //  x=40 // re-assigning

// // // // //  console.log(x)

// // // // // //  let x; // we can't redeclare

// // // // // // can i re-initialise the variable using let?

// // // // // // intialise--->declearation + assignment

// // // // // // re-inaitlise-->redecleration + reassignment

// // // // // // const d=3.1414;

// // // // // //  d=1414;

// // // // // //  console.log(d)

// // // // let a1="harish"; // intialised with let

// // // //  a1="10000coders"; // re-assigning or updating

// // // // // iam trying to re-intialise but it won't allows , why because a1 is having already
// // // // // let behaviour in it.

// // // // let x='hello'

// // // // console.log(typeof x)

// // // // let x=True;

// // // // console.log(typeof x)

// // // // let x=10;
// // // // let x;
// // // // let y=x;

// // // // console.log(y)

// // // // let tRue;

// // // // let x=tRue;

// // // // console.log(typeof x);

// // // // let x=null;

// // // // console.log(typeof typeof x)

// // // // let x=[1,2,"hi",true,4,null];
// // // // console.log(x[x.length-1])

// // // // console.log(x[x.length-3])

// // // // console.log(x.length)

// // // // console.log(typeof x);

// // // // an object will store the values with names also
// // // // collection of properties
// // // // collection of key-value pairs.

// // // // objects can be denotes with {}
// // // //{property1,property2,property3}
// // // // let obj={
// // // //     "key1":value1,
// // // //     "key2":value2,
// // // //     "key3":value3
// // // // }

// // // let student={
// // //     id:"1",
// // //     name:"syam",
// // //     batch:"27r",
// // //     city:"hyderabad",
// // //     job:"fullstack_developer",
// // //     package:"5lpa",
// // //     gender:"male",
// // //     isHavingGirlFriend:true,
// // //     skills:["html","css","js","python"]
// // // }

// // // // using . or [], we can access specific properties from the object
// // // // console.log( student.skills.length)

// // // // var i=45; // memory -x001

// // // // var j=i; // memory -x002

// // // // j=100;
// // // // i=55;

// // // // console.log(j)
// // // // console.log(i)

// // // // var x=[1,2,3,4,5];

// // // // var y=x;

// // // // y[2]="hii"

// // // // console.log(y[2],x[2])

// // // let ip1=123;

// // // let ip2=ip1;

// // // ip2=456;

// // // console.log(ip2,ip1)

// // let obj1={
// //     name:"tharun",
// //     city:"hyd"
// // }

// // let obj2=obj1;

// // obj2.city="sec";

// // console.log(obj1,obj2)

// // var str="welcome";

// // console.log(str.length)

// // console.log(str[str.length-2]," and ",str[2])

// var a=1;
// var b=2;

// console.log(a+"and"+b);

// console.log(`${a} and ${b}`)

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// o/p-->smallest num in arr is 1 and largest num in arr is 8

console.log(
  `smallest num in arr is ${arr[0]} and largest num is ${arr[arr.length - 1]}`
);

let username = prompt("enter username");

let money = prompt("enter money");
let obj = {
  name: username,
  cash: money,
  from: "hyderabad",
  to: "ongole",
  by: "car",
  on: "monday",
};
alert(`${obj.name} has travelled from ${obj.from} to ${obj.to} by ${obj.by} with cash of ${obj.cash} on ${obj.on}
    `);

// op--> karthik has travelled from hyderabad to ongole by car with cash of 100000 on monday.


//1.create one user object with details of purchasing a product.
//object should contains --->username,product,price,day,occassion,platform.

//op mahesh has purchased a washingmachine which costs 25000 on monday
//  on occassion of pongal in amazon


//2.create one student object with details of placement.

// object should contains--->studname,companyname,package,domain,joiningdate.

// o/p--> mahesh got placed in stick-soft company as a reactdeveloper with package of
//  4lakhs and
// joining is on 01/01/2025