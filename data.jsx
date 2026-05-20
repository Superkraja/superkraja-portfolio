// Portfolio content data
const SPECIALTIES = [
  {
    id: "ux",
    num: "01",
    title: "User\nexperience\nsuper design",
    desc: "What is it? Where does it come from? How's it made?",
    illoKey: "ux",
    stories: [
      { id:"ux-story-1", eyebrow:"Process", title:"Research that actually ships", lede:"Why I keep a one-page research brief on every project.", facts:[["Read","7 min"],["Topic","Discovery"],["Year","2025"]], cover:"uxCover1",
        sections:[["Short, repeatable, useful","Long research decks get filed away. One-pagers get pinned."]]},
      { id:"ux-story-2", eyebrow:"Process", title:"Mapping a flow without a whiteboard", lede:"Low-fidelity flow mapping with only sticky notes and a camera.", facts:[["Read","5 min"],["Tools","Post-its, phone"],["Year","2024"]], cover:"uxCover2",
        sections:[["The best tools are cheap","Constraints remove ego. Fidelity comes later."]]},
    ],
  },
  {
    id: "ui",
    num: "02",
    title: "UI & Design\nsystems",
    desc: "Fine art in the digital space? Just made it as a component.",
    illoKey: "ui",
    stories: [
      { id:"ui-story-1", eyebrow:"Design systems", title:"Tokens before components", lede:"Why token architecture is the hardest and most important decision.", facts:[["Read","8 min"],["Topic","Design tokens"],["Year","2025"]], cover:"uiCover1",
        sections:[["The math is the design","Tokens are the part users never see and designers always feel."]]},
      { id:"ui-story-2", eyebrow:"Design systems", title:"Naming is the whole job", lede:"A guide to component naming that survives 3+ product teams.", facts:[["Read","6 min"],["Topic","Naming"],["Year","2024"]], cover:"uiCover2",
        sections:[["Predictable beats clever","`Button/Primary/Large` beats `BigRedGo` every time."]]},
    ],
  },
  {
    id: "proto",
    num: "03",
    title: "Prototype\n& Testing",
    desc: "The ultimate power that gives you every answer you need.",
    illoKey: "proto",
    stories: [
      { id:"proto-story-1", eyebrow:"Prototyping", title:"When to prototype in code", lede:"The threshold at which Figma stops helping you learn.", facts:[["Read","6 min"],["Topic","Fidelity"],["Year","2025"]], cover:"protoCover1",
        sections:[["Motion is content","Anything that moves is a design decision in disguise."]]},
      { id:"proto-story-2", eyebrow:"Prototyping", title:"Five-minute user tests", lede:"Why I schedule 5-minute tests, not 45-minute ones.", facts:[["Read","4 min"],["Topic","Testing"],["Year","2024"]], cover:"protoCover2",
        sections:[["Short sessions, more of them","Fresh eyes beat deep sessions for early-stage work."]]},
    ],
  },
  {
    id: "brand",
    num: "04",
    title: "Brand\nidentities",
    desc: "Crafting and polishing visual graphic elements.",
    illoKey: "brand",
    stories: [
      { id:"brand-story-1", eyebrow:"Branding", title:"Designing a mark that sticks", lede:"What separates a logo from a wordmark, and when to use each.", facts:[["Read","6 min"],["Topic","Logo systems"],["Year","2024"]], cover:"brandCover1",
        sections:[
          ["The idea","Every identity starts with a single, ownable idea. I lean on metaphors before I touch a vector tool. They are easier to defend and easier to build a system around."],
          ["Form & feel","I narrow type, color and shape in parallel, not in sequence. Parallel exploration makes the trade-offs visible early."],
        ]},
      { id:"brand-story-2", eyebrow:"Branding", title:"Building a type system for a bakery", lede:"How one display face and one neutral sans carried an entire identity.", facts:[["Read","4 min"],["Client","Sušić Bakery"],["Deliverable","Brand book"]], cover:"brandCover2",
        sections:[
          ["Starting with the menu","The hardest type choices happened on the menu card, the longest reading surface. Once it worked there, it worked everywhere."],
          ["Giving owners the keys","A brand book only works if the people using it feel confident. I recorded short Loom walk-throughs alongside the PDF."],
        ]},
      { id:"brand-story-3", eyebrow:"Branding", title:"A color palette that survives the real world", lede:"Choosing colors that look good in print, on screens, and on a busy street.", facts:[["Read","5 min"],["Topic","Color"],["Year","2025"]], cover:"brandCover3",
        sections:[
          ["The 5 am test","If it doesn't read on a van wrap at 5 am in winter light, it doesn't ship."],
          ["Accessible by default","I lock in contrast minimums before I fall in love with a swatch."],
        ]},
    ],
  },
];

