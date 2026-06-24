import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Coffee, MapPin, Phone, Clock, Star, Wifi, Sofa, Leaf, Award,
 ChevronLeft, ChevronRight, Plus, Menu, X,
  Sparkles,
} from "lucide-react";

import entranceA from "../assets/cl/exterior_entrance.webp";
import seatingA from "../assets/cl/interior_seating_area.webp";
import counterA from "../assets/cl/interior_counter.webp";
import servingA from "../assets/cl/interior_servering_area.webp";
import vibesWallA from "../assets/cl/interior_good_vibes_wall.webp";
import vibes2A from "../assets/cl/interior_good_vibes2.webp";
import burgerA from "../assets/cl/food_food4.webp";
import friesBurgerA from "../assets/cl/food_food1friesburger.webp";
import sandwichA from "../assets/cl/food_food3.webp";
import omeletA from "../assets/cl/food_food2.webp";
import pizzaA from "../assets/cl/food_pizza.webp";
import pizza2A from "../assets/cl/food_pizza2.webp";
import dessertA from "../assets/cl/food_desert.webp";
import dessert2A from "../assets/cl/food_desert2.webp";
import foodCoffeeA from "../assets/cl/food_coffee.webp";
import bevCoffeeA from "../assets/cl/beverages_coffee.webp";
import milkshakeA from "../assets/cl/beverages_milkshake.webp";
import milkshake2A from "../assets/cl/beverages_milksahke2.jpg";

const entrance = entranceA;
const seating = seatingA;
const counter = counterA;
const serving = servingA;
const vibesWall = vibesWallA;
const vibes2 = vibes2A;
const burger = burgerA;
const friesBurger = friesBurgerA;
const sandwich = sandwichA;
const omelet = omeletA;
const pizza = pizzaA;
const pizza2 = pizza2A;
const dessert = dessertA;
const dessert2 = dessert2A;
const foodCoffee = foodCoffeeA;
const bevCoffee = bevCoffeeA;
const milkshake = milkshakeA;
const milkshake2 = milkshake2A;


type Item = { name: string; desc: string; price: string; rating: string; img: string; tag: string };

const menu: Item[] = [
  { name: "Classic Cheese Burger", desc: "Toasted bun, juicy patty, fresh veggies, house sauce.", price: "₹149", rating: "4.8", img: burger, tag: "Burgers" },
  { name: "Wood-Fired Pizza", desc: "Stone-baked crust, melted mozzarella, fresh toppings.", price: "₹199", rating: "4.9", img: pizza, tag: "Pizza" },
  { name: "Grilled Club Sandwich", desc: "Triple-layer grilled with fries and dip.", price: "₹129", rating: "4.7", img: sandwich, tag: "Sandwich" },
  { name: "Cheesy Masala Omelet", desc: "Fluffy eggs, herbs, toasted bread, mayo drizzle.", price: "₹89", rating: "4.6", img: omelet, tag: "Breakfast" },
  { name: "Brownie à la Mode", desc: "Warm chocolate brownie, melted ganache.", price: "₹99", rating: "4.9", img: dessert, tag: "Desserts" },
  { name: "Signature Milkshake", desc: "Thick blended shake, whipped cream topping.", price: "₹119", rating: "4.8", img: milkshake, tag: "Beverages" },
  { name: "Pepperoni Special", desc: "Hand-tossed pizza with classic toppings.", price: "₹229", rating: "4.8", img: pizza2, tag: "Pizza" },
  { name: "Fries & Burger Combo", desc: "Crispy fries with our signature burger.", price: "₹179", rating: "4.7", img: friesBurger, tag: "Combos" },
];

