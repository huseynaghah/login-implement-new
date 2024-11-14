import { Login } from "./class.js";

const loginManager = new Login;

const wrapper = document.querySelector("#userwrapper");
const signedNav = document.querySelector(".signed");
const signOutNav = document.querySelector(".signout");
const logOutBtn = document.querySelector("#logOut");

if (localStorage.getItem("currentUser")){
    wrapper.innerText = localStorage.getItem("currentUser");
    signedNav.style.display = 'flex';
    signOutNav.style.display = 'none';
}else{
    signedNav.style.display = 'none';
    signOutNav.style.display = 'flex';
}

logOutBtn.addEventListener('click',(e)=>{
    e.preventDefault();

    loginManager.logOut();

})