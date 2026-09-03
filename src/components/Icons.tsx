import type { ReactElement } from "react";

type P = { className?: string };

const base = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const BoltIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M13 2 4.5 13.5H11L9.5 22 19 10h-6.5L13 2Z" fill="currentColor" stroke="none" />
  </svg>
);

export const ChipIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
    <rect x="6" y="6" width="12" height="12" />
    <rect x="9.5" y="9.5" width="5" height="5" />
    <path d="M9 2.5v3.5M15 2.5V6M9 18v3.5M15 18v3.5M2.5 9H6M2.5 15H6M18 9h3.5M18 15h3.5" />
  </svg>
);

export const GpuIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
    <rect x="2.5" y="7" width="19" height="10" />
    <circle cx="9" cy="12" r="2.6" />
    <circle cx="16.5" cy="12" r="2.6" />
    <path d="M2.5 9.5h2M2.5 14.5h2M6 17v2.5M18 17v2.5" />
  </svg>
);

export const RamIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
    <rect x="2.5" y="7.5" width="19" height="8" />
    <path d="M6 10.5v2M9.5 10.5v2M13 10.5v2M16.5 10.5v2M5 15.5V18M10 15.5V18M14 15.5V18M19 15.5V18" />
  </svg>
);

export const FanIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="1.8" />
    <path d="M12 10.2c0-3 1.2-4.8 3.4-5.4M13.8 12c3 0 4.8 1.2 5.4 3.4M12 13.8c0 3-1.2 4.8-3.4 5.4M10.2 12c-3 0-4.8-1.2-5.4-3.4" />
  </svg>
);

export const SsdIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
    <rect x="2.5" y="8.5" width="19" height="7" />
    <path d="M5.5 11v2M8.5 11v2M11.5 11v2M14.5 11v2M17.5 11v2" />
  </svg>
);

export const CaseIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
    <rect x="6" y="2.5" width="12" height="19" />
    <circle cx="12" cy="5.5" r="0.9" />
    <path d="M8.5 9h7M8.5 12h7M8.5 15h7" />
  </svg>
);

export const KeyboardIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
    <rect x="2.5" y="7" width="19" height="10" />
    <path d="M5.5 10h1M8.5 10h1M11.5 10h1M14.5 10h1M17.5 10h1M5.5 13h1M17.5 13h1M8 13h8" />
  </svg>
);

export const MouseIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
    <rect x="7.5" y="3" width="9" height="18" rx="4.5" />
    <path d="M12 6v4M7.5 10.5h9" />
  </svg>
);

export const PsuIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
    <rect x="2.5" y="7" width="19" height="10" />
    <circle cx="8.5" cy="12" r="2.8" />
    <path d="M15 9.5h4M15 12h4M15 14.5h4" />
  </svg>
);

export const CartIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
    <path d="M3 4h2.2l2.4 11.2h11.2L21 7.5H6.1" />
    <circle cx="9" cy="19.5" r="1.4" />
    <circle cx="17" cy="19.5" r="1.4" />
  </svg>
);

export const StarIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      d="M12 2.8l2.7 5.9 6.3.7-4.7 4.3 1.3 6.2L12 16.7l-5.6 3.2 1.3-6.2L3 9.4l6.3-.7L12 2.8Z"
      fill="currentColor"
    />
  </svg>
);

export const SearchIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
    <circle cx="10.5" cy="10.5" r="6.5" />
    <path d="m15.5 15.5 5 5" />
  </svg>
);

export const ArrowIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
    <path d="M4 12h15M13 6l6 6-6 6" />
  </svg>
);

export const PlusIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const MinusIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
    <path d="M5 12h14" />
  </svg>
);

export const XIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
);

export const CheckIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
    <path d="m4.5 12.5 5 5 10-11" />
  </svg>
);

export const TrashIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
    <path d="M4 6.5h16M9 6.5V4h6v2.5M6.5 6.5 7.5 20h9l1-13.5M10 10.5v6M14 10.5v6" />
  </svg>
);

export const WrenchIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
    <path d="M14.5 3.5a5 5 0 0 0-4.9 6.2L3.5 15.8a2 2 0 1 0 2.8 2.8l6.1-6.1a5 5 0 0 0 6.2-4.9l-3 1-1.6-1.6 1-3Z" />
  </svg>
);

export const ShieldIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
    <path d="M12 2.5 4.5 5.5v6c0 5 3.2 8.4 7.5 10 4.3-1.6 7.5-5 7.5-10v-6L12 2.5Z" />
    <path d="m8.8 11.8 2.2 2.2 4.2-4.5" />
  </svg>
);

export const TruckIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
    <path d="M2.5 6h11v10h-11zM13.5 9.5h4.5l3 3.5v3h-7.5" />
    <circle cx="6.5" cy="17.5" r="1.8" />
    <circle cx="17" cy="17.5" r="1.8" />
  </svg>
);

export const SwapIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
    <path d="M7 4 3.5 7.5 7 11M3.5 7.5H17M17 13l3.5 3.5L17 20M20.5 16.5H7" />
  </svg>
);

export const MenuIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
    <path d="M4 7h16M4 12h16M4 17h10" />
  </svg>
);

export const XSocialIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
    <path d="m4.5 4.5 15 15M19.5 4.5l-15 15" />
  </svg>
);

export const PlayIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
    <rect x="3" y="5.5" width="18" height="13" rx="3" />
    <path d="m10 9.5 5 2.5-5 2.5z" fill="currentColor" stroke="none" />
  </svg>
);

export const ChatIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
    <path d="M4 5.5h16v11H9.5L4 20.5v-15Z" />
    <path d="M8 9.5h8M8 12.5h5" />
  </svg>
);

export const CAT_ICONS: Record<string, (p: P) => ReactElement> = {
  bolt: BoltIcon,
  gpu: GpuIcon,
  cpu: ChipIcon,
  ram: RamIcon,
  fan: FanIcon,
  ssd: SsdIcon,
  case: CaseIcon,
  keyboard: KeyboardIcon,
  mouse: MouseIcon,
  psu: PsuIcon,
};