const reviews = [
  { name: "Ananya Reddy", text: "The cappuccino here is the best I've had. Cozy place, lovely staff.", rating: 5 },
  { name: "Rahul Sharma", text: "My favourite work-from-café spot. Fast WiFi, great mocha, comfortable seating.", rating: 5 },
  { name: "Priya Nair", text: "Loved the ambience and the food! Definitely coming back with friends.", rating: 5 },
  { name: "Vikram Iyer", text: "Hidden gem in town. The cold brew is rich and smooth.", rating: 5 },
  { name: "Sneha Das", text: "Beautiful interior, friendly people, and that hazelnut latte… perfection.", rating: 5 },
  { name: "Arjun Kumar", text: "Coffee Land is now my Sunday ritual. Real flavours, real comfort.", rating: 5 },
];

const categories = ["BURGERS", "PIZZA", "SANDWICHES", "DESSERTS", "MILKSHAKES", "COFFEE", "GOOD VIBES", "GOOD FOOD"];

type GalleryItem = { src: string; cat: string; alt: string };
const galleryItems: GalleryItem[] = [
  { src: entrance, cat: "Exterior", alt: "Coffee Land entrance" },
  { src: seating, cat: "Interior", alt: "Cozy seating area" },
  { src: counter, cat: "Interior", alt: "Café counter" },
  { src: serving, cat: "Ambience", alt: "Serving area" },
  { src: vibesWall, cat: "Ambience", alt: "Good Vibes Only wall" },
  { src: vibes2, cat: "Ambience", alt: "Good Vibes corner" },
  { src: pizza, cat: "Food", alt: "Wood-fired pizza" },
  { src: pizza2, cat: "Food", alt: "Pepperoni pizza" },
  { src: burger, cat: "Food", alt: "Signature burger" },
  { src: friesBurger, cat: "Food", alt: "Fries and burger combo" },
  { src: sandwich, cat: "Food", alt: "Grilled sandwich" },
  { src: omelet, cat: "Food", alt: "Masala omelet" },
  { src: dessert, cat: "Desserts", alt: "Chocolate brownie" },
  { src: dessert2, cat: "Desserts", alt: "Dessert plating" },
  { src: milkshake, cat: "Beverages", alt: "Signature milkshake" },
  { src: milkshake2, cat: "Beverages", alt: "Iced milkshake" },
  { src: bevCoffee, cat: "Beverages", alt: "Hot coffee" },
  { src: foodCoffee, cat: "Beverages", alt: "Coffee served" },
];

const galleryCats = ["All", "Exterior", "Interior", "Food", "Desserts", "Beverages", "Ambience"];

