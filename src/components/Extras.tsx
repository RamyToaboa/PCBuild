import { useState } from "react";
import { BRANDS, REVIEWS } from "../data/catalog";
import { Reveal } from "../hooks";
import {
  BoltIcon,
  CheckIcon,
  ShieldIcon,
  StarIcon,
  SwapIcon,
  TruckIcon,
  WrenchIcon,
} from "./Icons";

/* ---------- brand rail ---------- */

export function BrandRail() {
  const row = (key: string) => (
    <div key={key} className="flex shrink-0 items-center gap-14 pr-14">
      {BRANDS.map((b) => (
        <span
          key={key + b}
          className="whitespace-nowrap font-display text-2xl font-bold tracking-[0.12em] text-line2 transition-colors duration-300 hover:text-amber"
        >
          {b}
        </span>
      ))}
    </div>
  );
  return (
    <div className="marquee-hover overflow-hidden border-y border-line bg-deep py-6">
      <div className="anim-marquee flex w-max" style={{ animationDirection: "reverse" }}>
        {row("a")}
        {row("b")}
      </div>
    </div>
  );
}

/* ---------- reviews ---------- */

export function Reviews() {
  const [featured, ...rest] = REVIEWS;
  return (
    <section id="reviews" className="relative scroll-mt-24 overflow-hidden">
      <div
        className="pointer-events-none absolute -right-40 top-0 h-[28rem] w-[28rem] rounded-full opacity-60"
        style={{ background: "radial-gradient(circle, rgba(255,174,26,0.08), transparent 62%)" }}
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] tracking-[0.24em] text-volt">// FIELD REPORTS</p>
            <h2 className="mt-2 font-display text-4xl font-bold tracking-tight text-snow sm:text-5xl">
              BUILD STORIES
            </h2>
          </div>
          <p className="font-mono text-[12px] tracking-wider text-fog">
            4.9 / 5 ACROSS 2,140 ORDERS
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {/* big quote */}
          <Reveal className="lg:row-span-2">
            <figure className="flex h-full flex-col justify-between border border-line bg-panel p-8 sm:p-10">
              <div>
                <span className="font-display text-7xl font-bold leading-none text-amber">“</span>
                <blockquote className="mt-2 font-display text-2xl font-semibold leading-snug text-snow sm:text-[1.7rem]">
                  {featured.quote}
                </blockquote>
              </div>
              <figcaption className="mt-8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center bg-amber font-display text-sm font-bold text-ink">
                    {featured.name.split(" ").map((w) => w[0]).join("")}
                  </span>
                  <span>
                    <span className="block font-medium text-snow">{featured.name}</span>
                    <span className="font-mono text-[11px] text-fog">{featured.rig}</span>
                  </span>
                </div>
                <span className="flex text-amber">
                  {Array.from({ length: featured.stars }).map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4" />
                  ))}
                </span>
              </figcaption>
            </figure>
          </Reveal>

          {/* compact quotes */}
          {rest.map((r, i) => (
            <Reveal key={r.name} delay={100 + i * 90}>
              <figure
                className={`border border-line bg-panel/60 p-6 transition-all duration-300 hover:border-line2 hover:bg-panel ${
                  i === 1 ? "lg:translate-x-6" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="flex text-amber">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <StarIcon key={s} className={`h-3.5 w-3.5 ${s < r.stars ? "" : "opacity-20"}`} />
                    ))}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.18em] text-fog">
                    VERIFIED ORDER
                  </span>
                </div>
                <blockquote className="mt-3 text-[15px] leading-relaxed text-snow/90">
                  “{r.quote}”
                </blockquote>
                <figcaption className="mt-4 font-mono text-[11px] tracking-wider text-fog">
                  <span className="text-volt">{r.name}</span> — {r.rig}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- services ---------- */

const SERVICES = [
  {
    icon: WrenchIcon,
    title: "Free expert assembly",
    body: "Every build is assembled, cabled and stress-tested for 48 hours by a bench tech before it ships.",
  },
  {
    icon: ShieldIcon,
    title: "3-year coverage",
    body: "Parts and labour, fully covered. If it fails, we collect it, fix it and return it — on us.",
  },
  {
    icon: TruckIcon,
    title: "48-hour delivery",
    body: "Insured, signature-required shipping on every crate. Order before 2 pm for same-day dispatch.",
  },
  {
    icon: SwapIcon,
    title: "The upgrade path",
    body: "Trade in any part we sold you within 24 months and get up to 60% back in store credit.",
  },
];

export function Services() {
  return (
    <section id="support" className="relative scroll-mt-24 bg-mist text-ink">
      <div className="h-1.5 w-full bg-volt" />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[380px_1fr]">
          <Reveal>
            <p className="font-mono text-[11px] tracking-[0.24em] text-amberdeep">// WHY VOLTWORKS</p>
            <h2 className="mt-2 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              WE DO THE
              <br />
              <span className="text-amberdeep">DIRTY WORK</span>
            </h2>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-ink/65">
              Buying parts is easy. Getting them to play nice at 4 a.m. under
              full load is the job you're actually paying us for.
            </p>
            <a
              href="#builder"
              className="mt-7 inline-flex items-center gap-2 border border-ink px-6 py-3 font-display text-[13px] font-bold tracking-[0.14em] transition-all duration-200 hover:bg-ink hover:text-amber active:scale-95"
            >
              START A BUILD →
            </a>
          </Reveal>

          <div>
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 70}>
                <div className="group flex gap-5 border-t border-ink/15 py-6 transition-colors duration-300 last:border-b hover:bg-paper sm:gap-8 sm:px-4">
                  <span className="font-mono text-[12px] font-semibold text-ink/35">
                    0{i + 1}
                  </span>
                  <s.icon className="mt-0.5 h-7 w-7 shrink-0 text-ink transition-all duration-300 group-hover:-translate-y-1 group-hover:text-amberdeep" />
                  <div>
                    <h3 className="font-display text-lg font-bold">{s.title}</h3>
                    <p className="mt-1 max-w-xl text-[14px] leading-relaxed text-ink/60">{s.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Newsletter />
      </div>
    </section>
  );
}

/* ---------- newsletter ---------- */

function Newsletter() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "error" | "done">("idle");

  const submit = () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setState("error");
      return;
    }
    setState("done");
  };

  return (
    <Reveal delay={100}>
      <div className="relative mt-16 overflow-hidden bg-ink text-snow">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,174,26,0.16), transparent 65%)" }}
        />
        <div className="grid gap-8 p-8 sm:p-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="flex items-center gap-2 font-mono text-[11px] tracking-[0.24em] text-volt">
              <BoltIcon className="h-3.5 w-3.5 text-amber" /> RESTOCK RADAR
            </p>
            <h3 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              GET PINGED WHEN
              <br />
              <span className="text-amber">THE GOOD STUFF LANDS</span>
            </h3>
          </div>
          {state === "done" ? (
            <div className="flex items-center gap-4 border border-volt/50 bg-volt/10 p-6">
              <CheckIcon className="h-8 w-8 shrink-0 text-volt" />
              <div>
                <p className="font-display text-lg font-bold text-volt">YOU'RE ON THE LIST</p>
                <p className="mt-0.5 text-[13px] text-fog">
                  Restock pings, deal drops, zero spam. Unsubscribe anytime.
                </p>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (state === "error") setState("idle");
                  }}
                  onKeyDown={(e) => e.key === "Enter" && submit()}
                  placeholder="you@battlestation.gg"
                  className={`flex-1 border bg-panel px-4 py-3.5 font-mono text-[13px] text-snow outline-none transition-colors placeholder:text-fog/50 ${
                    state === "error" ? "border-ember" : "border-line focus:border-amber"
                  }`}
                />
                <button
                  onClick={submit}
                  className="bg-amber px-8 py-3.5 font-display text-[13px] font-bold tracking-[0.14em] text-ink transition-all duration-200 hover:bg-snow active:scale-95"
                >
                  HOOK ME UP
                </button>
              </div>
              <p className={`mt-2 font-mono text-[11px] tracking-wider ${state === "error" ? "text-ember" : "text-fog"}`}>
                {state === "error"
                  ? "▲ THAT EMAIL DOESN'T PARSE — TRY AGAIN"
                  : "1,900 BUILDERS ALREADY SUBSCRIBED"}
              </p>
            </div>
          )}
        </div>
      </div>
    </Reveal>
  );
}
