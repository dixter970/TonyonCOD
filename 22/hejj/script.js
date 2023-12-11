const database = [
    "stefan.1234",
    "dominik.kokos123",
    "jachman.365247",
    "tony.petrsmrdi",
    "petr.odentchcal",

]

function login(){
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    const loginData = username + "." + password

    for(let i = 0; i < database.length; i++){
        if(loginData == database[i]){
        console.log("Login successful");
        } else {
        console.log("Login failed")
        }
    }  
}