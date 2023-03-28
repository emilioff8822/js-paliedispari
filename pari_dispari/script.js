/* 
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.




-chiediamo all'utente di scegliere pari o dispari

- assegno la scelta opposta al computer usando l'OPERATORE TERNARIO

- chiedo all'utente di inserire un numero da 1 a 5

- creo un numero random da 1 a 5 per il computer

- definisco la funzione calcolapari che mi dice se un numero e' pari

- definisco la variabile somma come somma di numero utente e numero computer

--utilizzo la funzione calcola pari per verificare se la somma finale e' pari o dispari , uso nuovamente l'operatore ternario


- verifico se l'output e' uguale alla scelta utente (pari o dispari) per decretare chi ha vinto
*/


//utente sceglie pari o dispari
let sceltaUtente = prompt("Scegli pari o dispari");

console.log("L'utente ha scelto: " +  sceltaUtente);

//con operatore ternario il pc sceglie l'opposto

let sceltaComputer = (sceltaUtente === "pari") ? "dispari" : "pari";

console.log("Il computer ha scelto : " + sceltaComputer);

//l-utente sceglie un numero tra 1 e 5

let numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5"));


// genero un numero random per il computer

let numeroComputer  = Math.floor(Math.random() * 5) +1 ;

// con una funzione stabilisco se il numero e' pari o dispari

function  calcolaPari (numero) {

  return numero % 2 === 0 ;

  
}

// definisco la variabile somma come somma di numeroUtennte e numero computer;

let somma = numeroUtente + numeroComputer;

console.log("la somma dei numeri scelti dall ' utente dal computer e' : " + somma);


//utilizzo la funzione calcola pari per verificare se la somma finale e' pari o dispari usando l'operatore ternario



let output = calcolaPari(somma) ? "pari" : "dispari" ;

console.log("il risultato  della somma tra il numero scelto dall utente e quello scelto dal pc e' : " + output);


// verifico se l'output e' uguale alla scelta utente (pari o dispari) per decretare chi ha vinto

if (output === sceltaUtente) {

  console.log( "complimenti hai vinto, la somma tra i due numeri e' risultata : " + output +  " la scelta che avevi fatto tu .Sei stato fortunato. gioca con moderazione , il gioco d'azzardo e' una dipendeza")
}else {

console.log("Hai perso la somma tra i due numeri e' risultata"  + output );
}