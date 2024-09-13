import { pgTable, serial, uuid, text, timestamp, integer, pgEnum, PgSerial } from 'drizzle-orm/pg-core';
import { not, relations } from 'drizzle-orm';

import type { AdapterAccountType } from 'next-auth/adapters';


//  Define ENUMs
export const orderStatusEnum = pgEnum('order_status', ['Pending', 'Paid', 'Done', 'Cancelled']);
export const accountTypeEnum = pgEnum('account_type', ['Admin', 'User']);

/* 
  * users id: uuid
  * addresses id: uuid
  * accounts id: uuid
  ! categories id: serial
  * products id: uuid
  * accordion_items id: uuid
  * orders id: uuid
  * order_items id: uuid
  * carts id: uuid
  8 cart_items id: uuid
*/

//  Users table
export const users = pgTable('user', {
  id: uuid('id').primaryKey().defaultRandom(), 
  firstName: text('first_name').notNull(),
  lastName: text('last_name'),
  phoneNumber: text('phone_number').notNull().unique(),
  email: text('email').unique(),
  passwordHash: text('password_hash'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

// Addresses table
export const addresses = pgTable('address', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id, { onDelete: 'cascade' }).notNull(),
  streetAddress: text('street_address').notNull(),
  city: text('city').notNull(),
  province: text('province').notNull(),
  postalCode: text('postal_code').notNull(),
});

//  Accounts table
export const accounts = pgTable('account', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id, { onDelete: 'cascade' }).notNull(),
  accountType: text('account_type').$type<AdapterAccountType>().notNull(), // Corrected method chaining
  authProvider: text('auth_provider'),
  providerAccountId: text('provider_account_id'),
  accessToken: text('access_token'),
  refreshToken: text('refresh_token'),
  tokenType: text('token_type'),
  scope: text('scope'),
  idToken: text('id_token'),
  sessionState: text('session_state'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  expiresAt: timestamp('expires_at'),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

// Categories table
export const categories = pgTable('category', {
  id: serial('id').primaryKey(),
  name: text('name').notNull().unique(),
  description: text('description'),
  imageUrl: text('image_url').notNull(),
});

//  Products table 
export const products = pgTable('product', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull().unique(),
  description: text('description'),
  price: integer('price').notNull(),
  stock: integer('stock'),
  categoryId: integer('category_id').references(() => categories.id, { onDelete: 'cascade' }).notNull(),
  imageUrl: text('image_url').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

//  Accordion items table
export const accordionItems = pgTable('accordion_item', {
  id: uuid('id').primaryKey().defaultRandom(),
  productId: uuid('product_id').references(() => products.id, { onDelete: 'cascade' }).notNull(),
  title: text('title').notNull(),
  content: text('content').notNull(),
});

//  Carts table
export const carts = pgTable('cart', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id, { onDelete: 'cascade' }).notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

// Cart items table
export const cartItems = pgTable('cart_item', {
  id: uuid('id').primaryKey().defaultRandom(),
  cartId: uuid('cart_id').references(() => carts.id, { onDelete: 'cascade' }).notNull(),
  productId: uuid('product_id').references(() => products.id, { onDelete: 'cascade' }).notNull(),
  name: text('name').notNull(),
  imageUrl: text('image_url').notNull(),
  price: integer('price').notNull(),
  quantity: integer('quantity').notNull(),
});

export const orders = pgTable('order', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id, { onDelete: 'cascade' }).notNull(),
  status: orderStatusEnum('status').default('Pending').notNull(),
  paymentInformation: text('payment_information'),
  totalPrice: integer('total_price').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const orderItems = pgTable('order_item', {
  id: uuid('id').primaryKey().defaultRandom(),
  orderId: uuid('order_id').references(() => orders.id, { onDelete: 'cascade' }).notNull(),
  productId: uuid('product_id').references(() => products.id).notNull(),
  name: text('name').notNull(),
  imageUrl: text('image_url').notNull(),
  price: integer('price').notNull(),
  quantity: integer('quantity').notNull(),
});


// * relationships

export const usersRelations = relations(users, ({ many, one }) => ({
  addresses: many(addresses),
  // accounts: many(accounts),
  carts: one(carts, { fields: [users.id], references: [carts.userId] }),
  orders: many(orders),
}));

export const productsRelations = relations(products, ({ one, many }) => ({
  category: one(categories, {
    fields: [products.categoryId],
    references: [categories.id],
  }),
  accordionItems: many(accordionItems),
  orderItems: many(orderItems),
  cartItems: many(cartItems),
}));

export const cartsRelations = relations(carts, ({ one, many }) => ({
  user: one(users, {
    fields: [carts.userId],
    references: [users.id],
  }),
  cartItems: many(cartItems),
}));

export const cartItemsRelations = relations(cartItems, ({ one }) => ({
    cart: one(carts, {
      fields: [cartItems.cartId],
      references: [carts.id],
    }),
    product: one(products, {
      fields: [cartItems.productId],
      references: [products.id],
    }),
  }));

export const ordersRelations = relations(orders, ({ one, many }) => ({
  user: one(users, {
    fields: [orders.userId],
    references: [users.id],
  }),
  orderItems: many(orderItems),
}));

export const orderItemsRelations = relations(orderItems, ({ one }) => ({
    order: one(orders, {
      fields: [orderItems.orderId],
      references: [orders.id],
    }),
    product: one(products, {
      fields: [orderItems.productId],
      references: [products.id],
    }),
  }));

  /* export const accountsRelations = relations(accounts, ({ one }) => ({
    user: one(users, {
      fields: [accounts.userId],
      references: [users.id],
    }),
  })); */

  export const addressesRelations = relations(addresses, ({ many }) => ({
    user: many(users),
  }));