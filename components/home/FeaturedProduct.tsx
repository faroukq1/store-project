import { fetchFeaturedProducts } from "@/app/utils/actions";
import EmptyList from "../global/EmptyList";
import SectionTitle from "../global/SectionTitle";
import ProductGrid from "../products/ProductGrid";

const FeaturedProduct = async () => {
  const products = await fetchFeaturedProducts();
  if (products.length === 0) return <EmptyList />;

  return (
    <section className="pt-24">
      <SectionTitle text="featured product" />
      <ProductGrid products={products} />
    </section>
  );
};

export default FeaturedProduct;
