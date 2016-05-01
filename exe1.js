function imprime (strings) {
  for (var i = 0; i < strings.length - 1; i++) {
    confirm("Palavra normal: " + strings[i]);
    confirm("Palavra invertida: " + strings[i].split("").reverse().join(""));
  }
}

var i = 0;
var strings = [];

while(true) {
  strings[i] = prompt("Digite a string ou cancele o processo clicando em cancelar");
  if(strings[i]!=null) {
    i++;
  }
  else {
    break;
  }
}

imprime(strings);
