import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-emerald-900 to-black text-white">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-emerald-950/60 bg-emerald-950/50 border-b border-emerald-800/40">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-emerald-400 to-lime-300 shadow-lg shadow-emerald-900/50" />
            <span className="font-semibold tracking-wide text-xl group-hover:opacity-90 transition-opacity">
              Codice dell’Essere
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#missione" className="hover:text-lime-200/90 transition-colors">Missione</a>
            <a href="#libri" className="hover:text-lime-200/90 transition-colors">Libri</a>
            <a href="#video" className="hover:text-lime-200/90 transition-colors">Video</a>
            <a href="#servizi" className="hover:text-lime-200/90 transition-colors">Servizi</a>
            <a href="#contatti" className="hover:text-lime-200/90 transition-colors">Contatti</a>
          </nav>
          <div className="hidden md:block">
            <a href="#libri" className="inline-flex items-center rounded-xl bg-lime-300 px-4 py-2 text-emerald-950 font-semibold shadow hover:shadow-lg hover:brightness-105 active:scale-[.99] transition">
              Acquista i libri
            </a>
          </div>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" aria-hidden>
          <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-emerald-500 blur-3xl" />
          <div className="absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-lime-400 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-28 relative">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge>Divulgatore</Badge><Badge>Scrittore</Badge><Badge>Editore</Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Risveglia ciò che sei.
              <span className="block text-lime-300">Trasforma conoscenza in potere.</span>
            </h1>
            <p className="mt-6 text-emerald-100/90 text-lg md:text-xl max-w-2xl">
              Progetto editoriale e multimediale che unisce Antiche Sapienze, ricerca storica e pratica quotidiana.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#libri" className="inline-flex items-center rounded-xl bg-lime-300 px-5 py-3 text-emerald-950 font-semibold shadow hover:shadow-lg hover:brightness-105 active:scale-[.99] transition">Scopri i libri</a>
              <a href="#contatti" className="inline-flex items-center rounded-xl border border-emerald-600/70 px-5 py-3 hover:bg-emerald-800/40 transition">Contattami</a>
            </div>
          </div>
        </div>
      </section>

      <Section id="missione" title="Missione" subtitle="Una via moderna all’Ermetismo: studio, esperienza, applicazione.">
        <div className="grid sm:grid-cols-3 gap-6">
          <Card title="Divulgatore" body="Video, conferenze e workshop. Profondo, chiaro, pratico." />
          <Card title="Scrittore" body="Collane: Codice Anunnaki, Limitless, Viaggi Astrali e altro." />
          <Card title="Editore" body="Editing, impaginazione, KDP/Ingram, strategia e promozione etica." />
        </div>
      </Section>

      <Section id="libri" title="Libri" subtitle="Serie e titoli disponibili ora e in arrivo.">
        <div className="grid md:grid-cols-3 gap-6">
          <Book colorFrom="from-emerald-500" colorTo="to-lime-300" title="Codice Anunnaki – La Creazione dell’Uomo" subtitle="Origini, miti e genealogie." href="#" />
          <Book colorFrom="from-emerald-400" colorTo="to-cyan-300" title="Limitless – Codice dell’Essere" subtitle="Principi ed esercizi operativi." href="#" />
          <Book colorFrom="from-emerald-600" colorTo="to-teal-300" title="Gli Dei della Terra (in lavorazione)" subtitle="Dalle tradizioni sumere alle prime civiltà." href="#" />
        </div>
      </Section>

      <Section id="video" title="Video" subtitle="Estratti da YouTube e TikTok.">
        <div className="grid md:grid-cols-3 gap-6">
          <Video title="Le 7 Leggi Ermetiche" />
          <Video title="I Viaggi Astrali" />
          <Video title="Codice Anunnaki – Introduzione" />
        </div>
      </Section>

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

      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="rounded-2xl border border-emerald-800/50 bg-emerald-950/40 p-6 md:p-10">
          <div className="md:flex items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h3 className="text-xl md:text-2xl font-bold">Newsletter del Risveglio</h3>
              <p className="text-emerald-100/80 mt-2">Aggiornamenti su libri, eventi e contenuti esclusivi. Zero spam.</p>
            </div>
            <form className="mt-6 md:mt-0 w-full md:w-[28rem]" onSubmit={(e)=>e.preventDefault()}>
              <div className="flex gap-3">
                <input type="email" required placeholder="La tua email" className="flex-1 rounded-xl bg-black/30 border border-emerald-700/60 px-4 py-3 outline-none focus:ring-2 focus:ring-lime-300/60" />
                <button className="rounded-xl bg-lime-300 px-5 py-3 text-emerald-950 font-semibold hover:brightness-105 active:scale-[.99]">Iscrivimi</button>
              </div>
              <p className="text-xs text-emerald-100/60 mt-2">Iscrivendoti accetti l’informativa privacy.</p>
            </form>
          </div>
        </div>
      </section>

      <section id="contatti" className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Contatti</h2>
            <p className="text-emerald-100/80 mt-2">Collaborazioni, interviste, eventi o pubblicazioni.</p>
            <div className="mt-6 space-y-3 text-emerald-100/90">
              <p>Email: <a className="underline underline-offset-4 hover:text-lime-200" href="mailto:info@codicedellessere.it">info@codicedellessere.it</a></p>
              <p>Social: <span className="ml-2 inline-flex items-center gap-3"><a href="#" className="hover:text-lime-200">TikTok</a><a href="#" className="hover:text-lime-200">Instagram</a><a href="#" className="hover:text-lime-200">YouTube</a></span></p>
            </div>
          </div>
          <form className="rounded-2xl border border-emerald-800/50 bg-emerald-950/40 p-6" onSubmit={(e)=>e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Nome"><input className="w-full mt-1 rounded-xl bg-black/30 border border-emerald-700/60 px-4 py-3 outline-none focus:ring-2 focus:ring-lime-300/60" placeholder="Il tuo nome" /></Field>
              <Field label="Email"><input type="email" required className="w-full mt-1 rounded-xl bg-black/30 border border-emerald-700/60 px-4 py-3 outline-none focus:ring-2 focus:ring-lime-300/60" placeholder="you@example.com" /></Field>
              <div className="sm:col-span-2"><label className="text-sm text-emerald-100/80">Messaggio</label><textarea rows={5} className="w-full mt-1 rounded-xl bg-black/30 border border-emerald-700/60 px-4 py-3 outline-none focus:ring-2 focus:ring-lime-300/60" placeholder="Raccontami del tuo progetto" /></div>
            </div>
            <button className="mt-4 w-full rounded-xl bg-lime-300 px-5 py-3 text-emerald-950 font-semibold hover:brightness-105 active:scale-[.99]">Invia</button>
          </form>
        </div>
      </section>

      <footer className="border-t border-emerald-800/40">
        <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-emerald-100/70">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6 justify-between">
            <p>© {new Date().getFullYear()} Codice dell’Essere • Tutti i diritti riservati</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-lime-200">Privacy</a>
              <a href="#" className="hover:text-lime-200">Cookie</a>
              <a href="#" className="hover:text-lime-200">Contatti</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Badge({children}:{children:React.ReactNode}) {
  return <span className="px-3 py-1 rounded-full bg-emerald-800/60 border border-emerald-700/60 text-xs tracking-wide">{children}</span>
}
function Section({id,title,subtitle,children}:{id?:string,title:string,subtitle?:string,children:React.ReactNode}) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      <div className="flex items-end justify-between gap-4 mb-8">
        <div><h2 className="text-2xl md:text-3xl font-bold">{title}</h2>{subtitle && <p className="text-emerald-100/80 mt-2">{subtitle}</p>}</div>
      </div>
      {children}
    </section>
  );
}
function Card({title,body}:{title:string;body:string}) {
  return <div className="rounded-2xl border border-emerald-800/50 bg-emerald-950/40 p-6"><h3 className="text-lg font-semibold">{title}</h3><p className="text-emerald-100/80 mt-2 text-sm leading-relaxed">{body}</p></div>
}
function Book({colorFrom,colorTo,title,subtitle,href}:{colorFrom:string;colorTo:string;title:string;subtitle:string;href:string}) {
  return (
    <article className="rounded-2xl border border-emerald-800/50 bg-emerald-950/40 overflow-hidden">
      <div className={`aspect-[3/4] w-full bg-gradient-to-br ${colorFrom} ${colorTo} opacity-90`} aria-hidden />
      <div className="p-6"><h3 className="font-semibold text-lg">{title}</h3><p className="text-emerald-100/80 text-sm mt-2">{subtitle}</p>
        <a href={href} className="mt-4 inline-flex items-center rounded-xl bg-lime-300 px-4 py-2 text-emerald-950 font-semibold hover:brightness-105 active:scale-[.99]">Acquista</a>
      </div>
    </article>
  );
}
function Video({title}:{title:string}) {
  return (
    <div className="rounded-2xl border border-emerald-800/50 overflow-hidden bg-emerald-950/40">
      <div className="aspect-video w-full bg-black/40 flex items-center justify-center text-emerald-100/60 text-sm"><span>Embed video: {title}</span></div>
      <div className="p-4"><h3 className="font-semibold">{title}</h3></div>
    </div>
  );
}
function Field({label,children}:{label:string;children:React.ReactNode}) {
  return (<div><label className="text-sm text-emerald-100/80">{label}</label>{children}</div>);
}
