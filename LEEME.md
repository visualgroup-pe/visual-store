# VISUAL Store — guía rápida

Tienda online estática (HTML, CSS y JavaScript, sin servidor ni base de datos). Los pedidos llegan por WhatsApp y, si quieres, también a una hoja de Google Sheets.

## Estructura

```
index.html               Página principal (todas las secciones viven aquí)
assets/config.js         ← DATOS DEL NEGOCIO: WhatsApp, RUC, correo, píxeles
assets/products.js       ← CATÁLOGO: precios, fotos, textos de cada producto
assets/app.js            Lógica de la tienda (no necesitas tocarla)
assets/styles.css        Diseño (gráfica de VISUAL Group)
assets/favicon.svg       Ícono de la pestaña
google-apps-script.js    (Opcional) guarda pedidos y reclamos en Google Sheets
```

## Antes de publicar (obligatorio)

1. Abre `assets/config.js` y cambia:
   - `whatsapp`: tu número con código de país, sin "+" ni espacios (ej.: `51987654321`).
   - `titular`, `ruc` y `direccion`: la ley exige mostrar el RUC en toda oferta online.
2. Revisa en `assets/products.js` los precios y textos.

## Publicar gratis en Cloudflare Pages

1. Crea una cuenta gratis en https://pages.cloudflare.com
2. "Create a project" → "Direct Upload" → arrastra la carpeta `visual-store` completa.
3. Te da una dirección tipo `visual-store.pages.dev`: la tienda ya está en línea.
4. Para usar tu dominio (ej.: `visualstore.pe`): en el proyecto, "Custom domains" → agrega el dominio y sigue las instrucciones de DNS.

Para actualizar la tienda, vuelve a subir la carpeta con los cambios ("Create new deployment").

## Cómo procesar un pedido

1. Llega el WhatsApp con el código (ej.: `VS-261007-AB12`), los productos y los datos del cliente.
2. Responde para confirmar la dirección y el horario. **No despaches sin confirmar**: es lo que más reduce los rechazos.
3. En Dropi: Catálogo → busca el producto por su ID (está en `products.js` como `dropiId`) → "Enviar a cliente" → llena los datos del cliente.
4. Marca el pedido como despachado en tu hoja (si usas Google Sheets).

## Libro de Reclamaciones

La sección "Libro de Reclamaciones" genera una hoja con código y le pide al cliente enviarla por correo o WhatsApp. Si activas Google Sheets, cada reclamo queda registrado automáticamente en la pestaña "Reclamos". Tienes **15 días hábiles** para responder cada reclamo.

## Google Sheets (opcional)

Sigue las instrucciones al inicio de `google-apps-script.js` y pega la URL resultante en `sheetsWebhook` dentro de `config.js`.

## Píxeles de publicidad

Pega tus IDs en `config.js` (`metaPixelId`, `tiktokPixelId`, `googleAnalyticsId`). La tienda ya envía los eventos de ver producto, agregar al carrito, iniciar pedido y pedido enviado (este último como "Lead" en Meta).

## Fotos

Las fotos actuales vienen del catálogo de Dropi. Cuando tengas fotos o videos propios, súbelos a `assets/img/` y cambia las rutas en `products.js` (ej.: `"assets/img/masajeador-1.jpg"`).
