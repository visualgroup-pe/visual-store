/* VISUAL Store — tema claro/oscuro, subcategorías y ofertas flash diarias.
   Se carga después de products.js y antes de app.js. */
(function () {
  "use strict";

  /* ---------- Tema claro / oscuro ---------- */
  const root = document.documentElement;
  const getSaved = () => { try { return localStorage.getItem("vs-theme"); } catch (e) { return null; } };
  const setSaved = v => { try { localStorage.setItem("vs-theme", v); } catch (e) { /* sin almacenamiento */ } };
  const prefersLight = () => window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
  function applyTheme(t) {
    root.setAttribute("data-theme", t);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", t === "light" ? "#F6F3EC" : "#091629");
    const b = document.getElementById("themeBtn");
    if (b) {
      b.setAttribute("aria-label", t === "light" ? "Cambiar a modo oscuro" : "Cambiar a modo claro");
      b.innerHTML = t === "light"
        ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>'
        : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4.2"/><path d="M12 2v2.2M12 19.8V22M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M2 12h2.2M19.8 12H22M4.9 19.1l1.6-1.6M17.5 6.5l1.6-1.6"/></svg>';
    }
  }
  applyTheme(getSaved() || (prefersLight() ? "light" : "dark"));
  document.addEventListener("DOMContentLoaded", () => {
    applyTheme(root.getAttribute("data-theme"));
    const b = document.getElementById("themeBtn");
    if (b) b.addEventListener("click", () => {
      const t = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      applyTheme(t); setSaved(t);
    });
  });

  /* Productos ocultos (no cumplen criterios de la tienda) */
  const HIDE = new Set([518, 4295, 1877, 6255, 8368, 7905, 7922, 8619, 8260, 9312, 9428, 6826]);
  const P = window.PRODUCTS = (window.PRODUCTS || []).filter(p => !HIDE.has(p.dropiId));

  /* ---------- Subcategorías automáticas ---------- */
  const SUBS = {
    Belleza: [
      ["Equipos de belleza", /masajeador|depilador|secador|plancha|rizador|molde|hielo facial|limpiador de (brochas|pinceles)|espejo/i],
      ["Higiene dental", /dental|dientes|blanqueador de dientes|blanqueadoras/i],
      ["Maquillaje y pestañas", /labial|lipstick|delineador|pesta[ñn]as|cejas|maquill|brochas|pinceles|u[ñn]as/i],
      ["Barba y afeitado", /afeit|after ?shave|barba|shaver|for mens?\b/i],
      ["Cabello", /shampoo|shampo|acondicion|capilar|cabello|pelo|\bcera\b|wax|gel fij|fijador|laca|keratina|botox|t[eé]rmico|rizos|matizador|crecepelo|anticaspa|anti caspa|peinar|hair|muru|batana|romero|reacondicionador|[eé]lev[eé]|tratamiento|recamier|conditioner|keraphlex|bamboo|gel fix|ma[ií]z morado|semi di lino|rizos/i],
      ["Skincare facial", /s[eé]rum|facial|rostro|t[oó]nico|contorno|ojeras|mascarilla|m[aá]scara facial|limpiador|desmaquill|micelar|acn[eé]|retinol|niacinam|hialur|centella|protector solar|bloqueador|solar|spf|fps|fotoprotec|aclarante|aclarador|despigment|velo facial|amp\b|ampolla|toner|toning|peeling|skin|cerave|madaga|dermo limp|espuma|caracol|calmante|suero|derma roller/i],
      ["Cuidado corporal", /corporal|cuerpo|loci[oó]n|exfoliante|scrub|jab[oó]n|ducha|shower|manos|pies|desodorante|talco|colonia|vaselina|aceite|crema|repel|antibacterial|[ií]ntimo|b[aá]lsamo|polvo|sal de ba[ñn]o|aloe/i]
    ],
    Moda: [
      ["Trajes de baño", /ba[ñn]o/i],
      ["Fajas y bodies", /faja|body|moldead|busto/i],
      ["Mochilas", /mochila|morral/i],
      ["Carteras y bolsos", /cartera|bolso|lonchera|crossody|ri[ñn]onera|pa[ñn]alera/i],
      ["Joyería y accesorios", /collar|cadena|pulsera|brazalete|anillo|arete|lentes/i],
      ["Ropa y calzado", /zapatill|medias|leggin|casaca|pijama|polera/i]
    ],
    Hogar: [
      ["Cocina", /cocina|exprimidor|licuadora|selladora|sellador al|balanza|escurridor|tapas|termo|lonchera|airfryer|olla|plato|individual|utensilio|gramera/i],
      ["Limpieza", /limpi|desengras|desatorador|pastillas|removedor|aspiradora|[aá]caros|solubril|lavadora|inodoro|esponja|horno/i],
      ["Organización", /organizador|bolsas|compresi|colgador|soporte|sujetador|vac[ií]o/i],
      ["Climatización", /calefactor|humidificador|secador de ropa|ventilador/i],
      ["Iluminación y deco", /luz|led|l[aá]mpara|foco|luna|decor|papa noel|navide|globos|inflador/i]
    ],
    Tech: [
      ["Smartwatches", /watch|reloj|relog|band\b|smart band/i],
      ["Audio", /aud[ií]fono|auricular|parlante|sonido|lentes/i],
      ["Gaming y TV", /consola|tv\b|antena|juego|gamer/i],
      ["Iluminación LED", /led|luz|aro|linterna|foco/i],
      ["Accesorios", /cargador|cable|teclado|power|tr[ií]pode|kit|drone|balanza|destornillador/i]
    ],
    Bienestar: [
      ["Masajes y relajación", /masaj|tens|electro|parche/i],
      ["Deporte y soporte", /ejercit|rodiller|tobiller|bandas|corrector|postura|pedal/i],
      ["Descanso", /almohada|dormir|sue[ñn]o/i]
    ],
    Herramientas: [
      ["Medición", /wincha|cinta m[eé]trica|nivel|l[aá]ser|detector/i],
      ["Taladro y brocas", /broca|taladro|destornill|amoladora|sierra|afilador|extensi[oó]n/i],
      ["Llaves y dados", /llave|dado/i]
    ],
    Auto: [
      ["Seguridad", /linterna|candado|lentes|martillo|sellador/i],
      ["Limpieza del auto", /limpi|lavado|cepillo/i]
    ],
    Juegos: [
      ["Didácticos", /montessori|libro|scratch|cubo|guitar|teclado|ciencia|did[aá]ctic|pizarra/i],
      ["Bebé", /beb[eé]/i],
      ["Juguetes", /tren|pop it|juguete|mu[ñn]ec|carro|globo/i]
    ]
  };
  const FALLBACK = { Belleza: "Más belleza", Moda: "Más moda", Hogar: "Hogar práctico", Tech: "Gadgets", Bienestar: "Cuidado personal", Herramientas: "Herramientas varias", Auto: "Accesorios para auto", Juegos: "Más juegos", Mascotas: "Para tu mascota" };
  for (const p of P) {
    const rules = SUBS[p.categoria] || [];
    const hit = rules.find(([, re]) => re.test(p.nombre));
    p.sub = hit ? hit[0] : (FALLBACK[p.categoria] || "Otros");
  }

  /* ---------- Ofertas flash del día (hora de Lima, UTC-5) ---------- */
  const LIMA_OFFSET = 5 * 3600e3;
  const limaNow = () => new Date(Date.now() - LIMA_OFFSET);
  const dayKey = () => limaNow().toISOString().slice(0, 10);
  const endOfDay = () => { const d = limaNow(); return Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate() + 1) + LIMA_OFFSET; };
  function seeded(str) { let h = 2166136261; for (const c of str) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); } return () => { h = Math.imul(h ^ (h >>> 15), 2246822507); h = Math.imul(h ^ (h >>> 13), 3266489909); return ((h ^= h >>> 16) >>> 0) / 4294967296; }; }
  const FLASH_COUNT = 8, FLASH_OFF = 0.15;
  const pool = P.filter(p => p.precio >= 59);
  const rnd = seeded("vs-" + dayKey());
  const picked = [];
  const used = new Set();
  while (picked.length < Math.min(FLASH_COUNT, pool.length)) {
    const p = pool[Math.floor(rnd() * pool.length)];
    if (!used.has(p.slug)) { used.add(p.slug); picked.push(p); }
  }
  const cut = v => Math.floor(v * (1 - FLASH_OFF));
  for (const p of picked) {
    const np = cut(p.precio), nk = cut(p.precioPack);
    if (np >= p.precio) continue;
    p.precioNormal = p.precio; p.precioPackNormal = p.precioPack;
    p.precio = np; p.precioPack = Math.min(nk, 2 * np - 10);
    p.flash = true; p.flashOff = Math.round((1 - np / p.precioNormal) * 100);
  }
  const pad = n => String(n).padStart(2, "0");
  window.VS_FLASH = {
    end: endOfDay(),
    items: () => P.filter(p => p.flash),
    left() { const ms = Math.max(0, this.end - Date.now()); const s = Math.floor(ms / 1000); return `${pad(Math.floor(s / 3600))}:${pad(Math.floor(s / 60) % 60)}:${pad(s % 60)}`; }
  };
  setInterval(() => {
    const t = window.VS_FLASH.left();
    document.querySelectorAll("[data-countdown]").forEach(el => { el.textContent = t; });
    if (Date.now() >= window.VS_FLASH.end + 2000) location.reload();
  }, 1000);
})();
