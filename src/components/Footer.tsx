import { BoltIcon, ChatIcon, PlayIcon, XSocialIcon } from "./Icons";

const COLS = [
  {
    title: "SHOP",
    links: ["Graphics cards", "Processors", "Memory", "Storage", "Full builds"],
    hrefs: ["#shop", "#shop", "#shop", "#shop", "#builder"],
  },
  {
    title: "SUPPORT",
    links: ["Order tracking", "Warranty claims", "RMA portal", "Driver library", "Contact bench"],
    hrefs: ["#support", "#support", "#support", "#support", "#support"],
  },
  {
    title: "COMPANY",
    links: ["About the workshop", "Build gallery", "Careers", "Press kit"],
    hrefs: ["#reviews", "#reviews", "#top", "#top"],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-deep">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center bg-amber text-ink">
                <BoltIcon className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-bold tracking-[0.08em] text-snow">
                VOLT<span className="text-amber">WORKS</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-fog">
              A small workshop with big benches. We've been building, tuning
              and repairing machines since 2014 — over 12,000 rigs shipped.
            </p>
            <div className="mt-5 space-y-1 font-mono text-[11px] tracking-wider text-fog">
              <p>MON–FRI 09:00–19:00 · SAT 10:00–16:00</p>
              <p>44 CIRCUIT LANE, UNIT 7, PORTLAND OR</p>
              <p className="text-volt">BENCH@VOLTWORKS.GG · (503) 555-0187</p>
            </div>
            <div className="mt-5 flex gap-2">
              {[
                { Icon: XSocialIcon, label: "X / Twitter", url: "https://x.com" },
                { Icon: PlayIcon, label: "YouTube", url: "https://youtube.com" },
                { Icon: ChatIcon, label: "Discord", url: "https://discord.com" },
              ].map(({ Icon, label, url }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center border border-line text-fog transition-all duration-200 hover:-translate-y-0.5 hover:border-amber hover:text-amber"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {COLS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="font-mono text-[11px] tracking-[0.24em] text-amber">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l, i) => (
                  <li key={l}>
                    <a
                      href={col.hrefs[i]}
                      className="group flex items-center gap-2 text-[13px] text-fog transition-colors hover:text-snow"
                    >
                      <span className="h-px w-0 bg-amber transition-all duration-300 group-hover:w-3" />
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
          <p className="font-mono text-[11px] tracking-wider text-fog">
            © 2026 VOLTWORKS LABS LLC · ALL CIRCUITS RESERVED
          </p>
          <div className="flex gap-2">
            {["VISA", "MC", "AMEX", "PAYPAL", "CRYPTO"].map((p) => (
              <span
                key={p}
                className="border border-line px-2.5 py-1 font-mono text-[10px] tracking-[0.14em] text-fog transition-colors hover:border-line2 hover:text-snow"
              >
                {p}
              </span>
            ))}
          </div>
          <a
            href="#top"
            className="group flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] text-fog transition-colors hover:text-amber"
          >
            BACK TO TOP
            <span className="transition-transform duration-200 group-hover:-translate-y-0.5">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
