'use strict';

//--------------------GLOBAL VARIABLES/IMPORTS
let allProducts = [];
let imageOne = document.getElementById('productOne');
let imageTwo = document.getElementById('productTwo');
let imageThree = document.getElementById('productThree');

let clicks = 0;
let maxClicks = 25;

//--------------------CONSTRUCTORS

// Constructor Function for Product
function Products (name, image) {
    this.name = name;
    this.image = 'assets/' + image;
    this.timesShow = 0;
    allProducts.push(this)
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
new Products('sweep', 'sweep.jpeg');
new Products('tauntaun', 'tauntaun.jpeg');
new Products('unicorn', 'unicorn.jpeg');
new Products('water-can', 'water-can.jpeg');
new Products('wine-glass', 'wine-glass.jpeg');

console.log(allProducts);

//--------------------CONSTRUCTOR METHODS

// Prototype Function for Generating Random Images
function generateRandomImage () {
    let position = Math.floor(Math.random() * allProducts.length);
    imageOne.src = allProducts[position].image;
    imageOne.alt = allProducts[position].name;
    imageTwo.src = allProducts[position].image;
    imageTwo.src = allProducts[position].image;
    imageThree.src = allProducts[position].image;
    imageThree.src = allProducts[position].image;
}

   
    // console.log(allProducts[position]);

console.log(imageOne);
generateRandomImage();
