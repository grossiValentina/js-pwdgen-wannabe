// RACCOLTA DATI

// richiesta nome
const nome = prompt("Come ti chiami?");
console.log(nome, typeof nome);

// richiesta cognome 
const cognome = prompt("qual è il tuo cognome?");
console.log(cognome, typeof cognome);

// richiesta colore preferito 
const colore = prompt("qual è il tuo colore preferito?");
console.log(colore, typeof colore);

// Aggiunta del numero 21
const numero = 21;
console.log(numero, typeof numero);

// LOGICA DEL PROGRAMMA

// elaborazione della password
const password = `${nome}${cognome}${colore}${numero}`;
console.log(password);

// OTPUT
const result = `Ciao ${nome} la tua password generata è: ${password}`
console.log(result);
document.getElementById("result").innerHTML = result


