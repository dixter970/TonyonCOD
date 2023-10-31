

function checkAge() {
const agenumber = parseInt(document.getElementById ("age").value)

if (agenumber <=0) {
    console.log("Neplatný input")
} else if (agenumber < 18) {
    console.log("Nedostatečný věk")
} else if (agenumber >=18) {
    console.log("Přístup povolen")
}
var userinput = document.getElementById("age").value;
    var dob = new Date(userinput);
    if(userinput==null || userinput=='') {
      document.getElementById("message").innerHTML = "**Choose a date please!";  
      return false; 
    }else {
    
    var month_diff = Date.now() - dob.getTime();
    
    var age_dt = new Date(month_diff); 
      
    var year = age_dt.getUTCFullYear();
    
    var age = Math.abs(year - 1970);

    if (age < 18 || userinput >= 18 ) {
        result = "dospělý"
    } else {
        result = "mladý"
    }


    return document.getElementById("result").innerHTML = result;
    }
}
