import Link from "next/link";
import { Button } from "../ui/button";
import HeroCarousel from "./HeroCarousel";

const Hero = () => {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl">
          We are changing the way people shop
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
          We are revolutionizing shopping by offering personalized, seamless
          experiences with smart technology, empowering customers to shop
          effortlessly and confidently both online and in-store.
        </p>
        <Button asChild size="lg" className="mt-10">
          <Link href="/product">Our Product</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
};

export default Hero;
