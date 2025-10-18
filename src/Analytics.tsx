import { useEffect } from "react";

const GA_ID = "G-G93JBY8BHY";

export default function Analytics() {
  useEffect(() => {
    // Evita doppia iniezione
    if (document.getElementById("ga-gtag-script")) return;

    const s1 = document.createElement("script");
    s1.id = "ga-gtag-script";
    s1.async = true;
    s1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(s1);

    const s2 = document.createElement("script");
    s2.id = "ga-inline-init";
    s2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      // Consent Mode (fallback): consenti analytics in UE
      gtag('consent', 'default', { 'analytics_storage': 'granted' });

      gtag('config', '${GA_ID}');
      console.log('[GA] inizializzato');
    `;
    document.head.appendChild(s2);
  }, []);

  return null;
}
