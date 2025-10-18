import React, { useEffect, useMemo, useRef, useState } from "react";
import Analytics from "./Analytics"; // ✅ AGGIUNTO

/* ===========================
   LINKS
=========================== */
// Amazon
const LINKS = {
  anunnaki0: "https://amzn.eu/d/akZ7CqJ", // Codice Anunnaki — La Creazione dell’Uomo (Vol. Ø)
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
      <Analytics /> {/* ✅ AGGIUNTO: come primo figlio del container */}
      <GlobalGlowStyles />

      {/* ...tutto il resto del tuo file invariato... */}
