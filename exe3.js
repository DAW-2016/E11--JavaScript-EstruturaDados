function registro(data,texto) {
  this.data = data;
  this.texto = texto;
}
function diario () {
  this.registros = [];
  this.novoRegistro = function(data,texto) {
    var registrar = new registro(data,texto);
    this.registros.push(registrar);
  }
  this.visualizarRegistros = function() {
    //var j = 0;
    for(var i = 0; i < this.registros.length; i++) {
      /*for (var j in this.registros[i]) {
        console.log(this.registros[i].hasOwnProperty(j))
      }*/
      console.log(this.registros[i]);
    }
  }
}

var meuDiario = new diario();

while(true) {
  var data;
  var texto;
  var choice = prompt("1 - Adicionar registro\n2 - Visualizar registros\nOutro número - Sair");
  if (choice == 1) {
    meuDiario.novoRegistro(prompt("Digite a data: "), prompt("Digite o texto: "));
  }
  else if(choice == 2) {
    meuDiario.visualizarRegistros();
  }
  else {
    break;
  }
}
