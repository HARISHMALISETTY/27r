// // // // // // // let arr=[];
// // // // // // // arr[0]=1;
// // // // // // // arr[1]=2;

// // // // // // // arr[2]=4;

// // // // // // // let arr=[1,2,3,4,6]

// // // // // // let arr=new Array(1,2,3)
// // // // // // console.log(arr)

// // // // // // let arr=[1,2,3];

// // // // // // console.log(arr)

// // // // // // let op=[] // arr
// // // // // // op=arr.toString(); // returning a string but not modifying existing array

// // // // // // console.log(op)

// // // // // let arr=[1,2,3,4];

// // // // // // let op=arr.at(-3)
// // // // // // console.log(op)

// // // // // // console.log(arr.at(-3))

// // // // // let op=arr.join(" hello ");
// // // // // // console.log(op)

// // // // // // join the elements in the array with seperator and returns in a string format.

// // // // // // let arr2=[1,2,3,4,5];

// // // // // // let op1=arr2.push(12);

// // // // // // push method will modifies the existing array by adding one or more elements at the end of the array.
// // // // // // and it will returns updated length of the array after adding elements.

// // // // // // console.log(op1)

// // // // // // let x=arr2.pop()

// // // // // // console.log(x)

// // // // // // pop method will removes last element from the array... and modifies existing array.
// // // // // // it returns the element which is popped out.

// // // // // let arr=[1,2,3,4,5];

// // // // // let op=arr.shift()

// // // // // console.log(op)

// // // // // shift will modifies the existing array by removing the first element from the array
// // // // //returns the element which is removed.

// // // // let arr=[1,2,3,4,5];

// // // // let op=arr.unshift(8,9,"hi","js",6,9,0)

// // // // console.log(arr)

// // // // // unshift will modifies the existing array by adding the elements at the starting of the array
// // // // // and returns updated length of the array.

// // // // let arr=["html","js","234",1,2,"react","nodejs"];

// // // // let op=arr.slice(-2);

// // // // console.log(op)

// // // let arr=[1,2,3,4,5];

// // // let x=arr.splice(1,6);

// // // console.log(arr)

// // // // splice will modifies existing array by removing/adding elements at the particular index in
// // // // the array.

// // // let arr=[4,3,5,6,7,6,9,6];
// // // let op=arr.indexOf(6,4);
// // // console.log(op)

// // // let arr=[1,2,3,4,5,9];

// // // let op=arr.includes(4)

// // // console.log(op);

// // //  let op=arr.find(function(value,index,array){

// // //     return index>2

// // //  })

// // //  let op=arr.find((value,index,array)=>{return value.length>4})

// // // now iam trying to simplify by removing return keyword.

// // //  let op=arr.find((x,y,z)=>x.length>4)

// // // let arr = ["hi", "120", "1234", "java", "html", "css", "mongo"];

// // // let op = arr.find(function (value, index, arr) {
// // //   // console.log(value,index,arr)
// // //   return value.length > 3;
// // // });
// // //  console.log(op)

// // // find method will returns an element which passes condition which we mention in a function as a cbf.
// // // cbf will have 3 parameters--->value,index,array.

// // //  let arr1=[24,56,89,100,123];

// // //  let op1=arr1.find(function(value,index,arr){
// // //     return value>67
// // //  })

// // //  console.log(op1)

// // // let aoo = [
// // //   {
// // //     id: 1,
// // //     title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
// // //     price: 109.95,
// // //     description:
// // //       "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
// // //     category: "men's clothing",
// // //     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
// // //     rating: {
// // //       rate: 3.9,
// // //       count: 120,
// // //     },
// // //   },
// // //   {
// // //     id: 2,
// // //     title: "Mens Casual Premium Slim Fit T-Shirts ",
// // //     price: 122.3,
// // //     description:
// // //       "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
// // //     category: "men's clothing",
// // //     image:
// // //       "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
// // //     rating: {
// // //       rate: 4.1,
// // //       count: 259,
// // //     },
// // //   },
// // //   {
// // //     id: 3,
// // //     title: "Mens Cotton Jacket",
// // //     price: 155.99,
// // //     description:
// // //       "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
// // //     category: "men's clothing",
// // //     image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
// // //     rating: {
// // //       rate: 4.7,
// // //       count: 500,
// // //     },
// // //   }
// // // ];

