// JavaScript ES6 essencial  

// Função normal

function soma (a,b){
return a+b;
}

//Função currying

function soma (a){
    return function (b){
        return a+b;
    }
   
   }
   const soma2= soma (2)
   console.log(soma2(2));
   console.log(soma2(3));
   console.log(soma2(4));
   console.log(soma2(5));

   /*Retornou 4:
    ƒ (b){
        return a+b;
    }*/

//Hoisting de variáveis

function fn(){
    console.log (text);
    var text='Exemplo';
    console.log (text);
}
fn();

//Devolveu "Exemplo e 2 undefineds"

//Hoisting de função
function fn(){
    log('Hoisting de função')
        function log (value){
        console.log(value);
    }
}
fn();

//Devolve Hoisting de função

