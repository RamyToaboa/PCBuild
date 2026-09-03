import { useState } from "react";
import { fmt } from "../data/catalog";
import {
  ArrowIcon,
  BoltIcon,
  CartIcon,
  CheckIcon,
  MinusIcon,
  PlusIcon,
  TrashIcon,
  XIcon,
} from "./Icons";

export type CartLine = {
  id: string;
  name: string;
  price: number;
  qty: number;
  img?: string;
  detail?: string;
};

export default function CartDrawer({
  open,
  lines,
  onClose,
  onQty,
  onRemove,
}: {
  open: boolean;
  lines: CartLine[];
  onClose: () => void;
  onQty: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}) {
  const [placed, setPlaced] = useState(false);
  const [orderNo] = useState(() => `VW-${Math.floor(1000 + Math.random() * 9000)}`);

  const subtotal = lines.reduce((s, l) => s + l.price * l.qty, 0);
  const count = lines.reduce((s, l) => s + l.qty, 0);

  const close = () => {
    onClose();
    if (placed) window.setTimeout(() => setPlaced(false), 400);
  };

  return (
    <>
      {/* overlay */}
      <div
        onClick={close}
        className={`fixed inset-0 z-[80] bg-deep/70 backdrop-blur-[2px] transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
      />
      {/* panel */}
      <aside
        className={`fixed right-0 top-0 z-[90] flex h-full w-full max-w-md flex-col border-l border-line bg-ink transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Shopping cart"
      >
        <header className="flex items-center justify-between border-b border-line px-5 py-4">
          <h2 className="flex items-center gap-3 font-display text-lg font-bold tracking-[0.08em] text-snow">
            <CartIcon className="h-5 w-5 text-amber" />
            YOUR CRATE
            <span className="border border-line px-2 py-0.5 font-mono text-[11px] text-fog">
              {count}
            </span>
          </h2>
          <button
            onClick={close}
            className="grid h-9 w-9 place-items-center border border-line text-fog transition-colors hover:border-ember hover:text-ember"
            aria-label="Close cart"
          >
            <XIcon className="h-4 w-4" />
          </button>
        </header>

        {placed ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-5 px-8 text-center">
            <span className="grid h-16 w-16 place-items-center border-2 border-volt text-volt">
              <CheckIcon className="h-8 w-8" />
            </span>
            <div>
              <p className="font-display text-2xl font-bold text-snow">ORDER LOCKED IN</p>
              <p className="mt-2 font-mono text-[12px] tracking-[0.18em] text-amber">{orderNo}</p>
              <p className="mt-3 text-[13px] leading-relaxed text-fog">
                This is a demo checkout — no card was charged. In the real
                workshop, a tech would already be picking your parts.
              </p>
            </div>
            <button
              onClick={close}
              className="border border-line px-6 py-3 font-display text-[13px] font-bold tracking-[0.14em] text-snow transition-colors hover:border-amber hover:text-amber"
            >
              BACK TO THE SHOP
            </button>
          </div>
        ) : lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
            <BoltIcon className="h-10 w-10 text-line2" />
            <p className="font-display text-xl font-bold text-snow">CRATE'S EMPTY</p>
            <p className="text-[13px] leading-relaxed text-fog">
              No parts on board yet. The lineup is one scroll away.
            </p>
            <a
              href="#shop"
              onClick={close}
              className="mt-2 flex items-center gap-2 bg-amber px-6 py-3 font-display text-[13px] font-bold tracking-[0.14em] text-ink transition-colors hover:bg-snow"
            >
              BROWSE THE LINEUP <ArrowIcon className="h-4 w-4" />
            </a>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-line overflow-y-auto px-5">
              {lines.map((l) => (
                <li key={l.id} className="flex gap-4 py-4">
                  {l.img && (
                    <img
                      src={l.img}
                      alt=""
                      className="h-16 w-16 shrink-0 border border-line object-cover"
                    />
                  )}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <p className="truncate font-display text-[14px] font-bold text-snow">
                        {l.name}
                      </p>
                      <button
                        onClick={() => onRemove(l.id)}
                        className="text-fog transition-colors hover:text-ember"
                        aria-label={`Remove ${l.name}`}
                      >
                        <TrashIcon className="h-4 w-4" />
                      </button>
                    </div>
                    {l.detail && (
                      <p className="mt-0.5 truncate font-mono text-[10px] tracking-wider text-fog">
                        {l.detail.toUpperCase()}
                      </p>
                    )}
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center border border-line">
                        <button
                          onClick={() => onQty(l.id, -1)}
                          className="grid h-7 w-7 place-items-center text-fog transition-colors hover:bg-panel hover:text-amber"
                          aria-label="Decrease quantity"
                        >
                          <MinusIcon className="h-3 w-3" />
                        </button>
                        <span className="w-8 text-center font-mono text-[12px] text-snow">
                          {l.qty}
                        </span>
                        <button
                          onClick={() => onQty(l.id, 1)}
                          className="grid h-7 w-7 place-items-center text-fog transition-colors hover:bg-panel hover:text-amber"
                          aria-label="Increase quantity"
                        >
                          <PlusIcon className="h-3 w-3" />
                        </button>
                      </div>
                      <span className="font-mono text-[13px] font-semibold text-amber">
                        {fmt(l.price * l.qty)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <footer className="border-t border-line px-5 py-5">
              <div className="flex justify-between font-mono text-[12px] text-fog">
                <span>INSURED SHIPPING</span>
                <span className="text-volt">FREE</span>
              </div>
              <div className="mt-2 flex items-end justify-between">
                <span className="font-mono text-[12px] tracking-[0.2em] text-fog">SUBTOTAL</span>
                <span className="font-display text-3xl font-bold text-snow">{fmt(subtotal)}</span>
              </div>
              <button
                onClick={() => setPlaced(true)}
                className="mt-4 flex w-full items-center justify-center gap-3 bg-amber py-4 font-display text-sm font-bold tracking-[0.14em] text-ink transition-all duration-200 hover:bg-snow hover:shadow-[0_0_32px_rgba(255,174,26,0.3)] active:scale-[0.98]"
              >
                <BoltIcon className="h-4 w-4" /> CHECKOUT — {fmt(subtotal)}
              </button>
              <p className="mt-3 text-center font-mono text-[10px] tracking-[0.16em] text-fog">
                DEMO CHECKOUT · NO CARD REQUIRED
              </p>
            </footer>
          </>
        )}
      </aside>
    </>
  );
}
