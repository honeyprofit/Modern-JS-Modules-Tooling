// Exporting module
console.log('Exporting module');

// Blocking code
// console.log('Start fetching users~~~');
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('Finish fetching~~~');

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to the cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

// 이름이 없는 함수이므로 import시에 이름 정해줄 수 있음
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to the cart`);
}
