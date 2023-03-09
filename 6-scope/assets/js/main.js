//alert('ciao');
let validation = true; // Global Scope
const wordA = "Word A"; // Global Scope
let wordB = "Word B"; // Global Scope

if (validation === true) {
  let wordC = "Word C"; // Block Scope
  //console.log(wordB); // <--- wordB 
  let wordB = "Word Custom B"; // <--- block scope
  console.log(wordA); // wordA 
  console.log(wordB); // wordB <--- block scope
  console.log(wordC); // wordC <--- block scope
}

console.log(wordA); // WordA
console.log(wordB); // WordB 
console.log(wordC); // not available <--- defined in the block scope
