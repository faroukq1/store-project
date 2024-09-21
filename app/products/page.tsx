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
  return <div>ProductPage</div>;
};

export default ProductPage;