const UX_CASES = [
  { id:"luxury-watch", cat:"UX case", title:"Luxury Watch App", desc:"A mobile app for watch enthusiasts and passionate collectors.",
    lede:"Designed from scratch (including a full design system) for one of the world's most famous luxury watch retailers. Winner of two 3rd prizes at the 2025 Swiss Design Competition.",
    facts:[["Role","Lead Product Designer"],["Year","2024"],["Award","Swiss Design 2025"]],
    sections:[
      ["Overview","A mobile app for watch enthusiasts and passionate collectors, designed from scratch with a full design system."],
      ["Key features","Digital Collection, Insurance, Sell-to-Company, Watch Services, Agent Appointments, and Collection Marketplace Tracking."],
    ]},
  { id:"baby-food", cat:"UX case", title:"Baby food", desc:"A monthly food subscription service for newborns.", illo:"caseBaby",
    lede:"Parents of newborns are exhausted, skeptical, and extremely online. The product had to earn trust in 60 seconds and keep it for 12 months.",
    facts:[["Role","Lead Product Designer"],["Team","4"],["Duration","6 months"],["Year","2024"]],
    sections:[
      ["The problem","Subscription fatigue is real. Parents are offered five new food services a week. Ours had to feel different: calmer, more credible, more thoughtful about the child's actual age."],
      ["What I designed","I re-structured the onboarding around the baby, not the parent. The first screen doesn't ask for an email, it asks how old the child is. Everything else (plan, portion size, cadence) follows from that."],
      ["Outcome","Trial-to-paid conversion went from 18% to 34% in the first quarter after launch. Support tickets about 'wrong portion size' dropped by ~60%."],
    ]},
  { id:"consultation", cat:"UX case", title:"Consulting services", desc:"Online consultations for startups and small businesses.", illo:"caseConsult",
    lede:"Founders don't schedule calls the way calendars assume they do. The product needed to feel like a conversation, not an admin tool.",
    facts:[["Role","Product Designer"],["Team","3"],["Duration","4 months"],["Year","2024"]],
    sections:[
      ["The problem","Standard scheduling tools treat a 30-min call as a commodity. For a founder deciding to spend €400 on advice, it isn't."],
      ["What I designed","Expert profiles that lead with outcomes, not credentials. Booking becomes a 3-step chat, not a form."],
      ["Outcome","Booking completion up 41%. No-show rate cut in half."],
    ]},
  { id:"realestate", cat:"UX case", title:"Real estate", desc:"Communication between real-estate agents and their clients.", illo:"caseEstate",
    lede:"Agents live in WhatsApp. Any tool that replaces it has to be faster than WhatsApp, not more featured.",
    facts:[["Role","Sole Designer"],["Team","5"],["Duration","8 months"],["Year","2023"]],
    sections:[
      ["The problem","Agents were losing 30% of leads because 'properties' lived in their CRM but conversations lived in WhatsApp."],
      ["What I designed","A unified inbox where listings sit next to chat, so one thumb can share a 2-bed apartment and answer 'pet friendly?' in the same thread."],
      ["Outcome","Agent NPS went from 31 to 62. Retention doubled in 6 months."],
    ]},
  { id:"travel", cat:"UX case", title:"Travel app", desc:"Reserving and observing travel destinations for young people.", illo:"caseTravel",
    lede:"Gen-Z travelers don't plan trips. They collect places. The product had to respect that rhythm.",
    facts:[["Role","Product Designer"],["Team","6"],["Duration","5 months"],["Year","2025"]],
    sections:[
      ["The problem","Traditional booking funnels assume a user already knows where they're going. Our users usually don't."],
      ["What I designed","A feed-first structure where every destination can be saved with one tap, and 'planning' emerges from the saved pile."],
      ["Outcome","7-day retention up 2.3x versus the previous flow."],
    ]},
  { id:"web-ui", cat:"UI Design", title:"Interface designs", desc:"Landing pages, dashboards and mobile apps with a focus on UI interactions.", illo:"caseUI" },
];

