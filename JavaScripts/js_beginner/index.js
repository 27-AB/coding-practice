const user = {
   username : "Bilen",
   password : "abc123"
}

const enteredUsername = "Birhane";
const enteredPassword = "abc123";

if((enteredUsername !== user.username) || enteredPassword !== user.password){
  console.log("Access Denied");
}
else{
   console.log("Access Granted");
}