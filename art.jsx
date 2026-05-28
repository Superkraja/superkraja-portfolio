// All inline SVG placeholder art. Simple shapes only.
const Bolt = ({color="#0569E7", style}) => (
  <svg className="bolt-side" viewBox="0 0 25 55" fill="none" style={style}>
    <path d="M24.8516 35.0933C24.3988 36.7722 22.4366 37.9932 20.7764 37.3827C17.3048 36.1617 13.8333 35.0933 10.3618 34.1775C14.1352 40.2826 17.9086 46.2351 21.682 52.1877C22.7385 53.8666 20.1726 56.0034 18.8142 54.4771C12.1731 46.9983 6.13564 38.909 0.551043 30.6671C-1.26018 28.0724 1.75852 25.325 4.32442 25.7829C9.00341 26.6987 13.5315 27.9197 17.9086 29.2934C16.5502 25.1724 13.2296 19.8304 12.173 17.3884C10.3618 12.9621 8.39967 8.68856 6.58845 4.26234C5.0791 0.751882 11.1165 -1.8428 12.6258 1.66766C15.6445 8.53594 18.5123 15.4042 21.3801 22.2725C23.1913 26.3935 25.9081 30.3618 24.7007 35.0933H24.8516Z" fill={color}/>
  </svg>
);

const IlloUX = ({hover}) => (
  <div style={{position:'relative',width:'100%',height:'100%'}}>
    <img src="assets/superpower-ux-hover.svg" alt="" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'contain'}} />
    <div style={{position:'absolute',inset:0,transition:'opacity .28s ease',opacity:hover?0:1}}>
      <svg width="140" height="140" viewBox="0 0 140 140" fill="none" style={{width:'100%',height:'100%'}}>
        <path d="M4 51L37 13H103L136 51L70.5789 127L4 51Z" fill="#4FA2F7"/>
        <path d="M76 50V71H65V68.6667H73.6596V52.3333H65V50H76Z" fill="#212527"/>
        <path d="M84.5151 38L70 46.3761L55.4849 38L41 54.6496L70 86L99 54.6496L84.5151 38Z" fill="white"/>
        <path d="M38 53.7305L70 89L102 53.7305L86.0166 35L70 44.4229L53.9834 35L38 53.7305ZM70 50.2246L84.9365 41.4365L95.3408 53.6289L70 81.5586L44.6602 53.6289L55.0645 41.4365L70 50.2246Z" fill="#212527"/>
      </svg>
    </div>
  </div>
);

const IlloUI = ({hover}) => (
  <div style={{position:'relative',width:'100%',height:'100%'}}>
    <img src="assets/superpower-design-hover.svg" alt="" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'contain'}} />
    <div style={{position:'absolute',inset:0,transition:'opacity .28s ease',opacity:hover?0:1}}>
      <svg width="140" height="140" viewBox="0 0 140 140" fill="none" style={{width:'100%',height:'100%'}}>
        <circle cx="70" cy="70" r="56" fill="#A391FF"/>
        <path d="M80 70C80 81.598 70.598 91 59 91C47.402 91 38 81.598 38 70C38 58.402 47.402 49 59 49C70.598 49 80 58.402 80 70Z" fill="white"/>
        <path d="M77 70C77 60.0589 68.9411 52 59 52C49.0589 52 41 60.0589 41 70C41 79.9411 49.0589 88 59 88V93C46.2975 93 36 82.7025 36 70C36 57.2975 46.2975 47 59 47C71.7025 47 82 57.2975 82 70C82 82.7025 71.7025 93 59 93V88C68.9411 88 77 79.9411 77 70Z" fill="#212527"/>
        <path d="M97.5 70C97.5 60.335 89.665 52.5 80 52.5V47.5C92.4264 47.5 102.5 57.5736 102.5 70C102.5 82.4264 92.4264 92.5 80 92.5V87.5C89.665 87.5 97.5 79.665 97.5 70Z" fill="#212527"/>
      </svg>
    </div>
  </div>
);

const IlloProto = ({hover}) => (
  <div style={{position:'relative',width:'100%',height:'100%'}}>
    <img src="assets/superpower-proto-hover.svg" alt="" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'contain'}} />
    <div style={{position:'absolute',inset:0,transition:'opacity .28s ease',opacity:hover?0:1}}>
      <svg width="140" height="140" viewBox="0 0 140 140" fill="none" style={{width:'100%',height:'100%'}}>
        <rect width="100" height="100" transform="matrix(-4.37114e-08 1 -0.999995 -0.00306235 120 20.1533)" fill="#EED263"/>
        <path d="M75 53.5134L75 86.1042L42.4094 86.0044L42.4094 53.4136L75 53.5134Z" fill="white"/>
        <path d="M77.8896 89.0029L39.5197 88.8854L39.5197 50.5153L77.8896 50.6328L77.8896 89.0029ZM44.5197 55.5306L44.5197 83.9007L72.8897 83.9876L72.8897 55.6175L44.5197 55.5306Z" fill="#212527"/>
        <path d="M106.436 69.6568L84.1841 91.7728L80.6486 88.2373L99.3542 69.6459L80.7056 50.9973L84.252 47.4727L106.436 69.6568Z" fill="#212527"/>
      </svg>
    </div>
  </div>
);

const IlloBrand = ({hover}) => (
  <div style={{position:'relative',width:'100%',height:'100%'}}>
    <img src="assets/superpower-brand-hover.svg" alt="" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'contain'}} />
    <div style={{position:'absolute',inset:0,transition:'opacity .28s ease',opacity:hover?0:1}}>
      <svg width="140" height="140" viewBox="0 0 140 140" fill="none" style={{width:'100%',height:'100%'}}>
        <rect width="93.6459" height="93.6459" transform="matrix(0.708189 0.706023 -0.708189 0.706023 70 3.76758)" fill="#F7679B"/>
        <path d="M55.0767 46.147L79.0031 70.0002L55.0767 93.8535L31.1503 70.0002L55.0767 46.147Z" fill="white"/>
        <path d="M82.0798 70.0001L55.0767 96.9207L28.0736 70.0001L55.0767 43.0796L82.0798 70.0001ZM35.1554 70.0001L55.0767 89.8604L74.9979 70.0001L55.0767 50.1398L35.1554 70.0001Z" fill="#212527"/>
        <path d="M97.5 47.5V92.5H74V87.5H92.5V52.5H74V47.5H97.5Z" fill="#212527"/>
      </svg>
    </div>
  </div>
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