const BRANDS = [
  { id:"b1", name:"Logo design", key:"brandLogoDesign", layout:"logo-grid",
    fullImg:"assets/logo-01.jpg",
    images:["assets/logo-01.jpg","assets/logo-02.jpg","assets/logo-03.jpg","assets/logo-04.jpg","assets/logo-05.jpg","assets/logo-06.jpg","assets/logo-08.jpg","assets/logo-09.jpg","assets/logo-10.jpg","assets/logo-11.jpg","assets/logo-12.jpg","assets/logo-13.jpg","assets/logo-14.jpg","assets/logo-15.jpg","assets/logo-16.jpg","assets/logo-17.jpg","assets/logo-18.jpg","assets/logo-19.jpg","assets/logo-20.jpg","assets/logo-21.jpg"],
    eyebrow:"Branding", title:"Logo design",
    lede:"20 marks across industries, from tech startups to real estate agencies, dental clinics to adventure brands. Each one built to own its space.",
    facts:[["Logos","20+"],["Years","2019–2024"],["Deliverable","Logotypes + marks"]],
    sections:[
      ["One constraint per mark","Every logo starts with a single constraint: a shape, a letterform, a metaphor. That constraint is what makes it recognizable."],
      ["Built to travel","Each mark is tested at favicon size, on a dark background, and in single-color before it's considered done."],
    ]},
  { id:"b2", name:"Puzzle", key:"brandPuzzle", fullImg:"assets/brand-full-puzzle.jpg",
    images:["assets/puzzle-1.jpg","assets/puzzle-2.jpg","assets/puzzle-3.jpg","assets/puzzle-4.jpg","assets/puzzle-5.jpg","assets/puzzle-6.jpg","assets/puzzle-7.jpg","assets/puzzle-8.jpg"],
    eyebrow:"Branding", title:"Puzzle",
    lede:"Internal tools company. They wanted to feel like a friendly utility, not enterprise software.",
    facts:[["Client","Orbit"],["Year","2025"],["Deliverable","Identity + product mark"]],
    sections:[
      ["Two marks, one family","A wordmark for marketing, a glyph for the favicon and app dock. They share one stroke and one curve."],
      ["The dot matters","The dot in the o is the entire brand. We use it as a loading state, a cursor, and a pin."],
    ]},
  { id:"b4", name:"NEF", key:"brandNef", fullImg:"assets/brand-full-nef.jpg",
    images:["assets/nef-1.png","assets/nef-2.jpg","assets/nef-3.jpg","assets/nef-4.jpg","assets/nef-5.jpg","assets/nef-6.jpg","assets/nef-7.jpg","assets/nef-8.jpg","assets/nef-9.jpg"],
    eyebrow:"Branding", title:"NEF, a quiet logistics mark",
    lede:"A B2B logistics company that didn't want to look like a B2B logistics company.",
    facts:[["Client","NEF Logistics"],["Year","2023"],["Deliverable","Logotype"]],
    sections:[
      ["Restraint as a feature","Their customers see the truck before they see the website. The mark had to read at 60 km/h from the next lane."],
      ["The result","Three letters, one custom kerning pair, and a color that holds up in dust."],
    ]},
  { id:"b3", name:"BOS", key:"brandBos", fullImg:"assets/brand-full-bos.jpg",
    images:["assets/bos-1.jpg","assets/bos-2.jpg","assets/bos-3.jpg","assets/bos-4.jpg","assets/bos-5.jpg","assets/bos-6.jpg","assets/bos-7.jpg","assets/bos-8.jpg"],
    eyebrow:"Branding", title:"BOS, sport club identity",
    lede:"A youth basketball club that needed a mark for jerseys, gym walls, and Instagram in equal measure.",
    facts:[["Client","BOS Basketball"],["Year","2024"],["Deliverable","Crest + kit"]],
    sections:[
      ["A crest, not a logo","Sport identities live in embroidery before they live on screen. I designed for the needle first."],
      ["Kid test","I tested every iteration on a 9-year-old. If they couldn't draw it from memory, it didn't ship."],
    ]},
  { id:"b5", name:"Uranak", key:"brandUranak", fullImg:"assets/uranak-1.jpg",
    images:["assets/uranak-1.jpg"],
    eyebrow:"Branding", title:"Uranak, music festival graphic elements",
    lede:"A full suite of graphic assets for Uranak, Serbia's biggest May Day music festival held at Srebrno Jezero.",
    facts:[["Client","Uranak"],["Year","2023"],["Deliverable","Festival identity + print"]],
    sections:[
      ["The brief","Line-up cards, stage logos, and social media banners. Everything needed to feel energetic and cohesive across digital and print."],
      ["The result","A bold blue-and-green palette with custom stage wordmarks (Live, Urban, Open AIRaction) and artist portrait cards that held up at every size."],
    ]},
  { id:"b6", name:"Serbian Week", key:"brandSerbian", fullImg:"assets/serbian-1.jpg",
    images:["assets/serbian-1.jpg"],
    eyebrow:"Branding", title:"Serbian Week, ski festival identity",
    lede:"Annual ski week at Risoul, France. The identity needed to stretch from social banners to slope signage without losing energy.",
    facts:[["Client","Serbian Week / Puzzle Group"],["Year","2024"],["Deliverable","Identity + print + web"]],
    sections:[
      ["Bold geometry on snow","The diagonal graphic system was built to contrast against white mountain backdrops: sharp angles, vivid red and blue, built for outdoor visibility."],
      ["What shipped","Event branding, promotional poster, web presence via puzzlegroup.org, and stage graphics for nightly club events."],
    ]},
  { id:"b7", name:"Bed n beer", key:"brandBeer", fullImg:"assets/brand-full-beer.jpg",
    images:["assets/beer-1.jpg","assets/beer-2.jpg","assets/beer-3.jpg","assets/beer-4.jpg","assets/beer-5.jpg","assets/beer-6.jpg","assets/beer-7.jpg"],
    eyebrow:"Branding", title:"Bed & Beer, a hostel with a wink",
    lede:"A backpacker hostel that brews its own beer downstairs. The brand had to be friendly without being twee.",
    facts:[["Client","Bed & Beer"],["Year","2022"],["Deliverable","Identity + signage"]],
    sections:[
      ["Tone of voice","I wrote the welcome letter before designing anything else. The voice set the type and the type set the rest."],
      ["Signage as a system","Each floor got its own beer-themed wayfinding glyph. Guests use them to give directions."],
    ]},
];

const NAV_SECTIONS = [
  { id:"hero", label:"Home" },
  { id:"powers", label:"SuperPowers" },
  { id:"works", label:"Portfolio" },
  { id:"about", label:"About me" },
  { id:"contact", label:"Contact" },
];

Object.assign(window, { SPECIALTIES, UX_CASES, BRANDS, NAV_SECTIONS });
