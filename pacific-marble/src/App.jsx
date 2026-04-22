import { useState, useEffect } from "react";

const C = {
  char: "#1a1a1a", char2: "#252525",
  mw: "#f0ece4", mc: "#e8e2d9",
  gold: "#b8966e", gl: "#d4b896", gd: "#8a6e4e",
  stone: "#6b6560", white: "#fff",
  txt: "#2c2a28", txtl: "#7a7572", bdr: "#ddd8d0"
};

const BASE = "https://pmarble.com/wp-content/uploads";

const IMGS = {
  logo: `${BASE}/2024/08/logo-pmarble3.png`,
  heroBg: `${BASE}/2025/03/Marble-Polishing-company-in-boca-raton-florida.jpg`,
  van: `${BASE}/2025/03/Pacific-Marble-Restoration-Company-Boca-Raton.jpg`,
  van2: `${BASE}/2024/10/van1.jpg`,
  news: `${BASE}/2024/10/news1.jpg`,
  beforeAfterOld: `${BASE}/2024/10/before-after.jpg`,
  aboutHero: `${BASE}/2024/10/ce9d6f95-fe8b-419f-ab83-a69e9904e879.jpg`,
  marblePolish: `${BASE}/2025/03/marble-restoration-polishing-boca-raton-fl.jpg`,
  marbleResSF: `${BASE}/2025/03/marble-restoration-south-florida.png`,
  marbleFloor: `${BASE}/2025/03/marble-floor-polishing.png`,
  cleanService: `${BASE}/2025/03/clean-marble-restoration-service.jpg`,
  polishedFloor: `${BASE}/2025/03/polished-marble-floor-florida.jpg`,
  marbleClean: `${BASE}/2025/03/marble-cleaning-clean-boca-raton.jpg`,
  marbleTech: `${BASE}/2025/03/Marble-Polishing-company-in-boca-raton-florida.jpg`,
  processImg: `${BASE}/2024/10/Spacific-System-1.jpeg`,
  porcelainFlyer: `${BASE}/2024/10/Spacific-System-Porcelain-Flyer-NO-WATERMARK.png`,
  porcelainFlyer2: `${BASE}/2024/10/Spacific-System-Porcelain-Flyer-v2-scaled.jpg`,
  porcelain: `${BASE}/2025/03/porcelain.jpg`,
  porcelainBoca: `${BASE}/2025/03/porcelain-boca-raton.jpg`,
  porcelainSF: `${BASE}/2025/03/porcelain-south-florida.jpg`,
  porcelainPolish: `${BASE}/2025/03/porcelain-polishing.jpg`,
  porcelainClean: `${BASE}/2025/03/porcelain-clean.jpg`,
  yachtPolish: `${BASE}/2025/03/yacht-marble-polishing.jpg`,
  yachtFloor: `${BASE}/2025/03/marble-yacht-floor.jpg`,
  yachtFloor2: `${BASE}/2025/03/yacht-marble-floor.webp`,
  yachtPolish2: `${BASE}/2025/03/marble-polishing-for-yachts.jpg`,
  yachtBoats: `${BASE}/2025/03/marble-polishing-for-boats.jpg`,
  polishYacht: `${BASE}/2025/03/polishing-marble-floor-on-yacht.jpg`,
  yachtImg: `${BASE}/2024/08/Yacht-2-1000.webp`,
  groutClean: `${BASE}/2025/03/grout-cleaning.webp`,
  groutBoca: `${BASE}/2025/03/grout-cleaning-boca.jpg`,
  groutBoca2: `${BASE}/2025/03/grout-cleaning-boca-raton.jpg`,
  grout1: `${BASE}/2024/10/grout-1.jpg`,
  groutSeal: `${BASE}/2024/10/1.jpg`,
  colorSeal: `${BASE}/2024/10/2.jpg`,
  cambria: `${BASE}/2024/08/Cambria-USA-Ocean-Alexander-main-saloon-and-dining.jpg`,
  bathDark: `${BASE}/2024/08/bath-marble-floor-wall-dark.jpg`,
  polishing4: `${BASE}/2024/10/polishing4.jpg`,
  faq1: `${BASE}/2024/08/faq-1.jpg`,
  marbleRes: `${BASE}/2025/03/marble-restoration-boca-raton-fl.jpg`,
  videoThumb: `${BASE}/2025/03/marble-polishing-video-thumbnail.png`,
  galleryThumb: `${BASE}/2025/03/clean-marble-floor-restoration.png`,
  angiesList: `${BASE}/2024/08/angies-list.png`,
};

const GALLERY = [
  { src: `${BASE}/photo-gallery/IMG_6496.jpg`, thumb: `${BASE}/photo-gallery/thumb/IMG_6496.jpg`, alt: "Marble restoration work" },
  { src: `${BASE}/photo-gallery/IMG_0014.jpg`, thumb: `${BASE}/photo-gallery/thumb/IMG_0014.jpg`, alt: "Pacific Marble project" },
  { src: `${BASE}/photo-gallery/IMG_0377.jpg`, thumb: `${BASE}/photo-gallery/thumb/IMG_0377.jpg`, alt: "Marble floor restoration" },
  { src: `${BASE}/photo-gallery/2384d5b0-4a2f-4c57-bcef-65e818c1afe0.jpg`, thumb: `${BASE}/photo-gallery/thumb/2384d5b0-4a2f-4c57-bcef-65e818c1afe0.jpg`, alt: "Stone surface restoration" },
  { src: `${BASE}/photo-gallery/132c4c43-33a4-41c8-b04e-199179423abd.jpg`, thumb: `${BASE}/photo-gallery/thumb/132c4c43-33a4-41c8-b04e-199179423abd.jpg`, alt: "Marble polishing result" },
  { src: `${BASE}/photo-gallery/5eefd8b8-5907-4041-8a42-9f8023edd7fe.jpg`, thumb: `${BASE}/photo-gallery/thumb/5eefd8b8-5907-4041-8a42-9f8023edd7fe.jpg`, alt: "Floor restoration project" },
  { src: `${BASE}/photo-gallery/eee9122e-97ae-4443-a0a4-e21d45befc70.jpg`, thumb: `${BASE}/photo-gallery/thumb/eee9122e-97ae-4443-a0a4-e21d45befc70.jpg`, alt: "Marble cleaning result" },
  { src: `${BASE}/photo-gallery/bcd0f49b-21e8-4bdc-9584-8f14f91a3684.jpg`, thumb: `${BASE}/photo-gallery/thumb/bcd0f49b-21e8-4bdc-9584-8f14f91a3684.jpg`, alt: "Stone polishing work" },
  { src: `${BASE}/photo-gallery/5766eea7-a730-4f94-95a5-41fa53b594f5.jpg`, thumb: `${BASE}/photo-gallery/thumb/5766eea7-a730-4f94-95a5-41fa53b594f5.jpg`, alt: "Marble restoration South Florida" },
  { src: `${BASE}/photo-gallery/b62286f9-d509-4c5e-8e20-44bae4c880d5.jpg`, thumb: `${BASE}/photo-gallery/thumb/b62286f9-d509-4c5e-8e20-44bae4c880d5.jpg`, alt: "Pacific Marble work" },
  { src: `${BASE}/photo-gallery/DSC_0250.jpg`, thumb: `${BASE}/photo-gallery/thumb/DSC_0250.jpg`, alt: "Marble polishing Boca Raton" },
  { src: `${BASE}/photo-gallery/DSC_0267.jpg`, thumb: `${BASE}/photo-gallery/thumb/DSC_0267.jpg`, alt: "Floor restoration result" },
  { src: `${BASE}/photo-gallery/Porcelain-Cleaning-Photo-1.jpg`, thumb: `${BASE}/photo-gallery/thumb/Porcelain-Cleaning-Photo-1.jpg`, alt: "Porcelain cleaning result" },
  { src: `${BASE}/photo-gallery/Porcelain-Cleaning-Counter-Tops-2.jpg`, thumb: `${BASE}/photo-gallery/thumb/Porcelain-Cleaning-Counter-Tops-2.jpg`, alt: "Porcelain countertop after" },
  { src: `${BASE}/photo-gallery/Porcelain-Cleaning-Counter-Tops.jpg`, thumb: `${BASE}/photo-gallery/thumb/Porcelain-Cleaning-Counter-Tops.jpg`, alt: "Countertop cleaning" },
  { src: `${BASE}/photo-gallery/Porcelain-Cleaning-After-photo-2.jpg`, thumb: `${BASE}/photo-gallery/thumb/Porcelain-Cleaning-After-photo-2.jpg`, alt: "Porcelain after cleaning" },
  { src: `${BASE}/photo-gallery/marble-issue.jpg`, thumb: `${BASE}/photo-gallery/thumb/marble-issue.jpg`, alt: "Marble surface before" },
  { src: `${BASE}/photo-gallery/Untitled-design-64.jpg`, thumb: `${BASE}/photo-gallery/thumb/Untitled-design-64.jpg`, alt: "Before restoration" },
  { src: `${BASE}/photo-gallery/floor-restoration.jpg`, thumb: `${BASE}/photo-gallery/thumb/floor-restoration.jpg`, alt: "Floor restoration" },
  { src: `${BASE}/photo-gallery/Untitled-design-73.jpg`, thumb: `${BASE}/photo-gallery/thumb/Untitled-design-73.jpg`, alt: "Stone before treatment" },
  { src: `${BASE}/photo-gallery/marble-2.jpg`, thumb: `${BASE}/photo-gallery/thumb/marble-2.jpg`, alt: "Marble surface" },
  { src: `${BASE}/photo-gallery/4.jpg`, thumb: `${BASE}/photo-gallery/thumb/4.jpg`, alt: "Pacific Marble result" },
  { src: `${BASE}/photo-gallery/marble-cleaning.jpg`, thumb: `${BASE}/photo-gallery/thumb/marble-cleaning.jpg`, alt: "Marble cleaning" },
  { src: `${BASE}/photo-gallery/marble-v2.jpg`, thumb: `${BASE}/photo-gallery/thumb/marble-v2.jpg`, alt: "Marble after restoration" },
  { src: `${BASE}/photo-gallery/marble-restoration.jpg`, thumb: `${BASE}/photo-gallery/thumb/marble-restoration.jpg`, alt: "Marble restoration complete" },
  { src: `${BASE}/photo-gallery/Untitled-design-12.png`, thumb: `${BASE}/photo-gallery/thumb/Untitled-design-12.png`, alt: "Before and after design" },
];

