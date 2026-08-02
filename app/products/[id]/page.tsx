import { products } from "@/lib/products";
import AddToCartButton from "@/components/products/AddToCartButton";
type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { id } = await params;

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="flex h-screen items-center justify-center bg-black text-3xl text-white">
        Product Not Found
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="mx-auto max-w-7xl px-8 py-20">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          <div className="overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#111827]">
            <img
              src={product.image}
              alt={product.title}
              className="h-[550px] w-full object-cover"
            />
          </div>

          <div>

            <p className="text-cyan-400 uppercase tracking-[5px]">
              {product.category}
            </p>

            <h1 className="mt-4 text-6xl font-black">
              {product.title}
            </h1>

            <h2 className="mt-8 text-4xl font-bold text-cyan-400">
              {product.price} تومان
            </h2>

            <div className="mt-12 grid grid-cols-2 gap-5">

              <div className="rounded-2xl bg-[#111827] p-5">
                <p className="text-gray-400">CPU</p>
                <h3>{product.cpu}</h3>
              </div>

              <div className="rounded-2xl bg-[#111827] p-5">
                <p className="text-gray-400">GPU</p>
                <h3>{product.gpu}</h3>
              </div>

              <div className="rounded-2xl bg-[#111827] p-5">
                <p className="text-gray-400">RAM</p>
                <h3>{product.ram}</h3>
              </div>

              <div className="rounded-2xl bg-[#111827] p-5">
                <p className="text-gray-400">Storage</p>
                <h3>{product.storage}</h3>
              </div>
<AddToCartButton
  id={product.id}
  title={product.title}
  price={product.price}
  image={product.image}
/>

            </div>

          </div>

        </div>

      </div>
    </main>
  );
}