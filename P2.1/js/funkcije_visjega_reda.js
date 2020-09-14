// 1. rešitev problema
var skupaj = 0, stevec = 1;
while (skupaj <= 10) {
  skupaj += stevec;
  stevec += 1;
}
console.log(skupaj);

// 2. rešitev problema
//console.log(sum(range(1, 10)));

var stevila = [1, 2, 3];
for (var i = 0; i < stevila.length; i++) {
  var stevilo = stevila[i];
  console.log(stevilo);
}

function izpisiElement(polje) {
  for (var i = 0; i < polje.length; i++)
    console.log(polje[i]);
}
izpisiElement(stevila);

function obdelajElement(polje, akcija) {
  for (var i = 0; i < polje.length; i++)
    akcija(polje[i]);
}
obdelajElement(stevila, console.log);

var vsota = 0;
obdelajElement(stevila, function(stevilo) {
  vsota += stevilo;
});
console.log(vsota);

// Ustvarjanje nove funkcije
function vecjeOd(n) {
  return function(m) { return m > n; };
}
var vecjeOd10 = vecjeOd(10);
console.log(vecjeOd10(11));

// Spreminjanje druge funkcije
function klic(f) {
  return function(argument) {
    console.log("klicanje z", argument);
    var vrednost = f(argument);
    console.log("klicano z", argument, "- dobil", vrednost);
    return vrednost;
  };
}
klic(Boolean)(0);
klic(String)(0);

// Vplivanje na kontrolni tok
function razenCe(pogoj, posledica) {
  if (!pogoj) posledica();
}
function ponovi(iteracije, vrednost) {
  for (var i = 0; i < iteracije; i++) vrednost(i);
}
ponovi(3, function(n) {
  razenCe(n % 2, function() {
    console.log(n + " je sodo");
  });
});

function transparentnoOvijanje(f) {
  return function() {
    return f.apply(null, arguments);
  };
}
