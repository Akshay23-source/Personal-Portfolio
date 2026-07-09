import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import {
  Menu,
  X,
  ArrowUp,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Download,
  ExternalLink,
  Sparkles,
  Code2,
  Brain,
  Shield,
  Rocket,
  GraduationCap,
  Award,
  Trophy,
  BookOpen,
  Send,
  CheckCircle2,
  Star,
  Activity,
  Cpu,
} from "lucide-react";
import {
  NAV,
  CONTACT,
  ROLES,
  STATS,
  SKILLS,
  PROJECTS,
  EXPERIENCE,
  EDUCATION,
  CERTIFICATIONS,
  ACHIEVEMENTS,
  LEARNING,
  TESTIMONIALS,
  BLOG,
  type Project,
} from "./data";

/* --------------------------------- hooks --------------------------------- */

function useTypewriter(words: string[], speed = 80, pause = 1400) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const current = words[i % words.length];
    const t = setTimeout(
      () => {
        if (!del) {
          const next = current.slice(0, text.length + 1);
          setText(next);
          if (next === current) setTimeout(() => setDel(true), pause);
        } else {
          const next = current.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setDel(false);
            setI((v) => v + 1);
          }
        }
      },
      del ? speed / 2 : speed,
    );
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);
  return text;
}

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [ids]);
  return active;
}

function useCountUp(target: number, on: boolean, duration = 1400) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!on) return;
    const start = performance.now();
    let raf = 0;
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [on, target, duration]);
  return n;
}

/* -------------------------------- layout -------------------------------- */

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const width = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });
  return (
    <motion.div
      style={{ scaleX: width, transformOrigin: "0% 50%" }}
      className="fixed left-0 right-0 top-0 z-[60] h-[3px] bg-gradient-to-r from-brand via-brand-accent to-brand-violet"
    />
  );
}

function BackgroundFX() {
  const snowflakes = useMemo(() =>
    Array.from({ length: 45 }, (_, i) => ({
      left: `${(i * 17.3 + 7) % 100}%`,
      size: (i % 3 === 0 ? 4 : i % 2 === 0 ? 3 : 2) + Math.random() * 2,
      dur: `${8 + (i % 4) * 3}s`,
      delay: `${-(i * 0.45) % 10}s`,
      drift: `${(i % 2 === 0 ? 25 : -25) + (i % 5) * 4}px`,
      opacity: 0.3 + (i % 5) * 0.1,
    })), []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Snowflakes */}
      <div className="absolute inset-0">
        {snowflakes.map((s, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white shadow-[0_0_4px_rgba(255,255,255,0.6)] animate-snowfall"
            style={{
              left: s.left,
              width: `${s.size}px`,
              height: `${s.size}px`,
              top: '-15px',
              ['--dur' as string]: s.dur,
              ['--delay' as string]: s.delay,
              ['--drift' as string]: s.drift,
              ['--opacity' as string]: s.opacity,
            }}
          />
        ))}
      </div>
      {/* Grid */}
      <div className="bg-grid absolute inset-0 opacity-[0.04]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_30%,var(--background)_80%)]" />
      {/* Aurora blobs */}
      <div className="animate-aurora absolute -top-40 -left-40 h-[500px] w-[700px] rounded-full bg-brand/8 blur-[100px]" />
      <div className="animate-aurora absolute top-1/3 -right-40 h-[500px] w-[700px] rounded-full bg-brand-violet/5 blur-[100px] [animation-delay:3s]" />
      <div className="animate-aurora absolute bottom-0 left-1/4 h-[400px] w-[600px] rounded-full bg-brand-accent/5 blur-[100px] [animation-delay:6s]" />
    </div>
  );
}

