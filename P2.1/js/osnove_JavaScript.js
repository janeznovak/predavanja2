// Vrednosti, podatkovni tipi in operatorji
console.log(8 * null);                // 0
console.log("5" - 1);                 // 4
console.log("5" + 1);                 // 51
console.log("pet" * 2);               // NaN
console.log(false == 0);              // true
console.log(null == undefined);       // true
console.log(null == 0);               // false

// Uporaba operatorja ||
console.log(null || "uporabnik");     // uporabnik
console.log("Dejan" || "uporabnik");  // Dejan

// Funkcije
var temperatura = 26;
console.log("Danes je temperatura", temperatura);

// Funkcije, ki vračajo vrednost
console.log(Math.min(13, 28));

// if...else stavek
var ocenaStudenta = Math.floor(Math.random() * 100);
console.log("Ocena študenta je " + ocenaStudenta + ".");
if (ocenaStudenta >= 49.50)
  console.log("Predmet ste opravili!");
else
  console.log("Predmeta niste opravili!");

  // Pogojni operator ?:
  console.log(ocenaStudenta >= 49.50 ?
    "Predmet ste opravili!" : "Predmeta niste opravili!");

  // Vgnezdeni if...else stavek
  if (ocenaStudenta >= 89.50)
    console.log("Oceno 10.");
  else if (ocenaStudenta >= 79.50)
    console.log("Ocena 9.");
  else if (ocenaStudenta >= 69.50)
    console.log("Ocena 8.");
  else if (ocenaStudenta >= 59.50)
    console.log("Ocena 7.");
  else if (ocenaStudenta >= 49.50)
    console.log("Ocena 6.");
  else {
    console.log("Ocena 5.");
    console.log("Več sreče prihodnjič!");
  }

  // switch stavek
  var stPik = Math.floor(Math.random() * 6) + 1;
  switch(stPik) {
    case 1:
      console.log(stPik + " pika");
      break;
    case 2:
      console.log(stPik + " piki");
      break;
    case 3:
    case 4:
      console.log(stPik + " pike");
      break;
    default:
      console.log(stPik + " pik");
      break;
  }

  // while stavek
  while (temperatura <= 30) {
    console.log(temperatura);
    temperatura += 2;
  }

  // for stavek
  for (var stevec = 1; stevec <= 4; ++stevec) {
    document.writeln("<p style='font-size:" + stevec +
      "ex'>HTML5 velikost pisave " + stevec + "ex</p>");
  }

  // do...while stavek
  do {
    console.log(temperatura);
    temperatura += 2;
  } while (temperatura <= 40);

  // break in continue
  for (var stevec = 1; stevec <= 10; stevec++) {
    if (stevec == 2)
      continue;
    if (stevec == 5)
      break;
    console.log(stevec);
  }
