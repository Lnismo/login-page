const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPass = document.getElementById("confirmPassword");
const username = document.getElementById("username");


function verifyUsername(){
    if (username.value == ""){
        username.style.border = "solid 1px red";
        username.placeholder = "insert a username";
        return false;
    } else {
        username.style.border = "none";
        username.placeholder = "username";
        return true;
    }
}

//verify if email contains "@" or ".com"
function verifyEmail(){
    if (!email.value.includes("@") || !email.value.includes(".com")){
        email.style.border = " solid 1px red";
        email.value = "";
        email.placeholder = "invalid email";
        return false;
    } else {
        email.style.border = "none";
        email.placeholder = "email";
        return true;
    }
}

//verify if passwords aren't different
function verifyPassword(){
    if (confirmPass.value != password.value || confirmPass.value == "" || password.value == ""){
        password.style.border = "solid 1px red";
        confirmPass.style.border = "solid 1px red";
        password.value = "";
        confirmPass.value = "";
        confirmPass.placeholder = "passwords are different";
        password.placeholder = "passwords are different";
        return false;
    } else {
        password.style.border = "none";
        confirmPass.style.border = "none";
        confirmPass.placeholder = "confirm password";
        password.placeholder = "password";
        return true;
    }
}

//run the functions and verify if it's all right
function signUp(){
    verifyEmail();
    verifyPassword();
    verifyUsername();
    if (verifyEmail() && verifyPassword() && verifyUsername() && verifyUsername()){
        window.location.href = "../notification/index.html";
    }
}