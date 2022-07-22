document.getElementById("texto").innerHTML = "Meu primeiro <b> JS </b> !";
let data = new Date();
console.log(data);

//Mostrar o ano atual com 4 digitos
let ano = data.getFullYear();
console.log(ano);

//Mostrar o mes atual de 0 ate 11 sendo 0 janeiro e 11 Dezembro
let mes = data.getMonth();
console.log(mes);

//Dessa forma podemos mostrar o mes no formato escrito
const mesesDoAno =["Janeiro","Fevereiro","Marco","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]
let mesEscrito = mesesDoAno[data.getMonth()];
console.log(mesEscrito);

//Mostrar dia do mes de 1 ate 31
let diaMes = data.getDate();
console.log(diaMes);

//Mostrar dia da semana de 0 ate 6
let DiaSemana = data.getDay();
console.log(DiaSemana);

//Mostrar dias da semana por escrito
const diasDaSemana = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sabado"];
let diaSemanaEscrito = diasDaSemana[data.getDay()];
console.log(diaSemanaEscrito);

//Mostrar a hora no formato de 0 ate 23
let hora = data.getHours();
console.log(hora);

//Mostrar os minutos de 0 ate 59
let minutos = data.getMinutes();
console.log(minutos);

//Mostrar segundos de 0 ate 59
let segundos = data.getSeconds();
console.log(segundos);

//Mostrar milisegundos de 0 ate 999
let milisegundos = data.getMilliseconds();
console.log(milisegundos);

//Mostrar a data no padrao brasileiro - dia / mes / ano
let dataBR = data.toLocaleString('pt-BR',{dateStyle:'short'});
console.log(dataBR);

//Pegar os valores separados

d = new Date ();
diaMes = d.getMonth();
mes = d.getDay();
ano = d.getFullYear();

function addZero (x) { return x < 10 ? '0' + x : '' + x ; };

let dataPadraoBR = addZero(diaMes) + "/" + addZero(mes) + "/" + ano;
console.log(dataPadraoBR);

//Comparar datas menor ou maior ex vencimentos
var hoje = new Date();
var vencimento = new Date(2021,0,15);
if (hoje > vencimento){
    console.log("Sua conta esta vencida !");
} 
else{
    console.log("Ainda nao venceu, tudo certo ! ");
}

//A diferença em dia entre duas datas 
var dataInicial = new Date();
var dataFinal = new Date(2022,11,31);
var diferencaTempo = dataFinal.getTime() - dataInicial.getTime();
var diferencaDias = Math.ceil(diferencaTempo / (24*60*60*1000));

console.log(diferencaDias);