const VIDEO_URL = `${BASE}/2024/11/Protection-and-Preperation-Video.mp4`;

const REVIEWS = [
  { name: "Patricia Farber", init: "P", date: "Jan 2025", text: "I've used this company for 16 years. They're terrific: professional, quality workmanship on stone of any kind, cost efficient. Thank you Tiago, Evan, Ronaldo." },
  { name: "Donna Rosenberg", init: "D", date: "Feb 2025", text: "Very professional — text and phone call reminders, showed up on time both days. Extremely clean with no dust or debris left behind. Would highly recommend." },
  { name: "Dawn Weisz", init: "D", date: "Feb 2025", text: "Pacific Marble did an excellent job refinishing my limestone floors. They look brand new! I would definitely recommend them and will use them again." },
  { name: "Mike Thomas", init: "M", date: "Jan 2025", text: "Had a bathroom neglected since the early 2000s. Amazing job bringing it back to a lustrous shine. Nick, Thiago, and Juan were polite, friendly, and skilled." },
  { name: "Marinalva Cacique", init: "M", date: "Mar 2025", text: "Thanks a lot to Nicholas and Michelle for bringing my old and dull marble to life again. I love the shine!" },
  { name: "Glenn Kershen", init: "G", date: "Dec 2024", text: "Pacific marble restoration did a fabulous, meticulous, and clean job. I would never know they were there except my floors are shining." },
];

const FAQS = [
  { q: "What is the best way to clean marble surfaces daily?", a: "Use a soft cloth or microfiber mop with a pH-neutral cleaner specifically designed for natural stone. Avoid harsh chemicals or abrasive pads that can damage the marble." },
  { q: "How often should I polish my marble floors?", a: "Marble floors in high-traffic areas should be polished every 1–2 years, while those in lower-traffic areas can be polished every 3–4 years to maintain their shine." },
  { q: "Can I use vinegar or lemon juice to clean marble?", a: "No. Vinegar, lemon juice, or any acidic cleaners should not be used on marble surfaces. These substances can etch the marble, leading to dull spots and potential damage." },
  { q: "How do I remove stains from marble?", a: "Identify the type of stain first. For most stains, applying a poultice made from a stain-removing powder and water can help lift the stain. Let it sit for 24–48 hours before removing and rinsing the area." },
  { q: "What is marble restoration, and when is it needed?", a: "Marble restoration involves repairing deep scratches, filling chips, and re-polishing the surface. It's needed when the marble has significant damage that simple polishing cannot fix." },
  { q: "How do I prevent scratches on my marble floors?", a: "Place rugs or mats in high-traffic areas, use felt pads under furniture legs, and avoid dragging heavy objects across the marble." },
  { q: "Should I seal my marble floors, and how often?", a: "Yes. Marble should be resealed every 6–12 months, depending on the level of traffic and exposure to potential staining agents." },
  { q: "How long does marble restoration take?", a: "Duration depends on extent of damage and area size. It typically takes a few hours to a full day for smaller areas and up to several days for more extensive damage." },
  { q: "What products should I avoid on marble surfaces?", a: "Avoid acidic cleaners, abrasive pads, and harsh chemicals like bleach or ammonia — they damage the stone and cause etching or discoloration." },
  { q: "Can all stains be removed from marble?", a: "Most stains can be removed with proper techniques, but some deep or old stains may be more challenging. Professional restoration might be necessary." },
];

/* ── SHARED COMPONENTS ── */
const gs = {
  fontFamily: "'Outfit', sans-serif",
};

function Img({ src, alt, style = {}, ...props }) {
  const [err, setErr] = useState(false);
  if (err) return <div style={{ background: C.mc, display: "flex", alignItems: "center", justifyContent: "center", color: C.txtl, fontSize: 12, ...style }}>{alt}</div>;
  return <img src={src} alt={alt} onError={() => setErr(true)} style={{ display: "block", ...style }} {...props} />;
}

function Eyebrow({ children, light }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: light ? C.gl : C.gd, fontWeight: 500, marginBottom: 10 }}>
      <div style={{ width: 22, height: 1, background: C.gold, flexShrink: 0 }} />
      {children}
    </div>
  );
}

function H2({ children, light, style = {} }) {
  return <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)", fontWeight: 400, color: light ? C.white : C.char, lineHeight: 1.18, marginBottom: 12, ...style }}>{children}</h2>;
}

function Btn({ children, variant = "gold", onClick, href, style = {} }) {
  const base = { display: "inline-flex", alignItems: "center", gap: 6, padding: "13px 24px", borderRadius: 3, fontSize: 14, fontWeight: 500, letterSpacing: "0.05em", cursor: "pointer", textDecoration: "none", border: "none", fontFamily: "'Outfit', sans-serif", transition: "all .2s", ...style };
  const vars = {
    gold: { background: C.gold, color: C.white },
    white: { background: C.white, color: C.gd },
    outline: { background: "transparent", color: "rgba(255,255,255,.88)", border: "1.5px solid rgba(255,255,255,.35)" },
    outlineDk: { background: "transparent", color: C.txt, border: `1.5px solid ${C.bdr}` },
  };
  const s = { ...base, ...vars[variant] };
  if (href) return <a href={href} style={s} target="_blank" rel="noopener noreferrer">{children}</a>;
  return <button onClick={onClick} style={s}>{children}</button>;
}

function ReviewCard({ r }) {
  return (
    <div style={{ background: C.mw, borderRadius: 8, padding: "1.8rem", border: `1px solid ${C.bdr}` }}>
      <div style={{ color: C.gold, fontSize: 14, letterSpacing: 2, marginBottom: 12 }}>★★★★★</div>
      <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.03rem", fontStyle: "italic", color: C.char, lineHeight: 1.7, marginBottom: "1.3rem" }}>"{r.text}"</p>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ width: 34, height: 34, borderRadius: "50%", background: C.gold, display: "flex", alignItems: "center", justifyContent: "center", color: C.white, fontWeight: 700, fontSize: 14, flexShrink: 0 }}>{r.init}</div>
        <div>
          <div style={{ fontWeight: 600, fontSize: 13, color: C.char }}>{r.name}</div>
          <div style={{ fontSize: 11, color: C.txtl }}>Google Review · {r.date}</div>
        </div>
      </div>
    </div>
  );
}

function ContactForm({ dark }) {
  return (
    <div style={{ background: dark ? "rgba(255,255,255,.06)" : C.mw, borderRadius: 12, padding: "2.5rem", border: dark ? "1px solid rgba(255,255,255,.1)" : "none" }}>
      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.45rem", color: dark ? C.white : C.char, marginBottom: 6 }}>Request a Free Quote</div>
      <div style={{ fontSize: 13, color: C.txtl, marginBottom: "1.8rem" }}>We'll respond within 24 hours. No commitment required.</div>
      {[["First Name", "John", "text"], ["Last Name", "Smith", "text"], ["Email", "you@email.com", "email"], ["Phone", "(561) 000-0000", "tel"]].map(([lbl, ph, type]) => (
        <div key={lbl} style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", fontSize: 11, letterSpacing: "0.09em", textTransform: "uppercase", color: C.stone, marginBottom: 5 }}>{lbl}</label>
          <input type={type} placeholder={ph} style={{ width: "100%", background: C.white, border: `1px solid ${C.bdr}`, borderRadius: 4, padding: "11px 14px", fontSize: 14, color: C.txt, fontFamily: "'Outfit', sans-serif", outline: "none", boxSizing: "border-box" }} />
        </div>
      ))}
      <div style={{ marginBottom: "1rem" }}>
        <label style={{ display: "block", fontSize: 11, letterSpacing: "0.09em", textTransform: "uppercase", color: C.stone, marginBottom: 5 }}>Service Needed</label>
        <select style={{ width: "100%", background: C.white, border: `1px solid ${C.bdr}`, borderRadius: 4, padding: "11px 14px", fontSize: 14, color: C.txt, fontFamily: "'Outfit', sans-serif", outline: "none" }}>
          <option>Select a service…</option>
          <option>Marble Polishing / Restoration</option>
          <option>Porcelain Cleaning</option>
          <option>Grout Services</option>
          <option>Yacht Services</option>
          <option>Not Sure / Multiple</option>
        </select>
      </div>
      <div style={{ marginBottom: "1.5rem" }}>
        <label style={{ display: "block", fontSize: 11, letterSpacing: "0.09em", textTransform: "uppercase", color: C.stone, marginBottom: 5 }}>Message</label>
        <textarea rows={4} placeholder="Describe your marble or flooring…" style={{ width: "100%", background: C.white, border: `1px solid ${C.bdr}`, borderRadius: 4, padding: "11px 14px", fontSize: 14, color: C.txt, fontFamily: "'Outfit', sans-serif", outline: "none", resize: "vertical", boxSizing: "border-box" }} />
      </div>
      <button onClick={() => alert("Thank you! We will contact you within 24 hours.")} style={{ width: "100%", background: C.gold, color: C.white, border: "none", padding: "14px", borderRadius: 4, fontSize: 15, fontWeight: 600, letterSpacing: "0.05em", cursor: "pointer", fontFamily: "'Outfit', sans-serif" }}>Request My Free Quote →</button>
    </div>
  );
}

function CtaBand({ title, sub }) {
  return (
    <div style={{ background: C.gold, padding: "4rem 1.5rem", textAlign: "center" }}>
      <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem,3vw,2.6rem)", color: C.white, marginBottom: 10 }}>{title}</h2>
      <p style={{ color: "rgba(255,255,255,.82)", fontSize: 15, marginBottom: "1.8rem", lineHeight: 1.75 }}>{sub}</p>
      <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
        <Btn href="tel:+18556807239" variant="white">📞 Call 1-855-680-7239</Btn>
        <Btn href="https://wa.me/15619550375" variant="outline">💬 WhatsApp Us</Btn>
      </div>
    </div>
  );
}

