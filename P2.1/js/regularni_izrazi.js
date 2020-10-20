var ri1 = new RegExp("abc");
var ri2 = /abc/;

var ri3 = /C\+\+/;

console.log(/abc/.test("abcde"));
console.log(/abc/.test("abxde"));

console.log(/[0123456789]/.test("leta 1980"));
console.log(/[0-9]/.test("leta 1980"));

var riDatumCas = /\d\d\d\d-\d\d-\d\d \d\d:\d\d/;
console.log(riDatumCas.test("2090-10-21 10:56"));
console.log(riDatumCas.test("2090-okt-21 10:56"));

var riNiBinarno = /[^01]/;
console.log(riNiBinarno.test("11001000101101110101"));
console.log(riNiBinarno.test("11001000101101310101"));

console.log(/'\d+'/.test("'123'"));
console.log(/'\d+'/.test("''"));
console.log(/'\d*'/.test("'123'"));
console.log(/'\d*'/.test("''"));

console.log(/suu?per/.test("super"));
console.log(/suu?per/.test("suuper"));

var riDatumCasKrajse = /\d{4}-\d{1,2}-\d{1,2} \d{1,2}:\d{2}/;
console.log(riDatumCasKrajse.test("2017-10-21 10:56"));
console.log(riDatumCasKrajse.test("2017-1-8 4:56"));

console.log(/oho+(go+l)+/i.test("Ohoooogolgooolgolgooolgool"));

var ujemanje = /\d+/.exec("ena dva tri 100");
console.log(ujemanje);
console.log(ujemanje.index);

console.log(/'([^']*)'/.exec("Riba je rekla 'glup glup'."));

console.log(/tana/.test("Antananarivo"));
console.log(/\btana\b/.test("Antananarivo"));// \b<- je konec ali zacetek besede

var riZivali = /\b\d+ (pujs|krav|rib)(a|i|e|ov)?\b/;
console.log(riZivali.test("vseh 15 pujsov"));
console.log(riZivali.test("vseh 5 pujskrave"));

console.log("iti".replace("i", "a"));
console.log("iti".replace(/i/g, "a"));//vse i-je zamenjaj z a-ji. g najde vse not, je globalen

console.log(
  "Lavbič, Dejan\nGec, Sandi"
    .replace(/([\wčćžšđ]+), ([\wčćžšđ]+)/gi, "$2 $1"));//gi pomeni, da me ne zanima, ce je
                                                                           //z malo ali veliko

console.log("fakulteti fri in fe".replace(/\b(fri|fe)\b/g, function(niz) {
  return niz.toUpperCase();
}));

var zaloga = "1 limon, 10 paradižnikov in 115 jajc";
function minusEna(ujemanje, kolicina, enota) {
  kolicina = Number(kolicina) - 1;
  if (kolicina == 0)
    kolicina = "nič";
  return kolicina + " " + enota;
}
console.log(zaloga.replace(/(\d+) (\w+)/g, minusEna));

function odstraniKomentarje1(koda) {
  return koda.replace(/\/\/.*|\/\*[^]*\*\//g, "");
}
console.log(odstraniKomentarje1("1 + /* 2 */3"));
console.log(odstraniKomentarje1("x = 10;// deset!"));
console.log(odstraniKomentarje1("1 /* a */+/* b */ 1"));

function odstraniKomentarje2(koda) {
  return koda.replace(/\/\/.*|\/\*[^]*?\*\//g, "");//ta ? pomeni, da ko najde se ustavi
}
console.log(odstraniKomentarje2("1 /* a */+/* b */ 1"));

console.log(
  "Miha je en sumljiv osebek.".replace(
    new RegExp("\\b(" + "miha" + ")\\b", "gi"),
    "_$1_"));

var riStevilo = /\b(\d+)\b/g;
while (ujemanje = riStevilo.exec("Niz s 3 števili ... 42 in 88."))
  console.log("Našel število", ujemanje[1], "na položaju", ujemanje.index);
//^ ta znak je ne(negacija)