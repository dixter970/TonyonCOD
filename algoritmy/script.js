function factorial(){
    const number = document.getElementById('factInput').value;
 
    if (number < 0) {
        console.log('Neplatný input');
    } else {
        let fact = 1;
        for (i = 1; i <= number; i++) {
            fact *= i;
        }
        console.log(fact);
    }
}
 
var seznam = [3, 1, 4, 1, 5, 9, 2]
 
var min = Math.min(...seznam)
var max = Math.max(...seznam)
var sort = seznam.sort()
 
console.log(min)
console.log(max)
console.log(sort)