// // // let op2=aoo.find(function (value,index,array){

// // //     return value.price>95
// // // })

// // // console.log(op2)

// // // let arr=[2,4,6,8,9,2,3];

// // // let op=arr.findLastIndex(function(y,x,arr){return value>5})
// // // console.log(op);

// // // let arr=[1,2,3,4,5];

// // // let op=arr.map(function(value,index,arr){
// // //     return value+3;
// // // })
// // // console.log(op)

// // // map method always returns new array by applying
// // //  the logic in the cbf for every element in the array

// // // let arr=["hi","hello","welcome","js"];

// // // let op=arr.map(function(value,index,arr){return(value=="hi")})

// // // console.log(op)

// // // foreach won't return anything

// // // here both map and foreach are used to iterate every element and performs function for each.

// // // but map will returns a new array but foreach returns nothing.

// // let arr = ["hi", "java", "apple", "orange", "red"];
// // let op=arr.map((x,y,z)=>{
// //     return x.slice(0,-1)+x.at(-1).toUpperCase()
// // })

// // console.log(op)

// // // let op = arr.map(function (x, y, z) {
// // //   return x[0].toUpperCase()+x.slice(1)
// // // });
// // // console.log(op);

// // // ["hI","javA","applE","orangE","reD"]

// // let fruits = ["apple", "banana", "orange"];
// // fruits.splice(1, 0, "kiwi", "lemon");
// // console.log(fruits);

// // let fruits = ["apple", "banana", "orange", "grape", "mango"];
// // fruits.splice(1, 2);
// // console.log(fruits);

// // let fruits = ["apple", "banana", "orange", "grape"];
// // let citrus = fruits.slice(1, 3);
// // console.log(citrus);

// // let arr=[1,2,3,4,5];

// // let op=arr.findIndex((x,y)=>{return x>10})

// // console.log(op)

// // let arr=["hi","hello","12"];
// // let op=arr.forEach((value)=>{return "js"+value});
// // console.log(op);

// // let arr=[18,23,45,10,11,29];

// // let op=arr.filter((x,y,z)=>{return x>=18})

// // console.log(op)

// // let arr=["java","javascript","html","react","nodejs"]

// // let op=arr.filter((x,y,z)=>{return x.length>=5 })

// // console.log(op)

// // let arr = ["Java", "java", "Html", "css", "Css", "React", "react"];
// // let op = arr.filter((x, y) => {
// //   return x[0] == x[0].toUpperCase();
// // });
// // console.log(op);

// // let arr = [3, 5, 2, 4, 7, 9];
// // let op = arr.reduce((x, y , z) => {
// // //   console.log(x, y);
// //   return "hello";
// // });

// // console.log(op);

// // let arr=[24,28,110,23,22,21];

// // let op=arr.every((x,y)=>{return x>=18})
// // console.log(op)

// // if every element in the array passes the condition of
// //  the test function then returns true otherwise returns false.

// // let arr1=[23,12,14,16,17];

// // let op1=arr1.some((x,y)=>{return x>18})
// // console.log(op1);

// // let arr=["blue","amazon","red","green","yello"];

// // let op=arr.sort();

// // console.log(op)

// // let arr = [9, 18, 15, 23, 102, 789, 15, 23];

// // let op = arr.sort((a, b) => {
// //   return b - a;
// // });

// // console.log(op);


// // let arr=[1,2,3,4,5];
// // let op=arr.reverse();
// // console.log(op)

// let str="hello";

// //op="olleh"


// let op=str.split("").reverse().join("");
// console.log(op);
