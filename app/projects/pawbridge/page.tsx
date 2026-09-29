import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Shell, { SectionHeading } from "../../components/shell";
import Carousel from "../../components/carousel";
import { ArrowUpRight, GitHubIcon } from "../../components/socials";

export const metadata: Metadata = {
  title: "PawBridge — Naiyar Hasnain",
  description:
    "A dog-request detector in a cardboard box, built in 48 hours at Claude Build Day, Bengaluru. ESP32 sensors, local rules and a Claude multi-agent system.",
};

const REPO = "https://github.com/iamnaiyarhasnain/paw_bridge_poc";
const POST =
  "https://www.linkedin.com/posts/venket-raj-s_claudebuildday-claudecreatorcommons-buildwithclaude-ugcPost-7510392259092062209-2zEK/";

const stats = [
  { value: "48 h", label: "idea to demo" },
  { value: "4", label: "builders" },
  { value: "~17 s", label: "trigger to answer" },
  { value: "72", label: "passing tests" },
];

const signals = [
  { title: "Nudging a hand or the device", note: "often repeated, easy to brush off" },
  { title: "Pawing or pushing things", note: "a possible play or attention cue" },
  { title: "Hovering nearby, watching", note: "quiet signals busy owners don't see" },
];

const hardware = [
  { title: "Ultrasonic sensor", note: "the trigger: under 30 cm starts a run" },
  { title: "MPU6050 motion sensor", note: "taps, pawing, stillness — 10 readings/s" },
  { title: "Glyph H2 (ESP32-H2)", note: "runs the firmware, USB to the laptop" },
  { title: "16×2 LCD + buzzer + LED", note: "the device answers on its own" },
];

const steps = [
  { title: "Trigger", body: "Dog (or a hand, for the demo) comes within 30 cm.", time: "0.3 s" },
  { title: "Capture", body: "Motion readings 2 s before to 3 s after, plus a video/audio clip.", time: "3 s" },
  { title: "Clean + local rules", body: "Summarise the motion; rules give an instant possible intent. No internet needed.", time: "< 0.1 s" },
  {
    title: "Claude agent team",
    body: "An orchestrator (Claude Opus) sends 4 key frames to a vision agent and a spectrogram to an audio agent (Claude Haiku), in parallel. Never raw audio.",
    time: "≈ 14 s",
  },
  { title: "One action", body: "Attention request · play invitation · curiosity · calm, with a confidence and caveats.", time: "instant" },
  { title: "The device answers", body: "Buzzer pattern, LED blink speed, LCD text. Dashboard shows the same run live.", time: "instant" },
];

const lessons = [
  { title: "Make honesty a rule, not a hope.", body: 'Our code rejects any AI answer that doesn\'t start with "possible".' },
  { title: "Always have a fallback.", body: "No internet, dead buzzer, missing sensor: the demo still ran." },
  { title: "Cardboard first.", body: "One loop working end to end beats a perfect plan." },
];

const team = ["Venket Raj S", "Naiyar Hasnain", "Sampath Sanka", "Syed Owais"];

const thanks = [
  { group: "Judges", names: ["Shandar Junaid", "Archie Sengupta", "Srijan R. Shetty"] },
  { group: "Mentors", names: ["Monali Dambre", "Ishan Dutta", "Sunny R. Gupta", "Ankush Dharkar", "Koushik Joshi"] },
  { group: "Organisers", names: ["Shubhangi Gupta", "Rohaan Goswami", "the Elseplay crew"] },
];

