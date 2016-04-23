function registro (data,texto){
this.data = data;
this.texto = texto;
}
function diario (){
    this.novoRegistro = function (data,texto){
      var novo = new registro(data,texto);
      this.registros.push(novo);
    }
    this.visualizarRegistros = function (){
      for (var i = 0; i < this.registros.length;i++)
        console.log(this.registros[i]);
    }
    this.registros = [];
}
carlos = new diario();

carlos.novoRegistro("12/07/2014","tomarei bomba no coltec");
carlos.novoRegistro("13/07/2014","tomo bomba no coltec");
carlos.novoRegistro("14/07/2014","tomei bomba no coltec");


carlos.visualizarRegistros();
