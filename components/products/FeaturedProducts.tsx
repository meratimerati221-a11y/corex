import CardProduct from "./CardProduct";
import { getproducts } from "@/lib/getproducts";

export default async function FeaturedProducts() {
  const products = await getProducts();

  return (
    <section className="bg-[#070B18] py-24">
      <div className="mx-auto max-w-7xl px-8">

        <h2 className="mb-4 text-center text-5xl font-black text-white">
          Featured Products
        </h2>

        <p className="mb-16 text-center text-gray-400">
          Explore our latest gaming hardware.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product: any) => (
            <CardProduct
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>

      </div>
    </section>
  );
}