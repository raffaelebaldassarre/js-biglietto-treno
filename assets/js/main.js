var chilometri;
var età;
var prezzoFisso;
chilometri = Number(prompt("Quanti chilometri percorrerai?"));
età = Number(prompt("La sua età?"))
prezzoFisso = chilometri * 0.21;

//console.log(prezzoFisso);


if (età < 18) {
  //console.log(prezzoFisso *80/100);
  alert("Lei paga " + prezzoFisso *80/100 + "€");
} else if (età > 65) {
  //console.log(prezzoFisso *60/100);
  alert("Lei paga " + prezzoFisso *60/100 + "€");
} else {
  //console.log(prezzoFisso);
  alert("Lei paga " + prezzoFisso + "€");
}
