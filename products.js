/* ============================================================
   VISUAL Store — CATÁLOGO
   Cada producto: precio unitario, precio del pack x2, fotos y textos.
   "dropiId" es el ID del producto en Dropi (para cargar el pedido).
   Mientras la lista esté vacía, la portada muestra el aviso de
   "Nuevos productos muy pronto" en lugar de las secciones de productos.

   Plantilla para agregar un producto (cópiala dentro de los corchetes):
   {
     slug: "nombre-del-producto",          // sin espacios ni tildes; va en la URL
     top: 1,                               // (opcional) puesto en el Top 5
     dropiId: 1234,
     nombre: "Nombre del producto",
     corto: "Frase corta que aparece en la tarjeta.",
     categoria: "Tech",                    // Tech, Belleza, Bienestar, Hogar, Mascotas, Auto, Herramientas, Juegos, Moda
     destacado: true,                      // aparece en "Destacados"
     precio: 99,
     precioPack: 179,                      // precio por 2 unidades
     imagenes: [CDN + "1234/foto.jpg"],    // o "mi-foto.jpg" si la subes al repositorio
     beneficios: ["Beneficio 1", "Beneficio 2"],
     descripcion: "Descripción larga.",
     incluye: ["1 producto"]
   },
   ============================================================ */
const CDN = "https://d39ru7awumhhs2.cloudfront.net/peru/products/";

window.PRODUCTS = [];
