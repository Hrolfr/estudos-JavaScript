/*1-Introdução ao JavaScript 
a- Introdução ao JavaScript*/

/*Formas de linkar o js no html:
ir no body e colocar o script,e lá iniciar o código.
*/

//Strings e números

//Exemplo 1
/*var nome= "Rafael Galleani"; 
ou: 
alert("Bem vindo + nome");
alert (`Bem vindo ${nome}` );  */


/*Exemplo 2
var nome= "Rafael Galleani"; 
var idade= 29;
ou:
alert(nome + "tem" + idade + "anos");
alert (`Bem vindo ${nome} ${idade}` );*/

/*Exemplo 2.1
var nome = "Rafael Galleani"; 
var idade = 29;
var idade2 =10;
alert(idade + idade2); ele soma*/

/*Exemplo 2.2
var nome = "Rafael Galleani"; 
var idade = "29";
var idade2 ="10";
alert(idade + idade2); devolve 2910
console.log(nome);
console.log(idade + idade2);
gera:
Rafael Galleani 
29
 */

/*Exemplo 2.3
 var frase = "Japão é o melhor time do mundo"
 console.log(frase);
 console.log(frase.replace("Japão", Brasil));
 ou:
 alert(frase.replace("Japão","Brasil"));
 eles trocam Japão por Brasil */

 /*Exemplo 2.5
 console.log(nome);
 console.log(idade + idade2);
 console.log(frase.toUpperCase()); deixa tudo em caixa alta
 e
console.log(frase.toLowerCase());
  */

/*Exemplo 2.4
var nome = "Rafael Galleani"; 
var n1 = 5;
var n2 =3; 
console.log(n1 * n2); multiplica */


/*b-Array e Dicionário 
está no index.html*/

//c-Condicionais,laços de repetição 

/*newFunction();

function newFunction() {
  newFunction_1();

  if (true) {
    console.log('a sabrina é tchola');
  }


  if (true) {
    console.log('a sabrina é tchola ao quadrado');
  }*/

  /*Exemplo 4
  var idade = 29;
  var idade2 = 10;
  alert(idade + idade2);*/

  /*Exemplo 5
  var idade = "12";
  var idade2 = "125";
  alert(idade + idade2);*/

  /*Exemplo 6
  var number = 25;
  var numer2 = 51;
  alert(number + numer2);*/

  /*Exemplo 7
  var fruta = "melao";
  var fruta2 = "laranja";
  alert("delicia" + fruta + fruta2);
  typeof (melao); */

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
  //Tirar o último elemento  */
  
  /*
  var lista = ["maça", "pera", "laranja"];
  console.log(lista);
  lista.push("uva");
  console.log(lista);
  lista.pop();
  console.log(lista.lenght);
  //Mostra a lenght 3 e 4
  //Adicionando o alert
  alert(lista);
  /*Mostra:
  maça,pera,laranja*/
  //Minha tentativa
  /*var lista = ["tomate" , "brócolis" , "couve" , "aspargos"];
  console.log (lista [3]);
  lista.push("cenoura" , "pimenta");
  console.log (lista);
  alert(lista);*/
 
  /* b-Array e Dicionário 
var lista = ["maça", "pera", "laranja"];
console.log(lista[1]);
alert(lista[1]);
ambos devolvem a pera,pois ela é o índice 1

caso 2:
var lista = ["maça", "pera", "laranja"];
lista.push("uva");
console.log(lista); cria a uba e adiciona no último índice

caso 3: quero tirar um item da lista
var lista = ["maça", "pera", "laranja"];
lista.pop();
console.log(lista); tirou a laranja

caso 3: ver o tamanho da lista
console.log(lista.length);

caso 4: reverse
console.log(lista.reverse());
ele inverte a ordem 

caso 5: 
console.log(lista[0]); devolveu maça
console.log(lista.toString()[0]); devolveu a m

caso 6: c não quer que a lista fique separada por vírgula,então:
console.log(lista.join(" - ")); separa por traço,pipeline,espaçotransforma em string
console.log(lista.join(" | ")); pipeline
console.log(lista.join("  ")); espaço
console.log(lista.join("")); junta todos*/
  
  /*var lista = ["tomate", "brócolis", "couve", "aspargos"];
  lista.pop("aspargos");
  console.log(lista);
  alert(lista);
  //lista.push("cenoura" , "pimenta");
  //Condicionais,laços de repetição e gate
  var idade = 18;
  if (idade > 18) {
    alert("maior de idade");
  } else {
    alert("menor de idade");
  }

  //Devolveu: "menor de idade".Menor de idade?Mas tenho 18! logo:
  var idade = 18;
  if (idade >= 18) {
    alert("maior de idade");
  } else {
    alert("menor de idade");
  }

  //Deu: "maior de idade"
  var idade = 18;
  var idade = prompt("Qual é a sua idade?");
  if (idade >= 18) {
    alert("maior de idade");
  } else {
    alert("menor de idade");
  }

  //FUNCIONOU!
  //Teste
  var nome = "sabrina";
  if (nome = "sabrina"){
    alert("você é tchola");
  }
 //Certinho

  //Com o prompt
  var nome = "sabrina";
  var nome = prompt("Qual é o seu nome?");
  if (nome = "sabrina"){
    alert("tchola");
  }
  //Certo

    var nome = "sabrina";
    var nome = prompt("Qual é o seu nome?");
    if (nome != "sabrina")
      ; {
      alert("oi estranho?");
    }

    // Apareceu o "oi estranho"
    var nome = "gustavo";
    var nome = prompt("Qual é o seu nome?");
    if (nome = "gustavo")
      ; {
      alert("oi oi rsrs");
    }

    //KKKKKKKKKK
    //Inverso
    var nome = "gustavo";
    var nome = prompt("Qual é o seu nome?");
    if (nome != "gustavo")
      ; {
      alert("oi");
    }
    //Funcionou
    //Funcionou
  }
*/

