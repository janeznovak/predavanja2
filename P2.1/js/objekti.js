var ribica = {};
ribica.povej = function(izjava) {
  console.log("Ribica pravi '" + izjava + "'");
};
ribica.povej("Še sem živa.");

function povej(izjava) {
  console.log(this.tip + " ribica pravi '" + izjava + "'");
}
var zlataRibica = {tip: "Zlata", povej: povej};
var debelaRibica = {tip: "Debela", povej: povej};

zlataRibica.povej("Ojoj, danes sem pa preveč jedla!");
debelaRibica.povej("Lakom lačen.");

povej.apply(debelaRibica, ["Burp!"]);
povej.call({tip: "Starejša"}, "Ojoj, ta mladina nevzgojena.");

var prazno = {};
console.log(prazno.toString);
console.log(prazno.toString());

console.log(Object.getPrototypeOf({}) == Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype));

var prototipRibica = {
  povej: function(izjava) {
    console.log(this.tip + " ribica pravi '" + izjava + "'");
  }
};
var bojnaRibica = Object.create(prototipRibica);

bojnaRibica.tip = "Bojna";
bojnaRibica.povej("V napad!");

function Ribica(tip) {
  this.tip = tip;
}
bojnaRibica = new Ribica("Bojna");
var crnaRibica = new Ribica("Črna");
console.log(crnaRibica.tip);

Ribica.prototype.povej = function(izjava) {
  console.log(this.tip + " ribica pravi '" + izjava + "'");
};
crnaRibica.povej("Vsi ste pogubljeni ...");

class MorskiPes {
  constructor(tip) {
    this.tip = tip;
  }
  povej(izjava) {
    console.log(`${this.tip} morski pes pravi '${izjava}'`);
  }
}
var beliMorskiPes = new MorskiPes("Beli");
beliMorskiPes.povej("Te olupim, te pojem.");

Ribica.prototype.zobje = "majhni";
console.log(bojnaRibica.zobje);
bojnaRibica.zobje = "dolgi, ostri in okrvavljeni";
console.log(bojnaRibica.zobje);
console.log(crnaRibica.zobje);
console.log(Ribica.prototype.zobje);

var kopica = {
  elementi: ["paradižnik", "solata", "arašidi"],
  get visina() {
    return this.elementi.length;
  },
  set visina(vrednost) {
    console.log("Ignoriranje zahteve za nastavitev nove višine na", vrednost, ".");
  }
};
console.log(kopica.visina);
kopica.visina = 100;

Object.defineProperty(Ribica.prototype, "dolzinaTipa", {
  get: function() { return this.tip.length; }
});
var neonkaRibica = new Ribica("Neonka");
console.log(neonkaRibica.dolzinaTipa);
neonkaRibica.dolzinaTipa = 50;
console.log(neonkaRibica.dolzinaTipa);

console.log([1] instanceof Array);
console.log({} instanceof Object);
