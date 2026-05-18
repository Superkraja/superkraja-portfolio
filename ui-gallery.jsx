// Interface designs — desktop frame with scrollable viewport

// ── Shared sidecar helpers (same .image-slots.state.json as image-slot) ─────
const _DF_FILE = '.image-slots.state.json';
const _dfCache = {};
let _dfLoadP = null;

function _dfLoad() {
  if (_dfLoadP) return _dfLoadP;
  _dfLoadP = fetch(_DF_FILE)
    .then(r => r.ok ? r.json() : {})
    .catch(() => ({}))
    .then(j => { Object.assign(_dfCache, j); return _dfCache; });
  return _dfLoadP;
}

function _dfGet(id) {
  const v = _dfCache[id];
  if (!v) return null;
  return typeof v === 'string' ? v : (v.src || null);
}

function _dfGetImages(id) {
  const v = _dfCache[id];
  if (!v) return [];
  if (typeof v === 'string') return [v];
  if (v.src) return [v.src];
  if (Array.isArray(v.images)) return v.images;
  return [];
}

function _dfSet(id, src) {
  if (src === null) { delete _dfCache[id]; }
  else { _dfCache[id] = { src }; }
  const json = JSON.stringify(_dfCache);
  try { if (window.omelette && window.omelette.writeFile) window.omelette.writeFile(_DF_FILE, json); } catch(e) {}
}

function _dfSetImages(id, images) {
  if (!images || images.length === 0) { delete _dfCache[id]; }
  else { _dfCache[id] = { images }; }
  const json = JSON.stringify(_dfCache);
  try { if (window.omelette && window.omelette.writeFile) window.omelette.writeFile(_DF_FILE, json); } catch(e) {}
}

