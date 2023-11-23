// INSERIRE IL PROMPT PER PERMETTERE L'INSERIMENTO DELLA MAIL
let mail = prompt("Inserisci la tua mail");

let mails = ["sono@latuamail.com", "info@latuamail.com", "dorin@latuamail.com", "sono@lamiamail.com", "si@no.com"];

let message;

for (let i=0; i<mails.length; i++){
    if(mail == mails[i]){
        message = "Sei autorizzato. Bentornato/a";
        // document.getElementById("autorizzato").innerHTML = message;
    }
    else{
        message = "Non sei autorizzato/a ad accedere a questa area riservata. Fuori!"
        // document.getElementById("non").innerHTML = message;
    }
}

console.log(message);