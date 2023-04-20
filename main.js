const userLogin = document.querySelector('.userLogin');
const passwordLogin = document.querySelector('.passwordLogin');
const buttonLogin = document.querySelector('.submitLogin');

let accesToken = false;
let mockapUser = "admin";
let mockapPassword = "Admin123";

buttonLogin.addEventListener('click', () => {
    if (loginValidate()) {
        window.location.replace("mainPage.html");
    }
});

function loginValidate() {
    try {
        const loginVal = userLogin.value;
        const passVal = passwordLogin.value;

        if (loginVal == mockapUser && passVal == mockapPassword) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error("An error occurred during login validation:", error);
    }
}