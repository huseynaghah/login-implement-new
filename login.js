import { Login } from "./class.js";

const loginManager = new Login;
const loginForm = document.querySelector("#login");
const logUserName = document.querySelector("#logUserName");
const logPassword = document.querySelector("#logPassword");

loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    loginManager.logInto(logUserName.value, logPassword.value)
    
    
})