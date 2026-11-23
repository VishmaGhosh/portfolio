import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AccountTreeRounded from "@mui/icons-material/AccountTreeRounded";
import ArrowBackRounded from "@mui/icons-material/ArrowBackRounded";
import ArrowOutwardRounded from "@mui/icons-material/ArrowOutwardRounded";
import AutoAwesomeRounded from "@mui/icons-material/AutoAwesomeRounded";
import Inventory2Rounded from "@mui/icons-material/Inventory2Rounded";
import PeopleAltRounded from "@mui/icons-material/PeopleAltRounded";
import StorefrontRounded from "@mui/icons-material/StorefrontRounded";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

type Surface = {
  name: string;
  label: string;
  description: string;
  details: string[];
  icon: "store" | "admin" | "studio";
};

type Project = {
  number: string;
  name: string;
  category: string;
  headline: string;
  overview: string;
  contribution: string;
  impact: string;
  stack: string[];
  focus: string[];
  surfaces?: Surface[];
  productUrl?: string;
  companyUrl?: string;
  personal?: boolean;
  liveUrl?: string;
  visual: "grails" | "berides" | "drops" | "personal";
};

const projects: Record<string, Project> = {
  hiphopgrails: {
    number: "01",
    name: "HipHopGrails",
    category: "Culture / Auctions / Marketplace",
    headline: "A premium auction experience for hip-hop culture.",
    overview:
      "HipHopGrails brings collectible music memorabilia and artist drops into a dedicated auction marketplace. The product brings together auction listings, collections, editorial content, and account workflows for buyers and sellers.",
    contribution:
      "I developed responsive auction, collection, and article interfaces; migrated the frontend from client-side React rendering to Next.js server-side rendering; and modernized the UI system with Tailwind CSS and Material UI. I also integrated REST data for lots, auctions, collections, and user information, and contributed to role-protected admin screens.",
    impact:
      "The work moved key pages onto server rendering for stronger initial delivery and search visibility, while reusable interface patterns brought more consistency to the marketplace experience. The frontend connected public discovery flows with the account and admin tools used to operate auctions.",
    stack: ["React", "Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Material UI", "REST APIs"],
    focus: ["SSR migration", "Auction listings", "Collections", "Reusable UI", "Admin RBAC", "API integration"],
    productUrl: "https://hiphopgrails.com",
    companyUrl: "https://www.origami.dev/work/hiphopgrails",
    visual: "grails",
  },
  berides: {
    number: "02",
    name: "beRides",
    category: "Automotive / Commerce / Community",
    headline: "One connected home for vehicles, parts, creators, and car culture.",
    overview:
      "beRides is a marketplace and community platform for motor enthusiasts. It brings vehicle and parts discovery together with builds, content, professional services, and community spaces. The product is made up of three connected surfaces: a public Main Site, an Admin workspace, and beRides Studio.",
    contribution:
      "My work on beRides spans the frontend experience across these three product surfaces. The Main Site helps enthusiasts discover vehicles, parts, builds, and community content. Admin gives the team a place to manage content, profiles, transactions, and orders. Studio supports creating content for a specific user and publishing content and product information, including vehicles and parts.",
    impact:
      "Together, the three surfaces connect discovery, day-to-day operations, and publishing in one product. Users can find vehicles, parts, builds, and stories; the internal team can manage the platform; and creators can prepare and publish content and catalog items for their audience.",
    stack: ["Next.js 14", "React", "Node.js", "PostgreSQL", "Azure Blob Storage", "Stripe", "Algolia"],
    focus: ["Marketplace", "Product catalog", "Content publishing", "Admin operations", "Responsive UI", "Role-based access"],
    surfaces: [
      {
        name: "Main Site",
        label: "01 / DISCOVER",
        icon: "store",
        description:
          "The public-facing experience for enthusiasts to discover the vehicles, parts, and culture around their next build.",
        details: [
          "Vehicle and parts listings with product details",
          "Build journals and editorial stories",
          "Creator content, including short-form video",
          "Professional services and community destinations",
        ],
      },
      {
        name: "Admin",
        label: "02 / OPERATE",
        icon: "admin",
        description:
          "An operational workspace for managing the people, content, and commerce activity behind the marketplace.",
        details: [
          "Manage platform content and product information",
          "Review and maintain user profiles",
          "Manage transactions and orders",
          "Support consistent platform operations across product areas",
        ],
      },
      {
        name: "beRides Studio",
        label: "03 / CREATE & PUBLISH",
        icon: "studio",
        description:
          "A creator workspace for preparing content for a specific user and publishing it into the beRides ecosystem.",
        details: [
          "Create and publish user-specific content",
          "Prepare editorial content such as articles and stories",
          "Create or update vehicle and parts product content",
          "Connect publishing with the public discovery experience",
        ],
      },
    ],
    productUrl: "https://betademo.berides.com",
    companyUrl: "https://www.origami.dev/work/berides",
    visual: "berides",
  },
  onlydrops: {
    number: "03",
    name: "OnlyDrops",
    category: "Shoppable Video / Creator Tools",
    headline: "Turning video discovery into a direct path to products.",
    overview:
      "OnlyDrops is a shoppable video and creator platform. It brings a video feed, creator and brand profiles, and product discovery together so viewers can move from watching content to exploring the products featured in it.",
    contribution:
      "I built frontend interfaces for the shoppable video feed, creator and brand profiles, and tap-to-shop product flows. I also worked on creator and admin dashboard screens for uploading and managing videos and tagging products, using Redux to keep feed and dashboard state consistent.",
    impact:
      "Reusable responsive components supported both the public-facing experience and the creator dashboard. Product tagging connected video content with the items viewers could explore, while shared state patterns kept key interactions consistent across the app.",
    stack: ["React", "Redux", "Tailwind CSS", "Material UI"],
    focus: ["Shoppable video feed", "Creator profiles", "Product tagging", "Creator dashboard", "Responsive UI", "Redux state"],
    visual: "drops",
  },
  "live-store": {
    number: "P1", name: "24x7 Live Store", category: "Personal / E-commerce",
    headline: "A storefront built around a clear shopping journey.",
    overview: "A personal e-commerce project exploring product discovery, sign-in, and the core storefront experience with a React-based interface.",
    contribution: "Built the storefront UI with React components and Hooks, and used Redux to manage shared application state. The project includes authentication and a live demo for exploring the current experience.",
    impact: "This project gave me hands-on practice connecting common commerce flows with frontend state and authentication. It is a focused demonstration of the fundamentals behind a useful storefront.",
    stack: ["React", "Redux", "React Hooks"], focus: ["E-commerce UI", "Authentication", "State management", "Product browsing"],
    liveUrl: "https://e-commerce-12bd0.web.app/login", personal: true, visual: "personal",
  },
  "daily-task-manager": {
    number: "P2", name: "Daily Task Manager", category: "Personal / Productivity",
    headline: "A focused space for keeping daily work in motion.",
    overview: "A task management application built to explore protected navigation, persistent sessions, and a responsive Next.js experience.",
    contribution: "Created the app structure with Next.js and Tailwind CSS, including protected routes and session persistence. Aceternity UI components informed the visual system.",
    impact: "The project explores the application structure and interaction patterns needed for a personal productivity tool, with responsive layouts and guarded routes as its core concerns.",
    stack: ["Next.js", "Tailwind CSS", "Aceternity UI"], focus: ["Protected routes", "Persistent sessions", "Responsive UI", "App routing"], personal: true, visual: "personal",
  },
  "music-library": {
    number: "P3", name: "Music Library", category: "Personal / Media",
    headline: "A responsive way to browse a music collection.",
    overview: "A music browsing experience built with Next.js and reusable dynamic components, designed to adapt across screen sizes.",
    contribution: "Built responsive views and dynamic components with Next.js and Tailwind CSS, using Aceternity UI as a visual reference.",
    impact: "The work strengthened my practice in reusable page composition and responsive browsing patterns for content-led products.",
    stack: ["Next.js", "Tailwind CSS", "Aceternity UI"], focus: ["Music browsing", "Dynamic components", "Responsive layout"], personal: true, visual: "personal",
  },
  "expense-tracker": {
    number: "P4", name: "Expense Tracker", category: "Personal / Finance",
    headline: "A simple interface for tracking everyday expenses.",
    overview: "A personal finance project exploring expense data retrieval and submission with Firebase-backed services.",
    contribution: "Built the React interface and used Redux for shared state while connecting GET and POST data flows with Firebase.",
    impact: "This project demonstrates practical API interaction patterns for reading and saving user-entered expense data.",
    stack: ["React", "Redux", "Firebase"], focus: ["Expense records", "GET / POST flows", "State management"], personal: true, visual: "personal",
  },
  "mail-box": {
    number: "P5", name: "Mail-Box", category: "Personal / Communication",
    headline: "An email client interface centered on clear message browsing.",
    overview: "A personal project exploring the core interface of an email client, including authentication and message-oriented navigation.",
    contribution: "Built the React interface and used Redux to manage application state across the authenticated mail experience.",
    impact: "The project focuses on organizing a familiar communication workflow into an accessible, component-based UI.",
    stack: ["React", "Redux"], focus: ["Email client UI", "Authentication", "State management"], personal: true, visual: "personal",
  },
};

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) return {};
  return {
    title: `${project.name} — Project Case Study`,
    description: `${project.headline} Read about Vishma Ghosh's frontend contribution, project scope, and technology stack.`,
    openGraph: {
      title: `${project.name} — Vishma Ghosh`,
      description: project.headline,
      type: "article",
    },
  };
}

