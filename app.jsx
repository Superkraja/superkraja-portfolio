// Tweak defaults
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accentHue": "blue",
  "heroBold": false,
  "showBolts": true
} /*EDITMODE-END*/;

const { useEffect, useState, useRef, useMemo } = React;

function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 120;
      let cur = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) cur = id;
      }
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids]);
  return active;
}

function useRevealOnScroll(deps = []) {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    // First pass: reveal anything already in viewport
    els.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("visible");
      }
    });
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {if (e.isIntersecting) e.target.classList.add("visible");});
    }, { threshold: 0.08, rootMargin: "0px 0px -8% 0px" });
    els.forEach((el) => io.observe(el));
    // Safety net: long delay so scroll animations play naturally first
    const safetyTimer = setTimeout(() => {
      document.querySelectorAll(".reveal:not(.visible)").forEach((el) => el.classList.add("visible"));
    }, 8000);
    return () => { io.disconnect(); clearTimeout(safetyTimer); };
    // eslint-disable-next-line
  }, deps);
}

function useParallax(ref, speed = 0.2) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf;
    const loop = () => {
      const r = el.getBoundingClientRect();
      const center = r.top + r.height / 2 - window.innerHeight / 2;
      el.style.transform = `translateY(${-center * speed}px)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [ref, speed]);
}

function Nav({ onContact, active }) {
  const [hidden, setHidden] = useState(false);
  const [menu, setMenu] = useState(false);
  const lastY = useRef(0);
  const menuRef = useRef(false);
  const dropdownRef = useRef(null);
  const btnRef = useRef(null);

  // keep a ref in sync so the scroll handler can read the latest menu state
  menuRef.current = menu;

  useEffect(() => {
    const onScroll = () => {
      // While the menu is open, keep the header pinned in place.
      if (menuRef.current) {
        lastY.current = window.scrollY;
        setHidden(false);
        return;
      }
      const y = window.scrollY;
      if (y < 80) setHidden(false);else
      if (y > lastY.current + 6) setHidden(true);else
      if (y < lastY.current - 6) setHidden(false);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu when tapping/clicking outside of it (or the toggle button).
  useEffect(() => {
    if (!menu) return;
    const onOutside = (e) => {
      if (dropdownRef.current && dropdownRef.current.contains(e.target)) return;
      if (btnRef.current && btnRef.current.contains(e.target)) return;
      setMenu(false);
    };
    document.addEventListener("pointerdown", onOutside, true);
    return () => document.removeEventListener("pointerdown", onOutside, true);
  }, [menu]);

  const go = (id) => {
    setMenu(false);
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 60, behavior: "smooth" });
  };
  return (
    <React.Fragment>
      <header className={"nav " + (hidden ? "hidden" : "")}>
        <div className="logo" onClick={() => go("hero")} style={{ cursor: "pointer" }}>
          <img src="assets/superkraja-logo.svg" alt="superkraja" />
        </div>
        <nav className="nav-links">
          {NAV_SECTIONS.slice(1).map((n) =>
          <button key={n.id} className={"nav-link " + (active === n.id ? "active" : "")} onClick={() => go(n.id)}>{n.label}</button>
          )}
        </nav>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <a className="cta email-cta" href="mailto:superkraja@gmail.com" target="_blank" rel="noopener noreferrer">
            <Ico name="mail" size={16} /> <span className="email-label">superkraja@gmail.com</span>
          </a>
          <button
            ref={btnRef}
            className={"menu-btn " + (menu ? "open" : "")}
            onClick={() => setMenu((m) => !m)}
            aria-label={menu ? "Close menu" : "Open menu"}
            aria-expanded={menu}><span /></button>
        </div>
      </header>
      <div ref={dropdownRef} className={"nav-mobile " + (menu ? "open" : "")}>
        {NAV_SECTIONS.slice(1).map((n) =>
        <button key={n.id} className="nav-link" onClick={() => go(n.id)}>{n.label}</button>
        )}
      </div>
    </React.Fragment>);

}

function Hero({ showBolts }) {
  const photoRef = useRef(null);
  useParallax(photoRef, 0.05);
  return (
    <section id="hero" className="section" style={{ paddingTop: 60 }}>
      <div className="wrap hero reveal visible">
        <div className="hero-photo" ref={photoRef}>
          <div className="hero-avatar" aria-label="Kraja portrait">
            <div className="hero-portrait">
              <img src="assets/kraja-portrait-new.jpg" alt="Vladimir Kraja Krajišnik" />
            </div>
          </div>
          {showBolts &&
          <React.Fragment>
              <span className="doodle d-star"><img src="assets/doodle-star.svg" alt="" /></span>
              <span className="doodle d-lt-top"><img src="assets/doodle-lightning1.svg" alt="" /></span>
              <span className="doodle d-jag-mid"><img src="assets/doodle-jagged.svg" alt="" /></span>
              <span className="doodle d-square"><img src="assets/doodle-square.svg" alt="" /></span>
              <span className="doodle d-jag-br"><img src="assets/doodle-vector.svg" alt="" /></span>
              <span className="doodle d-lt-bl"><img src="assets/doodle-lightning2.svg" alt="" /></span>
            </React.Fragment>
          }
        </div>
        <div className="hero-copy">
          <div className="hero-greet">
            <span className="hi-hand">Hi,</span>
            <span>My name is <span className="accent">Super</span>.</span>
            <br />
            <span>I am <span className="accent">Kraja</span><span className="pron">/ˈkra:ya/</span></span>
          </div>
          <div className="hero-wordmark hero-wordmark-seo" aria-hidden="false">
            PRODUCT<br />DESIGN<span className="er">er</span>
          </div>
          <img
            src="assets/product-designer-sign.svg"
            alt=""
            aria-hidden="true"
            className="hero-wordmark-img" />

          <div className="hero-tagline">
            <span className="hero-tagline-brush" aria-hidden="true"></span>
            <span className="hero-tagline-text">I shape stakeholders' ideas<br />and adapt them to users' needs.</span>
          </div>
        </div>
      </div>
    </section>);
}

function Specialties({ onOpen }) {
  const [hoveredCard, setHoveredCard] = React.useState(null);
  return (
    <section id="powers" className="section">
      <div className="wrap">
        <div className="title-wrap reveal">
          <div className="title-chip blue" style={{ backgroundColor: "rgba(255, 255, 255, 0)", opacity: "1" }}>
            <Bolt color="var(--blue)" />
            <span>My SUPERpowers</span>
            <Bolt color="var(--blue)" style={{ transform: "scaleX(-1)" }} />
          </div>
        </div>
        <div className="specialties">
          {SPECIALTIES.map((s, i) => {
            const Illo = SPEC_ILLOS[s.illoKey];
            const isHovered = hoveredCard === s.id;
            return (
              <div
                key={s.id}
                className={"spec-card reveal d" + (i + 1)}
                onClick={() => onOpen(s.id, 0)}
                onMouseEnter={() => setHoveredCard(s.id)}
                onMouseLeave={() => setHoveredCard(null)}>
                
                <div className={"spec-illo " + s.illoKey}><Illo hover={isHovered} /></div>
                <div className="spec-num">{s.num}</div>
                <div className="spec-title">{s.title}</div>
                <div className="spec-desc">{s.desc}</div>
                <div className="spec-link" style={{ alignItems: "center", flexDirection: "row", justifyContent: "flex-start" }}>
                  Read more
                  <span className="arrow"><Ico name="arrow-right" size={14} /></span>
                </div>
              </div>);

          })}
        </div>
      </div>
    </section>);

}

function Works({ onOpenCase, onOpenBrand }) {
  const [hoveredBrand, setHoveredBrand] = React.useState(null);
  return (
    <section id="works" className="section" style={{ background: "#fff" }}>
      <div className="wrap">
        <div className="title-wrap reveal">
          <div className="title-chip purple">
            <img src="assets/star-doodle-left.svg" alt="" style={{ width: 38, height: 38 }} />
            <span>SUPER awesome portfolio</span>
            <img src="assets/star-doodle-right.svg" alt="" style={{ width: 38, height: 38 }} />
          </div>
        </div>

        <h3 className="works-title reveal">User experience cases</h3>
        <div className="ux-grid">
          {UX_CASES.map((c, i) => {
            const thumbMap = {
              "luxury-watch": "assets/Luxury Watch placeholder.jpg",
              "baby-food": "assets/case-baby-food.jpg",
              "consultation": "assets/case-consulting.jpg",
              "realestate": "assets/realestate-hero.jpg",
              "travel": "assets/case-travel.jpg",
              "web-ui": "assets/Interface designs card.jpg"
            };
            const images = [thumbMap[c.id]];
            return (
              <div key={c.id} className={"ux-card reveal d" + (i + 1)} onClick={() => onOpenCase(i)}>
                <div className="ux-thumb">
                  {images[0] ?
                  <ImgSkeleton src={images[0]} alt={c.title} imgStyle={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" /> :
                  <div style={{ width: '100%', height: '100%', background: '#1c1c1e', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
                    <svg width="52" height="52" viewBox="0 0 52 52" fill="none"><rect x="18" y="4" width="16" height="6" rx="3" fill="rgba(255,255,255,0.2)"/><rect x="10" y="10" width="32" height="36" rx="8" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2"/><circle cx="26" cy="28" r="8" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2"/><line x1="26" y1="28" x2="26" y2="22" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round"/><line x1="26" y1="28" x2="30" y2="28" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round"/><rect x="18" y="42" width="16" height="6" rx="3" fill="rgba(255,255,255,0.2)"/></svg>
                    <span style={{ fontFamily: "'Patrick Hand SC',cursive", fontSize: 13, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.06em' }}>Coming soon</span>
                  </div>
                  }
                </div>
                <div className="ux-body">
                  <h3>{c.title}</h3>
                  <p style={{ flexGrow: 1 }}>{c.desc}</p>
                  <div className="ux-link">
                    Find out more
                    <span className="arrow"><Ico name="arrow-right" size={14} /></span>
                  </div>
                </div>
              </div>);

          })}
        </div>

        <h3 className="works-title reveal" style={{ marginTop: 40 }}>Some of the brands I designed</h3>
        <div className="brand-grid">
          {BRANDS.map((b, i) => {
            const images = ["assets/brand-susic.jpg", "assets/brand-orbit.jpg", "assets/brand-nef.jpg", "assets/brand-bos.jpg", "assets/brand-uranak.jpg", "assets/brand-serbian-week.jpg", "assets/brand-bed-beer.jpg"];
            const isHovered = hoveredBrand === b.id;
            return (
              <div
                key={b.id}
                className={"brand-card reveal d" + (i % 4 + 1)}
                onClick={() => onOpenBrand(i)}
                onMouseEnter={() => setHoveredBrand(b.id)}
                onMouseLeave={() => setHoveredBrand(null)}>
                
                <div className="brand-logo" style={{ position: 'relative' }}>
                  <ImgSkeleton src={images[i]} alt={b.name} imgStyle={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                  {b.label &&
                  <div style={{
                    position: 'absolute', inset: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    pointerEvents: 'none',
                    overflow: 'hidden'
                  }}>
                      <span style={{
                      fontFamily: "'Figtree',sans-serif", fontWeight: 800,
                      fontSize: 'clamp(22px,4.5cqw,36px)', letterSpacing: '-0.03em',
                      color: 'rgba(255,255,255,0.18)',
                      textTransform: 'uppercase',
                      whiteSpace: 'nowrap',
                      transform: 'rotate(-20deg)',
                      userSelect: 'none'
                    }}>{b.label}</span>
                    </div>
                  }
                </div>
                <div className="brand-link">
                  OPEN
                  <span className="arrow" style={{ opacity: isHovered ? 1 : 0, marginLeft: isHovered ? 8 : 0 }}><Ico name="arrow-right" size={14} /></span>
                </div>
              </div>);

          })}
        </div>
      </div>
    </section>);

}

function About({ onOpen }) {
  const bgRef = useRef(null);
  useParallax(bgRef, 0.04);
  return (
    <section id="about" className="section" style={{ background: "#fff" }}>
      <div className="wrap">
        <div className="title-wrap reveal">
          <div className="title-chip red">
            <img src="assets/lightning-doodle-left.svg" alt="" style={{ width: 50, height: 50 }} />
            <span>About me</span>
            <img src="assets/lightning-doodle-right.svg" alt="" style={{ width: 50, height: 50 }} />
          </div>
        </div>
        <div className="about-hero">
          <div className="about-photo reveal" ref={bgRef} aria-label="Kraja at the desk">
            <img src="assets/About-me-new-landing tiny.jpg" alt="Vladimir Kraja Krajišnik at work" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center' }} />
          </div>
          <div className="about-copy reveal d1">
            <h2>Why Super?</h2>
            <p>
              Well… why not? Actually, kraja@gmail wasn't free back then, so I added "super."
            </p>
            <h2 style={{ marginTop: 32 }}>Why Kraja?</h2>
            <p>
              My name is Vladimir Krajišnik.<br />
              "Kraja" /ˈkra.ya/ comes from my last name and has been my nickname since childhood.<br />
              I've been in design for over 15 years.<br />
              I live and work in Belgrade, and people say I look like Fred Flintstone, so some call me Fred.
            </p>
            <button className="cta" onClick={onOpen} style={{ marginTop: 20 }}>
              Read more <Ico name="arrow-right" size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>);

}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [err, setErr] = useState({});
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.email.match(/^\S+@\S+\.\S+$/)) next.email = "Please enter a valid email";
    if (form.message.trim().length < 10) next.message = "A little more, please";
    setErr(next);

    if (Object.keys(next).length === 0) {
      setSubmitting(true);
      try {
        const response = await fetch('https://formspree.io/f/mdablerk', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            message: form.message
          })
        });

        if (response.ok) {
          setSent(true);
          setForm({ name: "", email: "", message: "" });
          setTimeout(() => setSent(false), 3500);
        } else {
          setErr({ message: "Something went wrong. Please try again." });
        }
      } catch (error) {
        setErr({ message: "Connection error. Please try again." });
      } finally {
        setSubmitting(false);
      }
    }
  };

  return (
    <section id="contact" className="section" style={{ background: "var(--bg)" }}>
      <div className="wrap">
        <div className="title-wrap reveal">
          <div className="title-chip purple">
            <Bolt color="var(--purple)" />
            <span>AWESOME, let's get in touch</span>
            <Bolt color="var(--purple)" style={{ transform: "scaleX(-1)" }} />
          </div>
        </div>
        <div className="contact-grid">
          <form className="contact-form reveal" onSubmit={submit} noValidate method="post" action="#contact" style={{ backgroundColor: "rgb(62, 69, 72)" }}>
            <h3>Don't worry,</h3>
            <p>I don't have any mind-control powers, so don't be afraid to drop me a message.</p>
            <div className="field">
              <label>Your name</label>
              <input type="text" name="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Super friend" />
              <span className="err">{err.name || ""}</span>
            </div>
            <div className="field">
              <label>Email address</label>
              <input type="email" name="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="super@friend.com" />
              <span className="err">{err.email || ""}</span>
            </div>
            <div className="field">
              <label>Message</label>
              <textarea name="message" rows="4" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me about your project…" />
              <span className="err">{err.message || ""}</span>
            </div>
            <div className="submit-row">
              <button className="submit" type="submit" disabled={sent || submitting}>
                {sent ? "Thanks! I'll get back to you." : submitting ? "Sending..." : <React.Fragment>Send message <Ico name="send" size={16} /></React.Fragment>}
              </button>
            </div>
          </form>

          <div className="contact-side reveal d1">
            <h3>Be happy!</h3>
            <p className="tagline">Prefer email or a DM? Here's every door you can knock on.</p>
            <div className="contact-list">
              <a className="contact-row" href="mailto:superkraja@gmail.com" target="_blank" rel="noopener noreferrer">
                <span className="ico"><Ico name="mail" size={18} color="#fff" /></span>
                <span className="meta"><small>Email</small><strong>superkraja@gmail.com</strong></span>
              </a>
              <a className="contact-row" href="https://www.linkedin.com/in/vladimir-krajisnik-a9b42710b" target="_blank" rel="noreferrer" onClick={(e) => {e.preventDefault();window.top.open("https://www.linkedin.com/in/vladimir-krajisnik-a9b42710b", "_blank");}}>
                <span className="ico" style={{ background: "#0a66c2" }}><Ico name="linkedin" size={18} color="#fff" /></span>
                <span className="meta"><small>LinkedIn</small><strong>Vladimir Krajišnik</strong></span>
              </a>
              <a className="contact-row" href="https://dribbble.com/Superkraja" target="_blank" rel="noreferrer" onClick={(e) => {e.preventDefault();window.top.open("https://dribbble.com/Superkraja", "_blank");}}>
                <span className="ico" style={{ background: "#ea4c89" }}><Ico name="dribbble" size={18} color="#fff" /></span>
                <span className="meta"><small>Dribbble</small><strong>@superkraja</strong></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

// --- Tweaks panel (custom inline) ---
function Tweaks({ tw, setTw }) {
  const [open, setOpen] = useState(false);
  const [panel, setPanel] = useState(false);
  useEffect(() => {
    const onMsg = (e) => {
      if (!e.data || typeof e.data !== "object") return;
      if (e.data.type === "__activate_edit_mode") setPanel(true);
      if (e.data.type === "__deactivate_edit_mode") setPanel(false);
    };
    window.addEventListener("message", onMsg);
    try {window.parent.postMessage({ type: "__edit_mode_available" }, "*");} catch (e) {}
    return () => window.removeEventListener("message", onMsg);
  }, []);
  const set = (k, v) => {
    const next = { ...tw, [k]: v };
    setTw(next);
    try {window.parent.postMessage({ type: "__edit_mode_set_keys", edits: { [k]: v } }, "*");} catch (e) {}
  };
  const close = () => {
    setPanel(false);
    try {window.parent.postMessage({ type: "__edit_mode_dismissed" }, "*");} catch (e) {}
  };
  if (!panel) return null;
  return (
    <div style={{
      position: "fixed", right: 20, bottom: 20, zIndex: 200,
      width: 280, background: "#fff", borderRadius: 22,
      boxShadow: "0 20px 50px -10px rgba(0,0,0,.25)",
      padding: "18px 20px",
      fontFamily: "Figtree"
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <strong>Tweaks</strong>
        <button onClick={close} style={{ border: "none", background: "transparent", cursor: "pointer", padding: 4 }} aria-label="Close">
          <Ico name="close" size={18} />
        </button>
      </div>
      <div style={{ fontSize: 13, color: "#666", marginBottom: 6 }}>Accent palette</div>
      <div style={{ display: "flex", gap: 6, marginBottom: 14 }}>
        {[
        { k: "blue", label: "Cool" },
        { k: "warm", label: "Warm" },
        { k: "mono", label: "Mono" }].
        map((o) =>
        <button key={o.k} onClick={() => set("accentHue", o.k)} style={{
          flex: 1, padding: "8px 4px", borderRadius: 10, border: "1px solid rgba(0,0,0,.1)",
          background: tw.accentHue === o.k ? "var(--ink)" : "#fff",
          color: tw.accentHue === o.k ? "#fff" : "var(--ink)",
          fontSize: 13, cursor: "pointer"
        }}>{o.label}</button>
        )}
      </div>
      <label style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "6px 0" }}>
        <span style={{ fontSize: 14 }}>Hero accent bold</span>
        <input type="checkbox" checked={tw.heroBold} onChange={(e) => set("heroBold", e.target.checked)} />
      </label>
      <label style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "6px 0" }}>
        <span style={{ fontSize: 14 }}>Show lightning bolts</span>
        <input type="checkbox" checked={tw.showBolts} onChange={(e) => set("showBolts", e.target.checked)} />
      </label>
    </div>);

}

// ── SpecSubpage — superpower overlay with fade+slide transition ───────────────
function SpecSubpage({ open, onClose, specIdx, stories, index, setIndex, accent }) {
  const scrollRef = useRef(null);
  const [displayIdx, setDisplayIdx] = useState(specIdx);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (open) {
      // Use rAF to ensure DOM is fully painted before resetting scroll
      requestAnimationFrame(() => {
        if (scrollRef.current) scrollRef.current.scrollTop = 0;
      });
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    if (specIdx === displayIdx) return;
    setFading(true);
    const t = setTimeout(() => {
      setDisplayIdx(specIdx);
      if (scrollRef.current) scrollRef.current.scrollTop = 0;
      setFading(false);
    }, 220);
    return () => clearTimeout(t);
  }, [specIdx, open]);

  useEffect(() => {
    if (!open) setDisplayIdx(specIdx);
  }, [open]);

  useEffect(() => {
    const onKey = (e) => {
      if (!open) return;
      if (e.key === "Escape") onClose();
      if (stories && e.key === "ArrowRight" && index < stories.length - 1) setIndex(index + 1);
      if (stories && e.key === "ArrowLeft" && index > 0) setIndex(index - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, index, stories, setIndex, onClose]);

  const SPEC_COMPONENTS = [UXSuperpowerContent, UISuperpowerContent, ProtoSuperpowerContent, BrandSuperpowerContent];
  const SpecContent = SPEC_COMPONENTS[displayIdx] || SPEC_COMPONENTS[0];

  return (
    <div className={"subpage " + (open ? "open" : "")} ref={scrollRef} aria-hidden={!open} style={{ overflowY: "auto" }}>
      <div style={{
        transition: "opacity .22s ease, transform .22s ease",
        opacity: fading ? 0 : 1,
        transform: fading ? "translateY(12px)" : "translateY(0)",
        position: "relative", zIndex: 1
      }}>
        <SpecContent onClose={onClose} stories={stories} index={displayIdx} setIndex={setIndex} />
      </div>
    </div>);

}

const NAV_STATE_KEY = "sk_nav_state";
const IS_PREVIEW = window.location.hostname.includes('claudeusercontent');

function readNavState() {
  try {
    const raw = localStorage.getItem(NAV_STATE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    // Validate the state shape before using it
    if (!parsed || typeof parsed !== 'object' || !parsed.sub) return null;
    const sub = parsed.sub;
    if (typeof sub.brandIdx !== 'number' || !Number.isFinite(sub.brandIdx)) sub.brandIdx = 0;
    if (typeof sub.specIdx !== 'number' || !Number.isFinite(sub.specIdx)) sub.specIdx = 0;
    if (typeof sub.caseIdx !== 'number' || !Number.isFinite(sub.caseIdx)) sub.caseIdx = 0;
    if (typeof sub.storyIdx !== 'number' || !Number.isFinite(sub.storyIdx)) sub.storyIdx = 0;
    return parsed;
  } catch (e) {return null;}
}

function saveNavState(sub, aboutOpen) {
  try {
    localStorage.setItem(NAV_STATE_KEY, JSON.stringify({ sub, aboutOpen }));
    localStorage.setItem(NAV_STATE_KEY + "_hash", window.location.hash || "#");
  } catch (e) {}
}

// Hash routing helpers
function parseHash() {
  const raw = window.location.hash.replace(/^#\/?/, "");
  if (!raw) return null;
  const parts = raw.split("/");
  const resolveSpec  = v => { const n = parseInt(v); if (!isNaN(n)) return n; const i = SPECIALTIES.findIndex(s => s.id === v); return i >= 0 ? i : 0; };
  const resolveCase  = v => { const n = parseInt(v); if (!isNaN(n)) return n; const i = UX_CASES.findIndex(c => c.id === v); return i >= 0 ? i : 0; };
  const resolveBrand = v => { const n = parseInt(v); if (!isNaN(n)) return n; const i = BRANDS.findIndex(b => b.id === v); return i >= 0 ? i : 0; };
  const kind = parts[0] || null;
  const val = parts[1] || "0";
  if (kind === "spec")  return { sub: { kind: "spec",  specIdx:  resolveSpec(val),  storyIdx: 0, caseIdx: 0, brandIdx: 0 }, aboutOpen: false };
  if (kind === "case")  return { sub: { kind: "case",  specIdx: 0, storyIdx: 0, caseIdx:  resolveCase(val),  brandIdx: 0 }, aboutOpen: false };
  if (kind === "brand") return { sub: { kind: "brand", specIdx: 0, storyIdx: 0, caseIdx: 0, brandIdx: resolveBrand(val) }, aboutOpen: false };
  if (kind === "about") return { sub: { kind: null,    specIdx: 0, storyIdx: 0, caseIdx: 0, brandIdx: 0 }, aboutOpen: true };
  return null;
}

function stateToHash(sub, aboutOpen) {
  if (aboutOpen) return "#/about";
  if (!sub.kind) return "#";
  if (sub.kind === "spec") return `#/spec/${(SPECIALTIES[sub.specIdx] || {}).id || sub.specIdx}`;
  if (sub.kind === "case") return `#/case/${(UX_CASES[sub.caseIdx] || {}).id || sub.caseIdx}`;
  if (sub.kind === "brand") return `#/brand/${(BRANDS[sub.brandIdx] || {}).id || sub.brandIdx}`;
  return "#";
}

