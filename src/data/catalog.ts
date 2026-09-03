export const IMG = {
  hero: "https://image.qwenlm.ai/generated-images/3393ad20-31dc-46ce-8f7d-b94c7f2862ec/_result.png",
  gpu: "https://image.qwenlm.ai/generated-images/522de8bc-d5aa-4a9a-b711-3052ad655b57/_result.png",
  cpu: "https://image.qwenlm.ai/generated-images/275660e6-6d97-448d-a622-0ee53465d143/_result.png",
  ram: "https://image.qwenlm.ai/generated-images/22b548b4-8374-40de-8c6f-33fdceccf2e7/_result.png",
  cooler: "https://image.qwenlm.ai/generated-images/e4b4aa18-6cfb-49f9-b7fe-d97cded08c7f/_result.png",
  ssd: "https://image.qwenlm.ai/generated-images/ffa73226-59b1-4184-96d9-5b233faacb77/_result.png",
  case: "https://image.qwenlm.ai/generated-images/70ad7355-2005-4891-85af-467ec5477371/_result.png",
  keyboard: "https://image.qwenlm.ai/generated-images/25a70284-1f78-4d4f-97b1-ae973337008c/_result.png",
  mouse: "https://image.qwenlm.ai/generated-images/66f3bbb5-e89a-42a9-a418-8f03a24784ac/_result.png",
  psu: "https://image.qwenlm.ai/generated-images/8b42612a-5de0-478e-baed-a8be3afeecc7/_result.png",
};

export type CategoryId =
  | "gpu"
  | "cpu"
  | "ram"
  | "cooler"
  | "ssd"
  | "case"
  | "peri"
  | "psu";

export type Product = {
  id: string;
  name: string;
  brand: string;
  cat: CategoryId;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  stock: "In stock" | "Low stock" | "Pre-order";
  img: string;
  tag?: string;
  blurb: string;
};

export const CATEGORIES: { id: CategoryId | "all"; label: string; icon: string }[] = [
  { id: "all", label: "All gear", icon: "bolt" },
  { id: "gpu", label: "Graphics", icon: "gpu" },
  { id: "cpu", label: "Processors", icon: "cpu" },
  { id: "ram", label: "Memory", icon: "ram" },
  { id: "cooler", label: "Cooling", icon: "fan" },
  { id: "ssd", label: "Storage", icon: "ssd" },
  { id: "case", label: "Cases", icon: "case" },
  { id: "peri", label: "Peripherals", icon: "keyboard" },
  { id: "psu", label: "Power", icon: "psu" },
];

