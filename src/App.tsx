import React, { useMemo } from "react";

// --- LINKS AMAZON ---
const LINKS = {
  anunnaki0: "https://amzn.eu/d/akZ7CqJ", // Codice Anunnaki — La Creazione dell’Uomo (Vol. Ø)
  limitless: "https://amzn.eu/d/dtR64tc", // Limitless — Codice dell’Essere
};

// --- LINKS VIDEO REALI ---
const VIDEOS = {
  mentalismo: "https://youtu.be/4sRxrqUhaaQ?si=7-KKSdo82qLwaOBN",
  corrispondenza: "https://youtu.be/vnsz0sSfCF8?si=_gy5C9Gqh2heAKT3",
  tiktokAnunnaki: "https://www.tiktok.com/@codicedellessere/video/7560749700723297558?is_from_webapp=1&sender_device=pc&web_id=7506816116242318870",
};

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1230] via-[#091026] to-[#000814] text-white">
      <header className="sticky top-0 z-40 backdrop-blur bg-[#0a1230]/70 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <img src="/logo-codice.png" alt="Codice dell’Essere" className="h-10 w-10 rounded-lg object-contain" />
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
          <div className="hidden md:block">
            <a href="#libri" className="btn-gold">Acquista i Libri</a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <Aura />
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-28 relative">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge>Divulgatore</Badge><Badge>Scrittore</Badge><Badge>Editore</Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Risveglia ciò che Sei
              <span className="block text-gold">Trasforma Conoscenza in Potere</span>
            </h1>
            <p className="mt-6 text-white/80 text-lg md:text-xl max-w-2xl">
              Progetto editoriale e multimediale che unisce Antiche Sapienze, ricerca storica e pratica quotidiana
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#libri" className="btn-gold">Scopri i libri</a>
              <a href="#contatti" className="btn-outline">Contattami</a>
            </div>
          </div>
        </div>
      </section>

      {/* MISSIONE */}
      <Section id="missione" title="Missione" subtitle="Una via moderna all’Ermetismo: studio, esperienza, applicazione.">
        <div className="grid sm:grid-cols-3 gap-6">
          <Card title="Divulgatore" body="Video, conferenze e workshop. Profondo, chiaro, pratico." />
          <Card title="Scrittore" body="Collane: Codice Anunnaki, Limitless, Viaggi Astrali e altro." />
          <Card title="Editore" body="Editing, impaginazione, KDP/Ingram, strategia e promozione etica." />
        </div>
      </Section>

      {/* LIBRI con COPERTINE */}
      <Section id="libri" title="Libri" subtitle="Serie e titoli disponibili ora e in arrivo.">
        <div className="grid md:grid-cols-3 gap-6">
          <Book
            img="/cover-anunnaki-alt.png"
            title="Codice Anunnaki: La Creazione dell’Uomo (Vol. Ø)"
            subtitle="L'origine dimenticata dell'essere umano e il segreto della sua scintilla divina."
            href={LINKS.anunnaki0}
          />
          <Book
            img="/cover-limitless.png"
            title="Codice dell'Essere - Limitless"
            subtitle="La mente come strumento sacro. La volontà come arte della manifestazione."
            href={LINKS.limitless}
          />
          <Book
            img="/cover-anunnaki-vol1p1.png"
            title="Codice Anunnaki: Gli Dèi del Cielo e della Terra (Vol. I • Parte I)"
            subtitle="Le forze che plasmarono il mondo stanno tornando a risvegliare la memoria del cielo."
            href=""
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
      <Section id="servizi" title="Servizi Editoriali" subtitle="Supporto completo per autori e progetti affini.">
        <div className="grid md:grid-cols-3 gap-6">
          <Card title="Coaching Autore" body="Dall’idea al manoscritto." />
          <Card title="Editing & Impaginazione" body="Revisione e impaginati per stampa e digitale." />
          <Card title="Pubblicazione (KDP/Ingram)" body="ISBN, formati, prezzo, canali." />
          <Card title="Marketing & ADS" body="Funnel, creatività, Amazon Ads e social." />
          <Card title="Ghostwriting" body="Scrittura nel tuo stile, con fonti." />
          <Card title="Traduzioni" body="IT ⇄ EN/ES/FR/DE con adattamento editoriale." />
        </div>
      </Section>

      {/* NEWSLETTER */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-10">
          <div className="md:flex items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h3 className="text-xl md:text-2xl font-bold">Newsletter del Risveglio</h3>
              <p className="text-white/80 mt-2">Aggiornamenti su libri, eventi e contenuti esclusivi. Zero spam.</p>
            </div>
            <form className="mt-6 md:mt-0 w-full md:w-[28rem]" onSubmit={(e)=>e.preventDefault()}>
              <div className="flex gap-3">
                <input type="email" required placeholder="La tua email" className="flex-1 rounded-xl bg-black/40 border border-white/15 px-4 py-3 outline-none focus:ring-2 focus:ring-[#d4af37]/50" />
                <button className="btn-gold">Iscrivimi</button>
              </div>
              <p className="text-xs text-white/60 mt-2">Iscrivendoti accetti l’informativa privacy.</p>
            </form>
          </div>
        </div>
      </section>

      {/* CONTATTI */}
      <section id="contatti" className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Contatti</h2>
            <p className="text-white/80 mt-2">Collaborazioni, interviste, eventi o pubblicazioni.</p>
            <div className="mt-6 space-y-3 text-white/90">
              <p>Email: <a className="underline underline-offset-4 hover:text-gold" href="mailto:info@codicedellessere.it">info@codicedellessere.it</a></p>
              <p>Social: <span className="ml-2 inline-flex items-center gap-3"><a href="#" className="hover:text-gold">TikTok</a><a href="#" className="hover:text-gold">Instagram</a><a href="#" className="hover:text-gold">YouTube</a></span></p>
            </div>
          </div>
          <form className="rounded-2xl border border-white/10 bg-white/5 p-6" onSubmit={(e)=>e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Nome"><input className="input" placeholder="Il tuo nome" /></Field>
              <Field label="Email"><input type="email" required className="input" placeholder="you@example.com" /></Field>
              <div className="sm:col-span-2"><label className="text-sm text-white/80">Messaggio</label><textarea rows={5} className="input h-auto" placeholder="Raccontami del tuo progetto" /></div>
            </div>
            <button className="mt-4 w-full btn-gold">Invia</button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-white/70">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6 justify-between">
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

/** UI Helpers **/
function Nav({href, children}:{href:string; children:React.ReactNode}) {
  return <a href={href} className="hover:text-gold transition-colors">{children}</a>;
}
function Badge({children}:{children:React.ReactNode}) {
  return <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs tracking-wide">{children}</span>;
}
function Section({id,title,subtitle,children}:{id?:string,title:string,subtitle?:string,children:React.ReactNode}) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      <div className="flex items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
          {subtitle && <p className="text-white/80 mt-2">{subtitle}</p>}
        </div>
      </div>
      {children}
    </section>
  );
}
function Card({title,body}:{title:string;body:string}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-white/80 mt-2 text-sm leading-relaxed">{body}</p>
    </div>
  );
}
function Book({img,title,subtitle,href}:{img:string;title:string;subtitle:string;href:string}) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]">
      <div className="w-full bg-black/40 flex items-center justify-center">
        <img src={img} alt={title} className="w-full h-auto object-contain rounded-lg" />
      </div>
      <div className="p-6">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-white/80 text-sm mt-2">{subtitle}</p>
        {href
          ? <a href={href} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center btn-gold">Acquista</a>
          : <span className="mt-4 inline-flex items-center bg-yellow-600/30 text-yellow-400 px-4 py-2 rounded-lg text-sm font-semibold">In arrivo</span>}
      </div>
    </article>
  );
}