function PageHero({ bg, breadcrumb, eyebrow, title, sub }) {
  return (
    <div style={{ position: "relative", background: C.char, padding: "5rem 1.5rem 4rem", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center", opacity: .3 }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg,rgba(26,26,26,.9),rgba(26,26,26,.5))" }} />
      <div style={{ position: "relative", zIndex: 2, maxWidth: 760, margin: "0 auto" }}>
        <div style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,.4)", marginBottom: 14, display: "flex", gap: 6 }}>
          <span>Home</span><span style={{ color: C.gold }}>/ {breadcrumb}</span>
        </div>
        <Eyebrow light>{eyebrow}</Eyebrow>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 300, color: C.white, lineHeight: 1.15, marginBottom: 14 }}>{title}</h1>
        <p style={{ color: "rgba(255,255,255,.6)", fontSize: 15, lineHeight: 1.8, maxWidth: 560 }}>{sub}</p>
      </div>
    </div>
  );
}

/* ── PAGES ── */

function PageHome({ nav }) {
  return (
    <div>
      {/* Hero */}
      <div style={{ position: "relative", minHeight: "92vh", display: "flex", alignItems: "center", background: C.char, overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${IMGS.heroBg})`, backgroundSize: "cover", backgroundPosition: "center", opacity: .32 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(110deg,rgba(26,26,26,.92) 0%,rgba(26,26,26,.6) 55%,rgba(26,26,26,.25) 100%)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1100, margin: "0 auto", padding: "0 1.5rem", width: "100%", display: "grid", gridTemplateColumns: "1fr 370px", gap: "4rem", alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, color: C.gl, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
              <div style={{ width: 30, height: 1, background: C.gold }} />
              Boca Raton, Florida · Est. 2003
            </div>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.8rem,5.5vw,4.8rem)", fontWeight: 300, color: C.white, lineHeight: 1.08, marginBottom: "1.4rem" }}>
              We Treat Every<br /><em style={{ fontStyle: "italic", color: C.gl }}>Home as a Yacht.</em>
            </h1>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,.62)", lineHeight: 1.82, maxWidth: 500, marginBottom: "2.4rem", fontWeight: 300 }}>
              South Florida's most recommended marble restoration company. Expert polishing, grout services, porcelain cleaning, and yacht stone care — serving Palm Beach, Broward & Dade since 2003.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: "3rem" }}>
              <Btn href="tel:+18556807239">📞 Call 1-855-680-7239</Btn>
              <Btn variant="outline" onClick={() => nav("contact")}>Get a Free Quote</Btn>
            </div>
            <div style={{ display: "flex", gap: "2.2rem", flexWrap: "wrap" }}>
              {[["21+", "Years in Business"], ["A+", "BBB Rating"], ["4.9★", "Google Rating"], ["3", "Counties Licensed"]].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.95rem", fontWeight: 600, color: C.gl, lineHeight: 1 }}>{n}</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,.4)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 3 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Credentials card */}
          <div style={{ background: "rgba(240,236,228,.06)", border: "1px solid rgba(184,150,110,.2)", borderRadius: 12, padding: "2rem", backdropFilter: "blur(8px)" }}>
            <div style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: C.gold, marginBottom: "1rem" }}>Licensed & Accredited</div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.25rem", color: C.white, marginBottom: 8 }}>Pacific Marble Restoration Corp.</div>
            {[["Palm Beach County", "#07031"], ["Broward County", "#325-239123"], ["Dade County", "#675906-3"], ["BBB Accredited", "Since 2014"], ["Angie's List", "A+ Rated"]].map(([k, v]) => (
              <div key={k} style={{ fontSize: 12, color: "rgba(255,255,255,.5)", display: "flex", justifyContent: "space-between", padding: "7px 0", borderBottom: "1px solid rgba(255,255,255,.06)" }}>
                <span>{k}</span><strong style={{ color: "rgba(255,255,255,.8)" }}>{v}</strong>
              </div>
            ))}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: "1.4rem", background: "rgba(184,150,110,.1)", border: "1px solid rgba(184,150,110,.2)", borderRadius: 8, padding: "0.95rem" }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.1rem", fontWeight: 600, color: C.gl }}>4.9</div>
              <div>
                <div style={{ color: C.gold, fontSize: 16, letterSpacing: 2 }}>★★★★★</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,.5)", marginTop: 2 }}>100+ Google Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div style={{ background: C.white }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "5rem 1.5rem 2rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "end", marginBottom: "3rem" }}>
            <div><Eyebrow>What We Do</Eyebrow><H2>Expert Stone & <em style={{ fontStyle: "italic", color: C.gd }}>Marble Services</em></H2></div>
            <p style={{ color: C.txtl, lineHeight: 1.82, fontSize: 15 }}>Every surface is unique. Every project receives the same elite level of craftsmanship — whether it's a kitchen countertop or a 100-foot yacht.</p>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5px", background: C.bdr }}>
          {[
            { n: "01", h: "Marble Restoration & Polishing", p: "Remove scratches, dull spots, stains, and etches to restore your marble's natural brilliance using advanced diamond tooling and eco-friendly products.", page: "marble-polishing" },
            { n: "02", h: "Porcelain Cleaning", p: "Transform your porcelain surfaces back to their original luster with our specialized deep-cleaning process for floors, walls, and countertops.", page: "porcelain" },
            { n: "03", h: "Yacht Services", p: "Since 2003, Pacific Marble has been the trusted name for yacht interior marble polishing across South Florida's luxury marina community.", page: "yacht" },
            { n: "04", h: "Grout Services", p: "Discolored or crumbling grout destroys the look of fine tile. Our grout cleaning, recoloring, and restoration services bring your spaces back.", page: "grout" },
          ].map(s => (
            <div key={s.n} onClick={() => nav(s.page)} style={{ background: C.white, padding: "2.8rem 2.2rem", cursor: "pointer", borderBottom: `2px solid transparent`, transition: "background .3s" }}
              onMouseEnter={e => { e.currentTarget.style.background = C.mw; }}
              onMouseLeave={e => { e.currentTarget.style.background = C.white; }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3.2rem", fontWeight: 300, color: C.mc, lineHeight: 1, marginBottom: "0.9rem" }}>{s.n}</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.45rem", color: C.char, marginBottom: "0.65rem", fontWeight: 400 }}>{s.h}</h3>
              <p style={{ fontSize: 14, color: C.txtl, lineHeight: 1.75, marginBottom: "1.4rem" }}>{s.p}</p>
              <span style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: C.gd, fontWeight: 500 }}>Learn More →</span>
            </div>
          ))}
        </div>
      </div>

      {/* About strip */}
      <div style={{ background: C.char, padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          <div style={{ position: "relative" }}>
            <Img src={IMGS.van} alt="Pacific Marble company van Boca Raton FL" style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", borderRadius: 4 }} />
            <div style={{ position: "absolute", bottom: -24, right: -24, background: C.gold, color: C.white, borderRadius: 8, padding: "1.4rem", textAlign: "center", boxShadow: "0 8px 20px rgba(0,0,0,.3)" }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.6rem", fontWeight: 600, lineHeight: 1 }}>2003</div>
              <div style={{ fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", opacity: .85, marginTop: 3 }}>Est. Boca Raton</div>
            </div>
          </div>
          <div style={{ color: "rgba(255,255,255,.72)" }}>
            <Eyebrow light>Our Story</Eyebrow>
            <H2 light>Be Specific,<br /><em style={{ fontStyle: "italic", color: C.gl }}>Choose Pacific.</em></H2>
            <p style={{ lineHeight: 1.85, marginBottom: "1.2rem", fontSize: 15 }}>Founded in 2003 by <strong style={{ color: C.gl }}>Tiago Almeida</strong>, Pacific Marble Restoration was built on a single philosophy — perfection is not optional. Tiago came from Brazil as an exchange student at FAU, learned marble polishing by day, took classes at night, and within two years opened his own business.</p>
            <div style={{ borderLeft: `2px solid ${C.gold}`, padding: "1rem 1.4rem", margin: "1.8rem 0", fontFamily: "'Cormorant Garamond', serif", fontSize: "1.18rem", fontStyle: "italic", color: "rgba(255,255,255,.85)", lineHeight: 1.6 }}>"We treat every home as a yacht." — Tiago Almeida, Founder</div>
            <p style={{ lineHeight: 1.85, fontSize: 15 }}>Today, Pacific Marble holds the highest Google rating in South Florida, an A+ on Angie's List, A+ with the BBB, and is licensed in Palm Beach, Broward, and Dade counties.</p>
            <div style={{ marginTop: "2rem" }}><Btn onClick={() => nav("about")}>Full Story</Btn></div>
          </div>
        </div>
      </div>

      {/* Video */}
      <div style={{ background: C.char, padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "2.5rem", flexWrap: "wrap", gap: "1.5rem" }}>
            <div><Eyebrow light>See Our Work</Eyebrow><H2 light>Watch Pacific Marble <em style={{ fontStyle: "italic", color: C.gl }}>in Action</em></H2></div>
            <p style={{ color: "rgba(255,255,255,.5)", fontSize: 14, maxWidth: 360, lineHeight: 1.7 }}>From house preparation to the final reveal — watch our team at work on marble floors, countertops, and more.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "1.5rem" }}>
            <div style={{ borderRadius: 8, overflow: "hidden", background: "#000", aspectRatio: "16/9" }}>
              <video controls preload="none" poster={IMGS.marbleClean} style={{ width: "100%", height: "100%", display: "block", objectFit: "cover" }}>
                <source src={VIDEO_URL} type="video/mp4" />
              </video>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              <Img src={IMGS.yachtImg} alt="Pacific Marble yacht services" style={{ width: "100%", borderRadius: 8, aspectRatio: "16/9", objectFit: "cover" }} />
              <div style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 8, padding: "1.4rem" }}>
                <p style={{ color: "rgba(255,255,255,.5)", fontSize: 13, lineHeight: 1.7, marginBottom: "1rem" }}>Explore our full before & after gallery showcasing projects across South Florida.</p>
                <Btn onClick={() => nav("video-gallery")} style={{ fontSize: 13, padding: "10px 18px" }}>View Video Gallery</Btn>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div style={{ background: C.white, padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem", flexWrap: "wrap", gap: "2rem" }}>
            <div><Eyebrow>What Clients Say</Eyebrow><H2>Real Reviews from <em style={{ fontStyle: "italic", color: C.gd }}>Real Customers</em></H2></div>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "4rem", fontWeight: 300, color: C.char, lineHeight: 1 }}>4.9</div>
              <div>
                <div style={{ color: C.gold, fontSize: 15, letterSpacing: 3 }}>★★★★★</div>
                <div style={{ fontSize: 13, color: C.txtl, marginTop: 3 }}>100+ Google Reviews</div>
              </div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem" }}>
            {REVIEWS.map(r => <ReviewCard key={r.name} r={r} />)}
          </div>
        </div>
      </div>

      {/* Areas */}
      <div style={{ background: C.mw, padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Eyebrow>Service Area</Eyebrow>
          <H2>Serving All of <em style={{ fontStyle: "italic", color: C.gd }}>South Florida</em></H2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem", marginTop: "2.5rem" }}>
            {[
              { county: "Palm Beach County", cities: "Boca Raton · Delray Beach · Boynton Beach · West Palm Beach · Palm Beach Gardens · Wellington · Lake Worth · Jupiter · Royal Palm Beach · Greenacres" },
              { county: "Broward County", cities: "Fort Lauderdale · Hollywood · Pembroke Pines · Coral Springs · Miramar · Pompano Beach · Davie · Sunrise · Plantation · Weston · Deerfield Beach · Coconut Creek" },
              { county: "Dade County", cities: "Miami · Miami Beach · Coral Gables · Hialeah · Aventura · Doral · North Miami · Kendall · South Miami · Miami Lakes · Homestead · Sweetwater" },
            ].map(a => (
              <div key={a.county} style={{ background: C.white, borderRadius: 8, padding: "1.8rem", border: `1px solid ${C.bdr}` }}>
                <div style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: C.gd, marginBottom: "1rem", fontWeight: 600, paddingBottom: "0.75rem", borderBottom: `1px solid ${C.bdr}` }}>{a.county}</div>
                <p style={{ fontSize: 13, color: C.txtl, lineHeight: 2 }}>{a.cities}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "2rem", borderRadius: 10, overflow: "hidden", height: 280, border: `1px solid ${C.bdr}` }}>
            <iframe loading="lazy" title="Pacific Marble Restoration location" src="https://maps.google.com/maps?q=4411+N+Dixie+Hwy,+Boca+Raton,+FL+33431&output=embed" style={{ width: "100%", height: "100%", border: "none", display: "block" }} allowFullScreen />
          </div>
        </div>
      </div>

      <CtaBand title="Ready to Transform Your Marble?" sub="Join thousands of satisfied South Florida homeowners. Call today for your free, no-obligation estimate." />
    </div>
  );
}

function PageAbout({ nav }) {
  return (
    <div>
      <PageHero bg={IMGS.aboutHero} breadcrumb="About Us" eyebrow="Pacific Marble Restoration" title="About Us" sub="We specialize in bringing back the natural beauty of your marble surfaces through expert polishing, restoration, and cleaning services." />
      <div style={{ background: C.white, padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
          <div>
            <Img src={IMGS.van2} alt="Pacific Marble Restoration van" style={{ width: "100%", borderRadius: 6, aspectRatio: "4/3", objectFit: "cover" }} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginTop: "1rem" }}>
              <Img src={IMGS.news} alt="Pacific Marble in the news" style={{ width: "100%", borderRadius: 4, aspectRatio: "4/5", objectFit: "cover" }} />
              <Img src={IMGS.beforeAfterOld} alt="Marble before and after" style={{ width: "100%", borderRadius: 4, aspectRatio: "4/5", objectFit: "cover" }} />
            </div>
          </div>
          <div>
            <Eyebrow>Who We Are</Eyebrow>
            <H2>Pacific Marble Restoration<br /><em style={{ fontStyle: "italic", color: C.gd }}>Corp.</em></H2>
            <p style={{ color: C.txtl, lineHeight: 1.85, marginBottom: "1.2rem", fontSize: 15 }}>A premier marble restoration company based in Boca Raton, FL. We specialize in bringing back the natural beauty of your marble surfaces through expert polishing, restoration, and cleaning services.</p>
            <p style={{ color: C.txtl, lineHeight: 1.85, marginBottom: "1.2rem", fontSize: 15 }}>Founded in 2003 and owned and operated by <strong style={{ color: C.char }}>Tiago Almeida</strong>, Pacific Marble Restoration proudly serves Boca Raton and the surrounding South Florida region with excellence in stone restoration.</p>
            <p style={{ color: C.txtl, lineHeight: 1.85, marginBottom: "1.2rem", fontSize: 15 }}>Tiago came from Brazil as an exchange student at FAU. He was working and learning about marble polishing during the day and taking classes at night. Within two years, he opened his own business. That was 2003 and now, 21 years later, he has built one of the most reputable stone restoration companies in South Florida.</p>
            <div style={{ borderLeft: `2px solid ${C.gold}`, padding: "1rem 1.4rem", margin: "1.8rem 0", fontFamily: "'Cormorant Garamond', serif", fontSize: "1.18rem", fontStyle: "italic", color: C.char, lineHeight: 1.6 }}>"We treat every home as a yacht." — Tiago Almeida, Founder</div>
            <p style={{ color: C.txtl, lineHeight: 1.85, fontSize: 15 }}>Pacific Marble holds the highest Google rating in South Florida, an A+ rating on Angie's List, and an A+ with the Better Business Bureau.</p>
          </div>
        </div>
      </div>
      <div style={{ background: C.mc, padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 580, margin: "0 auto 3.5rem" }}>
            <Eyebrow>Why Choose Us</Eyebrow>
            <H2>Our <em style={{ fontStyle: "italic", color: C.gd }}>Commitment</em></H2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem" }}>
            {[
              { icon: "🏆", h: "Experienced Professionals", p: "Highly trained team committed to delivering results that exceed your expectations in every project." },
              { icon: "⚡", h: "State-of-the-Art Techniques", p: "Latest techniques and equipment ensuring your marble is treated with the care it deserves." },
              { icon: "❤️", h: "Customer Satisfaction", p: "Working closely with clients to deliver customized solutions that meet their specific needs." },
              { icon: "🌿", h: "Eco-Friendly Products", p: "Safe for both your marble and the environment — effective results without harmful chemicals." },
              { icon: "💎", h: "Customized Solutions", p: "Every marble surface is unique. Personalized care tailored to your specific needs." },
              { icon: "🚫", h: "No Dust Process", p: "Advanced methods ensure a dust-free, hygienic environment — minimal disruption every time." },
            ].map(c => (
              <div key={c.h} style={{ background: C.white, borderRadius: 8, padding: "2rem", border: `1px solid ${C.bdr}` }}>
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{c.icon}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", marginBottom: "0.6rem", color: C.char }}>{c.h}</h3>
                <p style={{ fontSize: 13, color: C.txtl, lineHeight: 1.75 }}>{c.p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CtaBand title="Get a Free Quote Today" sub="Take the first step toward revitalizing your marble and floors." />
    </div>
  );
}

function PageMarblePolishing({ nav }) {
  return (
    <div>
      <PageHero bg={IMGS.marblePolish} breadcrumb="Services / Marble Polishing" eyebrow="Palm Beach · Broward · Dade Counties" title="Marble Restoration & Polishing" sub="Our expert marble polishing restores the natural shine and luster of marble surfaces by removing dull spots, scratches, and etches." />
      <div style={{ background: C.white, padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          <div>
            <Eyebrow>Why Choose Us</Eyebrow>
            <H2>Expert Marble Care for <em style={{ fontStyle: "italic", color: C.gd }}>South Florida</em></H2>
            <p style={{ color: C.txtl, lineHeight: 1.85, fontSize: 15, marginBottom: "1rem" }}>With over two decades of experience, our team has honed their skills to perfection. Whether you're dealing with a minor stain or significant wear, we have the tools and expertise to restore your marble to its former glory.</p>
            <p style={{ color: C.txtl, lineHeight: 1.85, fontSize: 15, marginBottom: "1.5rem", fontStyle: "italic" }}>"I once worked on a marble floor in a historic Boca Raton home that had been neglected for decades. After a thorough polishing process, the floor was transformed — it looked as though it had just been installed." — Tiago Almeida</p>
            <Btn href="tel:+18556807239">📞 Get a Free Quote</Btn>
          </div>
          <Img src={IMGS.marblePolish} alt="Commercial marble restoration Boca Raton FL" style={{ width: "100%", borderRadius: 6, aspectRatio: "4/3", objectFit: "cover" }} />
        </div>
      </div>
      <div style={{ background: C.mw, padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Eyebrow>Our Process</Eyebrow>
          <H2>A Meticulous 6-Step <em style={{ fontStyle: "italic", color: C.gd }}>Process</em></H2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem", marginTop: "2.5rem" }}>
            {[
              { n: "01", h: "Initial Assessment", p: "Thoroughly inspect marble surfaces to identify stains, scratches, and dullness, noting the type of marble and its specific characteristics." },
              { n: "02", h: "Deep Cleaning", p: "pH-neutral cleaning solutions safe for marble and effective at lifting grime without causing damage." },
              { n: "03", h: "Diamond Grinding", p: "For deep scratches or etching, diamond abrasive pads remove a thin layer of marble, eliminating imperfections." },
              { n: "04", h: "Polishing", p: "Using progressively finer diamond pads, we polish the marble to bring out its natural, signature glossy finish." },
              { n: "05", h: "Sealing", p: "High-quality sealant applied to protect the marble from future stains and damage, repelling liquids." },
              { n: "06", h: "Final Inspection", p: "Thorough final inspection — the job isn't done until you are completely delighted with the results." },
            ].map(s => (
              <div key={s.n} style={{ background: C.white, borderRadius: 8, padding: "2rem", border: `1px solid ${C.bdr}` }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.5rem", fontWeight: 300, color: C.mc, marginBottom: "0.75rem" }}>{s.n}</div>
                <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: "0.5rem", color: C.char }}>{s.h}</h3>
                <p style={{ fontSize: 13, color: C.txtl, lineHeight: 1.7 }}>{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ background: C.white, padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1rem" }}>
            <Img src={IMGS.cleanService} alt="Luxury living room after marble restoration" style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", borderRadius: 6 }} />
            <Img src={IMGS.marbleFloor} alt="Marble floor after polishing" style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", borderRadius: 6 }} />
            <Img src={IMGS.polishedFloor} alt="Polished marble floor South Florida" style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", borderRadius: 6 }} />
          </div>
        </div>
      </div>
      <CtaBand title="Ready to Restore Your Marble?" sub="Free no-obligation quote. Serving Palm Beach, Broward & Dade counties." />
    </div>
  );
}

function PagePorcelain() {
  return (
    <div>
      <PageHero bg={IMGS.porcelain} breadcrumb="Services / Porcelain Cleaning" eyebrow="Palm Beach · Broward · Dade Counties" title="Porcelain Cleaning" sub="Transform the look of your porcelain surfaces with our professional cleaning services using non-abrasive techniques to restore original beauty and luster." />
      <div style={{ background: C.white, padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          <div>
            <Eyebrow>Why Professional Cleaning</Eyebrow>
            <H2>Restore Porcelain to Its <em style={{ fontStyle: "italic", color: C.gd }}>Original Beauty</em></H2>
            <p style={{ color: C.txtl, lineHeight: 1.85, fontSize: 15, marginBottom: "1rem" }}>Porcelain surfaces are prone to discoloration from spills, dullness due to soap scum and mineral deposits, and stubborn stains from daily use. Over time, these problems detract from the overall appearance of your home or business.</p>
            <p style={{ color: C.txtl, lineHeight: 1.85, fontSize: 15, marginBottom: "1.5rem" }}>Professional porcelain cleaning goes beyond basic methods, effectively removing deep-seated dirt and stains without causing damage. We also apply a protective sealant to safeguard against future stains.</p>
            <Btn href="tel:+18556807239">📞 Get a Free Quote</Btn>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Img src={IMGS.porcelain} alt="Room after porcelain cleaning" style={{ width: "100%", borderRadius: 6, aspectRatio: "16/9", objectFit: "cover" }} />
            <Img src={IMGS.porcelainBoca} alt="Porcelain cleaning Boca Raton" style={{ width: "100%", borderRadius: 6, aspectRatio: "16/9", objectFit: "cover" }} />
          </div>
        </div>
      </div>
      <div style={{ background: C.mw, padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          <div>
            <Eyebrow>Our System</Eyebrow>
            <H2>The Pacific Porcelain <em style={{ fontStyle: "italic", color: C.gd }}>Cleaning System</em></H2>
            <p style={{ color: C.txtl, lineHeight: 1.85, fontSize: 15, marginBottom: "1.5rem" }}>Our team of experts has tested each product to ensure we use only the best on the current market for your surfaces. When you combine a great product with years of experience, you get the successful results you deserve.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Img src={IMGS.porcelainPolish} alt="Porcelain polishing" style={{ width: "100%", borderRadius: 6, aspectRatio: "4/3", objectFit: "cover" }} />
            </div>
          </div>
          <Img src={IMGS.porcelainFlyer} alt="Pacific Porcelain Cleaning System" style={{ width: "100%", borderRadius: 6 }} />
        </div>
      </div>
      <CtaBand title="Transform Your Porcelain Today" sub="Free no-obligation quote. Serving all of South Florida since 2003." />
    </div>
  );
}

function PageYacht() {
  return (
    <div>
      <PageHero bg={IMGS.yachtPolish} breadcrumb="Services / Yacht Services" eyebrow="A+ Rated · Since 2003" title="Yacht Services" sub="Pacific Marble Restoration has been performing comprehensive marble polishing for yachts since 2003. We have restored many yachts of different builds and sizes — rated A+ on Angie's List and the Better Business Bureau." />
      <div style={{ background: C.white, padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
          <div>
            <Eyebrow>The Marine Challenge</Eyebrow>
            <H2>Why Yacht Marble Requires <em style={{ fontStyle: "italic", color: C.gd }}>Professional Care</em></H2>
            {[
              { icon: "⚓", h: "Harsh Marine Environment", p: "Saltwater, humidity, and UV exposure cause significant wear. Professional cleaning manages these elements and protects the marble." },
              { icon: "🔬", h: "Stubborn Stains & Buildup", p: "Marine environments cause tough stains that regular cleaning can't address. Professionals use specialized products and techniques." },
              { icon: "🛡️", h: "Preservation of Aesthetic Value", p: "Marble contributes significantly to your yacht's overall aesthetic. Regular professional cleaning maintains its polished appearance." },
              { icon: "🔍", h: "Expert Assessment", p: "Professionals assess for underlying issues — cracks, discoloration — that need attention before they worsen." },
            ].map(i => (
              <div key={i.h} style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: "1.2rem" }}>
                <span style={{ color: C.gold, fontSize: 18, flexShrink: 0 }}>{i.icon}</span>
                <div>
                  <strong style={{ display: "block", fontSize: 14, color: C.char, marginBottom: 4 }}>{i.h}</strong>
                  <p style={{ fontSize: 13, color: C.txtl, lineHeight: 1.65 }}>{i.p}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Img src={IMGS.yachtPolish} alt="Yacht marble polishing South Florida" style={{ width: "100%", borderRadius: 6, aspectRatio: "16/10", objectFit: "cover" }} />
            <Img src={IMGS.yachtFloor} alt="Yacht with clean marble floors" style={{ width: "100%", borderRadius: 6, aspectRatio: "16/10", objectFit: "cover" }} />
          </div>
        </div>
      </div>
      <div style={{ background: C.mw, padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          <Img src={IMGS.polishYacht} alt="Marble polishing on yacht" style={{ width: "100%", borderRadius: 6, aspectRatio: "4/3", objectFit: "cover" }} />
          <div>
            <Eyebrow>Our Expertise</Eyebrow>
            <H2>The Pacific Marble <em style={{ fontStyle: "italic", color: C.gd }}>Yacht Difference</em></H2>
            <p style={{ color: C.txtl, lineHeight: 1.85, fontSize: 15, marginBottom: "1.2rem" }}>When Tiago first started in business, his team arrived to work on a luxury yacht and the Captain met them at the dock: "If you don't plan on doing a perfect job, leaving no room for error, then just turn around and go."</p>
            <p style={{ color: C.txtl, lineHeight: 1.85, fontSize: 15, marginBottom: "1.2rem" }}>They stayed. The yacht owner was highly pleased and praised their craftsmanship. That experience sparked the motto: <em style={{ color: C.char }}>"We treat every home as a yacht."</em></p>
            <p style={{ color: C.txtl, lineHeight: 1.85, fontSize: 15, marginBottom: "2rem" }}>Since 2003, Pacific Marble has restored many yachts of different builds and sizes across South Florida's luxury marina community.</p>
            <Btn href="tel:+18556807239">📞 Call About Yacht Services</Btn>
          </div>
        </div>
      </div>
      <div style={{ background: C.white, padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            <Img src={IMGS.yachtPolish2} alt="Marble polishing for yachts" style={{ width: "100%", borderRadius: 6, aspectRatio: "16/10", objectFit: "cover" }} />
            <Img src={IMGS.yachtBoats} alt="Marble polishing for boats Boca Raton" style={{ width: "100%", borderRadius: 6, aspectRatio: "16/10", objectFit: "cover" }} />
          </div>
          <Img src={IMGS.yachtFloor2} alt="Yacht marble floor" style={{ width: "100%", borderRadius: 6, aspectRatio: "21/9", objectFit: "cover", marginTop: "1.5rem" }} />
        </div>
      </div>
      <CtaBand title="Your Yacht Deserves the Best" sub="Call us to discuss your vessel's marble restoration needs. A+ rated on Angie's List and BBB." />
    </div>
  );
}

function PageGrout() {
  return (
    <div>
      <PageHero bg={IMGS.groutClean} breadcrumb="Services / Grout Services" eyebrow="Palm Beach · Broward · Dade Counties" title="Grout Services" sub="Enhance the appearance and longevity of your tiled surfaces with our comprehensive grout services. Over time, grout lines become discolored, stained, and damaged." />
      <div style={{ background: C.white, padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          <div>
            <Eyebrow>Expert Grout Care</Eyebrow>
            <H2>Pristine Tile Surfaces <em style={{ fontStyle: "italic", color: C.gd }}>Restored</em></H2>
            <p style={{ color: C.txtl, lineHeight: 1.85, fontSize: 15, marginBottom: "1rem" }}>Our grout cleaning service removes stubborn dirt, grime, and stains from your grout lines, reviving their original color and appearance using advanced cleaning solutions that penetrate deep into the grout.</p>
            <p style={{ color: C.txtl, lineHeight: 1.85, fontSize: 15, marginBottom: "1.5rem" }}>As a local company, Pacific Marble Restoration is deeply familiar with the unique challenges faced by Boca Raton homeowners. The high humidity, frequent rain, and coastal environment contribute to wear and damage.</p>
            <Btn href="tel:+18556807239">📞 Get a Free Quote</Btn>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Img src={IMGS.groutClean} alt="Floor after grout cleaning Boca Raton" style={{ width: "100%", borderRadius: 6, aspectRatio: "16/9", objectFit: "cover" }} />
            <Img src={IMGS.groutBoca} alt="Luxury room after grout cleaning" style={{ width: "100%", borderRadius: 6, aspectRatio: "16/9", objectFit: "cover" }} />
          </div>
        </div>
      </div>
      <div style={{ background: C.mw, padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Eyebrow>Services Offered</Eyebrow>
          <H2>Our Grout <em style={{ fontStyle: "italic", color: C.gd }}>Service Options</em></H2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem", marginTop: "2.5rem" }}>
            {[
              { img: IMGS.grout1, h: "Tile & Grout Cleaning", p: "Deep cleaning and restoring the original color of your tiles and grout lines using specialized cleaning agents and high-pressure steam equipment." },
              { img: IMGS.groutSeal, h: "Porcelain Tile Clean & Seal", p: "Advanced cleaning to restore original beauty with a high-quality sealant that protects from future stains, spills, and wear for years." },
              { img: IMGS.colorSeal, h: "Grout Color Seal", p: "Renews and protects grout lines by restoring original or chosen color with a durable sealant that guards against future stains, dirt, and moisture." },
            ].map(s => (
              <div key={s.h} style={{ background: C.white, borderRadius: 8, border: `1px solid ${C.bdr}`, overflow: "hidden" }}>
                <Img src={s.img} alt={s.h} style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover" }} />
                <div style={{ padding: "1.5rem" }}>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", marginBottom: "0.6rem", color: C.char }}>{s.h}</h3>
                  <p style={{ fontSize: 13, color: C.txtl, lineHeight: 1.7 }}>{s.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ background: C.white, padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Img src={IMGS.groutBoca2} alt="Floor after grout cleaning service Boca Raton FL" style={{ width: "100%", borderRadius: 8, aspectRatio: "21/9", objectFit: "cover" }} />
        </div>
      </div>
      <CtaBand title="Revive Your Grout Today" sub="Free no-obligation quote. Serving all of South Florida since 2003." />
    </div>
  );
}

function PagePhotoGallery() {
  const [lb, setLb] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      if (!lb) return;
      if (e.key === "Escape") setLb(null);
      if (e.key === "ArrowLeft") setLb(i => (i - 1 + GALLERY.length) % GALLERY.length);
      if (e.key === "ArrowRight") setLb(i => (i + 1) % GALLERY.length);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lb]);

  return (
    <div>
      <PageHero bg={IMGS.galleryThumb} breadcrumb="Gallery / Photo Gallery" eyebrow="Our Work" title="Photo Gallery" sub="Discover the exceptional results we've achieved for our clients throughout Palm Beach, Broward, and Dade counties." />

      {lb !== null && (
        <div onClick={() => setLb(null)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.93)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <button onClick={() => setLb(null)} style={{ position: "absolute", top: 20, right: 24, background: "none", border: "none", color: C.white, fontSize: 28, cursor: "pointer", opacity: .8 }}>✕</button>
          <button onClick={e => { e.stopPropagation(); setLb(i => (i - 1 + GALLERY.length) % GALLERY.length); }} style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,.1)", border: "none", color: C.white, fontSize: 22, padding: "10px 16px", cursor: "pointer", borderRadius: 4 }}>‹</button>
          <img onClick={e => e.stopPropagation()} src={GALLERY[lb].src} alt={GALLERY[lb].alt} style={{ maxWidth: "90vw", maxHeight: "88vh", borderRadius: 6, objectFit: "contain" }} />
          <button onClick={e => { e.stopPropagation(); setLb(i => (i + 1) % GALLERY.length); }} style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,.1)", border: "none", color: C.white, fontSize: 22, padding: "10px 16px", cursor: "pointer", borderRadius: 4 }}>›</button>
        </div>
      )}

      <div style={{ background: C.white, padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "0.75rem" }}>
          {GALLERY.map((img, i) => (
            <div key={i} onClick={() => setLb(i)} style={{ aspectRatio: "1", overflow: "hidden", borderRadius: 4, cursor: "pointer", position: "relative" }}>
              <Img src={img.thumb} alt={img.alt} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .4s", display: "block" }}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.06)"}
                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"} />
            </div>
          ))}
        </div>
      </div>
      <CtaBand title="Love What You See?" sub="Call us today for a free quote on your marble or floor restoration." />
    </div>
  );
}

function PageVideoGallery() {
  return (
    <div>
      <PageHero bg={IMGS.videoThumb} breadcrumb="Gallery / Video Gallery" eyebrow="Watch Our Team at Work" title="Video Gallery" sub="From house preparation to the final reveal — watch our team restore marble floors, countertops, and yacht interiors across South Florida." />
      <div style={{ background: C.white, padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
          {[
            {
              type: "video",
              content: (
                <video controls preload="none" poster={IMGS.marbleClean} style={{ width: "100%", aspectRatio: "16/9", display: "block", objectFit: "cover" }}>
                  <source src={VIDEO_URL} type="video/mp4" />
                </video>
              ),
              h: "House Preparation & Protection",
              p: "See how our team carefully prepares and protects your space before starting any marble restoration work — ensuring a hassle-free and tidy experience.",
            },
            {
              type: "img",
              content: <Img src={IMGS.yachtImg} alt="Pacific Marble yacht services" style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", display: "block" }} />,
              h: "Yacht Marble Restoration",
              p: "A look at our yacht interior marble polishing services — the same level of precision and care we bring to every high-end property.",
            },
            {
              type: "img",
              content: <Img src={IMGS.cleanService} alt="Marble restoration results" style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", display: "block" }} />,
              h: "Marble Restoration Results",
              p: "See the stunning before and after transformations across residential and commercial properties throughout South Florida.",
            },
            {
              type: "img",
              content: <Img src={IMGS.marbleRes} alt="Marble restoration Boca Raton" style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", display: "block" }} />,
              h: "Floor Restoration Gallery",
              p: "From worn and dull marble to pristine showroom-quality results — our portfolio showcases the beauty and precision of our work.",
            },
          ].map((v, i) => (
            <div key={i} style={{ background: C.white, borderRadius: 10, overflow: "hidden", border: `1px solid ${C.bdr}` }}>
              {v.content}
              <div style={{ padding: "1.2rem 1.4rem" }}>
                <h3 style={{ fontSize: 15, fontWeight: 600, color: C.char, marginBottom: 6 }}>{v.h}</h3>
                <p style={{ fontSize: 13, color: C.txtl, lineHeight: 1.6 }}>{v.p}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <p style={{ color: C.txtl, marginBottom: "1.2rem", fontSize: 14 }}>Watch more videos on our official YouTube channel:</p>
          <Btn href="https://www.youtube.com/user/PacificMarbleFlorida">▶ Visit Our YouTube Channel</Btn>
        </div>
      </div>
      <CtaBand title="Ready for Your Transformation?" sub="Free no-obligation quote. Serving Palm Beach, Broward & Dade counties since 2003." />
    </div>
  );
}

function PageBeforeAfter() {
  const pairs = [
    { before: `${BASE}/photo-gallery/thumb/marble-issue.jpg`, after: `${BASE}/photo-gallery/thumb/marble-restoration.jpg`, h: "Marble Floor Restoration", p: "Complete marble floor restoration — scratches, stains, and dullness removed to reveal a mirror-like finish." },
    { before: `${BASE}/photo-gallery/thumb/Porcelain-Cleaning-Photo-1.jpg`, after: `${BASE}/photo-gallery/thumb/Porcelain-Cleaning-After-photo-2.jpg`, h: "Porcelain Surface Cleaning", p: "Professional porcelain cleaning restoring original shine and brilliance to heavily soiled surfaces." },
    { before: `${BASE}/photo-gallery/thumb/Untitled-design-64.jpg`, after: `${BASE}/photo-gallery/thumb/floor-restoration.jpg`, h: "Floor Restoration", p: "From worn and dull to pristine — our floor restoration brings back the beauty of any stone surface." },
    { before: `${BASE}/photo-gallery/thumb/marble-2.jpg`, after: `${BASE}/photo-gallery/thumb/marble-v2.jpg`, h: "Marble Polishing", p: "Diamond polishing process restoring the natural luster and shine of marble surfaces." },
    { before: `${BASE}/photo-gallery/thumb/Porcelain-Cleaning-Counter-Tops.jpg`, after: `${BASE}/photo-gallery/thumb/Porcelain-Cleaning-Counter-Tops-2.jpg`, h: "Countertop Restoration", p: "Porcelain countertop cleaning and sealing, restoring original beauty and protecting against future stains." },
    { before: `${BASE}/photo-gallery/thumb/Untitled-design-73.jpg`, after: `${BASE}/photo-gallery/thumb/marble-cleaning.jpg`, h: "Stone Surface Restoration", p: "Full stone surface restoration bringing back the original elegance and durability of natural stone." },
  ];

  return (
    <div>
      <PageHero bg={IMGS.cleanService} breadcrumb="Gallery / Before & After" eyebrow="Transformations" title="Before / After Gallery" sub="See the stunning transformations we achieve — from dull, damaged marble and flooring to breathtaking, showroom-quality results." />
      <div style={{ background: C.white, padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "2rem" }}>
          {pairs.map((p, i) => (
            <div key={i} style={{ background: C.white, borderRadius: 10, overflow: "hidden", border: `1px solid ${C.bdr}` }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                <div style={{ position: "relative" }}>
                  <Img src={p.before} alt={`${p.h} before`} style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover" }} />
                  <span style={{ position: "absolute", bottom: 6, left: 6, background: "rgba(26,26,26,.75)", color: C.white, fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", padding: "3px 8px", borderRadius: 3 }}>Before</span>
                </div>
                <div style={{ position: "relative" }}>
                  <Img src={p.after} alt={`${p.h} after`} style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover" }} />
                  <span style={{ position: "absolute", bottom: 6, left: 6, background: "rgba(26,26,26,.75)", color: C.white, fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", padding: "3px 8px", borderRadius: 3 }}>After</span>
                </div>
              </div>
              <div style={{ padding: "1.2rem 1.4rem" }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", color: C.char, marginBottom: 5 }}>{p.h}</h3>
                <p style={{ fontSize: 13, color: C.txtl, lineHeight: 1.6 }}>{p.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CtaBand title="Want Results Like These?" sub="Call today for a free, no-obligation quote on your marble or flooring restoration." />
    </div>
  );
}

function PageProcess() {
  return (
    <div>
      <PageHero bg={IMGS.polishing4} breadcrumb="Our Process" eyebrow="Pacific Marble Restoration" title="Our Process" sub="Our team of experts specializes in restoring marble surfaces to their original beauty. From removing stains and scratches to polishing and sealing, we offer a wide range of services." />
      <div style={{ background: C.white, padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
          <div>
            <Eyebrow>How We Work</Eyebrow>
            <H2>The Pacific Marble <em style={{ fontStyle: "italic", color: C.gd }}>Restoration System</em></H2>
            <p style={{ color: C.txtl, lineHeight: 1.85, fontSize: 15, marginBottom: "1rem" }}>Pacific Marble Restoration specializes in restoring marble, travertine, and other surfaces for Residential and Commercial Applications. No job is too small or too large for our team of specialists.</p>
            <p style={{ color: C.txtl, lineHeight: 1.85, fontSize: 15, marginBottom: "2rem" }}>Repairs and revitalization of marble take precision and care to ensure that the repair is seamless to the rest of the piece. Indoor or Outdoor — your solid surfaces will be treated by professionals at all times.</p>
            <div style={{ background: C.mw, borderRadius: 8, padding: "1.5rem", border: `1px solid ${C.bdr}` }}>
              <div style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: C.gd, marginBottom: "1rem", fontWeight: 600 }}>We Specialize In</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem 2rem" }}>
                {["Polishing", "Diamond Refinishing", "Honing", "Cleaning", "Grout Cleaning & Sealing", "Grout Color Seal", "Regrouting / Recaulking", "Epoxy Color Filling", "Crack & Stone Repairs", "Floor Injection (Hollow)", "Ceramic/Porcelain Cleaning"].map(s => (
                  <div key={s} style={{ fontSize: 13, color: C.txtl, padding: "5px 0", borderBottom: `1px solid ${C.bdr}`, display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ color: C.gold, fontSize: 8 }}>◆</span>{s}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: C.mw, borderRadius: 8, padding: "1.5rem", border: `1px solid ${C.bdr}` }}>
              <div style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: C.gd, marginBottom: "1rem", fontWeight: 600 }}>Surfaces We Treat</div>
              {["Marble", "Saturnia / Travertine", "Limestone", "Natural Stone", "Granite", "Ceramic Tile / Porcelain", "Mexican Tile"].map(s => (
                <div key={s} style={{ fontSize: 13, color: C.txtl, padding: "5px 0", borderBottom: `1px solid ${C.bdr}`, display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ color: C.gold, fontSize: 8 }}>◆</span>{s}
                </div>
              ))}
            </div>
            <div style={{ background: C.mw, borderRadius: 8, padding: "1.5rem", border: `1px solid ${C.bdr}` }}>
              <div style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: C.gd, marginBottom: "1rem", fontWeight: 600 }}>Areas of Application</div>
              {["Floors", "Walls", "Vanity & Counter Tops", "Shower Stalls", "Pool Decks & Terraces", "Driveways", "Yacht Service"].map(s => (
                <div key={s} style={{ fontSize: 13, color: C.txtl, padding: "5px 0", borderBottom: `1px solid ${C.bdr}`, display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ color: C.gold, fontSize: 8 }}>◆</span>{s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div style={{ background: C.mw, padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
            <div>
              <div style={{ fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", color: C.gd, marginBottom: "1rem", fontWeight: 600 }}>Marble Restoration System</div>
              <Img src={IMGS.processImg} alt="Pacific Marble restoration system" style={{ width: "100%", borderRadius: 6 }} />
            </div>
            <div>
              <div style={{ fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", color: C.gd, marginBottom: "1rem", fontWeight: 600 }}>Porcelain Cleaning System</div>
              <Img src={IMGS.porcelainFlyer2} alt="Pacific Porcelain Cleaning System" style={{ width: "100%", borderRadius: 6 }} />
            </div>
          </div>
        </div>
      </div>
      <div style={{ background: C.char, padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
          <Img src={IMGS.cambria} alt="Luxury yacht interior marble" style={{ width: "100%", borderRadius: 6, aspectRatio: "16/9", objectFit: "cover" }} />
          <Img src={IMGS.bathDark} alt="Marble bathroom floor and wall" style={{ width: "100%", borderRadius: 6, aspectRatio: "16/9", objectFit: "cover" }} />
        </div>
      </div>
      <CtaBand title="Ready to Get Started?" sub="Call or fill out a contact form — we'll assess your surfaces and provide a free estimate." />
    </div>
  );
}

function PageFaq() {
  const [open, setOpen] = useState(null);
  return (
    <div>
      <PageHero bg={IMGS.faq1} breadcrumb="FAQ" eyebrow="Pacific Marble Restoration" title="Frequently Asked Questions" sub="We've compiled answers to the questions we hear most about marble care, polishing, and restoration." />
      <div style={{ background: C.white, padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
          <div>
            {FAQS.map((f, i) => (
              <div key={i} style={{ borderBottom: `1px solid ${C.bdr}`, padding: "1.4rem 0" }}>
                <div onClick={() => setOpen(open === i ? null : i)} style={{ fontWeight: 600, fontSize: 15, color: C.char, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
                  {f.q}
                  <span style={{ color: C.gold, fontSize: 18, flexShrink: 0, transform: open === i ? "rotate(45deg)" : "none", transition: "transform .3s", display: "inline-block" }}>+</span>
                </div>
                {open === i && <p style={{ fontSize: 14, color: C.txtl, lineHeight: 1.82, marginTop: "0.9rem" }}>{f.a}</p>}
              </div>
            ))}
          </div>
          <div style={{ position: "sticky", top: 90 }}>
            <Img src={IMGS.marbleTech} alt="Pacific Marble polishing technician" style={{ width: "100%", borderRadius: 8, aspectRatio: "4/5", objectFit: "cover", marginBottom: "1.5rem" }} />
            <ContactForm />
          </div>
        </div>
      </div>
      <CtaBand title="Ready to Restore Your Marble?" sub="Call us today for your free, no-obligation estimate." />
    </div>
  );
}

function PageContact() {
  return (
    <div>
      <PageHero bg={IMGS.van} breadcrumb="Contact Us" eyebrow="Get In Touch" title="Contact Pacific Marble" sub="Call, email, or fill out the form below. Free no-obligation estimates — same-day response available." />
      <div style={{ background: C.char, padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem" }}>
          <div>
            <Eyebrow light>Reach Us</Eyebrow>
            <H2 light>Let's Talk About <em style={{ fontStyle: "italic", color: C.gl }}>Your Marble</em></H2>
            <p style={{ color: "rgba(255,255,255,.55)", lineHeight: 1.82, marginBottom: "2.2rem", fontSize: 15 }}>Not sure what your marble needs? Give us a call or fill out the form — we'll assess your surfaces and provide a no-obligation estimate. We serve all of South Florida.</p>
            {[
              { ico: "📞", lbl: "Main Line", val: "1-855-680-7239", href: "tel:+18556807239" },
              { ico: "📞", lbl: "Toll Free", val: "1-800-658-7198", href: "tel:+18006587198" },
              { ico: "💬", lbl: "WhatsApp", val: "561-955-0375", href: "https://wa.me/15619550375" },
              { ico: "✉️", lbl: "Email", val: "info@pmarble.com", href: "mailto:info@pmarble.com" },
              { ico: "📍", lbl: "Address", val: "4411 N Dixie Hwy, Boca Raton, FL 33431", href: null },
            ].map(c => (
              <div key={c.lbl} style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: "1.3rem" }}>
                <div style={{ width: 40, height: 40, borderRadius: 6, background: "rgba(184,150,110,.12)", border: "1px solid rgba(184,150,110,.22)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{c.ico}</div>
                <div>
                  <div style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: C.gold, marginBottom: 3 }}>{c.lbl}</div>
                  {c.href ? <a href={c.href} style={{ color: "rgba(255,255,255,.8)", fontSize: 15, textDecoration: "none" }}>{c.val}</a> : <div style={{ color: "rgba(255,255,255,.8)", fontSize: 15 }}>{c.val}</div>}
                </div>
              </div>
            ))}
            <div style={{ borderTop: "1px solid rgba(255,255,255,.08)", paddingTop: "1.5rem", marginTop: "0.5rem" }}>
              <div style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: C.gold, marginBottom: 10 }}>Licensed In</div>
              <p style={{ color: "rgba(255,255,255,.35)", fontSize: 12, lineHeight: 2.2 }}>Palm Beach County #07031<br />Broward County #325-239123<br />Dade County #675906-3<br />BBB Accredited Since 2014</p>
            </div>
          </div>
          <ContactForm dark />
        </div>
        <div style={{ maxWidth: 1100, margin: "3rem auto 0", borderRadius: 10, overflow: "hidden", height: 300 }}>
          <iframe loading="lazy" title="Pacific Marble Restoration location" src="https://maps.google.com/maps?q=4411+N+Dixie+Hwy,+Boca+Raton,+FL+33431&output=embed" style={{ width: "100%", height: "100%", border: "none", display: "block" }} allowFullScreen />
        </div>
      </div>
    </div>
  );
}

/* ── NAV & FOOTER ── */
function Topbar() {
  return (
    <div style={{ background: C.char, padding: "8px 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 6 }}>
      <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
        {[["📞 1-855-680-7239", "tel:+18556807239"], ["📞 1-800-658-7198", "tel:+18006587198"], ["💬 WhatsApp: 561-955-0375", "https://wa.me/15619550375"], ["✉️ info@pmarble.com", "mailto:info@pmarble.com"]].map(([l, h]) => (
          <a key={h} href={h} style={{ color: "rgba(255,255,255,.65)", fontSize: 12, textDecoration: "none" }}>{l}</a>
        ))}
      </div>
      <div style={{ display: "flex", gap: 10 }}>
        {[["FB", "https://www.facebook.com/Pacific-Marble-2194840264114293/"], ["IG", "https://www.instagram.com/pacificmarble_/"], ["YT", "https://www.youtube.com/user/PacificMarbleFlorida"]].map(([l, h]) => (
          <a key={h} href={h} target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,.5)", fontSize: 12, textDecoration: "none" }}>{l}</a>
        ))}
      </div>
    </div>
  );
}

function Nav({ current, nav }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  const [galOpen, setGalOpen] = useState(false);

  const link = (lbl, page, active) => (
    <span onClick={() => { nav(page); setMobileOpen(false); setSvcOpen(false); setGalOpen(false); }}
      style={{ color: active ? C.gd : C.txt, fontSize: 13, fontWeight: 500, letterSpacing: "0.07em", textTransform: "uppercase", padding: "8px 12px", borderRadius: 4, cursor: "pointer", background: active ? `rgba(184,150,110,.12)` : "transparent", display: "block" }}>
      {lbl}
    </span>
  );

  return (
    <nav style={{ position: "sticky", top: 0, zIndex: 300, background: "rgba(240,236,228,.97)", backdropFilter: "blur(14px)", borderBottom: `1px solid ${C.bdr}`, padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 70 }}>
      <img src={IMGS.logo} alt="Pacific Marble Restoration" onClick={() => nav("home")} style={{ height: 38, cursor: "pointer" }}
        onError={e => { e.target.style.display = "none"; e.target.nextSibling.style.display = "block"; }}
      />
      <span onClick={() => nav("home")} style={{ display: "none", fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", color: C.char, cursor: "pointer", fontWeight: 600 }}>Pacific Marble</span>

      {/* Desktop nav */}
      <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
        {link("Home", "home", current === "home")}
        {link("About", "about", current === "about")}

        {/* Services dropdown */}
        <div style={{ position: "relative" }} onMouseEnter={() => setSvcOpen(true)} onMouseLeave={() => setSvcOpen(false)}>
          <span style={{ color: C.txt, fontSize: 13, fontWeight: 500, letterSpacing: "0.07em", textTransform: "uppercase", padding: "8px 12px", borderRadius: 4, cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}>Services ▾</span>
          {svcOpen && (
            <div style={{ position: "absolute", top: "100%", left: 0, background: C.white, border: `1px solid ${C.bdr}`, borderRadius: 8, minWidth: 230, padding: "0.5rem", boxShadow: "0 8px 28px rgba(0,0,0,.13)", zIndex: 400 }}>
              {[["Marble Polishing / Restoration", "marble-polishing"], ["Porcelain Cleaning", "porcelain"], ["Yacht Services", "yacht"], ["Grout Services", "grout"]].map(([l, p]) => (
                <span key={p} onClick={() => { nav(p); setSvcOpen(false); }} style={{ display: "block", padding: "9px 14px", fontSize: 13, color: C.txt, borderRadius: 4, cursor: "pointer" }}
                  onMouseEnter={e => e.target.style.background = C.mc}
                  onMouseLeave={e => e.target.style.background = "transparent"}>{l}</span>
              ))}
            </div>
          )}
        </div>

        {/* Gallery dropdown */}
        <div style={{ position: "relative" }} onMouseEnter={() => setGalOpen(true)} onMouseLeave={() => setGalOpen(false)}>
          <span style={{ color: C.txt, fontSize: 13, fontWeight: 500, letterSpacing: "0.07em", textTransform: "uppercase", padding: "8px 12px", borderRadius: 4, cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}>Gallery ▾</span>
          {galOpen && (
            <div style={{ position: "absolute", top: "100%", left: 0, background: C.white, border: `1px solid ${C.bdr}`, borderRadius: 8, minWidth: 200, padding: "0.5rem", boxShadow: "0 8px 28px rgba(0,0,0,.13)", zIndex: 400 }}>
              {[["Photo Gallery", "photo-gallery"], ["Video Gallery", "video-gallery"], ["Before / After", "before-after"]].map(([l, p]) => (
                <span key={p} onClick={() => { nav(p); setGalOpen(false); }} style={{ display: "block", padding: "9px 14px", fontSize: 13, color: C.txt, borderRadius: 4, cursor: "pointer" }}
                  onMouseEnter={e => e.target.style.background = C.mc}
                  onMouseLeave={e => e.target.style.background = "transparent"}>{l}</span>
              ))}
            </div>
          )}
        </div>

        {link("Our Process", "our-process", current === "our-process")}
        {link("FAQ", "faq", current === "faq")}
        <span onClick={() => nav("contact")} style={{ background: C.gold, color: C.white, fontSize: 13, fontWeight: 600, letterSpacing: "0.05em", padding: "9px 18px", borderRadius: 4, cursor: "pointer", marginLeft: 4 }}>Free Quote</span>
      </div>
    </nav>
  );
}

function Footer({ nav }) {
  return (
    <footer style={{ background: C.char2, padding: "4rem 1.5rem 2rem", borderTop: "1px solid rgba(255,255,255,.05)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "3rem", paddingBottom: "3rem", borderBottom: "1px solid rgba(255,255,255,.06)" }}>
        <div>
          <img src={IMGS.logo} alt="Pacific Marble Restoration" style={{ height: 34, filter: "brightness(0) invert(1)", opacity: .65 }} onError={e => e.target.style.display = "none"} />
          <p style={{ fontSize: 13, color: "rgba(255,255,255,.4)", lineHeight: 1.85, marginTop: "1rem", maxWidth: 280 }}>South Florida's most recommended marble restoration company since 2003. Family owned and operated.</p>
          <div style={{ display: "flex", gap: 10, marginTop: "1.5rem" }}>
            {[["FB", "https://www.facebook.com/Pacific-Marble-2194840264114293/"], ["IG", "https://www.instagram.com/pacificmarble_/"], ["YT", "https://www.youtube.com/user/PacificMarbleFlorida"]].map(([l, h]) => (
              <a key={h} href={h} target="_blank" rel="noopener noreferrer" style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,.5)", fontSize: 11, textDecoration: "none" }}>{l}</a>
            ))}
          </div>
        </div>
        <div>
          <div style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,.38)", marginBottom: "1.1rem" }}>Services</div>
          {[["Marble Polishing", "marble-polishing"], ["Porcelain Cleaning", "porcelain"], ["Yacht Services", "yacht"], ["Grout Services", "grout"]].map(([l, p]) => (
            <div key={p} onClick={() => nav(p)} style={{ color: "rgba(255,255,255,.52)", fontSize: 13, marginBottom: 8, cursor: "pointer" }}>{l}</div>
          ))}
        </div>
        <div>
          <div style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,.38)", marginBottom: "1.1rem" }}>Company</div>
          {[["About Us", "about"], ["Our Process", "our-process"], ["Photo Gallery", "photo-gallery"], ["Before / After", "before-after"], ["Video Gallery", "video-gallery"], ["FAQ", "faq"], ["Contact Us", "contact"]].map(([l, p]) => (
            <div key={p} onClick={() => nav(p)} style={{ color: "rgba(255,255,255,.52)", fontSize: 13, marginBottom: 8, cursor: "pointer" }}>{l}</div>
          ))}
        </div>
        <div>
          <div style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,.38)", marginBottom: "1.1rem" }}>Contact</div>
          <div style={{ color: "rgba(255,255,255,.35)", fontSize: 12, lineHeight: 2.4 }}>
            <div><a href="tel:+18556807239" style={{ color: "inherit", textDecoration: "none" }}>1-855-680-7239</a></div>
            <div><a href="tel:+18006587198" style={{ color: "inherit", textDecoration: "none" }}>1-800-658-7198</a></div>
            <div><a href="https://wa.me/15619550375" style={{ color: "inherit", textDecoration: "none" }}>WhatsApp: 561-955-0375</a></div>
            <div><a href="mailto:info@pmarble.com" style={{ color: "inherit", textDecoration: "none" }}>info@pmarble.com</a></div>
            <div style={{ marginTop: 8 }}>4411 N Dixie Hwy<br />Boca Raton, FL 33431</div>
            <div style={{ marginTop: 8 }}>PB #07031 · Brow #325-239123<br />Dade #675906-3</div>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 1100, margin: "2rem auto 0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <div style={{ color: "rgba(255,255,255,.25)", fontSize: 12 }}>© 2026 Pacific Marble Restoration Corp. · All Rights Reserved</div>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {["Privacy Policy", "SMS Terms", "SMS Opt-In"].map(l => (
            <span key={l} style={{ color: "rgba(255,255,255,.25)", fontSize: 12, cursor: "pointer" }}>{l}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}

/* ── ROOT ── */
export default function App() {
  const [page, setPage] = useState("home");

  const nav = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const pages = {
    home: <PageHome nav={nav} />,
    about: <PageAbout nav={nav} />,
    "marble-polishing": <PageMarblePolishing nav={nav} />,
    porcelain: <PagePorcelain />,
    yacht: <PageYacht />,
    grout: <PageGrout />,
    "photo-gallery": <PagePhotoGallery />,
    "video-gallery": <PageVideoGallery />,
    "before-after": <PageBeforeAfter />,
    "our-process": <PageProcess />,
    faq: <PageFaq />,
    contact: <PageContact />,
  };

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: C.mw, minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=Outfit:wght@300;400;500;600;700&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        h1,h2,h3{margin:0;}p{margin:0;}
        @media(max-width:900px){
          .hero-inner{grid-template-columns:1fr!important;}
          .two-col{grid-template-columns:1fr!important;}
          .cards-3{grid-template-columns:1fr 1fr!important;}
          .gallery-4{grid-template-columns:repeat(3,1fr)!important;}
        }
        @media(max-width:640px){
          .cards-3{grid-template-columns:1fr!important;}
          .gallery-4{grid-template-columns:repeat(2,1fr)!important;}
        }
      `}</style>
      <Topbar />
      <Nav current={page} nav={nav} />
      {pages[page] || <PageHome nav={nav} />}
      <Footer nav={nav} />
    </div>
  );
}