function SurfaceIcon({ icon }: { icon: Surface["icon"] }) {
  if (icon === "store") return <StorefrontRounded />;
  if (icon === "admin") return <PeopleAltRounded />;
  return <AutoAwesomeRounded />;
}

function ProjectArtwork({ visual, name }: { visual: Project["visual"]; name: string }) {
  return (
    <div className={`case-art case-art-${visual}`} aria-label={`${name} abstract project artwork`} role="img">
      <div className="case-art-grid" />
      {visual === "berides" ? (
        <div className="case-art-mock berides-mock">
          <div className="case-mock-bar"><span>be / RIDES</span><span>DISCOVER · BUILD · BELONG</span></div>
          <div className="case-mock-car"><span /><i /><b /></div>
          <div className="case-mock-bottom"><span>YOUR NEXT BUILD STARTS HERE</span><span>EXPLORE RIDES ↗</span></div>
        </div>
      ) : visual === "grails" ? (
        <div className="case-art-mock grails-mock">
          <div className="case-mock-bar"><span>HIPHOPGRAILS</span><span>CURATED CULTURE</span></div>
          <div className="case-record"><span>HG</span></div>
          <div className="case-mock-bottom"><span>RARE FINDS.<br />REAL HISTORY.</span><span>VIEW LOTS ↗</span></div>
        </div>
      ) : visual === "drops" ? (
        <div className="case-art-mock drops-mock">
          <div className="case-mock-bar"><span>ONLY / DROPS</span><span>WATCH · DISCOVER · SHOP</span></div>
          <div className="case-video-frame"><span /></div>
          <div className="case-mock-bottom"><span>THE DROP IS<br />IN THE DETAILS.</span><span>SHOP THE MOMENT ↗</span></div>
        </div>
      ) : (
        <div className="case-art-mock personal-mock"><div className="case-mock-bar"><span>{name.toUpperCase()}</span><span>PERSONAL BUILD</span></div><div className="personal-art-mark">V<span>.</span></div><div className="case-mock-bottom"><span>BUILT TO LEARN.<br />MADE TO WORK.</span><span>PROJECT VISUAL</span></div></div>
      )}
      <span className="case-art-caption">PROJECT VISUAL · IMAGE PLACEHOLDER</span>
    </div>
  );
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) notFound();

  const related = Object.entries(projects).filter(([relatedSlug]) => relatedSlug !== slug);

  return (
    <main className="case-page">
      <SiteHeader />
      <div className="case-wrap">
        <div className="case-back-row">
          <Link href="/#work" className="case-back"><ArrowBackRounded /> All projects</Link>
          <span className="case-index">CASE STUDY / {project.number}</span>
        </div>

        <header className="case-hero">
          <p className="eyebrow">{project.category}</p>
          <h1>{project.name}</h1>
          <p className="case-headline">{project.headline}</p>
          <p className="case-intro">{project.overview}</p>
          <div className="case-actions">
            {project.productUrl || project.liveUrl ? <a className="button button-primary" href={project.productUrl || project.liveUrl} target="_blank" rel="noreferrer">Visit project <ArrowOutwardRounded fontSize="small" /></a> : null}
            {project.companyUrl ? <a className="text-link" href={project.companyUrl} target="_blank" rel="noreferrer">Company case study <ArrowOutwardRounded fontSize="small" /></a> : null}
          </div>
        </header>

        <ProjectArtwork visual={project.visual} name={project.name} />

        <section className="case-snapshot" aria-label="Project overview">
          <div><span>MY ROLE</span><strong>Frontend Developer</strong></div>
          <div><span>{project.personal ? "CONTEXT" : "COMPANY"}</span><strong>{project.personal ? "Personal project" : "eOrigami Software"}</strong></div>
          <div><span>PROJECT TYPE</span><strong>{project.category.replaceAll(" / ", " · ")}</strong></div>
          <div><span>PLATFORM</span><strong>Responsive web product</strong></div>
        </section>

        {project.surfaces ? (
          <section className="case-section case-surfaces">
            <div className="case-section-heading">
              <p className="eyebrow">/// THREE CONNECTED SURFACES</p>
              <h2>One platform.<br /><span>Three ways in.</span></h2>
              <p>Each surface has a different audience and job. Together, they make the marketplace easier to discover, manage, and grow.</p>
            </div>
            <div className="surface-grid">
              {project.surfaces.map((surface) => (
                <article className="surface-card" key={surface.name}>
                  <div className="surface-card-top"><span>{surface.label}</span><SurfaceIcon icon={surface.icon} /></div>
                  <h3>{surface.name}</h3>
                  <p>{surface.description}</p>
                  <ul>{surface.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        <section className="case-section case-contribution">
          <div className="case-section-heading">
            <p className="eyebrow">/// MY CONTRIBUTION</p>
            {project.personal ? <h2>Building useful<br /><span>everyday experiences.</span></h2> : <h2>Turning product needs<br /><span>into usable interfaces.</span></h2>}
          </div>
          <div className="case-contribution-copy">
            <p>{project.contribution}</p>
            <div className="focus-list"><span className="focus-title"><AccountTreeRounded /> AREAS OF FOCUS</span>{project.focus.map((focus) => <span className="focus-chip" key={focus}>{focus}</span>)}</div>
          </div>
        </section>

        <section className="case-impact">
          <div className="impact-icon"><Inventory2Rounded /></div>
          <div><p className="eyebrow">/// {project.personal ? "PROJECT LEARNINGS" : "PRODUCT IMPACT"}</p><h2>{project.personal ? <>Focused on practical<br />product fundamentals.</> : <>Designed to work<br />as one system.</>}</h2><p>{project.impact}</p></div>
        </section>

        <section className="case-ai-section">
          <div><p className="eyebrow">/// AI-ASSISTED ENGINEERING</p><h2>Modern tools.<br /><span>Developer-owned work.</span></h2></div>
          <div><p>My development toolkit includes Codex, Cursor AI, and Claude Code for exploring implementation options, accelerating repetitive work, and supporting refactors. I review the output, verify behavior, and own the final implementation. These are engineering tools, not AI features presented as part of this product.</p><div className="case-ai-tools">{["Codex", "Cursor AI", "Claude Code"].map((tool) => <span className="case-stack-chip" key={tool}>{tool}</span>)}</div></div>
        </section>

        <section className="case-stack-section">
          <div><p className="eyebrow">/// TECHNOLOGY</p><h2>The tools behind it.</h2></div>
          <div className="case-stack">{project.stack.map((tech) => <span className="case-stack-chip" key={tech}>{tech}</span>)}</div>
        </section>

        <nav className="case-related" aria-label="Other project case studies">
          <div><p className="eyebrow">/// KEEP EXPLORING</p><h2>More selected work.</h2></div>
          <div className="related-links">{related.map(([relatedSlug, relatedProject]) => <Link href={`/work/${relatedSlug}`} key={relatedSlug}><span>{relatedProject.number}</span>{relatedProject.name}<ArrowOutwardRounded /></Link>)}</div>
        </nav>

        <section className="case-contact"><p className="eyebrow">/// LET&apos;S CONNECT</p><h2>Have a product to build?</h2><a href="mailto:vish26196@gmail.com">Get in touch <ArrowOutwardRounded /></a></section>
      </div>
      <SiteFooter />
    </main>
  );
}
