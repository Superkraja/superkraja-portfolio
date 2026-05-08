// Case study pages — shared template + per-project data

// ── Per-project data ─────────────────────────────────────────────────────────

const CASE_DATA = {

  "baby-food": {
    navLabel: "Baby food",
    eyebrow: "UX Case study",
    title: "Baby food.",
    lede: "A monthly food subscription service for newborns — designed for tired parents who shop on their phones at 2 a.m.",
    facts: [
    { label: "Role", value: "Product & Graphic designer" },
    { label: "Team", value: "20 people" },
    { label: "Year", value: "2018" }],

    heroImg: { src: "assets/baby-main.png", alt: "Baby food project", style: { width: "600px", height: "500px", objectFit: "contain" } },
    heroImgBg: "rgba(244,247,248,0)",
    overview: {
      tag: "Overview",
      title: "The full picture, from purée to pixel.",
      body: ["One of the first projects where I encountered the complete approach to building a brand from scratch — from designing the user experience of an app to creating its graphic elements.",
      "A group of people and technologists came together and decided to produce and sell baby food made from 100% natural ingredients, with no additives.",
      "This app was used mostly by mothers with young children, who signed up for weekly or monthly subscriptions to receive packages of baby food."]
    },
    role: {
      tag: "My main role", tagColor: "bf-tag-blue",
      title: "Make subscriptions feel effortless.",
      body: ["To create a perfect experience for modifying food packages and managing weekly or monthly subscriptions.",
      "What did we know? That this app is used mostly by mothers, who have little time to shop for things on their phone."]
    },
    challenges: {
      tag: "Advantages & challenges", tagColor: "bf-tag-green",
      title: "One free box, then a long-term decision.",
      body: ["This product stood out because everyone could start by ordering one free box containing all the products, so they could try them out first before deciding whether to sign up for a monthly subscription.",
      "What was challenging — was how to create a simple and short experience for setting up a subscription with the desired products and different quantities of products in the boxes."]
    },
    process: {
      tag: "Subscription process", tagColor: "bf-tag-purple",
      title: "A wizard, one decision at a time.",
      intro: "This is a walkthrough of creating an order. The user goes through a wizard where they define, step by step, what they need for their baby. Some of these screens are scrollable.",
      steps: [
      { num: "01", title: "Baby name", img: "assets/baby-1-name.jpg", desc: "We ask for the baby's name so the user has a pleasant experience with the app. All the following steps will be tailored to the baby. We added a progress bar so the user has a sense of how much is left until the end of the process." },
      { num: "02", title: "Additional information", img: "assets/baby-2-info.jpg", desc: "We ask for the baby's age so we can create a box with food suited to that age." },
      { num: "03", title: "E-mail", img: "assets/baby-3-email.jpg", desc: "At this step, we ask for the user's email so we can create future shipments." },
      { num: "04", title: "Subscription box", img: "assets/baby-4-subscription.jpg", desc: "At this step, the user chooses the type of food for their baby. They can have just purée, just puffs, or a combination of both." },
      { num: "05", title: "Taste chooser", img: "assets/baby-5-taste.jpg", desc: "Here, the user chooses what their child likes most — whether it's just fruit, just vegetables, or maybe a combination of the two." },
      { num: "06", title: "Quantity", img: "assets/baby-6-quantity.jpg", scrollable: true, desc: "The amount of food here is automatically adjusted and suggested based on the baby's age and the options the user has chosen. The user is also able to modify the amount and change meals.\n\nEach product has an info icon next to it, where you can get information about that specific meal." },
      { num: "07", title: "Delivery interval", img: "assets/baby-7-interval.jpg", desc: "Here, the user chooses how many boxes they'll receive per month — the options are 1, 2, or 4 boxes per month. We also made sure to calculate for the user how many purée servings per day that comes out to for the baby." },
      { num: "08", title: "Delivery date", img: "assets/baby-8-date.jpg", scrollable: true, desc: "At this step, the user chooses when the first delivery will be." },
      { num: "09", title: "Delivery data", img: "assets/baby-9-data.jpg", scrollable: true, desc: "At this step, the user enters their delivery details." },
      { num: "10", title: "Order summary", img: "assets/baby-10-summary.jpg", scrollable: true, desc: "The last step before payment. The user is able to see exactly what will be delivered and when. The marketing team also got involved here, constantly hitting us up with extra perks like, for example, a discount coupon." }]

    },
    learnings: {
      tag: "What did I learn from this project?", tagColor: "bf-tag-orange",
      title: "End to end, every segment of the product.",
      body: "I learned how to take a detailed approach to planning and solving tasks, and how to thoroughly carry out the implementation plan for them. On this team, I was in touch with every segment of the product — from the purées themselves to collaborating with product owners and the marketing team."
    },
    floaters: [
    { src: "assets/food-apple.png", width: 240, top: "8%", left: "3%", delay: "0s", dur: "9s", r: "-15deg" },
    { src: "assets/food-banana.png", width: 280, top: "18%", right: "2%", delay: "-3s", dur: "11s", r: "20deg" },
    { src: "assets/food-broccoli.png", width: 220, top: "55%", left: "1%", delay: "-5s", dur: "10s", r: "8deg" },
    { src: "assets/food-carrot.png", width: 260, top: "70%", right: "3%", delay: "-1.5s", dur: "12s", r: "-25deg" },
    { src: "assets/food-mango.png", width: 200, top: "38%", left: "2%", delay: "-7s", dur: "8s", r: "12deg" },
    { src: "assets/food-spoon.png", width: 180, top: "82%", left: "6%", delay: "-4s", dur: "13s", r: "-30deg" },
    { src: "assets/food-apple.png", width: 160, top: "90%", right: "5%", delay: "-2s", dur: "10s", r: "18deg" },
    { src: "assets/food-banana.png", width: 200, top: "5%", right: "8%", delay: "-6s", dur: "9s", r: "-10deg" }]

  },

  "consultation": {
    navLabel: "Consulting services",
    eyebrow: "UX Case study",
    title: "Consulting services.",
    lede: "Online consultations for startups and small businesses — designed so founders book a call the way they actually think.",
    facts: [
    { label: "Role", value: "Product Designer" },
    { label: "Team", value: "3 people" },
    { label: "Year", value: "2020" }],

    heroImg: { src: "assets/consult-hero.png", alt: "Consulting services hero", style: { width: "100%", height: "100%", objectFit: "contain" } },
    heroImgBg: "transparent",
    overview: {
      tag: "Overview",
      title: "A complete redesign of the online consulting app.",
      body: ["One of the interesting projects I had was to do a complete redesign of the Online consulting service app. This application was helping startups, entrepreneurs and small and mid-sized companies to start a business.",
      "A group of experts was providing qualified advice for all kinds of business topics. With an option to schedule online meetings, the user was able to find out everything that is needed for starting up a business, expanding the team and managing finances."]
    },
    role: {
      tag: "My main role", tagColor: "bf-tag-blue",
      title: "Design the best possible user flow.",
      body: ["My role was to create the best possible user flow in collaboration with the product owner. We will use a scenario where the goal for the user will be to book a session with an expert.",
      "Also to create a prototype for desktop and mobile versions."]
    },
    challenges: {
      tag: null, tagColor: "bf-tag-green",
      title: "Blueprint.",
      body: ["UX strategy blueprint is really important for every team member to realize what a new project is all about. With Blueprint, we can define and set up challenges, focus areas and guiding principles in our new strategy.",
      "And most important of all, for me, is to define and set Design rules. We have to follow our design rules and principles to create the best possible easy-to-use application."],
      img: "assets/consult-blueprint.jpg"
    },
    extraSections: [
    {
      title: "Design rules.",
      body: "From the established blueprint, we determined the following design rules:",
      list: ["Our services are a joy to use.", "All pieces of information must be transparent.", "Simple, understandable and fast."]
    },
    {
      title: "User journey walkthrough.",
      body: "We started with one scenario. From the searching phase, experience on the website to conversion. We have noted possible thoughts and needs for every action. Using User Journey walkthrough we can identify good or bad parts of the experience. It looks like this:",
      img: "assets/consult-user-journey.png"
    }],

    process: {
      tag: "Booking process", tagColor: "bf-tag-purple",
      title: "Mobile wireframes.",
      intro: "Using this User Journey we were able to create our first wireframes.",
      steps: [
      { num: "01", title: "Topics page", img: "assets/consult-1-topics.jpg", desc: "The user would land on a page where they could choose the topic they need in order to expand their knowledge of the business." },
      { num: "02", title: "Selection", img: "assets/consult-2-selection.jpg", scrollable: true, desc: "On this page, the user gets direct information about the chosen topic. They can also see who the expert will be that helps them gain knowledge about the business. Here they can also see all the information about the meeting that will take place and everything that meeting includes." },
      { num: "03", title: "Session", img: "assets/consult-3-session.jpg", scrollable: true, desc: "On the next page, the user books a session with the chosen topic and the chosen expert. They pick an available date and time." },
      { num: "04", title: "Register", img: "assets/consult-4-register.jpg", desc: "For the login page, it was important to us to clearly present all the options included if you want to register." },
      { num: "05", title: "Create account", img: "assets/consult-5-create-account.jpg", scrollable: true, desc: "Of course, the user is also able to create a new account." },
      { num: "06", title: "Payment", img: "assets/consult-6-payment.jpg", scrollable: true, desc: "The payment step. Here, it was important to us that every piece of information be clearly visible and transparent." },
      { num: "07", title: "Thank you page", img: "assets/consult-7-thankyou.jpg", desc: "On this page, we clearly let the user know that they had successfully completed registration and service selection." },
      { num: "08", title: "Next", img: "assets/consult-8-next.jpg", scrollable: true, desc: "On the My Services page, the user could see, in full detail, exactly what would happen and when." }]


    },
    learnings: {
      tag: "What did I learn from this project?", tagColor: "bf-tag-orange",
      title: "Set standards early, ship faster.",
      body: "I learned how important it is to set standards and rules at the very start of a project. How important it is to take a detailed approach and clearly and loudly note down what we want to achieve. By doing this, we cut down the time spent trying to figure out what we can do, how much we can do, and how quickly we can get something done."
    },
    postProcess: {
      tag: "Challenges", tagColor: "bf-tag-orange",
      title: "Registration and payment, done right.",
      body: ["The user would, of course, receive emails about the various steps they needed to complete. The biggest problem was how to nicely handle registration if the user is new — when they would need to confirm the email and how to bring them back to the step they were already on.",
      "Another challenge was how to simplify the payment process to be as straightforward as possible, without a lot of waiting or jumping from page to page."]
    },
    floaters: [
    { src: "assets/food-apple.png", width: 220, top: "10%", left: "2%", delay: "0s", dur: "9s", r: "-10deg" },
    { src: "assets/food-mango.png", width: 200, top: "40%", right: "2%", delay: "-4s", dur: "11s", r: "15deg" },
    { src: "assets/food-spoon.png", width: 160, top: "70%", left: "3%", delay: "-6s", dur: "10s", r: "8deg" },
    { src: "assets/food-carrot.png", width: 180, top: "80%", right: "4%", delay: "-2s", dur: "12s", r: "-20deg" }]

  },

  "realestate": {
    navLabel: "Real estate",
    eyebrow: "UX Case study",
    title: "Real estate.",
    lede: "Communication between real-estate agents and their clients — faster than WhatsApp.",
    facts: [
    { label: "Role", value: "UI / UX Designer" },
    { label: "Team", value: "5 people" },
    { label: "Year", value: "2020" }],

    heroImg: { src: "assets/realestate-hero.jpg", alt: "Real estate project", style: { width: "100%", height: "100%", objectFit: "contain" } },
    heroImgClass: "bf-hero-img-contain",
    heroImgBg: "transparent",
    overview: {
      tag: "Overview",
      title: "A CRM redesign with 3500 users already on board.",
      body: [
      "When I started working on this project, I came across an application where a lot of things were already set up. This application was a CRM for real estate agents. My idea was to walk through every segment of the application and get familiar with all features, and what were the things that could change and improve.",
      "The biggest challenge was how to convince stakeholders what was wrong and what needed to be changed, while not compromising the already existing user experience. The app already had over 3500 users, who were used to the old app and existing actions. The biggest problem was changing components that would drastically affect the design of the system that already existed.",
      "I came up with the idea to make a document in which I recorded my observations. I will present only a few first rows of a document."]

    },
    role: {
      tag: "The document", tagColor: "bf-tag-blue",
      title: "Recording observations, one row at a time.",
      body: [
      "The document consisted of seven columns. The first two columns are activity and a page with a bad example. The third and fourth was a description of the problem I encountered, and a screenshot of the same. In the last three columns, I have noted possible suggestions on how to solve the problem and the complexity of the task and how much it could affect the existing design.",
      "This document has helped the Product Owner to make the request clearer and to present to others what the potential problems are."],

      img: "assets/realestate-document.jpg"
    },
    challenges: {
      tag: "The challenge", tagColor: "bf-tag-green",
      title: "Bridging agents and clients.",
      body: [
      "One of the many tasks I've had on this project was to improve communication between agents and users. The agents were able to see in their database which objects fit which user. But there was no way to communicate with them except to call them or send them the desired objects on e-mail.",
      "We came up with the idea to create a system where the Agent will be able to submit proposals of objects in a web form in which users will have a better overview of suggested objects.",
      "Sitemap looked like this:"],

      img: "assets/realestate-user-journey.jpg"
    },
    process: {
      tag: "Agent flow", tagColor: "bf-tag-purple",
      title: "Mobile wireframes.",
      intro: "A walkthrough of the key screens built for the agent–client communication flow.",
      screenHeight: 590,
      preSections: [
      {
        title: "Agent",
        body: "The agent could choose specific properties and select which ones to send to a potential client.",
        img: "assets/realestate-agent.jpg"
      },
      {
        title: "Client",
        body: "The client could review the agent's suggestions and rate them. They would receive an email containing the agent's proposal.",
        img: "assets/realestate-client.jpg"
      }],

      steps: [
      { title: "Properties list", img: "assets/realestate-properties-list.jpg", scrollable: true, desc: "When they tried to check what the agent had sent them, the user could go from property to property and get detailed information about what was offered." },
      { title: "Property view", img: "assets/realestate-property-view.jpg", scrollable: true, desc: "Detailed view of a single property. The user could send a response back to the agent saying whether they like it or not. A sticky section at the bottom of the page would help them decide." },
      { title: "Decline", img: "assets/realestate-decline.jpg", scrollable: true, desc: "The client could send a clear response to the agent — whether they like the property or not." },
      { title: "Message", img: "assets/realestate-message.jpg", scrollable: true, desc: "If the client had any additional questions, they could send them directly to the agent. The agent would then ultimately get in touch with them by phone." },
      { title: "Approval", img: "assets/realestate-approval.jpg", scrollable: true, desc: "If the client confirms that they like this property, the agent would receive a message and could contact the client about the next steps." },
      { title: "Search result", img: "assets/realestate-profile-search.jpg", scrollable: true, desc: "The client could also view a list of their created search filters and modify them on their profile page. Depending on what the client entered here, the agent could choose what to send to the potential client." },
      { title: "Profile page", img: "assets/realestate-profile-page.jpg", scrollable: true, desc: "The client could modify their information in the database." }]
    },
    learnings: {
      tag: "What did I learn from this project?", tagColor: "bf-tag-orange",
      title: "Conclusion.",
      body: "So we have created a system where it will be much easier for the user to communicate with the Agent and vice versa.\n\nThe agent will be able to choose between two options. The first option is to send the user only a search query.\n\nAfter the user completes the query and clicks on the save button, the agent will be able to see possible matches in their database.\n\nThe user will also be able to view the matches on his small website and will be able to rate the proposed object on the buttons for like or dislike."
    },
    floaters: [
    { src: "assets/food-broccoli.png", width: 220, top: "8%", left: "2%", delay: "0s", dur: "10s", r: "5deg" },
    { src: "assets/food-banana.png", width: 240, top: "30%", right: "2%", delay: "-3s", dur: "9s", r: "-12deg" },
    { src: "assets/food-apple.png", width: 180, top: "65%", left: "1%", delay: "-5s", dur: "11s", r: "20deg" },
    { src: "assets/food-spoon.png", width: 160, top: "85%", right: "3%", delay: "-7s", dur: "13s", r: "-8deg" }]

  },

  "travel": {
    navLabel: "Travel app",
    eyebrow: "UX Case study",
    title: "Travel app.",
    lede: "Reserving and discovering travel destinations for young people — built around how Gen-Z actually plans trips.",
    facts: [
    { label: "Role", value: "Graphic, UI, UX Design" },
    { label: "Team", value: "6 people" },
    { label: "Year", value: "2021" }],

    heroImg: { src: "assets/travel-hero.jpg", alt: "Travel app project", style: { width: "100%", height: "100%", objectFit: "contain" } },
    heroImgClass: "bf-hero-img-contain",
    heroImgBg: "transparent",
    overview: {
      tag: "Overview",
      title: "A piece of the puzzle.",
      body: [
      "This is where it all started. But absolutely everything.",
      "I was chilling one hot summer afternoon back in 2009 in a pub where Bogi was working behind the bar — he was also a co-owner of the Puzzle travel agency. I was complaining about how I had nowhere to go to the seaside that summer. He asked me to come along with him and be a tour guide on the trip. That's where my career as an animator and tour guide began, which then flowed into becoming the graphic designer for that same agency. From there, the director, Ćoso, sent me to help his close friend Marko at another company, where I'd be a UI designer. In the meantime, I developed a strong interest in user experience.",
      "And now, here I am."]

    },
    role: {
      tag: "My main role", tagColor: "bf-tag-blue",
      title: "Redesign for the mobile generation.",
      body: [
      "To redesign the existing website and adapt the user experience for young people.",
      "Why was the look on mobile so important? Because everyone — and I mean literally everyone — they talked to was viewing the site on their phone. No one ever turned on a computer. So we looked at how to simplify it."]

    },
    challenges: {
      tag: "About Puzzle", tagColor: "bf-tag-green",
      title: "Young people, big energy, tight budgets.",
      body: [
      "Puzzle is a travel agency aimed mostly at young people and students who want to travel on a budget with a group of their peers. Craziness, fun, and parties were generally the hallmarks of these trips, both at the seaside and on winter holidays."],

      img: "assets/travel-puzzle.jpg"
    },
    process: {
      tag: "User flow", tagColor: "bf-tag-purple",
      title: "Mobile wireframes.",
      intro: "A walkthrough of the full user journey — from landing on the homepage all the way to paying for a trip and reading about it in the magazine.",
      steps: [
      { num: "01", title: "Main page", img: "assets/travel-1-main.jpg", scrollable: true, desc: "The young user lands on the homepage. At the top of the page, they can filter for what interests them — destination type and trip duration. Below that, they can see all upcoming trips in one place, along with flash deals, featured destinations, and a preview of the magazine." },
      { num: "02", title: "Trips page", img: "assets/travel-2-trips.jpg", scrollable: true, desc: "This is the trip results page — a list of available trips filtered by the user's preferences. Each card shows the destination photo, trip duration, last-minute availability notice, original and discounted price, with quick Reserve and Details actions." },
      { num: "03", title: "Detailed trip description", img: "assets/travel-3-trip-detail.jpg", scrollable: true, desc: "A full description of a single trip, including all pricing tiers by date range and accommodation type, what's included and excluded in the price, video, photo gallery, day-by-day program, and available excursions." },
      { num: "04", title: "Accommodation", img: "assets/travel-4-accommodation.jpg", scrollable: true, desc: "A detailed view of a single accommodation — photos, description, and a pricing table broken down by room type. What made these special is that the user could start a free reservation for the trip and that accommodation at any time, with no upfront payment." },
      { num: "05", title: "Reservation", img: "assets/travel-5-reservation.jpg", scrollable: true, desc: "To make a reservation, the user enters their booking details — travel date, accommodation, room type, name, email, and phone number. After submitting, they are contacted by an agent who calls them and walks them through the next steps." },
      { num: "06", title: "Payment", img: "assets/travel-6-payment.jpg", scrollable: true, desc: "The user could also choose to pay for their accommodation online and receive a 10% discount. The same pricing table is shown, but clicking a price initiates the payment flow rather than the free reservation." },
      { num: "07", title: "Magazine", img: "assets/travel-7-magazine.jpg", scrollable: true, desc: "Puzzle had plenty of articles that blended life and travel into one. The magazine page shows a categorised list of articles — each with a cover photo, category tag, title, date, excerpt, and a read more link." },
      { num: "08", title: "A single article", img: "assets/travel-8-article.jpg", scrollable: true, desc: "A full article view with a hero image, category tag, social sharing, author credit, body text, inline imagery, tag cloud, and a horizontally scrollable related articles section at the bottom." }]
    },
    learnings: {
      tag: "What did I learn from this project?", tagColor: "bf-tag-orange",
      title: "Know your users, then design around them.",
      body: "Working on Puzzle taught me how much context matters before a single pixel is drawn. The entire redesign was driven by one simple observation — every single user was on their phone. From that, everything else followed: the filter-first homepage, the quick-reserve flow, the free booking with a callback instead of a complex checkout.\n\nI also learned how to balance business goals with user needs. The 10% online payment discount was a clever incentive that worked for both sides. And the magazine wasn't just content — it was a trust-builder that kept young travellers coming back."
    },
    floaters: [
    { src: "assets/food-mango.png", width: 230, top: "6%", left: "2%", delay: "0s", dur: "9s", r: "10deg" },
    { src: "assets/food-carrot.png", width: 250, top: "25%", right: "2%", delay: "-4s", dur: "11s", r: "-18deg" },
    { src: "assets/food-broccoli.png", width: 190, top: "60%", left: "2%", delay: "-2s", dur: "10s", r: "6deg" },
    { src: "assets/food-banana.png", width: 210, top: "78%", right: "3%", delay: "-6s", dur: "12s", r: "-8deg" }]

  }

};

