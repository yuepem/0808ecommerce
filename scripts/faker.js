"use devtools";
const fs = require('fs');
const { faker } = require('@faker-js/faker');


// Store generated data
const users = [];
const addresses = [];
const accounts = [];
const categories = [];
const products = [];
const accordion_items = [];
const orders = [];
const order_items = [];
const carts = [];
const cart_items = [];

// Initialize counters for serial IDs
// let addressIdCounter = 1;
let categoryIdCounter = 1;
// let productIdCounter = 1;
// let orderItemIdCounter = 1;
// let cartItemIdCounter = 1;

// Helper function to generate UUIDs
const generateUUID = () => faker.string.uuid();

// Generate Users and Addresses
for (let i = 0; i < 10; i++) {
  const userId = generateUUID();
  const user = {
    id: userId,
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    phone_number: faker.phone.number(),
    email: faker.internet.email(),
    password_hash: faker.internet.password(),
    created_at: faker.date.past(),
    updated_at: faker.date.recent(),
  };
  users.push(user);

  const address = {
    id: generateUUID(),
    user_id: userId,
    street_address: faker.location.streetAddress(),
    city: faker.location.city(),
    province: faker.location.state(),
    postal_code: faker.location.zipCode(),
  };
  addresses.push(address);
}

// Generate Categories and Products, and Accordion Items
for (let i = 0; i < 5; i++) {
  const categoryId = categoryIdCounter++;
  const category = {
    id: categoryId,
    name: faker.commerce.department(),
    description: faker.commerce.productDescription(),
    image_url: faker.image.urlPicsumPhotos(),
  };
  categories.push(category);

  for (let j = 0; j < 5; j++) {
    const productId = generateUUID();
    const product = {
      id: productId,
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: faker.commerce.price({ min: 30, max: 600, dec: 0 }),
      stock: faker.number.int({ min: 1, max: 100 }),
      category_id: categoryId,
      image_url: faker.image.urlPicsumPhotos(),
      created_at: faker.date.past(),
      updated_at: faker.date.recent(),
    };
    products.push(product);

    for (let j = 0; j < 2; j++) { // Generate 2 accordion items for each product
      const accordionItemId = generateUUID();
      const accordionItem = {
        id: accordionItemId,
        product_id: productId,
        title: j === 0 ? 'Information' : faker.commerce.productAdjective({min:2, max:5}), // Set first title to 'Information'
        content: faker.lorem.paragraph(),
      };
      accordion_items.push(accordionItem);
    }

  }
}

// Helper function to generate fake order items and calculate total price
function createFakeOrderItems(orderId) {
  const numberOfOrderItems = faker.number.int({ min: 1, max: 3 });
  let totalPrice = 0;
  const items = [];

  for (let i = 0; i < numberOfOrderItems; i++) {
    const product = faker.helpers.arrayElement(products);
    const quantity = faker.number.int({ min: 1, max: 5 });
    const price = product.price * quantity;
    totalPrice += price;

    items.push({
      id: generateUUID(),
      order_id: orderId,
      product_id: product.id,
      name: product.name,
      image_url: product.image_url,
      price: price,
      quantity: quantity,
    });
  }

  return { items, totalPrice };
}

// Generate Orders and Order Items
for (let i = 0; i < 10; i++) {
  const userId = faker.helpers.arrayElement(users).id;
  const orderId = generateUUID();
  const { items, totalPrice } = createFakeOrderItems(orderId);

  const order = {
    id: orderId,
    user_id: userId,
    status: faker.helpers.arrayElement(['Pending', 'Paid', 'Done', 'Canceled']),
    payment_information:  faker.finance.creditCardNumber(),
    total_price: totalPrice,
    created_at: faker.date.past(),
    updated_at: faker.date.recent(),
  };
  orders.push(order);
  order_items.push(...items);
}

// Generate Carts and Cart Items
for (let i = 0; i < 5; i++) {
  const userId = faker.helpers.arrayElement(users).id;
  const cartId = generateUUID();

  const cart = {
    id: cartId,
    user_id: userId,
    created_at: faker.date.past(),
    updated_at: faker.date.recent(),
  };
  carts.push(cart);

  for (let j = 0; j < 5; j++) {
    const product = faker.helpers.arrayElement(products);
    const quantity = faker.number.int({ min: 1, max: 10 });

    const cartItem = {
      id: generateUUID(),
      cart_id: cartId,
      product_id: product.id,
      name: product.name,
      image_url: product.image_url,
      price: product.price,
      quantity: quantity,
    };
    cart_items.push(cartItem);
  }
}

// Generate Accounts
for (let i = 0; i < 10; i++) {
  const userId = faker.helpers.arrayElement(users).id;
  const accountId = generateUUID();
  const account = {
    id: accountId,
    user_id: userId,
    account_type: faker.helpers.arrayElement(['User', 'Admin']),
    auth_provider: faker.company.name(),
    provider_account_id: faker.string.uuid(),
    access_token: faker.internet.password(),
    refresh_token: faker.internet.password(),
    token_type: faker.string.nanoid(),
    scope: faker.string.alpha(10),
    id_token: faker.internet.password(),
    session_state: faker.string.alpha(10),
    created_at: faker.date.past(),
    expires_at: faker.date.future(),
    updated_at: faker.date.recent(),
  };
  accounts.push(account);
}

// Output generated data
console.log("Users:", users.length);
console.log("Addresses:", addresses.length);
console.log("Accounts:", accounts.length);
console.log("Categories:", categories.length);
console.log("Products:", products.length);
console.log("Accordion Items:", accordion_items.length);
console.log("Orders:", orders.length);
console.log("Order Items:", order_items.length);
console.log("Carts:", carts.length);
console.log("Cart Items:", cart_items.length);


console.log("Printed data to console,Staring to write to JSON file");


// Write generated data to JSON files
fs.writeFileSync('./fakeData/fakeData.json', JSON.stringify({ users, addresses, accounts, categories, products, accordion_items, orders, order_items, carts, cart_items }, null, 2), (err) => {
  if (err) {
    console.error(err);
  }
  console.log('Data written to fakeData.json');
});

