function calcBMI() {


    const weightInput = parseFloat(document.getElementById("weight").value)
    const heightInput = parseFloat(document.getElementById("height").value)

    const BMI = weightInput / (heightInput * heightInput).toFixed(1)

    console.log(BMI)

    if(BMI < 18.5) {
        document.getElementById("output").innerHTML = "Podváha"
    } else if(BMI >=18.5 && BMI <25){
        document.getElementById("output").innerHTML = "Normální váha"
    }else if(  BMI <= 25 && BMI < 30){
        document.getElementById("output").innerHTML = "Nadváha"
    } else if( BMI> 30){
        document.getElementById("output").innerHTML = "Obezita"
    }

}




   
 
    
 
