import firebase from 'firebase/app';
import 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBiyyE9lWDPovrj6Cx_ugiYuCrGPtxBG0I",
    authDomain: "contable-software-cfbf5.firebaseapp.com",
    projectId: "contable-software-cfbf5",
    storageBucket: "contable-software-cfbf5.appspot.com",
    messagingSenderId: "712843453509",
    appId: "1:712843453509:web:f74fc1b6917cc382ed6f2c",
    measurementId: "G-SFB3E82QKR"
};

firebase.initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const userLogin = document.querySelector('#userLogin');
const passwordLogin = document.querySelector('#passwordLogin');
const buttonLogin = document.querySelector('#submitLogin');
const form1 = document.querySelector('#form');

/* let accesToken = false;
let mockapUser = "admin";
let mockapPassword = "Admin123";
let loginState = true; */

form1.addEventListener('submit', loginValidate)

function loginValidate(event) {
    event.preventDefault();
    const loginVal = userLogin.value;
    const passVal = passwordLogin.value;
    console.log("aqui entro a mi funcion validate");

    firebase.auth().signInWithEmailAndPassword(loginVal, passVal)
    console.log("aqui entro al siguedin sera que lo valido?").then((userCredential) => {
        console.log("aqui ya valido el correo y pass");
        const user = userCredential.user;
        console.log("User Auth: ", user);
        window.location.replace("mainPage.html");
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Authent error: ", errorMessage);
        alert("Login invalid");
    });
    /* try {
        event.preventDefault();
        const loginVal = userLogin.value;
        const passVal = passwordLogin.value;

        if (loginVal == mockapUser && passVal == mockapPassword) {
            window.location.replace("mainPage.html");
        } else {
            alert("Login invalid");
        }
    } catch (error) {
        console.error("An error occurred during login validation:", error);
    } */
}