function Logo({ className = "", dark = false }: { className?: string; dark?: boolean }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={`grid h-9 w-9 place-items-center rounded-full ${dark ? "bg-cream text-espresso" : "bg-espresso text-cream"}`}>
        <Coffee className="h-5 w-5" />
      </div>
      <div className="leading-tight">
        <div className={`font-display text-lg font-bold tracking-tight ${dark ? "text-cream" : ""}`}>Coffee Land</div>
        <div className={`text-[10px] uppercase tracking-[0.2em] ${dark ? "text-cream/60" : "text-muted-foreground"}`}>Resto & Café</div>
      </div>
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    { href: "#menu", label: "Menu" },
    { href: "#about", label: "About" },
    { href: "#vibes", label: "Vibes" },
    { href: "#gallery", label: "Gallery" },
    { href: "#visit", label: "Visit" },
  ];
  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${scrolled ? "bg-cream/95 shadow-lg backdrop-blur" : "bg-transparent"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo dark={!scrolled} />
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={`text-sm font-medium transition ${scrolled ? "text-espresso hover:text-coffee" : "text-cream/80 hover:text-cream"}`}>
              {l.label}
            </a>
          ))}
        </nav>
        <Link to="/order" className={`hidden rounded-full px-5 py-2.5 text-sm font-medium transition md:inline-flex ${scrolled ? "bg-espresso text-cream hover:bg-coffee" : "bg-cream text-espresso hover:bg-beige"}`}>
          Order Now
        </Link>
        <button onClick={() => setOpen(!open)} className={`md:hidden ${scrolled ? "text-espresso" : "text-cream"}`} aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="mx-6 rounded-2xl bg-card p-4 shadow-xl md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2 text-sm font-medium text-espresso">
              {l.label}
            </a>
          ))}
          <Link to="/order" onClick={() => setOpen(false)} className="mt-2 block rounded-full bg-espresso px-5 py-2.5 text-center text-sm font-medium text-cream">
            Order Now
          </Link>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden text-cream">
      <img src={entrance} alt="Coffee Land storefront" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/85 via-espresso/55 to-espresso/95" />
      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col items-center justify-center px-6 pb-20 pt-36 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-cream/90 backdrop-blur">
          <Sparkles className="h-3.5 w-3.5" /> Good Vibes Only
        </div>
        <h1 className="mt-6 font-display text-6xl font-bold leading-[0.95] tracking-tight md:text-8xl">
          EVERY CUP<br />
          <span className="italic font-normal text-beige">tells</span> A STORY
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-balance text-base text-cream/80 md:text-lg">
          Freshly brewed coffee, wood-fired pizzas, juicy burgers and good vibes — all under one warm roof at Coffee Land.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a href="#menu" className="rounded-full border border-cream/40 px-6 py-2.5 text-sm font-medium text-cream transition hover:bg-cream hover:text-espresso">Explore Menu</a>
          <a href="#visit" className="rounded-full bg-cream px-6 py-2.5 text-sm font-medium text-espresso transition hover:bg-beige">Visit Us</a>
        </div>
        <div className="mt-12 flex items-center gap-2 text-sm text-cream/80">
          <Star className="h-4 w-4 fill-beige text-beige" /> 4.7 · 250+ Google Reviews
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  return (
    <div className="overflow-hidden bg-espresso py-5 text-cream">
      <div className="flex w-max marquee-track">
        {[...categories, ...categories].map((c, i) => (
          <div key={i} className="flex items-center gap-6 px-8">
            <Coffee className="h-5 w-5 opacity-80" />
            <span className="font-display text-2xl font-bold tracking-[0.1em]">{c}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MenuSection() {
  return (
    <section id="menu" className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-coffee">— Featured Menu</div>
            <h2 className="mt-3 font-display text-5xl font-bold text-espresso md:text-6xl">CRAFTED WITH LOVE</h2>
            <p className="mt-4 text-sm text-muted-foreground">
              From hand-tossed pizzas to thick milkshakes — every plate at Coffee Land is made fresh, served warm and meant to be shared.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {menu.slice(0, 8).map((c) => (
            <article key={c.name} className="group relative overflow-hidden rounded-3xl bg-card shadow-md transition hover:-translate-y-2 hover:shadow-2xl">
              <div className="relative h-56 overflow-hidden">
                <img src={c.img} alt={c.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute left-3 top-3 rounded-full bg-cream/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-espresso">{c.tag}</div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-bold uppercase text-espresso">{c.name}</h3>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Star className="h-3.5 w-3.5 fill-espresso text-espresso" /> {c.rating}
                  </div>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="font-display text-xl font-bold text-espresso">{c.price}</div>
                  <Link to="/order" aria-label="Order" className="grid h-10 w-10 place-items-center rounded-full bg-espresso text-cream transition hover:bg-coffee">
                    <Plus className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const stats = [
    { v: "250+", l: "Reviews" },
    { v: "4.7★", l: "Rating" },
    { v: "100%", l: "Fresh Daily" },
    { v: "Cozy", l: "Ambience" },
  ];
  return (
    <section id="about" className="bg-cream py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <img src={seating} alt="Coffee Land interior seating area" loading="lazy" className="h-[520px] w-full object-cover" />
          </div>
          <div className="absolute -bottom-8 -left-8 hidden h-48 w-40 overflow-hidden rounded-3xl shadow-2xl ring-8 ring-cream md:block">
            <img src={counter} alt="Coffee Land counter" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 place-items-center rounded-full bg-espresso text-center text-cream shadow-xl md:grid">
            <div>
              <div className="font-display text-3xl font-bold">4.7★</div>
              <div className="text-xs uppercase tracking-widest">250+ reviews</div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-coffee">— About Us</div>
          <h2 className="mt-3 font-display text-5xl font-bold leading-tight text-espresso">
            A neighborhood café <em className="font-normal">brewed with love.</em>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Coffee Land is a neighborhood café serving freshly brewed coffee, handcrafted beverages, snacks, and memorable experiences. Whether you're meeting friends, working remotely, or simply enjoying a quiet cup, our cozy seating and warm lighting make every visit feel like home.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.l} className="rounded-2xl border border-border bg-card p-5">
                <div className="font-display text-3xl font-bold text-espresso">{s.v}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GoodVibes() {
  return (
    <section id="vibes" className="relative overflow-hidden bg-espresso py-24 text-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-beige">— Good Vibes Only</div>
          <h2 className="mt-3 font-display text-5xl font-bold leading-tight md:text-6xl">
            The wall<br/>everyone <em className="font-normal text-beige">snaps</em>.
          </h2>
          <p className="mt-6 max-w-md text-cream/80">
            Our signature neon-lit "Good Vibes Only" wall is the most-photographed corner of Coffee Land. Pull up a chair, grab your drink, and make it count for the 'gram.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#gallery" className="rounded-full bg-cream px-6 py-3 text-sm font-medium text-espresso transition hover:bg-beige">See the Gallery</a>
            <a href="#visit" className="rounded-full border border-cream/30 px-6 py-3 text-sm font-medium text-cream transition hover:bg-cream/10">Reserve a Table</a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:col-span-7">
          <div className="col-span-2 overflow-hidden rounded-3xl shadow-2xl">
            <img src={vibesWall} alt="Good Vibes Only neon wall at Coffee Land" loading="lazy" className="h-[360px] w-full object-cover transition duration-700 hover:scale-105" />
          </div>
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <img src={vibes2} alt="Cozy seating beside the neon wall" loading="lazy" className="h-56 w-full object-cover transition duration-700 hover:scale-105" />
          </div>
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <img src={seating} alt="Café seating ambience" loading="lazy" className="h-56 w-full object-cover transition duration-700 hover:scale-105" />
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyLove() {
  const items = [
    { i: Coffee, t: "Premium Coffee Beans", d: "Hand-picked, freshly roasted, expertly brewed." },
    { i: Leaf, t: "Fresh Ingredients", d: "Locally sourced, served at their best." },
    { i: Wifi, t: "Free WiFi", d: "Fast internet for work or scrolling." },
    { i: Sofa, t: "Comfortable Seating", d: "Designed to make you stay a while longer." },
    { i: MapPin, t: "Easy to Find", d: "Right on Temples Bypass Road, near you." },
    { i: Award, t: "Highly Rated", d: "4.7★ from 250+ happy customers." },
  ];
  return (
    <section className="bg-beige/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-coffee">— Why Customers Love Us</div>
          <h2 className="mt-3 font-display text-5xl font-bold text-espresso">Brewed with care, served with heart.</h2>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ i: Icon, t, d }) => (
            <div key={t} className="group rounded-3xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:shadow-xl">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-espresso text-cream transition group-hover:bg-coffee">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold text-espresso">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="relative overflow-hidden py-32 text-cream">
      <img src={counter} alt="Coffee Land café interior" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-espresso/80" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <div className="text-xs font-semibold uppercase tracking-[0.3em] text-beige">— The Coffee Land Experience</div>
        <h2 className="mt-4 font-display text-6xl font-bold leading-tight md:text-7xl">More Than Coffee</h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-cream/80">
          Coffee Land is where conversations begin, ideas grow, and memories are created — one cup at a time.
        </p>
        <a href="#visit" className="mt-10 inline-block rounded-full bg-cream px-8 py-3.5 text-sm font-medium text-espresso transition hover:bg-beige">
          Visit Our Café
        </a>
      </div>
    </section>
  );
}

function Reviews() {
  const [idx, setIdx] = useState(0);
  const visible = [reviews[idx % 6], reviews[(idx + 1) % 6]];
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-5xl font-bold text-espresso md:text-6xl">CUSTOMER<br/>REVIEWS</h2>
          </div>
          <div className="flex max-w-sm items-end gap-4">
            <p className="text-sm text-muted-foreground">
              There's always room for coffee — and our guests agree. Here's what people are saying about Coffee Land.
            </p>
            <div className="flex shrink-0 gap-2">
              <button onClick={() => setIdx((i) => (i + 5) % 6)} className="grid h-11 w-11 place-items-center rounded-full border border-espresso/30 transition hover:bg-espresso hover:text-cream">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button onClick={() => setIdx((i) => (i + 1) % 6)} className="grid h-11 w-11 place-items-center rounded-full border border-espresso/30 transition hover:bg-espresso hover:text-cream">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {visible.map((r, i) => (
            <article key={i} className="flex items-start gap-5 rounded-3xl bg-beige/50 p-6">
              <div className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl bg-espresso font-display text-2xl font-bold text-cream">
                {r.name.charAt(0)}
              </div>
              <div className="min-w-0">
                <div className="font-display text-lg font-bold uppercase text-espresso">{r.name}</div>
                <p className="mt-1 text-sm text-muted-foreground">{r.text}</p>
                <div className="mt-3 flex items-center gap-1 text-xs">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-espresso text-espresso" />
                  ))}
                  <span className="ml-2 text-muted-foreground">5.0 rating</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);
  const items = filter === "All" ? galleryItems : galleryItems.filter((g) => g.cat === filter);
  return (
    <section id="gallery" className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-coffee">— Gallery</div>
          <h2 className="mt-3 font-display text-5xl font-bold text-espresso">Moments at Coffee Land</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            A peek inside our café — the food, the corners, the good vibes.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {galleryCats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                filter === c ? "bg-espresso text-cream" : "border border-espresso/20 text-espresso hover:bg-espresso/10"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4 [&>*]:mb-5">
          {items.map((g, i) => (
            <button
              key={`${g.src}-${i}`}
              onClick={() => setLightbox(g)}
              className="group block w-full overflow-hidden rounded-2xl shadow-md transition hover:shadow-2xl"
            >
              <div className="relative">
                <img src={g.src} alt={g.alt} loading="lazy" className="h-auto w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-espresso/0 transition group-hover:bg-espresso/30" />
                <div className="absolute bottom-3 left-3 rounded-full bg-cream/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-espresso opacity-0 transition group-hover:opacity-100">
                  {g.cat}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-50 grid place-items-center bg-espresso/90 p-6 backdrop-blur-sm animate-fade-in"
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full bg-cream/10 text-cream transition hover:bg-cream/20"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}

function Visit() {
  return (
    <section id="visit" className="bg-espresso py-24 text-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-2">
        <div className="overflow-hidden rounded-3xl shadow-2xl">
          
          <iframe
            title="Coffee Land map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3796.195276943328!2d83.41674237586562!3d17.923043683058328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39592c5b5b9535%3A0xfa0e0ba19bcb8125!2sCoffeeland%20Tagarapuvalasa!5e0!3m2!1sen!2sin!4v1781435850622!5m2!1sen!2sin"
            className="h-full min-h-[420px] w-full border-0"
            loading="lazy"
          />

        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-beige">— Visit Us</div>
          <h2 className="mt-3 font-display text-5xl font-bold">Drop by for a cup.</h2>
          <p className="mt-4 max-w-md text-cream/70">
            We're open every day — from your first morning espresso to that quiet late-evening mocha.
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex items-start gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-cream/10"><MapPin className="h-5 w-5" /></div>
              <div>
                <div className="text-xs uppercase tracking-widest text-beige">Address</div>
                <p className="mt-1 text-sm text-cream/90">Temples By Pass Road, near 3,<br/>Sanghivalasa, Bheemunipatnam, Andhra Pradesh 531162</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-cream/10"><Phone className="h-5 w-5" /></div>
              <div>
                <div className="text-xs uppercase tracking-widest text-beige">Phone</div>
                <a href="tel:09542525665" className="mt-1 block text-sm text-cream/90 hover:text-cream">095425 25665</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-cream/10"><Clock className="h-5 w-5" /></div>
              <div>
                <div className="text-xs uppercase tracking-widest text-beige">Opening Hours</div>
                <p className="mt-1 text-sm text-cream/90">Monday – Sunday · 10:00 AM – 10:00 PM</p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
             <a href="https://www.google.com/maps/dir//Coffeeland+Tagarapuvalasa,+Temples+By+Pass+Road,+near+3,+Thagarapuvalasa,+Sanghivalasa,+Bheemunipatnam,+Andhra+Pradesh+531162/" target="_blank" rel="noreferrer" className="rounded-full bg-cream px-6 py-3 text-sm font-medium text-espresso transition hover:bg-beige">Get Directions</a>
            <a href="tel:09542525665" className="rounded-full border border-cream/30 px-6 py-3 text-sm font-medium text-cream transition hover:bg-cream/10">Call Now</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="bg-cream py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 overflow-hidden rounded-3xl bg-beige md:grid-cols-2">
        <div className="p-10 md:p-14">
          <h2 className="font-display text-5xl font-bold leading-tight text-espresso md:text-6xl">YOUR PERFECT<br/>BITE AWAITS</h2>
          <p className="mt-5 max-w-md text-sm text-espresso/70">
            There's always room for one more plate. Walk in, sit down, and let Coffee Land make your day a little warmer.
          </p>
          <Link to="/order" className="mt-8 inline-block rounded-full bg-espresso px-8 py-3.5 text-sm font-medium text-cream transition hover:bg-coffee">Order Now</Link>
        </div>
        <div className="grid grid-cols-2 gap-2 p-4 md:p-6">
          {[burger, pizza, dessert2, milkshake].map((src, i) => (
            <div key={i} className="overflow-hidden rounded-2xl">
              <img src={src} alt="" loading="lazy" className="h-40 w-full object-cover md:h-48" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-espresso text-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 py-16 md:grid-cols-5">
        <div className="col-span-2">
          <Logo dark />
          <p className="mt-5 max-w-xs text-sm text-cream/60">
            A neighborhood café serving handcrafted coffee and warm moments since day one.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="#" className="grid h-9 w-9 place-items-center rounded-full border">
  IG
</a>
          </div>
        </div>
        <div>
          <div className="font-display text-sm font-bold uppercase tracking-widest">Opening Hours</div>
          <ul className="mt-4 space-y-2 text-sm text-cream/70">
            <li>Mon – Sun<br/><span className="text-cream/90">10:00 AM – 10:00 PM</span></li>
          </ul>
        </div>
        <div>
          <div className="font-display text-sm font-bold uppercase tracking-widest">Menu</div>
          <ul className="mt-4 space-y-2 text-sm text-cream/70">
            <li><a href="#menu" className="hover:text-cream">Burgers</a></li>
            <li><a href="#menu" className="hover:text-cream">Pizza</a></li>
            <li><a href="#menu" className="hover:text-cream">Desserts</a></li>
            <li><a href="#menu" className="hover:text-cream">Beverages</a></li>
          </ul>
        </div>
        <div>
          <div className="font-display text-sm font-bold uppercase tracking-widest">Visit</div>
          <ul className="mt-4 space-y-2 text-sm text-cream/70">
            <li>Temples By Pass Road</li>
            <li>Andhra Pradesh 531162</li>
            <li><a href="tel:09542525665" className="hover:text-cream">095425 25665</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10 py-5 text-center text-xs text-cream/60">
        © 2026 Coffee Land · All Rights Reserved
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Marquee />
      <MenuSection />
      <About />
      <GoodVibes />
      <WhyLove />
      <Experience />
      <Reviews />
      <Gallery />
      <Visit />
      <Marquee />
      <CtaBanner />
      <Footer />
    </main>
  );
}
