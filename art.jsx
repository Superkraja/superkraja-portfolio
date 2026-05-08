// All inline SVG placeholder art. Simple shapes only.
const Bolt = ({color="#0569E7", style}) => (
  <svg className="bolt-side" viewBox="0 0 25 55" fill="none" style={style}>
    <path d="M24.8516 35.0933C24.3988 36.7722 22.4366 37.9932 20.7764 37.3827C17.3048 36.1617 13.8333 35.0933 10.3618 34.1775C14.1352 40.2826 17.9086 46.2351 21.682 52.1877C22.7385 53.8666 20.1726 56.0034 18.8142 54.4771C12.1731 46.9983 6.13564 38.909 0.551043 30.6671C-1.26018 28.0724 1.75852 25.325 4.32442 25.7829C9.00341 26.6987 13.5315 27.9197 17.9086 29.2934C16.5502 25.1724 13.2296 19.8304 12.173 17.3884C10.3618 12.9621 8.39967 8.68856 6.58845 4.26234C5.0791 0.751882 11.1165 -1.8428 12.6258 1.66766C15.6445 8.53594 18.5123 15.4042 21.3801 22.2725C23.1913 26.3935 25.9081 30.3618 24.7007 35.0933H24.8516Z" fill={color}/>
  </svg>
);

const IlloBrand = ({hover}) => (
  <img src={hover ? "assets/superpower-brand-hover.svg" : "assets/superpower-brand-default.svg"} alt="" style={{width:'100%',height:'100%',objectFit:'contain'}} />
);
const IlloUX = ({hover}) => (
  <img src={hover ? "assets/superpower-ux-hover.svg" : "assets/superpower-ux-default.svg"} alt="" style={{width:'100%',height:'100%',objectFit:'contain'}} />
);
const IlloUI = ({hover}) => (
  <img src={hover ? "assets/superpower-design-hover.svg" : "assets/superpower-design-default.svg"} alt="" style={{width:'100%',height:'100%',objectFit:'contain'}} />
);
const IlloProto = ({hover}) => (
  <img src={hover ? "assets/superpower-proto-hover.svg" : "assets/superpower-proto-default.svg"} alt="" style={{width:'100%',height:'100%',objectFit:'contain'}} />
);
const SPEC_ILLOS = { brand:IlloBrand, ux:IlloUX, ui:IlloUI, proto:IlloProto };

const CaseBaby = () => (
  <svg viewBox="0 0 200 200">
    <rect x="30" y="40" width="100" height="130" rx="22" fill="#FFC9A8"/>
    <circle cx="80" cy="70" r="22" fill="#fff"/>
    <circle cx="80" cy="70" r="8" fill="#E06E22"/>
    <rect x="50" y="100" width="60" height="6" rx="3" fill="#fff"/>
    <rect x="50" y="114" width="40" height="6" rx="3" fill="#fff"/>
    <circle cx="160" cy="130" r="28" fill="#7BAA84"/>
  </svg>
);
const CaseConsult = () => (
  <svg viewBox="0 0 200 200">
    <circle cx="70" cy="80" r="34" fill="#AFC7FF"/>
    <circle cx="130" cy="120" r="28" fill="#0569E7"/>
    <rect x="40" y="130" width="70" height="40" rx="12" fill="#fff" stroke="#212527" strokeWidth="2.5"/>
    <rect x="50" y="142" width="40" height="4" rx="2" fill="#212527"/>
    <rect x="50" y="152" width="30" height="4" rx="2" fill="#D0D0D0"/>
  </svg>
);
const CaseEstate = () => (
  <svg viewBox="0 0 200 200">
    <path d="M40 110 L100 60 L160 110 L160 170 L40 170 Z" fill="#7BAA84"/>
    <rect x="86" y="130" width="28" height="40" fill="#212527"/>
    <rect x="58" y="130" width="20" height="16" fill="#fff"/>
    <rect x="122" y="130" width="20" height="16" fill="#fff"/>
    <path d="M30 110 L100 50 L170 110" stroke="#212527" strokeWidth="3" fill="none"/>
  </svg>
);
const CaseTravel = () => (
  <svg viewBox="0 0 200 200">
    <circle cx="100" cy="100" r="60" fill="#EDE0FF"/>
    <path d="M60 110 C 80 60, 120 60, 140 110" stroke="#7242D3" strokeWidth="4" fill="none" strokeLinecap="round"/>
    <circle cx="100" cy="90" r="10" fill="#7242D3"/>
    <path d="M100 100 L100 130" stroke="#7242D3" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);
