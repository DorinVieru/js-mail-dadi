// DICHIARO I DUE CONTATORI CASUALI
let num_utente = Math.floor(Math.random() *6 + 1);
let num_computer = Math.floor(Math.random() * 6 + 1);

console.log(num_utente + " " + "Punteggio utente");
console.log(num_computer + " " + "Punteggio computer");

// DICHIARO LA CONDIZIONE PER VERIFICARE IL VINCITORE
if (num_utente > num_computer) {
    console.log("Hai vinto");
}

else if(num_utente < num_computer){
    console.log("Hai perso, peccato");
}
else{
    console.log("Pareggio")
}

console.log(message);