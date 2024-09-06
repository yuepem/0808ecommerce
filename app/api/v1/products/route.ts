import { db } from "@/server/db";
import { products } from "@/server/schema";
import { sendResponse, handleError } from "@/utils/resHelper";


// GET /api/v1/products : retrieve  products for home page
// ! retrieve all products for now
// todo add pagination, filter and sorting
export const GET = async () => {
    try {
        const allProducts = await db.select().from(products);
        
        return allProducts.length > 0
            ? sendResponse(200, allProducts)
            : handleError(404, "No products found");
    } catch (error) {
        return handleError(500, "Failed to fetch products");
    }

}