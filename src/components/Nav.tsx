import { useEffect, useState } from "react";
import { TICKER } from "../data/catalog";
import { BoltIcon, CartIcon, MenuIcon, XIcon } from "./Icons";

const LINKS = [
  { href: "#shop", label: "The Lineup" },
  { href: "#builder", label: "Build Yours" },
  { href: "#deals", label: "Flash Deals" },
  { href: "#reviews", label: "Build Stories" },
  { href: "#support", label: "Support" },
];

export default function Nav({
  cartCount,
  onCartOpen,
}: {
  cartCount: number;
  onCartOpen: () => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const tickerRow = (key: string) => (
    <div key={key} className="flex shrink-0 items-center gap-8 pr-8">
      {TICKER.map((t) => (
        <span key={key + t} className="flex items-center gap-2 whitespace-nowrap">
          <BoltIcon className="h-3 w-3" />
          {t}
        </span>
      ))}
    </div>
  );

  return (
    <header className="sticky top-0 z-50">
      {/* status ticker */}
      <div className="marquee-hover overflow-hidden bg-amber text-ink">
        <div className="anim-marquee-fast font-mono text-[11px] font-semibold tracking-[0.14em] py-1.5 flex w-max">
          {tickerRow("a")}
          {tickerRow("b")}
        </div>
      </div>

      {/* main bar */}
      <nav
        className={`border-b border-line transition-all duration-300 ${
          scrolled ? "bg-deep/95 shadow-[0_10px_40px_rgba(0,0,0,0.5)]" : "bg-ink/95"
        } backdrop-blur-sm`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#top" className="group flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center bg-amber text-ink transition-transform duration-300 group-hover:-rotate-12">
              <BoltIcon className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-bold tracking-[0.08em]">
              VOLT<span className="text-amber">WORKS</span>
            </span>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative font-mono text-[12px] font-medium tracking-[0.14em] text-fog transition-colors hover:text-snow"
              >
                {l.label.toUpperCase()}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-amber transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="mr-1 hidden items-center gap-1.5 font-mono text-[11px] text-fog md:flex">
              <span className="anim-blink h-1.5 w-1.5 rounded-full bg-volt" />
              WORKSHOP OPEN
            </span>
            <button
              onClick={onCartOpen}
              className="relative grid h-10 w-10 place-items-center border border-line text-snow transition-all hover:border-amber hover:text-amber active:scale-90"
              aria-label="Open cart"
            >
              <CartIcon className="h-5 w-5" />
              {cartCount > 0 && (
                <span
                  key={cartCount}
                  className="anim-pop absolute -right-2 -top-2 grid h-5 min-w-5 place-items-center bg-amber px-1 font-mono text-[11px] font-semibold text-ink"
                >
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center border border-line text-snow transition-colors hover:border-amber hover:text-amber lg:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* mobile menu */}
        <div
          className={`overflow-hidden border-line transition-all duration-300 lg:hidden ${
            menuOpen ? "max-h-72 border-t" : "max-h-0"
          }`}
        >
          <div className="flex flex-col bg-deep px-4 py-2">
            {LINKS.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between border-b border-line/60 py-3 font-mono text-[13px] tracking-[0.14em] text-fog transition-colors hover:text-amber last:border-0"
              >
                <span>{l.label.toUpperCase()}</span>
                <span className="text-amber">0{i + 1}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
