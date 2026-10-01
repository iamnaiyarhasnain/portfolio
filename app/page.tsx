import Image from "next/image";
import Link from "next/link";
import Shell, { SectionHeading } from "./components/shell";
import { ArrowUpRight, GitHubIcon } from "./components/socials";

/* ── Data ──────────────────────────────────────────────────── */

const RESQ_LIVE = "https://main.d1vtxuu4ic8mpk.amplifyapp.com";
const RESQ_REPO = "https://github.com/inaiyarhasnain/ResQGrid";

const events = [
  {
    title: "Claude Build Day · Team Techno Crackers",
    place: "Claude Creator Commons, Bengaluru",
    date: "26–27 Sept 2026",
    points: [
      "Built PawBridge in 48 hours with a team of four: an ESP32 device with an ultrasonic sensor, accelerometer, buzzer and LCD, connected to local rules and a Claude multi-agent system (Opus + Haiku).",
      "Shipped working hardware, a live dashboard and 72 passing tests by demo time.",
      "We didn't win. We did ship a working device and learned more in two days than in most months.",
    ],
    href: "/projects/pawbridge",
    cta: "See the full build log →",
    images: [] as { src: string; alt: string }[],
  },
  {
    title: "AWS First Commit Hackathon 2026 · Team COM.SOLOSTACK",
    place: "Polaris School of Technology, Bengaluru · WeMakeDevs × AWS Bharat Builds Tour",
    date: "Sept 2026",
    points: [
      "Floods and other emergencies knock out networks exactly when people need to ask for help. We built ResQGrid around one question: how do you keep relief connected when the network fails?",
      "Residents can request help, camp workers consolidate what their camps need, and coordinators track, dispatch and update every request. Anything submitted offline is stored on the device and syncs when connectivity returns.",
      "It was as much about learning AWS as building: Angular on Amplify, Spring Boot in a container on ECS Fargate via ECR, and MySQL on RDS. Pushing the backend image to ECR from the hackathon floor was the moment it started to feel real. Building, debugging and deploying one step at a time until it actually ran.",
    ],
    images: [
      { src: "/resqgrid/banner.jpg", alt: "At the Bharat Builds Tour banner by WeMakeDevs and AWS" },
    ],
    href: "/projects/resqgrid",
    cta: "See the full build log →",
  },
];

const education = [
  {
    title: "Master of Computer Applications (MCA)",
    place: "Indian Institute of Technology (IIT), Patna",
    date: "2025 – 2027",
    detail: "Pursuing",
  },
  {
    title: "B.Sc. in Computer Science",
    place: "Maulana Azad National Urdu University (MANUU), Hyderabad",
    date: "2021 – 2024",
    detail: "CGPA 8.82 / 10",
  },
];

const stack = [
  { category: "Frontend", skills: ["HTML5", "CSS3", "Bootstrap", "Angular", "TypeScript"] },
  { category: "Backend", skills: ["Java", "Spring Framework", "Spring Boot", "REST APIs", "Spring AI"] },
  { category: "Python & Data", skills: ["Python", "NumPy", "Pandas", "Matplotlib"] },
  { category: "Database", skills: ["MySQL", "PostgreSQL", "SQL"] },
  { category: "Tools", skills: ["Git", "GitHub", "Maven", "Postman", "Docker", "IntelliJ IDEA", "VS Code"] },
  { category: "Core CS", skills: ["OOP", "Data Structures & Algorithms", "DBMS", "Operating Systems"] },
];

const learning = ["Angular", "Spring AI"];

const certificates = [
  {
    title: "AI / ML Fundamentals",
    place: "AWS",
    href: "https://www.linkedin.com/posts/naiyarhasnain_aws-aiml-artificialintelligence-activity-7476859074207211521-dpJy",
  },
  {
    title: "Programming using Java",
    place: "Infosys Springboard",
    href: "https://www.linkedin.com/posts/naiyarhasnain_java-infosysspringboard-certification-activity-7450072377524248577-WYYr",
  },
  {
    title: "Python Coder",
    place: "Kaggle",
    href: "https://www.kaggle.com/certification/badges/naiyarhasnain/30",
  },
  {
    title: "Essential Gen AI",
    place: "Google",
    href: "https://www.coursera.org/account/accomplishments/specialization/YQY66QLOLPQR",
  },
];

/* ── Page ──────────────────────────────────────────────────── */

