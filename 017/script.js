const usersData = []

function calcBMI() {


    const weightInput = parseFloat(document.getElementById("weight").value)
    const heightInput = parseFloat(document.getElementById("height").value)

    const BMI = weightInput / (heightInput * heightInput).toFixed(1)

    console.log(BMI)

    if (weightInput <= 0 || heightInput <= 0) {
        document.getElementById("output").innerHTML = "Neplatný input"
    
    }else if (BMI < 18.5) {
        document.getElementById("output").innerHTML = "Podváha"
        usersData.push("podváha")
    } else if (BMI >= 18.5 && BMI < 25) {
        document.getElementById("output").innerHTML = "Normální váha"
        usersData.push("normální váha")
    } else if (BMI <= 25 && BMI < 30) {
        document.getElementById("output").innerHTML = "Nadváha"
        usersData.push("nadváha")
    } else if (BMI > 30) {
        document.getElementById("output").innerHTML = "Obezita"
        usersData.push("obezita")
    }

    document.getElementById("arrayOutput").innerHTML = usersData

}






