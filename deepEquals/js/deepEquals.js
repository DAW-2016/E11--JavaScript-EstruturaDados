var meuCarro = {
  marca: "Fiat",
  modelo: "Uno",
  ano: 2014,
  usado: false
};

var meuOutroCarro = {
  marca: "Fiat",
  modelo: "Uno",
  ano: 2014,
  usado: false
};

var meuOutroOutroCarro = {
  marca: "Fiat",
  modelo: "Uno",
  ano: 2016,
  usado: false
};

function mostrarProps(obj, nomeDoObj) {
  var resultado = "";
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
        resultado += i + "\n";
    }
  }
  return resultado;
}

var deepEquals = function(o1,o2){

    if(mostrarProps(meuOutroCarro,"meuOutroCarro") == mostrarProps(meuCarro,"meuCarro")){
        
        for(var i in o1){
               
            if(o1[i] != o2[i]){                   
                   return false;
               }
        }
        
        return true;
    }
    else{
        
        return false;
    }
        
}





if(deepEquals(meuCarro,meuOutroCarro)){
    console.log("Igual");
}
else{
    console.log("Diferente");
}


if(deepEquals(meuOutroCarro,meuOutroOutroCarro)){
    console.log("Igual");
}
else{
    console.log("Diferente");
}