// ── Clean path routing ────────────────────────────────────────────────────────
const SPEC_SLUG  = { "ux":"user-experience", "ui":"ui-design", "proto":"prototyping", "brand":"brand-identity" };
const SLUG_SPEC  = Object.fromEntries(Object.entries(SPEC_SLUG).map(([k,v]) => [v,k]));
const CASE_SLUG  = { "luxury-watch":"luxury-watch", "baby-food":"baby-food", "consultation":"consulting", "realestate":"real-estate", "travel":"travel", "web-ui":"interface-designs" };
const SLUG_CASE  = Object.fromEntries(Object.entries(CASE_SLUG).map(([k,v]) => [v,k]));
const BRAND_SLUG = { "b1":"logo-design", "b2":"puzzle", "b4":"nef", "b3":"bos", "b5":"uranak", "b6":"serbian-week", "b7":"bed-and-beer" };
const SLUG_BRAND = Object.fromEntries(Object.entries(BRAND_SLUG).map(([k,v]) => [v,k]));

function stateToPath(sub, aboutOpen) {
  if (aboutOpen) return "/about";
  if (!sub || !sub.kind) return "/";
  if (sub.kind === "spec")  { const s = SPECIALTIES[sub.specIdx];  return s ? "/" + (SPEC_SLUG[s.id]  || s.id)  : "/"; }
  if (sub.kind === "case")  { const c = UX_CASES[sub.caseIdx];     return c ? "/" + (CASE_SLUG[c.id]  || c.id)  : "/"; }
  if (sub.kind === "brand") { const b = BRANDS[sub.brandIdx];      return b ? "/brand/" + (BRAND_SLUG[b.id] || b.id) : "/"; }
  return "/";
}

