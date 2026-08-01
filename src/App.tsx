import React, { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

/* ===========================
   DATI — sostituisci con i tuoi reali
=========================== */
const LINKS = {
  anunnaki0: "https://amzn.eu/d/akZ7CqJ",
  anunnaki1: "https://amzn.to/3LLoUnt",
  kybalion: "https://amzn.to/4cWiXhM",
  limitless: "https://amzn.eu/d/dtR64tc",
  pathOfDestiny: "https://amzn.to/444ZyYi",
  amore: "https://www.amazon.it/dp/B0GWH1LNXG",
};
const VIDEOS = {
  tiktokAnunnaki:
    "https://www.tiktok.com/@codicedellessere/video/7560749700723297558?is_from_webapp=1&sender_device=pc&web_id=7506816116242318870",
};
const SOCIALS = {
  instagram: "https://www.instagram.com/codicedellessere",
  tiktok: "https://www.tiktok.com/@codicedellessere",
  youtube: "https://www.youtube.com/@codicedellessere",
};
const IMAGES = {
  heroPortrait: "/hero-risveglio.png",
  authorPortrait: "/autore-ritratto.png",
  musicaBanner: "/musica-hero-chitarra.png",
};
// 🎵 I tuoi brani — "Return Within" si ascolta sul sito, gli altri due rimandano a Spotify
const TRACKS = [
  {
    title: "Return Within",
    subtitle: "Il ritorno a te stesso, in musica.",
    cover: "/music/cover-return-within.png",
    audio: "/audio/return-within.mp3", // TODO: carica il file reale
    spotify: "https://open.spotify.com/track/1ckeiZhpJdV44HLnO4hp8M?si=0pOljwHLS_qyK64s0sv3sg&utm_source=copy-link",
  },
  {
    title: "Ritorno al Centro",
    subtitle: "La versione italiana di Return Within.",
    cover: "/music/cover-ritorno-al-centro.jpg", // TODO
    audio: "",
    spotify: "https://open.spotify.com/track/2MVcTqtyqnmTrejALk6MyU?si=oK1wIkg5RlexkF01WClfxA&utm_source=copy-link",
  },
  {
    title: "Il Tempo Presenta il Conto",
    subtitle: "",
    cover: "/music/cover-il-tempo-presenta-il-conto.jpg", // TODO
    audio: "",
    spotify: "https://open.spotify.com/track/3snL7wGRqL5A55rjD9XmmE?si=sDq6BwH9STeuahrOd8FHmg&utm_source=copy-link&sci=spotify%3Acard-config%3A3IsfctUS9Wdmf5jNE72Yg4",
  },
];
const ENTRY_TRACK = TRACKS[0];

/* ===========================
   STILI GLOBALI
=========================== */
function GlobalStyles() {
  return (
    <style
      // @ts-ignore
      dangerouslySetInnerHTML={{
        __html: `
@import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700;900&family=Cinzel:wght@500;600;700&family=Inter:wght@400;500;600;700;800&display=swap');

:root{
  --void:#020202; --gold:#c9a24a; --gold-bright:#f2d998; --ivory:#e9e2cf;
  --font-epic:"Cinzel Decorative", serif; --font-display:"Cinzel", serif; --font-body:"Inter", sans-serif;
}
html, body{ background:var(--void); }
body{ font-family:var(--font-body); color:var(--ivory); -webkit-font-smoothing:antialiased; }
h1,.font-epic{ font-family:var(--font-epic); }
h2,h3,.font-display{ font-family:var(--font-display); }
::selection{ background:rgba(201,162,74,.35); color:#fff; }

.eyebrow{ font-weight:700; letter-spacing:.24em; text-transform:uppercase; font-size:.72rem; color:var(--gold-bright); opacity:.85; }
.hairline{ height:1px; background:linear-gradient(90deg, transparent, rgba(201,162,74,.5), transparent); }

.glass{
  background:linear-gradient(160deg, rgba(10,9,7,.72), rgba(4,4,4,.55));
  backdrop-filter:blur(14px); -webkit-backdrop-filter:blur(14px);
  border:1px solid rgba(201,162,74,.22);
  box-shadow:0 30px 70px rgba(0,0,0,.55);
}

.btn{ display:inline-flex; align-items:center; justify-content:center; gap:.5rem; padding:.75rem 1.3rem; border-radius:.6rem; font-weight:700; letter-spacing:.03em; transition:transform .2s, box-shadow .2s, filter .2s; }
.btn:active{ transform:translateY(1px); }
.btn-sm{ padding:.55rem .9rem; font-size:.85rem; border-radius:.5rem; }
.btn-lg{ padding:.95rem 1.4rem; font-size:1.05rem; }
.btn-gold{ background-image:linear-gradient(90deg,#f2d998,#c9a24a,#f2d998); color:#160f02; border:1px solid rgba(201,162,74,.8); box-shadow:0 8px 24px rgba(201,162,74,.2); }
.btn-gold:hover{ filter:brightness(1.08); box-shadow:0 12px 32px rgba(201,162,74,.32); }
.btn-outline{ background:rgba(255,255,255,.03); border:1px solid rgba(201,162,74,.55); color:var(--gold-bright); }
.btn-outline:hover{ background:rgba(201,162,74,.14); }

input, textarea{ background:rgba(255,255,255,.05); border:1px solid rgba(201,162,74,.2); color:#fff; border-radius:.6rem; }
input::placeholder, textarea::placeholder{ color:rgba(233,226,207,.4); }
input:focus, textarea:focus{ outline:none; box-shadow:0 0 0 3px rgba(201,162,74,.22); border-color:rgba(201,162,74,.6); }

.chapter-heading.inview h2{ animation:titleGlow 1000ms ease-out 1; }
@keyframes titleGlow{
  0%{ color:#fff; text-shadow:0 0 0 rgba(201,162,74,0); }
  40%{ color:var(--gold-bright); text-shadow:0 0 14px rgba(201,162,74,.5); }
  100%{ color:#fff; text-shadow:0 0 0 rgba(201,162,74,0); }
}
.reveal{ opacity:0; transform:translateY(28px); transition:opacity .8s ease, transform .8s ease; }
.reveal.in{ opacity:1; transform:translateY(0); }

.gate{ position:fixed; inset:0; z-index:100; background:#020202; display:flex; align-items:center; justify-content:center; transition:opacity 1.1s ease; }
.gate.closing{ opacity:0; pointer-events:none; }
.gate-ring{ width:88px; height:88px; border-radius:9999px; border:1.5px solid var(--gold); box-shadow:0 0 30px rgba(201,162,74,.25) inset, 0 0 24px rgba(201,162,74,.2); display:flex; align-items:center; justify-content:center; }
.gate-ring::before{ content:""; width:50px; height:50px; border-radius:9999px; border:1px solid rgba(201,162,74,.5); }

.wave{ display:flex; align-items:flex-end; gap:3px; height:34px; }
.wave i{ width:3px; border-radius:2px; background:linear-gradient(180deg,var(--gold-bright),var(--gold)); display:block; transition:height .18s ease; }

.carousel-track{ display:flex; gap:1.1rem; overflow-x:auto; scroll-snap-type:x mandatory; padding:.25rem .25rem 1rem; scrollbar-width:none; -ms-overflow-style:none; }
.carousel-track::-webkit-scrollbar{ display:none; }
.carousel-card{ scroll-snap-align:start; flex:0 0 auto; }
.carousel-arrow{
  position:absolute; top:50%; transform:translateY(-50%); z-index:10;
  width:2.4rem; height:2.4rem; border-radius:9999px;
  background:rgba(4,4,4,.75); border:1px solid rgba(201,162,74,.45); color:var(--gold-bright);
  display:flex; align-items:center; justify-content:center; font-size:1.1rem;
  transition:background .2s ease, border-color .2s ease, transform .2s ease;
}
.carousel-arrow:hover{ background:rgba(201,162,74,.22); border-color:rgba(201,162,74,.8); transform:translateY(-50%) scale(1.06); }
.carousel-arrow.prev{ left:-.6rem; }
.carousel-arrow.next{ right:-.6rem; }
@media (max-width:768px){ .carousel-arrow.prev{ left:-.3rem; } .carousel-arrow.next{ right:-.3rem; } }
`,
      }}
    />
  );
}

/* ===========================
   CORRIDOIO 3D PERSISTENTE
   Camera guidata dallo scroll; oggetti-tappa lungo il percorso.
=========================== */
function Corridor3D() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.05);

    // su schermi stretti (mobile verticale) allarghiamo il FOV verticale
    // così il campo visivo orizzontale resta abbastanza ampio da vedere i quadri laterali
    const MIN_HFOV = THREE.MathUtils.degToRad(72);
    function fovForAspect(aspect: number) {
      if (aspect >= 1) return 58;
      const vFov = 2 * Math.atan(Math.tan(MIN_HFOV / 2) / aspect);
      return THREE.MathUtils.radToDeg(vFov);
    }

    const camera = new THREE.PerspectiveCamera(fovForAspect(width / height), width / height, 0.1, 100);
    camera.position.set(0, 0.4, 9);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.domElement.style.transition = "opacity 1.1s ease";
    renderer.domElement.style.opacity = "0.14";
    mount.appendChild(renderer.domElement);

    const gold = new THREE.Color("#c9a24a");
    const goldBright = new THREE.Color("#f2d998");

    const CORRIDOR_LEN = 160;
    const CORRIDOR_END = -80;

    // --- pavimento (nero lucido) ---
    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(9, CORRIDOR_LEN),
      new THREE.MeshStandardMaterial({ color: "#040403", metalness: 0.75, roughness: 0.18 })
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.set(0, -1.4, -60);
    scene.add(floor);

    // --- pareti a pannelli con giunti dorati (texture procedurale, come nel riferimento) ---
    function makePanelTexture(): THREE.CanvasTexture {
      const c = document.createElement("canvas");
      c.width = 256;
      c.height = 128;
      const ctx = c.getContext("2d")!;
      ctx.fillStyle = "#0a0908";
      ctx.fillRect(0, 0, c.width, c.height);
      ctx.strokeStyle = "rgba(201,162,74,0.55)";
      ctx.lineWidth = 2;
      for (let x = 0; x <= c.width; x += 42) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, c.height);
        ctx.stroke();
      }
      const tex = new THREE.CanvasTexture(c);
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.ClampToEdgeWrapping;
      tex.repeat.set(CORRIDOR_LEN / 3.4, 1);
      return tex;
    }
    const wallMat = new THREE.MeshStandardMaterial({ map: makePanelTexture(), metalness: 0.5, roughness: 0.55 });

    [-4.4, 4.4].forEach((x) => {
      const wall = new THREE.Mesh(new THREE.PlaneGeometry(CORRIDOR_LEN, 6), wallMat);
      wall.rotation.y = x < 0 ? Math.PI / 2 : -Math.PI / 2;
      wall.position.set(x, 1.2, -60);
      scene.add(wall);

      const baseGlow = new THREE.Mesh(
        new THREE.BoxGeometry(0.04, 0.03, CORRIDOR_LEN),
        new THREE.MeshBasicMaterial({ color: gold })
      );
      baseGlow.position.set(x - (x < 0 ? -0.02 : 0.02), -1.37, -60);
      scene.add(baseGlow);
    });

    // --- quadri sulle pareti: la storia che avanza, dai Sumeri a oggi ---
    // quadro fotografico incorniciato — usato per ogni tappa con immagine reale
    function makePictureFresco(imgPath: string, side: -1 | 1, z: number) {
      const tex = new THREE.TextureLoader().load(imgPath);
      const group = new THREE.Group();
      const frame = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 3.3), new THREE.MeshBasicMaterial({ color: gold }));
      frame.position.z = -0.02;
      group.add(frame);
      const picture = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 3.05), new THREE.MeshBasicMaterial({ map: tex }));
      group.add(picture);
      group.rotation.y = side < 0 ? Math.PI / 2 : -Math.PI / 2;
      group.position.set(side * 4.3, 1.5, z);
      scene.add(group);
      return group;
    }

    // --- Sumeri, Egizi, Greci: le tue immagini al posto dei quadri generici ---
    makePictureFresco("/quadri/sumeri.jpg", -1, -3);
    makePictureFresco("/quadri/egizi.jpg", 1, -13);
    makePictureFresco("/quadri/greci.jpg", -1, -23);

    // --- Ermetismo: la copertina del Kybalion ---
    makePictureFresco("/quadri/ermetismo.jpg", 1, -33);

    // --- Alchimia: il tuo ritratto al posto del quadro generico ---
    makePictureFresco("/hero-risveglio.png", -1, -43);

    // --- Era Moderna: la figura con la chitarra ---
    makePictureFresco("/musica-hero-chitarra.png", -1, -63);

    // --- Oggi: il simbolo del doppio cerchio ---
    makePictureFresco("/quadri/oggi.jpg", 1, -73);

    // --- Rinascimento: il quadro che si muove, un video al posto della tela ---
    const rinascimentoVideo = document.createElement("video");
    rinascimentoVideo.src = "/videos/rinascimento-vivo.mp4";
    rinascimentoVideo.loop = true;
    rinascimentoVideo.muted = true;
    rinascimentoVideo.playsInline = true;
    rinascimentoVideo.autoplay = true;
    rinascimentoVideo.play().catch(() => {});
    const rinascimentoTex = new THREE.VideoTexture(rinascimentoVideo);

    const rinascimentoGroup = new THREE.Group();
    const rinascimentoFrame = new THREE.Mesh(
      new THREE.PlaneGeometry(2.4, 3.3),
      new THREE.MeshBasicMaterial({ color: gold })
    );
    rinascimentoFrame.position.z = -0.02;
    rinascimentoGroup.add(rinascimentoFrame);
    const rinascimentoScreen = new THREE.Mesh(
      new THREE.PlaneGeometry(2.2, 3.05),
      new THREE.MeshBasicMaterial({ map: rinascimentoTex })
    );
    rinascimentoGroup.add(rinascimentoScreen);
    rinascimentoGroup.rotation.y = -Math.PI / 2;
    rinascimentoGroup.position.set(4.3, 1.5, -53);
    scene.add(rinascimentoGroup);

    // --- filo dorato serpeggiante lungo il pavimento (come nel riferimento) ---
    const curvePts = [
      new THREE.Vector3(0, -1.38, 2),
      new THREE.Vector3(1.3, -1.38, -8),
      new THREE.Vector3(-1.1, -1.38, -18),
      new THREE.Vector3(1.4, -1.38, -30),
      new THREE.Vector3(-1.3, -1.38, -42),
      new THREE.Vector3(0.8, -1.38, -54),
      new THREE.Vector3(-0.3, -1.38, -64),
      new THREE.Vector3(0, -1.38, -74),
      new THREE.Vector3(0, -1.38, CORRIDOR_END),
    ];
    const curve = new THREE.CatmullRomCurve3(curvePts);
    const thread = new THREE.Mesh(
      new THREE.TubeGeometry(curve, 220, 0.028, 8, false),
      new THREE.MeshBasicMaterial({ color: goldBright })
    );
    thread.material.fog = false;
    scene.add(thread);
    const threadGlow = new THREE.Mesh(
      new THREE.TubeGeometry(curve, 220, 0.09, 8, false),
      new THREE.MeshBasicMaterial({ color: gold, transparent: true, opacity: 0.25, blending: THREE.AdditiveBlending, depthWrite: false })
    );
    threadGlow.material.fog = false;
    scene.add(threadGlow);

    // --- fessura di luce in fondo al corridoio ---
    const endGlow = new THREE.Mesh(
      new THREE.PlaneGeometry(0.5, 5.5),
      new THREE.MeshBasicMaterial({ color: goldBright })
    );
    endGlow.material.fog = false;
    endGlow.position.set(0, 1.2, CORRIDOR_END + 1);
    scene.add(endGlow);
    const endLight = new THREE.PointLight(0xf2d998, 3.2, 30);
    endLight.position.set(0, 1, CORRIDOR_END + 4);
    scene.add(endLight);

    for (let i = 0; i < 8; i++) {
      const z = 1 - i * 11;
      const light = new THREE.PointLight(0xf2d998, 1.1, 10);
      light.position.set(0, 1.8, z);
      scene.add(light);
    }

    scene.add(new THREE.AmbientLight(0xffffff, 0.1));

    // --- gruppi tappa ---
    const waypoints: THREE.Group[] = [];

    // Il tuo simbolo: doppio cerchio, come il logo — l'unica forma usata per ogni tappa
    function makeMoonRings(scale = 1): THREE.Group {
      const g = new THREE.Group();
      const lineMat = new THREE.MeshBasicMaterial({ color: gold, transparent: true, opacity: 0.85 });
      const outer = new THREE.Mesh(new THREE.TorusGeometry(1.1 * scale, 0.014 * scale, 8, 100), lineMat);
      g.add(outer);
      const inner = new THREE.Mesh(new THREE.TorusGeometry(0.58 * scale, 0.012 * scale, 8, 80), lineMat);
      inner.position.y = -0.28 * scale;
      g.add(inner);
      g.userData.spin = 0.08;
      return g;
    }

    const specs: { z: number; scale: number }[] = [
      { z: -2, scale: 1 },
      { z: -14, scale: 0.65 },
      { z: -26, scale: 1.1 },
      { z: -38, scale: 1.35 },
      { z: -50, scale: 0.8 },
      { z: -62, scale: 0.95 },
      { z: -76, scale: 1.5 },
    ];
    specs.forEach(({ z, scale }) => {
      const g = makeMoonRings(scale);
      g.position.set(0, 0.5, z);
      scene.add(g);
      waypoints.push(g);
    });

    // --- scroll → camera z ---
    const totalDepth = 88;
    let targetZ = camera.position.z;
    const getScrollFrac = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      return max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    };
    const onScroll = () => {
      const frac = getScrollFrac();
      targetZ = 9 - frac * totalDepth;
      const revealed = Math.min(1, frac / 0.05);
      renderer.domElement.style.opacity = String(0.14 + revealed * 0.86);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Desktop: il mouse guarda in giro (orizzontale invertito)
    let mouseX = 0;
    let mouseY = 0;
    const onMove = (e: MouseEvent) => {
      mouseX = -((e.clientX / window.innerWidth - 0.5) * 2);
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove);

    // Mobile: tieni premuto e trascina per guardarti intorno; rilasciando torna al centro
    let touchActive = false;
    let touchStartX = 0;
    let touchStartY = 0;
    let touchX = 0;
    let touchY = 0;
    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0];
      if (!t) return;
      touchActive = true;
      touchStartX = t.clientX;
      touchStartY = t.clientY;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!touchActive) return;
      const t = e.touches[0];
      if (!t) return;
      const dx = (t.clientX - touchStartX) / (window.innerWidth * 0.55);
      const dy = (t.clientY - touchStartY) / (window.innerHeight * 0.55);
      touchX = Math.max(-1, Math.min(1, dx));
      touchY = Math.max(-1, Math.min(1, dy));
    };
    const onTouchEnd = () => {
      touchActive = false;
      touchX = 0;
      touchY = 0;
    };
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("touchcancel", onTouchEnd, { passive: true });

    let frameId = 0;
    const clock = new THREE.Clock();
    const animate = () => {
      const delta = clock.getDelta();
      camera.position.z += (targetZ - camera.position.z) * 0.06;
      const yawInput = touchActive ? touchX : mouseX;
      const pitchInput = touchActive ? touchY : mouseY;
      camera.rotation.y += (yawInput * 2.7 - camera.rotation.y) * 0.06;
      camera.rotation.x += (-pitchInput * 0.3 - camera.rotation.x) * 0.06;

      waypoints.forEach((g) => {
        g.rotation.y += delta * 0.18;
        g.children.forEach((child: any) => {
          if (child.userData?.spin) child.rotation.z += delta * child.userData.spin;
          if (child.userData?.baseY !== undefined) {
            child.userData.phase += delta;
            child.position.y = child.userData.baseY + Math.sin(child.userData.phase) * 0.08;
          }
        });
      });

      if (rinascimentoVideo.readyState >= rinascimentoVideo.HAVE_CURRENT_DATA) {
        rinascimentoTex.needsUpdate = true;
      }

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      const aspect = window.innerWidth / window.innerHeight;
      camera.aspect = aspect;
      camera.fov = fovForAspect(aspect);
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("touchcancel", onTouchEnd);
      window.removeEventListener("resize", onResize);
      rinascimentoVideo.pause();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 z-0" aria-hidden />;
}

