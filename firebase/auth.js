import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "./firebase.js";

let signupform = document.getElementById("signup");
let signinform = document.getElementById("signin");
let btn = document.getElementById("rdlg");
let backtosignup = document.getElementById("bts");

signupform.addEventListener("submit", (e) => {
  e.preventDefault();

  let email = e.target[0].value;
  let password = e.target[1].value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((x) => {
      if (x.user) {
        alert("user registered successfully");
        signinform.style.display = "inline-block";
        signupform.style.display = "none";
        btn.style.display = "none";
        backtosignup.style.display = "inline-block";
      }
    })
    .catch((e) => {
      console.log(e), alert("unable to register user");
    });
});

signinform.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = e.target[0].value;
  let password = e.target[1].value;
  signInWithEmailAndPassword(auth, email, password)
    .then((x) => {
        console.log(x)
        if(x.user.accessToken){
        alert("login successfull");
        // location.replace("./home.html")

    }})
    .catch((e) => {alert("invalid credentials")});
});

btn.addEventListener("click", () => {
  signinform.style.display = "inline-block";
  signupform.style.display = "none";
  btn.style.display = "none";
  backtosignup.style.display = "inline-block";
});

backtosignup.addEventListener("click", () => {
  signupform.style.display = "inline-block";
  signinform.style.display = "none";
  backtosignup.style.display = "none";
  btn.style.display = "inline-block";
});