/* Estruturas de repetição:
a-while

var count = 0;
while (cont < 5){
  console.log(count);
  count = count + 1
} conta de 0té 4 d

se: 
var count = 0;
while (cont <= 5){
  console.log(count);
  count = count + 1 
};  imrpime do 0 até o 5

var count = 0;
while (cont <= 5){
  console.log(count);
  count ++ faz o mesmo que o  de  cima (recebe ele mesmo + 1)
};

ou:
var count = 0;
while (cont <= 5){
  console.log(count);
  alert(count);
  count ++  usa o alert pra contar
};

b-for

var count;
for(count = 0; ount <= 5,count ++){
  alert(count);
}

var count;
for(count = 1; ount <= 5,count ++){
  alert(count); inicia do 1
}

*/ 

/* Date

var d = new Date();
alert(d); dá a data

var d = new Date();
alert(d.getMonth()+1); dá o número do mes


alert(d.getMinutes()); 
alert(d.getHours());
alert(d.getDay()); 
 */

 //2-Desenvolva páginas web com JS
 //A-Desenvolva páginas web com JS 

//Funções:

 /* caso  1:
 function soma(n1+n2){
   return n1+n2;
}
   alert(soma(5, 10));
 Gera 15 */ 

 /* caso  2:
 function soma(n1+n2){
   return n1+n2;
}

function setReplace(frase, nome, novo_nome){
   return frase.Replace(nome, novo_nome);
}

   alert(soma(5, 10));
   alert(setReplace("Vai Japão", "Japão", "Brasil")); gera 15 e "Vai Brasil"
  */

  //Varíaveis
  /*function validaIdade(idade){
    var validar;
  if (idade >= 18){
    validar = true;
  }else{
    validar = false;
  }
  return validar;

}

var idade = prompt("Qual sua idade?");
console.log(validarIdade(idade)); local */ 


  /*sem var 
  function validaIdade(idade){
  if (idade >= 18){
    validar = true;
  }else{
    validar = false;
  }
  return validar;

}

var idade = prompt("Qual sua idade?");
validaIdade(idade);
console.log(validarIdade(idade));
 sem o var ele é pego fora da função,global */

  