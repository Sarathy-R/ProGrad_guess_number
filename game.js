const $submit = document.getElementById("submit");
const $message = document.getElementById("message");
const $lives = document.getElementById("lives");

var number = Math.round(Math.random() * 100);
// var number = 33;
var lives = 10;
var message;
$submit.onclick = () => {
  let inp = document.getElementById("number-input").value;
  lives--;
  if (inp == number) {
    location.href = "./win.html";
  } else if (lives == 0) {
    location.href = "./lose.html";
  } else if (inp > number) {
    message = `Oops ! Your guess is too high, You have ${lives} lives remaining`;
  } else if (inp < number) {
    message = `Oops ! Your guess is too low, You have ${lives} lives remaining`;
  }

  $message.style.display = "inherit";
  $message.innerHTML = message;
  $lives.innerHTML = lives;

  setTimeout(() => {
    $message.style.display = "none";
    $message.innerHTML = "";
  }, 1500);
};
