let btn = document.getElementById("btn");
let output = document.getElementById("output");
let quotes = [
   "Když procházíš peklem, nezastavuj se.",
"Buďte laskaví vždy, když je to možné. Vždy je to možné",
"Buď sám tou změnou, kterou chceš vidět ve světě.",
"Vše, co si dokážete představit je skutečné.",
"Žij, jako bys měl zítra zemřít. Uč se, jako bys měl navždy žít.",
"Jestli najdeš v životě cestu bez překážek, určitě nikam nevede.",
"Je lepší zemřít pro něco než žít pro nic.",
"Celý život je experiment. Čím více experimentů uděláte, tím lépe.",
"Nenáviděl jsem každou minutu tréninku, ale vždy jsem si říkal: Teď protrpíš trénink a žij zbytek života jako mistr.",
"Mnoho životních zklamání je od lidí, co nezjistili, jak blízko byli úspěchu, kdyby to nevzdali.",
"Když něco opravdu chceš, celý vesmír se spojí, abys to mohl uskutečnit.",
"Giving up is gay/ sensei WU", "nword is for gay/ Radek"
];
btn.addEventListener("click", function() {
    var randomQuote = quotes[Math.floor(Math.random()* quotes.length)]
    output.innerHTML = randomQuote;
    
    if (randomQuote == last) {
        return;
    } else {
        last.length = 0;
        document.getElementById("text").innerHTML = randomQuote;
        last.push(randomQuote);
    }
})
