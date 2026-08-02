import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/hero";
import FeaturedProducts from "@/components/products/FeaturedProducts";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedProducts />
    </>
  );
}