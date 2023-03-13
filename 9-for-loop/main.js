/* 😨 Problem */

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);
console.log(11);
console.log(12);
console.log(13);
console.log(14);
console.log(15);
console.log(16);
console.log(17);
console.log(18);
console.log(19);
console.log(20);
console.log(21);
console.log(22);
console.log(23);
console.log(24);
console.log(25);
console.log(26);
console.log(27);
console.log(28);
console.log(29);
console.log(30);
console.log(31);
console.log(32);
console.log(33);
console.log(34);
console.log(35);
console.log(36);
console.log(37);
console.log(38);
console.log(39);
console.log(40);



console.log(1 * 2);
console.log(2 * 2);
console.log(3 * 2);
console.log(4 * 2);
console.log(5 * 2);


/* 💥 For Loop Syntax 

for(counter; condition; 💣increemnt/decrement) {
  // Your code here
}

💣 Infinite loop : se dimentichi la terza parte ovvero l'incremento o decremento

*/

for (let i = 5; i < 10; i++) {
  console.log(i);
}
console.log('Ciao Loop');
/* Se c'é l'incremento */
// 1. i = 0,  ? 0 < 10 ? true = console.log(i), 0 + 1
// 2. i = 1,  ? 1 < 10 ? true = console.log(i), 1 + 1
// 3. i = 2, ? 2 < 10 ? true = console.log(i), 2 + 1
// 4. i = 3, ? 3 < 10 ? true = console.log(i), 3 + 1 
// 5. i = 4, ? 4 < 10 ? true = console.log(i), 4 + 1 
// 6. i = 5, ? 5 < 10 ? true = console.log(i), 5 + 1 
// 7. i = 6, ? 6 < 10 ? true = console.log(i), 6 + 1 
// 8. i = 7, ? 7 < 10 ? true = console.log(i), 7 + 1 
// 9. i = 8, ? 8 < 10 ? true = console.log(i), 8 + 1
// 10. i = 9, ? 9 < 10 ? true = console.log(i), 9 + 1
// 11. i = 10, ? 10 < 10 ?  false = exit









/* Se dimentico l'incremento/decremento? Loop infinito!!! */
// 1. i = 0, ? 0 < 10 ? true = console.log(0)
// 2. i = 0, ? 0 < 10 ? true = console.log(0)
// 3. i = 0, ? 0 < 10 ? true = console.log(0)





/* Dom  Example */

const ul = document.querySelector("ul.list");
// const ul = document.querySelector("ul");

for (let index = 0; index < 100; index++) {
  const element = `<li class="box box--${index}">${index}</li>`;
  //ul.innerHTML += element;
  ul.insertAdjacentHTML('beforeend', element)

  //oppure cosa possiamo utilizzare per aggiungere elementi al DOM?
}


/* Loop a string */

//         0123456789   
let str = 'This is my string'; // str.length 17

/* for (var i = 0; i < str.length; i++) {
  alert(str.charAt(i));
}
 */
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}

// Read a string
console.log(str);
// read 
console.log(str[Math.floor(Math.random() * str.length )]);

