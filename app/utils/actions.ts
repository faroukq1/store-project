import db from "../utils/db";

export const fetchFeaturedProduct = async () => {
  const products = await db.product.findMany({
    where: {
      featured: true,
    },
  });
  return products;
};

export const fetchAllProduct = async () => {
  const allProducts = await db.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return allProducts;
};
