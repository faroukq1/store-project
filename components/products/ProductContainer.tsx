import ProductGrid from "./ProductGrid";
import ProductList from "./ProductList";
import { LuLayoutGrid, LuList } from "react-icons/lu";
import { Button } from "../ui/button";
import { Separator } from "@radix-ui/react-separator";
import { fetchAllProduct } from "@/app/utils/actions";
import Link from "next/link";

const ProductContainer = async ({
  layout,
  search,
}: {
  layout: string;
  search: string;
}) => {
  const products = await fetchAllProduct();
  const totalProducts = products.length;
  const searchTerm = search ? `&search=${search}` : "";
  return (
    <>
      {/* HEADER */}
      <section></section>
      {/* PRODUCTS */}
      <div>
        {totalProducts === 0 ? (
          <h5 className="text-2xl mt-16">Sorry no product match your search</h5>
        ) : layout === "grid" ? (
          <ProductGrid products={products} />
        ) : (
          <ProductList />
        )}
      </div>
    </>
  );
};

export default ProductContainer;
