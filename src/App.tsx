import React, { useEffect, useMemo, useRef, useState } from "react";

/* ===========================
   LINKS
=========================== */
// Amazon
const LINKS = {
  anunnaki0: "https://amzn.eu/d/akZ7CqJ", // Codice Anunnaki — La Creazione dell’Uomo (Vol. Ø)
  anunnaki1: "https://amzn.to/3LLoUnt", // Codice Anunnaki — Gli Dei del Cielo e della Terra (Vol. 1 | Prima Parte) 
  limitless: "https://amzn.eu/d/dtR64tc", // Limitless — Codice dell’Essere
};

// Video reali
const VIDEOS = {
  mentalismo: "https://youtu.be/4sRxrqUhaaQ?si=7-KKSdo82qLwaOBN",
  corrispondenza: "https://youtu.be/vnsz0sSfCF8?si=_gy5C9Gqh2heAKT3",
  tiktokAnunnaki:
    "https://www.tiktok.com/@codicedellessere/video/7560749700723297558?is_from_webapp=1&sender_device=pc&web_id=7506816116242318870",
};

// Social
const SOCIALS = {
  instagram: "https://www.instagram.com/codicedellessere",   // <- aggiorna se serve
  tiktok: "https://www.tiktok.com/@codicedellessere",
  youtube: "https://www.youtube.com/@codicedellessere",      // <- aggiorna se serve
};

/* ===========================
   STILI GLOBALI (bagliore + titoli)
=========================== */
function GlobalGlowStyles() {
  return (
    <style
      // @ts-ignore
      dangerouslySetInnerHTML={{
        __html: `
/* --- BAGLIORE AUREO ANIMATO --- */
.social-btn, .btn-gold, .btn-outline {
  position: relative; overflow: visible;
}
.social-btn::after, .btn-gold::after, .btn-outline::after {
  content: ""; position: absolute; inset: -6px; border-radius: 14px; pointer-events: none;
  box-shadow: 0 0 0 rgba(212,175,55,0); opacity: 0; transition: opacity .25s ease;
}
.social-btn:hover::after,
.btn-gold:hover::after,
.btn-outline:hover::after {
  opacity: 1; animation: glowPulse 1.8s ease-in-out infinite;
}
@keyframes glowPulse{
  0%{box-shadow:0 0 0 rgba(212,175,55,0),0 0 0 rgba(212,175,55,0)}
  50%{box-shadow:0 0 24px rgba(212,175,55,.35),0 0 48px rgba(212,175,55,.18)}
  100%{box-shadow:0 0 0 rgba(212,175,55,0),0 0 0 rgba(212,175,55,0)}
}

/* --- TITOLI DI SEZIONE: hover + accensione in viewport --- */
.section-heading h2 {
  position: relative;
  transition: text-shadow .35s ease, color .35s ease;
}
.section-heading h2:hover {
  color: #d4af37;
  text-shadow: 0 0 10px rgba(212,175,55,.35), 0 0 24px rgba(212,175,55,.18);
}
.section-heading.inview h2 {
  animation: titleGlow 900ms ease-out 1;
}
@keyframes titleGlow {
  0%   { color: #ffffff; text-shadow: 0 0 0 rgba(212,175,55,0); }
  40%  { color: #d4af37; text-shadow: 0 0 12px rgba(212,175,55,.45), 0 0 28px rgba(212,175,55,.22); }
  100% { color: #ffffff; text-shadow: 0 0 0 rgba(212,175,55,0); }
}
      `,
      }}
    />
  );
}

/* ===========================
   SOCIAL COMPONENTS
=========================== */
function SocialLink({
  href, title, children,
}: { href: string; title: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      className="social-btn inline-flex items-center justify-center w-10 h-10 rounded-xl
                 border border-white/10 bg-white/5 text-white/80
                 hover:text-gold hover:border-gold/60
                 transition"
    >
      {children}
    </a>
  );
}

function SocialBar({ size = "md" }: { size?: "sm" | "md" }) {
  const icon = size === "sm" ? "w-5 h-5" : "w-6 h-6";
  const gap = size === "sm" ? "gap-2" : "gap-3";
  return (
    <div className={`inline-flex ${gap}`}>
      {/* Instagram */}
      <SocialLink href={SOCIALS.instagram} title="Instagram">
        <svg viewBox="0 0 24 24" className={icon} fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="3.6" />
          <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
        </svg>
      </SocialLink>
      {/* TikTok */}
      <SocialLink href={SOCIALS.tiktok} title="TikTok">
        <svg viewBox="0 0 24 24" className={icon} fill="currentColor">
          <path d="M14 3h3a4.5 4.5 0 0 0 4 4v3a7.5 7.5 0 0 1-4-1.2v7.2A6 6 0 1 1 11 10v3a3 3 0 1 0 3 3V3z"/>
        </svg>
      </SocialLink>
      {/* YouTube */}
      <SocialLink href={SOCIALS.youtube} title="YouTube">
        <svg viewBox="0 0 24 24" className={icon} fill="currentColor">
          <path d="M23 12s0-3.5-.45-5.1a3 3 0 0 0-2.1-2.1C18.8 4.3 12 4.3 12 4.3s-6.8 0-8.45.5a3 3 0 0 0-2.1 2.1C1 8.5 1 12 1 12s0 3.5.45 5.1a3 3 0 0 0 2.1 2.1c1.65.5 8.45.5 8.45.5s6.8 0 8.45-.5a3 3 0 0 0 2.1-2.1C23 15.5 23 12 23 12zM10 15.5v-7l6 3.5-6 3.5z"/>
        </svg>
      </SocialLink>
    </div>
  );
}

