// // // // // string methods in js
// // // // // let str = "welcome";
// // // // // let op = str.charAt(-2); // returns nothing

// // // // // let op1 = str[-2]; // returns undefined

// // // // // let op2 = str.at(-2); //returns character from right to left begins with index -1
// // // // // console.log(op2);

// // // // //slice method in js

// // // // let str1 = "something";

// // // // let op = str1.slice(-9, -5);

// // // // // this will extracts a part from the string
// // // // // based on the indexes and returns as a new string
// // // // // but it won't modifies existing string

// // // // // console.log(str1)

// // // // // console.log(op)

// // // // console.log(str1.charCodeAt(2));
// // // // // returns ascii/unicode value of a character based on the index;

// // // // let str1=str.substring(-1,8) // negative values can be treat as a zero.
// // // // console.log(str1)

// // // // let str1=str.slice(3); // returns rest of the string from '3' index

// // // // let str1=str.substring(4) // returns rest of the string from '4' index

// // // //let str1=str.slice(-4) // returns rest of the string from '-4' index

// // // // let str1=str.substring(-4)// returns entire string, because -4 will consider as a 0.

// // // let str="javascript";
// // // //let str1=str.substr(3,6)
// // // // first parameter is the starting index and
// // // // second param is length of the string to be extract

// // // // let str1=str.substr(-5) // returns rest of the string from index '-5'.

// // // // let str1=str.substr(2) // returns rest of the string from index '2'
// // // // console.log(str1) //

// // // let str1="helloWoRLD";

// // // // console.log(str1.toUpperCase()) // returns complete string in uppercase

// // // // console.log(str1.toLowerCase()) // returns completer string in lowercase

// // // // let str2="html";

// // // // let str3="css";

// // // // let str4="js";

// // // // // str2+str3+str4;

// // // // let result=str2.concat(str3,str4,"some","react","node")
// // // // console.log(result) // concats all the strings

// // // let str="   java  ";

// // // console.log(str.length);

// // // let str1=str.trim();// returns new string by removing empty spaces at starting and ending.

// // // let str1=str.trimStart(); // returns new string by removing empty space at starting only

// // // let str1=str.trimEnd();// returns new string by removing empty space at ending only

// // // console.log(str1.length);

// // // let str="javascript";
// // // // let str1=str.padStart(22,"hi ")
// // // // adds hi at the starting of the string to make total length 22

// // // let str1=str.padEnd(20,"so");
// // // // adds so at the end of the string to make total length 20.

// // // console.log(str1)

// // // let str="hello";

// // // console.log(str.repeat(3)) // makes string to repeat 3 times, here 3 is a count.

// // let str="FRONTEND developer will works on FRONTEND part beacuse he is  frontend developer";

// // // let str1=str.replace("frontend","fullstack");

// // // here it will replaces first match of frontend with fullstack

// // let str1=str.replace(/frontend/ig,"fullstack")

// // // replaces all matched strings in case insensitive with fullstack.

// // console.log(str1)

// // let ip="jav,asc,ript";
// // let op=ip.split(",");
// // // split the characters of a string based on the seperator(,)
// // //  and insert into the array.
// // // so we can say with the help of split, we can convert a string into array.
// // console.log(op)

// // string search methods:

// // let op=str.indexOf("q");
// // returns index of the character in string if it is present
// // and returns -1 if not available

// // let op1=str.indexOf("a",2) // second arguments tells from where it should start searching.

// // let op1=str.indexOf(/A/i)
// // this will not be allow in indexof..
// // so here searching will happens in case senstive manner
// // let str="javascriapt";

// // let op1=str.lastIndexOf("k");
// // returns the index of last occurrance of character in the string
// // if it is available and returns -1 if it is not avaialable

//  let str="javascript";

//  let op1=str.search(/A/i)

//  // here second arguement will be not consider where it can be consider in indexof method
//  // here we can make search as caseinsensitive by adding //i flag where it cannot works in indexof

// console.log(op1)

function stringConversion(str) {
  let str1 = "";
  for (i = 0; i < str.length; i++) {
    // iterating every character in the string
    if (str[i] == str[i].toUpperCase()) {
      // checking each character is in uppercase or not

      str1 += str[i].toLowerCase(); 
      // if in uppercase, convert to lowercase and then concats to new string
    } else {
      str1 += str[i].toUpperCase(); 
      // else, convert to uppercase and then concats to new string.
    }
  }
  return str1;
}

let op = stringConversion("hieKLklLoeLJPKL");
let op1 = stringConversion("justinTIMEcoMPILer");
console.log(op);
console.log(op1);

// console.log(`input string is ${str}`);

// console.log(`converted string is ${str1}`); // prints converted string here.

// console.log(str[2]==str[2].toUpperCase()); // false

// console.log(str[3]==str[3].toUpperCase()); //

// console.log('e'=='E') // false

// how can i check every character in this string.

// let arr = ["fuel", "excel", "some", "react", "js", "irregular", "html", "css"];

// for (i = 0; i < arr.length; i++) {
//   if (arr[i].indexOf("e") == -1) {
//     console.log(`e is not avaialable in ${arr[i]}`);
//   } else {
//     console.log(
//       `e is available in ${arr[i]} at index- ${arr[i].indexOf("e")}  `
//     );
//   }
// }


// ip=["html","css","JAVASCRIPT","react","ANGULAR"];

//op=["HTML","CSS","javascript","REACT","angular"];