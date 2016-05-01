function deepEquals(objA,objB) {
  if (JSON.stringify(objA) === JSON.stringify(objB)) {
    return true;
  }
  return false;
}

var pessoa1 = {
  nome: "Marcelo",
  sexo: "Masculino",
  idade: 17
};

var pessoa2 = {
  nome: "Joao",
  sexo: "Masculino",
  idade: 27 //chutei :D
};

var pessoa3 = {
  nome: "Marcelo",
  sexo: "Masculino",
  idade: 17
};

console.log(deepEquals(pessoa1,pessoa2));
console.log(deepEquals(pessoa1,pessoa3));
