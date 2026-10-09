/* VISUAL Store — lógica de la tienda (sin dependencias) */
(function () {
  "use strict";
  const C = window.STORE_CONFIG;
  const P = window.PRODUCTS;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const main = $("#main");
  const money = n => `${C.moneda} ${Number(n).toLocaleString("es-PE", { minimumFractionDigits: 0, maximumFractionDigits: 2 })}`;
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const bySlug = s => P.find(p => p.slug === s);
  const waLink = text => `https://wa.me/${C.whatsapp}?text=${encodeURIComponent(text)}`;

  const DEPARTAMENTOS = ["Lima Metropolitana", "Callao", "Lima Provincias", "Amazonas", "Áncash", "Apurímac", "Arequipa", "Ayacucho", "Cajamarca", "Cusco", "Huancavelica", "Huánuco", "Ica", "Junín", "La Libertad", "Lambayeque", "Loreto", "Madre de Dios", "Moquegua", "Pasco", "Piura", "Puno", "San Martín", "Tacna", "Tumbes", "Ucayali"];
  const CATS = ["Todos", ...new Set(P.map(p => p.categoria))];

  const ICON = {
    cash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2.5"/><circle cx="12" cy="12" r="2.6"/><path d="M6 10v4M18 10v4"/></svg>',
    truck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h11v10H3zM14 9h4l3 3v4h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/></svg>',
    chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-11.8 7L4 20l1.1-4.6A8 8 0 1 1 21 12z"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5 9-10"/></svg>',
    wa: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm4.5 12.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z"/></svg>'
  };

  /* ---------- almacenamiento seguro ---------- */
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* sin almacenamiento */ } }
  };

  /* ---------- píxeles (opcionales) ---------- */
  function loadPixels() {
    if (C.metaPixelId) {
      !function (f, b, e, v, n, t, s) { if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments) }; if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = "2.0"; n.queue = []; t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s) }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
      fbq("init", C.metaPixelId); fbq("track", "PageView");
    }
    if (C.tiktokPixelId) {
      !function (w, d, t) { w.TiktokAnalyticsObject = t; var ttq = w[t] = w[t] || []; ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie"]; ttq.setAndDefer = function (t, e) { t[e] = function () { t.push([e].concat(Array.prototype.slice.call(arguments, 0))) } }; for (var i = 0; i < ttq.methods.length; i++)ttq.setAndDefer(ttq, ttq.methods[i]); ttq.load = function (e) { var i = "https://analytics.tiktok.com/i18n/pixel/events.js"; ttq._i = ttq._i || {}; ttq._i[e] = []; ttq._i[e]._u = i; var o = d.createElement("script"); o.type = "text/javascript"; o.async = !0; o.src = i + "?sdkid=" + e + "&lib=" + t; var a = d.getElementsByTagName("script")[0]; a.parentNode.insertBefore(o, a) }; ttq.load(C.tiktokPixelId); ttq.page(); }(window, document, "ttq");
    }
    if (C.googleAnalyticsId) {
      const s = document.createElement("script"); s.async = true; s.src = "https://www.googletagmanager.com/gtag/js?id=" + C.googleAnalyticsId; document.head.appendChild(s);
      window.dataLayer = window.dataLayer || []; window.gtag = function () { dataLayer.push(arguments); }; gtag("js", new Date()); gtag("config", C.googleAnalyticsId);
    }
  }
  function track(event, data = {}) {
    try {
      if (window.fbq) fbq("track", event, { currency: "PEN", ...data });
      if (window.ttq) {
        const map = { ViewContent: "ViewContent", AddToCart: "AddToCart", InitiateCheckout: "InitiateCheckout", Lead: "SubmitForm" };
        ttq.track(map[event] || event, { currency: "PEN", ...data });
      }
      if (window.gtag) gtag("event", event, data);
    } catch { /* ignorar */ }
  }

  /* ---------- carrito ---------- */
  let cart = store.get("vs_cart", []).filter(i => bySlug(i.slug));
  const linePrice = i => { const p = bySlug(i.slug); return (i.pack ? p.precioPack : p.precio) * i.qty; };
  const cartTotal = () => cart.reduce((s, i) => s + linePrice(i), 0);
  const cartUnits = () => cart.reduce((s, i) => s + i.qty * (i.pack ? 2 : 1), 0);
  function saveCart() { store.set("vs_cart", cart); renderCartBadge(); renderDrawer(); }
  function addToCart(slug, pack = false, qty = 1) {
    const ex = cart.find(i => i.slug === slug && i.pack === pack);
    if (ex) ex.qty += qty; else cart.push({ slug, pack, qty });
    saveCart();
    const p = bySlug(slug);
    track("AddToCart", { value: pack ? p.precioPack : p.precio, content_ids: [p.dropiId], content_type: "product" });
    toast(`Agregado: ${p.nombre}`);
  }
  function renderCartBadge() {
    const n = cartUnits(), el = $("#cartCount");
    el.textContent = n; el.hidden = n === 0;
  }
  function renderDrawer() {
    const body = $("#drawerBody"), foot = $("#drawerFoot");
    if (!cart.length) {
      body.innerHTML = `<div class="empty"><p>Tu carrito está vacío.</p><a class="btn btn-ghost" href="#/catalogo" data-close>Ver productos</a></div>`;
      foot.innerHTML = ""; return;
    }
    body.innerHTML = cart.map((i, idx) => {
      const p = bySlug(i.slug);
      return `<div class="line">
        <img src="${esc(p.imagenes[0])}" alt="" loading="lazy">
        <div><div class="n">${esc(p.nombre)}</div><div class="v">${i.pack ? "Pack x2" : "1 unidad"}</div>
          <div class="qty" aria-label="Cantidad"><button data-dec="${idx}" aria-label="Quitar uno">−</button><span>${i.qty}</span><button data-inc="${idx}" aria-label="Agregar uno">+</button></div></div>
        <div class="r"><b>${money(linePrice(i))}</b><br><button class="rm" data-rm="${idx}">Quitar</button></div>
      </div>`;
    }).join("");
    foot.innerHTML = `<div class="totals"><span>Total</span><b>${money(cartTotal())}</b></div>
      <p class="small muted" style="margin:0 0 12px">Envío gratis. Pagas al recibir en las zonas con contraentrega.</p>
      <a class="btn btn-gold btn-block" href="#/checkout" data-close>Finalizar pedido</a>`;
  }
  function openDrawer() { const d = $("#drawer"); d.classList.add("open"); d.setAttribute("aria-hidden", "false"); renderDrawer(); setTimeout(() => $(".drawer-head .icon-btn").focus(), 50); }
  function closeDrawer() { const d = $("#drawer"); d.classList.remove("open"); d.setAttribute("aria-hidden", "true"); }

  /* ---------- utilidades UI ---------- */
  let toastT;
  function toast(msg) { const t = $("#toast"); t.textContent = msg; t.classList.add("show"); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove("show"), 2200); }
  function setTitle(t) { document.title = t ? `${t} — ${C.nombre}` : `${C.nombre} — ${C.eslogan}`; }
  const orderCode = (prefix) => { const d = new Date(); const ymd = d.getFullYear().toString().slice(2) + String(d.getMonth() + 1).padStart(2, "0") + String(d.getDate()).padStart(2, "0"); return `${prefix}-${ymd}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`; };
  function postWebhook(payload) {
    if (!C.sheetsWebhook) return;
    try { fetch(C.sheetsWebhook, { method: "POST", mode: "no-cors", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(payload) }); } catch { /* ignorar */ }
  }

  /* ---------- componentes ---------- */
  const ahorro = p => Math.max(0, 2 * p.precio - p.precioPack);
  const card = p => `
    <article class="card reveal">
      <a href="#/p/${p.slug}" class="img" aria-label="${esc(p.nombre)}">
        <img src="${esc(p.imagenes[0])}" alt="${esc(p.nombre)}" loading="lazy">
        ${p.flash ? `<span class="badge badge-flash">⚡ -${p.flashOff}% hoy</span>` : p.top ? `<span class="badge badge-fire">🔥 Top ${p.top}</span>` : p.destacado ? '<span class="badge">Destacado</span>' : ""}
        ${ahorro(p) ? `<span class="save-chip">Pack x2 −${money(ahorro(p))}</span>` : ""}
      </a>
      <div class="body">
        <span class="cat">${esc(p.categoria)}</span>
        <h3><a href="#/p/${p.slug}">${esc(p.nombre)}</a></h3>
        <div class="price">${p.flash ? `<s class="was">${money(p.precioNormal)}</s> ` : ""}${money(p.precio)}</div>
        <div class="pack">${p.flash ? `⚡ Termina en <span data-countdown>${window.VS_FLASH.left()}</span>` : `Pack x2: ${money(p.precioPack)}`}</div>
        <button class="btn btn-ghost add" data-add="${p.slug}">Agregar al carrito</button>
      </div>
    </article>`;

  const topFive = () => {
    const tops = P.filter(p => p.top).sort((x, y) => x.top - y.top).slice(0, 5);
    if (!tops.length) return "";
    return `
      <section class="section top5" id="top5">
        <div class="wrap">
          <div class="section-head"><div><span class="eyebrow">🔥 Lo más hot</span><h2>Top 5 <span class="grad-text">VISUAL</span></h2></div><p class="muted">Nuestros favoritos del momento. Pídelos hoy y paga recién cuando te llegan.</p></div>
          <ol class="top-list">${tops.map(p => `
            <li class="top-item reveal">
              <span class="rank" aria-label="Puesto ${p.top}">#${p.top}</span>
              <a class="top-img" href="#/p/${p.slug}"><img src="${esc(p.imagenes[0])}" alt="${esc(p.nombre)}" loading="lazy"></a>
              <div class="top-body">
                <div class="top-tags"><span class="tag-hot">🔥 Top ${p.top}</span>${ahorro(p) ? `<span class="tag-sale">OFERTA pack x2 · ahorras ${money(ahorro(p))}</span>` : ""}<span class="tag-ship">Envío gratis</span></div>
                <h3><a href="#/p/${p.slug}">${esc(p.nombre)}</a></h3>
                <p class="muted">${esc(p.corto)}</p>
                <div class="top-price"><b>${money(p.precio)}</b><span>o 2 por ${money(p.precioPack)}</span></div>
                <div class="top-ctas">
                  <a class="btn btn-gold btn-pulse" href="#/p/${p.slug}">¡Lo quiero! · Pago al recibir</a>
                  <button class="btn btn-ghost" data-add="${p.slug}">Agregar al carrito</button>
                </div>
              </div>
            </li>`).join("")}
          </ol>
        </div>
      </section>`;
  };

  const promoBand = () => {
    const max = Math.max(...P.map(ahorro));
    const items = ["🔥 SALE: packs x2 con descuento", `Ahorra hasta ${money(max)} llevando 2`, "🚚 Envío gratis", "💵 Pagas al recibir", "🛡️ Garantía de " + C.garantiaDias + " días"];
    const row = items.map(t => `<span>${esc(t)}</span>`).join('<i aria-hidden="true">✦</i>');
    return `<div class="promo-band" role="note"><div class="promo-track">${row}<i aria-hidden="true">✦</i>${row}<i aria-hidden="true">✦</i></div></div>`;
  };

  const trustBar = () => `
    <div class="trust">
      <div class="trust-item">${ICON.cash}<div><b>Pagas al recibir</b><span>En efectivo o Yape al courier</span></div></div>
      <div class="trust-item">${ICON.truck}<div><b>Envío gratis</b><span>${esc(C.tiempoEntrega)}</span></div></div>
      <div class="trust-item">${ICON.shield}<div><b>Garantía ${C.garantiaDias} días</b><span>Por fallas de fábrica</span></div></div>
      <div class="trust-item">${ICON.chat}<div><b>Atención por WhatsApp</b><span>Te confirmamos cada pedido</span></div></div>
    </div>`;

  const steps = () => `
    <div class="steps">
      <div class="step"><div class="n">1</div><h3>Elige tu producto</h3><p class="muted">Agrega al carrito lo que te guste. El pack x2 sale más a cuenta.</p></div>
      <div class="step"><div class="n">2</div><h3>Déjanos tus datos</h3><p class="muted">Completa nombre, celular y dirección. Te escribimos por WhatsApp para confirmar.</p></div>
      <div class="step"><div class="n">3</div><h3>Recibe y paga</h3><p class="muted">El courier te lo entrega en ${esc(C.tiempoEntrega)}. Pagas recién ahí.</p></div>
    </div>`;

  const FAQ = [
    ["¿Cómo funciona el pago contraentrega?", "Haces tu pedido sin pagar nada. Cuando el courier llega con tu producto, le pagas en efectivo o por Yape. Así compras con total confianza."],
    ["¿Cuánto demora el envío?", `Entre ${C.tiempoEntrega}. Antes de despachar te escribimos por WhatsApp para confirmar tu dirección.`],
    ["¿Cuánto cuesta el envío?", "El envío es gratis en las zonas con contraentrega. El precio que ves es el precio final."],
    ["¿Envían a todo el Perú?", "Sí. En Lima, Callao y las ciudades principales pagas al recibir. Para otras zonas coordinamos por WhatsApp el envío con pago adelantado por Yape o Plin."],
    ["¿Qué pasa si el producto llega con fallas?", `Tienes ${C.garantiaDias} días de garantía por fallas de fábrica. Escríbenos por WhatsApp con una foto o video y lo cambiamos.`],
    ["¿Cómo sé que mi pedido fue recibido?", "Al terminar tu pedido te mostramos un código y se abre WhatsApp con el resumen. Te respondemos para confirmar."]
  ];
  const faqHTML = () => `<div class="faq">${FAQ.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("")}</div>`;

  /* ---------- vistas ---------- */
  function viewHome() {
    setTitle();
    const hero = P.find(p => p.top === 1) || P.find(p => p.destacado) || P[0];
    const featured = P.filter(p => p.destacado);
    main.innerHTML = `
      <section class="hero">
        <div class="wrap hero-grid">
          <div class="reveal">
            <span class="eyebrow">Tech útil · Hecho para tu día a día</span>
            <h1>Gadgets que <span class="grad-text">entran por los ojos</span> y te hacen la vida más fácil.</h1>
            <p class="lead">Tecnología, belleza, auto y mascotas: productos seleccionados para ti. Pides en un minuto, te llega rápido y pagas recién al recibir.</p>
            <div class="hero-ctas">
              <button class="btn btn-gold btn-pulse" type="button" data-scroll="top5">🔥 Ver el Top 5</button>
              <a class="btn btn-ghost" href="#/catalogo">Ver todo el catálogo</a>
            </div>
          </div>
          <a class="hero-card reveal" href="#/p/${hero.slug}">
            <span class="tag">${hero.top ? "🔥 #1 del Top 5" : "Destacado"}</span>
            <div class="img"><img src="${esc(hero.imagenes[0])}" alt="${esc(hero.nombre)}"></div>
            <div class="row"><h3>${esc(hero.nombre)}</h3><b class="gold">${money(hero.precio)}</b></div>
            <span class="hero-buy">Comprar ahora →</span>
          </a>
        </div>
      </section>
      ${promoBand()}
      <div class="wrap">${trustBar()}</div>
      ${flashSection()}
      ${topFive()}
      <section class="section">
        <div class="wrap">
          <div class="section-head"><div><span class="eyebrow">Favoritos</span><h2>Destacados</h2></div><a class="btn btn-ghost" href="#/catalogo">Ver todo el catálogo</a></div>
          <div class="grid grid-3">${featured.map(card).join("")}</div>
        </div>
      </section>
      <section class="section" style="padding-top:0">
        <div class="wrap">
          <div class="section-head"><div><span class="eyebrow">Catálogo</span><h2>Todo lo que tenemos</h2></div></div>
          ${catalogBlock()}
        </div>
      </section>
      <section class="section" id="como" style="padding-top:0">
        <div class="wrap">
          <div class="section-head"><div><span class="eyebrow">Así de fácil</span><h2>Compra en 3 pasos</h2></div></div>
          ${steps()}
        </div>
      </section>
      <section class="section" style="padding-top:0">
        <div class="wrap">
          <div class="section-head"><div><span class="eyebrow">Dudas</span><h2>Preguntas frecuentes</h2></div></div>
          ${faqHTML()}
        </div>
      </section>
      <section class="section" style="padding-top:0">
        <div class="wrap"><div class="band">
          <div><h2>¿Tienes una pregunta?</h2><p class="muted" style="margin:6px 0 0">Escríbenos por WhatsApp y te ayudamos a elegir.</p></div>
          <a class="btn btn-wa" href="#" data-wa="Hola, quiero ayuda para elegir un producto">${ICON.wa} Escríbenos</a>
        </div></div>
      </section>`;
    bindCatalog();
    main.querySelectorAll("[data-scroll]").forEach(b => b.addEventListener("click", () => {
      const el = document.getElementById(b.dataset.scroll);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }));
  }

  const CAT_ICON = { Todos: "🛍️", Tech: "🎧", Belleza: "✨", Bienestar: "💆", Hogar: "🏠", Mascotas: "🐾", Auto: "🚗", Herramientas: "🛠️", Juegos: "🧸", Moda: "👜" };
  const CAT_LABEL = { Belleza: "Skincare y belleza" };
  const F = { cat: "Todos", sub: "", q: "", sort: "rec", price: "", flash: false };
  let shown = 24;
  const norm = s => String(s).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const PRICE = { "": [0, 1e9], a: [0, 50], b: [50, 100], c: [100, 200], d: [200, 1e9] };
  const base = () => P.filter(p => (!F.q || norm(p.nombre + " " + p.categoria + " " + (p.sub || "")).includes(norm(F.q))) && (!F.flash || p.flash) && p.precio >= PRICE[F.price][0] && p.precio < PRICE[F.price][1]);
  const filtered = () => {
    const list = base().filter(p => (F.cat === "Todos" || p.categoria === F.cat) && (!F.sub || p.sub === F.sub));
    const by = { low: (x, y) => x.precio - y.precio, high: (x, y) => y.precio - x.precio, save: (x, y) => ((y.precioNormal || y.precio) - y.precio + ahorro(y)) - ((x.precioNormal || x.precio) - x.precio + ahorro(x)), az: (x, y) => x.nombre.localeCompare(y.nombre, "es") }[F.sort];
    return by ? list.slice().sort(by) : list.slice().sort((x, y) => (y.flash ? 2 : 0) + (y.top ? 1 : 0) - (x.flash ? 2 : 0) - (x.top ? 1 : 0));
  };
  const gridHTML = () => filtered().slice(0, shown).map(card).join("") || `<div class="empty"><p><b>No encontramos productos con esos filtros.</b></p><button class="btn btn-ghost" type="button" data-reset>Limpiar filtros</button></div>`;
  const moreHTML = () => { const n = filtered().length; return n > shown ? `<div class="more-wrap"><button class="btn btn-gold" id="moreBtn" type="button">Ver más productos (${n - shown} más)</button></div>` : ""; };
  const catChips = () => { const b = base(); const cats = ["Todos", ...new Set(P.map(p => p.categoria))]; return cats.map(c => { const n = c === "Todos" ? b.length : b.filter(p => p.categoria === c).length; return `<button class="chip" data-cat="${esc(c)}" aria-pressed="${c === F.cat}"${n ? "" : " disabled"}>${CAT_ICON[c] || ""} ${esc(CAT_LABEL[c] || c)} <span class="chip-n">${n}</span></button>`; }).join(""); };
  const subChips = () => { if (F.cat === "Todos") return ""; const b = base().filter(p => p.categoria === F.cat); const subs = [...new Set(b.map(p => p.sub))].sort((x, y) => b.filter(p => p.sub === y).length - b.filter(p => p.sub === x).length); if (subs.length < 2) return ""; return `<button class="chip chip-sub" data-sub="" aria-pressed="${!F.sub}">Todo ${esc(CAT_LABEL[F.cat] || F.cat)}</button>` + subs.map(s => `<button class="chip chip-sub" data-sub="${esc(s)}" aria-pressed="${s === F.sub}">${esc(s)} <span class="chip-n">${b.filter(p => p.sub === s).length}</span></button>`).join(""); };
  const countHTML = () => { const n = filtered().length; const active = F.cat !== "Todos" || F.sub || F.q || F.price || F.flash || F.sort !== "rec"; return `<b>${n}</b> producto${n === 1 ? "" : "s"}${active ? ' · <button type="button" class="linkish" data-reset>Limpiar filtros</button>' : ""}`; };
  function catalogBlock() {
    shown = 24;
    const flashN = P.filter(p => p.flash).length;
    return `<div class="cat-tools">
        <input type="search" id="catSearch" class="cat-search" placeholder="🔎 Buscar entre ${P.length} productos…" value="${esc(F.q)}" aria-label="Buscar productos">
        <div class="cat-row">
          <label class="sel"><span>Ordenar</span><select id="catSort"><option value="rec">Recomendados</option><option value="low">Precio: menor a mayor</option><option value="high">Precio: mayor a menor</option><option value="save">Mayor ahorro</option><option value="az">Nombre A–Z</option></select></label>
          <label class="sel"><span>Precio</span><select id="catPrice"><option value="">Todos</option><option value="a">Hasta S/ 50</option><option value="b">S/ 50 – 100</option><option value="c">S/ 100 – 200</option><option value="d">Más de S/ 200</option></select></label>
          ${flashN ? `<button type="button" class="chip chip-flash" id="catFlash" aria-pressed="${F.flash}">⚡ Ofertas de hoy <span class="chip-n">${flashN}</span></button>` : ""}
        </div>
      </div>
      <div class="chips" id="catChips" role="group" aria-label="Categorías">${catChips()}</div>
      <div class="chips chips-sub" id="subChips" role="group" aria-label="Subcategorías">${subChips()}</div>
      <div class="cat-count" id="catCount" aria-live="polite">${countHTML()}</div>
      <div class="grid" id="catGrid">${gridHTML()}</div><div id="catMore">${moreHTML()}</div>`;
  }
  function refreshGrid(all) {
    if (all) { $("#catChips").innerHTML = catChips(); $("#subChips").innerHTML = subChips(); }
    $("#catCount").innerHTML = countHTML(); $("#catGrid").innerHTML = gridHTML(); $("#catMore").innerHTML = moreHTML();
  }
  function bindCatalog() {
    const wrap = $("#catGrid") && $("#catGrid").parentElement;
    if (!wrap) return;
    const sortEl = $("#catSort"), priceEl = $("#catPrice"), s = $("#catSearch");
    sortEl.value = F.sort; priceEl.value = F.price;
    wrap.addEventListener("click", e => {
      const c = e.target.closest("[data-cat]"), sb = e.target.closest("[data-sub]");
      if (c) { F.cat = c.dataset.cat; F.sub = ""; shown = 24; refreshGrid(true); return; }
      if (sb) { F.sub = sb.dataset.sub; shown = 24; refreshGrid(true); return; }
      if (e.target.closest("#catFlash")) { F.flash = !F.flash; e.target.closest("#catFlash").setAttribute("aria-pressed", F.flash); shown = 24; refreshGrid(true); return; }
      if (e.target.closest("#moreBtn")) { shown += 24; refreshGrid(); return; }
      if (e.target.closest("[data-reset]")) { Object.assign(F, { cat: "Todos", sub: "", q: "", sort: "rec", price: "", flash: false }); s.value = ""; sortEl.value = "rec"; priceEl.value = ""; const fb = $("#catFlash"); if (fb) fb.setAttribute("aria-pressed", false); shown = 24; refreshGrid(true); }
    });
    s.addEventListener("input", () => { F.q = s.value; shown = 24; refreshGrid(true); });
    sortEl.addEventListener("change", () => { F.sort = sortEl.value; shown = 24; refreshGrid(); });
    priceEl.addEventListener("change", () => { F.price = priceEl.value; shown = 24; refreshGrid(true); });
  }

  const flashSection = () => {
    const items = P.filter(p => p.flash);
    if (!items.length) return "";
    return `<section class="section flash" id="flash">
        <div class="wrap">
          <div class="flash-head">
            <div><span class="eyebrow">⚡ Ofertas flash</span><h2>Precios especiales solo por hoy</h2><p class="muted">Cada día elegimos ${items.length} productos con descuento extra. Cuando el contador llega a cero, vuelven a su precio normal.</p></div>
            <div class="countdown" role="timer" aria-label="Tiempo restante de las ofertas"><span>Terminan en</span><b data-countdown>${window.VS_FLASH.left()}</b><small>Hora de Lima</small></div>
          </div>
          <div class="grid">${items.map(card).join("")}</div>
        </div>
      </section>`;
  };

  function viewCatalog() {
    setTitle("Catálogo");
    main.innerHTML = `<section class="section"><div class="wrap">
      <div class="section-head"><div><span class="eyebrow">Catálogo</span><h1 style="font-size:clamp(2rem,4.5vw,3rem)">Todo el catálogo</h1></div><p class="muted">Filtra por categoría, precio u ofertas. Todos con envío gratis y pago contraentrega en Lima y ciudades principales.</p></div>
      ${catalogBlock()}</div></section>`;
    bindCatalog();
  }

  function viewProduct(slug) {
    const p = bySlug(slug);
    if (!p) return viewNotFound();
    setTitle(p.nombre);
    track("ViewContent", { value: p.precio, content_ids: [p.dropiId], content_type: "product", content_name: p.nombre });
    const save = p.precio * 2 - p.precioPack;
    const related = P.filter(x => x.slug !== p.slug && x.sub === p.sub && x.categoria === p.categoria).concat(P.filter(x => x.slug !== p.slug && x.categoria === p.categoria && x.sub !== p.sub)).slice(0, 4);
    main.innerHTML = `
      <div class="wrap">
        <nav class="crumbs" aria-label="Ruta"><a href="#/">Inicio</a> / <a href="#/catalogo">Catálogo</a> / <span>${esc(p.nombre)}</span></nav>
        <div class="pdp">
          <div class="gallery">
            <div class="main"><img id="mainImg" src="${esc(p.imagenes[0])}" alt="${esc(p.nombre)}"></div>
            ${p.imagenes.length > 1 ? `<div class="thumbs">${p.imagenes.map((src, i) => `<button data-img="${esc(src)}" aria-current="${i === 0}" aria-label="Ver foto ${i + 1}"><img src="${esc(src)}" alt="" loading="lazy"></button>`).join("")}</div>` : ""}
          </div>
          <div>
            <span class="eyebrow">${esc(p.categoria)}</span>
            <h1>${esc(p.nombre)}</h1>
            <p class="muted" style="font-size:1.05rem">${esc(p.corto)}</p>
            ${p.flash ? `<div class="pdp-flash">⚡ Oferta flash -${p.flashOff}% · termina en <b data-countdown>${window.VS_FLASH.left()}</b></div>` : ""}
            <div class="price-big" id="priceBig">${money(p.precio)}</div>${p.flash ? `<div class="was-line">Precio normal <s>${money(p.precioNormal)}</s></div>` : ""}
            <div class="cod-note">${ICON.check.replace("<svg", '<svg width="18" height="18"')} Envío gratis · Pagas al recibir</div>
            <div class="options" role="radiogroup" aria-label="Elige tu opción">
              <label class="opt"><input type="radio" name="opt" value="1" checked><span class="t"><b>1 unidad</b><span>Ideal para ti</span></span><span class="p">${money(p.precio)}</span></label>
              <label class="opt"><input type="radio" name="opt" value="2"><span class="t"><b>Pack x2 <span class="save">Ahorras ${money(save)}</span></b><span>Para ti y para regalar</span></span><span class="p">${money(p.precioPack)}</span></label>
            </div>
            <div class="buy">
              <button class="btn btn-gold btn-block" id="buyNow">Pedir ahora · pago al recibir</button>
              <button class="btn btn-ghost btn-block" id="addCart">Agregar al carrito</button>
              <a class="btn btn-ghost btn-block" href="#" data-wa="Hola, tengo una consulta sobre: ${esc(p.nombre)}">${ICON.wa} Consultar por WhatsApp</a>
            </div>
            <div class="mini-trust">
              <div><b>24–72 h</b>Entrega</div>
              <div><b>${C.garantiaDias} días</b>Garantía</div>
              <div><b>S/ 0</b>Envío</div>
            </div>
            <ul class="benefits">${p.beneficios.map(b => `<li>${esc(b)}</li>`).join("")}</ul>
            <div class="desc">
              <h2>Descripción</h2>
              <p class="muted">${esc(p.descripcion)}</p>
              <h2>Qué incluye</h2>
              <ul>${p.incluye.map(i => `<li>${esc(i)}</li>`).join("")}</ul>
            </div>
          </div>
        </div>
      </div>
      <section class="section" style="padding-top:0"><div class="wrap">
        <div class="section-head"><h2>También te puede gustar</h2></div>
        <div class="grid">${related.map(card).join("")}</div>
      </div></section>
      <div class="sticky-buy" id="stickyBuy"><span class="p" id="stickyPrice">${money(p.precio)}</span><button class="btn btn-gold" id="stickyBtn">Pedir ahora</button></div>`;
    document.body.classList.add("has-sticky");

    const sel = () => $('input[name="opt"]:checked').value === "2";
    $$('input[name="opt"]').forEach(r => r.addEventListener("change", () => {
      const v = sel() ? p.precioPack : p.precio;
      $("#priceBig").textContent = money(v); $("#stickyPrice").textContent = money(v);
    }));
    $$(".thumbs button").forEach(b => b.addEventListener("click", () => {
      $("#mainImg").src = b.dataset.img; $$(".thumbs button").forEach(x => x.setAttribute("aria-current", x === b));
    }));
    const buy = () => { addToCart(p.slug, sel()); location.hash = "#/checkout"; };
    $("#buyNow").addEventListener("click", buy);
    $("#stickyBtn").addEventListener("click", buy);
    $("#addCart").addEventListener("click", () => { addToCart(p.slug, sel()); openDrawer(); });
    const sticky = $("#stickyBuy"), anchor = $("#buyNow");
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(([e]) => sticky.classList.toggle("show", !e.isIntersecting && e.boundingClientRect.top < 0)).observe(anchor);
    }
  }

  function viewCheckout() {
    setTitle("Finalizar pedido");
    if (!cart.length) {
      main.innerHTML = `<div class="wrap thanks"><h1 style="font-size:2rem">Tu carrito está vacío</h1><p class="muted">Agrega un producto para continuar.</p><a class="btn btn-gold" href="#/catalogo">Ver productos</a></div>`;
      return;
    }
    track("InitiateCheckout", { value: cartTotal(), num_items: cartUnits() });
    const saved = store.get("vs_customer", {});
    const YAPE_ON = !!(C.mpPublicKey && C.sheetsWebhook);
    main.innerHTML = `
      <div class="wrap">
        <nav class="crumbs" aria-label="Ruta"><a href="#/">Inicio</a> / <span>Finalizar pedido</span></nav>
        <div class="checkout">
          <form class="panel" id="orderForm" novalidate>
            <h1 style="font-size:clamp(1.7rem,4vw,2.3rem)">Finaliza tu pedido</h1>
            <p class="muted" id="introTxt"></p>
            <div class="form-grid">
              <div class="fieldset-title">Tus datos</div>
              <div class="form-grid two">
                <div class="field"><label for="f_nombre">Nombre y apellido</label><input id="f_nombre" name="nombre" type="text" autocomplete="name" required value="${esc(saved.nombre)}"><span class="err">Escribe tu nombre completo.</span></div>
                <div class="field"><label for="f_cel">Celular (WhatsApp)</label><input id="f_cel" name="celular" type="tel" inputmode="numeric" autocomplete="tel" placeholder="9XX XXX XXX" required value="${esc(saved.celular)}"><span class="err">Ingresa un celular de 9 dígitos que empiece con 9.</span></div>
              </div>
              <div class="form-grid two">
                <div class="field"><label for="f_email">Correo</label><input id="f_email" name="email" type="email" autocomplete="email" placeholder="tucorreo@gmail.com" value="${esc(saved.email)}"><span class="hint">Aquí te avisamos cuando tu pedido salga.</span><span class="err">Ingresa un correo válido.</span></div>
                <div class="field"><label for="f_dni">DNI o carné de extranjería</label><input id="f_dni" name="dni" type="text" inputmode="numeric" required value="${esc(saved.dni)}"><span class="hint">El courier lo pide al entregar.</span><span class="err">Ingresa un documento válido (8 dígitos para DNI).</span></div>
              </div>
              <div class="fieldset-title">Dirección de entrega</div>
              <div class="form-grid two">
                <div class="field"><label for="f_dep">Departamento</label><select id="f_dep" name="departamento" required><option value="">Elige…</option>${DEPARTAMENTOS.map(d => `<option ${saved.departamento === d ? "selected" : ""}>${d}</option>`).join("")}</select><span class="err">Elige tu departamento.</span></div>
                <div class="field"><label for="f_dis">Distrito</label><input id="f_dis" name="distrito" type="text" required value="${esc(saved.distrito)}"><span class="err">Escribe tu distrito.</span></div>
              </div>
              <div class="field"><label for="f_dir">Dirección</label><input id="f_dir" name="direccion" type="text" autocomplete="street-address" placeholder="Av./Jr./Calle, número, dpto." required value="${esc(saved.direccion)}"><span class="err">Escribe tu dirección.</span></div>
              <div class="field"><label for="f_ref">Referencia</label><input id="f_ref" name="referencia" type="text" placeholder="Ej.: frente al parque, casa de rejas negras" required value="${esc(saved.referencia)}"><span class="hint">Ayuda al courier a encontrarte a la primera.</span><span class="err">Agrega una referencia.</span></div>
              <div class="field"><label for="f_notas">Notas (opcional)</label><textarea id="f_notas" name="notas" placeholder="Horario preferido, piso, etc."></textarea></div>

              <div class="fieldset-title">Forma de pago</div>
              <div class="pay-opts" id="payOpts"></div>
              <div class="yape-box" id="yapeBox" hidden>
                <div class="yape-steps"><b>Cómo pagar:</b> abre tu app Yape → menú → <b>Código de aprobación</b>. Copia el código de 6 dígitos y escríbelo aquí (vence en unos minutos).</div>
                <div class="form-grid two">
                  <div class="field"><label for="f_ycel">Celular con Yape</label><input id="f_ycel" name="yapeCel" type="tel" inputmode="numeric" placeholder="9XX XXX XXX" autocomplete="off"><span class="err">Ingresa el celular de 9 dígitos de tu Yape.</span></div>
                  <div class="field"><label for="f_otp">Código de aprobación</label><input id="f_otp" name="otp" type="text" inputmode="numeric" maxlength="6" placeholder="6 dígitos" autocomplete="one-time-code"><span class="err">El código tiene 6 dígitos.</span></div>
                </div>
                <p class="small muted" style="margin:0">Pago seguro procesado por Mercado Pago. Tu límite diario de Yape debe cubrir el total.</p>
              </div>
              <div id="zoneNote"></div>
              <div id="payMsg"></div>

              <label class="check"><input type="checkbox" id="f_ok" required><span>Acepto los <a href="#/legal/terminos" target="_blank">términos y condiciones</a> y la <a href="#/legal/privacidad" target="_blank">política de privacidad</a>, y autorizo el uso de mis datos para gestionar mi pedido.</span></label>
              <span class="err" id="okErr" style="margin-top:-6px">Debes aceptar para continuar.</span>
              <button class="btn btn-gold btn-block" type="submit" id="payBtn"></button>
              <p class="small muted center" style="margin:0" id="payHint"></p>
            </div>
          </form>
          <aside class="panel summary" aria-label="Resumen del pedido">
            <h2 style="font-size:1.3rem">Resumen</h2>
            <div id="sumLines"></div>
            <div class="totals" style="margin-top:14px"><span>Envío</span><span class="gold">Gratis</span></div>
            <div class="totals"><span id="totLbl">Total</span><b>${money(cartTotal())}</b></div>
            <div class="notice ok" style="margin-top:14px">${ICON.shield.replace("<svg", '<svg width="22" height="22" style="flex:none;color:#25D366"')}<span id="sumNote"></span></div>
          </aside>
        </div>
      </div>`;
    $("#sumLines").innerHTML = cart.map(i => { const p = bySlug(i.slug); return `<div class="line"><img src="${esc(p.imagenes[0])}" alt=""><div><div class="n">${esc(p.nombre)}</div><div class="v">${i.qty} × ${i.pack ? "Pack x2" : "1 unidad"}</div></div><div class="r"><b>${money(linePrice(i))}</b></div></div>`; }).join("");

    const form = $("#orderForm");
    const payMsg = (html, kind) => { $("#payMsg").innerHTML = html ? `<div class="notice ${kind || "warn"}"><span>${html}</span></div>` : ""; };
    const method = () => { const r = form.querySelector('input[name="pago"]:checked'); return r ? r.value : "cod"; };
    const paint = () => {
      const d = form.departamento.value;
      const codOk = !d || C.departamentosContraentrega.includes(d);
      const cur = form.querySelector('input[name="pago"]:checked');
      const prev = cur ? cur.value : (YAPE_ON ? "yape" : "cod");
      const opts = [];
      if (YAPE_ON) opts.push(`<label class="opt"><input type="radio" name="pago" value="yape"><span class="t"><b>Paga ahora con Yape <span class="save">Más rápido</span></b><span>Confirmación inmediata, tu pedido sale antes. Todo el Perú.</span></span><span class="p yape-logo">Yape</span></label>`);
      if (codOk) opts.push(`<label class="opt"><input type="radio" name="pago" value="cod"><span class="t"><b>Pago contraentrega</b><span>Pagas al recibir, en efectivo o Yape. Te confirmamos por WhatsApp.</span></span><span class="p">💵</span></label>`);
      if (!YAPE_ON && !codOk) opts.push(`<label class="opt"><input type="radio" name="pago" value="cod"><span class="t"><b>Coordinar por WhatsApp</b><span>Para ${esc(d)}: pago adelantado y envío a agencia.</span></span><span class="p">💬</span></label>`);
      $("#payOpts").innerHTML = opts.join("");
      const pick = form.querySelector(`input[name="pago"][value="${prev}"]`) || form.querySelector('input[name="pago"]');
      if (pick) pick.checked = true;
      sync();
    };
    const sync = () => {
      const y = method() === "yape";
      $("#yapeBox").hidden = !y;
      $("#introTxt").textContent = y ? "Pagas con Yape aquí mismo y te avisamos por correo y WhatsApp cuando tu pedido salga." : "No pagas nada ahora. Te escribimos por WhatsApp para confirmar y pagas al recibir.";
      $("#payBtn").innerHTML = y ? `Pagar ${money(cartTotal())} con Yape` : `${ICON.wa} Confirmar pedido por WhatsApp`;
      $("#payHint").textContent = y ? "Al pagar, tu pedido queda confirmado al instante." : "Se abrirá WhatsApp con el resumen de tu pedido. Solo tienes que enviarlo.";
      $("#totLbl").textContent = y ? "Total a pagar ahora" : "Total a pagar al recibir";
      $("#sumNote").textContent = y ? `Pago protegido por Mercado Pago. Garantía de ${C.garantiaDias} días.` : `Pagas recién cuando tengas el producto en tus manos. Garantía de ${C.garantiaDias} días.`;
      $("#f_email").closest(".field").querySelector("label").textContent = y ? "Correo" : "Correo (opcional)";
      if (y && !form.yapeCel.value && form.celular.value) form.yapeCel.value = form.celular.value;
      const d = form.departamento.value;
      $("#zoneNote").innerHTML = !y && d && !C.departamentosContraentrega.includes(d) ? `<div class="notice warn"><span>Para ${esc(d)} coordinamos el envío por WhatsApp con pago adelantado (o recojo en agencia).</span></div>` : "";
      payMsg("");
    };
    form.departamento.addEventListener("change", paint);
    form.addEventListener("change", e => { if (e.target.name === "pago") sync(); });
    paint();

    const digits = v => v.replace(/\D/g, "").replace(/^51(?=9\d{8}$)/, "");
    const rules = {
      nombre: v => v.trim().split(/\s+/).length >= 2,
      celular: v => /^9\d{8}$/.test(digits(v)),
      email: v => method() === "yape" ? /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) : (!v.trim() || /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim())),
      dni: v => /^\d{8}$/.test(v.trim()) || /^[A-Za-z0-9]{9,12}$/.test(v.trim()),
      departamento: v => !!v, distrito: v => v.trim().length >= 3, direccion: v => v.trim().length >= 6, referencia: v => v.trim().length >= 4,
      yapeCel: v => method() !== "yape" || /^9\d{8}$/.test(digits(v)),
      otp: v => method() !== "yape" || /^\d{6}$/.test(v.trim())
    };
    let busy = false;
    form.addEventListener("submit", async e => {
      e.preventDefault();
      if (busy) return;
      let ok = true, first = null;
      Object.entries(rules).forEach(([k, fn]) => {
        const input = form[k], f = input.closest(".field"), good = fn(input.value);
        f.classList.toggle("error", !good); if (!good) { ok = false; first = first || input; }
      });
      const accepted = $("#f_ok").checked; $("#okErr").style.display = accepted ? "none" : "block"; if (!accepted) { ok = false; first = first || $("#f_ok"); }
      if (!ok) { first.focus(); return; }

      const data = Object.fromEntries(new FormData(form).entries());
      delete data.otp; delete data.yapeCel; delete data.pago;
      data.celular = digits(data.celular); data.email = (data.email || "").trim();
      store.set("vs_customer", { nombre: data.nombre, celular: data.celular, email: data.email, dni: data.dni, departamento: data.departamento, distrito: data.distrito, direccion: data.direccion, referencia: data.referencia });
      const code = orderCode("VS");
      const total = cartTotal();
      const lines = cart.map(i => ({ producto: bySlug(i.slug).nombre, dropiId: bySlug(i.slug).dropiId, pack: i.pack, cantidad: i.qty, subtotal: linePrice(i) }));

      if (method() === "yape") {
        busy = true; const btn = $("#payBtn"); btn.disabled = true; btn.textContent = "Procesando pago…"; payMsg("");
        try {
          const token = await yapeToken(digits(form.yapeCel.value), form.otp.value.trim());
          const r = await fetch(C.sheetsWebhook, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" },
            body: JSON.stringify({ ...data, tipo: "pago_yape", codigo: code, token, total, items: cart.map(i => ({ slug: i.slug, pack: !!i.pack, qty: i.qty })) }) });
          const res = await r.json();
          if (res.ok) {
            track("Purchase", { value: res.total, currency: "PEN", content_ids: cart.map(i => bySlug(i.slug).dropiId) });
            store.set("vs_last_order", { code, total: res.total, paid: true, cel4: data.celular.slice(-4) });
            cart = []; saveCart();
            location.hash = "#/gracias";
            return;
          }
          form.otp.value = "";
          if (res.error === "precio") { payMsg(`El precio de un producto cambió (nuevo total: <b>${money(res.total)}</b>). Recarga la página para ver el total actualizado; no se hizo ningún cobro.`); }
          else if (res.error === "rechazado") { payMsg(yapeError(res.detalle)); }
          else { payMsg("No pudimos procesar el pago y no se hizo ningún cobro. Intenta de nuevo o elige pago contraentrega."); }
        } catch (err) {
          form.otp.value = "";
          payMsg(err && err.yape ? err.message : "No pudimos conectar con Yape. Revisa tu celular y código e inténtalo de nuevo.");
        } finally { busy = false; btn.disabled = false; sync(); }
        return;
      }

      const cod = C.departamentosContraentrega.includes(data.departamento);
      const items = cart.map(i => { const p = bySlug(i.slug); return `• ${i.qty} × ${p.nombre}${i.pack ? " (Pack x2)" : ""} — ${money(linePrice(i))}`; }).join("\n");
      const msg = `Hola ${C.nombre}, quiero hacer este pedido:\n\nPedido: ${code}\n${items}\nTotal: ${money(total)}\nPago: ${cod ? "contraentrega" : "por coordinar (fuera de zona contraentrega)"}\n\nNombre: ${data.nombre}\nCelular: ${data.celular}\nDNI/CE: ${data.dni}\nDirección: ${data.direccion}, ${data.distrito}, ${data.departamento}\nReferencia: ${data.referencia}${data.notas ? `\nNotas: ${data.notas}` : ""}`;
      postWebhook({ ...data, tipo: "pedido", codigo: code, fecha: new Date().toISOString(), total, pago: cod ? "contraentrega" : "coordinar", items: lines });
      track("Lead", { value: total, content_ids: cart.map(i => bySlug(i.slug).dropiId) });
      const url = waLink(msg);
      store.set("vs_last_order", { code, url, total, cel4: data.celular.slice(-4) });
      cart = []; saveCart();
      location.hash = "#/gracias";
      window.open(url, "_blank", "noopener");
    });
  }

  /* ---------- Yape (Mercado Pago) ---------- */
  let mpLoader = null;
  function loadMP() {
    if (window.MercadoPago) return Promise.resolve();
    if (!mpLoader) mpLoader = new Promise((ok, fail) => { const s = document.createElement("script"); s.src = "https://sdk.mercadopago.com/js/v2"; s.onload = ok; s.onerror = () => { mpLoader = null; fail(new Error("sdk")); }; document.head.appendChild(s); });
    return mpLoader;
  }
  async function yapeToken(phoneNumber, otp) {
    await loadMP();
    const mp = new window.MercadoPago(C.mpPublicKey, { locale: "es-PE" });
    let t;
    try { t = await mp.yape({ otp, phoneNumber }).create(); }
    catch (err) { const e = new Error("El código de Yape no es válido o ya venció. Genera uno nuevo en tu app Yape e inténtalo otra vez."); e.yape = true; throw e; }
    const id = t && (t.id || t.token || (typeof t === "string" ? t : ""));
    if (!id) { const e = new Error("Yape no respondió. Genera un código nuevo e inténtalo otra vez."); e.yape = true; throw e; }
    return id;
  }
  function yapeError(d) {
    const m = {
      cc_rejected_insufficient_amount: "Tu Yape no tiene saldo o límite suficiente para este monto.",
      cc_amount_rate_limit_exceeded: "El monto supera tu límite de Yape. Puedes subir tu límite en la app o elegir contraentrega.",
      cc_rejected_max_attempts: "Superaste el número de intentos. Espera unos minutos y genera un código nuevo.",
      cc_rejected_call_for_authorize: "Yape necesita que autorices el pago. Revisa tu app.",
      cc_rejected_card_type_not_allowed: "Este número no tiene Yape habilitado para compras online.",
      cc_rejected_bad_filled_security_code: "El código de aprobación no es correcto o venció. Genera uno nuevo.",
      cc_rejected_bad_filled_other: "El código de aprobación no es correcto o venció. Genera uno nuevo."
    };
    return (m[d] || "Yape rechazó el pago. Genera un código nuevo e inténtalo otra vez, o elige contraentrega.") + " No se hizo ningún cobro.";
  }

  function viewThanks() {
    setTitle("¡Gracias por tu pedido!");
    const o = store.get("vs_last_order", null);
    if (o && o.paid) {
      main.innerHTML = `<div class="wrap thanks">
        <div class="ok-icon">${ICON.check}</div>
        <h1 style="font-size:clamp(2rem,5vw,2.8rem)">¡Pago recibido!</h1>
        <p class="muted">Tu código de pedido es</p><p class="code">${esc(o.code)}</p>
        <p class="muted">Pagaste <b>${money(o.total)}</b> con Yape. Ya estamos preparando tu pedido: te enviaremos un correo y un WhatsApp cuando salga a reparto, con tu número de guía.</p>
        <a class="btn btn-gold" href="#/seguimiento/${esc(o.code)}">Ver estado de mi pedido</a>
        <p style="margin-top:22px"><a class="muted" href="#/catalogo" style="text-decoration:underline">Seguir comprando</a></p>
      </div>`;
      return;
    }
    main.innerHTML = `<div class="wrap thanks">
      <div class="ok-icon">${ICON.check}</div>
      <h1 style="font-size:clamp(2rem,5vw,2.8rem)">¡Pedido registrado!</h1>
      ${o ? `<p class="muted">Tu código de pedido es</p><p class="code">${esc(o.code)}</p>` : ""}
      <p class="muted">Si WhatsApp no se abrió, toca el botón para enviarnos tu pedido. Te responderemos para confirmar la entrega.</p>
      ${o && o.url ? `<a class="btn btn-wa" href="${esc(o.url)}" target="_blank" rel="noopener">${ICON.wa} Enviar pedido por WhatsApp</a>` : ""}
      <p style="margin-top:22px"><a class="muted" href="#/catalogo" style="text-decoration:underline">Seguir comprando</a></p>
    </div>`;
  }

  /* ---------- seguimiento de pedido ---------- */
  const PASOS = ["Pagado", "En Dropi", "Despachado", "Entregado"];
  const PASO_TXT = { "Por confirmar": "Recibido, por confirmar", "Pagado": "Pago recibido", "Confirmado": "Confirmado", "En Dropi": "Preparando tu pedido", "Despachado": "En camino", "Entregado": "Entregado", "Novedad": "Con novedad: te contactaremos", "Devuelto": "Devuelto", "Rechazado": "No entregado", "Cancelado": "Cancelado", "Revisar": "Preparando tu pedido" };
  function viewTracking(code) {
    setTitle("Estado de mi pedido");
    const last = store.get("vs_last_order", null);
    const cel4 = last && last.code === code ? last.cel4 : "";
    main.innerHTML = `<div class="wrap" style="max-width:640px">
      <nav class="crumbs" aria-label="Ruta"><a href="#/">Inicio</a> / <span>Estado de mi pedido</span></nav>
      <div class="panel">
        <h1 style="font-size:clamp(1.6rem,4vw,2.2rem)">Estado de mi pedido</h1>
        <form id="trkForm" class="form-grid two" novalidate>
          <div class="field"><label for="t_code">Código de pedido</label><input id="t_code" name="code" value="${esc(code || "")}" placeholder="VS-261009-AB12" required></div>
          <div class="field"><label for="t_cel">Últimos 4 dígitos de tu celular</label><input id="t_cel" name="cel" inputmode="numeric" maxlength="4" value="${esc(cel4 || "")}" required></div>
          <button class="btn btn-gold btn-block" type="submit" style="grid-column:1/-1">Consultar</button>
        </form>
        <div id="trkOut" style="margin-top:18px"></div>
      </div></div>`;
    const f = $("#trkForm"), out = $("#trkOut");
    const consultar = async () => {
      const c = f.code.value.trim().toUpperCase(), d = f.cel.value.trim();
      if (!/^VS-\d{6}-[A-Z0-9]{4}$/.test(c) || !/^\d{4}$/.test(d)) { out.innerHTML = `<div class="notice warn"><span>Revisa el código y los 4 dígitos.</span></div>`; return; }
      out.innerHTML = `<p class="muted">Consultando…</p>`;
      try {
        const r = await (await fetch(`${C.sheetsWebhook}?accion=estado&codigo=${encodeURIComponent(c)}&cel=${d}`)).json();
        if (!r.ok) { out.innerHTML = `<div class="notice warn"><span>No encontramos ese pedido. Si lo hiciste hace unos minutos, inténtalo en un rato o escríbenos por WhatsApp.</span></div>`; return; }
        const idx = r.estado === "Revisar" ? 1 : PASOS.indexOf(r.estado === "Confirmado" ? "En Dropi" : r.estado);
        out.innerHTML = `<p><b>${esc(r.codigo)}</b> · ${esc(r.productos)}</p>
          <p class="track-now">${esc(PASO_TXT[r.estado] || r.estado)}</p>
          ${idx >= 0 ? `<ol class="track">${PASOS.map((p, i) => `<li class="${i <= idx ? "done" : ""}">${esc(PASO_TXT[p])}</li>`).join("")}</ol>` : ""}
          ${r.guia ? `<p>Guía: <b>${esc(r.guia)}</b>${r.transportadora ? ` · ${esc(r.transportadora)}` : ""}</p>` : ""}
          <p class="small muted">¿Dudas? <a href="#" data-wa="Hola, consulto por mi pedido ${esc(r.codigo)}" style="text-decoration:underline">Escríbenos por WhatsApp</a></p>`;
      } catch (e) { out.innerHTML = `<div class="notice warn"><span>No pudimos consultar ahora. Inténtalo de nuevo en un momento.</span></div>`; }
    };
    f.addEventListener("submit", e => { e.preventDefault(); consultar(); });
    if (code && cel4) consultar();
  }

  function viewHowTo() {
    setTitle("Cómo comprar");
    main.innerHTML = `<section class="section"><div class="wrap">
      <div class="section-head"><div><span class="eyebrow">Así de fácil</span><h1 style="font-size:clamp(2rem,4.5vw,3rem)">Cómo comprar</h1></div></div>
      ${steps()}
      <div style="margin-top:28px">${trustBar().replace('class="trust"', 'class="trust" style="margin-top:0"')}</div>
    </div></section>`;
  }
  function viewFaq() {
    setTitle("Preguntas frecuentes");
    main.innerHTML = `<section class="section"><div class="wrap">
      <div class="section-head"><div><span class="eyebrow">Dudas</span><h1 style="font-size:clamp(2rem,4.5vw,3rem)">Preguntas frecuentes</h1></div></div>
      ${faqHTML()}</div></section>`;
  }

  /* ---------- páginas legales ---------- */
  const today = "7 de octubre de 2026";
  const LEGAL = {
    terminos: ["Términos y condiciones", `
      <p>Estos términos regulan las compras en ${esc(C.nombre)}, tienda online operada por ${esc(C.titular)} (RUC ${esc(C.ruc)}), con domicilio en ${esc(C.direccion)}. Al hacer un pedido aceptas estas condiciones.</p>
      <h2>1. Productos y precios</h2><p>Los precios están en soles e incluyen impuestos y envío a las zonas con pago contraentrega. Las fotos son referenciales; las características de cada producto se indican en su ficha.</p>
      <h2>2. Pedidos</h2><p>Un pedido se considera confirmado cuando te contactamos por WhatsApp y validamos tus datos de entrega. Podemos cancelar un pedido si no logramos comunicarnos contigo o si el producto se agota; en ese caso te avisaremos.</p>
      <h2>3. Pago</h2><p>En las zonas con contraentrega pagas al courier al recibir tu producto, en efectivo o por Yape. Para otras zonas coordinamos el pago adelantado por Yape o Plin.</p>
      <h2>4. Entrega</h2><p>El plazo estimado es de ${esc(C.tiempoEntrega)}. Puede variar por causas ajenas a nosotros, como clima, feriados o zonas de difícil acceso.</p>
      <h2>5. Cambios, devoluciones y garantía</h2><p>Se rigen por nuestra <a href="#/legal/cambios">política de cambios, devoluciones y garantía</a>.</p>
      <h2>6. Reclamos</h2><p>Contamos con un <a href="#/reclamaciones">Libro de Reclamaciones virtual</a>, conforme al Código de Protección y Defensa del Consumidor.</p>`],
    privacidad: ["Política de privacidad", `
      <p>En ${esc(C.nombre)} protegemos tus datos personales conforme a la Ley N.° 29733, Ley de Protección de Datos Personales, y su reglamento.</p>
      <h2>Qué datos recopilamos</h2><p>Nombre, celular, documento de identidad, dirección de entrega y, si nos escribes, tu correo. Si navegas el sitio, podemos usar herramientas de medición y publicidad (como los píxeles de Meta y TikTok) que recogen datos de navegación.</p>
      <h2>Para qué los usamos</h2><p>Para procesar y entregar tus pedidos, comunicarnos contigo, atender reclamos y mejorar nuestra tienda. Compartimos los datos de entrega solo con el operador logístico y el proveedor del producto, únicamente para hacerte llegar tu pedido.</p>
      <h2>Cuánto tiempo los guardamos</h2><p>Mientras sean necesarios para las finalidades descritas y para cumplir obligaciones legales.</p>
      <h2>Tus derechos</h2><p>Puedes ejercer tus derechos de acceso, rectificación, cancelación y oposición escribiéndonos a <a href="mailto:${esc(C.email)}">${esc(C.email)}</a> o por WhatsApp.</p>
      <h2>Responsable</h2><p>${esc(C.titular)} (RUC ${esc(C.ruc)}), ${esc(C.direccion)}.</p>`],
    cambios: ["Cambios, devoluciones y garantía", `
      <h2>Garantía de ${C.garantiaDias} días</h2><p>Todos nuestros productos tienen ${C.garantiaDias} días de garantía desde la entrega por fallas de fábrica. Escríbenos por WhatsApp con tu código de pedido y una foto o video de la falla; si corresponde, te enviamos un producto nuevo sin costo.</p>
      <h2>Producto equivocado o dañado en el envío</h2><p>Si recibes un producto distinto al que pediste o llega dañado, avísanos dentro de las 48 horas de recibido y lo cambiamos sin costo.</p>
      <h2>Condiciones</h2><ul><li>El producto debe estar completo, con sus accesorios y, de ser posible, en su empaque.</li><li>La garantía no cubre daños por mal uso, golpes, humedad o manipulación indebida.</li><li>Productos de cuidado personal que ya fueron usados solo se cambian por falla de fábrica.</li></ul>
      <h2>Devoluciones de dinero</h2><p>Si no podemos reponer el producto, te devolvemos el importe pagado por Yape, Plin o transferencia en un plazo máximo de 15 días hábiles.</p>`],
    envios: ["Envíos", `
      <p>Trabajamos con couriers nacionales para llevar tu pedido a todo el Perú.</p>
      <h2>Zonas con pago contraentrega</h2><p>${C.departamentosContraentrega.map(esc).join(", ")}. En estas zonas el envío es gratis y pagas al recibir.</p>
      <h2>Otras zonas</h2><p>Coordinamos por WhatsApp el envío con pago adelantado por Yape o Plin, o con recojo en agencia.</p>
      <h2>Plazos</h2><p>${esc(C.tiempoEntrega)}. Antes de despachar confirmamos tu pedido por WhatsApp.</p>
      <h2>Al recibir</h2><p>Ten a mano tu documento de identidad. Revisa el paquete frente al courier antes de pagar.</p>`]
  };
  function viewLegal(key) {
    const l = LEGAL[key]; if (!l) return viewNotFound();
    setTitle(l[0]);
    main.innerHTML = `<div class="wrap"><article class="legal"><h1>${l[0]}</h1><p class="meta">Última actualización: ${today}</p>${l[1]}</article></div>`;
  }

  /* ---------- Libro de Reclamaciones ---------- */
  function viewComplaints() {
    setTitle("Libro de Reclamaciones");
    main.innerHTML = `<div class="wrap"><div class="legal" style="max-width:880px">
      <h1>Libro de Reclamaciones</h1>
      <p class="muted">Conforme a lo establecido en el Código de Protección y Defensa del Consumidor (Ley N.° 29571), contamos con un Libro de Reclamaciones a tu disposición.</p>
      <div class="panel" style="margin:18px 0"><b>${esc(C.titular)}</b> · RUC ${esc(C.ruc)}<br><span class="muted small">${esc(C.direccion)} · ${esc(C.email)}</span></div>
      <form class="panel" id="lrForm" novalidate>
        <div class="form-grid">
          <div class="fieldset-title">1. Identificación del consumidor reclamante</div>
          <div class="form-grid two">
            <div class="field"><label for="lr_nombre">Nombres y apellidos</label><input id="lr_nombre" name="nombre" type="text" required><span class="err">Campo obligatorio.</span></div>
            <div class="field"><label for="lr_doc">DNI / CE</label><input id="lr_doc" name="documento" type="text" required><span class="err">Campo obligatorio.</span></div>
            <div class="field"><label for="lr_tel">Teléfono</label><input id="lr_tel" name="telefono" type="tel" required><span class="err">Campo obligatorio.</span></div>
            <div class="field"><label for="lr_mail">Correo electrónico</label><input id="lr_mail" name="email" type="email" required><span class="err">Ingresa un correo válido.</span></div>
          </div>
          <div class="field"><label for="lr_dom">Domicilio</label><input id="lr_dom" name="domicilio" type="text" required><span class="err">Campo obligatorio.</span></div>
          <div class="field"><label for="lr_tutor">Si eres menor de edad: nombre del padre, madre o apoderado</label><input id="lr_tutor" name="apoderado" type="text"></div>
          <div class="fieldset-title">2. Identificación del bien contratado</div>
          <div class="radio-row" role="radiogroup" aria-label="Tipo de bien"><label><input type="radio" name="bien" value="Producto" checked> Producto</label><label><input type="radio" name="bien" value="Servicio"> Servicio</label></div>
          <div class="form-grid two">
            <div class="field"><label for="lr_ped">N.° de pedido (si lo tienes)</label><input id="lr_ped" name="pedido" type="text" placeholder="VS-…"></div>
            <div class="field"><label for="lr_monto">Monto reclamado (S/)</label><input id="lr_monto" name="monto" type="number" min="0" step="0.01"></div>
          </div>
          <div class="field"><label for="lr_desc">Descripción del producto o servicio</label><input id="lr_desc" name="descripcion" type="text" required><span class="err">Campo obligatorio.</span></div>
          <div class="fieldset-title">3. Detalle de la reclamación</div>
          <div class="radio-row" role="radiogroup" aria-label="Tipo"><label><input type="radio" name="tipo" value="Reclamo" checked> Reclamo</label><label><input type="radio" name="tipo" value="Queja"> Queja</label></div>
          <p class="small muted" style="margin:0"><b>Reclamo:</b> disconformidad relacionada con los productos o servicios. <b>Queja:</b> disconformidad no relacionada con los productos o servicios, o malestar respecto a la atención al público.</p>
          <div class="field"><label for="lr_det">Detalle</label><textarea id="lr_det" name="detalle" required></textarea><span class="err">Campo obligatorio.</span></div>
          <div class="field"><label for="lr_pedido">Pedido del consumidor</label><textarea id="lr_pedido" name="solicitud" required placeholder="¿Qué solución esperas?"></textarea><span class="err">Campo obligatorio.</span></div>
          <label class="check"><input type="checkbox" id="lr_ok"><span>Declaro que los datos consignados son correctos y autorizo su uso para atender mi reclamo, según la <a href="#/legal/privacidad" target="_blank">política de privacidad</a>.</span></label>
          <span class="err" id="lrOkErr" style="margin-top:-6px">Debes aceptar para continuar.</span>
          <button class="btn btn-gold btn-block" type="submit">Registrar reclamo</button>
          <p class="small muted" style="margin:0">La formulación del reclamo no impide acudir a otras vías de solución de controversias ni es requisito previo para interponer una denuncia ante el INDECOPI. El proveedor deberá dar respuesta al reclamo en un plazo no mayor a quince (15) días hábiles.</p>
        </div>
      </form>
      <div id="lrResult"></div>
    </div></div>`;
    const form = $("#lrForm");
    form.addEventListener("submit", e => {
      e.preventDefault();
      let ok = true, first = null;
      ["nombre", "documento", "telefono", "email", "domicilio", "descripcion", "detalle", "solicitud"].forEach(k => {
        const el = form[k], f = el.closest(".field");
        const good = k === "email" ? /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(el.value) : el.value.trim().length > 1;
        f.classList.toggle("error", !good); if (!good) { ok = false; first = first || el; }
      });
      const acc = $("#lr_ok").checked; $("#lrOkErr").style.display = acc ? "none" : "block"; if (!acc) { ok = false; first = first || $("#lr_ok"); }
      if (!ok) { first.focus(); return; }
      const d = Object.fromEntries(new FormData(form).entries());
      const code = orderCode("LR");
      const fecha = new Date().toLocaleString("es-PE");
      const txt = `HOJA DE RECLAMACIÓN ${code}\nFecha: ${fecha}\nProveedor: ${C.titular} (RUC ${C.ruc})\n\n1. Consumidor: ${d.nombre}\nDNI/CE: ${d.documento}\nTeléfono: ${d.telefono}\nCorreo: ${d.email}\nDomicilio: ${d.domicilio}${d.apoderado ? `\nApoderado: ${d.apoderado}` : ""}\n\n2. Bien contratado: ${d.bien}\nPedido: ${d.pedido || "-"}\nMonto reclamado: ${d.monto ? "S/ " + d.monto : "-"}\nDescripción: ${d.descripcion}\n\n3. Tipo: ${d.tipo}\nDetalle: ${d.detalle}\nPedido del consumidor: ${d.solicitud}`;
      postWebhook({ ...d, clase: d.tipo, tipo: "reclamo", codigo: code, fecha: new Date().toISOString() });
      form.remove();
      $("#lrResult").innerHTML = `<div class="panel">
        <h2>Reclamo registrado: <span class="gold">${esc(code)}</span></h2>
        <p class="muted">Guarda este código. Para completar el registro, envíanos la hoja por correo o WhatsApp con los botones de abajo; te responderemos en un plazo máximo de 15 días hábiles.</p>
        <pre style="white-space:pre-wrap;background:var(--bg);border:1px solid var(--border);border-radius:12px;padding:16px;font-size:.85rem">${esc(txt)}</pre>
        <div class="buy no-print">
          <a class="btn btn-gold btn-block" href="mailto:${esc(C.email)}?cc=${encodeURIComponent(d.email)}&subject=${encodeURIComponent("Libro de Reclamaciones " + code)}&body=${encodeURIComponent(txt)}">Enviar por correo (con copia para ti)</a>
          <a class="btn btn-wa btn-block" href="${esc(waLink(txt))}" target="_blank" rel="noopener">${ICON.wa} Enviar por WhatsApp</a>
          <button class="btn btn-ghost btn-block" onclick="window.print()">Imprimir o guardar como PDF</button>
        </div></div>`;
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  function viewNotFound() {
    setTitle("Página no encontrada");
    main.innerHTML = `<div class="wrap thanks"><h1 style="font-size:2rem">No encontramos esta página</h1><a class="btn btn-gold" href="#/">Volver al inicio</a></div>`;
  }

  /* ---------- router ---------- */
  function route() {
    const h = location.hash.replace(/^#/, "") || "/";
    const parts = h.split("/").filter(Boolean);
    document.body.classList.remove("has-sticky");
    closeDrawer();
    if (!parts.length) viewHome();
    else if (parts[0] === "catalogo") viewCatalog();
    else if (parts[0] === "p") viewProduct(parts[1]);
    else if (parts[0] === "checkout") viewCheckout();
    else if (parts[0] === "gracias") viewThanks();
    else if (parts[0] === "seguimiento") viewTracking(decodeURIComponent(parts[1] || ""));
    else if (parts[0] === "como-comprar") viewHowTo();
    else if (parts[0] === "preguntas") viewFaq();
    else if (parts[0] === "legal") viewLegal(parts[1]);
    else if (parts[0] === "reclamaciones") viewComplaints();
    else viewNotFound();
    $$(".nav-links a").forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#/" + (parts[0] || "")));
    window.scrollTo(0, 0);
  }

  /* ---------- eventos globales ---------- */
  document.addEventListener("click", e => {
    const add = e.target.closest("[data-add]");
    if (add) { e.preventDefault(); addToCart(add.dataset.add, false); return; }
    const wa = e.target.closest("[data-wa]");
    if (wa) { e.preventDefault(); window.open(waLink(wa.dataset.wa), "_blank", "noopener"); return; }
    if (e.target.closest("[data-close]")) { closeDrawer(); }
    const inc = e.target.closest("[data-inc]"), dec = e.target.closest("[data-dec]"), rm = e.target.closest("[data-rm]");
    if (inc) { cart[+inc.dataset.inc].qty++; saveCart(); }
    if (dec) { const i = +dec.dataset.dec; cart[i].qty--; if (cart[i].qty <= 0) cart.splice(i, 1); saveCart(); }
    if (rm) { cart.splice(+rm.dataset.rm, 1); saveCart(); }
  });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeDrawer(); });
  $("#cartBtn").addEventListener("click", openDrawer);
  $("#footerMail").href = "mailto:" + C.email;
  $("#legalLine").innerHTML = `<span>© ${new Date().getFullYear()} ${esc(C.nombre)}</span><span>Titular: ${esc(C.titular)}</span><span>RUC: ${esc(C.ruc)}</span><span>${esc(C.direccion)}</span>`;
  window.addEventListener("hashchange", route);

  loadPixels();
  renderCartBadge();
  route();
})();
