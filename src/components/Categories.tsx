import { CATEGORIES, PRODUCTS, type CategoryId } from "../data/catalog";
import { Reveal } from "../hooks";
import { CAT_ICONS, ArrowIcon } from "./Icons";

export default function Categories({
  active,
  onPick,
}: {
  active: CategoryId | "all";
  onPick: (id: CategoryId | "all") => void;
}) {
  const countFor = (id: CategoryId | "all") =>
    id === "all" ? PRODUCTS.length : PRODUCTS.filter((p) => p.cat === id).length;

  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] tracking-[0.24em] text-volt">// DEPARTMENTS</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-snow sm:text-4xl">
              SHOP THE BENCH
            </h2>
          </div>
          <p className="font-mono text-[12px] tracking-wider text-fog">
            {PRODUCTS.length} SKUs LIVE · UPDATED DAILY
          </p>
        </Reveal>

        <div className="-mx-4 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
          <div className="flex w-max gap-3 lg:grid lg:w-full lg:grid-cols-9">
            {CATEGORIES.map((c, i) => {
              const Icon = CAT_ICONS[c.icon];
              const isActive = active === c.id;
              return (
                <Reveal key={c.id} delay={i * 50} className="w-36 lg:w-auto">
                  <button
                    onClick={() => {
                      onPick(c.id);
                      document.getElementById("shop")?.scrollIntoView({ block: "start" });
                    }}
                    className={`group flex w-full flex-col gap-3 border p-4 text-left transition-all duration-200 active:scale-95 ${
                      isActive
                        ? "border-amber bg-amber text-ink"
                        : "border-line bg-panel text-snow hover:-translate-y-1 hover:border-amber/70 hover:bg-panel2"
                    }`}
                  >
                    <Icon
                      className={`h-6 w-6 transition-transform duration-200 group-hover:scale-110 ${
                        isActive ? "text-ink" : "text-amber"
                      }`}
                    />
                    <span>
                      <span className="block font-display text-[13px] font-semibold leading-tight">
                        {c.label}
                      </span>
                      <span
                        className={`mt-0.5 flex items-center justify-between font-mono text-[10px] tracking-[0.16em] ${
                          isActive ? "text-ink/70" : "text-fog"
                        }`}
                      >
                        {countFor(c.id)} ITEMS
                        <ArrowIcon
                          className={`h-3 w-3 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100 ${
                            isActive ? "text-ink" : "text-amber"
                          }`}
                        />
                      </span>
                    </span>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
