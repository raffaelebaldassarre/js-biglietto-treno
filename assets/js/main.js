var chilometri;
var età;
var prezzoFisso;
var prezzo;

chilometri = Number(prompt("Quanti chilometri percorrerai?"));
età = Number(prompt("La sua età?"));
prezzoFisso = 0.21;
prezzo = chilometri * prezzoFisso;



if (età < 18) {
  //console.log(prezzoFisso *80/100);
  alert("Lei pagherà per la tratta " + prezzo.toFixed(2) *80/100 + "€");
} else if (età > 65) {
  //console.log(prezzoFisso *60/100);
  alert("Lei pagherà per la tratta " + prezzo.toFixed(2) *60/100 + "€");
} else {
  //console.log(prezzoFisso);
  alert("Lei pagherà per la tratta " + prezzo.toFixed(2) + "€");
}