export const PRODUCTS: Product[] = [
  {
    id: "gpu-x9",
    name: "Hyperion X9 OC 24GB",
    brand: "VOLTWORKS LAB",
    cat: "gpu",
    price: 1899,
    oldPrice: 2099,
    rating: 4.9,
    reviews: 312,
    stock: "In stock",
    img: IMG.gpu,
    tag: "Flagship",
    blurb: "Triple-fan flagship. 24GB GDDR7, dual BIOS, 450W of controlled violence.",
  },
  {
    id: "cpu-x9",
    name: "Vanta X9 16-Core",
    brand: "VOLTWORKS LAB",
    cat: "cpu",
    price: 549,
    rating: 4.8,
    reviews: 201,
    stock: "In stock",
    img: IMG.cpu,
    tag: "Unlocked",
    blurb: "16 cores / 32 threads, unlocked multiplier. The editor's favorite.",
  },
  {
    id: "ram-64",
    name: "Ionclad DDR5 64GB 6400",
    brand: "IONCLAD",
    cat: "ram",
    price: 189,
    rating: 4.7,
    reviews: 154,
    stock: "In stock",
    img: IMG.ram,
    blurb: "2×32GB @ 6400 MT/s, CL32. XMP in one click, stable for days.",
  },
  {
    id: "aio-360",
    name: "Glacier 360 AIO",
    brand: "GLACIER",
    cat: "cooler",
    price: 159,
    rating: 4.8,
    reviews: 98,
    stock: "In stock",
    img: IMG.cooler,
    tag: "Whisper-quiet",
    blurb: "360mm radiator, three silent fans, pump head that idles at 19 dBA.",
  },
  {
    id: "ssd-2tb",
    name: "Blade NV5 2TB Gen5",
    brand: "BLADE",
    cat: "ssd",
    price: 179,
    oldPrice: 219,
    rating: 4.9,
    reviews: 260,
    stock: "In stock",
    img: IMG.ssd,
    tag: "12.4 GB/s",
    blurb: "Gen5 NVMe, 12,400 MB/s reads. Your load screens are now a rumor.",
  },
  {
    id: "case-800",
    name: "Forge 800 Airflow",
    brand: "FORGE",
    cat: "case",
    price: 129,
    rating: 4.6,
    reviews: 143,
    stock: "In stock",
    img: IMG.case,
    blurb: "High-airflow mesh tower, 4× 140mm fans included, tool-less glass.",
  },
  {
    id: "kb-k87",
    name: "Keyframe K87 Hall-Effect",
    brand: "KEYFRAME",
    cat: "peri",
    price: 149,
    rating: 4.8,
    reviews: 87,
    stock: "Low stock",
    img: IMG.keyboard,
    tag: "Hot-swap",
    blurb: "Hall-effect switches, 8K polling, gasket mount. Thock, engineered.",
  },
  {
    id: "mouse-4k",
    name: "Specter 4K Wireless",
    brand: "SPECTER",
    cat: "peri",
    price: 89,
    rating: 4.7,
    reviews: 176,
    stock: "In stock",
    img: IMG.mouse,
    blurb: "58g wireless, 4,000 Hz polling, 90-hour battery. Flicks, landed.",
  },
  {
    id: "psu-1000",
    name: "Voltcore 1000W Platinum",
    brand: "VOLTCORE",
    cat: "psu",
    price: 189,
    rating: 4.9,
    reviews: 210,
    stock: "In stock",
    img: IMG.psu,
    tag: "80+ Platinum",
    blurb: "Fully modular, zero-RPM fan mode, 10-year capacitor warranty.",
  },
];

export const FEATURED = {
  id: "build-apex",
  name: "APEX TITAN — Build 004",
  price: 3899,
  oldPrice: 4299,
  stockNote: "3 units in the workshop",
  specs: [
    { label: "GPU", value: "Hyperion X9 24GB", pct: 98 },
    { label: "CPU", value: "Vanta X9 16-Core", pct: 94 },
    { label: "MEM", value: "64GB DDR5-6400", pct: 88 },
    { label: "COOL", value: "Glacier 360 AIO", pct: 91 },
  ],
  chips: ["RTX-CLASS 24GB", "DDR5 6400", "GEN5 4TB", "360MM AIO"],
};

export type BuilderPart = {
  id: string;
  name: string;
  spec: string;
  price: number;
  watts: number;
  psuWatts?: number;
};

