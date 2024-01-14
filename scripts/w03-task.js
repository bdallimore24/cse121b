/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);

    document.querySelector("#sum").value = add(addNumber1, addNumber2);
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers) ;


/* Function Expression - Subtract Numbers */

function subtract (number1, number2) {
    return number1 - number2
}

function subtractNumbers() {
    let subtractNumber1 = Number(document.querySelector("#subtract1").value);
    let subtractNumber2 = Number(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value = subtract(subtractNumber1, subtractNumber2);
}

document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);




/* Arrow Function - Multiply Numbers */

let multiply = (factor1, factor2) => factor1 * factor2

function multiplyNumbers () {
    multiplyfactor1 = Number(document.querySelector("#factor1").value); 
    multiplyfactor2 = Number(document.querySelector("#factor2").value);
    document.querySelector("#product").value = multiply(multiplyfactor1, multiplyfactor2);
}
document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);


/* Open Function Use - Divide Numbers */

function divide (dividend, divisor) {
    return dividend / divisor
}

function divideNumbers() {
    divideNumber1 = Number(document.querySelector("#dividend").value);
    divideNumber2 = Number(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = divide(divideNumber1, divideNumber2);
}
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);


/* Decision Structure */

let currentDate = new Date();

let currentYear = currentDate.getFullYear();

document.getElementById("year").value = currentYear;


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];


/* Output Odds Only Array */

document.querySelector("#odds").innerHTML = numbersArray.filter(number => number % 2 != 0);


/* Output Evens Only Array */

document.querySelector("#evens").innerHTML = numbersArray.filter(number => number % 2 === 0);


/* Output Sum of Org. Array */

document.querySelector("#sumOfArray").innerHTML = numbersArray.reduce((sum, number) => sum + number);


/* Output Multiplied by 2 Array */

document.querySelector("#multiplied").innerHTML = numbersArray.map((x) => x*2);


/* Output Sum of Multiplied by 2 Array */

sumOfArray = numbersArray.map((x) => x*2)
document.querySelector("#sumOfMultiplied").innerHTML = sumOfArray.reduce((sum, number) => sum + number);
