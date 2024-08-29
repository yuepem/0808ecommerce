const tables = [users, addresses, accounts, categories, products, accordion_items, carts, cartItems, orders, orderItems];

-- ENUMs
CREATE TYPE order_status AS ENUMs ('Pending', 'Paid', 'Done', 'Cancelled');
CREATE TYPE account_type AS ENUMs ('Admin', 'User');

-- users information tables
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
    firstName TEXT NOT NULL,
    lastName TEXT , -- could be NULL!
    phoneNumber TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE , -- could be NULL!
    passwordHash TEXT NOT NULL,
    createAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    updateAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
)  


CREATE TABLE addresses (
    id UUID  PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
    streetAddress TEXT NOT NULL,
    city TEXT NOT NULL,
    province TEXT NOT NULL,
    postalCode TEXT NOT NULL,
    userId UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
)

CREATE TABLE accounts (
    id UUID PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
    userId UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    accountType account_type NOT NULL,
    anthProvider TEXT,
    providerAccountId TEXT,
    accessToken TEXT,
    refreshToken TEXT,
    tokenType TEXT,
    scope TEXT,
    idToken TEXT,
    sessionState TEXT,
    expiresAt TIMESTAMP,
    createAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updateAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
)

-- product information tables
CREATE TABLE categories (
    id INTEGER PRIMARY KEY NOT NULL,
    name TEXT NOT NULL UNIQUE,
    description TEXT,
)

CREATE TABLE products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
    name TEXT NOT NULL UNIQUE,
    description TEXT,
    price INTEGER NOT NULL,
    stock INTEGER DEFAULT NULL ,
    category_id INTEGER NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
    imageUrl TEXT NOT NULL,
    create_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
)

CREATE TABLE accordion_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
    product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    -- change: question to title
    title TEXT NOT NULL,
    -- change: answer to content
    content TEXT NOT NULL,
)

CREATE carts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
    userId UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    create_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
)

CREATE TABLE cartItems (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
    cart_id UUID NOT NULL REFERENCES carts(id) ON DELETE CASCADE,
    product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    imageUrl TEXT NOT NULL,
    price INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
)
CREATE TABLE orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
    userId UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    status order_status NOT NULL,
    paymentInformation TEXT,
    totalPrice INTEGER NOT NULL,
    create_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
)
CREATE TABLE orderItems (
    id TEXT PRIMARY KEY NOT NULL,
    order_id UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
    product_id UUID NOT NULL REFERENCES products(id),
    name TEXT NOT NULL,
    imageUrl TEXT NOT NULL,
    price INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
)