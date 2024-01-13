/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = "Brandon Dallimore";
let currentYear = new Date().getFullYear();
let profilePicture = "images/me.jpg";


/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");
const foodElement = document.getElementById ("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");



/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);


/* Step 5 - Array */

let favfoods = ["Burgers", " Pizza", " Mexican", " Chicken", " Steak"];
let addfood = " Cookies"

foodElement.innerHTML = favfoods;

favfoods.push(addfood);
foodElement.innerHTML += `<br>${favfoods}`;

favfoods.shift();
foodElement.innerHTML += `<br>${favfoods}`;

favfoods.pop();
foodElement.innerHTML += `<br>${favfoods}`;
