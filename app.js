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
  const card = p => `
    <article class="card reveal">
      <a href="#/p/${p.slug}" class="img" aria-label="${esc(p.nombre)}">
        <img src="${esc(p.imagenes[0])}" alt="${esc(p.nombre)}" loading="lazy">
        ${p.destacado ? '<span class="badge">Más pedido</span>' : ""}
      </a>
      <div class="body">
        <span class="cat">${esc(p.categoria)}</span>
        <h3><a href="#/p/${p.slug}">${esc(p.nombre)}</a></h3>
        <div class="price">${money(p.precio)}</div>
        <div class="pack">Pack x2: ${money(p.precioPack)}</div>
        <button class="btn btn-ghost add" data-add="${p.slug}">Agregar al carrito</button>
      </div>
    </article>`;

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
    const hero = P.find(p => p.destacado) || P[0];
    const featured = P.filter(p => p.destacado);
    main.innerHTML = `
      <section class="hero">
        <div class="wrap hero-grid">
          <div class="reveal">
            <span class="eyebrow">Tech útil · Hecho para tu día a día</span>
            <h1>Gadgets que <span class="grad-text">entran por los ojos</span> y te hacen la vida más fácil.</h1>
            <p class="lead">Bienestar, hogar y tecnología seleccionados para ti. Pides en un minuto, te llega rápido y pagas recién al recibir.</p>
            <div class="hero-ctas">
              <a class="btn btn-gold" href="#/catalogo">Ver productos</a>
              <a class="btn btn-ghost" href="#/como-comprar">¿Cómo compro?</a>
            </div>
          </div>
          <a class="hero-card reveal" href="#/p/${hero.slug}">
            <span class="tag">El más pedido</span>
            <div class="img"><img src="${esc(hero.imagenes[0])}" alt="${esc(hero.nombre)}"></div>
            <div class="row"><h3>${esc(hero.nombre)}</h3><b class="gold">${money(hero.precio)}</b></div>
          </a>
        </div>
      </section>
      <div class="wrap">${trustBar()}</div>
      <section class="section">
        <div class="wrap">
          <div class="section-head"><div><span class="eyebrow">Favoritos</span><h2>Lo más pedido</h2></div><a class="btn btn-ghost" href="#/catalogo">Ver todo el catálogo</a></div>
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
  }

  let currentCat = "Todos";
  function catalogBlock() {
    return `<div class="chips" role="group" aria-label="Filtrar por categoría">${CATS.map(c => `<button class="chip" data-cat="${esc(c)}" aria-pressed="${c === currentCat}">${esc(c)}</button>`).join("")}</div>
      <div class="grid" id="catGrid" style="margin-top:18px">${P.filter(p => currentCat === "Todos" || p.categoria === currentCat).map(card).join("")}</div>`;
  }
  function bindCatalog() {
    $$(".chip").forEach(b => b.addEventListener("click", () => {
      currentCat = b.dataset.cat;
      $$(".chip").forEach(x => x.setAttribute("aria-pressed", x.dataset.cat === currentCat));
      $("#catGrid").innerHTML = P.filter(p => currentCat === "Todos" || p.categoria === currentCat).map(card).join("");
    }));
  }

  function viewCatalog() {
    setTitle("Catálogo");
    main.innerHTML = `<section class="section"><div class="wrap">
      <div class="section-head"><div><span class="eyebrow">Catálogo</span><h1 style="font-size:clamp(2rem,4.5vw,3rem)">Tech útil para tu día a día</h1></div><p class="muted">Todos con envío gratis y pago contraentrega en Lima y ciudades principales.</p></div>
      ${catalogBlock()}</div></section>`;
    bindCatalog();
  }

  function viewProduct(slug) {
    const p = bySlug(slug);
    if (!p) return viewNotFound();
    setTitle(p.nombre);
    track("ViewContent", { value: p.precio, content_ids: [p.dropiId], content_type: "product", content_name: p.nombre });
    const save = p.precio * 2 - p.precioPack;
    const related = P.filter(x => x.slug !== p.slug && x.categoria === p.categoria).concat(P.filter(x => x.slug !== p.slug && x.categoria !== p.categoria)).slice(0, 4);
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
            <div class="price-big" id="priceBig">${money(p.precio)}</div>
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
    main.innerHTML = `
      <div class="wrap">
        <nav class="crumbs" aria-label="Ruta"><a href="#/">Inicio</a> / <span>Finalizar pedido</span></nav>
        <div class="checkout">
          <form class="panel" id="orderForm" novalidate>
            <h1 style="font-size:clamp(1.7rem,4vw,2.3rem)">Finaliza tu pedido</h1>
            <p class="muted">No pagas nada ahora. Te escribimos por WhatsApp para confirmar y pagas al recibir.</p>
            <div class="form-grid">
              <div class="fieldset-title">Tus datos</div>
              <div class="form-grid two">
                <div class="field"><label for="f_nombre">Nombre y apellido</label><input id="f_nombre" name="nombre" type="text" autocomplete="name" required value="${esc(saved.nombre)}"><span class="err">Escribe tu nombre completo.</span></div>
                <div class="field"><label for="f_cel">Celular (WhatsApp)</label><input id="f_cel" name="celular" type="tel" inputmode="numeric" autocomplete="tel" placeholder="9XX XXX XXX" required value="${esc(saved.celular)}"><span class="err">Ingresa un celular de 9 dígitos que empiece con 9.</span></div>
              </div>
              <div class="field"><label for="f_dni">DNI o carné de extranjería</label><input id="f_dni" name="dni" type="text" inputmode="numeric" required value="${esc(saved.dni)}"><span class="hint">El courier lo pide para entregarte el paquete.</span><span class="err">Ingresa un documento válido (8 dígitos para DNI).</span></div>
              <div class="fieldset-title">Dirección de entrega</div>
              <div class="form-grid two">
                <div class="field"><label for="f_dep">Departamento</label><select id="f_dep" name="departamento" required><option value="">Elige…</option>${DEPARTAMENTOS.map(d => `<option ${saved.departamento === d ? "selected" : ""}>${d}</option>`).join("")}</select><span class="err">Elige tu departamento.</span></div>
                <div class="field"><label for="f_dis">Distrito</label><input id="f_dis" name="distrito" type="text" required value="${esc(saved.distrito)}"><span class="err">Escribe tu distrito.</span></div>
              </div>
              <div class="field"><label for="f_dir">Dirección</label><input id="f_dir" name="direccion" type="text" autocomplete="street-address" placeholder="Av./Jr./Calle, número, dpto." required value="${esc(saved.direccion)}"><span class="err">Escribe tu dirección.</span></div>
              <div class="field"><label for="f_ref">Referencia</label><input id="f_ref" name="referencia" type="text" placeholder="Ej.: frente al parque, casa de rejas negras" required value="${esc(saved.referencia)}"><span class="hint">Ayuda al courier a encontrarte a la primera.</span><span class="err">Agrega una referencia.</span></div>
              <div id="zoneNote"></div>
              <div class="field"><label for="f_notas">Notas (opcional)</label><textarea id="f_notas" name="notas" placeholder="Horario preferido, piso, etc."></textarea></div>
              <label class="check"><input type="checkbox" id="f_ok" required><span>Acepto los <a href="#/legal/terminos" target="_blank">términos y condiciones</a> y la <a href="#/legal/privacidad" target="_blank">política de privacidad</a>, y autorizo el uso de mis datos para gestionar mi pedido.</span></label>
              <span class="err" id="okErr" style="margin-top:-6px">Debes aceptar para continuar.</span>
              <button class="btn btn-gold btn-block" type="submit">${ICON.wa} Confirmar pedido por WhatsApp</button>
              <p class="small muted center" style="margin:0">Se abrirá WhatsApp con el resumen de tu pedido. Solo tienes que enviarlo.</p>
            </div>
          </form>
          <aside class="panel summary" aria-label="Resumen del pedido">
            <h2 style="font-size:1.3rem">Resumen</h2>
            <div id="sumLines"></div>
            <div class="totals" style="margin-top:14px"><span>Envío</span><span class="gold">Gratis</span></div>
            <div class="totals"><span>Total a pagar al recibir</span><b>${money(cartTotal())}</b></div>
            <div class="notice ok" style="margin-top:14px">${ICON.shield.replace("<svg", '<svg width="22" height="22" style="flex:none;color:#25D366"')}<span>Pagas recién cuando tengas el producto en tus manos. Garantía de ${C.garantiaDias} días.</span></div>
          </aside>
        </div>
      </div>`;
    $("#sumLines").innerHTML = cart.map(i => { const p = bySlug(i.slug); return `<div class="line"><img src="${esc(p.imagenes[0])}" alt=""><div><div class="n">${esc(p.nombre)}</div><div class="v">${i.qty} × ${i.pack ? "Pack x2" : "1 unidad"}</div></div><div class="r"><b>${money(linePrice(i))}</b></div></div>`; }).join("");

    const form = $("#orderForm");
    const zone = () => {
      const d = form.departamento.value, el = $("#zoneNote");
      if (!d) { el.innerHTML = ""; return; }
      el.innerHTML = C.departamentosContraentrega.includes(d)
        ? `<div class="notice ok">${ICON.check.replace("<svg", '<svg width="20" height="20" style="flex:none;color:#25D366"')}<span>Tu zona tiene <b>pago contraentrega</b>. Pagas al recibir.</span></div>`
        : `<div class="notice warn"><span>Para ${esc(d)} coordinamos el envío por WhatsApp con pago adelantado por Yape o Plin (o recojo en agencia). Igual envía tu pedido y te escribimos.</span></div>`;
    };
    form.departamento.addEventListener("change", zone); zone();

    const rules = {
      nombre: v => v.trim().split(/\s+/).length >= 2,
      celular: v => /^9\d{8}$/.test(v.replace(/\D/g, "").replace(/^51/, "")),
      dni: v => /^\d{8}$/.test(v.trim()) || /^[A-Za-z0-9]{9,12}$/.test(v.trim()),
      departamento: v => !!v, distrito: v => v.trim().length >= 3, direccion: v => v.trim().length >= 6, referencia: v => v.trim().length >= 4
    };
    form.addEventListener("submit", e => {
      e.preventDefault();
      let ok = true, first = null;
      Object.entries(rules).forEach(([k, fn]) => {
        const input = form[k], f = input.closest(".field"), good = fn(input.value);
        f.classList.toggle("error", !good); if (!good) { ok = false; first = first || input; }
      });
      const accepted = $("#f_ok").checked; $("#okErr").style.display = accepted ? "none" : "block"; if (!accepted) { ok = false; first = first || $("#f_ok"); }
      if (!ok) { first.focus(); return; }

      const data = Object.fromEntries(new FormData(form).entries());
      data.celular = data.celular.replace(/\D/g, "").replace(/^51/, "");
      store.set("vs_customer", { nombre: data.nombre, celular: data.celular, dni: data.dni, departamento: data.departamento, distrito: data.distrito, direccion: data.direccion, referencia: data.referencia });
      const code = orderCode("VS");
      const cod = C.departamentosContraentrega.includes(data.departamento);
      const items = cart.map(i => { const p = bySlug(i.slug); return `• ${i.qty} × ${p.nombre}${i.pack ? " (Pack x2)" : ""} — ${money(linePrice(i))}`; }).join("\n");
      const total = cartTotal();
      const msg = `Hola ${C.nombre}, quiero hacer este pedido:\n\nPedido: ${code}\n${items}\nTotal: ${money(total)}\nPago: ${cod ? "contraentrega" : "por coordinar (fuera de zona contraentrega)"}\n\nNombre: ${data.nombre}\nCelular: ${data.celular}\nDNI/CE: ${data.dni}\nDirección: ${data.direccion}, ${data.distrito}, ${data.departamento}\nReferencia: ${data.referencia}${data.notas ? `\nNotas: ${data.notas}` : ""}`;
      postWebhook({ ...data, tipo: "pedido", codigo: code, fecha: new Date().toISOString(), total, pago: cod ? "contraentrega" : "coordinar", items: cart.map(i => ({ producto: bySlug(i.slug).nombre, dropiId: bySlug(i.slug).dropiId, pack: i.pack, cantidad: i.qty, subtotal: linePrice(i) })) });
      track("Lead", { value: total, content_ids: cart.map(i => bySlug(i.slug).dropiId) });
      const url = waLink(msg);
      store.set("vs_last_order", { code, url, total });
      cart = []; saveCart();
      location.hash = "#/gracias";
      window.open(url, "_blank", "noopener");
    });
  }

  function viewThanks() {
    setTitle("¡Gracias por tu pedido!");
    const o = store.get("vs_last_order", null);
    main.innerHTML = `<div class="wrap thanks">
      <div class="ok-icon">${ICON.check}</div>
      <h1 style="font-size:clamp(2rem,5vw,2.8rem)">¡Pedido registrado!</h1>
      ${o ? `<p class="muted">Tu código de pedido es</p><p class="code">${esc(o.code)}</p>` : ""}
      <p class="muted">Si WhatsApp no se abrió, toca el botón para enviarnos tu pedido. Te responderemos para confirmar la entrega.</p>
      ${o ? `<a class="btn btn-wa" href="${esc(o.url)}" target="_blank" rel="noopener">${ICON.wa} Enviar pedido por WhatsApp</a>` : ""}
      <p style="margin-top:22px"><a class="muted" href="#/catalogo" style="text-decoration:underline">Seguir comprando</a></p>
    </div>`;
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
