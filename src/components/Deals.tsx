import { DEALS, PRODUCTS, fmt } from "../data/catalog";
import { Reveal, useCountdown, useWeekendTarget } from "../hooks";
import { BoltIcon, CartIcon } from "./Icons";

export default function Deals({
  onAdd,
}: {
  onAdd: (item: { id: string; name: string; price: number; img?: string; detail?: string }) => void;
}) {
  const target = useWeekendTarget();
  const { d, h, m, s } = useCountdown(target);

  const boxes: [string, string][] = [
    [d, "DAYS"],
    [h, "HRS"],
    [m, "MIN"],
    [s, "SEC"],
  ];

  return (
    <section id="deals" className="relative scroll-mt-24 bg-amber text-ink">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <Reveal className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="flex items-center gap-2 font-mono text-[11px] font-semibold tracking-[0.24em]">
              <BoltIcon className="h-3.5 w-3.5" /> WEEKEND CIRCUIT BREAKER
            </p>
            <h2 className="mt-2 font-display text-4xl font-bold tracking-tight sm:text-6xl">
              FLASH DEALS
            </h2>
          </div>
          <div className="flex items-center gap-2">
            {boxes.map(([v, label], i) => (
              <div key={label} className="flex items-center gap-2">
                <div className="bg-ink px-3 py-2 text-center sm:px-4">
                  <div className="font-display text-2xl font-bold tabular-nums text-amber sm:text-4xl">
                    {v}
                  </div>
                  <div className="font-mono text-[9px] tracking-[0.2em] text-fog">{label}</div>
                </div>
                {i < 3 && <span className="font-display text-2xl font-bold text-ink/50">:</span>}
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {DEALS.map((deal, i) => {
            const p = PRODUCTS.find((x) => x.id === deal.productId)!;
            const pct = Math.round((1 - deal.dealPrice / p.price) * 100);
            return (
              <Reveal key={deal.productId} delay={i * 90}>
                <article className="group flex h-full flex-col bg-ink text-snow transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_50px_rgba(11,18,20,0.45)]">
                  <div className="relative overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.name}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    />
                    <span className="absolute left-3 top-3 bg-amber px-2 py-1 font-display text-[13px] font-bold text-ink">
                      −{pct}%
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <span className="font-mono text-[10px] tracking-[0.2em] text-fog">{p.brand}</span>
                    <h3 className="mt-1 font-display text-lg font-bold">{p.name}</h3>
                    <div className="mt-3 flex items-end gap-3">
                      <span className="font-display text-3xl font-bold text-amber">
                        {fmt(deal.dealPrice)}
                      </span>
                      <span className="pb-1 font-mono text-[13px] text-fog line-through">
                        {fmt(p.price)}
                      </span>
                    </div>

                    <div className="mt-4">
                      <div className="h-1.5 w-full bg-line">
                        <div
                          className="h-full bg-gradient-to-r from-amber to-ember transition-all duration-700"
                          style={{ width: `${deal.claimed}%` }}
                        />
                      </div>
                      <p className="mt-1.5 font-mono text-[10px] tracking-[0.16em] text-fog">
                        {deal.claimed}% CLAIMED — {100 - deal.claimed}% LEFT
                      </p>
                    </div>

                    <button
                      onClick={() =>
                        onAdd({
                          id: p.id,
                          name: p.name,
                          price: deal.dealPrice,
                          img: p.img,
                          detail: "Flash deal price",
                        })
                      }
                      className="mt-5 flex w-full items-center justify-center gap-2 bg-amber py-3 font-display text-[13px] font-bold tracking-[0.14em] text-ink transition-all duration-200 hover:bg-snow active:scale-[0.97]"
                    >
                      <CartIcon className="h-4 w-4" /> CLAIM DEAL
                    </button>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
