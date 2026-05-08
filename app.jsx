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
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {if (e.isIntersecting) e.target.classList.add("visible");});
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
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
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 80) setHidden(false);else
      if (y > lastY.current + 6) setHidden(true);else
      if (y < lastY.current - 6) setHidden(false);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
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
          <button className="cta email-cta" onClick={() => window.location.href = "mailto:superkraja@gmail.com"}>
            <Ico name="mail" size={16} /> <span className="email-label">superkraja@gmail.com</span>
          </button>
          <button className="menu-btn" onClick={() => setMenu((m) => !m)} aria-label="Menu"><span /></button>
        </div>
      </header>
      <div className={"nav-mobile " + (menu ? "open" : "")}>
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
            <span className="hi">Hi,</span>
            <span>My name is Super.</span>
            <br />
            <span>I am <span className="accent">KRAJA</span><span className="pron">/ˈkra.ya/</span></span>
          </div>
          <div className="hero-wordmark">
            PRODUCT<br />DESIGN<span className="er">er</span>
          </div>
        </div>
      </div>
    </section>);
}

function Specialties({ onOpen }) {
  const [hoveredCard, setHoveredCard] = React.useState(null);
  return (
    <section id="powers" className="section" style={{ background: "#fff" }}>
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
    <section id="works" className="section">
      <div className="wrap">
        <div className="title-wrap reveal">
          <div className="title-chip purple">
            <img src="assets/star-doodle-left.svg" alt="" style={{ width: 50, height: 50 }} />
            <span>SUPER awesome portfolio</span>
            <img src="assets/star-doodle-right.svg" alt="" style={{ width: 50, height: 50 }} />
          </div>
        </div>

        <h3 className="works-title reveal">User experience cases</h3>
        <div className="ux-grid">
          {UX_CASES.map((c, i) => {
            const images = ["assets/case-baby-food.jpg", "assets/case-consulting.jpg", "assets/case-real-estate.jpg", "assets/case-travel.jpg"];
            return (
              <div key={c.id} className={"ux-card reveal d" + (i + 1)} onClick={() => onOpenCase(i)}>
                <div className="ux-thumb">
                  <img src={images[i]} alt={c.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="ux-body">
                  <h3>{c.title}</h3>
                  <p style={{ flexGrow: 1 }}>{c.desc}</p>
                  <div className="ux-link">
                    Found out more
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
                  <img src={images[i]} alt={b.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
                <div className="brand-link" style={{ textDecoration: isHovered ? 'none' : 'line-through' }}>
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
            <img src="assets/about-me-photo.jpg" alt="Vladimir Kraja Krajišnik at work" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
              I've been in design for over 20 years.<br />
              I live and work in Belgrade, and people say I look like Fred Flintstone—so some call me Fred.
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
    if (!form.email.match(/^\S+@\S+\.\S+$/)) next.email = "Valid email, please";
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
          <form className="contact-form reveal" onSubmit={submit} noValidate style={{ backgroundColor: "rgb(62, 69, 72)" }}>
            <h3>Don't worry,</h3>
            <p>I don't have any mind-control powers, so don't be afraid to drop me a message.</p>
            <div className="field">
              <label>Your name</label>
              <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Super friend" />
              <span className="err">{err.name || ""}</span>
            </div>
            <div className="field">
              <label>Email address</label>
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="super@friend.com" />
              <span className="err">{err.email || ""}</span>
            </div>
            <div className="field">
              <label>Message</label>
              <textarea rows="4" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me about your project…" />
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
              <a className="contact-row" href="mailto:superkraja@gmail.com">
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
    if (open && scrollRef.current) scrollRef.current.scrollTop = 0;
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
  } catch (e) {}
}

// --- App root ---
function App() {
  const saved = readNavState();
  const [tw, setTw] = useState(TWEAK_DEFAULTS);
  const [sub, setSub] = useState(saved ? saved.sub : { kind: null, specIdx: 0, storyIdx: 0, caseIdx: 0, brandIdx: 0 });
  const [aboutOpen, setAboutOpen] = useState(saved ? !!saved.aboutOpen : false);
  const active = useScrollSpy(NAV_SECTIONS.map((n) => n.id));
  useRevealOnScroll([]);

  // Persist nav state on every change
  useEffect(() => {
    saveNavState(sub, aboutOpen);
  }, [sub, aboutOpen]);

  useEffect(() => {
    document.body.classList.toggle("theme-mono", tw.accentHue === "mono");
    document.body.classList.toggle("theme-warm", tw.accentHue === "warm");
    document.body.classList.toggle("hero-bold", !!tw.heroBold);
  }, [tw]);

  const overlayOpen = !!sub.kind || aboutOpen;
  useEffect(() => {
    document.body.style.overflow = overlayOpen ? "hidden" : "";
  }, [overlayOpen]);

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
        <Specialties onOpen={openSpec} />
        <Works onOpenCase={openCase} onOpenBrand={openBrand} />
        <About onOpen={() => setAboutOpen(true)} />
        <Contact />
        <footer>© {new Date().getFullYear()} Vladimir "Kraja" Krajišnik — Product Designer. Made with care.</footer>
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