import Image from "next/image";
import Link from "next/link";
import { EMAIL, GITHUB_HANDLE, GitHubIcon, MailIcon, socials } from "./socials";

const navLinks = [
  { href: "/#projects", label: "projects" },
  { href: "/#stack", label: "stack" },
  { href: "/resume.pdf", label: "resume" },
];

function Profile() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-start gap-4">
        <Link
          href="/"
          aria-label="Go home"
          className="relative h-16 w-16 flex-none overflow-hidden rounded-full bg-[#f5f5f5] shadow-[0_2px_8px_rgba(0,0,0,0.06)] ring-1 ring-[#e8e8e8] ring-offset-2 ring-offset-paper"
        >
          <Image src="/avatar.png" alt="Naiyar Hasnain" fill sizes="64px" preload unoptimized className="object-cover" />
        </Link>
        <div className="min-w-0 pt-0.5">
          <h1 className="font-serif text-[26px] leading-tight tracking-[-0.02em] text-ink">
            <Link href="/" className="transition-opacity hover:opacity-70">
              Naiyar Hasnain
            </Link>
          </h1>
          <p className="mt-1 text-[13px] leading-snug text-mute">Java Full Stack Developer</p>
        </div>
      </div>

      <p className="-mt-1 text-[14px] leading-[1.75] text-body">
        MCA student at IIT Patna, exploring tech and getting excited with AI. I build
        with Java, Spring Boot and Angular, and I like turning ideas into things that
        actually work.
      </p>

      <div className="border-t border-[#eee]" />

      <div className="space-y-2.5">
        <p className="text-[13px] text-body">
          Looking for internships &amp; opportunities.{" "}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="link-u">
            Resume
          </a>
        </p>
        <div className="flex flex-col gap-2">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
            </svg>
            View resume
          </a>
          <a href={`mailto:${EMAIL}`} className="btn-secondary">
            <MailIcon />
            Send an email
          </a>
        </div>
      </div>

      <div className="border-t border-[#eee]" />

      <div className="space-y-2.5">
        <div className="flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-40 motion-safe:animate-ping" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#16a34a]" />
          </span>
          <p className="font-serif text-[18px] italic text-ink">now.</p>
        </div>
        <div className="space-y-2 text-[13px] leading-relaxed text-body">
          <p>
            Pursuing MCA at <span className="font-medium text-ink">IIT Patna</span>
          </p>
          <p>
            Learning <span className="font-medium text-ink">Angular</span> &amp;{" "}
            <span className="font-medium text-ink">Spring AI</span>
          </p>
          <p>
            Built{" "}
            <Link href="/projects/pawbridge" className="link-u font-medium">
              PawBridge
            </Link>{" "}
            at Claude Build Day
          </p>
          <p className="text-mute">Bengaluru, India</p>
        </div>
      </div>

      <div className="border-t border-[#eee]" />

      <div className="space-y-3">
        <a
          href={`https://github.com/${GITHUB_HANDLE}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[13px] text-body transition-colors hover:text-ink [&>svg]:h-3.5 [&>svg]:w-3.5"
        >
          <GitHubIcon />@{GITHUB_HANDLE}
        </a>
        <div className="flex flex-wrap gap-2">
          {socials.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="social-btn"
              aria-label={link.label}
              title={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SectionHeading({ children }: { children: string }) {
  return (
    <div className="mb-7 flex items-end gap-4">
      <h2 className="flex-none font-serif text-[24px] italic tracking-[-0.02em] text-ink">{children}</h2>
      <span aria-hidden="true" className="mb-[11px] hidden h-px min-w-8 flex-1 bg-gradient-to-r from-[#d8d8d8] to-transparent sm:block" />
    </div>
  );
}

export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div aria-hidden="true" className="page-bg">
        <div className="grain" />
      </div>

      <main className="min-h-screen w-full px-5 sm:px-8 lg:px-10 xl:px-14">
        <div className="flex flex-col pb-24 pt-8 lg:flex-row lg:items-start lg:pt-10">
          {/* Mobile top nav */}
          <div className="sticky top-0 z-40 -mx-5 mb-5 border-b border-[#eee] bg-paper/90 px-5 py-3 backdrop-blur-md sm:-mx-8 sm:px-8 lg:hidden">
            <nav aria-label="Site" className="flex items-center gap-5">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} className="text-[14px] text-body transition-colors hover:text-ink">
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Sidebar: inline on mobile, fixed on desktop */}
          <aside className="w-full pb-10 lg:hidden">
            <Profile />
          </aside>
          <aside className="no-scrollbar hidden lg:fixed lg:bottom-8 lg:left-10 lg:top-10 lg:z-20 lg:block lg:w-[280px] lg:overflow-y-auto lg:pr-8 xl:left-14 xl:w-[300px] xl:pr-10">
            <Profile />
          </aside>
          <div aria-hidden="true" className="hidden flex-none lg:block lg:w-[280px] xl:w-[300px]" />

          {/* Content column */}
          <div className="relative min-w-0 flex-1 lg:border-x lg:border-line lg:px-10 xl:px-14">
            <nav aria-label="Site" className="mb-12 hidden items-center gap-6 lg:flex">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} className="text-[14px] text-body transition-colors hover:text-ink">
                  {l.label}
                </a>
              ))}
            </nav>
            {children}
            <footer className="mt-24 border-t border-[#eee] pt-6 text-[12px] text-mute">
              © {new Date().getFullYear()} Naiyar Hasnain · Built with Next.js
            </footer>
          </div>
        </div>
      </main>
    </>
  );
}