/** EMBED video universale **/
import React, { useEffect, useMemo, useRef } from "react";

/** EMBED video universale **/
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

  // Assicura che lo script TikTok processi il blockquote quando cambia l'URL
  useEffect(() => {
    if (kind !== "tiktok") return;
    // Se lo script non è presente, lo aggiungiamo
    const hasScript = !!document.querySelector('script[src*="tiktok.com/embed.js"]');
    if (!hasScript) {
      const s = document.createElement("script");
      s.src = "https://www.tiktok.com/embed.js";
      s.async = true;
      document.body.appendChild(s);
      return;
    }
    // Forza il reprocess inserendo un nuovo script "vuoto" (hack supportato)
    const reproc = document.createElement("script");
    reproc.src = "https://www.tiktok.com/embed.js";
    reproc.async = true;
    document.body.appendChild(reproc);
    return () => {
      // cleanup opzionale: non rimuovo per evitare flicker su più embed
    };
  }, [kind, embedUrl]);

  return (
    <div className="rounded-2xl border border-white/10 overflow-hidden bg-white/5 hover:shadow-[0_0_25px_rgba(212,175,55,0.15)] transition-all duration-300">
      {/* Per YouTube manteniamo l'aspect ratio. Per TikTok lasciamo che il widget gestisca l'altezza. */}
      <div className={kind === "youtube" ? "aspect-video w-full bg-black/40" : "w-full bg-black/40"}>
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
          <div ref={containerRef} className="w-full flex items-stretch justify-center">
            <blockquote
              className="tiktok-embed"
              cite={embedUrl}
              data-video-id={tiktokId}
              style={{ maxWidth: "605px", minWidth: "325px", width: "100%", margin: 0 }}
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
      <div className="p-4"><h3 className="font-semibold">{title}</h3></div>
    </div>
  );
}

function Field({label,children}:{label:string;children:React.ReactNode}) {
  return (<div><label className="text-sm text-white/80">{label}</label>{children}</div>);
}
function Aura() {
  return (
    <div className="absolute inset-0 opacity-30" aria-hidden>
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#0e1b44] blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-[#d4af37] blur-3xl" />
    </div>
  );
}