export const BUILDER_GROUPS: {
  id: string;
  label: string;
  hint: string;
  options: BuilderPart[];
}[] = [
  {
    id: "cpu",
    label: "Processor",
    hint: "Cores decide your ceiling",
    options: [
      { id: "cpu-6", name: "Vanta 6", spec: "6C / 12T · 4.9 GHz", price: 229, watts: 65 },
      { id: "cpu-x8", name: "Vanta X8", spec: "8C / 16T · 5.4 GHz", price: 389, watts: 105 },
      { id: "cpu-x9", name: "Vanta X9", spec: "16C / 32T · 5.7 GHz", price: 549, watts: 170 },
    ],
  },
  {
    id: "gpu",
    label: "Graphics card",
    hint: "Where your frames come from",
    options: [
      { id: "gpu-s7", name: "Hyperion S7", spec: "12GB GDDR7", price: 749, watts: 220 },
      { id: "gpu-x8", name: "Hyperion X8", spec: "16GB GDDR7", price: 1199, watts: 320 },
      { id: "gpu-x9", name: "Hyperion X9", spec: "24GB GDDR7", price: 1899, watts: 450 },
    ],
  },
  {
    id: "ram",
    label: "Memory",
    hint: "DDR5, one kit, zero drama",
    options: [
      { id: "ram-16", name: "Ionclad 16GB", spec: "2×8 · 6000 MT/s", price: 69, watts: 10 },
      { id: "ram-32", name: "Ionclad 32GB", spec: "2×16 · 6400 MT/s", price: 109, watts: 12 },
      { id: "ram-64", name: "Ionclad 64GB", spec: "2×32 · 6400 MT/s", price: 189, watts: 15 },
    ],
  },
  {
    id: "ssd",
    label: "Storage",
    hint: "Gen5 if you hate waiting",
    options: [
      { id: "ssd-1", name: "Blade 1TB", spec: "Gen4 · 7,000 MB/s", price: 99, watts: 8 },
      { id: "ssd-2", name: "Blade 2TB", spec: "Gen5 · 12,400 MB/s", price: 179, watts: 9 },
      { id: "ssd-4", name: "Blade 4TB", spec: "Gen5 · 12,400 MB/s", price: 329, watts: 10 },
    ],
  },
  {
    id: "psu",
    label: "Power supply",
    hint: "Headroom is a feature",
    options: [
      { id: "psu-650", name: "Voltcore 650", spec: "80+ Gold · modular", price: 89, watts: 0, psuWatts: 650 },
      { id: "psu-850", name: "Voltcore 850", spec: "80+ Gold · modular", price: 129, watts: 0, psuWatts: 850 },
      { id: "psu-1000", name: "Voltcore 1000", spec: "80+ Platinum · ATX 3.1", price: 189, watts: 0, psuWatts: 1000 },
    ],
  },
];

export const BASE_WATTS = 55; // mobo + fans + rgb

export const DEALS = [
  { productId: "gpu-x9", dealPrice: 1599, claimed: 78 },
  { productId: "ssd-2tb", dealPrice: 129, claimed: 46 },
  { productId: "kb-k87", dealPrice: 109, claimed: 63 },
];

export const BRANDS = [
  "NVIDIA",
  "AMD",
  "INTEL",
  "ASUS",
  "MSI",
  "CORSAIR",
  "SAMSUNG",
  "NZXT",
  "LOGITECH G",
  "RAZER",
  "GIGABYTE",
  "BE QUIET!",
];

export const TICKER = [
  "HYPERION X9 BACK IN STOCK",
  "FREE ASSEMBLY ON EVERY BUILD",
  "DDR5 6400 KIT — $189",
  "GEN5 BENCH: 12.4 GB/S",
  "TRADE-IN CREDIT UP TO $600",
  "3-YEAR WARRANTY STANDARD",
  "SAME-DAY DISPATCH BEFORE 2 PM",
];

export const REVIEWS = [
  {
    quote:
      "They cable-managed things I didn't know my case could hide. Boots in 9 seconds, silent at idle. This is what buying a PC should feel like.",
    name: "Dana Reyes",
    rig: "APEX TITAN · owner since '25",
    stars: 5,
  },
  {
    quote:
      "Upgraded my GPU and they turned my old card into trade-in credit on the spot. Genuinely painless.",
    name: "Marcus Tran",
    rig: "Forge 800 build",
    stars: 5,
  },
  {
    quote: "Called support on a Sunday. A human answered. On a Sunday.",
    name: "Priya Shah",
    rig: "Vanta X8 workstation",
    stars: 5,
  },
  {
    quote:
      "The builder tool's wattage estimate was within 12W of my wall meter. Absolute nerds. Love it.",
    name: "Leo Kaufmann",
    rig: "Hyperion X8 build",
    stars: 4,
  },
];

export const fmt = (n: number) =>
  "$" + n.toLocaleString("en-US", { maximumFractionDigits: 0 });
