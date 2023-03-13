const toLearn = [
  'HTML', // 0
  'CSS', // 1  
  'JS', // 2
  'Laravel' // 3
] // toLearn.lenght 4


/* Read array elemnts */
//console.log(toLearn[4]); // undefined

// Check array length
//console.log(toLearn.length);

// Read the last array element
//console.log(toLearn[toLearn.length - 1]); // Laravel 



const user = [
  'Lorenzo Catalano', // 0
  26, // 1
  [
    'Luca', // 0
    'Alex', // 1
    'Adam', // 2
    [
      1, //0
      2 // 1
    ] // 3
  ] // 2
];


/* console.log(user); // array ..
console.log(user[1]); // 26 */

const user_friends = user[2] // array..


/* Access array of array elements  */
/* console.log(user_friends[1]);
console.log(user[2][3][1]); */


// Read the array length

console.log(user.length)

/*  Add elements at the end of an array */
console.log(toLearn);

toLearn.push('Vuejs');
console.log(toLearn);

/* Remove the last element */
toLearn.pop();
console.log(toLearn);

/* Remove thefirst element */
toLearn.shift()
console.log(toLearn); // Array without HTML

/* add an element at the beginning  */
toLearn.unshift('XML')
console.log(toLearn);

/* Loop over array elements */

for (let i = 0; i < user.length; i++) {
  const element = user[i];
  console.log(element);
  
}
