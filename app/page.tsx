"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

/* ── Data ──────────────────────────────────────────────────── */

const socials = [
  {
    href: "https://github.com/iamnaiyarhasnain",
    label: "GitHub",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.09.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.607.069-.607 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
  {
    href: "https://linkedin.com/in/naiyarhasnain",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: "https://x.com/iammdmasroor",
    label: "X",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    href: "https://peerlist.io/naiyarhasnain",
    label: "Peerlist",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.206 2h6.044a5.75 5.75 0 0 1 0 11.5H8.206v4.25a4.25 4.25 0 0 1-2 3.596V2Zm2 2v7.5h4.044a3.75 3.75 0 1 0 0-7.5H8.206Z" />
      </svg>
    ),
  },
  {
    href: "https://leetcode.com/u/iamnaiyarhasnain/",
    label: "LeetCode",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l.602.478a1.38 1.38 0 0 0 1.752-2.13l-.602-.479a4.975 4.975 0 0 0-.925-.563 5.597 5.597 0 0 0-3.808-.378L13.483 0zM19.85 15.473c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-1.39 1.386H7.108a1.378 1.378 0 1 0 0 2.756h9.404l1.338-1.336v.001l2-.849z" />
      </svg>
    ),
  },
];

const projects = [
  {
    title: "This Portfolio",
    description:
      "Handcrafted with Next.js. Warm paper textures, ink-wash borders, and scroll-driven reveals. No templates.",
    tags: ["Next.js", "CSS", "TypeScript"],
  },
  {
    title: "Java & Spring APIs",
    description:
      "First real backend work — REST APIs, authentication flows, and database layers. Learning how systems fit together.",
    tags: ["Java", "Spring Boot", "REST"],
  },
  {
    title: "The Web",
    description:
      "HTML, CSS, forms, layouts — the boring parts that make everything else possible. Obsessing over the details.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

const education = [
  {
    title: "MCA",
    place: "IIT Patna",
    detail: "Master of Computer Applications",
  },
  {
    title: "Web Development",
    place: "Rohit Negi",
    detail: "Full-stack web fundamentals",
  },
  {
    title: "Java Programming",
    place: "Infosys Springboard",
    detail: "Core Java & enterprise patterns",
  },
];

const certificates = [
  {
    title: "AI / ML Fundamentals",
    place: "AWS",
    href: "https://www.linkedin.com/posts/naiyarhasnain_aws-aiml-artificialintelligence-activity-7476859074207211521-dpJy",
  },
  {
    title: "Java Programming",
    place: "Infosys Springboard",
    href: "https://www.linkedin.com/posts/naiyarhasnain_java-infosysspringboard-certification-activity-7450072377524248577-WYYr",
  },
  {
    title: "Python Coder",
    place: "Kaggle",
    href: "https://www.kaggle.com/certification/badges/naiyarhasnain/30",
  },
  {
    title: "AI Essentials",
    place: "Google",
    href: "https://www.coursera.org/account/accomplishments/specialization/YQY66QLOLPQR",
  },
];

const skills = [
  "Java",
  "Spring Boot",
  "Python",
  "TypeScript",
  "Next.js",
  "React",
  "HTML & CSS",
  "SQL",
  "Git",
  "REST APIs",
  "AI / ML",
  "DSA",
];

/* ── Section Heading Component ─────────────────────────────── */

function SectionHeading({ children }: { children: string }) {
  return <h2 className="section-heading">{children}</h2>;
}

/* ── Page ──────────────────────────────────────────────────── */

export default function Home() {
  const revealRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function addRevealRef(el: HTMLElement | null) {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  }

  return (
    <main className="px-6 py-16 sm:px-10 sm:py-24">
      <div className="mx-auto w-full max-w-2xl">
        {/* ── Hero ──────────────────────────────────────── */}
        <header className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:gap-10">
          <div className="avatar-ring anim-scale-in shrink-0">
            <Image
              src="/avatar.png"
              alt="Naiyar Hasnain"
              width={112}
              height={112}
              preload
              className="rounded-full object-cover"
              style={{ width: 112, height: 112 }}
            />
          </div>

          <div className="min-w-0">
            <h1 className="anim-fade-up font-serif text-[2.75rem] leading-[1.05] tracking-tight text-ink sm:text-5xl">
              Naiyar Hasnain
            </h1>

            <div className="anim-fade-up delay-2 mt-3 flex items-center gap-2 text-sm text-mute">
              <svg
                className="h-3.5 w-3.5 opacity-50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Bengaluru, India
            </div>

            <div className="anim-fade-up delay-3 mt-3 inline-flex items-center gap-2 rounded-full border border-ink/8 bg-wash/60 px-3 py-1.5 text-xs tracking-wide text-mute">
              <span
                className="inline-block h-1.5 w-1.5 rounded-full bg-green-500"
                style={{ animation: "dotPulse 2s ease-in-out infinite" }}
              />
              MCA @ IIT Patna · Building with Java & Spring
            </div>
          </div>
        </header>

        {/* ── About ─────────────────────────────────────── */}
        <section className="anim-fade-up delay-4 mt-14">
          <p className="font-serif text-[1.65rem] leading-snug tracking-tight text-ink">
            Exploring <em className="italic">tech</em> and exciting with <em className="italic">AI</em>.
          </p>
          <p className="mt-5 text-[15px] leading-7 text-mute">
            These days I&apos;m at IIT Patna, working through Java, Spring, and
            the fundamentals of the web. I believe in learning by building —
            every project is a chance to understand something a little deeper.
            Still early in the journey, still figuring it out, and that&apos;s
            exactly where I want to be.
          </p>
        </section>

        {/* ── Projects ──────────────────────────────────── */}
        <section ref={addRevealRef} className="reveal mt-20">
          <SectionHeading>Projects</SectionHeading>
          <div className="mt-8 grid gap-4">
            {projects.map((item, i) => (
              <div
                key={item.title}
                className="ink-card"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <p className="text-[15px] font-medium text-ink">
                  {item.title}
                </p>
                <p className="mt-2 text-[14px] leading-relaxed text-mute">
                  {item.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-ink/[0.04] px-2 py-0.5 font-mono text-[11px] text-mute"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Skills ────────────────────────────────────── */}
        <section ref={addRevealRef} className="reveal mt-20">
          <SectionHeading>Skills & Tools</SectionHeading>
          <div className="mt-8 flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <span
                key={skill}
                className="skill-tag"
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* ── Education (Timeline) ──────────────────────── */}
        <section ref={addRevealRef} className="reveal mt-20">
          <SectionHeading>Education</SectionHeading>
          <div className="relative mt-8 ml-1">
            <div className="timeline-line" />
            <ul className="space-y-8 pl-8">
              {education.map((item) => (
                <li key={item.title} className="relative">
                  <div className="timeline-dot" />
                  <p className="text-[15px] font-medium text-ink">
                    {item.title}
                  </p>
                  <p className="mt-0.5 text-sm text-accent">{item.place}</p>
                  <p className="mt-1 text-[13px] text-mute">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Certificates ──────────────────────────────── */}
        <section ref={addRevealRef} className="reveal mt-20">
          <SectionHeading>Certificates</SectionHeading>
          <ul className="mt-8 divide-y divide-ink/8">
            {certificates.map((item) => (
              <li key={item.title} className="py-4 first:pt-0">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-link"
                >
                  <div>
                    <span className="text-[15px]">{item.title}</span>
                    <span className="ml-2 text-sm text-mute">
                      {item.place}
                    </span>
                  </div>
                  <span className="arrow">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Socials ───────────────────────────────────── */}
        <nav
          ref={addRevealRef}
          aria-label="Social links"
          className="reveal mt-20"
        >
          <SectionHeading>Connect</SectionHeading>
          <div className="mt-8 flex flex-wrap gap-3">
            {socials.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                {link.icon}
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        {/* ── Footer ────────────────────────────────────── */}
        <footer ref={addRevealRef} className="reveal mt-24">
          <div className="footer-divider" />
          <div className="mt-6 text-xs text-mute">
            <p>
              © {new Date().getFullYear()} Naiyar Hasnain
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