// ── Shared components ─────────────────────────────────────────────────────────

function MobileFrame({ src, alt, scrollable, screenHeight }) {
  const height = screenHeight || 580;
  const isPlaceholder = !src || src.startsWith("placeholder:");
  const label = isPlaceholder ? (src || "").replace("placeholder:", "") || alt : null;
  return (
    <div className="bf-phone" style={{ width: "350px", padding: "4px", borderRadius: "30px", backgroundColor: "rgb(204, 212, 215)" }}>
      <div className="bf-phone-screen" style={{ overflowY: scrollable ? "auto" : "hidden", height: height }}>
        {isPlaceholder ?
        <div style={{
          width: "100%", height: "100%", background: "#f0f2f4",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          gap: 12, padding: 24
        }}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <rect x="4" y="4" width="40" height="40" rx="8" fill="#dde1e5" />
              <rect x="14" y="14" width="20" height="14" rx="3" fill="#b0b8c1" />
              <circle cx="24" cy="34" r="4" fill="#b0b8c1" />
            </svg>
            <span style={{ fontFamily: "ui-monospace,monospace", fontSize: 11, color: "#8a9199", textAlign: "center", textTransform: "uppercase", letterSpacing: ".1em", lineHeight: 1.4 }}>{label}</span>
          </div> :

        <img src={src} alt={alt} loading="lazy" style={{ width: "100%", height: scrollable ? "auto" : "100%", objectFit: scrollable ? "unset" : "cover", objectPosition: "top", display: "block" }} />
        }
      </div>
    </div>);

}

