// Object property shorthand

const name = 'Masha';
const userAge = 29;

const user = {
  name,
  age: userAge,
  location: 'Nairobi'
};

console.log(user);


// Object destructuring

const product = {
  label: 'Death Note',
  price: 300,
  stock: 201,
  salePrice: undefined
};

// const label = product.label;
// const stock = product.stock;

const { label, stock } = product;

console.log(label);
console.log(stock);
