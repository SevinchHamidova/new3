var ism = prompt("ismingizni kiriting");
var familiya = prompt("familiyangzni kiriting");
var yosh = prompt("yoshingizni kiriting");
var email = prompt("emailingizni kiritng");
var sum = prompt("summani kiritng");

var userName = document.querySelector(".name");
var userLastname = document.querySelector(".lastName");
var userage = document.querySelector(".age");
var userEmail = document.querySelector(".email");
var priceMoney = document.querySelector(".price")
var uzs = 12343;

userName.textContent = ism;
userLastname.textContent = familiya;
userage.textContent = yosh;
userEmail.textContent = email;
priceMoney.textContent = sum * uzs;
