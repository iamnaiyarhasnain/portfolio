import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Shell, { SectionHeading } from "../../components/shell";
import { ArrowUpRight, GitHubIcon } from "../../components/socials";

export const metadata: Metadata = {
  title: "ResQGrid — Naiyar Hasnain",
  description:
    "An offline-first disaster relief coordination grid, built at the AWS First Commit Hackathon 2026 in Bengaluru. Angular, Spring Boot, MySQL and AWS.",
};

const LIVE = "https://main.d1vtxuu4ic8mpk.amplifyapp.com";
const REPO = "https://github.com/inaiyarhasnain/ResQGrid";
const POST = "https://lnkd.in/p/d-NEqNTJ";

const roles = [
  { title: "Residents", note: "request help, even with no signal" },
  { title: "Camp workers", note: "manage and consolidate what a camp needs" },
  { title: "Coordinators", note: "track, dispatch and update every request" },
];

const flow = [
  { title: "Request", body: "A resident fills in location, disaster type, urgency, vulnerabilities and an optional photo." },
  { title: "Queue on device", body: "If the network is down, the request is stored locally in the browser. Nothing is lost." },
  { title: "Sync", body: "When connectivity returns, queued requests are sent automatically, with a manual sync as backup." },
  { title: "Dispatch", body: "Coordinators move each request Pending → Accepted → Dispatched → Delivered." },
];

const stack = [
  { title: "Frontend", note: "Angular 22, TypeScript, Tailwind CSS 4 on AWS Amplify" },
  { title: "Backend", note: "Spring Boot 4, Java 21, Spring Data JPA, in Docker on ECS Fargate" },
  { title: "Data", note: "MySQL 8 on Amazon RDS" },
  { title: "Delivery", note: "Images in Amazon ECR, behind an Application Load Balancer" },
];

const tags = ["Angular", "TypeScript", "Tailwind CSS", "Spring Boot", "Java 21", "MySQL", "AWS Amplify", "ECS Fargate", "Amazon ECR", "Amazon RDS", "Docker"];

function Photo({ src, alt, ratio, caption }: { src: string; alt: string; ratio: string; caption?: React.ReactNode }) {
  return (
    <figure>
      <div className={`shot relative ${ratio}`}>
        <Image src={src} alt={alt} fill sizes="(max-width: 1024px) 100vw, 720px" unoptimized className="object-cover" />
      </div>
      {caption && <figcaption className="mt-3 text-[13px] leading-relaxed text-body">{caption}</figcaption>}
    </figure>
  );
}

