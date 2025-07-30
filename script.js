// Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);

console.log('Importing module');
// console.log(shippingCost);

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);

///////////////////////////////////////
// Top-Level Await (ES2022)

// console.log('Start fetching!');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('End fetching');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return { title: data.at(-1).title };
};

const lastPost = getLastPost();
console.log(lastPost); //promise

// way1: Not very clean
// lastPost.then(last => console.log(last));

// way2: top level await
const lastPost2 = await getLastPost();
console.log(lastPost2);
