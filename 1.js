function reverse(s){
    return s.split("").reverse().join("");
}

function rev_str(matring){
var result = [];
  for (var i = 0;i < matring.length;i++)
    result.push(reverse(matring[i]));
return result;
}
var str = ["augusto","joao","estagio","concidencia??"];
console.log(rev_str(str));
