/* 
'https://www.themoviedb.org/t/p/original/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg',
  'https://www.themoviedb.org/t/p/original/AhifyrSNkRVFMJ94CEMfBv1FaMz.jpg',
  'https://www.themoviedb.org/t/p/original/1xO2UnWyxoyTrdvVDXW276LaHQc.jpg',
  'https://www.themoviedb.org/t/p/original/9VdgIj9R9Z9dfDoO76v57V6FF6y.jpg'

 */

/* Create a slide show of images, when the user press the next button, slide to the next image, when the user press the prev button slide to the previous image  */



// Tools
// array
// const/let
// querySelector
// eventListener
// increment/descrement


// create an array with links to all images
const images = [
  'https://www.themoviedb.org/t/p/original/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg',
  'https://www.themoviedb.org/t/p/original/AhifyrSNkRVFMJ94CEMfBv1FaMz.jpg',
  'https://www.themoviedb.org/t/p/original/1xO2UnWyxoyTrdvVDXW276LaHQc.jpg',
  'https://www.themoviedb.org/t/p/original/9VdgIj9R9Z9dfDoO76v57V6FF6y.jpg'
]

// select the active image
let activeImage = 0

// select the images dom element where place all images
const imagesElement = document.querySelector('.slider > .images')
console.log(imagesElement);
// loop over the images and add a new img dom element
for (let i = 0; i < images.length; i++) {
  const imgSrc = images[i];
  const imgElement = `<img class="img-fluid ${i === activeImage ? 'active' : ''}" src="${imgSrc}" alt="">`
  console.log(imgElement);
  // InsertAjacentHTML
  imagesElement.insertAdjacentHTML('beforeend', imgElement)
  // InnerHTML (option2)

  //imagesElement.innerHTML += imgElement

  // document.createElement()  (option3)
 /*  const imgEl = document.createElement('img')
  imgEl.setAttribute('src', imgSrc )
  imgEl.setAttribute('class', `img-fluid ${i === activeImage ? 'active' : ''}`)
  imagesElement.append(imgEl) */
  
}


// select all slides
const slideImagesElements = document.querySelectorAll('.slider > .images > img')  
// listen for clicks on next button
const nextEl = document.querySelector('.next')
nextEl.addEventListener('click', function () {
  console.log('cliccato next');
  
  
  console.log(slideImagesElements); //array[index]
  // select the current slide
  const currentSlide = slideImagesElements[activeImage]
  console.log(currentSlide);
  // remove the active class from the active image
  currentSlide.classList.remove('active')
  // incremente the value of the activeImage variable
  activeImage++ // increment the value of activeImage of 1 every time we click on the next button
  // select the next slide
  console.log(activeImage);
  const nextImage = slideImagesElements[activeImage]
  // add the active class
  console.log(nextImage);
  nextImage.classList.add('active')

  
})

// listen for clicks on prev button
const prevEl = document.querySelector('.prev')
prevEl.addEventListener('click', function () {
  console.log('cliccato prev');

  console.log(slideImagesElements); //array[index]
  // select the current slide
  const currentSlide = slideImagesElements[activeImage]
  console.log(currentSlide);
  // remove the active class from the active image
  currentSlide.classList.remove('active')
  // incremente the value of the activeImage variable
  activeImage-- // increment the value of activeImage of 1 every time we click on the next button
  // select the next slide
  console.log(activeImage);
  const nextImage = slideImagesElements[activeImage]
  // add the active class
  console.log(nextImage);
  nextImage.classList.add('active')

})




/* Ternary Operator 

if (condizione) {

} else {

}

condition ? '' : ''*/