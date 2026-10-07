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

/**
 * Ejecútala una vez (o cuando quieras restaurar el formato) desde el editor:
 * da formato a la hoja, agrega la lista de estados, colores y la pestaña Resumen.
 */
function configurarHoja() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  const navy = "#091629", light = "#F0F4F8";

  const p = ss.getSheetByName("Pedidos") || ss.insertSheet("Pedidos");
  if (p.getLastRow() === 0) {
    p.appendRow(["Fecha", "Código", "Estado", "Nombre", "Celular", "DNI/CE", "Departamento", "Distrito",
      "Dirección", "Referencia", "Notas", "Productos", "IDs Dropi", "Total (S/)", "Pago"]);
  }
  p.getRange(1, 16, 1, 2).setValues([["Guía", "Motivo / notas internas"]]);
  p.getRange(1, 1, 1, 17).setFontWeight("bold").setBackground(navy).setFontColor(light);
  p.setFrozenRows(1);
  const estados = ["Por confirmar", "Confirmado", "Despachado", "Entregado", "Rechazado", "Cancelado"];
  const regla = SpreadsheetApp.newDataValidation().requireValueInList(estados, true).setAllowInvalid(false).build();
  const col = p.getRange("C2:C1000");
  col.setDataValidation(regla);
  const colores = { "Por confirmar": "#FFF4CC", "Confirmado": "#DDEBFF", "Despachado": "#E6E0FF",
    "Entregado": "#D9F2E3", "Rechazado": "#FADBD8", "Cancelado": "#E8E8E8" };
  p.setConditionalFormatRules(Object.keys(colores).map(k =>
    SpreadsheetApp.newConditionalFormatRule().whenTextEqualTo(k).setBackground(colores[k]).setRanges([col]).build()));
  p.getRange("A2:A1000").setNumberFormat("dd/mm/yyyy hh:mm");
  p.getRange("E2:F1000").setNumberFormat("@");
  p.getRange("N2:N1000").setNumberFormat("\"S/ \"#,##0.00");

  const rc = ss.getSheetByName("Reclamos");
  if (rc && rc.getLastRow() > 0) {
    rc.getRange(1, 1, 1, rc.getLastColumn()).setFontWeight("bold").setBackground(navy).setFontColor(light);
    rc.setFrozenRows(1);
  }

  const s = ss.getSheetByName("Resumen") || ss.insertSheet("Resumen", 0);
  s.clear();
  s.getRange(1, 1, 15, 2).setValues([
    ["VISUAL Store · Resumen de pedidos", ""],
    ["", ""],
    ["Pedidos recibidos", "=COUNTA(Pedidos!B2:B)"],
    ["Por confirmar", "=COUNTIF(Pedidos!C2:C,\"Por confirmar\")"],
    ["Confirmados (total)", "=COUNTIF(Pedidos!C2:C,\"Confirmado\")+COUNTIF(Pedidos!C2:C,\"Despachado\")+COUNTIF(Pedidos!C2:C,\"Entregado\")+COUNTIF(Pedidos!C2:C,\"Rechazado\")"],
    ["En camino (despachados)", "=COUNTIF(Pedidos!C2:C,\"Despachado\")"],
    ["Entregados", "=COUNTIF(Pedidos!C2:C,\"Entregado\")"],
    ["Rechazados", "=COUNTIF(Pedidos!C2:C,\"Rechazado\")"],
    ["Cancelados", "=COUNTIF(Pedidos!C2:C,\"Cancelado\")"],
    ["", ""],
    ["Tasa de confirmación (meta 85%)", "=IFERROR(B5/(B3-B4),\"—\")"],
    ["Tasa de entrega (meta 80%)", "=IFERROR(B7/(B7+B8),\"—\")"],
    ["Ventas entregadas", "=SUMIF(Pedidos!C2:C,\"Entregado\",Pedidos!N2:N)"],
    ["Ticket promedio", "=IFERROR(B13/B7,\"—\")"],
    ["Reclamos sin responder", "=IFERROR(COUNTA(Reclamos!B2:B)-COUNTA(Reclamos!P2:P),0)"]
  ]);
  s.getRange("A1").setFontWeight("bold").setFontSize(14).setFontColor(navy);
  s.getRange("A3:A15").setFontWeight("bold");
  s.getRange("B11:B12").setNumberFormat("0%");
  s.getRange("B13:B14").setNumberFormat("\"S/ \"#,##0.00");
  s.setColumnWidth(1, 260);
  s.setColumnWidth(2, 140);

  const vacia = ss.getSheetByName("Hoja 1");
  if (vacia && vacia.getLastRow() === 0 && ss.getSheets().length > 1) ss.deleteSheet(vacia);
}

// Guarda números como texto (para no perder ceros a la izquierda en DNI y celular)
function txt_(v) { return "'" + String(v || ""); }

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
    sh.appendRow([new Date(data.fecha), data.codigo, "Por confirmar", data.nombre, txt_(data.celular), txt_(data.dni),
      data.departamento, data.distrito, data.direccion, data.referencia, data.notas || "", productos, ids, data.total, data.pago]);
  }

  if (data.tipo === "reclamo") {
    const sh = ss.getSheetByName("Reclamos") || ss.insertSheet("Reclamos");
    if (sh.getLastRow() === 0) {
      sh.appendRow(["Fecha", "Código", "Tipo", "Nombre", "DNI/CE", "Teléfono", "Correo", "Domicilio", "Apoderado",
        "Bien", "N.° pedido", "Monto (S/)", "Descripción", "Detalle", "Pedido del consumidor", "Respuesta", "Fecha de respuesta"]);
    }
    sh.appendRow([new Date(data.fecha), data.codigo, data.clase, data.nombre, txt_(data.documento),
      txt_(data.telefono), data.email, data.domicilio, data.apoderado || "", data.bien, data.pedido || "", data.monto || "",
      data.descripcion, data.detalle, data.solicitud, "", ""]);
  }

  lock.releaseLock();
  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
}

/** Ejecuta esta función una vez desde el editor para autorizar el acceso a la hoja. */
function probar() {
  SpreadsheetApp.openById(SHEET_ID).getName();
}
