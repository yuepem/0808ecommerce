import { db } from "@/server/db";
import { carts } from "@/server/schema";
import { sendResponse, handleError } from "@/utils/resHelper";
import { eq } from "drizzle-orm";

// GET /api/v1/carts/:id ==> retrieve a cart by id

export const GET = async (req: any, { params} : any) => {
    try {
        const id = params?.id || req.nextUrl?.searchParams?.get("id");
        const results = await db.select().from(carts).where(eq(carts.id, id));
        return results.length > 0
            ? sendResponse(200, results)
            : handleError(404, 'Cart not found');
    } catch (error) {
        return handleError(500, 'server error');
    }
}