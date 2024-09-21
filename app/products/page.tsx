import ProductContainer from "@/components/products/ProductContainer";
import React from "react";

const ProductPage = ({
  searchParams,
}: {
  searchParams: {
    layout?: string;
    search?: string;
  };
}) => {
  const layout = searchParams.layout || "grid";
  const search = searchParams.search || "";
  return <ProductContainer layout={layout} search={search} />;
};

export default ProductPage;
