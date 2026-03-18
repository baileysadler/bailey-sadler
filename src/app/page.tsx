"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowUpRight,
  EnvelopeSimple,
  LinkedinLogo,
  Play,
  VideoCamera,
  Terminal,
} from "@phosphor-icons/react";

const ease = [0.16, 1, 0.3, 1] as const;

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ y: 16, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const proof = [
  {
    stat: "\u00a325K",
    context: "per video",
    detail: "Valued by a $2B airline client. No pushback on price.",
  },
  {
    stat: "27+",
    context: "projects",
    detail:
      "AI content delivered at Darts Corner since starting in October 2025.",
  },
  {
    stat: "10+",
    context: "apps shipped",
    detail:
      "Live web applications built and deployed using Claude Code. No engineering team.",
  },
  {
    stat: "4 wks \u2192 1 day",
    context: "turnaround",
    detail:
      "Content production rebuilt from scratch. Same-day delivery, every time.",
  },
  {
    stat: "\u00a38K+",
    context: "saved per video",
    detail: "Agency dependency eliminated entirely with AI pipelines.",
  },
  {
    stat: "1M",
    context: "views per video",
    detail: "Managing content at LADbible Group across 1M+ follower channels.",
  },
];

const timeline = [
  {
    year: "2020",
    title: "Social media manager",
    description:
      "Started creating content for wellness and finance brands. Photography, video, social graphics. Learning the craft.",
  },
  {
    year: "2022",
    title: "Video editor at KOMI Group",
    description:
      "High-volume short-form content for Snapchat and TikTok. Deep platform fluency. Fast turnaround instincts.",
  },
  {
    year: "2024",
    title: "Snapchat Manager at LADbible",
    description:
      "1M+ follower channels. 200K\u20131M views per video. 10\u201315 videos per week. One of the UK\u2019s largest publishers.",
  },
  {
    year: "2024",
    title: "Founded Capra AI & Capra Studio",
    description:
      "Two AI ventures. Voice agents. Generative content for enterprise brands. 10+ web apps shipped with Claude Code.",
  },
  {
    year: "2025",
    title: "AI Creative Director for flydubai",
    description:
      "Directed generative content for a $2B global airline. Work valued at \u00a325,000 per video by the client.",
  },
  {
    year: "Now",
    title: "Teaching what I learned",
    description:
      "Everything I built in 12 months \u2014 the tools, the workflows, the mindset \u2014 packaged into training you can actually use.",
  },
];

const offerings = [
  {
    icon: VideoCamera,
    title: "AI content creation",
    subtitle: "Learn the tools that replaced a \u00a38K-per-video agency",
    description:
      "A hands-on presentation and workshop covering every generative AI tool I use daily. I walk you through the models, show live demos, compare outputs side by side, and teach you how to build a production pipeline from scratch.",
    points: [
      "Video generation \u2014 Google Flow, Veo, Runway, Sora, Cling",
      "Image generation \u2014 Midjourney, Nano Banana Pro, Higgs Field, DALL-E",
      "Voice and audio \u2014 ElevenLabs, voice cloning, narration",
      "Prompt engineering \u2014 how to get consistent, brand-quality output",
      "Building a pipeline \u2014 from brief to finished asset, same day",
      "Live demos with real examples from enterprise client work",
    ],
  },
  {
    icon: Terminal,
    title: "Claude for business",
    subtitle: "The tool I used to ship 10+ apps with no engineering team",
    description:
      "A presentation and live demonstration of how Claude and Claude Code can transform the way your business operates. I cover what it actually does, where it creates the most leverage, and I install it and run it live so you can see the results in real time.",
    points: [
      "What Claude is and why it matters for your business",
      "Claude Code \u2014 live install, setup, and real-time demo",
      "Document production \u2014 decks, reports, briefs in minutes",
      "Web applications \u2014 how I ship live products with no dev team",
      "Workflow acceleration \u2014 finding where Claude saves you hours",
      "The Anthropic ecosystem \u2014 what is coming and how to prepare",
    ],
  },
];

