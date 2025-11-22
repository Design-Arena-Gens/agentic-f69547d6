'use client';

import { useState } from "react";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const prompt = `You are an elite motion designer building a 12-slide cinematic presentation titled "Web Development Frontiers: Designing Immersive Music-Driven Experiences" for a college audience.

Core narrative:
- Introduce the evolution of web development, highlighting modern stacks (HTML/CSS/JS, React, Next.js, Vercel) and why they matter for immersive experiences.
- Showcase my custom music player website with linked social accounts as a hero case study (provide space for a full-width screenshot I will supply).
- Emphasize futuristic UI/UX patterns, real-time interactivity, 3D/WEBGL, and AI-assisted workflows.
- Close with actionable takeaways for students beginning their web journey.

Visual + motion language (use Luis Urrutia's YouTube edits as stylistic reference):
- Chrome-neon palette with deep blacks, magenta/aqua lighting, holographic grids, volumetric light streaks, and particle fields.
- Aggressive parallax camera moves, whip pans, and zoom-based text masks synchronized to bass-heavy electronic music.
- Morphing typography, glitch reveals, liquid transitions, and seamless match cuts between slides.
- Layered HUD elements, blueprint schematics, and wireframe render passes for depth.

Slide flow (each slide = 6-10 dynamic text beats + supporting visuals):
1. Title Impact: "Web Development Frontiers" with massive typographic mask reveal over a pulsing cityscape and audio-reactive equalizer bars.
2. The Hook: Fast-paced stats on internet usage + short clips of iconic web moments (Web1 -> Web2 -> Web3) with escalating zooms.
3. Timeline Morph: Animated arc chart showing evolution from static pages to immersive, component-driven experiences.
4. Pillars Slide: Four rotating panels (Design, Frontend Tech, Performance, Accessibility) floating in zero-g with holographic captions.
5. Tech Stack Deep Dive: Exploded view of HTML, CSS, JS, React, Next.js, API, and deployment layers with glowing connectors.
6. UX Craft Slide: Showcase modular UI patterns, responsive breakpoints, and micro-interactions using floating device frames.
7. Music Player Case Study: Cinematic showcase of my site (insert screenshot/video). Highlight album art animation, waveform visualization, and social links.
8. Social & Community: Animated carousel of Instagram/Twitter/TikTok mockups, focusing on link-outs and audience engagement loops.
9. Immersive Techniques: 3D room reveal demonstrating WebGL shaders, spatial audio callouts, and real-time visualizers.
10. Future Radar: Forecast slide with neon radar sweep, labeling AI-assisted dev, AR overlays, edge compute, and multi-sensory storytelling.
11. Call-To-Action: Bold typography "Build the Next Wave" with kinetic typography, particle burst, and roadmap checklist.
12. Credits/Outro: Looping outro with QR code to my live site, tagline, and glowing contact icons.

Animation + pacing notes:
- Maintain 16:9 aspect, 4K-friendly assets, and 60fps animation timing.
- Start each slide with an impactful cold open, then layer supporting beats with staggered timing (0.2-0.4s offsets).
- Use synchronized sound design cues (risers, bass drops, synth swells) to motivate zooms, text masks, and color shifts.
- Integrate depth-of-field blur, lens distortion, and chromatic aberration on key cuts.

Delivery:
- Return layered scenes ready for edit or direct render.
- Provide short caption prompts per slide for narration.
- Include placeholders indicating where I insert the music player screenshot and any stat numbers I will supply.
- Export as a SkyWork.ai-ready storyboard or direct render pipeline with notes for Murf AI voiceover if available.`;

  const slideHighlights = [
    {
      title: "Opening Impact",
      detail:
        "Neon cityscape intro with pulsating equalizer bars to hype the web development journey.",
    },
    {
      title: "Evolution Timeline",
      detail:
        "Morphing timeline that evolves from static Web1 pages into immersive, component-driven experiences.",
    },
    {
      title: "Tech Stack Deep Dive",
      detail:
        "Exploded diagram of HTML, CSS, JavaScript, React, Next.js, and deployment layers with glow-trace connections.",
    },
    {
      title: "Music Player Showcase",
      detail:
        "Hero shot of your music player site with animated album art, waveform visualizer, and social link callouts.",
    },
    {
      title: "Immersive Techniques",
      detail:
        "3D room reveal featuring WebGL shaders, spatial audio cues, and real-time particle effects.",
    },
    {
      title: "Future Radar",
      detail:
        "Neon radar sweep that tags AI-assisted development, AR overlays, and edge computing as the next frontier.",
    },
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2600);
    } catch (error) {
      console.error("Copy failed", error);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#3b82f6_0%,transparent_55%),radial-gradient(circle_at_20%_80%,#a855f7_0%,transparent_45%),radial-gradient(circle_at_80%_30%,#22d3ee_0%,transparent_40%)] opacity-60 blur-[110px]" />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(15,23,42,0.95),rgba(9,9,11,0.85))]" />

      <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-16 px-6 py-16 md:px-12 lg:px-16">
        <header className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/70 backdrop-blur">
            SkyWork.ai Master Prompt
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
            Futuristic Web Development Deck for Your Music Player Showcase
          </h1>
          <p className="max-w-3xl text-lg text-white/70 md:text-xl">
            Drop this prompt into SkyWork.ai to produce an immersive, Luis
            Urrutia-inspired presentation packed with techno cinematics, text
            masks, and 3D transitions. It highlights your custom music player
            site, social integrations, and the future of web development.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          {slideHighlights.map((item) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80 shadow-[0_25px_60px_rgba(15,23,42,0.35)] transition hover:border-white/30 hover:bg-white/10"
            >
              <div className="absolute -left-10 top-1/2 h-36 w-36 -translate-y-1/2 rotate-45 bg-gradient-to-br from-white/20 to-transparent opacity-20 transition group-hover:opacity-40" />
              <h2 className="mb-3 text-xl font-semibold text-white">
                {item.title}
              </h2>
              <p className="text-sm leading-relaxed">{item.detail}</p>
            </article>
          ))}
        </section>

        <section className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 shadow-[0_35px_85px_rgba(8,47,73,0.45)] backdrop-blur">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-white md:text-3xl">
              Copy-and-Launch Prompt
            </h2>
            <p className="text-sm text-white/60">
              Paste into SkyWork.ai. Replace placeholders with your assets
              (music player screenshot, stats, social handles) before rendering.
            </p>
          </div>

          <div className="relative">
            <pre className="max-h-[480px] overflow-y-auto rounded-2xl bg-black/70 p-6 text-sm leading-relaxed text-white/90 shadow-inner shadow-indigo-900/50">
              {prompt}
            </pre>
            <button
              onClick={handleCopy}
              className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/80 transition hover:border-white/40 hover:bg-white/20"
            >
              {copied ? "Prompt Copied" : "Copy Prompt"}
            </button>
          </div>
        </section>

        <section className="mb-12 flex flex-col gap-4 rounded-3xl border border-white/10 bg-black/60 p-6 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl leading-relaxed text-white/70">
            <strong className="text-white">Pro tips:</strong> Export a crisp
            screenshot of your music player hero section, gather key metrics for
            slide 2, and prep a short script for Murf AI to narrate the deck.
          </div>
          <a
            href="https://agentic-f69547d6.vercel.app"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/80 transition hover:border-white/40 hover:bg-white/20"
          >
            Preview Destination
          </a>
        </section>
      </main>
    </div>
  );
}