const slides = [
  { src: "/pawbridge/01-cover.jpg", alt: "Cover: we built a dog-request detector in a cardboard box, in two days" },
  { src: "/pawbridge/02-problem.jpg", alt: "The problem: dogs signal all the time, owners miss it, translators overclaim" },
  { src: "/pawbridge/03-saturday-morning.jpg", alt: "Saturday morning: a notebook, a bare board and a box of jumper wires" },
  { src: "/pawbridge/04-saturday-afternoon.jpg", alt: "Saturday afternoon: cardboard, a cutter, tape and a breadboard" },
  { src: "/pawbridge/05-inside-the-box.jpg", alt: "Inside the box: real sensors in a cardboard shell" },
  { src: "/pawbridge/06-how-it-works.jpg", alt: "How it works: one trigger, six steps, about 17 seconds" },
  { src: "/pawbridge/07-demo-run.jpg", alt: "Sunday: real output from a demo run, possible play invitation" },
  { src: "/pawbridge/08-what-we-learned.jpg", alt: "What we learned: getting an honest answer from AI" },
  { src: "/pawbridge/09-the-team.jpg", alt: "The team: Techno Crackers" },
  { src: "/pawbridge/10-thank-you.jpg", alt: "Thank you to judges, mentors and organisers" },
];

const tags = ["ESP32-H2", "Ultrasonic sensor", "MPU6050", "16×2 LCD", "Claude Opus", "Claude Haiku", "Multi-agent AI", "IoT", "Live dashboard"];

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

