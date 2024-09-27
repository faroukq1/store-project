"use server";

import { redirect } from "next/navigation";
import db from "../utils/db";

export const fetchFeaturedProducts = async () => {
  const products = await db.product.findMany({
    where: {
      featured: true,
    },
  });
  return products;
};

export const fetchAllProduct = async ({ search = "" }: { search: string }) => {
  const allProducts = await db.product.findMany({
    where: {
      OR: [
        { name: { contains: search, mode: "insensitive" } },
        { company: { contains: search, mode: "insensitive" } },
      ],
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return allProducts;
};

export const fetchSingleProduct = async (productID: string) => {
  const product = await db.product.findUnique({
    where: {
      id: productID,
    },
  });

  if (product === null) redirect("/products");

  return product;
};

export const createProductAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  return { message: "product created" };
};
