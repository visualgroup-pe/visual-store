# VISUAL Store — guía rápida

Tienda online estática (HTML, CSS y JavaScript, sin servidor ni base de datos). Los pedidos llegan por WhatsApp y, si quieres, también a una hoja de Google Sheets.

## Estructura

```
index.html               Página principal (todas las secciones viven aquí)
config.js                ← DATOS DEL NEGOCIO: WhatsApp, RUC, correo, píxeles
products.js              ← CATÁLOGO: precios, fotos, textos de cada producto
app.js                   Lógica de la tienda (no necesitas tocarla)
styles.css               Diseño (gráfica de VISUAL Group)
favicon.svg              Ícono de la pestaña
google-apps-script.js    (Opcional) guarda pedidos y reclamos en Google Sheets
```

## Antes de publicar (obligatorio)

1. Abre `config.js` y cambia:
   - `whatsapp`: tu número con código de país, sin "+" ni espacios (ej.: `51987654321`).
   - `titular`, `ruc` y `direccion`: la ley exige mostrar el RUC en toda oferta online.
2. Revisa en `products.js` los precios y textos.

## Publicar gratis en Cloudflare Pages (conectado a GitHub)

El código vive en el repositorio privado `visualgroup-pe/visual-store`.

1. Crea una cuenta gratis en https://dash.cloudflare.com y entra a **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Autoriza GitHub y elige el repositorio `visual-store`.
3. Configuración de compilación: *Framework preset* **None**, *Build command* vacío, *Build output directory* `/`.
4. **Save and Deploy**. Te da una dirección tipo `visual-store.pages.dev`.
5. Para usar tu dominio (ej.: `visualstore.pe`): en el proyecto, **Custom domains** → agrega el dominio y sigue las instrucciones de DNS.

Cada vez que cambies un archivo en GitHub (por ejemplo, un precio en `products.js`), Cloudflare publica la nueva versión sola en uno o dos minutos.

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

Las fotos actuales vienen del catálogo de Dropi. Cuando tengas fotos o videos propios, súbelos al repositorio y cambia las rutas en `products.js` (ej.: `"masajeador-1.jpg"`).
