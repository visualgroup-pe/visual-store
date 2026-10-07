/* ============================================================
   VISUAL Store — CONFIGURACIÓN
   Edita SOLO este archivo para cambiar datos del negocio.
   ============================================================ */
window.STORE_CONFIG = {
  nombre: "VISUAL Store",
  eslogan: "Tech útil que entra por los ojos",

  // WhatsApp que recibe los pedidos: código de país + número, sin espacios ni "+"
  // Ejemplo: 51987654321
  whatsapp: "51912461505",

  email: "administracion@visualgroup.net",

  // Datos legales que se muestran en el pie de página y en el Libro de Reclamaciones.
  // La norma peruana exige mostrar el RUC en toda oferta online: complétalo cuando lo tengas.
  titular: "VISUAL Group",            // nombre o razón social del titular
  ruc: "En trámite",                  // reemplazar por el número de RUC
  direccion: "Lima, Perú",            // dirección para notificaciones

  moneda: "S/",

  // Departamentos donde se acepta pago contraentrega.
  // Fuera de esta lista, el pedido se coordina por WhatsApp (pago adelantado por Yape/Plin).
  departamentosContraentrega: [
    "Lima Metropolitana", "Callao", "Lima Provincias", "Arequipa", "La Libertad",
    "Lambayeque", "Piura", "Ica", "Junín", "Áncash", "Cusco"
  ],

  tiempoEntrega: "24 a 72 horas en Lima y ciudades principales",
  garantiaDias: 30,

  // (Opcional) URL de un Google Apps Script para guardar pedidos y reclamos en Google Sheets.
  // Déjalo vacío para usar solo WhatsApp. Instrucciones en LEEME.md.
  sheetsWebhook: "https://script.google.com/macros/s/AKfycbwwAc0KscVSyK543_PTHwBW5-GGG_yRL5V0LX8feHsjviYJGBoDiBElmRNYAh30UBQ/exec",

  // (Opcional) IDs de píxeles publicitarios. Vacío = desactivado.
  metaPixelId: "",
  tiktokPixelId: "",
  googleAnalyticsId: "",

  redes: {
    instagram: "",
    tiktok: "",
    facebook: ""
  }
};
