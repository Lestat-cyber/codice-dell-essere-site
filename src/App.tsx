import React from "react";

// --- LINKS AMAZON ---
const LINKS = {
  anunnaki0: "https://amzn.eu/d/akZ7CqJ", // Codice Anunnaki — La Creazione dell’Uomo (Vol. Ø)
  limitless: "https://amzn.eu/d/dtR64tc", // Limitless — Codice dell’Essere
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
            <a href="#libri" className="btn-gold">Acquista i libri</a>
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
              Risveglia ciò che sei.
              <span className="block text-gold">Trasforma conoscenza in potere.</span>
            </h1>
            <p className="mt-6 text-white/80 text-lg md:text-xl max-w-2xl">
              Progetto editoriale e multimediale che unisce Antiche Sapienze, ricerca storica e pratica quotidiana.
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

      {/* LIBRI con COPERTINE (ordine aggiornato) */}
      <Section id="libri" title="Libri" subtitle="Serie e titoli disponibili ora e in arrivo.">
        <div className="grid md:grid-cols-3 gap-6">
          {/* 1) Creazione dell’Uomo */}
          <Book
            img="/cover-anunnaki-alt.png"
            title="Codice Anunnaki — La Creazione dell’Uomo (Vol. Ø)"
            subtitle="Origini, miti e genealogie."
            href={LINKS.anunnaki0}
          />
          {/* 2) Limitless */}
          <Book
            img="/cover-limitless.png"
            title="Limitless — Codice dell’Essere"
            subtitle="Principi ed esercizi operativi."
            href={LINKS.limitless}
          />
          {/* 3) Gli Dèi del Cielo e della Terra — in arrivo */}
          <Book
            img="/cover-anunnaki-vol1p1.png"
            title="Codice Anunnaki — Gli Dèi del Cielo e della Terra (Vol. I • Parte I)"
            subtitle="Il nuovo capitolo della collana."
            href=""  // vuoto => badge "In arrivo"
          />
        </div>
      </Section>

      {/* VIDEO */}
      <Section id="video" title="Video" subtitle="Estratti da YouTube e TikTok.">
        <div className="grid md:grid-cols-3 gap-6">
          <Video title="Le 7 Leggi Ermetiche" />
          <Video title="I Viaggi Astrali" />
          <Video title="Codice Anunnaki — Introduzione" />
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
  return <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs tracking-wide">{children}</span>
}
function Section({id,title,subtitle,children}:{id?:string,title:string,subtitle?:string,children:React.ReactNode}) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      <div className="flex items-end justify-between gap-4 mb-8">
        <div><h2 className="text-2xl md:text-3xl font-bold">{title}</h2>{subtitle && <p className="text-white/80 mt-2">{subtitle}</p>}</div>
      </div>
      {children}
    </section>
  );
}
function Card({title,body}:{title:string;body:string}) {
  return <div className="rounded-2xl border border-white/10 bg-white/5 p-6"><h3 className="text-lg font-semibold">{title}</h3><p className="text-white/80 mt-2 text-sm leading-relaxed">{body}</p></div>
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
          : <span className="mt-4 inline-flex items-center bg-yellow-600/30 text-yellow-400 px-4 py-2 rounded-lg text-sm font-semibold">In arrivo</span>
        }
      </div>
    </article>
  );
}
function Video({title}:{title:string}) {
  return (
    <div className="rounded-2xl border border-white/10 overflow-hidden bg-white/5">
      <div className="aspect-video w-full bg-black/40 flex items-center justify-center text-white/60 text-sm"><span>Embed video: {title}</span></div>
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
