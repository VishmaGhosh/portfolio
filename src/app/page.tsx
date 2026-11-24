import ArrowDownwardRounded from "@mui/icons-material/ArrowDownwardRounded";
import AutoAwesomeRounded from "@mui/icons-material/AutoAwesomeRounded";
import ArrowOutwardRounded from "@mui/icons-material/ArrowOutwardRounded";
import CodeRounded from "@mui/icons-material/CodeRounded";
import LayersRounded from "@mui/icons-material/LayersRounded";
import LinkedIn from "@mui/icons-material/LinkedIn";
import MailOutlineRounded from "@mui/icons-material/MailOutlineRounded";
import PhoneIphoneRounded from "@mui/icons-material/PhoneIphoneRounded";
import GitHub from "@mui/icons-material/GitHub";
import DownloadRounded from "@mui/icons-material/DownloadRounded";
import BoltRounded from "@mui/icons-material/BoltRounded";
import SearchRounded from "@mui/icons-material/SearchRounded";
import DevicesRounded from "@mui/icons-material/DevicesRounded";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

const projects = [
  {
    number: "01",
    name: "HipHopGrails",
    category: "Culture · Auctions · Marketplace",
    description:
      "I helped move the auction experience to Next.js SSR, build responsive auction and collection interfaces, and bring more consistency to the UI system.",
    stack: ["Next.js", "React", "Redux Toolkit", "Tailwind CSS", "MUI"],
    href: "/work/hiphopgrails",
    visual: "grails",
    note: "Frontend development · eOrigami Software",
  },
  {
    number: "02",
    name: "beRides",
    category: "Automotive · Commerce · Community",
    description:
      "A connected platform with three surfaces: a customer-facing marketplace, an operations admin, and a studio for creating and publishing content and products.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Azure", "Algolia"],
    href: "/work/berides",
    visual: "berides",
    note: "Frontend development · Main Site, Admin & Studio",
  },
  {
    number: "03",
    name: "OnlyDrops",
    category: "Shoppable video · Creator tools",
    description:
      "Frontend work across a shoppable video feed, creator and brand profiles, product tagging, and dashboard tools for managing videos.",
    stack: ["React", "Redux", "Tailwind CSS", "Material UI"],
    href: "/work/onlydrops",
    visual: "drops",
    note: "Frontend development · eOrigami Software",
  },
  {
    number: "04",
    name: "Affiliate Marketing",
    category: "Affiliate marketing · Product discovery",
    description:
      "A product discovery experience connecting useful content and promoted products with clear paths to retailer destinations.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    href: "/work/affiliate-marketing",
    visual: "affiliate",
    note: "Frontend development · eOrigami Software",
  },
];

const capabilities = [
  ["01", "React & Next.js", "Responsive product interfaces built with reusable components."],
  ["02", "Rendering & speed", "SSR, SEO, and focused performance improvements for real pages."],
  ["03", "State & APIs", "Redux Toolkit, REST integrations, and reliable user flows."],
];

const skillHighlights = [
  { label: "React & Next.js", detail: "Product UI and server rendering", icon: <CodeRounded /> },
  { label: "Responsive UI", detail: "Mobile-first, accessible layouts", icon: <DevicesRounded /> },
  { label: "Performance & SEO", detail: "Fast pages built to be discoverable", icon: <BoltRounded /> },
  { label: "Product discovery", detail: "Clear browsing and conversion flows", icon: <SearchRounded /> },
];

const skillTags = ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Material UI", "Redux Toolkit", "REST APIs", "Node.js", "Firebase", "HTML", "CSS"];

