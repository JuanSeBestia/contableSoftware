const userLogin =  document.querySelector('.userLogin');
const passwordLogin =  document.querySelector('.passwordLogin');
const buttonLogin = document.querySelector('.submitLogin');

let accesToken = false;
let mockapUser = "admin";
let mockapPassword = "Admin123";

buttonLogin.addEventListener('click', loginValidate);

function loginValidate() {
    try {
        const loginVal = userLogin.value;
        const passVal = passwordLogin.value;
        
        if (loginVal == mockapUser && passVal == mockapPassword) {
            console.log("login valid");
            accesToken = true;
            window.location.href = ".mainPage";
        } else {
            console.log("invalid data");
        }
    } catch (error) {
        console.error("An error occurred during login validation:", error);
    }
  }