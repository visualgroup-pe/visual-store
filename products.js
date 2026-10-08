/* ============================================================
   VISUAL Store — CATÁLOGO
   Cada producto: precio unitario, precio del pack x2, fotos y textos.
   "dropiId" es el ID del producto en Dropi (para cargar el pedido).
   Las fotos vienen del catálogo de Dropi; reemplázalas por fotos
   propias (súbelas al repositorio) cuando las tengas.
   ============================================================ */
const CDN = "https://d39ru7awumhhs2.cloudfront.net/peru/products/";

window.PRODUCTS = [
  /* ---------- NUEVOS: Tech y audio ---------- */
  {
    slug: "smartwatch-ultra-8",
    top: 1,
    dropiId: 7717,
    nombre: "Smartwatch Ultra 8",
    corto: "Pantalla AMOLED siempre encendida, llamadas y monitoreo de salud en tu muñeca.",
    categoria: "Tech",
    destacado: true,
    precio: 109,
    precioPack: 189,
    imagenes: [
      CDN + "7717/1757821675SmartWatch%208%20Ultra%20ok.jpg",
      CDN + "7717/1757821675SmartWatch%208%20Ultra%203.jpg",
      CDN + "7717/1757821675SmartWatch%208%20Ultra%202.jpg",
      CDN + "7717/1757896079SmartWatch%208%20Ultra%206.jpg"
    ],
    beneficios: [
      "Pantalla AMOLED de 1.5\" con modo siempre encendido",
      "Ritmo cardíaco, oxígeno en sangre, temperatura y sueño",
      "Resistente al agua y al polvo (IP68)",
      "Notificaciones, llamadas, música y control de cámara"
    ],
    descripcion: "Un reloj robusto y elegante para el día a día y el deporte. Registra tus actividades, te avisa de mensajes y llamadas y te ayuda a seguir tu descanso. Disponible en varios colores según stock.",
    incluye: ["1 smartwatch", "Cargador magnético"]
  },
  {
    slug: "smartwatch-series-10",
    dropiId: 7383,
    nombre: "Smartwatch Series 10 con 8 correas",
    corto: "Llamadas por Bluetooth, salud y deporte, con 8 correas para combinar tu estilo.",
    categoria: "Tech",
    destacado: false,
    precio: 119,
    precioPack: 209,
    imagenes: [
      CDN + "7383/1752666998SERIES%202.png",
      CDN + "7383/1752666998SERIES%201.png"
    ],
    beneficios: [
      "Incluye 8 correas de silicona intercambiables",
      "Haz y recibe llamadas desde el reloj",
      "Ritmo cardíaco, presión, oxígeno y sueño",
      "Batería de hasta 7 días"
    ],
    descripcion: "Pantalla grande, cuerpo metálico y un set de correas para cambiar de look cuando quieras. Recibe alertas de WhatsApp y redes sociales y controla tu música y la cámara del celular.",
    incluye: ["1 smartwatch", "8 correas", "Cargador"]
  },
  {
    slug: "smartwatch-t900-pro-max",
    dropiId: 7421,
    nombre: "Smartwatch T900 Pro Max",
    corto: "El smartwatch esencial: notificaciones, pasos, calorías y ritmo cardíaco.",
    categoria: "Tech",
    destacado: false,
    precio: 89,
    precioPack: 159,
    imagenes: [
      CDN + "7421/17585148299%202_X-Design%20(2).jpg",
      CDN + "7421/17585148299%203_X-Design%20(1).jpg",
      CDN + "7421/17585148299%201_X-Design%20(1).jpg"
    ],
    beneficios: [
      "Recibe llamadas, SMS y alertas de redes sociales",
      "Pasos, calorías, ritmo cardíaco y oxígeno",
      "Seguimiento del sueño y recordatorio para moverte",
      "Compatible con Android y iPhone"
    ],
    descripcion: "Ligero, cómodo y fácil de usar. Ideal como primer smartwatch o para regalar. Se carga por USB y dura de 2 a 4 días según el uso.",
    incluye: ["1 smartwatch", "Cable de carga"]
  },
  {
    slug: "smart-band-8",
    dropiId: 5150,
    nombre: "Pulsera inteligente Smart Band 8",
    corto: "Pulsera deportiva liviana para contar pasos, calorías y controlar tu sueño.",
    categoria: "Tech",
    destacado: false,
    precio: 69,
    precioPack: 119,
    imagenes: [
      CDN + "5150/1736270787AC001XIA50_1.webp",
      CDN + "5150/1736270787correas-de-colores-para-xiaomi-mi-band-8.jpg"
    ],
    beneficios: [
      "Pasos, distancia, calorías y ritmo cardíaco",
      "Seguimiento del sueño",
      "Notificaciones del celular en tu muñeca",
      "Liviana: casi no sientes que la llevas puesta"
    ],
    descripcion: "La forma más simple de empezar a moverte más. Úsala todo el día y revisa tu progreso en el celular.",
    incluye: ["1 pulsera inteligente", "Cable de carga"]
  },
  {
    slug: "smartwatch-w26-con-audifonos",
    dropiId: 839,
    nombre: "Smartwatch W26 Pro Max + audífonos inalámbricos",
    corto: "Combo de reloj inteligente, audífonos inalámbricos y correa extra.",
    categoria: "Tech",
    destacado: false,
    precio: 199,
    precioPack: 359,
    imagenes: [
      CDN + "839/17019982253fdb255b-16b6-4d1e-8ac9-6e2f2d009488.jfif",
      CDN + "839/1701998225a9fd80d4-ce03-4993-b00f-c2f1a61336c6.jfif",
      CDN + "839/170199822546d977c1-75db-4e9e-b14b-b3632b834953.jfif",
      CDN + "839/1701998225d264d555-8714-4742-a4d8-2a37a9d0a2b6.jfif"
    ],
    beneficios: [
      "Reloj + audífonos inalámbricos + doble correa",
      "Ritmo cardíaco, sueño y modos deportivos",
      "30 diseños de pantalla para personalizarlo",
      "Un regalo completo en una sola caja"
    ],
    descripcion: "Todo lo que necesitas para tu rutina: el reloj registra tu actividad y tu descanso, y los audífonos te acompañan con música y llamadas. Colores según stock.",
    incluye: ["1 smartwatch", "1 par de audífonos inalámbricos con estuche", "Correa adicional", "Cargador"]
  },
  {
    slug: "audifonos-f9-power-bank",
    dropiId: 629,
    nombre: "Audífonos F9 con estuche power bank",
    corto: "Audífonos inalámbricos cuyo estuche también carga tu celular.",
    categoria: "Tech",
    destacado: false,
    precio: 79,
    precioPack: 139,
    imagenes: [
      CDN + "629/1699255233FB_IMG_16968374798015110.jpg",
      CDN + "629/1699255233FB_IMG_16959627498714122.jpg",
      CDN + "629/1699255233FB_IMG_16959627566866091.jpg",
      CDN + "629/1699255233FB_IMG_16959627621555073.jpg"
    ],
    beneficios: [
      "Estuche de 2000 mAh que funciona como batería externa",
      "Pantalla LED con el nivel de carga",
      "Sonido estéreo inalámbrico",
      "Controles táctiles para música y llamadas"
    ],
    descripcion: "Escucha tu música sin cables y, si tu celular se queda sin batería, usa el estuche para cargarlo. La pantalla te muestra cuánta carga queda en cada audífono y en el estuche.",
    incluye: ["2 audífonos inalámbricos", "Estuche de carga power bank", "Cable de carga"]
  },
  {
    slug: "audifonos-bluetooth-pro-6",
    dropiId: 7718,
    nombre: "Audífonos Bluetooth Pro 6",
    corto: "Audífonos inalámbricos ligeros con controles táctiles. Varios colores.",
    categoria: "Tech",
    destacado: false,
    precio: 69,
    precioPack: 119,
    imagenes: [
      CDN + "7718/1757825653Audifono%206%20Pro%20(1).jpg",
      CDN + "7718/1757825653Audifono%206%20Pro%203_X-Design%20(1).jpg",
      CDN + "7718/1757825653Audifono%206%20Pro%204_X-Design%20(1).jpg",
      CDN + "7718/1757825653Audifono%206%20Pro%202_X-Design%20(1).jpg"
    ],
    beneficios: [
      "Bluetooth 5.0 con emparejamiento automático",
      "Controles táctiles: música, llamadas y asistente de voz",
      "Resistentes al sudor",
      "Compatibles con Android y iPhone"
    ],
    descripcion: "Cómodos para todo el día, en el gimnasio o en el transporte. Sonido estéreo con buenos graves y micrófono para llamadas. Colores: negro, blanco y rosado según stock.",
    incluye: ["2 audífonos", "Estuche de carga", "Cable de carga"]
  },
  {
    slug: "audifonos-diadema-p9",
    dropiId: 7417,
    nombre: "Audífonos de diadema P9",
    corto: "Over-ear inalámbricos y plegables, con radio FM y ranura microSD.",
    categoria: "Tech",
    destacado: false,
    precio: 69,
    precioPack: 119,
    imagenes: [
      CDN + "7417/1758514898p9%201_X-Design%20(1).jpg",
      CDN + "7417/1758514898P9all_X-Design%20(1).jpg",
      CDN + "7417/1758514898P9%209_X-Design%20(1).jpg"
    ],
    beneficios: [
      "Sonido estéreo con bajos potentes",
      "Bluetooth, cable auxiliar, microSD y radio FM",
      "Micrófono para llamadas manos libres",
      "Diseño plegable con almohadillas suaves"
    ],
    descripcion: "Audífonos cómodos para escuchar música, ver series o estudiar. Úsalos sin cables o conéctalos con el cable auxiliar cuando se acabe la batería.",
    incluye: ["1 audífono de diadema", "Cable de carga", "Cable auxiliar"]
  },
  {
    slug: "audifonos-estuche-pantalla-tactil",
    top: 2,
    dropiId: 9667,
    nombre: "Audífonos con estuche de pantalla táctil",
    corto: "Controla música, llamadas y notificaciones desde la pantalla del estuche.",
    categoria: "Tech",
    destacado: true,
    precio: 179,
    precioPack: 319,
    imagenes: [
      CDN + "9667/9e720697-edcf-4e22-bc18-101a7dcd1ec6.jpg",
      CDN + "9667/8e2f906d-934b-4e21-bf37-dffb7c5578e0.jpg",
      CDN + "9667/6d8f0abf-cdc0-4df3-bf9a-c2c3cd6dfa13.jpg"
    ],
    beneficios: [
      "Pantalla táctil a color de 2\" en el estuche",
      "Ve notificaciones y el clima sin sacar el celular",
      "El estuche funciona como power bank de emergencia",
      "Sonido estéreo de alta fidelidad"
    ],
    descripcion: "Lo último en audífonos: desde la pantalla del estuche cambias de canción, ajustas el volumen, contestas llamadas y lees tus notificaciones. Y si tu celular se queda sin batería, el estuche lo rescata.",
    incluye: ["2 audífonos inalámbricos", "Estuche con pantalla táctil", "Cable de carga"]
  },
  {
    slug: "kit-grabacion-tripode",
    dropiId: 8820,
    nombre: "Kit de grabación con trípode, luz y micrófono",
    corto: "Todo para grabar videos, clases o videollamadas con tu celular.",
    categoria: "Tech",
    destacado: false,
    precio: 89,
    precioPack: 159,
    imagenes: [
      CDN + "8820/17805822751%20(5).webp",
      CDN + "8820/17805822753%20(4).webp",
      CDN + "8820/17805822752%20(5).webp",
      CDN + "8820/17805822754.webp"
    ],
    beneficios: [
      "Luz LED de 49 micro LEDs con 3 intensidades",
      "Micrófono con filtro de viento",
      "Trípode plegable que también sirve de palo selfie",
      "Control Bluetooth para tomar fotos a distancia"
    ],
    descripcion: "Ideal para creadores de contenido, emprendedores y clases en línea. El soporte se ajusta a celulares de 5.5 a 10.5 cm de ancho y también acepta cámaras.",
    incluye: ["1 trípode con soporte para celular", "1 luz LED", "1 micrófono", "1 control Bluetooth"]
  },
  {
    slug: "aro-de-luz-rgb-56cm",
    dropiId: 7418,
    nombre: "Aro de luz LED RGB de 56 cm con trípode",
    corto: "Iluminación profesional para fotos, maquillaje, streaming y videos.",
    categoria: "Tech",
    destacado: true,
    precio: 229,
    precioPack: 419,
    imagenes: [
      CDN + "7418/17527654621.jpg",
      CDN + "7418/17527654863.jpg",
      CDN + "7418/17527654862.jpg",
      CDN + "7418/17527654865.jpg"
    ],
    beneficios: [
      "Aro de 56 cm con luz blanca regulable y modo RGB",
      "Trípode de aluminio de hasta 2.1 m",
      "3 soportes para celular: graba en varios a la vez",
      "Control remoto y panel táctil"
    ],
    descripcion: "La luz que usan maquilladoras, creadoras de contenido y fotógrafos. Ajusta brillo y temperatura de color, o elige entre 15 efectos de color para tus videos.",
    incluye: ["1 aro de luz de 56 cm", "1 trípode", "3 soportes para celular", "Control remoto", "Adaptador de corriente"]
  },
  {
    slug: "tira-luces-led-rgb-5m",
    dropiId: 9408,
    nombre: "Tira de luces LED RGB Bluetooth (5 m)",
    corto: "Decora tu cuarto o escritorio con colores que controlas desde el celular.",
    categoria: "Tech",
    destacado: false,
    precio: 89,
    precioPack: 159,
    imagenes: [
      CDN + "9408/img_6a920a72145917.19662408_0.jpg",
      CDN + "9408/e7a31380-96c2-4c30-858f-3d8fe7c9b3ec.jpg",
      CDN + "9408/f6c89479-1ad1-49be-9bef-f988527536c1.jpg"
    ],
    beneficios: [
      "5 metros de luz multicolor",
      "Control remoto y app por Bluetooth",
      "Efectos dinámicos y brillo regulable",
      "Flexible y fácil de pegar"
    ],
    descripcion: "Transforma tu dormitorio, sala, escritorio o TV en segundos. Cambia de color, intensidad y efecto según el momento: estudiar, relajarte o hacer una fiesta.",
    incluye: ["1 tira LED de 5 m", "Control remoto", "Adaptador de corriente"]
  },
  {
    slug: "cargador-inalambrico-3-en-1",
    dropiId: 1120,
    nombre: "Cargador inalámbrico 3 en 1",
    corto: "Carga tu celular, tu reloj y tus audífonos al mismo tiempo, sin cables.",
    categoria: "Tech",
    destacado: false,
    precio: 89,
    precioPack: 159,
    imagenes: [
      CDN + "1120/1703008126CARGADOR_480x480.webp",
      CDN + "1120/1703008126CARGADOR3EN1_480x480.webp"
    ],
    beneficios: [
      "Tres dispositivos cargando a la vez",
      "Compatible con celulares con carga inalámbrica",
      "Base para reloj y para estuche de audífonos",
      "Ordena tu velador o escritorio"
    ],
    descripcion: "Dile adiós al enredo de cables. Deja tu celular, tu smartwatch y tus audífonos en una sola base y amanecen cargados. Funciona con iPhone y Android con carga inalámbrica.",
    incluye: ["1 base de carga 3 en 1", "Cable USB tipo C"]
  },
  {
    slug: "linterna-tactica-led",
    dropiId: 7867,
    nombre: "Linterna táctica LED recargable",
    corto: "Luz potente de largo alcance para la casa, el auto o el campo.",
    categoria: "Tech",
    destacado: false,
    precio: 79,
    precioPack: 139,
    imagenes: [
      CDN + "7867/1761837149WhatsApp%20Image%202025-10-11%20at%2010.52.01%20AM.jpeg",
      CDN + "7867/1770318934Captura%20de%20pantalla%202026-02-05%20141442.png"
    ],
    beneficios: [
      "Haz de luz de más de 200 metros",
      "Recargable, de 2 a 8 horas de uso",
      "Cuerpo resistente para uso rudo",
      "Ideal para emergencias, viajes y camping"
    ],
    descripcion: "Una linterna que de verdad ilumina. Tenla en casa para cortes de luz, en la guantera del auto o en tu mochila de viaje.",
    incluye: ["1 linterna LED", "Cable de carga"]
  },
  {
    slug: "destornillador-electrico-inalambrico",
    dropiId: 3992,
    nombre: "Destornillador eléctrico inalámbrico con accesorios",
    corto: "Atornilla, desatornilla y perfora sin esfuerzo. Incluye maletín y puntas.",
    categoria: "Tech",
    destacado: false,
    precio: 79,
    precioPack: 139,
    imagenes: [
      CDN + "3992/1722569716Screenshot%202024-08-01%20at%2021.28.49.png",
      CDN + "3992/1722569716Screenshot%202024-08-01%20at%2022.34.38.png",
      CDN + "3992/1722569716Screenshot%202024-08-01%20at%2022.34.20.png",
      CDN + "3992/1722569716Screenshot%202024-08-01%20at%2022.34.47.png"
    ],
    beneficios: [
      "Inalámbrico y recargable",
      "Cabezal flexible para rincones difíciles",
      "Velocidad variable",
      "Set completo de puntas, llaves y brocas"
    ],
    descripcion: "La herramienta que todos necesitan en casa: arma muebles, cuelga cuadros y haz arreglos en minutos. Viene en un maletín para tener todo ordenado.",
    incluye: ["1 destornillador eléctrico", "Puntas planas, estrella, Allen y Torx", "Llaves de vaso de 5 a 12 mm", "2 brocas para madera", "Maletín"]
  },
  {
    slug: "teclado-plegable-touchpad",
    dropiId: 570,
    nombre: "Teclado inalámbrico plegable con touchpad",
    corto: "Teclado de bolsillo para tu tablet, celular, laptop o Smart TV.",
    categoria: "Tech",
    destacado: false,
    precio: 169,
    precioPack: 299,
    imagenes: [
      CDN + "570/1698697277images%20(3).jpeg",
      CDN + "570/1698697281Espada%20de%2010%20pulgadas%20(2).png",
      CDN + "570/1698697278null.png"
    ],
    beneficios: [
      "Se pliega y entra en un bolsillo o cartera",
      "Touchpad integrado: no necesitas mouse",
      "Bluetooth, compatible con Windows, iOS y Android",
      "Batería de larga duración"
    ],
    descripcion: "Convierte tu tablet o celular en una pequeña oficina. Perfecto para trabajar o estudiar fuera de casa. Colores gris o blanco según stock.",
    incluye: ["1 teclado plegable", "Cable de carga"]
  },
  /* ---------- NUEVOS: Belleza y cuidado ---------- */
  {
    slug: "secadora-profesional-2300w",
    top: 4,
    dropiId: 756,
    nombre: "Secadora de cabello profesional 2300 W",
    corto: "Seca más rápido y deja tu cabello suave y con brillo, como en el salón.",
    categoria: "Belleza",
    destacado: true,
    precio: 229,
    precioPack: 419,
    imagenes: [
      CDN + "756/17005991843DED8920-33E6-4A54-A419-40FF98320260.jpeg",
      CDN + "756/170059918435A1538B-CD50-4858-BB0A-B53900AE0971.jpeg",
      CDN + "756/1700599184A9AECF12-88C4-4BB8-91A8-DB05C80A8398.jpeg",
      CDN + "756/17005991855E739A4C-A1EA-4D01-A12B-F7FB1599BEAF.jpeg"
    ],
    beneficios: [
      "Motor AC profesional de 2300 W",
      "Iones e infrarrojo para un cabello suave y con brillo",
      "3 velocidades, 3 temperaturas y golpe de aire frío",
      "Cable de 3 metros y filtro extraíble"
    ],
    descripcion: "Potencia de salón de belleza en tu casa. Aguanta horas de uso continuo sin recalentarse, por eso también la eligen estilistas.",
    incluye: ["1 secadora profesional"]
  },
  {
    slug: "depilador-de-cejas-electrico",
    dropiId: 6511,
    nombre: "Depilador de cejas eléctrico",
    corto: "Retira el vello de cejas y rostro al instante, sin dolor. Cabe en tu cartera.",
    categoria: "Belleza",
    destacado: false,
    precio: 59,
    precioPack: 99,
    imagenes: [CDN + "6511/1744048001WhatsApp%20Image%202025-04-07%20at%2012.46.06%20PM.jpeg"],
    beneficios: [
      "Precisión para perfilar cejas y retirar vellitos",
      "Rápido e indoloro",
      "Diseño tipo labial, discreto y portátil",
      "Ideal para retoques en cualquier momento"
    ],
    descripcion: "Olvídate de la pinza. Desliza el depilador sobre la zona y listo: cejas limpias y definidas en segundos.",
    incluye: ["1 depilador de cejas eléctrico"]
  },
  {
    slug: "masajeador-de-papada-con-luz",
    dropiId: 9722,
    nombre: "Masajeador de papada y cuello con luz",
    corto: "Complementa tu rutina facial con masaje por pulsaciones y luz.",
    categoria: "Belleza",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [
      CDN + "9722/d37235bd-5331-432f-8568-7dd74027f851.png",
      CDN + "9722/5aeea894-151d-4f8b-b831-7c6673cebf39.png",
      CDN + "9722/5e31179a-a7aa-4eb8-adf4-2e085c773324.png",
      CDN + "9722/20c711e4-e88a-4755-954c-a0622e45bf96.png"
    ],
    beneficios: [
      "Cabezal curvo que se adapta al cuello",
      "Masaje por pulsaciones con función de luz",
      "Recargable, con apagado automático",
      "Compacto y fácil de llevar"
    ],
    descripcion: "Un momento de cuidado para la zona del cuello y la papada, que suele olvidarse. Úsalo junto a tu crema favorita como parte de tu rutina diaria.",
    incluye: ["1 masajeador recargable", "Cable de carga"]
  },
  {
    slug: "afeitadora-3-en-1",
    dropiId: 9317,
    nombre: "Afeitadora 3 en 1 recargable",
    corto: "Afeita, perfila y recorta barba, bigote y patillas con un solo equipo.",
    categoria: "Belleza",
    destacado: false,
    precio: 109,
    precioPack: 189,
    imagenes: [
      CDN + "9317/img_6a711938da1f55.95324605_0.jpg",
      CDN + "9317/213b1d12-a589-464b-b045-59ce0db95f18.jpg",
      CDN + "9317/26093934-440f-417d-a920-07a960fbc83f.jpg"
    ],
    beneficios: [
      "3 funciones: afeitar, perfilar y recortar",
      "Cuchillas de precisión para un corte parejo",
      "Menos irritación en la piel",
      "Diseño ergonómico, ligero y recargable"
    ],
    descripcion: "Mantén tu estilo de barba como te gusta, en casa o de viaje. Su motor de alto rendimiento corta parejo sin jalar.",
    incluye: ["1 afeitadora 3 en 1", "Cable de carga"]
  },
  {
    slug: "afeitadora-portatil",
    dropiId: 4446,
    nombre: "Afeitadora portátil recargable",
    corto: "Compacta y práctica para retocar en cualquier momento.",
    categoria: "Belleza",
    destacado: false,
    precio: 49,
    precioPack: 85,
    imagenes: [
      CDN + "4446/1729011898Screenshot%202024-10-15%20at%2012.02.59.png",
      CDN + "4446/1729011898Screenshot%202024-10-15%20at%2012.03.09.png",
      CDN + "4446/1729011899Screenshot%202024-10-15%20at%2012.03.21.png"
    ],
    beneficios: [
      "Tamaño de bolsillo",
      "Batería recargable de larga duración",
      "Fácil de limpiar",
      "Ideal para viajes y el gimnasio"
    ],
    descripcion: "Llévala en tu mochila o maletín y luce siempre bien afeitado. Una carga completa te alcanza para varios usos.",
    incluye: ["1 afeitadora portátil", "Cable de carga"]
  },
  {
    slug: "parche-masajeador-ems",
    dropiId: 6986,
    nombre: "Parche masajeador inalámbrico",
    corto: "Relaja cuello, espalda o cintura con un parche liviano y recargable.",
    categoria: "Bienestar",
    destacado: false,
    precio: 119,
    precioPack: 209,
    imagenes: [
      CDN + "6986/1749505824MAY49-1_df16424b-90e7-4780-9170-7ad2cea3769f.webp",
      CDN + "6986/1749505824MAY49-2_0fba940d-9c09-452a-8e66-0985565da87a.webp",
      CDN + "6986/1749505824MAY49-3_342596ac-c78a-4648-a088-0b9a95f6ccd4.webp",
      CDN + "6986/1749505825MAY49-4_aa9f65ca-3ad1-4aad-8966-e2214e59af2a.webp"
    ],
    beneficios: [
      "Para cuello, espalda, cintura y piernas",
      "8 modos de masaje",
      "Sin cables mientras lo usas",
      "Apagado automático"
    ],
    descripcion: "Pégalo donde sientas tensión y elige el modo que más te guste. Tan discreto que puedes usarlo mientras trabajas o descansas.",
    incluye: ["1 parche masajeador", "Cable de carga"]
  },
  {
    slug: "serum-pestanas-ultra-boost",
    dropiId: 9702,
    nombre: "Sérum coreano de pestañas y cejas Ultra Boost XL",
    corto: "El sérum viral para lucir pestañas y cejas más largas y abundantes.",
    categoria: "Belleza",
    destacado: false,
    precio: 109,
    precioPack: 189,
    imagenes: [
      CDN + "9702/ae772518-f940-4c4e-bcb3-711c2528f00c.webp",
      CDN + "9702/a1bf77e1-d70f-4716-adab-924fa520d0da.jpeg",
      CDN + "9702/bb035090-bb99-41c0-b5bd-f296bd83ef51.webp"
    ],
    beneficios: [
      "Para pestañas y cejas",
      "Aplicador de precisión",
      "Uso diario, de noche",
      "Tendencia en redes sociales"
    ],
    descripcion: "Aplica una línea fina en la base de las pestañas y en las cejas cada noche, sobre la piel limpia. Los resultados varían según cada persona y la constancia de uso.",
    incluye: ["1 sérum para pestañas y cejas"]
  },
  {
    slug: "serum-uplash-pestanas-cejas",
    dropiId: 8099,
    nombre: "Sérum Uplash para pestañas y cejas",
    corto: "Con aceites de argán, jojoba, almendras y ricino para nutrir y fortalecer.",
    categoria: "Belleza",
    destacado: false,
    precio: 79,
    precioPack: 139,
    imagenes: [
      CDN + "8099/1768668705SERUM_UPLASH_13.jpg",
      CDN + "8099/1769447109SERUM%20UPLASH%20(27).jpg",
      CDN + "8099/1769447109SERUM%20UPLASH%20(26).jpg",
      CDN + "8099/1769447109SERUM%20UPLASH%20(23)%20(1).jpg"
    ],
    beneficios: [
      "Aceites orgánicos de argán, jojoba, almendras y ricino",
      "Ayuda a fortalecer y reducir el quiebre",
      "Para pestañas y cejas",
      "Fácil de incorporar a tu rutina"
    ],
    descripcion: "Nutre el folículo y fortalece el vello para mejorar la apariencia de tus pestañas y cejas con el uso constante.",
    incluye: ["1 sérum Uplash"]
  },
  {
    slug: "serum-facial-rejuvenecedor",
    dropiId: 9285,
    nombre: "Sérum facial rejuvenecedor natural",
    corto: "Rosa mosqueta, argán y jojoba para una piel luminosa y suave.",
    categoria: "Belleza",
    destacado: false,
    precio: 79,
    precioPack: 139,
    imagenes: [
      CDN + "9285/17836127601.jpg",
      CDN + "9285/17836127603.jpg",
      CDN + "9285/17836127609.jpg",
      CDN + "9285/17836127608.jpg"
    ],
    beneficios: [
      "Aceites de rosa mosqueta, argán, jojoba y almendras",
      "Aporta luminosidad y suavidad",
      "Ayuda a mejorar la elasticidad de la piel",
      "Fórmula de origen natural"
    ],
    descripcion: "Unas gotas por la noche sobre el rostro limpio. Sus vitaminas y ácidos grasos nutren la piel y la ayudan a lucir más fresca.",
    incluye: ["1 sérum facial"]
  },
  {
    slug: "mascarilla-acido-hialuronico-x5",
    dropiId: 9155,
    nombre: "Mascarillas faciales de ácido hialurónico (x5)",
    corto: "Hidratación intensiva para tu rostro, en formato de mascarilla de tela.",
    categoria: "Belleza",
    destacado: false,
    precio: 79,
    precioPack: 139,
    imagenes: [
      CDN + "9155/img_6a403a91d3ac88.28918348_0.jpg",
      CDN + "9155/178259491849.jpg",
      CDN + "9155/178259491850.jpg"
    ],
    beneficios: [
      "Ácido hialurónico para hidratar",
      "Piel más suave y fresca",
      "Fácil de usar en casa",
      "Pack de 5 unidades"
    ],
    descripcion: "Tu momento de spa una o dos veces por semana. Coloca la mascarilla sobre el rostro limpio, relájate unos minutos y siente la diferencia.",
    incluye: ["5 mascarillas faciales"]
  },
  {
    slug: "crema-facial-vitamina-c",
    dropiId: 8950,
    nombre: "Crema facial con vitamina C",
    corto: "Hidratación diaria con textura suave y sensación de frescura.",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 119,
    imagenes: [CDN + "8950/img_6a2843906594b7.01487251_0.jpg"],
    beneficios: [
      "Con vitamina C",
      "Textura suave de rápida absorción",
      "Mantiene la piel hidratada",
      "Para uso diario"
    ],
    descripcion: "Aplícala cada mañana y noche sobre el rostro limpio para mantener tu piel suave y con apariencia saludable.",
    incluye: ["1 crema facial"]
  },
  {
    slug: "serum-facial-vitamina-c",
    dropiId: 9180,
    nombre: "Sérum facial con vitamina C (100 ml)",
    corto: "Piel hidratada y radiante con un sérum ligero de rápida absorción.",
    categoria: "Belleza",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [
      CDN + "9180/img_6a403ab8a86205.81158790_0.jpg",
      CDN + "9180/1782595618120.jpg",
      CDN + "9180/1782595618119.jpg"
    ],
    beneficios: [
      "Presentación grande de 100 ml",
      "Textura ligera, no grasa",
      "Aporta luminosidad",
      "Se aplica antes de tu crema"
    ],
    descripcion: "Un paso sencillo para una piel con mejor aspecto. Aplica unas gotas sobre la piel limpia, deja absorber y continúa con tu crema facial.",
    incluye: ["1 sérum de 100 ml"]
  },
  {
    slug: "aspiradora-de-acaros",
    dropiId: 9410,
    nombre: "Aspiradora de ácaros recargable",
    corto: "Limpia a fondo colchones, sofás y almohadas, sin cables.",
    categoria: "Hogar",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [
      CDN + "9410/5bf19cb2-acac-40aa-8d7e-f9a39ce5acfa.jpg",
      CDN + "9410/698a3c41-316b-4c40-b271-8f027247cc0e.jpg",
      CDN + "9410/9f0dae27-ebf9-4f39-bcd3-cb92982b95bc.jpg"
    ],
    beneficios: [
      "Retira polvo y partículas de superficies textiles",
      "Ideal para colchones, camas, sofás y tapicería",
      "Recargable: sin cable mientras limpias",
      "Depósito transparente y filtro lavable"
    ],
    descripcion: "El polvo que no ves se acumula en tu colchón y tu sofá. Con esta aspiradora portátil los limpias en minutos y duermes más tranquilo.",
    incluye: ["1 aspiradora de ácaros", "Cable de carga"]
  },
  /* ---------- NUEVOS: Mascotas ---------- */
  {
    slug: "juguete-interactivo-gatos",
    dropiId: 4728,
    nombre: "Juguete interactivo para gatos",
    corto: "Se mueve de forma impredecible para que tu gato juegue y se ejercite.",
    categoria: "Mascotas",
    destacado: false,
    precio: 69,
    precioPack: 119,
    imagenes: [
      CDN + "4728/1732545403H5ed35b9257874bc786008039c5c0c89aE.png_720x720q50.png",
      CDN + "4728/1732545403H8e9f6b297afe4fb6beacebfb8c0ee580Y.png_720x720q50.png",
      CDN + "4728/1732545403H57805152d6f64dea8422b1fcdcbcca07o.png_720x720q50.png",
      CDN + "4728/1732545403Hd755e602e25648a68b4b7552d002cbd1A.png_720x720q50.png"
    ],
    beneficios: [
      "Movimiento automático que despierta su instinto cazador",
      "Lo mantiene activo aunque no estés en casa",
      "Para gatos de todas las edades",
      "Colores rojo, verde o gris según stock"
    ],
    descripcion: "Un gato aburrido es un gato que rasguña muebles. Este juguete se mueve solo y lo mantiene entretenido y en movimiento.",
    incluye: ["1 juguete interactivo"]
  },
  /* ---------- NUEVOS: Auto ---------- */
  {
    slug: "kit-de-limpieza-para-auto",
    top: 5,
    dropiId: 4504,
    nombre: "Kit de lavado para auto con cepillo giratorio",
    corto: "Lava tu auto en casa con un cepillo que gira solo con la presión del agua.",
    categoria: "Auto",
    destacado: true,
    precio: 129,
    precioPack: 229,
    imagenes: [
      CDN + "4504/1730301514WhatsApp%20Image%202024-10-16%20at%204.08.48%20PM.jpeg",
      CDN + "4504/1730301514WhatsApp%20Image%202024-10-16%20at%204.11.02%20PM.jpeg",
      CDN + "4504/1770389982WhatsApp%20Image%202024-10-16%20at%204.09.52%20PM.jpeg"
    ],
    beneficios: [
      "Cepillo giratorio que funciona con la presión del agua",
      "Cabezal de chenilla suave que cuida la pintura",
      "Depósito para espuma de shampoo",
      "No necesita electricidad"
    ],
    descripcion: "Ahorra tiempo y dinero en el lavadero. Conecta la manguera, agrega shampoo y deja que el cepillo haga el trabajo pesado.",
    incluye: ["1 kit de lavado con cepillo giratorio"]
  },
  {
    slug: "perilla-para-timon",
    dropiId: 4698,
    nombre: "Perilla giratoria para timón",
    corto: "Maniobra y estaciónate con una sola mano, con más control y menos esfuerzo.",
    categoria: "Auto",
    destacado: false,
    precio: 69,
    precioPack: 119,
    imagenes: [
      CDN + "4698/1732118135Screenshot%202024-11-20%20at%2010.52.18.png",
      CDN + "4698/1732118135Screenshot%202024-11-20%20at%2010.53.51.png",
      CDN + "4698/1770149436Captura%20de%20pantalla%202026-02-03%20150958.png"
    ],
    beneficios: [
      "Giros cerrados y estacionamiento más fáciles",
      "Gira 360° de forma suave",
      "Material antideslizante y duradero",
      "Se instala en minutos en la mayoría de timones"
    ],
    descripcion: "Ideal para quienes manejan mucho en ciudad. Tendrás más control del volante en cada maniobra sin cansar tus brazos.",
    incluye: ["1 perilla para timón"]
  },
  {
    slug: "soporte-magnetico-celular-360",
    dropiId: 8257,
    nombre: "Soporte magnético 360° para celular",
    corto: "Tu celular firme y a la vista mientras manejas o trabajas.",
    categoria: "Auto",
    destacado: false,
    precio: 69,
    precioPack: 119,
    imagenes: [
      CDN + "8257/1775499116WhatsApp%20Image%202026-04-06%20at%2012.33.51%20PM.jpeg",
      CDN + "8257/1775499116WhatsApp%20Image%202026-04-06%20at%2012.33.15%20PM.jpeg",
      CDN + "8257/1775499119WhatsApp%20Image%202026-04-06%20at%2012.32.56%20PM.jpeg",
      CDN + "8257/1775499120WhatsApp%20Image%202026-04-06%20at%2012.32.27%20PM.jpeg"
    ],
    beneficios: [
      "Imán de alta potencia",
      "Rotación 360° para el ángulo perfecto",
      "Diseño compacto y elegante",
      "Funciona en el auto o en el escritorio"
    ],
    descripcion: "Usa el GPS con seguridad: tu celular queda fijo y a la vista. Se coloca y retira con una sola mano.",
    incluye: ["1 soporte magnético 360°"]
  },
  {
    slug: "sellador-de-llantas",
    dropiId: 9701,
    nombre: "Sellador y reparador de llantas",
    corto: "Sella pequeños pinchazos al instante en autos, motos y bicicletas.",
    categoria: "Auto",
    destacado: false,
    precio: 59,
    precioPack: 99,
    imagenes: [
      CDN + "9701/a5379f96-d5a0-4442-811c-74c8f1c1a65b.webp",
      CDN + "9701/86605aea-7553-46c1-8960-1a681ad37520.jpeg"
    ],
    beneficios: [
      "Para autos, motos y bicicletas",
      "Ayuda a sellar pinchazos pequeños",
      "Fácil y rápido de aplicar",
      "Menos visitas a la vulcanizadora"
    ],
    descripcion: "Llévalo siempre en la maletera. Si se pincha una llanta, te ayuda a seguir tu camino sin cambiar de llanta en plena pista.",
    incluye: ["1 sellador de llantas"]
  },
  {
    slug: "sombrilla-parabrisas",
    dropiId: 9314,
    nombre: "Sombrilla parasol para parabrisas",
    corto: "Mantén tu auto fresco al sol. Se abre y se guarda como un paraguas.",
    categoria: "Auto",
    destacado: false,
    precio: 79,
    precioPack: 139,
    imagenes: [
      CDN + "9314/img_6a711931a9be26.61316328_0.jpg",
      CDN + "9314/e0327f94-49c3-43b7-a76c-f4b9d7dbd90f.jpg",
      CDN + "9314/667519d5-862f-4fea-a2e4-0d4f8e73d329.jpg"
    ],
    beneficios: [
      "Bloquea los rayos UV",
      "Reduce la temperatura dentro del auto",
      "Protege tablero, timón y asientos",
      "Se instala y retira en segundos"
    ],
    descripcion: "Nada de subirte a un auto que parece horno. Ábrela en el parabrisas al estacionar y ciérrala para guardarla en la puerta o la guantera.",
    incluye: ["1 sombrilla parasol"]
  },
  {
    slug: "alfombrilla-antideslizante-tablero",
    dropiId: 4166,
    nombre: "Alfombrilla antideslizante para tablero",
    corto: "Celular, lentes y llaves siempre en su sitio, aunque frenes.",
    categoria: "Auto",
    destacado: false,
    precio: 49,
    precioPack: 85,
    imagenes: [
      CDN + "4166/1724860084DFAsfafasf.png",
      CDN + "4166/1724860084fafasgaga.png",
      CDN + "4166/1724860084fsadffgafvads.png",
      CDN + "4166/1724860084fasgaggadsg.png"
    ],
    beneficios: [
      "Gel de PU resistente al calor",
      "No deja residuos en el tablero",
      "Lavable y reutilizable",
      "Tamaño universal"
    ],
    descripcion: "Colócala en el tablero y deja encima tus cosas de uso diario. Si pierde adherencia, lávala con agua y jabón y queda como nueva.",
    incluye: ["1 alfombrilla antideslizante"]
  },
  {
    slug: "porta-vasos-asiento-x4",
    dropiId: 3454,
    nombre: "Porta vasos para asiento de auto (pack x4)",
    corto: "Bebidas y objetos seguros para los pasajeros de atrás.",
    categoria: "Auto",
    destacado: false,
    precio: 59,
    precioPack: 99,
    imagenes: [
      CDN + "3454/17151786012.jpg",
      CDN + "3454/17151786011.jpg",
      CDN + "3454/17151786017.jpg",
      CDN + "3454/17151786019.jpg"
    ],
    beneficios: [
      "Se cuelgan del cabezal del asiento",
      "Para vasos, botellas, celulares o bolsas",
      "Compactos, no ocupan espacio",
      "Pack de 4 unidades"
    ],
    descripcion: "Perfectos para viajes en familia: cada pasajero tiene dónde dejar su bebida sin derramarla.",
    incluye: ["4 porta vasos con gancho"]
  },
  {
    slug: "cepillo-hidrofobico-parabrisas",
    dropiId: 4556,
    nombre: "Cepillo con líquido hidrofóbico para parabrisas",
    corto: "Limpia y protege el vidrio en un paso para ver mejor cuando llueve.",
    categoria: "Auto",
    destacado: false,
    precio: 79,
    precioPack: 139,
    imagenes: [
      CDN + "4556/1731026522H58719471430f4932bad67dd33e31f766I.jpg_720x720q50.jpg",
      CDN + "4556/17325569001_6_f307150c-0260-41e0-adf7-63bb2c92ae08_800x.jpg",
      CDN + "4556/17325569001_3_f302b4f0-9ece-4dad-9228-1ebf207d62e0_800x.jpg",
      CDN + "4556/17325569001_4_360351e9-9f83-4a02-b39c-c670d451e385_800x.jpg"
    ],
    beneficios: [
      "Capa hidrofóbica que repele agua y suciedad",
      "Mejor visibilidad con lluvia",
      "Limpia y protege en un solo paso",
      "Ligero y fácil de usar"
    ],
    descripcion: "Pásalo por el parabrisas y los espejos: el agua resbala y la suciedad se adhiere menos. Ideal para la temporada de lluvias y viajes a provincia.",
    incluye: ["1 cepillo con líquido hidrofóbico"]
  },
  {
    slug: "mallas-parasol-ventanas",
    dropiId: 1757,
    nombre: "Mallas parasol para ventanas del auto",
    corto: "Protege del sol a tus pasajeros, ideal para viajar con niños.",
    categoria: "Auto",
    destacado: false,
    precio: 49,
    precioPack: 85,
    imagenes: [
      CDN + "1757/1706969736autog.jpg",
      CDN + "1757/1706969736AUTO,jpg.jpeg",
      CDN + "1757/170696973613924235466_176562362.jpg"
    ],
    beneficios: [
      "Malla de doble capa que bloquea rayos UV",
      "Reduce el resplandor y el calor",
      "Permite bajar la ventana con la malla puesta",
      "Fácil de colocar y retirar"
    ],
    descripcion: "Se coloca sobre la puerta trasera como una funda. Tus hijos viajan frescos y protegidos del sol, y además ayuda a que no entren mosquitos.",
    incluye: ["Mallas para ventanas traseras"]
  },
  /* ---------- NUEVOS (lote 2) ---------- */
  {
    slug: "consola-retro-m8",
    top: 3,
    dropiId: 7748,
    nombre: "Consola retro M8 inalámbrica",
    corto: "Miles de juegos clásicos y 2 mandos inalámbricos. Conéctala a tu TV y a jugar.",
    categoria: "Tech",
    destacado: false,
    precio: 169,
    precioPack: 299,
    imagenes: [
      CDN + "7748/17580403781749837574052_d384eee4ea0c0245c2e62a0d0f7cd9ee.jpg",
      CDN + "7748/1780260297213.jpg"
    ],
    beneficios: [
      "Emuladores de consolas clásicas incorporados",
      "2 mandos inalámbricos de 2.4 GHz",
      "Se conecta a cualquier TV por HDMI",
      "Plug and play: lista para jugar"
    ],
    descripcion: "Revive los juegos de tu infancia o compártelos con tus hijos. Conéctala al televisor, enciéndela y elige entre miles de títulos retro para jugar de a dos.",
    incluye: ["1 consola", "2 mandos inalámbricos", "Cable HDMI", "Cable de alimentación"]
  },
  {
    slug: "smartwatch-d20",
    dropiId: 7420,
    nombre: "Smartwatch D20",
    corto: "Reloj inteligente ligero con notificaciones, pasos y ritmo cardíaco.",
    categoria: "Tech",
    destacado: false,
    precio: 69,
    precioPack: 119,
    imagenes: [
      CDN + "7420/1758003639D20%203%20(1).jpg",
      CDN + "7420/1758003639D20%202_X-Design%20(1).jpg",
      CDN + "7420/1758003639D20%201_X-Design%20(1).jpg",
      CDN + "7420/1758003639D20%205_X-Design%20(1).jpg"
    ],
    beneficios: [
      "Pantalla táctil a color",
      "Notificaciones de llamadas y mensajes",
      "Pasos, calorías y ritmo cardíaco",
      "Resistente a salpicaduras"
    ],
    descripcion: "Un smartwatch sencillo y económico para el día a día. Ideal para empezar o para regalar. Colores según stock.",
    incluye: ["1 smartwatch", "Cable de carga"]
  },
  {
    slug: "smartwatch-7-en-1",
    dropiId: 7308,
    nombre: "Smartwatch Ultra con 7 correas",
    corto: "Reloj inteligente con carga inalámbrica y 7 correas para cambiar de estilo.",
    categoria: "Tech",
    destacado: false,
    precio: 109,
    precioPack: 189,
    imagenes: [
      CDN + "7308/1752222309SMART1.png",
      CDN + "7308/1752222309SMART2.png",
      CDN + "7308/1752222309SMART3.png",
      CDN + "7308/1752222309SMART%204.png"
    ],
    beneficios: [
      "Incluye 7 correas intercambiables",
      "Carga inalámbrica",
      "Salud, deporte y notificaciones",
      "Compatible con Android y iPhone"
    ],
    descripcion: "Un reloj para cada ocasión: cambia de correa según tu outfit. Monitorea tu actividad y recibe tus notificaciones sin sacar el celular.",
    incluye: ["1 smartwatch", "7 correas", "Cargador inalámbrico"]
  },
  {
    slug: "foco-recargable-portatil",
    dropiId: 6829,
    nombre: "Foco recargable portátil con gancho",
    corto: "Luz potente donde la necesites: cortes de luz, camping o el patio.",
    categoria: "Hogar",
    destacado: false,
    precio: 49,
    precioPack: 85,
    imagenes: [
      CDN + "6829/17471112191741974289ac352f7f-1869-4d91-87e6-9a62840906d2.jpg",
      CDN + "6829/1747111220174197428939225489-86c7-4d7f-9c30-99e7f72a9e32.jpg"
    ],
    beneficios: [
      "Recargable por USB",
      "Gancho para colgarlo donde quieras",
      "Luz cálida y uniforme",
      "Ligero y resistente"
    ],
    descripcion: "Tenlo siempre listo para un corte de luz, una noche de camping o para iluminar la cochera. Se carga por USB como tu celular.",
    incluye: ["1 foco recargable", "Cable USB"]
  },
  {
    slug: "linterna-martillo-4-en-1",
    dropiId: 8824,
    nombre: "Linterna martillo de emergencia 4 en 1",
    corto: "Linterna, rompe vidrios, corta cinturón y power bank en una sola herramienta.",
    categoria: "Auto",
    destacado: false,
    precio: 69,
    precioPack: 119,
    imagenes: [
      CDN + "8824/17805829281%20(9).webp",
      CDN + "8824/17805829284%20(2).webp",
      CDN + "8824/17805829292%20(9).webp"
    ],
    beneficios: [
      "Linterna LED con luz lateral",
      "Martillo rompe vidrios de seguridad",
      "Cortador de cinturón oculto",
      "Salida USB para cargar tu celular"
    ],
    descripcion: "La herramienta que todo auto debería llevar. Ilumina, te ayuda a salir en una emergencia y hasta carga tu celular.",
    incluye: ["1 linterna martillo 4 en 1", "Cable de carga"]
  },
  {
    slug: "antena-tv-full-hd",
    dropiId: 7673,
    nombre: "Antena TV digital Full HD",
    corto: "Mira gratis los canales de señal abierta en alta definición.",
    categoria: "Tech",
    destacado: false,
    precio: 59,
    precioPack: 99,
    imagenes: [
      CDN + "7673/1756490717Screenshot%202025-08-29%20at%2013.04.49.png",
      CDN + "7673/1773678335Screenshot%202026-03-16%20at%2011.24.17.png",
      CDN + "7673/1773678335Screenshot%202026-03-16%20at%2011.24.34.png"
    ],
    beneficios: [
      "Canales de señal abierta en HD",
      "Sin pagar mensualidades",
      "Fácil de instalar",
      "Cable incluido"
    ],
    descripcion: "Conéctala a tu televisor con TDT y disfruta los canales nacionales de señal abierta con imagen nítida. Ideal para la segunda TV de la casa.",
    incluye: ["1 antena digital", "Cable coaxial"]
  },
  {
    slug: "electroestimulador-tens",
    dropiId: 9316,
    nombre: "Electroestimulador TENS con 4 electrodos",
    corto: "Masaje por impulsos eléctricos para relajar músculos en casa.",
    categoria: "Bienestar",
    destacado: false,
    precio: 119,
    precioPack: 209,
    imagenes: [
      CDN + "9316/img_6a711936328bc3.84271380_0.jpg",
      CDN + "9316/4d02b76a-81cc-43e9-b8a5-9758a4b8cab5.jpg",
      CDN + "9316/8e344aa4-9ea6-4e25-816f-66e2646a6660.jpg"
    ],
    beneficios: [
      "Pantalla digital fácil de usar",
      "Varios modos e intensidades",
      "4 electrodos para cubrir más zonas",
      "Compacto y portátil"
    ],
    descripcion: "Relaja espalda, cuello, piernas o brazos después de un día pesado. Elige el modo y la intensidad que te resulten más cómodos. No usar con marcapasos ni durante el embarazo.",
    incluye: ["1 equipo TENS", "4 electrodos", "Cables"]
  },
  {
    slug: "cinta-metrica-digital",
    dropiId: 571,
    nombre: "Cinta métrica digital",
    corto: "Mide distancias, curvas y diámetros rodando sobre la superficie.",
    categoria: "Herramientas",
    destacado: false,
    precio: 129,
    precioPack: 229,
    imagenes: [CDN + "571/1698699261CINTA%20METRICA%20DIGITAL.png"],
    beneficios: [
      "Pantalla de 1.8\"",
      "Mide curvas, diámetros y distancias",
      "Distancia acumulada de hasta 99 m",
      "Batería de larga duración"
    ],
    descripcion: "Más práctica que una wincha: pásala sobre la superficie y lee la medida en la pantalla. Útil para costura, carpintería, decoración y obras.",
    incluye: ["1 cinta métrica digital"]
  },
  {
    slug: "wincha-laser-2-en-1",
    dropiId: 3991,
    nombre: "Wincha con medidor láser 2 en 1",
    corto: "Láser de hasta 40 m y cinta de 5 m en una sola herramienta.",
    categoria: "Herramientas",
    destacado: false,
    precio: 179,
    precioPack: 319,
    imagenes: [CDN + "3991/1722550387WhatsApp%20Image%202024-08-01%20at%205.11.02%20PM.jpeg"],
    beneficios: [
      "Medición láser de hasta 40 metros",
      "Cinta métrica de 5 metros",
      "Calcula áreas y volúmenes",
      "Recargable por USB"
    ],
    descripcion: "Mide un ambiente completo en segundos, sin ayuda de nadie. Ideal para obras, mudanzas, instalaciones y presupuestos.",
    incluye: ["1 wincha láser 2 en 1", "Cable USB"]
  },
  {
    slug: "exprimidor-automatico-naranjas",
    dropiId: 3088,
    nombre: "Exprimidor automático de cítricos",
    corto: "Jugo de naranja fresco en segundos, con un solo botón.",
    categoria: "Hogar",
    destacado: false,
    precio: 89,
    precioPack: 159,
    imagenes: [
      CDN + "3088/1769216083full_image-1.jpeg",
      CDN + "3088/1769216083exprimidor-electrico-portatil-recargable-de-naranja-y-frutas.jpg",
      CDN + "3088/1711928025Sintitulo_300x300px_af2258ec-1a46-4554-8d36-6cc28d1b2b49_480x480.gif"
    ],
    beneficios: [
      "Exprime de forma automática",
      "Recargable y portátil",
      "Fácil de limpiar",
      "Ideal para naranjas, limones y mandarinas"
    ],
    descripcion: "Empieza el día con jugo natural sin esfuerzo. Coloca la fruta, presiona y listo.",
    incluye: ["1 exprimidor automático", "Cable de carga"]
  },
  {
    slug: "exprimidor-electrico-portatil",
    dropiId: 9411,
    nombre: "Exprimidor eléctrico portátil R25",
    corto: "Inalámbrico y recargable: jugos frescos en casa o en la oficina.",
    categoria: "Hogar",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [
      CDN + "9411/img_6a920c08bbe244.70637912_0.jpg",
      CDN + "9411/58995eb1-7165-4958-adea-2225deba250a.jpg",
      CDN + "9411/e47b95aa-2cf9-473d-9c67-f51edf408e51.jpg"
    ],
    beneficios: [
      "Funciona sin cable mientras lo usas",
      "Batería recargable por USB",
      "Activación con un botón",
      "Compacto y fácil de guardar"
    ],
    descripcion: "Prepara jugos naturales donde quieras. Su diseño portátil lo hace perfecto para la cocina, la oficina o el viaje.",
    incluye: ["1 exprimidor portátil", "Cable USB"]
  },
  {
    slug: "selladora-al-vacio",
    dropiId: 6254,
    nombre: "Selladora al vacío + bolsas",
    corto: "Conserva tus alimentos frescos por más tiempo.",
    categoria: "Hogar",
    destacado: false,
    precio: 89,
    precioPack: 159,
    imagenes: [CDN + "6254/1741298916CV.JPG"],
    beneficios: [
      "Retira el aire y sella herméticamente",
      "Evita la oxidación y el desperdicio",
      "Ideal para carnes, quesos y verduras",
      "Incluye bolsas"
    ],
    descripcion: "Compra al por mayor y guarda en porciones. Tus alimentos duran más en la refri o el congelador y ahorras dinero.",
    incluye: ["1 selladora al vacío", "Bolsas para sellar"]
  },
  {
    slug: "balanza-gramera-digital",
    dropiId: 8809,
    nombre: "Balanza gramera digital (hasta 10 kg)",
    corto: "Precisión de 1 g para cocinar, hacer repostería o pesar envíos.",
    categoria: "Hogar",
    destacado: false,
    precio: 69,
    precioPack: 119,
    imagenes: [
      CDN + "8809/17805296311.webp",
      CDN + "8809/17805296312.webp",
      CDN + "8809/17805296313.webp"
    ],
    beneficios: [
      "Capacidad máxima de 10 kg",
      "Precisión de 1 gramo",
      "Función tara para pesar con recipiente",
      "Mide en gramos y onzas"
    ],
    descripcion: "Sigue tus recetas al pie de la letra, controla porciones o pesa tus paquetes antes de enviarlos.",
    incluye: ["1 balanza gramera"]
  },
  {
    slug: "escurridor-bowl-3-en-1",
    dropiId: 9414,
    nombre: "Set bowl + escurridor + rallador 3 en 1",
    corto: "Lava, escurre, ralla y mezcla con un solo set.",
    categoria: "Hogar",
    destacado: false,
    precio: 89,
    precioPack: 159,
    imagenes: [
      CDN + "9414/img_6a920c1d19c470.26702272_0.jpg",
      CDN + "9414/4d536918-2080-42d6-a6ef-bfc576dffbca.jpg",
      CDN + "9414/0030db66-b0bd-4de1-8fef-1532fb4800b2.jpg"
    ],
    beneficios: [
      "Bowl para mezclar o guardar",
      "Escurridor para frutas y verduras",
      "Tapa ralladora y cortadora",
      "Ahorra espacio en tu cocina"
    ],
    descripcion: "Un set práctico para preparar tus comidas en menos tiempo y con menos cosas que lavar.",
    incluye: ["1 bowl", "1 escurridor", "1 tapa ralladora"]
  },
  {
    slug: "organizador-de-tapas",
    dropiId: 9415,
    nombre: "Organizador de tapas plegable",
    corto: "Tapas ordenadas y a la mano sin ocupar espacio.",
    categoria: "Hogar",
    destacado: false,
    precio: 59,
    precioPack: 99,
    imagenes: [
      CDN + "9415/img_6a920c2046ce83.17222505_0.jpg",
      CDN + "9415/608a88f0-81eb-4f4f-8f14-34b54cee117f.jpg",
      CDN + "9415/c469c8d3-c143-4bc5-baa7-2e41b1dd2c50.jpg"
    ],
    beneficios: [
      "Brazos que se pliegan cuando no los usas",
      "Se instala en la pared o el mueble",
      "Para tapas de ollas y sartenes",
      "Libera espacio en tus cajones"
    ],
    descripcion: "Dile adiós al cajón desordenado de tapas. Instálalo en la pared o la puerta del mueble y tenlas siempre a la vista.",
    incluye: ["1 organizador de tapas"]
  },
  {
    slug: "escurridor-platos-85cm",
    dropiId: 9413,
    nombre: "Escurridor de platos sobre lavadero (85 cm)",
    corto: "Organiza platos, tazas y utensilios aprovechando el espacio vertical.",
    categoria: "Hogar",
    destacado: false,
    precio: 149,
    precioPack: 269,
    imagenes: [
      CDN + "9413/b36a4a63-2a6d-4cb0-a686-ff6346e8c816.jpg",
      CDN + "9413/681e62c1-b788-49ad-97c3-f425a5701bdb.jpg",
      CDN + "9413/b989463a-5f6c-40f6-9097-6c797131778d.jpg"
    ],
    beneficios: [
      "Se coloca sobre el lavadero",
      "El agua escurre directo al fregadero",
      "Espacios para platos, tazas y cubiertos",
      "Estructura resistente"
    ],
    descripcion: "Gana espacio en tu cocina: todo se seca y se ordena sobre el lavadero, sin ocupar el mostrador.",
    incluye: ["1 escurridor de 85 cm con accesorios"]
  },
  {
    slug: "bolsas-compresion-vacio-x3",
    dropiId: 3131,
    nombre: "Bolsas de compresión al vacío (x3)",
    corto: "Guarda ropa y frazadas ocupando hasta la mitad del espacio.",
    categoria: "Hogar",
    destacado: false,
    precio: 59,
    precioPack: 99,
    imagenes: [
      CDN + "3131/1712275742Screenshot%202024-04-04%20at%2019.08.25.png",
      CDN + "3131/1770149132Captura%20de%20pantalla%202026-02-03%20150205.png",
      CDN + "3131/1770149132Captura%20de%20pantalla%202026-02-03%20150121.png"
    ],
    beneficios: [
      "Para ropa, frazadas y edredones",
      "Protegen de la humedad y el polvo",
      "Reutilizables",
      "Pack de 3 bolsas"
    ],
    descripcion: "Perfectas para guardar la ropa de temporada o para viajar con más cosas en la maleta.",
    incluye: ["3 bolsas de compresión al vacío"]
  },
  {
    slug: "pack-bolsas-vacio-compresor",
    dropiId: 8828,
    nombre: "Pack 5 bolsas al vacío + mini compresor",
    corto: "Comprime ropa y textiles en segundos con el mini compresor eléctrico.",
    categoria: "Hogar",
    destacado: false,
    precio: 119,
    precioPack: 209,
    imagenes: [
      CDN + "8828/178058391201.webp",
      CDN + "8828/178058391203.webp",
      CDN + "8828/17805839124.webp",
      CDN + "8828/17805839121%20(1).webp"
    ],
    beneficios: [
      "5 bolsas resistentes",
      "Mini compresor eléctrico",
      "Succionador manual de respaldo",
      "Ideal para clósets y maletas"
    ],
    descripcion: "Organiza tu clóset o tu maleta como un profesional. El compresor saca el aire por ti y la ropa ocupa mucho menos.",
    incluye: ["5 bolsas al vacío", "1 mini compresor", "1 succionador manual"]
  },
  {
    slug: "sujetador-de-sabanas-x4",
    dropiId: 9409,
    nombre: "Sujetadores de sábanas (pack x4)",
    corto: "Sábanas siempre estiradas: se acabaron las esquinas que se salen.",
    categoria: "Hogar",
    destacado: false,
    precio: 79,
    precioPack: 139,
    imagenes: [
      CDN + "9409/img_6a920ad6bce735.28408576_0.png",
      CDN + "9409/b646ba86-4f79-47f0-bfc3-ede59ed6cbb8.jpg",
      CDN + "9409/cb84691b-2a37-4c75-aa6e-5827cb9df3b2.jpg"
    ],
    beneficios: [
      "Mantienen la sábana firme y lisa",
      "Fáciles de colocar",
      "Para cualquier tamaño de colchón",
      "Pack de 4"
    ],
    descripcion: "Tu cama se ve bien tendida toda la noche. Ideal para colchones gruesos y para quienes se mueven mucho al dormir.",
    incluye: ["4 sujetadores de sábanas"]
  },
  {
    slug: "mini-calefactor-volcan",
    dropiId: 7583,
    nombre: "Mini calefactor eléctrico con control remoto",
    corto: "Calor rápido para tu dormitorio, oficina o estudio.",
    categoria: "Hogar",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [
      CDN + "7583/1754336110O1CN015eakln1qYFuxfJfIN_!!3267585507-0-cib.jpg",
      CDN + "7583/1754336111O1CN01RaQeuj1qYFuujZ9QB_!!3267585507-0-cib.jpg",
      CDN + "7583/1754336111O1CN01twogeB1qYFuxfSBxb_!!3267585507-0-cib.jpg"
    ],
    beneficios: [
      "Control remoto con alcance de 5 m",
      "Calienta ambientes pequeños rápidamente",
      "Diseño compacto con efecto llama",
      "Fácil de mover"
    ],
    descripcion: "Abrígate en las noches frías sin calentar toda la casa. Ponlo junto a tu escritorio o cama y regúlalo desde el control.",
    incluye: ["1 mini calefactor", "Control remoto"]
  },
  {
    slug: "humidificador-volcan",
    dropiId: 6516,
    nombre: "Humidificador volcán con luz",
    corto: "Vapor frío y efecto volcán que relaja y decora.",
    categoria: "Hogar",
    destacado: false,
    precio: 79,
    precioPack: 139,
    imagenes: [CDN + "6516/1744049523WhatsApp%20Image%202025-04-07%20at%201.11.36%20PM.jpeg"],
    beneficios: [
      "Tecnología ultrasónica de vapor frío",
      "Efecto volcán con luz",
      "Silencioso para dormir",
      "Ideal para dormitorio o escritorio"
    ],
    descripcion: "Ayuda a mantener la humedad del ambiente mientras decora tu espacio con su efecto de volcán iluminado.",
    incluye: ["1 humidificador", "Cable USB"]
  },
  {
    slug: "termo-set-500ml-3-tazas",
    dropiId: 9310,
    nombre: "Set termo 500 ml + 3 tazas",
    corto: "Bebidas calientes o frías por horas, en caja de regalo.",
    categoria: "Hogar",
    destacado: false,
    precio: 59,
    precioPack: 99,
    imagenes: [
      CDN + "9310/17852598991000725004.jpg",
      CDN + "9310/17852598991000725003.jpg",
      CDN + "9310/17852598991000725005.jpg"
    ],
    beneficios: [
      "Acero inoxidable resistente",
      "Mantiene la temperatura por horas",
      "Incluye 3 tazas",
      "Presentación de regalo"
    ],
    descripcion: "Llévate el café, el té o el agua fría a donde vayas y compártelo. Un regalo práctico que siempre queda bien.",
    incluye: ["1 termo de 500 ml", "3 tazas", "Caja de regalo"]
  },
  {
    slug: "lonchera-termica",
    dropiId: 6198,
    nombre: "Lonchera térmica",
    corto: "Tu almuerzo a la temperatura ideal en el trabajo o el colegio.",
    categoria: "Hogar",
    destacado: false,
    precio: 79,
    precioPack: 139,
    imagenes: [
      CDN + "6198/17403219361.jpg",
      CDN + "6198/17403219362.jpg",
      CDN + "6198/17403219363.jpg",
      CDN + "6198/17403219364.jpg"
    ],
    beneficios: [
      "Interior térmico",
      "Tela resistente y fácil de limpiar",
      "Asa cómoda",
      "Varios colores según stock"
    ],
    descripcion: "Lleva tu comida casera y ahorra. Mantiene la temperatura de tus táperes hasta la hora del almuerzo.",
    incluye: ["1 lonchera térmica"]
  },
  {
    slug: "secador-de-ropa-portatil",
    dropiId: 9131,
    nombre: "Secador de ropa portátil 600 W",
    corto: "Seca tu ropa con aire caliente aunque no haya sol.",
    categoria: "Hogar",
    destacado: false,
    precio: 109,
    precioPack: 189,
    imagenes: [
      CDN + "9131/1782315307WhatsApp%20Image%202026-06-24%20at%2010.31.54%20AM.jpeg",
      CDN + "9131/1782315306WhatsApp%20Image%202026-06-24%20at%2010.32.18%20AM.jpeg",
      CDN + "9131/1782315307WhatsApp%20Image%202026-06-24%20at%2010.31.37%20AM.jpeg"
    ],
    beneficios: [
      "Potencia de 600 W",
      "Plegable y ligero",
      "Ideal para departamentos y días húmedos",
      "Fácil de guardar"
    ],
    descripcion: "Perfecto para el invierno limeño: cuelga la ropa en su funda, enciéndelo y deja que el aire caliente haga el trabajo.",
    incluye: ["1 secador de ropa portátil"]
  },
  {
    slug: "almohada-ortopedica-cervical",
    dropiId: 9326,
    nombre: "Almohada ortopédica cervical",
    corto: "Memory foam que se adapta a tu cuello para descansar mejor.",
    categoria: "Bienestar",
    destacado: false,
    precio: 89,
    precioPack: 159,
    imagenes: [
      CDN + "9326/75df5fe8-7246-43d8-a7dc-63bbfeacc529.PNG",
      CDN + "9326/00201c34-4888-4160-90c4-c195ac09f718.PNG",
      CDN + "9326/b3c7c9dd-d153-42a2-a7cd-d82ae6cb6d75.PNG"
    ],
    beneficios: [
      "Espuma viscoelástica de alta densidad",
      "Ayuda a mantener una postura cómoda",
      "No se deforma",
      "No guarda calor"
    ],
    descripcion: "Despierta más descansado. Su forma ergonómica acompaña la curva natural de tu cuello mientras duermes.",
    incluye: ["1 almohada ortopédica"]
  },
  {
    slug: "juego-de-dados-46",
    dropiId: 8745,
    nombre: "Juego de dados de 46 piezas",
    corto: "Ajusta y desajusta tuercas y pernos en el auto o la casa.",
    categoria: "Herramientas",
    destacado: false,
    precio: 89,
    precioPack: 159,
    imagenes: [CDN + "8745/img_6a12235d4e2399.26473444_0.png"],
    beneficios: [
      "46 piezas en estuche",
      "Para mecánica y uso doméstico",
      "Estuche organizador",
      "Acero resistente"
    ],
    descripcion: "Todo lo necesario para mantenimiento del auto, la moto o la casa, en un estuche fácil de llevar.",
    incluye: ["Juego de dados de 46 piezas con estuche"]
  },
  {
    slug: "wincha-nivelador-laser",
    dropiId: 8752,
    nombre: "Wincha con nivelador láser",
    corto: "Mide y alinea con precisión para colgar cuadros, repisas o hacer obras.",
    categoria: "Herramientas",
    destacado: false,
    precio: 89,
    precioPack: 159,
    imagenes: [CDN + "8752/img_6a1223733018e3.35888277_0.png"],
    beneficios: [
      "Línea láser para nivelar",
      "Wincha integrada",
      "Ideal para instalación y bricolaje",
      "Compacta"
    ],
    descripcion: "Cuelga cuadros derechitos a la primera. Mide y nivela con una sola herramienta.",
    incluye: ["1 wincha con nivelador láser"]
  },
  {
    slug: "kit-elevador-de-muebles",
    dropiId: 8821,
    nombre: "Kit elevador y deslizador de muebles (5 piezas)",
    corto: "Mueve camas, sofás y roperos sin esfuerzo y sin rayar el piso.",
    categoria: "Herramientas",
    destacado: false,
    precio: 79,
    precioPack: 139,
    imagenes: [
      CDN + "8821/17805824401%20(6).webp",
      CDN + "8821/17805824402%20(6).webp",
      CDN + "8821/17805824403%20(5).webp"
    ],
    beneficios: [
      "Soporta hasta 150 kg",
      "Ruedas deslizantes",
      "Funciona en madera, laminado y alfombra",
      "Ideal para mudanzas y limpieza"
    ],
    descripcion: "Levanta el mueble con la palanca, coloca las ruedas y deslízalo. Así de fácil para limpiar debajo o redecorar.",
    incluye: ["1 palanca elevadora", "4 deslizadores con ruedas"]
  },
  {
    slug: "afilador-de-brocas",
    dropiId: 8808,
    nombre: "Afilador de brocas",
    corto: "Recupera el filo de tus brocas en segundos.",
    categoria: "Herramientas",
    destacado: false,
    precio: 89,
    precioPack: 159,
    imagenes: [
      CDN + "8808/17805293781%20(1).webp",
      CDN + "8808/17805293782%20(1).webp",
      CDN + "8808/17805293783%20(2).webp"
    ],
    beneficios: [
      "Restaura el filo rápido y con precisión",
      "Para varios tamaños de broca",
      "Diseño robusto",
      "Fácil de usar con tu taladro"
    ],
    descripcion: "No vuelvas a botar brocas sin filo. Colócala en la ranura, afila y sigue trabajando.",
    incluye: ["1 afilador de brocas"]
  },
  {
    slug: "llave-multifuncional-sanitarios",
    dropiId: 4243,
    nombre: "Llave multifuncional para sanitarios",
    corto: "Instala y repara grifos y tuercas en espacios reducidos.",
    categoria: "Herramientas",
    destacado: false,
    precio: 69,
    precioPack: 119,
    imagenes: [
      CDN + "4243/1725562365WhatsApp%20Image%202024-09-05%20at%2011.24.06%20AM%20(1)%20(1).jpeg",
      CDN + "4243/1725562365WhatsApp%20Image%202024-09-05%20at%2011.23.59%20AM%20(2)%20(1).jpeg",
      CDN + "4243/1725562365WhatsApp%20Image%202024-09-05%20at%2011.24.06%20AM%20(2).jpeg",
      CDN + "4243/1725562365WhatsApp%20Image%202024-09-05%20at%2011.23.59%20AM%20(3)%20(1).jpeg"
    ],
    beneficios: [
      "Ideal para grifería y tuberías",
      "No daña acabados cromados",
      "Mango corto y ergonómico",
      "Juego con varios tamaños"
    ],
    descripcion: "La herramienta que te faltaba para cambiar ese caño sin llamar al gasfitero.",
    incluye: ["1 llave multifuncional con accesorios"]
  },
  {
    slug: "set-brocas-extractoras",
    dropiId: 3457,
    nombre: "Set de brocas extractoras de tornillos",
    corto: "Saca tornillos y pernos dañados o barridos.",
    categoria: "Herramientas",
    destacado: false,
    precio: 59,
    precioPack: 99,
    imagenes: [
      CDN + "3457/171518124213.jpg",
      CDN + "3457/171518124311.jpg",
      CDN + "3457/17151812435.jpg"
    ],
    beneficios: [
      "Para tornillos barridos o atascados",
      "Varios tamaños",
      "Acero resistente",
      "Estuche incluido"
    ],
    descripcion: "Ese tornillo que nadie podía sacar, sale en minutos. Úsalo con tu taladro en reversa.",
    incluye: ["Set de brocas extractoras con estuche"]
  },
  {
    slug: "extension-flexible-taladro",
    dropiId: 1098,
    nombre: "Extensión flexible para taladro",
    corto: "Atornilla en rincones donde el taladro no entra.",
    categoria: "Herramientas",
    destacado: false,
    precio: 49,
    precioPack: 85,
    imagenes: [
      CDN + "1098/1702520171315863928_4094596937330901_3950308575772211092_n.jpg",
      CDN + "1098/1770325503272894945_4531945766915688_1513383149335792370_n.jpg",
      CDN + "1098/1770325503310133151_6194978327196946_4853857066666124678_n.jpg"
    ],
    beneficios: [
      "Eje flexible de acero cromo-vanadio",
      "Llega a espacios difíciles",
      "Compatible con la mayoría de taladros",
      "Incluye puntas"
    ],
    descripcion: "Perfecta para muebles, autos y lugares estrechos. Conéctala a tu taladro y dobla el eje hacia donde necesites.",
    incluye: ["1 extensión flexible", "Puntas de destornillador"]
  },
  {
    slug: "tijera-para-injertos",
    dropiId: 9417,
    nombre: "Tijera profesional para injertos",
    corto: "Cortes precisos en V, U y Omega para tus plantas.",
    categoria: "Herramientas",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [
      CDN + "9417/img_6a920c2724c1e1.76426261_0.png",
      CDN + "9417/eb917e8f-498b-4c44-a25a-0d4a8e4733ea.jpg",
      CDN + "9417/3315e9d2-4c70-4e80-add0-48806e029eae.jpg"
    ],
    beneficios: [
      "Cuchillas intercambiables",
      "Cortes en V, U y Omega",
      "Une patrón e injerto con precisión",
      "Para jardín y vivero"
    ],
    descripcion: "La herramienta preferida para injertar frutales y plantas ornamentales con cortes limpios y exactos.",
    incluye: ["1 tijera para injertos", "Cuchillas adicionales"]
  },
  {
    slug: "rodillera-termica-gel",
    dropiId: 8830,
    nombre: "Rodillera de compresión con gel frío/calor",
    corto: "Soporte y alivio localizado para tu rodilla.",
    categoria: "Bienestar",
    destacado: false,
    precio: 79,
    precioPack: 139,
    imagenes: [
      CDN + "8830/17805843961%20(3).webp",
      CDN + "8830/17805843963%20(3).webp",
      CDN + "8830/17805843962%20(3).webp"
    ],
    beneficios: [
      "Gel para terapia de frío o calor",
      "Compresión de 360°",
      "Ajustable y cómoda",
      "Para deporte o recuperación"
    ],
    descripcion: "Enfríala o caliéntala según lo que necesites y colócala sobre la rodilla para sentir alivio después del deporte o un día largo.",
    incluye: ["1 rodillera con gel"]
  },
  {
    slug: "ejercitador-pedal-elastico",
    dropiId: 8233,
    nombre: "Ejercitador de pedal con bandas elásticas",
    corto: "Entrena brazos, abdomen, piernas y glúteos en casa.",
    categoria: "Bienestar",
    destacado: false,
    precio: 69,
    precioPack: 119,
    imagenes: [
      CDN + "8233/1773104394images.jpeg",
      CDN + "8233/1773104395imageUrl_2.webp",
      CDN + "8233/1773104858WhatsApp%20Image%202026-03-09%20at%208.05.49%20PM.jpeg"
    ],
    beneficios: [
      "Bandas de resistencia",
      "Pedales antideslizantes",
      "Ligero y fácil de guardar",
      "Para todos los niveles"
    ],
    descripcion: "Un gimnasio de bolsillo: úsalo en tu sala, en el parque o de viaje para mantenerte activo.",
    incluye: ["1 ejercitador de pedal"]
  },
  {
    slug: "molde-hielo-facial",
    dropiId: 8113,
    nombre: "Molde de hielo facial",
    corto: "Un masaje de frío que desinflama y refresca tu rostro en minutos.",
    categoria: "Belleza",
    destacado: false,
    precio: 49,
    precioPack: 85,
    imagenes: [
      CDN + "8113/1769530760ICEGLOW%20(4).jpg",
      CDN + "8113/1769530760ICEGLOW.jpg",
      CDN + "8113/1769530760ICEGLOW%20(5).jpg",
      CDN + "8113/1769530760ICEGLOW%20(10).jpg"
    ],
    beneficios: [
      "Ayuda a desinflamar ojeras y rostro",
      "Refresca y revitaliza la piel",
      "Reutilizable",
      "Fácil de usar"
    ],
    descripcion: "Llénalo de agua, congélalo y deslízalo por tu rostro por las mañanas. Un ritual de belleza rápido y económico.",
    incluye: ["1 molde de hielo facial"]
  },
  {
    slug: "delineador-con-sello",
    dropiId: 8256,
    nombre: "Delineador con sello 3 en 1",
    corto: "Delineado de gato perfecto y simétrico en segundos.",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 119,
    imagenes: [
      CDN + "8256/1775491794WhatsApp%20Image%202026-04-06%20at%2010.38.29%20AM.jpeg",
      CDN + "8256/1775491794WhatsApp%20Image%202026-04-06%20at%2010.39.33%20AM.jpeg",
      CDN + "8256/1775491797WhatsApp%20Image%202026-04-06%20at%2010.38.47%20AM.jpeg"
    ],
    beneficios: [
      "Sello para la punta del delineado",
      "Delineador líquido de precisión",
      "Resultado simétrico en ambos ojos",
      "Fácil incluso para principiantes"
    ],
    descripcion: "Presiona el sello en la esquina del ojo y une con el delineador. Así de fácil logras un delineado profesional.",
    incluye: ["1 delineador con sello"]
  },
  {
    slug: "lapiz-blanqueador-dental",
    dropiId: 4786,
    nombre: "Lápiz blanqueador de dientes",
    corto: "Ayuda a reducir manchas de forma gradual. Llévalo a donde vayas.",
    categoria: "Belleza",
    destacado: false,
    precio: 59,
    precioPack: 99,
    imagenes: [
      CDN + "4786/1732893516WhatsApp%20Image%202024-11-29%20at%2010.03.10%20AM.jpeg",
      CDN + "4786/1732893516WhatsApp%20Image%202024-11-29%20at%209.52.05%20AM.jpeg",
      CDN + "4786/1732893516WhatsApp%20Image%202024-11-29%20at%209.50.50%20AM.jpeg"
    ],
    beneficios: [
      "Aplicación fácil tipo lápiz",
      "Ayuda a aclarar manchas superficiales",
      "Portátil",
      "Uso diario"
    ],
    descripcion: "Aplica sobre los dientes limpios y secos según las indicaciones del empaque. Los resultados varían según cada persona.",
    incluye: ["1 lápiz blanqueador"]
  },
  {
    slug: "cintas-blanqueadoras-7d",
    dropiId: 8372,
    nombre: "Cintas blanqueadoras dentales 7D White",
    corto: "Mejora la apariencia de tu sonrisa desde casa.",
    categoria: "Belleza",
    destacado: false,
    precio: 79,
    precioPack: 139,
    imagenes: [
      CDN + "8372/1776709640WhatsApp%20Image%202026-04-20%20at%2012.39.51%20PM.jpeg",
      CDN + "8372/1776709640WhatsApp%20Image%202026-04-20%20at%201.25.23%20PM.jpeg",
      CDN + "8372/1776709640WhatsApp%20Image%202026-04-20%20at%2012.46.31%20PM.jpeg"
    ],
    beneficios: [
      "Se adhieren fácilmente",
      "Ayudan a reducir manchas superficiales",
      "Uso práctico en casa",
      "Tratamiento por días"
    ],
    descripcion: "Colócalas sobre tus dientes el tiempo indicado en el empaque y retíralas. Los resultados varían según cada persona y la constancia.",
    incluye: ["1 caja de cintas blanqueadoras"]
  },
  {
    slug: "cera-en-barra-cabello",
    dropiId: 8810,
    nombre: "Cera en barra para cabello IKT (75 g)",
    corto: "Controla el frizz y fija peinados al instante.",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 119,
    imagenes: [
      CDN + "8810/17805798161%20(1).webp",
      CDN + "8810/17805798164.webp",
      CDN + "8810/17805798162%20(1).webp",
      CDN + "8810/17805798173%20(1).webp"
    ],
    beneficios: [
      "Controla el frizz y los pelitos sueltos",
      "Con cera de abejas, glicerina y aguacate",
      "Aroma ligero",
      "Formato barra fácil de aplicar"
    ],
    descripcion: "Desliza la barra sobre el cabello para un peinado pulido, ideal para moños, colas y peinados de hombre.",
    incluye: ["1 cera en barra de 75 g"]
  },
  {
    slug: "tren-domino-musical",
    dropiId: 8835,
    nombre: "Tren dominó musical automático",
    corto: "Coloca las fichas solo mientras avanza, con luces y sonidos.",
    categoria: "Juegos",
    destacado: false,
    precio: 109,
    precioPack: 189,
    imagenes: [
      CDN + "8835/17805872411%20(1).webp",
      CDN + "8835/17805872412%20(1).webp",
      CDN + "8835/17805872423%20(1).webp"
    ],
    beneficios: [
      "Coloca fichas de dominó automáticamente",
      "Luces y sonidos",
      "Estimula la creatividad",
      "Diversión para toda la familia"
    ],
    descripcion: "Tus hijos arman recorridos y ven caer las fichas en cadena. Un juguete que engancha a grandes y chicos.",
    incluye: ["1 tren dominó", "Fichas de dominó"]
  },
  {
    slug: "teclado-infantil-cocodrilo",
    dropiId: 9416,
    nombre: "Teclado musical infantil Cocodrilo (37 teclas)",
    corto: "Su primer piano: teclas, melodías y sonidos divertidos.",
    categoria: "Juegos",
    destacado: false,
    precio: 129,
    precioPack: 229,
    imagenes: [
      CDN + "9416/a1fba707-4922-4467-b482-42cdb0b36ac8.jpg",
      CDN + "9416/d048bc13-0934-4336-b4cf-2e1a7942b0e8.jpg",
      CDN + "9416/54997a25-4b52-42f5-8f28-402887e30a0d.jpg",
      CDN + "9416/47e78219-f5e9-496a-a442-a44d59814231.jpg"
    ],
    beneficios: [
      "37 teclas tipo piano",
      "Melodías y sonidos incorporados",
      "Diseño divertido de cocodrilo",
      "Estimula el interés por la música"
    ],
    descripcion: "Un regalo que despierta la curiosidad musical de los más pequeños mientras juegan.",
    incluye: ["1 teclado infantil"]
  },
  {
    slug: "guitar-master-pro",
    dropiId: 4697,
    nombre: "Entrenador de acordes Guitar Master Pro",
    corto: "Aprende acordes de guitarra desde cero, en cualquier lugar.",
    categoria: "Juegos",
    destacado: false,
    precio: 79,
    precioPack: 139,
    imagenes: [
      CDN + "4697/1732115680Screenshot%202024-11-20%20at%2010.12.01.png",
      CDN + "4697/1732115680Screenshot%202024-11-20%20at%2010.12.58.png",
      CDN + "4697/1732115680Screenshot%202024-11-20%20at%2010.12.23.png",
      CDN + "4697/1732115680Screenshot%202024-11-20%20at%2010.13.11.png"
    ],
    beneficios: [
      "Ideal para principiantes",
      "Practica acordes y digitación",
      "Portátil",
      "Ayuda a avanzar más rápido"
    ],
    descripcion: "Practica los acordes mientras ves TV o en el transporte y llega a tu guitarra con los dedos listos.",
    incluye: ["1 entrenador de acordes"]
  },
  {
    slug: "pop-it-infla-globos",
    dropiId: 4574,
    nombre: "Pop It electrónico infla globos",
    corto: "200 niveles: si fallas, el globo se infla hasta reventar.",
    categoria: "Juegos",
    destacado: false,
    precio: 89,
    precioPack: 159,
    imagenes: [
      CDN + "4574/1731110398POP%20ITTTT.jpg",
      CDN + "4574/173111055971u1hCMQZCL._AC_SX522_.jpg",
      CDN + "4574/1731111877S22cb7511cc024139a825da546c8b73a6n.avif"
    ],
    beneficios: [
      "200 niveles de juego",
      "Música y sonidos",
      "Globo que se infla con cada error",
      "Para jugar en familia"
    ],
    descripcion: "El juego sensorial que hace reír a todos. Presiona los botones correctos o prepárate para el ¡pum!",
    incluye: ["1 juego Pop It infla globos"]
  },
  {
    slug: "libro-montessori-4-en-1",
    dropiId: 9432,
    nombre: "Libros Montessori mágicos 4 en 1",
    corto: "Practica letras, números y trazos con tinta que desaparece.",
    categoria: "Juegos",
    destacado: false,
    precio: 79,
    precioPack: 139,
    imagenes: [
      CDN + "9432/3765b4be-0ebb-441f-9067-c9a33da22ec4.jpg",
      CDN + "9432/2bb11070-1b22-45ca-b0ef-24e433b06cb9.jpg",
      CDN + "9432/6eb2c3b1-1b7b-4d5d-a41a-28a016d2e514.jpg"
    ],
    beneficios: [
      "4 cuadernos educativos",
      "Escritura, números y dibujo",
      "Reutilizables",
      "Desarrolla la motricidad fina"
    ],
    descripcion: "Los niños practican una y otra vez: la tinta se borra sola y el cuaderno queda listo para volver a empezar.",
    incluye: ["4 cuadernos", "Lapicero", "Repuestos de tinta"]
  },
  {
    slug: "rainbow-scratchbook",
    dropiId: 4557,
    nombre: "Libro de arte para raspar Rainbow",
    corto: "Raspa y descubre colores arcoíris en cada página.",
    categoria: "Juegos",
    destacado: false,
    precio: 79,
    precioPack: 139,
    imagenes: [
      CDN + "4557/1731033190817e07d9-ccc7-44e5-a917-8ed911a762e3.jpeg",
      CDN + "4557/1731033190Juego-de-papel-arco-ris-m-gico-para-raspar-para-ni-os-pintura-de-raspado-juguetes.jpg_.webp",
      CDN + "4557/17310331914ff194b2-1ab2-4bc7-b691-11e3e12076f6.jpeg"
    ],
    beneficios: [
      "Páginas negras con colores ocultos",
      "Incluye lápiz de madera",
      "Estimula la creatividad",
      "Sin desorden ni pintura"
    ],
    descripcion: "Una actividad creativa y tranquila para los niños, perfecta para viajes o tardes en casa.",
    incluye: ["1 libro de arte para raspar", "Lápiz de madera"]
  },
  {
    slug: "cubo-megaminx",
    dropiId: 2993,
    nombre: "Cubo mágico Megaminx",
    corto: "El reto de 12 caras para los fanáticos de los cubos.",
    categoria: "Juegos",
    destacado: false,
    precio: 49,
    precioPack: 85,
    imagenes: [CDN + "2993/1711156524M3.png"],
    beneficios: [
      "12 caras de colores",
      "Giro suave",
      "Incluye tutorial",
      "Ejercita la mente"
    ],
    descripcion: "Si ya dominas el cubo clásico, este es tu próximo desafío.",
    incluye: ["1 cubo Megaminx"]
  },
  {
    slug: "candado-con-alarma",
    dropiId: 9315,
    nombre: "Candado con alarma de 110 dB",
    corto: "Protege tu moto, bicicleta o portón con una alarma potente.",
    categoria: "Auto",
    destacado: false,
    precio: 79,
    precioPack: 139,
    imagenes: [
      CDN + "9315/img_6a71193361b888.50714397_0.jpg",
      CDN + "9315/7576a626-86a4-4578-9c32-a7f3e6cec352.jpg",
      CDN + "9315/d324bd3d-c4d5-4898-a11f-43bed5fd2b77.jpg"
    ],
    beneficios: [
      "Alarma de aproximadamente 110 dB",
      "Para motos, bicis, portones y cajas",
      "Acero resistente",
      "Incluye llaves"
    ],
    descripcion: "Si alguien intenta forzarlo, la alarma suena fuerte y espanta al ladrón. Tranquilidad para lo que más cuidas.",
    incluye: ["1 candado con alarma", "Llaves"]
  },
  {
    slug: "inflador-electrico-globos",
    dropiId: 2708,
    nombre: "Inflador eléctrico de globos",
    corto: "Infla decenas de globos en minutos para tus fiestas.",
    categoria: "Hogar",
    destacado: false,
    precio: 79,
    precioPack: 139,
    imagenes: [CDN + "2708/1710314781IMG-20220122-WA0024.jpg"],
    beneficios: [
      "Infla globos en segundos",
      "Dos boquillas",
      "Ideal para decoraciones",
      "Ahorra tiempo y aire"
    ],
    descripcion: "Decora cumpleaños y eventos sin cansarte. Coloca el globo en la boquilla y listo.",
    incluye: ["1 inflador eléctrico"]
  },
  {
    slug: "lentes-vision-hd-dia-noche",
    dropiId: 8823,
    nombre: "Lentes visión HD día y noche (2 pares)",
    corto: "Un par para el sol y otro para manejar de noche con menos deslumbramiento.",
    categoria: "Auto",
    destacado: false,
    precio: 59,
    precioPack: 99,
    imagenes: [
      CDN + "8823/17805827401%20(8).webp",
      CDN + "8823/17805827402%20(8).webp",
      CDN + "8823/17805827403%20(7).webp"
    ],
    beneficios: [
      "Par oscuro para el día",
      "Par amarillo para la noche",
      "Reducen el deslumbramiento",
      "Se colocan sobre tus lentes de medida"
    ],
    descripcion: "Maneja más cómodo de día y de noche. Los amarillos ayudan a reducir el reflejo de las luces de otros autos.",
    incluye: ["2 pares de lentes"]
  },
  /* ---------- CATÁLOGO INICIAL ---------- */
  {
    slug: "masajeador-de-pies",
    dropiId: 6464,
    nombre: "Masajeador de pies eléctrico",
    corto: "Alivio para tus pies después de un día largo, en casa o en la oficina.",
    categoria: "Bienestar",
    destacado: false,
    precio: 79,
    precioPack: 139,
    imagenes: [CDN + "6464/174655969771EqD0t9cHL._AC_SL1001_.jpg"],
    beneficios: [
      "19 niveles de intensidad y 8 modos de masaje",
      "Recargable, ligero y plegable: llévalo donde quieras",
      "Superficie de silicona antideslizante y resistente",
      "Ideal después del trabajo, el gimnasio o largas caminatas"
    ],
    descripcion: "Coloca los pies sobre la almohadilla y deja que trabaje por ti. Combina modos como amasado, presión y acupuntura para relajar los músculos y aliviar la tensión. Es delgado y enrollable, así que lo guardas en un cajón o lo llevas en la mochila.",
    incluye: ["1 masajeador de pies", "Cable de carga"]
  },
  {
    slug: "lampara-luna-3d",
    dropiId: 3787,
    nombre: "Lámpara Luna 3D flotante",
    corto: "Una luna realista que parece flotar sobre tu escritorio. Regalo perfecto.",
    categoria: "Hogar",
    destacado: true,
    precio: 79,
    precioPack: 139,
    imagenes: [
      CDN + "3787/1719845038Screenshot%202024-07-01%20at%2009.33.44.png",
      CDN + "3787/1719845038Screenshot%202024-07-01%20at%2009.43.49.png"
    ],
    beneficios: [
      "Diseño 3D que recrea la superficie de la luna",
      "Efecto flotante que sorprende a todos",
      "Luz suave y acogedora para relajarte",
      "Incluye interruptor de encendido"
    ],
    descripcion: "Ilumina tus noches de trabajo o estudio con una luz cálida y relajante. Su diseño realista y su efecto flotante la convierten en una pieza de decoración única para el escritorio, el velador o la sala. La luna mide 6 cm.",
    incluye: ["1 lámpara Luna 3D con base", "Interruptor"]
  },
  {
    slug: "lentes-audifonos-bluetooth",
    dropiId: 4153,
    nombre: "Lentes con audífonos Bluetooth",
    corto: "Música y llamadas sin audífonos, con protección UV para tus ojos.",
    categoria: "Tech",
    destacado: true,
    precio: 89,
    precioPack: 159,
    imagenes: [
      CDN + "4153/1724703172Screenshot%202024-08-26%20at%2015.07.41.png",
      CDN + "4153/1724703171Screenshot%202024-08-26%20at%2015.07.59.png",
      CDN + "4153/1724703171Screenshot%202024-08-26%20at%2015.12.15.png",
      CDN + "4153/1724703171Screenshot%202024-08-26%20at%2015.12.22.png"
    ],
    beneficios: [
      "Escucha música y contesta llamadas sin nada en los oídos",
      "Protección UV para tus ojos",
      "Se conectan a tu celular por Bluetooth",
      "Livianos y con estilo, para el día a día"
    ],
    descripcion: "Lo mejor de dos mundos: lentes de sol y audio Bluetooth en un solo accesorio. Perfectos para manejar bicicleta, salir a correr o caminar por la ciudad con tu música, sin cables ni audífonos.",
    incluye: ["1 par de lentes con audio Bluetooth", "Cable de carga"]
  },
  {
    slug: "aspiradora-portatil",
    dropiId: 3244,
    nombre: "Aspiradora portátil recargable",
    corto: "Limpia el auto, el escritorio y los rincones difíciles en segundos.",
    categoria: "Hogar",
    destacado: false,
    precio: 89,
    precioPack: 159,
    imagenes: [
      CDN + "3244/1757947818467502520_553292127319844_5647039745610121780_n.jpg",
      CDN + "3244/1757947818467284487_9335355326477657_2558981333757860780_n.jpg"
    ],
    beneficios: [
      "Recargable y sin cables",
      "Luz incorporada para ver esquinas y grietas",
      "Depósito transparente: sabes cuándo vaciarlo",
      "Compacta y ligera, se guarda en cualquier lugar"
    ],
    descripcion: "Elimina polvo, migas y tierra en poco tiempo. Es perfecta para los asientos del carro, el teclado, los estantes, los muebles y las alfombras. Su tamaño compacto la hace fácil de maniobrar y de guardar.",
    incluye: ["1 aspiradora portátil", "Cable de carga"]
  },
  {
    slug: "balanza-inteligente",
    dropiId: 8762,
    nombre: "Balanza inteligente con Bluetooth",
    corto: "Mucho más que tu peso: sigue tu progreso desde el celular.",
    categoria: "Bienestar",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [
      CDN + "8762/17801558511.webp",
      CDN + "8762/17801558512.webp",
      CDN + "8762/17801558513.webp"
    ],
    beneficios: [
      "Estima grasa corporal, masa muscular, agua, masa ósea y más",
      "Se sincroniza por Bluetooth con la app OKOK",
      "Soporta hasta 180 kg, con vidrio templado antideslizante",
      "Apagado automático para ahorrar batería"
    ],
    descripcion: "Pésate y mira tus métricas en el celular para seguir tu avance semana a semana. Sus sensores estiman la composición corporal y la app guarda tu historial. Las métricas son referenciales y no reemplazan una evaluación médica.",
    incluye: ["1 balanza inteligente", "Pilas"]
  },
  {
    slug: "drone-doble-camara",
    dropiId: 4385,
    nombre: "Drone E88 Pro con doble cámara",
    corto: "Graba tus viajes y reuniones desde el aire. Se controla con el celular.",
    categoria: "Tech",
    destacado: false,
    precio: 189,
    precioPack: 349,
    imagenes: [
      CDN + "4385/1728069664WhatsApp%20Image%202024-10-04%20at%2012.53.05%20PM.jpeg",
      CDN + "4385/174188831991ac14d0-f8f2-4cb1-9151-ebc910c159bb.jpg"
    ],
    beneficios: [
      "Dos cámaras: frontal e inferior, con video HD",
      "Control remoto incluido y app WiFi Cam para el celular",
      "Tiempo de vuelo de 15 a 20 minutos",
      "Hace giros de 360° para divertirte en el parque"
    ],
    descripcion: "Captura cumpleaños, paseos y viajes desde perspectivas únicas. Puedes volarlo con su control remoto o desde tu celular con la app WiFi Cam. Alcance de vuelo de 150 a 200 metros. Vuela siempre en espacios abiertos y respetando las normas de la DGAC.",
    incluye: ["1 drone", "Control remoto", "Batería"]
  },
  {
    slug: "masajeador-facial",
    dropiId: 4151,
    nombre: "Masajeador facial de microcorriente",
    corto: "Tu rutina de cuidado facial, con la tecnología de los tratamientos profesionales.",
    categoria: "Bienestar",
    destacado: false,
    precio: 89,
    precioPack: 159,
    imagenes: [
      CDN + "4151/1724548172Screenshot%202024-08-24%20at%2020.07.37.png",
      CDN + "4151/1724548172Screenshot%202024-08-24%20at%2020.08.54.png",
      CDN + "4151/1724548172Screenshot%202024-08-24%20at%2020.08.21.png"
    ],
    beneficios: [
      "Microcorrientes suaves que estimulan los músculos del rostro",
      "Ayuda a tonificar y a dar una sensación de piel más firme",
      "Activa la circulación para un cutis más luminoso",
      "Compacto y fácil de usar en casa"
    ],
    descripcion: "Un complemento para tu rutina de cuidado facial inspirado en la tecnología de los tratamientos profesionales. Úsalo unos minutos al día sobre la piel limpia. Los resultados varían según cada persona.",
    incluye: ["1 masajeador facial", "Cable de carga"]
  },
  {
    slug: "corrector-de-postura",
    dropiId: 1587,
    nombre: "Corrector de postura",
    corto: "Mantén la espalda recta mientras trabajas o estudias. Va debajo de la ropa.",
    categoria: "Bienestar",
    destacado: false,
    precio: 69,
    precioPack: 119,
    imagenes: [
      CDN + "1587/1706212907Captura%20de%20pantalla%202023-10-02%20123233-550x550w.jpg",
      CDN + "1587/1706212907WhatsApp%20Image%202023-01-31%20at%2011.09.56%20AM%20(5).jpeg",
      CDN + "1587/1706212907Captura%20de%20pantalla%202022-07-28%20114836-1000x1000w.jpg"
    ],
    beneficios: [
      "Diseño ergonómico que no limita tus movimientos",
      "Correas ajustables a distintas tallas",
      "Discreto: se usa debajo de la ropa",
      "Se pone y se ajusta en segundos"
    ],
    descripcion: "Si pasas horas frente a la computadora, este corrector te recuerda mantener una buena postura. Sus correas ajustables se adaptan a tu cuerpo y es tan delgado que nadie lo nota bajo la ropa.",
    incluye: ["1 corrector de postura ajustable"]
  },
  {
    slug: "luces-led-auto",
    dropiId: 1523,
    nombre: "Luces LED para el interior del auto",
    corto: "Dale estilo y color a tu carro con 7 colores y control remoto.",
    categoria: "Auto",
    destacado: false,
    precio: 89,
    precioPack: 159,
    imagenes: [
      CDN + "1523/17059417881681315648.jpg",
      CDN + "1523/1705941788WhatsApp%20Image%202023-07-14%20at%2012.45.56%20PM.jpeg",
      CDN + "1523/1705941788WhatsApp%20Image%202023-07-14%20at%2012.45.43%20PM.jpeg"
    ],
    beneficios: [
      "7 colores que cambias con el control remoto",
      "4 tiras LED de 13.3 cm, colócalas donde quieras",
      "Cables de instalación incluidos",
      "Funcionan de 5 a 12 V"
    ],
    descripcion: "Crea el ambiente que quieras dentro de tu auto, de día o de noche. El set viene con todo lo necesario para instalarlo tú mismo y cambiar de color cuando quieras.",
    incluye: ["4 tiras de luces LED", "1 control remoto", "Cables de instalación y accesorios", "Manual de instrucciones"]
  },
  {
    slug: "pelota-interactiva-gatos",
    dropiId: 6519,
    nombre: "Pelota interactiva para gatos",
    corto: "Se mueve sola para que tu gato juegue y se ejercite aunque no estés.",
    categoria: "Mascotas",
    destacado: false,
    precio: 79,
    precioPack: 129,
    imagenes: [CDN + "6519/1744049868WhatsApp%20Image%202025-04-07%20at%201.17.27%20PM.jpeg"],
    beneficios: [
      "Movimiento automático y aleatorio que despierta su instinto cazador",
      "Soga incorporada para más formas de jugar",
      "Material resistente a arañazos y mordidas",
      "Ayuda a prevenir el aburrimiento y el estrés"
    ],
    descripcion: "Un juguete inteligente para gatos curiosos. Se desplaza solo y cambia de dirección para mantener a tu gato activo y entretenido durante el día.",
    incluye: ["1 pelota interactiva con soga"]
  }
];
