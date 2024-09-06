import { db } from "@/server/db";
import { cartItems } from "@/server/schema";
import { sendResponse, handleError } from "@/utils/resHelper";
import { eq, and } from "drizzle-orm";
import { v4 as uuidv4 } from "uuid";

// GET ./api/v1/carts/:id/items : Retrieve cart items by cart id

export const GET = async ({ params }: any) => {
  try {
    const { id } = params;
    const results = await db
      .select()
      .from(cartItems)
      .where(eq(cartItems.cartId, id));
    return results.length > 0
      ? sendResponse(200, { "Retrieved successfully": results })
      : handleError(404, " Not found");
  } catch (error) {
    return handleError(500, "server error");
  }
};

// POST ./api/v1/carts/:id/items : Add item to cart by cart id

export const POST = async (req: any, { params }: any) => {
  try {
    const cartId = params?.id || req.nextUrl?.searchParams?.get("id");

    // Check if cart id is provided
    if (!cartId) {
      return handleError(400, "Missing cart id");
    }

    // Parse request body and validate
    const { productId, quantity, name, imageUrl, price } = await req.json();
    if (!productId || typeof quantity !== "number" || quantity < 1) {
      return handleError(400, "Invalid request body");
    }

    // Create new cart item
    const newCartItem = {
      id: uuidv4(),
      cartId,
      productId: productId,
      name: name,
      imageUrl: imageUrl,
      price: price,
      quantity,
    };

    //check if product exists in database
    const cart_item = await db
      .select()
      .from(cartItems)
      .where(
        and(eq(cartItems.productId, productId), eq(cartItems.cartId, cartId))
      );

    if (cart_item && cart_item.length > 0) {
      return handleError(400, "Product already exists in cart");
    } else {
      await db.insert(cartItems).values(newCartItem);
      return sendResponse(200, {
        "Added item to cart successfully": newCartItem,
      });
    }
  } catch (error) {
    return handleError(500, "server error");
  }
};

// DELETE ./api/v1/carts/:id/items : Remove items from cart by cart id

export const DELETE = async (req: any, { params }: any) => {
  try {
    const cartId = params?.id || req.nextUrl?.searchParams?.get("id");
    if (!cartId) {
      return handleError(400, "Missing cart id");
    }
    const deleteAllItems = await db
      .delete(cartItems)
      .where(eq(cartItems.cartId, cartId))
      .returning();
    return deleteAllItems.length > 0
      ? sendResponse(200, {
          message: "Empty cart successfully",
          data: deleteAllItems,
        })
      : handleError(404, "No items to delete"); // Handle case when no items are found
  } catch (error) {
    return handleError(500, "server error"); // Added error handling
  }
};
