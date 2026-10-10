const user = {
    username: "Bilen",
    password: "abc12345"
};

function checkUsername(username) {
    // Return whether username matches user.username
    return username === user.username;
}

function checkPassword(password) {
    // Return whether password matches user.password
    return password === user.password;
}

function validateLogin(username, password) {
    // Return true only when both checks pass

    const checkName = checkUsername(username);
    const checkpass = checkPassword(password);
    

    return checkName && checkpass;
}

const result = validateLogin("Bilen", "abc12345");
console.log(result);
console.log(validateLogin("Bilen", "abc12345")); // true
console.log(validateLogin("Bilen", "wrong"));    // false
console.log(validateLogin("Wrong", "abc12345")); // false