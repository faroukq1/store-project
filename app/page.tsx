import LoadingContainer from "@/components/global/LoadingContainer";
import FeaturedProduct from "@/components/home/FeaturedProduct";
import Hero from "@/components/home/Hero";
import { Suspense } from "react";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Suspense fallback={<LoadingContainer />}>
        <FeaturedProduct />
      </Suspense>
    </>
  );
};

export default HomePage;
