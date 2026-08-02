import Image from "next/image";
import FadeIn from "../animations/FadeAnimation";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-[#050816] via-[#0B1120] to-black">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[170px]" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-16 px-8 py-24 lg:flex-row">

        {/* Left */}
        <FadeIn>
          <div className="max-w-xl">

            <p className="mb-5 text-cyan-400 font-semibold tracking-[8px] uppercase">
              Ultimate Gaming Experience
            </p>

            <h1 className="text-5xl font-black leading-tight text-white md:text-7xl">
              BUILD YOUR
              <span className="block text-cyan-400">
                DREAM PC
              </span>
            </h1>

            <p className="mt-8 text-lg leading-8 text-gray-300">
              Discover high-performance gaming PCs, premium components,
              and custom builds engineered for gamers, creators and enthusiasts.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <button className="rounded-xl bg-cyan-500 px-8 py-4 font-bold text-black transition duration-300 hover:scale-105 hover:bg-cyan-400 hover:shadow-[0_0_35px_#22d3ee]">
                Shop Now
              </button>

              <button className="rounded-xl border border-cyan-400 px-8 py-4 font-bold text-cyan-400 transition duration-300 hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_30px_#22d3ee]">
                Learn More
              </button>

            </div>

          </div>
        </FadeIn>

        {/* Right */}
        <FadeIn delay={0.3}>
          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl"></div>

            <Image
              src="/images/hero-pc.jpg"
              alt="Gaming PC"
              width={650}
              height={650}
              priority
              className="relative drop-shadow-[0_0_50px_rgba(34,211,238,0.35)]"
            />

          </div>
        </FadeIn>

      </div>

    </section>
  );
}