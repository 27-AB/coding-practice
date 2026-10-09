const user = {
    username: "Bilen",
    password: "abc12345"
};

const validateLogin = (username,password) => {
    if(username === user.username && password === user.password){
        return true;
    }
    else{
        return false;
    }
}
const showLoginMessage = (isValid) => {
    if(isValid === true){
        return "Login successful";

    }
    else{
        return "Access denied";
    }
}
console.log(showLoginMessage(validateLogin("Bilen", "abc12345")));
console.log(showLoginMessage(validateLogin("Birhane", "abc12345")));
console.log(showLoginMessage(validateLogin("Bilen", "wrongpass")));
console.log(showLoginMessage(validateLogin("Birhane", "wrongpass")));