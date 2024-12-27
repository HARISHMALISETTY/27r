// let ip = "orange";

// switch (ip) {
//   case "violet":
//     console.log("color is green");
//     break;

//   case "orange":
//     console.log("color is orange");

//   default:
//     console.log("color is unavailable");

//   case "green":
//     console.log("color is green");
//     break;

//   case "blue":
//     console.log("color is blue");
//     break;

//   case "black":
//     console.log("color is black");
//     break;
// }

// let num = 50;

// switch (num) {
//   case 100:
//     console.log("entered num is 100");
//     break;

//   case 50:
//     console.log("entered num is 50");
//     break;

//   case 25:
//     console.log("entered num is 25");
//     break;

//   default:
//     console.log("num is not available");
// }

// let num =75;

// switch (true) {
//   case num < 100 && num > 80:
//     console.log("Firstclass");
// //     break;

// //   case num < 80 && num > 60:
// //     console.log("second class");
// //     break;

// //   case num < 60 && num > 40:
// //     console.log("third class");
// //     break;

// //   default:
// //     console.log("Fail");
// // }

// // let arr=[1,4,6];

// // arr[24]="hiii";
// //  console.log(arr.length,"array length");
// // console.log(arr[2])

// // let arr=[5,"hii","35",90];

// // arr[12]=125;

// // console.log(arr[10]);

// // let arr=[1,2,3,4,5]

// // arr[arr.length]=6;

// // console.log(arr)

// // arr[0]=1;

// // arr[1]=2;

// // let arr = [];

// // for (i = 20; i <= 40; i = i + 2) {
// //   arr[arr.length] = i;
// // }

// // console.log(arr);

// let str = "JAVASCRIPT";
// let arr = [];
// for (i = 0; i <= str.length - 1; i++) {
//   arr[arr.length] = str[i];
//   // console.log(str[i])
// }
// console.log(arr);
// let arr1 = [];
// for (i = str.length - 1; i >= 0; i--) {
//   arr1[arr1.length] = `${str[i]} at index ${i}`;
// }

//  console.log(arr1)
//[
//   ("T at index 9",
//   "P at index 8 ",
//   "I at index 7",
//   "R at index 6",
//   "C at index 5",
//   "S at index 4",
//   "A at index 3",
//   "V at index 2",
//   "A at index 1",
//   "J at index 0")
// ];

let arr3 = ["hello", "welcome", "to", "javascript"];

// o/p:
// olleh
// emoclew
// ot
// tpircsavaj

// op=["olleh","emoclew","ot","tpircsavaj"]
for (i = 0; i < arr3.length; i++) {
  let str = "";

  for (j = arr3[i].length - 1; j >= 0; j--) {
    str += arr3[i][j];
    
  }

  console.log(str);
}

// task:
// -------
// 1.i/p--->let arr3 = ["hello", "welcome", "to", "javascript"];
// o/p---> op=["olleh","emoclew","ot","tpircsavaj"]


//2.let i/p = ["hello", "welcome", "to", "javascript"];

// o/p--->["olleh","welcome","ot","javascript"]

