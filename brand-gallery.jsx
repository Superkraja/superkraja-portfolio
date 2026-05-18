// Brand Gallery — full-screen scrollable image per brand, with L/R navigation
const { useEffect, useState, useRef } = React;

function useLogoGridCols() {
  const get = () => window.innerWidth < 600 ? 1 : window.innerWidth < 960 ? 2 : 3;
  const [cols, setCols] = useState(get);
  useEffect(() => {
    const onResize = () => setCols(get());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return cols;
}

function preloadBrand(brand) {
  // Preload the first image of a brand so the swap happens only when ready
  const srcs = brand.images && brand.images.length
    ? [brand.images[0]]
    : brand.fullImg
    ? [brand.fullImg]
    : [];
  return Promise.all(srcs.map(src => new Promise(resolve => {
    const img = new Image();
    img.onload = img.onerror = resolve;
    img.src = src;
  })));
}

function BrandGallery({ open, onClose, brands, index, setIndex }) {
  const scrollRef = useRef(null);
  const [displayIdx, setDisplayIdx] = useState(() => {
    const idx = typeof index === 'number' && Number.isFinite(index) ? index : 0;
    return (brands && idx >= 0 && idx < brands.length) ? idx : 0;
  });
  const [fading, setFading] = useState(false);
  const logoGridCols = useLogoGridCols();
  const pendingIdx = useRef(null);

  // Scroll to top when opening
  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => {
        if (scrollRef.current) scrollRef.current.scrollTop = 0;
      });
    }
  }, [open]);

  // Fade out → preload → swap → fade in
  useEffect(() => {
    if (!open) return;
    if (index === displayIdx) return;

    let cancelled = false;
    pendingIdx.current = index;

    // 1. Start fade-out immediately
    setFading(true);

    // 2. Preload new brand's first image in parallel with fade-out
    preloadBrand(brands[index]).then(() => {
      if (cancelled || pendingIdx.current !== index) return;
      // 3. Swap content (image is ready — no blank flash)
      setDisplayIdx(index);
      if (scrollRef.current) scrollRef.current.scrollTop = 0;
      // 4. Tiny rAF delay so React paints the new src before fading back in
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!cancelled) setFading(false);
        });
      });
    });

    return () => { cancelled = true; };
  }, [index, open]);

  useEffect(() => {
    if (!open) {
      setDisplayIdx(index);
      setFading(false);
    }
  }, [open]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (!open) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && index < brands.length - 1) setIndex(index + 1);
      if (e.key === "ArrowLeft" && index > 0) setIndex(index - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, index, brands, setIndex, onClose]);

  if (!brands || !brands.length) return <div className="subpage" aria-hidden="true" />;

  const safeIdx = (Number.isFinite(displayIdx) && displayIdx >= 0 && displayIdx < brands.length) ? displayIdx : 0;
  const brand = brands[safeIdx] || brands[0];
  if (!brand) return <div className="subpage" aria-hidden="true" />;
  const imgSrc = brand.fullImg || null;

  return (
    <div
      className={"subpage " + (open ? "open" : "")}
      ref={scrollRef}
      aria-hidden={!open}
      style={{ overflowY: "auto", background: "#000" }}
    >
      {/* Sticky nav bar */}
      <div className="sub-bar" style={{ position: "sticky", top: 0, zIndex: 10, background: "rgba(0,0,0,0.85)", borderBottomColor: "rgba(255,255,255,0.08)" }}>
        <button className="back-btn" onClick={onClose} style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", color: "#fff" }}>
          <Ico name="arrow-left" size={16} /> Back to home
        </button>
        <div style={{ fontFamily: "Patrick Hand SC", fontSize: 26, color: "rgba(255,255,255,0.5)" }} className="sub-bar-title">
          {brand.name}
        </div>
        <div className="sub-nav">
          <button
            aria-label="Previous brand"
            disabled={index === 0}
            onClick={() => setIndex(index - 1)}
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", color: "#fff" }}
          >
            <Ico name="arrow-left" size={16} />
          </button>
          <span className="sub-idx" style={{ color: "rgba(255,255,255,0.45)" }}>
            {String(index + 1).padStart(2, "0")} / {String(brands.length).padStart(2, "0")}
          </span>
          <button
            aria-label="Next brand"
            disabled={index === brands.length - 1}
            onClick={() => setIndex(index + 1)}
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", color: "#fff" }}
          >
            <Ico name="arrow-right" size={16} />
          </button>
        </div>
      </div>

      {/* Image area — fades on nav */}
      <div style={{
        transition: "opacity .28s ease, transform .28s ease",
        opacity: fading ? 0 : 1,
        transform: fading ? "translateY(8px)" : "translateY(0)",
      }}>
        {brand.images && brand.images.length > 0 && brand.layout === "logo-grid" ? (
          /* ── Responsive logo grid — exclusive to logo-design gallery ── */
          <div style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "clamp(24px,4vw,56px) clamp(16px,4vw,48px)",
          }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: `repeat(${logoGridCols}, 1fr)`,
              gap: "clamp(10px,1.6vw,20px)",
            }}>
              {brand.images.map((src, i) => (
                <div key={i} style={{
                  background: "#ffffff",
                  borderRadius: 16,
                  overflow: "hidden",
                  aspectRatio: "3/2",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.18)",
                }}>
                  <img
                    src={src}
                    alt={brand.name + " logo " + (i + 1)}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      padding: "clamp(12px,3vw,28px)",
                      display: "block",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : brand.images && brand.images.length > 0 ? (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {brand.images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={brand.name + " " + (i + 1)}
                style={{ width: "100%", maxWidth: 960, display: "block", height: "auto" }}
              />
            ))}
          </div>
        ) : imgSrc ? (
          <img
            src={imgSrc}
            alt={brand.name}
            style={{ width: "100%", maxWidth: 960, display: "block", margin: "0 auto", height: "auto" }}
          />
        ) : (
          /* Placeholder — shown until real image is dropped in */
          <div style={{
            minHeight: "80vh",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            gap: 20, background: "#f4f7f8",
            padding: "60px 40px",
          }}>
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              <rect x="6" y="6" width="52" height="52" rx="10" fill="#e0e4e8" />
              <rect x="16" y="18" width="32" height="20" rx="4" fill="#b8c0c8" />
              <circle cx="32" cy="46" r="6" fill="#b8c0c8" />
            </svg>
            <div style={{
              fontFamily: "ui-monospace, monospace",
              fontSize: 13, color: "#8a9199",
              textAlign: "center", lineHeight: 1.6,
              textTransform: "uppercase", letterSpacing: ".1em",
            }}>
              {brand.name}<br />
              <span style={{ fontSize: 11, opacity: 0.7 }}>
                Drop your screenshot at<br />assets/brand-full-{brand.key}.jpg
              </span>
            </div>
          </div>
        )}

        {/* Bottom nav — prev/next brand names */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "clamp(24px,4vw,48px) clamp(20px,5vw,60px)",
          borderTop: "1px solid rgba(255,255,255,.08)",
          gap: 16,
        }}>
          {index > 0 ? (
            <button
              className="back-btn"
              onClick={() => setIndex(index - 1)}
              style={{ gap: 8 }}
            >
              <Ico name="arrow-left" size={16} />
              {brands[index - 1].name}
            </button>
          ) : <div />}

          {index < brands.length - 1 ? (
            <button
              className="cta"
              onClick={() => setIndex(index + 1)}
            >
              {brands[index + 1].name}
              <Ico name="arrow-right" size={16} />
            </button>
          ) : <div />}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { BrandGallery });
