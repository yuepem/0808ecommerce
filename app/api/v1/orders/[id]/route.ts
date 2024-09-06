import { db } from "@/server/db";
import { orders } from "@/server/schema";
import { sendResponse, handleError } from "@/utils/resHelper";
import { eq } from "drizzle-orm";

// GET /api/v1/orders/:id : retrieve a order by id
export const GET = async (req: any, { params }: any) => {
  try {
    const id = params?.id || req.nextUrl?.searchParams?.get("id");
    const results = await db.select().from(orders).where(eq(orders.id, id));

    return results.length > 0
      ? sendResponse(200, results)
      : handleError(404, "Order not found");
  } catch (error) {
    return handleError(500, "Failed to fetch order");
  }
};