function HeroImgPlaceholder({ label }) {
  return (
    <div style={{
      width: "100%", height: "100%", minHeight: 320,
      background: "#eceef1",
      borderRadius: 32,
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      gap: 16
    }}>
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <rect x="8" y="8" width="64" height="64" rx="16" fill="#d4d9df" />
        <rect x="22" y="22" width="36" height="24" rx="6" fill="#aab2bb" />
        <circle cx="40" cy="56" r="7" fill="#aab2bb" />
      </svg>
      <span style={{ fontFamily: "ui-monospace,monospace", fontSize: 12, color: "#8a9199", textTransform: "uppercase", letterSpacing: ".12em" }}>{label}</span>
    </div>);

}

// ── Generic case study template ───────────────────────────────────────────────

function CaseStudyContent({ caseId, onClose, stories, index, setIndex }) {
  const d = CASE_DATA[caseId];
  if (!d) return null;
  const nextStory = stories && index < stories.length - 1 ? stories[index + 1] : null;

  return (
    <React.Fragment>
      {/* Floating background images — disabled */}
      {false && d.floaters.map((item, i) => null)}

      {/* Nav bar */}
      <div className="sub-bar">
        <button className="back-btn" onClick={onClose}>
          <Ico name="arrow-left" size={16} /> Back to home
        </button>
        <div style={{ fontFamily: "Patrick Hand SC", fontSize: 22, color: "var(--muted)" }} className="sub-bar-title">{d.navLabel}</div>
        <div className="sub-nav">
          <button aria-label="Previous" disabled={index === 0} onClick={() => setIndex(index - 1)}>
            <Ico name="arrow-left" size={16} />
          </button>
          <span className="sub-idx">{String(index + 1).padStart(2, "0")} / {String((stories || []).length).padStart(2, "0")}</span>
          <button aria-label="Next" disabled={index === (stories || []).length - 1} onClick={() => setIndex(index + 1)}>
            <Ico name="arrow-right" size={16} />
          </button>
        </div>
      </div>

      {/* HERO */}
      <div className="bf-hero">
        <div className="bf-hero-text">
          <div className="bf-eyebrow">{d.eyebrow}</div>
          <h1>{d.title}</h1>
          <p className="lede">{d.lede}</p>
          <div className="bf-facts">
            {d.facts.map((f, i) =>
            <div className="bf-fact" key={i}><small>{f.label}</small><strong>{f.value}</strong></div>
            )}
          </div>
        </div>
        <div className={`bf-hero-img${d.heroImgClass ? " " + d.heroImgClass : ""}`} style={{ backgroundColor: d.heroImgBg || "transparent" }}>
          {d.heroImg.src.startsWith("placeholder:") ?
          <HeroImgPlaceholder label={d.heroImg.alt} /> :

          <img key={caseId} src={d.heroImg.src} alt={d.heroImg.alt} style={{ ...d.heroImg.style, objectFit: "contain" }} />
          }
        </div>
      </div>

      {/* OVERVIEW + ROLE + CHALLENGES */}
      <div className="bf-section bf-bg-cream">
        <div className="bf-wrap">
          <div className="bf-block">
            <div className="bf-tag">{d.overview.tag}</div>
            <h2>{d.overview.title}</h2>
            {d.overview.body.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          {d.role.img ?
          <React.Fragment>
              <div className="bf-block" style={{ marginTop: 56 }}>
                <div className={`bf-tag ${d.role.tagColor}`}>{d.role.tag}</div>
                <h2>{d.role.title}</h2>
                {d.role.body.map((p, i) => <p key={i}>{p}</p>)}
                <img src={d.role.img} alt={d.role.tag} style={{ width: "100%", borderRadius: 16, marginTop: 28, boxShadow: "0 8px 30px -10px rgba(0,0,0,0.18)" }} />
              </div>
              {!d.challenges.img &&
            <div className="bf-block" style={{ marginTop: 56 }}>
                  {d.challenges.tag && <div className={`bf-tag ${d.challenges.tagColor}`}>{d.challenges.tag}</div>}
                  <h2>{d.challenges.title}</h2>
                  {d.challenges.body.map((p, i) => <p key={i}>{p}</p>)}
                </div>
            }
            </React.Fragment> :

          <div className="bf-split">
              <div className="bf-block">
                <div className={`bf-tag ${d.role.tagColor}`}>{d.role.tag}</div>
                <h2>{d.role.title}</h2>
                {d.role.body.map((p, i) => <p key={i}>{p}</p>)}
              </div>
              {!d.challenges.img &&
            <div className="bf-block">
                  {d.challenges.tag && <div className={`bf-tag ${d.challenges.tagColor}`}>{d.challenges.tag}</div>}
                  <h2>{d.challenges.title}</h2>
                  {d.challenges.body.map((p, i) => <p key={i}>{p}</p>)}
                </div>
            }
            </div>
          }
          {d.challenges.img &&
          <div className="bf-block" style={{ marginTop: 56 }}>
              {d.challenges.tag && <div className={`bf-tag ${d.challenges.tagColor}`}>{d.challenges.tag}</div>}
              <h2>{d.challenges.title}</h2>
              {d.challenges.body.map((p, i) => <p key={i}>{p}</p>)}
              <div style={{ width: "100%", borderRadius: 16, marginTop: 28, boxShadow: "0 8px 30px -10px rgba(0,0,0,0.18)", overflow: "hidden", height: "clamp(220px, 60vw, 480px)" }}>
                <img src={d.challenges.img} alt={d.challenges.tag || "image"} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
              </div>
            </div>
          }
          {d.extraSections && d.extraSections.map((sec, i) =>
          <div className="bf-block" key={i} style={{ marginTop: 56 }}>
              <h2>{sec.title}</h2>
              {sec.body && <p>{sec.body}</p>}
              {sec.list &&
            <ol style={{ paddingLeft: 24, marginTop: 12, lineHeight: 1.7 }}>
                  {sec.list.map((item, j) => <li key={j}>{item}</li>)}
                </ol>
            }
              {sec.img && <img src={sec.img} alt={sec.title} style={{ width: "100%", borderRadius: 16, marginTop: 24 }} />}
            </div>
          )}
        </div>
      </div>

      {/* PROCESS */}
      <div className="bf-section">
        <div className="bf-wrap">
          <div className="bf-process-intro">
            <div className={`bf-tag ${d.process.tagColor}`}>{d.process.tag}</div>
            <h2>{d.process.title}</h2>
            <p>{d.process.intro}</p>
          </div>
          {d.process.preSections &&
          <div className="pre-sections-grid" style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 40,
            marginBottom: 80
          }}>
              {d.process.preSections.map((sec, i) =>
            <div key={i}>
                  <h3 style={{ fontFamily: "'Figtree',sans-serif", fontWeight: 800, fontSize: "clamp(24px,2.5vw,34px)", letterSpacing: "-0.02em", marginBottom: 12 }}>{sec.title}</h3>
                  <p style={{ fontSize: 16, color: "var(--ink-soft)", lineHeight: 1.6, marginBottom: 20 }}>{sec.body}</p>
                  <img src={sec.img} alt={sec.title} style={{ width: "100%", borderRadius: 16, boxShadow: "0 8px 30px -10px rgba(0,0,0,0.18)", display: "block" }} />
                </div>
            )}
            </div>
          }
          <div className="bf-steps" style={{ gap: "0px" }}>
            {d.process.steps.map((step, i) =>
            <div className={"bf-step " + (i % 2 === 1 ? "reverse" : "")} key={step.num}>
                <div className="bf-step-phone">
                  <MobileFrame src={step.img} alt={step.title} scrollable={!!step.scrollable} screenHeight={d.process.screenHeight} />
                </div>
                <div className="bf-step-text">
                  {step.num && <div className="bf-step-num">{step.num}</div>}
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* POST-PROCESS SECTION */}
      {d.postProcess &&
      <div className="bf-section bf-bg-cream">
          <div className="bf-wrap">
            <div className="bf-block">
              <div className={`bf-tag ${d.postProcess.tagColor}`}>{d.postProcess.tag}</div>
              <h2>{d.postProcess.title}</h2>
              {d.postProcess.body.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </div>
      }

      {/* LEARNINGS */}
      <div className="bf-section bf-bg-dark">
        <div className="bf-wrap">
          <div className="bf-learn">
            <div className={`bf-tag ${d.learnings.tagColor}`}>{d.learnings.tag}</div>
            <h2>{d.learnings.title}</h2>
            {d.learnings.body.split("\n\n").map((para, i) =>
            <p key={i} style={{ color: "rgb(169,169,169)", marginBottom: 14 }}>{para}</p>
            )}
          </div>
        </div>
      </div>

      {/* DISCLAIMER */}
      <div className="bf-disclaimer">
        <div className="bf-wrap">
          <p><em style={{ color: "rgb(75,75,75)", fontSize: "14px" }}>*Disclaimer: Some images shown in this portfolio are not my personal property. Some of them were created by me or by third parties and are used for project and presentation purposes only. All rights belong to their respective owners.</em></p>
        </div>
      </div>

      <div className="bf-footer-actions">
        <div className="bf-wrap" style={{ display: "flex", justifyContent: "flex-end", padding: "32px 0 60px" }}>
          {nextStory &&
          <button className="cta" onClick={() => setIndex(index + 1)}>
              Next: {nextStory.title.split("\n")[0]} <Ico name="arrow-right" size={16} />
            </button>
          }
        </div>
      </div>
    </React.Fragment>);

}

// ── UX Superpower page ───────────────────────────────────────────────────────

function UXSuperpowerContent({ onClose, stories, index, setIndex }) {
  const nextSpec = stories && index < stories.length - 1 ? stories[index + 1] : null;

  return (
    <React.Fragment>
      {/* Nav bar */}
      <div className="sub-bar">
        <button className="back-btn" onClick={onClose}>
          <Ico name="arrow-left" size={16} /> Back to home
        </button>
        <div style={{ fontFamily: "Patrick Hand SC", fontSize: 22, color: "var(--muted)" }} className="sub-bar-title">UX Design</div>
        <div className="sub-nav">
          <button aria-label="Previous" disabled={index === 0} onClick={() => setIndex(index - 1)}>
            <Ico name="arrow-left" size={16} />
          </button>
          <span className="sub-idx">{String(index + 1).padStart(2, "0")} / {String((stories || []).length).padStart(2, "0")}</span>
          <button aria-label="Next" disabled={index === (stories || []).length - 1} onClick={() => setIndex(index + 1)}>
            <Ico name="arrow-right" size={16} />
          </button>
        </div>
      </div>

      {/* HERO */}
      <div style={{ padding: "clamp(40px,6vw,90px) clamp(20px,5vw,72px) 0", maxWidth: 1280, margin: "0 auto" }}>
        <div className="sp-hero-grid">
          <div className="sp-hero-text">
            <div className="bf-eyebrow">Superpower</div>
            <h1 style={{ fontFamily: "'Figtree',sans-serif", fontWeight: 800, letterSpacing: "-0.03em", fontSize: "clamp(48px,7vw,88px)", lineHeight: 0.9, margin: "0 0 20px" }}>
              User<br />experience.
            </h1>
            <p style={{ fontSize: "clamp(17px,1.5vw,20px)", color: "var(--ink-soft)", lineHeight: 1.55, maxWidth: 520 }}>
              Why is it important to have a flawless user experience? Because even though it's just a small piece, it can reflect the brand as a whole.
            </p>
          </div>
          <div className="sp-hero-illo" style={{ borderRadius: 32, overflow: "hidden", aspectRatio: "4/3", background: "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src="assets/ux-illustration.png" alt="UX Illustration" style={{ width: "100%", height: "100%", objectFit: "contain", padding: 24 }} />
          </div>
        </div>
      </div>

      {/* SECTION 1: What is UX */}
      <div className="bf-section bf-bg-cream" style={{ marginTop: 60 }}>
        <div className="bf-wrap">
          <div style={{ maxWidth: 760 }}>
            <div className="bf-tag bf-tag-blue">What is user experience?</div>
            <h2 style={{ fontFamily: "'Figtree',sans-serif", fontWeight: 800, letterSpacing: "-0.02em", fontSize: "clamp(32px,4vw,52px)", lineHeight: 1, margin: "0 0 20px" }}>
              It's not just about the app.<br />It's the whole product.
            </h2>
            <p style={{ fontSize: 17, color: "var(--ink-soft)", lineHeight: 1.65, marginBottom: 14 }}>
              It's not just about how easily, efficiently, logically, and enjoyably an app can be used. When we think about the user experience as a whole, we have to consider how the user navigates not only within the app, but globally — with the entire product.
            </p>
            <p style={{ fontSize: 17, color: "var(--ink-soft)", lineHeight: 1.65 }}>
              Can removing certain frustrations make the user fall in love with a product or brand? Of course it can. That's why we need to think about the user holistically: what exactly can make them happy while using a product, what daily obstacles are bothering them, and how those can be removed.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 2: Strategy */}
      <div className="bf-section">
        <div className="bf-wrap">
          <div style={{ maxWidth: 760 }}>
            <div className="bf-tag bf-tag-purple">Strategy, or how it's built</div>
            <h2 style={{ fontFamily: "'Figtree',sans-serif", fontWeight: 800, letterSpacing: "-0.02em", fontSize: "clamp(32px,4vw,52px)", lineHeight: 1, margin: "0 0 20px" }}>
              Every project needs a different approach.
            </h2>
            <p style={{ fontSize: 17, color: "var(--ink-soft)", lineHeight: 1.65, marginBottom: 14 }}>
              I've often come onto projects that didn't have a clear definition of what they actually wanted from the user experience. Some weren't even interested in the concept of refining it, or in creating one at all. Some didn't see the potential in improving their existing base.
            </p>
            <p style={{ fontSize: 17, color: "var(--ink-soft)", lineHeight: 1.65, marginBottom: 14 }}>
              <strong>Success lies in the power of convincing management of just how important user experience is.</strong>
            </p>
            <p style={{ fontSize: 17, color: "var(--ink-soft)", lineHeight: 1.65 }}>
              In some cases, you need to create a completely new experience; in others, there's a need to improve an existing one; sometimes you don't know who your user is — and in most cases, you don't.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 3: Blueprint */}
      <div className="bf-section bf-bg-cream">
        <div className="bf-wrap">
          <div className="bf-tag bf-tag-green">Blueprint & design rules</div>
          <h2 style={{ fontFamily: "'Figtree',sans-serif", fontWeight: 800, letterSpacing: "-0.02em", fontSize: "clamp(28px,3.5vw,46px)", lineHeight: 1, margin: "0 0 20px", maxWidth: 720 }}>
            A blueprint every team member can rally around.
          </h2>
          <p style={{ fontSize: 17, color: "var(--ink-soft)", lineHeight: 1.65, maxWidth: 720, marginBottom: 40 }}>
            UX strategy blueprint is really important for every team member to realize what a new project is all about. With it, we can define and set up challenges, focus areas and guiding principles. And most important of all — design rules. We have to follow our design rules and principles to create the best possible easy-to-use application.
          </p>
          <div style={{ borderRadius: 24, overflow: "hidden", boxShadow: "0 18px 40px -20px rgba(34,75,86,0.25)" }}>
            <img src="assets/ux-blueprint.jpg" alt="Blueprint wall" style={{ width: "100%", display: "block" }} />
          </div>
        </div>
      </div>

      {/* SECTION 4: Design rules */}
      <div className="bf-section">
        <div className="bf-wrap">
          <div className="bf-tag bf-tag-orange">Design guidelines and principles</div>
          <h2 style={{ fontFamily: "'Figtree',sans-serif", fontWeight: 800, letterSpacing: "-0.02em", fontSize: "clamp(28px,3.5vw,46px)", lineHeight: 1, margin: "0 0 28px" }}>
            Three rules.<br />No exceptions.
          </h2>
          {[
          { num: "01", rule: "Our services are a joy to use." },
          { num: "02", rule: "All information must be transparent." },
          { num: "03", rule: "Simple, understandable and fast." }].
          map((r) =>
          <div key={r.num} style={{ display: "flex", gap: 20, alignItems: "flex-start", marginBottom: 24 }}>
              <div style={{ fontFamily: "Patrick Hand SC", fontSize: 32, color: "var(--blue)", lineHeight: 1, flexShrink: 0, marginTop: 2 }}>{r.num}</div>
              <div style={{ fontSize: 20, fontWeight: 700, color: "var(--ink)", lineHeight: 1.3 }}>{r.rule}</div>
            </div>
          )}
          <p style={{ fontSize: 15, color: "var(--ink-soft)", lineHeight: 1.65, marginTop: 16, borderLeft: "3px solid var(--blue)", paddingLeft: 16, maxWidth: 720 }}>
            During our design process, the only thing everyone has to stick to are these three rules. That means no one — not even someone at the C-level — can propose anything that conflicts with our rules.
          </p>
          <div style={{ borderRadius: 24, overflow: "hidden", boxShadow: "0 18px 40px -20px rgba(34,75,86,0.25)", marginTop: 40, marginBottom: 8 }}>
            <img src="assets/ux-david-rota.jpg" alt="David Rota presenting principles" style={{ width: "100%", display: "block" }} />
          </div>
          <p style={{ fontSize: 13, color: "var(--muted)", fontStyle: "italic", textAlign: "center", lineHeight: 1.5 }}>
            * My dear PO David Rota presenting principles to the team back in 2021.
          </p>
        </div>
      </div>

      {/* SECTION 5: User Journey */}
      <div className="bf-section bf-bg-dark">
        <div className="bf-wrap">
          <div className="bf-tag" style={{ background: "rgba(255,255,255,.1)", color: "#fff" }}>User Journey</div>
          <h2 style={{ fontFamily: "'Figtree',sans-serif", fontWeight: 800, letterSpacing: "-0.02em", fontSize: "clamp(28px,3.5vw,46px)", lineHeight: 1, margin: "0 0 20px", color: "#fff", maxWidth: 720 }}>
            Clicks, thoughts, and needs — in one view.
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,.72)", lineHeight: 1.65, maxWidth: 720, marginBottom: 40 }}>
            A user journey consists of three sections. In the middle is the user flow — these are the user's clicks. Above it is the user's potential thinking, and below, in green, are their needs. That way, we can easily figure out everything the user needs and how we can build the best possible flow.
          </p>
          <img src="assets/ux-user-journey.png" alt="User Journey diagram" style={{ width: "100%", display: "block" }} />
        </div>
      </div>

      <div className="bf-footer-actions">
        <div className="bf-wrap" style={{ display: "flex", justifyContent: "flex-end", padding: "32px 0 60px" }}>
          {nextSpec &&
          <button className="cta" onClick={() => setIndex(index + 1)}>
              Next: {nextSpec.title ? nextSpec.title.split("\n")[0] : "Next"} <Ico name="arrow-right" size={16} />
            </button>
          }
        </div>
      </div>
    </React.Fragment>);

}

// ── UI Superpower page ───────────────────────────────────────────────────────

function UISuperpowerContent({ onClose, stories, index, setIndex }) {
  const nextSpec = stories && index < stories.length - 1 ? stories[index + 1] : null;

  return (
    <React.Fragment>
      {/* Nav bar */}
      <div className="sub-bar">
        <button className="back-btn" onClick={onClose}>
          <Ico name="arrow-left" size={16} /> Back to home
        </button>
        <div style={{ fontFamily: "Patrick Hand SC", fontSize: 22, color: "var(--muted)" }} className="sub-bar-title">UI & Design Systems</div>
        <div className="sub-nav">
          <button aria-label="Previous" disabled={index === 0} onClick={() => setIndex(index - 1)}>
            <Ico name="arrow-left" size={16} />
          </button>
          <span className="sub-idx">{String(index + 1).padStart(2, "0")} / {String((stories || []).length).padStart(2, "0")}</span>
          <button aria-label="Next" disabled={index === (stories || []).length - 1} onClick={() => setIndex(index + 1)}>
            <Ico name="arrow-right" size={16} />
          </button>
        </div>
      </div>

      {/* HERO */}
      <div style={{ padding: "clamp(40px,6vw,90px) clamp(20px,5vw,72px) 0", maxWidth: 1280, margin: "0 auto" }}>
        <div className="sp-hero-grid">
          <div className="sp-hero-text">
            <div className="bf-eyebrow">Superpower</div>
            <h1 style={{ fontFamily: "'Figtree',sans-serif", fontWeight: 800, letterSpacing: "-0.03em", fontSize: "clamp(48px,7vw,88px)", lineHeight: 0.9, margin: "0 0 20px" }}>
              UI &amp;<br />Design<br />systems.
            </h1>
            <p style={{ fontSize: "clamp(17px,1.5vw,20px)", color: "var(--ink-soft)", lineHeight: 1.55, maxWidth: 520 }}>
              Fine art in the digital space. Visual artists that developers simply couldn't do without — and honestly, no one could.
            </p>
          </div>
          <div className="sp-hero-illo" style={{ borderRadius: 32, overflow: "hidden", aspectRatio: "4/3", background: "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src="assets/ui-illustration.png" alt="UI Illustration" style={{ width: "90%", height: "90%", objectFit: "contain" }} />
          </div>
        </div>
      </div>

      {/* SECTION 1: The art guys */}
      <div className="bf-section bf-bg-cream" style={{ marginTop: 60 }}>
        <div className="bf-wrap">
          <div className="two-col-grid">
            <div style={{ maxWidth: 600 }}>
              <div className="bf-tag bf-tag-orange">The evil "art guys"</div>
              <h2 style={{ fontFamily: "'Figtree',sans-serif", fontWeight: 800, letterSpacing: "-0.02em", fontSize: "clamp(28px,3.5vw,46px)", lineHeight: 1, margin: "0 0 20px" }}>
                Who even are<br />those two?
              </h2>
              <p style={{ fontSize: 17, color: "var(--ink-soft)", lineHeight: 1.65, marginBottom: 14 }}>
                Once, someone called us "art guys." My former boss, one of the first senior backend developers. He was leading a meeting and wondered out loud who me and my colleague at the time, Goran, even were. Someone answered, "Front-end and designer..." Meaning: art guys.
              </p>
              <p style={{ fontSize: 17, color: "var(--ink-soft)", lineHeight: 1.65 }}>
                Back then, I hated that answer. But honestly, after all these years, it really is true. We are a kind of visual artist that developers simply couldn't do without. In fact, when I really think about it, no one could.
              </p>
            </div>
            <div style={{
              background: "var(--ink)", borderRadius: 28, padding: "clamp(28px,4vw,48px)",
              color: "#fff", display: "flex", flexDirection: "column", gap: 20
            }}>
              <div style={{ fontFamily: "Patrick Hand SC", fontSize: 80, color: "var(--orange)", lineHeight: 0.8, marginBottom: 8 }}>"</div>
              <p style={{ fontSize: "clamp(18px,2vw,26px)", fontWeight: 700, lineHeight: 1.3, color: "#fff", margin: 0 }}>
                We are a kind of visual artist that developers simply couldn't do without.
              </p>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,.5)", margin: 0 }}>— Vladimir "Kraja" Krajišnik</p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: What matters most */}
      <div className="bf-section">
        <div className="bf-wrap">
          <div className="bf-tag bf-tag-blue">What matters the most?</div>
          <h2 style={{ fontFamily: "'Figtree',sans-serif", fontWeight: 800, letterSpacing: "-0.02em", fontSize: "clamp(28px,3.5vw,46px)", lineHeight: 1, margin: "0 0 20px", maxWidth: 720 }}>
            Attractive, intuitive,<br />and understandable.
          </h2>
          <div className="two-col-grid tight" style={{ marginTop: 16 }}>
            <div>
              <p style={{ fontSize: 17, color: "var(--ink-soft)", lineHeight: 1.65, marginBottom: 14 }}>
                Every design needs to be attractive, intuitive, and understandable. That goes without saying. For me, cleanness and simplicity are what make a design successful. But the most important thing is balancing your artistic abilities with what's actually feasible.
              </p>
              <p style={{ fontSize: 17, color: "var(--ink-soft)", lineHeight: 1.65 }}>
                Anyone can draw a rocket that flies, shoots banknotes out of itself, fires off rainbows, while a dog driving the rocket eats a hot dog. But can the front-end developer actually code that? The real question is whether anyone actually needs it.
              </p>
            </div>
            <div>
              <div style={{ background: "#f0f7ff", borderRadius: 20, padding: "clamp(20px,3vw,36px)" }}>
                <div style={{ fontFamily: "Patrick Hand SC", fontSize: 22, color: "var(--blue)", marginBottom: 20 }}>Things I have a real command of</div>
                {["Subtlety", "Smooth feel of use", "Animations", "Transitions"].map((item, i) =>
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--blue)", flexShrink: 0 }}></div>
                    <span style={{ fontSize: 18, fontWeight: 700, color: "var(--ink)" }}>{item}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: Design system */}
      <div className="bf-section bf-bg-dark">
        <div className="bf-wrap">
          <div className="bf-tag" style={{ background: "rgba(255,255,255,.1)", color: "#fff" }}>A healthy design system</div>
          <div className="two-col-grid">
            <div>
              <h2 style={{ fontFamily: "'Figtree',sans-serif", fontWeight: 800, letterSpacing: "-0.02em", fontSize: "clamp(28px,3.5vw,46px)", lineHeight: 1, margin: "0 0 20px", color: "#fff" }}>
                Built clean.<br />From day one.
              </h2>
              <p style={{ fontSize: 17, color: "rgba(255,255,255,.72)", lineHeight: 1.65, marginBottom: 14 }}>
                It's really important to build and maintain a healthy, clean design system from the very beginning. Every element or component in the design system should be useful — both for designers and for developers.
              </p>
              <p style={{ fontSize: 17, color: "rgba(255,255,255,.72)", lineHeight: 1.65 }}>
                Consistency, of course, is crucial, along with the brand's accompanying visual elements.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 16 }}>
              {[
              { label: "Consistency", icon: "▦", desc: "Same patterns, every screen" },
              { label: "Usefulness", icon: "◎", desc: "For designers and devs alike" },
              { label: "Brand fidelity", icon: "◈", desc: "Visual language that holds" },
              { label: "Cleanliness", icon: "◻", desc: "No dead components" }].
              map((card, i) =>
              <div key={i} style={{ background: "rgba(255,255,255,.07)", borderRadius: 16, padding: "20px 18px" }}>
                  <div style={{ fontSize: 28, marginBottom: 8, color: "var(--green)" }}>{card.icon}</div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 4 }}>{card.label}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,.5)" }}>{card.desc}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="bf-footer-actions">
        <div className="bf-wrap" style={{ display: "flex", justifyContent: "flex-end", padding: "32px 0 60px" }}>
          {nextSpec &&
          <button className="cta" onClick={() => setIndex(index + 1)}>
              Next: {nextSpec.title ? nextSpec.title.split("\n")[0] : "Next"} <Ico name="arrow-right" size={16} />
            </button>
          }
        </div>
      </div>
    </React.Fragment>);

}

// ── Prototype & Testing Superpower page ──────────────────────────────────────

function ProtoSuperpowerContent({ onClose, stories, index, setIndex }) {
  const nextSpec = stories && index < stories.length - 1 ? stories[index + 1] : null;

  return (
    <React.Fragment>
      {/* Nav bar */}
      <div className="sub-bar">
        <button className="back-btn" onClick={onClose}>
          <Ico name="arrow-left" size={16} /> Back to home
        </button>
        <div style={{ fontFamily: "Patrick Hand SC", fontSize: 22, color: "var(--muted)" }} className="sub-bar-title">Prototype & Testing</div>
        <div className="sub-nav">
          <button aria-label="Previous" disabled={index === 0} onClick={() => setIndex(index - 1)}>
            <Ico name="arrow-left" size={16} />
          </button>
          <span className="sub-idx">{String(index + 1).padStart(2, "0")} / {String((stories || []).length).padStart(2, "0")}</span>
          <button aria-label="Next" disabled={index === (stories || []).length - 1} onClick={() => setIndex(index + 1)}>
            <Ico name="arrow-right" size={16} />
          </button>
        </div>
      </div>

      {/* HERO */}
      <div style={{ padding: "clamp(40px,6vw,90px) clamp(20px,5vw,72px) 0", maxWidth: 1280, margin: "0 auto" }}>
        <div className="sp-hero-grid">
          <div className="sp-hero-text">
            <div className="bf-eyebrow">Superpower</div>
            <h1 style={{ fontFamily: "'Figtree',sans-serif", fontWeight: 800, letterSpacing: "-0.03em", fontSize: "clamp(48px,7vw,88px)", lineHeight: 0.9, margin: "0 0 20px" }}>
              Prototype<br />&amp; Testing.
            </h1>
            <p style={{ fontSize: "clamp(17px,1.5vw,20px)", color: "var(--ink-soft)", lineHeight: 1.55, maxWidth: 520 }}>
              The ultimate power that gives you every answer you need. We can't know how a product really works unless we try it out for real.
            </p>
          </div>
          <div className="sp-hero-illo" style={{ borderRadius: 32, overflow: "hidden", aspectRatio: "4/3", background: "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src="assets/proto-illustration.png" alt="Prototype illustration" style={{ width: "85%", height: "85%", objectFit: "contain" }} />
          </div>
        </div>
      </div>

      {/* SECTION 1: The last and most important thing */}
      <div className="bf-section bf-bg-cream" style={{ marginTop: 60 }}>
        <div className="bf-wrap">
          <div className="two-col-grid">
            <div>
              <div className="bf-tag bf-tag-purple">The last — and most important — thing</div>
              <h2 style={{ fontFamily: "'Figtree',sans-serif", fontWeight: 800, letterSpacing: "-0.02em", fontSize: "clamp(28px,3.5vw,46px)", lineHeight: 1, margin: "0 0 20px" }}>
                Or the first...<br />depending.
              </h2>
              <p style={{ fontSize: 17, color: "var(--ink-soft)", lineHeight: 1.65, marginBottom: 14 }}>
                We can't know how a product really works unless we try it out for real. Visually, we can create anything. But until we actually take what we've created in our hands and start using it, we can't know whether the product is truly good or not.
              </p>
              <p style={{ fontSize: 17, color: "var(--ink-soft)", lineHeight: 1.65 }}>
                Even in print. On a computer, we'll get one feeling. In print, a completely different result. That's why it's important to test every product across every element of its existence.
              </p>
            </div>
            <div style={{ borderRadius: 24, overflow: "hidden", boxShadow: "0 18px 40px -20px rgba(34,75,86,0.25)", aspectRatio: "3/4" }}>
              <img src="assets/proto-image-1.jpg" alt="Testing session" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: Real people, real environment */}
      <div className="bf-section">
        <div className="bf-wrap">
          <div className="two-col-grid">
            <div className="mob-order-last" style={{ borderRadius: 24, overflow: "hidden", boxShadow: "0 18px 40px -20px rgba(34,75,86,0.25)" }}>
              <img src="assets/proto-image-2.jpg" alt="Real environment testing" style={{ width: "100%", display: "block" }} />
            </div>
            <div>
              <div className="bf-tag bf-tag-green">The real people in the real environment</div>
              <h2 style={{ fontFamily: "'Figtree',sans-serif", fontWeight: 800, letterSpacing: "-0.02em", fontSize: "clamp(28px,3.5vw,46px)", lineHeight: 1, margin: "0 0 20px" }}>
                Are we the users?<br />Of course not.
              </h2>
              <p style={{ fontSize: 17, color: "var(--ink-soft)", lineHeight: 1.65, marginBottom: 14 }}>
                We can test the design on ourselves. But we can't know how a user behaves until we actually test it — what they really think while using the product, how they navigate it, do they navigate it at all?
              </p>
              <p style={{ fontSize: 17, color: "var(--ink-soft)", lineHeight: 1.65 }}>We can test all of that in a real environment — with real users and the actual product in front of them. Combined with questions and observation, we can come to the answers we need.

              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: What we discover — dark */}
      <div className="bf-section bf-bg-dark">
        <div className="bf-wrap">
          <div className="bf-tag" style={{ background: "rgba(255,255,255,.1)", color: "#fff" }}>What testing reveals</div>
          <h2 style={{ fontFamily: "'Figtree',sans-serif", fontWeight: 800, letterSpacing: "-0.02em", fontSize: "clamp(28px,3.5vw,46px)", lineHeight: 1, margin: "0 0 40px", color: "#fff", maxWidth: 680 }}>
            Discover problems before production.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20, marginBottom: 48 }}>
            {[
            { q: "Is our app easy to use?", icon: "◎" },
            { q: "Where does the user run into problems?", icon: "◈" },
            { q: "What would mean a lot to them as an option?", icon: "◻" },
            { q: "What is unnecessary for them?", icon: "▦" }].
            map((card, i) =>
            <div key={i} style={{ background: "rgba(255,255,255,.07)", borderRadius: 16, padding: "24px 20px" }}>
                <div style={{ fontSize: 28, color: "var(--green)", marginBottom: 12 }}>{card.icon}</div>
                <div style={{ fontSize: 16, fontWeight: 600, color: "#fff", lineHeight: 1.4 }}>{card.q}</div>
              </div>
            )}
          </div>
          <div style={{ borderLeft: "3px solid var(--green)", paddingLeft: 24, maxWidth: 680 }}>
            <p style={{ fontSize: 20, fontWeight: 700, color: "#fff", lineHeight: 1.4, margin: 0 }}>
              That way, we discover potential problems and remove them before production — so we don't waste the most important and most irreversible resource of all: <span style={{ color: "var(--green)" }}>time.</span>
            </p>
          </div>
        </div>
      </div>

      <div className="bf-footer-actions">
        <div className="bf-wrap" style={{ display: "flex", justifyContent: "flex-end", padding: "32px 0 60px" }}>
          {nextSpec &&
          <button className="cta" onClick={() => setIndex(index + 1)}>
              Next: {nextSpec.title ? nextSpec.title.split("\n")[0] : "Next"} <Ico name="arrow-right" size={16} />
            </button>
          }
        </div>
      </div>
    </React.Fragment>);

}

