/**
 * VISUAL Store — registro de pedidos y reclamos en Google Sheets (opcional)
 *
 * 1. Crea una hoja de cálculo nueva en Google Sheets.
 * 2. Menú Extensiones > Apps Script. Borra lo que haya y pega este archivo.
 * 3. Implementar > Nueva implementación > Tipo: Aplicación web.
 *    - Ejecutar como: Yo
 *    - Quién tiene acceso: Cualquier usuario
 * 4. Copia la URL que termina en /exec y pégala en assets/config.js, en "sheetsWebhook".
 *
 * Cada pedido se guarda en la pestaña "Pedidos" y cada reclamo en "Reclamos".
 */
function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  if (data.tipo === "pedido") {
    const sh = ss.getSheetByName("Pedidos") || ss.insertSheet("Pedidos");
    if (sh.getLastRow() === 0) {
      sh.appendRow(["Fecha", "Código", "Estado", "Nombre", "Celular", "DNI/CE", "Departamento", "Distrito",
        "Dirección", "Referencia", "Notas", "Productos", "IDs Dropi", "Total (S/)", "Pago"]);
    }
    const productos = data.items.map(i => `${i.cantidad} x ${i.producto}${i.pack ? " (Pack x2)" : ""}`).join(" | ");
    const ids = data.items.map(i => `${i.dropiId} x${i.cantidad * (i.pack ? 2 : 1)}`).join(" | ");
    sh.appendRow([new Date(data.fecha), data.codigo, "Por confirmar", data.nombre, data.celular, data.dni,
      data.departamento, data.distrito, data.direccion, data.referencia, data.notas || "", productos, ids, data.total, data.pago]);
  }

  if (data.tipo === "reclamo") {
    const sh = ss.getSheetByName("Reclamos") || ss.insertSheet("Reclamos");
    if (sh.getLastRow() === 0) {
      sh.appendRow(["Fecha", "Código", "Tipo", "Nombre", "DNI/CE", "Teléfono", "Correo", "Domicilio", "Apoderado",
        "Bien", "N.° pedido", "Monto (S/)", "Descripción", "Detalle", "Pedido del consumidor", "Respuesta", "Fecha de respuesta"]);
    }
    sh.appendRow([new Date(data.fecha), data.codigo, data.clase, data.nombre, data.documento,
      data.telefono, data.email, data.domicilio, data.apoderado || "", data.bien, data.pedido || "", data.monto || "",
      data.descripcion, data.detalle, data.solicitud, "", ""]);
  }

  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
}
