/* 

Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/


//const number_1 = prompt('type a number')

let sum = 0;
for (let i = 0; i < 5; i++) {
  let numb = Number(prompt('type a number'))
  sum+= numb // sum = sum + numb
}
console.log(sum);


