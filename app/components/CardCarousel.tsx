import Image from 'next/image';

type CardData = {
  image: string;
  title: string;
  description: string;
  tag: string;
  accent: string;
};

const cards: CardData[] = [
  {
    image: '/foods/biryani.png',
    title: 'Chicken Biryani',
    description:
      'Slow-cooked rice, tender chicken, and bold spices in every bite.',
    tag: 'Best Seller',
    accent: 'from $11.99',
  },
  {
    image: '/foods/paneer.png',
    title: 'Paneer Butter Masala',
    description:
      'Creamy tomato curry with soft paneer and a rich, comforting finish.',
    tag: 'Vegetarian Favorite',
    accent: 'Crowd Pick',
  },
  {
    image: '/foods/stir_fry.png',
    title: 'Veggie Stir Fry',
    description:
      'Fresh vegetables tossed in a savory glaze for a lighter, vibrant meal.',
    tag: 'Fresh Choice',
    accent: 'Ready Fast',
  },
  {
    image: '/foods/lava_cake.png',
    title: 'Chocolate Lava Cake',
    description:
      'Warm chocolate cake with a molten center that finishes any order well.',
    tag: 'Sweet Finish',
    accent: 'Limited Batch',
  },
];

const Card = ({ cardData }: { cardData: CardData }) => {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-primary/10 bg-white shadow-[0_18px_45px_-28px_rgba(43,43,43,0.45)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-26px_rgba(122,31,43,0.4)]">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/12 via-transparent to-secondary/12" />
        <Image
          src={cardData.image}
          alt={cardData.title}
          width={520}
          height={360}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary shadow-sm">
          {cardData.tag}
        </div>
      </div>

      <div className="flex flex-1 flex-col px-5 py-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-bold tracking-tight text-foreground">
            {cardData.title}
          </h3>
        </div>

        <div className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary w-fit">
          {cardData.accent}
        </div>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          {cardData.description}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-slate-200/80 pt-4">
          <p className="text-sm font-medium text-slate-500">
            Freshly prepared daily
          </p>
          <button className="inline-flex items-center ml-2 justify-center rounded-full bg-primary px-3 py-2 text-xs font-semibold text-white transition hover:bg-secondary">
            View more
          </button>
        </div>
      </div>
    </article>
  );
};

const CardCarousel = () => {
  return (
    <section
      id="food"
      className="relative scroll-mt-24 overflow-hidden px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="absolute left-0 top-10 h-36 w-36 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 right-8 h-44 w-44 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl rounded-[32px] border border-primary/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(233,220,207,0.65))] p-6 shadow-[0_24px_70px_-42px_rgba(43,43,43,0.45)] sm:p-8 lg:p-10">
        <div className="flex flex-col gap-6 border-b border-primary/10 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Most Popular
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-foreground sm:text-4xl">
              Customer favorites worth coming back for.
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600 sm:text-lg">
              Signature plates, fast comfort food, and sweet extras that make
              Center Market an easy choice for lunch, dinner, or a quick stop.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm sm:w-fit">
            <div className="rounded-2xl border border-white/70 bg-white/75 px-4 py-3 shadow-sm backdrop-blur">
              <p className="text-2xl font-black text-primary">4.8/5</p>
              <p className="mt-1 text-slate-500">Guest rating</p>
            </div>
            <div className="rounded-2xl border border-white/70 bg-white/75 px-4 py-3 shadow-sm backdrop-blur">
              <p className="text-2xl font-black text-secondary">Fast</p>
              <p className="mt-1 text-slate-500">Pickup friendly</p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => (
            <Card key={card.title} cardData={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardCarousel;
