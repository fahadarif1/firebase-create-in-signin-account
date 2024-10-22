
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-analytics.js";
  import { getAuth,
    onAuthStateChanged ,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
 
  const firebaseConfig = {
    apiKey: "AIzaSyBnum1eky2YL-aG45QOGt30GzMDCpqAIfA",
    authDomain: "login-page-70307.firebaseapp.com",
    projectId: "login-page-70307",
    storageBucket: "login-page-70307.appspot.com",
    messagingSenderId: "153396521720",
    appId: "1:153396521720:web:22d1c70172fff810b6a90d",
    measurementId: "G-CHY85LY19Z"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  console.log("app=>", app);
  
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  console.log("auth=>", auth);

const signup_email = document.getElementById('signup-email')
const signup_password = document.getElementById('signup-password')
const signup_button = document.getElementById('signup-button')


const signin_email = document.getElementById('signin-email')
const signin_password = document.getElementById('signin-password')
const signin_button = document.getElementById('signin-button')


const user_email = document.getElementById("user_email")
const logout_btn = document.getElementById("logout_btn")




const auth_container = document.getElementById("auth_container")
const user_container = document.getElementById("user_container")


signup_button.addEventListener("click", CreateUserAccount)
signin_button.addEventListener("click", signIn)
logout_btn.addEventListener("click", logout)


onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('user is logging in');
   const uid = user.uid;
   auth_container.style.display = "none";
   user_container.style.display = "block";
   user_email.innerText = user_email;
  } else {
    console.log('user in not logging');
    auth_container.style.display = "block";
     user_container.style.display = "none";
     user_email.innerText = user_email;
    }  
});


  function CreateUserAccount(){
    // console.log("email=>",signup_email.value);
    // console.log("password=>",signup_password.value);
    createUserWithEmailAndPassword(auth, signup_email.value, signup_password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log("user=>", user);
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert (errorMessage);
    // ..
  });
  }

  function signIn(){
    // console.log("email=>",signin_email.value);
    // console.log("password=>",signin_password.value);
 
    signInWithEmailAndPassword(auth, signin_email.value ,signin_password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("user=>");
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert (errorMessage);
  });
  }

  function logout(){
   
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
  }