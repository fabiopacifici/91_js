/* DOM Elemnts */

const element = document.getElementById("saluto");

/* Type of to check the data type of something */
// element è un DOM Object Element
console.log(typeof (element));

/* Query selectro */
const titleEl = document.querySelector('h1.title')
console.log(titleEl);



/* Class List */

titleEl.classList.add('py-2')
console.log(titleEl.classList);




/* Class Name */
// solo in lettura
console.log(titleEl.className);
// uso in scrittura
titleEl.className = 'mb-2'

console.log(titleEl.className);

// scrittura ma conservando il contenuto
titleEl.className = titleEl.className + ' mx-2'
// É come quello sopra ma piú compatto
//titleEl.className += 'mx-2'

console.log(titleEl.className);


/*  Inner HTML */

const containerEl = document.querySelector('.container')

// lettura
console.log(containerEl.innerHTML);
console.log(containerEl.innerText);

// scrittura

containerEl.innerHTML = "<div class='card'>Ciao</div>"

/* Style */


// lettura
console.log(titleEl.style.color)

// scrittura
titleEl.style.color = 'red'

console.log(titleEl.style.color)

console.log(titleEl.style.fontSize);


/* Value on input fields */

const inputEl = document.getElementById('username')

// lettura
console.log(inputEl.value);

// scrittura

inputEl.value = "sdlkgjdsfpogjsdf"
console.log(inputEl.value);


/* Functions */

// funtion declaration
function hello() {
  console.log('Hello');
}
// call the function

hello()
hello()
hello()
hello()
hello()

// anonyumous function
// non posso richiamare la funzione poerche non ha un nome
// function () {  }


/* EventListeners */

element.addEventListener('click', function() {
   console.log('Hai cliccato sull\'elemento ');
 });
