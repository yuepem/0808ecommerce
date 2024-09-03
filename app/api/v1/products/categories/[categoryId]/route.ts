import { db } from '@/server/db';
import { products } from '@/server/schema';
import { handleError, sendResponse } from '@/utils/resHelper';
import { eq } from 'drizzle-orm';


// GET /api/v1/products/categories/:categoryId : 
// => retrieve products for a specific category ny category id
// ! retrieve all products for now

 
// leave the type tp any for now
export const GET = async ( { params}: any) => {
    const { categoryId } = params;

    if (!categoryId) {
        return handleError(400, 'Missing category id');
    }

    try {
        const results = await db.select().from(products).where(eq(products.categoryId, categoryId));
        return results.length > 0
            ? sendResponse(200, results)
            : handleError(404, 'No products found');
    } catch (error) {
        return handleError(500, 'Failed to fetch products');
    }
}