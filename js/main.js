/*var nome= "Rafael Galleani"; 
alert (`Bem vindo ${nome}` ); */ 

/*var nome= "Rafael Galleani"; var idade= 29;
alert (`Bem vindo ${nome} ${idade}` );*/

/*newFunction();

function newFunction() {
    newFunction_1();

    if (true) {
        console.log('a sabrina é tchola ao quadrado');
    }


if (true){
console.log ('a sabrina é tchola ao quadrado')
}*/


   /* var idade = 29;
    var idade2 = 10;
    alert(idade + idade2);

    var idade= "12"
    var idade2= "125"
    alert (idade + idade2)*/

    /*var number= 25;
    var numer2= 51;
    alert (number + numer2)*/

  /* var fruta = "melao";
   var fruta2 = "laranja";
   alert ("delicia"  +  fruta  +  fruta2);
   typeof (melao);*/

   //Array e dicionário
  
  /* var lista =  [ "maça" , "pera" , "laranja"];
   console.log (lista); */
   

   // Me devolveu:
   //["maça", "pera", "laranja"]

  /* var lista =  [ "maça" , "pera" , "laranja"];
   console.log (lista [1]);
   alert (lista [1]);*/

   //Me devolveu pera

  /* var lista =  [ "maça" , "pera" , "laranja"];
   console.log (lista [2]);
   alert (lista [2])*/

   // Me devolveu laranja

   
  /* var lista =  [ "maça" , "pera" , "laranja"];
   console.log (lista [0]);
   alert (lista [0]) */

   // Me devolveu maça

   //Adicionar item na lista

   /* var lista =  [ "maça" , "pera" , "laranja"];
   console.log (lista);
   lista.push ("uva");
   console.log (lista);*/

   //Devolveu:
  // ["maça", "pera", "laranja"] e ["maça", "pera", "laranja", "uva"]

  //Tirar o último elemento 
  var lista =  [ "maça" , "pera" , "laranja"];
   console.log (lista);
   lista.push ("uva");
   console.log (lista);
   lista.pop()
   console.log (lista.lenght);
 //Mostra a lenght 3 e 4
 //Adicionando o alert
 
 alert (lista);
   /*Mostra: 
   maça,pera,laranja*/

   //Minha tentativa

/*var lista = ["tomate" , "brócolis" , "couve" , "aspargos"];
console.log (lista [3]);
lista.push("cenoura" , "pimenta");
console.log (lista);
alert(lista);*/

var lista = ["tomate" , "brócolis" , "couve" , "aspargos"];
lista.pop("aspargos");
console.log (lista);
alert(lista);
//lista.push("cenoura" , "pimenta");

//Condicionais,laços de repetição e gate

var idade = 18;
if (idade > 18){
alert ("maior de idade");
} else{
alert ("menor de idade");
}

//Devolveu: "menor de idade".Menor de idade?Mas tenho 18! logo:

var idade = 18;
if (idade >= 18){
alert ("maior de idade");
} else{
alert ("menor de idade");
}

//Deu: "maior de idade"
var idade = 18;
var idade = prompt ("Qual é a sua idade?");
if (idade >= 18){
alert ("maior de idade");
} else{
alert ("menor de idade");
}

//FUNCIONOU!

//Teste

var nome = "sabrina";
if (nome = "sabrina");{
alert ("você é tchola")
} 

//Certinho

//Com o prompt
var nome = "sabrina";
var nome = prompt ("Qual é o seu nome?");
if (nome = "sabrina");{
alert ("tchola");

//Certo

var nome = "sabrina";
var nome = prompt ("Qual é o seu nome?");
if (nome != "sabrina");{
 alert("oi estranho?");
}

// Apareceu o "oi estranho"

var nome = "gustavo";
var nome = prompt ("Qual é o seu nome?");
if (nome = "gustavo");{
 alert("oi oi rsrs");
}

//KKKKKKKKKK
//Inverso
var nome = "gustavo";
var nome = prompt ("Qual é o seu nome?");
if (nome != "gustavo");{
 alert("oi");
}
 
//Funcionou