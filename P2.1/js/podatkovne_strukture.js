// Polja
var seznamStevil = [3, 4, 5, 7, 11, 18];
console.log(seznamStevil[1]);
console.log(seznamStevil[1 - 1]);

// Metode
var niz = "Krneki";
console.log(typeof niz.toUpperCase);
console.log(niz.toUpperCase());

// Objekti
var dan1 = {
  veverica: false,
  dogodki: ["delo", "drevo", "pica", "tek", "TV"]
};
console.log(dan1.veverica);
console.log(dan1.volk);
dan1.volk = false;
console.log(dan1.volk);
delete dan1.volk;
console.log("volk" in dan1);
console.log("veverica" in dan1);

// Dnevnik
var dnevnik = [
  {
    dogodki: ["delo", "drevo", "pica", "tek", "TV"],
    veverica: false
  }, {
    dogodki: ["delo", "sladoled", "travnik", "lasagna", "drevo", "umivanje zob"],
    veverica: false
  }, {
    dogodki: ["vikend", "kolesarjenje", "odmor", "arašidi", "pivo"],
    veverica: true
  }
];
console.log(typeof dnevnik);

// Spreminjanje vrednosti
var objekt1 = {vrednost: 10};
var objekt2 = objekt1;
var objekt3 = {vrednost: 10};

console.log(objekt1 == objekt2);
console.log(objekt1 == objekt3);

objekt1.vrednost = 15;
console.log(objekt2.vrednost);
console.log(objekt3.vrednost);
//to je bilo dodano z moje strani
objekt2.vrednost = 3;
console.log(objekt2.vrednost);
console.log(objekt1.vrednost);

// Seznam
var seznam = {};
seznam.prvi = 1;
seznam.drugi = 2;
console.log(seznam);

// Metode na poljih
var vrednosti = [2, 4, 6, 8, 10, 12, 14];
console.log(vrednosti);
vrednosti.push(16);       // Doda element na konec in vrne novo dolžino
console.log(vrednosti);
vrednosti.pop();          // Izbriše zadnji element in ga vrne
console.log(vrednosti);
vrednosti.shift();        // Izbriše prvi element in ga vrne
console.log(vrednosti);
vrednosti.unshift(2);     // Doda element na začetek in vrne novo dolžino
console.log(vrednosti);
console.log(vrednosti.indexOf(10));   // Vrne indeks prve pojavitve elementa v polju
console.log(vrednosti.slice(2,5));    // Vrne vmesne elemente v obliki polja

// Nizi
var mojNiz = "Krneki";
mojNiz.mojaLastnost = "vredost";
console.log(mojNiz.mojaLastnost);

console.log("posel".slice(1,5));      // Vrne podniz od začetnega do končnega indeksa
console.log("posel".indexOf("e"));    // Vrne indeks izbranega podniza
console.log("  posel \n ".trim());    // Odstrani nepotrebne presledke
console.log("posel".length);          // Vrne dolžino niza
console.log("posel".charAt(0));       // Vrne črko na indeksu
console.log("posel"[0]);              // Vrne črko na indeksu

// Objekt argumentov funkcije
function brezArgumentov() {}
brezArgumentov(1,2,3);                // Takšen klic je dovoljen

function trijeArgumenti(a, b, c) {}
trijeArgumenti();                     // Tudi takšen klic je dovoljen

function stevecArgumentov() {
  console.log("Podanih je bilo", arguments.length, "argumentov.");
}
stevecArgumentov("včeraj", "danes", "jutri", "pojutrišnjem", "nikoli");

function max(...stevila) {//s tem predvidimo, da bo argumentov več
  var rezultat = -Infinity;
  for (var stevilo of stevila) {
    if (stevilo > rezultat)
    rezultat = stevilo;
  }
  return rezultat;
}
console.log(max(13, 8, -22, 38, 7));

var niz = JSON.stringify({ime: "Dejan", rojen: 1980});
console.log(niz);
console.log(JSON.parse(niz).rojen);