const personalProjects = [
  { slug: "live-store", name: "24x7 Live Store", description: "An authenticated e-commerce storefront with product browsing and shopping flows, built with React, Redux, and Hooks.", stack: ["React", "Redux", "React Hooks"], link: "https://e-commerce-12bd0.web.app/login" },
  { slug: "daily-task-manager", name: "Daily Task Manager", description: "A task management app with protected routes and persistent sessions, using a responsive Next.js interface.", stack: ["Next.js", "Tailwind CSS", "Aceternity UI"] },
  { slug: "music-library", name: "Music Library", description: "A responsive music browsing experience with reusable, dynamic page components.", stack: ["Next.js", "Tailwind CSS", "Aceternity UI"] },
  { slug: "expense-tracker", name: "Expense Tracker", description: "A personal finance app that reads and writes expense data through Firebase-backed API flows.", stack: ["React", "Redux", "Firebase"] },
  { slug: "mail-box", name: "Mail-Box", description: "An email client interface focused on authenticated access and clear message browsing.", stack: ["React", "Redux"] },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero section-wrap" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> FRONTEND DEVELOPER · BENGALURU, INDIA</p>
          <h1>Frontend craft.<br /><span>Thoughtful by</span> design.</h1>
          <p className="hero-intro">
            I&apos;m Vishma Ghosh, a frontend developer with 4+ years of experience building responsive web products with React, Next.js, and TypeScript.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore my work <ArrowOutwardRounded fontSize="small" /></a>
            <a className="text-link" href="#about">A little about me <ArrowDownwardRounded fontSize="small" /></a>
            <a className="text-link resume-link" href="/resume.pdf" download="Vishma-Ghosh-Resume.pdf"><DownloadRounded fontSize="small" /> Download resume</a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="hero-art-core"><CodeRounded /><span>Ideas<br />into impact</span></div>
          <div className="hero-chip chip-top"><span className="chip-icon"><LayersRounded /></span><span>Thoughtful<br />by design</span></div>
          <div className="hero-chip chip-bottom"><span className="chip-pulse" /> Built for the real world</div>
          <span className="hero-art-caption">DESIGN · ENGINEERING · EXPERIENCE</span>
        </div>
        <a href="#work" className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDownwardRounded fontSize="small" /></a>
      </section>

      <section className="work-section section-wrap" id="work">
        <div className="section-heading">
          <div><p className="eyebrow">/// SELECTED WORK</p><h2>Built with purpose.</h2></div>
          <p className="section-aside">A few platforms and products I&apos;ve had the chance to contribute to.</p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <Link className={`project-visual ${project.visual}`} href={project.href} aria-label={`View the ${project.name} case study`}>
                <div className="visual-grid" />
                {project.visual === "affiliate" ? (
                  <div className="affiliate-preview">
                    <div className="affiliate-top"><span>FINDS / EDIT</span><span>CURATED FOR YOU</span></div>
                    <div className="affiliate-products"><i /><i /><i /></div>
                    <div className="affiliate-bottom"><span>GOOD FINDS.<br />CLEAR PICKS.</span><span>EXPLORE / 04</span></div>
                  </div>
                ) : project.visual === "grails" ? (
                  <div className="auction-preview">
                    <div className="preview-top"><span>HG / LOT 028</span><span>LIVE AUCTION</span></div>
                    <div className="preview-object"><span className="record-disc" /><span className="record-label">HG</span></div>
                    <div className="preview-bottom"><span>HIP-HOP<br />HISTORY.</span><span className="preview-arrow"><ArrowOutwardRounded /></span></div>
                  </div>
                ) : project.visual === "berides" ? <div className="garage-preview">
                    <span className="garage-label">be / RIDES</span>
                    <div className="car-shape"><span /><i /><b /></div>
                    <div className="garage-caption"><span>BUILT DIFFERENT.</span><span>DISCOVER YOUR NEXT RIDE ↗</span></div>
                  </div> : <div className="drops-preview">
                    <div className="drops-top"><span>ONLY / DROPS</span><span>FOR YOU · 08</span></div>
                    <div className="drops-play"><span /></div>
                    <div className="drops-bottom"><span>WATCH IT.<br />WANT IT.</span><span>SHOP THE MOMENT ↗</span></div>
                  </div>}
                <span className="visual-open"><ArrowOutwardRounded /></span>
              </Link>
              <div className="project-info">
                <div className="project-index"><span>{project.number}</span><span className="project-category">{project.category}</span></div>
                <div className="project-title-row"><h3>{project.name}</h3><Link href={project.href} aria-label={`Read the ${project.name} case study`}><ArrowOutwardRounded /></Link></div>
                <p className="project-description">{project.description}</p>
                <div className="tag-row">{project.stack.map((item) => <span className="tech-tag" key={item}>{item}</span>)}</div>
                <p className="source-note">{project.note}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="redclub-note"><span className="redclub-mark">05</span><p><strong>Redclub</strong><span>Project details will be added when ready.</span></p><span className="soon-label">DETAILS TO FOLLOW</span></div>
      </section>

      <section className="personal-section section-wrap" id="personal-projects">
        <div className="section-heading">
          <div><p className="eyebrow">/// PERSONAL PROJECTS</p><h2>Things I build<br />to keep learning.</h2></div>
          <a className="text-link github-link" href="https://github.com/VishmaGhosh?tab=repositories" target="_blank" rel="noreferrer"><GitHub /> Browse all repositories <ArrowOutwardRounded /></a>
        </div>
        <div className="personal-grid">{personalProjects.map((project, index) => <article className="personal-card" key={project.slug}>
          <span className="personal-index">0{index + 1} / PERSONAL BUILD</span><h3>{project.name}</h3><p>{project.description}</p>
          <div className="tag-row">{project.stack.map((item) => <span className="tech-tag" key={item}>{item}</span>)}</div>
          <div className="personal-card-links"><Link href={`/work/${project.slug}`}>Project details <ArrowOutwardRounded /></Link>{project.link && <a href={project.link} target="_blank" rel="noreferrer">Live app <ArrowOutwardRounded /></a>}</div>
        </article>)}</div>
      </section>

      <section className="ai-section section-wrap" id="ai-workflow">
        <div className="ai-copy"><p className="eyebrow">/// AI-AUGMENTED WORKFLOW</p><h2>AI speeds up<br /><span>the exploration.</span></h2><p>I use coding assistants to explore approaches, scaffold repetitive work, and support refactoring and documentation. I review suggestions, validate behavior, and take responsibility for the shipped code.</p></div>
        <div className="ai-tools">{["OpenAI Codex", "Cursor AI", "Claude Code"].map((tool, i) => <div className="ai-tool" key={tool}><span>0{i + 1}</span><strong>{tool}</strong><AutoAwesomeRounded /></div>)}</div>
      </section>

      <section className="about-section section-wrap" id="about">
        <div className="section-heading">
          <div><p className="eyebrow">/// ABOUT ME</p><h2>Making the web<br />work better.</h2></div>
          <p className="section-aside about-aside">I build performant, scalable web applications and own features end to end — from API integration and state management to responsive UI polish. I enjoy collaborating closely with backend engineers and designers to ship useful work on schedule.</p>
        </div>
        <div className="capability-grid">
          {capabilities.map(([number, title, description]) => (
            <article className="capability" key={number}>
              <span className="capability-number">{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="capability-rule" />
            </article>
          ))}
        </div>
      </section>

      <section className="experience-section section-wrap" id="experience">
        <div className="section-heading">
          <div><p className="eyebrow">/// EXPERIENCE &amp; EDUCATION</p><h2>Built through<br />real product work.</h2></div>
          <p className="section-aside">Frontend engineering across e-commerce, affiliate marketing, auctions, and shoppable video.</p>
        </div>
        <div className="experience-grid">
          <article className="experience-card">
            <p className="eyebrow">JUN 2022 — AUG 2026</p>
            <h3>Software Engineer <span>(Frontend)</span></h3>
            <p className="experience-company">eOrigami Software Private Ltd.</p>
            <p className="experience-copy">Built mobile-first product interfaces, reusable UI components, state management, REST integrations, and SSR-backed pages across customer and creator products.</p>
            <div className="tag-row"><span className="tech-tag">React</span><span className="tech-tag">Next.js</span><span className="tech-tag">TypeScript</span><span className="tech-tag">Redux Toolkit</span></div>
          </article>
          <article className="experience-card education-card">
            <p className="eyebrow">EDUCATION</p>
            <h3>B.Tech, Computer Science &amp; Engineering</h3>
            <p className="experience-company">IMPS College of Engineering and Technology · 2019–2022</p>
            <div className="education-divider" />
            <h3>Diploma, Computer Science &amp; Engineering</h3>
            <p className="experience-company">GKCIET, Malda · 2016–2019</p>
          </article>
        </div>
        <div className="skills-showcase" aria-labelledby="skills-title">
          <div className="skills-showcase-heading"><div><p className="eyebrow">/// CORE TOOLKIT</p><h3 id="skills-title">Skills I bring to the build.</h3></div><span>DESIGN · ENGINEERING · DELIVERY</span></div>
          <div className="skill-highlight-grid">{skillHighlights.map((skill) => <article className="skill-highlight" key={skill.label}><span className="skill-icon">{skill.icon}</span><div><h4>{skill.label}</h4><p>{skill.detail}</p></div><ArrowOutwardRounded className="skill-arrow" /></article>)}</div>
          <div className="skill-tag-row" aria-label="Additional skills">{skillTags.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}</div>
        </div>
      </section>

      <section className="contact-section section-wrap" id="contact">
        <p className="eyebrow">/// HAVE SOMETHING IN MIND?</p>
        <div className="contact-row"><h2>Let&apos;s make<br /><span>it matter.</span></h2><a className="contact-button" href="mailto:vish26196@gmail.com">Email me <ArrowOutwardRounded /></a></div>
        <div className="contact-links">
          <a href="mailto:vish26196@gmail.com"><MailOutlineRounded /> vish26196@gmail.com</a>
          <a href="tel:9046305900"><PhoneIphoneRounded /> 9046305900</a>
          <a href="https://www.linkedin.com/in/vishma-ghosh" target="_blank" rel="noreferrer"><LinkedIn /> LinkedIn <ArrowOutwardRounded /></a>
          <a href="https://github.com/VishmaGhosh?tab=repositories" target="_blank" rel="noreferrer"><GitHub /> GitHub <ArrowOutwardRounded /></a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
