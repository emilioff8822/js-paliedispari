/* Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma 

_________
- la funzione chiede all'utente di inserire una parola tramite la funzione promp

- Per vedere se una parola è palindroma si puo utilizzare uno switch, che confronta  il primo carattere della parola con l'ultimo, il secondo con il penultimo, ecc.
 Se dai confronti sono uguali, allora la parola è palindroma.

 - uso un ciclo for limitato a meta della parola e confronto i caratteri della parola

 -  dopo aver inizializzato la variabile palindroma a true con switch ottengo un caso che conferma che palindroma sia vera se i caratteri sono ugali, ed una situazione di default che indica che la parola non e' palindroma


*/

const pal = Palindroma();

function Palindroma() {
  

  let parola = prompt("Inserisci una parola:");


  let Palindroma = true;
  
  for (let i = 0; i < Math.floor(parola.length / 2); i++) {
    switch (parola[i]) {
      case parola[parola.length - 1 - i]:
        break;
      default:
        Palindroma = false;
        break;
    }
  }

  if (Palindroma) {
    console.log("La parola è palindroma!");
  } else {
    console.log("La parola non è palindroma.");
  }
}
