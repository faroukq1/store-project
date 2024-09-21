import ProductContainer from "@/components/products/ProductContainer";

const ProductPage = ({
  searchParams,
}: {
  searchParams: {
    layout?: string;
    search?: string;
  };
}) => {
  console.log(searchParams);
  const layout = searchParams.layout || "grid";
  const search = searchParams.search || "";
  return <ProductContainer layout={layout} search={search} />;
};

export default ProductPage;
