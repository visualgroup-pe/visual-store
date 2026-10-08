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
