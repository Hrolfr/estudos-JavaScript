//Exemplos do Rafael Galleani (professor)

/*Formas de linkar o js no html:
ir no body e colocar o script,e lá iniciar o código.
*/

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

 /*Exemplo 2.4
 console.log(nome);
 console.log(idade + idade2);
 console.log(frase.toUpperCase()); deixa tudo em caixa alta
 e
console.log(frase.toLowerCase());
  */


/*Exemplo 3 
newFunction();

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
  if (nome = "sabrina")
    ; {
    alert("você é tchola");
  }

  //Certinho
  //Com o prompt
  var nome = "sabrina";
  var nome = prompt("Qual é o seu nome?");
  if (nome = "sabrina")
    ; {
    alert("tchola");

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
