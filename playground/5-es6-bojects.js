// Object property shorthand
const name = "Matthijs";
const userAge = 27;

const user = {
  name,
  age: userAge,
  location: "Rotterdam",
};

console.log(user);

// Object destructuring
const product = {
  label: "Red notebook",
  price: 3,
  stock: 201,
  salePrice: 5.99,
};

// const label = product.label
// const stock = product.stock

const {
  label: productLabel,
  price: stockPrice,
  stock,
  salePrice,
  rating = 5,
} = product;

console.log(`${productLabel} stock price $${stockPrice}`);
console.log(`${productLabel} sales price $${salePrice}`);
console.log(
  `Bruto profit margin $${parseFloat(salePrice) - parseFloat(stockPrice)}`
);
console.log(`Product-rating: ${rating}: stars`);

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock)
}

transaction('Order', product)