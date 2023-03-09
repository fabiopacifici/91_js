const fruits = 'Apple';
let text;

// Apple === Banana ? Banana is good : 👇
// Apple === Orange ? Iam not a fan of oranges : 👇
// default: I have never hjeader of that fruit.

/* switch (fruits) {

  case "Banana":
    text = "Banana is good!";
    break;

  case "Orange":
    text = "I am not a fan of orange.";
    break;

  default:
    text = "I have never heard of that fruit.";

}

console.log(text); */

// true === (fruits.length > "Banana".length) ? Its longer than banana : 👇
// true === (fruits.length > "Orange".length) ? Its longer than orange : 👇
// default: I dont know"


switch (true) {

  case fruits.length > "Banana".length:
    text = "Its longer than Banana";
    break;

  case fruits.length > "Orange".length:
    text = "Its longer than Orage";
    break;

  default:
    text = "I dont know";

}
