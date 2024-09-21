import ProductGrid from "./ProductGrid";
import ProductList from "./ProductList";
import { LuLayoutGrid, LuLayoutList } from "react-icons/lu";
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
      <section>
        <div className="flex justify-between items-center">
          <h4 className="font-medium text-lg">
            {totalProducts} product{totalProducts > 1 && "s"}
          </h4>
          <div className="flex gap-x-4">
            <Button
              variant={layout === "grid" ? "default" : "ghost"}
              size="icon"
              asChild
            >
              <Link href={`/products?layout=grid${searchTerm}`}>
                <LuLayoutGrid />
              </Link>
            </Button>

            <Button
              variant={layout === "list" ? "default" : "ghost"}
              size="icon"
              asChild
            >
              <Link href={`/products?layout=list${searchTerm}`}>
                <LuLayoutList />
              </Link>
            </Button>
          </div>
        </div>
        <Separator className="mt-4" />
      </section>
      {/* PRODUCTS */}
      <div>
        {totalProducts === 0 ? (
          <h5 className="text-2xl mt-16">Sorry no product match your search</h5>
        ) : layout === "grid" ? (
          <ProductGrid products={products} />
        ) : (
          <ProductList products={products} />
        )}
      </div>
    </>
  );
};

export default ProductContainer;
