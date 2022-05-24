  var matriz = [12,22,44,55];
  console.log("quantidade de elementos da minha matriz: " + matriz.length);
  
function calcularMedia(){
  var soma;
  soma = matriz[0] + matriz[1] + matriz[2] + matriz[3];
  console.log("a soma é : " + soma);
  var media;
  media = soma/matriz.length;
  console.log("a média é: " + media);
}

function setup() 
{ 
  calcularMedia();
  createCanvas(400,400);
}

function draw() 
{
background(51);
}

