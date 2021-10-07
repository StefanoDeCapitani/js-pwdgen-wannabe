let nomeUtente;
let cognomeUtente;
let colorePreferitoUtente;
let passwordGenerata;

nomeUtente = prompt("Digita il tuo nome:");
cognomeUtente = prompt("Qual è il tuo cognome?");
colorePreferitoUtente = prompt("Il tuo colore preferito:");
passwordGenerata = nomeUtente + cognomeUtente + colorePreferitoUtente + "21";

alert("Password generata: " + passwordGenerata);
