var chilometri;
var età;
var prezzoFisso;
var prezzo;
var prezzoFinale;

chilometri = Number(prompt("Quanti chilometri percorrerai?"));
età = Number(prompt("La sua età?"));
prezzoFisso = 0.21;
prezzo = chilometri * prezzoFisso;



if (età < 18) {
  prezzoFinale = (prezzo *0.8);
} else if (età > 65) {
  prezzoFinale = (prezzo *0.6);
} else {
  prezzoFinale = prezzo;
}

alert("Lei pagherà per la tratta " + prezzoFinale.toFixed(2) + "€")
