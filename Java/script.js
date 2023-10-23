function myFunction() {
    var variable1;
    let variable2;
    const variable3 = 3;
    variable4 = "ahoj";
    variable5 = true;
    variable6 = 5;
    const userFirstName = document.getElementById("fName").value
    const userLastName = document.getElementById("lName").value
    const userFullName = userFirstName + " " + userLastName
    console.log(userFullName)
}
function myFunctionMathAdd() {
    const firstNumber = parseInt(document.getElementById("first").value)
    const sencondNumber = parseInt(document.getElementById("second").value)
    const finalNumberAdd = firstNumber + sencondNumber
    console.log(finalNumberAdd)
    document.write(finalNumberAdd);
}
function myFunctionMathSub() {
    const firstNumber = document.getElementById("first").value
    const sencondNumber = document.getElementById("second").value
    const finalNumberSub = firstNumber - sencondNumber
    console.log(finalNumberSub)
    document.write(finalNumberSub);
}
function myFunctionMathNas() {
    const firstNumber = document.getElementById("first").value
    const sencondNumber = document.getElementById("second").value
    const finalNumberNas = firstNumber * sencondNumber
    console.log(finalNumberNas)
    document.write(finalNumberNas);
}
function myFunctionMathDel() {
    const firstNumber = document.getElementById("first").value
    const sencondNumber = document.getElementById("second").value
    const finalNumberDel = firstNumber / sencondNumber
    console.log(finalNumberDel)
    document.write(finalNumberDel);
}
function myFunctionMath() {
    const firstNumber = document.getElementById("first").value
    const sencondNumber = document.getElementById("second").value
    let result;
    switch (myFunctionMath) {
        case '+':
            result = firstNumber + sencondNumber;
            break;
        case '-':
            result = firstNumber - sencondNumber;
            break;
        case '*':
            result = firstNumber * sencondNumber;
            break;
        case '/':
            if (sencondNumber == 0) {
                result = firstNumber / sencondNumber;
            } else {
                result = 'Nelze dělit nulou';
            }
            break;
    }
    document.getElementById("vysledek").innerHTML = result
}
const cars = [
    "Saab",
    "Volvo",
    "BMW"
];
const spoluzaci = [
    "Petr",
    "Jachym",
    "Kien",
    "Klara",
    "Ruda",
    "Petr",
    "Karel",
    "Michal",
    "Franta",
    "Fanda",
    "Petr",
    "Jachym",
    "Kien",
    "Klara",
    "Ruda",
    "Petr",
    "Karel",
    "Michal",
    "Franta",
    "Fanda",
];
function forLoop() {
    for (let i = 0; i < spoluzaci.length; i++) {
        console.log(spoluzaci[i])
    }
}