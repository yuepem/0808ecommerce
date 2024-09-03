import { db } from "@/server/db";
import { products } from "@/server/schema";
import { sendResponse, handleError } from "@/utils/resHelper";
import { eq } from "drizzle-orm";

// GET /api/v1/products/:id ==> retrieve a single product by id

export const GET = async({ params} : any) => {
    try {
        const { id } = params;
        const product = await db.select().from(products).where(eq(products.id, id));
        return product.length > 0
            ? sendResponse(200, product)
            : handleError(404, 'Product not found');
    } catch (error) {
        return handleError(500, 'Failed to fetch product');
    }
}