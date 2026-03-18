"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Lightning,
  Robot,
  Code,
  VideoCamera,
  ArrowUpRight,
  EnvelopeSimple,
  LinkedinLogo,
  MapPin,
} from "@phosphor-icons/react";

const ease = [0.32, 0.72, 0, 1] as const;

function ScrollReveal({
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
      initial={{ y: 40, opacity: 0, filter: "blur(8px)" }}
      whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const stats = [
  { value: "\u00a325,000", label: "Per-video valuation from a $2B airline" },
  { value: "10+", label: "Live web apps shipped with Claude Code" },
  {
    value: "4 wks \u2192 same day",
    label: "Content turnaround rebuilt from scratch",
  },
  {
    value: "\u00a38,000+",
    label: "Per-video agency cost eliminated with AI",
  },
  { value: "200K\u20131M", label: "Views per video at LADbible Group" },
  { value: "27+", label: "AI content projects delivered since Oct 2025" },
];

const services = [
  {
    icon: VideoCamera,
    title: "AI content production",
    description:
      "End-to-end generative video, image, and voice pipelines that replace agency dependency. Same quality, fraction of the cost, same-day turnaround.",
  },
  {
    icon: Robot,
    title: "AI automation",
    description:
      "Voice agents, lead qualification bots, and workflow automation using VAPI, ElevenLabs, and Make.com. Systems that run while you sleep.",
  },
  {
    icon: Code,
    title: "AI-native product builds",
    description:
      "Full web applications built and shipped with Claude Code. From SaaS concepts to operational tools, deployed independently with no engineering team.",
  },
  {
    icon: Lightning,
    title: "AI strategy and integration",
    description:
      "Audit your current workflows, identify where AI creates leverage, and build the infrastructure to make it permanent. Not a demo. A system.",
  },
];

const experience = [
  {
    role: "AI Creative Director",
    company: "flydubai",
    via: "Via Capra Studio",
    period: "2025",
    result:
      "Directed generative content for a $2B global airline across 100+ routes. Work valued at \u00a325,000 per video by the client. Zero pushback on quality or price.",
  },
  {
    role: "AI Content Manager",
    company: "Darts Corner",
    period: "Oct 2025 \u2013 Present",
    result:
      "Sole AI content creator. 27+ projects delivered. Rebuilt turnaround from 4 weeks to same-day. Eliminated \u00a38,000+ per-video agency costs entirely.",
  },
  {
    role: "Founder & CEO",
    company: "Capra AI & Capra Studio",
    period: "Dec 2024 \u2013 Present",
    result:
      "Two AI ventures spanning conversational automation and enterprise generative content. 10+ live web applications shipped. Enterprise commissions secured independently.",
  },
  {
    role: "Snapchat Manager",
    company: "LADbible Group",
    period: "Apr 2024 \u2013 May 2025",
    result:
      "Managed Snapchat pages exceeding 1M followers. 200K\u20131M views per video. 10\u201315 videos per week across multiple channels at one of the UK\u2019s largest publishers.",
  },
];

const tools = [
  { category: "AI Video", items: "Google Flow / Veo, Runway, Sora" },
  {
    category: "Generative Image",
    items: "Midjourney, DALL-E, Stable Diffusion, Adobe Firefly",
  },
  { category: "Voice & Agents", items: "ElevenLabs, VAPI AI, Retell AI" },
  { category: "Development", items: "Claude Code, Make.com, Zapier" },
  { category: "AI Platforms", items: "Claude, ChatGPT, Gemini, Perplexity" },
  {
    category: "Post-Production",
    items: "Premiere Pro, Final Cut Pro, Photoshop",
  },
];

export default function Home() {
  return (
    <main>
      {/* ── NAV ── */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-8 px-8 py-3.5 rounded-full bg-surface/80 backdrop-blur-2xl border border-border"
      >
        <span className="font-serif italic text-lg tracking-tight text-foreground">
          BS
        </span>
        <div className="hidden md:flex items-center gap-7">
          {["Services", "Track record", "Tools", "Contact"].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase().replace(" ", "-")}`}
              className="text-[13px] text-muted hover:text-foreground transition-colors duration-300 tracking-wide uppercase"
            >
              {label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 pl-5 pr-4 py-2 rounded-full bg-accent/10 text-accent text-[13px] tracking-wide hover:bg-accent/20 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
        >
          Work with me
          <span className="w-6 h-6 rounded-full bg-accent/15 flex items-center justify-center text-[11px]">
            <ArrowUpRight size={12} weight="bold" />
          </span>
        </a>
      </motion.nav>

      {/* ── HERO ── */}
      <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/4 blur-[200px]" />
          <div className="absolute bottom-1/4 left-1/6 w-[300px] h-[300px] rounded-full bg-accent-light/3 blur-[150px]" />
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 py-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">
            {/* Text */}
            <div className="md:col-span-7">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease }}
              >
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/8 border border-accent/10 text-[10px] uppercase tracking-[0.2em] text-accent-light font-medium mb-8">
                  <MapPin size={12} weight="fill" />
                  Manchester, UK
                </span>
              </motion.div>

              <motion.h1
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5, ease }}
                className="font-serif italic text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.95] text-foreground mb-6"
              >
                Bailey
                <br />
                Sadler
              </motion.h1>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.65, ease }}
                className="text-xl md:text-2xl text-accent font-medium tracking-tight mb-4"
              >
                AI Transformation Director
              </motion.p>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.8, ease }}
                className="text-base md:text-lg text-muted leading-relaxed max-w-[52ch] mb-10"
              >
                I help businesses replace expensive agencies, manual workflows,
                and slow production cycles with AI systems that actually ship.
                8+ years in digital media. Enterprise clients. 10+ live
                applications built and deployed.
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.95, ease }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
              >
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-accent text-background text-sm font-medium tracking-wide hover:bg-accent-light transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
                >
                  Work with me
                  <span className="w-7 h-7 rounded-full bg-background/15 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-px transition-transform duration-500">
                    <ArrowUpRight size={14} weight="bold" />
                  </span>
                </a>
                <a
                  href="#track-record"
                  className="text-sm text-muted hover:text-foreground transition-colors duration-300 underline underline-offset-4 decoration-border hover:decoration-accent/40"
                >
                  See the track record
                </a>
              </motion.div>
            </div>

            {/* Photo */}
            <motion.div
              initial={{ y: 30, opacity: 0, scale: 0.97 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6, ease }}
              className="md:col-span-5 flex justify-center md:justify-end"
            >
              <div className="rounded-[2.5rem] bg-surface border border-border p-2 shadow-[0_20px_60px_-15px_rgba(201,165,92,0.08)]">
                <div className="rounded-[calc(2.5rem-0.5rem)] overflow-hidden relative w-[280px] h-[350px] md:w-[340px] md:h-[425px]">
                  <Image
                    src="/images/bailey.jpg"
                    alt="Bailey Sadler"
                    fill
                    priority
                    quality={95}
                    sizes="(max-width: 768px) 280px, 340px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-6 border-y border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-6 py-10">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.06}>
                <div>
                  <p className="text-2xl md:text-3xl font-serif italic text-accent tracking-tight mb-1.5">
                    {stat.value}
                  </p>
                  <p className="text-muted text-xs leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-32 md:py-44">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <span className="inline-block px-3 py-1.5 rounded-full bg-accent/8 border border-accent/10 text-[10px] uppercase tracking-[0.2em] text-accent-light font-medium mb-5">
              What I do
            </span>
            <h2 className="font-serif italic text-4xl md:text-6xl tracking-tighter leading-none text-foreground mb-16">
              Built to replace
              <br />
              what slows you down
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.1}>
                <div className="group rounded-[2rem] bg-surface border border-border p-1.5 h-full">
                  <div className="rounded-[calc(2rem-0.375rem)] bg-surface-light p-8 md:p-10 h-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)]">
                    <div className="w-12 h-12 rounded-2xl bg-accent/8 border border-accent/10 flex items-center justify-center mb-6">
                      <service.icon
                        size={24}
                        weight="light"
                        className="text-accent"
                      />
                    </div>
                    <h3 className="text-foreground font-medium text-lg mb-3 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRACK RECORD ── */}
      <section id="track-record" className="py-32 md:py-44 relative">
        <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] rounded-full bg-accent/3 blur-[200px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <span className="inline-block px-3 py-1.5 rounded-full bg-accent/8 border border-accent/10 text-[10px] uppercase tracking-[0.2em] text-accent-light font-medium mb-5">
              Experience
            </span>
            <h2 className="font-serif italic text-4xl md:text-6xl tracking-tighter leading-none text-foreground mb-16">
              Track record
            </h2>
          </ScrollReveal>

          <div className="space-y-4">
            {experience.map((exp, i) => (
              <ScrollReveal key={exp.company} delay={i * 0.1}>
                <div className="rounded-[2rem] bg-surface border border-border p-1.5">
                  <div className="rounded-[calc(2rem-0.375rem)] bg-surface-light p-8 md:p-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)]">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-foreground font-medium text-lg tracking-tight">
                          {exp.role}
                        </h3>
                        <p className="text-accent text-sm">
                          {exp.company}
                          {exp.via && (
                            <span className="text-muted">
                              {" "}
                              &middot; {exp.via}
                            </span>
                          )}
                        </p>
                      </div>
                      <span className="text-xs text-muted font-mono tracking-wide shrink-0">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-muted text-sm leading-relaxed max-w-[70ch]">
                      {exp.result}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOOLS ── */}
      <section id="tools" className="py-32 md:py-44">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <span className="inline-block px-3 py-1.5 rounded-full bg-accent/8 border border-accent/10 text-[10px] uppercase tracking-[0.2em] text-accent-light font-medium mb-5">
              Stack
            </span>
            <h2 className="font-serif italic text-4xl md:text-6xl tracking-tighter leading-none text-foreground mb-16">
              Tools I work with
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {tools.map((tool, i) => (
              <ScrollReveal key={tool.category} delay={i * 0.08}>
                <div className="rounded-[2rem] bg-surface border border-border p-1.5 h-full">
                  <div className="rounded-[calc(2rem-0.375rem)] bg-surface-light p-7 h-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)]">
                    <p className="text-accent text-xs uppercase tracking-[0.15em] font-medium mb-3">
                      {tool.category}
                    </p>
                    <p className="text-foreground/80 text-sm leading-relaxed">
                      {tool.items}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-32 md:py-44 relative">
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/4 blur-[200px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <ScrollReveal>
              <span className="inline-block px-3 py-1.5 rounded-full bg-accent/8 border border-accent/10 text-[10px] uppercase tracking-[0.2em] text-accent-light font-medium mb-5">
                Get in touch
              </span>
              <h2 className="font-serif italic text-4xl md:text-6xl tracking-tighter leading-none text-foreground mb-6">
                Ready to move faster
                <br />
                with AI?
              </h2>
              <p className="text-muted text-base leading-relaxed mb-10 max-w-[50ch] mx-auto">
                Whether you need a fractional AI director, a full content
                pipeline rebuild, or someone to ship your product idea in a week
                — I am available for consulting, projects, and full-time roles.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <a
                  href="mailto:baileysadler@hotmail.co.uk"
                  className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-accent text-background text-sm font-medium tracking-wide hover:bg-accent-light transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
                >
                  <EnvelopeSimple size={16} weight="bold" />
                  baileysadler@hotmail.co.uk
                </a>
                <a
                  href="https://linkedin.com/in/baileysadler"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border text-foreground text-sm tracking-wide hover:border-accent/30 hover:bg-surface-light transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
                >
                  <LinkedinLogo size={16} weight="bold" />
                  LinkedIn
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <p className="text-muted/40 text-xs font-mono">
                Manchester, UK &middot; Open to relocation &middot; Available
                now
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-border py-8">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
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
