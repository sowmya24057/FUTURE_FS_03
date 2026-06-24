import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { Coffee, ArrowLeft, Plus, Minus, ShoppingBag, MapPin, Star, X, CreditCard, CheckCircle2, Trash2, Lock } from "lucide-react";

import entranceA from "../assets/cl/exterior_entrance.webp";
import burgerA from "../assets/cl/food_food4.webp";
import friesBurgerA from "../assets/cl/food_food1friesburger.webp";
import sandwichA from "../assets/cl/food_food3.webp";
import omeletA from "../assets/cl/food_food2.webp";
import pizzaA from "../assets/cl/food_pizza.webp";
import pizza2A from "../assets/cl/food_pizza2.webp";
import dessertA from "../assets/cl/food_desert.webp";
import dessert2A from "../assets/cl/food_desert2.webp";
import bevCoffeeA from "../assets/cl/beverages_coffee.webp";
import milkshakeA from "../assets/cl/beverages_milkshake.webp";
import milkshake2A from "../assets/cl/beverages_milksahke2.jpg";

type OrderItem = { id: string; name: string; desc: string; price: number; img: string; tag: string; rating: string };

const items: OrderItem[] = [
  { id: "burger-classic", name: "Classic Cheese Burger", desc: "Toasted bun, juicy patty, fresh veggies, house sauce.", price: 149, img: burgerA, tag: "Burgers", rating: "4.8" },
  { id: "burger-combo", name: "Fries & Burger Combo", desc: "Crispy fries with our signature burger.", price: 179, img: friesBurgerA, tag: "Combos", rating: "4.7" },
  { id: "pizza-wood", name: "Wood-Fired Pizza", desc: "Stone-baked crust, melted mozzarella, fresh toppings.", price: 199, img: pizzaA, tag: "Pizza", rating: "4.9" },
  { id: "pizza-pep", name: "Pepperoni Special", desc: "Hand-tossed pizza with classic toppings.", price: 229, img: pizza2A, tag: "Pizza", rating: "4.8" },
  { id: "sandwich-club", name: "Grilled Club Sandwich", desc: "Triple-layer grilled with fries and dip.", price: 129, img: sandwichA, tag: "Sandwich", rating: "4.7" },
  { id: "omelet", name: "Cheesy Masala Omelet", desc: "Fluffy eggs, herbs, toasted bread, mayo drizzle.", price: 89, img: omeletA, tag: "Breakfast", rating: "4.6" },
  { id: "dessert-brownie", name: "Brownie à la Mode", desc: "Warm chocolate brownie, melted ganache.", price: 99, img: dessertA, tag: "Desserts", rating: "4.9" },
  { id: "dessert-plate", name: "Dessert Platter", desc: "A sweet trio plated to perfection.", price: 139, img: dessert2A, tag: "Desserts", rating: "4.8" },
  { id: "milkshake-sig", name: "Signature Milkshake", desc: "Thick blended shake, whipped cream topping.", price: 119, img: milkshakeA, tag: "Beverages", rating: "4.8" },
  { id: "milkshake-iced", name: "Iced Milkshake", desc: "Chilled & creamy — perfect for warm days.", price: 109, img: milkshake2A, tag: "Beverages", rating: "4.7" },
  { id: "coffee-hot", name: "House Hot Coffee", desc: "Freshly brewed, rich, aromatic.", price: 79, img: bevCoffeeA, tag: "Coffee", rating: "4.9" },
];

