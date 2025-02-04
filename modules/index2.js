import {a,b,demo1,login,loginStatus} from "./index1.js"

// console.log("iam demo2");

// console.log(a,b)

// demo1()


let login_var=loginStatus();
console.log(login_var);

if(login_var){
    console.log("able to access home page")
}

else{
    console.log("user not logged in yet")
}