// ── Brand Identities Superpower page ─────────────────────────────────────────

function BrandSuperpowerContent({ onClose, stories, index, setIndex }) {
  const nextSpec = stories && index < stories.length - 1 ? stories[index + 1] : null;

  return (
    <React.Fragment>
      {/* Nav bar */}
      <div className="sub-bar">
        <button className="back-btn" onClick={onClose}>
          <Ico name="arrow-left" size={16} /> Back to home
        </button>
        <div style={{ fontFamily: "Patrick Hand SC", fontSize: 22, color: "var(--muted)" }} className="sub-bar-title">Brand identities</div>
        <div className="sub-nav">
          <button aria-label="Previous" disabled={index === 0} onClick={() => setIndex(index - 1)}>
            <Ico name="arrow-left" size={16} />
          </button>
          <span className="sub-idx">{String(index + 1).padStart(2, "0")} / {String((stories || []).length).padStart(2, "0")}</span>
          <button aria-label="Next" disabled={index === (stories || []).length - 1} onClick={() => setIndex(index + 1)}>
            <Ico name="arrow-right" size={16} />
          </button>
        </div>
      </div>

      {/* HERO */}
      <div style={{ padding: "clamp(40px,6vw,90px) clamp(20px,5vw,72px) 0", maxWidth: 1280, margin: "0 auto" }}>
        <div className="sp-hero-grid">
          <div className="sp-hero-text">
            <div className="bf-eyebrow">Superpower</div>
            <h1 style={{ fontFamily: "'Figtree',sans-serif", fontWeight: 800, letterSpacing: "-0.03em", fontSize: "clamp(48px,7vw,88px)", lineHeight: 0.9, margin: "0 0 20px" }}>
              Brand<br />identities.
            </h1>
            <p style={{ fontSize: "clamp(17px,1.5vw,20px)", color: "var(--ink-soft)", lineHeight: 1.55, maxWidth: 520 }}>
              Crafting and polishing visual graphic elements — the first touchpoint with a product that shapes everything people think about a brand.
            </p>
          </div>
          <div className="sp-hero-illo" style={{ borderRadius: 32, overflow: "hidden", aspectRatio: "4/3", background: "transparent", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
            <img src="assets/brand-illustration.svg" alt="Brand illustration" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          </div>
        </div>
      </div>

      {/* SECTION 1: First touchpoint */}
      <div className="bf-section bf-bg-cream" style={{ marginTop: 60 }}>
        <div className="bf-wrap">
          <div className="two-col-grid asym align-start">
            <div>
              <div className="bf-tag bf-tag-orange">First touchpoint with a product</div>
              <h2 style={{ fontFamily: "'Figtree',sans-serif", fontWeight: 800, letterSpacing: "-0.02em", fontSize: "clamp(28px,3.5vw,46px)", lineHeight: 1, margin: "0 0 20px" }}>
                More than a logo.<br />It's a feeling.
              </h2>
              <p style={{ fontSize: 17, color: "var(--ink-soft)", lineHeight: 1.65, marginBottom: 14 }}>
                A brand identity is something that reflects a brand, makes it visually distinct and recognizable, and — in combination with all its elements — communicates with people and shapes the impression of the brand itself.
              </p>
              <p style={{ fontSize: 17, color: "var(--ink-soft)", lineHeight: 1.65, marginBottom: 14 }}>
                Brand identity isn't just about the visual feel. It comes through in all the messages and values the brand puts out to people. Through those messages, people get a sense of what kind of brand it really is — relaxed, confident, luxurious, fun.
              </p>
              <p style={{ fontSize: 17, color: "var(--ink-soft)", lineHeight: 1.65 }}>
                Brand identity even comes through in how employees behave.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, paddingTop: 8 }}>
              {[
              { word: "Relaxed", color: "#7BAA84", bg: "#edf7ef" },
              { word: "Confident", color: "#0569E7", bg: "#e8f1fd" },
              { word: "Luxurious", color: "#7242D3", bg: "#f0ebfb" },
              { word: "Fun", color: "#F16040", bg: "#fef0ec" }].
              map((item, i) =>
              <div key={i} style={{
                background: item.bg, borderRadius: 16,
                padding: "18px 24px",
                display: "flex", alignItems: "center", gap: 14
              }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: item.color, flexShrink: 0 }}></div>
                  <span style={{ fontSize: 20, fontWeight: 800, color: item.color }}>{item.word}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: Consistency — dark */}
      <div className="bf-section bf-bg-dark">
        <div className="bf-wrap">
          <div className="two-col-grid">
            <div>
              <div className="bf-tag" style={{ background: "rgba(255,255,255,.1)", color: "#fff" }}>Rule #1</div>
              <h2 style={{ fontFamily: "'Figtree',sans-serif", fontWeight: 800, letterSpacing: "-0.02em", fontSize: "clamp(28px,3.5vw,52px)", lineHeight: 1, margin: "0 0 24px", color: "#fff" }}>
                Consistency goes<br />without saying.
              </h2>
              <p style={{ fontSize: 17, color: "rgba(255,255,255,.72)", lineHeight: 1.65 }}>
                The same look and feel is something that's shared across every aspect of a product. From the logo on a paper bag to the loading spinner in the app — it all has to feel like one thing.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 14 }}>
              {[
              { label: "Print", icon: "◻" },
              { label: "Digital", icon: "◎" },
              { label: "Motion", icon: "▶" },
              { label: "Environment", icon: "◈" },
              { label: "Voice & tone", icon: "◦" },
              { label: "Behaviour", icon: "▦" }].
              map((item, i) =>
              <div key={i} style={{
                background: "rgba(255,255,255,.07)", borderRadius: 14,
                padding: "20px 18px", display: "flex", flexDirection: "column", gap: 8
              }}>
                  <div style={{ fontSize: 22, color: "var(--orange)" }}>{item.icon}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>{item.label}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: Brand portfolio preview */}
      <div className="bf-section">
        <div className="bf-wrap">
          <div className="bf-tag bf-tag-blue">Some of the brands I designed</div>
          <h2 style={{ fontFamily: "'Figtree',sans-serif", fontWeight: 800, letterSpacing: "-0.02em", fontSize: "clamp(28px,3.5vw,46px)", lineHeight: 1, margin: "0 0 40px", maxWidth: 600 }}>
            Each one a different<br />world to figure out.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
            {[
            { src: "assets/brand-uranak.jpg", name: "Uranak" },
            { src: "assets/brand-serbian-week.jpg", name: "Serbian Week" },
            { src: "assets/brand-bed-beer.jpg", name: "Bed & Beer" },
            { src: "assets/brand-nef.jpg", name: "NEF" },
            { src: "assets/brand-bos.jpg", name: "BOS" }].
            map((b, i) =>
            <div key={i} style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 8px 24px -8px rgba(34,75,86,.18)", aspectRatio: "1", position: "relative" }}>
                <img src={b.src} alt={b.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                padding: "20px 14px 14px",
                background: "linear-gradient(transparent, rgba(0,0,0,.55))",
                color: "#fff", fontSize: 13, fontWeight: 700
              }}>{b.name}</div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="bf-footer-actions">
        <div className="bf-wrap" style={{ display: "flex", justifyContent: "flex-end", padding: "32px 0 60px" }}>
          {nextSpec &&
          <button className="cta" onClick={() => setIndex(index + 1)}>
              Next: {nextSpec.title ? nextSpec.title.split("\n")[0] : "Next"} <Ico name="arrow-right" size={16} />
            </button>
          }
        </div>
      </div>
    </React.Fragment>);

}

// Keep BabyFoodContent as a thin wrapper for backwards compat
function BabyFoodContent({ onClose, stories, index, setIndex }) {
  return <CaseStudyContent caseId="baby-food" onClose={onClose} stories={stories} index={index} setIndex={setIndex} />;
}

// ── CaseSubpage shell ─────────────────────────────────────────────────────────

// Maps UX_CASES index → caseId
const CASE_IDS = ["baby-food", "consultation", "realestate", "travel"];

function CaseSubpage({ open, onClose, stories, index, setIndex, accent }) {
  const scrollRef = React.useRef(null);
  const [displayIndex, setDisplayIndex] = React.useState(index);
  const [fading, setFading] = React.useState(false);

  React.useEffect(() => {
    if (open && scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [open]);

  React.useEffect(() => {
    if (!open) return;
    if (index === displayIndex) return;
    setFading(true);
    const t = setTimeout(() => {
      setDisplayIndex(index);
      if (scrollRef.current) scrollRef.current.scrollTop = 0;
      setFading(false);
    }, 220);
    return () => clearTimeout(t);
  }, [index, open]);

  React.useEffect(() => {
    if (!open) setDisplayIndex(index);
  }, [open]);

  React.useEffect(() => {
    const onKey = (e) => {
      if (!open) return;
      if (e.key === "Escape") onClose();
      if (stories && e.key === "ArrowRight" && index < stories.length - 1) setIndex(index + 1);
      if (stories && e.key === "ArrowLeft" && index > 0) setIndex(index - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, index, stories, setIndex, onClose]);

  if (!stories || !stories.length) return <div className="subpage" aria-hidden="true" />;

  const caseId = CASE_IDS[displayIndex];
  const isKnownCase = !!CASE_DATA[caseId];

  return (
    <div className={"subpage " + (open ? "open" : "")} ref={scrollRef} aria-hidden={!open}>
      <div style={{ transition: "opacity .22s ease, transform .22s ease", opacity: fading ? 0 : 1, transform: fading ? "translateY(12px)" : "translateY(0)", position: "relative", zIndex: 1 }}>
        {isKnownCase ?
        <CaseStudyContent key={caseId} caseId={caseId} onClose={onClose} stories={stories} index={displayIndex} setIndex={setIndex} /> :
        <StoryContent onClose={onClose} stories={stories} index={displayIndex} setIndex={setIndex} accent={accent} />
        }
      </div>
    </div>);

}

Object.assign(window, { CaseSubpage, BabyFoodContent, CaseStudyContent, UXSuperpowerContent, UISuperpowerContent, ProtoSuperpowerContent, BrandSuperpowerContent });