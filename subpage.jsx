// Subpage overlay — renders a story/case with navigation
const { useEffect, useState, useRef } = React;

// Inner story content (no .subpage shell)
function StoryContent({ onClose, stories, index, setIndex, accent = "var(--blue)" }) {
  const s = stories[index];
  const Cover = window.STORY_COVERS && window.STORY_COVERS[s.cover] ||
  window.CASE_ILLOS && window.CASE_ILLOS[s.illo] ||
  window.BRAND_ART && window.BRAND_ART[s.cover] || (
  () => null);

  return (
    <React.Fragment>
      <div className="sub-bar">
        <button className="back-btn" onClick={onClose}>
          <Ico name="arrow-left" size={16} /> Back to home
        </button>
        <div className="sub-bar-title" style={{ fontFamily: "Patrick Hand SC", fontSize: 22, color: "var(--muted)" }}>{s.title.split("\n")[0]}</div>
        <div className="sub-nav">
          <button aria-label="Previous" disabled={index === 0} onClick={() => setIndex(index - 1)}>
            <Ico name="arrow-left" size={16} />
          </button>
          <span className="sub-idx">{String(index + 1).padStart(2, "0")} / {String(stories.length).padStart(2, "0")}</span>
          <button aria-label="Next" disabled={index === stories.length - 1} onClick={() => setIndex(index + 1)}>
            <Ico name="arrow-right" size={16} />
          </button>
        </div>
      </div>

      <div className="story-hero">
        <div className="story-meta">{s.eyebrow || s.cat}</div>
        <h1>{s.title}</h1>
        <p className="lede">{s.lede}</p>
        {s.facts &&
        <div className="facts" style={{ marginTop: 28 }}>
            {s.facts.map(([k, v], i) =>
          <div className="fact" key={i}><small>{k}</small><strong>{v}</strong></div>
          )}
          </div>
        }
      </div>

      <div className="story-body">
        <div className="story-cover" style={{ background: "#fff" }}>
          <Cover />
        </div>

        {s.sections && s.sections.map(([h, body], i) =>
        <section className="story-section" key={i}>
            <h2>{h}</h2>
            <p>{body}</p>
            {i === 0 &&
          <div className="two-col">
                <div className="story-pic"><Cover /></div>
                <div className="story-pic" style={{ background: "#F4F7F8" }}><Cover /></div>
              </div>
          }
            {i === 1 &&
          <div className="cqt" style={{ borderLeftColor: accent }}>
                "Design is not what it looks like — it's how it survives a Monday morning."
              </div>
          }
          </section>
        )}

        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", marginTop: 40, flexWrap: "wrap", gap: 16 }}>
          {index < stories.length - 1 ?
          <button className="cta" onClick={() => setIndex(index + 1)}>
              Next: {stories[index + 1].title.split("\n")[0]} <Ico name="arrow-right" size={16} />
            </button> :
          null}
        </div>
      </div>
    </React.Fragment>);

}

