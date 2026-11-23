import Link from "next/link";
import ArrowOutwardRounded from "@mui/icons-material/ArrowOutwardRounded";
import GitHub from "@mui/icons-material/GitHub";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Vishma Ghosh, home">
        <span className="wordmark-mark">V<span>.</span></span>
        <span>Vishma Ghosh</span>
      </Link>
      <nav className="main-nav" aria-label="Main navigation">
        <Link href="/#work">Work</Link>
        <Link href="/#personal-projects">Personal</Link>
        <Link href="/#about">About</Link>
        <Link href="/#experience">Experience</Link>
        <a href="https://github.com/VishmaGhosh?tab=repositories" target="_blank" rel="noreferrer" aria-label="GitHub repositories">GitHub <GitHub fontSize="small" /></a>
        <Link href="/#contact" className="nav-contact">Let&apos;s talk <ArrowOutwardRounded fontSize="small" /></Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer section-wrap">
      <span>© 2026 Vishma Ghosh</span>
      <span>Frontend developer · Bengaluru, India</span>
      <a href="https://github.com/VishmaGhosh?tab=repositories" target="_blank" rel="noreferrer">GitHub <ArrowOutwardRounded fontSize="small" /></a>
      <Link href="/#top">BACK TO TOP ↑</Link>
    </footer>
  );
}
