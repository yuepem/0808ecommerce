import { db } from "@/server/db";
import { orderItems } from "@/server/schema";
import { sendResponse, handleError } from "@/utils/resHelper";
import { eq } from "drizzle-orm";

// GET ./api/v1/orders/:id/items : Retrieve cart items by order id

export const GET = async ({ params }: any) => {
    try {
        const { orderId } = params;

        const results = await db.select().from(orderItems).where(eq(orderItems.id, orderId));

        return results.length > 0
            ? sendResponse(200, {
                "Retrieved successfully": results
            })
            : handleError(404, "Order items not found");
    } catch (error) {
        return handleError(500, "server error");
    }
}