var imeDneva1 = function() {
  var imena = ["ponedeljek", "torek", "sreda", "četrtek", "petek",
               "sobota", "nedelja"];
  return function(stevilka) {
    return imena[stevilka-1];
  };
}();
console.log(imeDneva1(1));

(function() {
  function kvadrat(stevilo) { return stevilo * stevilo; }
  var sto = 100;
  console.log(kvadrat(sto));
})();

var imeDneva2 = function() {
  var imena = ["ponedeljek", "torek", "sreda", "četrtek", "petek",
               "sobota", "nedelja"];
  return {
    ime: function(stevilka) { return imena[stevilka-1]; },
    stevilka: function(ime) { return imena.indexOf(ime) + 1; }
  };
}();
console.log(imeDneva2.ime(imeDneva2.stevilka("nedelja")));

function izvediInVrniX(koda) {
  eval(koda);
  return x;
}
console.log(izvediInVrniX("var x = 2"));

var plusEna = new Function("n", "return n + 1;");
console.log(plusEna(4));