export default function PawBridge() {
  return (
    <Shell>
      <article className="flex flex-col gap-16 lg:gap-[72px]">
        {/* ── Header ───────────────────────────────────── */}
        <header className="anim-fade-up">
          <Link href="/#projects" className="text-[13px] text-mute transition-colors hover:text-ink">
            ← all projects
          </Link>
          <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#a07a4c]">
            Claude Build Day · Claude Creator Commons · Bengaluru · 26–27 Sept 2026
          </p>
          <h1 className="mt-3 font-serif text-[44px] leading-[1.02] tracking-[-0.02em] text-ink sm:text-[56px]">
            PawBridge
          </h1>
          <p className="mt-3 max-w-xl font-serif text-[22px] leading-snug text-body">
            We built a dog-request detector in a cardboard box.{" "}
            <em className="text-[#a07a4c]">In two days.</em>
          </p>
          <p className="mt-4 max-w-xl text-[15px] leading-7 text-body">
            It notices when a dog <strong className="font-semibold text-ink">may</strong> want
            something, and it never claims to read the dog&apos;s mind. PawBridge isn&apos;t a
            &ldquo;dog translator&rdquo;: it collects signals from sensors and video, reasons over
            the available evidence, and tells you what it observed, what it might mean, and how
            confident it is.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <a href={REPO} target="_blank" rel="noopener noreferrer" className="btn-primary !w-auto">
              <GitHubIcon />
              View on GitHub
            </a>
            <a href={POST} target="_blank" rel="noopener noreferrer" className="btn-secondary !w-auto">
              <ArrowUpRight />
              Team post on LinkedIn
            </a>
          </div>
        </header>

        <Photo
          src="/pawbridge/device.jpg"
          alt="The PawBridge prototype: buzzer, ultrasonic trigger, mic and LCD display in a hand-drawn cardboard box"
          ratio="aspect-[2/1]"
          caption="The prototype lived inside a shipping box. Buzzer, ultrasonic trigger, mic and LCD, labelled by hand."
        />

        {/* ── Stats ────────────────────────────────────── */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="surface-soft px-4 py-4">
              <p className="font-serif text-[30px] leading-none tracking-[-0.02em] text-ink">{s.value}</p>
              <p className="mt-2 text-[12px] text-mute">{s.label}</p>
            </div>
          ))}
        </div>

        {/* ── Problem ──────────────────────────────────── */}
        <section>
          <SectionHeading>the problem.</SectionHeading>
          <p className="font-serif text-[24px] leading-snug text-ink">
            Dogs signal all the time. Owners miss it. &ldquo;Translators&rdquo;{" "}
            <em className="text-[#b5523b]">overclaim</em>.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-3">
            {signals.map((s, i) => (
              <li key={s.title} className="surface-soft p-4">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#f6e3de] text-[12px] font-semibold text-[#b5523b]">
                  {i + 1}
                </span>
                <p className="mt-3 text-[14px] font-medium text-ink">{s.title}</p>
                <p className="mt-1 text-[13px] text-mute">{s.note}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[15px] leading-7 text-body">
            Existing &ldquo;dog translator&rdquo; products label emotions and needs as fact. That
            didn&apos;t sit right with us. So we flipped it:{" "}
            <strong className="font-semibold text-ink">show the evidence first</strong>, then suggest
            a <strong className="font-semibold text-ink">possible</strong> meaning with a confidence
            score. Never a verdict.
          </p>
          <div className="surface-soft mt-5 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-faint">What that looks like</p>
            <ul className="mt-3 divide-y divide-dashed divide-[#e6e6e6] text-[14px] text-body">
              <li className="flex items-center gap-3 py-2"><span className="evidence bg-[#f6ecd4] text-[#7a5c1e]">board</span>came within 7.7 cm, device still, 0 taps</li>
              <li className="flex items-center gap-3 py-2"><span className="evidence bg-[#ebe7f7] text-[#5a4a9a]">vision</span>play bow, gaze on a tennis ball</li>
              <li className="flex items-center gap-3 py-2"><span className="evidence bg-[#e2f0f3] text-[#2f6a78]">audio</span>two brief bark-like sounds</li>
              <li className="pt-2 font-medium text-[#b5523b]">→ possible play invitation · confidence 0.66</li>
            </ul>
          </div>
        </section>

        {/* ── Build ────────────────────────────────────── */}
        <section>
          <SectionHeading>the build.</SectionHeading>
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-faint">Saturday morning</p>
          <p className="mt-2 font-serif text-[22px] leading-snug text-ink">
            A notebook, a bare board and a box of jumper wires.
          </p>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <Photo
              src="/pawbridge/wiring-plan.jpg"
              alt="Laptop, notebook and jumper wires on the table on Saturday morning"
              ratio="aspect-[4/5]"
              caption={<><strong className="font-semibold text-ink">The plan on paper:</strong> ultrasonic trigger, motion sensor, buzzer, LCD. <strong className="font-semibold text-ink">First problem:</strong> the motion sensor wasn&apos;t showing up on I2C. Wiring.</>}
            />
            <Photo
              src="/pawbridge/bare-board.jpg"
              alt="The ESP32-H2 board on a breadboard next to a notebook"
              ratio="aspect-[4/5]"
              caption={<><strong className="font-semibold text-ink">The board:</strong> a Glyph H2 (ESP32-H2), Bluetooth-only, no Wi-Fi. That shaped everything. <strong className="font-semibold text-ink">Second problem:</strong> the RGB LED never lit. We swapped it for an LCD later.</>}
            />
          </div>

          <p className="mt-12 text-[11px] font-semibold uppercase tracking-[0.1em] text-faint">Saturday afternoon</p>
          <p className="mt-2 font-serif text-[22px] leading-snug text-ink">
            Cardboard, a cutter, tape, and a breadboard that finally answered.
          </p>
          <div className="mt-5">
            <Photo
              src="/pawbridge/breadboard.jpg"
              alt="Wiring the breadboard inside the cardboard enclosure"
              ratio="aspect-[16/10]"
              caption="Enclosure from a shipping box. Sensor holes cut by hand. The first live distance reading on the laptop was when it started to feel like a device."
            />
          </div>
        </section>

        {/* ── Hardware ─────────────────────────────────── */}
        <section>
          <SectionHeading>inside the box.</SectionHeading>
          <Photo src="/pawbridge/inside-box.jpg" alt="Sensors wired on a breadboard inside the cardboard shell" ratio="aspect-[16/10]" />
          <ul className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {hardware.map((h, i) => (
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

        {/* ── How it works ─────────────────────────────── */}
        <section>
          <SectionHeading>how it works.</SectionHeading>
          <p className="font-serif text-[24px] leading-snug text-ink">
            One trigger, six steps, <em className="text-[#b5523b]">~17 seconds</em>.
          </p>
          <ol className="mt-6 space-y-6">
            {steps.map((s, i) => (
              <li key={s.title} className="relative pl-10">
                {i < steps.length - 1 && (
                  <span aria-hidden="true" className="absolute bottom-[-24px] left-[13px] top-7 w-px bg-line" />
                )}
                <span className="absolute left-0 top-0 inline-flex h-7 w-7 items-center justify-center rounded-full border-[1.5px] border-ink bg-white font-serif text-[14px] text-ink">
                  {i + 1}
                </span>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-[15px] font-semibold text-ink">{s.title}</h3>
                  <span className="rounded bg-[#eef1ea] px-1.5 py-0.5 font-mono text-[11px] text-[#4b5a45]">{s.time}</span>
                </div>
                <p className="mt-1 text-[14px] leading-relaxed text-body">{s.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 rounded-xl bg-[#eef1ea] px-5 py-4 text-[14px] text-body">
            <span className="font-serif text-[18px] text-[#b5523b]">Offline?</span> The rules pick the
            action. The device always responds.
          </p>
        </section>

        {/* ── Demo ─────────────────────────────────────── */}
        <section>
          <SectionHeading>sunday, it works.</SectionHeading>
          <p className="font-serif text-[24px] leading-snug text-ink">
            Hand near the sensor. Seventeen seconds later, <em className="text-[#b5523b]">a beep</em>.
          </p>
          <div className="mt-6 shot">
            <div className="shot-bar"><span /><span /><span /></div>
            <div className="relative aspect-[23/9]">
              <Image src="/pawbridge/dashboard.jpg" alt="PawBridge live pipeline dashboard during a demo run" fill sizes="(max-width: 1024px) 100vw, 720px" unoptimized className="object-cover object-top" />
            </div>
          </div>
          <p className="mt-3 text-[13px] text-mute">The live dashboard: trigger, capture, cleaning, rules, Claude agents and action, step by step.</p>

          <div className="mt-8 grid items-start gap-6 sm:grid-cols-[auto_1fr]">
            <div className="rounded-xl border-4 border-[#3b4034] bg-[#b8e04a] px-4 py-3 font-mono text-[18px] leading-tight text-[#1f2a10] shadow-[0_6px_18px_rgba(0,0,0,0.08)]">
              PLAY INVITATION
              <br />
              via Claude
            </div>
            <div>
              <p className="font-serif text-[26px] leading-none text-[#b5523b]">possible play invitation</p>
              <p className="mt-2 text-[14px] text-body">
                Rules said <em>curiosity · 0.50</em>. Claude, with the clip: <strong className="text-ink">0.66</strong>.
              </p>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#e6e9e1]">
                <div className="h-full w-[66%] rounded-full bg-gradient-to-r from-[#d9a441] to-[#b5523b]" />
              </div>
            </div>
          </div>
          <ul className="mt-5 space-y-2 text-[14px] text-body">
            <li className="flex items-center gap-3"><span className="evidence bg-[#ebe7f7] text-[#5a4a9a]">vision</span>play bow, gaze on a tennis ball</li>
            <li className="flex items-center gap-3"><span className="evidence bg-[#e2f0f3] text-[#2f6a78]">audio</span>two brief bark-like events</li>
            <li className="flex items-center gap-3"><span className="evidence bg-[#f6ecd4] text-[#7a5c1e]">board</span>7.7 cm, no taps — device not pawed</li>
          </ul>
          <blockquote className="mt-5 border-l-[3px] border-[#d9a441] bg-[#fdf8e8] px-5 py-3 text-[14px] text-body">
            <span className="font-semibold text-[#8a6412]">Claude&apos;s own caveat:</span> &ldquo;The playful
            signals come only from the clip, not the sensor board.&rdquo;
          </blockquote>
        </section>

        {/* ── Lessons ──────────────────────────────────── */}
        <section>
          <SectionHeading>what we learned.</SectionHeading>
          <p className="font-serif text-[26px] leading-snug text-ink">
            &ldquo;The hardest part wasn&apos;t getting an answer from AI. It was getting an{" "}
            <em className="text-[#a07a4c]">honest</em> one.&rdquo;
          </p>
          <ol className="mt-6 space-y-3">
            {lessons.map((l, i) => (
              <li key={l.title} className="flex gap-3 text-[14px] leading-relaxed text-body">
                <span className="inline-flex h-6 w-6 flex-none items-center justify-center rounded-md border border-[#e6e6e6] bg-white text-[12px] font-semibold text-ink">
                  {i + 1}
                </span>
                <span>
                  <strong className="font-semibold text-ink">{l.title}</strong> {l.body}
                </span>
              </li>
            ))}
          </ol>
          <p className="surface-soft mt-6 p-5 text-[14px] leading-relaxed text-body">
            <strong className="font-semibold text-[#a07a4c]">We didn&apos;t win.</strong> We gave it a
            fight, shipped a working device, 72 passing tests and a live demo, and learned more in two
            days than in most months.
          </p>
          <div className="mt-6">
            <Photo src="/pawbridge/team-at-work.jpg" alt="Team Techno Crackers debugging together at the venue" ratio="aspect-[900/308]" caption="Best two days of debugging." />
          </div>
        </section>

        {/* ── Team ─────────────────────────────────────── */}
        <section>
          <SectionHeading>the team.</SectionHeading>
          <p className="font-serif text-[24px] leading-snug text-ink">
            Four people, one box, <em className="text-[#b5523b]">two days</em>.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <Photo src="/pawbridge/team-demo.jpg" alt="Team Techno Crackers holding the PawBridge device and dashboard" ratio="aspect-[4/3]" />
            <Photo src="/pawbridge-team.jpg" alt="Team Techno Crackers at Claude Creator Commons, Bengaluru" ratio="aspect-[4/3]" />
          </div>
          <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.1em] text-faint">Team Techno Crackers</p>
          <ul className="mt-3 grid grid-cols-2 gap-2">
            {team.map((name) => (
              <li
                key={name}
                className={`rounded-lg border px-3 py-2 text-[14px] ${name === "Naiyar Hasnain" ? "border-ink bg-white font-medium text-ink" : "border-[#eee] bg-white text-body"}`}
              >
                {name}
                {name === "Naiyar Hasnain" && <span className="ml-1.5 text-[11px] text-mute">(me)</span>}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[14px] leading-relaxed text-body">
            Firmware, bridge service, Claude agents, dashboard, cardboard engineering and a 3-minute
            pitch. All built between Saturday morning and Sunday afternoon.
          </p>
        </section>

        {/* ── Build log carousel ───────────────────────── */}
        <section>
          <SectionHeading>the build log.</SectionHeading>
          <p className="mb-5 text-[13px] text-mute">
            The full carousel from{" "}
            <a href={POST} target="_blank" rel="noopener noreferrer" className="link-u">
              my teammate Venket Raj S&apos;s LinkedIn post
            </a>
            . Tap a slide to open it full size.
          </p>
          <Carousel slides={slides} />
        </section>

        {/* ── Thanks ───────────────────────────────────── */}
        <section>
          <SectionHeading>thank you.</SectionHeading>
          <div className="grid gap-6 sm:grid-cols-3">
            {thanks.map((t) => (
              <div key={t.group}>
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-faint">{t.group}</p>
                <ul className="space-y-1 text-[14px] text-body">
                  {t.names.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[14px] leading-relaxed text-body">
            And Claude Creator Commons for the room, the credits and the community. PawBridge notices
            signals. It doesn&apos;t read minds.
          </p>
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
