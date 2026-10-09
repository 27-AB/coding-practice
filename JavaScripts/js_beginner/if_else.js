
const score = 73;
if(score > 100 || score < 0){
    console.log("the score is out of scope");
}
else if (score >= 90){
    console.log("Excellent");
}

else if (score >= 80){
    console.log("Very Good");
}
else if(score >= 70){
    console.log("Good");a
}
else if(score >= 60){
    console.log("Pass");}
else {
    console.log("Fail");
}