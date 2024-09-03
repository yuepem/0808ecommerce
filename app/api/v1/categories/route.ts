import { db } from "@/server/db";
import { categories } from "@/server/schema";
import { sendResponse, handleError } from "@/utils/resHelper";

// GET / api/v1/categories

export const GET = async () => {
  try {
    const allCategories = await db.select().from(categories);

    return allCategories.length > 0
      ? sendResponse(200, allCategories)
      : handleError(404, "No categories found");
  } catch (error) {
    return handleError(500, "Failed to fetch categories");
  }
};
