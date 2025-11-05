import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-emerald-900 to-black text-white">
      {/* Header */}
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
            <a
              href="#libri"
              className="inline-flex items-center rounded-xl bg-lime-300 px-4 py-2 text-emerald-950 font-semibold shadow hover:shadow-lg hover:brightness-105 active:scale-[.99] transition"
            >
              Acquista i libri
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" aria-hidden>
          <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-emerald-500 blur-3xl" />
          <div className="absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-lime-400 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-28 relative">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 rounded-full bg-emerald-800/60 border border-emerald-700/60 text-xs tracking-wide">
                Divulgatore
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-800/60 border border-emerald-700/60 text-xs tracking-wide">
                Scrittore
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-800/60 border border-emerald-700/60 text-xs tracking-wide">
                Editore
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Risveglia ciò che sei.
              <span className="block text-lime-300">Trasforma conoscenza in potere.</span>
            </h1>
            <p className="mt-6 text-emerald-100/90 text-lg md:text-xl max-w-2xl">
              Progetto editoriale e multimediale per unire Antiche Sapienze, ricerca
              storica e pratica quotidiana. Libri, video e servizi per chi desidera
              ricordare e costruire.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#libri"
                className="inline-flex items-center rounded-xl bg-lime-300 px-5 py-3 text-emerald-950 font-semibold shadow hover:shadow-lg hover:brightness-105 active:scale-[.99] transition"
              >
                Scopri i libri
              </a>
              <a
                href="#contatti"
                className="inline-flex items-center rounded-xl border border-emerald-600/70 px-5 py-3 hover:bg-emerald-800/40 transition"
              >
                Contattami
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Missione */}
      <section id="missione" className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <h2 className="text-2xl md:text-3xl font-bold">Missione</h2>
            <p className="text-emerald-100/80 mt-2">
              Una via moderna all’Ermetismo: studio, esperienza, applicazione.
            </p>
          </div>
          <div className="md:col-span-2 grid sm:grid-cols-3 gap-6">
            <RoleCard
              title="Divulgatore"
              body="Video, conferenze e workshop per diffondere le Leggi, senza banalizzarle. Contenuti chiari, profondi e pratici."
            />
            <RoleCard
              title="Scrittore"
              body="Collane editoriali tra mito, storia e coscienza: Codice Anunnaki, Limitless, Viaggi Astrali e altre opere in sviluppo."
            />
            <RoleCard
              title="Editore"
              body="Accompagno autori nella pubblicazione: editing, impaginazione, KDP/Ingram, strategia e promozione etica."
            />
          </div>
        </div>
      </section>

      {/* Libri */}
      <section id="libri" className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Libri</h2>
            <p className="text-emerald-100/80 mt-2">Serie e titoli disponibili ora e in arrivo.</p>
          </div>
          <a href="#contatti" className="hidden md:inline text-sm underline underline-offset-4 hover:text-lime-200">
            Richiedi copie per eventi ➜
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <BookCard
            colorFrom="from-emerald-500"
            colorTo="to-lime-300"
            title="Codice Anunnaki – La Creazione dell’Uomo"
            subtitle="Origini, miti, tavole e genealogie in una narrazione rigorosa."
            ctaLabel="Acquista"
            href="#"
          />
          <BookCard
            colorFrom="from-emerald-400"
            colorTo="to-cyan-300"
            title="Limitless – Codice dell’Essere"
            subtitle="Principi, esercizi e chiavi operative per la vita quotidiana."
            ctaLabel="Acquista"
            href="#"
          />
          <BookCard
            colorFrom="from-emerald-600"
            colorTo="to-teal-300"
            title="Gli Dei della Terra (in lavorazione)"
            subtitle="Dalle tradizioni sumere alle prime civiltà: storia e simbolo."
            ctaLabel="Scopri di più"
            href="#"
          />
        </div>
      </section>

      {/* Video */}
      <section id="video" className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Video</h2>
            <p className="text-emerald-100/80 mt-2">Estratti da YouTube e TikTok. Presto integrazione automatica.</p>
          </div>
          <a href="#" className="hidden md:inline text-sm underline underline-offset-4 hover:text-lime-200">
            Vai al canale ➜
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <VideoCard title="Le 7 Leggi Ermetiche" />
          <VideoCard title="I Viaggi Astrali" />
          <VideoCard title="Codice Anunnaki – Introduzione" />
        </div>
      </section>

      {/* Servizi Editoriali */}
      <section id="servizi" className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Servizi Editoriali</h2>
            <p className="text-emerald-100/80 mt-2">Supporto completo per autori e progetti affini.</p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <ServiceCard title="Coaching Autore" body="Dall’idea al manoscritto: struttura, disciplina e voce." />
          <ServiceCard title="Editing & Impaginazione" body="Revisione, correzioni, impaginati per stampa e digitale." />
          <ServiceCard title="Pubblicazione (KDP/Ingram)" body="ISBN, formati, strategie di prezzo e canali di vendita." />
          <ServiceCard title="Marketing & ADS" body="Funnel, creatività, sponsorizzate Amazon e social." />
          <ServiceCard title="Ghostwriting" body="Scrittura su commissione nel tuo stile, con fonti e metodo." />
          <ServiceCard title="Traduzioni" body="Italiano ⇄ EN/ES/FR/DE con adattamento editoriale." />
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="rounded-2xl border border-emerald-800/50 bg-emerald-950/40 p-6 md:p-10">
          <div className="md:flex items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h3 className="text-xl md:text-2xl font-bold">Newsletter del Risveglio</h3>
              <p className="text-emerald-100/80 mt-2">
                Aggiornamenti su libri, eventi e contenuti esclusivi. Zero spam, solo valore.
              </p>
            </div>
            <form className="mt-6 md:mt-0 w-full md:w-[28rem]" onSubmit={(e)=>e.preventDefault()}>
              <div className="flex gap-3">
                <input
                  type="email"
                  required
                  placeholder="La tua email"
                  className="flex-1 rounded-xl bg-black/30 border border-emerald-700/60 px-4 py-3 outline-none focus:ring-2 focus:ring-lime-300/60"
                />
                <button className="rounded-xl bg-lime-300 px-5 py-3 text-emerald-950 font-semibold hover:brightness-105 active:scale-[.99]">
                  Iscrivimi
                </button>
              </div>
              <p className="text-xs text-emerald-100/60 mt-2">Iscrivendoti accetti l’informativa privacy.</p>
            </form>
          </div>
        </div>
      </section>

      {/* Contatti */}
      <section id="contatti" className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Contatti</h2>
            <p className="text-emerald-100/80 mt-2">
              Parla direttamente con me per collaborazioni, interviste, eventi o pubblicazioni.
            </p>
            <div className="mt-6 space-y-3 text-emerald-100/90">
              <p>
                Email: <a className="underline underline-offset-4 hover:text-lime-200" href="mailto:info@codicedellessere.it">info@codicedellessere.it</a>
              </p>
              <p>
                Social:
                <span className="ml-2 inline-flex items-center gap-3">
                  <a href="#" aria-label="TikTok" className="hover:text-lime-200">TikTok</a>
                  <a href="#" aria-label="Instagram" className="hover:text-lime-200">Instagram</a>
                  <a href="#" aria-label="YouTube" className="hover:text-lime-200">YouTube</a>
                </span>
              </p>
            </div>
          </div>
          <form className="rounded-2xl border border-emerald-800/50 bg-emerald-950/40 p-6" onSubmit={(e)=>e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-emerald-100/80">Nome</label>
                <input className="w-full mt-1 rounded-xl bg-black/30 border border-emerald-700/60 px-4 py-3 outline-none focus:ring-2 focus:ring-lime-300/60" placeholder="Il tuo nome" />
              </div>
              <div>
                <label className="text-sm text-emerald-100/80">Email</label>
                <input type="email" required className="w-full mt-1 rounded-xl bg-black/30 border border-emerald-700/60 px-4 py-3 outline-none focus:ring-2 focus:ring-lime-300/60" placeholder="you@example.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-emerald-100/80">Messaggio</label>
                <textarea rows={5} className="w-full mt-1 rounded-xl bg-black/30 border border-emerald-700/60 px-4 py-3 outline-none focus:ring-2 focus:ring-lime-300/60" placeholder="Raccontami del tuo progetto" />
              </div>
            </div>
            <button className="mt-4 w-full rounded-xl bg-lime-300 px-5 py-3 text-emerald-950 font-semibold hover:brightness-105 active:scale-[.99]">
              Invia
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
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

function RoleCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-emerald-800/50 bg-emerald-950/40 p-6">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-emerald-100/80 mt-2 text-sm leading-relaxed">{body}</p>
    </div>
  );
}

function BookCard({
  colorFrom,
  colorTo,
  title,
  subtitle,
  ctaLabel,
  href,
}: {
  colorFrom: string;
  colorTo: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  href: string;
}) {
  return (
    <article className="rounded-2xl border border-emerald-800/50 bg-emerald-950/40 overflow-hidden">
      <div className={`aspect-[3/4] w-full bg-gradient-to-br ${colorFrom} ${colorTo} opacity-90`} aria-hidden />
      <div className="p-6">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-emerald-100/80 text-sm mt-2">{subtitle}</p>
        <a
          href={href}
          className="mt-4 inline-flex items-center rounded-xl bg-lime-300 px-4 py-2 text-emerald-950 font-semibold hover:brightness-105 active:scale-[.99]"
        >
          {ctaLabel}
        </a>
      </div>
    </article>
  );
}

function VideoCard({ title }: { title: string }) {
  return (
    <div className="rounded-2xl border border-emerald-800/50 overflow-hidden bg-emerald-950/40">
      <div className="aspect-video w-full bg-black/40 flex items-center justify-center text-emerald-100/60 text-sm">
        <span>Embed video: {title}</span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold">{title}</h3>
      </div>
    </div>
  );
}
