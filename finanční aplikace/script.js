function convertCurrency() {
    var sourceCurrency = document.getElementById("sourceCurrency").value;
    var targetCurrency = document.getElementById("targetCurrency").value;
    var amount = document.getElementById("amount").value;
    document.getElementById("result").innerText = "Výsledek: " + convertedAmount;
 }
 