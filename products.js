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
  /* ---------- NUEVOS (lote 3: tendencia, skincare y moda) ---------- */
  {
    slug: "leggins-termico-1586",
    dropiId: 1586,
    nombre: "Leggins termico",
    corto: "Estos exclusivos Leggins térmicos son perfectos para aquellas mujeres que sufren el clima frío, y están…",
    categoria: "Moda",
    destacado: false,
    precio: 79,
    precioPack: 149,
    imagenes: [
      CDN + "1586/1706205190596043209_max.JPG",
      CDN + "1586/1770390998IMAGEN1.jpeg",
      CDN + "1586/1770390998IMAGEN%203.jpeg"
    ],
    beneficios: [
      "¿QUIERES MANTENERTE CALIENTE Y CON ESTILO?",
      "“Un impulso de confianza y comodidad que nunca antes habías experimentado”",
      "“Con el Leggins térmico lucirás una figura espectacular sin pasar frío”",
      "Materiales: 95% Poliéster y 5% Spandex"
    ],
    descripcion: "Estos exclusivos Leggins térmicos son perfectos para aquellas mujeres que sufren el clima frío, y están forrados con lana de cordero suave para mantenerte abrigada y cómoda durante toda la temporada de frío. LA CAPA EXTERIOR está hecha de un material ELÁSTICO súper cómodo que te permitirá moverte libremente y que…",
    incluye: ["1 Leggins termico"]
  },
  {
    slug: "medias-acolchadas-x-3-1843",
    dropiId: 1843,
    nombre: "Medias Acolchadas x 3",
    corto: "Proporciona una agradable amortiguación para tu antepié mejorando la distribución de la presión.",
    categoria: "Moda",
    destacado: false,
    precio: 49,
    precioPack: 89,
    imagenes: [
      CDN + "1843/1707633056Screenshot%202024-02-11%20at%2001.30.17.png",
      CDN + "1843/1770385797Captura%20de%20pantalla%202026-02-06%20084931.png",
      CDN + "1843/1710484102Screenshot%202024-03-15%20at%2001.28.16.png"
    ],
    beneficios: [
      "3 pares en color beige y negro",
      "Medias Acolchadas (Pack x3)",
      "¡Ideal para esos zapatos incómodos como tacones!"
    ],
    descripcion: "Proporciona una agradable amortiguación para tu antepié mejorando la distribución de la presión. Material suave y cómodo: Hecho de material de nylon duradero, elástico y ligero de calidad, proporciona distribución de peso mientras estás de pie, confiabilidad en toda tu pie, por largos períodos para una mejor comodid",
    incluye: ["1 Medias Acolchadas x 3"]
  },
  {
    slug: "medias-10-pc-kawaii-3219",
    dropiId: 3219,
    nombre: "Medias 10 PC kawaii",
    corto: "Medias 10 PC kawaii. Producto seleccionado por VISUAL Store.",
    categoria: "Moda",
    destacado: false,
    precio: 49,
    precioPack: 89,
    imagenes: [
      CDN + "3219/17128829181000103894.jpg",
      CDN + "3219/17128829181000103879.jpg"
    ],
    beneficios: [
      "Medias kawaii",
      "10 pares"
    ],
    descripcion: "Medias 10 PC kawaii. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Medias 10 PC kawaii"]
  },
  {
    slug: "vestido-faja-moldeador-v3000l-3428",
    dropiId: 3428,
    nombre: "Vestido faja moldeador v3000l",
    corto: "nuestro produccto es innovador ya que producimos hace mas de 15 años Fajas modernas , no fajas convencionales…",
    categoria: "Moda",
    destacado: false,
    precio: 249,
    precioPack: 449,
    imagenes: [
      CDN + "3428/1720826586P%20V3000.jfif",
      CDN + "3428/1720826586171504086382a57c75-60d0-4873-b65d-97cb35590452.jpg",
      CDN + "3428/1720826586V3000%20D.jfif"
    ],
    beneficios: [
      "SOMOS FABRICANTES Y EXPORTADORES ESTAMOS ESTAMOS EN VARIOS PAISES",
      "VESTIDO FAJA REDUCTOR",
      "FOTO 1",
      "educe al instante 7cm de cintura"
    ],
    descripcion: "nuestro produccto es innovador ya que producimos hace mas de 15 años Fajas modernas , no fajas convencionales , haciendo que puedas tener una blusao polera con Faja Incluida y con muchos benefcios tallas dedes XS hasta X Realza el busto, debido a que la faja llega debajo del busto",
    incluye: ["1 Vestido faja moldeador v3000l"]
  },
  {
    slug: "traje-de-bano-con-faja-rbtc3003-3435",
    dropiId: 3435,
    nombre: "Traje de baño con faja rbtc3003",
    corto: "nuestro produccto es innovador ya que producimos hace mas de 15 años Fajas modernas , no fajas convencionales…",
    categoria: "Moda",
    destacado: false,
    precio: 249,
    precioPack: 449,
    imagenes: [
      CDN + "3435/1720889441563ceeeb-7aa8-4f5c-ae7d-869f03da722b.jfif",
      CDN + "3435/1720889441171504660287c777b7-0f72-4723-ad08-45ecc64c70ef.jpg",
      CDN + "3435/172088944117150466023b285f43-5d0b-4a59-abdb-676222a6aa16.jpg"
    ],
    beneficios: [
      "TRAJE DE BAÑO CON FAJA REDUCTOR",
      "FOTO 1",
      "Reduce al instante 7cm de cintura",
      "Moldea la figura"
    ],
    descripcion: "nuestro produccto es innovador ya que producimos hace mas de 15 años Fajas modernas , no fajas convencionales , haciendo que puedas tener una blusao polera con Faja Incluida y con muchos benefcios tallas dedes XS hasta X Realza el busto, debido a que la faja llega debajo del busto",
    incluye: ["1 Traje de baño con faja rbtc3003"]
  },
  {
    slug: "traje-de-bano-con-faja-rbtc2001-3437",
    dropiId: 3437,
    nombre: "Traje de baño con faja rbtc2001",
    corto: "nuestro produccto es innovador ya que producimos hace mas de 15 años Fajas modernas , no fajas convencionales…",
    categoria: "Moda",
    destacado: false,
    precio: 249,
    precioPack: 449,
    imagenes: [
      CDN + "3437/17208893851941bd61-4646-4780-8106-ae1dbcf9415c.jfif",
      CDN + "3437/173843017080.jpg",
      CDN + "3437/173843016979.jpg"
    ],
    beneficios: [
      "TRAJES DE BAÑO CON FAJA REDUCTORES",
      "FOTO 1",
      "Reduce al instante 7cm de cintura",
      "Moldea la figura"
    ],
    descripcion: "nuestro produccto es innovador ya que producimos hace mas de 15 años Fajas modernas , no fajas convencionales , haciendo que puedas tener una blusao polera con Faja Incluida y con muchos benefcios tallas dedes XS hasta X Realza el busto, debido a que la faja llega debajo del busto",
    incluye: ["1 Traje de baño con faja rbtc2001"]
  },
  {
    slug: "body-faja-moldeador-9072-3440",
    dropiId: 3440,
    nombre: "Body faja moldeador 9072",
    corto: "nuestro produccto es innovador ya que producimos hace mas de 15 años Fajas modernas , no fajas convencionales…",
    categoria: "Moda",
    destacado: false,
    precio: 219,
    precioPack: 399,
    imagenes: [
      CDN + "3440/172088914921e09c77-a655-4ca5-abc0-1050e90a1899.jfif",
      CDN + "3440/172088914917150616759834aaad-ae06-4b69-bdd3-b086c946af08.jpg",
      CDN + "3440/1720889149TABLA%20DE%20MEDIDAS.jpg"
    ],
    beneficios: [
      "SOMOS FABRICANTES Y EXPORTADORES ESTAMOS ESTAMOS EN VARIOS PAISES",
      "BODYS FAJA REDUCTORES",
      "FOTO 1",
      "Reduce al instante 7cm de cintura"
    ],
    descripcion: "nuestro produccto es innovador ya que producimos hace mas de 15 años Fajas modernas , no fajas convencionales , haciendo que puedas tener una blusao polera con Faja Incluida y con muchos benefcios tallas dedes XS hasta X Realza el busto, debido a que la faja llega debajo del busto",
    incluye: ["1 Body faja moldeador 9072"]
  },
  {
    slug: "faja-interna-para-escote-profundo-fi9022-3441",
    dropiId: 3441,
    nombre: "Faja interna para escote profundo fi9022",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 229,
    precioPack: 419,
    imagenes: [
      CDN + "3441/1720889311TABLA%20MEDIAS%20FAJ%20INTERNA.jfif",
      CDN + "3441/172088931139e43625-38fc-44bf-84b0-f37ebece01d2.jfif",
      CDN + "3441/1720889311171506212458e462f8-de9f-4b32-993d-8ce9c090373f.jpg"
    ],
    beneficios: [
      "SOMOS FABRICANTES Y EXPORTADORES ESTAMOS ESTAMOS EN VARIOS PAISES",
      "FAJAS INTERNAS PARA ESCOTE PROFUNDO",
      "FOTO 1",
      "educe al instante 7cm de cintura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Faja interna para escote profundo fi9022"]
  },
  {
    slug: "faja-interna-con-aro-y-copa-fi9021-3442",
    dropiId: 3442,
    nombre: "Faja interna con aro y copa fi9021",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 259,
    precioPack: 469,
    imagenes: [
      CDN + "3442/17208892462f29d045-500b-47e5-b72d-94df40eaac8f.jfif",
      CDN + "3442/1720889246FI9021.jfif",
      CDN + "3442/1720889246TABLA%20MEDIAS%20FAJ%20INTERNA.jfif"
    ],
    beneficios: [
      "SOMOS FABRICANTES Y EXPORTADORES ESTAMOS ESTAMOS EN VARIOS PAISES",
      "FAJAS INTERNAS CON COPA Y ARO",
      "FOTO 1",
      "educe al instante 7cm de cintura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Faja interna con aro y copa fi9021"]
  },
  {
    slug: "calzado-blanco-para-hombre-3605",
    dropiId: 3605,
    nombre: "Calzado blanco para hombre",
    corto: "Calzado blanco para hombre.",
    categoria: "Moda",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [CDN + "3605/1717182420cf938574-d7ef-4192-914a-57ab11c455f5.jpeg"],
    beneficios: [
      "Diseño moderno y cómodo",
      "Ideal para el día a día",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Calzado blanco para hombre. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Calzado blanco para hombre"]
  },
  {
    slug: "body-deluxe-3610",
    dropiId: 3610,
    nombre: "Body deluxe",
    corto: "[Tela elástica de alta calidad] Este moldeador de cuerpo está hecho de tela ligera y transpirable de alta…",
    categoria: "Moda",
    destacado: false,
    precio: 59,
    precioPack: 109,
    imagenes: [
      CDN + "3610/1717250926Bodysuit-Shapewear-Women-Full-Body-Shaper-Tummy-Control-Slimming-Sheath-Butt-Lifter-Push-Up-Thigh-Slimmer.jpg_350x350xz.jpg_.webp",
      CDN + "3610/1717250926BODY.jpg"
    ],
    beneficios: [
      "Diseño moderno y cómodo",
      "Ideal para el día a día",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "[Tela elástica de alta calidad] Este moldeador de cuerpo está hecho de tela ligera y transpirable de alta calidad, que no es congestionada, no es fácil de deformar y tiene un diseño ajustado que es cómodo de usar y no apretado. [Modifique la forma del pecho] La almohadilla para el pecho es liviana y delgada, tiene una…",
    incluye: ["1 Body deluxe"]
  },
  {
    slug: "traje-de-bano-faja-invisible-rbtc3500-3764",
    dropiId: 3764,
    nombre: "Traje de baño faja invisible rbtc3500",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 249,
    precioPack: 449,
    imagenes: [
      CDN + "3764/1720826399P%20RBTC3500.jfif",
      CDN + "3764/1720826400TABLA%20DE%20MEDIDAS%20RBTC.jpg",
      CDN + "3764/1720826400171946836346153072-8443-4ae2-bff6-75c3148eee4e.jpg"
    ],
    beneficios: [
      "Somos Fabricantes Y Exportadores Estamos Estamos En Varios Paises",
      "TRAJE DE BAÑO CON FAJA INVISIBLE",
      "FOTO 1",
      "educe al instante 7cm de cintura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Traje de baño faja invisible rbtc3500"]
  },
  {
    slug: "body-peru-mc-blanco-faja-moldeador-3778",
    dropiId: 3778,
    nombre: "Body peru mc blanco faja moldeador",
    corto: "Nuestro producto es innovador ya que producimos hace mas de 15 años Fajas modernas , no fajas convencionales…",
    categoria: "Moda",
    destacado: false,
    precio: 219,
    precioPack: 399,
    imagenes: [
      CDN + "3778/1720825670TABLA%20DE%20MEDIDAS.jpg",
      CDN + "3778/1774623823TABLA%20DE%20MEDIDAS.jpg",
      CDN + "3778/1720825670P%202%20PERU%20MC%20BLANCO.jfif"
    ],
    beneficios: [
      "SOMOS FABRICANTES Y EXPORTADORES ESTAMOS EN VARIOS PAISES",
      "REVISAR LA TABLA DE TALLAS (NO HAY CAMBIO NI DEVOLUCION)",
      "BODYS FAJA REDUCTORES",
      "Reduce al instante 7cm de cintura"
    ],
    descripcion: "Nuestro producto es innovador ya que producimos hace mas de 15 años Fajas modernas , no fajas convencionales , haciendo que puedas tener una blusa polera con Faja Incluida y con muchos beneficios. Realza el busto, debido a que la faja llega debajo del busto",
    incluye: ["1 Body peru mc blanco faja moldeador"]
  },
  {
    slug: "body-peru-mc-negro-faja-moldeador-3779",
    dropiId: 3779,
    nombre: "Body peru mc negro faja moldeador",
    corto: "Nuestro producto es innovador ya que producimos hace mas de 15 años Fajas modernas , no fajas convencionales…",
    categoria: "Moda",
    destacado: false,
    precio: 219,
    precioPack: 399,
    imagenes: [
      CDN + "3779/1720826070P%20PERU%20M%20C%20NEGRO.jfif",
      CDN + "3779/1720826070PERU%20MC%20NEGRO%20E.jfif",
      CDN + "3779/1720826070TABLA%20DE%20MEDIDAS.jpg"
    ],
    beneficios: [
      "SOMOS FABRICANTES Y EXPORTADORES ESTAMOS EN VARIOS PAISES",
      "REVISAR LA TABLA DE TALLAS (NO HAY CAMBIO NI DEVOLUCION)",
      "BODYS FAJA REDUCTORES",
      "Reduce al instante 7cm de cintura"
    ],
    descripcion: "Nuestro producto es innovador ya que producimos hace mas de 15 años Fajas modernas , no fajas convencionales , haciendo que puedas tener una blusa polera con Faja Incluida y con muchos beneficios. Realza el busto, debido a que la faja llega debajo del busto",
    incluye: ["1 Body peru mc negro faja moldeador"]
  },
  {
    slug: "traje-de-bano-faja-invisible-rbt4600-5913",
    dropiId: 5913,
    nombre: "Traje de baño faja invisible rbt4600",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 209,
    precioPack: 379,
    imagenes: [
      CDN + "5913/173833628621.jpg",
      CDN + "5913/173833628623.jpg",
      CDN + "5913/173833628622.jpg"
    ],
    beneficios: [
      "Somos Fabricantes Y Exportadores Estamos Estamos En Varios Paises",
      "TRAJE DE BAÑO CON FAJA INVISIBLE",
      "educe al instante 7cm de cintura",
      "Moldea la figura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Traje de baño faja invisible rbt4600"]
  },
  {
    slug: "traje-de-bano-faja-invisible-rbtc1002-5918",
    dropiId: 5918,
    nombre: "Traje de baño faja invisible rbtc1002",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 209,
    precioPack: 379,
    imagenes: [
      CDN + "5918/173834570829.jpg",
      CDN + "5918/173834570832.jpg",
      CDN + "5918/173834570830.jpg"
    ],
    beneficios: [
      "Somos Fabricantes Y Exportadores Estamos Estamos En Varios Paises",
      "TRAJE DE BAÑO CON FAJA INVISIBLE",
      "educe al instante 7cm de cintura",
      "Moldea la figura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Traje de baño faja invisible rbtc1002"]
  },
  {
    slug: "traje-de-bano-faja-invisible-rbtc1003-5928",
    dropiId: 5928,
    nombre: "Traje de baño faja invisible rbtc1003",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 209,
    precioPack: 379,
    imagenes: [
      CDN + "5928/173835518844.jpg",
      CDN + "5928/173835518846.jpg",
      CDN + "5928/173835518845.jpg"
    ],
    beneficios: [
      "Somos Fabricantes Y Exportadores Estamos Estamos En Varios Paises",
      "TRAJE DE BAÑO CON FAJA INVISIBLE",
      "educe al instante 7cm de cintura",
      "Moldea la figura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Traje de baño faja invisible rbtc1003"]
  },
  {
    slug: "traje-de-bano-faja-invisible-rbtc1005-5929",
    dropiId: 5929,
    nombre: "Traje de baño faja invisible rbtc1005",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 209,
    precioPack: 379,
    imagenes: [
      CDN + "5929/173835597847.jpg",
      CDN + "5929/173835597849.jpg",
      CDN + "5929/173835597848.jpg"
    ],
    beneficios: [
      "Somos Fabricantes Y Exportadores Estamos Estamos En Varios Paises",
      "TRAJE DE BAÑO CON FAJA INVISIBLE",
      "educe al instante 7cm de cintura",
      "Moldea la figura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Traje de baño faja invisible rbtc1005"]
  },
  {
    slug: "traje-de-bano-faja-invisible-rbtc1006-5930",
    dropiId: 5930,
    nombre: "Traje de baño faja invisible rbtc1006",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 209,
    precioPack: 379,
    imagenes: [
      CDN + "5930/173835674850.jpg",
      CDN + "5930/1738356748TRAJE%20DE%20BA%C3%91O.jpg",
      CDN + "5930/173835674851.jpg"
    ],
    beneficios: [
      "Somos Fabricantes Y Exportadores Estamos Estamos En Varios Paises",
      "TRAJE DE BAÑO CON FAJA INVISIBLE",
      "educe al instante 7cm de cintura",
      "Moldea la figura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Traje de baño faja invisible rbtc1006"]
  },
  {
    slug: "traje-de-bano-faja-invisible-rbtc2001-5936",
    dropiId: 5936,
    nombre: "Traje de baño faja invisible rbtc2001",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 209,
    precioPack: 379,
    imagenes: [
      CDN + "5936/173836382370.jpg",
      CDN + "5936/173836382373.jpg",
      CDN + "5936/173836382371.jpg"
    ],
    beneficios: [
      "Somos Fabricantes Y Exportadores Estamos Estamos En Varios Paises",
      "TRAJE DE BAÑO CON FAJA INVISIBLE",
      "educe al instante 7cm de cintura",
      "Moldea la figura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Traje de baño faja invisible rbtc2001"]
  },
  {
    slug: "traje-de-bano-faja-invisible-rbtc2002-5954",
    dropiId: 5954,
    nombre: "Traje de baño faja invisible rbtc2002",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 209,
    precioPack: 379,
    imagenes: [
      CDN + "5954/173843383690.jpg",
      CDN + "5954/173843383691.jpg",
      CDN + "5954/173843383693.jpg"
    ],
    beneficios: [
      "Somos Fabricantes Y Exportadores Estamos Estamos En Varios Paises",
      "TRAJE DE BAÑO CON FAJA INVISIBLE",
      "educe al instante 7cm de cintura",
      "Moldea la figura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Traje de baño faja invisible rbtc2002"]
  },
  {
    slug: "traje-de-bano-faja-invisible-rbtc9060-6009",
    dropiId: 6009,
    nombre: "Traje de baño faja invisible rbtc9060",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 209,
    precioPack: 379,
    imagenes: [
      CDN + "6009/1738786420113.jpg",
      CDN + "6009/1738786420116.jpg",
      CDN + "6009/1738786420114.jpg"
    ],
    beneficios: [
      "Somos Fabricantes Y Exportadores Estamos Estamos En Varios Paises",
      "TRAJE DE BAÑO CON FAJA INVISIBLE",
      "educe al instante 7cm de cintura",
      "Moldea la figura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Traje de baño faja invisible rbtc9060"]
  },
  {
    slug: "traje-de-bano-faja-invisible-rbtc9050sb-6012",
    dropiId: 6012,
    nombre: "Traje de baño faja invisible rbtc9050sb",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 209,
    precioPack: 379,
    imagenes: [
      CDN + "6012/1738853994117.jpg",
      CDN + "6012/1738853994TRAJE%20DE%20BA%C3%91O%202.jpg",
      CDN + "6012/1738853994118.jpg"
    ],
    beneficios: [
      "Somos Fabricantes Y Exportadores Estamos Estamos En Varios Paises",
      "TRAJE DE BAÑO CON FAJA INVISIBLE",
      "educe al instante 7cm de cintura",
      "Moldea la figura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Traje de baño faja invisible rbtc9050sb"]
  },
  {
    slug: "traje-de-bano-faja-invisible-rbtc3006sht-6013",
    dropiId: 6013,
    nombre: "Traje de baño faja invisible rbtc3006sht",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 209,
    precioPack: 379,
    imagenes: [
      CDN + "6013/1738854847121.jpg",
      CDN + "6013/1738854846124.jpg",
      CDN + "6013/1738854846123.jpg"
    ],
    beneficios: [
      "Somos Fabricantes Y Exportadores Estamos Estamos En Varios Paises",
      "TRAJE DE BAÑO CON FAJA INVISIBLE",
      "educe al instante 7cm de cintura",
      "Moldea la figura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Traje de baño faja invisible rbtc3006sht"]
  },
  {
    slug: "traje-de-bano-faja-invisible-rbtc7030-6014",
    dropiId: 6014,
    nombre: "Traje de baño faja invisible rbtc7030",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 209,
    precioPack: 379,
    imagenes: [
      CDN + "6014/1738856995125.jpg",
      CDN + "6014/1738856995127.jpg",
      CDN + "6014/1738856995126.jpg"
    ],
    beneficios: [
      "Somos Fabricantes Y Exportadores Estamos Estamos En Varios Paises",
      "TRAJE DE BAÑO CON FAJA INVISIBLE",
      "educe al instante 7cm de cintura",
      "Moldea la figura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Traje de baño faja invisible rbtc7030"]
  },
  {
    slug: "traje-de-bano-faja-invisible-rbtc2011h-6015",
    dropiId: 6015,
    nombre: "Traje de baño faja invisible rbtc2011h",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 209,
    precioPack: 379,
    imagenes: [
      CDN + "6015/1738858154130.jpg",
      CDN + "6015/1738858154129.jpg",
      CDN + "6015/1738858154132.jpg"
    ],
    beneficios: [
      "Somos Fabricantes Y Exportadores Estamos Estamos En Varios Paises",
      "TRAJE DE BAÑO CON FAJA INVISIBLE",
      "educe al instante 7cm de cintura",
      "Moldea la figura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Traje de baño faja invisible rbtc2011h"]
  },
  {
    slug: "traje-de-bano-faja-invisible-rbtc1009-6016",
    dropiId: 6016,
    nombre: "Traje de baño faja invisible rbtc1009",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 209,
    precioPack: 379,
    imagenes: [
      CDN + "6016/1738858823133.jpg",
      CDN + "6016/1738858822135.jpg",
      CDN + "6016/1738858822134.jpg"
    ],
    beneficios: [
      "Somos Fabricantes Y Exportadores Estamos Estamos En Varios Paises",
      "TRAJE DE BAÑO CON FAJA INVISIBLE",
      "educe al instante 7cm de cintura",
      "Moldea la figura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Traje de baño faja invisible rbtc1009"]
  },
  {
    slug: "traje-de-bano-faja-invisible-rbtc4400-6017",
    dropiId: 6017,
    nombre: "Traje de baño faja invisible rbtc4400",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 209,
    precioPack: 379,
    imagenes: [
      CDN + "6017/1738860108139.jpg",
      CDN + "6017/1738860108137.jpg",
      CDN + "6017/1738860108140.jpg"
    ],
    beneficios: [
      "Somos Fabricantes Y Exportadores Estamos Estamos En Varios Paises",
      "TRAJE DE BAÑO CON FAJA INVISIBLE",
      "educe al instante 7cm de cintura",
      "Moldea la figura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Traje de baño faja invisible rbtc4400"]
  },
  {
    slug: "traje-de-bano-faja-invisible-rbtc3900-6020",
    dropiId: 6020,
    nombre: "Traje de baño faja invisible rbtc3900",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 209,
    precioPack: 379,
    imagenes: [
      CDN + "6020/1738864404145.jpg",
      CDN + "6020/1738864404147.jpg",
      CDN + "6020/1738864404TRAJE%20DE%20BA%C3%91O.jpg"
    ],
    beneficios: [
      "Somos Fabricantes Y Exportadores Estamos Estamos En Varios Paises",
      "TRAJE DE BAÑO CON FAJA INVISIBLE",
      "FOTO 1",
      "educe al instante 7cm de cintura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Traje de baño faja invisible rbtc3900"]
  },
  {
    slug: "traje-de-bano-faja-invisible-rbtc4000-6021",
    dropiId: 6021,
    nombre: "Traje de baño faja invisible rbtc4000",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 209,
    precioPack: 379,
    imagenes: [
      CDN + "6021/1738869688149.jpg",
      CDN + "6021/1738869688151.jpg",
      CDN + "6021/1738869688150.jpg"
    ],
    beneficios: [
      "Somos Fabricantes Y Exportadores Estamos Estamos En Varios Paises",
      "TRAJE DE BAÑO CON FAJA INVISIBLE",
      "FOTO 1",
      "educe al instante 7cm de cintura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Traje de baño faja invisible rbtc4000"]
  },
  {
    slug: "traje-de-bano-faja-invisible-rbtc9003-6023",
    dropiId: 6023,
    nombre: "Traje de baño faja invisible rbtc9003",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 209,
    precioPack: 379,
    imagenes: [
      CDN + "6023/1738879146156.jpg",
      CDN + "6023/1738879146157.jpg",
      CDN + "6023/1738879146158.jpg"
    ],
    beneficios: [
      "Somos Fabricantes Y Exportadores Estamos Estamos En Varios Paises",
      "TRAJE DE BAÑO CON FAJA INVISIBLE",
      "FOTO 1",
      "educe al instante 7cm de cintura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Traje de baño faja invisible rbtc9003"]
  },
  {
    slug: "traje-de-bano-faja-invisible-rbtc9095-6024",
    dropiId: 6024,
    nombre: "Traje de baño faja invisible rbtc9095",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 209,
    precioPack: 379,
    imagenes: [
      CDN + "6024/1738880712160.jpg",
      CDN + "6024/1738880712162.jpg",
      CDN + "6024/1738880712161.jpg"
    ],
    beneficios: [
      "Somos Fabricantes Y Exportadores Estamos Estamos En Varios Paises",
      "TRAJE DE BAÑO CON FAJA INVISIBLE",
      "FOTO 1",
      "educe al instante 7cm de cintura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Traje de baño faja invisible rbtc9095"]
  },
  {
    slug: "traje-de-bano-faja-invisible-rbtc3800-6028",
    dropiId: 6028,
    nombre: "Traje de baño faja invisible rbtc3800",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 209,
    precioPack: 379,
    imagenes: [
      CDN + "6028/1738884674172.jpg",
      CDN + "6028/1738884674TRAJE%20DE%20BA%C3%91O.jpg",
      CDN + "6028/1738884674174.jpg"
    ],
    beneficios: [
      "Somos Fabricantes Y Exportadores Estamos Estamos En Varios Paises",
      "TRAJE DE BAÑO CON FAJA INVISIBLE",
      "FOTO 1",
      "educe al instante 7cm de cintura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Traje de baño faja invisible rbtc3800"]
  },
  {
    slug: "ropa-de-bano-con-faja-basic-rbtc6400-9604",
    dropiId: 9604,
    nombre: "Ropa de baño con faja basic rbtc6400",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 249,
    precioPack: 449,
    imagenes: [
      CDN + "9604/img_6aa3313ea07a95.17188235_0.png",
      CDN + "9604/img_6aa3313ee7b776.54791704_2.png",
      CDN + "9604/img_6aa3313ecb1d91.85095215_1.png"
    ],
    beneficios: [
      "Somos Fabricantes Y Exportadores Estamos Estamos En Varios Paises",
      "educe al instante 7cm de cintura",
      "Moldea la figura",
      "Corrige la postura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Ropa de baño con faja basic rbtc6400"]
  },
  {
    slug: "ropa-de-bano-con-faja-casual-rbtc1012-9607",
    dropiId: 9607,
    nombre: "Ropa de baño con faja casual rbtc1012",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 259,
    precioPack: 469,
    imagenes: [
      CDN + "9607/img_6aa33148f403d0.82268764_0.png",
      CDN + "9607/img_6aa331493f6010.07090501_2.png",
      CDN + "9607/img_6aa3314921c8b7.80002397_1.png"
    ],
    beneficios: [
      "Somos Fabricantes Y Exportadores Estamos Estamos En Varios Paises",
      "educe al instante 7cm de cintura",
      "Moldea la figura",
      "Corrige la postura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Ropa de baño con faja casual rbtc1012"]
  },
  {
    slug: "ropa-de-bano-con-faja-casual-rbtc3005-9609",
    dropiId: 9609,
    nombre: "Ropa de baño con faja casual rbtc3005",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 259,
    precioPack: 469,
    imagenes: [
      CDN + "9609/img_6aa33150770048.71474465_0.png",
      CDN + "9609/img_6aa331509a73b7.21148463_1.png",
      CDN + "9609/img_6aa33150b1f709.77632320_2.png"
    ],
    beneficios: [
      "Somos Fabricantes Y Exportadores Estamos Estamos En Varios Paises",
      "educe al instante 7cm de cintura",
      "Moldea la figura",
      "Corrige la postura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Ropa de baño con faja casual rbtc3005"]
  },
  {
    slug: "ropa-de-bano-con-faja-casual-rbtc5100-9610",
    dropiId: 9610,
    nombre: "Ropa de baño con faja casual rbtc5100",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 259,
    precioPack: 469,
    imagenes: [
      CDN + "9610/img_6aa33153db1935.61764670_0.png",
      CDN + "9610/img_6aa331540e1246.19959978_1.png",
      CDN + "9610/img_6aa33154319d28.48321622_2.png"
    ],
    beneficios: [
      "Somos Fabricantes Y Exportadores Estamos Estamos En Varios Paises",
      "educe al instante 7cm de cintura",
      "Moldea la figura",
      "Corrige la postura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Ropa de baño con faja casual rbtc5100"]
  },
  {
    slug: "ropa-de-bano-con-faja-casual-rbtc9030-9613",
    dropiId: 9613,
    nombre: "Ropa de baño con faja casual rbtc9030",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 259,
    precioPack: 469,
    imagenes: [
      CDN + "9613/img_6aa331610f12c2.17501867_0.png",
      CDN + "9613/img_6aa331614db347.29659498_2.png",
      CDN + "9613/img_6aa331612fbae0.35729003_1.png"
    ],
    beneficios: [
      "Somos Fabricantes Y Exportadores Estamos Estamos En Varios Paises",
      "educe al instante 7cm de cintura",
      "Moldea la figura",
      "Corrige la postura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Ropa de baño con faja casual rbtc9030"]
  },
  {
    slug: "ropa-de-bano-con-faja-casual-rbtc9080-9616",
    dropiId: 9616,
    nombre: "Ropa de baño con faja casual rbtc9080",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 259,
    precioPack: 469,
    imagenes: [
      CDN + "9616/img_6aa3316becff00.92298429_0.png",
      CDN + "9616/img_6aa3316c1c7537.59164133_1.png"
    ],
    beneficios: [
      "Somos Fabricantes Y Exportadores Estamos Estamos En Varios Paises",
      "educe al instante 7cm de cintura",
      "Moldea la figura",
      "Corrige la postura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Ropa de baño con faja casual rbtc9080"]
  },
  {
    slug: "ropa-de-bano-con-faja-moda-rbtc1004ch-9617",
    dropiId: 9617,
    nombre: "Ropa de baño con faja moda rbtc1004ch",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 279,
    precioPack: 509,
    imagenes: [
      CDN + "9617/img_6aa3316fa66299.60321619_0.png",
      CDN + "9617/img_6aa3316fc83178.55592384_1.png",
      CDN + "9617/img_6aa3316fe0f803.65769407_2.png"
    ],
    beneficios: [
      "Somos Fabricantes Y Exportadores Estamos Estamos En Varios Paises",
      "educe al instante 7cm de cintura",
      "Moldea la figura",
      "Corrige la postura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Ropa de baño con faja moda rbtc1004ch"]
  },
  {
    slug: "ropa-de-bano-con-faja-moda-rbtc1009ch-9619",
    dropiId: 9619,
    nombre: "Ropa de baño con faja moda rbtc1009ch",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 279,
    precioPack: 509,
    imagenes: [
      CDN + "9619/img_6aa33176b4d365.57007448_0.jpg",
      CDN + "9619/img_6aa33176d00598.47081579_1.jpg",
      CDN + "9619/img_6aa33176ec89c0.01410228_2.jpg"
    ],
    beneficios: [
      "Somos Fabricantes Y Exportadores Estamos Estamos En Varios Paises",
      "educe al instante 7cm de cintura",
      "Moldea la figura",
      "Corrige la postura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Ropa de baño con faja moda rbtc1009ch"]
  },
  {
    slug: "ropa-de-bano-con-faja-moda-rbtc1010-9620",
    dropiId: 9620,
    nombre: "Ropa de baño con faja moda rbtc1010",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 279,
    precioPack: 509,
    imagenes: [
      CDN + "9620/img_6aa33179cffb96.06113622_0.png",
      CDN + "9620/img_6aa3317a15ceb3.52322930_2.png",
      CDN + "9620/img_6aa33179ef1687.98194335_1.png"
    ],
    beneficios: [
      "Somos Fabricantes Y Exportadores Estamos Estamos En Varios Paises",
      "educe al instante 7cm de cintura",
      "Moldea la figura",
      "Corrige la postura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Ropa de baño con faja moda rbtc1010"]
  },
  {
    slug: "ropa-de-bano-con-faja-moda-rbtc2004-9621",
    dropiId: 9621,
    nombre: "Ropa de baño con faja moda rbtc2004",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 279,
    precioPack: 509,
    imagenes: [
      CDN + "9621/img_6aa3317d2b8c96.58047911_2.png",
      CDN + "9621/img_6aa3317d0d87d4.05864170_1.png",
      CDN + "9621/img_6aa3317ce2df09.07215442_0.png"
    ],
    beneficios: [
      "Somos Fabricantes Y Exportadores Estamos Estamos En Varios Paises",
      "educe al instante 7cm de cintura",
      "Moldea la figura",
      "Corrige la postura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Ropa de baño con faja moda rbtc2004"]
  },
  {
    slug: "ropa-de-bano-con-faja-moda-rbtc2012h-9622",
    dropiId: 9622,
    nombre: "Ropa de baño con faja moda rbtc2012h",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 279,
    precioPack: 509,
    imagenes: [
      CDN + "9622/img_6aa331815c2df8.28783878_0.jpg",
      CDN + "9622/img_6aa33181929c20.50211673_2.png",
      CDN + "9622/img_6aa3318176b458.52155297_1.png"
    ],
    beneficios: [
      "Somos Fabricantes Y Exportadores Estamos Estamos En Varios Paises",
      "educe al instante 7cm de cintura",
      "Moldea la figura",
      "Corrige la postura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Ropa de baño con faja moda rbtc2012h"]
  },
  {
    slug: "ropa-de-bano-con-faja-moda-rbtc2013-9623",
    dropiId: 9623,
    nombre: "Ropa de baño con faja moda rbtc2013",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 279,
    precioPack: 509,
    imagenes: [
      CDN + "9623/img_6aa3318591a656.87674422_2.png",
      CDN + "9623/img_6aa3318570ff57.93160665_1.png",
      CDN + "9623/img_6aa331855037a2.33167845_0.png"
    ],
    beneficios: [
      "Somos Fabricantes Y Exportadores Estamos Estamos En Varios Paises",
      "educe al instante 7cm de cintura",
      "Moldea la figura",
      "Corrige la postura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Ropa de baño con faja moda rbtc2013"]
  },
  {
    slug: "ropa-de-bano-con-faja-moda-rbtc3100-9624",
    dropiId: 9624,
    nombre: "Ropa de baño con faja moda rbtc3100",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 279,
    precioPack: 509,
    imagenes: [
      CDN + "9624/img_6aa33188b9fe48.39266157_2.png",
      CDN + "9624/img_6aa331889f10d3.74419382_1.png",
      CDN + "9624/img_6aa331887b2b27.27491811_0.png"
    ],
    beneficios: [
      "Somos Fabricantes Y Exportadores Estamos Estamos En Varios Paises",
      "educe al instante 7cm de cintura",
      "Moldea la figura",
      "Corrige la postura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Ropa de baño con faja moda rbtc3100"]
  },
  {
    slug: "ropa-de-bano-con-faja-moda-rbtc3200-9625",
    dropiId: 9625,
    nombre: "Ropa de baño con faja moda rbtc3200",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 279,
    precioPack: 509,
    imagenes: [
      CDN + "9625/img_6aa3318c0bb450.80000950_0.png",
      CDN + "9625/img_6aa3318c491024.17135428_2.png",
      CDN + "9625/img_6aa3318c2aa987.03301726_1.png"
    ],
    beneficios: [
      "Somos Fabricantes Y Exportadores Estamos Estamos En Varios Paises",
      "educe al instante 7cm de cintura",
      "Moldea la figura",
      "Corrige la postura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Ropa de baño con faja moda rbtc3200"]
  },
  {
    slug: "ropa-de-bano-con-faja-moda-rbtc3300-9626",
    dropiId: 9626,
    nombre: "Ropa de baño con faja moda rbtc3300",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 279,
    precioPack: 509,
    imagenes: [
      CDN + "9626/img_6aa3318f258745.03979475_0.png",
      CDN + "9626/img_6aa3318f4902a3.76707851_1.png",
      CDN + "9626/img_6aa3318f64d194.86023972_2.png"
    ],
    beneficios: [
      "Somos Fabricantes Y Exportadores Estamos Estamos En Varios Paises",
      "educe al instante 7cm de cintura",
      "Moldea la figura",
      "Corrige la postura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Ropa de baño con faja moda rbtc3300"]
  },
  {
    slug: "ropa-de-bano-con-faja-moda-rbtc3500-9627",
    dropiId: 9627,
    nombre: "Ropa de baño con faja moda rbtc3500",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 279,
    precioPack: 509,
    imagenes: [
      CDN + "9627/img_6aa331932c52b9.81920019_0.png",
      CDN + "9627/img_6aa331936b7083.84107241_2.png",
      CDN + "9627/img_6aa331934ef7b3.84959793_1.png"
    ],
    beneficios: [
      "Somos Fabricantes Y Exportadores Estamos Estamos En Varios Paises",
      "educe al instante 7cm de cintura",
      "Moldea la figura",
      "Corrige la postura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Ropa de baño con faja moda rbtc3500"]
  },
  {
    slug: "ropa-de-bano-con-faja-moda-rbtc3600-9628",
    dropiId: 9628,
    nombre: "Ropa de baño con faja moda rbtc3600",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 279,
    precioPack: 509,
    imagenes: [
      CDN + "9628/img_6aa3319790d7a3.13256804_0.png",
      CDN + "9628/img_6aa33197b112a4.58825495_1.png",
      CDN + "9628/img_6aa33197cbd181.59036076_2.png"
    ],
    beneficios: [
      "Somos Fabricantes Y Exportadores Estamos Estamos En Varios Paises",
      "educe al instante 7cm de cintura",
      "Moldea la figura",
      "Corrige la postura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Ropa de baño con faja moda rbtc3600"]
  },
  {
    slug: "ropa-de-bano-con-faja-moda-rbtc4302-9630",
    dropiId: 9630,
    nombre: "Ropa de baño con faja moda rbtc4302",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 279,
    precioPack: 509,
    imagenes: [
      CDN + "9630/img_6aa3319ee77d24.30499222_0.png",
      CDN + "9630/img_6aa3319f14e1b6.21465248_1.png",
      CDN + "9630/img_6aa3319f3234f1.94383934_2.png"
    ],
    beneficios: [
      "Somos Fabricantes Y Exportadores Estamos Estamos En Varios Paises",
      "educe al instante 7cm de cintura",
      "Moldea la figura",
      "Corrige la postura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Ropa de baño con faja moda rbtc4302"]
  },
  {
    slug: "ropa-de-bano-con-faja-moda-rbtc7031-9631",
    dropiId: 9631,
    nombre: "Ropa de baño con faja moda rbtc7031",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 279,
    precioPack: 509,
    imagenes: [
      CDN + "9631/img_6aa331a415b530.82922976_0.png",
      CDN + "9631/img_6aa331a43b9ee1.42628010_1.png",
      CDN + "9631/img_6aa331a45bf4c5.17521524_2.png"
    ],
    beneficios: [
      "Somos Fabricantes Y Exportadores Estamos Estamos En Varios Paises",
      "educe al instante 7cm de cintura",
      "Moldea la figura",
      "Corrige la postura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Ropa de baño con faja moda rbtc7031"]
  },
  {
    slug: "ropa-de-bano-con-faja-moda-rbtc7040-9632",
    dropiId: 9632,
    nombre: "Ropa de baño con faja moda rbtc7040",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 279,
    precioPack: 509,
    imagenes: [
      CDN + "9632/img_6aa331a847a2f0.76963887_0.png",
      CDN + "9632/img_6aa331a86b7126.11166997_1.png",
      CDN + "9632/img_6aa331a8846610.56898026_2.png"
    ],
    beneficios: [
      "Somos Fabricantes Y Exportadores Estamos Estamos En Varios Paises",
      "educe al instante 7cm de cintura",
      "Moldea la figura",
      "Corrige la postura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Ropa de baño con faja moda rbtc7040"]
  },
  {
    slug: "ropa-de-bano-con-faja-moda-rbtc9086-9636",
    dropiId: 9636,
    nombre: "Ropa de baño con faja moda rbtc9086",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 279,
    precioPack: 509,
    imagenes: [
      CDN + "9636/img_6aa331b98a46a4.86088335_0.png",
      CDN + "9636/img_6aa331b9a94e74.38006810_1.png",
      CDN + "9636/img_6aa331b9c11a23.86894199_2.png"
    ],
    beneficios: [
      "Somos Fabricantes Y Exportadores Estamos Estamos En Varios Paises",
      "educe al instante 7cm de cintura",
      "Moldea la figura",
      "Corrige la postura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Ropa de baño con faja moda rbtc9086"]
  },
  {
    slug: "ropa-de-bano-con-faja-moda-rbtc9096-9637",
    dropiId: 9637,
    nombre: "Ropa de baño con faja moda rbtc9096",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 279,
    precioPack: 509,
    imagenes: [
      CDN + "9637/img_6aa331bd115c04.11982762_0.png",
      CDN + "9637/img_6aa331bd4ea748.71192909_2.png",
      CDN + "9637/img_6aa331bd354083.14926038_1.png"
    ],
    beneficios: [
      "Somos Fabricantes Y Exportadores Estamos Estamos En Varios Paises",
      "educe al instante 7cm de cintura",
      "Moldea la figura",
      "Corrige la postura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Ropa de baño con faja moda rbtc9096"]
  },
  {
    slug: "ropa-de-bano-con-faja-exclusive-rbt4500cor-9638",
    dropiId: 9638,
    nombre: "Ropa de baño con faja exclusive rbt4500cor",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 289,
    precioPack: 529,
    imagenes: [
      CDN + "9638/img_6aa331c098ad56.13636206_0.png",
      CDN + "9638/img_6aa331c0b87dd2.84254352_1.png",
      CDN + "9638/img_6aa331c0d6fc52.80003095_2.png"
    ],
    beneficios: [
      "Somos Fabricantes Y Exportadores Estamos Estamos En Varios Paises",
      "educe al instante 7cm de cintura",
      "Moldea la figura",
      "Corrige la postura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Ropa de baño con faja exclusive rbt4500cor"]
  },
  {
    slug: "ropa-de-bano-con-faja-exclusive-rbtc2501-9639",
    dropiId: 9639,
    nombre: "Ropa de baño con faja exclusive rbtc2501",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 289,
    precioPack: 529,
    imagenes: [
      CDN + "9639/img_6aa331c3c64ed8.45745103_0.png",
      CDN + "9639/img_6aa331c3e8f3d5.38409523_1.png",
      CDN + "9639/img_6aa331c4100060.17157892_2.png"
    ],
    beneficios: [
      "Somos Fabricantes Y Exportadores Estamos Estamos En Varios Paises",
      "educe al instante 7cm de cintura",
      "Moldea la figura",
      "Corrige la postura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Ropa de baño con faja exclusive rbtc2501"]
  },
  {
    slug: "ropa-de-bano-con-faja-exclusive-rbtc2510-9644",
    dropiId: 9644,
    nombre: "Ropa de baño con faja exclusive rbtc2510",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 289,
    precioPack: 529,
    imagenes: [
      CDN + "9644/img_6aa331d749b084.16407621_0.png",
      CDN + "9644/img_6aa331d7cadbf4.61432424_1.png",
      CDN + "9644/img_6aa331d7e3f588.18145140_2.png"
    ],
    beneficios: [
      "Somos Fabricantes Y Exportadores Estamos Estamos En Varios Paises",
      "educe al instante 7cm de cintura",
      "Moldea la figura",
      "Corrige la postura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Ropa de baño con faja exclusive rbtc2510"]
  },
  {
    slug: "ropa-de-bano-con-faja-exclusive-rbtc2511-9645",
    dropiId: 9645,
    nombre: "Ropa de baño con faja exclusive rbtc2511",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 289,
    precioPack: 529,
    imagenes: [
      CDN + "9645/img_6aa331dc1a6fb5.87063863_0.png",
      CDN + "9645/img_6aa331dcb0e221.05494268_2.png",
      CDN + "9645/img_6aa331dc973711.52367729_1.png"
    ],
    beneficios: [
      "Somos Fabricantes Y Exportadores Estamos Estamos En Varios Paises",
      "educe al instante 7cm de cintura",
      "Moldea la figura",
      "Corrige la postura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Ropa de baño con faja exclusive rbtc2511"]
  },
  {
    slug: "ropa-de-bano-con-faja-exclusive-rbtc2512-9646",
    dropiId: 9646,
    nombre: "Ropa de baño con faja exclusive rbtc2512",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 289,
    precioPack: 529,
    imagenes: [
      CDN + "9646/img_6aa331e082c184.47640748_0.png",
      CDN + "9646/img_6aa331e16d1346.42411080_2.png",
      CDN + "9646/img_6aa331e0f100b3.88619728_1.png"
    ],
    beneficios: [
      "Somos Fabricantes Y Exportadores Estamos Estamos En Varios Paises",
      "educe al instante 7cm de cintura",
      "Moldea la figura",
      "Corrige la postura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Ropa de baño con faja exclusive rbtc2512"]
  },
  {
    slug: "ropa-de-bano-con-faja-exclusive-rbtc2513-9647",
    dropiId: 9647,
    nombre: "Ropa de baño con faja exclusive rbtc2513",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 289,
    precioPack: 529,
    imagenes: [
      CDN + "9647/img_6aa331e4e5cb12.01925868_0.png",
      CDN + "9647/img_6aa331e5686558.49672815_1.png",
      CDN + "9647/img_6aa331e5f06f10.07471076_2.png"
    ],
    beneficios: [
      "Somos Fabricantes Y Exportadores Estamos Estamos En Varios Paises",
      "educe al instante 7cm de cintura",
      "Moldea la figura",
      "Corrige la postura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Ropa de baño con faja exclusive rbtc2513"]
  },
  {
    slug: "ropa-de-bano-con-faja-exclusive-rbtc2514-9648",
    dropiId: 9648,
    nombre: "Ropa de baño con faja exclusive rbtc2514",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 289,
    precioPack: 529,
    imagenes: [
      CDN + "9648/img_6aa331ea14bf74.66874278_0.png",
      CDN + "9648/img_6aa331eaa2c603.18744013_1.png",
      CDN + "9648/img_6aa331eabd63b4.09221621_2.png"
    ],
    beneficios: [
      "Somos Fabricantes Y Exportadores Estamos Estamos En Varios Paises",
      "educe al instante 7cm de cintura",
      "Moldea la figura",
      "Corrige la postura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Ropa de baño con faja exclusive rbtc2514"]
  },
  {
    slug: "ropa-de-bano-con-faja-exclusive-rbtc3008sht-9649",
    dropiId: 9649,
    nombre: "Ropa de baño con faja exclusive rbtc3008sht",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 289,
    precioPack: 529,
    imagenes: [
      CDN + "9649/img_6aa331ee3eba13.40708740_1.png",
      CDN + "9649/img_6aa331ee55fa42.00329816_2.png",
      CDN + "9649/img_6aa331ed9ace20.20198665_0.png"
    ],
    beneficios: [
      "Somos Fabricantes Y Exportadores Estamos Estamos En Varios Paises",
      "educe al instante 7cm de cintura",
      "Moldea la figura",
      "Corrige la postura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Ropa de baño con faja exclusive rbtc3008sht"]
  },
  {
    slug: "ropa-de-bano-con-faja-exclusive-rbtc3009sht-9651",
    dropiId: 9651,
    nombre: "Ropa de baño con faja exclusive rbtc3009sht",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 289,
    precioPack: 529,
    imagenes: [
      CDN + "9651/img_6aa331f550f8e1.27389912_0.png",
      CDN + "9651/img_6aa331f5ea8276.81744770_2.png",
      CDN + "9651/img_6aa331f5ce5787.19802036_1.png"
    ],
    beneficios: [
      "Somos Fabricantes Y Exportadores Estamos Estamos En Varios Paises",
      "educe al instante 7cm de cintura",
      "Moldea la figura",
      "Corrige la postura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Ropa de baño con faja exclusive rbtc3009sht"]
  },
  {
    slug: "ropa-de-bano-con-faja-exclusive-rbtc3400-9652",
    dropiId: 9652,
    nombre: "Ropa de baño con faja exclusive rbtc3400",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 289,
    precioPack: 529,
    imagenes: [
      CDN + "9652/img_6aa331f8c12c70.76630765_0.png",
      CDN + "9652/img_6aa331f9743042.83487604_2.png",
      CDN + "9652/img_6aa331f95ceac5.88257387_1.png"
    ],
    beneficios: [
      "Somos Fabricantes Y Exportadores Estamos Estamos En Varios Paises",
      "educe al instante 7cm de cintura",
      "Moldea la figura",
      "Corrige la postura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Ropa de baño con faja exclusive rbtc3400"]
  },
  {
    slug: "ropa-de-bano-con-faja-exclusive-rbtc4601-9653",
    dropiId: 9653,
    nombre: "Ropa de baño con faja exclusive rbtc4601",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 289,
    precioPack: 529,
    imagenes: [
      CDN + "9653/img_6aa331fc4cb1d7.75624177_0.png",
      CDN + "9653/img_6aa331fd0672c9.94840012_2.png",
      CDN + "9653/img_6aa331fce0dc32.18386058_1.png"
    ],
    beneficios: [
      "Somos Fabricantes Y Exportadores Estamos Estamos En Varios Paises",
      "educe al instante 7cm de cintura",
      "Moldea la figura",
      "Corrige la postura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Ropa de baño con faja exclusive rbtc4601"]
  },
  {
    slug: "ropa-de-bano-con-faja-exclusive-rbtc7050-9656",
    dropiId: 9656,
    nombre: "Ropa de baño con faja exclusive rbtc7050",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 289,
    precioPack: 529,
    imagenes: [
      CDN + "9656/img_6aa33208aaf5b3.70423662_0.png",
      CDN + "9656/img_6aa332093ee2a7.30859832_1.png",
      CDN + "9656/img_6aa332095807c8.76599950_2.png"
    ],
    beneficios: [
      "Somos Fabricantes Y Exportadores Estamos Estamos En Varios Paises",
      "educe al instante 7cm de cintura",
      "Moldea la figura",
      "Corrige la postura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Ropa de baño con faja exclusive rbtc7050"]
  },
  {
    slug: "ropa-de-bano-con-faja-exclusive-rbtc2517-9659",
    dropiId: 9659,
    nombre: "Ropa de baño con faja exclusive rbtc2517",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 289,
    precioPack: 529,
    imagenes: [
      CDN + "9659/img_6aa3321a0e1113.26220147_1.png",
      CDN + "9659/img_6aa3321a2abeb4.91827421_2.png",
      CDN + "9659/img_6aa33219766f54.35818720_0.png"
    ],
    beneficios: [
      "Somos Fabricantes Y Exportadores Estamos Estamos En Varios Paises",
      "educe al instante 7cm de cintura",
      "Moldea la figura",
      "Corrige la postura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Ropa de baño con faja exclusive rbtc2517"]
  },
  {
    slug: "ropa-de-bano-con-faja-exclusive-rbtc2519-9661",
    dropiId: 9661,
    nombre: "Ropa de baño con faja exclusive rbtc2519",
    corto: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad…",
    categoria: "Moda",
    destacado: false,
    precio: 289,
    precioPack: 529,
    imagenes: [
      CDN + "9661/img_6aa3322369fec2.96696030_0.png",
      CDN + "9661/img_6aa33224161358.75594122_1.png",
      CDN + "9661/img_6aa332242e3139.86066508_2.png"
    ],
    beneficios: [
      "Somos Fabricantes Y Exportadores Estamos Estamos En Varios Paises",
      "educe al instante 7cm de cintura",
      "Moldea la figura",
      "Corrige la postura"
    ],
    descripcion: "Realza el busto, debido a que la faja llega debajo del busto todos nuestros materiales son de excelente calidad , haciendo que nuestra prenda dure mas de 4 años sin perder el control de nuestras fajas",
    incluye: ["1 Ropa de baño con faja exclusive rbtc2519"]
  },
  {
    slug: "pijamas-premium-piel-de-durazno-9703",
    dropiId: 9703,
    nombre: "Pijamas premium piel de durazno",
    corto: "Pijamas premium piel de durazno.",
    categoria: "Moda",
    destacado: false,
    precio: 39,
    precioPack: 68,
    imagenes: [
      CDN + "9703/35978c29-793d-4c61-a9c3-95aa6627790c.webp",
      CDN + "9703/da50264e-9b16-4c36-8267-9d877cfb97d9.jpeg",
      CDN + "9703/09c4af8f-e818-46d2-a80a-0961163e1c02.webp"
    ],
    beneficios: [
      "PIJAMAS DE PIEL DE DURAZNO ANTITRANSPIRABLES PARA TODA LA FAMILIA",
      "HERMOSOS MODELOS Y SUPER SUAVES",
      "PERFECTOS PARA DORMIR Y ESTAR EN CASA",
      "TODOS LOS MODELOS DISPONIBLES"
    ],
    descripcion: "Pijamas premium piel de durazno. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Pijamas premium piel de durazno"]
  },
  {
    slug: "mini-afeitador-portatil-4461",
    dropiId: 4461,
    nombre: "Mini Afeitador Portátil",
    corto: "Nuestra mini afeitadora portátil para hombre es la solución perfecta para mantener tu aspecto fresco y limpio…",
    categoria: "Belleza",
    destacado: false,
    precio: 39,
    precioPack: 68,
    imagenes: [
      CDN + "4461/1729529995WhatsApp%20Image%202024-10-21%20at%2011.24.49%20AM.jpeg",
      CDN + "4461/1729529995WhatsApp%20Image%202024-10-21%20at%2011.24.07%20AM.jpeg",
      CDN + "4461/1729529995WhatsApp%20Image%202024-10-21%20at%2011.50.23%20AM.jpeg"
    ],
    beneficios: [
      "Afeitado rápido de 2 minutos",
      "El diseño Ultra-Fit™ afeita a la perfección",
      "Mecanismo Auto-Sharpening™",
      "Excelente compañero con batería de larga duración y forma compacta"
    ],
    descripcion: "Nuestra mini afeitadora portátil para hombre es la solución perfecta para mantener tu aspecto fresco y limpio estés donde estés. Potente motor con cuchillas afiladas triples, rotación de 7200 RPM y cabezal de afeitado de 360 grados con un excelente mecanismo de autoafilado para ayudarte a afeitarte al instante.",
    incluye: ["1 Mini Afeitador Portátil"]
  },
  {
    slug: "mini-afeitador-electrico-portatil-639",
    dropiId: 639,
    nombre: "Mini Afeitador Eléctrico Portátil",
    corto: "Nuestra mini afeitadora portátil para hombre es la solución perfecta para mantener tu aspecto fresco y limpio…",
    categoria: "Belleza",
    destacado: false,
    precio: 49,
    precioPack: 89,
    imagenes: [
      CDN + "639/1699288710Mini%20Afeitador%20El%C3%A9ctrico%20Port%C3%A1til%20Recargable.jpg",
      CDN + "639/1741971879762cdc03-d036-4158-862b-c0ecd4f800cb.jpg",
      CDN + "639/176945745112312312.jpg"
    ],
    beneficios: [
      "¿NECESITAS UN COMPAÑERO DE AFEITADO CONFIABLE QUE PUEDAS LLEVAR A CUALQUIER LUGAR?",
      "Afeitado rápido de 2 minutos",
      "El diseño Ultra-Fit™ afeita a la perfección",
      "Mecanismo Auto-Sharpening™"
    ],
    descripcion: "Nuestra mini afeitadora portátil para hombre es la solución perfecta para mantener tu aspecto fresco y limpio estés donde estés. Potente motor con cuchillas afiladas triples, rotación de 7200 RPM y cabezal de afeitado de 360 grados con un excelente mecanismo de autoafilado para ayudarte a afeitarte al instante.",
    incluye: ["1 Mini Afeitador Eléctrico Portátil"]
  },
  {
    slug: "pack-de-3-esponja-saca-mugre-3445",
    dropiId: 3445,
    nombre: "Pack de 3: esponja saca mugre",
    corto: "Pack de 3: esponja saca mugre.",
    categoria: "Juegos",
    destacado: false,
    precio: 39,
    precioPack: 68,
    imagenes: [
      CDN + "3445/1723780009Screenshot%202024-08-15%20at%2022.46.09.png",
      CDN + "3445/1723780010Screenshot%202024-08-15%20at%2022.45.40.png",
      CDN + "3445/1723780009Screenshot%202024-08-15%20at%2022.45.08.png"
    ],
    beneficios: [
      "Material: Polímero natural Dimensiones: 12,8x7x3cm",
      "3 esponjas ultra exfoliantes en colores variados: azul, celeste, verde, amarillo, rosado",
      "Los colores se despachan aleatoriamente ",
      "1. ¿Con qué frecuencia debo usar la esponja exfoliante?"
    ],
    descripcion: "Pack de 3: esponja saca mugre. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Pack de 3: esponja saca mugre"]
  },
  {
    slug: "hairganic-serum-crecimiento-del-cabello-9284",
    dropiId: 9284,
    nombre: "Hairganic Sérum Crecimiento del Cabello",
    corto: "Transforma tu rutina capilar con Hairganic , un sérum capilar elaborado con una poderosa combinación de Aceite…",
    categoria: "Belleza",
    destacado: false,
    precio: 59,
    precioPack: 109,
    imagenes: [
      CDN + "9284/17836115571.jpg",
      CDN + "9284/17836115573.jpg",
      CDN + "9284/17836115572.jpg"
    ],
    beneficios: [
      "Sérum Capilar Hairganic – Crecimiento y Fortalecimiento 100% Natural",
      "Estimula el crecimiento natural del cabello",
      "Ayuda a reducir la caída por quiebre",
      "Cabello más fuerte, grueso y abundante"
    ],
    descripcion: "Transforma tu rutina capilar con Hairganic , un sérum capilar elaborado con una poderosa combinación de Aceite de Ricino, Aceite de Argán, Aceite de Jojoba, Aceite de Almendras Dulces, Aceite Esencial de Romero y Aceite Su fórmula 100% natural nutre profundamente el cuero cabelludo, fortalece la fibra capilar y ayuda…",
    incluye: ["1 Hairganic Sérum Crecimiento del Cabello"]
  },
  {
    slug: "cadena-sol-y-luna-1823",
    dropiId: 1823,
    nombre: "Cadena Sol y Luna",
    corto: "Cadena Sol y Luna. Producto seleccionado por VISUAL Store.",
    categoria: "Moda",
    destacado: false,
    precio: 49,
    precioPack: 89,
    imagenes: [
      CDN + "1823/1769902317Captura%20de%20pantalla%202026-01-31%20183012.png",
      CDN + "1823/1769902317Captura%20de%20pantalla%202026-01-31%20183124.png",
      CDN + "1823/1707630934Screenshot%202024-02-11%20at%2000.53.19.png"
    ],
    beneficios: [
      "Diseño moderno y cómodo",
      "Ideal para el día a día",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Cadena Sol y Luna. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Cadena Sol y Luna"]
  },
  {
    slug: "cadena-ra-y-anubis-1837",
    dropiId: 1837,
    nombre: "Cadena Ra y Anubis",
    corto: "Descubre el Poder de los Dioses Egipcios con Nuestra Cadena Ra y Anubis, Inspirada en el Legado del Año 1913…",
    categoria: "Moda",
    destacado: false,
    precio: 49,
    precioPack: 89,
    imagenes: [
      CDN + "1837/1770387902Captura%20de%20pantalla%202026-02-06%20092430.png",
      CDN + "1837/1770387902Captura%20de%20pantalla%202026-02-06%20092310.png",
      CDN + "1837/1707630587Screenshot%202024-02-11%20at%2000.48.18.png"
    ],
    beneficios: [
      "Diseño moderno y cómodo",
      "Ideal para el día a día",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Descubre el Poder de los Dioses Egipcios con Nuestra Cadena Ra y Anubis, Inspirada en el Legado del Año 1913 Sumérgete en la antigua sabiduría y la majestuosidad de la mitología egipcia con nuestra exclusiva cadena. Eleva tu estilo con esta pieza única que captura la esencia de la antigua civilización egipcia.",
    incluye: ["1 Cadena Ra y Anubis"]
  },
  {
    slug: "pastillas-limpia-lavadora-x12-jackehoe-9246",
    dropiId: 9246,
    nombre: "Pastillas Limpia Lavadora x12 Jackehoe",
    corto: "Pastillas Limpia Lavadora x12 Jackehoe.",
    categoria: "Hogar",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [
      CDN + "9246/img_6a452e7f0de381.31892989_0.jpg",
      CDN + "9246/17829189886.jpg",
      CDN + "9246/17829189885.jpg"
    ],
    beneficios: [
      "Práctico y fácil de usar",
      "Ahorra tiempo en casa",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Pastillas Limpia Lavadora x12 Jackehoe. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Pastillas Limpia Lavadora x12 Jackehoe"]
  },
  {
    slug: "mascara-del-hombre-arana-nino-518",
    dropiId: 518,
    nombre: "Mascara del hombre araña niño",
    corto: "Mascara de hombre araña para niños, material poliester, venta solo por docena, el peecio es por docena ( 12 uni)",
    categoria: "Juegos",
    destacado: false,
    precio: 49,
    precioPack: 89,
    imagenes: [CDN + "518/1697032815Screenshot_20231011_085700_Facebook.jpg"],
    beneficios: [
      "Diversión para toda la familia",
      "Ideal para regalar",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Mascara de hombre araña para niños, material poliester, venta solo por docena, el peecio es por docena ( 12 uni)",
    incluye: ["1 Mascara del hombre araña niño"]
  },
  {
    slug: "solubril-limpieza-de-pisos-8397",
    dropiId: 8397,
    nombre: "Solubril limpieza de pisos",
    corto: "Dejar actuar 3-5 minutos, frotar y enjuagar con abundante agua.",
    categoria: "Hogar",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [
      CDN + "8397/1777749745WhatsApp%20Image%202026-05-02%20at%202.17.05%20PM.jpeg",
      CDN + "8397/1777749745WhatsApp%20Image%202026-05-02%20at%202.17.21%20PM.jpeg",
      CDN + "8397/1777749745WhatsApp%20Image%202026-05-02%20at%202.17.17%20PM.jpeg"
    ],
    beneficios: [
      "Limpieza profunda de todo tipo de pisos",
      "Devuelve el brillo natural de las superficies",
      "Fórmula segura que no daña los pisos",
      "Uso externo únicamente, aplicar sobre superficies secas y libres de polvo"
    ],
    descripcion: "Dejar actuar 3-5 minutos, frotar y enjuagar con abundante agua. Diluir 1 L de Solubril en 3 L de agua, para suciedad intensa aplicar directo.",
    incluye: ["1 Solubril limpieza de pisos"]
  },
  {
    slug: "serum-facial-anti-arrugas-4149",
    dropiId: 4149,
    nombre: "Serum Facial Anti-arrugas",
    corto: "Si estás buscando una solución completa para revitalizar tu piel, reducir las arrugas, aclarar manchas, tratar…",
    categoria: "Belleza",
    destacado: false,
    precio: 79,
    precioPack: 149,
    imagenes: [
      CDN + "4149/1724506787WhatsApp%20Image%202024-08-20%20at%2011.01.09.jpeg",
      CDN + "4149/1724506787WhatsApp%20Image%202024-08-20%20at%2011.01.08.jpeg",
      CDN + "4149/1724506789Screenshot%202024-08-24%20at%2008.34.41.png"
    ],
    beneficios: [
      "Descubre el Secreto de una Piel Perfecta a Cualquier Edad",
      "1. ¿Cómo se aplica el tratamiento?",
      "2. ¿Cuándo empezaré a ver resultados?",
      "3. ¿Es seguro para todo tipo de piel?"
    ],
    descripcion: "Si estás buscando una solución completa para revitalizar tu piel, reducir las arrugas, aclarar manchas, tratar el acné y devolverle a tu rostro esa luminosidad que siempre has deseado, ¡este tratamiento es la respuesta!",
    incluye: ["1 Serum Facial Anti-arrugas"]
  },
  {
    slug: "barra-de-cera-peinado-6212",
    dropiId: 6212,
    nombre: "Barra de Cera Peinado",
    corto: "¡Descubre la cera profesional para cabello que redefine tu estilo!",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [CDN + "6212/1740433577WhatsApp%20Image%202025-02-24%20at%204.43.46%20PM.jpeg"],
    beneficios: [
      "· Tipo de producto: Barra de cera para cabello",
      "· Ingredientes: Cera de abejas, glicerina, extracto de aguacate, etc",
      "· Modelo: Wax Stick",
      "· Peso neto: 75 gr"
    ],
    descripcion: "¡Descubre la cera profesional para cabello que redefine tu estilo! · Rico en cera de abeja, glicerina, extracto de aguacate y otros nutrientes, es suave, seguro y sano para el cabello, adecuado para todo tipo de cabello.",
    incluye: ["1 Barra de Cera Peinado"]
  },
  {
    slug: "collar-sol-y-luna-con-100-idiomas-5310",
    dropiId: 5310,
    nombre: "Collar sol y luna con 100 idiomas",
    corto: "Sorprende a esa persona especial con el Collar Sol y Luna, un regalo lleno de amor y significado.",
    categoria: "Moda",
    destacado: false,
    precio: 39,
    precioPack: 68,
    imagenes: [
      CDN + "5310/1737313447descarga%20-%202025-01-19T133532.464.jpeg",
      CDN + "5310/1770312994WhatsApp%20Image%202026-02-05%20at%2012.32.00%20(2).jpeg",
      CDN + "5310/1770312994WhatsApp%20Image%202026-02-05%20at%2012.32.00.jpeg"
    ],
    beneficios: [
      "El detalle perfecto para decir ‘Te Amo’ en 100 idiomas este San Valentín.\"",
      "Haz que este San Valentín sea inolvidable. ¡Consíguelo ahora y enamora con un regalo",
      "VIENE CON CAJITA LINDA LISTA PARA REGALAR",
      "Acero inoxidable"
    ],
    descripcion: "Sorprende a esa persona especial con el Collar Sol y Luna, un regalo lleno de amor y significado.",
    incluye: ["1 Collar sol y luna con 100 idiomas"]
  },
  {
    slug: "brazalete-dragon-de-la-suerte-3466",
    dropiId: 3466,
    nombre: "Brazalete Dragon de la suerte",
    corto: "Esta pulsera es un gran regalo para alguien a quien le gusta usar algo único y diferente.",
    categoria: "Moda",
    destacado: false,
    precio: 89,
    precioPack: 169,
    imagenes: [
      CDN + "3466/1715268860Screenshot%202024-05-09%20at%2010.32.47.png",
      CDN + "3466/1715268860Screenshot%202024-05-09%20at%2010.33.56.png"
    ],
    beneficios: [
      "CONOCE SU HISTORIA",
      "¿QUÉ CARACTERÍSTICAS TIENE?",
      "Guía de tallas - ¿Qué longitud de pulsera debería comprar?",
      "Use una cinta o cordón, envuélvalo alrededor de su muñeca y marque el punto final"
    ],
    descripcion: "Esta pulsera es un gran regalo para alguien a quien le gusta usar algo único y diferente. Hace mucho tiempo en la antigüedad, existia un animal llamado Pi Xiu.",
    incluye: ["1 Brazalete Dragon de la suerte"]
  },
  {
    slug: "biosiluet-4295",
    dropiId: 4295,
    nombre: "BioSiluet",
    corto: "BioSiluet. Producto seleccionado por VISUAL Store.",
    categoria: "Belleza",
    destacado: false,
    precio: 169,
    precioPack: 309,
    imagenes: [
      CDN + "4295/172685151543ac6e_5a007363d5994e19b38a759e01a9915d~mv2_d_5152_3864_s_4_2.jpg",
      CDN + "4295/172685151543ac6e_276e68da4d334d05830e799cc6a04703~mv2_d_5152_3864_s_4_2.jpg",
      CDN + "4295/172685151659987432_427477154718622_1533282562800091136_n.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "BioSiluet. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 BioSiluet"]
  },
  {
    slug: "mallas-frias-ice-fit-7866",
    dropiId: 7866,
    nombre: "Mallas Frías ice fit",
    corto: "¿Sientes tus piernas pesadas después de largas jornadas de pie o intensas sesiones de entrenamiento?",
    categoria: "Bienestar",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [
      CDN + "7866/1770125327Captura%20de%20pantalla%202026-02-03%20082804.png",
      CDN + "7866/1770125327Captura%20de%20pantalla%202026-02-03%20082751.png",
      CDN + "7866/1761836901WhatsApp%20Image%202025-10-30%20at%209.56.14%20AM.jpeg"
    ],
    beneficios: [
      "Alivio Inmediato para Piernas Cansadas y Doloridas",
      "Alivio Rápido: Reduce la sensación de piernas pesadas y mejora la circulación",
      "Ideal para Profesionales: Perfectas para quienes pasan muchas horas de pie",
      "Recuperación Deportiva: Ayuda a disminuir la fatiga muscular post-entrenamiento"
    ],
    descripcion: "¿Sientes tus piernas pesadas después de largas jornadas de pie o intensas sesiones de entrenamiento? Comodidad y Bienestar: Proporciona una sensación refrescante y relajante.",
    incluye: ["1 Mallas Frías ice fit"]
  },
  {
    slug: "cepillo-de-carpinteria-4058",
    dropiId: 4058,
    nombre: "Cepillo de carpinteria",
    corto: "El Cuerpo principal está hecho de material ABS, que tiene una alta resistencia, resistencia al desgaste, agarre…",
    categoria: "Hogar",
    destacado: false,
    precio: 59,
    precioPack: 109,
    imagenes: [
      CDN + "4058/1723208938WhatsApp%20Image%202024-08-01%20at%2011.11.59%20AM%20(7).jpeg",
      CDN + "4058/1723208938WhatsApp%20Image%202024-08-01%20at%2011.11.58%20AM%20(1).jpeg",
      CDN + "4058/1723208938WhatsApp%20Image%202024-08-01%20at%2011.11.59%20AM%20(3).jpeg"
    ],
    beneficios: [
      "Práctico y fácil de usar",
      "Ahorra tiempo en casa",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "El Cuerpo principal está hecho de material ABS, que tiene una alta resistencia, resistencia al desgaste, agarre cómodo y puede proporcionar un largo tiempo de servicio. 1. Las cuchillas cepilladoras adoptan materiales de acero inoxidable de alta dureza, que están muy afilados para un funcionamiento suave.",
    incluye: ["1 Cepillo de carpinteria"]
  },
  {
    slug: "lola-cosmetics-shampoo-matizador-rubia-7762",
    dropiId: 7762,
    nombre: "Lola cosmetics Shampoo Matizador -Rubia",
    corto: "Rubia de farmacia es una línea especializada para cabellos rubios naturales, teñidos o con mechas.",
    categoria: "Belleza",
    destacado: false,
    precio: 89,
    precioPack: 169,
    imagenes: [CDN + "7762/175854240971e56b0b-2b15-457b-859d-c1553c1f2a3b%20(1).png"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Rubia de farmacia es una línea especializada para cabellos rubios naturales, teñidos o con mechas. Shampoo matizador morado, tiñe y neutraliza los tonos amarillos y anaranjados revitalizando el cabello en tan solo 3 lavados.",
    incluye: ["1 Lola cosmetics Shampoo Matizador -Rubia"]
  },
  {
    slug: "lola-cosmetics-muerte-subita-shampoo-7763",
    dropiId: 7763,
    nombre: "Lola Cosmetics Muerte Subita Shampoo",
    corto: "Nuestro tratamiento Muerte Súbita es así, o lo amas o aun no lo conoces.",
    categoria: "Belleza",
    destacado: false,
    precio: 79,
    precioPack: 149,
    imagenes: [CDN + "7763/17585426771a2346a4-2e87-41c9-8201-c323374dd603%20(1).png"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Nuestro tratamiento Muerte Súbita es así, o lo amas o aun no lo conoces. Es un shampoo de tratamiento diario y muy lujoso para cabellos sedientos de vida.",
    incluye: ["1 Lola Cosmetics Muerte Subita Shampoo"]
  },
  {
    slug: "lola-cosmetics-mascarilla-muerte-subita-7765",
    dropiId: 7765,
    nombre: "Lola Cosmetics Mascarilla Muerte Súbita",
    corto: "Mascarilla de tratamiento súper hidratante, ideal para cabellos muy dañados por químicos como decoloración…",
    categoria: "Belleza",
    destacado: false,
    precio: 79,
    precioPack: 149,
    imagenes: [CDN + "7765/1758543028c822e013-b71f-4775-be6f-1e579037cc92%20(1).png"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Mascarilla de tratamiento súper hidratante, ideal para cabellos muy dañados por químicos como decoloración, tintes y alisados. Modo de uso: Aplica una vez a la semana después de utilizar el shampoo o después de coloración y/o químicos, distribuye uniformemente por todo el cabello, déjalo actuar 10 minutos y enjuaga y…",
    incluye: ["1 Lola Cosmetics Mascarilla Muerte Súbita"]
  },
  {
    slug: "lolacosmetics-muerte-subita-acondicionar-7764",
    dropiId: 7764,
    nombre: "LolaCosmetics Muerte Subita Acondicionar",
    corto: "Tratamiento diario y muy lujoso para cabellos sedientos de vida.",
    categoria: "Belleza",
    destacado: false,
    precio: 79,
    precioPack: 149,
    imagenes: [CDN + "7764/1758542873dfeee641-5b84-41f6-94f5-bba339ce5b72%20(1).png"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Tratamiento diario y muy lujoso para cabellos sedientos de vida. Entre sus activos está el aloe vera y el aceite de coco y extracto de té verde.",
    incluye: ["1 LolaCosmetics Muerte Subita Acondicionar"]
  },
  {
    slug: "drama-queen-coco-acondicionador-7769",
    dropiId: 7769,
    nombre: "Drama Queen Coco Acondicionador",
    corto: "Acondicionador nutricional para cabellos secos y frágiles.",
    categoria: "Belleza",
    destacado: false,
    precio: 79,
    precioPack: 149,
    imagenes: [CDN + "7769/1758545122mock%20up%20-%20condicionador%20drama%20queen%20coco%20AB-CE.png"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Acondicionador nutricional para cabellos secos y frágiles.",
    incluye: ["1 Drama Queen Coco Acondicionador"]
  },
  {
    slug: "drama-queen-coco-shampoo-7770",
    dropiId: 7770,
    nombre: "Drama Queen Coco Shampoo",
    corto: "Shampoo nutritivo para cabellos secos y frágiles.",
    categoria: "Belleza",
    destacado: false,
    precio: 79,
    precioPack: 149,
    imagenes: [CDN + "7770/1758545261DRAMAQUEENCOCOSHAMPOO250ML.webp"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Shampoo nutritivo para cabellos secos y frágiles.",
    incluye: ["1 Drama Queen Coco Shampoo"]
  },
  {
    slug: "ouhoe-crecimiento-de-cabello-7901",
    dropiId: 7901,
    nombre: "Ouhoe -crecimiento de cabello",
    corto: "Ouhoe -crecimiento de cabello.",
    categoria: "Belleza",
    destacado: false,
    precio: 49,
    precioPack: 89,
    imagenes: [
      CDN + "7901/1770321786OUHOE.jpg",
      CDN + "7901/1763752117S2.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Ouhoe -crecimiento de cabello. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Ouhoe -crecimiento de cabello"]
  },
  {
    slug: "papel-andiaherente-airfryer-pack-de-50-3134",
    dropiId: 3134,
    nombre: "Papel Andiaherente Airfryer (pack de 50)",
    corto: "Papel Andiaherente Airfryer (pack de 50).",
    categoria: "Hogar",
    destacado: false,
    precio: 39,
    precioPack: 68,
    imagenes: [
      CDN + "3134/1712276396Screenshot%202024-04-04%20at%2019.19.36.png",
      CDN + "3134/1769897738Captura%20de%20pantalla%202026-01-31%20171050.png",
      CDN + "3134/1769897738Captura%20de%20pantalla%202026-01-31%20171132.png"
    ],
    beneficios: [
      "Color marrón claro que combina con cualquier cocina",
      "1 Pack de 50 unidades para mayor conveniencia",
      "Ideal para freír, hornear y asar sin ensuciar",
      "Material desechable para una limpieza rápida y fácil"
    ],
    descripcion: "Papel Andiaherente Airfryer (pack de 50). Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Papel Andiaherente Airfryer (pack de 50)"]
  },
  {
    slug: "set-de-bolsas-al-vacio-y-succionador-8831",
    dropiId: 8831,
    nombre: "Set de bolsas al vacío y succionador",
    corto: "Maximiza el espacio en tu hogar con este práctico set de 5 bolsas al vacío y succionador manual.",
    categoria: "Hogar",
    destacado: false,
    precio: 89,
    precioPack: 169,
    imagenes: [
      CDN + "8831/17805845061%20(4).webp",
      CDN + "8831/17805845062%20(4).webp",
      CDN + "8831/17805845063%20(4).webp"
    ],
    beneficios: [
      "SET DE BOLSAS AL VACÍO Y SUCCIONADOR MANUAL",
      "Ahorra espacio significativamente al reducir el volumen de tus prendas y textiles",
      "Optimiza la organización de tu hogar, creando un ambiente más ordenado y funcional"
    ],
    descripcion: "Maximiza el espacio en tu hogar con este práctico set de 5 bolsas al vacío y succionador manual. Protege tus pertenencias contra el polvo, la humedad, los olores y las plagas, asegurando su durabilidad.",
    incluye: ["1 Set de bolsas al vacío y succionador"]
  },
  {
    slug: "crema-aclarante-de-zonas-biaoqua-30g-8812",
    dropiId: 8812,
    nombre: "Crema aclarante de zonas biaoqua 30g",
    corto: "El tamaño portátil es conveniente de llevar y fácil de usar.",
    categoria: "Belleza",
    destacado: false,
    precio: 79,
    precioPack: 149,
    imagenes: [
      CDN + "8812/17805802771%20(3).webp",
      CDN + "8812/1780580277WhatsApp%20Image%202026-06-04%20at%208.37.37%20AM.jpeg",
      CDN + "8812/1780758456WhatsApp%20Image%202026-01-15%20at%201.00.35%20PM.jpeg"
    ],
    beneficios: [
      "La crema hidrata y suaviza la piel, disminuye la melanina",
      "Puede ser una crema para cuidar tus labios en cualquier lugar y momento",
      "Adecuado para ser utilizado en labios, areola, axilas, parte trasera, etc",
      "Adecuado para la mayoría de los tipos de piel"
    ],
    descripcion: "El tamaño portátil es conveniente de llevar y fácil de usar. Aplica una cantidad adecuada del producto sobre la piel limpia y seca de la cara y el cuerpo, masajeando suavemente hasta que se absorba por completo.",
    incluye: ["1 Crema aclarante de zonas biaoqua 30g"]
  },
  {
    slug: "crema-anti-acne-bioaqua-30g-bioaqua-8813",
    dropiId: 8813,
    nombre: "Crema anti acné bioaqua 30g bioaqua",
    corto: "Coloca una pequeña cantidad de crema en las zonas afectadas.",
    categoria: "Belleza",
    destacado: false,
    precio: 59,
    precioPack: 109,
    imagenes: [
      CDN + "8813/17805804181%20(4).webp",
      CDN + "8813/17805804182%20(3).webp",
      CDN + "8813/17805804183%20(2).webp"
    ],
    beneficios: [
      "Controla el exceso de grasa y mantiene la piel fresca",
      "Reduce la apariencia de poros dilatados",
      "Previene inflamaciones y la formación de nuevas cicatrices",
      "Lava el rostro con un jabón o espuma limpiadora"
    ],
    descripcion: "Coloca una pequeña cantidad de crema en las zonas afectadas.",
    incluye: ["1 Crema anti acné bioaqua 30g bioaqua"]
  },
  {
    slug: "juego-de-kit-de-ciencia-y-experimentos-8819",
    dropiId: 8819,
    nombre: "Juego de kit de ciencia y experimentos",
    corto: "El Kit de Ciencia Química Educativo está diseñado para que los niños exploren el mundo científico de forma…",
    categoria: "Juegos",
    destacado: false,
    precio: 89,
    precioPack: 169,
    imagenes: [
      CDN + "8819/17805818671%20(4).webp",
      CDN + "8819/17805818672%20(4).webp",
      CDN + "8819/17805818673%20(3).webp"
    ],
    beneficios: [
      "KIT DE CIENCIA Y EXPERIMENTOS COMPLETO",
      "Contiene materiales variados para actividades químicas",
      "Favorece el aprendizaje STEM",
      "Estimula la curiosidad y el pensamiento científico"
    ],
    descripcion: "El Kit de Ciencia Química Educativo está diseñado para que los niños exploren el mundo científico de forma práctica y entretenida.",
    incluye: ["1 Juego de kit de ciencia y experimentos"]
  },
  {
    slug: "llave-de-gasfiteria-18-en-1-8825",
    dropiId: 8825,
    nombre: "Llave de gasfiteria 18 en 1",
    corto: "Llave de gasfiteria 18 en 1.",
    categoria: "Herramientas",
    destacado: false,
    precio: 89,
    precioPack: 169,
    imagenes: [
      CDN + "8825/17805830221%20(10).webp",
      CDN + "8825/17805830222%20(10).webp",
      CDN + "8825/17805830223%20(9).webp"
    ],
    beneficios: [
      "Fabricada en plástico de ingeniería reforzado",
      "Cabezal de aleación zinc-aluminio, resistente y duradero",
      "Diseño multiusos para espacios reducidos",
      "Seleccionar el extremo adecuado según la tarea"
    ],
    descripcion: "Llave de gasfiteria 18 en 1. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Llave de gasfiteria 18 en 1"]
  },
  {
    slug: "maquina-de-afeitar-3-en-1-sonar-8826",
    dropiId: 8826,
    nombre: "Maquina de afeitar 3 en 1 sonar",
    corto: "Versatilidad 3 en 1: Incluye cabezales intercambiables para recortar el bigote, la barba, los vellos de la…",
    categoria: "Belleza",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [
      CDN + "8826/17805832081%20(11).webp",
      CDN + "8826/17805832082%20(11).webp",
      CDN + "8826/17805832073%20(10).webp"
    ],
    beneficios: [
      "Máquina de Afeitar Inalámbrica 3 en 1 - Versatilidad y Precisión para tu Rutina de",
      "Material de las Cuchillas: Acero inoxidable",
      "Color: Azul marino con detalles en negro",
      "Funciones: Afeitadora 3 en 1 (para cabello, bigote, vello nasal)"
    ],
    descripcion: "Versatilidad 3 en 1: Incluye cabezales intercambiables para recortar el bigote, la barba, los vellos de la nariz y las orejas, así como para afeitar el cabello.",
    incluye: ["1 Maquina de afeitar 3 en 1 sonar"]
  },
  {
    slug: "nivelador-laser-8827",
    dropiId: 8827,
    nombre: "Nivelador láser",
    corto: "Enciende el dispositivo y selecciona: modo de cruz, horizontal o vertical.",
    categoria: "Herramientas",
    destacado: false,
    precio: 79,
    precioPack: 149,
    imagenes: [
      CDN + "8827/17805834241%20(12).webp",
      CDN + "8827/17805834243%20(11).webp",
      CDN + "8827/17805834242%20(12).webp"
    ],
    beneficios: [
      "Ofrece 3 modos de proyección láser: Cruz, horizontal y vertical",
      "Alimentación mediante pila (tipo no especificado)",
      "Orientado a uso doméstico y comercial ligero",
      "Ayuda con trabajos versátiles"
    ],
    descripcion: "Enciende el dispositivo y selecciona: modo de cruz, horizontal o vertical. Apunta el láser hacia la superficie que deseas nivelar o marcar; permite alineaciones precisas.",
    incluye: ["1 Nivelador láser"]
  },
  {
    slug: "tablero-didactico-de-fracciones-juego-8832",
    dropiId: 8832,
    nombre: "Tablero didáctico de fracciones juego",
    corto: "El Tablero Didáctico de Fracciones de Madera es una herramienta educativa diseñada para enseñar fracciones de…",
    categoria: "Juegos",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [
      CDN + "8832/17805847111%20(5).webp",
      CDN + "8832/17805847123%20(5).webp",
      CDN + "8832/17805847112%20(5).webp"
    ],
    beneficios: [
      "TABLERO DIDÁCTICO DE FRACCIONES - JUEGO DIDÁCTICO",
      "Representación visual clara de fracciones",
      "Permite trabajar composición y descomposición",
      "Ayuda a comprender fracciones equivalentes"
    ],
    descripcion: "El Tablero Didáctico de Fracciones de Madera es una herramienta educativa diseñada para enseñar fracciones de manera visual, práctica y dinámica.",
    incluye: ["1 Tablero didáctico de fracciones juego"]
  },
  {
    slug: "gorro-gel-para-migrana-dolor-de-cabeza-6826",
    dropiId: 6826,
    nombre: "Gorro Gel Para Migrana Dolor De Cabeza",
    corto: "Efecto de larga duración: la tapa de enfriamiento de compresa fría para migrañas tiene una película de doble…",
    categoria: "Bienestar",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [
      CDN + "6826/174711006117219585264.jpg",
      CDN + "6826/174711006117219585263.jpg",
      CDN + "6826/174711006117219585262.jpg"
    ],
    beneficios: [
      "Para tu bienestar diario",
      "Cómodo y práctico",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Efecto de larga duración: la tapa de enfriamiento de compresa fría para migrañas tiene una película de doble gel que hace que el efecto frío dure más tiempo. Terapia caliente: Además de una gorra fría para las migrañas, este gorro es apto para microondas, el efecto caliente dura 30 minutos.",
    incluye: ["1 Gorro Gel Para Migrana Dolor De Cabeza"]
  },
  {
    slug: "crema-hidratante-vegana-v7-bioaqua-50g-8814",
    dropiId: 8814,
    nombre: "Crema hidratante vegana v7 bioaqua 50g",
    corto: "Enriquecida con ácido hialurónico, manteca de karité, aceite de jojoba, aceite de almendras y vitamina E.",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [
      CDN + "8814/17805806871%20(5).webp",
      CDN + "8814/17805806872%20(4).webp"
    ],
    beneficios: [
      "Hidrata en profundidad y retiene la humedad",
      "Mejora la elasticidad y suaviza la piel",
      "Reduce la apariencia de líneas finas",
      "Aporta un efecto rejuvenecedor y luminoso"
    ],
    descripcion: "Enriquecida con ácido hialurónico, manteca de karité, aceite de jojoba, aceite de almendras y vitamina E. Aplica con movimientos suaves en rostro, cuello y escote, de día y de noche, para mejores resultados.",
    incluye: ["1 Crema hidratante vegana v7 bioaqua 50g"]
  },
  {
    slug: "lentes-de-sol-inteligentes-con-bluetooth-8822",
    dropiId: 8822,
    nombre: "Lentes de sol inteligentes con bluetooth",
    corto: "La combinación perfecta de gafas de sol y auriculares bluetooth, las gafas de sol de diseño ergonómico se…",
    categoria: "Tech",
    destacado: false,
    precio: 89,
    precioPack: 169,
    imagenes: [
      CDN + "8822/17805826231%20(7).webp",
      CDN + "8822/17805826234%20(1).webp",
      CDN + "8822/17805826232%20(7).webp"
    ],
    beneficios: [
      "LENTES DE SOL INTELIGENTES CON BLUETOOTH Y AUDIFONOS INALAMBRICOS",
      "LENTES DE SOL CON AUDIFONOS BLUETOOTH",
      "Con alta velocidad de transferencia de datos, conexión estable y bajo consumo de energía",
      "Material: ABS+ Gafas"
    ],
    descripcion: "La combinación perfecta de gafas de sol y auriculares bluetooth, las gafas de sol de diseño ergonómico se adaptan a todas las formas de cara. El marco es resistente al calor y al frío, flexible y duradero, con alta resistencia, adecuado para llevar sin fatiga durante mucho tiempo.",
    incluye: ["1 Lentes de sol inteligentes con bluetooth"]
  },
  {
    slug: "karsell-pack-shampoo-botox-8147",
    dropiId: 8147,
    nombre: "Karsell pack (shampoo + botox)",
    corto: "Karsell pack (shampoo + botox).",
    categoria: "Belleza",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [
      CDN + "8147/1770405308WhatsApp%20Image%202026-02-06%20at%202.06.46%20PM.jpeg",
      CDN + "8147/1770405308WhatsApp%20Image%202026-02-06%20at%202.07.33%20PM.jpeg",
      CDN + "8147/1770405308WhatsApp%20Image%202026-02-06%20at%202.10.28%20PM.jpeg"
    ],
    beneficios: [
      "SPECIAL KARSELL",
      "El combo que tu cabello estaba esperando",
      "COMBO FOR YOU",
      "Nutrición, reparación y brillo en un solo ritual capilar"
    ],
    descripcion: "Karsell pack (shampoo + botox). Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Karsell pack (shampoo + botox)"]
  },
  {
    slug: "mini-afeitador-shaver-7726",
    dropiId: 7726,
    nombre: "Mini afeitador shaver",
    corto: "Afeitado rápido de 2 minutos Potente motor con cuchillas afiladas triples, rotación de 7200 RPM y cabezal de…",
    categoria: "Belleza",
    destacado: false,
    precio: 39,
    precioPack: 68,
    imagenes: [CDN + "7726/17579511211749678648897_a56451fb9d88127f7c71fd49db84f73e.jpg"],
    beneficios: [
      "Material de las cuchillas: acero inoxidable alemán",
      "Modo de alimentación: modo de carga USB-C",
      "Duración de la batería: 8-10 horas",
      "Tiempo de carga: 30 min - 1 hora Resistencia al agua: estándar IPX7"
    ],
    descripcion: "Afeitado rápido de 2 minutos Potente motor con cuchillas afiladas triples, rotación de 7200 RPM y cabezal de afeitado de 360 grados con un excelente mecanismo de autoafilado para ayudarte a afeitarte al instante.",
    incluye: ["1 Mini afeitador shaver"]
  },
  {
    slug: "pizarra-magnetica-didactica-3135",
    dropiId: 3135,
    nombre: "Pizarra Magnetica Didactica",
    corto: "{\"type\"…",
    categoria: "Juegos",
    destacado: false,
    precio: 79,
    precioPack: 149,
    imagenes: [
      CDN + "3135/1769898533Captura%20de%20pantalla%202026-01-31%20172702.png",
      CDN + "3135/1769898533Captura%20de%20pantalla%202026-01-31%20172506.png"
    ],
    beneficios: [
      "Diversión para toda la familia",
      "Ideal para regalar",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "{\"type\":\"doc\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"align\":null,\"indent\":null},\"content\":[{\"type\":\"text\",\"text\":\"La Pizarra Magn\\u00e9tica Did\\u00e1ctica incluye una variedad de figuras magn\\u00e9ticas con diferentes",
    incluye: ["1 Pizarra Magnetica Didactica"]
  },
  {
    slug: "aretes-zafiro-1855",
    dropiId: 1855,
    nombre: "Aretes Zafiro",
    corto: "Este par de elegantes pendientes son perfectos para que los uses diariamente con cualquier look y ocasión…",
    categoria: "Moda",
    destacado: false,
    precio: 49,
    precioPack: 89,
    imagenes: [
      CDN + "1855/1770145390Captura%20de%20pantalla%202026-02-03%20140115.png",
      CDN + "1855/1707628816Screenshot%202024-02-11%20at%2000.20.05.png",
      CDN + "1855/1770145390Captura%20de%20pantalla%202026-02-03%20135954.png"
    ],
    beneficios: [
      "Diseño moderno y cómodo",
      "Ideal para el día a día",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Este par de elegantes pendientes son perfectos para que los uses diariamente con cualquier look y ocasión permitiéndote crear outfits de escándalo tanto para tu día a día como para una celebración, evento o fiesta.",
    incluye: ["1 Aretes Zafiro"]
  },
  {
    slug: "piedra-volcanica-quita-grasa-del-rostro-2999",
    dropiId: 2999,
    nombre: "Piedra volcanica quita grasa del rostro",
    corto: "Más del 90% de las mujeres sufren de grasa facial.",
    categoria: "Belleza",
    destacado: false,
    precio: 39,
    precioPack: 68,
    imagenes: [
      CDN + "2999/1711165959Screenshot%202024-03-22%20at%2023.51.17.png",
      CDN + "2999/1711165959Screenshot%202024-03-22%20at%2023.51.35.png",
      CDN + "2999/1711165959Screenshot%202024-03-22%20at%2023.51.57.png"
    ],
    beneficios: [
      "Libre de Manchas y Acné",
      "No estropea tu maquillaje",
      "Retire cuidadosamente la tapa del dispositivo",
      "Pase suavemente el rodillo haciendo movimientos circulares en la zona oleosa"
    ],
    descripcion: "Más del 90% de las mujeres sufren de grasa facial.",
    incluye: ["1 Piedra volcanica quita grasa del rostro"]
  },
  {
    slug: "aretes-luna-1836",
    dropiId: 1836,
    nombre: "Aretes Luna",
    corto: "CALIDAD SUPERIOR: Hecho de acero de titanio que contiene propiedades anticorrosivas y se puede usar durante…",
    categoria: "Moda",
    destacado: false,
    precio: 49,
    precioPack: 89,
    imagenes: [
      CDN + "1836/1707628670Screenshot%202024-02-11%20at%2000.17.10.png",
      CDN + "1836/1707628670Screenshot%202024-02-11%20at%2000.17.36.png",
      CDN + "1836/1707628670Screenshot%202024-02-11%20at%2000.16.47.png"
    ],
    beneficios: [
      "Diseño moderno y cómodo",
      "Ideal para el día a día",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "CALIDAD SUPERIOR: Hecho de acero de titanio que contiene propiedades anticorrosivas y se puede usar durante varios años sin oxidarse ni desvanecerse.",
    incluye: ["1 Aretes Luna"]
  },
  {
    slug: "arete-flor-giratoria-1830",
    dropiId: 1830,
    nombre: "Arete Flor giratoria",
    corto: "¿Buscas un accesorio que combine elegancia y originalidad?",
    categoria: "Moda",
    destacado: false,
    precio: 39,
    precioPack: 68,
    imagenes: [
      CDN + "1830/1707628392Screenshot%202024-02-11%20at%2000.11.56.png",
      CDN + "1830/1707628392Screenshot%202024-02-11%20at%2000.12.50.png",
      CDN + "1830/1707628392Screenshot%202024-02-11%20at%2000.13.08.png"
    ],
    beneficios: [
      "¡Descubre la Magia del Arete Flor Giratorio!",
      "Ligero y Cómodo: Diseñado para un uso prolongado sin causar molestias"
    ],
    descripcion: "¿Buscas un accesorio que combine elegancia y originalidad? Diseño Sofisticado: La delicada forma de flor, disponible en tonos dorado y plateado, añade un toque de clase a cualquier atuendo.",
    incluye: ["1 Arete Flor giratoria"]
  },
  {
    slug: "collar-luna-1831",
    dropiId: 1831,
    nombre: "Collar Luna",
    corto: "Hecho de acero de titanio que contiene propiedades anticorrosivas y se puede usar durante varios años sin…",
    categoria: "Moda",
    destacado: false,
    precio: 49,
    precioPack: 89,
    imagenes: [
      CDN + "1831/1770144683Captura%20de%20pantalla%202026-02-03%20134738.png",
      CDN + "1831/1770144683Captura%20de%20pantalla%202026-02-03%20134718.png",
      CDN + "1831/1707631781Screenshot%202024-02-11%20at%2001.09.31.png"
    ],
    beneficios: [
      "Diseño moderno y cómodo",
      "Ideal para el día a día",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Hecho de acero de titanio que contiene propiedades anticorrosivas y se puede usar durante varios años sin oxidarse ni desvanecerse.",
    incluye: ["1 Collar Luna"]
  },
  {
    slug: "perky-senos-1877",
    dropiId: 1877,
    nombre: "Perky senos",
    corto: "Perky senos. Producto seleccionado por VISUAL Store.",
    categoria: "Belleza",
    destacado: false,
    precio: 59,
    precioPack: 109,
    imagenes: [
      CDN + "1877/170800481617018955611701895561568U.jpg",
      CDN + "1877/170800481617018955611701895561HW.jpg",
      CDN + "1877/170800481617018955611701895561UH.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Perky senos. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Perky senos"]
  },
  {
    slug: "set-de-brocas-corona-3449",
    dropiId: 3449,
    nombre: "Set de brocas corona",
    corto: "Un set típico de brocas corona generalmente incluye varias brocas de diferentes diámetros para adaptarse a una…",
    categoria: "Herramientas",
    destacado: false,
    precio: 49,
    precioPack: 89,
    imagenes: [
      CDN + "3449/1715177688WhatsApp%20Image%202024-04-29%20at%209.54.40%20AM%20(1).jpeg",
      CDN + "3449/1715177688WhatsApp%20Image%202024-04-24%20at%209.26.04%20AM.jpeg"
    ],
    beneficios: [
      "Resistente y práctico",
      "Para casa y trabajos",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Un set típico de brocas corona generalmente incluye varias brocas de diferentes diámetros para adaptarse a una variedad de tamaños de agujeros. Además de las brocas corona en sí, algunos sets pueden incluir accesorios adicionales como un mandril o adaptador para fijar la broca al taladro de manera segura, así como…",
    incluye: ["1 Set de brocas corona"]
  },
  {
    slug: "shampoo-batana-con-caja-serum-de-batan-8395",
    dropiId: 8395,
    nombre: "shampoo batana con caja + serum de batan",
    corto: "¡REVELA EL PODER DE TU MELENA CON HOEGOA!",
    categoria: "Belleza",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [
      CDN + "8395/1777530268D_NQ_NP_985783-MPE108882248913_032026-O.webp",
      CDN + "8395/1777530268D_NQ_NP_2X_800838-MPE106073241222_022026-F.webp",
      CDN + "8395/1777530268D_NQ_NP_2X_607057-MPE106692687331_022026-F.webp"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "¡REVELA EL PODER DE TU MELENA CON HOEGOA!",
    incluye: ["1 shampoo batana con caja + serum de batan"]
  },
  {
    slug: "magnetic-anti-snore-nose-clip-4-pack-6255",
    dropiId: 6255,
    nombre: "Magnetic Anti Snore Nose Clip 4 Pack",
    corto: "¡Mejora tu calidad de sueño con el Clip Nasal de Silic\" Magnético Anti-Ronquidos!",
    categoria: "Bienestar",
    destacado: false,
    precio: 49,
    precioPack: 89,
    imagenes: [
      CDN + "6255/174130289871QuqoYfr5L._SS400_.jpg",
      CDN + "6255/1741302898717o1xr7klL._AC_SL1500_.jpg"
    ],
    beneficios: [
      "Clip Nasal de Silicona Magnético Anti-Ronquidos",
      "Hecho de silicona suave y segura para una comodidad duradera",
      "Diseño ergonómico para un ajuste perfecto",
      "Los imanes magnéticos incorporados mantienen el clip en su lugar"
    ],
    descripcion: "¡Mejora tu calidad de sueño con el Clip Nasal de Silic\" Magnético Anti-Ronquidos! ¡ El Clip Nasal de Silicona Magnético Anti-Ronquidos es la solución perfecta para aquellos que sufren de ronquidos y quieren mejorar su calidad de sueño!",
    incluye: ["1 Magnetic Anti Snore Nose Clip 4 Pack"]
  },
  {
    slug: "pulsera-luna-1828",
    dropiId: 1828,
    nombre: "Pulsera Luna",
    corto: "Pulsera Luna. Producto seleccionado por VISUAL Store.",
    categoria: "Moda",
    destacado: false,
    precio: 49,
    precioPack: 89,
    imagenes: [
      CDN + "1828/1769902026Captura%20de%20pantalla%202026-01-31%20182303.png",
      CDN + "1828/1769902026Captura%20de%20pantalla%202026-01-31%20182325.png",
      CDN + "1828/1707634453Screenshot%202024-02-11%20at%2001.53.28.png"
    ],
    beneficios: [
      "Lo que tienes que saber de este producto",
      "Material principal: Acero inoxidable",
      "Estilo: 100 idiomas, amor, te amo",
      "Con cierre mosquetón"
    ],
    descripcion: "Pulsera Luna. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Pulsera Luna"]
  },
  {
    slug: "llave-y-dado-universal-1841",
    dropiId: 1841,
    nombre: "Llave y Dado Universal",
    corto: "Se puede desmontar tuercas de varias formas, tornillos, ganchos, tornillos de retraso, cabezas de tornillo, etc.",
    categoria: "Herramientas",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [
      CDN + "1841/1707632194Screenshot%202024-02-11%20at%2001.15.31.png",
      CDN + "1841/1770124424Captura%20de%20pantalla%202026-02-03%20081311.png",
      CDN + "1841/1770124424Captura%20de%20pantalla%202026-02-03%20081205.png"
    ],
    beneficios: [
      "El producto es compacto y fácil de llevar. Tornillos retirables, ganchos giratorios",
      "Aplicación automática estándar y métrica"
    ],
    descripcion: "Se puede desmontar tuercas de varias formas, tornillos, ganchos, tornillos de retraso, cabezas de tornillo, etc.",
    incluye: ["1 Llave y Dado Universal"]
  },
  {
    slug: "gorro-con-luz-4563",
    dropiId: 4563,
    nombre: "Gorro con Luz",
    corto: "Gorro con Luz. Producto seleccionado por VISUAL Store.",
    categoria: "Hogar",
    destacado: false,
    precio: 39,
    precioPack: 68,
    imagenes: [
      CDN + "4563/1731042600Gorro%202.jpg",
      CDN + "4563/1731042600Gorro%201.jpg"
    ],
    beneficios: [
      "Material: Algodón",
      "Modelos: Reno, Muñeco de Nieve y Papa Noel"
    ],
    descripcion: "Gorro con Luz. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Gorro con Luz"]
  },
  {
    slug: "crema-antiestrias-8074",
    dropiId: 8074,
    nombre: "Crema antiestrias",
    corto: "AYUDA A PREVENIR LA APARICION DE ESTRIAS CON LA CREMA CORPORAL DE RAPIDA ABROSCION isdin woman ANTIESTRIAS.",
    categoria: "Belleza",
    destacado: false,
    precio: 39,
    precioPack: 68,
    imagenes: [CDN + "8074/1765845769crema%20antiestras.png"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "AYUDA A PREVENIR LA APARICION DE ESTRIAS CON LA CREMA CORPORAL DE RAPIDA ABROSCION isdin woman ANTIESTRIAS.",
    incluye: ["1 Crema antiestrias"]
  },
  {
    slug: "lentes-2-en-1-para-conducir-vision-dia-8164",
    dropiId: 8164,
    nombre: "Lentes 2 en 1 para Conducir – Visión Día",
    corto: "Los Lentes 2 en 1 para Conducir están diseñados para mejorar la visibilidad al volante tanto de día como de noche.",
    categoria: "Hogar",
    destacado: false,
    precio: 49,
    precioPack: 89,
    imagenes: [
      CDN + "8164/1771000429719.webp",
      CDN + "8164/1771000429GAFAS1.webp",
      CDN + "8164/1771000492ChatGPT%20Image%2013%20feb%202026,%2011_15_36%20a.m.%20(1).png"
    ],
    beneficios: [
      "Reducen el reflejo del sol durante el día",
      "Disminuyen el deslumbramiento de luces en la noche",
      "Mejoran el contraste y la nitidez",
      "Diseño cómodo y ligero"
    ],
    descripcion: "Los Lentes 2 en 1 para Conducir están diseñados para mejorar la visibilidad al volante tanto de día como de noche. Incluyen doble funcionalidad: lentes oscuros para el sol y lentes amarillos para reducir el deslumbramiento nocturno.",
    incluye: ["1 Lentes 2 en 1 para Conducir – Visión Día"]
  },
  {
    slug: "shampoo-anticana-9402",
    dropiId: 9402,
    nombre: "Shampoo anticana",
    corto: "Shampoo anticana. Producto seleccionado por VISUAL Store.",
    categoria: "Belleza",
    destacado: false,
    precio: 59,
    precioPack: 109,
    imagenes: [CDN + "9402/4fb85488-d0f8-47c8-8633-4950e0cf76cd.jpeg"],
    beneficios: [
      "Resultados Instantáneos: Olvida",
      "las canas desde la primera",
      "aplicación con un acabado",
      "profesional y duradero"
    ],
    descripcion: "Shampoo anticana. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Shampoo anticana"]
  },
  {
    slug: "oferta-2-secador-de-ropa-portatil-7820",
    dropiId: 7820,
    nombre: "Oferta 2 secador de ropa portatil",
    corto: "Ideal para: Dormitorios, departamentos pequeños, viajes y camping Beneficios",
    categoria: "Tech",
    destacado: false,
    precio: 169,
    precioPack: 309,
    imagenes: [
      CDN + "7820/17804626694132431.png",
      CDN + "7820/17804626691759596295ChatGPT%20Image%2019%20sept%202025,%2011_25_30%20a.m.%20(1).png",
      CDN + "7820/1759596295ChatGPT%20Image%2019%20sept%202025,%2011_25_30%20a.m.%20(1).png"
    ],
    beneficios: [
      "Soporte de material de nailon",
      "Capacidad de hasta 9 prendas a la vez",
      "Secado rápido en solo 20 minutos",
      "Temporizador inteligente de 1 a 8 horas"
    ],
    descripcion: "Ideal para: Dormitorios, departamentos pequeños, viajes y camping Beneficios:",
    incluye: ["1 Oferta 2 secador de ropa portatil"]
  },
  {
    slug: "linterna-martillo-6-en-1-regalo-lentes-5916",
    dropiId: 5916,
    nombre: "Linterna martillo 6 en 1 + regalo lentes",
    corto: "Diseñada para Emergencias Con nuestra linterna multiuso, puedes estar seguro de tener la iluminación que…",
    categoria: "Herramientas",
    destacado: false,
    precio: 49,
    precioPack: 89,
    imagenes: [
      CDN + "5916/1738341198litnernasx.jpg",
      CDN + "5916/1770047694WhatsApp%20Image%202026-02-02%20at%2010.51.09%20AM.jpeg",
      CDN + "5916/1770047694WhatsApp%20Image%202026-02-02%20at%2010.53.24%20AM.jpeg"
    ],
    beneficios: [
      "¡POTENCIA LA SEGURIDAD EN TUS VIAJES CON NUESTRA LINTERNA MULTIUSO 6 EN 1 !",
      "¿Quieres mejorar tu experiencia en exteriores?",
      "Material: plástico y aluminio",
      "Peso: 136 gramos"
    ],
    descripcion: "Diseñada para Emergencias Con nuestra linterna multiuso, puedes estar seguro de tener la iluminación que necesitas en cualquier situación. Diseñada para Emergencias: Esta linterna es mucho más que una simple luz.",
    incluye: ["1 Linterna martillo 6 en 1 + regalo lentes"]
  },
  {
    slug: "hemocream-8368",
    dropiId: 8368,
    nombre: "Hemocream",
    corto: "Las molestias por hemorroides son más comunes de lo que se habla, y HEMOCREAM fue formulado para brindar un…",
    categoria: "Bienestar",
    destacado: false,
    precio: 79,
    precioPack: 149,
    imagenes: [
      CDN + "8368/38f394cd-d3c2-4e39-a222-3593624c74ec.png",
      CDN + "8368/6890f4ca-4990-4c3a-9326-0408343b9882.png"
    ],
    beneficios: [
      "Para tu bienestar diario",
      "Cómodo y práctico",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Las molestias por hemorroides son más comunes de lo que se habla, y HEMOCREAM fue formulado para brindar un alivio real y discreto .",
    incluye: ["1 Hemocream"]
  },
  {
    slug: "shampoo-batana-premium-con-caja-8122",
    dropiId: 8122,
    nombre: "Shampoo batana premium con caja",
    corto: "Batana Oil Shampoo con extracto de romero Un shampoo natural enriquecido con aceite de batana y extracto de…",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [
      CDN + "8122/1769880083D_NQ_NP_876299-CBT80629659480_112024-O.webp",
      CDN + "8122/1769880136D_NQ_NP_2X_940690-MPE87243563000_072025-F.webp",
      CDN + "8122/17698801360bc21cd2-4e15-4d25-835f-45b48d070bb1.06f4011e00e9edaafc10dbd241d9429a.webp"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Batana Oil Shampoo con extracto de romero Un shampoo natural enriquecido con aceite de batana y extracto de romero que nutre, fortalece y revitaliza el cabello desde la raíz.",
    incluye: ["1 Shampoo batana premium con caja"]
  },
  {
    slug: "tinnidrop-7905",
    dropiId: 7905,
    nombre: "Tinnidrop",
    corto: "Alivio de larga duración con un pequeño aerosol: no tienes que poner varias gotas en tus oídos con el aerosol…",
    categoria: "Bienestar",
    destacado: false,
    precio: 59,
    precioPack: 109,
    imagenes: [CDN + "7905/1763755029TINNIDROP.jpg"],
    beneficios: [
      "Para tu bienestar diario",
      "Cómodo y práctico",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Alivio de larga duración con un pequeño aerosol: no tienes que poner varias gotas en tus oídos con el aerosol Tinnidrop Tinnitus; solo una pequeña gota proporciona un alivio duradero.",
    incluye: ["1 Tinnidrop"]
  },
  {
    slug: "crossody-bag-7906",
    dropiId: 7906,
    nombre: "Crossody bag",
    corto: "Crossody bag. Producto seleccionado por VISUAL Store.",
    categoria: "Hogar",
    destacado: false,
    precio: 59,
    precioPack: 109,
    imagenes: [CDN + "7906/1763755330CARTERA.jpg"],
    beneficios: [
      "Práctico y fácil de usar",
      "Ahorra tiempo en casa",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Crossody bag. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Crossody bag"]
  },
  {
    slug: "golden-lure-7922",
    dropiId: 7922,
    nombre: "Golden Lure",
    corto: "Un perfume masculino de alta calidad formulado con un 30% de esencia de feromonas.",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [CDN + "7922/1764283069GOLDEN.png"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Un perfume masculino de alta calidad formulado con un 30% de esencia de feromonas.",
    incluye: ["1 Golden Lure"]
  },
  {
    slug: "pulsera-lobo-1851",
    dropiId: 1851,
    nombre: "Pulsera Lobo",
    corto: "Pulsera Lobo. Producto seleccionado por VISUAL Store.",
    categoria: "Moda",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [
      CDN + "1851/1770145794Captura%20de%20pantalla%202026-02-03%20140729.png",
      CDN + "1851/1770145794Captura%20de%20pantalla%202026-02-03%20140712.png",
      CDN + "1851/1707634379Screenshot%202024-02-11%20at%2001.52.19.png"
    ],
    beneficios: [
      "¿Por qué es más bacán que dragón en Westeros?",
      "Más intimidante que Arya con su lista",
      "Brilla más que la espada de Brienne",
      "Tan fuerte como los músculos de Khal Drogo"
    ],
    descripcion: "Pulsera Lobo. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Pulsera Lobo"]
  },
  {
    slug: "rodillera-ortopedica-articulada-6827",
    dropiId: 6827,
    nombre: "Rodillera Ortopédica Articulada",
    corto: "Rodillera Ortopédica Articulada de Compresión Deportiva.",
    categoria: "Bienestar",
    destacado: false,
    precio: 49,
    precioPack: 89,
    imagenes: [
      CDN + "6827/174711064117219464472.jpeg",
      CDN + "6827/174711064017219464473.jpg",
      CDN + "6827/174711064117219464474.jpg"
    ],
    beneficios: [
      "Para tu bienestar diario",
      "Cómodo y práctico",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Rodillera Ortopédica Articulada de Compresión Deportiva. Compresión Efectiva: La rodillera proporciona compresión graduada, reduciendo la hinchazón y mejorando la circulación sanguínea en la zona afectada.",
    incluye: ["1 Rodillera Ortopédica Articulada"]
  },
  {
    slug: "rodillo-quita-pelusa-174",
    dropiId: 174,
    nombre: "Rodillo quita pelusa",
    corto: "Presentamos nuestro Rodillo Quitapelusa, tu arma secreta contra las molestas fibras y pelusas que arruinan tus…",
    categoria: "Hogar",
    destacado: false,
    precio: 39,
    precioPack: 68,
    imagenes: [
      CDN + "174/1706026427High-quality-New-Washable-Reusable-Clothes-Hair-Pet-Hair-Sticky-Roller-Household-Cleaning-Portable-Hair-Remover.jpg_220x220xz.jpg_.webp",
      CDN + "174/1706026428WhatsApp%20Image%202022-05-03%20at%204.07.44%20PM.jpeg",
      CDN + "174/1706026428Removedor-de-pelusa-reutilizable-limpiador-de-polvo-para-ropa-peine-para-perros-y-gatos-cepillo-para.jpg_Q90.jpg_.webp"
    ],
    beneficios: [
      "Deshazte de las Pelusas de Forma Rápida y Fácil",
      "SUPER PRÁCTICO Y FÁCIL DE USAR",
      "Frota suavemente en alfombras , camas, muebles, auto, ropa, etc",
      "Medidas: 7cm * 11cm*10.2cm"
    ],
    descripcion: "Presentamos nuestro Rodillo Quitapelusa, tu arma secreta contra las molestas fibras y pelusas que arruinan tus prendas. Este rodillo de dispositivo de pegado de ropa para quitar la piel, la pelusa, el cabello de muebles tapizados, ropa, alfombras, ropa de cama, cojín de sofá, asientos de automóvil de manera efectiva.",
    incluye: ["1 Rodillo quita pelusa"]
  },
  {
    slug: "corrector-de-juanete-3000",
    dropiId: 3000,
    nombre: "Corrector de juanete",
    corto: "Nuestros Correctores de juanetes son ideales para todas y cada una de las personas que sufren de juanetes de…",
    categoria: "Bienestar",
    destacado: false,
    precio: 39,
    precioPack: 68,
    imagenes: [
      CDN + "3000/1769899766Captura%20de%20pantalla%202026-01-31%20174738.png",
      CDN + "3000/1769899766Captura%20de%20pantalla%202026-01-31%20174649.png",
      CDN + "3000/1711166322Screenshot%202024-03-22%20at%2023.54.31.png"
    ],
    beneficios: [
      "¡La solución para los juanetes y los pies doloridos!",
      "¡Adiós al dolor: Descubre cómo nuestros correctores de juanetes pueden ayudarte!",
      "¿Odias tus juanetes pero quieres evitar una cirugía costosa y sus riesgos?",
      "¡Notarás una gran diferencia en pocas semanas!"
    ],
    descripcion: "Nuestros Correctores de juanetes son ideales para todas y cada una de las personas que sufren de juanetes de moderados a graves, desviación de los dedos y/o superposición de los dedos Con sólo usar nuestros correctores de juanetes de 5 a 15 minutos al día , ya puedes sentir una gran diferencia en pocas semanas.",
    incluye: ["1 Corrector de juanete"]
  },
  {
    slug: "morral-multibolsillo-con-cierre-metal-3623",
    dropiId: 3623,
    nombre: "Morral multibolsillo con cierre metal",
    corto: "Diseño multibolsillo para poder organizar mejor tus artículos",
    categoria: "Moda",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [
      CDN + "3623/17174705511.png",
      CDN + "3623/17174705512.png",
      CDN + "3623/17174705523.png"
    ],
    beneficios: [
      "Material: Nylon",
      "Forro: Poliéster",
      "Medidas Aprox: 20*7*16 cm",
      "Cierre: Metal Niquel"
    ],
    descripcion: "Diseño multibolsillo para poder organizar mejor tus artículos:",
    incluye: ["1 Morral multibolsillo con cierre metal"]
  },
  {
    slug: "papa-noel-con-escalera-7844",
    dropiId: 7844,
    nombre: "Papa Noel con Escalera",
    corto: "El Santa Escalador Navideño es la decoración perfecta para llenar tu hogar de alegría y espíritu navideño.",
    categoria: "Tech",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [CDN + "7844/1760806656LADDERSANTA80395.jpg"],
    beneficios: [
      "Movimiento automático: Papá Noel sube y baja por la escalera de forma continua",
      "Función musical: Reproduce la canción navideña “Jingle Bells”",
      "Diseño realista y festivo: traje de felpa roja con saco verde y detalles de alta calidad",
      "Fácil instalación: listo para usar, solo necesitas colocarlo en tu árbol o pared"
    ],
    descripcion: "El Santa Escalador Navideño es la decoración perfecta para llenar tu hogar de alegría y espíritu navideño. Ideal para colocar junto al árbol de Navidad, en escaparates o entradas.",
    incluye: ["1 Papa Noel con Escalera"]
  },
  {
    slug: "detector-voltaje-7869",
    dropiId: 7869,
    nombre: "Detector Voltaje",
    corto: "Facilita tus trabajos eléctricos con nuestro Multímetro Digital Inteligente de Doble Modo, diseñado para…",
    categoria: "Tech",
    destacado: false,
    precio: 169,
    precioPack: 309,
    imagenes: [
      CDN + "7869/1769901143Captura%20de%20pantalla%202026-01-31%20180905.png",
      CDN + "7869/1769901143Captura%20de%20pantalla%202026-01-31%20181136.png",
      CDN + "7869/1761838080WhatsApp%20Image%202025-10-11%20at%2010.54.47%20AM.jpeg"
    ],
    beneficios: [
      "Detección de Voltaje Anti-Quemaduras",
      "Detección Inteligente de Voltaje: Evita quemaduras accidentales",
      "Doble Modo: Medición de AC/DC, resistencia, continuidad y más",
      "Pantalla LCD: Lectura clara y precisa"
    ],
    descripcion: "Facilita tus trabajos eléctricos con nuestro Multímetro Digital Inteligente de Doble Modo, diseñado para ofrecer precisión y seguridad en cada medición.",
    incluye: ["1 Detector Voltaje"]
  },
  {
    slug: "individual-girasol-antideslizante-9412",
    dropiId: 9412,
    nombre: "Individual Girasol Antideslizante",
    corto: "Individual Girasol Antideslizante.",
    categoria: "Hogar",
    destacado: false,
    precio: 59,
    precioPack: 109,
    imagenes: [
      CDN + "9412/d5f7ff8d-e19a-4de9-8f25-afe644eeb782.jpg",
      CDN + "9412/73eab8e5-65e6-477a-be41-f5c1f3cbac30.jpg",
      CDN + "9412/img_6a920c0c103135.55705934_0.png"
    ],
    beneficios: [
      "Práctico y fácil de usar",
      "Ahorra tiempo en casa",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Individual Girasol Antideslizante. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Individual Girasol Antideslizante"]
  },
  {
    slug: "mochila-mujer-antirrobo-con-llavero-3630",
    dropiId: 3630,
    nombre: "Mochila mujer antirrobo con llavero",
    corto: "Diseño multibolsillo para poder organizar mejor tus artículos",
    categoria: "Moda",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [
      CDN + "3630/17175480183.png",
      CDN + "3630/17175480182.png",
      CDN + "3630/17175480181.png"
    ],
    beneficios: [
      "Material: Oxford",
      "Forro: Poliéster",
      "Medidas Aprox: 32*15*32cm",
      "Cierre: Nylon"
    ],
    descripcion: "Diseño multibolsillo para poder organizar mejor tus artículos:",
    incluye: ["1 Mochila mujer antirrobo con llavero"]
  },
  {
    slug: "afeitador-9d-3828",
    dropiId: 3828,
    nombre: "Afeitador 9D",
    corto: "Afeitador 9D. Producto seleccionado por VISUAL Store.",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [
      CDN + "3828/17210797044d1d32d593c4dab5888ab5e6662b1f84.webp",
      CDN + "3828/17215868589f47d31f-82d9-4ae3-abd7-a113288780f1.webp",
      CDN + "3828/1721586858718021b7-8fc2-4611-81ef-2cfab0b9f741.webp"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Afeitador 9D. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Afeitador 9D"]
  },
  {
    slug: "selladora-al-vacio-digital-7295",
    dropiId: 7295,
    nombre: "Selladora al Vacío Digital",
    corto: "Conservación profesional : Sella al vacío de forma hermética y segura, ideal para refrigerar o congelar sin…",
    categoria: "Hogar",
    destacado: false,
    precio: 79,
    precioPack: 149,
    imagenes: [
      CDN + "7295/17521696185717eba7-c40f-4b49-a4df-42e5dc7a8f96.jpg",
      CDN + "7295/1752169618512aEd3ybmL._AC_UL495_SR435,495_.jpg",
      CDN + "7295/175216961952911c9f-822a-4a62-84e2-7593732d830f.jpg"
    ],
    beneficios: [
      "Selladora al Vacío Eléctrica – Conserva tu comida fresca por más tiempo",
      "Ideal para sous-vide : Perfecta para cocinar al vacío y lograr una cocción precisa y",
      "¡Haz que tus alimentos duren hasta 5 veces más frescos!"
    ],
    descripcion: "Conservación profesional : Sella al vacío de forma hermética y segura, ideal para refrigerar o congelar sin riesgo de quemaduras por hielo. Fácil de usar : Con botones táctiles y pantalla LED, elige entre modo seco, húmedo o solo sellado según el tipo de alimento.",
    incluye: ["1 Selladora al Vacío Digital"]
  },
  {
    slug: "mochila-multi-compartimientos-con-cierre-4984",
    dropiId: 4984,
    nombre: "Mochila multi-compartimientos con cierre",
    corto: "Diseño multibolsillo para poder organizar mejor tus artículos",
    categoria: "Moda",
    destacado: false,
    precio: 129,
    precioPack: 239,
    imagenes: [
      CDN + "4984/17349876744.jpg",
      CDN + "4984/17349876741.jpg",
      CDN + "4984/17349876742.jpg"
    ],
    beneficios: [
      "Material: Tela Oxford",
      "Forro: Poliéster",
      "Medidas Aprox: 34*13*27 cm",
      "Abertura: Cierre (cremallera)"
    ],
    descripcion: "Diseño multibolsillo para poder organizar mejor tus artículos:",
    incluye: ["1 Mochila multi-compartimientos con cierre"]
  },
  {
    slug: "masajeador-de-pies-6828",
    dropiId: 6828,
    nombre: "Masajeador de pies",
    corto: "Masaje de pies-Cuando coloca ambos pies en la almohadilla, el masajeador de pies masajea los músculos de los…",
    categoria: "Bienestar",
    destacado: false,
    precio: 59,
    precioPack: 109,
    imagenes: [CDN + "6828/17471109101726172987WhatsApp%20Image%202024-09-11%20at%202.03.24%20PM.jpeg"],
    beneficios: [
      "Para tu bienestar diario",
      "Cómodo y práctico",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Masaje de pies-Cuando coloca ambos pies en la almohadilla, el masajeador de pies masajea los músculos de los pies para aliviar el dolor, relajar los músculos y entrenar los músculos de la parte principal.",
    incluye: ["1 Masajeador de pies"]
  },
  {
    slug: "audifono-estilo-arete-7816",
    dropiId: 7816,
    nombre: "Audifono estilo arete",
    corto: "Lleva tu música y llamadas a otro nivel con los audífonos inalámbricos TWS de Tukuy Rikuy .",
    categoria: "Moda",
    destacado: false,
    precio: 59,
    precioPack: 109,
    imagenes: [CDN + "7816/17591674211758385789872_ChatGPT%20Image%2020%20sept%202025,%2011_29_09%20a.m.%20(1).png"],
    beneficios: [
      "Audífonos Inalámbricos TWS – Sonido Premium y Estilo Moderno",
      "Conexión Bluetooth estable: Emparejamiento rápido y sin interrupciones",
      "Diseño ergonómico: Ajuste cómodo, ideal para largas horas de uso",
      "Estuche cargador portátil: Hasta varias cargas adicionales para todo el día"
    ],
    descripcion: "Lleva tu música y llamadas a otro nivel con los audífonos inalámbricos TWS de Tukuy Rikuy . Disfruta de tu música, llamadas y videos sin cables ni enredos.",
    incluye: ["1 Audifono estilo arete"]
  },
  {
    slug: "herramienta-para-de-sierra-caladora-4094",
    dropiId: 4094,
    nombre: "Herramienta para de sierra Caladora",
    corto: "¡Haz más con tus herramientas!",
    categoria: "Herramientas",
    destacado: false,
    precio: 79,
    precioPack: 149,
    imagenes: [
      CDN + "4094/1723779788Screenshot%202024-08-15%20at%2022.41.45.png",
      CDN + "4094/1723779788Screenshot%202024-08-15%20at%2022.40.31.png",
      CDN + "4094/1723779788Screenshot%202024-08-15%20at%2022.41.35.png"
    ],
    beneficios: [
      "Adaptador de Sierra Eléctrica: Convierte Tu Taladro en una Potente Sierra",
      "¿Es compatible con todos los taladros?",
      "¿Qué tipo de hojas de sierra puedo usar?",
      "¿Es fácil de usar para principiantes?"
    ],
    descripcion: "¡Haz más con tus herramientas! Versatilidad Increíble: Convierte cualquier taladro eléctrico estándar en una sierra eléctrica en cuestión de segundos.",
    incluye: ["1 Herramienta para de sierra Caladora"]
  },
  {
    slug: "mochila-set-3-piezas-para-nina-5924",
    dropiId: 5924,
    nombre: "Mochila set 3 piezas para niña",
    corto: "Mochila set 3 piezas para niña.",
    categoria: "Moda",
    destacado: false,
    precio: 269,
    precioPack: 489,
    imagenes: [
      CDN + "5924/17383526941.jpg",
      CDN + "5924/17383526943.jpg",
      CDN + "5924/1738352693cartable-petite-sirene-violet-clair_1024x1024.webp"
    ],
    beneficios: [
      "Material: Nylon",
      "Forro: Poliéster",
      "Medidas Aprox: 30*15*42 cm",
      "Abertura: Cierre (cremallera)"
    ],
    descripcion: "Mochila set 3 piezas para niña. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Mochila set 3 piezas para niña"]
  },
  {
    slug: "mochila-set-3-piezas-para-nino-5925",
    dropiId: 5925,
    nombre: "Mochila set 3 piezas para niño",
    corto: "Mochila set 3 piezas para niño.",
    categoria: "Moda",
    destacado: false,
    precio: 269,
    precioPack: 489,
    imagenes: [
      CDN + "5925/17383523384.jpg",
      CDN + "5925/17383523385.jpg",
      CDN + "5925/173835305071LeRQuB9dL._AC_SL1500_.jpg"
    ],
    beneficios: [
      "Material: Nylon",
      "Forro: Poliéster",
      "Medidas Aprox: 30*15*42 cm",
      "Abertura: Cierre (cremallera)"
    ],
    descripcion: "Mochila set 3 piezas para niño. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Mochila set 3 piezas para niño"]
  },
  {
    slug: "sellador-y-reparador-de-llantas-9723",
    dropiId: 9723,
    nombre: "Sellador y reparador de llantas",
    corto: "¡Maneja sin Miedo a Quedarte Tirado por una Llanta Pinchada!",
    categoria: "Auto",
    destacado: false,
    precio: 39,
    precioPack: 68,
    imagenes: [
      CDN + "9723/8f944fb2-3e83-410b-ae83-a133cfa4d88a.jpg",
      CDN + "9723/d90f546b-bbd6-46b2-ba41-3df8c7c21893.jpg",
      CDN + "9723/41349cab-8fc2-4f6e-b96d-84f3b965b436.jpg"
    ],
    beneficios: [
      "Reparación e inflado instantáneo sin herramientas",
      "Fórmula de alta eficacia y duradera",
      "Compatibilidad universal para autos, motos y camionetas",
      "Presentación portátil de 500 g"
    ],
    descripcion: "¡Maneja sin Miedo a Quedarte Tirado por una Llanta Pinchada!",
    incluye: ["1 Sellador y reparador de llantas"]
  },
  {
    slug: "mochila-astronauta-oficio-con-2-ruedas-5927",
    dropiId: 5927,
    nombre: "Mochila astronauta oficio con 2 ruedas",
    corto: "Mochila astronauta oficio con 2 ruedas.",
    categoria: "Moda",
    destacado: false,
    precio: 259,
    precioPack: 469,
    imagenes: [
      CDN + "5927/17407637151.jpg",
      CDN + "5927/17407637153.jpg",
      CDN + "5927/17407637152.jpg"
    ],
    beneficios: [
      "Material: Nylon",
      "Forro: Poliéster",
      "Base: 2 Ruedas",
      "Medidas Aprox: 30*18*40 cm"
    ],
    descripcion: "Mochila astronauta oficio con 2 ruedas. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Mochila astronauta oficio con 2 ruedas"]
  },
  {
    slug: "cartera-panalera-hojas-porta-biberon-4158",
    dropiId: 4158,
    nombre: "Cartera pañalera hojas porta biberon",
    corto: "Diseño multibolsillo para poder organizar mejor tus artículos",
    categoria: "Moda",
    destacado: false,
    precio: 159,
    precioPack: 289,
    imagenes: [CDN + "4158/17247651272.png"],
    beneficios: [
      "Material: Cuero PU",
      "Forro: Poliéster",
      "Medidas Aprox: 39*15*31 cm",
      "Cierre: Nylon"
    ],
    descripcion: "Diseño multibolsillo para poder organizar mejor tus artículos:",
    incluye: ["1 Cartera pañalera hojas porta biberon"]
  },
  {
    slug: "mochila-vaquera-denim-multibolsillo-4160",
    dropiId: 4160,
    nombre: "Mochila vaquera denim multibolsillo",
    corto: "Diseño multibolsillo para poder organizar mejor tus artículos",
    categoria: "Moda",
    destacado: false,
    precio: 199,
    precioPack: 359,
    imagenes: [
      CDN + "4160/17247688501.jpg",
      CDN + "4160/17247688503.jpg",
      CDN + "4160/17247688502.jpg"
    ],
    beneficios: [
      "Material: Denim",
      "Detalles: Cuero PU",
      "Forro: Poliéster",
      "Medidas Aprox: 35*16*45 cm"
    ],
    descripcion: "Diseño multibolsillo para poder organizar mejor tus artículos:",
    incluye: ["1 Mochila vaquera denim multibolsillo"]
  },
  {
    slug: "lonchera-termica-con-correa-ajustable-da-6206",
    dropiId: 6206,
    nombre: "Lonchera termica con correa ajustable-da",
    corto: "2. Evita abrir la lonchera despues de colocar los alimentos.",
    categoria: "Juegos",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [
      CDN + "6206/17404176951.jpg",
      CDN + "6206/17404176952.jpg",
      CDN + "6206/17404176953.jpg"
    ],
    beneficios: [
      "Material: Poliéster",
      "Revestimiento: Aluminio térmico",
      "Medidas Aprox: 24*17*20 cm",
      "1. Usa contenedores herméticos apropiados para mantener los alimentos fríos o calientes"
    ],
    descripcion: "2. Evita abrir la lonchera despues de colocar los alimentos. 3.",
    incluye: ["1 Lonchera termica con correa ajustable-da"]
  },
  {
    slug: "anillo-buho-695",
    dropiId: 695,
    nombre: "anillo buho",
    corto: "anillo buho Un anillo liso que es lo suficientemente cómodo como para llevar a diario.",
    categoria: "Moda",
    destacado: false,
    precio: 59,
    precioPack: 109,
    imagenes: [
      CDN + "695/1699524144FBDGDBB__1_-removebg-preview.png",
      CDN + "695/1699524144foto%20anuncio%202.jpg"
    ],
    beneficios: [
      "son ajustables para el dedo regulable",
      "unico color de la foto"
    ],
    descripcion: "anillo buho Un anillo liso que es lo suficientemente cómodo como para llevar a diario.",
    incluye: ["1 anillo buho"]
  },
  {
    slug: "serum-acido-de-hialuronico-30ml-vena-7318",
    dropiId: 7318,
    nombre: "Serum Acido de Hialuronico 30ml - Vena",
    corto: "Hidratación profunda: El ácido hialurónico es conocido por su capacidad para retener grandes cantidades de…",
    categoria: "Belleza",
    destacado: false,
    precio: 139,
    precioPack: 259,
    imagenes: [CDN + "7318/1752270871VENA5-3_ab95096c-8485-47f7-a0da-b197b1f29a7f.webp"],
    beneficios: [
      "Serum Acido Hialuronico 30ml Vena",
      "Somos importaciones sumak",
      "Apto para todo tipo de piel: Es adecuado para pieles secas, grasas, mixtas y sensibles",
      "Limpieza: Lava tu rostro con un limpiador suave y seca con palmaditas"
    ],
    descripcion: "Hidratación profunda: El ácido hialurónico es conocido por su capacidad para retener grandes cantidades de agua, lo que ayuda a mantener la piel hidratada y suave. Reducción de líneas de expresión: Al mantener la piel hidratada, puede disminuir la apariencia de arrugas y líneas finas.",
    incluye: ["1 Serum Acido de Hialuronico 30ml - Vena"]
  },
  {
    slug: "serum-retinol-lila-30ml-bioaqua-9011",
    dropiId: 9011,
    nombre: "Serum Retinol Lila 30ml BIOAQUA",
    corto: "Serum Retinol Lila 30ml BIOAQUA.",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [CDN + "9011/img_6a2c5b2388f2a1.09635219_0.png"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Serum Retinol Lila 30ml BIOAQUA. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Serum Retinol Lila 30ml BIOAQUA"]
  },
  {
    slug: "encendedor-de-cocina-recargable-1099",
    dropiId: 1099,
    nombre: "Encendedor de Cocina Recargable",
    corto: "¡Olvídate de la falta de fósforos o que no enciendes por la humedad o que se acabo el gas del encendedor!",
    categoria: "Hogar",
    destacado: false,
    precio: 49,
    precioPack: 89,
    imagenes: [
      CDN + "1099/1702574844(6-7)%20ENCENDEDOR%20ELECTRICO.png",
      CDN + "1099/1702574844(6-7)%20ENCENDEDOR%20ELECTRICO.jpeg"
    ],
    beneficios: [
      "Encendedor de Cocina Recargable, 25cm COD C512527 - Colores Surtidos",
      "Encendedor Eléctrico Recargable 360° con USB",
      "Sin llama, sin gas necesario, Pequeño y ligero. Dispositivo de viaje perfecto",
      "RECARGABLE USB"
    ],
    descripcion: "¡Olvídate de la falta de fósforos o que no enciendes por la humedad o que se acabo el gas del encendedor! Tiene una apariencia elegante y actual, y se convierte en una herramienta imprescindible y segura en el hogar, así sea para su en la cocina, en las celebraciones con la torta o la iluminación con velas y más.",
    incluye: ["1 Encendedor de Cocina Recargable"]
  },
  {
    slug: "cortador-de-calamina-8748",
    dropiId: 8748,
    nombre: "Cortador de Calamina",
    corto: "Cortador de Calamina.",
    categoria: "Herramientas",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [CDN + "8748/img_6a122367e8b4a8.37206444_0.png"],
    beneficios: [
      "Resistente y práctico",
      "Para casa y trabajos",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Cortador de Calamina. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Cortador de Calamina"]
  },
  {
    slug: "afilador-de-brocas-8753",
    dropiId: 8753,
    nombre: "Afilador de Brocas",
    corto: "Afilador de Brocas ayuda a restaurar el filo de brocas desgastadas de manera práctica y eficiente, permitiendo…",
    categoria: "Herramientas",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [CDN + "8753/img_6a122375825cc9.89241898_0.jpg"],
    beneficios: [
      "Resistente y práctico",
      "Para casa y trabajos",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Afilador de Brocas ayuda a restaurar el filo de brocas desgastadas de manera práctica y eficiente, permitiendo mejorar el rendimiento y precisión durante el trabajo.",
    incluye: ["1 Afilador de Brocas"]
  },
  {
    slug: "exfoliante-corporal-de-arroz-7342",
    dropiId: 7342,
    nombre: "Exfoliante Corporal de Arroz",
    corto: "Modo de uso: Aplicar una cantidad generosa sobre la piel húmeda masajear suavemente con movimientos circulares…",
    categoria: "Belleza",
    destacado: false,
    precio: 129,
    precioPack: 239,
    imagenes: [
      CDN + "7342/1752530082COD650-00.webp",
      CDN + "7342/1752530081COD650.webp",
      CDN + "7342/1752530081COD650-0.webp"
    ],
    beneficios: [
      "Exfoliante Corporal de Arroz - Fruit of the Wakali 500ml",
      "Blanqueamiento efectivo de la piel, mejora de manera efectiva la piel opaca",
      "Contiene: 500ml c/u",
      "Para todo tipo de piel"
    ],
    descripcion: "Modo de uso: Aplicar una cantidad generosa sobre la piel húmeda masajear suavemente con movimientos circulares y enjuague con abundante agua. Advertencias: Mantener en un lugar cálido, solo para uso externo, mantener fuera del alcance de los niños.",
    incluye: ["1 Exfoliante Corporal de Arroz"]
  },
  {
    slug: "exfoliante-corporal-miel-con-sal-500ml-7356",
    dropiId: 7356,
    nombre: "Exfoliante corporal Miel con sal 500ml",
    corto: "Aplicar una cantidad generosa sobre la piel húmeda.",
    categoria: "Belleza",
    destacado: false,
    precio: 119,
    precioPack: 219,
    imagenes: [
      CDN + "7356/1752554466REALPLAZA-2_23d48e84-ce2d-4ef3-9a1a-edac3839f935.webp",
      CDN + "7356/1752554466MODODEUSOSUMAK_372f73d1-b1e8-43f1-b575-7fde14b88fe8.webp"
    ],
    beneficios: [
      "FRUIT OF THE WOKALI BODY SCRUB HONEY WITH",
      "Exfoliante corporal Miel con sal – Fruit of the Wokali",
      "Las células muertas del cutis",
      "Hipoalergénico Formulado sin parabenos ni ftalatos No comedogénico EXFOLIANTES 100 %"
    ],
    descripcion: "Aplicar una cantidad generosa sobre la piel húmeda. Conservar en un lugar fresco y seco, protegido de la luz solar directa.",
    incluye: ["1 Exfoliante corporal Miel con sal 500ml"]
  },
  {
    slug: "exfoliante-corporal-de-pepino-7368",
    dropiId: 7368,
    nombre: "Exfoliante corporal de Pepino",
    corto: "Este exfoliante de fresa galardonado como exfoliante 100% natural, limpia profundamente dejando la piel lisa y…",
    categoria: "Belleza",
    destacado: false,
    precio: 159,
    precioPack: 289,
    imagenes: [CDN + "7368/1752556565COM148-1_fddd7c84-1a63-4877-888f-777c231ca00c.webp"],
    beneficios: [
      "Exfoliante corporal de Pepino 500Gr + Refinador de Poros de Aloe Vera 100Gr",
      "Exfoliante corporal de Pepino 500Gr",
      "Exfolia profundamente",
      "Obtén una piel suave"
    ],
    descripcion: "Este exfoliante de fresa galardonado como exfoliante 100% natural, limpia profundamente dejando la piel lisa y brillante al instante. Contiene: Hipoalergénico, no comedogénico, formulado, sin parabenos y ftalatos.",
    incluye: ["1 Exfoliante corporal de Pepino"]
  },
  {
    slug: "bolso-cartera-con-broche-blanco-y-negro-3621",
    dropiId: 3621,
    nombre: "Bolso cartera con broche blanco y negro",
    corto: "Diseño de un compartimento para poder organizar mejor tus artículos",
    categoria: "Moda",
    destacado: false,
    precio: 129,
    precioPack: 239,
    imagenes: [
      CDN + "3621/17174690478.png",
      CDN + "3621/17174690471.png",
      CDN + "3621/17174690474.png"
    ],
    beneficios: [
      "Material: Canvas",
      "Forro: Poliéster",
      "Medidas Aprox: 50*30*15cm",
      "Sello con Broche"
    ],
    descripcion: "Diseño de un compartimento para poder organizar mejor tus artículos",
    incluye: ["1 Bolso cartera con broche blanco y negro"]
  },
  {
    slug: "bolso-cartera-vintage-cuero-pu-c-cierre-3650",
    dropiId: 3650,
    nombre: "Bolso cartera vintage cuero pu c/ cierre",
    corto: "Diseño multibolsillo para poder organizar mejor tus artículos",
    categoria: "Moda",
    destacado: false,
    precio: 149,
    precioPack: 269,
    imagenes: [
      CDN + "3650/171763691713.png",
      CDN + "3650/171763691712.png",
      CDN + "3650/171763691710.png"
    ],
    beneficios: [
      "Material: Cuero PU",
      "Forro: Poliéster",
      "Medidas Aprox: 34*21*15 CM",
      "Cierre: Nylon"
    ],
    descripcion: "Diseño multibolsillo para poder organizar mejor tus artículos:",
    incluye: ["1 Bolso cartera vintage cuero pu c/ cierre"]
  },
  {
    slug: "bolso-cartera-maletin-con-asa-de-mano-4100",
    dropiId: 4100,
    nombre: "Bolso cartera maletin con asa de mano",
    corto: "Bolso cartera maletin con asa de mano.",
    categoria: "Moda",
    destacado: false,
    precio: 119,
    precioPack: 219,
    imagenes: [
      CDN + "4100/17239519181.png",
      CDN + "4100/17239519182.png",
      CDN + "4100/17239519184.png"
    ],
    beneficios: [
      "Material: Nylon",
      "Forro: Poliéster",
      "Medidas Aprox: 50*20*33 CM",
      "Cierre: Nylon"
    ],
    descripcion: "Bolso cartera maletin con asa de mano. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Bolso cartera maletin con asa de mano"]
  },
  {
    slug: "cartera-canva-listado-con-cierre-3625",
    dropiId: 3625,
    nombre: "Cartera canva listado con cierre",
    corto: "Cartera canva listado con cierre.",
    categoria: "Moda",
    destacado: false,
    precio: 149,
    precioPack: 269,
    imagenes: [
      CDN + "3625/17174712955.png",
      CDN + "3625/17174712952.png",
      CDN + "3625/17174712954.png"
    ],
    beneficios: [
      "Material: Lona Algodón de alta calidad",
      "Forro: Poliéster",
      "Medidas Aprox: 34*15*31 cm",
      "Cremallera: Metal Plateado"
    ],
    descripcion: "Cartera canva listado con cierre. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Cartera canva listado con cierre"]
  },
  {
    slug: "cartera-canva-listado-broche-y-asas-3626",
    dropiId: 3626,
    nombre: "Cartera canva listado broche y asas",
    corto: "Cartera canva listado broche y asas.",
    categoria: "Moda",
    destacado: false,
    precio: 169,
    precioPack: 309,
    imagenes: [
      CDN + "3626/1717515662Dise%C3%B1o%20sin%20t%C3%ADtulo%20(3).png",
      CDN + "3626/1717515546Dise%C3%B1o%20sin%20t%C3%ADtulo%20(2).png",
      CDN + "3626/1717515834Dise%C3%B1o%20sin%20t%C3%ADtulo%20(5).png"
    ],
    beneficios: [
      "Material: Lona 100% algodón de alta calidad",
      "Forro: Poliéster",
      "Medidas Aprox: 34*15*31 cm",
      "Broche: Metal Plateado"
    ],
    descripcion: "Cartera canva listado broche y asas. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Cartera canva listado broche y asas"]
  },
  {
    slug: "cepillo-de-limpieza-2-en-1-de-120-grados-9377",
    dropiId: 9377,
    nombre: "Cepillo de Limpieza 2 en 1 de 120 Grados",
    corto: "Práctico y versátil para facilitar la limpieza de diferentes espacios del hogar.",
    categoria: "Hogar",
    destacado: false,
    precio: 59,
    precioPack: 109,
    imagenes: [
      CDN + "9377/0fb86174-68cf-4975-ac7d-d287d776f51b.jpg",
      CDN + "9377/27466536-405d-40da-bc98-cfb052f668f4.jpg",
      CDN + "9377/ab41ef53-70c2-4ab2-80f1-eda194ea2a18.jpg"
    ],
    beneficios: [
      "Diseño práctico 2 en 1",
      "Ángulo de 120 grados para facilitar la limpieza",
      "Permite alcanzar esquinas y espacios de difícil acceso",
      "Cómodo y fácil de usar"
    ],
    descripcion: "Práctico y versátil para facilitar la limpieza de diferentes espacios del hogar. Un accesorio práctico que te ayudará a mantener cada rincón más limpio con menos esfuerzo.",
    incluye: ["1 Cepillo de Limpieza 2 en 1 de 120 Grados"]
  },
  {
    slug: "mochila-morral-convertible-elefante-4101",
    dropiId: 4101,
    nombre: "Mochila morral convertible elefante",
    corto: "Incluye: Asas convertibles a Mochila o Morral y asas de mano reforzadas Diseño multibolsillo/compartimientos…",
    categoria: "Moda",
    destacado: false,
    precio: 119,
    precioPack: 219,
    imagenes: [
      CDN + "4101/1769189333714V0e4mTeL._AC_SX679_.jpg",
      CDN + "4101/1723957115MORRAL%20AFRODITA.png",
      CDN + "4101/1723957115MORRAL%20AFRODITA%20(1).png"
    ],
    beneficios: [
      "Material: Nylon/Oxford",
      "Forro: Poliéster",
      "Medidas Aprox: 24*9*22 CM",
      "Cierre: Nylon"
    ],
    descripcion: "Incluye: Asas convertibles a Mochila o Morral y asas de mano reforzadas Diseño multibolsillo/compartimientos para poder organizar mejor tus artículos:",
    incluye: ["1 Mochila morral convertible elefante"]
  },
  {
    slug: "mochila-morral-convertible-musa-4102",
    dropiId: 4102,
    nombre: "Mochila morral convertible musa",
    corto: "Incluye: Asas convertibles a Mochila o Morral y asas de mano reforzadas Diseño multibolsillo/compartimientos…",
    categoria: "Moda",
    destacado: false,
    precio: 119,
    precioPack: 219,
    imagenes: [
      CDN + "4102/1724035267DETALLE%201.jpg",
      CDN + "4102/1724035209MORRAL%20AFRODITA%20(1).png",
      CDN + "4102/1769189477DETALLE%205.jpg"
    ],
    beneficios: [
      "Material: Nylon/Oxford",
      "Forro: Poliéster",
      "Medidas Aprox: 24*9*22 CM",
      "Cierre: Nylon"
    ],
    descripcion: "Incluye: Asas convertibles a Mochila o Morral y asas de mano reforzadas Diseño multibolsillo/compartimientos para poder organizar mejor tus artículos:",
    incluye: ["1 Mochila morral convertible musa"]
  },
  {
    slug: "mochila-morral-convertible-osito-4109",
    dropiId: 4109,
    nombre: "Mochila morral convertible osito",
    corto: "Incluye: Asas convertibles a Mochila o Morral y asas de mano reforzadas Diseño multibolsillo/compartimientos…",
    categoria: "Moda",
    destacado: false,
    precio: 119,
    precioPack: 219,
    imagenes: [
      CDN + "4109/1769189768DETALLE%203.jpg",
      CDN + "4109/1724040006MORRAL%20AFRODITA%20(4).png",
      CDN + "4109/1724040003MORRAL%20AFRODITA%20(3).png"
    ],
    beneficios: [
      "Material: Nylon/Oxford",
      "Forro: Poliéster",
      "Medidas Aprox: 24*9*22 CM",
      "Cierre: Nylon"
    ],
    descripcion: "Incluye: Asas convertibles a Mochila o Morral y asas de mano reforzadas Diseño multibolsillo/compartimientos para poder organizar mejor tus artículos:",
    incluye: ["1 Mochila morral convertible osito"]
  },
  {
    slug: "serum-facial-hy-advance-complex-7435",
    dropiId: 7435,
    nombre: "Serum Facial Hy Advance Complex",
    corto: "Este serum facial está formulado con un complejo avanzado que combina ingredientes hidratantes y nutritivos…",
    categoria: "Belleza",
    destacado: false,
    precio: 129,
    precioPack: 239,
    imagenes: [CDN + "7435/1752804782COD1195-01_7d619f8a-218f-4f18-9eda-9e5f310888e2.webp"],
    beneficios: [
      "SERUM FACIAL HY ADVANCE COMPLEX – PORTUGAL - 30ML",
      "o Hidratación intensiva y duradera",
      "o Mejora la elasticidad y firmeza de la piel",
      "o Ayuda a reducir la apariencia de líneas finas y arrugas"
    ],
    descripcion: "Este serum facial está formulado con un complejo avanzado que combina ingredientes hidratantes y nutritivos para la piel. Modo de uso: Aplicar unas gotas sobre la piel limpia y seca, masajear suavemente hasta su completa absorción.",
    incluye: ["1 Serum Facial Hy Advance Complex"]
  },
  {
    slug: "serum-facial-rice-raw-pulp-bioaqua-8961",
    dropiId: 8961,
    nombre: "Serum Facial Rice Raw Pulp BIOAQUA",
    corto: "Serum Facial Rice Raw Pulp BIOAQUA.",
    categoria: "Belleza",
    destacado: false,
    precio: 79,
    precioPack: 149,
    imagenes: [CDN + "8961/img_6a2843ae118ad8.17618893_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Serum Facial Rice Raw Pulp BIOAQUA. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Serum Facial Rice Raw Pulp BIOAQUA"]
  },
  {
    slug: "mochila-unisex-con-monedero-circular-4986",
    dropiId: 4986,
    nombre: "Mochila unisex con monedero circular",
    corto: "Mochila unisex con monedero circular.",
    categoria: "Moda",
    destacado: false,
    precio: 89,
    precioPack: 169,
    imagenes: [
      CDN + "4986/17350194287.jpg",
      CDN + "4986/173501942822177128966_125394529.jpg",
      CDN + "4986/173501942822177161393_125394529.jpg"
    ],
    beneficios: [
      "Material: Nylon",
      "Forro: Poliéster",
      "Medidas Aprox: 31*10*26 cm",
      "Abertura: Cierre (cremallera)"
    ],
    descripcion: "Mochila unisex con monedero circular. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Mochila unisex con monedero circular"]
  },
  {
    slug: "mochila-outdoor-denim-multibolsillo-4162",
    dropiId: 4162,
    nombre: "Mochila outdoor denim multibolsillo",
    corto: "Diseño multibolsillo para poder organizar mejor tus artículos",
    categoria: "Moda",
    destacado: false,
    precio: 179,
    precioPack: 329,
    imagenes: [
      CDN + "4162/17247723691.jpg",
      CDN + "4162/17247723694.jpg",
      CDN + "4162/17247723692.jpg"
    ],
    beneficios: [
      "Material: Denim",
      "Detalles: Nylon y Cuero PU",
      "Forro: Poliéster",
      "Medidas Aprox: 26*16*36 cm"
    ],
    descripcion: "Diseño multibolsillo para poder organizar mejor tus artículos:",
    incluye: ["1 Mochila outdoor denim multibolsillo"]
  },
  {
    slug: "adaptador-de-para-amoladora-circular-8749",
    dropiId: 8749,
    nombre: "Adaptador de Para Amoladora Circular",
    corto: "Adaptador de Para Amoladora Circular.",
    categoria: "Herramientas",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [CDN + "8749/img_6a12236d4c3411.08165651_0.png"],
    beneficios: [
      "Resistente y práctico",
      "Para casa y trabajos",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Adaptador de Para Amoladora Circular. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Adaptador de Para Amoladora Circular"]
  },
  {
    slug: "adaptador-de-sierra-8750",
    dropiId: 8750,
    nombre: "Adaptador de Sierra",
    corto: "Adaptador de Sierra. Producto seleccionado por VISUAL Store.",
    categoria: "Herramientas",
    destacado: false,
    precio: 89,
    precioPack: 169,
    imagenes: [CDN + "8750/img_6a12236edbdfa3.49021974_0.png"],
    beneficios: [
      "Resistente y práctico",
      "Para casa y trabajos",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Adaptador de Sierra. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Adaptador de Sierra"]
  },
  {
    slug: "mochila-cola-de-sirena-tamano-oficio-4985",
    dropiId: 4985,
    nombre: "Mochila cola de sirena tamaño oficio",
    corto: "Mochila cola de sirena tamaño oficio.",
    categoria: "Moda",
    destacado: false,
    precio: 169,
    precioPack: 309,
    imagenes: [
      CDN + "4985/17350165732.jpg",
      CDN + "4985/17350165733.jpg",
      CDN + "4985/17350165741.jpg"
    ],
    beneficios: [
      "Material: Nylon",
      "Forro: Poliéster",
      "Medidas Aprox: 32*16*43 cm",
      "Abertura: Cierre (cremallera)"
    ],
    descripcion: "Mochila cola de sirena tamaño oficio. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Mochila cola de sirena tamaño oficio"]
  },
  {
    slug: "mochila-acolchada-modelo-jets-4987",
    dropiId: 4987,
    nombre: "Mochila acolchada modelo jets",
    corto: "Mochila acolchada modelo jets.",
    categoria: "Moda",
    destacado: false,
    precio: 139,
    precioPack: 259,
    imagenes: [
      CDN + "4987/17350219941.jpg",
      CDN + "4987/17350221856.jpg",
      CDN + "4987/17350219947.jpg"
    ],
    beneficios: [
      "Material: Oxford",
      "Forro: Poliéster",
      "Medidas Aprox: 30*10*22 cm",
      "Abertura: Cierre (cremallera)"
    ],
    descripcion: "Mochila acolchada modelo jets. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Mochila acolchada modelo jets"]
  },
  {
    slug: "mochila-cinta-reflectiva-oficio-4989",
    dropiId: 4989,
    nombre: "Mochila cinta reflectiva oficio",
    corto: "Mochila cinta reflectiva oficio.",
    categoria: "Moda",
    destacado: false,
    precio: 149,
    precioPack: 269,
    imagenes: [
      CDN + "4989/17350747221.jpg",
      CDN + "4989/173807687612%20-%20copia.jpg",
      CDN + "4989/17350747222.jpg"
    ],
    beneficios: [
      "Material: Nylon",
      "Detalles: Cuero Pu",
      "Forro: Poliéster",
      "Medidas Aprox: 38*18*28 cm"
    ],
    descripcion: "Mochila cinta reflectiva oficio. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Mochila cinta reflectiva oficio"]
  },
  {
    slug: "mochila-trendy-estilo-coreano-5025",
    dropiId: 5025,
    nombre: "Mochila trendy estilo coreano",
    corto: "Mochila trendy estilo coreano.",
    categoria: "Moda",
    destacado: false,
    precio: 119,
    precioPack: 219,
    imagenes: [
      CDN + "5025/1735250504da5d62f4-3974-4ebe-830a-814ff2071155.png",
      CDN + "5025/1735250504167690304684a80dd12ae59ff9658e8554b90bbfad.webp",
      CDN + "5025/1735250505f4b46ced-a6d5-47e5-bd82-86a9fa155c15.png"
    ],
    beneficios: [
      "Material: Oxford",
      "No incluye llavero",
      "Forro: Poliéster",
      "Medidas Aprox: 46*15*35 cm"
    ],
    descripcion: "Mochila trendy estilo coreano. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Mochila trendy estilo coreano"]
  },
  {
    slug: "mochila-k-style-5-piezas-en-1-5026",
    dropiId: 5026,
    nombre: "Mochila k-style 5 piezas en 1",
    corto: "Mochila k-style 5 piezas en 1.",
    categoria: "Moda",
    destacado: false,
    precio: 139,
    precioPack: 259,
    imagenes: [
      CDN + "5026/17352536481695cfd2-7c26-4292-a23d-1584863341d4.png",
      CDN + "5026/1735253877%C2%A4%C3%9B%C3%83%C3%9A_026.jpg",
      CDN + "5026/1735253648589b4cb4-934b-4d6a-a040-660abc8c384b.png"
    ],
    beneficios: [
      "No incluye llavero",
      "Material: Nylon",
      "Forro: Poliéster",
      "Medidas Aprox: 43*13*31 cm"
    ],
    descripcion: "Mochila k-style 5 piezas en 1. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Mochila k-style 5 piezas en 1"]
  },
  {
    slug: "mochila-a4-multi-diseno-nina-5382",
    dropiId: 5382,
    nombre: "Mochila a4 multi-diseño niña",
    corto: "Mochila a4 multi-diseño niña.",
    categoria: "Moda",
    destacado: false,
    precio: 89,
    precioPack: 169,
    imagenes: [
      CDN + "5382/17381296784.jpg",
      CDN + "5382/173812967821097773138_467025063.jpg",
      CDN + "5382/1738129679287765eaaa7a8656183923e7e8385138.jpg"
    ],
    beneficios: [
      "Material: Oxford",
      "Forro: Poliéster",
      "Medidas Aprox: 31*10*24 cm",
      "Abertura: Cierre (cremallera)"
    ],
    descripcion: "Mochila a4 multi-diseño niña. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Mochila a4 multi-diseño niña"]
  },
  {
    slug: "mochila-juvenil-unisex-set-3-piezas-5949",
    dropiId: 5949,
    nombre: "Mochila juvenil unisex set 3 piezas",
    corto: "Mochila juvenil unisex set 3 piezas.",
    categoria: "Moda",
    destacado: false,
    precio: 129,
    precioPack: 239,
    imagenes: [
      CDN + "5949/1738377837H32e49f4b4c42417987c37fa79f422dd5O.jpg",
      CDN + "5949/1738377837Hda9f0f10531e425c9fa9fd0d09ef2c26V.webp",
      CDN + "5949/1738377837H6e1cb2985327446582d312d93c8d577f9.jpg"
    ],
    beneficios: [
      "Material: Nylon",
      "Forro: Poliéster",
      "Medidas Aprox: 33*20*47 cm",
      "Abertura: Cierre (cremallera)"
    ],
    descripcion: "Mochila juvenil unisex set 3 piezas. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Mochila juvenil unisex set 3 piezas"]
  },
  {
    slug: "lonchera-termica-impermeable-eg-6202",
    dropiId: 6202,
    nombre: "Lonchera termica impermeable - eg",
    corto: "2. Evita abrir la lonchera despues de colocar los alimentos.",
    categoria: "Juegos",
    destacado: false,
    precio: 89,
    precioPack: 169,
    imagenes: [
      CDN + "6202/17403242741.jpg",
      CDN + "6202/17403242742.jpg",
      CDN + "6202/17403242743.jpg"
    ],
    beneficios: [
      "Material: Poliéster",
      "Revestimiento: Aluminio térmico",
      "Medidas Aprox: 17*13*21 cm",
      "1. Usa contenedores herméticos apropiados para mantener los alimentos fríos o calientes"
    ],
    descripcion: "2. Evita abrir la lonchera despues de colocar los alimentos. 3.",
    incluye: ["1 Lonchera termica impermeable - eg"]
  },
  {
    slug: "lonchera-termica-abejita-ad-6226",
    dropiId: 6226,
    nombre: "Lonchera termica abejita - ad",
    corto: "2. Evita abrir la lonchera despues de colocar los alimentos.",
    categoria: "Juegos",
    destacado: false,
    precio: 119,
    precioPack: 219,
    imagenes: [
      CDN + "6226/17406887751.jpg",
      CDN + "6226/17406887752.jpg",
      CDN + "6226/17406887763.jpg"
    ],
    beneficios: [
      "Material: Poliéster",
      "Revestimiento: Aluminio térmico",
      "Medidas Aprox: 28*16*20 cm",
      "1. Usa contenedores herméticos apropiados para mantener los alimentos fríos o calientes"
    ],
    descripcion: "2. Evita abrir la lonchera despues de colocar los alimentos. 3.",
    incluye: ["1 Lonchera termica abejita - ad"]
  },
  {
    slug: "kit-de-skincare-sakura-laikou-9068",
    dropiId: 9068,
    nombre: "Kit de Skincare Sakura LAIKOU",
    corto: "Kit de Skincare Sakura LAIKOU.",
    categoria: "Belleza",
    destacado: false,
    precio: 129,
    precioPack: 239,
    imagenes: [
      CDN + "9068/img_6a32fe211271d1.53694631_0.jpg",
      CDN + "9068/d3582747-9059-4dc9-ac15-ef919b360fc3.jpg",
      CDN + "9068/875873d7-825e-40a4-9a3a-574913d1424a.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Kit de Skincare Sakura LAIKOU. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Kit de Skincare Sakura LAIKOU"]
  },
  {
    slug: "combo-2-loncheras-termicas-6237",
    dropiId: 6237,
    nombre: "Combo 2 loncheras térmicas",
    corto: "1. Usa contenedores herméticos apropiados para mantener los alimentos fríos o calientes.",
    categoria: "Juegos",
    destacado: false,
    precio: 129,
    precioPack: 239,
    imagenes: [
      CDN + "6237/17408366871.jpg",
      CDN + "6237/17408366874.jpg",
      CDN + "6237/17408366872.jpg"
    ],
    beneficios: [
      "Material: Poliéster",
      "Revestimiento: Aluminio térmico",
      "Medidas 1 Aprox : 28*16*20 cm",
      "Medidas 2 Aprox : 22.5*13*25 cm"
    ],
    descripcion: "1. Usa contenedores herméticos apropiados para mantener los alimentos fríos o calientes. 2. Evita abrir la lonchera despues de colocar los alimentos.",
    incluye: ["1 Combo 2 loncheras térmicas"]
  },
  {
    slug: "mochila-con-lonchera-azul-6238",
    dropiId: 6238,
    nombre: "Mochila con lonchera azul",
    corto: "Mochila con lonchera azul.",
    categoria: "Moda",
    destacado: false,
    precio: 249,
    precioPack: 449,
    imagenes: [
      CDN + "6238/17408377491.jpg",
      CDN + "6238/17408377493.jpg",
      CDN + "6238/17408377492.jpg"
    ],
    beneficios: [
      "Material: Nylon",
      "Detalles: Cuero Pu",
      "Forro: Poliéster",
      "Medidas Mochila Aprox: 38*18*28 cm"
    ],
    descripcion: "Mochila con lonchera azul. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Mochila con lonchera azul"]
  },
  {
    slug: "mochila-con-lonchera-ploma-6240",
    dropiId: 6240,
    nombre: "Mochila con lonchera ploma",
    corto: "Diseño multibolsillo para poder organizar mejor tus artículos",
    categoria: "Moda",
    destacado: false,
    precio: 239,
    precioPack: 439,
    imagenes: [
      CDN + "6240/17408392511.jpg",
      CDN + "6240/17408392515.jpg",
      CDN + "6240/17408392514.jpg"
    ],
    beneficios: [
      "Material: Poliéster",
      "Forro: Poliéster",
      "Medidas 1 Aprox: 40*11*28 CM",
      "Medidas 2 Aprox: 24*16*20.5 cm"
    ],
    descripcion: "Diseño multibolsillo para poder organizar mejor tus artículos:",
    incluye: ["1 Mochila con lonchera ploma"]
  },
  {
    slug: "reacondicionador-due-pos-500gr-la-bras-7016",
    dropiId: 7016,
    nombre: "Reacondicionador Due-Pos 500gr - La Bras",
    corto: "Formulado para hidratar, nutrir y dejar el cabello más manejable.",
    categoria: "Belleza",
    destacado: false,
    precio: 119,
    precioPack: 219,
    imagenes: [
      CDN + "7016/1749829328Mesadetrabajo22_7.webp",
      CDN + "7016/1749829328COD466-10.webp"
    ],
    beneficios: [
      "Reacondicionador Due - Pos 500gr - La Brasiliana",
      "Libre de sal, sulfatos y parabenos",
      "Contiene proteínas y minerales",
      "Nutre el cabello gracias al argán, colágeno, keratina y macadamia"
    ],
    descripcion: "Formulado para hidratar, nutrir y dejar el cabello más manejable. Modo de uso: Aplicar una pequeña cantidad sobre el cabello completamente mojado, efectuar un ligero masaje y dejar actuar por 5 minutos.",
    incluye: ["1 Reacondicionador Due-Pos 500gr - La Bras"]
  },
  {
    slug: "shampo-uno-pos-500gr-la-brasiliana-7017",
    dropiId: 7017,
    nombre: "Shampo Uno- Pos 500gr - La Brasiliana",
    corto: "Fórmula sin sal, que limpia suavemente, sin retirar los nutrientes de los cabellos.",
    categoria: "Belleza",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [
      CDN + "7017/1749829146Mesadetrabajo20_5.webp",
      CDN + "7017/1749829146Mesadetrabajo21_7.webp",
      CDN + "7017/1749829147BRASILIANACOD465_13_e3046d6b-27c0-49e1-8126-c0af59ae0e7c.webp"
    ],
    beneficios: [
      "Libre de sal, sulfatos y parabenos",
      "Contiene proteínas y minerales",
      "Nutre el cabello gracias al argán, colágeno, keratina y macadamia",
      "Shampo Uno- Pos- La Brasiliana"
    ],
    descripcion: "Fórmula sin sal, que limpia suavemente, sin retirar los nutrientes de los cabellos. Modo de uso: Aplicar una pequeña cantidad sobre el cabello completamente mojado, masajear suavemente el cuero cabelludo, el resto del cabello, formando una abundante espuma.",
    incluye: ["1 Shampo Uno- Pos 500gr - La Brasiliana"]
  },
  {
    slug: "romero-crecepelo-tonico-capilar-120ml-7024",
    dropiId: 7024,
    nombre: "Romero crecepelo tonico capilar 120ml",
    corto: "Tónico Capilar que fortalece y le devuelve la juventud al cabello.",
    categoria: "Belleza",
    destacado: false,
    precio: 119,
    precioPack: 219,
    imagenes: [CDN + "7024/1749831229COD1219-3.webp"],
    beneficios: [
      "Protección del cuero cabelludo",
      "Combatir la caspa",
      "Crecimiento capilar",
      "Anti-caída"
    ],
    descripcion: "Tónico Capilar que fortalece y le devuelve la juventud al cabello. Modo de uso: Sobre el cabello húmedo y limpio aplique la cantidad necesaria de tónico en el cuero cabelludo.",
    incluye: ["1 Romero crecepelo tonico capilar 120ml"]
  },
  {
    slug: "romero-crecepelo-tonico-capilar-100ml-7450",
    dropiId: 7450,
    nombre: "Romero Crecepelo Tónico Capilar 100ml",
    corto: "Tónico capilar sin enjuague que fortalece y le devuelve la juventud al cabello.",
    categoria: "Belleza",
    destacado: false,
    precio: 119,
    precioPack: 219,
    imagenes: [
      CDN + "7450/1752869802COD445-13.webp",
      CDN + "7450/1752869802COD445-14.webp"
    ],
    beneficios: [
      "Romero Crecepelo Tónico Capilar 100ml",
      "Tónico Capilar sin enjuague",
      "Restaura el cabello",
      "Uso diario"
    ],
    descripcion: "Tónico capilar sin enjuague que fortalece y le devuelve la juventud al cabello. Su formula elaborada con extractos naturales y enriquecida con Romero, promueve el crecimiento del cabello y fortalece desde la raíz.",
    incluye: ["1 Romero Crecepelo Tónico Capilar 100ml"]
  },
  {
    slug: "cerave-serum-retinol-antimarcas-30ml-7087",
    dropiId: 7087,
    nombre: "CeraVe Sérum Retinol Antimarcas 30ml",
    corto: "El Sérum Retinol Antimarcas de CeraVe está diseñado para renovar la piel durante la noche, ayudando a reducir…",
    categoria: "Belleza",
    destacado: false,
    precio: 199,
    precioPack: 359,
    imagenes: [
      CDN + "7087/1750989423DER173-05.webp",
      CDN + "7087/1750989423DER173-06.webp",
      CDN + "7087/1750989423DER173-07.webp"
    ],
    beneficios: [
      "CeraVe Sérum Retinol Antimarcas 30ml – Tratamiento renovador",
      "Reduce marcas y mejora la textura de la piel",
      "Hidrata y calma la piel con ácido hialurónico y niacinamida",
      "Fortalece la barrera cutánea con ceramidas"
    ],
    descripcion: "El Sérum Retinol Antimarcas de CeraVe está diseñado para renovar la piel durante la noche, ayudando a reducir la apariencia de marcas y mejorar la textura de la piel. Aplicar por la noche sobre el rostro y cuello limpios, evitando el área de los ojos.",
    incluye: ["1 CeraVe Sérum Retinol Antimarcas 30ml"]
  },
  {
    slug: "cerave-gel-limp-espum-236ml-foaming-cl-7089",
    dropiId: 7089,
    nombre: "CeraVe Gel Limp Espum 236ml – Foaming Cl",
    corto: "Limpieza efectiva sin resecar para piel normal a grasa.",
    categoria: "Belleza",
    destacado: false,
    precio: 159,
    precioPack: 289,
    imagenes: [
      CDN + "7089/1750989672DER171-07_96bd7a10-43dd-4d0f-b08b-e1126c8917d8.webp",
      CDN + "7089/1750989672DER-10_e005dfca-ff76-4d2b-baeb-ba16495be44d.webp",
      CDN + "7089/1750989672DER-07_de79e954-8af3-4c33-9c34-5d06d625461d.webp"
    ],
    beneficios: [
      "CeraVe Gel Limpiador Espumoso 236ml – Foaming Cleanser",
      "Limpieza profunda sin sensación tirante",
      "Controla el brillo y purifica la piel",
      "Fórmula no comedogénica y sin fragancia"
    ],
    descripcion: "Limpieza efectiva sin resecar para piel normal a grasa. Aplicar sobre el rostro húmedo, masajear suavemente con movimientos circulares y enjuagar.",
    incluye: ["1 CeraVe Gel Limp Espum 236ml – Foaming Cl"]
  },
  {
    slug: "cerave-locion-hidratante-473-ml-7092",
    dropiId: 7092,
    nombre: "CeraVe Loción Hidratante 473 ml",
    corto: "Hidratación efectiva sin sensación grasosa para piel normal a seca.",
    categoria: "Belleza",
    destacado: false,
    precio: 209,
    precioPack: 379,
    imagenes: [
      CDN + "7092/1750989861DER-07_2e616c3c-222b-461d-b41e-fe77cc99cbe2.webp",
      CDN + "7092/1750989861DER-09_8b0eb9d1-bba8-4fe0-bd7e-f8b54c03ff64.webp",
      CDN + "7092/1750989861DER-10_b42ad191-d270-4c40-b23e-e30439cc0517.webp"
    ],
    beneficios: [
      "CeraVe Loción Hidratante 473ml – Hidratación Ligera y Duradera",
      "Hidratación continua por 24 horas",
      "Ayuda a restaurar la barrera protectora de la piel",
      "Textura ligera y no comedogénica"
    ],
    descripcion: "Hidratación efectiva sin sensación grasosa para piel normal a seca. Fórmula sin fragancia, sin parabenos, ideal para piel sensible",
    incluye: ["1 CeraVe Loción Hidratante 473 ml"]
  },
  {
    slug: "cerave-crema-hidratante-facial-pm-52ml-7095",
    dropiId: 7095,
    nombre: "CeraVe Crema Hidratante Facial PM 52ml",
    corto: "La Crema Hidratante Facial PM de CeraVe es ideal para restaurar la barrera de la piel durante la noche.",
    categoria: "Belleza",
    destacado: false,
    precio: 149,
    precioPack: 269,
    imagenes: [
      CDN + "7095/1750990618DER164_5e34350e-77ff-40d4-9555-0954604eb708.webp",
      CDN + "7095/1750990618DER-8_095892f9-4500-4c68-8db6-c69b4392a5f1.webp",
      CDN + "7095/1750990618DER-7_21af720d-f470-45dd-ab77-7c348851cf1e.webp"
    ],
    beneficios: [
      "CeraVe Crema Hidratante Facial PM 52ml – Hidratación nocturna",
      "Hidratación profunda durante la noche",
      "Calma e hidrata la piel sin sensación grasa",
      "Ayuda a restaurar la barrera cutánea"
    ],
    descripcion: "La Crema Hidratante Facial PM de CeraVe es ideal para restaurar la barrera de la piel durante la noche. Aplicar por la noche sobre el rostro y cuello limpios, realizando un suave masaje hasta su total absorción.",
    incluye: ["1 CeraVe Crema Hidratante Facial PM 52ml"]
  },
  {
    slug: "shampoo-ortin-manzanilla-la-cooper-1lt-7102",
    dropiId: 7102,
    nombre: "Shampoo Ortin Manzanilla - La Cooper 1lt",
    corto: "Shampoo enriquecido con vitaminas y extractos naturales.",
    categoria: "Belleza",
    destacado: false,
    precio: 139,
    precioPack: 259,
    imagenes: [
      CDN + "7102/1751042394COD748_Mesadetrabajo1copia6.webp",
      CDN + "7102/1751042394COD748-08.webp"
    ],
    beneficios: [
      "Shampoo Ortin alta potencia en Manzanilla - La Cooper 1lt",
      "Ácido Hialuronico",
      "Cabello suave, hidratado y con más brillo",
      "Libre de sulfatos, sal, parabenos siliconas"
    ],
    descripcion: "Shampoo enriquecido con vitaminas y extractos naturales. Aplíquese el shampoo en el cuero cabelludo y masajear suavemente durante 2 a 3 minutos.",
    incluye: ["1 Shampoo Ortin Manzanilla - La Cooper 1lt"]
  },
  {
    slug: "shampoo-ortin-alta-sabila-la-cooper-1l-7115",
    dropiId: 7115,
    nombre: "Shampoo Ortin alta sábila - La Cooper 1l",
    corto: "Shampoo enriquecido con vitaminas y extractos naturales.",
    categoria: "Belleza",
    destacado: false,
    precio: 119,
    precioPack: 219,
    imagenes: [
      CDN + "7115/1751044552COD747_Mesadetrabajo1copia6.webp",
      CDN + "7115/1751044551COD747-08.webp"
    ],
    beneficios: [
      "Shampoo Ortin alta potencia en sábila - La Cooper 1lt",
      "Ácido Hialuronico",
      "Cabello suave, hidratado y con más brillo",
      "Libre de sulfatos, sal, parabenos siliconas"
    ],
    descripcion: "Shampoo enriquecido con vitaminas y extractos naturales. Aplíquese el shampoo en el cuero cabelludo y masajear suavemente durante 2 a 3 minutos.",
    incluye: ["1 Shampoo Ortin alta sábila - La Cooper 1l"]
  },
  {
    slug: "shampoo-ortin-aceite-menta-la-cooper-1lt-7125",
    dropiId: 7125,
    nombre: "Shampoo Ortin Aceite Menta La Cooper 1LT",
    corto: "Modo de uso: Aplicar sobre el cabello húmedo, masajear y enjuagar bien.",
    categoria: "Belleza",
    destacado: false,
    precio: 119,
    precioPack: 219,
    imagenes: [CDN + "7125/1751046817COD1328_27176c07-1d14-4e33-a3ff-f7bf5346f90f.webp"],
    beneficios: [
      "Ortin Aceite de Menta Shampoo by La Cooper in 1L",
      "Uso diario: Ideal para mantener el cabello limpio y fresco",
      "Presentación: Botella de 1 litro",
      "Fórmula refrescante: Con aceite de menta para una sensación revitalizante"
    ],
    descripcion: "Modo de uso: Aplicar sobre el cabello húmedo, masajear y enjuagar bien.",
    incluye: ["1 Shampoo Ortin Aceite Menta La Cooper 1LT"]
  },
  {
    slug: "jabon-facial-dermoacne-la-cooper-100g-7104",
    dropiId: 7104,
    nombre: "Jabón Facial Dermoacne - La Cooper 100g",
    corto: "Modo de uso : en la mañana y en la noche lavar tu cara y cuerpo con agua y jabón dando un ligero masaje…",
    categoria: "Belleza",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [
      CDN + "7104/1751042719COD754_Mesadetrabajo1copia6.webp",
      CDN + "7104/1751042719COD754-08.webp"
    ],
    beneficios: [
      "Extracto de malva y Vitamina E",
      "No grasoso",
      "Ácido salicílico y azufre",
      "Contiene extractos naturales de Caléndula y humamelis"
    ],
    descripcion: "Modo de uso : en la mañana y en la noche lavar tu cara y cuerpo con agua y jabón dando un ligero masaje especialmente en la zona con imperfecciones (zonas T de la cara, barbilla, pecho y espaldas). Ingredientes Azufre, ácido salicílico, extracto caléndula y humamelis",
    incluye: ["1 Jabón Facial Dermoacne - La Cooper 100g"]
  },
  {
    slug: "jabon-facial-aloe-vera-bioaqua-8971",
    dropiId: 8971,
    nombre: "Jabón Facial Aloe Vera BIOAQUA",
    corto: "Jabón Facial Aloe Vera BIOAQUA.",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [CDN + "8971/img_6a2843c634e267.98467318_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Jabón Facial Aloe Vera BIOAQUA. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Jabón Facial Aloe Vera BIOAQUA"]
  },
  {
    slug: "vaselina-pura-la-cooper-x-5g-7107",
    dropiId: 7107,
    nombre: "Vaselina Pura La Cooper x 5g",
    corto: "Lubrica y protege la piel del bebe y adultos, use también como desmaquillante de la marca la cooper.",
    categoria: "Belleza",
    destacado: false,
    precio: 79,
    precioPack: 149,
    imagenes: [
      CDN + "7107/1751043305COD806_Mesadetrabajo1copia-05.webp",
      CDN + "7107/1751043305COD806-08.webp"
    ],
    beneficios: [
      "Vaselina Pura – La Cooper x 5g",
      "Ingredientes : Petrolatum",
      "Manténgase alejado de los niños y bajo sombra",
      "Cantidad 5g"
    ],
    descripcion: "Lubrica y protege la piel del bebe y adultos, use también como desmaquillante de la marca la cooper.",
    incluye: ["1 Vaselina Pura La Cooper x 5g"]
  },
  {
    slug: "vaselina-pura-la-cooper-x-80g-7132",
    dropiId: 7132,
    nombre: "Vaselina Pura – La Cooper x 80g",
    corto: "Lubrica y protege la piel del bebe y adultos, use también como desmaquillante de la marca la cooper.",
    categoria: "Belleza",
    destacado: false,
    precio: 79,
    precioPack: 149,
    imagenes: [
      CDN + "7132/1751058813COD804_Mesadetrabajo1copia6.webp",
      CDN + "7132/1751058813COD804-08.webp"
    ],
    beneficios: [
      "Ingredientes : Petrolatum",
      "Manténgase alejado de los niños y bajo sombra",
      "Cantidad 80g",
      "Uso: Externo"
    ],
    descripcion: "Lubrica y protege la piel del bebe y adultos, use también como desmaquillante de la marca la cooper.",
    incluye: ["1 Vaselina Pura – La Cooper x 80g"]
  },
  {
    slug: "vaselina-pura-la-cooper-x-15g-7134",
    dropiId: 7134,
    nombre: "Vaselina Pura La Cooper x 15g",
    corto: "Lubrica y protege la piel del bebe y adultos, use también como desmaquillante de la marca la cooper.",
    categoria: "Belleza",
    destacado: false,
    precio: 79,
    precioPack: 149,
    imagenes: [
      CDN + "7134/1751058961COD805_Mesadetrabajo1copia6.webp",
      CDN + "7134/1751058961COD805-08.webp"
    ],
    beneficios: [
      "Vaselina Pura – La Cooper x 15g",
      "Ingredientes : Petrolatum",
      "Manténgase alejado de los niños y bajo sombra",
      "Cantidad 15g"
    ],
    descripcion: "Lubrica y protege la piel del bebe y adultos, use también como desmaquillante de la marca la cooper.",
    incluye: ["1 Vaselina Pura La Cooper x 15g"]
  },
  {
    slug: "crema-q10-retinol-y-coenzima-rejuvenec-7108",
    dropiId: 7108,
    nombre: "Crema Q10 Retinol y Coenzima - Rejuvenec",
    corto: "Por contener en su fórmula coenzima Q10y vitamina E antioxidantes, ayudan a corregir arrugas y líneas de…",
    categoria: "Belleza",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [
      CDN + "7108/1751043463ProductoFondoBlanco_1_1f79affc-2e8b-496f-88e2-10369d9ec644.webp",
      CDN + "7108/1751043463Mododeuso_6d1ae0e9-0555-49cf-a07f-f92a78f51c2e.webp",
      CDN + "7108/1751043463Portada_988e0faa-ef49-4218-9608-1d318ea28315.webp"
    ],
    beneficios: [
      "Rejuvenece Plus Crema Q10 Retinol y Coenzima",
      "Retinol",
      "Vitamina E",
      "Filtros solares"
    ],
    descripcion: "Por contener en su fórmula coenzima Q10y vitamina E antioxidantes, ayudan a corregir arrugas y líneas de expresión del rostro, a la vez aporta mayor hidratación y elasticidad, dando como resultado una piel lisa y tersa. Modo de Uso: Aplíquese homogéneamente una cantidad de crema sobre la piel limpia y tonificada,…",
    incluye: ["1 Crema Q10 Retinol y Coenzima - Rejuvenec"]
  },
  {
    slug: "desodorante-crol-for-men-x-50ml-7109",
    dropiId: 7109,
    nombre: "Desodorante - Crol For Men x 50ml",
    corto: "Modo de uso: Aplícate la bolilla roll-on en forma circular en las axilas, así te sentirás fresco, evitando los…",
    categoria: "Belleza",
    destacado: false,
    precio: 89,
    precioPack: 169,
    imagenes: [
      CDN + "7109/1751043634COD809_Mesadetrabajo1copia6.webp",
      CDN + "7109/1751043634COD809-08.webp",
      CDN + "7109/1751043634COD809_Mesadetrabajo1copia-04.webp"
    ],
    beneficios: [
      "DESODORANTE ROLL-ON – CROL FOR MEN X 50ml",
      "Libre de parabenos",
      "Libre de petrolatos",
      "No irrita la piel"
    ],
    descripcion: "Modo de uso: Aplícate la bolilla roll-on en forma circular en las axilas, así te sentirás fresco, evitando los malos olores de la transpiración. Aqua, cyclopentasioxane and cyclohexasiloxane, cetyl alcohol, ceteareth-20.",
    incluye: ["1 Desodorante - Crol For Men x 50ml"]
  },
  {
    slug: "colonia-citrica-la-cooper-x-500ml-7111",
    dropiId: 7111,
    nombre: "Colonia Cítrica La Cooper x 500ml",
    corto: "Contiene una exquisita fragancia que se caracteriza por su delicada nota cítrica.",
    categoria: "Belleza",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [
      CDN + "7111/1751043936COD802_Mesadetrabajo1copia6.webp",
      CDN + "7111/1751043936COD802-08.webp"
    ],
    beneficios: [
      "COLONIA CÍTRICA – La Cooper x 500ml",
      "Colonia que se caracteriza por su delicada nota cítrica",
      "Con exquisita fragancia",
      "Ideal para usarlo después del baño o cualquier momento del día"
    ],
    descripcion: "Contiene una exquisita fragancia que se caracteriza por su delicada nota cítrica. Retira el esmalte de uñas sin dañarlas ni resecarlas y protege las cutículas.",
    incluye: ["1 Colonia Cítrica La Cooper x 500ml"]
  },
  {
    slug: "colonia-citrica-la-cooper-x-120ml-7153",
    dropiId: 7153,
    nombre: "Colonia Cítrica La Cooper x 120ml",
    corto: "Contiene una exquisita fragancia que se caracteriza por su delicada nota cítrica.",
    categoria: "Belleza",
    destacado: false,
    precio: 79,
    precioPack: 149,
    imagenes: [
      CDN + "7153/1751061785COD810_Mesadetrabajo1copia6.webp",
      CDN + "7153/1751061785COD810-08.webp"
    ],
    beneficios: [
      "COLONIA CÍTRICA – La Cooper x 120ml",
      "Colonia que se caracteriza por su delicada nota cítrica",
      "Con exquisita fragancia",
      "Ideal para usarlo después del baño o cualquier momento del día"
    ],
    descripcion: "Contiene una exquisita fragancia que se caracteriza por su delicada nota cítrica. Retira el esmalte de uñas sin dañarlas ni resecarlas y protege las cutículas.",
    incluye: ["1 Colonia Cítrica La Cooper x 120ml"]
  },
  {
    slug: "colonia-citrica-la-cooper-x-250ml-7154",
    dropiId: 7154,
    nombre: "Colonia Cítrica La Cooper x 250ml",
    corto: "Contiene una exquisita fragancia que se caracteriza por su delicada nota cítrica.",
    categoria: "Belleza",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [
      CDN + "7154/1751061988COD801_Mesadetrabajo1copia6.webp",
      CDN + "7154/1751061988COD801-08.webp"
    ],
    beneficios: [
      "COLONIA CÍTRICA – La Cooper x 250ml",
      "Colonia que se caracteriza por su delicada nota cítrica",
      "Con exquisita fragancia",
      "Ideal para usarlo después del baño o cualquier momento del día"
    ],
    descripcion: "Contiene una exquisita fragancia que se caracteriza por su delicada nota cítrica. Retira el esmalte de uñas sin dañarlas ni resecarlas y protege las cutículas.",
    incluye: ["1 Colonia Cítrica La Cooper x 250ml"]
  },
  {
    slug: "jabon-carbon-activo-hyaluronic-la-cooper-7112",
    dropiId: 7112,
    nombre: "Jabón Carbón Activo Hyaluronic La Cooper",
    corto: "Modo de uso: Lavar el rostro en la mañana y noche dando un ligero masaje en la zona t.",
    categoria: "Belleza",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [
      CDN + "7112/1751044080COD753_Mesadetrabajo1copia6.webp",
      CDN + "7112/1751044080COD753-08.webp"
    ],
    beneficios: [
      "Jabón Dermoacne Carbón Activo con Hyaluronic - La Cooper 100g",
      "Disminuye la brillantez de la piel del rostro",
      "Carbón Detox base 100% vegetal",
      "Ingredientes: Carbón detox, extracto de malva, vitamina e, ácido salicílico, acido"
    ],
    descripcion: "Modo de uso: Lavar el rostro en la mañana y noche dando un ligero masaje en la zona t.",
    incluye: ["1 Jabón Carbón Activo Hyaluronic La Cooper"]
  },
  {
    slug: "crema-corporal-aclara-t-almendras-y-vain-7116",
    dropiId: 7116,
    nombre: "Crema Corporal Aclara-T Almendras y Vain",
    corto: "Crema corporal Aclara – t.",
    categoria: "Belleza",
    destacado: false,
    precio: 79,
    precioPack: 149,
    imagenes: [
      CDN + "7116/1751044664lacoopercopia42-2-copia.webp",
      CDN + "7116/1751044664MODODEUSO-02_2707cd92-237a-47e8-8d6d-94bb90d9abeb.webp"
    ],
    beneficios: [
      "Crema Corporal Aclara-T Almendras y Vainilla 150gr",
      "Crema Corporal Almendras y vainilla",
      "Origen: Perú",
      "Laboratorios: La cooper"
    ],
    descripcion: "Crema corporal Aclara – t. Modo de uso: Aplíquese uniformemente sobre la piel del cuerpo con ligeros masajes circulares.",
    incluye: ["1 Crema Corporal Aclara-T Almendras y Vain"]
  },
  {
    slug: "desodorante-roll-glutahione-aclara-t-7120",
    dropiId: 7120,
    nombre: "Desodorante Roll Glutahione - Aclara-T",
    corto: "Modo de Uso: Aplíquese la bolilla roll-on en formar circular en las axilas, evitando los malos olores de la…",
    categoria: "Belleza",
    destacado: false,
    precio: 89,
    precioPack: 169,
    imagenes: [
      CDN + "7120/1751045558COD615.webp",
      CDN + "7120/1751045558MODO-DE-USO-CORREGIDOS_37ab3085-8a0b-44a3-b339-095484228240.webp"
    ],
    beneficios: [
      "Desodorante Roll On con Glutahione - Aclara-T",
      "Desodorante Roll On con Glutahione",
      "Origen: Perú",
      "Línea: La cooper"
    ],
    descripcion: "Modo de Uso: Aplíquese la bolilla roll-on en formar circular en las axilas, evitando los malos olores de la transpiración. Advertencia: Mantenga fuera del alcance de los niños, no aplicar sobre la piel irritada, ojos, ni mucosa.",
    incluye: ["1 Desodorante Roll Glutahione - Aclara-T"]
  },
  {
    slug: "dermo-limp-piel-norm-a-seca-120ml-cooper-7122",
    dropiId: 7122,
    nombre: "Dermo Limp piel Norm a Seca 120ml Cooper",
    corto: "Descripción: El Dermo Limpiador para pieles normal a seca de La Cooper está diseñado para limpiar suavemente el…",
    categoria: "Belleza",
    destacado: false,
    precio: 119,
    precioPack: 219,
    imagenes: [CDN + "7122/1751046315COD1331_3ab679c6-4ebf-49d6-bb34-ff44539db59b.webp"],
    beneficios: [
      "Dermo Limpiador para Pieles Normal a Seca – La Cooper",
      "Limpieza suave: Ideal para pieles normales a secas",
      "Hidratación natural: Mantiene la barrera de hidratación de la piel",
      "Fórmula delicada: Apta para el uso diario"
    ],
    descripcion: "Descripción: El Dermo Limpiador para pieles normal a seca de La Cooper está diseñado para limpiar suavemente el rostro sin resecarlo. Modo de uso: Aplicar sobre el rostro húmedo, masajear suavemente y enjuagar con agua.",
    incluye: ["1 Dermo Limp piel Norm a Seca 120ml Cooper"]
  },
  {
    slug: "dermo-limp-piel-mixta-grasa-120ml-cooper-7123",
    dropiId: 7123,
    nombre: "Dermo Limp piel Mixta-Grasa 120ml Cooper",
    corto: "Modo de uso: Aplicar sobre el rostro húmedo, masajear suavemente y enjuagar con agua.",
    categoria: "Belleza",
    destacado: false,
    precio: 119,
    precioPack: 219,
    imagenes: [CDN + "7123/1751046426COD1330_e1bddcad-2a69-417d-894d-fb2f4b84aa27.webp"],
    beneficios: [
      "Dermo Limpiador para Pieles Mixta a Grasa – La Cooper",
      "Fórmula suave: Mantiene la hidratación natural de la piel",
      "Sensación refrescante: Ideal para el uso diario",
      "Tipo de piel: Formulado para pieles mixtas a grasas"
    ],
    descripcion: "Modo de uso: Aplicar sobre el rostro húmedo, masajear suavemente y enjuagar con agua.",
    incluye: ["1 Dermo Limp piel Mixta-Grasa 120ml Cooper"]
  },
  {
    slug: "crema-aclar-niacinami-aclarat-50g-cooper-7124",
    dropiId: 7124,
    nombre: "Crema Aclar Niacinami AclaraT 50g Cooper",
    corto: "Crema facial con AHA que aclara, protege, nutre e hidrata la piel.",
    categoria: "Belleza",
    destacado: false,
    precio: 119,
    precioPack: 219,
    imagenes: [CDN + "7124/1751046620COD1370_09fc1e2f-8977-4a7e-b2ab-e12b1f468700.webp"],
    beneficios: [
      "Crema Aclarante Niacinamida Aclara-T Plus SPF30 (50 g)",
      "Contiene niacinamida y AHA para renovar la piel y mejorar su tonalidad",
      "Fórmula ligera y de rápida absorción",
      "Protección solar SPF 30"
    ],
    descripcion: "Crema facial con AHA que aclara, protege, nutre e hidrata la piel. Aplicar únicamente por la noche sobre la piel limpia y seca, evitando el área de los ojos.",
    incluye: ["1 Crema Aclar Niacinami AclaraT 50g Cooper"]
  },
  {
    slug: "ortin-capilar-acondicionado-la-cooper-1l-7127",
    dropiId: 7127,
    nombre: "Ortin Capilar Acondicionado La Cooper 1L",
    corto: "Descripción: El Acondicionador Ortin Capilar de La Cooper es ideal para fortalecer e hidratar el cabello…",
    categoria: "Belleza",
    destacado: false,
    precio: 129,
    precioPack: 239,
    imagenes: [CDN + "7127/1751057764COD1327-1_a6897e3e-005f-4927-bd76-700a72e073e2.webp"],
    beneficios: [
      "Ortin Capilar Acondicionador – La Cooper 1L",
      "Hidratación y suavidad: Deja el cabello suave y fácil de peinar",
      "Fortalecimiento: Ayuda a mejorar la resistencia del cabello",
      "Uso diario: Fórmula ligera que no deja residuos"
    ],
    descripcion: "Descripción: El Acondicionador Ortin Capilar de La Cooper es ideal para fortalecer e hidratar el cabello, ayudando a mejorar su manejabilidad y brillo. Fórmula hidratante: Enriquecida para mejorar la textura del cabello.",
    incluye: ["1 Ortin Capilar Acondicionado La Cooper 1L"]
  },
  {
    slug: "jabon-lechuga-de-karite-la-cooper-80gr-7130",
    dropiId: 7130,
    nombre: "jabón lechuga de karite La cooper 80Gr",
    corto: "Jabón lechuga con manteca de karité - La cooper 80g Es un producto de cuidado de la piel natural y nutritivo…",
    categoria: "Belleza",
    destacado: false,
    precio: 89,
    precioPack: 169,
    imagenes: [CDN + "7130/1751058284COD1164-2.webp"],
    beneficios: [
      "jabón lechuga con manteca de karite La cooper 80Gr",
      "Contenido: 80gr|",
      "Origen: Perú.|",
      "Tipo de piel: Para tipo de piel.|"
    ],
    descripcion: "Jabón lechuga con manteca de karité - La cooper 80g Es un producto de cuidado de la piel natural y nutritivo diseñado para limpiar suavemente mientras proporciona hidratación y nutrición. Modo de uso Usar en el baño diaria aplicando suaves masajes en la zona que lo requiera.",
    incluye: ["1 jabón lechuga de karite La cooper 80Gr"]
  },
  {
    slug: "aceite-de-rosa-mosqueta-rejuvenece-30ml-7131",
    dropiId: 7131,
    nombre: "Aceite De Rosa Mosqueta Rejuvenece 30ML",
    corto: "El Aceite de Rosa Mosqueta es un producto natural que se extrae de las semillas de la planta Rosa Rubiginosa…",
    categoria: "Belleza",
    destacado: false,
    precio: 109,
    precioPack: 199,
    imagenes: [
      CDN + "7131/1751058466COD1125_4_660aeb84-ad53-4b9c-8b44-f6e83927577f.webp",
      CDN + "7131/1751058466COD1125_2_0ee14c5b-9247-4752-821e-6060f958b51c.webp"
    ],
    beneficios: [
      "Aceite de Rosa Mosqueta Rejuvenece Plus 30ml",
      "Mejorar la apariencia y la textura de la piel, aportando suavidad, luminosidad y",
      "Somos Importacionessumak.com",
      "Advertencias: Ninguna"
    ],
    descripcion: "El Aceite de Rosa Mosqueta es un producto natural que se extrae de las semillas de la planta Rosa Rubiginosa, originaria de los Andes. El uso regular del aceite de rosa mosqueta puede ayudarte a:",
    incluye: ["1 Aceite De Rosa Mosqueta Rejuvenece 30ML"]
  },
  {
    slug: "aceite-de-almendras-vit-e-30ml-rejuven-7151",
    dropiId: 7151,
    nombre: "Aceite de almendras Vit E 30ml - Rejuven",
    corto: "El aceite de almendras es uno de los aceites esenciales más utilizados por sus múltiples propiedades naturales…",
    categoria: "Belleza",
    destacado: false,
    precio: 89,
    precioPack: 169,
    imagenes: [
      CDN + "7151/1751061645REALPLAZA-2_4b1ce3d2-4f72-412e-9720-f8571277a6ed.webp",
      CDN + "7151/1751061645MODO_DE_USO_SUMAK_2a4ebc4b-da2a-4ddf-9ca8-6e17c749cf39.webp"
    ],
    beneficios: [
      "Aceite de almendras vitamina E 30ml - Rejuvenece",
      "Aporta hidratación",
      "Desmaquillante natural",
      "Cauidado de cabello y piel"
    ],
    descripcion: "El aceite de almendras es uno de los aceites esenciales más utilizados por sus múltiples propiedades naturales, que aportan hidratación y otros beneficios para la piel y el cabello, es un buen desmaquillante natural. Modo de uso : se recomienda usar después de la ducha o baño, después de la depilación y por la noche…",
    incluye: ["1 Aceite de almendras Vit E 30ml - Rejuven"]
  },
  {
    slug: "aceite-de-argan-vena-35-ml-7333",
    dropiId: 7333,
    nombre: "Aceite De Argan Vena 35 ml",
    corto: "Este elixir natural es rico en ácidos grasos esenciales, antioxidantes y vitamina E, ofreciendo una hidratación…",
    categoria: "Belleza",
    destacado: false,
    precio: 109,
    precioPack: 199,
    imagenes: [CDN + "7333/1752523317COD1209-01_2ca1495a-7e84-4003-80a3-9dfa9a8fdad7.webp"],
    beneficios: [
      "Somos importaciones Sumak",
      "Fortalece y revitaliza el cabello",
      "Devuelve su brillo y vitalidad",
      "Textura ligera y rápida absorción"
    ],
    descripcion: "Este elixir natural es rico en ácidos grasos esenciales, antioxidantes y vitamina E, ofreciendo una hidratación intensa y restauradora para el cabello, nuestro Aceite de Argán es el secreto para una belleza natural y radiante de tu cabello.",
    incluye: ["1 Aceite De Argan Vena 35 ml"]
  },
  {
    slug: "crema-ultra-hidra-urea-10-aclara-t-45g-7136",
    dropiId: 7136,
    nombre: "Crema Ultra hidra urea 10% Aclara-T 45G",
    corto: "Crema ligera de rápida absorción formulada especialmente para pieles muy secas y sensibles.",
    categoria: "Belleza",
    destacado: false,
    precio: 109,
    precioPack: 199,
    imagenes: [
      CDN + "7136/1751059247COD1158_3.webp",
      CDN + "7136/1751059247COD1158_1.webp"
    ],
    beneficios: [
      "CREMA CORPORAL BODY LOTION 10% DE UREA 450G – ACLARA-T",
      "Aplicarlo a diario sobre la piel mediante un suave masaje hasta su total absorción",
      "Producto : crema corporal body lotion 10% de urea 450g",
      "Contenido: 450 G"
    ],
    descripcion: "Crema ligera de rápida absorción formulada especialmente para pieles muy secas y sensibles. Aqua, Urea, Paraffinum Liquidum, Glycerin, Isopropyl Myristate, Dimethicone, Glyceryl Stearate SE, Phenoxyethanol, Persea Gratissima Oil, Cetyl Alcohol, Stearic Acid, Ceteareth-20, Ricinus Communis Seed Oil, Butyrospermu",
    incluye: ["1 Crema Ultra hidra urea 10% Aclara-T 45G"]
  },
  {
    slug: "repelt-deet-6-ir-35-120ml-la-cooper-7145",
    dropiId: 7145,
    nombre: "Repelt Deet 6% + IR 35 120ml La Cooper",
    corto: "Su fórmula con deet y repelente 35-35 tiene una excelente y efectiva capacidad repelente de zancudos y mosquitos.",
    categoria: "Belleza",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [
      CDN + "7145/17510610081028_1_a6422cf3-e064-468a-bde8-803ceabaa877.webp",
      CDN + "7145/17510610081028_6_793dd86c-7711-4241-8f4a-10892fba0503.webp"
    ],
    beneficios: [
      "REPELT DEET 6% + IR 35-35 SPF 15 – LA COOPER",
      "No reseca la piel",
      "Larga duración",
      "SPF 15"
    ],
    descripcion: "Su fórmula con deet y repelente 35-35 tiene una excelente y efectiva capacidad repelente de zancudos y mosquitos. Aplíquese sobre la piel media hora antes de exponerse a los insectos renovándola cada vez que sea necesario.",
    incluye: ["1 Repelt Deet 6% + IR 35 120ml La Cooper"]
  },
  {
    slug: "repelt-deet-crema-90g-la-cooper-7147",
    dropiId: 7147,
    nombre: "Repelt Deet Crema 90g - La Cooper",
    corto: "Su fórmula con Deet y repelente 35-35 tiene una excelente y efectiva capacidad repelente de zancudos, mosquitos…",
    categoria: "Belleza",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [
      CDN + "7147/17510613141027_6_b7327ed9-9a30-4cd2-b5a1-afd88aacec4d.webp",
      CDN + "7147/17510613151027_1_a313f7ac-b938-41f9-acaf-7090654227a9.webp"
    ],
    beneficios: [
      "REPELT DEET CREMA REPELENTE DE INSECTOS 90g – LA COOPER",
      "No reseca la piel",
      "No grasoso",
      "Tiene larga duración"
    ],
    descripcion: "Su fórmula con Deet y repelente 35-35 tiene una excelente y efectiva capacidad repelente de zancudos, mosquitos y otros insectos. Aplíquese sobre la piel media hora antes de exponerse a los insectos, renovándola cada vez que sea necesario.",
    incluye: ["1 Repelt Deet Crema 90g - La Cooper"]
  },
  {
    slug: "repelt-deet-crema-120g-la-cooper-7148",
    dropiId: 7148,
    nombre: "Repelt Deet Crema 120g - La Cooper",
    corto: "Su fórmula con Deet y repelente 35-35 tiene una excelente y efectiva capacidad repelente de zancudos, mosquitos…",
    categoria: "Belleza",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [
      CDN + "7148/1751061384REALPLAZA-2_cf8be349-b7b8-4039-b259-23883bc661de.webp",
      CDN + "7148/1751061384MODO_DE_USO_VOCH_3ec518fe-2f87-4894-a7cd-65b298dfeb00.webp"
    ],
    beneficios: [
      "REPELT DEET CREMA REPELENTE DE INSECTOS 120g – LA COOPER",
      "No reseca la piel",
      "No grasoso",
      "Tiene larga duración"
    ],
    descripcion: "Su fórmula con Deet y repelente 35-35 tiene una excelente y efectiva capacidad repelente de zancudos, mosquitos y otros insectos. Aplíquese sobre la piel media hora antes de exponerse a los insectos, renovándola cada vez que sea necesario.",
    incluye: ["1 Repelt Deet Crema 120g - La Cooper"]
  },
  {
    slug: "eco-repelt-deet-15-locion-120ml-cooper-7149",
    dropiId: 7149,
    nombre: "Eco Repelt Deet 15% Loción 120ml Cooper",
    corto: "Su fórmula con 15% de DEET ayuda a mantener alejado a los mosquitos, zancudos y otros insectos.",
    categoria: "Belleza",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [
      CDN + "7149/1751061491REALPLAZA-2_a30df4a2-623e-4386-b6ca-ea660ca0c51d.webp",
      CDN + "7149/1751061491MODO_DE_USO_VOCH_80263e10-adb4-42aa-bd6f-d6af6f8cd8ce.webp"
    ],
    beneficios: [
      "ECO REPELT DEET 15% LOCIÓN REPENTE DE INSECTOS 120ml – LA COOPER",
      "No reseca la piel",
      "Con filtro solar",
      "Tiene larga duración"
    ],
    descripcion: "Su fórmula con 15% de DEET ayuda a mantener alejado a los mosquitos, zancudos y otros insectos. Aplíquese sobre la piel media hora antes de exponerse a los insectos, renovándola cada vez que sea necesario.",
    incluye: ["1 Eco Repelt Deet 15% Loción 120ml Cooper"]
  },
  {
    slug: "lechuga-la-cooper-spf-10-100-gr-7152",
    dropiId: 7152,
    nombre: "Lechuga La Cooper SPF 10 - 100 gr",
    corto: "La crema por contener en su fórmula extracto de lechuga y manteca de Karite.",
    categoria: "Belleza",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [
      CDN + "7152/1751061715ProductoFondoBlanco_1_73f4a7e2-5017-4c54-b318-173bc7b5064b.webp",
      CDN + "7152/1751061715Mododeuso_412681a0-ed34-4e95-bf70-f8aa178b903a.webp"
    ],
    beneficios: [
      "Crema de Lechuga La Cooper SPF10 100 gr",
      "Manteca de Karite",
      "Ácido Hyaluroico",
      "Filtros solares"
    ],
    descripcion: "La crema por contener en su fórmula extracto de lechuga y manteca de Karite. Modo de Uso: Aplíquese la crema sobre el rostro de manera uniforme y a cualquier hora del día, e incluso de 3 a 4 veces.",
    incluye: ["1 Lechuga La Cooper SPF 10 - 100 gr"]
  },
  {
    slug: "fibra-capilar-marron-osc-22gr-dr-rashel-7198",
    dropiId: 7198,
    nombre: "Fibra Capilar Marrón Osc 22gr -DR RASHEL",
    corto: "La Fibra Capilar Dr. Rashel en color marrón oscuro es una solución práctica y efectiva para cubrir zonas con…",
    categoria: "Belleza",
    destacado: false,
    precio: 139,
    precioPack: 259,
    imagenes: [
      CDN + "7198/1751484340COD1393-8.webp",
      CDN + "7198/1751484340COD1393-7_498ac5ef-8f48-4c51-949a-624bdb331094.webp",
      CDN + "7198/1751484340COD1393-6_5400c5ef-9750-4766-8b67-021d35d86f5f.webp"
    ],
    beneficios: [
      "DR. RASHEL – Fibra Capilar Color Marrón Oscuro – Cobertura y Volumen Natural – 22gr",
      "Lava y seca completamente el cabello",
      "Peina suavemente para distribuir uniformemente",
      "Puedes aplicar spray fijador para prolongar la duración"
    ],
    descripcion: "La Fibra Capilar Dr. Rashel en color marrón oscuro es una solución práctica y efectiva para cubrir zonas con poca densidad capilar, devolviendo al cabello una apariencia más gruesa y abundante en cuestión de segundos. Ideal para personas con cabello fino , entradas marcadas o zonas visibles de pérdida de volumen , sin…",
    incluye: ["1 Fibra Capilar Marrón Osc 22gr -DR RASHEL"]
  },
  {
    slug: "fibra-capilar-negro-22gr-dr-rashel-7199",
    dropiId: 7199,
    nombre: "Fibra Capilar Negro 22gr - DR RASHEL",
    corto: "La Fibra Capilar de DR.",
    categoria: "Belleza",
    destacado: false,
    precio: 129,
    precioPack: 239,
    imagenes: [
      CDN + "7199/1751484482COD1394-8_d1d2ea06-6de3-4870-831f-a3fa4dab57a4.webp",
      CDN + "7199/1751484482COD1394-7_a5c6f3ea-647c-4c04-8c14-a26f35000575.webp",
      CDN + "7199/1751484482COD1394-6_b6b85556-a90f-4b95-9f21-14eb79f4323b.webp"
    ],
    beneficios: [
      "DR. RASHEL – Fibra Capilar Color Negro – Volumen Instantáneo y Cobertura Natural – 22gr",
      "Lava y seca bien tu cabello",
      "Agita el frasco y aplica directamente las fibras sobre las zonas con menor densidad",
      "Peina suavemente para distribuir uniformemente"
    ],
    descripcion: "La Fibra Capilar de DR. Ideal para quienes desean ocultar zonas de calvicie , entradas o simplemente buscan un efecto de mayor volumen sin recurrir a procedimientos invasivos ni químicos agresivos.",
    incluye: ["1 Fibra Capilar Negro 22gr - DR RASHEL"]
  },
  {
    slug: "gel-fix-blue-150g-vena-7209",
    dropiId: 7209,
    nombre: "Gel Fix Blue 150g - Vena",
    corto: "Fijación Firme: Proporciona una sujeción sólida que mantiene el peinado en su lugar durante todo el día.",
    categoria: "Belleza",
    destacado: false,
    precio: 129,
    precioPack: 239,
    imagenes: [CDN + "7209/1751581414VENA42-3_f07bbc0e-425b-46ec-bf26-cfc2757cb18a.webp"],
    beneficios: [
      "Gel de Cabello Fix Blue sin Alcohol 150g Vena",
      "Brillo Natural: Aporta un acabado brillante que realza el aspecto natural del cabello",
      "Aplicación: Con el cabello limpio y ligeramente húmedo, toma una cantidad adecuada de gel",
      "Somos importaciones sumak"
    ],
    descripcion: "Fijación Firme: Proporciona una sujeción sólida que mantiene el peinado en su lugar durante todo el día. Sin Alcohol: Su fórmula sin alcohol evita la resequedad del cuero cabelludo y del cabello, manteniéndolo hidratado y saludable.",
    incluye: ["1 Gel Fix Blue 150g - Vena"]
  },
  {
    slug: "gel-fijador-azul-100g-ultra-suave-vena-7216",
    dropiId: 7216,
    nombre: "Gel Fijador Azul 100g Ultra Suave - Vena",
    corto: "Fijación Ligera: Proporciona una fijación suave que permite mantener el estilo durante el día sin rigidez.",
    categoria: "Belleza",
    destacado: false,
    precio: 109,
    precioPack: 199,
    imagenes: [CDN + "7216/1751585169VENA38-3_4c169587-7cb2-4f61-a215-7b1aa4021b6b.webp"],
    beneficios: [
      "Gel Fijador de Cabello Azul 100g Ultra Suave Vena",
      "Aplicación: Con el cabello limpio y ligeramente húmedo, toma una pequeña cantidad de gel",
      "Somos importaciones sumak"
    ],
    descripcion: "Fijación Ligera: Proporciona una fijación suave que permite mantener el estilo durante el día sin rigidez. Textura No Pegajosa: Su fórmula evita la sensación pegajosa, facilitando el peinado y evitando residuos visibles.",
    incluye: ["1 Gel Fijador Azul 100g Ultra Suave - Vena"]
  },
  {
    slug: "gel-fijador-azul-35g-ultra-suave-vena-7219",
    dropiId: 7219,
    nombre: "Gel Fijador Azul 35g Ultra Suave - Vena",
    corto: "Fijación Ligera: Proporciona una fijación suave que permite mantener el estilo durante el día sin rigidez.",
    categoria: "Belleza",
    destacado: false,
    precio: 109,
    precioPack: 199,
    imagenes: [CDN + "7219/1751585352VENA37-3_e0c07e63-01c1-4d5a-a1fd-f7e34f0bfcd1.webp"],
    beneficios: [
      "Gel Fijador de Cabello Azul 35g Ultra Suave Vena",
      "Aplicación: Con el cabello limpio y ligeramente húmedo, toma una pequeña cantidad de gel",
      "Somos importaciones sumak"
    ],
    descripcion: "Fijación Ligera: Proporciona una fijación suave que permite mantener el estilo durante el día sin rigidez. Textura No Pegajosa: Su fórmula evita la sensación pegajosa, facilitando el peinado y evitando residuos visibles.",
    incluye: ["1 Gel Fijador Azul 35g Ultra Suave - Vena"]
  },
  {
    slug: "gel-fijador-amarillo-ultra-suave-vena-7226",
    dropiId: 7226,
    nombre: "Gel Fijador Amarillo Ultra Suave - vena",
    corto: "Tamaño Práctico: Su presentación de 35g es ideal para llevar en el bolso o de viaje.",
    categoria: "Belleza",
    destacado: false,
    precio: 109,
    precioPack: 199,
    imagenes: [CDN + "7226/1751585827VENA34-3_640486c3-26e5-4bc0-b184-632abd6d6ddd.webp"],
    beneficios: [
      "Gel Fijador de Cabello Amarillo 100g Ultra Suave Vena",
      "Fijación Ligera: Ideal para estilos naturales y control suave del cabello",
      "Textura No Pegajosa: Permite una aplicación uniforme sin dejar residuos",
      "Apto para Todo Tipo de Cabello: Funciona bien en cabellos lisos, ondulados o rizados"
    ],
    descripcion: "Tamaño Práctico: Su presentación de 35g es ideal para llevar en el bolso o de viaje. Aplicación: Con el cabello limpio y ligeramente húmedo o seco, toma una pequeña cantidad de gel.",
    incluye: ["1 Gel Fijador Amarillo Ultra Suave - vena"]
  },
  {
    slug: "serum-hidrat-niacinam-10-30ml-dermosuma-7223",
    dropiId: 7223,
    nombre: "Sérum hidrat Niacinam 10% 30ml DERMOSUMA",
    corto: "Capaz de devolver el color natural de la piel, por su función iluminadora.",
    categoria: "Belleza",
    destacado: false,
    precio: 129,
    precioPack: 239,
    imagenes: [CDN + "7223/1751585667DERM16-6_dab58780-bed2-40aa-b92b-561633038d72.webp"],
    beneficios: [
      "Sérum hidratante Niacinamida 10 30 ml - Dermo Sumak",
      "Sérum hidratante, ideal para pieles mixtas a grasas",
      "Función antinﬂamatoria y",
      "seborreguladora"
    ],
    descripcion: "Capaz de devolver el color natural de la piel, por su función iluminadora. Aplicar 1 a 2 gotas .tanto mañana como noche más bloqueador .",
    incluye: ["1 Sérum hidrat Niacinam 10% 30ml DERMOSUMA"]
  },
  {
    slug: "serum-hidrat-acid-hialuroni-30ml-dermosu-7236",
    dropiId: 7236,
    nombre: "Sérum hidrat Acid Hialuróni 30ml DERMOSU",
    corto: "Esta fórmula es capaz de retener el agua hasta 1000 veces su peso, manteniendo una piel hidratada por mucho más…",
    categoria: "Belleza",
    destacado: false,
    precio: 129,
    precioPack: 239,
    imagenes: [CDN + "7236/1751586509DERM15-6_22c522be-e217-400f-a23a-25fea6aefebf.webp"],
    beneficios: [
      "Sérum hidratante Acido Hialurónica 30 ml - Dermo Sumak",
      "Sérum hidratante, ideal para pieles secas y sensibles",
      "Mañana y noche",
      "Aplicar 1 a 2 gotas para piel seca y sensible"
    ],
    descripcion: "Esta fórmula es capaz de retener el agua hasta 1000 veces su peso, manteniendo una piel hidratada por mucho más tiempo Esparcirlo por todo el rostro, realizando suaves masajes para una buena homogenización.\" \"Información destacada",
    incluye: ["1 Sérum hidrat Acid Hialuróni 30ml DERMOSU"]
  },
  {
    slug: "shampoo-sinsal-keratina-350ml-dermosumak-7230",
    dropiId: 7230,
    nombre: "Shampoo sinsal Keratina 350ml DERMOSUMAK",
    corto: "Dermavital shampoo dermatológico es más que un simple limpiador; es una experiencia de cuidado capilar…",
    categoria: "Belleza",
    destacado: false,
    precio: 129,
    precioPack: 239,
    imagenes: [
      CDN + "7230/1751586053SHOPIFY_b0db8919-091c-4976-a0a6-27d79f776b66.webp",
      CDN + "7230/1782484152DERM-6.jpg",
      CDN + "7230/1782484152DERM-4.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Dermavital shampoo dermatológico es más que un simple limpiador; es una experiencia de cuidado capilar personalizada para revitalizar tu cabello de raíz a puntas.",
    incluye: ["1 Shampoo sinsal Keratina 350ml DERMOSUMAK"]
  },
  {
    slug: "crema-para-peinar-de-manzanilla-vena-7232",
    dropiId: 7232,
    nombre: "Crema para Peinar de Manzanilla - vena",
    corto: "Tamaño Práctico: Su presentación de 35g es ideal para llevar en el bolso o de viaje.",
    categoria: "Belleza",
    destacado: false,
    precio: 109,
    precioPack: 199,
    imagenes: [CDN + "7232/1751586187VENA32-3_647e03dd-3b41-4b0a-82a2-55f50da02db6.webp"],
    beneficios: [
      "Crema para Peinar de Manzanilla 100gr - Vena",
      "Fijación Ligera: Ideal para estilos naturales y control suave del cabello",
      "Textura No Pegajosa: Permite una aplicación uniforme sin dejar residuos",
      "Apto para Todo Tipo de Cabello: Funciona bien en cabellos lisos, ondulados o rizados"
    ],
    descripcion: "Tamaño Práctico: Su presentación de 35g es ideal para llevar en el bolso o de viaje. Aplicación: Con el cabello limpio y ligeramente húmedo o seco, toma una pequeña cantidad de gel.",
    incluye: ["1 Crema para Peinar de Manzanilla - vena"]
  },
  {
    slug: "crema-para-manos-de-aloe-vera-120ml-7467",
    dropiId: 7467,
    nombre: "Crema para manos de aloe vera 120ml",
    corto: "Crema de manos que repara y mejora la piel de las manos hidratándolas profundamente.",
    categoria: "Belleza",
    destacado: false,
    precio: 79,
    precioPack: 149,
    imagenes: [
      CDN + "7467/1752874611998_4_2ccff461-b83e-46f4-a7fe-b50857c3dbd2.webp",
      CDN + "7467/1752874611998_1_2c6f41b2-fc3b-4e58-8830-0a9dc68592da.webp",
      CDN + "7467/1752874611998_14_04b77327-7b83-4cad-a027-054fba3414ec.webp"
    ],
    beneficios: [
      "Crema para manos de aloe vera 120ml - Nevada",
      "Crema para manos de aloe vera 120ml - Nevada",
      "Aloe vera hand cream 120ml - Nevada",
      "Mojera y repara la piel"
    ],
    descripcion: "Crema de manos que repara y mejora la piel de las manos hidratándolas profundamente. Modo de uso : Aplicar una pequeña cantidad de crema sobre la piel limpia y seca extender con un suave masaje hasta su completa absorción.",
    incluye: ["1 Crema para manos de aloe vera 120ml"]
  },
  {
    slug: "serum-exfoliant-acido-lactic-30-ml-dermo-7237",
    dropiId: 7237,
    nombre: "Sérum exfoliant Ácido Láctic 30 ml DERMO",
    corto: "rostro,realizando suaves masajes para una buena homogenización.",
    categoria: "Belleza",
    destacado: false,
    precio: 129,
    precioPack: 239,
    imagenes: [CDN + "7237/1751586589DERM14-3_024bcd23-7317-4a75-9b40-51e1fb06a272.webp"],
    beneficios: [
      "Sérum exfoliante Ácido Láctico 30 ml - Dermo Sumak",
      "Sérum capaz de exfoliar la piel",
      "Resultados esperados a partir de la cuarta semana",
      "Ideal para pieles secas y resistentes"
    ],
    descripcion: "rostro,realizando suaves masajes para una buena homogenización.",
    incluye: ["1 Sérum exfoliant Ácido Láctic 30 ml DERMO"]
  },
  {
    slug: "crema-tratamiento-capilar-de-coco-vena-7240",
    dropiId: 7240,
    nombre: "Crema Tratamiento Capilar de Coco - vena",
    corto: "El aceite de coco es conocido por sus propiedades hidratantes y nutritivas: Fortalecimiento del Cabello: Reduce…",
    categoria: "Belleza",
    destacado: false,
    precio: 119,
    precioPack: 219,
    imagenes: [CDN + "7240/1751586934VENA29-3_08d6b213-3034-4c6e-adb0-a5d1dd201f75.webp"],
    beneficios: [
      "Crema Tratamiento Capilar de Coconut 400gr Vena",
      "Hidratación Profunda: Penetra la fibra capilar, restaurando la humedad y suavidad del",
      "Brillo Natural: Aporta un brillo saludable al cabello, mejorando su apariencia general",
      "Somos importaciones sumak"
    ],
    descripcion: "El aceite de coco es conocido por sus propiedades hidratantes y nutritivas: Fortalecimiento del Cabello: Reduce la rotura y las puntas abiertas, promoviendo un cabello más fuerte y saludable.",
    incluye: ["1 Crema Tratamiento Capilar de Coco - vena"]
  },
  {
    slug: "crema-tratamiento-capilar-de-coco-vena-7241",
    dropiId: 7241,
    nombre: "Crema Tratamiento Capilar de Coco vena",
    corto: "El aceite de coco es conocido por sus propiedades hidratantes y nutritivas: Fortalecimiento del Cabello: Reduce…",
    categoria: "Belleza",
    destacado: false,
    precio: 109,
    precioPack: 199,
    imagenes: [CDN + "7241/1751587144VENA28-3_03a0ae02-1864-4283-9c33-d38d7e49d2f2.webp"],
    beneficios: [
      "Crema Tratamiento Capilar de Coconut 110gr Vena",
      "Hidratación Profunda: Penetra la fibra capilar, restaurando la humedad y suavidad del",
      "Brillo Natural: Aporta un brillo saludable al cabello, mejorando su apariencia general",
      "Somos importaciones sumak"
    ],
    descripcion: "El aceite de coco es conocido por sus propiedades hidratantes y nutritivas: Fortalecimiento del Cabello: Reduce la rotura y las puntas abiertas, promoviendo un cabello más fuerte y saludable.",
    incluye: ["1 Crema Tratamiento Capilar de Coco vena"]
  },
  {
    slug: "crema-tratamiento-capilar-de-placenta-7242",
    dropiId: 7242,
    nombre: "Crema Tratamiento Capilar de Placenta",
    corto: "La Crema Tratamiento Capilar de Placenta 400g de Vena está formulada para revitalizar y fortalecer el cabello…",
    categoria: "Belleza",
    destacado: false,
    precio: 119,
    precioPack: 219,
    imagenes: [CDN + "7242/1751587348VENA27-3_9e4379d0-4f49-413d-b319-29776a1d00d7.webp"],
    beneficios: [
      "Crema Tratamiento Capilar de Placenta 400gr Vena",
      "Somos importaciones sumak"
    ],
    descripcion: "La Crema Tratamiento Capilar de Placenta 400g de Vena está formulada para revitalizar y fortalecer el cabello teñido y maltratado. Los tratamientos capilares con placenta ofrecen múltiples beneficios para el cabello:",
    incluye: ["1 Crema Tratamiento Capilar de Placenta"]
  },
  {
    slug: "tratamiento-capilar-de-algas-marinas-7249",
    dropiId: 7249,
    nombre: "Tratamiento Capilar de Algas Marinas",
    corto: "Las algas marinas son reconocidas por sus propiedades nutritivas y revitalizantes en el cuidado capilar.",
    categoria: "Belleza",
    destacado: false,
    precio: 89,
    precioPack: 169,
    imagenes: [CDN + "7249/1751588368VENA20-3_13dc5cd8-a803-40fc-82c2-c5158884ad49.webp"],
    beneficios: [
      "Crema Tratamiento Capilar de Algas Marinas 110gr Vena",
      "Somos importaciones sumak"
    ],
    descripcion: "Las algas marinas son reconocidas por sus propiedades nutritivas y revitalizantes en el cuidado capilar. Hidratación Profunda: Las algas marinas ayudan a mantener la humedad natural del cabello, evitando la sequedad y el frizz.",
    incluye: ["1 Tratamiento Capilar de Algas Marinas"]
  },
  {
    slug: "vena-crema-tratamiento-capilar-de-aloe-7250",
    dropiId: 7250,
    nombre: "VENA Crema Tratamiento Capilar de Aloe",
    corto: "Hidratación Profunda: El aloe vera es un excelente humectante natural que penetra en el cabello, hidratándolo…",
    categoria: "Belleza",
    destacado: false,
    precio: 89,
    precioPack: 169,
    imagenes: [CDN + "7250/1751588477VENA19-3_feefc0d4-c8a3-4617-b7b6-1c1885741d40.webp"],
    beneficios: [
      "Crema Tratamiento Capilar de Aloe Vera 110gr Vena",
      "Somos importaciones sumak"
    ],
    descripcion: "Hidratación Profunda: El aloe vera es un excelente humectante natural que penetra en el cabello, hidratándolo profundamente desde la raíz hasta las puntas. Estimulación del Crecimiento Capilar: El aloe vera contiene vitaminas A, C y E, así como zinc y otros nutrientes esenciales que estimulan la circulación sanguínea…",
    incluye: ["1 VENA Crema Tratamiento Capilar de Aloe"]
  },
  {
    slug: "serum-despigme-resorcinol-3-0-30ml-dermo-7253",
    dropiId: 7253,
    nombre: "Sérum despigme Resorcinol 3.0 30ml DERMO",
    corto: "Sérum, ideal para combatir manchas como el melasma, cloasma, e hiperpigmentaciónCombate manchas a largo plazo…",
    categoria: "Belleza",
    destacado: false,
    precio: 129,
    precioPack: 239,
    imagenes: [CDN + "7253/1751651195DERM12-6_d64c327c-b30c-4fd1-bc49-1b10478e0a2d.webp"],
    beneficios: [
      "Sérum despigmentante Resorcinol 3.0 30 ml - Dermo Sumak",
      "Ayuda a atenuar manchas por efectos hormonales",
      "Resultados desde la 4 semana de aplicación",
      "Aplicar 1 a 2 gotas"
    ],
    descripcion: "Sérum, ideal para combatir manchas como el melasma, cloasma, e hiperpigmentaciónCombate manchas a largo plazo, gracias a que inhibe la hormona Tirosinasa, hormona encargada de regular la melanina en la piel. Esparcirlo por todo el rostro,realizando suaves masajes para una buena homogenización.",
    incluye: ["1 Sérum despigme Resorcinol 3.0 30ml DERMO"]
  },
  {
    slug: "gel-limpiado-facial-piel-sec-120ml-dermo-7257",
    dropiId: 7257,
    nombre: "Gel Limpiado Facial Piel sec 120ml DERMO",
    corto: "Contiene Pantenol, conocido por sus propiedades hidratantes y reparadoras.",
    categoria: "Belleza",
    destacado: false,
    precio: 149,
    precioPack: 269,
    imagenes: [CDN + "7257/1751663779DERM8-3_6cf49dea-1885-4c88-8ab8-1ceb132a5d39.webp"],
    beneficios: [
      "Gel Limpiador Facial Piel seca 120ml - Dermo Sumak",
      "DERMA SENSITIVE PARA PIEL SECA",
      "Jabón limpiador facial ideal para",
      "piel seca"
    ],
    descripcion: "Contiene Pantenol, conocido por sus propiedades hidratantes y reparadoras. Realizar suaves masajes para formar espuma en el rostro.\" \"Información destacada",
    incluye: ["1 Gel Limpiado Facial Piel sec 120ml DERMO"]
  },
  {
    slug: "gel-limp-facial-piel-mixta-a-grasa-120ml-7258",
    dropiId: 7258,
    nombre: "Gel Limp facial piel mixta a grasa 120ml",
    corto: "Gel Limp facial piel mixta a grasa 120ml.",
    categoria: "Belleza",
    destacado: false,
    precio: 149,
    precioPack: 269,
    imagenes: [CDN + "7258/1751663872DERM7-3_589cd71a-ce76-43b8-bc29-4269f99af59f.webp"],
    beneficios: [
      "Gel Limpiador facial piel mixta a grasa 120ml - Dermo Sumak",
      "DERMA CLEAN PARA PIEL MIXTA",
      "Jabón limpiador facial, ideal para piel mixta a grasa",
      "Contiene hamamelis que ayuda reducir el tamaño de los poros y controlar el"
    ],
    descripcion: "Gel Limp facial piel mixta a grasa 120ml. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Gel Limp facial piel mixta a grasa 120ml"]
  },
  {
    slug: "fotoprotec-solar-sedoso-piel-seca-60ml-7260",
    dropiId: 7260,
    nombre: "Fotoprotec solar sedoso/ piel_seca 60ml",
    corto: "Se aplica después de 10 min.",
    categoria: "Belleza",
    destacado: false,
    precio: 149,
    precioPack: 269,
    imagenes: [CDN + "7260/1751664210DERM5-3_463b8df6-ba74-40dd-8259-b7ce09ee1f62.webp"],
    beneficios: [
      "Fotoprotector solar toque sedoso/ piel seca 60ml - Dermo Sumak",
      "Fotoprotector solar ideal para pieles secas y sensibles",
      "Uso diario, después de la rutina facial o 30 minutos antes de la exposición al sol.FTPS",
      "Uso por la mañana"
    ],
    descripcion: "Se aplica después de 10 min.",
    incluye: ["1 Fotoprotec solar sedoso/ piel_seca 60ml"]
  },
  {
    slug: "serum-crecim-d-cejas-capilmax-10ml-dermo-7261",
    dropiId: 7261,
    nombre: "Sérum Crecim d cejas Capilmax 10ml DERMO",
    corto: "Mejora la densidad y el grosor de las cejas, logrando una apariencia más completa y de?nida.",
    categoria: "Belleza",
    destacado: false,
    precio: 129,
    precioPack: 239,
    imagenes: [CDN + "7261/1751664379DERM4-3_501fe877-116d-4fa6-ad9d-ca00d1be5d24.webp"],
    beneficios: [
      "Sérum Crecimiento de cejas Capilmax 10ml - Dermo Sumak",
      "CAPILMAX",
      "Crecimiento de cejas",
      "Tratamiento para el crecimiento de cejas"
    ],
    descripcion: "Mejora la densidad y el grosor de las cejas, logrando una apariencia más completa y de?nida.",
    incluye: ["1 Sérum Crecim d cejas Capilmax 10ml DERMO"]
  },
  {
    slug: "shampoo-sin-sal-anti-caspa-350ml-7265",
    dropiId: 7265,
    nombre: "Shampoo sin sal anti caspa 350ml",
    corto: "Shampoo sin sal anti caspa 350ml.",
    categoria: "Belleza",
    destacado: false,
    precio: 179,
    precioPack: 329,
    imagenes: [CDN + "7265/1751665080SHOPIFY_e8073f3b-5aba-4dd1-8bd1-09ed6fb3cc6f.webp"],
    beneficios: [
      "luego enjuaga con abundante agua. Somos Importaciones Sumak",
      "Precaución y Advertencia",
      "ketoconazol 2%",
      "Ácido Salicílico 2%"
    ],
    descripcion: "Shampoo sin sal anti caspa 350ml. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Shampoo sin sal anti caspa 350ml"]
  },
  {
    slug: "serum-reparador-retinol-0-8-30-ml-dermo-7266",
    dropiId: 7266,
    nombre: "Sérum Reparador Retinol 0.8% 30 ml DERMO",
    corto: "Esta fórmula está hecha para combatir líneas de expresión, también para darle elasticidad y tonalidad a la piel.",
    categoria: "Belleza",
    destacado: false,
    precio: 129,
    precioPack: 239,
    imagenes: [CDN + "7266/1751665190DERM21-6_ebcb39e7-ae2a-43f5-8056-b9a3b05de542.webp"],
    beneficios: [
      "Sérum Reparador Retinol 0.8% 30 ml - Dermo Sumak",
      "Sérum antiedad por excelencia, gracias a su contenido en Retinol (vitamina A)",
      "Ideal para pieles resistentes",
      "No está recomendado para pieles sensibles"
    ],
    descripcion: "Esta fórmula está hecha para combatir líneas de expresión, también para darle elasticidad y tonalidad a la piel. Esparcirlo por todo el rostro, realizando suaves masajes para una buena homogenización.",
    incluye: ["1 Sérum Reparador Retinol 0.8% 30 ml DERMO"]
  },
  {
    slug: "serum-iluminador-vitamina-c12-30ml-dermo-7269",
    dropiId: 7269,
    nombre: "Sérum iluminador Vitamina C12 30ml DERMO",
    corto: "Esparcirlo por todo el rostro, realizando suaves masajes para una buena homogenización.\" \"Información destacada",
    categoria: "Belleza",
    destacado: false,
    precio: 129,
    precioPack: 239,
    imagenes: [CDN + "7269/1751665428DERM17-3_2517bb7e-6d06-438a-aee5-038ef96117f5%20(1).webp"],
    beneficios: [
      "Sérum iluminador Vitamina C12 30 ml - Dermo Sumak",
      "Sérum ideal para uniﬁcar el",
      "tono de la piel",
      "Formulado a PH 4.5"
    ],
    descripcion: "Esparcirlo por todo el rostro, realizando suaves masajes para una buena homogenización.\" \"Información destacada",
    incluye: ["1 Sérum iluminador Vitamina C12 30ml DERMO"]
  },
  {
    slug: "aceite-para-cabello-coco-30ml-vena-7271",
    dropiId: 7271,
    nombre: "Aceite para Cabello Coco 30ml Vena",
    corto: "Hidratación profunda: El aceite de coco penetra en la fibra capilar, proporcionando una hidratación intensa que…",
    categoria: "Belleza",
    destacado: false,
    precio: 79,
    precioPack: 149,
    imagenes: [CDN + "7271/1751741035VENA15-3_a8641d2a-2464-4612-abc6-097652506ce3.webp"],
    beneficios: [
      "Aceite para Cabello de Coco 30ml Vena",
      "Somos importaciones sumak"
    ],
    descripcion: "Hidratación profunda: El aceite de coco penetra en la fibra capilar, proporcionando una hidratación intensa que ayuda a combatir la sequedad y el frizz. Fortalecimiento del cabello: Rico en ácidos grasos y antioxidantes, el aceite de coco contribuye a fortalecer el cabello desde la raíz, reduciendo la rotura y las…",
    incluye: ["1 Aceite para Cabello Coco 30ml Vena"]
  },
  {
    slug: "shampoo-bebes-y-ninos-220ml-vena-7273",
    dropiId: 7273,
    nombre: "Shampoo Bebes y Niños 220ml - Vena",
    corto: "Limpieza suave: La manzanilla es conocida por sus propiedades calmantes y antiinflamatorias, lo que la hace…",
    categoria: "Belleza",
    destacado: false,
    precio: 129,
    precioPack: 239,
    imagenes: [CDN + "7273/1751741646VENA13-3_9a725501-1759-418e-8240-1340cea5bc88.webp"],
    beneficios: [
      "Shampoo Para Bebes y Niños de Manzanilla 220ml Vena",
      "Aplicación: Aplica una pequeña cantidad de shampoo sobre el cabello mojado del bebé o niño",
      "Masaje: Masajea suavemente el cuero cabelludo con las yemas de los dedos hasta formar",
      "Somos importaciones sumak"
    ],
    descripcion: "Limpieza suave: La manzanilla es conocida por sus propiedades calmantes y antiinflamatorias, lo que la hace ideal para limpiar suavemente el cuero cabelludo sensible de los bebés y niños. Aclarado natural: El uso regular de shampoos con manzanilla puede ayudar a aclarar y resaltar los tonos claros del cabello de forma…",
    incluye: ["1 Shampoo Bebes y Niños 220ml - Vena"]
  },
  {
    slug: "jabon-liquido-para-manos-240ml-vena-7278",
    dropiId: 7278,
    nombre: "Jabon Liquido para Manos 240ml - Vena",
    corto: "Limpieza suave: La manzanilla es conocida por sus propiedades calmantes y antiinflamatorias, lo que la hace…",
    categoria: "Belleza",
    destacado: false,
    precio: 109,
    precioPack: 199,
    imagenes: [CDN + "7278/1752159653VENA12-4_a7e9359f-d592-4891-b828-1596dbec2d8c.webp"],
    beneficios: [
      "Shampoo Para Bebes y Niños de Manzanilla 220ml Vena",
      "Aplicación: Aplica una pequeña cantidad de shampoo sobre el cabello mojado del bebé o niño",
      "Masaje: Masajea suavemente el cuero cabelludo con las yemas de los dedos hasta formar",
      "Somos importaciones sumak"
    ],
    descripcion: "Limpieza suave: La manzanilla es conocida por sus propiedades calmantes y antiinflamatorias, lo que la hace ideal para limpiar suavemente el cuero cabelludo sensible de los bebés y niños. Aclarado natural: El uso regular de shampoos con manzanilla puede ayudar a aclarar y resaltar los tonos claros del cabello de forma…",
    incluye: ["1 Jabon Liquido para Manos 240ml - Vena"]
  },
  {
    slug: "crema-de-manos-de-pepino-90gr-vena-7282",
    dropiId: 7282,
    nombre: "Crema de Manos de Pepino 90gr - Vena",
    corto: "Hidratación profunda: El mango es conocido por su alto contenido de vitaminas A y C, que ayudan a mantener la…",
    categoria: "Belleza",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [CDN + "7282/1752159935VENA8-3_d51d6baa-9847-486a-87da-ab865cbfdba8.webp"],
    beneficios: [
      "Crema de Manos Mango 90gr Vena",
      "Aplicación: Coloca una pequeña cantidad de crema en las manos limpias y secas",
      "Masaje: Extiende la crema con movimientos suaves hasta su completa absorción",
      "Somos importaciones sumak"
    ],
    descripcion: "Hidratación profunda: El mango es conocido por su alto contenido de vitaminas A y C, que ayudan a mantener la piel hidratada y suave. Propiedades antioxidantes: Los antioxidantes presentes en el mango pueden ayudar a proteger la piel del envejecimiento prematuro y de los daños causados por los radicales libres.",
    incluye: ["1 Crema de Manos de Pepino 90gr - Vena"]
  },
  {
    slug: "crema-de-manos-sakura-50-gr-laikou-9066",
    dropiId: 9066,
    nombre: "Crema de Manos Sakura 50 gr LAIKOU",
    corto: "La Crema de Manos Sakura 50 gr LAIKOU está formulada para brindar hidratación y cuidado diario a la piel de las…",
    categoria: "Belleza",
    destacado: false,
    precio: 149,
    precioPack: 269,
    imagenes: [CDN + "9066/img_6a32fe1e0acb77.08898608_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "La Crema de Manos Sakura 50 gr LAIKOU está formulada para brindar hidratación y cuidado diario a la piel de las manos, ayudando a mantenerlas suaves, protegidas y con una sensación agradable durante todo el día.",
    incluye: ["1 Crema de Manos Sakura 50 gr LAIKOU"]
  },
  {
    slug: "crema-de-cuello-vitamina-c-120ml-wokali-9210",
    dropiId: 9210,
    nombre: "Crema de Cuello Vitamina C 120ml WOKALI",
    corto: "La Crema de Cuello Vitamina C 120 ml WOKALI está especialmente formulada para el cuidado de la delicada piel…",
    categoria: "Belleza",
    destacado: false,
    precio: 89,
    precioPack: 169,
    imagenes: [
      CDN + "9210/img_6a442b92a4af37.35244999_0.jpg",
      CDN + "9210/178285493720.jpg",
      CDN + "9210/178285493721.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "La Crema de Cuello Vitamina C 120 ml WOKALI está especialmente formulada para el cuidado de la delicada piel del cuello y escote.",
    incluye: ["1 Crema de Cuello Vitamina C 120ml WOKALI"]
  },
  {
    slug: "shampoo-petit-bebe-x-1lt-7284",
    dropiId: 7284,
    nombre: "Shampoo Petit Bebé x 1lt",
    corto: "Shampoo de manzanilla y avena en el delicado cabello del bebé, libre de parabenos sin colorantes.",
    categoria: "Juegos",
    destacado: false,
    precio: 119,
    precioPack: 219,
    imagenes: [CDN + "7284/1752161050COD798_Mesadetrabajo1copia6.webp"],
    beneficios: [
      "Shampoo – Petit Bebé x 1Lt",
      "Mantengase fuera del alcance de los niños",
      "Laboratorio: La Cooper",
      "Cantidad: 1 Lt"
    ],
    descripcion: "Shampoo de manzanilla y avena en el delicado cabello del bebé, libre de parabenos sin colorantes. Aplique suavemente sobre el cabello mojado del bebé y de persona adultas de cabello frágil con agua tibia y masajee suavemente, enjuague con abundante agua.",
    incluye: ["1 Shampoo Petit Bebé x 1lt"]
  },
  {
    slug: "agua-de-colonia-petit-bebe-x-125ml-7285",
    dropiId: 7285,
    nombre: "Agua de Colonia Petit Bebé x 125ml",
    corto: "Agua de colonia indicada para bebés y niños, no lleva alcohol, con fragancia agradable que refresca y suaviza…",
    categoria: "Belleza",
    destacado: false,
    precio: 79,
    precioPack: 149,
    imagenes: [CDN + "7285/1752161106COD796_Mesadetrabajo1copia6.webp"],
    beneficios: [
      "Aplicar la cantidad necesaria sobre la palma de la mano y deslice por el cuerpo",
      "Mantener fuera del alcance de los niños",
      "Evitar la aplicación directa sobre las mucosas y ojos",
      "Laboratorio: La Cooper"
    ],
    descripcion: "Agua de colonia indicada para bebés y niños, no lleva alcohol, con fragancia agradable que refresca y suaviza la piel sin irritaciones. Aqua, PEG-40 Hydrogenated castor oil, phenoxyethanol and methyparaben and butylparaben and ethylparaben and propypareben, parafum l, parafumll.",
    incluye: ["1 Agua de Colonia Petit Bebé x 125ml"]
  },
  {
    slug: "aceite-petit-bebe-x-130ml-7287",
    dropiId: 7287,
    nombre: "Aceite Petit Bebé x 130ml",
    corto: "Especialmente formulado para proteger la piel del bebé humecta y protege contra la sequedad dejándola suave y…",
    categoria: "Juegos",
    destacado: false,
    precio: 79,
    precioPack: 149,
    imagenes: [CDN + "7287/1752161258COD797_Mesadetrabajo1copia6.webp"],
    beneficios: [
      "Aplique suavemente en la piel de su bebé mediante un ligero y cariñoso mesaje",
      "Manténganse fuera del alcance de los niños",
      "Cantidad:130ml",
      "Laboratorio: La Cooper"
    ],
    descripcion: "Especialmente formulado para proteger la piel del bebé humecta y protege contra la sequedad dejándola suave y lubricada. Paraffinum liquidum, dimethicone, perfum l, perfum ll, BHT, Tocopheryl, Acetate, isopropyl myristate.",
    incluye: ["1 Aceite Petit Bebé x 130ml"]
  },
  {
    slug: "crema-petit-bebe-x-125g-7288",
    dropiId: 7288,
    nombre: "Crema Petit Bebé x 125g",
    corto: "Humecta y protege la delicada piel del bebé, manteniéndola humectada y suave, debido a los extractos de avena y…",
    categoria: "Juegos",
    destacado: false,
    precio: 79,
    precioPack: 149,
    imagenes: [CDN + "7288/1752161853COD795_Mesadetrabajo1copia6.webp"],
    beneficios: [
      "Manténgase fuera del alcance de los niños",
      "Advertencia",
      "Cantidad: 125g",
      "Uso: Externo"
    ],
    descripcion: "Humecta y protege la delicada piel del bebé, manteniéndola humectada y suave, debido a los extractos de avena y manzanilla que contiene. Aplicar sobre la piel limpia y seca del bebe, según necesidad, con suave mansaje hasta su completa absorción.",
    incluye: ["1 Crema Petit Bebé x 125g"]
  },
  {
    slug: "jabon-petit-bebe-x-80g-7289",
    dropiId: 7289,
    nombre: "Jabón Petit Bebé x 80g",
    corto: "Jabón para el cuidado de la piel, limpia con suavidad; formulado con finas fragancias, emolientes y humectantes.",
    categoria: "Juegos",
    destacado: false,
    precio: 79,
    precioPack: 149,
    imagenes: [CDN + "7289/1752161956COD794_Mesadetrabajo1copia6.webp"],
    beneficios: [
      "Manténganse fuera del alcance de los niños",
      "Laboratorio: La Cooper",
      "Cantidad: 80g",
      "Uso: Externo"
    ],
    descripcion: "Jabón para el cuidado de la piel, limpia con suavidad; formulado con finas fragancias, emolientes y humectantes. Jabón para el uso diario, recomendado para todo tipo de piel.",
    incluye: ["1 Jabón Petit Bebé x 80g"]
  },
  {
    slug: "talco-petit-bebe-x-180g-7292",
    dropiId: 7292,
    nombre: "Talco Petit Bebé x 180g",
    corto: "Mantiene el bebé seco, fresco y perfumado.",
    categoria: "Juegos",
    destacado: false,
    precio: 89,
    precioPack: 169,
    imagenes: [CDN + "7292/1752162692COD791_Mesadetrabajo1copia6.webp"],
    beneficios: [
      "Talco, perfum 6108695, perfun MX-Eco185170",
      "Manténgase fuera de alcance de los niños",
      "Mantener alejado de la boca y nariz de los niños",
      "Cantidad: 180g"
    ],
    descripcion: "Mantiene el bebé seco, fresco y perfumado. Aplicar después del baño.",
    incluye: ["1 Talco Petit Bebé x 180g"]
  },
  {
    slug: "jabon-rejuvenece-base-de-arroz-acid-hi-7293",
    dropiId: 7293,
    nombre: "Jabón Rejuvenece base de Arroz & Acid Hi",
    corto: "Hidrata y suaviza la piel.",
    categoria: "Belleza",
    destacado: false,
    precio: 79,
    precioPack: 149,
    imagenes: [
      CDN + "7293/1752162900aclara-tcopia3.webp",
      CDN + "7293/1752162901Arroz.webp"
    ],
    beneficios: [
      "Jabón Rejuvenece Plus a base de Arroz & Ácido Hialurónico",
      "Limpieza",
      "Piel suave e hidratada",
      "Complejo de colágeno- Elastina"
    ],
    descripcion: "Hidrata y suaviza la piel. Modo de Uso: Usar en el baño aplicando suaves masajes en las zonas que lo requieren.",
    incluye: ["1 Jabón Rejuvenece base de Arroz & Acid Hi"]
  },
  {
    slug: "jabon-rejuvenece-con-acido-hialuronico-7311",
    dropiId: 7311,
    nombre: "Jabón Rejuvenece con Acido Hialuronico &",
    corto: "Hidrata y lubrica la piel, lo que evita que la piel se reseque.",
    categoria: "Belleza",
    destacado: false,
    precio: 79,
    precioPack: 149,
    imagenes: [CDN + "7311/1752249460aclara-tcopia6.webp"],
    beneficios: [
      "Jabón Rejuvenece con Ácido Hialuronato & Coenzima Q10",
      "Limpia",
      "Piel suave e hidratada",
      "Complejo de colágeno- Elastina"
    ],
    descripcion: "Hidrata y lubrica la piel, lo que evita que la piel se reseque. Modo de Uso: Usar en el baño diario aplicando suaves masajes en las zonas que lo requieran.",
    incluye: ["1 Jabón Rejuvenece con Acido Hialuronico &"]
  },
  {
    slug: "agua-tonic-rosas-acido-hialuroni-aclarat-7312",
    dropiId: 7312,
    nombre: "Agua tónic rosas ácido hialuróni AclaraT",
    corto: "Agua tónica enriquecida con extracto naturales e hidratante que restablece el ph de la piel.",
    categoria: "Belleza",
    destacado: false,
    precio: 79,
    precioPack: 149,
    imagenes: [CDN + "7312/1752249605COD841_REALPLAZA_PEDIDOSYA-13.webp"],
    beneficios: [
      "Agua tónica de rosas con ácido hialurónico - Aclara-T 60ml",
      "Para todo tipo de piel",
      "Con ácido hialurónico",
      "Hidratador"
    ],
    descripcion: "Agua tónica enriquecida con extracto naturales e hidratante que restablece el ph de la piel. Humedecer un disco de algodón con el producto y aplicar mediante ligeros toques.",
    incluye: ["1 Agua tónic rosas ácido hialuróni AclaraT"]
  },
  {
    slug: "jabon-concha-nacar-acid-hialuro-cooper-7314",
    dropiId: 7314,
    nombre: "Jabón Concha Nacar & Acid Hialuro COOPER",
    corto: "Por su contenido de polvo de concha de nácar, manteca de karité, y ácido hialurónico atenúa manchas, nutre e…",
    categoria: "Belleza",
    destacado: false,
    precio: 89,
    precioPack: 169,
    imagenes: [CDN + "7314/1752249902aclara-tcopia4.webp"],
    beneficios: [
      "Jabón de Concha de Nácar & Ácido Hialurónico- La Cooper",
      "Piel suave e hidratada",
      "Complejo de colágeno- Elastina",
      "Jabón de Concha de Nácar & Ácido Hialurónico"
    ],
    descripcion: "Por su contenido de polvo de concha de nácar, manteca de karité, y ácido hialurónico atenúa manchas, nutre e hidrata la piel a profundidad evitando la resequedad. Modo de Uso: Usar en el baño aplicando suaves masajes en las zonas que lo requieren.",
    incluye: ["1 Jabón Concha Nacar & Acid Hialuro COOPER"]
  },
  {
    slug: "aceite-corporal-chocolate-250ml-vena-7319",
    dropiId: 7319,
    nombre: "Aceite Corporal Chocolate 250ml - Vena",
    corto: "Aceite hidratante con aroma a chocolate que nutre y suaviza la piel, dejándola con un brillo saludable y una…",
    categoria: "Belleza",
    destacado: false,
    precio: 109,
    precioPack: 199,
    imagenes: [CDN + "7319/1752272757VENA1-3_29572bd5-6f99-4a84-8dbf-d00959896e0b.webp"],
    beneficios: [
      "Aceite Corporal de Chocolate – Vena (250ml)",
      "Hidrata y suaviza la piel,",
      "Aporta un brillo natural,",
      "Fragancia envolvente a chocolate,"
    ],
    descripcion: "Aceite hidratante con aroma a chocolate que nutre y suaviza la piel, dejándola con un brillo saludable y una fragancia deliciosa, Aplicar sobre la piel limpia con suaves masajes hasta su absorción, Ideal para uso diario,",
    incluye: ["1 Aceite Corporal Chocolate 250ml - Vena"]
  },
  {
    slug: "aceite-corporal-maracuya-vena-250-ml-7325",
    dropiId: 7325,
    nombre: "Aceite corporal Maracuyá vena 250 ml",
    corto: "Aceite hidratante con aroma a maracuyá que nutre y suaviza la piel, dejándola con un brillo saludable y una…",
    categoria: "Belleza",
    destacado: false,
    precio: 109,
    precioPack: 199,
    imagenes: [CDN + "7325/1752516178COD1218-01_cd82d227-3535-4404-89a4-b4c01128fbb3.webp"],
    beneficios: [
      "Aceite Corporal de maracuyá – Vena (250ml)",
      "Hidrata y suaviza la piel,",
      "Aporta un brillo natural,",
      "Fragancia envolvente a maracuyá"
    ],
    descripcion: "Aceite hidratante con aroma a maracuyá que nutre y suaviza la piel, dejándola con un brillo saludable y una fragancia deliciosa, Aplicar sobre la piel limpia con suaves masajes hasta su absorción, Ideal para uso diario,",
    incluye: ["1 Aceite corporal Maracuyá vena 250 ml"]
  },
  {
    slug: "shampoo-anticaida-romero-90ml-vena-7320",
    dropiId: 7320,
    nombre: "Shampoo Anticaida Romero 90ml Vena",
    corto: "El romero es conocido por mejorar la circulación sanguínea en el cuero cabelludo, lo que puede fortalecer los…",
    categoria: "Belleza",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [CDN + "7320/1752273610BIO45-3_f908b9da-76dc-4670-8554-f7acd90b45e5.webp"],
    beneficios: [
      "Shampoo Anticaida Romero 90ml - Vena",
      "Sobre el cabello húmedo, aplica una cantidad adecuada del shampoo en el cuero cabelludo"
    ],
    descripcion: "El romero es conocido por mejorar la circulación sanguínea en el cuero cabelludo, lo que puede fortalecer los folículos pilosos y promover un crecimiento más saludable. Al nutrir y fortalecer el cabello desde la raíz, este shampoo ayuda a reducir la caída del cabello.",
    incluye: ["1 Shampoo Anticaida Romero 90ml Vena"]
  },
  {
    slug: "exfoliante-natural-apricot-scrub-150gr-7321",
    dropiId: 7321,
    nombre: "Exfoliante Natural Apricot Scrub 150gr",
    corto: "Es una crema exfoliante natural de durazno que permite una limpieza profunda, gracias a sus semillas de durazno…",
    categoria: "Belleza",
    destacado: false,
    precio: 109,
    precioPack: 199,
    imagenes: [CDN + "7321/1752273882COD1214-01_faa94d3c-1f2e-49a5-ab52-50cc42d993ed.webp"],
    beneficios: [
      "Somos importaciones Sumak",
      "Remueve células muertas",
      "Libre de sulfatos",
      "Piel renovada, suave y con brillo"
    ],
    descripcion: "Es una crema exfoliante natural de durazno que permite una limpieza profunda, gracias a sus semillas de durazno que retexturizan y revitalizan la piel irregular, al mismo tiempo que reduce visiblemente la apariencia de los poros. Beneficios: Remueve células muertas dejando una piel renovada, suave y con brillo.",
    incluye: ["1 Exfoliante Natural Apricot Scrub 150gr"]
  },
  {
    slug: "crema-exfoliante-mano-vena-150-gr-7327",
    dropiId: 7327,
    nombre: "Crema Exfoliante Mano Vena 150 gr",
    corto: "Crema Exfoliante Mano Vena 150 gr.",
    categoria: "Belleza",
    destacado: false,
    precio: 109,
    precioPack: 199,
    imagenes: [CDN + "7327/1752517467COD1216-01_26cd3ed5-e4c1-43e5-8a05-1114db272d6c.webp"],
    beneficios: [
      "Somos importaciones Sumak",
      "Ayuda en la remoción de células muertas",
      "Libre de sulfatos",
      "Hidrata y suaviza"
    ],
    descripcion: "Crema Exfoliante Mano Vena 150 gr. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Crema Exfoliante Mano Vena 150 gr"]
  },
  {
    slug: "crema-exfoliante-miel-de-almendra-7365",
    dropiId: 7365,
    nombre: "Crema exfoliante Miel de Almendra",
    corto: "Descubre la Crema Exfoliante Miel de Almendra de Wokali, una indulgente experiencia de cuidado para tu piel con…",
    categoria: "Belleza",
    destacado: false,
    precio: 119,
    precioPack: 219,
    imagenes: [CDN + "7365/1752556282COD1174-1_b5c2ca7c-fbd7-4b4c-b010-0764c515ae6d.webp"],
    beneficios: [
      "CREMA EXFOLIANTE MIEL DE ALMENDRA - WOKALI 600GR",
      "Tipo De Artículo: Cuidado Facial",
      "Género: Unisex",
      "Formulación: Crema"
    ],
    descripcion: "Descubre la Crema Exfoliante Miel de Almendra de Wokali, una indulgente experiencia de cuidado para tu piel con su formato generoso de 600 gramos.",
    incluye: ["1 Crema exfoliante Miel de Almendra"]
  },
  {
    slug: "crema-exfoliante-pink-dream-rosas-7366",
    dropiId: 7366,
    nombre: "Crema exfoliante Pink Dream Rosas",
    corto: "Descubre la exquisita Crema Exfoliante Pink Dream Rosas de Wokali, una experiencia de cuidado que transformará…",
    categoria: "Belleza",
    destacado: false,
    precio: 119,
    precioPack: 219,
    imagenes: [CDN + "7366/1752556352COD1173-1_c14abde8-07fa-4eda-bf87-445badf557cd.webp"],
    beneficios: [
      "CREMA EXFOLIANTE PINK DREAM ROSAS - WOKALI 600GR",
      "Tipo De Artículo: Cuidado Facial",
      "Género: Unisex",
      "Formulación: Crema"
    ],
    descripcion: "Descubre la exquisita Crema Exfoliante Pink Dream Rosas de Wokali, una experiencia de cuidado que transformará tu piel.",
    incluye: ["1 Crema exfoliante Pink Dream Rosas"]
  },
  {
    slug: "jabon-intimo-vena-300ml-7330",
    dropiId: 7330,
    nombre: "Jabón Íntimo Vena 300ml",
    corto: "Mantiene la hidratación natural de la zona íntima, dejándola suave y reduciendo la sensación de piel sensible e…",
    categoria: "Belleza",
    destacado: false,
    precio: 119,
    precioPack: 219,
    imagenes: [CDN + "7330/1752521716COD1212-01_48f12fc8-f4d3-4843-9b5c-84a92a79342f.webp"],
    beneficios: [
      "Somos importaciones Sumak",
      "Neutraliza el picor y ardor",
      "Con aroma suave que no irrita",
      "Libre de alcohol y parabenos"
    ],
    descripcion: "Mantiene la hidratación natural de la zona íntima, dejándola suave y reduciendo la sensación de piel sensible e irritación, a la vez que previene infecciones. Contiene ácido láctico y caléndula, ingrediente natural que no altera el PH de la zona íntima y ayuda a evitar posibles olores.",
    incluye: ["1 Jabón Íntimo Vena 300ml"]
  },
  {
    slug: "shampoo-algas-sin-sal-vena-500g-7334",
    dropiId: 7334,
    nombre: "Shampoo Algas sin sal – Vena 500g",
    corto: "Este shampoo está formulado específicamente para ser libre de sal, lo que ayuda a mantener el cabello más…",
    categoria: "Belleza",
    destacado: false,
    precio: 119,
    precioPack: 219,
    imagenes: [CDN + "7334/1752523751COD1208-01_a3d336eb-98f3-472b-bafa-2e3cdfd1b96a.webp"],
    beneficios: [
      "ALGAS SHAMPOO SIN SAL – VENA - 500G",
      "o Libre de sal, ideal para cabellos tratados químicamente",
      "o Ayuda a mantener el cabello suave y manejable",
      "o Puede fortalecer y nutrir el cabello debido a los beneficios de las algas"
    ],
    descripcion: "Este shampoo está formulado específicamente para ser libre de sal, lo que ayuda a mantener el cabello más saludable y a prolongar el efecto de tratamientos capilares como alisados y tintes. Modo de uso: Aplicar sobre el cabello mojado, masajear suavemente el cuero cabelludo y luego enjuagar abundantemente.",
    incluye: ["1 Shampoo Algas sin sal – Vena 500g"]
  },
  {
    slug: "serum-de-arroz-organico-x2-botellas-7339",
    dropiId: 7339,
    nombre: "Serum de Arroz Orgánico x2 Botellas",
    corto: "Repara la regeneración de la piel, contiene esencia de germen de arroz blanco, repara ayudar a nutrir y…",
    categoria: "Belleza",
    destacado: false,
    precio: 139,
    precioPack: 259,
    imagenes: [
      CDN + "7339/1752525425COD649-copia.webp",
      CDN + "7339/1752525424RICEFRUITOFTHEWAKALI-17.webp",
      CDN + "7339/1752525425RICEFRUITOFTHEWAKALI-09.webp"
    ],
    beneficios: [
      "Serum de Arroz Orgánico x2 Botellas - Fruit of the Wokali 50ml",
      "Blanqueamiento efectivo de la piel, mejora de manera efectiva la piel opaca",
      "Serum de Arroz Orgánico x2 Botellas",
      "Contiene: 50ml. c/u"
    ],
    descripcion: "Repara la regeneración de la piel, contiene esencia de germen de arroz blanco, repara ayudar a nutrir y humectar la piel. Modo de uso: Lávese la cara con un paño limpio, un limpiador suave y agua tibia.",
    incluye: ["1 Serum de Arroz Orgánico x2 Botellas"]
  },
  {
    slug: "crema-blanqueadora-de-arroz-organico-55g-7340",
    dropiId: 7340,
    nombre: "Crema Blanqueadora De Arroz Orgánico 55g",
    corto: "Agua. Aceite Mineral Glicerina, Isopalmitato De Etilhexilo.",
    categoria: "Belleza",
    destacado: false,
    precio: 109,
    precioPack: 199,
    imagenes: [
      CDN + "7340/1752525627REALPLAZA-2_0dedac2d-e0aa-4a2c-8c53-74e482d9d9ec.webp",
      CDN + "7340/1752525627PORTADA_2_48f2532e-d1e3-4adf-b1c9-e0d1cf318f9c.webp",
      CDN + "7340/1752525627MODO_DE_USO_SUMAK_8b965969-220e-449e-90b3-ee54b059eabb.webp"
    ],
    beneficios: [
      "Crema Blanqueadora De Arroz Orgánico 55gr - Fruit of the Wokali",
      "Organic rice whitening cream 55g - Fruit of the Wokali",
      "Cantidad: 55gr",
      "Origen: Francia"
    ],
    descripcion: "Agua. Aceite Mineral Glicerina, Isopalmitato De Etilhexilo. Aplique la crema adecuada al rostro, masajee suavemente con los dedos y deje que la piel absorba toda la crema.",
    incluye: ["1 Crema Blanqueadora De Arroz Orgánico 55g"]
  },
  {
    slug: "crema-blanqueadora-rice-115-gr-wokali-9205",
    dropiId: 9205,
    nombre: "Crema Blanqueadora Rice 115 gr WOKALI",
    corto: "La Crema Blanqueadora Rice 115 gr WOKALI está formulada para brindar una hidratación profunda mientras ayuda a…",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [
      CDN + "9205/img_6a442b879a1a85.50676916_0.jpg",
      CDN + "9205/17828548063.jpg",
      CDN + "9205/17828548062.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "La Crema Blanqueadora Rice 115 gr WOKALI está formulada para brindar una hidratación profunda mientras ayuda a mejorar la apariencia de la piel, dejándola más luminosa, uniforme y suave.",
    incluye: ["1 Crema Blanqueadora Rice 115 gr WOKALI"]
  },
  {
    slug: "crema-blanqueadora-papaya-115-gr-wokali-9207",
    dropiId: 9207,
    nombre: "Crema Blanqueadora Papaya 115 gr WOKALI",
    corto: "La Crema Blanqueadora Papaya 115 gr WOKALI combina los beneficios del extracto de papaya con ingredientes…",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [
      CDN + "9207/img_6a442b8abefb06.17901520_0.jpg",
      CDN + "9207/17828548478.jpg",
      CDN + "9207/17828548479.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "La Crema Blanqueadora Papaya 115 gr WOKALI combina los beneficios del extracto de papaya con ingredientes hidratantes que ayudan a mejorar el aspecto de la piel.",
    incluye: ["1 Crema Blanqueadora Papaya 115 gr WOKALI"]
  },
  {
    slug: "acido-hialuronico-peeling-exfoliante-7343",
    dropiId: 7343,
    nombre: "Acido hialurónico Peeling exfoliante",
    corto: "1. Exfolia con suaves perlas de hierbas que aflojan la suciedad que obstruye los poros, Hidra limpia.",
    categoria: "Belleza",
    destacado: false,
    precio: 89,
    precioPack: 169,
    imagenes: [
      CDN + "7343/1752530535REALPLAZA-2_b5deb1f4-95ba-4840-9309-e31940dc794a.webp",
      CDN + "7343/1752530535MODO_DE_USO_SUMAK_617c66d3-6ad8-4636-ba42-95751183cf5d.webp",
      CDN + "7343/1752530535PORTADA_2_f4c20aa7-fe11-4a26-ae1b-ecc056357f18.webp"
    ],
    beneficios: [
      "WOKALI – hyaluronic acid Peeling exfoliating 170ml",
      "Removedor de piel muerta",
      "3. Dispara a los puntos negros",
      "4. Ayuda a evitar que los nuevos puntos negros se formen"
    ],
    descripcion: "1. Exfolia con suaves perlas de hierbas que aflojan la suciedad que obstruye los poros, Hidra limpia.",
    incluye: ["1 Acido hialurónico Peeling exfoliante"]
  },
  {
    slug: "exfoliante-limpiador-de-arroz-7349",
    dropiId: 7349,
    nombre: "Exfoliante limpiador de arroz",
    corto: "Un exfoliante suave, humecta y nutre la piel, exfolia las células muertas de la piel de forma rápida, fácil de…",
    categoria: "Belleza",
    destacado: false,
    precio: 109,
    precioPack: 199,
    imagenes: [
      CDN + "7349/1752532228REALPLAZA-2_3114b9e8-d36f-41f9-94d3-db8fd3da6978.webp",
      CDN + "7349/1752532228MODODEUSOSUMAK_70a9dafc-ddb2-49d5-a939-3859123d3ac2.webp"
    ],
    beneficios: [
      "WOKALI – Rice Cleaning Facial scrub120ml",
      "Removedor de piel muerta",
      "4. Ayuda a evitar que los nuevos puntos negros se formen",
      "Concentración: Extracto de arroz hidrolizado"
    ],
    descripcion: "Un exfoliante suave, humecta y nutre la piel, exfolia las células muertas de la piel de forma rápida, fácil de usar para tener una piel brillante y saludable. 1. Exfolia con suaves perlas de hierbas que aflojan la suciedad que obstruye los poros, Hidra limpia.",
    incluye: ["1 Exfoliante limpiador de arroz"]
  },
  {
    slug: "rose-facial-wash-170ml-7352",
    dropiId: 7352,
    nombre: "Rose Facial Wash 170ml",
    corto: "Exfoliante facial en espuma enriquecido con aceites esenciales puros para limpiar la piel de manera suave y…",
    categoria: "Belleza",
    destacado: false,
    precio: 109,
    precioPack: 199,
    imagenes: [
      CDN + "7352/1752553351REALPLAZA-2_d02dcce1-b0b5-449a-87b5-6966ffc75bcb.webp",
      CDN + "7352/1752553351MODO_DE_USO_SUMAK_09ca3498-3738-4ded-b709-39eec771a832.webp",
      CDN + "7352/1752553351PORTADA_2_c40a8e11-f727-47d8-b0db-04ede14fb455.webp"
    ],
    beneficios: [
      "Jabón Facial exfoliante 170ml – Wokali",
      "WOKALI – Rose Facial Wash 170ml",
      "Rejuvenece la piel",
      "Da brillo natural al rostro"
    ],
    descripcion: "Exfoliante facial en espuma enriquecido con aceites esenciales puros para limpiar la piel de manera suave y eficaz, rejuvenecer y mejorar el brillo natural. Modo de uso : Aplicar una pequeña cantidad sobre las manos mojadas.",
    incluye: ["1 Rose Facial Wash 170ml"]
  },
  {
    slug: "spray-de-fibra-de-bamboo-250ml-7354",
    dropiId: 7354,
    nombre: "Spray de Fibra de Bamboo 250ml",
    corto: "Spray capilar que tonifica e hidrata el cabello deshidratado, cansado y seco.",
    categoria: "Belleza",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [
      CDN + "7354/1752553589REALPLAZA-2_1ca71327-6292-4141-a48c-d174cd066cf1.webp",
      CDN + "7354/1752553589PORTADA2_b9a508f5-a74e-4c28-a7d9-8f78311666cd.webp",
      CDN + "7354/1752553591MODODEUSOSUMAK_0531a97b-dc21-4ad9-babc-3c56954cfb63.webp"
    ],
    beneficios: [
      "Spray de fibra de bamboo – Wokali 250ml",
      "WOKALI - Styling Hair Spray with keratine",
      "Concentración: Fibra de bamboo y Queratina",
      "Ingredientes Principales: Agua, copolímero de acrilatos, glicerina, DMDM hidantoína"
    ],
    descripcion: "Spray capilar que tonifica e hidrata el cabello deshidratado, cansado y seco.",
    incluye: ["1 Spray de Fibra de Bamboo 250ml"]
  },
  {
    slug: "gel-de-caracol-regenerador-de-piel-7358",
    dropiId: 7358,
    nombre: "Gel de Caracol regenerador de piel",
    corto: "Fruit of the wokali gel de baba de caracol al 99% reparador de la piel, esta formulado con extractos de…",
    categoria: "Belleza",
    destacado: false,
    precio: 119,
    precioPack: 219,
    imagenes: [
      CDN + "7358/1752555116MODELO_Mesadetrabajo1copia6.webp",
      CDN + "7358/1752555116MODELO-08.webp",
      CDN + "7358/1752555116MODELO-16.webp"
    ],
    beneficios: [
      "Gel de Caracol regenerador de piel - Snail 99% 300ml",
      "Ayuda a hidratar",
      "Blanquear la piel",
      "Encoger los poros"
    ],
    descripcion: "Fruit of the wokali gel de baba de caracol al 99% reparador de la piel, esta formulado con extractos de solución de caracol al 99%y vitaminas que hidratan y calman la piel. Después de su rutina básica de cuidado de la piel, aplique suavemente una cantidad amplia en cara y cuerpo, especialmente en las partes secas del…",
    incluye: ["1 Gel de Caracol regenerador de piel"]
  },
  {
    slug: "gel-de-ducha-con-extracto-de-leche-7409",
    dropiId: 7409,
    nombre: "Gel de Ducha con Extracto de Leche",
    corto: "Shower gel milk: limpia, suaviza y humecta la piel, dejándola suave y tersa.",
    categoria: "Belleza",
    destacado: false,
    precio: 129,
    precioPack: 239,
    imagenes: [
      CDN + "7409/1752716066COD712-13.webp",
      CDN + "7409/1752716067COD712-08.webp"
    ],
    beneficios: [
      "Gel de Ducha con Extracto de Leche - Wokali 1300ml",
      "Esencia de leche",
      "Mantiene la piel fresca",
      "Cantidad: 1 und"
    ],
    descripcion: "Shower gel milk: limpia, suaviza y humecta la piel, dejándola suave y tersa. Modo de Uso: humedezca el cuerpo, dispense una cantidad adecuada en la palma, extiéndela uniformemente por todo el cuerpo, masajee suavemente hasta formar espuma, enjuague con abundante agua limpia.",
    incluye: ["1 Gel de Ducha con Extracto de Leche"]
  },
  {
    slug: "gel-de-ducha-flor-de-cerezo-7410",
    dropiId: 7410,
    nombre: "Gel de Ducha Flor de Cerezo",
    corto: "Gel de Ducha Flor de Cerezo.",
    categoria: "Belleza",
    destacado: false,
    precio: 129,
    precioPack: 239,
    imagenes: [
      CDN + "7410/1752716335COD646-copia.webp",
      CDN + "7410/1752716336COD642-00.webp"
    ],
    beneficios: [
      "Gel de Ducha Flor de Cerezo - Fruit of the Wakali",
      "Ácido Hialuronato",
      "Extracto de Aloe Vera",
      "Extracto de flor de cerezo"
    ],
    descripcion: "Gel de Ducha Flor de Cerezo. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Gel de Ducha Flor de Cerezo"]
  },
  {
    slug: "mascara-facial-vitamina-c-30ml-x10-pieza-7361",
    dropiId: 7361,
    nombre: "Mascara Facial Vitamina C 30ml x10 pieza",
    corto: "Una serie de mascarillas de tela a base de superalimentos, diseñadas para mantener la belleza y salud de la…",
    categoria: "Belleza",
    destacado: false,
    precio: 119,
    precioPack: 219,
    imagenes: [
      CDN + "7361/1752555524Mesadetrabajo24_cb53b467-8b20-46c4-982e-d797f1b712e3.webp",
      CDN + "7361/1752555524CODD525-08.webp",
      CDN + "7361/1752555524Mesadetrabajo25_19a7ad44-4412-4836-9fbe-2bfa3ec1ebb2.webp"
    ],
    beneficios: [
      "Mascará Facial Blanqueadora de Vitamina C 30mlx10 piezas",
      "Mascará Facial Blanqueadora de Vitamina C",
      "Contiene: 30mlx10 piezas",
      "Apto para todo tipo de rostro"
    ],
    descripcion: "Una serie de mascarillas de tela a base de superalimentos, diseñadas para mantener la belleza y salud de la piel del rostro. El extracto de Naranja, puede reponer eficazmente la humedad en un corto periodo de tiempo, también es rico en minerales y vitamina E, hidrata mientras reafirma y suaviza la piel.",
    incluye: ["1 Mascara Facial Vitamina C 30ml x10 pieza"]
  },
  {
    slug: "mascara-facial-de-arandano-y-quinoa-30ml-7413",
    dropiId: 7413,
    nombre: "Mascara Facial de Arandano y Quinoa 30ml",
    corto: "Una serie de mascarillas de tela a base de superalimentos, diseñadas para mantener la belleza y salud de la…",
    categoria: "Belleza",
    destacado: false,
    precio: 119,
    precioPack: 219,
    imagenes: [
      CDN + "7413/1752716592Mesadetrabajo36_c5663dbd-e370-4c10-82d8-f348d4726bb5.webp",
      CDN + "7413/1752716592COD524-08.webp",
      CDN + "7413/1752716592Mesadetrabajo42_5af55bbc-4092-43fe-b05c-46779409e02e.webp"
    ],
    beneficios: [
      "Mascara Facial de Arándano y Quinoa 30mlx10 piezas",
      "Mascara Facial de Arándano y Quinoa",
      "Contiene: 30mlx10 piezas",
      "Apto para todo tipo de rostro"
    ],
    descripcion: "Una serie de mascarillas de tela a base de superalimentos, diseñadas para mantener la belleza y salud de la piel del rostro. El extracto de arándano puede reponer eficazmente la humedad en un corto periodo de tiempo, también es rico en minerales y vitamina E, hidrata mientras reafirma y suaviza la piel.",
    incluye: ["1 Mascara Facial de Arandano y Quinoa 30ml"]
  },
  {
    slug: "mascarilla-calmante-de-aloe-vera-30mlx10-7362",
    dropiId: 7362,
    nombre: "Mascarilla Calmante de Aloe Vera 30mlx10",
    corto: "Contiene el 99% de líquido de Aloe vera americano, es anti alérgico, anti acné, anti manchas, blanqueador…",
    categoria: "Belleza",
    destacado: false,
    precio: 119,
    precioPack: 219,
    imagenes: [
      CDN + "7362/1752555738Mesadetrabajo18_8e928f20-dcc8-43b1-ab0f-3a6a3ef92fd9.webp",
      CDN + "7362/1752555738Mesadetrabajo23_199e9f14-0ccf-46e3-990e-7393a9509d61.webp",
      CDN + "7362/1752555738Mesadetrabajo19_8f02621b-c6fe-45be-af90-f6d8fcda1835.webp"
    ],
    beneficios: [
      "Mascarilla Calmante de Aloe Vera 30mlx10 piezas",
      "Suaviza la piel",
      "Repara la piel dañada",
      "Hidrata la piel seca"
    ],
    descripcion: "Contiene el 99% de líquido de Aloe vera americano, es anti alérgico, anti acné, anti manchas, blanqueador, hidratante y reparador para la piel.",
    incluye: ["1 Mascarilla Calmante de Aloe Vera 30mlx10"]
  },
  {
    slug: "perfect-care-acondicionador-keratina-520-7364",
    dropiId: 7364,
    nombre: "Perfect care acondicionador keratina 520",
    corto: "El \"Acondicionador Perfect Care Keratina 520ml\" de Wokali es un producto diseñado para proporcionar un cuidado…",
    categoria: "Belleza",
    destacado: false,
    precio: 139,
    precioPack: 259,
    imagenes: [CDN + "7364/1752556189WOK26-3_c89af2b9-b1d1-4cdd-bc18-74826c2ac77e.webp"],
    beneficios: [
      "PERFECT CARE ACONDICIONADOR KERATINA 520ML - WOKALI",
      "Lavado previo: Lava tu cabello con un champú adecuado y enjuaga bien"
    ],
    descripcion: "El \"Acondicionador Perfect Care Keratina 520ml\" de Wokali es un producto diseñado para proporcionar un cuidado completo al cabello, especialmente formulado para reparar y nutrir cabellos muy dañados y secos. Hidratación profunda: Su fórmula aporta la humedad necesaria para mantener el cabello suave y saludable.",
    incluye: ["1 Perfect care acondicionador keratina 520"]
  },
  {
    slug: "mascarilla-facial-de-arroz-30ml-x-10-pie-7369",
    dropiId: 7369,
    nombre: "Mascarilla Facial de Arroz 30ml x 10 Pie",
    corto: "Es una mascarilla humectante, mantiene la piel tersa, suave e hidratada, mejora el tono desigual de la piel…",
    categoria: "Belleza",
    destacado: false,
    precio: 119,
    precioPack: 219,
    imagenes: [
      CDN + "7369/1752556680REALPLAZA-2_4a39a7cb-552e-499d-9757-ad22e3d20e58.webp",
      CDN + "7369/1752556680MODO_DE_USO_SUMAK_5b089a90-c367-44e3-a74b-b2b18700a8e3.webp",
      CDN + "7369/1752556680PORTADA_2_3c232d30-03c7-4406-8b99-f913da4f330e.webp"
    ],
    beneficios: [
      "Mascarilla Facial de Arroz 30ml x 10 Piezas – Wokali",
      "Organic rice & vitamin E face mask- Wokali",
      "Sólo para uso externo",
      "Si la irritación persiste, consulte a un médico"
    ],
    descripcion: "Es una mascarilla humectante, mantiene la piel tersa, suave e hidratada, mejora el tono desigual de la piel ayudando a reducir la aparición de manchas solares e hiperpigmentación, mejora la firmeza de la piel y reduce lo Agua, glicerina, propanodiol, betaína, copolímero Peg/Ppg-17/6, gliceret-26, colágeno,…",
    incluye: ["1 Mascarilla Facial de Arroz 30ml x 10 Pie"]
  },
  {
    slug: "mascarilla-facial-collagen-bioaqua-9015",
    dropiId: 9015,
    nombre: "Mascarilla Facial Collagen BIOAQUA",
    corto: "Mascarilla Facial Collagen BIOAQUA.",
    categoria: "Hogar",
    destacado: false,
    precio: 79,
    precioPack: 149,
    imagenes: [CDN + "9015/img_6a30460992cfc3.70466661_0.jpg"],
    beneficios: [
      "Práctico y fácil de usar",
      "Ahorra tiempo en casa",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Mascarilla Facial Collagen BIOAQUA. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Mascarilla Facial Collagen BIOAQUA"]
  },
  {
    slug: "exfoliante-de-pies-aloe-vera-500ml-7389",
    dropiId: 7389,
    nombre: "Exfoliante de pies Aloe Vera 500ml",
    corto: "Lave el área antes de aplicar el exfoliante.",
    categoria: "Belleza",
    destacado: false,
    precio: 119,
    precioPack: 219,
    imagenes: [
      CDN + "7389/1752712926REALPLAZA-2_38623612-dcc5-46be-b855-908fefec6f78.webp",
      CDN + "7389/1752712926PORTADA_2_6aed629c-dfe3-4c08-9a4a-1429982a9b75.webp",
      CDN + "7389/1752712927MODO_DE_USO_SUMAK_59669404-e71d-490c-9bfa-d5a23e6f0035.webp"
    ],
    beneficios: [
      "Exfoliante de pies Aloe Vera 500ml - Fruit of the Wokali",
      "Foot Scrub Aloe Vera 500 ml - Fruit of the Wokali",
      "Característica: Crema",
      "Cantidad: 500ML"
    ],
    descripcion: "Lave el área antes de aplicar el exfoliante.",
    incluye: ["1 Exfoliante de pies Aloe Vera 500ml"]
  },
  {
    slug: "exfoliante-de-limon-fruit-of-the-wokal-7404",
    dropiId: 7404,
    nombre: "Exfoliante de Limón - Fruit of the Wokal",
    corto: "De la marca de exfoliantes n.° 1 de Francia, este galardonado exfoliante de limón con exfoliantes 100 %…",
    categoria: "Belleza",
    destacado: false,
    precio: 119,
    precioPack: 219,
    imagenes: [
      CDN + "7404/1752715641COD911x1_REALPLAZA_PEDIDOSYA-13.webp",
      CDN + "7404/1752715641COD911_MODODEUSOSUMAK.webp"
    ],
    beneficios: [
      "Exfoliante de limón corporal – Fruit of the Wokali 500g",
      "Exfoliante de Limón",
      "Exfolia profundamente para revelar una piel suave",
      "Probado por dermatólogos sin aceite"
    ],
    descripcion: "De la marca de exfoliantes n.° 1 de Francia, este galardonado exfoliante de limón con exfoliantes 100 % naturales limpia en profundidad y deja la piel suave y resplandeciente al instante. agua juglans regia (nuez), polvo de cáscara, estearato de glicerilo, glicerina, lauril sulfoacetato de sodio, Les May Com) Kemel…",
    incluye: ["1 Exfoliante de Limón - Fruit of the Wokal"]
  },
  {
    slug: "mascarilla-de-amaranto-y-haba-mung-30ml-7391",
    dropiId: 7391,
    nombre: "Mascarilla de amaranto y haba mung 30ml",
    corto: "está diseñado para hidratar y acondicionar profundamente la piel utilizando extractos concentrados de plantas…",
    categoria: "Belleza",
    destacado: false,
    precio: 119,
    precioPack: 219,
    imagenes: [
      CDN + "7391/1752713147MODO_DE_USO_SUMAK_44a039d6-30e6-447f-a7b8-4f3b8e58ba1b.webp",
      CDN + "7391/1752713146REALPLAZA-2_40645c45-be48-4b30-91de-ada12f351662.webp",
      CDN + "7391/1752713146PORTADA_2_f7e4f307-3373-41aa-b3a1-6354c4855ac5.webp"
    ],
    beneficios: [
      "Mascarilla de amaranto y haba mung 30ml x 10Piezas – Wokali",
      "WOKALI –Amaranth & mung beans Facial mask 30ml x 10Pieces",
      "Piel reafirmante",
      "Hidratación profunda"
    ],
    descripcion: "está diseñado para hidratar y acondicionar profundamente la piel utilizando extractos concentrados de plantas naturales que ayudan a la piel a absorber los nutrientes. Modo de uso : Después de lavarse la cara, aplique un tónico adecuado para su tipo de piel.",
    incluye: ["1 Mascarilla de amaranto y haba mung 30ml"]
  },
  {
    slug: "acondicionador-de-aloe-vera-550ml-7396",
    dropiId: 7396,
    nombre: "Acondicionador de Aloe Vera 550ml",
    corto: "Cuidado nutritivo especialmente diseñado para cada tipo de cabello.",
    categoria: "Belleza",
    destacado: false,
    precio: 109,
    precioPack: 199,
    imagenes: [
      CDN + "7396/1752714282MODODEUSOSUMAK_c7158cf5-94dc-40c9-8869-10076f88cafa.webp",
      CDN + "7396/1752714281REALPLAZA-2_8386cd57-304b-40bc-aaf1-78f8a93d2c9c.webp",
      CDN + "7396/1752714282PORTADA_2_431c7fbe-2084-40de-bbae-3660f90841ac.webp"
    ],
    beneficios: [
      "Acondicionador De aloe vera 550ml – Wokali",
      "WOKALI – conditioner Plant Natural Nourishing aloe vera",
      "Nutre e hidrata",
      "Cabello más manejable"
    ],
    descripcion: "Cuidado nutritivo especialmente diseñado para cada tipo de cabello. Modo de uso : Usa este acondicionador después del lavado, sobre el cabello secado con toalla.",
    incluye: ["1 Acondicionador de Aloe Vera 550ml"]
  },
  {
    slug: "acondicionador-de-bamboo-550ml-wokali-7397",
    dropiId: 7397,
    nombre: "Acondicionador de Bamboo 550ml - Wokali",
    corto: "Sirve para cabello dañado, regenera dándole más vida a tu cabello y evita la caída del cabello.",
    categoria: "Belleza",
    destacado: false,
    precio: 109,
    precioPack: 199,
    imagenes: [
      CDN + "7397/1752714411REALPLAZA-2_0961ee12-f897-4062-a5fb-82538be789b3.webp",
      CDN + "7397/1752714411PORTADA2_d06c326f-5229-4f4a-9b00-8daec8960c57.webp",
      CDN + "7397/1752714411MODODEUSOSUMAK_a175643a-5917-4d42-8cce-c951867da88c.webp"
    ],
    beneficios: [
      "Acondicionador de bambú 550ml – Wokali",
      "Conditioner Professional the Bambo Nourishing Aloe Vera with Keratin 550ml",
      "Ingredientes: wáter, cetearyl alcohol, cetrimonium chloridw, parfum, DMDM hydantoin",
      "Para uso: externo"
    ],
    descripcion: "Sirve para cabello dañado, regenera dándole más vida a tu cabello y evita la caída del cabello. Modo de uso: use este acondicionador después del lavado, sobre el cabello secado con toalla, distribuya una pequeña cantidad uniformemente por todo el cabello, dejar durante 2-3 minutos, luego enjuagar bien.",
    incluye: ["1 Acondicionador de Bamboo 550ml - Wokali"]
  },
  {
    slug: "locion-corporal-purificante-e-hidratante-7399",
    dropiId: 7399,
    nombre: "Loción Corporal Purificante e Hidratante",
    corto: "Tome la cantidad correcta y masajee su cuerpo después del baño o tan a menudo con sea necesario.",
    categoria: "Belleza",
    destacado: false,
    precio: 109,
    precioPack: 199,
    imagenes: [
      CDN + "7399/1752714688REALPLAZA-2_ded9b6e3-8946-4ea2-9842-2ed8e2f7adac.webp",
      CDN + "7399/1778070211COD908-03.jpg",
      CDN + "7399/1752714689MODODEUSOSUMAK_86bf0c8b-f87d-46f7-98ab-5fc93bfde09f.webp"
    ],
    beneficios: [
      "Reducir las arrugas",
      "Líneas finas",
      "Hidratación de la piel seca",
      "Incluso en personas con condiciones tales como eczema"
    ],
    descripcion: "Tome la cantidad correcta y masajee su cuerpo después del baño o tan a menudo con sea necesario.",
    incluye: ["1 Loción Corporal Purificante e Hidratante"]
  },
  {
    slug: "locion-corporal-dermo-advance-portugal-7448",
    dropiId: 7448,
    nombre: "Loción corporal Dermo Advance - Portugal",
    corto: "Fórmula ligera especialmente desarrollada para el cuidado y protección de tu piel.",
    categoria: "Belleza",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [
      CDN + "7448/1752858704COD850_REALPLAZA_PEDIDOSYA-13.webp",
      CDN + "7448/1752858704COD850_MODODEUSOSUMAK.webp"
    ],
    beneficios: [
      "Loción corporal Dermo Advance - Portugal x150g",
      "Para pieles secas y sensibles, fórmula ligera",
      "Sin Alcohol",
      "Ingrediente: 10% urea con vitamina E"
    ],
    descripcion: "Fórmula ligera especialmente desarrollada para el cuidado y protección de tu piel. Ingredientes clave:Antioxidante: Acetato de tocoferilo, Ingrediente idéntico a la piel: Gliceryne",
    incluye: ["1 Loción corporal Dermo Advance - Portugal"]
  },
  {
    slug: "locion-corporal-rosas-bioaqua-9035",
    dropiId: 9035,
    nombre: "Loción Corporal Rosas BIOAQUA",
    corto: "Loción Corporal Rosas BIOAQUA.",
    categoria: "Hogar",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [CDN + "9035/img_6a30463b7a8c92.77331734_0.jpg"],
    beneficios: [
      "Práctico y fácil de usar",
      "Ahorra tiempo en casa",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Loción Corporal Rosas BIOAQUA. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Loción Corporal Rosas BIOAQUA"]
  },
  {
    slug: "gel-calmante-aloe-vera-natural-92-7406",
    dropiId: 7406,
    nombre: "Gel Calmante Áloe Vera Natural 92%",
    corto: "Superalimento repleto de poderosos antioxidantes, esenciales para proteger la piel contra los radicales libres…",
    categoria: "Belleza",
    destacado: false,
    precio: 119,
    precioPack: 219,
    imagenes: [
      CDN + "7406/1752715792COD740_Mesadetrabajo1copia6.webp",
      CDN + "7406/1752715792COD740-08.webp"
    ],
    beneficios: [
      "FUIT OF THE WOKOLI GEL CALMANTE DE Áloe Vera NATURALES 99%",
      "Hidrata revitaliza mejora",
      "La opacidad, la oscuridad y manchas",
      "Nutre y regenera"
    ],
    descripcion: "Superalimento repleto de poderosos antioxidantes, esenciales para proteger la piel contra los radicales libres causantes de la edad. Especialmente en las partes seca de la piel para tener un resultado optimo.",
    incluye: ["1 Gel Calmante Áloe Vera Natural 92%"]
  },
  {
    slug: "gel-calmante-rosa-natural-99-7546",
    dropiId: 7546,
    nombre: "Gel Calmante Rosa Natural 99%",
    corto: "Superalimento repleto de poderosos antioxidantes, esenciales para proteger la piel contra los radicales libres…",
    categoria: "Belleza",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [
      CDN + "7546/1754064817COD739.webp",
      CDN + "7546/1754064816COD739-08.webp",
      CDN + "7546/1754064816COD739_Mesadetrabajo1copia6.webp"
    ],
    beneficios: [
      "FUIT OF THE WOKOLI GEL CALMANTE DE ROSAS NATURALES 99%",
      "Hidrata revitaliza mejora",
      "La opacidad, la oscuridad y manchas",
      "Nutre y regenera"
    ],
    descripcion: "Superalimento repleto de poderosos antioxidantes, esenciales para proteger la piel contra los radicales libres causantes de la edad. Especialmente en las partes seca de la piel para tener un resultado optimo.",
    incluye: ["1 Gel Calmante Rosa Natural 99%"]
  },
  {
    slug: "mascarilla-para-ojeras-gold-snail-7408",
    dropiId: 7408,
    nombre: "Mascarilla para Ojeras Gold Snail",
    corto: "Reparador calmante, ayuda a combatir los signos del envejecimiento, ayuda con la elasticidad de la piel y…",
    categoria: "Belleza",
    destacado: false,
    precio: 109,
    precioPack: 199,
    imagenes: [
      CDN + "7408/1752715959COD725_Mesadetrabajo1copia6_Copy.webp",
      CDN + "7408/1752715959COD725-16_Copy.webp",
      CDN + "7408/1752715959COD725-08_Copy.webp"
    ],
    beneficios: [
      "Mascarilla para Ojeras Gold Snail - Fruit of the Wokali",
      "Parches de Ojos Caracol de Oro- Gold Snail",
      "Origen: Chino",
      "Contiene: 60 piezas"
    ],
    descripcion: "Reparador calmante, ayuda a combatir los signos del envejecimiento, ayuda con la elasticidad de la piel y combate las arrugas, disminuye eficazmente las ojeras y las bolsas de los ojos. Uso: Después de limpiar y tonificar, aplique el parche en el área debajo de los ojos con la espátula proporcionada y retire después…",
    incluye: ["1 Mascarilla para Ojeras Gold Snail"]
  },
  {
    slug: "gel-exfoliante-rostro-y-cuerpo-de-rosa-7411",
    dropiId: 7411,
    nombre: "Gel Exfoliante Rostro y Cuerpo de Rosa",
    corto: "Modo de uso: Después de Limpiar y secar, aplique el producto en el cuerpo, masajear suavemente hasta que…",
    categoria: "Belleza",
    destacado: false,
    precio: 119,
    precioPack: 219,
    imagenes: [
      CDN + "7411/1752716410Mesadetrabajo7_7b47ebef-188c-427b-a014-ef71dd22b267.webp",
      CDN + "7411/1752716410Mesadetrabajo8_d980fbb7-ddd2-4d31-833b-6aeb03b60449.webp",
      CDN + "7411/1752716410rosa.webp"
    ],
    beneficios: [
      "Gel Exfoliante Rostro y Cuerpo de Rosa 320ml",
      "Gel que brinda que el rostro esté suave y luminoso",
      "Piel fresca, clara y hermosa",
      "Brinda nutrición"
    ],
    descripcion: "Modo de uso: Después de Limpiar y secar, aplique el producto en el cuerpo, masajear suavemente hasta que aparezca la suciedad de la piel y luego enjuagar con agua limpia. Precaución: Solo para uso externo, si observa un aspecto desfavorable descarte su uso.",
    incluye: ["1 Gel Exfoliante Rostro y Cuerpo de Rosa"]
  },
  {
    slug: "gel-exfoliante-orange-8373",
    dropiId: 8373,
    nombre: "Gel exfoliante orange",
    corto: "Gel exfoliante orange.",
    categoria: "Bienestar",
    destacado: false,
    precio: 89,
    precioPack: 169,
    imagenes: [
      CDN + "8373/1776713565WhatsApp%20Image%202026-04-20%20at%201.38.43%20PM.jpeg",
      CDN + "8373/1776713565WhatsApp%20Image%202026-04-20%20at%201.39.32%20PM.jpeg",
      CDN + "8373/1776713565WhatsApp%20Image%202026-04-20%20at%201.38.51%20PM.jpeg"
    ],
    beneficios: [
      "Gel Exfoliante Orange – Whitening Exfoliating Brightening Gel",
      "Gel exfoliante de alta actividad (exfoliación suave)",
      "Contiene extracto de naranja",
      "Ayuda a remover células muertas"
    ],
    descripcion: "Gel exfoliante orange. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Gel exfoliante orange"]
  },
  {
    slug: "gel-exfoliante-vitamina-c-140gr-bioaqua-8975",
    dropiId: 8975,
    nombre: "Gel Exfoliante Vitamina C 140gr BIOAQUA",
    corto: "Gel exfoliante con vitamina C diseñado para ayudar a remover células muertas, impurezas y residuos acumulados…",
    categoria: "Belleza",
    destacado: false,
    precio: 79,
    precioPack: 149,
    imagenes: [CDN + "8975/img_6a2c5ab6959511.69545406_0.png"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Gel exfoliante con vitamina C diseñado para ayudar a remover células muertas, impurezas y residuos acumulados en la superficie de la piel.",
    incluye: ["1 Gel Exfoliante Vitamina C 140gr BIOAQUA"]
  },
  {
    slug: "cinta-led-rgb-de-5-metros-7419",
    dropiId: 7419,
    nombre: "Cinta LED RGB de 5 metros",
    corto: "Iluminación multicolor: Cambios de color automáticos o manuales Modos dinámicos: Parpadeo, fundido, cambio…",
    categoria: "Hogar",
    destacado: false,
    precio: 49,
    precioPack: 89,
    imagenes: [
      CDN + "7419/1752766451LED%201.png",
      CDN + "7419/1752766451LED%205.png",
      CDN + "7419/1752766451LED%202.png"
    ],
    beneficios: [
      "Longitud: 5 metros con 300 LEDs tipo 5050 RGB",
      "Voltaje: 12V DC con consumo eficiente de energía",
      "Protección: Resistente a salpicaduras (IP65)",
      "Adhesivo: Cinta autoadhesiva en la parte posterior"
    ],
    descripcion: "Iluminación multicolor: Cambios de color automáticos o manuales Modos dinámicos: Parpadeo, fundido, cambio gradual y luz fija",
    incluye: ["1 Cinta LED RGB de 5 metros"]
  },
  {
    slug: "espuma-limpiador-facial-portugal-175ml-7428",
    dropiId: 7428,
    nombre: "Espuma Limpiador Facial - Portugal 175ml",
    corto: "La espuma limpiadora facial Portugal limpia profundamente los poros de la piel sin resecarla, removiendo…",
    categoria: "Belleza",
    destacado: false,
    precio: 109,
    precioPack: 199,
    imagenes: [
      CDN + "7428/1752798593COD774_Mesadetrabajo1copia6.webp",
      CDN + "7428/1752798593COD774-08.webp",
      CDN + "7428/1752798593COD774-16_210e247f-08dc-40a7-af27-e54269ec0e2c.webp"
    ],
    beneficios: [
      "Espuma Limpiadora facial – Portugal 175ml",
      "Cantidad 175ml",
      "Origen: Perú",
      "USO: Rostro"
    ],
    descripcion: "La espuma limpiadora facial Portugal limpia profundamente los poros de la piel sin resecarla, removiendo impurezas y maquillaje, dejándola notablemente limpia, suave y humectada. Modo de uso: Antes de aplicar, humedecer el rostro, luego colocar la espuma facial en las manos y llevar al rostro y cuello con movimientos…",
    incluye: ["1 Espuma Limpiador Facial - Portugal 175ml"]
  },
  {
    slug: "balsamo-labial-de-menta-7433",
    dropiId: 7433,
    nombre: "Bálsamo labial de menta",
    corto: "Este bálsamo labial está formulado para proporcionar hidratación y protección a los labios, con un refrescante…",
    categoria: "Belleza",
    destacado: false,
    precio: 79,
    precioPack: 149,
    imagenes: [CDN + "7433/1752803865COD1201-01_45a98e60-5b4b-491b-bc2f-b3fb1970ef87.webp"],
    beneficios: [
      "BÁLSAMO LABIAL DE MENTA - LIPSMACK PORTUGAL - 12.5G",
      "o Hidratación y protección para los labios",
      "o Aroma refrescante a menta",
      "o Mantiene los labios suaves y flexibles"
    ],
    descripcion: "Este bálsamo labial está formulado para proporcionar hidratación y protección a los labios, con un refrescante aroma y sabor a menta. Modo de uso: Aplicar directamente sobre los labios según sea necesario a lo largo del día.",
    incluye: ["1 Bálsamo labial de menta"]
  },
  {
    slug: "balsamo-labial-mango-tropical-12-5g-7443",
    dropiId: 7443,
    nombre: "Bálsamo labial mango tropical 12.5g",
    corto: "Bálsamo labial mango tropical, enriquecido con vitamina E, manteca de karité y extractos naturales, los cuales…",
    categoria: "Belleza",
    destacado: false,
    precio: 79,
    precioPack: 149,
    imagenes: [
      CDN + "7443/1752857091REALPLAZA-2_f3adf072-a437-465a-adb6-43e550efbd5a.webp",
      CDN + "7443/1752857091MODO_DE_USO_SUMAK_410c671c-ace9-4756-823c-10915f11ea33.webp",
      CDN + "7443/1752857091PORTADA_2_a67de69a-b2fa-466d-be61-5ce52d0a44bb.webp"
    ],
    beneficios: [
      "Bálsamo labial mango tropical 12.5g – Portugal",
      "Humecta y protege los labios",
      "Producto natural",
      "Libre de parabenos"
    ],
    descripcion: "Bálsamo labial mango tropical, enriquecido con vitamina E, manteca de karité y extractos naturales, los cuales te bridaran una máxima humectación y protección, dejando tus labios suaves e hidratados por mucho tiempo. Modo de uso : aplicar sobre los labios, las veces que sean necesarias para mantener tus labios…",
    incluye: ["1 Bálsamo labial mango tropical 12.5g"]
  },
  {
    slug: "aclaradora-facial-emulsion-noche-7434",
    dropiId: 7434,
    nombre: "Aclaradora Facial Emulsión Noche",
    corto: "Modo de uso: Aplicar sobre la piel limpia y seca por la noche antes de acostarse.",
    categoria: "Belleza",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [CDN + "7434/1752804416COD1196-01_0ce41000-245e-477d-837a-fa2cfa02fe65.webp"],
    beneficios: [
      "CLARADORA FACIAL EMULSIÓN NOCHE – PORTUGAL 45G",
      "o Ayuda a aclarar y unificar el tono de la piel",
      "o Mejora la luminosidad y vitalidad",
      "Tipo De Artículo: Cuidado Facial|"
    ],
    descripcion: "Modo de uso: Aplicar sobre la piel limpia y seca por la noche antes de acostarse.",
    incluye: ["1 Aclaradora Facial Emulsión Noche"]
  },
  {
    slug: "lapiz-labial-frambuesa-7438",
    dropiId: 7438,
    nombre: "Lapiz labial Frambuesa",
    corto: "Descubre la sofisticación y el encanto del Lápiz Labial Frambuesa de Portugal Lipstick, un elemento…",
    categoria: "Belleza",
    destacado: false,
    precio: 89,
    precioPack: 169,
    imagenes: [CDN + "7438/1752813022COD1184-1_9a9eb827-a0f7-449d-9857-f396784e9f48.webp"],
    beneficios: [
      "LAPIZ LABIAL FRAMBUESA - PORTUGAL LÁPIZ LABIAL 4.8G",
      "Tipo De Artículo: Cuidado Facial",
      "Género: unisex",
      "Formulación: Crema"
    ],
    descripcion: "Descubre la sofisticación y el encanto del Lápiz Labial Frambuesa de Portugal Lipstick, un elemento imprescindible en tu colección de maquillaje para agregar un toque de color vibrante y elegante a tus labios. El tono Frambuesa es ideal para quienes buscan un look audaz y chic que resalte su belleza natural.",
    incluye: ["1 Lapiz labial Frambuesa"]
  },
  {
    slug: "lapiz-labial-naranja-7439",
    dropiId: 7439,
    nombre: "Lapiz labial Naranja",
    corto: "Descubre la luminosidad y el estilo del Lápiz Labial Naranja de Portugal Lipstick, un producto que combina…",
    categoria: "Belleza",
    destacado: false,
    precio: 89,
    precioPack: 169,
    imagenes: [CDN + "7439/1752813110COD1183-1_054e27c4-e7a4-4ddd-8455-af50f48e5901.webp"],
    beneficios: [
      "LAPIZ LABIAL NARANJA - PORTUGAL LÁPIZ LABIAL 4.8G",
      "Tipo De Artículo: Cuidado Facial",
      "Género: Unisex",
      "Formulación: Crema"
    ],
    descripcion: "Descubre la luminosidad y el estilo del Lápiz Labial Naranja de Portugal Lipstick, un producto que combina audacia y elegancia en cada aplicación. Además de su excelente rendimiento cosmético, el diseño elegante y práctico del lápiz labial Naranja lo convierte en un accesorio indispensable para tu kit de maquillaje,…",
    incluye: ["1 Lapiz labial Naranja"]
  },
  {
    slug: "lapiz-labial-uva-portugal-lipstick-4-8-7440",
    dropiId: 7440,
    nombre: "Lapiz labial Uva - Portugal Lipstick 4.8",
    corto: "Descubre el encanto y la elegancia del Lápiz Labial Uva de Portugal Lipstick, un producto imprescindible para…",
    categoria: "Belleza",
    destacado: false,
    precio: 89,
    precioPack: 169,
    imagenes: [CDN + "7440/1752813224COD1182-1_5dedb78f-a2e3-4762-b46b-f72076ef7560.webp"],
    beneficios: [
      "LAPIZ LABIAL UVA - BARRA LABIAL PORTUGAL 4.8G",
      "Tipo De Artículo: Cuidado Facial",
      "Género: unisex",
      "Formulación: Crema"
    ],
    descripcion: "Descubre el encanto y la elegancia del Lápiz Labial Uva de Portugal Lipstick, un producto imprescindible para realzar tu belleza con un toque de sofisticación. Además de su excelente desempeño cosmético, el empaque elegante y práctico del lápiz labial Uva lo convierte en un complemento perfecto para tu bolsa de…",
    incluye: ["1 Lapiz labial Uva - Portugal Lipstick 4.8"]
  },
  {
    slug: "shampoo-romero-crecepelo-nnp-520-ml-7449",
    dropiId: 7449,
    nombre: "Shampoo Romero Crecepelo - NNP 520 ml",
    corto: "Enriquecido con vitaminas y nutrientes que fortalecen y revitalizan desde la raíz, complementado con Extracto…",
    categoria: "Belleza",
    destacado: false,
    precio: 109,
    precioPack: 199,
    imagenes: [CDN + "7449/1752869705COD-3_d3249e1e-99fd-47a1-890c-da3afa3c12c6.webp"],
    beneficios: [
      "SHAMPOO ROMERO CRECEPELO 520 ml",
      "Ingredientes principales: extracto de Romero, Vitamina E y Filtro UV",
      "SHAMPOO ROMERO CRECEPELO",
      "Contiene: 520 ml c/u"
    ],
    descripcion: "Enriquecido con vitaminas y nutrientes que fortalecen y revitalizan desde la raíz, complementado con Extracto de Romero promueve el crecimiento y evita la caída del cabello. Beneficios: Promueve el crecimiento, Fortalece desde la raíz, Protege el cuero cabelludo, Mejora el aspecto del cabello, Aporta elasticidad,…",
    incluye: ["1 Shampoo Romero Crecepelo - NNP 520 ml"]
  },
  {
    slug: "ricino-aceite-de-castor-15ml-7452",
    dropiId: 7452,
    nombre: "Ricino Aceite de castor 15ml",
    corto: "Aceite de Ricino. Aumenta la longitud y el crecimiento para promover el volumen de las pestañas, el espesor de…",
    categoria: "Belleza",
    destacado: false,
    precio: 129,
    precioPack: 239,
    imagenes: [
      CDN + "7452/1752871140COD317-6.webp",
      CDN + "7452/1752871140COD317-3.webp",
      CDN + "7452/1752871140COD317-7.webp"
    ],
    beneficios: [
      "Ricino Aceite de castor 15 ml",
      "Ricino Aceite de castor",
      "Contiene: 15 ml",
      "Solo para uso externo"
    ],
    descripcion: "Aceite de Ricino. Aumenta la longitud y el crecimiento para promover el volumen de las pestañas, el espesor de las cejas, la salud y la fuerza del folículo piloso. Brinda nutrientes esenciales para mejorar la hebra capilar frágil o quebradiza.",
    incluye: ["1 Ricino Aceite de castor 15ml"]
  },
  {
    slug: "espuma-para-afeitar-con-aloe-vera-400ml-7455",
    dropiId: 7455,
    nombre: "Espuma para afeitar con aloe vera 400ml",
    corto: "Modo de uso : Humedezca el rostro y cuello, agite bien el envase antes de usar, aplique un poco del producto…",
    categoria: "Belleza",
    destacado: false,
    precio: 109,
    precioPack: 199,
    imagenes: [CDN + "7455/1752871412COD985-6.webp"],
    beneficios: [
      "Espuma para afeitar con aloe vera 400ml - Nevada",
      "Producto : Espuma para afeitar con aloe vera",
      "Cantidad : 400ml",
      "Marca : nevada"
    ],
    descripcion: "Modo de uso : Humedezca el rostro y cuello, agite bien el envase antes de usar, aplique un poco del producto con las manos y distribuya uniformemente. Ingredientes Principales: Water, stearic acid, triwthanolamine, butane, palmitic acid, laureth-20,propane, d-sorbitol, sodium lauryl sulfat, isopropyl palmitate,…",
    incluye: ["1 Espuma para afeitar con aloe vera 400ml"]
  },
  {
    slug: "restructurante-capilar-botox-y-queratina-7456",
    dropiId: 7456,
    nombre: "Restructurante capilar bótox y queratina",
    corto: "Formula elaborada para rellenar la hebra capilar, ayudando a controlar el frizz del cabello, a la vez que lo…",
    categoria: "Belleza",
    destacado: false,
    precio: 129,
    precioPack: 239,
    imagenes: [
      CDN + "7456/1752871520REALPLAZA-2_edca85a7-be91-4877-989a-4e6473ea6a26.webp",
      CDN + "7456/1752871520PORTADA_2_3f17df2b-ed9e-4ae9-8644-d1ff43bc4678.webp",
      CDN + "7456/1752871520MODO_DE_USO_SUMAK_44c4bc81-efd7-4656-8479-d4bef1e55de4.webp"
    ],
    beneficios: [
      "Rellena la hebra capilar",
      "Controla el frizz",
      "Hidrata y nutre el cabello",
      "Mantiene el cabello sano y brillante"
    ],
    descripcion: "Formula elaborada para rellenar la hebra capilar, ayudando a controlar el frizz del cabello, a la vez que lo hidrata y nutre, devolviendo el cabello a su estado natural dejándolo sano y brillante. Ingredientes Principales: Agua, glycerin, cetearyl alcohol, Behentrimonium chloride, dimethicone, glyceryl stearate,…",
    incluye: ["1 Restructurante capilar bótox y queratina"]
  },
  {
    slug: "crema-hidratante-para-pies-de-coco-nnp-7458",
    dropiId: 7458,
    nombre: "Crema Hidratante para pies de Coco - NNP",
    corto: "Elabora para mantener la piel de los pies hidratante, suave y rejuvenecida, mejorando la flexibilidad y firmeza…",
    categoria: "Belleza",
    destacado: false,
    precio: 79,
    precioPack: 149,
    imagenes: [
      CDN + "7458/1752871765COD743_Mesadetrabajo1copia6.webp",
      CDN + "7458/1752871765COD743-08.webp"
    ],
    beneficios: [
      "CREMA HIDRATANTE PARA LOS PIES – COCO NEVADA NATURAL PRODUCTS 120ML",
      "Foot Cream Coconut - NNP",
      "Cantidad: 120ml",
      "Origen: Panamá"
    ],
    descripcion: "Elabora para mantener la piel de los pies hidratante, suave y rejuvenecida, mejorando la flexibilidad y firmeza de la piel. Uso: Aplicar una pequeña cantidad de la crema sobre la piel limpia y extender con un suave masaje hasta su completa absorción.",
    incluye: ["1 Crema Hidratante para pies de Coco - NNP"]
  },
  {
    slug: "crema-hidratante-para-pies-de-aloe-vera-7462",
    dropiId: 7462,
    nombre: "Crema Hidratante para pies de Áloe Vera",
    corto: "Elabora para mantener la piel de los pies hidratante, suave y rejuvenecida, mejorando la flexibilidad y firmeza…",
    categoria: "Belleza",
    destacado: false,
    precio: 79,
    precioPack: 149,
    imagenes: [
      CDN + "7462/1752872314COD746_Mesadetrabajo1copia6.webp",
      CDN + "7462/1752872314COD746-08.webp"
    ],
    beneficios: [
      "CREMA HIDRATANTE PARA LOS PIES – ALOE VERA NEVADA NATURAL PRODUCTS 120ML",
      "Foot Cream Áloe Vera - NNP",
      "Cantidad: 120ml",
      "Origen: Panamá"
    ],
    descripcion: "Elabora para mantener la piel de los pies hidratante, suave y rejuvenecida, mejorando la flexibilidad y firmeza de la piel. Uso: Aplicar una pequeña cantidad de la crema sobre la piel limpia y extender con un suave masaje hasta su completa absorción.",
    incluye: ["1 Crema Hidratante para pies de Áloe Vera"]
  },
  {
    slug: "crema-romero-crecepelo-7459",
    dropiId: 7459,
    nombre: "Crema Romero Crecepelo",
    corto: "Tratamientos con nutrientes y vitaminas que fortalecen y revitalizan profundamente el cabello.",
    categoria: "Belleza",
    destacado: false,
    precio: 109,
    precioPack: 199,
    imagenes: [
      CDN + "7459/1752871865RomneroCrecepeloCrecimientoCapilar.webp",
      CDN + "7459/1752871865RomneroCrecepeloCrecimientoCapilarcopia.webp",
      CDN + "7459/1752871865RomneroCrecepeloCrecimientoCapilarcopia2.webp"
    ],
    beneficios: [
      "Crema Romero Crecepelo - Crecimiento Capilar",
      "Crema Romero Crecepelo - Crecimiento Capilar",
      "Origen: Panamá",
      "Uso: Para todo tipo de cabello"
    ],
    descripcion: "Tratamientos con nutrientes y vitaminas que fortalecen y revitalizan profundamente el cabello. Modo de uso: De un ligero masaje, deje actuar por unos minutos y luego enjuague con abundante agua.",
    incluye: ["1 Crema Romero Crecepelo"]
  },
  {
    slug: "talco-para-pies-foot-powder-200g-7460",
    dropiId: 7460,
    nombre: "Talco para pies Foot Powder 200g",
    corto: "Este talco absorbe la humedad excesiva que causa el pie de atleta.",
    categoria: "Belleza",
    destacado: false,
    precio: 89,
    precioPack: 169,
    imagenes: [
      CDN + "7460/1752872100Mesadetrabajo103_3.webp",
      CDN + "7460/1752872100Mesadetrabajo104_3.webp",
      CDN + "7460/1752872100COD488-10.webp"
    ],
    beneficios: [
      "Absorbe la humedad",
      "Regula el aroma",
      "Calma y refresca tus pies",
      "Talco para Pies Foot Powder"
    ],
    descripcion: "Este talco absorbe la humedad excesiva que causa el pie de atleta. Uso: Lave y seque los pies.",
    incluye: ["1 Talco para pies Foot Powder 200g"]
  },
  {
    slug: "crema-facial-de-aloe-vera-140ml-nevada-7461",
    dropiId: 7461,
    nombre: "Crema facial de aloe vera 140ml - Nevada",
    corto: "Modo de uso : Despues de la limpieza facial, aplicar una fina capa sobre el cutis limpio y extender hasta su…",
    categoria: "Belleza",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [
      CDN + "7461/1752872227992_4_3417b94b-f055-4911-a1d8-897ad0dec86d.webp",
      CDN + "7461/1752872227992_1_c5f868d5-6e9d-4582-803d-300d24e5a051.webp",
      CDN + "7461/1752872227992_14_2052c875-10da-46a6-9330-b63d97c06196.webp"
    ],
    beneficios: [
      "Crema facial de aloe vera 140gr - Nevada",
      "Aporta muchos nutrientes",
      "Aporta sensación saludable a la piel",
      "Otorga protección solar"
    ],
    descripcion: "Modo de uso : Despues de la limpieza facial, aplicar una fina capa sobre el cutis limpio y extender hasta su completa absorción. Ingredientes Principales: Aqua, glycerin, isopropyl palmitate, propylene glycol, dimethico- ne, cetearyl alcohol, aloe yohjyu matsu ekisu, lanolin, glyceryl stearate, cetearyl glucoside,…",
    incluye: ["1 Crema facial de aloe vera 140ml - Nevada"]
  },
  {
    slug: "crema-facial-extracto-de-rosa-140g-7468",
    dropiId: 7468,
    nombre: "Crema facial extracto de rosa 140g",
    corto: "Crema facial enriquecida con extracto de rosas es ideal para pieles secas ya que ayuda a prevenir y combatir…",
    categoria: "Belleza",
    destacado: false,
    precio: 89,
    precioPack: 169,
    imagenes: [
      CDN + "7468/1752874732REALPLAZA-2_e6ccd043-f37b-43f8-b87c-0c7648737178.webp",
      CDN + "7468/1752874732PORTADA_2_e1606278-84f9-4228-ab9f-140c6d0a3b1d.webp",
      CDN + "7468/1752874732MODO_DE_USO_SUMAK_dd73f602-7f98-41a2-a600-ba7b70c8c3ab.webp"
    ],
    beneficios: [
      "Crema facial extracto de rosa 140g - Nevada",
      "Rejuvenecimiento del cutis",
      "Protección he hidratación",
      "Proporciona elasticidad y resistencia en los tejidos de la piel"
    ],
    descripcion: "Crema facial enriquecida con extracto de rosas es ideal para pieles secas ya que ayuda a prevenir y combatir las señales del paso del tiempo. Modo de uso : después de la limpieza facial, aplicar una fina capa sobre el cutis limpio y extender hasta su completa absorción.",
    incluye: ["1 Crema facial extracto de rosa 140g"]
  },
  {
    slug: "crema-facial-moisturizer-hidratante-7514",
    dropiId: 7514,
    nombre: "Crema Facial Moisturizer Hidratante",
    corto: "Transforma tu rutina de cuidado facial con nuestra Crema Facial Moisturizer Hidratante Botulina de 283g, una…",
    categoria: "Belleza",
    destacado: false,
    precio: 129,
    precioPack: 239,
    imagenes: [CDN + "7514/1753917957COD1171-1_cf0be04a-5a75-4c37-ad6b-f3f3fd70f728.webp"],
    beneficios: [
      "CREMA FACIAL MOISTURIZER HIDRATANTE BOTULINA 283G - NNP",
      "Tipo De Artículo: Cuidado Facial",
      "Género: Unisex",
      "Formulación: Crema"
    ],
    descripcion: "Transforma tu rutina de cuidado facial con nuestra Crema Facial Moisturizer Hidratante Botulina de 283g, una fórmula avanzada diseñada para ofrecerte una piel radiante y revitalizada. La Crema Facial Moisturizer Hidratante Botulina está formulada con un complejo de péptidos que imita los efectos del botox, ayudando a…",
    incluye: ["1 Crema Facial Moisturizer Hidratante"]
  },
  {
    slug: "crema-rejuvenecedora-botox-nevada-283g-7464",
    dropiId: 7464,
    nombre: "Crema Rejuvenecedora Botox - Nevada 283g",
    corto: "Fórmula de fácil absorción penetra directamente la piel para hidratar, reafirmar, atenuar y reducir las arrugas…",
    categoria: "Belleza",
    destacado: false,
    precio: 139,
    precioPack: 259,
    imagenes: [
      CDN + "7464/1752872577Mesadetrabajo1_f78f05c3-791e-4439-989f-de97dadc8e83.webp",
      CDN + "7464/1752872577Mesadetrabajo3_d6e23abb-0815-4c5e-8698-49ec90a86585.webp",
      CDN + "7464/1752872577Mesadetrabajo2_81731526-d741-4611-aee7-5f0505934131.webp"
    ],
    beneficios: [
      "Crema Rejuvenecedora Botox - Nevada 283gr",
      "Rejuvenece la piel de la cara",
      "Protección Uvb",
      "Botox anti- expresión"
    ],
    descripcion: "Fórmula de fácil absorción penetra directamente la piel para hidratar, reafirmar, atenuar y reducir las arrugas causadas por las contracciones musculares diarias. Modo de empleo : Antes de aplicar limpie el rostro y cuello, aplique una fina capa de forma uniforme hasta que la crema sea absorción por la piel.",
    incluye: ["1 Crema Rejuvenecedora Botox - Nevada 283g"]
  },
  {
    slug: "jabon-limpiador-facial-de-limon-nevada-7476",
    dropiId: 7476,
    nombre: "Jabón limpiador Facial de Limón - Nevada",
    corto: "Limpiador facial en gel enriquecido con extracto de árnica y vitamina E, ideal para limpiar profundamente el…",
    categoria: "Belleza",
    destacado: false,
    precio: 129,
    precioPack: 239,
    imagenes: [
      CDN + "7476/1753132862JABON.webp",
      CDN + "7476/1753132862COD677_11.webp"
    ],
    beneficios: [
      "Jabón limpiador Facial Limón - Nevada Natural Products 240ml",
      "limpiador Facial de Limón",
      "Origen: Panamá",
      "Contiene: 240ml c/u"
    ],
    descripcion: "Limpiador facial en gel enriquecido con extracto de árnica y vitamina E, ideal para limpiar profundamente el cutis, a la vez ayuda a calmar la piel sensible y controla la apareciendo del acné. Uso: Aplique sobre el rostro del húmedo una cantidad necesaria de gel limpiador con suaves movimientos circulare, evitando el…",
    incluye: ["1 Jabón limpiador Facial de Limón - Nevada"]
  },
  {
    slug: "jabon-limpiador-facial-de-arnica-7552",
    dropiId: 7552,
    nombre: "Jabón limpiador Facial de Arnica",
    corto: "Limpiador facial en gel enriquecido con extracto de árnica y vitamina E, ideal para limpiar profundamente el…",
    categoria: "Belleza",
    destacado: false,
    precio: 109,
    precioPack: 199,
    imagenes: [
      CDN + "7552/1754065523COD678.webp",
      CDN + "7552/1754065523COD678-10.webp"
    ],
    beneficios: [
      "Limpiador Facial de Arnica - Nevada Natural Products 240 ml",
      "Limpiador Facial de Arnica",
      "Origen: Panama",
      "Contiene: 240ml c/u"
    ],
    descripcion: "Limpiador facial en gel enriquecido con extracto de árnica y vitamina E, ideal para limpiar profundamente el cutis, a la vez ayuda a calmar la piel sensible y controla la apareciendo del acné. Uso: Aplique sobre el rostro del húmedo una cantidad necesaria de gel limpiador con suaves movimientos circularé, evitando el…",
    incluye: ["1 Jabón limpiador Facial de Arnica"]
  },
  {
    slug: "protector-solar-90-fps-7481",
    dropiId: 7481,
    nombre: "Protector Solar 90 FPS",
    corto: "Ayuda a proteger las pieles intolerantes al sol.",
    categoria: "Belleza",
    destacado: false,
    precio: 119,
    precioPack: 219,
    imagenes: [
      CDN + "7481/1753387936sunscreen1000.webp",
      CDN + "7481/1753387936sunscreen5.webp",
      CDN + "7481/1753387936sunscreen2.webp"
    ],
    beneficios: [
      "Protector Solar 90 FPS Nevada Natural Products",
      "Protector solar con 90 fps",
      "Anti-manchas",
      "Amplio aspectro"
    ],
    descripcion: "Ayuda a proteger las pieles intolerantes al sol.",
    incluye: ["1 Protector Solar 90 FPS"]
  },
  {
    slug: "protector-solar-rice-spf50-50-gr-laikou-9069",
    dropiId: 9069,
    nombre: "Protector Solar Rice SPF50 50 gr LAIKOU",
    corto: "El Protector Solar Rice SPF50 50 gr LAIKOU ayuda a proteger la piel frente a la exposición solar diaria…",
    categoria: "Belleza",
    destacado: false,
    precio: 79,
    precioPack: 149,
    imagenes: [CDN + "9069/img_6a32fe23a52133.63553653_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "El Protector Solar Rice SPF50 50 gr LAIKOU ayuda a proteger la piel frente a la exposición solar diaria mientras aporta una agradable sensación de hidratación y suavidad.",
    incluye: ["1 Protector Solar Rice SPF50 50 gr LAIKOU"]
  },
  {
    slug: "protector-solar-milk-spf50-50-gr-laikou-9070",
    dropiId: 9070,
    nombre: "Protector Solar Milk SPF50 50 gr LAIKOU",
    corto: "Protector Solar Milk SPF50 50 gr LAIKOU.",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [CDN + "9070/img_6a32fe2640f176.49732141_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Protector Solar Milk SPF50 50 gr LAIKOU. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Protector Solar Milk SPF50 50 gr LAIKOU"]
  },
  {
    slug: "mascarilla-rosas-para-rostro-7482",
    dropiId: 7482,
    nombre: "Mascarilla Rosas para rostro",
    corto: "Mascarilla facial de rosa para todo tipo de piel.",
    categoria: "Belleza",
    destacado: false,
    precio: 139,
    precioPack: 259,
    imagenes: [
      CDN + "7482/1753388260ROSA3.webp",
      CDN + "7482/1753388260ROSA1.webp",
      CDN + "7482/1753388260ROSA2.webp"
    ],
    beneficios: [
      "Mascarilla Rosas para rostro - Nevada 20 unid",
      "Rejuvenece la piel de la cara",
      "Mascarillas anti- Estrés",
      "Mascarillas de rosas"
    ],
    descripcion: "Mascarilla facial de rosa para todo tipo de piel. Modo de empleo : Limpie la piel con agua tibia, aplique la mascarilla facial y mantenga la cabeza en una posición cómoda.",
    incluye: ["1 Mascarilla Rosas para rostro"]
  },
  {
    slug: "exfoliante-facial-de-bayas-silvestres-7483",
    dropiId: 7483,
    nombre: "Exfoliante Facial de Bayas Silvestres",
    corto: "Renueva los tejidos del rostro, contiene antioxidantes que protegen la piel.",
    categoria: "Belleza",
    destacado: false,
    precio: 119,
    precioPack: 219,
    imagenes: [
      CDN + "7483/1753388438Mesadetrabajo12_e5ba9576-4a8c-4093-a5d3-bb855128665b.webp",
      CDN + "7483/1753388438Mesadetrabajo13_7bd48788-4c3c-474d-980e-30201ae33c8f.webp",
      CDN + "7483/1753388438COD513-08.webp"
    ],
    beneficios: [
      "Exfoliante Facial de Bayas Silvestres 200ml",
      "Humectante facial",
      "Enriquecido con bayas silvestres",
      "Limpia y purifica"
    ],
    descripcion: "Renueva los tejidos del rostro, contiene antioxidantes que protegen la piel. Uso: Humedezca el rostro con agua, Frote la frente, mejillas y cuello con el exfoliante de manera circular sin hacer presión, enjuague con agua al clima o fría.",
    incluye: ["1 Exfoliante Facial de Bayas Silvestres"]
  },
  {
    slug: "exfoliante-facial-frutos-del-bosque-283g-7535",
    dropiId: 7535,
    nombre: "Exfoliante facial frutos del bosque 283g",
    corto: "Exfoliante facial ideado para renovar los tejidos del cutis, su novedosa formula actúa como antioxidante…",
    categoria: "Belleza",
    destacado: false,
    precio: 119,
    precioPack: 219,
    imagenes: [
      CDN + "7535/1753979278REALPLAZA-2_d48c6995-e98d-4282-9d7d-6a88b09cdd55.webp",
      CDN + "7535/1753979278PORTADA_2_de603886-15a9-4412-a5b0-91d8aec4cd7a.webp",
      CDN + "7535/1753979279MODO_DE_USO_SUMAK_9fce282c-91f4-4967-9bbc-4d2be5f77e10.webp"
    ],
    beneficios: [
      "Exfoliante facial frutos del bosque 283g - Nevada",
      "Renueva el cutis",
      "Protección radical",
      "Retira células muertas e impurezas"
    ],
    descripcion: "Exfoliante facial ideado para renovar los tejidos del cutis, su novedosa formula actúa como antioxidante protegiendo así el cutis de los radicales libres, retira las células muertas, impurezas y estimula la circulación s Modo de uso : Humedezca el rostro con agua.",
    incluye: ["1 Exfoliante facial frutos del bosque 283g"]
  },
  {
    slug: "exfoliante-facial-de-albaricoque-200ml-7555",
    dropiId: 7555,
    nombre: "Exfoliante Facial de Albaricoque 200ml",
    corto: "Retira las células muertas, impurezas y estimula la circulación sanguínea.",
    categoria: "Belleza",
    destacado: false,
    precio: 119,
    precioPack: 219,
    imagenes: [
      CDN + "7555/1754065864Mesadetrabajo6_ef617f90-8b8e-432c-9495-cee901c5b97b.webp",
      CDN + "7555/1754065864Mesadetrabajo7_e0cbc234-4759-4179-9771-9228318af72e.webp",
      CDN + "7555/1754065865Mesadetrabajo11_e4a1f622-8944-4cc0-9512-e9368f31f662.webp"
    ],
    beneficios: [
      "Humectante facial",
      "Enriquecido con bayas silvestres",
      "Limpia y purifica",
      "Exfoliante Facial de Albaricoque"
    ],
    descripcion: "Retira las células muertas, impurezas y estimula la circulación sanguínea. Uso: Humedezca el rostro con agua, Frote la frente, mejillas y cuello con el exfoliante de manera circular sin hacer presión, enjuague con agua al clima o fría.",
    incluye: ["1 Exfoliante Facial de Albaricoque 200ml"]
  },
  {
    slug: "gel-antibacterial-de-manos-1lt-nevada-7488",
    dropiId: 7488,
    nombre: "Gel Antibacterial de Manos 1LT Nevada",
    corto: "Gel Antibacterial de Manos 1LT Nevada.",
    categoria: "Belleza",
    destacado: false,
    precio: 129,
    precioPack: 239,
    imagenes: [CDN + "7488/1753398789NEV31-3_f90c1c3c-cf69-409a-b658-67161dd6b394.webp"],
    beneficios: [
      "Gel Antibacterial de Manos 1L Nevada",
      "Hidratación: Enriquecido con Aloe Vera, ayuda a mantener la piel hidratada y suave",
      "Uso sin agua: Ideal para momentos en los que no se dispone de agua y jabón",
      "Aplicar una cantidad adecuada del gel sobre las manos"
    ],
    descripcion: "Gel Antibacterial de Manos 1LT Nevada. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Gel Antibacterial de Manos 1LT Nevada"]
  },
  {
    slug: "acondicionador-romero-crecepelo-320ml-7508",
    dropiId: 7508,
    nombre: "Acondicionador Romero Crecepelo 320ml",
    corto: "El Acondicionador Romero Crecepelo de Nevada es un tratamiento capilar diseñado para estimular el crecimiento…",
    categoria: "Belleza",
    destacado: false,
    precio: 89,
    precioPack: 169,
    imagenes: [CDN + "7508/1753895704COD1345_f52ee510-702f-4787-9bcb-585a2353b2f1.webp"],
    beneficios: [
      "Acondicionador Romero Crecepelo 320mlNevada",
      "Estimula el crecimiento: Formulado para ayudar a estimular el crecimiento natural del",
      "Fortalece y nutre: Su fórmula fortalece la fibra capilar, evitando la rotura y caída",
      "Textura ligera: No deja residuos ni sensación grasosa, ideal para uso diario"
    ],
    descripcion: "El Acondicionador Romero Crecepelo de Nevada es un tratamiento capilar diseñado para estimular el crecimiento del cabello y fortalecerlo desde la raíz hasta las puntas. Natural y refrescante: Con extracto de romero, conocido por sus beneficios revitalizantes.",
    incluye: ["1 Acondicionador Romero Crecepelo 320ml"]
  },
  {
    slug: "shampoo-ginseng-nevada-420ml-7517",
    dropiId: 7517,
    nombre: "Shampoo Ginseng - Nevada 420Ml",
    corto: "Mojar el cabello y aplicar una cantidad adecuada de champú, masajear suavemente, a continuación, enjuagar con…",
    categoria: "Belleza",
    destacado: false,
    precio: 109,
    precioPack: 199,
    imagenes: [
      CDN + "7517/1753918423ProductoFondoBlanco_1_031c381b-909c-4a99-ab20-faa9a289c263.webp",
      CDN + "7517/1753918425Portada_e441daaf-56b6-4d02-83d1-c6fa435b081a.webp",
      CDN + "7517/1753918430Mododeuso_d88e5936-3794-4cbd-b427-59d4a27566f2.webp"
    ],
    beneficios: [
      "Previene la pérdida excesiva de cabello, promueve el crecimiento y retrasa las canas",
      "Ingredientes",
      "Precauciones",
      "· Producto: Shampoo Ginseng"
    ],
    descripcion: "Mojar el cabello y aplicar una cantidad adecuada de champú, masajear suavemente, a continuación, enjuagar con abundante agua.",
    incluye: ["1 Shampoo Ginseng - Nevada 420Ml"]
  },
  {
    slug: "facial-extracto-de-pepino-y-acido-hialu-7519",
    dropiId: 7519,
    nombre: "facial extracto de pepino y ácido hialu",
    corto: "Velo facial enriquecido con extracto de pepino y ácido hialurónico.",
    categoria: "Belleza",
    destacado: false,
    precio: 119,
    precioPack: 219,
    imagenes: [
      CDN + "7519/17539199941005_1_b10807d5-6936-43c5-a911-e1ad9dab3b2f.webp",
      CDN + "7519/17539199941005_2_5cd22475-3167-4363-8134-70a444406b73.webp",
      CDN + "7519/17539199941005_14_b53327b9-1876-460d-8168-eb3e9555f4f4.webp"
    ],
    beneficios: [
      "Velo facial extracto de pepino y ácido hialurónico 10und - Nevada",
      "Hidratante aclarante",
      "Contiene acidó hialurónico",
      "Hidrata y aporta elasticidad"
    ],
    descripcion: "Velo facial enriquecido con extracto de pepino y ácido hialurónico. Modo de uso : Limpie el Rostro con agua, aplique la mascarilla facial en una posición cómoda, deje actuar de 15 a 20 minutos y luego retire.",
    incluye: ["1 facial extracto de pepino y ácido hialu"]
  },
  {
    slug: "facial-extracto-de-fresa-y-acido-hialu-7521",
    dropiId: 7521,
    nombre: "facial extracto de fresa y ácido hialu",
    corto: "Velo facial enriquecido con extracto de fresa y ácido hialurónico.",
    categoria: "Belleza",
    destacado: false,
    precio: 119,
    precioPack: 219,
    imagenes: [
      CDN + "7521/1753973603COD1002.webp",
      CDN + "7521/17539736031002_4_4421ca84-7c01-47c6-a1db-984048875349.webp",
      CDN + "7521/17539736031002_5_8deefef5-bcee-43de-93ed-c3c21f6b75ee.webp"
    ],
    beneficios: [
      "Velo facial extracto de fresa y ácido hialurónico 10und - Nevada",
      "Anti-edad tonificante",
      "Contiene acidó hialurónico",
      "Hidrata y aporta elasticidad"
    ],
    descripcion: "Velo facial enriquecido con extracto de fresa y ácido hialurónico. Modo de uso : Limpie el Rostro con agua, aplique la mascarilla facial en una posición cómoda, deje actuar de 15 a 20 minutos y luego retire.",
    incluye: ["1 facial extracto de fresa y ácido hialu"]
  },
  {
    slug: "talco-perfumado-para-el-cuerpo-de-rosas-7523",
    dropiId: 7523,
    nombre: "Talco perfumado para el cuerpo de Rosas",
    corto: "Modo de uso : Aplique sobre la piel seca y sin humedad, tomar la esponja y colocar levemente sobre el talco…",
    categoria: "Belleza",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [
      CDN + "7523/1753974003MODO_DE_USO_SUMAK_eba41021-603e-4756-b7b5-125cb59cabd0.webp",
      CDN + "7523/1753974003REALPLAZA-2_c8354c2a-c356-4406-a154-9025878ffee7.webp",
      CDN + "7523/1753974016PORTADA_2_c4982f01-d05c-4d66-9266-706702b1bce2.webp"
    ],
    beneficios: [
      "Talco perfumado para el cuerpo 142g- Nevada",
      "Talco corporal con esponja, elegante Francia a rosas",
      "Controla el exceso de sudoración",
      "Brinda un agradable aroma"
    ],
    descripcion: "Modo de uso : Aplique sobre la piel seca y sin humedad, tomar la esponja y colocar levemente sobre el talco, aplicar sobre el cuerpo. Ingredientes Principales: Talc.",
    incluye: ["1 Talco perfumado para el cuerpo de Rosas"]
  },
  {
    slug: "shampoo-extracto-de-menta-1-2lt-7524",
    dropiId: 7524,
    nombre: "Shampoo extracto de menta 1.2lt",
    corto: "Shampoo refrescante enriquecido con extracto de menta.",
    categoria: "Belleza",
    destacado: false,
    precio: 119,
    precioPack: 219,
    imagenes: [
      CDN + "7524/1753974339REALPLAZA-2_4c01ce6a-b5b4-4758-8fc4-59fb7e0a9ee0.webp",
      CDN + "7524/1753974339PORTADA_2_5262c6df-4db0-477a-8e73-cfea85ae5b46.webp",
      CDN + "7524/1753974339MODO_DE_USO_SUMAK_365b45d8-610d-472a-869f-7589a2d803ee.webp"
    ],
    beneficios: [
      "Shampoo extracto de menta 1.2lt - Nevada",
      "Controla el exceso de grasa",
      "Combate la caspa",
      "Calma la comezón e irritación"
    ],
    descripcion: "Shampoo refrescante enriquecido con extracto de menta. Modo de uso : Aplique la cantidad necesaria de shampoo sobre el cabello húmedo.",
    incluye: ["1 Shampoo extracto de menta 1.2lt"]
  },
  {
    slug: "sal-de-bano-de-lavanda-400ml-7525",
    dropiId: 7525,
    nombre: "Sal de baño de lavanda 400ml",
    corto: "Exfoliante corporal enriquecido con extractos de lavanda, contiene propiedades antisépticas y suavizantes que…",
    categoria: "Belleza",
    destacado: false,
    precio: 109,
    precioPack: 199,
    imagenes: [
      CDN + "7525/1753974568REALPLAZA-2_ae618052-4244-455c-beeb-c1805779b74f.webp",
      CDN + "7525/1753974569MODO_DE_USO_SUMAK_6212ff51-cdce-457b-88b9-df592a53f67b.webp",
      CDN + "7525/1753974568PORTADA_2_2fa5a6c6-a705-4d6c-90fd-4d9b62dc88ec.webp"
    ],
    beneficios: [
      "Sal de baño de lavanda 400ml - Nevada",
      "Lavender Bath salt 400ml - Nevada",
      "antiséptico",
      "Efecto suavizante en la piel con sensación de limpieza"
    ],
    descripcion: "Exfoliante corporal enriquecido con extractos de lavanda, contiene propiedades antisépticas y suavizantes que brindaran a tu piel una sensación de limpieza, suavidad y relajación. Modo de uso : Aplicar sobre la piel limpia y húmeda, masajear con suaves movimientos circulares y retirar con abundante agua.",
    incluye: ["1 Sal de baño de lavanda 400ml"]
  },
  {
    slug: "aclarador-facial-aloe-vera-y-yogurt-7527",
    dropiId: 7527,
    nombre: "aclarador facial Aloe vera y Yogurt",
    corto: "Mas carilla facial con extracto de aloe vera y yogurt que limpia, humecta, alisa y suaviza el rostro…",
    categoria: "Belleza",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [
      CDN + "7527/1753975185REALPLAZA-2_b6e3d97c-4344-4d1b-be6f-c690a12f5a27.webp",
      CDN + "7527/1753975186MODO_DE_USO_SUMAK_7136b224-f3cb-4470-a6fb-c89ccf571aa8.webp"
    ],
    beneficios: [
      "Mascarilla aclaradora facial 100g - Nevada",
      "Vitamina A y B",
      "Extracto de aloe vera y yogurt",
      "Alisa y suaviza la piel"
    ],
    descripcion: "Mas carilla facial con extracto de aloe vera y yogurt que limpia, humecta, alisa y suaviza el rostro, reponiendo las capas superficiales de la piel. Modo de uso : aplique sobre la piel del rostro, haciendo masajes suaves y circulares, deje actuar de 5 a 10 minutos y retire con abundante agua.",
    incluye: ["1 aclarador facial Aloe vera y Yogurt"]
  },
  {
    slug: "mascarilla-barro-volcanico-y-chocolate-7529",
    dropiId: 7529,
    nombre: "Mascarilla barro volcánico y chocolate",
    corto: "Modo de uso : Aplique sobre la piel seca un poco de mascarilla facial de barro volcanico, y de suaves masajes…",
    categoria: "Belleza",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [
      CDN + "7529/1753976288988_1_8470d6d7-67d1-4b57-b175-2807546f0e94.webp",
      CDN + "7529/1753976288988_11_52ba41fe-d566-4fee-9ef8-1bd1a25a834f.webp",
      CDN + "7529/1753976291988_14_df4dcb18-65b1-4d94-add0-cce95a62e0bd.webp"
    ],
    beneficios: [
      "Mascarilla barro volcánico y chocolate 140g - Nevada",
      "Revitaliza",
      "Regenera",
      "Hidrata"
    ],
    descripcion: "Modo de uso : Aplique sobre la piel seca un poco de mascarilla facial de barro volcanico, y de suaves masajes circulares.",
    incluye: ["1 Mascarilla barro volcánico y chocolate"]
  },
  {
    slug: "limpiador-facial-de-rosas-225ml-7531",
    dropiId: 7531,
    nombre: "Limpiador facial de rosas 225ml",
    corto: "Formula refrescante para limpieza facial.",
    categoria: "Belleza",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [
      CDN + "7531/1753977191COD984_7_214f6662-d9b5-4594-8837-a5b10bbebfa2.webp",
      CDN + "7531/1753977191COD984_1_bf058942-4db2-4aa3-bf2d-0b91f86f92a8.webp",
      CDN + "7531/1753977191COD984_4_13db845f-d777-4fd9-ac84-ad301c26434c.webp"
    ],
    beneficios: [
      "Limpiador facial de rosas 225ml - Nevada",
      "Remueve las impurezas",
      "Hidrata y da elasticidad a la piel",
      "Previene el envejecimiento, manchas y arrugas"
    ],
    descripcion: "Formula refrescante para limpieza facial. Modo de uso : humedezca una toalla o mota de algodón con un poco de limpiador facial, esparza sobre el rostro y cuello con movimientos suaves, no enjuagar.",
    incluye: ["1 Limpiador facial de rosas 225ml"]
  },
  {
    slug: "limpiador-facial-colageno-180ml-7558",
    dropiId: 7558,
    nombre: "Limpiador Facial Colageno 180ml",
    corto: "Tónico facial hidratante.",
    categoria: "Belleza",
    destacado: false,
    precio: 109,
    precioPack: 199,
    imagenes: [
      CDN + "7558/1754066195COD510_Mesadetrabajo1copia6.webp",
      CDN + "7558/1754066195Mesadetrabajo7_900b6637-1d22-44c9-9cdc-3ed25f987815.webp",
      CDN + "7558/1754066195Mesadetrabajo6_df300525-a30f-4324-835c-a4e4b4e5c78b.webp"
    ],
    beneficios: [
      "Limpiador Facial Colágeno 180ml",
      "Limpia y purifica",
      "Hidrata y suaviza",
      "Nutre y revitaliza"
    ],
    descripcion: "Tónico facial hidratante. Uso: Humedezca un paño limpio con el tónico y esparza sobre el rostro, cuello y escote.",
    incluye: ["1 Limpiador Facial Colageno 180ml"]
  },
  {
    slug: "limpiador-facial-en-espuma-celulas-madre-7569",
    dropiId: 7569,
    nombre: "Limpiador Facial en Espuma Celulas Madre",
    corto: "Limpiador facial en espuma para pieles secas o desvitalizadas.",
    categoria: "Belleza",
    destacado: false,
    precio: 119,
    precioPack: 219,
    imagenes: [
      CDN + "7569/1754067446fotos1_1.webp",
      CDN + "7569/1754067446Mesadetrabajo13.webp",
      CDN + "7569/1754067446Mesadetrabajo14.webp"
    ],
    beneficios: [
      "Limpiador Facial en Espuma de Células Madres 50ml",
      "Limpia y purifica",
      "Efecto anti-edad",
      "Piel radiante"
    ],
    descripcion: "Limpiador facial en espuma para pieles secas o desvitalizadas. Uso: Aplique la cantidad necesaria del producto con la yema de los dedos uniformemente en el rostro y deje actuar por 10-15 minutos.",
    incluye: ["1 Limpiador Facial en Espuma Celulas Madre"]
  },
  {
    slug: "spray-para-limpieza-lubrica-y-desinfecta-7537",
    dropiId: 7537,
    nombre: "Spray para limpieza lubrica y desinfecta",
    corto: "Desinfecta y lubrica maquinas, cuchillas y utensilios de peluquería, para usarlas con seguridad.",
    categoria: "Belleza",
    destacado: false,
    precio: 109,
    precioPack: 199,
    imagenes: [
      CDN + "7537/1754063920MODODEUSOSUMAK_65b4cba6-8078-4b59-985d-e587c670dc67.webp",
      CDN + "7537/1754063920PORTADA2_841a77b9-5287-4379-8cb4-3a0dbf36b32b.webp",
      CDN + "7537/1754063919REALPLAZA-2_07ddfdfb-7370-4a47-8b89-a466a918b969.webp"
    ],
    beneficios: [
      "Barber Tools Lubricante & Desinfectante en Spray 2 en 1 - Nevada Barber Shop",
      "Spray para limpieza lubrica y desinfecta – Barber Tools",
      "Alto Rendimiento",
      "Propane/N- Butane/Isobutane, sorbitan monooleate, o-phenyl. Phenol, mineral oil,"
    ],
    descripcion: "Desinfecta y lubrica maquinas, cuchillas y utensilios de peluquería, para usarlas con seguridad. Modo de uso: Retirar cualquier residuo con la ayuda de un pañito antes de aplicar el producto.",
    incluye: ["1 Spray para limpieza lubrica y desinfecta"]
  },
  {
    slug: "mascarilla-negra-hidroplastica-de-pepino-7538",
    dropiId: 7538,
    nombre: "Mascarilla Negra Hidroplástica de Pepino",
    corto: "Mascarilla hidroplástica negra.",
    categoria: "Belleza",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [
      CDN + "7538/1754064021REALPLAZA-2_817b7abb-5f95-4ef0-af91-ab9b8effbcab.webp",
      CDN + "7538/1754064022MODO_DE_USO_SUMAK_5c41ca71-a68f-4426-8128-89b28408d5b0.webp",
      CDN + "7538/1754064022PORTADA_2_e7af2e35-add2-4aea-87f7-e0f6ae7df6c5.webp"
    ],
    beneficios: [
      "NEVADA NATURAL PRODUCTS – BLACK MASK WHITENING PEPINO",
      "Mascarilla Negra Hidroplastica de Pepino 120gr",
      "Ideal para pieles secas",
      "Remueve Barros y espinillas"
    ],
    descripcion: "Mascarilla hidroplástica negra. Modo de uso : De forma uniforme distribuya una fina capa de la mascarilla negra sobre el rostro y cuello, deje actuar de 12 a 18 minutos, al secarse levante de abajo hacia arriba.",
    incluye: ["1 Mascarilla Negra Hidroplástica de Pepino"]
  },
  {
    slug: "mascarilla-hidroplastica-de-barro-marino-7539",
    dropiId: 7539,
    nombre: "Mascarilla Hidroplástica de Barro marino",
    corto: "Mascarilla hidroplástica negra.",
    categoria: "Belleza",
    destacado: false,
    precio: 109,
    precioPack: 199,
    imagenes: [
      CDN + "7539/1754064145REALPLAZA-2_18fcf857-bb97-490c-99d7-002575086491.webp",
      CDN + "7539/1754064145PORTADA_2_4ccc5bc9-651e-44e4-9cde-5df04c5b75dc.webp",
      CDN + "7539/1754064145MODO_DE_USO_SUMAK_178bd49b-2044-42f7-a8d7-f44abe9e1ab9.webp"
    ],
    beneficios: [
      "NEVADA NATURAL PRODUCTS – BLACK MASK WHITENING BARRO MARINO",
      "Ideal para pieles grasas",
      "Remueve Barros y espinillas",
      "Nutre y regenera"
    ],
    descripcion: "Mascarilla hidroplástica negra. Modo de uso : De forma uniforme distribuya una fina capa de la mascarilla negra sobre el rostro y cuello, deje actuar de 12 a 18 minutos, al secarse levante de abajo hacia arriba.",
    incluye: ["1 Mascarilla Hidroplástica de Barro marino"]
  },
  {
    slug: "polvo-corporal-despues-de-la-ducha-rosas-7540",
    dropiId: 7540,
    nombre: "Polvo corporal después de la ducha Rosas",
    corto: "Modo de uso: Aplique la cantidad necesaria sobre el área deseada y esparza suavemente.",
    categoria: "Belleza",
    destacado: false,
    precio: 89,
    precioPack: 169,
    imagenes: [
      CDN + "7540/1754064266COD882_1REALPLAZA_PEDIDOSYA-13.webp",
      CDN + "7540/1754064266COD882_MODODEUSOSUMAK.webp"
    ],
    beneficios: [
      "Polvo corporal después de la ducha Rosas- NNP x369gr",
      "Contenido del paquete 369gr / 13 oz",
      "Cantidad: 369gr",
      "Uso: Corporal/Externo"
    ],
    descripcion: "Modo de uso: Aplique la cantidad necesaria sobre el área deseada y esparza suavemente. Advertencia : Mantenga fuera del alcance de los niños.",
    incluye: ["1 Polvo corporal después de la ducha Rosas"]
  },
  {
    slug: "spray-abrillantador-paracabello-de-oliva-7549",
    dropiId: 7549,
    nombre: "Spray Abrillantador paraCabello de Oliva",
    corto: "Spray abrillantador para el cabello elaborado con extracto de oliva que ayuda a dar brillo y suavidad al…",
    categoria: "Belleza",
    destacado: false,
    precio: 119,
    precioPack: 219,
    imagenes: [
      CDN + "7549/17540652037d9bff_aeda9af5a268422fa9693c1a6cba4ecc_mv2.webp",
      CDN + "7549/1754065203COD733_Mesadetrabajo1copia6.webp",
      CDN + "7549/1754065203COD733-16.webp"
    ],
    beneficios: [
      "Spary Abrillantador para el cabello de oliva – NNP 450ml",
      "Ayuda a reducir el frizz",
      "Proporciona brillo y suavidad al cabello",
      "Controla el frizz"
    ],
    descripcion: "Spray abrillantador para el cabello elaborado con extracto de oliva que ayuda a dar brillo y suavidad al cabello sin dejar una sensación grasosa. Pulverizar el spray sobre el cabello húmedo o seco, enfocándose en las puntas y evitando el cuero cabelludo.",
    incluye: ["1 Spray Abrillantador paraCabello de Oliva"]
  },
  {
    slug: "spray-fijador-capilar-anti-frizz-7550",
    dropiId: 7550,
    nombre: "Spray Fijador Capilar Anti-Frizz",
    corto: "El spray fijador capilar Anti-frizz de Nevada Natural Products es ideal para mantener tu peinado en su lugar…",
    categoria: "Belleza",
    destacado: false,
    precio: 109,
    precioPack: 199,
    imagenes: [
      CDN + "7550/1754065310COD732_Mesadetrabajo1copia6.webp",
      CDN + "7550/1754065310COD732-16.webp",
      CDN + "7550/1754065310COD732-08.webp"
    ],
    beneficios: [
      "Spray Hair Spray Fijador capilar – NNP 600ml",
      "Fijación fuerte y duradera",
      "Controla el frizz",
      "Mantiene el cabello suave y manejable"
    ],
    descripcion: "El spray fijador capilar Anti-frizz de Nevada Natural Products es ideal para mantener tu peinado en su lugar durante todo el día. Pulverizar uniformemente sobre el cabello seco o ligeramente húmedo.",
    incluye: ["1 Spray Fijador Capilar Anti-Frizz"]
  },
  {
    slug: "desmaquillador-de-celulas-madres-7551",
    dropiId: 7551,
    nombre: "Desmaquillador de Células Madres",
    corto: "Desmaquillante fácil que limpia profundamente la piel.",
    categoria: "Belleza",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [
      CDN + "7551/1754065410COD679-copia.webp",
      CDN + "7551/1754065410COD679-0.webp",
      CDN + "7551/1754065410COD688-12.webp"
    ],
    beneficios: [
      "Desmaquillador de Células Madres - Nevada Natural Products 150ml",
      "Desmaquillador de Células Madres",
      "Origen: Panamá",
      "Contiene: 150ml c/u"
    ],
    descripcion: "Desmaquillante fácil que limpia profundamente la piel. Uso: Agítese bien antes de usar.",
    incluye: ["1 Desmaquillador de Células Madres"]
  },
  {
    slug: "suero-facial-de-colageno-7553",
    dropiId: 7553,
    nombre: "Suero facial de Colágeno",
    corto: "Suero facial concentrado, su textura ligera actúa de forma inmediata en las capas más profundas del cutis, sus…",
    categoria: "Belleza",
    destacado: false,
    precio: 119,
    precioPack: 219,
    imagenes: [
      CDN + "7553/17540656367d9bff_1ad8a8015f5447b9ac3f11586bdc7fe2_mv2.webp",
      CDN + "7553/1754065636CollagenoSerum03.webp",
      CDN + "7553/1754065636CollagenoSerum02.webp"
    ],
    beneficios: [
      "Atenúa las líneas de expresión",
      "Brinda firmeza y elasticidad",
      "Hidrata y suaviza",
      "Suero facial de Colágeno"
    ],
    descripcion: "Suero facial concentrado, su textura ligera actúa de forma inmediata en las capas más profundas del cutis, sus principios activos actúan eficazmente para evitar la flacidez. Uso: Aplique después de la limpieza facial, esparza sobre el rostro, cuello y escote.",
    incluye: ["1 Suero facial de Colágeno"]
  },
  {
    slug: "serum-celulas-madres-nnp-30ml-7554",
    dropiId: 7554,
    nombre: "Serum Células Madres - NNP 30ml",
    corto: "Suero facial rejuvenecedor elaborado con células madres de origen vegetal, mejora el cutis favoreciendo la…",
    categoria: "Belleza",
    destacado: false,
    precio: 119,
    precioPack: 219,
    imagenes: [
      CDN + "7554/17540657594302.webp",
      CDN + "7554/1754065759steamserumcelulasmadrescopia.webp",
      CDN + "7554/1754065759steamserumcelulasmadres.webp"
    ],
    beneficios: [
      "Serum Células Madres",
      "Piel radiante",
      "Efecto anti edad",
      "Disminuye las líneas de expresión"
    ],
    descripcion: "Suero facial rejuvenecedor elaborado con células madres de origen vegetal, mejora el cutis favoreciendo la producción de colágeno natural de la piel. Uso: Con el gotero aplique sobre el rostro cantidad necesaria del producto y con la yema de los dedos esparza uniformemente con masajes ligeros y circulares.",
    incluye: ["1 Serum Células Madres - NNP 30ml"]
  },
  {
    slug: "tonico-limpiador-facial-de-celulas-madre-7556",
    dropiId: 7556,
    nombre: "Tónico Limpiador Facial de Células Madre",
    corto: "Uso: Humedezca una toallita facial o algodón y esparza sobre la piel del rostro, cuello y escote.",
    categoria: "Belleza",
    destacado: false,
    precio: 109,
    precioPack: 199,
    imagenes: [
      CDN + "7556/1754065967COD512_Mesadetrabajo1copia6.webp",
      CDN + "7556/1754065967Mesadetrabajo17_06f64728-1d44-4d04-bb1e-657317d3cd4c.webp",
      CDN + "7556/1754065968Mesadetrabajo18_9c8ab9f7-c04f-4d7c-929c-e4b0c01fb6d8.webp"
    ],
    beneficios: [
      "Tónico Limpiador Facial de Células Madres 180ml",
      "Piel radiante",
      "Efecto anti edad",
      "Limpia y purifica"
    ],
    descripcion: "Uso: Humedezca una toallita facial o algodón y esparza sobre la piel del rostro, cuello y escote.",
    incluye: ["1 Tónico Limpiador Facial de Células Madre"]
  },
  {
    slug: "mascarilla-hidroplastica-de-colageno-7566",
    dropiId: 7566,
    nombre: "Mascarilla Hidroplastica de Colageno",
    corto: "Uso: De forma uniforme distribuya una fina capa de la mascarilla dorada sobre el rostro y cielo, déjala actuar…",
    categoria: "Belleza",
    destacado: false,
    precio: 109,
    precioPack: 199,
    imagenes: [
      CDN + "7566/1754066948COD499_Mesadetrabajo1-copia.webp",
      CDN + "7566/1754066948Mesadetrabajo8.webp",
      CDN + "7566/1754066948Mesadetrabajo7.webp"
    ],
    beneficios: [
      "Mascarilla Hidroplastica de Colágeno Nevada Products 120g",
      "Atenúa las líneas de expresión",
      "Reduce el cutis graso",
      "Evita los puntos negros"
    ],
    descripcion: "Uso: De forma uniforme distribuya una fina capa de la mascarilla dorada sobre el rostro y cielo, déjala actuar de 12 a 18 minutos. Sus propiedades atenúan líneas de expresión, reafirmara la piel flácida, revitaliza y aporta sedosidad a la piel dándole un aspecto rejuvenecido.",
    incluye: ["1 Mascarilla Hidroplastica de Colageno"]
  },
  {
    slug: "gel-anti-arrugas-y-ojeras-celulas-madre-7571",
    dropiId: 7571,
    nombre: "Gel anti-arrugas y ojeras células madre",
    corto: "Agregar a tu rutina de cuidado facial un contorno de ojos es esencial para proteger la delicada piel alrededor…",
    categoria: "Belleza",
    destacado: false,
    precio: 119,
    precioPack: 219,
    imagenes: [
      CDN + "7571/1754067656Mesadetrabajo2_18.webp",
      CDN + "7571/1754067656contorno1.webp",
      CDN + "7571/1754067656MODELO-10_a4fc1d93-b9bd-4816-84bf-175fa55adbb8.webp"
    ],
    beneficios: [
      "GEL ANTI ARRUGAS Y OJERAS DE CELULAS MADRES 15 ML",
      "Gel anti arrugas y ojeras de células madres",
      "Contenido: 15 ml c/u",
      "Gel contorno de ojos células madres Nevada"
    ],
    descripcion: "Agregar a tu rutina de cuidado facial un contorno de ojos es esencial para proteger la delicada piel alrededor de tus ojos. Beneficios: Gel intensivo para contorno de ojos a base de células madres de origen vegetal, Ayuda a reducir bolsas a bajo del contorno de ojos, Mejora la lozania y elasticidad de la piel, Suaviza…",
    incluye: ["1 Gel anti-arrugas y ojeras células madre"]
  },
  {
    slug: "keraphlex-fortalecedor-reconstructor-7614",
    dropiId: 7614,
    nombre: "Keraphlex Fortalecedor reconstructor",
    corto: "Keraphlex de La Brasiliana es un fortalecedor capilar profesional diseñado para proteger el cabello durante…",
    categoria: "Belleza",
    destacado: false,
    precio: 139,
    precioPack: 259,
    imagenes: [
      CDN + "7614/1755037693modifcado_14ab0202-f841-4f77-9a29-615dd6b62e7a.webp",
      CDN + "7614/1755037693COD822__4Piezas_-13.webp",
      CDN + "7614/1755037693COD822-00.webp"
    ],
    beneficios: [
      "Reconstruye y sella los puentes dañados ",
      "Previene daños causados por tintes o decolorantes ",
      "Repara profundamente la fibra capilar dañada",
      "No altera el tono del cabello en decoloraciones"
    ],
    descripcion: "Keraphlex de La Brasiliana es un fortalecedor capilar profesional diseñado para proteger el cabello durante procesos químicos agresivos como decoloración y coloración. Ideal para salones, estilistas y coloristas que desean obtener un cabello más fuerte, brillante y flexible , sin alterar el tono durante el…",
    incluye: ["1 Keraphlex Fortalecedor reconstructor"]
  },
  {
    slug: "la-brasiliana-concentrado-capilar-7617",
    dropiId: 7617,
    nombre: "La Brasiliana Concentrado Capilar",
    corto: "El Concentrado Capilar Complejo Keratínico de La Brasiliana está formulado para reconstruir profundamente la…",
    categoria: "Belleza",
    destacado: false,
    precio: 89,
    precioPack: 169,
    imagenes: [
      CDN + "7617/1755045440modifcado_608959fb-d604-482b-af97-105372759915.webp",
      CDN + "7617/1755045440keratine_1.webp",
      CDN + "7617/1755045440keratine_2.webp"
    ],
    beneficios: [
      "La Brasiliana Concentrado Capilar Complejo – Reparación Keratínica Profunda 30g",
      "Repara el daño capilar profundo",
      "Aporta nutrición intensiva desde la raíz",
      "Fortalece y regenera el cabello maltratado"
    ],
    descripcion: "El Concentrado Capilar Complejo Keratínico de La Brasiliana está formulado para reconstruir profundamente la fibra capilar y devolverle vitalidad, fuerza y elasticidad al cabello. Su textura concentrada penetra en la hebra capilar, mejorando la resistencia del cabello desde la raíz hasta las puntas.",
    incluye: ["1 La Brasiliana Concentrado Capilar"]
  },
  {
    slug: "madagas-centell-light-cleansing-oil-30ml-7848",
    dropiId: 7848,
    nombre: "Madagas Centell Light Cleansing Oil 30ml",
    corto: "Madagas Centell Light Cleansing Oil 30ml.",
    categoria: "Belleza",
    destacado: false,
    precio: 119,
    precioPack: 219,
    imagenes: [
      CDN + "7848/1761068570KR115x1.jpg",
      CDN + "7848/1761068571KR115_2_2.jpg",
      CDN + "7848/1761068571KR115_4.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Madagas Centell Light Cleansing Oil 30ml. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Madagas Centell Light Cleansing Oil 30ml"]
  },
  {
    slug: "madagascar-centella-toning-toner-30ml-7849",
    dropiId: 7849,
    nombre: "Madagascar Centella Toning Toner 30ml",
    corto: "El Skin1004 Madagascar Centella Toning Toner 30ml es un tónico facial coreano formulado con un 84% de extracto…",
    categoria: "Belleza",
    destacado: false,
    precio: 119,
    precioPack: 219,
    imagenes: [
      CDN + "7849/1761068694KR168_2.jpg",
      CDN + "7849/1761068694KR168_4.jpg",
      CDN + "7849/1761068694KR168_3.jpg"
    ],
    beneficios: [
      "Madagascar Centella Toning Toner 30ml Skin1004",
      "Distribuye suavemente sobre el rostro, evitando el área de los ojos",
      "Da golpecitos suaves con las yemas de los dedos para facilitar la absorción",
      "Importacionessumak"
    ],
    descripcion: "El Skin1004 Madagascar Centella Toning Toner 30ml es un tónico facial coreano formulado con un 84% de extracto de centella asiática de Madagascar, diseñado para calmar, hidratar y exfoliar suavemente la piel. Calma y repara: La centella asiática reduce rojeces, estimula la producción de colágeno y ayuda a sanar la…",
    incluye: ["1 Madagascar Centella Toning Toner 30ml"]
  },
  {
    slug: "madaga-tone-brightening-capsule-amp-30ml-7850",
    dropiId: 7850,
    nombre: "Madaga Tone Brightening Capsule Amp 30ML",
    corto: "Este suero iluminador de SKIN1004 está formulado con centella asiática de Madagascar y cápsulas…",
    categoria: "Belleza",
    destacado: false,
    precio: 139,
    precioPack: 259,
    imagenes: [
      CDN + "7850/1761068944KR162x1.jpg",
      CDN + "7850/1761068944KR162_3_2.jpg",
      CDN + "7850/1761068944KR162_4.jpg"
    ],
    beneficios: [
      "Madagascar Centella Tone Brightening Capsule Ampoule 30ml SKIN1004",
      "Importacionessumak",
      "Ilumina y unifica el tono de la piel",
      "Calma e hidrata gracias a la centella asiática"
    ],
    descripcion: "Este suero iluminador de SKIN1004 está formulado con centella asiática de Madagascar y cápsulas microblanqueadoras que ayudan a mejorar visiblemente el tono apagado y desigual del rostro. Aplicar una cantidad adecuada sobre el rostro limpio, después del tónico.",
    incluye: ["1 Madaga Tone Brightening Capsule Amp 30ML"]
  },
  {
    slug: "madagas-poremizing-quick-stick-mask-27gr-7852",
    dropiId: 7852,
    nombre: "Madagas Poremizing Quick Stick Mask 27GR",
    corto: "La Madagascar Centella Poremizing Clay Stick Mask de SKIN1004 es una mascarilla en barra de arcilla suave que…",
    categoria: "Belleza",
    destacado: false,
    precio: 169,
    precioPack: 309,
    imagenes: [
      CDN + "7852/1761069386KR130_3_2.jpg",
      CDN + "7852/1761069386KR130x1.jpg",
      CDN + "7852/1761069386KR130_3.jpg"
    ],
    beneficios: [
      "Deja actuar entre 3 y 5 minutos (no necesita secarse por completo)",
      "Enjuaga con abundante agua tibia y continúa con tu rutina de cuidado facial",
      "Ideal para pieles mixtas, grasas o con poros dilatados"
    ],
    descripcion: "La Madagascar Centella Poremizing Clay Stick Mask de SKIN1004 es una mascarilla en barra de arcilla suave que limpia profundamente los poros , controla el exceso de sebo y mejora la textura de la piel sin resecarla. Su práctico formato en barra permite una aplicación precisa, sin ensuciar las manos , ideal para uso…",
    incluye: ["1 Madagas Poremizing Quick Stick Mask 27GR"]
  },
  {
    slug: "madagascar-tea-trica-relief-ampoule-30ml-7853",
    dropiId: 7853,
    nombre: "Madagascar Tea-Trica Relief Ampoule 30ml",
    corto: "La Madagascar Centella Tea-Trica Relief Ampoule 30ml de SKIN1004 es un sérum intensivo de alivio inmediato…",
    categoria: "Belleza",
    destacado: false,
    precio: 139,
    precioPack: 259,
    imagenes: [
      CDN + "7853/1761069561KR161x1.jpg",
      CDN + "7853/1761069561KR161_3_3.jpg",
      CDN + "7853/1761069561KR161_2_4.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "La Madagascar Centella Tea-Trica Relief Ampoule 30ml de SKIN1004 es un sérum intensivo de alivio inmediato, formulado especialmente para pieles propensas al acné , la irritación y el exceso de sebo . Gracias al ingrediente Anti Sebum P(HD) , ayuda a regular eficazmente la producción de grasa, disminuyendo brotes e…",
    incluye: ["1 Madagascar Tea-Trica Relief Ampoule 30ml"]
  },
  {
    slug: "derma-roller-0-50mm-540-agujas-de-tita-8229",
    dropiId: 8229,
    nombre: "Derma Roller 0.50mm - 540 Agujas De Tita",
    corto: "El Derma Roller 0.50mm con 540 agujas de titanio es ideal para uso doméstico y recomendado por esteticistas…",
    categoria: "Belleza",
    destacado: false,
    precio: 89,
    precioPack: 169,
    imagenes: [
      CDN + "8229/1772898699Dermaroller%20(5).jpg",
      CDN + "8229/1772898700Dermaroller%20(6).jpg",
      CDN + "8229/1772898700Dermaroller%20(3).jpg"
    ],
    beneficios: [
      "Desinfectar el rodillo con alcohol antes y después de cada uso",
      "Aplicar después tu suero o crema para potenciar resultados",
      "Usar máximo 2–3 veces por semana",
      "Estimula la producción de colágeno y elastina"
    ],
    descripcion: "El Derma Roller 0.50mm con 540 agujas de titanio es ideal para uso doméstico y recomendado por esteticistas para el cuidado avanzado de la piel . Incluye estuche acrílico protector , holograma de medida y sellado hermético para mayor seguridad e higiene.",
    incluye: ["1 Derma Roller 0.50mm - 540 Agujas De Tita"]
  },
  {
    slug: "locion-capilar-anticaida-dermosumak-8543",
    dropiId: 8543,
    nombre: "Loción Capilar Anticaída DermoSumak",
    corto: "Tratamiento capilar de acción dual para combatir la alopecia androgenética.",
    categoria: "Belleza",
    destacado: false,
    precio: 219,
    precioPack: 399,
    imagenes: [
      CDN + "8543/1778608341DERM102-03.jpg",
      CDN + "8543/1778608342DERM102-12.jpg",
      CDN + "8543/1778608342DERM102-04.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Tratamiento capilar de acción dual para combatir la alopecia androgenética.",
    incluye: ["1 Loción Capilar Anticaída DermoSumak"]
  },
  {
    slug: "pack-restauracion-400-ml-recamier-8584",
    dropiId: 8584,
    nombre: "Pack Restauración 400 ml - RECAMIER",
    corto: "Pack capilar formulado para ayudar a reparar y nutrir el cabello dañado.",
    categoria: "Belleza",
    destacado: false,
    precio: 119,
    precioPack: 219,
    imagenes: [
      CDN + "8584/img_6a07822a602200.88372271_0.jpg",
      CDN + "8584/17788792702.jpg",
      CDN + "8584/17788792703.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Pack capilar formulado para ayudar a reparar y nutrir el cabello dañado.",
    incluye: ["1 Pack Restauración 400 ml - RECAMIER"]
  },
  {
    slug: "pack-shampoo-men-400-ml-recamier-8585",
    dropiId: 8585,
    nombre: "Pack Shampoo Men 400 ml - RECAMIER",
    corto: "Pack Shampoo Men 400 ml - RECAMIER.",
    categoria: "Belleza",
    destacado: false,
    precio: 119,
    precioPack: 219,
    imagenes: [
      CDN + "8585/17788794065.jpg",
      CDN + "8585/17788794066.jpg",
      CDN + "8585/img_6a07822c47a650.42871614_0.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Pack Shampoo Men 400 ml - RECAMIER. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Pack Shampoo Men 400 ml - RECAMIER"]
  },
  {
    slug: "pack-control-caida-400-ml-recamier-8586",
    dropiId: 8586,
    nombre: "Pack Control Caída 400 ml - RECAMIER",
    corto: "Pack capilar diseñado para ayudar a fortalecer la fibra capilar y reducir la caída del cabello.",
    categoria: "Belleza",
    destacado: false,
    precio: 119,
    precioPack: 219,
    imagenes: [
      CDN + "8586/img_6a07822edee693.16510831_0.jpg",
      CDN + "8586/17788793128.jpg",
      CDN + "8586/17788793129.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Pack capilar diseñado para ayudar a fortalecer la fibra capilar y reducir la caída del cabello.",
    incluye: ["1 Pack Control Caída 400 ml - RECAMIER"]
  },
  {
    slug: "pack-anticaspa-400-ml-recamier-8587",
    dropiId: 8587,
    nombre: "Pack Anticaspa 400 ml - RECAMIER",
    corto: "Pack Anticaspa 400 ml - RECAMIER.",
    categoria: "Belleza",
    destacado: false,
    precio: 119,
    precioPack: 219,
    imagenes: [
      CDN + "8587/img_6a0782308277e3.56815588_0.jpg",
      CDN + "8587/177887933912.jpg",
      CDN + "8587/177887933911.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Pack Anticaspa 400 ml - RECAMIER. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Pack Anticaspa 400 ml - RECAMIER"]
  },
  {
    slug: "pack-rizos-perfectos-400-ml-recamier-8588",
    dropiId: 8588,
    nombre: "Pack Rizos Perfectos 400 ml - RECAMIER",
    corto: "Pack ideal para el cuidado diario del cabello rizado.",
    categoria: "Belleza",
    destacado: false,
    precio: 119,
    precioPack: 219,
    imagenes: [
      CDN + "8588/img_6a078233308941.98824195_0.jpg",
      CDN + "8588/177887945014.jpg",
      CDN + "8588/177887945015.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Pack ideal para el cuidado diario del cabello rizado.",
    incluye: ["1 Pack Rizos Perfectos 400 ml - RECAMIER"]
  },
  {
    slug: "pack-liso-brasilero-400-ml-recamier-8589",
    dropiId: 8589,
    nombre: "Pack Liso Brasilero 400 ml - RECAMIER",
    corto: "Pack Liso Brasilero 400 ml - RECAMIER.",
    categoria: "Belleza",
    destacado: false,
    precio: 119,
    precioPack: 219,
    imagenes: [
      CDN + "8589/177887937717.jpg",
      CDN + "8589/img_6a078235c3d181.12965748_0.jpg",
      CDN + "8589/177887937718.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Pack Liso Brasilero 400 ml - RECAMIER. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Pack Liso Brasilero 400 ml - RECAMIER"]
  },
  {
    slug: "shampoo-argain-oil-350-ml-kareol-8596",
    dropiId: 8596,
    nombre: "Shampoo Argain Oil 350 ml - KAREOL",
    corto: "Shampoo enriquecido con aceite de argán que ayuda a nutrir, hidratar y revitalizar el cabello seco y maltratado.",
    categoria: "Belleza",
    destacado: false,
    precio: 89,
    precioPack: 169,
    imagenes: [CDN + "8596/img_6a078c4a0060c6.07631239_0.png"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Shampoo enriquecido con aceite de argán que ayuda a nutrir, hidratar y revitalizar el cabello seco y maltratado.",
    incluye: ["1 Shampoo Argain Oil 350 ml - KAREOL"]
  },
  {
    slug: "shampoo-vegan-keratin-350-ml-kareol-8597",
    dropiId: 8597,
    nombre: "Shampoo Vegan Keratin 350 ml - KAREOL",
    corto: "Shampoo con keratina vegana diseñado para fortalecer y restaurar el cabello dañado.",
    categoria: "Belleza",
    destacado: false,
    precio: 89,
    precioPack: 169,
    imagenes: [CDN + "8597/img_6a078c4bc81395.70471222_0.png"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Shampoo con keratina vegana diseñado para fortalecer y restaurar el cabello dañado.",
    incluye: ["1 Shampoo Vegan Keratin 350 ml - KAREOL"]
  },
  {
    slug: "shampoo-blue-berry-350-ml-kareol-8599",
    dropiId: 8599,
    nombre: "Shampoo Blue Berry 350 ml - KAREOL",
    corto: "Shampoo con extracto de blueberry que ayuda a revitalizar y proteger el cabello gracias a sus propiedades…",
    categoria: "Belleza",
    destacado: false,
    precio: 89,
    precioPack: 169,
    imagenes: [CDN + "8599/img_6a078c501904d6.28636496_0.png"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Shampoo con extracto de blueberry que ayuda a revitalizar y proteger el cabello gracias a sus propiedades antioxidantes.",
    incluye: ["1 Shampoo Blue Berry 350 ml - KAREOL"]
  },
  {
    slug: "cera-02-sport-150-ml-nishman-8601",
    dropiId: 8601,
    nombre: "Cera 02 Sport 150 ml - NISHMAN",
    corto: "Cera de fijación fuerte y duradera diseñada para mantener el peinado firme por más tiempo.",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [
      CDN + "8601/17789611506.png",
      CDN + "8601/img_6a08c3d4c00b35.12181086_0.png"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Cera de fijación fuerte y duradera diseñada para mantener el peinado firme por más tiempo.",
    incluye: ["1 Cera 02 Sport 150 ml - NISHMAN"]
  },
  {
    slug: "cera-05-keratin-150-ml-nishman-8604",
    dropiId: 8604,
    nombre: "Cera 05 Keratin 150 ml - NISHMAN",
    corto: "Cera enriquecida con keratina que brinda fijación fuerte y ayuda a moldear el cabello fácilmente.",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [
      CDN + "8604/img_6a08c3dd73f849.61367937_0.png",
      CDN + "8604/177896122815.png",
      CDN + "8604/177896122814.png"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Cera enriquecida con keratina que brinda fijación fuerte y ayuda a moldear el cabello fácilmente.",
    incluye: ["1 Cera 05 Keratin 150 ml - NISHMAN"]
  },
  {
    slug: "cera-06-mystic-gummy-150-ml-nishman-8605",
    dropiId: 8605,
    nombre: "Cera 06 Mystic Gummy 150 ml - NISHMAN",
    corto: "Cera de fijación fuerte y flexible que ayuda a definir y remodelar el peinado durante el día.",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [
      CDN + "8605/img_6a08c3e0c79f51.34843184_0.png",
      CDN + "8605/177896125417.png",
      CDN + "8605/177896125418.png"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Cera de fijación fuerte y flexible que ayuda a definir y remodelar el peinado durante el día.",
    incluye: ["1 Cera 06 Mystic Gummy 150 ml - NISHMAN"]
  },
  {
    slug: "cera-08-matte-150-ml-nishman-8607",
    dropiId: 8607,
    nombre: "Cera 08 Matte 150 ml - NISHMAN",
    corto: "Cera con acabado mate que brinda fijación fuerte y textura natural al cabello.",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [
      CDN + "8607/img_6a08c3e565aea5.32428292_0.png",
      CDN + "8607/177896130524.png",
      CDN + "8607/177896130523.png"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Cera con acabado mate que brinda fijación fuerte y textura natural al cabello.",
    incluye: ["1 Cera 08 Matte 150 ml - NISHMAN"]
  },
  {
    slug: "cera-matte-150-ml-bandido-8723",
    dropiId: 8723,
    nombre: "Cera Matte 150 ml - BANDIDO",
    corto: "La Cera Matte de BANDIDO brinda fijación fuerte con acabado mate para lograr estilos modernos y naturales sin…",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [CDN + "8723/img_6a10ba4f5d15e4.36164965_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "La Cera Matte de BANDIDO brinda fijación fuerte con acabado mate para lograr estilos modernos y naturales sin brillo.",
    incluye: ["1 Cera Matte 150 ml - BANDIDO"]
  },
  {
    slug: "cera-09-cola-150-ml-nishman-8608",
    dropiId: 8608,
    nombre: "Cera 09 Cola 150 ml - NISHMAN",
    corto: "Cera de fijación fuerte que ayuda a mantener el peinado definido y firme por más tiempo.",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [CDN + "8608/img_6a08c3e8811f92.38247495_0.png"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Cera de fijación fuerte que ayuda a mantener el peinado definido y firme por más tiempo.",
    incluye: ["1 Cera 09 Cola 150 ml - NISHMAN"]
  },
  {
    slug: "cera-m2-matte-clay-wax-150-ml-nishman-8609",
    dropiId: 8609,
    nombre: "Cera M2 Matte Clay Wax 150 ml - NISHMAN",
    corto: "Cera tipo clay con acabado mate que proporciona fijación fuerte y textura natural al cabello.",
    categoria: "Belleza",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [
      CDN + "8609/img_6a08c3ea7e1bf6.09805324_0.png",
      CDN + "8609/177896109230.png"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Cera tipo clay con acabado mate que proporciona fijación fuerte y textura natural al cabello.",
    incluye: ["1 Cera M2 Matte Clay Wax 150 ml - NISHMAN"]
  },
  {
    slug: "cera-m5-fibra-paste-150-ml-nishman-8610",
    dropiId: 8610,
    nombre: "Cera M5 Fibra Paste 150 ml - NISHMAN",
    corto: "Pasta con fibras que brinda fijación flexible y textura al cabello, permitiendo moldear y redefinir el peinado…",
    categoria: "Belleza",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [
      CDN + "8610/177896105432.png",
      CDN + "8610/img_6a08c3ec871041.94777492_0.png",
      CDN + "8610/177896105433.png"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Pasta con fibras que brinda fijación flexible y textura al cabello, permitiendo moldear y redefinir el peinado fácilmente.",
    incluye: ["1 Cera M5 Fibra Paste 150 ml - NISHMAN"]
  },
  {
    slug: "cera-f1-fibre-cream-150-ml-nishman-8611",
    dropiId: 8611,
    nombre: "Cera F1 Fibre Cream 150 ml - NISHMAN",
    corto: "Crema con fibras que proporciona fijación flexible y control del peinado.",
    categoria: "Belleza",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [
      CDN + "8611/177896135036.png",
      CDN + "8611/177896102335.png",
      CDN + "8611/img_6a08c3ee29d548.95742720_0.png"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Crema con fibras que proporciona fijación flexible y control del peinado.",
    incluye: ["1 Cera F1 Fibre Cream 150 ml - NISHMAN"]
  },
  {
    slug: "kit-reconstruction-shampoo-mask-8614",
    dropiId: 8614,
    nombre: "Kit Reconstruction Shampoo + Mask",
    corto: "Kit Reconstruction Shampoo + Mask.",
    categoria: "Belleza",
    destacado: false,
    precio: 259,
    precioPack: 469,
    imagenes: [CDN + "8614/img_6a0cd5f334c7e4.89324435_0.png"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Kit Reconstruction Shampoo + Mask. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Kit Reconstruction Shampoo + Mask"]
  },
  {
    slug: "kit-reconstruction-shampoo-mask-serum-8615",
    dropiId: 8615,
    nombre: "Kit Reconstruction Shampoo Mask & Serum",
    corto: "El pack Semi Di Lino Moisture ayuda a nutrir e hidratar profundamente el cabello seco y opaco.",
    categoria: "Belleza",
    destacado: false,
    precio: 339,
    precioPack: 619,
    imagenes: [CDN + "8615/img_6a0cd5f5979a39.47975600_0.png"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "El pack Semi Di Lino Moisture ayuda a nutrir e hidratar profundamente el cabello seco y opaco.",
    incluye: ["1 Kit Reconstruction Shampoo Mask & Serum"]
  },
  {
    slug: "kit-moisture-shampo-mask-serum-8616",
    dropiId: 8616,
    nombre: "Kit Moisture Shampo, Mask & Serum",
    corto: "El pack LanPro Argan Oil combina shampoo, acondicionador y tratamiento enriquecidos con aceite de argán para…",
    categoria: "Belleza",
    destacado: false,
    precio: 339,
    precioPack: 619,
    imagenes: [CDN + "8616/img_6a0cd5f86d64f9.74665695_0.png"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "El pack LanPro Argan Oil combina shampoo, acondicionador y tratamiento enriquecidos con aceite de argán para ayudar a hidratar, reparar y restaurar el cabello.",
    incluye: ["1 Kit Moisture Shampo, Mask & Serum"]
  },
  {
    slug: "kit-shampoo-acondicionador-aceite-8617",
    dropiId: 8617,
    nombre: "Kit Shampoo Acondicionador & Aceite",
    corto: "Kit Shampoo Acondicionador & Aceite.",
    categoria: "Belleza",
    destacado: false,
    precio: 239,
    precioPack: 439,
    imagenes: [CDN + "8617/img_6a0cd5fa289ec4.91409472_0.png"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Kit Shampoo Acondicionador & Aceite. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Kit Shampoo Acondicionador & Aceite"]
  },
  {
    slug: "old-school-performance-creatine-8619",
    dropiId: 8619,
    nombre: "Old school performance creatine",
    corto: "La Creatina Old School es un suplemento deportivo formulado con creatina monohidratada, diseñado para…",
    categoria: "Bienestar",
    destacado: false,
    precio: 89,
    precioPack: 169,
    imagenes: [
      CDN + "8619/1779229432WhatsApp%20Image%202026-05-19%20at%205.21.36%20PM.jpeg",
      CDN + "8619/1779229432WhatsApp%20Image%202026-05-19%20at%205.22.34%20PM.jpeg",
      CDN + "8619/1779229432WhatsApp%20Image%202026-05-19%20at%205.22.04%20PM.jpeg"
    ],
    beneficios: [
      "Creatina Old School – Creatine Monohydrate for Women",
      "Creatina Monohidratada",
      "Fórmula sin azúcar añadida",
      "Fácil de mezclar y consumir"
    ],
    descripcion: "La Creatina Old School es un suplemento deportivo formulado con creatina monohidratada, diseñado para complementar rutinas de entrenamiento y actividad física.",
    incluye: ["1 Old school performance creatine"]
  },
  {
    slug: "botox-capilar-reparacion-total-4-100-ml-8690",
    dropiId: 8690,
    nombre: "Botox Capilar Reparación Total 4 100 ml",
    corto: "El Botox Capilar Reparación Total 4 ayuda a restaurar y fortalecer el cabello dañado, aportando nutrición y…",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [CDN + "8690/img_6a0e301858f343.92404349_0.png"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "El Botox Capilar Reparación Total 4 ayuda a restaurar y fortalecer el cabello dañado, aportando nutrición y suavidad a la fibra capilar.",
    incluye: ["1 Botox Capilar Reparación Total 4 100 ml"]
  },
  {
    slug: "botox-capilar-coco-1000-ml-8691",
    dropiId: 8691,
    nombre: "Botox Capilar Coco 1000 ml",
    corto: "El Botox Capilar Coco ayuda a nutrir e hidratar profundamente el cabello seco y maltratado.",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [CDN + "8691/img_6a0e301a39f391.55718630_0.png"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "El Botox Capilar Coco ayuda a nutrir e hidratar profundamente el cabello seco y maltratado.",
    incluye: ["1 Botox Capilar Coco 1000 ml"]
  },
  {
    slug: "botox-capilar-efecto-liso-500-ml-8699",
    dropiId: 8699,
    nombre: "Botox Capilar Efecto Liso 500 ml",
    corto: "El Botox Capilar Efecto Liso ayuda a controlar el volumen y reducir el frizz, dejando el cabello más suave…",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [CDN + "8699/img_6a0e302edd2fa6.41620421_0.png"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "El Botox Capilar Efecto Liso ayuda a controlar el volumen y reducir el frizz, dejando el cabello más suave, brillante y manejable.",
    incluye: ["1 Botox Capilar Efecto Liso 500 ml"]
  },
  {
    slug: "shampoo-matizador-violeta-300-ml-8693",
    dropiId: 8693,
    nombre: "Shampoo Matizador Violeta 300 ml",
    corto: "El shampoo matizador violeta ayuda a neutralizar los tonos amarillentos no deseados en cabellos rubios…",
    categoria: "Belleza",
    destacado: false,
    precio: 89,
    precioPack: 169,
    imagenes: [CDN + "8693/img_6a0e301ef1baf3.29122256_0.png"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "El shampoo matizador violeta ayuda a neutralizar los tonos amarillentos no deseados en cabellos rubios, decolorados o con mechas.",
    incluye: ["1 Shampoo Matizador Violeta 300 ml"]
  },
  {
    slug: "aceite-capilar-argan-oil-60-ml-8703",
    dropiId: 8703,
    nombre: "Aceite Capilar Argan Oil 60 ml",
    corto: "El aceite capilar Argan Oil ayuda a nutrir e hidratar profundamente el cabello seco y maltratado.",
    categoria: "Belleza",
    destacado: false,
    precio: 89,
    precioPack: 169,
    imagenes: [CDN + "8703/img_6a0e30356cff58.34343122_0.png"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "El aceite capilar Argan Oil ayuda a nutrir e hidratar profundamente el cabello seco y maltratado.",
    incluye: ["1 Aceite Capilar Argan Oil 60 ml"]
  },
  {
    slug: "aceite-capilar-coconut-oil-60-ml-8704",
    dropiId: 8704,
    nombre: "Aceite Capilar Coconut Oil 60 ml",
    corto: "El aceite capilar Coconut Oil ayuda a hidratar y suavizar el cabello, aportando brillo y control del frizz.",
    categoria: "Belleza",
    destacado: false,
    precio: 89,
    precioPack: 169,
    imagenes: [CDN + "8704/img_6a0e303847e6c4.35684893_0.png"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "El aceite capilar Coconut Oil ayuda a hidratar y suavizar el cabello, aportando brillo y control del frizz.",
    incluye: ["1 Aceite Capilar Coconut Oil 60 ml"]
  },
  {
    slug: "aceite-capilar-coconut-oil-30-ml-8705",
    dropiId: 8705,
    nombre: "Aceite Capilar Coconut Oil 30 ml",
    corto: "El aceite capilar Coconut Oil ayuda a nutrir e hidratar profundamente el cabello mientras aporta suavidad y…",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [CDN + "8705/img_6a0e3039c24223.37923759_0.png"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "El aceite capilar Coconut Oil ayuda a nutrir e hidratar profundamente el cabello mientras aporta suavidad y brillo natural.",
    incluye: ["1 Aceite Capilar Coconut Oil 30 ml"]
  },
  {
    slug: "spray-acondicionador-para-peinar-150-ml-8710",
    dropiId: 8710,
    nombre: "Spray Acondicionador Para Peinar 150 ml",
    corto: "El spray acondicionador para peinar ayuda a desenredar y suavizar el cabello facilitando el peinado diario.",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [CDN + "8710/img_6a0e30455e0981.24099548_0.png"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "El spray acondicionador para peinar ayuda a desenredar y suavizar el cabello facilitando el peinado diario.",
    incluye: ["1 Spray Acondicionador Para Peinar 150 ml"]
  },
  {
    slug: "protector-termico-argan-290-ml-8712",
    dropiId: 8712,
    nombre: "Protector Térmico Argán 290 ml",
    corto: "El protector térmico Argán ayuda a proteger el cabello del calor mientras aporta nutrición, suavidad y brillo.",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [CDN + "8712/img_6a0e304b139537.49238565_0.png"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "El protector térmico Argán ayuda a proteger el cabello del calor mientras aporta nutrición, suavidad y brillo.",
    incluye: ["1 Protector Térmico Argán 290 ml"]
  },
  {
    slug: "protector-termico-coco-290-ml-8713",
    dropiId: 8713,
    nombre: "Protector Térmico Coco 290 ml",
    corto: "El protector térmico Coco ayuda a proteger el cabello del calor generado por herramientas térmicas mientras…",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [CDN + "8713/img_6a0e304ca42913.86505536_0.png"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "El protector térmico Coco ayuda a proteger el cabello del calor generado por herramientas térmicas mientras aporta hidratación y suavidad.",
    incluye: ["1 Protector Térmico Coco 290 ml"]
  },
  {
    slug: "protector-termico-karite-290-ml-8714",
    dropiId: 8714,
    nombre: "Protector Térmico Karité 290 ml",
    corto: "El protector térmico Karité ayuda a proteger el cabello frente al calor y la resequedad causada por…",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [CDN + "8714/img_6a0e304f885e35.78082083_0.png"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "El protector térmico Karité ayuda a proteger el cabello frente al calor y la resequedad causada por herramientas térmicas.",
    incluye: ["1 Protector Térmico Karité 290 ml"]
  },
  {
    slug: "cera-02-orange-150-ml-bandido-8717",
    dropiId: 8717,
    nombre: "Cera 02 Orange 150 ml - BANDIDO",
    corto: "La Cera 02 Orange de BANDIDO está formulada para brindar fijación fuerte y larga duración, ayudando a mantener…",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [CDN + "8717/img_6a10ba40371ef2.25428607_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "La Cera 02 Orange de BANDIDO está formulada para brindar fijación fuerte y larga duración, ayudando a mantener el peinado definido por más tiempo.",
    incluye: ["1 Cera 02 Orange 150 ml - BANDIDO"]
  },
  {
    slug: "cera-03-brown-150-ml-bandido-8718",
    dropiId: 8718,
    nombre: "Cera 03 Brown 150 ml - BANDIDO",
    corto: "La Cera 03 Brown de BANDIDO ayuda a crear peinados definidos con una fijación fuerte y duradera.",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [CDN + "8718/img_6a10ba42c5bee1.96946511_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "La Cera 03 Brown de BANDIDO ayuda a crear peinados definidos con una fijación fuerte y duradera.",
    incluye: ["1 Cera 03 Brown 150 ml - BANDIDO"]
  },
  {
    slug: "cera-06-gray-150-ml-bandido-8720",
    dropiId: 8720,
    nombre: "Cera 06 Gray 150 ml - BANDIDO",
    corto: "La Cera 06 Gray de BANDIDO proporciona fijación fuerte y flexible para crear estilos definidos con un acabado…",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [CDN + "8720/img_6a10ba46da75c0.48310797_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "La Cera 06 Gray de BANDIDO proporciona fijación fuerte y flexible para crear estilos definidos con un acabado natural.",
    incluye: ["1 Cera 06 Gray 150 ml - BANDIDO"]
  },
  {
    slug: "after-shave-01-antarctica-nishman-8727",
    dropiId: 8727,
    nombre: "After Shave 01 Antarctica - NishMan",
    corto: "After Shave 01 Antarctica - NishMan.",
    categoria: "Belleza",
    destacado: false,
    precio: 89,
    precioPack: 169,
    imagenes: [CDN + "8727/img_6a11b6dd95c712.86770158_0.png"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "After Shave 01 Antarctica - NishMan. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 After Shave 01 Antarctica - NishMan"]
  },
  {
    slug: "after-shave-02-storm-nishman-8728",
    dropiId: 8728,
    nombre: "After Shave 02 Storm - NishMan",
    corto: "After Shave 02 Storm - NishMan.",
    categoria: "Belleza",
    destacado: false,
    precio: 89,
    precioPack: 169,
    imagenes: [CDN + "8728/img_6a11b6df651b22.04639160_0.png"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "After Shave 02 Storm - NishMan. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 After Shave 02 Storm - NishMan"]
  },
  {
    slug: "after-shave-03-nesly-nishman-8729",
    dropiId: 8729,
    nombre: "After Shave 03 Nesly - NishMan",
    corto: "After Shave 03 Nesly - NishMan ayuda a calmar y refrescar la piel después del afeitado aportando una agradable…",
    categoria: "Belleza",
    destacado: false,
    precio: 89,
    precioPack: 169,
    imagenes: [CDN + "8729/img_6a11b6e14abf07.17533621_0.png"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "After Shave 03 Nesly - NishMan ayuda a calmar y refrescar la piel después del afeitado aportando una agradable sensación revitalizante y confortable.",
    incluye: ["1 After Shave 03 Nesly - NishMan"]
  },
  {
    slug: "mini-amoladora-de-3-fff-8746",
    dropiId: 8746,
    nombre: "Mini Amoladora de 3' FFF",
    corto: "Mini Amoladora de 3' FFF es una herramienta práctica y versátil diseñada para cortar, desbastar y pulir…",
    categoria: "Herramientas",
    destacado: false,
    precio: 149,
    precioPack: 269,
    imagenes: [CDN + "8746/img_6a122360d65130.35353422_0.png"],
    beneficios: [
      "Resistente y práctico",
      "Para casa y trabajos",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Mini Amoladora de 3' FFF es una herramienta práctica y versátil diseñada para cortar, desbastar y pulir diferentes materiales con precisión.",
    incluye: ["1 Mini Amoladora de 3' FFF"]
  },
  {
    slug: "clavos-fulminantes-caja-de-100-clavos-8751",
    dropiId: 8751,
    nombre: "Clavos Fulminantes Caja de 100 Clavos",
    corto: "Clavos Fulminantes Caja de 100 Clavos.",
    categoria: "Herramientas",
    destacado: false,
    precio: 109,
    precioPack: 199,
    imagenes: [CDN + "8751/img_6a122370746132.88672517_0.png"],
    beneficios: [
      "Resistente y práctico",
      "Para casa y trabajos",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Clavos Fulminantes Caja de 100 Clavos. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Clavos Fulminantes Caja de 100 Clavos"]
  },
  {
    slug: "hyundae-bidet-hb-100-8806",
    dropiId: 8806,
    nombre: "Hyundae bidet hb-100",
    corto: "Moderniza tu baño con una solución de higiene más cómoda, fresca y eficiente.",
    categoria: "Bienestar",
    destacado: false,
    precio: 179,
    precioPack: 329,
    imagenes: [
      CDN + "8806/1780523616BIDET%20HB100.jpg",
      CDN + "8806/1780523616611671327_122112790041098802_8106349093198468923_n.jpg",
      CDN + "8806/1780523616611947173_122112789927098802_2405259349554314174_n.jpg"
    ],
    beneficios: [
      "Diseño moderno y elegante",
      "Presión de agua ajustable",
      "Fácil instalación",
      "No requiere electricidad"
    ],
    descripcion: "Moderniza tu baño con una solución de higiene más cómoda, fresca y eficiente. Ideal para personas que buscan mayor comodidad e higiene en su rutina diaria.",
    incluye: ["1 Hyundae bidet hb-100"]
  },
  {
    slug: "serum-centella-asiatica-30ml-bioaqua-8929",
    dropiId: 8929,
    nombre: "Serum Centella Asiática 30ml BIOAQUA",
    corto: "Serum Centella Asiática 30ml BIOAQUA.",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [CDN + "8929/img_6a284357ebedd7.17270316_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Serum Centella Asiática 30ml BIOAQUA. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Serum Centella Asiática 30ml BIOAQUA"]
  },
  {
    slug: "pack-crema-serum-centella-bioaqua-8931",
    dropiId: 8931,
    nombre: "Pack Crema+Serum Centella BIOAQUA",
    corto: "Pack Crema+Serum Centella BIOAQUA.",
    categoria: "Belleza",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [CDN + "8931/img_6a28435e0ca722.90388883_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Pack Crema+Serum Centella BIOAQUA. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Pack Crema+Serum Centella BIOAQUA"]
  },
  {
    slug: "pack-crema-contorno-blueberry-bioaqua-8939",
    dropiId: 8939,
    nombre: "Pack Crema+Contorno Blueberry BIOAQUA",
    corto: "Pack Crema+Contorno Blueberry BIOAQUA.",
    categoria: "Belleza",
    destacado: false,
    precio: 89,
    precioPack: 169,
    imagenes: [CDN + "8939/img_6a284374c2f723.61458248_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Pack Crema+Contorno Blueberry BIOAQUA. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Pack Crema+Contorno Blueberry BIOAQUA"]
  },
  {
    slug: "pack-crema-limpiador-aloe-bioaqua-8968",
    dropiId: 8968,
    nombre: "Pack Crema+Limpiador Aloe BIOAQUA",
    corto: "Pack de crema y limpiador Aloe Vera que combina limpieza e hidratación en una sola rutina.",
    categoria: "Belleza",
    destacado: false,
    precio: 109,
    precioPack: 199,
    imagenes: [CDN + "8968/img_6a2843bf722ad9.39386297_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Pack de crema y limpiador Aloe Vera que combina limpieza e hidratación en una sola rutina.",
    incluye: ["1 Pack Crema+Limpiador Aloe BIOAQUA"]
  },
  {
    slug: "removedor-centella-20gr-bioaqua-8933",
    dropiId: 8933,
    nombre: "Removedor Centella 20gr BIOAQUA",
    corto: "Removedor Centella 20gr BIOAQUA.",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [CDN + "8933/img_6a2843624b6554.43966252_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Removedor Centella 20gr BIOAQUA. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Removedor Centella 20gr BIOAQUA"]
  },
  {
    slug: "pack-completo-centella-bioaqua-8934",
    dropiId: 8934,
    nombre: "Pack Completo Centella BIOAQUA",
    corto: "Set completo de centella asiática que incluye productos para limpieza, hidratación y cuidado facial.",
    categoria: "Belleza",
    destacado: false,
    precio: 169,
    precioPack: 309,
    imagenes: [CDN + "8934/img_6a284364dee6e8.23856584_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Set completo de centella asiática que incluye productos para limpieza, hidratación y cuidado facial.",
    incluye: ["1 Pack Completo Centella BIOAQUA"]
  },
  {
    slug: "exfoliante-blueberry-250gr-bioaqua-8936",
    dropiId: 8936,
    nombre: "Exfoliante Blueberry 250gr BIOAQUA",
    corto: "Exfoliante Blueberry 250gr BIOAQUA.",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [CDN + "8936/img_6a28436b304f50.98815953_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Exfoliante Blueberry 250gr BIOAQUA. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Exfoliante Blueberry 250gr BIOAQUA"]
  },
  {
    slug: "mascarilla-nocturna-blueberry-bioaqua-8937",
    dropiId: 8937,
    nombre: "Mascarilla Nocturna Blueberry BIOAQUA",
    corto: "Mascarilla nocturna con blueberry formulada para acompañar el cuidado de la piel durante la noche.",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [CDN + "8937/img_6a28436eb09cd2.23975238_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Mascarilla nocturna con blueberry formulada para acompañar el cuidado de la piel durante la noche.",
    incluye: ["1 Mascarilla Nocturna Blueberry BIOAQUA"]
  },
  {
    slug: "serum-milk-plus-30ml-bioaqua-8940",
    dropiId: 8940,
    nombre: "Serum Milk Plus 30ml BIOAQUA",
    corto: "Serum Milk Plus desarrollado para aportar hidratación y suavidad a la piel.",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [CDN + "8940/img_6a28437629f6a5.94277823_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Serum Milk Plus desarrollado para aportar hidratación y suavidad a la piel.",
    incluye: ["1 Serum Milk Plus 30ml BIOAQUA"]
  },
  {
    slug: "locion-facial-rice-raw-pulp-bioaqua-8952",
    dropiId: 8952,
    nombre: "Loción Facial Rice Raw Pulp BIOAQUA",
    corto: "Loción facial Rice Raw Pulp diseñada para refrescar e hidratar la piel después de la limpieza.",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [CDN + "8952/img_6a28439670aae1.45161317_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Loción facial Rice Raw Pulp diseñada para refrescar e hidratar la piel después de la limpieza.",
    incluye: ["1 Loción Facial Rice Raw Pulp BIOAQUA"]
  },
  {
    slug: "espuma-rice-raw-pulp-bioaqua-8953",
    dropiId: 8953,
    nombre: "Espuma Rice Raw Pulp BIOAQUA",
    corto: "Espuma limpiadora Rice Raw Pulp formulada para remover impurezas y residuos acumulados en la piel.",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [CDN + "8953/img_6a284398059010.34670155_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Espuma limpiadora Rice Raw Pulp formulada para remover impurezas y residuos acumulados en la piel.",
    incluye: ["1 Espuma Rice Raw Pulp BIOAQUA"]
  },
  {
    slug: "limpiador-rice-raw-pulp-bioaqua-8954",
    dropiId: 8954,
    nombre: "Limpiador Rice Raw Pulp BIOAQUA",
    corto: "Limpiador Rice Raw Pulp BIOAQUA.",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [CDN + "8954/img_6a28439c9e8327.51334153_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Limpiador Rice Raw Pulp BIOAQUA. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Limpiador Rice Raw Pulp BIOAQUA"]
  },
  {
    slug: "spray-solar-spf50-rice-bioaqua-8956",
    dropiId: 8956,
    nombre: "Spray Solar SPF50 Rice BIOAQUA",
    corto: "Bloqueador solar en spray SPF50 Rice Raw Pulp que ayuda a proteger la piel frente a la exposición solar diaria.",
    categoria: "Belleza",
    destacado: false,
    precio: 79,
    precioPack: 149,
    imagenes: [CDN + "8956/img_6a2843a1da9455.90878154_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Bloqueador solar en spray SPF50 Rice Raw Pulp que ayuda a proteger la piel frente a la exposición solar diaria.",
    incluye: ["1 Spray Solar SPF50 Rice BIOAQUA"]
  },
  {
    slug: "bloqueador-spf50-rice-raw-pulp-bioaqua-8960",
    dropiId: 8960,
    nombre: "Bloqueador SPF50 Rice Raw Pulp BIOAQUA",
    corto: "Bloqueador solar SPF50 Rice Raw Pulp diseñado para complementar la protección diaria de la piel frente a la…",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [CDN + "8960/img_6a2843ac6fa316.37422199_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Bloqueador solar SPF50 Rice Raw Pulp diseñado para complementar la protección diaria de la piel frente a la exposición solar.",
    incluye: ["1 Bloqueador SPF50 Rice Raw Pulp BIOAQUA"]
  },
  {
    slug: "serum-b6-acido-hialuronico-bioaqua-8964",
    dropiId: 8964,
    nombre: "Serum B6 Ácido Hialurónico BIOAQUA",
    corto: "Serum B6 con ácido hialurónico formulado para ayudar a mantener la hidratación de la piel.",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [CDN + "8964/img_6a2843b59631c8.51542690_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Serum B6 con ácido hialurónico formulado para ayudar a mantener la hidratación de la piel.",
    incluye: ["1 Serum B6 Ácido Hialurónico BIOAQUA"]
  },
  {
    slug: "limpiador-anti-freckle-bioaqua-8965",
    dropiId: 8965,
    nombre: "Limpiador Anti-Freckle BIOAQUA",
    corto: "Limpiador facial Anti-Freckle diseñado para remover impurezas y residuos acumulados en la piel.",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [CDN + "8965/img_6a2843b73097b8.73077683_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Limpiador facial Anti-Freckle diseñado para remover impurezas y residuos acumulados en la piel.",
    incluye: ["1 Limpiador Anti-Freckle BIOAQUA"]
  },
  {
    slug: "serum-aloe-vera-bioaqua-8970",
    dropiId: 8970,
    nombre: "Serum Aloe Vera BIOAQUA",
    corto: "Serum Aloe Vera BIOAQUA.",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [CDN + "8970/img_6a2843c4bf3156.18784240_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Serum Aloe Vera BIOAQUA. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Serum Aloe Vera BIOAQUA"]
  },
  {
    slug: "serum-aloe-vera-50-gr-dr-rashell-9159",
    dropiId: 9159,
    nombre: "Serum Aloe Vera 50 gr DR RASHELL",
    corto: "Serum Aloe Vera 50 gr DR RASHELL.",
    categoria: "Belleza",
    destacado: false,
    precio: 89,
    precioPack: 169,
    imagenes: [
      CDN + "9159/img_6a403a97a9db89.99552151_0.jpg",
      CDN + "9159/178259501261.jpg",
      CDN + "9159/178259501260.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Serum Aloe Vera 50 gr DR RASHELL. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Serum Aloe Vera 50 gr DR RASHELL"]
  },
  {
    slug: "bloqueador-facial-sakura-bioaqua-8985",
    dropiId: 8985,
    nombre: "Bloqueador Facial Sakura BIOAQUA",
    corto: "Bloqueador facial Sakura desarrollado para complementar la protección diaria frente a la exposición solar.",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [CDN + "8985/img_6a2c5ad1db5238.83630863_0.png"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Bloqueador facial Sakura desarrollado para complementar la protección diaria frente a la exposición solar.",
    incluye: ["1 Bloqueador Facial Sakura BIOAQUA"]
  },
  {
    slug: "bloqueador-spray-sakura-bioaqua-8987",
    dropiId: 8987,
    nombre: "Bloqueador Spray Sakura BIOAQUA",
    corto: "Bloqueador en spray Sakura formulado para facilitar una aplicación rápida y uniforme sobre la piel.",
    categoria: "Belleza",
    destacado: false,
    precio: 79,
    precioPack: 149,
    imagenes: [CDN + "8987/img_6a2c5ad61b4894.59406107_0.png"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Bloqueador en spray Sakura formulado para facilitar una aplicación rápida y uniforme sobre la piel.",
    incluye: ["1 Bloqueador Spray Sakura BIOAQUA"]
  },
  {
    slug: "kit-skincare-removal-acne-bioaqua-8993",
    dropiId: 8993,
    nombre: "Kit Skincare Removal Acne BIOAQUA",
    corto: "Kit Skincare Removal Acne BIOAQUA.",
    categoria: "Belleza",
    destacado: false,
    precio: 129,
    precioPack: 239,
    imagenes: [CDN + "8993/img_6a2c5ae24c0988.64496049_0.png"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Kit Skincare Removal Acne BIOAQUA. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Kit Skincare Removal Acne BIOAQUA"]
  },
  {
    slug: "locion-corporal-vit-c-white-bioaqua-9000",
    dropiId: 9000,
    nombre: "Locion Corporal Vit C White BIOAQUA",
    corto: "Locion Corporal Vit C White BIOAQUA.",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [CDN + "9000/img_6a2c5aefc0b1d8.67577231_0.png"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Locion Corporal Vit C White BIOAQUA. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Locion Corporal Vit C White BIOAQUA"]
  },
  {
    slug: "solar-spf90-humectante-bioaqua-9018",
    dropiId: 9018,
    nombre: "Solar SPF90 Humectante BIOAQUA",
    corto: "Solar SPF90 Humectante BIOAQUA.",
    categoria: "Hogar",
    destacado: false,
    precio: 79,
    precioPack: 149,
    imagenes: [CDN + "9018/img_6a304611740bf7.02570258_0.jpg"],
    beneficios: [
      "Práctico y fácil de usar",
      "Ahorra tiempo en casa",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Solar SPF90 Humectante BIOAQUA. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Solar SPF90 Humectante BIOAQUA"]
  },
  {
    slug: "limpiador-bubble-amino-acid-bioaqua-9020",
    dropiId: 9020,
    nombre: "Limpiador Bubble Amino Acid BIOAQUA",
    corto: "Limpiador Bubble Amino Acid BIOAQUA.",
    categoria: "Hogar",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [CDN + "9020/img_6a30461719ad29.24378336_0.jpg"],
    beneficios: [
      "Práctico y fácil de usar",
      "Ahorra tiempo en casa",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Limpiador Bubble Amino Acid BIOAQUA. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Limpiador Bubble Amino Acid BIOAQUA"]
  },
  {
    slug: "limpiador-bubble-aloe-extract-bioaqua-9022",
    dropiId: 9022,
    nombre: "Limpiador Bubble Aloe Extract BIOAQUA",
    corto: "Limpiador Bubble Aloe Extract BIOAQUA.",
    categoria: "Hogar",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [CDN + "9022/img_6a30461c559d49.09700966_0.jpg"],
    beneficios: [
      "Práctico y fácil de usar",
      "Ahorra tiempo en casa",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Limpiador Bubble Aloe Extract BIOAQUA. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Limpiador Bubble Aloe Extract BIOAQUA"]
  },
  {
    slug: "espuma-removedor-de-bellos-bioaqua-9030",
    dropiId: 9030,
    nombre: "Espuma Removedor de Bellos BIOAQUA",
    corto: "Espuma Removedor de Bellos BIOAQUA.",
    categoria: "Hogar",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [CDN + "9030/img_6a30462e445682.15738158_0.jpg"],
    beneficios: [
      "Práctico y fácil de usar",
      "Ahorra tiempo en casa",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Espuma Removedor de Bellos BIOAQUA. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Espuma Removedor de Bellos BIOAQUA"]
  },
  {
    slug: "crema-depilatoria-bioaqua-9031",
    dropiId: 9031,
    nombre: "Crema Depilatoria BIOAQUA",
    corto: "Crema Depilatoria BIOAQUA.",
    categoria: "Hogar",
    destacado: false,
    precio: 79,
    precioPack: 149,
    imagenes: [CDN + "9031/img_6a304630ee5e97.09461906_0.jpg"],
    beneficios: [
      "Práctico y fácil de usar",
      "Ahorra tiempo en casa",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Crema Depilatoria BIOAQUA. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Crema Depilatoria BIOAQUA"]
  },
  {
    slug: "crema-depilatoria-men-bioaqua-9032",
    dropiId: 9032,
    nombre: "Crema Depilatoria Men BIOAQUA",
    corto: "Crema Depilatoria Men BIOAQUA.",
    categoria: "Hogar",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [CDN + "9032/img_6a3046339091c9.55803578_0.jpg"],
    beneficios: [
      "Práctico y fácil de usar",
      "Ahorra tiempo en casa",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Crema Depilatoria Men BIOAQUA. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Crema Depilatoria Men BIOAQUA"]
  },
  {
    slug: "serum-hialuronato-30-ml-bioaqua-9048",
    dropiId: 9048,
    nombre: "Serum Hialuronato 30 ml BIOAQUA",
    corto: "Serum Hialuronato 30 ml BIOAQUA.",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [CDN + "9048/img_6a32fdf121bd48.15312416_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Serum Hialuronato 30 ml BIOAQUA. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Serum Hialuronato 30 ml BIOAQUA"]
  },
  {
    slug: "serum-niacinamide-30-ml-bioaqua-9056",
    dropiId: 9056,
    nombre: "Serum Niacinamide 30 ml BIOAQUA",
    corto: "Serum Niacinamide 30 ml BIOAQUA.",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [CDN + "9056/img_6a32fe06216eb0.62949826_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Serum Niacinamide 30 ml BIOAQUA. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Serum Niacinamide 30 ml BIOAQUA"]
  },
  {
    slug: "serum-acido-hialuronico-30-ml-bioaqua-9054",
    dropiId: 9054,
    nombre: "Serum Ácido Hialuronico 30 ml BIOAQUA",
    corto: "El Serum Ácido Hialurónico 30 ml BIOAQUA está diseñado para aportar hidratación intensa y ayudar a mantener la…",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [CDN + "9054/img_6a32fe00d8a1f8.33535473_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "El Serum Ácido Hialurónico 30 ml BIOAQUA está diseñado para aportar hidratación intensa y ayudar a mantener la piel con una apariencia fresca y saludable.",
    incluye: ["1 Serum Ácido Hialuronico 30 ml BIOAQUA"]
  },
  {
    slug: "serum-bulgaria-rose-30-ml-bioaqua-9055",
    dropiId: 9055,
    nombre: "Serum Bulgaria Rose 30 ml BIOAQUA",
    corto: "Serum Bulgaria Rose 30 ml BIOAQUA.",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [CDN + "9055/img_6a32fe03845ad0.88602717_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Serum Bulgaria Rose 30 ml BIOAQUA. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Serum Bulgaria Rose 30 ml BIOAQUA"]
  },
  {
    slug: "crema-despigmentante-30-gr-bioaqua-9058",
    dropiId: 9058,
    nombre: "Crema Despigmentante 30 gr BIOAQUA",
    corto: "La Crema Despigmentante 30 gr BIOAQUA está desarrollada para complementar la rutina de cuidado facial de…",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [CDN + "9058/img_6a32fe0b505756.11498470_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "La Crema Despigmentante 30 gr BIOAQUA está desarrollada para complementar la rutina de cuidado facial de quienes buscan una piel con apariencia más uniforme y luminosa.",
    incluye: ["1 Crema Despigmentante 30 gr BIOAQUA"]
  },
  {
    slug: "locion-aclarante-vitamina-c-bioaqua-9060",
    dropiId: 9060,
    nombre: "Loción Aclarante Vitamina C BIOAQUA",
    corto: "Loción Aclarante Vitamina C BIOAQUA.",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [CDN + "9060/img_6a32fe0f664ab1.89586385_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Loción Aclarante Vitamina C BIOAQUA. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Loción Aclarante Vitamina C BIOAQUA"]
  },
  {
    slug: "exfoliante-para-pies-shea-butter-180-gr-9061",
    dropiId: 9061,
    nombre: "Exfoliante Para Pies Shea Butter 180 gr",
    corto: "Exfoliante Para Pies Shea Butter 180 gr.",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [CDN + "9061/img_6a32fe12096367.83719561_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Exfoliante Para Pies Shea Butter 180 gr. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Exfoliante Para Pies Shea Butter 180 gr"]
  },
  {
    slug: "desmaquillante-rose-150-ml-sadoer-9072",
    dropiId: 9072,
    nombre: "Desmaquillante Rose 150 ml SADOER",
    corto: "Desmaquillante Rose 150 ml SADOER.",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [CDN + "9072/img_6a32fe2b68dd97.85693326_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Desmaquillante Rose 150 ml SADOER. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Desmaquillante Rose 150 ml SADOER"]
  },
  {
    slug: "desmaquillante-aloe-150-ml-sadoer-9073",
    dropiId: 9073,
    nombre: "Desmaquillante Aloe 150 ml SADOER",
    corto: "Desmaquillante Aloe 150 ml SADOER.",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [CDN + "9073/img_6a32fe2e085383.30778597_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Desmaquillante Aloe 150 ml SADOER. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Desmaquillante Aloe 150 ml SADOER"]
  },
  {
    slug: "desmaquillante-amino-acid-150-ml-sadoer-9074",
    dropiId: 9074,
    nombre: "Desmaquillante Amino Acid 150 ml SADOER",
    corto: "El Desmaquillante Amino Acid 150 ml SADOER ayuda a remover eficazmente maquillaje, exceso de grasa e impurezas…",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [CDN + "9074/img_6a32fe2f96bd50.99186711_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "El Desmaquillante Amino Acid 150 ml SADOER ayuda a remover eficazmente maquillaje, exceso de grasa e impurezas acumuladas en la superficie de la piel.",
    incluye: ["1 Desmaquillante Amino Acid 150 ml SADOER"]
  },
  {
    slug: "exfoliante-kiwi-300-ml-sadoer-9076",
    dropiId: 9076,
    nombre: "Exfoliante Kiwi 300 ml SADOER",
    corto: "Exfoliante Kiwi 300 ml SADOER.",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [CDN + "9076/img_6a32fe33ed3660.86448664_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Exfoliante Kiwi 300 ml SADOER. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Exfoliante Kiwi 300 ml SADOER"]
  },
  {
    slug: "exfoliante-peach-300-ml-sadoer-9077",
    dropiId: 9077,
    nombre: "Exfoliante Peach 300 ml SADOER",
    corto: "Exfoliante Peach 300 ml SADOER.",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [CDN + "9077/img_6a32fe368fb0a4.05137577_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Exfoliante Peach 300 ml SADOER. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Exfoliante Peach 300 ml SADOER"]
  },
  {
    slug: "exfoliante-orange-300-ml-sadoer-9078",
    dropiId: 9078,
    nombre: "Exfoliante Orange 300 ml SADOER",
    corto: "Exfoliante Orange 300 ml SADOER.",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [CDN + "9078/img_6a32fe3824f789.26079354_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Exfoliante Orange 300 ml SADOER. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Exfoliante Orange 300 ml SADOER"]
  },
  {
    slug: "mascarilla-kion-400-gr-bioaqua-9089",
    dropiId: 9089,
    nombre: "Mascarilla Kion 400 gr BIOAQUA",
    corto: "La Mascarilla Kion 400 gr BIOAQUA está desarrollada para complementar el cuidado capilar mediante una…",
    categoria: "Belleza",
    destacado: false,
    precio: 79,
    precioPack: 149,
    imagenes: [CDN + "9089/img_6a344d18835050.58603659_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "La Mascarilla Kion 400 gr BIOAQUA está desarrollada para complementar el cuidado capilar mediante una hidratación intensiva que ayuda a mejorar la suavidad y manejabilidad del cabello.",
    incluye: ["1 Mascarilla Kion 400 gr BIOAQUA"]
  },
  {
    slug: "pack-capilar-kion-shampoo-y-mascarilla-9090",
    dropiId: 9090,
    nombre: "Pack Capilar Kion Shampoo y Mascarilla",
    corto: "Pack Capilar Kion Shampoo y Mascarilla.",
    categoria: "Belleza",
    destacado: false,
    precio: 119,
    precioPack: 219,
    imagenes: [CDN + "9090/img_6a344d1b241333.21094808_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Pack Capilar Kion Shampoo y Mascarilla. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Pack Capilar Kion Shampoo y Mascarilla"]
  },
  {
    slug: "pack-capilar-olive-shampoo-y-mascarilla-9093",
    dropiId: 9093,
    nombre: "Pack Capilar Olive Shampoo y Mascarilla",
    corto: "El Pack Capilar Olive Shampoo y Mascarilla reúne dos productos complementarios que ayudan a mantener el cabello…",
    categoria: "Belleza",
    destacado: false,
    precio: 119,
    precioPack: 219,
    imagenes: [CDN + "9093/img_6a344d220dec74.83890945_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "El Pack Capilar Olive Shampoo y Mascarilla reúne dos productos complementarios que ayudan a mantener el cabello limpio, hidratado y con una apariencia saludable.",
    incluye: ["1 Pack Capilar Olive Shampoo y Mascarilla"]
  },
  {
    slug: "shampoo-olive-400-ml-bioaqua-9091",
    dropiId: 9091,
    nombre: "Shampoo Olive 400 ml BIOAQUA",
    corto: "El Shampoo Olive 400 ml BIOAQUA está formulado para limpiar eficazmente el cabello mientras ayuda a mantener…",
    categoria: "Belleza",
    destacado: false,
    precio: 79,
    precioPack: 149,
    imagenes: [CDN + "9091/img_6a344d1dd295b2.06410783_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "El Shampoo Olive 400 ml BIOAQUA está formulado para limpiar eficazmente el cabello mientras ayuda a mantener una sensación de hidratación y suavidad.",
    incluye: ["1 Shampoo Olive 400 ml BIOAQUA"]
  },
  {
    slug: "mascarilla-olive-400-gr-bioaqua-9092",
    dropiId: 9092,
    nombre: "Mascarilla Olive 400 gr BIOAQUA",
    corto: "La Mascarilla Olive 400 gr BIOAQUA está diseñada para proporcionar un cuidado intensivo que ayuda a mejorar la…",
    categoria: "Belleza",
    destacado: false,
    precio: 79,
    precioPack: 149,
    imagenes: [CDN + "9092/img_6a344d1f6b70e0.98731672_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "La Mascarilla Olive 400 gr BIOAQUA está diseñada para proporcionar un cuidado intensivo que ayuda a mejorar la apariencia y suavidad del cabello.",
    incluye: ["1 Mascarilla Olive 400 gr BIOAQUA"]
  },
  {
    slug: "kit-for-mens-apolodios-9101",
    dropiId: 9101,
    nombre: "Kit For Mens APOLODIOS",
    corto: "Kit For Mens APOLODIOS.",
    categoria: "Belleza",
    destacado: false,
    precio: 199,
    precioPack: 359,
    imagenes: [CDN + "9101/img_6a344d35e91db3.58138853_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Kit For Mens APOLODIOS. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Kit For Mens APOLODIOS"]
  },
  {
    slug: "mascarilla-rosa-mosqueta-50-gr-sadoer-9104",
    dropiId: 9104,
    nombre: "Mascarilla Rosa Mosqueta 50 gr SADOER",
    corto: "La Mascarilla Rosa Mosqueta 50 gr SADOER proporciona un tratamiento capilar intensivo diseñado para ayudar a…",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [CDN + "9104/img_6a344d3cc5d782.58004047_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "La Mascarilla Rosa Mosqueta 50 gr SADOER proporciona un tratamiento capilar intensivo diseñado para ayudar a mejorar la suavidad y apariencia del cabello.",
    incluye: ["1 Mascarilla Rosa Mosqueta 50 gr SADOER"]
  },
  {
    slug: "pack-rosa-mosqueta-shampoo-conditioner-9105",
    dropiId: 9105,
    nombre: "Pack Rosa Mosqueta Shampoo Conditioner",
    corto: "Pack Rosa Mosqueta Shampoo Conditioner.",
    categoria: "Belleza",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [CDN + "9105/img_6a344d3f8735b2.72700254_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Pack Rosa Mosqueta Shampoo Conditioner. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Pack Rosa Mosqueta Shampoo Conditioner"]
  },
  {
    slug: "kit-capilar-rosa-mosqueta-sadoer-9106",
    dropiId: 9106,
    nombre: "Kit Capilar Rosa Mosqueta SADOER",
    corto: "El Kit Capilar Rosa Mosqueta SADOER reúne productos diseñados para ofrecer una rutina completa de cuidado del…",
    categoria: "Belleza",
    destacado: false,
    precio: 129,
    precioPack: 239,
    imagenes: [CDN + "9106/img_6a344d40ef1fb4.42002793_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "El Kit Capilar Rosa Mosqueta SADOER reúne productos diseñados para ofrecer una rutina completa de cuidado del cabello.",
    incluye: ["1 Kit Capilar Rosa Mosqueta SADOER"]
  },
  {
    slug: "shampoo-arroz-500-ml-sadoer-9107",
    dropiId: 9107,
    nombre: "Shampoo Arroz 500 ml SADOER",
    corto: "Shampoo Arroz 500 ml SADOER.",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [CDN + "9107/img_6a344d439eefa8.06531199_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Shampoo Arroz 500 ml SADOER. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Shampoo Arroz 500 ml SADOER"]
  },
  {
    slug: "conditioner-arroz-500-ml-sadoer-9108",
    dropiId: 9108,
    nombre: "Conditioner Arroz 500 ml SADOER",
    corto: "El Conditioner Arroz 500 ml SADOER está diseñado para aportar suavidad y mejorar la manejabilidad del cabello…",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [CDN + "9108/img_6a344d44ef3d29.97235857_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "El Conditioner Arroz 500 ml SADOER está diseñado para aportar suavidad y mejorar la manejabilidad del cabello después del lavado.",
    incluye: ["1 Conditioner Arroz 500 ml SADOER"]
  },
  {
    slug: "pack-arroz-shampoo-y-acondicionador-9110",
    dropiId: 9110,
    nombre: "Pack Arroz Shampoo y Acondicionador",
    corto: "El Pack Arroz Shampoo y Acondicionador reúne dos productos esenciales para una rutina capilar completa enfocada…",
    categoria: "Belleza",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [CDN + "9110/img_6a344d48e66bf7.95992007_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "El Pack Arroz Shampoo y Acondicionador reúne dos productos esenciales para una rutina capilar completa enfocada en limpieza y suavidad.",
    incluye: ["1 Pack Arroz Shampoo y Acondicionador"]
  },
  {
    slug: "suero-barra-acido-hialuronico-7-gr-9140",
    dropiId: 9140,
    nombre: "Suero Barra Ácido Hialuronico 7 gr",
    corto: "Suero Barra Ácido Hialuronico 7 gr.",
    categoria: "Belleza",
    destacado: false,
    precio: 79,
    precioPack: 149,
    imagenes: [
      CDN + "9140/img_6a403a77eb3571.33471165_0.jpg",
      CDN + "9140/17825944268.jpg",
      CDN + "9140/17825944269.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Suero Barra Ácido Hialuronico 7 gr. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Suero Barra Ácido Hialuronico 7 gr"]
  },
  {
    slug: "suero-barra-vitamina-c-7-gr-9141",
    dropiId: 9141,
    nombre: "Suero Barra Vitamina C 7 gr",
    corto: "Este suero en barra con vitamina C ayuda a brindar luminosidad al rostro y a mantener una apariencia fresca y…",
    categoria: "Belleza",
    destacado: false,
    precio: 79,
    precioPack: 149,
    imagenes: [
      CDN + "9141/img_6a403a7979b067.19347728_0.jpg",
      CDN + "9141/178259444412.jpg",
      CDN + "9141/178259444411.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Este suero en barra con vitamina C ayuda a brindar luminosidad al rostro y a mantener una apariencia fresca y radiante.",
    incluye: ["1 Suero Barra Vitamina C 7 gr"]
  },
  {
    slug: "suero-barra-acido-niacinamide-7-gr-9142",
    dropiId: 9142,
    nombre: "Suero Barra Ácido Niacinamide 7 gr",
    corto: "Este suero facial en barra con niacinamida está formulado para complementar la rutina diaria de cuidado facial…",
    categoria: "Belleza",
    destacado: false,
    precio: 79,
    precioPack: 149,
    imagenes: [
      CDN + "9142/178259446314.jpg",
      CDN + "9142/178259446315.jpg",
      CDN + "9142/img_6a403a7c16bd37.65971435_0.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Este suero facial en barra con niacinamida está formulado para complementar la rutina diaria de cuidado facial, ayudando a mejorar la apariencia de la piel y favoreciendo una textura más uniforme.",
    incluye: ["1 Suero Barra Ácido Niacinamide 7 gr"]
  },
  {
    slug: "agua-micelar-acido-hialuronico-350-ml-9153",
    dropiId: 9153,
    nombre: "Agua Micelar Ácido Hialurónico 350 ml",
    corto: "Agua Micelar Ácido Hialurónico 350 ml.",
    categoria: "Belleza",
    destacado: false,
    precio: 79,
    precioPack: 149,
    imagenes: [
      CDN + "9153/178259602946.jpg",
      CDN + "9153/178259489245.jpg",
      CDN + "9153/img_6a403a8f05ad85.24795973_0.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Agua Micelar Ácido Hialurónico 350 ml. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Agua Micelar Ácido Hialurónico 350 ml"]
  },
  {
    slug: "spray-hidratante-a-hialuronico-160-ml-9154",
    dropiId: 9154,
    nombre: "Spray Hidratante Á. Hialurónico 160 ml",
    corto: "Spray Hidratante Á. Hialurónico 160 ml.",
    categoria: "Belleza",
    destacado: false,
    precio: 79,
    precioPack: 149,
    imagenes: [
      CDN + "9154/img_6a403a90796c96.72048063_0.jpg",
      CDN + "9154/178259521247.jpg",
      CDN + "9154/178259521248.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Spray Hidratante Á. Hialurónico 160 ml. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Spray Hidratante Á. Hialurónico 160 ml"]
  },
  {
    slug: "gel-peeling-aloe-vera-100-ml-9158",
    dropiId: 9158,
    nombre: "Gel Peeling Aloe Vera 100 ml",
    corto: "Este gel peeling con aloe vera ayuda a remover suavemente las células muertas e impurezas acumuladas sobre la…",
    categoria: "Belleza",
    destacado: false,
    precio: 79,
    precioPack: 149,
    imagenes: [
      CDN + "9158/img_6a403a963b62e6.44476435_0.jpg",
      CDN + "9158/178259498357.jpg",
      CDN + "9158/178259498358.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Este gel peeling con aloe vera ayuda a remover suavemente las células muertas e impurezas acumuladas sobre la superficie de la piel, favoreciendo una sensación de limpieza y suavidad.",
    incluye: ["1 Gel Peeling Aloe Vera 100 ml"]
  },
  {
    slug: "serum-8-en-1-caviar-40-ml-dr-rashell-9160",
    dropiId: 9160,
    nombre: "Serum 8 en 1 Caviar 40 ml DR RASHELL",
    corto: "Serum 8 en 1 Caviar 40 ml DR RASHELL.",
    categoria: "Belleza",
    destacado: false,
    precio: 89,
    precioPack: 169,
    imagenes: [
      CDN + "9160/178259504164.jpg",
      CDN + "9160/img_6a403a991a78a3.00458741_0.jpg",
      CDN + "9160/178259504163.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Serum 8 en 1 Caviar 40 ml DR RASHELL. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Serum 8 en 1 Caviar 40 ml DR RASHELL"]
  },
  {
    slug: "tonico-facial-rice-200-ml-wokali-9230",
    dropiId: 9230,
    nombre: "Tónico Facial Rice 200 ml WOKALI",
    corto: "Tónico Facial Rice 200 ml WOKALI.",
    categoria: "Belleza",
    destacado: false,
    precio: 89,
    precioPack: 169,
    imagenes: [
      CDN + "9230/1782855780127.jpg",
      CDN + "9230/img_6a442bbd4e7014.53060779_0.jpg",
      CDN + "9230/1782855780126.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Tónico Facial Rice 200 ml WOKALI. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Tónico Facial Rice 200 ml WOKALI"]
  },
  {
    slug: "skin-polish-vitamina-c-100-gr-9169",
    dropiId: 9169,
    nombre: "Skin Polish Vitamina C 100 gr",
    corto: "Skin Polish Vitamina C 100 gr.",
    categoria: "Belleza",
    destacado: false,
    precio: 79,
    precioPack: 149,
    imagenes: [
      CDN + "9169/img_6a403aa7db5049.59659570_0.jpg",
      CDN + "9169/178259525091.jpg",
      CDN + "9169/178259525090.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Skin Polish Vitamina C 100 gr. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Skin Polish Vitamina C 100 gr"]
  },
  {
    slug: "mousse-limpiador-a-hialuronico-125-ml-9171",
    dropiId: 9171,
    nombre: "Mousse Limpiador Á. Hialuronico 125 ml",
    corto: "Mousse Limpiador Á. Hialuronico 125 ml.",
    categoria: "Belleza",
    destacado: false,
    precio: 89,
    precioPack: 169,
    imagenes: [
      CDN + "9171/178259537895.jpg",
      CDN + "9171/178259537896.jpg",
      CDN + "9171/img_6a403aaaa3d061.96676117_0.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Mousse Limpiador Á. Hialuronico 125 ml. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Mousse Limpiador Á. Hialuronico 125 ml"]
  },
  {
    slug: "mousse-limpiador-colageno-125-ml-9172",
    dropiId: 9172,
    nombre: "Mousse Limpiador Colágeno 125 ml",
    corto: "Este mousse limpiador con colágeno ayuda a limpiar profundamente la piel retirando residuos e impurezas…",
    categoria: "Belleza",
    destacado: false,
    precio: 89,
    precioPack: 169,
    imagenes: [
      CDN + "9172/img_6a403aac39ff68.01759354_0.jpg",
      CDN + "9172/178259540297.jpg",
      CDN + "9172/178259540298.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Este mousse limpiador con colágeno ayuda a limpiar profundamente la piel retirando residuos e impurezas mientras proporciona una agradable sensación de suavidad.",
    incluye: ["1 Mousse Limpiador Colágeno 125 ml"]
  },
  {
    slug: "mousse-limpiador-vitamina-c-125-ml-9173",
    dropiId: 9173,
    nombre: "Mousse Limpiador Vitamina C 125 ml",
    corto: "Mousse Limpiador Vitamina C 125 ml.",
    categoria: "Belleza",
    destacado: false,
    precio: 89,
    precioPack: 169,
    imagenes: [
      CDN + "9173/img_6a403aadb1bef9.62770189_0.jpg",
      CDN + "9173/178259542599.jpg",
      CDN + "9173/1782595425100.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Mousse Limpiador Vitamina C 125 ml. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Mousse Limpiador Vitamina C 125 ml"]
  },
  {
    slug: "shampoo-una-de-gato-500-ml-sumaq-9181",
    dropiId: 9181,
    nombre: "Shampoo Uña de Gato 500 ml SUMAQ",
    corto: "Shampoo Uña de Gato 500 ml SUMAQ.",
    categoria: "Mascotas",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [
      CDN + "9181/img_6a404624dff781.43777953_0.jpg",
      CDN + "9181/17825975013.jpg",
      CDN + "9181/17825975012.jpg"
    ],
    beneficios: [
      "Para el bienestar de tu mascota",
      "Práctico y resistente",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Shampoo Uña de Gato 500 ml SUMAQ. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Shampoo Uña de Gato 500 ml SUMAQ"]
  },
  {
    slug: "acondicionador-una-de-gato-500-ml-sumaq-9182",
    dropiId: 9182,
    nombre: "Acondicionador Uña de Gato 500 ml SUMAQ",
    corto: "Acondicionador capilar diseñado para complementar el lavado del cabello, ayudando a desenredar, suavizar y…",
    categoria: "Mascotas",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [
      CDN + "9182/17825975366.jpg",
      CDN + "9182/17825975365.jpg",
      CDN + "9182/img_6a40462686a534.30628588_0.jpg"
    ],
    beneficios: [
      "Para el bienestar de tu mascota",
      "Práctico y resistente",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Acondicionador capilar diseñado para complementar el lavado del cabello, ayudando a desenredar, suavizar y mejorar la manejabilidad después del shampoo.",
    incluye: ["1 Acondicionador Uña de Gato 500 ml SUMAQ"]
  },
  {
    slug: "shampoo-quinua-500-ml-sumaq-9184",
    dropiId: 9184,
    nombre: "Shampoo Quinua 500 ml SUMAQ",
    corto: "Shampoo de quinua formulado para limpiar el cabello y cuero cabelludo, ayudando a retirar impurezas y residuos…",
    categoria: "Belleza",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [
      CDN + "9184/178259765111.jpg",
      CDN + "9184/img_6a40462ad55962.53311155_0.jpg",
      CDN + "9184/178259765112.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Shampoo de quinua formulado para limpiar el cabello y cuero cabelludo, ayudando a retirar impurezas y residuos sin dejar sensación pesada.",
    incluye: ["1 Shampoo Quinua 500 ml SUMAQ"]
  },
  {
    slug: "mascarilla-quinua-500-ml-sumaq-9186",
    dropiId: 9186,
    nombre: "Mascarilla Quinua 500 ml SUMAQ",
    corto: "Mascarilla de quinua pensada para brindar un cuidado más profundo al cabello, ayudando a dejarlo suave…",
    categoria: "Belleza",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [CDN + "9186/img_6a40462dd4e982.11727880_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Mascarilla de quinua pensada para brindar un cuidado más profundo al cabello, ayudando a dejarlo suave, manejable y con una apariencia más nutrida.",
    incluye: ["1 Mascarilla Quinua 500 ml SUMAQ"]
  },
  {
    slug: "acondicionador-kiwicha-500-ml-sumaq-9188",
    dropiId: 9188,
    nombre: "Acondicionador Kiwicha 500 ml SUMAQ",
    corto: "Acondicionador de kiwicha formulado para brindar suavidad y facilitar el desenredo del cabello después del lavado.",
    categoria: "Belleza",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [CDN + "9188/img_6a4046337bdaf6.04814205_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Acondicionador de kiwicha formulado para brindar suavidad y facilitar el desenredo del cabello después del lavado.",
    incluye: ["1 Acondicionador Kiwicha 500 ml SUMAQ"]
  },
  {
    slug: "mascarilla-kiwicha-500-ml-sumaq-9189",
    dropiId: 9189,
    nombre: "Mascarilla Kiwicha 500 ml SUMAQ",
    corto: "Mascarilla de kiwicha diseñada para proporcionar un cuidado intensivo al cabello, ayudando a mejorar su…",
    categoria: "Belleza",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [
      CDN + "9189/img_6a40463502d8c0.14343717_0.jpg",
      CDN + "9189/178259792726.jpg",
      CDN + "9189/178259792727.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Mascarilla de kiwicha diseñada para proporcionar un cuidado intensivo al cabello, ayudando a mejorar su suavidad, textura y manejabilidad.",
    incluye: ["1 Mascarilla Kiwicha 500 ml SUMAQ"]
  },
  {
    slug: "shampoo-sacha-inchi-500-ml-sumaq-9190",
    dropiId: 9190,
    nombre: "Shampoo Sacha Inchi 500 ml SUMAQ",
    corto: "Shampoo Sacha Inchi 500 ml SUMAQ.",
    categoria: "Belleza",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [CDN + "9190/img_6a40463798f852.92063066_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Shampoo Sacha Inchi 500 ml SUMAQ. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Shampoo Sacha Inchi 500 ml SUMAQ"]
  },
  {
    slug: "mascarilla-sacha-inchi-500-ml-sumaq-9192",
    dropiId: 9192,
    nombre: "Mascarilla Sacha Inchi 500 ml SUMAQ",
    corto: "Mascarilla de sacha inchi ideal para brindar un tratamiento intensivo al cabello, ayudando a mejorar su…",
    categoria: "Belleza",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [CDN + "9192/img_6a40463bbc2c89.66236666_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Mascarilla de sacha inchi ideal para brindar un tratamiento intensivo al cabello, ayudando a mejorar su suavidad y manejabilidad.",
    incluye: ["1 Mascarilla Sacha Inchi 500 ml SUMAQ"]
  },
  {
    slug: "aceite-sacha-inchi-60-ml-sumaq-9196",
    dropiId: 9196,
    nombre: "Aceite Sacha Inchi 60 ml SUMAQ",
    corto: "Aceite capilar de sacha inchi en presentación de 60 ml, ideal para complementar la rutina diaria de cuidado del…",
    categoria: "Belleza",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [
      CDN + "9196/178259730850.jpg",
      CDN + "9196/178259730847.jpg",
      CDN + "9196/img_6a404643156ea5.83944662_0.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Aceite capilar de sacha inchi en presentación de 60 ml, ideal para complementar la rutina diaria de cuidado del cabello.",
    incluye: ["1 Aceite Sacha Inchi 60 ml SUMAQ"]
  },
  {
    slug: "tratamiento-maiz-morado-110-ml-sumaq-9198",
    dropiId: 9198,
    nombre: "Tratamiento Maiz Morado 110 ml SUMAQ",
    corto: "Tratamiento capilar de maíz morado diseñado para complementar el cuidado diario del cabello proporcionando una…",
    categoria: "Belleza",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [
      CDN + "9198/img_6a40464732fd72.85031026_0.jpg",
      CDN + "9198/178259744256.jpg",
      CDN + "9198/178259744255.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Tratamiento capilar de maíz morado diseñado para complementar el cuidado diario del cabello proporcionando una agradable sensación de hidratación y suavidad.",
    incluye: ["1 Tratamiento Maiz Morado 110 ml SUMAQ"]
  },
  {
    slug: "crema-reparadora-rice-115-gr-wokali-9206",
    dropiId: 9206,
    nombre: "Crema Reparadora Rice 115 gr WOKALI",
    corto: "La Crema Reparadora Rice 115 gr WOKALI ha sido desarrollada para hidratar intensamente y favorecer la…",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [
      CDN + "9206/img_6a442b89389a32.93228237_0.jpg",
      CDN + "9206/17828548676.jpg",
      CDN + "9206/17828548675.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "La Crema Reparadora Rice 115 gr WOKALI ha sido desarrollada para hidratar intensamente y favorecer la reparación de la barrera natural de la piel.",
    incluye: ["1 Crema Reparadora Rice 115 gr WOKALI"]
  },
  {
    slug: "pack-serum-facial-rice-50-ml-wokali-9212",
    dropiId: 9212,
    nombre: "Pack Serum Facial Rice 50 ml WOKALI",
    corto: "El Pack Serum Facial Rice 50 ml WOKALI reúne los beneficios del extracto de arroz en un tratamiento intensivo…",
    categoria: "Belleza",
    destacado: false,
    precio: 89,
    precioPack: 169,
    imagenes: [
      CDN + "9212/178285500328.jpg",
      CDN + "9212/img_6a442b95c304d3.96201457_0.jpg",
      CDN + "9212/178285618730.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "El Pack Serum Facial Rice 50 ml WOKALI reúne los beneficios del extracto de arroz en un tratamiento intensivo diseñado para hidratar y mejorar la apariencia de la piel.",
    incluye: ["1 Pack Serum Facial Rice 50 ml WOKALI"]
  },
  {
    slug: "mascarilla-rice-x10-und-wokali-9216",
    dropiId: 9216,
    nombre: "Mascarilla Rice x10 Und WOKALI",
    corto: "La Mascarilla Rice x10 Und WOKALI está elaborada con extracto de arroz para proporcionar una hidratación…",
    categoria: "Belleza",
    destacado: false,
    precio: 79,
    precioPack: 149,
    imagenes: [
      CDN + "9216/178285517552.jpg",
      CDN + "9216/img_6a442b9e24d9e6.71000490_0.jpg",
      CDN + "9216/178285517551.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "La Mascarilla Rice x10 Und WOKALI está elaborada con extracto de arroz para proporcionar una hidratación intensiva y mejorar la apariencia de la piel.",
    incluye: ["1 Mascarilla Rice x10 Und WOKALI"]
  },
  {
    slug: "mascarilla-cucumber-x10-und-wokali-9220",
    dropiId: 9220,
    nombre: "Mascarilla Cucumber x10 Und WOKALI",
    corto: "Mascarilla Cucumber x10 Und WOKALI.",
    categoria: "Belleza",
    destacado: false,
    precio: 79,
    precioPack: 149,
    imagenes: [
      CDN + "9220/178285550682.jpg",
      CDN + "9220/img_6a442ba840c723.20403897_0.jpg",
      CDN + "9220/178285550681.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Mascarilla Cucumber x10 Und WOKALI. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Mascarilla Cucumber x10 Und WOKALI"]
  },
  {
    slug: "limpiador-espuma-papaya-150-ml-wokali-9223",
    dropiId: 9223,
    nombre: "Limpiador Espuma Papaya 150 ml WOKALI",
    corto: "Limpiador Espuma Papaya 150 ml WOKALI.",
    categoria: "Belleza",
    destacado: false,
    precio: 79,
    precioPack: 149,
    imagenes: [
      CDN + "9223/img_6a442baf20af10.85594906_0.jpg",
      CDN + "9223/1782855563105.jpg",
      CDN + "9223/1782855563106.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Limpiador Espuma Papaya 150 ml WOKALI. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Limpiador Espuma Papaya 150 ml WOKALI"]
  },
  {
    slug: "limpiador-espuma-acido-h-150-ml-wokali-9227",
    dropiId: 9227,
    nombre: "Limpiador Espuma Ácido H. 150 ml WOKALI",
    corto: "El Limpiador Espuma Ácido Hialurónico 150 ml WOKALI limpia eficazmente el rostro mientras proporciona una…",
    categoria: "Belleza",
    destacado: false,
    precio: 79,
    precioPack: 149,
    imagenes: [
      CDN + "9227/img_6a442bb675d764.78670464_0.jpg",
      CDN + "9227/1782855681117.jpg",
      CDN + "9227/1782855681118.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "El Limpiador Espuma Ácido Hialurónico 150 ml WOKALI limpia eficazmente el rostro mientras proporciona una hidratación adicional gracias a la acción del ácido hialurónico.",
    incluye: ["1 Limpiador Espuma Ácido H. 150 ml WOKALI"]
  },
  {
    slug: "limpiador-espuma-avena-150-ml-wokali-9228",
    dropiId: 9228,
    nombre: "Limpiador Espuma Avena 150 ml WOKALI",
    corto: "Limpiador Espuma Avena 150 ml WOKALI.",
    categoria: "Belleza",
    destacado: false,
    precio: 79,
    precioPack: 149,
    imagenes: [
      CDN + "9228/img_6a442bb915d0a4.48105170_0.jpg",
      CDN + "9228/1782855711121.jpg",
      CDN + "9228/1782855711120.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Limpiador Espuma Avena 150 ml WOKALI. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Limpiador Espuma Avena 150 ml WOKALI"]
  },
  {
    slug: "exfoliante-scrub-leche-170ml-wokali-9231",
    dropiId: 9231,
    nombre: "Exfoliante Scrub Leche 170ml WOKALI",
    corto: "Exfoliante Scrub Leche 170ml WOKALI.",
    categoria: "Belleza",
    destacado: false,
    precio: 59,
    precioPack: 109,
    imagenes: [
      CDN + "9231/img_6a442bc016d105.73505806_0.jpg",
      CDN + "9231/1782855841132.jpg",
      CDN + "9231/1782855840133.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Exfoliante Scrub Leche 170ml WOKALI. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Exfoliante Scrub Leche 170ml WOKALI"]
  },
  {
    slug: "exfoliante-scrub-fresa-320ml-wokali-9234",
    dropiId: 9234,
    nombre: "Exfoliante Scrub Fresa 320ml WOKALI",
    corto: "Exfoliante Scrub Fresa 320ml WOKALI.",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [
      CDN + "9234/img_6a442bc6dfa579.97484759_0.jpg",
      CDN + "9234/1782855956141.jpg",
      CDN + "9234/1782855956142.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Exfoliante Scrub Fresa 320ml WOKALI. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Exfoliante Scrub Fresa 320ml WOKALI"]
  },
  {
    slug: "exfoliante-scrub-colageno-320-ml-wokali-9236",
    dropiId: 9236,
    nombre: "Exfoliante Scrub Colágeno 320 ml WOKALI",
    corto: "El Exfoliante Scrub Colágeno 320 ml WOKALI combina una exfoliación suave con los beneficios del colágeno para…",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [
      CDN + "9236/img_6a442bcc1816b7.66646064_0.jpg",
      CDN + "9236/1782856255148.jpg",
      CDN + "9236/1782856255147.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "El Exfoliante Scrub Colágeno 320 ml WOKALI combina una exfoliación suave con los beneficios del colágeno para ayudar a mantener la piel hidratada, flexible y con una apariencia saludable.",
    incluye: ["1 Exfoliante Scrub Colágeno 320 ml WOKALI"]
  },
  {
    slug: "exfoliante-coffe-500-ml-wokali-9244",
    dropiId: 9244,
    nombre: "Exfoliante Coffe 500 ml WOKALI",
    corto: "Exfoliante Coffe 500 ml WOKALI.",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [
      CDN + "9244/1782855807173.jpg",
      CDN + "9244/1782855807172.jpg",
      CDN + "9244/img_6a442bdc8a42e5.34268726_0.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Exfoliante Coffe 500 ml WOKALI. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Exfoliante Coffe 500 ml WOKALI"]
  },
  {
    slug: "limpiador-bano-antibacterial-450ml-9248",
    dropiId: 9248,
    nombre: "Limpiador Baño Antibacterial 450ml",
    corto: "Limpiador Baño Antibacterial 450ml.",
    categoria: "Hogar",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [
      CDN + "9248/178291902511.jpg",
      CDN + "9248/img_6a452e84825223.77878501_0.jpg",
      CDN + "9248/178291902512.jpg"
    ],
    beneficios: [
      "Práctico y fácil de usar",
      "Ahorra tiempo en casa",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Limpiador Baño Antibacterial 450ml. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Limpiador Baño Antibacterial 450ml"]
  },
  {
    slug: "desengrasante-cocina-limon-450ml-9249",
    dropiId: 9249,
    nombre: "Desengrasante Cocina Limón 450ml",
    corto: "Desengrasante Cocina Limón 450ml.",
    categoria: "Hogar",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [
      CDN + "9249/img_6a452e87402015.50956473_0.jpg",
      CDN + "9249/178291904514.jpg",
      CDN + "9249/178291904515.jpg"
    ],
    beneficios: [
      "Práctico y fácil de usar",
      "Ahorra tiempo en casa",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Desengrasante Cocina Limón 450ml. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Desengrasante Cocina Limón 450ml"]
  },
  {
    slug: "limpiador-para-hornos-schubert-13oz-9250",
    dropiId: 9250,
    nombre: "Limpiador para Hornos Schubert 13oz",
    corto: "El Limpiador para Hornos Schubert 13 oz está especialmente formulado para remover grasa quemada, residuos de…",
    categoria: "Hogar",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [
      CDN + "9250/img_6a452e8a3a1089.54323481_0.jpg",
      CDN + "9250/178291906618.jpg",
      CDN + "9250/178291906617.jpg"
    ],
    beneficios: [
      "Práctico y fácil de usar",
      "Ahorra tiempo en casa",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "El Limpiador para Hornos Schubert 13 oz está especialmente formulado para remover grasa quemada, residuos de alimentos y suciedad incrustada en hornos, parrillas, bandejas y superficies metálicas resistentes.",
    incluye: ["1 Limpiador para Hornos Schubert 13oz"]
  },
  {
    slug: "pack-tutti-frutti-1000-ml-eleve-9260",
    dropiId: 9260,
    nombre: "Pack Tutti Frutti 1000 ml Élevé",
    corto: "El Pack Tutti Frutti 1000 ml Élevé está especialmente formulado para brindar una rutina completa de cuidado…",
    categoria: "Belleza",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [
      CDN + "9260/img_6a46c6a608e576.33446269_0.jpg",
      CDN + "9260/17830951073.jpg",
      CDN + "9260/17830951072.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "El Pack Tutti Frutti 1000 ml Élevé está especialmente formulado para brindar una rutina completa de cuidado capilar que ayuda a mantener el cabello limpio, hidratado y con una apariencia saludable.",
    incluye: ["1 Pack Tutti Frutti 1000 ml Élevé"]
  },
  {
    slug: "tratamiento-tutti-frutti-1kg-eleve-9261",
    dropiId: 9261,
    nombre: "Tratamiento Tutti Frutti 1Kg Élevé",
    corto: "El Tratamiento Tutti Frutti 1 Kg Élevé ofrece una hidratación intensiva diseñada para restaurar la suavidad y…",
    categoria: "Belleza",
    destacado: false,
    precio: 89,
    precioPack: 169,
    imagenes: [
      CDN + "9261/img_6a46c6a91de9f0.26796139_0.jpg",
      CDN + "9261/17830952096.jpg",
      CDN + "9261/17830952095.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "El Tratamiento Tutti Frutti 1 Kg Élevé ofrece una hidratación intensiva diseñada para restaurar la suavidad y vitalidad del cabello.",
    incluye: ["1 Tratamiento Tutti Frutti 1Kg Élevé"]
  },
  {
    slug: "kit-tutti-frutti-2kg-eleve-9262",
    dropiId: 9262,
    nombre: "Kit Tutti Frutti 2Kg Élevé",
    corto: "El Kit Tutti Frutti 2 Kg Élevé reúne productos diseñados para proporcionar una rutina completa de limpieza…",
    categoria: "Belleza",
    destacado: false,
    precio: 139,
    precioPack: 259,
    imagenes: [
      CDN + "9262/img_6a46c6abc1b4d6.72034959_0.jpg",
      CDN + "9262/17830952559.jpg",
      CDN + "9262/17830952558.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "El Kit Tutti Frutti 2 Kg Élevé reúne productos diseñados para proporcionar una rutina completa de limpieza, hidratación y nutrición capilar.",
    incluye: ["1 Kit Tutti Frutti 2Kg Élevé"]
  },
  {
    slug: "kit-morango-2kg-eleve-9268",
    dropiId: 9268,
    nombre: "Kit Morango 2Kg Élevé",
    corto: "El Kit Morango 2 Kg Élevé reúne productos formulados para ofrecer una rutina completa de limpieza, hidratación…",
    categoria: "Belleza",
    destacado: false,
    precio: 139,
    precioPack: 259,
    imagenes: [
      CDN + "9268/178309513427.jpg",
      CDN + "9268/img_6a46c6bcbeb9a9.48178482_0.jpg",
      CDN + "9268/178309513426.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "El Kit Morango 2 Kg Élevé reúne productos formulados para ofrecer una rutina completa de limpieza, hidratación y nutrición del cabello.",
    incluye: ["1 Kit Morango 2Kg Élevé"]
  },
  {
    slug: "pack-uva-1000-ml-eleve-9269",
    dropiId: 9269,
    nombre: "Pack Uva 1000 ml Élevé",
    corto: "El Pack Uva 1000 ml Élevé está diseñado para proporcionar una limpieza suave y una hidratación profunda que…",
    categoria: "Belleza",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [
      CDN + "9269/178309518429.jpg",
      CDN + "9269/178309518430.jpg",
      CDN + "9269/img_6a46c6be6c38f9.78052104_0.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "El Pack Uva 1000 ml Élevé está diseñado para proporcionar una limpieza suave y una hidratación profunda que ayudan a mantener el cabello saludable y con brillo natural.",
    incluye: ["1 Pack Uva 1000 ml Élevé"]
  },
  {
    slug: "tratamiento-uva-1kg-eleve-9270",
    dropiId: 9270,
    nombre: "Tratamiento Uva 1Kg Élevé",
    corto: "El Tratamiento Uva 1 Kg Élevé ofrece una hidratación profunda que ayuda a restaurar la suavidad y el brillo…",
    categoria: "Belleza",
    destacado: false,
    precio: 89,
    precioPack: 169,
    imagenes: [
      CDN + "9270/img_6a46c6c19196f7.96005891_0.jpg",
      CDN + "9270/178309555333.jpg",
      CDN + "9270/178309555332.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "El Tratamiento Uva 1 Kg Élevé ofrece una hidratación profunda que ayuda a restaurar la suavidad y el brillo natural del cabello.",
    incluye: ["1 Tratamiento Uva 1Kg Élevé"]
  },
  {
    slug: "kit-uva-2kg-eleve-9271",
    dropiId: 9271,
    nombre: "Kit Uva 2Kg Élevé",
    corto: "El Kit Uva 2 Kg Élevé reúne los productos necesarios para ofrecer una rutina completa de limpieza, hidratación…",
    categoria: "Belleza",
    destacado: false,
    precio: 139,
    precioPack: 259,
    imagenes: [CDN + "9271/img_6a46c6c44a7bc7.98125044_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "El Kit Uva 2 Kg Élevé reúne los productos necesarios para ofrecer una rutina completa de limpieza, hidratación y nutrición capilar.",
    incluye: ["1 Kit Uva 2Kg Élevé"]
  },
  {
    slug: "pack-sandia-1000-ml-eleve-9272",
    dropiId: 9272,
    nombre: "Pack Sandía 1000 ml Élevé",
    corto: "Pack Sandía 1000 ml Élevé.",
    categoria: "Belleza",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [
      CDN + "9272/178309522838.jpg",
      CDN + "9272/img_6a46c6c76be693.25474576_0.jpg",
      CDN + "9272/178309522839.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Pack Sandía 1000 ml Élevé. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Pack Sandía 1000 ml Élevé"]
  },
  {
    slug: "tratamiento-sandia-1kg-eleve-9273",
    dropiId: 9273,
    nombre: "Tratamiento Sandía 1Kg Élevé",
    corto: "El Tratamiento Sandía 1 Kg Élevé proporciona un cuidado intensivo diseñado para hidratar profundamente el…",
    categoria: "Belleza",
    destacado: false,
    precio: 89,
    precioPack: 169,
    imagenes: [
      CDN + "9273/img_6a46c6ca2a2e90.75198875_0.jpg",
      CDN + "9273/178309571542.jpg",
      CDN + "9273/178309571541.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "El Tratamiento Sandía 1 Kg Élevé proporciona un cuidado intensivo diseñado para hidratar profundamente el cabello y devolverle su suavidad natural.",
    incluye: ["1 Tratamiento Sandía 1Kg Élevé"]
  },
  {
    slug: "kit-santa-bomba-3kg-eleve-9277",
    dropiId: 9277,
    nombre: "Kit Santa Bomba 3Kg Élevé",
    corto: "El Kit Santa Bomba 3 Kg Élevé proporciona una rutina completa de cuidado capilar enfocada en fortalecer…",
    categoria: "Belleza",
    destacado: false,
    precio: 159,
    precioPack: 289,
    imagenes: [
      CDN + "9277/img_6a46c6d4dffd17.83755404_0.jpg",
      CDN + "9277/178309544954.jpg",
      CDN + "9277/178309544953.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "El Kit Santa Bomba 3 Kg Élevé proporciona una rutina completa de cuidado capilar enfocada en fortalecer, hidratar y revitalizar el cabello.",
    incluye: ["1 Kit Santa Bomba 3Kg Élevé"]
  },
  {
    slug: "pack-semi-di-lino-600-ml-eleve-9278",
    dropiId: 9278,
    nombre: "Pack Semi Di Lino 600 ml Élevé",
    corto: "El Pack Semi Di Lino 600 ml Élevé está formulado para proporcionar una hidratación equilibrada y un cuidado…",
    categoria: "Belleza",
    destacado: false,
    precio: 109,
    precioPack: 199,
    imagenes: [CDN + "9278/img_6a46c6d7b0f1b7.95110520_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "El Pack Semi Di Lino 600 ml Élevé está formulado para proporcionar una hidratación equilibrada y un cuidado completo del cabello.",
    incluye: ["1 Pack Semi Di Lino 600 ml Élevé"]
  },
  {
    slug: "tratamiento-semi-di-lino-1kg-eleve-9279",
    dropiId: 9279,
    nombre: "Tratamiento Semi Di Lino 1Kg Élevé",
    corto: "El Tratamiento Semi Di Lino 1 Kg Élevé brinda una nutrición intensiva que ayuda a restaurar la hidratación y…",
    categoria: "Belleza",
    destacado: false,
    precio: 89,
    precioPack: 169,
    imagenes: [
      CDN + "9279/img_6a46c6d9975126.71915608_0.jpg",
      CDN + "9279/178309532059.jpg",
      CDN + "9279/178309532060.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "El Tratamiento Semi Di Lino 1 Kg Élevé brinda una nutrición intensiva que ayuda a restaurar la hidratación y suavidad del cabello.",
    incluye: ["1 Tratamiento Semi Di Lino 1Kg Élevé"]
  },
  {
    slug: "espuma-multiuso-650-ml-schubert-9378",
    dropiId: 9378,
    nombre: "Espuma Multiuso 650 ml - SCHUBERT",
    corto: "Limpieza práctica y efectiva para diferentes superficies.",
    categoria: "Hogar",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [
      CDN + "9378/5e71f46d-0f64-48bd-b32c-473d0de2e15f.jpg",
      CDN + "9378/f5d5c1ba-f78b-4bbd-a9fa-c2026416328c.jpg",
      CDN + "9378/836ca0e6-72f3-4ad5-9008-6161e61e41d8.jpg"
    ],
    beneficios: [
      "Presentación de 650 ml",
      "Fórmula en espuma para una aplicación práctica",
      "Ayuda a remover suciedad y manchas superficiales",
      "Fácil y cómoda de aplicar"
    ],
    descripcion: "Limpieza práctica y efectiva para diferentes superficies. Una solución práctica para mantener tus espacios limpios y cuidados.",
    incluye: ["1 Espuma Multiuso 650 ml - SCHUBERT"]
  },
  {
    slug: "soporte-utensilios-1446",
    dropiId: 1446,
    nombre: "Soporte utensilios",
    corto: "Tiene 4 divisiones para ordenarlos utensilios y dejarlos escurrir.",
    categoria: "Hogar",
    destacado: false,
    precio: 39,
    precioPack: 68,
    imagenes: [
      CDN + "1446/1704918102soportecucharon15.webp",
      CDN + "1446/1704918102soportecucharon10.webp"
    ],
    beneficios: [
      "—Material: Polipropileno",
      "—Medidas: 12.7 largo cm x 14.3 ancho cm x 5 alto cm*"
    ],
    descripcion: "Tiene 4 divisiones para ordenarlos utensilios y dejarlos escurrir.",
    incluye: ["1 Soporte utensilios"]
  },
  {
    slug: "cartera-bolso-de-hombro-con-cierre-3627",
    dropiId: 3627,
    nombre: "Cartera bolso de hombro con cierre",
    corto: "Diseño multibolsillo para poder organizar mejor tus artículos",
    categoria: "Moda",
    destacado: false,
    precio: 89,
    precioPack: 169,
    imagenes: [
      CDN + "3627/17174719511.png",
      CDN + "3627/17174719516.png",
      CDN + "3627/17174719513.png"
    ],
    beneficios: [
      "Material: Poliéster",
      "Forro: Poliéster",
      "Medidas Aprox: 30*30*12cm",
      "Cierre: Nylon"
    ],
    descripcion: "Diseño multibolsillo para poder organizar mejor tus artículos:",
    incluye: ["1 Cartera bolso de hombro con cierre"]
  },
  {
    slug: "mochila-cuero-pu-elegante-3667",
    dropiId: 3667,
    nombre: "Mochila cuero pu elegante",
    corto: "Diseño multibolsillo para poder organizar mejor tus artículos",
    categoria: "Moda",
    destacado: false,
    precio: 129,
    precioPack: 239,
    imagenes: [
      CDN + "3667/17177986621.png",
      CDN + "3667/17177986622.png",
      CDN + "3667/17177986625.png"
    ],
    beneficios: [
      "Material: Cuero PU",
      "Forro: Poliéster",
      "Medidas Aprox: 42*18*28 CM",
      "Cierre: Nylon"
    ],
    descripcion: "Diseño multibolsillo para poder organizar mejor tus artículos:",
    incluye: ["1 Mochila cuero pu elegante"]
  },
  {
    slug: "mochila-unisex-denim-urbano-con-hebillas-4161",
    dropiId: 4161,
    nombre: "Mochila unisex denim urbano con hebillas",
    corto: "Diseño multibolsillo para poder organizar mejor tus artículos",
    categoria: "Moda",
    destacado: false,
    precio: 209,
    precioPack: 379,
    imagenes: [
      CDN + "4161/17247705764.jpg",
      CDN + "4161/17247705762.jpg",
      CDN + "4161/17247705761.jpg"
    ],
    beneficios: [
      "Material: Denim",
      "Detalles: Cuero PU",
      "Forro: Poliéster",
      "Medidas Aprox: 25*12*40 cm"
    ],
    descripcion: "Diseño multibolsillo para poder organizar mejor tus artículos:",
    incluye: ["1 Mochila unisex denim urbano con hebillas"]
  },
  {
    slug: "mochila-pequena-jardin-para-ninas-4990",
    dropiId: 4990,
    nombre: "Mochila pequeña jardin para niñas",
    corto: "Mochila pequeña jardin para niñas.",
    categoria: "Moda",
    destacado: false,
    precio: 49,
    precioPack: 89,
    imagenes: [
      CDN + "4990/1735079245c5b3232378f1d463ea52d3b63f4e9b97.webp",
      CDN + "4990/173507924511477727-881f-4216-94ed-cdafbe9398c0.8466c8487a648882024cdd217e78f332.webp",
      CDN + "4990/1735079245O1CN01YLA18G1x8KnH5zvAv_!!2214155996398-0-cib.jpg"
    ],
    beneficios: [
      "Material: Poliéster",
      "Medidas Aprox: 23*20*9 cm",
      "Abertura: Cierre (cremallera)",
      "1 compartimiento frontal con cierre"
    ],
    descripcion: "Mochila pequeña jardin para niñas. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Mochila pequeña jardin para niñas"]
  },
  {
    slug: "mochila-coreana-fresh-look-5028",
    dropiId: 5028,
    nombre: "Mochila coreana fresh look",
    corto: "Mochila coreana fresh look.",
    categoria: "Moda",
    destacado: false,
    precio: 139,
    precioPack: 259,
    imagenes: [
      CDN + "5028/1735258479O1CN01FRalLm1LalznbBUDC_!!2214177001316-0-cib.jpg",
      CDN + "5028/1735258479O1CN01w5viZN1LalzpvNmuk_!!2214177001316-0-cib.jpg",
      CDN + "5028/1735258479O1CN01q1w1fe1LalzrCpmGG_!!2214177001316-0-cib.jpg"
    ],
    beneficios: [
      "Material: Oxford",
      "No incluye llavero",
      "Forro: Poliéster",
      "Medidas Aprox: 40*12*30 cm"
    ],
    descripcion: "Mochila coreana fresh look. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Mochila coreana fresh look"]
  },
  {
    slug: "mochila-bunny-oficio-con-2-ruedas-5947",
    dropiId: 5947,
    nombre: "Mochila bunny oficio con 2 ruedas",
    corto: "Mochila bunny oficio con 2 ruedas.",
    categoria: "Moda",
    destacado: false,
    precio: 259,
    precioPack: 469,
    imagenes: [
      CDN + "5947/1738374410O1CN01XaL4sp2APMc3Kw3an_!!2211880568195-0-cib.jpg",
      CDN + "5947/1738448953o9ivaIQwzW-Xpgvf.jpg",
      CDN + "5947/1738448953Tzru39PuUdZORpMz.jpg"
    ],
    beneficios: [
      "Material: Nylon",
      "Forro: Poliéster",
      "Base: 2 Ruedas",
      "Medidas Aprox: 29*16*40 cm"
    ],
    descripcion: "Mochila bunny oficio con 2 ruedas. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Mochila bunny oficio con 2 ruedas"]
  },
  {
    slug: "serum-up-serum-de-pestanas-6260",
    dropiId: 6260,
    nombre: "Serum up - serum de pestañas",
    corto: "Aceite de ricino: Nutre e hidrata las pestañas, previniendo la caída y fortaleciendo los folículos pilosos.",
    categoria: "Belleza",
    destacado: false,
    precio: 49,
    precioPack: 89,
    imagenes: [
      CDN + "6260/1741362181Img%201%20serum%20pesta%C3%B1as.jpg",
      CDN + "6260/1741362181Img%202%20serum%20pesta%C3%B1as.jpg",
      CDN + "6260/1741362181Nueva%20imagen%20marca%20de%20agua.jpg"
    ],
    beneficios: [
      "Formulado con una combinación de ingredientes naturales y efectivos",
      "Promueve el crecimiento de las pestañas, haciéndolas más largas y densas",
      "Fortalece las pestañas, reduciendo la caída y la rotura",
      "Hidrata y nutre las pestañas, mejorando su salud y aspecto"
    ],
    descripcion: "Aceite de ricino: Nutre e hidrata las pestañas, previniendo la caída y fortaleciendo los folículos pilosos. Vitamina E: Antioxidante que protege las pestañas del daño causado por los radicales libres, contribuyendo a su crecimiento y salud.",
    incluye: ["1 Serum up - serum de pestañas"]
  },
  {
    slug: "cerave-crema-hidrat-repara-de-manos-50ml-7100",
    dropiId: 7100,
    nombre: "CeraVe Crema Hidrat Repara de Manos 50ml",
    corto: "Cuidado intensivo para manos secas y agrietadas.",
    categoria: "Belleza",
    destacado: false,
    precio: 109,
    precioPack: 199,
    imagenes: [
      CDN + "7100/1750993133DER161_a541ef09-6dd4-44eb-858c-79fb152753ca.webp",
      CDN + "7100/1750993133DER-6.webp",
      CDN + "7100/1750993133DER161-06_7d35670b-1e5b-4243-80b0-6fd9f8c6ac5e.webp"
    ],
    beneficios: [
      "CeraVe Crema Hidratante Reparadora de Manos 50ml – Manos Suaves y Protegidas",
      "Repara y alivia la piel seca y dañada",
      "Hidratación duradera con ácido hialurónico",
      "Refuerza la barrera cutánea con ceramidas"
    ],
    descripcion: "Cuidado intensivo para manos secas y agrietadas. Aplicar sobre las manos limpias, tantas veces como sea necesario a lo largo del día, especialmente después del lavado.",
    incluye: ["1 CeraVe Crema Hidrat Repara de Manos 50ml"]
  },
  {
    slug: "evil-goods-8260",
    dropiId: 8260,
    nombre: "Evil goods",
    corto: "Descubre el poder de los ingredientes naturales con este bálsamo facial y corporal elaborado a base de sebo de…",
    categoria: "Belleza",
    destacado: false,
    precio: 59,
    precioPack: 109,
    imagenes: [
      CDN + "8260/177566174071HMKgs7pVL._AC_UF1000,1000_QL80_.jpg",
      CDN + "8260/1775661740D_NQ_NP_667642-MLM89528345740_082025-O.webp",
      CDN + "8260/1775661740images%20(1).jpg"
    ],
    beneficios: [
      "Hidratación profunda y duradera",
      "Ayuda a reducir acné y brotes",
      "Disminuye manchas y marcas",
      "Mejora la elasticidad de la piel"
    ],
    descripcion: "Descubre el poder de los ingredientes naturales con este bálsamo facial y corporal elaborado a base de sebo de res y miel. A diferencia de las cremas convencionales, este producto utiliza ingredientes biocompatibles con la piel, permitiendo una absorción rápida y resultados visibles en poco tiempo.",
    incluye: ["1 Evil goods"]
  },
  {
    slug: "tonico-facial-vitamina-c-100-ml-9167",
    dropiId: 9167,
    nombre: "Tónico Facial Vitamina C 100 ml",
    corto: "Tónico Facial Vitamina C 100 ml.",
    categoria: "Belleza",
    destacado: false,
    precio: 79,
    precioPack: 149,
    imagenes: [
      CDN + "9167/178259532784.jpg",
      CDN + "9167/img_6a403aa4f29d14.28617672_0.jpg",
      CDN + "9167/178259532785.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Tónico Facial Vitamina C 100 ml. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Tónico Facial Vitamina C 100 ml"]
  },
  {
    slug: "kit-semi-di-lino-1-6kg-eleve-9280",
    dropiId: 9280,
    nombre: "Kit Semi Di Lino 1.6Kg Élevé",
    corto: "El Kit Semi Di Lino 1.6 Kg Élevé reúne una completa rutina de cuidado capilar diseñada para limpiar, hidratar y…",
    categoria: "Belleza",
    destacado: false,
    precio: 159,
    precioPack: 289,
    imagenes: [
      CDN + "9280/img_6a46c6dc7c82b4.64112396_0.jpg",
      CDN + "9280/178309540663.jpg",
      CDN + "9280/178309540662.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "El Kit Semi Di Lino 1.6 Kg Élevé reúne una completa rutina de cuidado capilar diseñada para limpiar, hidratar y nutrir el cabello desde la raíz hasta las puntas.",
    incluye: ["1 Kit Semi Di Lino 1.6Kg Élevé"]
  },
  {
    slug: "organizador-de-exhibicion-3097",
    dropiId: 3097,
    nombre: "Organizador de exhibición",
    corto: "Organizador de exhibición.",
    categoria: "Tech",
    destacado: false,
    precio: 39,
    precioPack: 68,
    imagenes: [
      CDN + "3097/17120047891000756607.jpg",
      CDN + "3097/17120047891000756565.jpg",
      CDN + "3097/17120047891000756569.jpg"
    ],
    beneficios: [
      "Fácil de usar",
      "Ideal para regalar",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Organizador de exhibición. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Organizador de exhibición"]
  },
  {
    slug: "cortador-de-vidrio-eco-8747",
    dropiId: 8747,
    nombre: "Cortador de Vidrio Eco",
    corto: "Cortador de Vidrio Eco.",
    categoria: "Herramientas",
    destacado: false,
    precio: 89,
    precioPack: 169,
    imagenes: [CDN + "8747/img_6a1223656f1933.40400415_0.png"],
    beneficios: [
      "Resistente y práctico",
      "Para casa y trabajos",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Cortador de Vidrio Eco. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Cortador de Vidrio Eco"]
  },
  {
    slug: "mochila-mujer-plumas-con-llavero-3619",
    dropiId: 3619,
    nombre: "Mochila mujer plumas con llavero",
    corto: "Diseño multibolsillo para poder organizar mejor tus artículos",
    categoria: "Moda",
    destacado: false,
    precio: 109,
    precioPack: 199,
    imagenes: [
      CDN + "3619/17174684424.png",
      CDN + "3619/17174684425.png",
      CDN + "3619/17174684426.png"
    ],
    beneficios: [
      "Material: Poliéster",
      "Forro: Poliéster",
      "Medidas Aprox: 31*27*13cm",
      "Cierre: Nylon"
    ],
    descripcion: "Diseño multibolsillo para poder organizar mejor tus artículos:",
    incluye: ["1 Mochila mujer plumas con llavero"]
  },
  {
    slug: "mochila-deportiva-con-cierre-3665",
    dropiId: 3665,
    nombre: "Mochila deportiva con cierre",
    corto: "Diseño multibolsillo para poder organizar mejor tus artículos",
    categoria: "Moda",
    destacado: false,
    precio: 139,
    precioPack: 259,
    imagenes: [
      CDN + "3665/17177975871.png",
      CDN + "3665/17177975876.png",
      CDN + "3665/17177975872.png"
    ],
    beneficios: [
      "Material: Poliéster",
      "Forro: Poliéster",
      "Medidas Aprox: 41*16*27 CM",
      "Cierre: Nylon"
    ],
    descripcion: "Diseño multibolsillo para poder organizar mejor tus artículos:",
    incluye: ["1 Mochila deportiva con cierre"]
  },
  {
    slug: "i8-pro-max-relog-inteligente-smartwatch-7382",
    dropiId: 7382,
    nombre: "i8 Pro Max Relog inteligente Smartwatch",
    corto: "i8 Pro Max Relog inteligente Smartwatch.",
    categoria: "Tech",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [
      CDN + "7382/1752666006I8%203.png",
      CDN + "7382/1752666006I8%201.png",
      CDN + "7382/1752666006I8%204.png"
    ],
    beneficios: [
      "Pantalla: IPS 1.75″, táctil, buena visibilidad exterior",
      "Diseño: Estilo Apple Watch, cuerpo metálico y corona funcional",
      "Resistencia: IP67, soporta sudor y salpicaduras",
      "Batería: 220–300 mAh, varios días de autonomía"
    ],
    descripcion: "i8 Pro Max Relog inteligente Smartwatch. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 i8 Pro Max Relog inteligente Smartwatch"]
  },
  {
    slug: "cera-01-white-150-ml-bandido-8716",
    dropiId: 8716,
    nombre: "Cera 01 White 150 ml - BANDIDO",
    corto: "La Cera 01 White de BANDIDO proporciona una fijación fuerte y duradera para mantener el peinado firme durante…",
    categoria: "Belleza",
    destacado: false,
    precio: 69,
    precioPack: 129,
    imagenes: [CDN + "8716/img_6a10ba3d5ae641.01130987_0.jpg"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "La Cera 01 White de BANDIDO proporciona una fijación fuerte y duradera para mantener el peinado firme durante todo el día.",
    incluye: ["1 Cera 01 White 150 ml - BANDIDO"]
  },
  {
    slug: "gel-limpiador-for-mens-168-ml-apolodios-9097",
    dropiId: 9097,
    nombre: "Gel Limpiador For Mens 168 ml APOLODIOS",
    corto: "El Gel Limpiador For Mens 168 ml APOLODIOS está diseñado para limpiar la piel de manera efectiva, ayudando a…",
    categoria: "Belleza",
    destacado: false,
    precio: 79,
    precioPack: 149,
    imagenes: [
      CDN + "9097/3844a4c4-8583-4354-83ec-92d69df25016.jpg",
      CDN + "9097/img_6a344d2b71da68.81867287_0.jpg",
      CDN + "9097/f7148343-4a75-4ed7-b996-a7ccb9eb9a85.jpg"
    ],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "El Gel Limpiador For Mens 168 ml APOLODIOS está diseñado para limpiar la piel de manera efectiva, ayudando a remover impurezas, exceso de grasa y residuos acumulados durante el día.",
    incluye: ["1 Gel Limpiador For Mens 168 ml APOLODIOS"]
  },
  {
    slug: "combo-belleza-6674",
    dropiId: 6674,
    nombre: "Combo belleza",
    corto: "Combo belleza. Producto seleccionado por VISUAL Store.",
    categoria: "Belleza",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [CDN + "6674/1745870444Captura%20de%20pantalla%202025-04-28%20145823.png"],
    beneficios: [
      "Fácil de usar en casa",
      "Para tu rutina diaria",
      "Pagas al recibir",
      "Envío gratis"
    ],
    descripcion: "Combo belleza. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Combo belleza"]
  },
  {
    slug: "producto-simple-9312",
    dropiId: 9312,
    nombre: "Producto simple",
    corto: "Producto simple. Producto seleccionado por VISUAL Store.",
    categoria: "Tech",
    destacado: false,
    precio: 209,
    precioPack: 379,
    imagenes: [
      CDN + "9312/1785271556psimple.webp",
      CDN + "9312/1785271556zapatosvans.png"
    ],
    beneficios: [
      "Producto simple regresion produccion",
      "Producto simple regresion produccion",
      "Producto simple regresion produccion",
      "Producto simple regresion produccion"
    ],
    descripcion: "Producto simple. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Producto simple"]
  },
  {
    slug: "kuic1-9428",
    dropiId: 9428,
    nombre: "Kuic1",
    corto: "Éxito comprobado en Ecuador: Miles de familias ya confían en KreceUP para el crecimiento de sus hijos.",
    categoria: "Bienestar",
    destacado: false,
    precio: 139,
    precioPack: 259,
    imagenes: [
      CDN + "9428/7f4c3234-7ef4-4496-a44c-43b4a188b307.jpg",
      CDN + "9428/1574f4bb-b314-47c2-9351-ea4368c1690d.jpg"
    ],
    beneficios: [
      "¡KreceUP llega a Perú! El producto ganador de Ecuador",
      "REGISTRO SHALOM: AGENCIA SURQUILLO(REPUBLICA DE PANAMA)",
      "¿Por qué vender KreceUP?",
      "Formulación 100% natural: L-Arginina + Zinc = Crecimiento saludable y sin efectos"
    ],
    descripcion: "Éxito comprobado en Ecuador: Miles de familias ya confían en KreceUP para el crecimiento de sus hijos.",
    incluye: ["1 Kuic1"]
  },
  {
    slug: "protector-para-puerta-1441",
    dropiId: 1441,
    nombre: "Protector para puerta",
    corto: "Protector para puerta.",
    categoria: "Hogar",
    destacado: false,
    precio: 39,
    precioPack: 68,
    imagenes: [
      CDN + "1441/1704917018puerta9.jpg",
      CDN + "1441/1704917018puerta7.jpg",
      CDN + "1441/1704917018puerta8.jpg"
    ],
    beneficios: [
      "—Medidas: 93 cm largo",
      "—Material: espuma de va",
      "—Color: Negro, Gris, Marrón y Blanco"
    ],
    descripcion: "Protector para puerta. Producto seleccionado por VISUAL Store. Pídelo hoy y paga recién cuando te llega.",
    incluye: ["1 Protector para puerta"]
  },
  {
    slug: "mochila-mujer-bolsillo-delantero-3629",
    dropiId: 3629,
    nombre: "Mochila mujer bolsillo delantero",
    corto: "Diseño multibolsillo para poder organizar mejor tus artículos",
    categoria: "Moda",
    destacado: false,
    precio: 99,
    precioPack: 179,
    imagenes: [
      CDN + "3629/17175471941.png",
      CDN + "3629/17175471942.png",
      CDN + "3629/17175471943.png"
    ],
    beneficios: [
      "Material: Oxford",
      "Forro: Poliéster",
      "Medidas Aprox: 33*26*12cm",
      "Cierre: Nylon"
    ],
    descripcion: "Diseño multibolsillo para poder organizar mejor tus artículos:",
    incluye: ["1 Mochila mujer bolsillo delantero"]
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