function Navbar({ active }: { active: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <nav
          className={`glass flex items-center justify-between rounded-2xl px-4 py-3 transition-all ${
            scrolled ? "shadow-[0_10px_40px_-15px_rgba(59,130,246,0.4)]" : ""
          }`}
        >
          <a href="#home" className="group flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand via-brand-accent to-brand-violet text-sm font-bold text-white shadow-lg">
              A
            </span>
            <span className="font-display text-lg font-bold tracking-tight">
              Akshay
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-link-hover relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    active === item.id
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                  {active === item.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-lg bg-brand/15 ring-1 ring-brand/30"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden rounded-xl bg-gradient-to-r from-brand to-brand-violet px-4 py-2 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5 lg:inline-flex"
          >
            Let's talk
          </a>

          <button
            aria-label="Toggle menu"
            className="rounded-lg border border-border p-2 lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="glass mt-2 overflow-hidden rounded-2xl p-3 lg:hidden"
            >
              <ul className="grid gap-1">
                {NAV.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-white/5 hover:text-foreground"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

/* ----------------------------- section shell ----------------------------- */

const wordReveal = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};
const wordChild = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  const words = title ? title.split(" ") : [];
  return (
    <section id={id} className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        {(eyebrow || title || subtitle) && (
          <div className="mx-auto mb-14 max-w-2xl text-center">
            {eyebrow && (
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium text-brand"
              >
                <Sparkles size={12} /> {eyebrow}
              </motion.span>
            )}
            {title && (
              <motion.h2
                variants={wordReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
              >
                {words.map((w, i) => (
                  <motion.span key={i} variants={wordChild} className="mr-[0.3em] inline-block">
                    {w}
                  </motion.span>
                ))}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-4 text-muted-foreground"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

/* --------------------------------- hero --------------------------------- */

const heroStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const heroFadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

function RollingButton({ href, children, className, icon, download, target }: { href: string; children: string; className: string; icon?: React.ReactNode; download?: string | boolean; target?: string }) {
  return (
    <a href={href} download={download} target={target} className={`btn-roll rounded-xl px-5 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${className}`}>
      {icon}
      <span className="btn-roll-text">
        <span>{children}</span>
        <span>{children}</span>
      </span>
    </a>
  );
}

function Hero() {
  const titleWords = ["Hi,", "I'm"];
  const nameWords = ["Akshay", "Gabrieal", "R"];

  return (
    <section
      id="home"
      className="relative flex min-h-screen scroll-mt-24 items-center pt-28"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-4 text-center">
        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.h1 variants={heroFadeUp} className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            {titleWords.map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                className="mr-[0.3em] inline-block"
              >{w}</motion.span>
            ))}
            {nameWords.map((w, i) => (
              <motion.span
                key={`n-${i}`}
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 0.5 + i * 0.12 }}
                className="text-gradient mr-[0.3em] inline-block"
              >{w}</motion.span>
            ))}
          </motion.h1>



          <motion.p variants={heroFadeUp} className="mt-6 mx-auto max-w-xl text-base text-muted-foreground sm:text-lg">
            I build intelligent, scalable, and user-centric applications that
            solve real-world problems using AI, software engineering, cloud,
            and cybersecurity.
          </motion.p>

          <motion.div variants={heroFadeUp} className="mt-8 flex flex-wrap justify-center gap-3">
            <RollingButton
              href="#projects"
              className="bg-gradient-to-r from-brand to-brand-violet text-white shadow-lg"
              icon={<ArrowRight size={16} />}
            >
              View Projects
            </RollingButton>
            <RollingButton
              href="/resume.pdf"
              download="Akshay_Gabrieal_R_Resume.pdf"
              target="_blank"
              className="border border-border bg-white/5 text-foreground backdrop-blur-md hover:border-brand/40 hover:bg-white/10"
              icon={<Download size={16} />}
            >
              Download Resume
            </RollingButton>
            <RollingButton
              href="#contact"
              className="border border-border bg-transparent text-foreground hover:border-brand/40 hover:bg-white/5"
              icon={<Mail size={16} />}
            >
              Contact Me
            </RollingButton>
          </motion.div>

          <motion.div variants={heroFadeUp} className="mt-10 flex items-center justify-center gap-4 text-muted-foreground">
            <a href={CONTACT.github} target="_blank" rel="noreferrer" className="rounded-lg p-2 transition-all duration-300 hover:bg-white/5 hover:text-foreground hover:scale-110">
              <Github size={20} />
            </a>
            <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="rounded-lg p-2 transition-all duration-300 hover:bg-white/5 hover:text-foreground hover:scale-110">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${CONTACT.email}`} className="rounded-lg p-2 transition-all duration-300 hover:bg-white/5 hover:text-foreground hover:scale-110">
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-border p-1"
        >
          <span className="mt-1 block h-2 w-1 rounded-full bg-brand" />
        </motion.div>
      </a>
    </section>
  );
}

function FloatingChip({
  className = "",
  icon,
  label,
}: {
  className?: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div
      className={`animate-float glass absolute inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold text-foreground shadow-lg ${className}`}
    >
      <span className="text-brand">{icon}</span>
      {label}
    </div>
  );
}

/* --------------------------------- about --------------------------------- */

function StatCard({ value, label, delay }: { value: number; label: string; delay: number }) {
  const [seen, setSeen] = useState(false);
  const n = useCountUp(value, seen);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      onViewportEnter={() => setSeen(true)}
      transition={{ duration: 0.5, delay }}
      className="glass rounded-2xl p-5 text-center"
    >
      <div className="text-gradient font-display text-3xl font-bold sm:text-4xl">
        {n}+
      </div>
      <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{label}</div>
    </motion.div>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="About">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle background glow effect inside the card */}
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-brand/10 blur-[80px] pointer-events-none animate-pulse-glow" />
          <div className="absolute -left-20 -bottom-20 h-60 w-60 rounded-full bg-brand-violet/10 blur-[80px] pointer-events-none" />

          {/* Centered High-impact copy text */}
          <div className="space-y-6 relative z-10">
            <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground font-light">
              I'm a <span className="text-gradient font-semibold font-display">Computer Science Engineering student</span> passionate about building software that solves real-world problems. I enjoy transforming ideas into practical applications while continuously learning modern technologies.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              My interests include <span className="text-foreground font-semibold">Software Engineering</span>, <span className="text-foreground font-semibold">Artificial Intelligence</span>, <span className="text-foreground font-semibold">Machine Learning</span>, <span className="text-foreground font-semibold">Cloud Computing</span>, <span className="text-brand-accent font-semibold">Generative AI</span>, and <span className="text-foreground font-semibold">Cybersecurity</span>. I'm currently exploring <span className="text-brand-violet font-semibold">LLMs</span>, <span className="text-brand font-semibold">AI Agents</span>, and scalable application development using modern AI Tools to build intelligent and production-ready solutions.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              Beyond academics, I enjoy participating in innovation challenges and building projects that combine AI with real-world impact. As a <span className="text-foreground font-semibold">professional hockey player</span> and <span className="text-foreground font-semibold">NCC cadet</span>, I've developed discipline, leadership, teamwork, resilience, and a strong work ethic—qualities that shape how I approach both engineering and continuous learning.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

/* --------------------------------- skills --------------------------------- */

function SkillMarquee({ items, direction = "left", speed = 30 }: { items: string[]; direction?: "left" | "right"; speed?: number }) {
  // Duplicate items enough to fill the screen and then some
  const doubled = [...items, ...items, ...items];
  const dur = items.length * (60 / speed);
  return (
    <div className="relative overflow-hidden py-2">
      {/* fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
      <motion.div
        className="flex w-max gap-3"
        animate={{ x: direction === "left" ? ["-0%", "-33.333%"] : ["-33.333%", "-0%"] }}
        transition={{ duration: dur, ease: "linear", repeat: Infinity }}
      >
        {doubled.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="inline-flex items-center whitespace-nowrap rounded-lg border border-brand/20 bg-brand/10 px-4 py-2 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-brand/50 hover:bg-brand/20"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function Skills() {
  const half = Math.ceil(SKILLS.length / 2);
  const row1 = SKILLS.slice(0, half);
  const row2 = SKILLS.slice(half);

  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools I build with"
      subtitle="A pragmatic stack across programming, web, AI, and security."
    >
      <div className="grid gap-4">
        <SkillMarquee items={row1} direction="left" speed={25} />
        <SkillMarquee items={row2} direction="right" speed={20} />
      </div>
    </Section>
  );
}

/* -------------------------------- projects -------------------------------- */

const FILTERS = ["All", "AI", "Web", "Mobile", "Cybersecurity"] as const;
type Filter = (typeof FILTERS)[number];

function ProjectCard({ p }: { p: Project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4 }}
      className="glass card-glow group relative flex h-full flex-col overflow-hidden rounded-2xl p-6"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="rounded-full border border-brand/20 bg-brand/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand backdrop-blur">
          {p.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col">
        <h3 className="text-lg font-semibold">{p.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>

        <div className="mt-4 grid gap-2 text-xs text-muted-foreground">
          <div><span className="text-foreground font-semibold">Problem:</span> {p.problem}</div>
          <div>
            <span className="text-foreground font-semibold">Key features:</span>{" "}
            {p.features.join(", ")}
          </div>
          <div><span className="text-foreground font-semibold">Challenges:</span> {p.challenges}</div>
          <div><span className="text-foreground font-semibold">Learnings:</span> {p.learnings}</div>
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {p.stack.map((t) => (
            <span key={t} className="rounded-md border border-border/60 bg-white/5 px-2 py-0.5 text-[10px] text-muted-foreground">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-2 pt-2 mt-auto">
          <a
            href={p.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-border bg-white/5 px-3 py-2 text-xs font-semibold transition hover:border-brand/40 hover:bg-white/10"
          >
            <Github size={14} /> GitHub
          </a>
          {p.demo && (
            <a
              href={p.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-brand to-brand-violet px-3 py-2 text-xs font-semibold text-white transition hover:brightness-110"
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const [query, setQuery] = useState("");
  const items = useMemo(
    () =>
      PROJECTS.filter(
        (p) =>
          (filter === "All" || p.category === filter) &&
          (query === "" ||
            p.title.toLowerCase().includes(query.toLowerCase()) ||
            p.stack.join(" ").toLowerCase().includes(query.toLowerCase())),
      ),
    [filter, query],
  );

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Featured work"
      subtitle="A selection of things I've designed, built, and shipped."
    >
      <div className="mb-8 flex flex-col items-center justify-between gap-3 sm:flex-row">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
                filter === f
                  ? "bg-gradient-to-r from-brand to-brand-violet text-white shadow-lg"
                  : "border border-border bg-white/5 text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search projects…"
          className="w-full rounded-full border border-border bg-white/5 px-4 py-2 text-sm outline-none placeholder:text-muted-foreground focus:border-brand/50 sm:w-64"
        />
      </div>

      <motion.div layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {items.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}

/* ------------------------------- experience ------------------------------- */

function Timeline({
  items,
  render,
}: {
  items: any[];
  render: (item: any) => React.ReactNode;
}) {
  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-brand/60 via-brand-violet/40 to-transparent sm:left-1/2" />
      <ul className="space-y-10">
        {items.map((it, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className={`relative pl-12 sm:grid sm:grid-cols-2 sm:gap-10 sm:pl-0 ${
              i % 2 === 0 ? "" : "sm:[&>div:first-child]:col-start-2"
            }`}
          >
            <span className="absolute left-2 top-2 h-5 w-5 rounded-full border-2 border-brand bg-background sm:left-1/2 sm:-translate-x-1/2" />
            <div className={i % 2 === 0 ? "sm:pr-10 sm:text-right" : "sm:pl-10"}>
              {render(it)}
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

function Experience() {
  const [activeCert, setActiveCert] = useState<string | null>(null);

  return (
    <Section id="experience" eyebrow="Experience" title="Experience">
      <Timeline
        items={EXPERIENCE}
        render={(e) => (
          <div className="glass card-glow inline-block w-full rounded-2xl p-5 text-left">
            <div className="text-xs font-semibold text-brand">{e.duration}</div>
            <h3 className="mt-1 text-lg font-semibold">{e.role}</h3>
            <div className="text-sm text-muted-foreground">{e.company}</div>
            <p className="mt-2 text-sm text-muted-foreground">{e.description}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {e.skills.map((s: string) => (
                <span key={s} className="rounded-md border border-border/60 bg-white/5 px-2 py-0.5 text-[10px] text-muted-foreground">
                  {s}
                </span>
              ))}
            </div>
            {e.certificate && (
              <button
                onClick={() => setActiveCert(e.certificate)}
                className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-brand/10 border border-brand/20 px-3 py-1.5 text-xs font-semibold text-brand transition-all duration-300 hover:bg-brand/20 hover:scale-105 cursor-pointer"
              >
                View Certificate <ExternalLink size={12} />
              </button>
            )}
          </div>
        )}
      />

      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCert(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
              className="glass relative flex h-[85vh] w-full max-w-5xl flex-col rounded-3xl p-6 shadow-2xl"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-display text-lg font-bold text-foreground">Certificate Preview</h3>
                <button
                  onClick={() => setActiveCert(null)}
                  className="rounded-full border border-white/10 bg-white/5 p-2 text-muted-foreground transition hover:bg-white/10 hover:text-foreground cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="flex-1 overflow-hidden rounded-2xl bg-black/20">
                <iframe
                  src={activeCert}
                  className="h-full w-full border-none"
                  title="Certificate PDF Viewer"
                />
              </div>
              <div className="mt-4 flex justify-end gap-3">
                <a
                  href={activeCert}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-semibold text-foreground transition hover:bg-white/10"
                >
                  Open in New Tab
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}

function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic journey">
      <Timeline
        items={EDUCATION}
        render={(e) => (
          <div className="glass inline-block w-full rounded-2xl p-5 text-left">
            <div className="flex items-center gap-2 text-xs font-semibold text-brand">
              <GraduationCap size={14} /> {e.duration}
            </div>
            <h3 className="mt-1 text-lg font-semibold">{e.title}</h3>
            <div className="text-sm text-muted-foreground">{e.org}</div>
            {e.detail && <div className="mt-1 text-sm font-semibold text-foreground">{e.detail}</div>}
            <div className="mt-3 flex flex-wrap gap-1.5">
              {e.courses.map((c: string) => (
                <span key={c} className="rounded-md border border-border/60 bg-white/5 px-2 py-0.5 text-[10px] text-muted-foreground">
                  {c}
                </span>
              ))}
            </div>
          </div>
        )}
      />
    </Section>
  );
}

/* ---------------------------- certifications ---------------------------- */

function Certifications() {
  const [activeCert, setActiveCert] = useState<string | null>(null);

  return (
    <Section id="certifications" eyebrow="Certifications" title="Verified credentials">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {CERTIFICATIONS.map((c, i) => {
          const isLocalCert = c.link.startsWith('/certificates/');
          return (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="glass group relative flex flex-col overflow-hidden rounded-2xl p-5"
            >
              <div className="flex h-24 items-center justify-center rounded-xl bg-gradient-to-br from-brand/25 via-brand-accent/20 to-brand-violet/25">
                <Award size={40} className="text-white/90 transition-transform group-hover:scale-110" />
              </div>
              <h3 className="mt-4 text-base font-semibold">{c.name}</h3>
              <div className="mt-1 text-xs text-muted-foreground">
                {c.issuer} · {c.date}
              </div>
              <div className="mt-4 flex gap-2">
                {isLocalCert ? (
                  <button
                    onClick={() => setActiveCert(c.link)}
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border bg-white/5 px-3 py-2 text-xs font-semibold hover:border-brand/40 cursor-pointer"
                  >
                    <ExternalLink size={12} /> View Certificate
                  </button>
                ) : (
                  <a href={c.link} target="_blank" rel="noreferrer" className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border bg-white/5 px-3 py-2 text-xs font-semibold hover:border-brand/40">
                    <ExternalLink size={12} /> Credential
                  </a>
                )}
                {isLocalCert ? (
                  <button
                    onClick={() => setActiveCert(c.link)}
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-brand/15 px-3 py-2 text-xs font-semibold text-brand cursor-pointer"
                  >
                    <CheckCircle2 size={12} /> Preview
                  </button>
                ) : (
                  <a href={c.link} target="_blank" rel="noreferrer" className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-brand/15 px-3 py-2 text-xs font-semibold text-brand">
                    <CheckCircle2 size={12} /> Verify
                  </a>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCert(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
              className="glass relative flex h-[85vh] w-full max-w-5xl flex-col rounded-3xl p-6 shadow-2xl"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-display text-lg font-bold text-foreground">Certificate Preview</h3>
                <button
                  onClick={() => setActiveCert(null)}
                  className="rounded-full border border-white/10 bg-white/5 p-2 text-muted-foreground transition hover:bg-white/10 hover:text-foreground cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="flex-1 overflow-hidden rounded-2xl bg-black/20">
                <iframe
                  src={activeCert}
                  className="h-full w-full border-none"
                  title="Certificate Preview"
                />
              </div>
              <div className="mt-4 flex justify-end gap-3">
                <a
                  href={activeCert}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-semibold text-foreground transition hover:bg-white/10"
                >
                  Open in New Tab
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}

/* ------------------------------ achievements ------------------------------ */

function Achievements() {
  return (
    <Section id="achievements" eyebrow="Achievements" title="Wins & milestones">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ACHIEVEMENTS.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="glass rounded-2xl p-5"
          >
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand/15 text-brand">
              <Trophy size={18} />
            </div>
            <h3 className="mt-3 text-base font-semibold">{a.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{a.detail}</p>
          </motion.div>
        ))}
      </div>
    </Section>
   );
}

/* ---------------------------- currently learning ---------------------------- */

function Learning() {
  return (
    <Section id="learning" eyebrow="Currently Learning" title="What's on my roadmap">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {LEARNING.map((l, i) => (
          <motion.div
            key={l.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="glass card-glow group rounded-2xl p-5 relative overflow-hidden flex items-center justify-center text-center min-h-[72px]"
          >
            <h3 className="text-base font-semibold transition-colors group-hover:text-brand-accent relative z-10">
              {l.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}


/* -------------------------------- contact -------------------------------- */

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something" subtitle="Have a role, project, or idea? Drop a message.">
      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <div className="grid content-start gap-4">
          {[
            { icon: <Mail size={16} />, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
            { icon: <Linkedin size={16} />, label: "LinkedIn", value: "Akshay Gabrieal R", href: CONTACT.linkedin },
            { icon: <Github size={16} />, label: "GitHub", value: "Akshay23-source", href: CONTACT.github },
            { icon: <MapPin size={16} />, label: "Location", value: CONTACT.location },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href?.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="glass group flex items-center gap-4 rounded-2xl p-4 transition hover:-translate-y-0.5"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/15 text-brand transition-transform group-hover:scale-110">
                {c.icon}
              </span>
              <div className="min-w-0">
                <div className="text-xs text-muted-foreground">{c.label}</div>
                <div className="truncate text-sm font-semibold">{c.value}</div>
              </div>
            </a>
          ))}
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            setTimeout(() => setSent(false), 3000);
          }}
          className="glass grid gap-4 rounded-2xl p-6"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" placeholder="Your name" />
            <Field label="Email" name="email" type="email" placeholder="you@email.com" />
          </div>
          <Field label="Subject" name="subject" placeholder="What is this about?" />
          <div className="grid gap-1.5">
            <label className="text-xs font-semibold text-muted-foreground">Message</label>
            <textarea
              required
              rows={5}
              placeholder="Your message…"
              className="rounded-xl border border-border bg-white/5 px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus:border-brand/50"
            />
          </div>
          <button
            type="submit"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand to-brand-violet px-5 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5"
          >
            {sent ? <>Sent <CheckCircle2 size={16} /></> : <>Send Message <Send size={16} /></>}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="grid gap-1.5">
      <label htmlFor={name} className="text-xs font-semibold text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="rounded-xl border border-border bg-white/5 px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus:border-brand/50"
      />
    </div>
  );
}

/* --------------------------------- footer --------------------------------- */

function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand via-brand-accent to-brand-violet font-bold text-white">A</span>
            <span className="font-display text-lg font-bold">Akshay</span>
          </div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Building intelligent, thoughtful software at the intersection of AI, product, and security.
          </p>
        </div>
        <div>
          <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Quick Links</div>
          <ul className="grid grid-cols-2 gap-1.5 text-sm">
            {NAV.slice(0, 8).map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="text-muted-foreground hover:text-foreground">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Social</div>
          <div className="flex gap-2">
            <a href={CONTACT.github} target="_blank" rel="noreferrer" className="rounded-lg border border-border p-2 transition hover:bg-white/5"><Github size={16} /></a>
            <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="rounded-lg border border-border p-2 transition hover:bg-white/5"><Linkedin size={16} /></a>
            <a href={`mailto:${CONTACT.email}`} className="rounded-lg border border-border p-2 transition hover:bg-white/5"><Mail size={16} /></a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-border/60 px-4 pt-6 text-xs text-muted-foreground sm:flex-row">
        <div>© {new Date().getFullYear()} Akshay Gabrieal R. All rights reserved.</div>
        <div>Built with <span className="text-brand">♥</span> using React &amp; TanStack Start.</div>
      </div>
    </footer>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="#home"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brand to-brand-violet text-white shadow-lg"
        >
          <ArrowUp size={18} />
        </motion.a>
      )}
    </AnimatePresence>
  );
}

/* --------------------------------- root --------------------------------- */

export default function Portfolio() {
  const active = useActiveSection(NAV.map((n) => n.id));
  return (
    <div className="relative min-h-screen text-foreground">
      <BackgroundFX />
      <ScrollProgress />
      <Navbar active={active} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Achievements />
        <Learning />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}