/* ===========================
   TILT 3D — inclinazione al passaggio del mouse
=========================== */
function Tilt({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setStyle({
      transform: `perspective(800px) rotateX(${(-py * 10).toFixed(2)}deg) rotateY(${(px * 12).toFixed(2)}deg) translateZ(6px)`,
    });
  };
  const onLeave = () => setStyle({ transform: "perspective(800px) rotateX(0) rotateY(0)" });

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transition: "transform .25s ease", transformStyle: "preserve-3d", ...style }}
      className={className}
    >
      {children}
    </div>
  );
}

/* ===========================
   CAROSELLO — scorrimento orizzontale con frecce
=========================== */
function Carousel({ children }: { children: React.ReactNode }) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".carousel-card");
    const amount = card ? card.getBoundingClientRect().width + 18 : 300;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <button onClick={() => scrollByCard(-1)} className="carousel-arrow prev" aria-label="Precedente">‹</button>
      <div ref={trackRef} className="carousel-track">{children}</div>
      <button onClick={() => scrollByCard(1)} className="carousel-arrow next" aria-label="Successivo">›</button>
    </div>
  );
}

/* ===========================
   REVEAL — fade-in all'ingresso in viewport
=========================== */
function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setInView(true), { threshold: 0.15 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${inView ? "in" : ""} ${className}`}>
      {children}
    </div>
  );
}

/* ===========================
   SOCIAL
=========================== */
function SocialBar({ size = "sm" }: { size?: "sm" | "md" }) {
  const icon = size === "sm" ? "w-5 h-5" : "w-6 h-6";
  const Link = ({ href, title, children }: any) => (
    <a href={href} target="_blank" rel="noopener noreferrer" title={title} className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-[var(--gold)]/25 bg-white/5 text-[var(--ivory)]/80 hover:text-[var(--gold-bright)] hover:border-[var(--gold)]/70 transition">
      {children}
    </a>
  );
  return (
    <div className="inline-flex gap-2">
      <Link href={SOCIALS.instagram} title="Instagram">
        <svg viewBox="0 0 24 24" className={icon} fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="3.6" /><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" /></svg>
      </Link>
      <Link href={SOCIALS.tiktok} title="TikTok">
        <svg viewBox="0 0 24 24" className={icon} fill="currentColor"><path d="M14 3h3a4.5 4.5 0 0 0 4 4v3a7.5 7.5 0 0 1-4-1.2v7.2A6 6 0 1 1 11 10v3a3 3 0 1 0 3 3V3z" /></svg>
      </Link>
      <Link href={SOCIALS.youtube} title="YouTube">
        <svg viewBox="0 0 24 24" className={icon} fill="currentColor"><path d="M23 12s0-3.5-.45-5.1a3 3 0 0 0-2.1-2.1C18.8 4.3 12 4.3 12 4.3s-6.8 0-8.45.5a3 3 0 0 0-2.1 2.1C1 8.5 1 12 1 12s0 3.5.45 5.1a3 3 0 0 0 2.1 2.1c1.65.5 8.45.5 8.45.5s6.8 0 8.45-.5a3 3 0 0 0 2.1-2.1C23 15.5 23 12 23 12zM10 15.5v-7l6 3.5-6 3.5z" /></svg>
      </Link>
    </div>
  );
}

/* ===========================
   SIMBOLO 3D IN MINIATURA — per il gate d'ingresso
=========================== */
function RingSymbol3D() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const size = mount.clientWidth;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 20);
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(size, size);
    mount.appendChild(renderer.domElement);

    const gold = new THREE.Color("#c9a24a");
    const group = new THREE.Group();
    const lineMat = new THREE.MeshBasicMaterial({ color: gold, transparent: true, opacity: 0.9 });
    const outer = new THREE.Mesh(new THREE.TorusGeometry(1.05, 0.03, 12, 100), lineMat);
    group.add(outer);
    const inner = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.025, 10, 80), lineMat);
    inner.position.y = -0.26;
    group.add(inner);
    scene.add(group);
    scene.add(new THREE.PointLight(0xf2d998, 1.5, 10).translateZ(3));

    let frameId = 0;
    const clock = new THREE.Clock();
    const animate = () => {
      const delta = clock.getDelta();
      group.rotation.y += delta * 0.5;
      group.rotation.x = Math.sin(clock.elapsedTime * 0.4) * 0.15;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" aria-hidden />;
}

/* ===========================
   GATE D'INGRESSO
=========================== */
function EntryGate({ onEnter }: { onEnter: () => void }) {
  const [closing, setClosing] = useState(false);
  const [hidden, setHidden] = useState(false);
  const handle = () => {
    setClosing(true);
    onEnter();
    setTimeout(() => setHidden(true), 1200);
  };
  if (hidden) return null;
  return (
    <div className={`gate ${closing ? "closing" : ""}`}>
      <div className="flex flex-col items-center gap-6 text-center px-6">
        <div className="w-28 h-28"><RingSymbol3D /></div>
        <p className="eyebrow">Codice dell'Essere</p>
        <h2 className="font-epic text-2xl md:text-3xl text-[var(--gold-bright)]">Varca la Soglia</h2>
        <p className="text-[var(--ivory)]/70 text-sm max-w-[18rem]">
          Apri il Codice per entrare nel corridoio ed ascoltare "{ENTRY_TRACK.title}".
        </p>
        <button onClick={handle} className="btn btn-gold btn-lg rounded-lg">Apri il Codice</button>
      </div>
    </div>
  );
}

/* ===========================
   APP
=========================== */
export default function App() {
  const audioRefs = useRef<(HTMLAudioElement | null)[]>([]);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [bars, setBars] = useState<number[]>(Array.from({ length: 26 }, () => 6));
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (playingIndex === null) {
      cancelAnimationFrame(frameRef.current);
      setBars(Array.from({ length: 26 }, () => 6));
      return;
    }
    const tick = () => {
      setBars((p) => p.map(() => 6 + Math.random() * 26));
      frameRef.current = requestAnimationFrame(tick);
    };
    tick();
    return () => cancelAnimationFrame(frameRef.current);
  }, [playingIndex]);

  const toggle = (i: number) => {
    const target = audioRefs.current[i];
    if (!target) return;
    if (playingIndex === i) {
      target.pause();
      setPlayingIndex(null);
      return;
    }
    if (playingIndex !== null) audioRefs.current[playingIndex]?.pause();
    target.volume = 0.55;
    target.play().then(() => setPlayingIndex(i)).catch(() => {});
  };

  const handleEnter = () => toggle(0);

  return (
    <div className="relative min-h-screen text-[var(--ivory)]">
      <GlobalStyles />
      <Corridor3D />
      {TRACKS.map((t, i) => (
        <audio
          key={t.title}
          ref={(el) => (audioRefs.current[i] = el)}
          src={t.audio}
          onEnded={() => setPlayingIndex((p) => (p === i ? null : p))}
        />
      ))}
      <EntryGate onEnter={handleEnter} />

      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-30 backdrop-blur bg-black/30 border-b border-[var(--gold)]/10">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <img src="/logo-codice.webp" alt="Codice dell'Essere" className="h-9 w-9 rounded-lg object-contain" />
            <span className="font-display font-semibold tracking-wide text-base md:text-lg">Codice dell'Essere</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#missione" className="hover:text-[var(--gold-bright)]">Missione</a>
            <a href="#libri" className="hover:text-[var(--gold-bright)]">Libri</a>
            <a href="#musica" className="hover:text-[var(--gold-bright)]">Musica</a>
            <a href="#video" className="hover:text-[var(--gold-bright)]">Video</a>
            <a href="#servizi" className="hover:text-[var(--gold-bright)]">Servizi</a>
            <a href="#contatti" className="hover:text-[var(--gold-bright)]">Contatti</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <button onClick={() => toggle(0)} className="btn btn-outline btn-sm rounded-lg" title={ENTRY_TRACK.title}>
              {playingIndex === 0 ? "❚❚ In ascolto" : "▶ Return Within"}
            </button>
            <a href="#libri" className="btn btn-gold btn-sm rounded-lg">Libri</a>
          </div>
        </div>
      </header>

      {/* HERO — ingresso del corridoio */}
      <section id="home" className="relative z-10 min-h-screen flex items-end">
        <div className="mx-auto max-w-7xl px-4 pb-20 w-full">
          <div className="flex flex-wrap gap-2 mb-5">
            {["Divulgatore", "Scrittore", "Editore", "Musicista"].map((b) => (
              <span key={b} className="px-3 py-1 rounded-full bg-white/5 border border-[var(--gold)]/30 text-[var(--gold-bright)] text-xs tracking-wide">{b}</span>
            ))}
          </div>
          <h1 className="font-epic font-bold text-[40px] md:text-[64px] lg:text-[76px] leading-[1.05] tracking-wide max-w-4xl">
            <span className="block bg-gradient-to-r from-[var(--gold-bright)] via-[var(--gold)] to-[var(--gold-bright)] bg-clip-text text-transparent">
              Risveglia Ciò che Sei
            </span>
          </h1>
          <p className="mt-5 text-[var(--ivory)]/85 text-lg max-w-xl">
            Antiche Sapienze, ricerca storica, pratica quotidiana, e ora anche musica. Scorri per attraversare il Codice.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#libri" className="btn btn-gold btn-lg rounded-lg">Scopri i libri</a>
            <a href="#musica" className="btn btn-outline btn-lg rounded-lg">Ascolta la musica</a>
          </div>
          <p className="eyebrow mt-14 animate-pulse">↓ scorri per entrare</p>
        </div>
      </section>

      {/* MISSIONE */}
      <ChapterAltar id="missione" number="I" title="Missione" align="right">
        <img src={IMAGES.authorPortrait} alt="Umberto Portaro" className="w-40 md:w-48 rounded-xl object-cover aspect-[4/5] border border-[var(--gold)]/25 float-left mr-5 mb-3 shadow-[0_0_40px_rgba(201,162,74,0.15)]" />
        <h2 className="font-display text-2xl md:text-3xl font-bold text-[var(--gold-bright)] mb-3">Umberto Portaro</h2>
        <p className="text-[var(--ivory)]/80 leading-relaxed">
          Imprenditore digitale, narratore e ricercatore indipendente, unisce il pensiero strategico alla conoscenza
          profonda delle leggi universali. Creatore della filosofia <strong>Codice dell'Essere</strong>, integra
          scienza, ermetismo e crescita personale in un linguaggio moderno. Da poco, quella stessa ricerca è
          diventata anche <strong>musica</strong>: un modo diverso di dire le stesse verità.
        </p>
      </ChapterAltar>

      {/* LIBRI */}
      <ChapterAltar id="libri" number="II" title="Libri" subtitle="Le opere del Codice dell'Essere — scorri per sfogliare." align="left" wide>
        <Carousel>
          <div className="carousel-card w-40 sm:w-48"><BookTile img="/cover-anunnaki.png" title="Codice Anunnaki — Vol. Ø" href={LINKS.anunnaki0} /></div>
          <div className="carousel-card w-40 sm:w-48"><BookTile img="/cover-anunnaki-1.png" title="Codice Anunnaki — Vol. I — Gli Dei del Cielo e della Terra" href={LINKS.anunnaki1} /></div>
          <div className="carousel-card w-40 sm:w-48"><BookTile img="/cover-kybalion.png" title="Il Kybalion" href={LINKS.kybalion} /></div>
          <div className="carousel-card w-40 sm:w-48"><BookTile img="/cover-limitless.png" title="Limitless" href={LINKS.limitless} /></div>
          <div className="carousel-card w-40 sm:w-48"><BookTile img="/cover-amore.png" title="L'amore che ti riporta a Te" href={LINKS.amore} badge="Nuova uscita" /></div>

          <div className="carousel-card w-28 sm:w-32">
            <div className="h-full min-h-[14rem] rounded-xl border border-[var(--gold)]/25 bg-white/5 flex flex-col items-center justify-center text-center px-2 py-4 gap-2">
              <span className="text-2xl text-[var(--gold-bright)]">→</span>
              <p className="eyebrow leading-snug">Altre Voci<br/>del Codice</p>
            </div>
          </div>
          <div className="carousel-card w-40 sm:w-48"><BookTile img="/cover-the-path-of-destiny.png" title="I Sentieri del Destino" href={LINKS.pathOfDestiny} badge="Autore ospite" /></div>
        </Carousel>
      </ChapterAltar>

      {/* MUSICA */}
      <ChapterAltar id="musica" number="III" title="Musica" subtitle="Le stesse verità, in un'altra lingua: il suono — scorri tra i brani." align="right" wide>
        <Carousel>
          {TRACKS.map((t, i) => (
            <div key={t.title} className="carousel-card w-72 sm:w-80">
              <TrackCard
                track={t}
                isPlaying={playingIndex === i}
                onToggle={() => toggle(i)}
                bars={bars}
                opening={i === 0}
              />
            </div>
          ))}
        </Carousel>
      </ChapterAltar>

      {/* VIDEO */}
      <ChapterAltar id="video" number="IV" title="Video" subtitle="Il reel del momento." align="left">
        <div className="max-w-xs mx-auto md:mx-0">
          <VideoEmbed title="Reel — Codice Anunnaki" url={VIDEOS.tiktokAnunnaki} />
        </div>
      </ChapterAltar>

      {/* SERVIZI */}
      <ChapterAltar id="servizi" number="V" title="Servizi Editoriali" subtitle="Supporto completo per autori e progetti affini." align="right" wide>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            ["Coaching Autore", "Dall'idea al manoscritto."],
            ["Editing & Impaginazione", "Revisione e impaginati per stampa e digitale."],
            ["Pubblicazione (KDP/Ingram)", "ISBN, formati, prezzo, canali."],
            ["Marketing & ADS", "Funnel, creatività, Amazon Ads e social."],
            ["Ghostwriting", "Scrittura nel tuo stile, con fonti."],
            ["Traduzioni", "IT ⇄ EN/ES/FR/DE con adattamento editoriale."],
          ].map(([t, b]) => (
            <Tilt key={t} className="glass rounded-xl p-5">
              <h3 className="font-display font-semibold">{t}</h3>
              <p className="text-[var(--ivory)]/70 text-sm mt-2">{b}</p>
            </Tilt>
          ))}
        </div>
      </ChapterAltar>

      {/* CONTATTI */}
      <section id="contatti" className="relative z-10 min-h-screen flex items-center py-24">
        <div className="mx-auto max-w-3xl px-4 w-full">
          <Reveal>
            <div className="glass rounded-2xl p-8 md:p-12 text-center">
              <p className="eyebrow mb-2">Capitolo VI — Contatti</p>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">Sei arrivato al cuore del Codice</h2>
              <p className="text-[var(--ivory)]/80 mb-8">Collaborazioni, interviste, eventi, pubblicazioni o musica.</p>
              <form className="grid sm:grid-cols-2 gap-4 text-left" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Il tuo nome" className="px-4 py-3" />
                <input type="email" required placeholder="you@example.com" className="px-4 py-3" />
                <textarea rows={4} placeholder="Raccontami del tuo progetto" className="sm:col-span-2 px-4 py-3 resize-none" />
                <button className="sm:col-span-2 btn btn-gold rounded-lg">Invia</button>
              </form>
              <div className="mt-8 flex flex-col items-center gap-3">
                <a href="mailto:info@codicedellessere.it" className="underline hover:text-[var(--gold-bright)]">info@codicedellessere.it</a>
                <SocialBar />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="relative z-10 border-t border-[var(--gold)]/15 bg-black/40">
        <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-[var(--ivory)]/60 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Codice dell'Essere</p>
          <div className="flex gap-6"><a href="#" className="hover:text-[var(--gold-bright)]">Privacy</a><a href="#" className="hover:text-[var(--gold-bright)]">Cookie</a></div>
        </div>
      </footer>
    </div>
  );
}

/* ===========================
   ALTARE DI CAPITOLO — pannello di vetro fluttuante, allineato ai lati del corridoio
=========================== */
function ChapterAltar({
  id, number, title, subtitle, align = "left", wide = false, children,
}: { id: string; number: string; title: string; subtitle?: string; align?: "left" | "right"; wide?: boolean; children: React.ReactNode }) {
  return (
    <section id={id} className="relative z-10 min-h-screen flex items-center py-20">
      <div className="mx-auto max-w-7xl px-4 w-full">
        <div className={`flex ${align === "right" ? "justify-end" : "justify-start"}`}>
          <Reveal className={`glass rounded-2xl p-6 md:p-10 ${wide ? "w-full md:w-[42rem] lg:w-[52rem]" : "w-full md:w-[32rem]"}`}>
            <div className="chapter-heading mb-5">
              <p className="eyebrow">Capitolo {number} — {title}</p>
              <h2 className="font-display text-2xl md:text-3xl font-bold mt-1">{title}</h2>
              {subtitle && <p className="text-[var(--ivory)]/75 mt-2">{subtitle}</p>}
            </div>
            {children}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function TrackCard({
  track, isPlaying, onToggle, bars, opening,
}: { track: { title: string; subtitle: string; cover: string; audio: string; spotify?: string }; isPlaying: boolean; onToggle: () => void; bars: number[]; opening?: boolean }) {
  const hasAudio = Boolean(track.audio);
  return (
    <Tilt className="rounded-xl overflow-hidden border border-[var(--gold)]/25 bg-black/40 h-full">
      <div className="relative aspect-square bg-black/60">
        <img src={track.cover} alt={track.title} className="absolute inset-0 w-full h-full object-cover object-top opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
        {opening && <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-[var(--gold)]/85 text-black text-[9px] font-semibold uppercase">Brano d'apertura</span>}
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="font-display text-base font-semibold leading-snug">{track.title}</h3>
          {track.subtitle && <p className="text-[var(--ivory)]/75 text-xs mt-1 line-clamp-2">{track.subtitle}</p>}

          {hasAudio ? (
            <>
              <div className="mt-3 flex items-center gap-3">
                <button onClick={onToggle} className="btn btn-gold btn-sm rounded-lg w-9 h-9 !p-0 shrink-0">{isPlaying ? "❚❚" : "▶"}</button>
                <div className="wave flex-1">{(isPlaying ? bars : bars.map(() => 6)).map((h, i) => <i key={i} style={{ height: `${h}px` }} />)}</div>
              </div>
              {track.spotify && (
                <a href={track.spotify} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1.5 text-xs text-[var(--gold-bright)]/85 hover:text-[var(--gold-bright)] underline underline-offset-2">
                  <span aria-hidden>♫</span> Ascolta anche su Spotify
                </a>
              )}
            </>
          ) : (
            <a href={track.spotify} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 btn btn-gold btn-sm rounded-lg">
              <span aria-hidden>♫</span> Ascolta su Spotify
            </a>
          )}
        </div>
      </div>
    </Tilt>
  );
}

function BookTile({ img, title, href, badge }: { img: string; title: string; href: string; badge?: string }) {
  return (
    <Tilt className="rounded-xl overflow-hidden border border-[var(--gold)]/20 bg-black/40">
      <div className="relative aspect-[3/4]">
        {badge && <span className="absolute top-2 left-2 z-10 px-2 py-0.5 rounded-full bg-[var(--gold)]/85 text-black text-[9px] font-semibold uppercase">{badge}</span>}
        <img src={img} alt={title} className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="p-3">
        <p className="text-sm font-semibold leading-snug">{title}</p>
        <a href={href} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block btn btn-gold btn-sm rounded-md text-xs">Acquista</a>
      </div>
    </Tilt>
  );
}

function VideoEmbed({ title, url }: { title: string; url: string }) {
  const { kind, embedUrl, tiktokId } = useMemo(() => {
    const u = (url || "").trim();
    if (u.includes("youtube.com") || u.includes("youtu.be")) {
      let id = "";
      if (u.includes("youtu.be/")) id = u.split("youtu.be/")[1].split(/[?&]/)[0];
      else if (u.includes("watch?v=")) id = u.split("watch?v=")[1].split("&")[0];
      return { kind: "youtube", embedUrl: `https://www.youtube.com/embed/${id}`, tiktokId: "" };
    }
    if (u.includes("tiktok.com")) return { kind: "tiktok", embedUrl: u, tiktokId: (u.split("/video/")[1] || "").split("?")[0] };
    return { kind: "unknown", embedUrl: "", tiktokId: "" };
  }, [url]);

  useEffect(() => {
    if (kind !== "tiktok") return;
    const s = document.createElement("script");
    s.src = "https://www.tiktok.com/embed.js";
    s.async = true;
    document.body.appendChild(s);
  }, [kind]);

  return (
    <Tilt className="rounded-xl overflow-hidden border border-[var(--gold)]/20 bg-black/50">
      <div className="text-center py-2 border-b border-[var(--gold)]/15">
        <h3 className="font-display text-sm font-semibold text-[var(--gold-bright)]">{title}</h3>
      </div>
      <div className="bg-black/60 flex items-center justify-center" style={{ height: 260 }}>
        {kind === "youtube" && <iframe src={embedUrl} title={title} allow="accelerometer; autoplay; encrypted-media; picture-in-picture" allowFullScreen className="w-full h-full" />}
        {kind === "tiktok" && (
          <blockquote className="tiktok-embed" cite={embedUrl} data-video-id={tiktokId} style={{ maxWidth: 240, width: "100%", margin: 0, height: "100%" }}>
            <section></section>
          </blockquote>
        )}
        {kind === "unknown" && <div className="text-[var(--ivory)]/50 text-sm">Video in arrivo</div>}
      </div>
    </Tilt>
  );
}
