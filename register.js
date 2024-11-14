import { Login } from "./class.js";

const loginManager = new Login;

const registerForm = document.querySelector("#register");
const regUserName = document.querySelector("#regUserName");
const regPassword = document.querySelector("#regPassword");

registerForm.addEventListener("submit" , (e)=>{
    e.preventDefault();
    loginManager.createUser(regUserName.value, regPassword.value);
})