export default function Home() {
  return (
    <main>
      {/* ── NAV ── */}
      <motion.nav
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease }}
        className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border"
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex items-center justify-between h-14">
          <span className="font-serif italic text-lg tracking-tight text-foreground">
            Bailey Sadler
          </span>
          <div className="hidden md:flex items-center gap-8">
            {["Story", "Proof", "Presentations", "Contact"].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className="text-[13px] text-muted hover:text-foreground transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="text-[13px] text-foreground font-medium bg-foreground/5 hover:bg-foreground/10 px-4 py-1.5 rounded-md transition-colors duration-200"
          >
            Get in touch
          </a>
        </div>
      </motion.nav>

      {/* ── HERO ── */}
      <section className="min-h-[100dvh] flex items-center pt-14">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease }}
              className="md:col-span-4 flex justify-center md:justify-start"
            >
              <div className="rounded-2xl overflow-hidden border border-border relative w-[260px] h-[325px] md:w-[300px] md:h-[375px]">
                <Image
                  src="/images/bailey.jpg"
                  alt="Bailey Sadler"
                  fill
                  priority
                  quality={95}
                  sizes="(max-width: 768px) 260px, 300px"
                  className="object-cover object-top"
                />
              </div>
            </motion.div>

            {/* Text */}
            <div className="md:col-span-8">
              <motion.div
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3, ease }}
              >
                <p className="text-accent text-sm font-medium tracking-wide mb-6">
                  AI Educator
                </p>
              </motion.div>

              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease }}
                className="font-serif italic text-[2.75rem] md:text-6xl lg:text-7xl tracking-tight leading-[1.05] text-foreground mb-6"
              >
                I learned AI by doing.
                <br />
                <span className="text-muted">Now I teach it.</span>
              </motion.h1>

              <motion.p
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.55, ease }}
                className="text-muted text-lg leading-relaxed max-w-[52ch] mb-8"
              >
                12 months ago I was a video editor. Today I direct AI content
                for a $2B airline, ship web applications with no engineering
                team, and run AI pipelines that replaced entire agency
                contracts. I teach companies and individuals how to do the same
                thing.
              </motion.p>

              <motion.div
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.7, ease }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-3"
              >
                <a
                  href="#presentations"
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors duration-200 active:scale-[0.98]"
                >
                  See the presentations
                  <ArrowUpRight size={14} weight="bold" />
                </a>
                <a
                  href="#story"
                  className="text-sm text-muted hover:text-foreground transition-colors duration-200 px-1"
                >
                  Read my story
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROOF ── */}
      <section id="proof" className="py-24 md:py-32 border-y border-border">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <Reveal>
            <p className="text-accent text-sm font-medium tracking-wide mb-4">
              The proof
            </p>
            <h2 className="font-serif italic text-3xl md:text-5xl tracking-tight leading-tight text-foreground mb-4">
              Results, not promises
            </h2>
            <p className="text-muted text-base leading-relaxed max-w-[55ch] mb-14">
              Everything I teach is built on things I have actually done. These
              are the numbers from the last 12 months.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden border border-border">
            {proof.map((item, i) => (
              <Reveal key={item.stat} delay={i * 0.05}>
                <div className="bg-surface p-8 h-full">
                  <p className="font-serif italic text-3xl md:text-4xl text-foreground tracking-tight">
                    {item.stat}
                  </p>
                  <p className="text-accent text-xs font-medium uppercase tracking-[0.1em] mt-1 mb-3">
                    {item.context}
                  </p>
                  <p className="text-muted text-sm leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORY ── */}
      <section id="story" className="py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <Reveal>
            <p className="text-accent text-sm font-medium tracking-wide mb-4">
              The journey
            </p>
            <h2 className="font-serif italic text-3xl md:text-5xl tracking-tight leading-tight text-foreground mb-4">
              From editor to AI director
              <br />
              <span className="text-muted">in 12 months</span>
            </h2>
            <p className="text-muted text-base leading-relaxed max-w-[55ch] mb-14">
              I did not study computer science. I did not have a team. I just
              started using the tools and refused to stop until they worked.
            </p>
          </Reveal>

          <div className="max-w-[700px]">
            {timeline.map((item, i) => (
              <Reveal key={`${item.year}-${item.title}`} delay={i * 0.06}>
                <div className="flex gap-6 md:gap-8 pb-10 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-surface-warm border border-border flex items-center justify-center shrink-0">
                      <span className="text-[11px] font-mono text-muted">
                        {item.year}
                      </span>
                    </div>
                    {i < timeline.length - 1 && (
                      <div className="w-px flex-1 bg-border mt-2" />
                    )}
                  </div>
                  <div className="pt-2 pb-2">
                    <h3 className="text-foreground font-medium text-base mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRAINING ── */}
      <section
        id="presentations"
        className="py-24 md:py-32 border-y border-border bg-surface-warm"
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <Reveal>
            <p className="text-accent text-sm font-medium tracking-wide mb-4">
              Presentations
            </p>
            <h2 className="font-serif italic text-3xl md:text-5xl tracking-tight leading-tight text-foreground mb-4">
              Two sessions.
              <br />
              <span className="text-muted">Real tools, live demos.</span>
            </h2>
            <p className="text-muted text-base leading-relaxed max-w-[55ch] mb-14">
              I deliver two focused presentations, each built on work I have
              done for real clients. No theory decks. I open the tools, run them
              live, and show you exactly what is possible.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {offerings.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="bg-surface rounded-xl border border-border p-8 md:p-10 h-full">
                  <div className="w-10 h-10 rounded-lg bg-surface-warm border border-border flex items-center justify-center mb-6">
                    <item.icon
                      size={20}
                      weight="regular"
                      className="text-accent"
                    />
                  </div>
                  <h3 className="text-foreground font-medium text-xl mb-1 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-accent text-xs font-medium mb-4">
                    {item.subtitle}
                  </p>
                  <p className="text-muted text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <ul className="space-y-2.5">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-2.5 text-sm text-foreground/80"
                      >
                        <Play
                          size={8}
                          weight="fill"
                          className="text-accent shrink-0"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="max-w-[600px]">
            <Reveal>
              <p className="text-accent text-sm font-medium tracking-wide mb-4">
                Get in touch
              </p>
              <h2 className="font-serif italic text-3xl md:text-5xl tracking-tight leading-tight text-foreground mb-4">
                Book a presentation
              </h2>
              <p className="text-muted text-base leading-relaxed mb-10">
                I deliver AI content creation and Claude for business
                presentations to companies and teams of any size. Each session
                includes live tool demos, real examples from client work, and
                practical takeaways. Based in Manchester, available anywhere.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-3 mb-10">
                <a
                  href="mailto:baileysadler@hotmail.co.uk"
                  className="group flex items-center gap-3 text-foreground hover:text-accent transition-colors duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-surface-warm border border-border flex items-center justify-center">
                    <EnvelopeSimple size={16} weight="regular" />
                  </div>
                  <span className="text-sm">baileysadler@hotmail.co.uk</span>
                  <ArrowUpRight
                    size={12}
                    className="text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  />
                </a>

                <a
                  href="https://linkedin.com/in/baileysadler"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-foreground hover:text-accent transition-colors duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-surface-warm border border-border flex items-center justify-center">
                    <LinkedinLogo size={16} weight="regular" />
                  </div>
                  <span className="text-sm">linkedin.com/in/baileysadler</span>
                  <ArrowUpRight
                    size={12}
                    className="text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-muted/50 text-xs font-mono">
                Manchester, UK &middot; Open to relocation &middot; Available
                now
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-border py-8">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-serif italic text-sm text-muted">
            Bailey Sadler
          </span>
          <p className="text-muted/40 text-xs font-mono">
            Built with AI, obviously
          </p>
        </div>
      </footer>
    </main>
  );
}