function _dfCompress(file) {
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.onload = e => {
      const img = new Image();
      img.onload = () => {
        const MAX = 1400;
        let w = img.naturalWidth, h = img.naturalHeight;
        if (w > MAX) { h = Math.round(h * MAX / w); w = MAX; }
        const canvas = document.createElement('canvas');
        canvas.width = w; canvas.height = h;
        canvas.getContext('2d').drawImage(img, 0, 0, w, h);
        resolve(canvas.toDataURL('image/webp', 0.85));
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
}

// ── Lightbox ─────────────────────────────────────────────────────────────────
function WiLightbox({ images, startIndex, onClose }) {
  const [idx, setIdx] = React.useState(startIndex);
  const [zoom, setZoom] = React.useState(1);
  const [naturalSize, setNaturalSize] = React.useState(null);
  const [phase, setPhase] = React.useState('opening'); // 'opening' | 'open' | 'closing'
  const overlayRef = React.useRef(null);
  const touchStartX = React.useRef(null);
  const pinchStartDist = React.useRef(null);
  const pinchStartZoom = React.useRef(1);

  // After open animation completes, mark as open
  React.useEffect(() => {
    const t = setTimeout(() => setPhase('open'), 350);
    return () => clearTimeout(t);
  }, []);

  const handleClose = React.useCallback(() => {
    setPhase('closing');
    setTimeout(onClose, 300);
  }, [onClose]);

  // Reset zoom + natural size on slide change
  React.useEffect(() => { setZoom(1); setNaturalSize(null); }, [idx]);

  // Keyboard navigation + zoom
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === 'ArrowLeft')  setIdx(i => Math.max(0, i - 1));
      else if (e.key === 'ArrowRight') setIdx(i => Math.min(images.length - 1, i + 1));
      else if (e.key === 'Escape') handleClose();
      else if (e.key === '=' || e.key === '+') setZoom(z => Math.min(5, parseFloat((z + 0.25).toFixed(2))));
      else if (e.key === '-') setZoom(z => Math.max(0.5, parseFloat((z - 0.25).toFixed(2))));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [images.length, onClose]);

  // Scroll-wheel zoom on overlay (Ctrl/Cmd + scroll, or native pinch which sets ctrlKey)
  React.useEffect(() => {
    const el = overlayRef.current;
    if (!el) return;
    const onWheel = e => {
      if (!e.ctrlKey && !e.metaKey) return;
      e.preventDefault();
      setZoom(z => Math.min(5, Math.max(0.5, parseFloat((z - e.deltaY * 0.01).toFixed(2)))));
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  const go = dir => setIdx(i => Math.min(images.length - 1, Math.max(0, i + dir)));

  // Compute rendered image dimensions — fills as much of the viewport as possible at zoom=1
  const getFitSize = () => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    if (!naturalSize) return { w: vw, h: vh };
    const ratio = naturalSize.w / naturalSize.h;
    let w = vw, h = vw / ratio;
    if (h > vh) { h = vh; w = vh * ratio; }
    return { w: Math.round(w), h: Math.round(h) };
  };

  const fit = getFitSize();
  const imgW = Math.round(fit.w * zoom);
  const imgH = Math.round(fit.h * zoom);
  const isZoomed = zoom > 1.01;

  return ReactDOM.createPortal(
    <div
      ref={overlayRef}
      className={"wi-lb-overlay wi-lb-" + phase + (isZoomed ? " wi-lb-zoomed" : "")}
      onClick={!isZoomed ? handleClose : undefined}
      onTouchStart={e => {
        if (e.touches.length === 2) {
          // pinch start
          const dx = e.touches[0].clientX - e.touches[1].clientX;
          const dy = e.touches[0].clientY - e.touches[1].clientY;
          pinchStartDist.current = Math.hypot(dx, dy);
          pinchStartZoom.current = zoom;
        } else {
          touchStartX.current = e.touches[0].clientX;
        }
      }}
      onTouchMove={e => {
        if (e.touches.length === 2 && pinchStartDist.current) {
          e.preventDefault();
          const dx = e.touches[0].clientX - e.touches[1].clientX;
          const dy = e.touches[0].clientY - e.touches[1].clientY;
          const dist = Math.hypot(dx, dy);
          const next = pinchStartZoom.current * (dist / pinchStartDist.current);
          setZoom(Math.min(5, Math.max(0.5, parseFloat(next.toFixed(2)))));
        }
      }}
      onTouchEnd={e => {
        pinchStartDist.current = null;
        if (touchStartX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchStartX.current;
        if (!isZoomed && Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
        touchStartX.current = null;
      }}
    >
      {/* Fixed UI chrome — never scrolls away */}
      <div className="wi-lb-chrome" onClick={e => e.stopPropagation()}>
        <button className="wi-lb-close" onClick={handleClose}>✕</button>

        <div className="wi-lb-zoom-btns">
          <button onClick={() => setZoom(z => Math.min(5, parseFloat((z + 0.25).toFixed(2))))}>+</button>
          <span>{Math.round(zoom * 100)}%</span>
          <button onClick={() => setZoom(z => Math.max(0.5, parseFloat((z - 0.25).toFixed(2))))}>−</button>
        </div>

        {images.length > 1 && idx > 0 && (
          <button className="wi-lb-prev" onClick={() => go(-1)}>‹</button>
        )}
        {images.length > 1 && idx < images.length - 1 && (
          <button className="wi-lb-next" onClick={() => go(1)}>›</button>
        )}

        {images.length > 1 && (
          <div className="wi-lb-dots-bar">
            {images.map((_, i) => (
              <button key={i} className={"wi-lb-dot" + (i === idx ? " active" : "")}
                onClick={() => { setIdx(i); setZoom(1); }} />
            ))}
          </div>
        )}

        <div className="wi-lb-counter">{idx + 1} / {images.length}</div>
      </div>

      {/* Scrollable image — actual size × zoom */}
      <div className="wi-lb-img-scroll" onClick={e => { if (isZoomed) e.stopPropagation(); }}>
        <img
          key={images[idx]}
          src={images[idx]}
          className="wi-lb-img"
          style={{ width: imgW, height: imgH, maxWidth: 'none', maxHeight: 'none' }}
          onLoad={e => setNaturalSize({ w: e.target.naturalWidth, h: e.target.naturalHeight })}
          draggable={false}
          alt=""
        />
      </div>
    </div>,
    document.body
  );
}

// ── DesktopFrame component ───────────────────────────────────────────────────
function DesktopFrame({ id, placeholder, gallery = false }) {
  const [images, setImages] = React.useState([]);
  const [slideIdx, setSlideIdx] = React.useState(0);
  const [isDragging, setIsDragging] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const touchStartX = React.useRef(null);

  React.useEffect(() => {
    _dfLoad().then(() => {
      if (gallery) {
        setImages(_dfGetImages(id));
      } else {
        const src = _dfGet(id);
        setImages(src ? [src] : []);
      }
    });
  }, [id, gallery]);

  const handleDrop = async e => {
    e.preventDefault();
    setIsDragging(false);
    const files = [...(e.dataTransfer.files || [])].filter(f => f.type.startsWith('image/'));
    if (!files.length) return;
    setLoading(true);
    const newSrcs = await Promise.all(files.map(_dfCompress));
    if (gallery) {
      const updated = [...images, ...newSrcs];
      _dfSetImages(id, updated);
      setImages(updated);
      setSlideIdx(updated.length - 1);
    } else {
      _dfSet(id, newSrcs[0]);
      setImages([newSrcs[0]]);
    }
    setLoading(false);
  };

  const handleClear = e => {
    e.stopPropagation();
    if (gallery) { _dfSetImages(id, []); } else { _dfSet(id, null); }
    setImages([]);
    setSlideIdx(0);
  };

  const hasImages = images.length > 0;
  const safe = images.length > 0 ? Math.min(slideIdx, images.length - 1) : 0;

  const vpHandlers = {
    onDrop: handleDrop,
    onDragOver: e => { e.preventDefault(); setIsDragging(true); },
    onDragLeave: () => setIsDragging(false),
    onTouchStart: hasImages && gallery ? e => { touchStartX.current = e.touches[0].clientX; } : undefined,
    onTouchEnd: hasImages && gallery ? e => {
      if (touchStartX.current === null) return;
      const dx = e.changedTouches[0].clientX - touchStartX.current;
      if (Math.abs(dx) > 40) {
        if (dx < 0) setSlideIdx(i => Math.min(images.length - 1, i + 1));
        else setSlideIdx(i => Math.max(0, i - 1));
      }
      touchStartX.current = null;
    } : undefined
  };

  const viewportInner = (
    <React.Fragment>
      {loading && (
        <div className="wi-desktop-loading">
          <div className="wi-loading-dot"></div>
        </div>
      )}
      {!loading && hasImages && (
        <div className="wi-desktop-filled">
          <img
            src={images[safe]}
            alt={placeholder}
            style={{ width: '100%', height: 'auto', display: 'block', cursor: gallery ? 'zoom-in' : 'default' }}
            onClick={gallery ? () => setLightboxOpen(true) : undefined}
            draggable={false}
          />
          {!gallery && <button className="wi-desktop-clear" onClick={handleClear} title="Remove">✕</button>}
        </div>
      )}
      {!loading && !hasImages && (
        <div className="wi-desktop-empty">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <rect x="2" y="2" width="32" height="32" rx="5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M7 26L14 17l5 6 4-4 6 7" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <span>{placeholder || 'Drop a screenshot'}</span>
          <small>{gallery ? 'drop multiple images for a slider' : 'or click to browse'}</small>
        </div>
      )}
    </React.Fragment>
  );

  const canPrev = hasImages && images.length > 1 && safe > 0;
  const canNext = hasImages && images.length > 1 && safe < images.length - 1;

  return (
    <div className="wi-desktop-frame">
      {gallery ? (
        <div className="wi-slider-row">
          {/* Prev arrow — outside viewport, visibility keeps layout stable */}
          <button
            className="wi-slider-arrow"
            style={{ visibility: canPrev ? 'visible' : 'hidden' }}
            onClick={() => setSlideIdx(i => Math.max(0, i - 1))}
          >‹</button>

          <div className={"wi-desktop-viewport" + (isDragging ? " wi-drag-over" : "")} {...vpHandlers}>
            {viewportInner}
          </div>

          {/* Next arrow — outside viewport */}
          <button
            className="wi-slider-arrow"
            style={{ visibility: canNext ? 'visible' : 'hidden' }}
            onClick={() => setSlideIdx(i => Math.min(images.length - 1, i + 1))}
          >›</button>
        </div>
      ) : (
        <div className={"wi-desktop-viewport" + (isDragging ? " wi-drag-over" : "")} {...vpHandlers}>
          {viewportInner}
        </div>
      )}

      {/* Dots pager — below, gallery + multi-image only */}
      {gallery && images.length > 1 && (
        <div className="wi-dots-pager">
          {images.map((_, i) => (
            <button key={i} className={"wi-dot" + (i === safe ? " active" : "")} onClick={() => setSlideIdx(i)} />
          ))}
        </div>
      )}

      {lightboxOpen && images.length > 0 && (
        <WiLightbox images={images} startIndex={safe} onClose={() => setLightboxOpen(false)} />
      )}
    </div>
  );
}

// ── Gallery data ─────────────────────────────────────────────────────────────
const UI_GALLERY_ITEMS = [
  { id:"ui-p1", title:"NFT Bidding Tool",               type:"Landing page & desktop app",
    images:["assets/slot-ui-p1-1.webp","assets/slot-ui-p1-2.webp","assets/slot-ui-p1-3.webp","assets/slot-ui-p1-4.webp","assets/slot-ui-p1-5.webp"],
    desc:"A smart bidding companion built for NFT collectors and traders. Users can automate bids across their favorite collections and stay one step ahead by tracking and managing outbids in real time." },
  { id:"ui-p2", title:"Access Management App",          type:"Full brand identity",
    images:["assets/slot-ui-p2-1.webp","assets/slot-ui-p2-2.webp","assets/slot-ui-p2-3.webp","assets/slot-ui-p2-4.webp","assets/slot-ui-p2-5.webp"],
    desc:"A secure platform that gives business owners full control over employee access. Managers can confidently manage permissions and protect company apps, all from one streamlined interface." },
  { id:"ui-p3", title:"IT Solutions",                   type:"Website",
    images:["assets/slot-ui-p3-1.jpg"],
    desc:"A landing page designed for an all-in-one IT solutions company. From everyday support to complete IT management, the design reflects the full scope of services they bring to modern businesses." },
  { id:"ui-p4", title:"HR Overview App",                type:"Dashboard",
    images:["assets/slot-ui-p4-1.webp"],
    desc:"A dashboard built to make HR work effortless. Teams can track employee statuses, manage key information at a glance, and quickly report workplace injuries, all in one centralized tool." },
  { id:"ui-p5", title:"Restaurant",                     type:"Landing page",
    images:["assets/slot-ui-p5-1.jpg"],
    desc:"A landing page concept designed for a restaurant located in the building where I was working." },
  { id:"ui-p6", title:"Football Players Marketplace",   type:"Website",
    images:["assets/slot-ui-p6-1.webp"],
    desc:"A website built for fans and managers to follow professional football players from the Finnish Football Association League. Tracking stats and monitor performance." },
  { id:"ui-p7", title:"Accounting Platform",            type:"Landing page",
    images:["assets/slot-ui-p7-1.jpg","assets/slot-ui-p7-2.jpg"],
    desc:"A platform designed to simplify the way companies handle invoices and customer debt. Clear, modern, and built to make financial workflows easier to manage." },
  { id:"ui-p8", title:"Bracelet Shop",                  type:"E-commerce website",
    images:["assets/slot-ui-p8-1.png"],
    desc:"An e-commerce website for a handcrafted bracelet brand. Built around product discovery and storytelling, with a focus on gemstone details and a clean ordering experience." },
];

// ── StaticGallery: renders a project's images with prev/next + lightbox ─────
function StaticGallery({ images, alt }) {
  const [idx, setIdx] = React.useState(0);
  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const touchStartX = React.useRef(null);
  const safe = images.length > 0 ? Math.min(idx, images.length - 1) : 0;
  const canPrev = idx > 0;
  const canNext = idx < images.length - 1;
  const hasMany = images.length > 1;

  const vpHandlers = hasMany ? {
    onTouchStart: e => { touchStartX.current = e.touches[0].clientX; },
    onTouchEnd: e => {
      if (touchStartX.current === null) return;
      const dx = e.changedTouches[0].clientX - touchStartX.current;
      if (Math.abs(dx) > 40) {
        if (dx < 0) setIdx(i => Math.min(images.length - 1, i + 1));
        else setIdx(i => Math.max(0, i - 1));
      }
      touchStartX.current = null;
    }
  } : {};

  const viewport = (
    <div className="wi-desktop-viewport" {...vpHandlers}>
      <div className="wi-desktop-filled">
        <ImgSkeleton
          src={images[safe]}
          alt={alt}
          imgStyle={{ width: '100%', height: 'auto', display: 'block', cursor: 'zoom-in' }}
          onClick={() => setLightboxOpen(true)}
        />
      </div>
    </div>
  );

  return (
    <div className="wi-desktop-frame">
      {hasMany ? (
        <div className="wi-slider-row">
          <button
            className="wi-slider-arrow"
            style={{ visibility: canPrev ? 'visible' : 'hidden' }}
            onClick={() => setIdx(i => Math.max(0, i - 1))}
          >‹</button>
          {viewport}
          <button
            className="wi-slider-arrow"
            style={{ visibility: canNext ? 'visible' : 'hidden' }}
            onClick={() => setIdx(i => Math.min(images.length - 1, i + 1))}
          >›</button>
        </div>
      ) : viewport}

      {lightboxOpen && (
        <WiLightbox images={images} startIndex={safe} onClose={() => setLightboxOpen(false)} />
      )}
    </div>
  );
}

// ── Page component ───────────────────────────────────────────────────────────
function InterfaceDesignsContent({ onClose, stories, index, setIndex }) {
  const count = stories ? stories.length : 0;

  return (
    <React.Fragment>
      {/* Nav bar */}
      <div className="sub-bar">
        <button className="back-btn" onClick={onClose}>
          <Ico name="arrow-left" size={16} /> Back to home
        </button>
        <div style={{ fontFamily: "Patrick Hand SC", fontSize: 26, color: "var(--muted)" }} className="sub-bar-title">
          Interface designs
        </div>
        <div className="sub-nav">
          <button aria-label="Previous" disabled={index === 0} onClick={() => setIndex(index - 1)}>
            <Ico name="arrow-left" size={16} />
          </button>
          <span className="sub-idx">
            {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
          </span>
          <button aria-label="Next" disabled={index === count - 1} onClick={() => setIndex(index + 1)}>
            <Ico name="arrow-right" size={16} />
          </button>
        </div>
      </div>

      {/* Hero — single image, no gallery */}
      <div className="bf-hero">
        <div className="bf-hero-text">
          <div className="bf-eyebrow">UI Design</div>
          <h1>Interface<br />designs.</h1>
          <p className="lede">
            These are all my works from the past that I have been working on. I was mostly focusing here on the UI interactions.
          </p>
          <div className="bf-facts">
            <div className="bf-fact"><small>Type</small><strong>Landing pages &amp; dashboards</strong></div>
            <div className="bf-fact"><small>Focus</small><strong>User interface design mostly.</strong></div>
          </div>
        </div>
        <div className="bf-hero-img" style={{ background: "transparent" }}>
          <ImgSkeleton src="assets/slot-wi-hero.jpg" alt="Interface designs hero" fetchpriority="high" loading="eager" imgStyle={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </div>

      {/* Alternating steps — gallery={true} enables slider + lightbox */}
      <div className="bf-section">
        <div className="bf-wrap">
          <div className="bf-steps">
            {UI_GALLERY_ITEMS.map((item, i) => (
              <div className={"bf-step wi-step " + (i % 2 === 1 ? "reverse" : "")} key={item.id}>
                <div className="bf-step-phone wi-step-img">
                  <StaticGallery images={item.images} alt={item.title} />
                </div>
                <div className="bf-step-text">
                  <h3>{item.title}</h3>
                  <div className="wi-type-tag">{item.type}</div>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bf-disclaimer">
        <div className="bf-wrap">
          <p><em style={{ color: "rgb(75,75,75)", fontSize: "14px" }}>*Disclaimer: Some images shown in this portfolio are not my personal property. Some of them were created by me or by third parties and are used for project and presentation purposes only. All rights belong to their respective owners.</em></p>
        </div>
      </div>
    </React.Fragment>
  );
}