export default function Home() {
  return (
    <Shell>
      <div className="flex flex-col gap-16 lg:gap-[72px]">
        {/* ── Projects ─────────────────────────────────── */}
        <section id="projects" className="anim-fade-up scroll-mt-20">
          <SectionHeading>projects.</SectionHeading>
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
            {/* PawBridge */}
            <article className="group flex flex-col">
              <Link href="/projects/pawbridge" className="block">
                <div className="shot">
                  <div className="shot-bar"><span /><span /><span /></div>
                  <div className="relative aspect-[16/9] bg-[#f6f6f6]">
                    <Image
                      src="/pawbridge/device.jpg"
                      alt="The PawBridge device: sensors, buzzer and LCD inside a hand-labelled cardboard box"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      unoptimized
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </Link>
              <div className="flex items-start justify-between gap-3 pt-4">
                <h3 className="min-w-0 text-[16px] font-semibold leading-snug tracking-[-0.02em] text-ink">
                  <Link href="/projects/pawbridge">PawBridge</Link>
                  <span className="ml-2 rounded-full border border-accent/50 bg-accent/10 px-2 py-0.5 align-middle text-[10px] font-medium text-[#7a5c38]">
                    Hackathon · Team
                  </span>
                </h3>
                <a
                  href="https://github.com/inaiyarhasnain/paw_bridge_poc"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="PawBridge on GitHub"
                  className="flex-none pt-0.5 text-[#bbb] transition-colors hover:text-ink [&>svg]:h-4 [&>svg]:w-4"
                >
                  <GitHubIcon />
                </a>
              </div>
              <p className="mt-1.5 text-[14px] leading-relaxed text-mute">
                A dog-request detector in a cardboard box. ESP32 sensors + a Claude
                agent team that shows the evidence and a confidence score, never a
                verdict. Built in 48 hours.
              </p>
              <Link
                href="/projects/pawbridge"
                className="mt-3 inline-flex w-fit items-center gap-1 text-[13px] font-medium text-ink [&>svg]:h-3.5 [&>svg]:w-3.5"
              >
                Read the build log
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
            </article>

            {/* ResQGrid */}
            <article className="group flex flex-col">
              <Link href="/projects/resqgrid" className="block">
                <div className="shot">
                  <div className="shot-bar"><span /><span /><span /></div>
                  <div className="relative aspect-[16/9] bg-[#f6f6f6]">
                    <Image
                      src="/resqgrid/user.jpg"
                      alt="ResQGrid resident help desk: emergency directory and SOS request form"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      unoptimized
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </Link>
              <div className="flex items-start justify-between gap-3 pt-4">
                <h3 className="min-w-0 text-[16px] font-semibold leading-snug tracking-[-0.02em] text-ink">
                  <Link href="/projects/resqgrid">ResQGrid</Link>
                  <span className="ml-2 rounded-full border border-[#cfe3d3] bg-[#e7f3e3] px-2 py-0.5 align-middle text-[10px] font-medium text-[#2f6b3a]">
                    Live
                  </span>
                </h3>
                <div className="flex flex-none items-center gap-2.5 pt-0.5 text-[#bbb] [&_svg]:h-4 [&_svg]:w-4">
                  <a href={RESQ_LIVE} target="_blank" rel="noopener noreferrer" aria-label="ResQGrid live app" className="transition-colors hover:text-ink">
                    <ArrowUpRight />
                  </a>
                  <a href={RESQ_REPO} target="_blank" rel="noopener noreferrer" aria-label="ResQGrid on GitHub" className="transition-colors hover:text-ink">
                    <GitHubIcon />
                  </a>
                </div>
              </div>
              <p className="mt-1.5 text-[14px] leading-relaxed text-mute">
                Built at the AWS First Commit Hackathon in Bengaluru: offline-first disaster
                relief coordination for residents, relief camps and coordinators. SOS requests are saved on the device when the network drops and
                sync automatically when it&apos;s back; coordinators move them from Pending →
                Accepted → Dispatched → Delivered.
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {["Angular", "Spring Boot", "Java 21", "MySQL", "AWS Amplify", "ECS Fargate"].map((t) => (
                  <span key={t} className="rounded bg-ink/[0.04] px-2 py-0.5 font-mono text-[11px] text-body">
                    {t}
                  </span>
                ))}
              </div>
            </article>

            {/* Sports Center */}
            <article className="group flex flex-col">
              <a
                href="https://github.com/inaiyarhasnain/sports-center"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="shot">
                  <div className="shot-bar"><span /><span /><span /></div>
                  <div className="relative flex aspect-[16/9] flex-col justify-between overflow-hidden bg-gradient-to-br from-[#f7f7f5] to-[#ecebe6] p-5">
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
                      full-stack · e-commerce
                    </p>
                    <p className="font-serif text-[34px] leading-none tracking-[-0.02em] text-ink transition-transform duration-500 group-hover:translate-x-1">
                      Sports Center
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {["Spring Boot", "JWT", "React", "Redis", "MySQL"].map((t) => (
                        <span key={t} className="rounded bg-white/80 px-2 py-0.5 font-mono text-[10px] text-body">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
              <div className="flex items-start justify-between gap-3 pt-4">
                <h3 className="min-w-0 text-[16px] font-semibold leading-snug tracking-[-0.02em] text-ink">
                  <a href="https://github.com/inaiyarhasnain/sports-center" target="_blank" rel="noopener noreferrer">
                    Sports Center
                  </a>
                </h3>
                <a
                  href="https://github.com/inaiyarhasnain/sports-center"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Sports Center on GitHub"
                  className="flex-none pt-0.5 text-[#bbb] transition-colors hover:text-ink [&>svg]:h-4 [&>svg]:w-4"
                >
                  <GitHubIcon />
                </a>
              </div>
              <p className="mt-1.5 text-[14px] leading-relaxed text-mute">
                Full-stack e-commerce platform: product catalog with filtering and
                pagination, JWT auth with role-based access, Redis-cached basket and
                OpenAPI-documented REST endpoints.
              </p>
            </article>
          </div>
        </section>

        {/* ── Hackathons ───────────────────────────────── */}
        <section id="hackathons">
          <SectionHeading>hackathons.</SectionHeading>
          {events.map((e) => (
            <article key={e.title} className="relative pl-5">
              <span aria-hidden="true" className="absolute bottom-1 left-0 top-2 w-px bg-line" />
              <span aria-hidden="true" className="absolute left-[-3.5px] top-[9px] h-2 w-2 rounded-full border-[1.5px] border-ink bg-white" />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-[15px] font-semibold text-ink">{e.title}</h3>
                <span className="text-[13px] tabular-nums text-mute">{e.date}</span>
              </div>
              <p className="mt-1 text-[13px] text-mute">{e.place}</p>
              <ul className="space-y-2 pt-3">
                {e.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-[14px] leading-relaxed text-body">
                    <span className="mt-[9px] h-1 w-1 flex-none rounded-full bg-[#ccc]" />
                    {p}
                  </li>
                ))}
              </ul>
              {e.images.length > 0 && (
                <div className="mt-4 grid max-w-[260px] grid-cols-1 gap-2">
                  {e.images.map((img) => (
                    <div key={img.src} className="relative aspect-[4/5] overflow-hidden rounded-lg border border-line bg-[#f6f6f6]">
                      <Image src={img.src} alt={img.alt} fill sizes="(max-width: 640px) 50vw, 160px" unoptimized className="object-cover" />
                    </div>
                  ))}
                </div>
              )}
              {e.href.startsWith("/") ? (
                <Link href={e.href} className="link-u mt-3 inline-block text-[13px]">
                  {e.cta}
                </Link>
              ) : (
                <a href={e.href} target="_blank" rel="noopener noreferrer" className="link-u mt-3 inline-block text-[13px]">
                  {e.cta}
                </a>
              )}
            </article>
          ))}
        </section>

        {/* ── Education ────────────────────────────────── */}
        <section id="education">
          <SectionHeading>education.</SectionHeading>
          <div className="space-y-8">
            {education.map((item) => (
              <article key={item.title} className="relative pl-5">
                <span aria-hidden="true" className="absolute bottom-1 left-0 top-2 w-px bg-line" />
                <span aria-hidden="true" className="absolute left-[-3.5px] top-[9px] h-2 w-2 rounded-full border-[1.5px] border-ink bg-white" />
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-[15px] font-semibold text-ink">{item.title}</h3>
                  <span className="text-[13px] tabular-nums text-mute">{item.date}</span>
                </div>
                <p className="mt-1 text-[14px] text-body">{item.place}</p>
                <p className="mt-0.5 text-[13px] text-mute">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── Stack ────────────────────────────────────── */}
        <section id="stack" className="scroll-mt-20">
          <SectionHeading>stack.</SectionHeading>
          <div className="surface-soft p-5 sm:p-6">
            <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
              {stack.map((group) => (
                <div key={group.category}>
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-faint">
                    {group.category}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <span key={skill} className="chip">
                        {skill}
                        {learning.includes(skill) && (
                          <span className="ml-1.5 rounded bg-[#e7f3e3] px-1 text-[10px] text-[#2f6b3a]">learning</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Certificates ─────────────────────────────── */}
        <section id="certificates">
          <SectionHeading>certificates.</SectionHeading>
          <ul className="divide-y divide-[#eee]">
            {certificates.map((item) => (
              <li key={item.title}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-baseline justify-between gap-6 py-3.5"
                >
                  <span>
                    <span className="text-[15px] text-ink">{item.title}</span>
                    <span className="ml-2 text-[13px] text-mute">{item.place}</span>
                  </span>
                  <span className="text-[#bbb] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink [&>svg]:h-3.5 [&>svg]:w-3.5">
                    <ArrowUpRight />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Shell>
  );
}
