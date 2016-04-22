function map(f,v){
    
    for(i = 0; i < v.length; ++i){        
        f(v[i]);
    }
}


var imprimeReverso = function(v){
    
    
    var temp = '';
    var i = v.length;
    
    while (i > 0) {
        temp += v.substring(i - 1, i);
        i--;
    }
    
    confirm("Frase original: " + v);
    confirm("Frase ao contrario: " + temp);
}


var i = 0;
var frases = [];

do{
    
    frases[i] = prompt("Digite um string:(aperte \"Cancel\" para terminar a entrada)");
    ++i;
    
}while(frases[i - 1] != null);

frases.pop();

map(imprimeReverso,frases);