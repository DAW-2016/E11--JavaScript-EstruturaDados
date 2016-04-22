var diario = {
    data_registro:[],
    texto:[]
};

var novoRegistro = function (text,data) {

    diario.data_registro.push(data);
    diario.texto.push(text);
}


var visualizarRegistros = function(){

    for(var i = 0; i < diario.data_registro.length; ++i){
        console.log("----------------------------------------------\n");
        console.log("Data do registro: " + diario.data_registro[i]);
        console.log("Registro: " + diario.texto[i]);
        console.log("\n----------------------------------------------");
    }
}


do{

    var escolha =  prompt("Novo registro - 1\nVisualizar resgristros - 2");


    switch (escolha){
        case "1":

            now = new Date;
            var agora = now.getDate() + "/" + (now.getMonth() + 1) +"/" +now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes() + ":"+ now.getSeconds();
            novoRegistro(prompt("Digite seu texto"),agora);

            break;
        case "2":
            visualizarRegistros()
            break;
        default:
            confirm("Opção invalida");
            break;
    }
}while(confirm("Deseja continuar:"));