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

## Publicación: GitHub Pages

La tienda está en **https://store.visualgroup.net** y se publica gratis con GitHub Pages desde el repositorio público `visualgroup-pe/visual-store` (rama `main`, carpeta raíz).

- Configuración: repositorio → **Settings** → **Pages** (Deploy from a branch · main · / (root); dominio personalizado `store.visualgroup.net`; *Enforce HTTPS* activado).
- DNS (Squarespace Domains): registro **CNAME** `store` → `visualgroup-pe.github.io`. No toques los demás registros (correo de Google Workspace y el sitio principal).
- El archivo `CNAME` del repositorio lo crea GitHub con el dominio; no lo borres.
- Copia de respaldo: `visual-store.pages.dev` (Cloudflare Pages) sigue publicando la misma rama.

Cada vez que cambies un archivo en GitHub (por ejemplo, un precio en `products.js`), GitHub Pages publica la nueva versión sola en uno o dos minutos.

Como el repositorio es público, **no subas datos privados** (contraseñas, llaves, datos de clientes). Los pedidos van a WhatsApp y a Google Sheets, no al repositorio.

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
