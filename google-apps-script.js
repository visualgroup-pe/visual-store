/**
 * VISUAL Store — registro de pedidos y reclamos en Google Sheets (opcional)
 *
 * 1. Crea una hoja de cálculo en Google Sheets y copia su ID (en la URL, entre /d/ y /edit).
 * 2. Crea un proyecto en script.google.com, pega este archivo y pon el ID en SHEET_ID.
 * 3. Implementar > Nueva implementación > Tipo: Aplicación web.
 *    - Ejecutar como: Yo
 *    - Quién tiene acceso: Cualquier usuario
 * 4. Copia la URL que termina en /exec y pégala en config.js, en "sheetsWebhook".
 *
 * Cada pedido se guarda en la pestaña "Pedidos" y cada reclamo en "Reclamos".
 */
const SHEET_ID = "1kZnVyGeXtGfU5QH2LmYYBnVwGYoBn-bXeUgjPbov37k";

// Guarda números como texto (para no perder ceros a la izquierda en DNI y celular)
const txt = v => "'" + String(v || "");

function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  // ID de la hoja "VISUAL Store - Pedidos y Reclamos" (está en su URL, entre /d/ y /edit)
  const ss = SpreadsheetApp.openById(SHEET_ID);

  if (data.tipo === "pedido") {
    const sh = ss.getSheetByName("Pedidos") || ss.insertSheet("Pedidos");
    if (sh.getLastRow() === 0) {
      sh.appendRow(["Fecha", "Código", "Estado", "Nombre", "Celular", "DNI/CE", "Departamento", "Distrito",
        "Dirección", "Referencia", "Notas", "Productos", "IDs Dropi", "Total (S/)", "Pago"]);
    }
    const productos = data.items.map(i => `${i.cantidad} x ${i.producto}${i.pack ? " (Pack x2)" : ""}`).join(" | ");
    const ids = data.items.map(i => `${i.dropiId} x${i.cantidad * (i.pack ? 2 : 1)}`).join(" | ");
    sh.appendRow([new Date(data.fecha), data.codigo, "Por confirmar", data.nombre, txt(data.celular), txt(data.dni),
      data.departamento, data.distrito, data.direccion, data.referencia, data.notas || "", productos, ids, data.total, data.pago]);
  }

  if (data.tipo === "reclamo") {
    const sh = ss.getSheetByName("Reclamos") || ss.insertSheet("Reclamos");
    if (sh.getLastRow() === 0) {
      sh.appendRow(["Fecha", "Código", "Tipo", "Nombre", "DNI/CE", "Teléfono", "Correo", "Domicilio", "Apoderado",
        "Bien", "N.° pedido", "Monto (S/)", "Descripción", "Detalle", "Pedido del consumidor", "Respuesta", "Fecha de respuesta"]);
    }
    sh.appendRow([new Date(data.fecha), data.codigo, data.clase, data.nombre, txt(data.documento),
      txt(data.telefono), data.email, data.domicilio, data.apoderado || "", data.bien, data.pedido || "", data.monto || "",
      data.descripcion, data.detalle, data.solicitud, "", ""]);
  }

  lock.releaseLock();
  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
}

/** Ejecuta esta función una vez desde el editor para autorizar el acceso a la hoja. */
function probar() {
  SpreadsheetApp.openById(SHEET_ID).getName();
}