function OrderPage() {
  const [cart, setCart] = useState<Record<string, number>>({});
  const add = (id: string) => setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }));
  const sub = (id: string) => setCart((c) => {
    const n = (c[id] || 0) - 1;
    const next = { ...c };
    if (n <= 0) delete next[id]; else next[id] = n;
    return next;
  });

  const { count, total } = useMemo(() => {
    let count = 0, total = 0;
    for (const it of items) {
      const q = cart[it.id] || 0;
      count += q; total += q * it.price;
    }
    return { count, total };
  }, [cart]);

  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [paid, setPaid] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", card: "", expiry: "", cvv: "" });

  const cartLines = items.filter((i) => cart[i.id]).map((i) => ({ ...i, qty: cart[i.id] }));
  const taxes = Math.round(total * 0.05);
  const grand = total + taxes;

  const submitPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setPaid(true);
    }, 1400);
  };

  const closeAndReset = () => {
    setCheckoutOpen(false);
    if (paid) {
      setCart({});
      setPaid(false);
      setForm({ name: "", phone: "", card: "", expiry: "", cvv: "" });
    }
  };

  return (
    <main className="min-h-screen bg-cream pb-40">
      <header className="sticky top-0 z-30 border-b border-espresso/10 bg-cream/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
          <Link to="/" className="flex items-center gap-2 text-espresso transition hover:opacity-70">
            <ArrowLeft className="h-4 w-4" />
            <div className="grid h-9 w-9 place-items-center rounded-full bg-espresso text-cream">
              <Coffee className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <div className="font-display text-base font-bold">Coffee Land</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Order Online</div>
            </div>
          </Link>
          <button onClick={() => count > 0 && setCheckoutOpen(true)} disabled={count === 0} className="hidden items-center gap-2 rounded-full border border-espresso/20 px-4 py-2 text-xs font-medium text-espresso transition hover:bg-espresso hover:text-cream disabled:opacity-40 sm:inline-flex">
            <ShoppingBag className="h-3.5 w-3.5" /> {count > 0 ? `${count} item${count > 1 ? "s" : ""}` : "Cart empty"}
          </button>
        </div>
      </header>

      <section className="relative overflow-hidden bg-espresso text-cream">
        <img src={entranceA} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="relative mx-auto max-w-7xl px-6 py-14">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-beige">— Order Online</div>
          <h1 className="mt-3 font-display text-5xl font-bold leading-tight md:text-6xl">Your favourites, ready to go.</h1>
          <p className="mt-4 max-w-xl text-sm text-cream/80">
            Browse the full menu, add to your bag and call us to confirm — we'll have it freshly prepared for pickup at Coffee Land.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-cream/80">
            <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> Temples Bypass Rd</span>
            <span className="inline-flex items-center gap-1.5"><Star className="h-3.5 w-3.5 fill-beige text-beige" /> 4.7 · 250+ reviews</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => {
            const qty = cart[it.id] || 0;
            return (
              <article key={it.id} className="group overflow-hidden rounded-3xl bg-card shadow-md transition hover:-translate-y-1 hover:shadow-2xl">
                <div className="relative h-52 overflow-hidden">
                  <img src={it.img} alt={it.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute left-3 top-3 rounded-full bg-cream/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-espresso">{it.tag}</div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg font-bold uppercase text-espresso">{it.name}</h3>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Star className="h-3.5 w-3.5 fill-espresso text-espresso" /> {it.rating}
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="font-display text-xl font-bold text-espresso">₹{it.price}</div>
                    {qty === 0 ? (
                      <button onClick={() => add(it.id)} className="inline-flex items-center gap-2 rounded-full bg-espresso px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cream transition hover:bg-coffee">
                        <Plus className="h-4 w-4" /> Add
                      </button>
                    ) : (
                      <div className="inline-flex items-center gap-1 rounded-full bg-espresso text-cream">
                        <button onClick={() => sub(it.id)} aria-label="Decrease" className="grid h-9 w-9 place-items-center rounded-full transition hover:bg-coffee">
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="min-w-6 text-center text-sm font-bold">{qty}</span>
                        <button onClick={() => add(it.id)} aria-label="Increase" className="grid h-9 w-9 place-items-center rounded-full transition hover:bg-coffee">
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {count > 0 && (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-espresso/10 bg-cream/95 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-espresso text-cream">
                <ShoppingBag className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Your Bag</div>
                <div className="font-display text-lg font-bold text-espresso">{count} item{count > 1 ? "s" : ""} · ₹{total}</div>
              </div>
            </div>
            <button onClick={() => setCheckoutOpen(true)} className="inline-flex items-center gap-2 rounded-full bg-espresso px-6 py-3 text-sm font-semibold text-cream transition hover:bg-coffee">
              <CreditCard className="h-4 w-4" /> Review &amp; Pay
            </button>
          </div>
        </div>
      )}

      {checkoutOpen && (
        <div className="fixed inset-0 z-50 grid place-items-end bg-espresso/70 backdrop-blur-sm sm:place-items-center" onClick={closeAndReset}>
          <div onClick={(e) => e.stopPropagation()} className="max-h-[92vh] w-full max-w-2xl overflow-hidden rounded-t-3xl bg-cream shadow-2xl sm:rounded-3xl">
            <div className="flex items-center justify-between border-b border-espresso/10 px-6 py-4">
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-espresso" />
                <h2 className="font-display text-xl font-bold uppercase text-espresso">
                  {paid ? "Order Confirmed" : "Your Order"}
                </h2>
              </div>
              <button onClick={closeAndReset} aria-label="Close" className="grid h-9 w-9 place-items-center rounded-full hover:bg-espresso/10">
                <X className="h-4 w-4 text-espresso" />
              </button>
            </div>

            {paid ? (
              <div className="px-6 py-10 text-center">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-espresso text-cream">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold text-espresso">Thank you, {form.name || "friend"}!</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Your payment of <span className="font-semibold text-espresso">₹{grand}</span> was successful.<br/>
                  We'll have your order freshly prepared for pickup at Coffee Land.
                </p>
                <button onClick={closeAndReset} className="mt-6 rounded-full bg-espresso px-6 py-3 text-sm font-semibold text-cream hover:bg-coffee">
                  Done
                </button>
              </div>
            ) : (
              <div className="max-h-[calc(92vh-60px)] overflow-y-auto">
                <div className="px-6 pt-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.25em] text-coffee">Items in your bag</div>
                  <ul className="mt-3 divide-y divide-espresso/10">
                    {cartLines.map((it) => (
                      <li key={it.id} className="flex items-center gap-3 py-3">
                        <img src={it.img} alt="" className="h-14 w-14 rounded-xl object-cover" />
                        <div className="min-w-0 flex-1">
                          <div className="truncate font-display text-sm font-bold uppercase text-espresso">{it.name}</div>
                          <div className="text-xs text-muted-foreground">₹{it.price} × {it.qty}</div>
                        </div>
                        <div className="inline-flex items-center gap-1 rounded-full border border-espresso/20">
                          <button onClick={() => sub(it.id)} aria-label="Decrease" className="grid h-7 w-7 place-items-center rounded-full hover:bg-espresso/10">
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="min-w-5 text-center text-xs font-bold text-espresso">{it.qty}</span>
                          <button onClick={() => add(it.id)} aria-label="Increase" className="grid h-7 w-7 place-items-center rounded-full hover:bg-espresso/10">
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <div className="w-16 text-right font-display text-sm font-bold text-espresso">₹{it.price * it.qty}</div>
                        <button onClick={() => { for (let i = 0; i < it.qty; i++) sub(it.id); }} aria-label="Remove" className="grid h-7 w-7 place-items-center rounded-full text-espresso/60 hover:bg-espresso/10 hover:text-espresso">
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 space-y-1.5 rounded-2xl bg-beige/50 p-4 text-sm">
                    <div className="flex justify-between text-espresso/80"><span>Subtotal</span><span>₹{total}</span></div>
                    <div className="flex justify-between text-espresso/80"><span>Taxes (5%)</span><span>₹{taxes}</span></div>
                    <div className="mt-2 flex justify-between border-t border-espresso/10 pt-2 font-display text-base font-bold text-espresso">
                      <span>Total</span><span>₹{grand}</span>
                    </div>
                  </div>
                </div>

                <form onSubmit={submitPayment} className="px-6 py-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.25em] text-coffee">Payment Details</div>
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Full name" className="col-span-2 rounded-xl border border-espresso/20 bg-cream px-4 py-3 text-sm text-espresso outline-none focus:border-espresso" />
                    <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Phone number" className="col-span-2 rounded-xl border border-espresso/20 bg-cream px-4 py-3 text-sm text-espresso outline-none focus:border-espresso" />
                    <input required value={form.card} onChange={(e) => setForm({ ...form, card: e.target.value })} placeholder="Card number" inputMode="numeric" className="col-span-2 rounded-xl border border-espresso/20 bg-cream px-4 py-3 text-sm text-espresso outline-none focus:border-espresso" />
                    <input required value={form.expiry} onChange={(e) => setForm({ ...form, expiry: e.target.value })} placeholder="MM / YY" className="rounded-xl border border-espresso/20 bg-cream px-4 py-3 text-sm text-espresso outline-none focus:border-espresso" />
                    <input required value={form.cvv} onChange={(e) => setForm({ ...form, cvv: e.target.value })} placeholder="CVV" inputMode="numeric" className="rounded-xl border border-espresso/20 bg-cream px-4 py-3 text-sm text-espresso outline-none focus:border-espresso" />
                  </div>
                  <button type="submit" disabled={processing} className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-espresso px-6 py-3.5 text-sm font-semibold text-cream transition hover:bg-coffee disabled:opacity-60">
                    {processing ? "Processing…" : <><Lock className="h-4 w-4" /> Pay ₹{grand}</>}
                  </button>
                  <p className="mt-2 text-center text-[11px] text-muted-foreground">Demo checkout — no real payment is processed.</p>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

export default OrderPage;