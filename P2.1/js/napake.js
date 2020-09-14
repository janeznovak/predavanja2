function iskanjeTezave1() {
  "use strict";
  for (s = 0; s < 10; s++)   // Manjka 'var'
    console.log("Juhuu ...");
}
//iskanjeTezave1();

function iskanjeTezave2() {
  "use strict";
  function Oseba(ime) { this.ime = ime; }
  var dejan = Oseba("Dejan");               // Manjka 'new'
}
//iskanjeTezave2();

function Vektor(x, y) {
  this.x = x;
  this.y = y;
}
Vektor.prototype.dodaj = function(drugi) {
  return new Vektor(this.x + drugi.x, this.y + drugi.y);
};
function testirajVektor() {
  var v1 = new Vektor(10, 20);
  var v2 = new Vektor(-10, 5);
  var v3 = v1.dodaj(v2);

  if (v1.x !== 10) return "napaka: x lastnost";
  if (v1.y !== 20) return "napaka: y lastnost";
  if (v2.x !== -10) return "napaka: negativna x lastnost";
  if (v2.y !== 5) return "napaka: y lastnost iz drugega";
  if (v3.x !== 0) return "napaka: x lastnost iz rezultata";
  if (v3.y !== 25) return "napaka: y lastnost iz rezultata";
  return "vse je OK";
}
console.log(testirajVektor());

function vprasajZaSmer(vprasanje) {
  var odgovor = prompt(vprasanje, "");
  if (odgovor.toLowerCase() == "levo") return "L";
  if (odgovor.toLowerCase() == "desno") return "D";
  throw new Error("Napačna smer: " + odgovor);
}
function poglej() {
  if (vprasajZaSmer("V katero smer?") == "L")
    return "hišo";
  else
    return "dve grdi žabi";
}
try {
  console.log("Trenutno vidiš " + poglej() + ".");
} catch (napaka) {
  console.log(napaka);
} finally {
  console.log("Morebitno čiščenje, zaradi napačnih podatkov.");
}
