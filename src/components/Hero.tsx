import { FEATURED, IMG, TICKER, fmt } from "../data/catalog";
import { Reveal, useScramble } from "../hooks";
import { ArrowIcon, BoltIcon, CheckIcon } from "./Icons";

function Corner({ pos }: { pos: string }) {
  return <span className={`pointer-events-none absolute h-6 w-6 border-amber ${pos}`} aria-hidden="true" />;
}

export default function Hero({
  onAdd,
}: {
  onAdd: (item: { id: string; name: string; price: number; img?: string; detail?: string }) => void;
}) {
  const l1 = useScramble("APEX", 250);
  const l2 = useScramble("TITAN", 650);

  const chipsPos = [
    "left-3 top-8 sm:-left-5 sm:top-12",
    "-right-2 top-1/3 sm:-right-6",
    "left-6 bottom-24 sm:-left-8",
    "right-6 bottom-8 sm:-right-4 sm:bottom-16",
  ];

  return (
    <section id="top" className="relative overflow-hidden">
      {/* glows */}
      <div
        className="pointer-events-none absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full opacity-60"
        style={{ background: "radial-gradient(circle, rgba(69,227,184,0.13), transparent 65%)" }}
      />
      <div
        className="pointer-events-none absolute -right-52 top-24 h-[40rem] w-[40rem] rounded-full opacity-70"
        style={{ background: "radial-gradient(circle, rgba(255,174,26,0.1), transparent 62%)" }}
      />

      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:pb-24 lg:pt-16">
        {/* left — the rig card */}
        <div className="lg:col-span-6 xl:col-span-6">
          <Reveal>
            <p className="flex items-center gap-2.5 font-mono text-[12px] tracking-[0.22em] text-volt">
              <span className="anim-blink inline-block h-2 w-2 bg-volt" />
              BENCH NO.04 — FLAGSHIP BUILD
            </p>
          </Reveal>

          <h1 className="mt-5 font-display font-bold leading-[0.9] tracking-tight">
            <span className="block text-[clamp(4rem,11vw,8.5rem)] text-snow">
              {l1.out}
            </span>
            <span
              className="block text-[clamp(4rem,11vw,8.5rem)] text-transparent"
              style={{ WebkitTextStroke: "2.5px var(--color-amber)" }}
            >
              {l2.out}
            </span>
          </h1>

          <Reveal delay={150}>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-fog">
              Our bench-built flagship, tuned for 4K ultra and 240&nbsp;fps esports.
              Assembled by hand, cabled like art, stress-tested for 48 hours
              before it ever leaves the workshop.
            </p>
          </Reveal>

          {/* spec bars */}
          <Reveal delay={250} className="mt-8 max-w-md">
            <ul className="space-y-3.5">
              {FEATURED.specs.map((s, i) => (
                <li key={s.label}>
                  <div className="flex items-baseline justify-between font-mono text-[12px]">
                    <span className="tracking-[0.18em] text-fog">{s.label}</span>
                    <span className="font-medium text-snow">{s.value}</span>
                  </div>
                  <div className="mt-1.5 h-1 w-full bg-line/70">
                    <div
                      className="specbar h-full bg-gradient-to-r from-volt to-amber"
                      style={{ width: `${s.pct}%`, animationDelay: `${0.3 + i * 0.12}s` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* price + ctas */}
          <Reveal delay={350}>
            <div className="mt-9 flex flex-wrap items-end gap-x-6 gap-y-2">
              <div>
                <p className="font-mono text-[11px] tracking-[0.2em] text-fog">BENCH PRICE</p>
                <p className="font-display text-5xl font-bold text-amber">
                  {fmt(FEATURED.price)}
                </p>
              </div>
              <div className="pb-1.5">
                <span className="font-mono text-sm text-fog line-through">
                  {fmt(FEATURED.oldPrice)}
                </span>
                <span className="ml-2 border border-volt/50 px-2 py-0.5 font-mono text-[11px] font-semibold tracking-wider text-volt">
                  SAVE {fmt(FEATURED.oldPrice - FEATURED.price)}
                </span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() =>
                  onAdd({
                    id: FEATURED.id,
                    name: FEATURED.name,
                    price: FEATURED.price,
                    img: IMG.hero,
                    detail: "Flagship bench build · assembled & tested",
                  })
                }
                className="group flex items-center gap-3 bg-amber px-7 py-3.5 font-display text-sm font-bold tracking-[0.12em] text-ink transition-all duration-200 hover:bg-snow hover:shadow-[0_0_32px_rgba(255,174,26,0.35)] active:scale-95"
              >
                RESERVE THIS BUILD
                <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
              <a
                href="#builder"
                className="group flex items-center gap-3 border border-line px-7 py-3.5 font-display text-sm font-bold tracking-[0.12em] text-snow transition-all duration-200 hover:border-volt hover:text-volt active:scale-95"
              >
                CONFIGURE YOUR OWN
                <span className="transition-transform duration-200 group-hover:translate-y-0.5">↓</span>
              </a>
            </div>

            <p className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-1 font-mono text-[11px] tracking-wider text-fog">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 bg-amber" /> {FEATURED.stockNote}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckIcon className="h-3.5 w-3.5 text-volt" /> 3-YEAR WARRANTY
              </span>
              <span className="flex items-center gap-1.5">
                <CheckIcon className="h-3.5 w-3.5 text-volt" /> FREE ASSEMBLY
              </span>
            </p>
          </Reveal>
        </div>

        {/* right — the machine */}
        <div className="relative lg:col-span-6">
          <Reveal delay={200} className="relative mx-auto max-w-[26rem] lg:max-w-none">
            <div
              className="pointer-events-none absolute -inset-10 opacity-70"
              style={{ background: "radial-gradient(circle at 55% 40%, rgba(69,227,184,0.14), transparent 60%)" }}
            />
            <div className="scanline relative overflow-hidden border border-line bg-panel">
              <Corner pos="left-3 top-3 border-l-2 border-t-2" />
              <Corner pos="right-3 top-3 border-r-2 border-t-2" />
              <Corner pos="bottom-3 left-3 border-b-2 border-l-2" />
              <Corner pos="bottom-3 right-3 border-b-2 border-r-2" />
              <img
                src={IMG.hero}
                alt="APEX TITAN custom gaming PC with teal and amber RGB lighting"
                className="anim-kenburns aspect-[4/5] w-full object-cover"
              />
              {/* floating spec chips */}
              {FEATURED.chips.map((c, i) => (
                <span
                  key={c}
                  className={`anim-floaty absolute border border-line bg-deep/85 px-2.5 py-1.5 font-mono text-[10px] font-semibold tracking-[0.14em] text-volt backdrop-blur-sm ${chipsPos[i]} ${
                    i > 1 ? "hidden sm:block" : ""
                  }`}
                  style={{ animationDelay: `${i * 0.9}s` }}
                >
                  <span className="mr-1.5 text-amber">▸</span>
                  {c}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between border border-t-0 border-line bg-deep/60 px-4 py-2.5 font-mono text-[10px] tracking-[0.2em] text-fog">
              <span>FIG. 004 — APEX TITAN</span>
              <span className="text-volt">TESTED 48H ✓</span>
            </div>
          </Reveal>
        </div>
      </div>

      {/* spec strip marquee */}
      <div className="marquee-hover border-y border-line bg-deep/50">
        <div className="anim-marquee flex w-max py-3">
          {[0, 1].map((k) => (
            <div key={k} className="flex shrink-0 items-center gap-6 pr-6">
              {[...TICKER, ...TICKER].map((t, i) => (
                <span
                  key={k + "-" + i}
                  className="flex items-center gap-6 whitespace-nowrap font-mono text-[11px] tracking-[0.22em] text-fog"
                >
                  <BoltIcon className="h-3 w-3 text-amber" />
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
