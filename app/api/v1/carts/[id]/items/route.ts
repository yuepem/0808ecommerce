import { db } from "@/server/db";
import { cartItems } from "@/server/schema";
import { sendResponse, handleError } from "@/utils/resHelper";
import { eq } from "drizzle-orm";
import { uuid } from "drizzle-orm/pg-core";

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
    const { cartId } = params?.id || req.nextUrl?.searchParams?.get("id");

    if (!cartId) {
      return handleError(400, "Missing cart id");
    }

    const body = await req.json();

    const productId = body?.productId;
    const quantity = body?.quantity;
    if (!productId || typeof quantity !== "number" || quantity < 1) {
      return handleError(400, "Invalid request body");
    }

    const newCartItem = {
      id: uuid('id').notNull(),
      cartId,
      productId,
      name: body?.name,
      quantity,
    };
    }catch (error) {

    }
} 

