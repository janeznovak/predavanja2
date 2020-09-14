// Opredelitev funkcije
const pozdrav = function() {
  console.log("Ne me motit', delam ...");
};

const potenca = function(osnova, eksponent) {
  var rezultat = 1;
  for (var stevec = 0; stevec < eksponent; stevec++)
    rezultat *= osnova;
  return rezultat;
};

const potencaMaloDrugace = (osnova, eksponent) => {
  var rezultat = 1;
  for (var stevec = 0; stevec < eksponent; stevec++) {
    rezultat *= osnova;
  }
  return rezultat;
};

pozdrav();
console.log(potenca(2, 10));
console.log(potencaMaloDrugace(2, 10));

// Parametri in kontekst
var x = "zunaj";

var f1 = function() {
  var x = "znotraj f1";
};
f1();
console.log(x);

var f2 = function() {
  x = "znotraj f2";
};
f2();
console.log(x);

// Ugnezdeni kontekst
const pokrajina = function() {
  var rezultat = "";
  const ravnina = function(dolzina) {
    for (var stevec=0; stevec < dolzina; stevec++)
      rezultat += "_";
  };
  const hrib = function(dolzina) {
    rezultat += "/";
    for (var stevec=0; stevec < dolzina; stevec++)
      rezultat += "'";
    rezultat += "\\";
  };

  ravnina(2);
  hrib(3);
  ravnina(4);
  hrib(2);
  ravnina(2);
  return rezultat;
};

console.log(pokrajina());

// Deklaracija funkcije
console.log("Pipi in Melkijad napovedujeta prihodnost: ", prihodnost());

function prihodnost() {
  return "Denar je še vedno poguba človeštva.";
}

// Opcijski parametri
const potencaPonovno = function(osnova, eksponent) {
  if (eksponent == undefined)
    eksponent = 2;
  var rezultat = 1;
  for (var stevec = 0; stevec < eksponent; stevec++)
    rezultat *= osnova;
  return rezultat;
};

console.log(potencaPonovno(4));
console.log(potencaPonovno(4, 3));

// Zaprtje
function mnozenje(faktor) {
  return function(stevilo) {
    return stevilo * faktor;
  };
}

var dvakrat = mnozenje(2);
console.log(dvakrat(5));

// Rekurzija
const potencaRekurzija = function(osnova, eksponent) {
  if (eksponent == 0)
    return 1;
  else
    return osnova * potencaRekurzija(osnova, eksponent - 1);
};

console.log(potencaRekurzija(2, 3));