function Subpage({ open, onClose, stories, index, setIndex, accent = "var(--blue)" }) {
  const scrollRef = useRef(null);
  useEffect(() => {
    if (open && scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [index, open]);
  useEffect(() => {
    const onKey = (e) => {
      if (!open) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && index < stories.length - 1) setIndex(index + 1);
      if (e.key === "ArrowLeft" && index > 0) setIndex(index - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, index, stories, setIndex, onClose]);

  if (!stories || !stories.length) {
    return <div className="subpage" aria-hidden="true" />;
  }

  return (
    <div className={"subpage " + (open ? "open" : "")} ref={scrollRef} aria-hidden={!open}>
      <StoryContent onClose={onClose} stories={stories} index={index} setIndex={setIndex} accent={accent} />
    </div>);

}

// About page (different content)
function AboutPage({ open, onClose }) {
  return (
    <div className={"subpage " + (open ? "open" : "")} aria-hidden={!open} style={{ overflowY: "auto" }}>
      <div className="sub-bar">
        <button className="back-btn" onClick={onClose}>
          <Ico name="arrow-left" size={16} /> Back to home
        </button>
        <div className="sub-bar-title" style={{ fontFamily: "Patrick Hand SC", fontSize: 22, color: "var(--muted)" }}>About me</div>
        <div style={{ width: 120 }}></div>
      </div>

      {/* HERO — full-bleed photo + intro */}
      <div style={{ position: "relative", height: "90vh", minHeight: 560, overflow: "hidden", display: "flex", alignItems: "flex-end" }}>
        <img src="assets/about-me-2.jpg" alt="Kraja at work" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.72) 100%)" }}></div>
        <div style={{ position: "relative", zIndex: 1, padding: "clamp(32px,5vw,80px)", maxWidth: 900 }}>
          <div style={{ fontFamily: "Patrick Hand SC", fontSize: 22, color: "rgba(255,255,255,.65)", marginBottom: 12 }}>Product Designer · Belgrade</div>
          <h1 style={{ fontFamily: "'Figtree',sans-serif", fontWeight: 800, letterSpacing: "-0.03em", fontSize: "clamp(44px,7vw,96px)", lineHeight: 0.9, color: "#fff", margin: "0 0 20px" }}>
            Zdrao.<br />I'm Kraja.
          </h1>
          <p style={{ fontSize: "clamp(17px,1.6vw,22px)", color: "rgba(255,255,255,.8)", lineHeight: 1.5, maxWidth: 620 }}>
            I'm Vladimir Krajišnik… but over the years we figured it's way easier to call me Kraja. Just picture a team with five Vladimirs — so instead of using first names, you'd have to wrestle with my last name. Kraja. Easier.
          </p>
        </div>
      </div>

      {/* SHORT HISTORY LONG */}
      <div style={{ background: "var(--paper)", padding: "clamp(56px,8vw,112px) clamp(20px,5vw,72px)" }}>
        <div className="about-grid">
          <div>
            <div className="bf-tag bf-tag-blue" style={{ marginBottom: 20 }}>Short history long</div>
            <h2 style={{ fontFamily: "'Figtree',sans-serif", fontWeight: 800, letterSpacing: "-0.02em", fontSize: "clamp(28px,3.5vw,46px)", lineHeight: 1, margin: "0 0 24px" }}>
              From print<br />to pixels.
            </h2>
            <p style={{ fontSize: 17, color: "var(--ink-soft)", lineHeight: 1.65, marginBottom: 14 }}>
              After finishing Design High School, I graduated from the College of Fine and Applied Arts in Graphic Design — back then it included sculpture, printmaking, photography, and typography.
            </p>
            <p style={{ fontSize: 17, color: "var(--ink-soft)", lineHeight: 1.65, marginBottom: 14 }}>
              From the very beginning, I started working with various companies that needed graphic design. By working on multiple different brands, I gained great knowledge and dealt with all types of branding — from the idea to the final product.
            </p>
            <p style={{ fontSize: 17, color: "var(--ink-soft)", lineHeight: 1.65 }}>
              In 2011, I entered my first IT story. I started working on a project that required visualizing an app. That's where I first encountered programming and teams with a large number of members, both in the design section and in the development team.
            </p>
          </div>
          <div style={{ borderRadius: 28, overflow: "hidden", boxShadow: "0 24px 50px -20px rgba(34,75,86,.28)" }}>
            <img src="assets/about-me-4.jpg" alt="Kraja in a meeting" style={{ width: "100%", display: "block", objectFit: "cover", objectPosition: "center top" }} />
          </div>
        </div>
      </div>

      {/* LONG HISTORY SHORT — dark */}
      <div style={{ background: "var(--ink)", padding: "clamp(56px,8vw,112px) clamp(20px,5vw,72px)" }}>
        <div className="about-grid">
          <div>
            <div className="bf-tag" style={{ background: "rgba(255,255,255,.1)", color: "#fff", marginBottom: 20 }}>Long history short</div>
            <h2 style={{ fontFamily: "'Figtree',sans-serif", fontWeight: 800, letterSpacing: "-0.02em", fontSize: "clamp(28px,3.5vw,46px)", lineHeight: 1, margin: "0 0 24px", color: "#fff" }}>
              Every project,<br />a different world.
            </h2>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,.72)", lineHeight: 1.65, marginBottom: 14 }}>
              After that, every project was unique, requiring a different approach and presenting different challenges. From apps for HR, travel, real estate, baby food, business consulting, secret chats, cryptocurrencies, and social networks — to the world of luxury watches and jewelry.
            </p>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,.72)", lineHeight: 1.65 }}>
              I've worked on so many different projects with so many different people that the whole experience has simply guided me through every sphere of life — both professional and personal.
            </p>
          </div>
          <div style={{ borderRadius: 28, overflow: "hidden", boxShadow: "0 24px 50px -20px rgba(0,0,0,.5)" }}>
            <img src="assets/about-me-3.jpg" alt="Kraja explaining" style={{ width: "100%", display: "block" }} />
          </div>
        </div>
      </div>

      {/* WHY PRODUCT DESIGNER */}
      <div style={{ background: "var(--paper)", padding: "clamp(56px,8vw,112px) clamp(20px,5vw,72px)" }}>
        <div className="about-grid" style={{ alignItems: "start" }}>
          <div>
            <div className="bf-tag bf-tag-purple" style={{ marginBottom: 20 }}>Why Product Designer?</div>
            <h2 style={{ fontFamily: "'Figtree',sans-serif", fontWeight: 800, letterSpacing: "-0.02em", fontSize: "clamp(28px,3.5vw,46px)", lineHeight: 1, margin: "0 0 24px" }}>
              Personal.<br />Every time.
            </h2>
            <p style={{ fontSize: 17, color: "var(--ink-soft)", lineHeight: 1.65 }}>
              Because lately, every product I've worked on, I've started to experience as something of my own — something personal. And I've come to take an interest not just in the visual side, but in the impact of the whole product on every element, as well as the impact of all those elements on the product itself.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
            { label: "HR & business apps", color: "var(--blue)" },
            { label: "Travel & real estate", color: "var(--green)" },
            { label: "Baby food & consulting", color: "var(--orange)" },
            { label: "Crypto & social networks", color: "var(--purple)" },
            { label: "Luxury watches & jewelry", color: "var(--red)" }].
            map((item, i) =>
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 18px", borderRadius: 14, background: "var(--bg)" }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: item.color, flexShrink: 0 }}></div>
                <span style={{ fontSize: 15, fontWeight: 600, color: "var(--ink)" }}>{item.label}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* OTHER INTERESTS */}
      <div style={{ background: "var(--bg)", padding: "clamp(56px,8vw,112px) clamp(20px,5vw,72px)" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div className="bf-tag bf-tag-orange" style={{ marginBottom: 20 }}>Other interests</div>
          <h2 style={{ fontFamily: "'Figtree',sans-serif", fontWeight: 800, letterSpacing: "-0.02em", fontSize: "clamp(28px,3.5vw,46px)", lineHeight: 1, margin: "0 0 40px" }}>
            Off the clock.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 20 }}>
            {[
            { icon: "👨‍👧‍👦", title: "Three kids", desc: "Parent of three. The best project I've ever shipped." },
            { icon: "🛹", title: "Skate & Snow", desc: "Passionate lover of skateboards and snowboards." },
            { icon: "🎸", title: "April O'Neil", desc: "Band: April O'Neil from Channel 6. One epic gig per year — and we crush it." },
            { icon: "🏋️", title: "CrossFit", desc: "One unhealthy obsession. No regrets." }].
            map((item, i) =>
            <div key={i} style={{ background: "var(--paper)", borderRadius: 20, padding: "28px 24px", boxShadow: "0 8px 24px -8px rgba(34,75,86,.12)" }}>
                <div style={{ fontSize: 36, marginBottom: 14 }}>{item.icon}</div>
                <div style={{ fontSize: 18, fontWeight: 800, color: "var(--ink)", marginBottom: 8 }}>{item.title}</div>
                <div style={{ fontSize: 15, color: "var(--ink-soft)", lineHeight: 1.55 }}>{item.desc}</div>
              </div>
            )}
          </div>
        </div>
      </div>

    </div>);

}

Object.assign(window, { Subpage, AboutPage });