import "./globals.css";
import React, { useState } from "react";

export default function XJDFinanceLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [thankYou, setThankYou] = useState(false);
  const [applyThanks, setApplyThanks] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-emerald-500/40 selection:text-emerald-50">
      {/* Sticky Nav */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-neutral-950/70 border-b border-neutral-800/60">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="group inline-flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-300 shadow-lg shadow-emerald-500/30" />
            <span className="font-semibold tracking-wide text-emerald-300 group-hover:text-emerald-200 transition">XJD Financial</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-emerald-300">About</a>
            <a href="#services" className="hover:text-emerald-300">Products & Services</a>
            <a href="#request" className="hover:text-emerald-300">Request Quote</a>
            <a href="#careers" className="hover:text-emerald-300">Work For Us</a>
            <button onClick={() => setLoginOpen(true)} className="rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 px-4 py-2 border border-emerald-400/30 text-emerald-200">Client Login</button>
          </nav>
          <button aria-label="Toggle menu" onClick={() => setMenuOpen(v => !v)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-neutral-800 hover:border-neutral-700">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="opacity-80"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-neutral-800">
            <div className="px-4 py-3 grid gap-3">
              <a onClick={()=>setMenuOpen(false)} href="#about" className="py-2">About</a>
              <a onClick={()=>setMenuOpen(false)} href="#services" className="py-2">Products & Services</a>
              <a onClick={()=>setMenuOpen(false)} href="#request" className="py-2">Request Quote</a>
              <a onClick={()=>setMenuOpen(false)} href="#careers" className="py-2">Work For Us</a>
              <button onClick={()=>{setMenuOpen(false); setLoginOpen(true);}} className="text-left py-2">Client Login</button>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.06),transparent_55%)]" />
          <div className="absolute -top-24 -left-24 h-72 w-72 bg-emerald-500/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 bg-emerald-400/10 blur-3xl rounded-full" />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
              Insurance. Discipline. Data.
            </h1>
            <p className="mt-5 text-neutral-300 md:text-lg max-w-2xl">
              XJD Financial delivers transparent insurance and benefits with a builder’s mindset. Our promise: clear pricing, clean paperwork, and relentless follow‑through for families, trades, and small businesses across Appalachia.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#request" className="inline-flex items-center rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-neutral-900 hover:bg-emerald-400 transition">Get a Quote</a>
              <a href="#services" className="inline-flex items-center rounded-xl border border-neutral-800 px-5 py-3 hover:border-neutral-700">Explore Products</a>
            </div>
            <p className="mt-4 text-xs text-neutral-400">Licensed in Kentucky; expanding regionally. NPN 21482043.</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-neutral-900/60">
        <div className="mx-auto max-w-7xl px-4 py-16 grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">Mission & Ethos</h2>
            <p className="text-neutral-300">We believe craftsmanship applies to finance. That means we show up on time, explain the work, price it fair, and finish clean. Our style is simple and a little extravagant—precision paperwork with a touch of theater. We partner with carriers you can trust, and we fight for the right design: <span className="text-neutral-200">plans that fit, not plans that inflate premiums</span>.</p>
            <ul className="list-disc list-inside text-neutral-300 space-y-1">
              <li>Life & Final Expense, Mortgage Protection</li>
              <li>Health: HDHPs with smart add‑ons (accident, critical illness)</li>
              <li>Group Benefits for shops, salons, and trades</li>
              <li>Future: P&C and Series 65 advisory expansion</li>
            </ul>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {k:"Families Served", v:"300+"},
              {k:"Average App Time", v:"<20 min"},
              {k:"Partner Carriers", v:"10+"},
            ].map((card)=> (
              <div key={card.k} className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5">
                <div className="text-sm text-neutral-400">{card.k}</div>
                <div className="mt-2 text-2xl font-bold text-emerald-300">{card.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-t border-neutral-900/60">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">Products & Services</h2>
          <p className="mt-2 text-neutral-300">Straight‑shooting options. No fluff, no hidden fees.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Final Expense",
                desc: "Simple, affordable coverage so your people aren’t left with the bill.",
                price: "Typically $45–$95/mo",
              },
              {
                title: "Mortgage Protection",
                desc: "Protect the roof. Term life tailored to your loan and budget.",
                price: "Varies by age & term",
              },
              {
                title: "HDHP + Smart Add‑ons",
                desc: "Pair high‑deductible plans with accident & critical illness for real protection.",
                price: "Custom‑quoted",
              },
            ].map((s) => (
              <div key={s.title} className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-neutral-300">{s.desc}</p>
                <div className="mt-4 text-sm text-neutral-400">{s.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Quote */}
      <section id="request" className="border-t border-neutral-900/60">
        <div className="mx-auto max-w-4xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">Request a Quote</h2>
          <p className="mt-2 text-neutral-300">Answer a few questions. We’ll reply with options and a clean comparison.</p>
          {thankYou ? (
            <div className="mt-6 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-6">
              <p className="text-emerald-200 font-semibold">Thanks! Your request was submitted. We’ll be in touch within one business day.</p>
            </div>
          ) : (
            <form onSubmit={(e)=>{e.preventDefault(); setThankYou(true);}} className="mt-6 grid gap-4 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-sm text-neutral-300">Full Name</label>
                  <input id="name" name="name" required className="mt-1 w-full rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm text-neutral-300">Email</label>
                  <input id="email" name="email" type="email" required className="mt-1 w-full rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
                <div>
                  <label htmlFor="phone" className="text-sm text-neutral-300">Phone</label>
                  <input id="phone" name="phone" type="tel" required className="mt-1 w-full rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
                <div>
                  <label htmlFor="zip" className="text-sm text-neutral-300">ZIP Code</label>
                  <input id="zip" name="zip" inputMode="numeric" pattern="[0-9]{5}" required className="mt-1 w-full rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
              </div>
              <div>
                <label htmlFor="interest" className="text-sm text-neutral-300">I’m interested in</label>
                <select id="interest" name="interest" className="mt-1 w-full rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  <option>Final Expense</option>
                  <option>Mortgage Protection</option>
                  <option>HDHP + Add‑ons</option>
                  <option>Group Benefits (Barbers/Salons/Trades)</option>
                </select>
              </div>
              <div>
                <label htmlFor="notes" className="text-sm text-neutral-300">Notes</label>
                <textarea id="notes" name="notes" rows={4} placeholder="Anything we should know (current coverage, budget, preferred carrier)?" className="placeholder:text-neutral-600 mt-1 w-full rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div className="flex items-start gap-2 text-xs text-neutral-400">
                <input id="consent" name="consent" type="checkbox" required className="mt-1" />
                <label htmlFor="consent">I consent to be contacted by phone, text, or email about my request. No spam. Opt-out anytime.</label>
              </div>
              <div className="flex gap-3">
                <button type="submit" className="rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-neutral-900 hover:bg-emerald-400">Submit Request</button>
                <a href="mailto:info@xjdfinance.com" className="rounded-xl border border-neutral-800 px-5 py-3 hover:border-neutral-700">Email Instead</a>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Careers */}
      <section id="careers" className="border-t border-neutral-900/60">
        <div className="mx-auto max-w-4xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">Work For Us</h2>
          <p className="mt-2 text-neutral-300">We train producers the right way: compliant, ethical, and effective. If you’re coachable and disciplined, let’s talk.</p>
          {applyThanks ? (
            <div className="mt-6 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-6">
              <p className="text-emerald-200 font-semibold">Application received. We’ll follow up with next steps.</p>
            </div>
          ) : (
            <form onSubmit={(e)=>{e.preventDefault(); setApplyThanks(true);}} className="mt-6 grid gap-4 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="aname" className="text-sm text-neutral-300">Full Name</label>
                  <input id="aname" name="aname" required className="mt-1 w-full rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
                <div>
                  <label htmlFor="aemail" className="text-sm text-neutral-300">Email</label>
                  <input id="aemail" name="aemail" type="email" required className="mt-1 w-full rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
                <div>
                  <label htmlFor="aphone" className="text-sm text-neutral-300">Phone</label>
                  <input id="aphone" name="aphone" type="tel" required className="mt-1 w-full rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
                <div>
                  <label htmlFor="alocation" className="text-sm text-neutral-300">City, State</label>
                  <input id="alocation" name="alocation" required className="mt-1 w-full rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="alicense" className="text-sm text-neutral-300">Insurance License Status</label>
                  <select id="alicense" name="alicense" className="mt-1 w-full rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                    <option>Life & Health (active)</option>
                    <option>In progress</option>
                    <option>Not licensed yet</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="aexp" className="text-sm text-neutral-300">Experience</label>
                  <select id="aexp" name="aexp" className="mt-1 w-full rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                    <option>New to industry</option>
                    <option>0–2 years</option>
                    <option>3–5 years</option>
                    <option>6+ years</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="aabout" className="text-sm text-neutral-300">Why XJD Financial?</label>
                <textarea id="aabout" name="aabout" rows={4} className="mt-1 w-full rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder:text-neutral-600" placeholder="What makes you a good fit?" />
              </div>
              <div className="flex gap-3">
                <button type="submit" className="rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-neutral-900 hover:bg-emerald-400">Submit Application</button>
                <a href="mailto:careers@xjdfinance.com" className="rounded-xl border border-neutral-800 px-5 py-3 hover:border-neutral-700">Email Résumé</a>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-neutral-900/60">
        <div className="mx-auto max-w-4xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">Questions, answered</h2>
          <div className="mt-6 grid gap-4">
            {[
              {q: "Do you charge consultation fees?", a: "No. Discovery calls are free. You only pay when we write a policy you approve."},
              {q: "Which carriers do you use?", a: "Mutual and top‑rated carriers with strong claims records. We quote multiple options and explain the trade‑offs."},
              {q: "How fast can we start?", a: "Same day for most life products. Group benefits timelines vary by census and carrier; we set expectations up front."},
              {q: "Will you pressure me?", a: "No. We present options, answer questions, and let you decide. Our business is built on long‑term trust."},
            ].map((f) => (
              <details key={f.q} className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5">
                <summary className="cursor-pointer text-lg font-medium">{f.q}</summary>
                <p className="mt-2 text-neutral-300">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-neutral-900/60">
        <div className="mx-auto max-w-4xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">Contact</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
              <p className="text-neutral-300">Email</p>
              <a className="text-emerald-300 hover:text-emerald-200" href="mailto:info@xjdfinance.com">info@xjdfinance.com</a>
              <p className="mt-4 text-neutral-300">Website</p>
              <a className="text-emerald-300 hover:text-emerald-200" href="https://xjdfinance.com" target="_blank" rel="noreferrer">xjdfinance.com</a>
            </div>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
              <p className="text-neutral-300">Social</p>
              <div className="mt-2 flex gap-4">
                <a className="hover:text-emerald-300" href="#">Facebook</a>
                <a className="hover:text-emerald-300" href="#">LinkedIn</a>
                <a className="hover:text-emerald-300" href="#">YouTube</a>
              </div>
            </div>
          </div>
          <p className="mt-6 text-xs text-neutral-500">© {new Date().getFullYear()} XJD Financial. All rights reserved.</p>
        </div>
      </section>

      {/* Client Login Modal (Demo) */}
      {loginOpen && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4" role="dialog" aria-modal="true">
          <div className="w-full max-w-xl rounded-2xl border border-neutral-800 bg-neutral-950 shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800">
              <h3 className="font-semibold">Client Portal — Demo</h3>
              <button onClick={()=>setLoginOpen(false)} aria-label="Close" className="rounded-lg border border-neutral-800 p-2 hover:border-neutral-700">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>
            </div>
            <div className="px-6 py-6 grid gap-6">
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {k:"Policies Active", v:"42"},
                  {k:"Apps In Flight", v:"7"},
                  {k:"Claims YTD", v:"3"},
                ].map((m)=> (
                  <div key={m.k} className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4">
                    <div className="text-xs text-neutral-400">{m.k}</div>
                    <div className="mt-1 text-2xl font-bold text-emerald-300">{m.v}</div>
                  </div>
                ))}
              </div>
              <form className="grid gap-3">
                <label className="text-sm text-neutral-300">Email</label>
                <input className="rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="name@company.com" />
                <label className="text-sm text-neutral-300">Password</label>
                <input type="password" className="rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="••••••••" />
                <button type="button" className="mt-2 rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-neutral-900 hover:bg-emerald-400">Sign In</button>
              </form>
              <p className="text-xs text-neutral-500">This is a demo interface. Connect your real portal later or embed a dashboard.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
