/*
#1
var nome= "Lucas";
var segundoNome= "Linux";

alert(`Bem vindo ${nome} ${segundoNome}`);
(funciona) */

/*
#2
var nome= "Lucas";
var idade= 40;

alert (`Bem vindo ${nome} ${idade}`);*/

/*
#2.1
var numA= 1;
var numB= 3;
var numC= 6;

alert (`${numA} ${numB} ${numC}`);
devolve 1 3 6 e mesmo sendo string,dá na mesma */


/*
#3
var num1= 1;
var num2= 3;
var num3= 6;

console.log (num1 + num2 + num3);
devolve 10*/

/*
#4
var num1= 1;
var num2= 3;
var num3= 6;

alert (num1 + num2 + num3);
gera 10*/


/*
#4.1
var num1= "1";
var num2= "3";
var num3= "6";

alert (num1 + num2 + num3); 
gera 136*/


//Teste sem exemplos

/*(() => {
    const exemplo = "Essa variável";
  
    const funcao1 = () => {
      alert(`Será lembrada aqui: ${exemplo}`);
  
      return () => {
        alert(`Aqui também: ${exemplo}`);
  
        return () => {
            alert(`Acredito que já entendemos o que é Closure: ${exemplo}`);
        };
      };
    };
  
    funcao1()()();
  })();
  funcionou
  */
  
 /* (() => {
 
    const food = "batata";

    const funcao1 = () => {
    
    if (food = batata )
    ;{

       alert(`I want some: ${food}`); 

    }

    }
o console repetiu
  })*/

  
  /*#1 closure certin
  function giveLunch() {
     var food = "kake";
  function displayLunch(){
      alert(food);
  }
     return displayLunch;
  }

  var myLunch = giveLunch();
  myLunch();*/


  /*
  #2 deu certo
  function dumbDumb() {
      var IQ = "you are dumb";
  function callIt(){
      alert(IQ);
  }
  return callIt;
 } 

 var dumb = dumbDumb();
 dumb(); */

 /*
 #3
 function gotNumber() {
     var num = 13;
 function useNumber(){
     alert(num);
 }
 return useNumber;    
}
var num = gotNumber();
num(); */


/*
#4 funcionou!
 function giveName(){
    var navn = prompt ("Hva navn de?");
function gotName(){
    if (navn === "Sabrina"){
        alert("Hallo og welkkomen!");
    }else{
        alert("Welkkomen");
    } 
}    
return gotName;
}
var heter = giveName();
heter();
se eu colocar (navn = Sabrina) o corretor vai devolver "Hallo og welkkomen".Se eu quiser que fique certo,devo colocar o: === */


/*
#5 funcionou!
 function giveName(){
    var navn = "Sabrina";
    var navn = prompt ("Hva navn de?");
function gotName(){
    if (navn === "Sabrina"){
        alert("Hallo og welkkomen!");
    }else{
        alert("Welkkomen");
    } 
}    
return gotName;
}
var heter = giveName();
heter(); */
   
/* #6 
function write(){
    var writing = prompt ("Which pet do you like the most?");
function writeDown(){
    if (writing == "dog"){
     alert("They're cool!");
    }
    if (writing == "all"){
        alert("How cute!"); 
    } else  (writing == "none");{ 
         alert("Oh,so you don't like pets...");      
           } 
        } return writeDown;
    }
var writeUp = write();
writeUp(); */

//Currying 

//exemplos:

/*
Basic:

const sum = x => y => x + y;

//returns 3
sum (2)(1);

// returns a function y => 2 + y
sum (2);

*/

// 18/04/21 testes sobre o curso de JS avançado

/*var sum = (a, b) => {
console.log(sum(5, 15));
}*/

/*var sum = (a, b) => {

    if (a > b){
        console.log('Oi corno!');
    } return a + b;
}

console.log(sum(6, 4));*/

//estudo com conhecimentos do novo curso de JS

//21/04

/*var kake = (bolo) => bolo;

console.log(kake); devolveu: (bolo) => bolo*/

/*var kake = (bolo) => bolo;

console.log(bolo); Uncaught ReferenceError: bolo is not defined
at <anonymous>:3:13 */