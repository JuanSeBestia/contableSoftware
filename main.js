const userLogin = document.querySelector('#userLogin');
const passwordLogin = document.querySelector('#passwordLogin');
const buttonLogin = document.querySelector('#submitLogin');
const form1 = document.querySelector('#form');

let accesToken = false;
let mockapUser = "admin";
let mockapPassword = "Admin123";

form1.addEventListener('submit', loginValidate)

function loginValidate(event) {
    try {
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
    }
}