import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="deals"
      className="relative scroll-mt-24 overflow-hidden bg-white/90 p-6 shadow-sm ring-1 ring-slate-200 sm:p-8 md:p-12"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-center">
        <div className="flex-1 text-center lg:text-left">
          <p className="mb-4 inline-flex rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.22em] text-secondary">
            Fresh & fast
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Hot foods ready to satisfy your cravings.
          </h1>
          <p className="mt-3 max-w-xl leading-8 text-slate-600 sm:text-lg">
            Discover fresh comfort meals and snacks delivered with speed and
            care. Perfect for lunch, dinner, or whenever hunger strikes.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              target="_blank"
              href="https://www.doordash.com/store/center-market-12th-street-the-dalles-1660313/2156548/?srsltid=AfmBOorlGQqj0_b2qTKuxSKFiRiHwL06dauYrWR9aCA7TaBR0MaZyHCg"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700 sm:w-auto"
            >
              <Image
                src="/doordash.png"
                alt="DoorDash logo"
                width={24}
                height={24}
              />
              <span>Order with DoorDash</span>
            </a>
            <a
              href="#contact"
              className="inline-flex w-full text-black items-center justify-center rounded-full border border-slate-300  px-6 py-3 text-sm font-semibold transition hover:border-slate-400 hover:bg-secondary-500 sm:w-auto"
            >
              Location & Hours
            </a>
          </div>
        </div>

        <div className="relative mx-auto flex h-full w-full items-center justify-center lg:mx-0 lg:w-auto">
          <div className="absolute inset-x-0 bottom-0 h-24" />
          <Image
            src="/hot_foods.png"
            alt="Image of hot foods"
            width={520}
            height={520}
            className="relative rounded"
            loading="eager"
            priority
          />
        </div>
      </div>
    </section>
  );
}
