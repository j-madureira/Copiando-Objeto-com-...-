//Objeto
let pessoa = {nome:"Jason",idade:23};

//Copiando o objeto original
let pessoaCopiaN = {...pessoa};

pessoaCopiaN.idade = 56;

console.log(`Nome: ${pessoa.nome} - idade: ${pessoa.idade}`);
console.log(`Nome: ${pessoaCopiaN.nome} - idade: ${pessoaCopiaN.idade}`);