const CASE_ILLOS = { caseBaby:CaseBaby, caseConsult:CaseConsult, caseEstate:CaseEstate, caseTravel:CaseTravel };

// brand marks — abstract logomarks
const BrandUranak = () => (<svg viewBox="0 0 160 80"><circle cx="40" cy="40" r="24" fill="#E06E22"/><text x="72" y="50" fontFamily="Figtree" fontWeight="800" fontSize="26" fill="#212527">uranak</text></svg>);
const BrandSerbian = () => (<svg viewBox="0 0 160 80"><rect x="10" y="22" width="36" height="36" fill="#FF160D"/><text x="54" y="50" fontFamily="Figtree" fontWeight="800" fontSize="20" fill="#212527">SRB/WK</text></svg>);
const BrandBeer = () => (<svg viewBox="0 0 160 80"><path d="M30 26 L50 26 L48 60 L32 60 Z" fill="#F59C2B"/><text x="60" y="50" fontFamily="Patrick Hand SC" fontSize="28" fill="#212527">Bed&Beer</text></svg>);
const BrandNef = () => (<svg viewBox="0 0 160 80"><text x="12" y="54" fontFamily="Figtree" fontWeight="800" fontSize="44" fill="#0569E7">NEF.</text></svg>);
const BrandBos = () => (<svg viewBox="0 0 160 80"><circle cx="50" cy="40" r="26" fill="none" stroke="#212527" strokeWidth="4"/><text x="30" y="50" fontFamily="Figtree" fontWeight="800" fontSize="22" fill="#212527">BOS</text></svg>);
const BrandSusic = () => (<svg viewBox="0 0 160 80"><path d="M20 56 Q 40 20, 60 56 T 100 56 T 140 56" stroke="#7BAA84" strokeWidth="4" fill="none"/><text x="50" y="70" fontFamily="Patrick Hand SC" fontSize="22" fill="#212527">sušić</text></svg>);
const BrandOrbit = () => (<svg viewBox="0 0 160 80"><ellipse cx="80" cy="40" rx="50" ry="18" fill="none" stroke="#7242D3" strokeWidth="3"/><circle cx="80" cy="40" r="10" fill="#7242D3"/></svg>);
const BRAND_ART = { brandUranak:BrandUranak, brandSerbian:BrandSerbian, brandBeer:BrandBeer, brandNef:BrandNef, brandBos:BrandBos, brandSusic:BrandSusic, brandOrbit:BrandOrbit };

// Story covers
const genericCover = (bg, fg) => () => (
  <svg viewBox="0 0 200 120">
    <rect width="200" height="120" fill={bg}/>
    <circle cx="60" cy="60" r="30" fill={fg} opacity="0.9"/>
    <rect x="100" y="40" width="70" height="40" rx="8" fill={fg}/>
  </svg>
);
const STORY_COVERS = {
  brandCover1: genericCover("#FFE8D9","#E06E22"),
  brandCover2: genericCover("#FFC9A8","#212527"),
  brandCover3: genericCover("#FFE8D9","#F59C2B"),
  uxCover1: genericCover("#DCE8FF","#0569E7"),
  uxCover2: genericCover("#AFC7FF","#212527"),
  uiCover1: genericCover("#D9F3DE","#7BAA84"),
  uiCover2: genericCover("#D9F3DE","#6DA076"),
  protoCover1: genericCover("#EDE0FF","#7242D3"),
  protoCover2: genericCover("#EDE0FF","#212527"),
};

// Icon set (simple line)
const Ico = ({name,size=18,color="currentColor"}) => {
  const p = {width:size,height:size,viewBox:"0 0 24 24",fill:"none",stroke:color,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"};
  if(name==="arrow-right") return <svg {...p}><path d="M5 12h14M13 5l7 7-7 7"/></svg>;
  if(name==="arrow-left") return <svg {...p}><path d="M19 12H5M11 5l-7 7 7 7"/></svg>;
  if(name==="mail") return <svg {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>;
  if(name==="linkedin") return <svg {...p}><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 17v-7"/></svg>;
  if(name==="dribbble") return <svg {...p}><circle cx="12" cy="12" r="9"/><path d="M8 3.5c3 4 6 10 6 17.5M3.5 10c6 0 12-1 17-4M4 18c4-5 10-6 16-4"/></svg>;
  if(name==="send") return <svg {...p}><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>;
  if(name==="close") return <svg {...p}><path d="M18 6L6 18M6 6l12 12"/></svg>;
  return null;
};

Object.assign(window, { Bolt, SPEC_ILLOS, CASE_ILLOS, BRAND_ART, STORY_COVERS, Ico });
