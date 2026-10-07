/* ============================================================
   VISUAL Store — CATÁLOGO
   Cada producto: precio unitario, precio del pack x2, fotos y textos.
   "dropiId" es el ID del producto en Dropi (para cargar el pedido).
   Las fotos vienen del catálogo de Dropi; reemplázalas por fotos
   propias (súbelas al repositorio) cuando las tengas.
   ============================================================ */
const CDN = "https://d39ru7awumhhs2.cloudfront.net/peru/products/";

window.PRODUCTS = [
  {
    slug: "masajeador-de-pies",
    dropiId: 6464,
    nombre: "Masajeador de pies eléctrico",
    corto: "Alivio para tus pies después de un día largo, en casa o en la oficina.",
    categoria: "Bienestar",
    destacado: true,
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
