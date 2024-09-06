import { db } from "@/server/db";
import { orders } from "@/server/schema";
import { sendResponse, handleError } from "@/utils/resHelper";

//! For admin only
// GET /api/v1/orders : retrieve all orders

export const GET = async (req: any) => {
  try {
    const allOrders = await db.select().from(orders);

    return allOrders.length > 0
      ? sendResponse(200, allOrders)
      : handleError(404, "No orders found");
  } catch (error) {
    return handleError(500, "Failed to fetch orders");
  }
};
