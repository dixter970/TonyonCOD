function checkResult() {

    const inputAge = parseInt(document.getElementById("checkAge").value)

    if(inputAge < 18) {
        document.getElementById("outputAge").value = "mladej"
    
    } else if(inputAge >= 18 && inputAge < 200){
        document.getElementById("outputAge").value = "Dospělej"

         }else if(inputAge > 18 < 0){

    } else if(inputAge <= 2005){
        document.getElementById("outputAge").value = "Dospělej"
    }else if(inputAge > 2005) {
        document.getElementById("outputAge").value = "moc mladej"
    }

    
    
}

function forCycle(){
    let userInput = parseInt(document.getElementById("cycleInput").value)
    let output=""
        for(let i = 0; i < userInput; i++){
          output = output + "."
            document.getElementById("output").innerHTML= output
        }
    }