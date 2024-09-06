import { db } from "@/server/db";
import { cartItems } from "@/server/schema";
import { sendResponse, handleError } from "@/utils/resHelper";
import { eq, and } from "drizzle-orm";

// PUT ./api/v1/carts/:id/items/:itemId : update cart_item information (quantity) by cart id and item id

export const PUT = async (req: any, { params }: any) => {
  try {
    const itemId = params?.itemId || req.nextUrl?.searchParams?.get("itemId");
    if (!itemId) {
      return handleError(400, "Missing item id");
    }
    const updateInfo = await req.json();

    if (!updateInfo || Object.keys(updateInfo).length === 0) {
      return handleError(400, "No data provided to update");
    }

    const updateCartItem = await db.update(cartItems)
        .set(updateInfo)
        .where(eq(cartItems.id, itemId))
        .returning();

    return updateCartItem.length > 0
      ? sendResponse(200, {
          message: "Updated successfully",
          data: updateCartItem,
        })
      : handleError(404, "Item not found");
  } catch (error) {
    return handleError(500, "Internal server error"); // Handle the error
  }
};