function parsePath() {
  const raw  = window.location.pathname.replace(/^\//, "").replace(/\/$/, "");
  const path = raw.toLowerCase();
  // /home → treat as homepage
  if (path === "home") { history.replaceState(null, "", "/"); return null; }
  // root — handle hash variants
  if (!path) {
    const hash = window.location.hash;
    if (hash === "#" || hash === "#/") {
      // bare # → clean it from the URL bar
      history.replaceState(null, "", "/");
    } else if (hash && hash !== "#" && hash !== "#/") {
      // old hash routing → migrate to clean URL
      const h = parseHash();
      if (h) { history.replaceState(null, "", stateToPath(h.sub, h.aboutOpen)); return h; }
    }
    return null;
  }
  if (path === "about") return { sub: { kind: null, specIdx: 0, storyIdx: 0, caseIdx: 0, brandIdx: 0 }, aboutOpen: true };
  if (SLUG_SPEC[path]) {
    const idx = SPECIALTIES.findIndex(s => s.id === SLUG_SPEC[path]);
    if (idx >= 0) return { sub: { kind: "spec", specIdx: idx, storyIdx: 0, caseIdx: 0, brandIdx: 0 }, aboutOpen: false };
  }
  if (SLUG_CASE[path]) {
    const idx = UX_CASES.findIndex(c => c.id === SLUG_CASE[path]);
    if (idx >= 0) return { sub: { kind: "case", specIdx: 0, storyIdx: 0, caseIdx: idx, brandIdx: 0 }, aboutOpen: false };
  }
  if (path.startsWith("brand/")) {
    const slug    = path.slice(6);
    const brandId = SLUG_BRAND[slug];
    if (brandId) {
      const idx = BRANDS.findIndex(b => b.id === brandId);
      if (idx >= 0) return { sub: { kind: "brand", specIdx: 0, storyIdx: 0, caseIdx: 0, brandIdx: idx }, aboutOpen: false };
    }
  }
  return null; // unknown path → show homepage
}

// --- App root ---
function App() {
  // Clean path takes priority → falls back to old hash for backward compat
  const initState = parsePath() || parseHash();

  const [tw, setTw] = useState(TWEAK_DEFAULTS);
  const [sub, setSub] = useState(initState ? initState.sub : { kind: null, specIdx: 0, storyIdx: 0, caseIdx: 0, brandIdx: 0 });
  const [aboutOpen, setAboutOpen] = useState(initState ? initState.aboutOpen : false);
  const active = useScrollSpy(NAV_SECTIONS.map((n) => n.id));
  useRevealOnScroll([]);

  // Push clean URL whenever nav state changes (production only)
  useEffect(() => {
    if (!IS_PREVIEW) {
      const newPath = stateToPath(sub, aboutOpen);
      if (window.location.pathname !== newPath) {
        history.pushState(null, "", newPath);
      }
    }
    saveNavState(sub, aboutOpen);
  }, [sub, aboutOpen]);

  // Keep <head> SEO tags in sync with current route (works in preview too).
  useEffect(() => {
    if (typeof window.__updateSeoForRoute === "function") {
      window.__updateSeoForRoute(stateToPath(sub, aboutOpen));
    }
  }, [sub, aboutOpen]);

  // Handle browser back / forward buttons (production only)
  useEffect(() => {
    if (IS_PREVIEW) return;
    const onPop = () => {
      const parsed = parsePath() || parseHash();
      if (parsed) {
        setSub(parsed.sub);
        setAboutOpen(parsed.aboutOpen);
      } else {
        setSub({ kind: null, specIdx: 0, storyIdx: 0, caseIdx: 0, brandIdx: 0 });
        setAboutOpen(false);
      }
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("theme-mono", tw.accentHue === "mono");
    document.body.classList.toggle("theme-warm", tw.accentHue === "warm");
    document.body.classList.toggle("hero-bold", !!tw.heroBold);
  }, [tw]);

  const overlayOpen = !!sub.kind || aboutOpen;
  useEffect(() => {
    document.body.style.overflow = overlayOpen ? "hidden" : "";
  }, [overlayOpen]);

  // No URL routing — always show homepage on fresh visit, navigate via state only

  const openSpec = (specId, storyIdx = 0) => {
    const idx = SPECIALTIES.findIndex((s) => s.id === specId);
    setSub({ kind: "spec", specIdx: idx, storyIdx });
  };
  const openCase = (i) => setSub({ kind: "case", caseIdx: i });
  const openBrand = (i = 0) => setSub({ kind: "brand", brandIdx: i });
  const closeSub = () => {
    setSub((s) => ({ ...s, kind: null }));
    setAboutOpen(false);
  };

  const goContact = () => {
    const el = document.getElementById("contact");
    if (el) window.scrollTo({ top: el.offsetTop - 60, behavior: "smooth" });
  };

  // subpage data
  let stories = [],startIdx = 0,accent = "var(--blue)";
  if (sub.kind === "spec") {
    // For specialties: navigate ACROSS specialties (one story each), not within a single specialty's stories.
    stories = SPECIALTIES.map((sp) => sp.stories[0]);
    startIdx = sub.specIdx;
    accent = ["var(--orange)", "var(--blue)", "var(--green)", "var(--purple)"][sub.specIdx];
  } else if (sub.kind === "case") {
    stories = UX_CASES;
    startIdx = sub.caseIdx;
    accent = "var(--blue)";
  } else if (sub.kind === "brand") {
    // Each brand becomes a story; arrows navigate across all brands.
    stories = BRANDS.map((b) => ({
      id: b.id,
      eyebrow: b.eyebrow || "Branding",
      title: b.title || b.name,
      lede: b.lede || "",
      facts: b.facts || [],
      cover: b.key, // re-use brand art as the cover
      sections: b.sections || []
    }));
    startIdx = sub.brandIdx;
    accent = "var(--orange)";
  }

  const setStoryIdx = (i) => {
    if (sub.kind === "spec") setSub((s) => ({ ...s, specIdx: i, storyIdx: 0 }));else
    if (sub.kind === "case") setSub((s) => ({ ...s, caseIdx: i }));else
    if (sub.kind === "brand") setSub((s) => ({ ...s, brandIdx: i }));
  };
  const curIdx = sub.kind === "spec" ? sub.specIdx :
  sub.kind === "case" ? sub.caseIdx :
  sub.kind === "brand" ? sub.brandIdx : 0;
  const curAccent = sub.kind === "spec" ?
  ["var(--orange)", "var(--blue)", "var(--green)", "var(--purple)"][curIdx] :
  accent;

  return (
    <React.Fragment>
      <Nav active={active} onContact={goContact} />
      <main className="page">
        <Hero showBolts={tw.showBolts} />
        <Works onOpenCase={openCase} onOpenBrand={openBrand} />
        <Specialties onOpen={openSpec} />
        <About onOpen={() => setAboutOpen(true)} />
        <Contact />
        <footer>© {new Date().getFullYear()} Vladimir "Kraja" Krajišnik, Product Designer. Made with care.</footer>
      </main>

      <CaseSubpage
        open={sub.kind === "case"}
        onClose={closeSub}
        stories={stories}
        index={sub.caseIdx}
        setIndex={setStoryIdx}
        accent={curAccent} />

      {/* Spec subpage — each superpower gets its own rich page with fade+slide transition */}
      <SpecSubpage
        open={sub.kind === "spec"}
        onClose={closeSub}
        specIdx={sub.specIdx}
        stories={stories}
        index={sub.specIdx}
        setIndex={setStoryIdx}
        accent={curAccent} />
      

      <BrandGallery
        open={sub.kind === "brand"}
        onClose={closeSub}
        brands={BRANDS}
        index={sub.brandIdx}
        setIndex={setStoryIdx} />
      

      <AboutPage open={aboutOpen} onClose={() => setAboutOpen(false)} />
      <Tweaks tw={tw} setTw={setTw} />
    </React.Fragment>);

}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);