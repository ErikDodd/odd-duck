'use strict';

//--------------------GLOBAL VARIABLES/IMPORTS
let allProducts = [];
let productContainer = document.getElementById('products');
let imageOne = document.getElementById('productOne');
let imageTwo = document.getElementById('productTwo');
let imageThree = document.getElementById('productThree');
let position = Math.floor(Math.random() * allProducts.length);

let clicks = 0;
let maxClicks = 25;

//--------------------CONSTRUCTORS

// Constructor Function for Product
function Products (name, image) {
  this.name = name;
  this.image = 'assets/' + image;
  this.timesShown = 0;
  this.clicks = 0;
  allProducts.push(this);
}

new Products('bag', 'bag.jpeg');
new Products('banana', 'banana.jpeg');
new Products('bathroom', 'bathroom.jpeg');
new Products('boots', 'boots.jpeg');
new Products('breakfast', 'breakfast.jpeg');
new Products('bubblegum', 'bubblegum.jpeg');
new Products('chair', 'chair.jpeg');
new Products('cthulhu', 'cthulhu.jpeg');
new Products('dog-duck', 'dog-duck.jpeg');
new Products('dragon', 'dragon.jpeg');
new Products('pen', 'pen.jpeg');
new Products('pet-sweep', 'pet-sweep.jpeg');
new Products('scissors', 'scissors.jpeg');
new Products('shark', 'shark.jpeg');
new Products('sweep', 'sweep.png');
new Products('tauntaun', 'tauntaun.jpeg');
new Products('unicorn', 'unicorn.jpeg');
new Products('water-can', 'water-can.jpeg');
new Products('wine-glass', 'wine-glass.jpeg');

console.log(allProducts);

//--------------------CONSTRUCTOR METHODS

// Prototype Function for Generating Random Images
function generateRandomNumber () {
  position = Math.floor(Math.random() * allProducts.length);
  // insert while loop (take out the random number generator after)
  imageOne.src = allProducts[position].image;
  imageOne.alt = allProducts[position].name;
  position = Math.floor(Math.random() * allProducts.length);
  imageTwo.src = allProducts[position].image;
  imageTwo.alt = allProducts[position].name;
  position = Math.floor(Math.random() * allProducts.length);
  imageThree.src = allProducts[position].image;
  imageThree.alt = allProducts[position].name;
  allProducts[position].views++;
  allProducts[position].views++;
  allProducts[position].views++;
}


function handleProductClicks(event) {
  alert('Please click on an image to select a product');
  clicks++;
  let clickProduct = event.target.alt;
  for (let i = 0; i < allProducts.length; i++)
    if (clickProduct === allProducts[i].name) {
      allProducts[i].clicks++;
      break;
    }
}

if (clicks === maxClicks) {
  productContainer.removeEventListener('click', handleProductClicks);
}

console.log(imageOne);
generateRandomNumber();

productContainer.addEventListener('click', handleProductClicks);