/* ===========================
   APP
=========================== */
export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1230] via-[#091026] to-[#000814] text-white">
      <GlobalGlowStyles />

      <header className="sticky top-0 z-40 backdrop-blur bg-[#0a1230]/70 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <img
              src="/logo-codice.png"
              alt="Codice dell’Essere"
              className="h-10 w-10 rounded-lg object-contain"
            />
            <span className="font-semibold tracking-wide text-lg md:text-xl group-hover:opacity-90 transition-opacity">
              Codice dell’Essere
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Nav href="#missione">Missione</Nav>
            <Nav href="#libri">Libri</Nav>
            <Nav href="#video">Video</Nav>
            <Nav href="#servizi">Servizi</Nav>
            <Nav href="#contatti">Contatti</Nav>
          </nav>

          {/* Barra social + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <SocialBar />
            <a href="#libri" className="btn-gold rounded-xl">Acquista i Libri</a>
          </div>
        </div>
      </header>

      {/* HERO */}
     <section id="home" className="relative overflow-hidden">
  <Aura />
  <div className="mx-auto max-w-7xl px-4 py-20 md:py-28 relative">
    <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
      {/* Colonna sinistra: testo */}
      <div className="max-w-3xl font-inknut">
        <div className="flex flex-wrap gap-2 mb-6">
          <Badge>Divulgatore</Badge>
          <Badge>Scrittore</Badge>
          <Badge>Editore</Badge>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Risveglia ciò che Sei
          <span className="block text-gold">Trasforma Conoscenza in Potere</span>
        </h1>

        <p className="mt-6 text-white/80 text-lg md:text-xl max-w-2xl">
          Progetto editoriale e multimediale che unisce Antiche Sapienze, ricerca
          storica e pratica quotidiana
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#libri" className="btn-gold rounded-xl">Scopri i libri</a>
          <a href="#contatti" className="btn-outline rounded-xl">Contattami</a>
        </div>
      </div>

      {/* Colonna destra: cover ultima uscita */}
      <div className="relative text-center md:text-right md:ml-10">
  {/* Alone dorato dietro la cover */}
  <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
    <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-amber-400/60 via-yellow-300/40 to-emerald-300/20 blur-3xl"></div>
    <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-200/10 blur-2xl ring-1 ring-amber-200/20"></div>
  </div>

  <img
    src="/assets/anunnaki2-cover.webp"
    alt="Codice Anunnaki — Gli Dei del Cielo e della Terra (Vol. I • Parte I)"
    className="relative w-56 sm:w-64 rounded-xl shadow-2xl mx-auto hover:scale-105 transition-transform duration-500 drop-shadow-[0_0_35px_rgba(255,200,80,0.35)]"
    loading="eager"
  />

  {/* Testo centrato sotto il libro */}
  <div className="mt-4 flex flex-col items-center text-center font-inknut">
    <p className="text-white/90 text-lg md:text-xl tracking-wide leading-snug">
      Il seguito tanto atteso: Gli Dei del Cielo e della Terra
    </p>
    <a
      href={LINKS.anunnaki1}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-3 inline-block px-6 py-3 btn-gold rounded-xl"
    >
      Acquista Ora
    </a>
  </div>
</div>
  </div>
</section>

      {/* MISSIONE */}
      <Section
        id="missione"
        title="Missione"
        subtitle="Una via moderna all’Ermetismo: studio, esperienza, applicazione."
      >
        <div className="grid sm:grid-cols-3 gap-6">
          <Card
            title="Divulgatore"
            body="Video, conferenze e workshop. Profondo, chiaro, pratico."
          />
          <Card
            title="Scrittore"
            body="Collane: Codice Anunnaki, Limitless, Viaggi Astrali e altro."
          />
          <Card
            title="Editore"
            body="Editing, impaginazione, KDP/Ingram, strategia e promozione etica."
          />
        </div>
      </Section>

      {/* LIBRI */}
      <Section id="libri" title="Libri" subtitle="Serie e titoli disponibili ora e in arrivo.">
        <div className="grid md:grid-cols-3 gap-6">
          <Book
            img="/cover-anunnaki-alt.png"
            title="Codice Anunnaki: La Creazione dell’Uomo (Vol. Ø)"
            subtitle="L'origine dimenticata dell'essere umano e il segreto della sua scintilla divina."
            href={LINKS.anunnaki0}
          />
          <Book
            img="/cover-anunnaki-vol1p1.png"
            title="Codice Anunnaki: Gli Dèi del Cielo e della Terra (Vol. I • Parte I)"
            subtitle="Le forze che plasmarono il mondo stanno tornando a risvegliare la memoria del cielo."
            href={LINKS.anunnaki1}
          />
          <Book
             img="/cover-limitless.png"
            title="Codice dell'Essere - Limitless"
            subtitle="La mente come strumento sacro. La volontà come arte della manifestazione."
            href={LINKS.limitless}
          />
        </div>
      </Section>

      {/* VIDEO */}
      <Section id="video" title="Video" subtitle="Estratti da YouTube e TikTok.">
        <div className="grid md:grid-cols-3 gap-6">
          <VideoEmbed title="Legge del Mentalismo" url={VIDEOS.mentalismo} />
          <VideoEmbed title="Legge della Corrispondenza" url={VIDEOS.corrispondenza} />
          <VideoEmbed title="Reel TikTok — Codice Anunnaki" url={VIDEOS.tiktokAnunnaki} />
        </div>
      </Section>

      {/* SERVIZI */}
      <Section
        id="servizi"
        title="Servizi Editoriali"
        subtitle="Supporto completo per autori e progetti affini."
      >
        <div className="grid md:grid-cols-3 gap-6">
          <Card title="Coaching Autore" body="Dall’idea al manoscritto." />
          <Card
            title="Editing & Impaginazione"
            body="Revisione e impaginati per stampa e digitale."
          />
          <Card title="Pubblicazione (KDP/Ingram)" body="ISBN, formati, prezzo, canali." />
          <Card title="Marketing & ADS" body="Funnel, creatività, Amazon Ads e social." />
          <Card title="Ghostwriting" body="Scrittura nel tuo stile, con fonti." />
          <Card
            title="Traduzioni"
            body="IT ⇄ EN/ES/FR/DE con adattamento editoriale."
          />
        </div>
      </Section>

      {/* NEWSLETTER */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-10">
          <div className="md:flex items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h3 className="text-xl md:text-2xl font-bold">Newsletter del Risveglio</h3>
              <p className="text-white/80 mt-2">
                Aggiornamenti su libri, eventi e contenuti esclusivi. Zero spam.
              </p>
            </div>
            <form
              className="mt-6 md:mt-0 w-full md:w-[28rem]"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex gap-3">
                <input
                  type="email"
                  required
                  placeholder="La tua email"
                  className="flex-1 rounded-xl bg-black/40 border border-white/15 px-4 py-3 outline-none focus:ring-2 focus:ring-[#d4af37]/50"
                />
                <button className="btn-gold rounded-xl">Iscrivimi</button>
              </div>
              <p className="text-xs text-white/60 mt-2">
                Iscrivendoti accetti l’informativa privacy.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* CONTATTI */}
      <section id="contatti" className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Contatti</h2>
            <p className="text-white/80 mt-2">
              Collaborazioni, interviste, eventi o pubblicazioni.
            </p>
            <div className="mt-6 space-y-3 text-white/90">
              <p>
                Email:{" "}
                <a
                  className="underline underline-offset-4 hover:text-gold"
                  href="mailto:info@codicedellessere.it"
                >
                  info@codicedellessere.it
                </a>
              </p>
              <p className="flex items-center gap-3">
                <span>Social:</span>
                <SocialBar />
              </p>
            </div>
          </div>
          <form
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Nome">
                <input className="input rounded-xl" placeholder="Il tuo nome" />
              </Field>
              <Field label="Email">
                <input type="email" required className="input rounded-xl" placeholder="you@example.com" />
              </Field>
              <div className="sm:col-span-2">
                <label className="text-sm text-white/80">Messaggio</label>
                <textarea
                  rows={5}
                  className="input h-auto rounded-xl"
                  placeholder="Raccontami del tuo progetto"
                />
              </div>
            </div>
            <button className="mt-4 w-full btn-gold rounded-xl">Invia</button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-white/70">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6 justify-between">
            {/* Mini social bar come sigillo */}
            <div className="mb-2 md:mb-0">
              <SocialBar size="sm" />
            </div>

            <p>© {new Date().getFullYear()} Codice dell’Essere • Tutti i diritti riservati</p>

            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-gold">Privacy</a>
              <a href="#" className="hover:text-gold">Cookie</a>
              <a href="#" className="hover:text-gold">Contatti</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ===========================
   UI HELPERS
=========================== */
function Nav({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} className="hover:text-gold transition-colors">{children}</a>;
}
function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs tracking-wide">
      {children}
    </span>
  );
}
function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  const headingRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!headingRef.current) return;
    const el = headingRef.current;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          setTimeout(() => setInView(false), 1000); // ri-triggerabile
        }
      },
      { rootMargin: "-10% 0px -60% 0px", threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id={id} className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      <div
        ref={headingRef}
        className={`section-heading flex items-end justify-between gap-4 mb-8 ${inView ? "inview" : ""}`}
      >
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
          {subtitle && <p className="text-white/80 mt-2">{subtitle}</p>}
        </div>
      </div>
      {children}
    </section>
  );
}
function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-white/80 mt-2 text-sm leading-relaxed">{body}</p>
    </div>
  );
}
function Book({
  img,
  title,
  subtitle,
  href,
}: {
  img: string;
  title: string;
  subtitle: string;
  href: string;
}) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]">
      <div className="w-full bg-black/40 flex items-center justify-center">
        <img src={img} alt={title} className="w-full h-auto object-contain rounded-lg" />
      </div>
      <div className="p-6">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-white/80 text-sm mt-2">{subtitle}</p>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center btn-gold rounded-xl"
          >
            Acquista
          </a>
        ) : (
          <span className="mt-4 inline-flex items-center bg-yellow-600/30 text-yellow-400 px-4 py-2 rounded-lg text-sm font-semibold">
            In arrivo
          </span>
        )}
      </div>
    </article>
  );
}

