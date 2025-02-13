// // let arr=[1,2,3,4,5];
// // [a,b,c,...d]=arr;
// // console.log(d)


// // let x1=[1,2,3];
// // console.log(...x1)

// // let a=[1,2,3];

// // let b=[4,5,6];

// // let c=[...a,...b];

// // console.log(c)

// // let arr=[1,2,3,[4,5]];

// // let copy=[...arr];


// // copy[3][1]="hi";
// // console.log(copy,"copied");
// // console.log(arr,"original")

// let arr=[1,2,3,4,[5,6]];

// let copy=JSON.parse(JSON.stringify(arr))

// copy[4][0]="hello";

// console.log(arr,"original")
// console.log(copy,"deeply copied")


// const _= require('lodash');

// const original=[1,2,3,{a:"shiva"},4];

// const sc=_.cloneDeep(original)

// // sc[3]="hii";
// sc[3].a="ram"

// console.log(sc,"shallow copy")
// console.log(original,"original copy")


//shallow copy--->using spread/rest operator and lodash.clone()
//deep copy --->JSON.parse(JSON.stringify()) and lodash.cloneDeep()


let arr=[1,2,3,4,5,[],{}];

let copied=[1,2,3,4,5,[],{}]


// if i make shallow copy of this---->
//[...], lodash.clone()

// deep copy--->
// JSON.parse(JSON.stringify(arr)).