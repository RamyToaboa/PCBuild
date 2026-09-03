import { useMemo, useState } from "react";
import { CATEGORIES, PRODUCTS, fmt, type CategoryId } from "../data/catalog";
import { Reveal } from "../hooks";
import { CartIcon, CheckIcon, SearchIcon, StarIcon } from "./Icons";

type Sort = "featured" | "price-asc" | "price-desc" | "rating";

const STOCK_DOT: Record<string, string> = {
  "In stock": "bg-volt",
  "Low stock": "bg-amber",
  "Pre-order": "bg-ember",
};

export default function Shop({
  cat,
  onCat,
  onAdd,
}: {
  cat: CategoryId | "all";
  onCat: (c: CategoryId | "all") => void;
  onAdd: (item: { id: string; name: string; price: number; img?: string; detail?: string }) => void;
}) {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<Sort>("featured");
  const [justAdded, setJustAdded] = useState<string | null>(null);

  const items = useMemo(() => {
    let list = PRODUCTS.filter(
      (p) =>
        (cat === "all" || p.cat === cat) &&
        (p.name + p.brand + p.blurb).toLowerCase().includes(query.toLowerCase())
    );
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [cat, query, sort]);

  const handleAdd = (p: (typeof PRODUCTS)[number]) => {
    onAdd({ id: p.id, name: p.name, price: p.price, img: p.img, detail: p.brand });
    setJustAdded(p.id);
    window.setTimeout(() => setJustAdded((v) => (v === p.id ? null : v)), 1300);
  };

  return (
    <section id="shop" className="relative bg-mist text-ink">
      {/* hard top edge */}
      <div className="h-1.5 w-full bg-amber" />
      <div className="mx-auto max-w-7xl scroll-mt-28 px-4 py-16 sm:px-6 lg:py-24">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-[11px] tracking-[0.24em] text-amberdeep">// INVENTORY</p>
            <h2 className="mt-2 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              THE LINEUP
            </h2>
          </div>
          <div className="flex w-full flex-wrap items-center gap-3 sm:w-auto">
            <label className="relative flex-1 sm:w-64 sm:flex-none">
              <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search parts…"
                className="w-full border border-ink/20 bg-paper py-2.5 pl-9 pr-3 font-mono text-[13px] outline-none transition-colors placeholder:text-ink/35 focus:border-amberdeep"
              />
            </label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as Sort)}
              className="border border-ink/20 bg-paper px-3 py-2.5 font-mono text-[12px] tracking-wider outline-none transition-colors focus:border-amberdeep"
              aria-label="Sort products"
            >
              <option value="featured">SORT: FEATURED</option>
              <option value="price-asc">PRICE ↑</option>
              <option value="price-desc">PRICE ↓</option>
              <option value="rating">TOP RATED</option>
            </select>
          </div>
        </Reveal>

        {/* chips */}
        <Reveal delay={80} className="mt-8 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => onCat(c.id)}
              className={`border px-3.5 py-1.5 font-mono text-[11px] font-medium tracking-[0.14em] transition-all duration-200 active:scale-95 ${
                cat === c.id
                  ? "border-ink bg-ink text-amber"
                  : "border-ink/25 text-ink/70 hover:border-ink hover:text-ink"
              }`}
            >
              {c.label.toUpperCase()}
            </button>
          ))}
        </Reveal>

        <p className="mt-6 font-mono text-[11px] tracking-[0.2em] text-ink/45">
          SHOWING {items.length} / {PRODUCTS.length} SKUs
        </p>

        {/* grid */}
        {items.length > 0 ? (
          <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 70}>
                <article className="group flex h-full flex-col border border-ink/12 bg-paper transition-all duration-300 hover:-translate-y-1.5 hover:border-ink/30 hover:shadow-[0_18px_44px_rgba(11,18,20,0.16)]">
                  <div className="relative overflow-hidden bg-[#131a1c]">
                    <img
                      src={p.img}
                      alt={p.name}
                      loading="lazy"
                      className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                    />
                    {p.tag && (
                      <span className="absolute left-3 top-3 bg-amber px-2 py-1 font-mono text-[10px] font-semibold tracking-[0.14em] text-ink">
                        {p.tag.toUpperCase()}
                      </span>
                    )}
                    {p.oldPrice && (
                      <span className="absolute right-3 top-3 bg-ember px-2 py-1 font-mono text-[10px] font-semibold tracking-wider text-paper">
                        −{Math.round((1 - p.price / p.oldPrice) * 100)}%
                      </span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] tracking-[0.2em] text-ink/45">
                        {p.brand}
                      </span>
                      <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-wider text-ink/55">
                        <span className={`h-1.5 w-1.5 rounded-full ${STOCK_DOT[p.stock]}`} />
                        {p.stock.toUpperCase()}
                      </span>
                    </div>
                    <h3 className="mt-1.5 font-display text-lg font-bold leading-snug">
                      {p.name}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-ink/60">{p.blurb}</p>

                    <div className="mt-3 flex items-center gap-1.5">
                      <span className="flex text-amber">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <StarIcon
                            key={s}
                            className={`h-3.5 w-3.5 ${s < Math.round(p.rating) ? "" : "opacity-20"}`}
                          />
                        ))}
                      </span>
                      <span className="font-mono text-[11px] text-ink/50">
                        {p.rating.toFixed(1)} ({p.reviews})
                      </span>
                    </div>

                    <div className="mt-4 flex items-end justify-between border-t border-ink/10 pt-4">
                      <div>
                        <p className="font-mono text-xl font-semibold">
                          {fmt(p.price)}
                          {p.oldPrice && (
                            <span className="ml-2 text-[13px] font-normal text-ink/40 line-through">
                              {fmt(p.oldPrice)}
                            </span>
                          )}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => handleAdd(p)}
                      className={`mt-4 flex w-full items-center justify-center gap-2 border py-2.5 font-display text-[13px] font-bold tracking-[0.14em] transition-all duration-200 active:scale-[0.97] ${
                        justAdded === p.id
                          ? "border-ink bg-ink text-volt"
                          : "border-ink bg-transparent text-ink hover:bg-ink hover:text-amber"
                      }`}
                    >
                      {justAdded === p.id ? (
                        <>
                          <CheckIcon className="h-4 w-4" /> ADDED TO CRATE
                        </>
                      ) : (
                        <>
                          <CartIcon className="h-4 w-4" /> ADD TO CRATE
                        </>
                      )}
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mt-10 border border-dashed border-ink/25 px-6 py-16 text-center">
            <p className="font-display text-xl font-bold">NOTHING ON THIS SHELF</p>
            <p className="mt-2 text-sm text-ink/55">
              No parts match “{query}”. Try another term or reset the filters.
            </p>
            <button
              onClick={() => {
                setQuery("");
                onCat("all");
              }}
              className="mt-5 border border-ink px-5 py-2 font-mono text-[12px] tracking-[0.16em] transition-colors hover:bg-ink hover:text-amber"
            >
              RESET FILTERS
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
