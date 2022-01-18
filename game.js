const $submitButton = document.getElementById("checkButton");
//const submitButton = document.getElementById("checkButton");
const $message = document.getElementById("message");
const $lives = document.getElementById("lives");
var guessnumber = Math.round(Math.random() * 100);
var message;
var lives = 10;

$submitButton.onclick = () => {
let userinput = document.getElementById("textBox").value;
lives--;
if(userinput == guessnumber){
        location.href = "./win.html";
}else if (lives == 0) {
    location.href = "lose.html";
}else if(userinput > guessnumber){
    message = 'guessed number is Big'
}else if( userinput < guessnumber){
    message = 'guessed number is small'
}
    

$message.style.display = "inherit";
$message.innerHTML = message;
$lives.innerHTML = lives;
};