/* ===========================
   VIDEO EMBED (YouTube 21:9, TikTok 9:16) 
   Altezza uniforme: 540px -> niente vuoti
=========================== */
function VideoEmbed({ title, url }: { title: string; url: string }) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { kind, embedUrl, tiktokId } = useMemo(() => {
    const u = (url || "").trim();
    if (!u) return { kind: "empty", embedUrl: "", tiktokId: "" };

    // YouTube
    if (u.includes("youtube.com") || u.includes("youtu.be")) {
      let id = "";
      if (u.includes("youtu.be/")) id = u.split("youtu.be/")[1].split(/[?&]/)[0];
      else if (u.includes("watch?v=")) id = u.split("watch?v=")[1].split("&")[0];
      else if (u.includes("/shorts/")) id = u.split("/shorts/")[1].split(/[?&]/)[0];
      return { kind: "youtube", embedUrl: `https://www.youtube.com/embed/${id}`, tiktokId: "" };
    }

    // TikTok
    if (u.includes("tiktok.com")) {
      const id = (u.split("/video/")[1] || "").split("?")[0];
      return { kind: "tiktok", embedUrl: u, tiktokId: id };
    }

    return { kind: "unknown", embedUrl: u, tiktokId: "" };
  }, [url]);

  // Script TikTok
  useEffect(() => {
    if (kind !== "tiktok") return;
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, [kind, embedUrl]);

  return (
    <div className="rounded-2xl border border-white/10 overflow-hidden bg-white/5 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(212,175,55,0.25)] flex flex-col items-center">
      {/* Titolo */}
      <div className="w-full text-center py-3 bg-white/5 border-b border-white/10">
        <h3 className="text-lg font-semibold tracking-wide text-gold drop-shadow-[0_0_4px_rgba(212,175,55,0.4)]">
          {title}
        </h3>
      </div>

      {/* Player */}
      <div
        className="w-full bg-black/40 flex items-center justify-center"
        style={{
          height: "540px", // <-- altezza uniforme per evitare il vuoto
          aspectRatio: kind === "youtube" ? "21/9" : kind === "tiktok" ? "9/16" : undefined,
        }}
      >
        {kind === "youtube" && embedUrl && (
          <iframe
            src={embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
          />
        )}

        {kind === "tiktok" && embedUrl && (
          <div ref={containerRef} className="flex items-center justify-center w-full h-full">
            <blockquote
              className="tiktok-embed"
              cite={embedUrl}
              data-video-id={tiktokId}
              style={{
                maxWidth: "360px",
                minWidth: "280px",
                width: "100%",
                margin: 0,
                height: "100%",
              }}
            >
              <section></section>
            </blockquote>
          </div>
        )}

        {(kind === "empty" || !embedUrl) && (
          <div className="w-full h-full flex items-center justify-center text-white/60 text-sm p-4">
            Video in arrivo
          </div>
        )}
      </div>
    </div>
  );
}

/* ===========================
   MISC
=========================== */
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="text-sm text-white/80">{label}</label>
      {children}
    </div>
  );
}
function Aura() {
  return (
    <div className="absolute inset-0 opacity-30" aria-hidden>
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#0e1b44] blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-[#d4af37] blur-3xl" />
    </div>
  );
}
