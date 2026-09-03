import { useCallback, useRef, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Shop from "./components/Shop";
import Builder from "./components/Builder";
import Deals from "./components/Deals";
import { BrandRail, Reviews, Services } from "./components/Extras";
import Footer from "./components/Footer";
import CartDrawer, { type CartLine } from "./components/CartDrawer";
import { BoltIcon } from "./components/Icons";
import type { CategoryId } from "./data/catalog";

type AddPayload = {
  id: string;
  name: string;
  price: number;
  img?: string;
  detail?: string;
};

export default function App() {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [cat, setCat] = useState<CategoryId | "all">("all");
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<number>(0);

  const ping = useCallback((msg: string) => {
    setToast(msg);
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(null), 2600);
  }, []);

  const addLine = useCallback(
    (item: AddPayload) => {
      setLines((prev) => {
        const existing = item.id.startsWith("build-")
          ? undefined
          : prev.find((l) => l.id === item.id);
        if (existing) {
          return prev.map((l) => (l.id === item.id ? { ...l, qty: l.qty + 1 } : l));
        }
        return [...prev, { ...item, qty: 1 }];
      });
      ping(`ADDED TO CRATE — ${item.name.toUpperCase()}`);
    },
    [ping]
  );

  const setQty = useCallback((id: string, delta: number) => {
    setLines((prev) =>
      prev
        .map((l) => (l.id === id ? { ...l, qty: l.qty + delta } : l))
        .filter((l) => l.qty > 0)
    );
  }, []);

  const removeLine = useCallback(
    (id: string) => setLines((prev) => prev.filter((l) => l.id !== id)),
    []
  );

  const cartCount = lines.reduce((s, l) => s + l.qty, 0);

  return (
    <div className="relative min-h-screen">
      {/* ambient background layers */}
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
        <div className="grid-lines absolute inset-0" />
        <div
          className="absolute -top-32 left-1/4 h-[36rem] w-[36rem] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(69,227,184,0.07), transparent 62%)" }}
        />
        <div
          className="absolute right-0 top-1/3 h-[30rem] w-[30rem] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,174,26,0.06), transparent 60%)" }}
        />
      </div>
      <div className="noise" aria-hidden="true" />

      <div className="relative z-10">
        <Nav cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
        <main>
          <Hero onAdd={addLine} />
          <Categories active={cat} onPick={setCat} />
          <Shop cat={cat} onCat={setCat} onAdd={addLine} />
          <BrandRail />
          <Builder onAdd={addLine} />
          <Deals onAdd={addLine} />
          <Reviews />
          <Services />
        </main>
        <Footer />
      </div>

      {/* toast */}
      {toast && (
        <div
          className="anim-toast fixed bottom-5 left-5 z-[100] flex items-center gap-3 border border-amber bg-deep px-4 py-3 shadow-[0_16px_44px_rgba(0,0,0,0.5)]"
          role="status"
        >
          <BoltIcon className="h-4 w-4 shrink-0 text-amber" />
          <span className="max-w-[52vw] truncate font-mono text-[12px] tracking-wider text-snow">
            {toast}
          </span>
          <button
            onClick={() => setCartOpen(true)}
            className="ml-1 shrink-0 border border-line px-2.5 py-1 font-mono text-[10px] font-semibold tracking-[0.14em] text-amber transition-colors hover:bg-amber hover:text-ink"
          >
            VIEW
          </button>
        </div>
      )}

      <CartDrawer
        open={cartOpen}
        lines={lines}
        onClose={() => setCartOpen(false)}
        onQty={setQty}
        onRemove={removeLine}
      />
    </div>
  );
}