export default function ResQGrid() {
  return (
    <Shell>
      <article className="flex flex-col gap-16 lg:gap-[72px]">
        <header className="anim-fade-up">
          <Link href="/#projects" className="text-[13px] text-mute transition-colors hover:text-ink">
            ← all projects
          </Link>
          <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#b5523b]">
            AWS First Commit Hackathon 2026 · WeMakeDevs × AWS · Bengaluru · Team COM.SOLOSTACK
          </p>
          <h1 className="mt-3 font-serif text-[44px] leading-[1.02] tracking-[-0.02em] text-ink sm:text-[56px]">
            ResQGrid
          </h1>
          <p className="mt-3 max-w-xl font-serif text-[22px] leading-snug text-body">
            Keeping relief connected <em className="text-[#b5523b]">when networks fail.</em>
          </p>
          <p className="mt-4 max-w-xl text-[15px] leading-7 text-body">
            Floods and other emergencies take the network down exactly when people need to ask for
            help. ResQGrid lets residents, camp workers and coordinators send and track requests
            anyway. Offline requests wait on the device and sync the moment connectivity returns.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <a href={LIVE} target="_blank" rel="noopener noreferrer" className="btn-primary !w-auto">
              <ArrowUpRight />
              Live app
            </a>
            <a href={REPO} target="_blank" rel="noopener noreferrer" className="btn-secondary !w-auto">
              <GitHubIcon />
              View on GitHub
            </a>
            <a href={POST} target="_blank" rel="noopener noreferrer" className="btn-secondary !w-auto">
              <ArrowUpRight />
              LinkedIn post
            </a>
          </div>
        </header>

        <Photo
          src="/resqgrid/banner.jpg"
          alt="At the WeMakeDevs × AWS Bharat Builds Tour banner"
          ratio="aspect-[4/5] sm:aspect-[16/10]"
          caption="Bharat Builds Tour, in collaboration with AWS Builder Center. Day one, before a single line was deployed."
        />

        <section>
          <SectionHeading>the idea.</SectionHeading>
          <p className="font-serif text-[24px] leading-snug text-ink">
            One grid, three roles, <em className="text-[#b5523b]">zero dependence on signal</em>.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-3">
            {roles.map((r, i) => (
              <li key={r.title} className="surface-soft p-4">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#f6e3de] text-[12px] font-semibold text-[#b5523b]">
                  {i + 1}
                </span>
                <p className="mt-3 text-[14px] font-medium text-ink">{r.title}</p>
                <p className="mt-1 text-[13px] text-mute">{r.note}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <SectionHeading>how it works.</SectionHeading>
          <ol className="space-y-6">
            {flow.map((s, i) => (
              <li key={s.title} className="relative pl-10">
                {i < flow.length - 1 && (
                  <span aria-hidden="true" className="absolute bottom-[-24px] left-[13px] top-7 w-px bg-line" />
                )}
                <span className="absolute left-0 top-0 inline-flex h-7 w-7 items-center justify-center rounded-full border-[1.5px] border-ink bg-white font-serif text-[14px] text-ink">
                  {i + 1}
                </span>
                <h3 className="text-[15px] font-semibold text-ink">{s.title}</h3>
                <p className="mt-1 text-[14px] leading-relaxed text-body">{s.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <SectionHeading>the interface.</SectionHeading>
          <div className="shot">
            <div className="shot-bar"><span /><span /><span /></div>
            <div className="relative aspect-[1440/1500]">
              <Image src="/resqgrid/interface-full.jpg" alt="ResQGrid home: hero, emergency directory, request form and active relief zones" fill sizes="(max-width: 1024px) 100vw, 720px" unoptimized className="object-cover object-top" />
            </div>
          </div>
          <p className="mt-3 text-[13px] text-mute">
            The resident help desk: emergency directory, the request form and active disaster relief zones.
          </p>
        </section>

        <section>
          <SectionHeading>the build.</SectionHeading>
          <p className="font-serif text-[22px] leading-snug text-ink">
            Building, debugging, deploying and learning one step at a time.
          </p>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <Photo
              src="/resqgrid/at-work.jpg"
              alt="Building at the hackathon hall"
              ratio="aspect-[4/3]"
              caption="Heads down in the hall with the rest of the teams."
            />
            <Photo
              src="/resqgrid/ecr-push.jpg"
              alt="Pushing the ResQGrid backend Docker image to Amazon ECR"
              ratio="aspect-[4/3]"
              caption={<><strong className="font-semibold text-ink">The moment it got real:</strong> pushing the backend image to ECR, after fixing an authorization error along the way.</>}
            />
          </div>
          <div className="mt-5">
            <Photo
              src="/resqgrid/venue.jpg"
              alt="At the Polaris School of Technology venue"
              ratio="aspect-[16/9]"
              caption="Polaris School of Technology, Bengaluru: the venue for the weekend."
            />
          </div>
          <ul className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {stack.map((h, i) => (
              <li key={h.title} className="flex gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#b5523b] text-[11px] font-semibold text-white">
                  {i + 1}
                </span>
                <span>
                  <span className="block text-[14px] font-medium text-ink">{h.title}</span>
                  <span className="block text-[13px] text-mute">{h.note}</span>
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <SectionHeading>what it was really about.</SectionHeading>
          <p className="font-serif text-[24px] leading-snug text-ink">
            Not another app: <em className="text-[#b5523b]">learning AWS</em>, understanding cloud
            deployment, and turning an idea into something that actually runs.
          </p>
          <div className="mt-6">
            <Photo
              src="/resqgrid/pizza.jpg"
              alt="A pizza between builds"
              ratio="aspect-[16/9]"
              caption="Fuel. Every hackathon runs on it."
            />
          </div>
          <div className="mt-6 flex flex-wrap gap-1.5">
            {tags.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
        </section>
      </article>
    </Shell>
  );
}
