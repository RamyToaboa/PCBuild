import { useMemo, useState } from "react";
import { BASE_WATTS, BUILDER_GROUPS, IMG, fmt } from "../data/catalog";
import { Reveal, useCountUp } from "../hooks";
import { BoltIcon, CheckIcon, WrenchIcon } from "./Icons";

export default function Builder({
  onAdd,
}: {
  onAdd: (item: { id: string; name: string; price: number; img?: string; detail?: string }) => void;
}) {
  const [picks, setPicks] = useState<Record<string, number>>({
    cpu: 2,
    gpu: 2,
    ram: 1,
    ssd: 1,
    psu: 2,
  });

  const selected = useMemo(
    () =>
      BUILDER_GROUPS.map((g) => ({
        group: g,
        part: g.options[picks[g.id] ?? 0],
      })),
    [picks]
  );

  const total = selected.reduce((s, x) => s + x.part.price, 0);
  const draw =
    BASE_WATTS +
    selected.reduce((s, x) => s + (x.part.psuWatts ? 0 : x.part.watts), 0);
  const psu = selected.find((x) => x.part.psuWatts)?.part.psuWatts ?? 650;
  const load = draw / psu;
  const animatedTotal = useCountUp(total);

  const loadColor = load < 0.6 ? "var(--color-volt)" : load < 0.85 ? "var(--color-amber)" : "var(--color-ember)";
  const loadMsg =
    load < 0.6
      ? "Plenty of headroom — quiet & cool"
      : load < 0.85
        ? "Healthy headroom for spikes"
        : "Tight — consider a bigger PSU";

  return (
    <section id="builder" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[30rem] w-[60rem] -translate-x-1/2 rounded-full opacity-60"
        style={{ background: "radial-gradient(ellipse, rgba(69,227,184,0.09), transparent 65%)" }}
      />
      <div className="mx-auto max-w-7xl scroll-mt-28 px-4 py-16 sm:px-6 lg:py-24">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[11px] tracking-[0.24em] text-volt">// CONFIGURATOR</p>
          <h2 className="mt-2 font-display text-4xl font-bold tracking-tight text-snow sm:text-5xl">
            BUILD YOUR <span className="text-amber">MACHINE</span>
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-fog">
            Pick five parts. We do the rest — assembly, cable management, BIOS
            tuning and a 48-hour burn-in. Live wattage estimate keeps your
            power delivery honest.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_400px] lg:gap-8">
          {/* options */}
          <div className="space-y-10">
            {BUILDER_GROUPS.map((g, gi) => (
              <Reveal key={g.id} delay={gi * 60}>
                <div className="mb-4 flex items-baseline justify-between gap-4">
                  <h3 className="flex items-center gap-3 font-display text-xl font-bold text-snow">
                    <span className="font-mono text-[12px] font-medium text-amber">
                      0{gi + 1}
                    </span>
                    {g.label.toUpperCase()}
                  </h3>
                  <span className="hidden font-mono text-[11px] tracking-wider text-fog sm:block">
                    {g.hint}
                  </span>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {g.options.map((opt, oi) => {
                    const active = (picks[g.id] ?? 0) === oi;
                    return (
                      <button
                        key={opt.id}
                        onClick={() => setPicks((p) => ({ ...p, [g.id]: oi }))}
                        className={`group relative border p-4 text-left transition-all duration-200 active:scale-[0.97] ${
                          active
                            ? "border-amber bg-panel2 shadow-[inset_0_0_0_1px_var(--color-amber)]"
                            : "border-line bg-panel hover:border-line2 hover:bg-panel2"
                        }`}
                      >
                        <span
                          className={`absolute right-3 top-3 grid h-[18px] w-[18px] place-items-center border transition-all ${
                            active ? "border-amber bg-amber text-ink" : "border-line2 text-transparent"
                          }`}
                        >
                          <CheckIcon className="h-3 w-3" />
                        </span>
                        <span className="block font-display text-[15px] font-bold text-snow">
                          {opt.name}
                        </span>
                        <span className="mt-0.5 block font-mono text-[11px] text-fog">
                          {opt.spec}
                        </span>
                        <span className="mt-3 flex items-center justify-between">
                          <span className={`font-mono text-[13px] font-semibold ${active ? "text-amber" : "text-snow"}`}>
                            {fmt(opt.price)}
                          </span>
                          <span className="flex items-center gap-1 font-mono text-[10px] text-fog">
                            <BoltIcon className="h-2.5 w-2.5 text-volt" />
                            {opt.psuWatts ? `${opt.psuWatts}W CAP` : `${opt.watts}W`}
                          </span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </Reveal>
            ))}
          </div>

          {/* sticky summary */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal delay={150}>
              <aside className="border border-line bg-panel">
                <div className="flex items-center justify-between border-b border-line px-5 py-4">
                  <h3 className="font-display text-base font-bold tracking-[0.1em] text-snow">
                    BUILD SUMMARY
                  </h3>
                  <span className="font-mono text-[10px] tracking-[0.18em] text-volt">LIVE</span>
                </div>

                <ul className="space-y-3 px-5 py-5">
                  {selected.map(({ group, part }) => (
                    <li key={group.id} className="flex items-baseline justify-between gap-3 text-[13px]">
                      <span className="font-mono text-[10px] tracking-[0.18em] text-fog">
                        {group.label.toUpperCase()}
                      </span>
                      <span className="text-right">
                        <span className="block font-medium text-snow">{part.name}</span>
                        <span className="font-mono text-[11px] text-fog">{fmt(part.price)}</span>
                      </span>
                    </li>
                  ))}
                  <li className="flex items-baseline justify-between gap-3 text-[13px]">
                    <span className="font-mono text-[10px] tracking-[0.18em] text-fog">ASSEMBLY + TEST</span>
                    <span className="font-mono text-[11px] font-semibold text-volt">FREE</span>
                  </li>
                </ul>

                {/* wattage */}
                <div className="border-t border-line px-5 py-4">
                  <div className="flex items-baseline justify-between font-mono text-[11px]">
                    <span className="tracking-[0.18em] text-fog">EST. DRAW</span>
                    <span className="text-snow">
                      ~{draw}W / {psu}W
                    </span>
                  </div>
                  <div className="mt-2 h-1.5 w-full bg-deep">
                    <div
                      className="h-full transition-all duration-500 ease-out"
                      style={{ width: `${Math.min(100, load * 100)}%`, background: loadColor }}
                    />
                  </div>
                  <p className="mt-2 font-mono text-[10px] tracking-wider" style={{ color: loadColor }}>
                    ▲ {loadMsg}
                  </p>
                </div>

                <div className="border-t border-line px-5 py-5">
                  <div className="flex items-end justify-between">
                    <span className="font-mono text-[11px] tracking-[0.2em] text-fog">TOTAL</span>
                    <span key={animatedTotal} className="font-display text-4xl font-bold text-amber">
                      {fmt(animatedTotal)}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      const cpu = selected[0].part.name;
                      const gpu = selected[1].part.name;
                      onAdd({
                        id: `build-${Date.now()}`,
                        name: `Custom Build — ${cpu} + ${gpu}`,
                        price: total,
                        img: IMG.hero,
                        detail: "Assembled, tuned & burn-tested 48h",
                      });
                    }}
                    className="mt-5 flex w-full items-center justify-center gap-3 bg-amber py-3.5 font-display text-sm font-bold tracking-[0.12em] text-ink transition-all duration-200 hover:bg-snow hover:shadow-[0_0_32px_rgba(255,174,26,0.3)] active:scale-[0.97]"
                  >
                    <WrenchIcon className="h-4 w-4" />
                    ADD BUILD TO CRATE
                  </button>
                  <p className="mt-3 text-center font-mono text-[10px] tracking-[0.14em] text-fog">
                    SHIPS IN 5–7 DAYS · 3-YEAR WARRANTY
                  </p>
                </div>
              </aside>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
