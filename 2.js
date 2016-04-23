function deepEqual(objectA,objectB){return JSON.stringify(objectA) === JSON.stringify(objectB)}

var a = {pessoa :"augusto",professor :"joao",desejo :"estagio"};
var b = {pessoa :"augusto",professor :"joao",desejo :"estagio"};

console.log(deepEqual(a,b));
