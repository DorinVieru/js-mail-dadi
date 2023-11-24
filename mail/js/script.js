// INSERIRE IL PROMPT PER PERMETTERE L'INSERIMENTO DELLA MAIL
let mail = prompt("Inserisci la tua mail");

// CREO ARRAY CON LISTA MAIL
let mails = ["sono@latuamail.com", "info@latuamail.com", "dorin@latuamail.com", "sono@lamiamail.com", "si@no.com"];

let message;

// DICHIARO LA VARIABILE FLAG PER VERIFICARE SE LA VARIABILE E' CORRETTA
let flag = false;

// CREO LA CONDIZIONE PER VERIFICARE LA CORRETTA MAIL
for (let i=0; i<mails.length; i++){
    if(mail == mails[i]){
        flag = true;
    }
}

// VERIFICO LA CONDIZIONE
if (flag == true){
    message = "Sei autorizzato. Bentornato/a";
    document.getElementById("autorizzato").innerHTML = message;
    console.log(message);
}
else{
    message = "Non sei autorizzato/a ad accedere a questa area riservata. Fuori!"
    document.getElementById("non").innerHTML = message;
    console.log(message);
}