class createUser{
    constructor(userName, passWord){
        this.username = userName;
        this.password = passWord;
    }
}

export class Login{
    #users = JSON.parse(localStorage.getItem("users")) || [];

    createUser(userName, passWord){
        const newUser = new createUser(userName, passWord);
        if (this.#users.findIndex(users => users.username == newUser.username) < 0) {
            this.#users.push(newUser);
            localStorage.setItem("users",JSON.stringify(this.#users))
            alert("Successfully registered!");
            window.location = "./login.html";
        }else{
            alert("Username already used!")
        }
    }

    logInto(userName, passWord){

        console.log(userName);
        console.log(passWord);
        
        console.log(this.#users);
        
        let checkUser = this.#users.find((user)=>{
            // console.log(user);
            
            return user.username == userName});

        console.log(checkUser);
        
        if (checkUser) {
            if (checkUser.password == passWord) {
                localStorage.setItem("currentUser", checkUser.username);
                alert("Successfully logged");
                window.location = "/";
            }else{
                alert("Password is wrong!");
            }
        }else{
            alert("User not existed!")
        }

    }

    logOut(){
        localStorage.removeItem("currentUser");
        window.location.reload();
    }


}