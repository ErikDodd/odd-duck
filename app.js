'use strict';

//--------------------GLOBAL VARIABLES/IMPORTS
let allProducts = [];
const productNames = ['boots', 'bathroom', 'breakfast', 'bubblegum', 'chair', 'dog-duck', 'tauntaun', 'scissors', 'water-can', 'wine-glass', 'bag', 'banana', 'cthulhu', 'dragon', 'pen', 'pet-sweep', 'shark', 'sweep', 'unicorn'];
let productContainer = document.getElementById('products');
let resultButton = document.getElementById('results');
let imageOne = document.getElementById('productOne');
let imageTwo = document.getElementById('productTwo');
let imageThree = document.getElementById('productThree');


let totalClicks = 0;
let maxClicks = 25;

//--------------------CONSTRUCTORS

// Constructor Function for Product
function Products (name, image) {
  this.name = name;
  this.image = image;
  this.views = 0;
  this.clicks = 0;
  allProducts.push(this);
}

//--------------------CONSTRUCTOR METHODS

//  Creating All Products
function addAllProducts () {
  for (let i = 0; i < productNames.length; i++) {
    let currentItem = productNames[i];
    let productPath = `assets/${currentItem}.jpeg`;
    new Products(currentItem, productPath);
    // console.log(productPath);
  }
}

//  Creating Random Number
function getRandomNumber () {
  return Math.floor(Math.random() * allProducts.length);
}
// Displaying Unique Images

function uniqueImages () {
  let uniqueImageArray = [];
  while (uniqueImageArray.length < 3) {
    let item = getRandomNumber();
    if (!uniqueImageArray.includes(item)) {
      uniqueImageArray.push(item);
    }
  }
  return uniqueImageArray;
}

//  Displaying Products
function renderProducts () {
  let newProduct = uniqueImages();
  let product1 = newProduct[0];
  let product2 = newProduct[1];
  let product3 = newProduct[2];

  while (product1 === product2) {
    product2 = getRandomNumber();
  } while (product2 === product3) {
    product3 = getRandomNumber();
  } while (product1 === product3) {
    product1 = getRandomNumber();
  }
  imageOne.src = allProducts[product1].image;
  imageOne.alt = allProducts[product1].name;
  imageTwo.src = allProducts[product2].image;
  imageTwo.alt = allProducts[product2].name;
  imageThree.src = allProducts[product3].image;
  imageThree.alt = allProducts[product3].name;
  allProducts[product1].views++;
  allProducts[product2].views++;
  allProducts[product3].views++;
}

// Event Handler for Clicking on Products
function handleProductClicks(event) {
  if (event.target === productContainer) {
    alert('Please click on an image to select a product');
  }
  totalClicks++;
  let clickProduct = event.target.alt;
  for (let i = 0; i < allProducts.length; i++) {
    if (clickProduct === allProducts[i].name) {
      allProducts[i].clicks++;
      break;
    }
  }
  if (totalClicks === maxClicks) {
    productContainer.removeEventListener('click', handleProductClicks);
    resultButton.addEventListener('click', showResults);
    resultButton.className = 'clicks-allowed';
    productContainer.className ='no-voting';
  } else {
    renderProducts();
  }
}

// Display Results of Voting
function showResults () {
  let ul = document.querySelector('ul');
  for ( let i = 0; i < allProducts.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${allProducts[i].name} had ${allProducts[i].clicks} votes and and was viewed ${allProducts[i].views} times.`;
    ul.appendChild(li);
  }
  renderChart();
}

let myChart, myChartTwo;

function renderChart () {
  let clicks = [];
  let views = [];
  for (let i = 0; i < allProducts.length; i++) {
    clicks.push(allProducts[i].clicks);
    views.push(allProducts[i].views);
  }

  const ctx = document.getElementById('productVotes').getContext('2d');
  myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'],
      datasets: [{
        label: '# of Votes',
        data: clicks,
        backgroundColor: [
          'rgba(34, 139, 34)',
          'rgba(0, 143, 204)',
        ],
        borderColor: [
          'rgba(34, 139, 34)',
          'rgba(0, 143, 204)',
        ],
        borderWidth: 3
      }],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  const ctxTwo = document.getElementById('productViews').getContext('2d');
  myChartTwo = new Chart(ctxTwo, {
    type: 'bar',
    data: {
      labels: ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'],
      datasets: [{
        label: '# of Views',
        data: views,
        backgroundColor: [
          'rgba(34, 139, 34)',
          'rgba(0, 143, 204)',
        ],
        borderColor: [
          'rgba(34, 139, 34)',
          'rgba(0, 143, 204)',
        ],
        borderWidth: 3
      }],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

addAllProducts();
renderProducts();
// uniqueImages();
productContainer.addEventListener('click', handleProductClicks);
