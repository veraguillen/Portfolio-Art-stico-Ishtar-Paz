export interface Work {
  slug: string
  title: string
  year: string
  category: "Escena" | "Artes Visuales" | "Objetos"
  venue: string
  director: string
  author: string
  description: string
  longDescription?: string
  image: string
  gallery: string[]
  cast?: string
  awards?: string
  credits: {
    role: string
    name: string
  }[]
}

export const works: Work[] = [
  {
    slug: "el-banquete-de-las-yeguas",
    title: "El Banquete de las Yeguas",
    year: "2025",
    category: "Artes Visuales",
    venue: "Trabajo en proceso",
    director: "Ishtar Paz Pineda",
    author: "Ishtar Paz Pineda",
    description:
      "Instalación tecnológica inmersiva e interactiva que reexamina radicalmente la construcción social de la feminidad. Se centra en la figura de una Yegua Antropomórfica cuya narrativa subvierte los mitos fundacionales, transformándola de víctima en una fuerza vengadora que encarna la disidencia femenina.",
    longDescription:
      "El clímax, \"El Festín\", es un festín caníbal metafórico (y literal) de la carne del patriarcado, una celebración oscura de la furia femenina devoradora. Al integrar medios interactivos y mitología antigua, el proyecto transita del biodrama a la performance tecnológica, situando la obra en el centro de los debates actuales sobre el posthumanismo, las políticas de género y la agencia escénica.",
    image: "/assets/images/works/yegua/1.png",
    gallery: [
      "/assets/images/works/yegua/4.png",
      "/assets/images/works/yegua/6.png",
      "/assets/images/works/yegua/2.png",
      "/assets/images/works/yegua/3.png",
      "/assets/images/works/yegua/5.png",
    ],
    credits: [{ role: "Dirección y Dramaturgia", name: "Ishtar Paz Pineda" }],
  },
  {
    slug: "fragmentos-de-existencia",
    title: "Fragmentos de Existencia",
    year: "2025",
    category: "Artes Visuales",
    venue: "Cortometraje experimental / Videoarte",
    director: "Ishtar Paz Pineda",
    author: "Ishtar Paz Pineda",
    description:
      "A través de un viejo monitor, la piel y el pulso de la tierra se fragmentan en un ensayo poético sobre la memoria y la identidad. La obra es un espejo donde lo orgánico choca con lo tecnológico; un eco visual sobre las raíces y las cicatrices que nos definen.",
    image: "/assets/images/works/fragmentos/1.png",
    gallery: [
      "/assets/images/works/fragmentos/1.png",
      "/assets/images/works/fragmentos/2.png",
      "/assets/images/works/fragmentos/3.png",
      "/assets/images/works/fragmentos/4.png",
    ],
    credits: [{ role: "Dirección y Guión", name: "Ishtar Paz Pineda" }],
  },
  {
    slug: "la-casa-de-las-perras-viajeras",
    title: "La Casa de las Perras Viajeras",
    year: "2023",
    category: "Escena",
    venue: "UNA — Universidad Nacional de las Artes, Argentina",
    director: "Ishtar Paz Pineda",
    author: "Ishtar Paz Pineda",
    description:
      "Biodrama que narra la vida de dos mujeres migrantes y lesbianas. Explora sus trayectorias vitales, el descubrimiento de su sexualidad y un viaje compartido por Latinoamérica a bordo de una Volkswagen Kombi de 1998, acompañadas por su perra husky, Julia.",
    longDescription:
      "La narrativa abarca desde experiencias de infancia hasta haber vivido un golpe de estado y una dictadura del siglo XXI, enmarcando la historia personal en un contexto político volátil. La obra se centra en temas de resiliencia, identidad disidente y la urgencia de crear una familia nómada elegida.",
    image: "/assets/images/works/casa-perras-viajeras/1.png",
    gallery: [
      "/assets/images/works/casa-perras-viajeras/1.png",
      "/assets/images/works/casa-perras-viajeras/2.png",
      "/assets/images/works/casa-perras-viajeras/3.png",
      "/assets/images/works/casa-perras-viajeras/4.png",
      "/assets/images/works/casa-perras-viajeras/5.png",
      "/assets/images/works/casa-perras-viajeras/6.png",
    ],
    credits: [
      { role: "Dirección / Codramaturgia / Performer", name: "Ishtar Paz Pineda" },
    ],
  },
  {
    slug: "huellas",
    title: "Huellas",
    year: "2022",
    category: "Artes Visuales",
    venue: "Honduras",
    director: "Ishtar Paz Pineda",
    author: "Ishtar Paz Pineda",
    description:
      "Documental audiovisual compuesto por cinco cortometrajes que explora el impacto de la muerte materna en la vida de cinco mujeres hondureñas. El proyecto documenta las huellas que deja la pérdida de sus madres, ofreciendo una exploración de la memoria personal y colectiva.",
    longDescription:
      "Desarrollada mediante la metodología del biodrama, la obra utiliza narrativas de la vida real y artefactos personales para enmarcar el legado perdurable de la ausencia, el trauma y la resiliencia en el contexto centroamericano.",
    image: "/assets/images/works/huellas/1.png",
    gallery: ["/assets/images/works/huellas/1.png"],
    credits: [{ role: "Dirección y Creación", name: "Ishtar Paz Pineda" }],
  },
  {
    slug: "el-camino",
    title: "El Camino",
    year: "2020",
    category: "Escena",
    venue: "Plataforma Zoom — Honduras, Paraguay, Argentina",
    director: "Ishtar Paz Pineda",
    author: "Ishtar Paz Pineda",
    description:
      "Obra teatral exploratoria centrada en la migración vivida a través de la virtualidad. Presentada en vivo a través de Zoom con la colaboración de artistas de Honduras, Paraguay y Argentina.",
    longDescription:
      "El proyecto investiga la naturaleza fragmentada e incorpórea de la migración en la era digital, utilizando el espacio virtual para superar la distancia geográfica y explorar experiencias compartidas de movimiento y desplazamiento en América Latina.",
    image: "/assets/images/works/el-camino/1.png",
    gallery: ["/assets/images/works/el-camino/1.png"],
    credits: [
      { role: "Dirección, Dramaturgia y Producción", name: "Ishtar Paz Pineda" },
      { role: "Colectiva", name: "Etéreas" },
    ],
  },
  {
    slug: "el-jardin-de-las-delicias",
    title: "El Jardín de las Delicias",
    year: "2020",
    category: "Escena",
    venue: "Tierra Inconexa — Antología de Dramaturgia Hondureña",
    director: "Ishtar Paz Pineda",
    author: "Ishtar Paz Pineda",
    description:
      "Ambientada en el camerino de un teatro, esta intensa obra expone la toxicidad y el abuso de poder que ejerce un director sobre sus dos actrices, a quienes ha manipulado durante años. La tensión estalla cuando una ejecuta un acto radical de liberación.",
    longDescription:
      "La obra se convierte en una dramática lucha por el control: ¿deberían huir y borrar todo rastro del opresor, o tomar el control de su narrativa y transformar el escenario del abuso en un espacio de venganza y emancipación total?",
    image: "/assets/images/works/el-jardin-de-las-delicias/1.png",
    gallery: [
      "/assets/images/works/el-jardin-de-las-delicias/1.png",
      "/assets/images/works/el-jardin-de-las-delicias/2.png",
    ],
    cast: "Napoleón, Rosa, Jazmín",
    credits: [{ role: "Autora", name: "Ishtar Paz Pineda" }],
  },
  {
    slug: "pum-pum",
    title: "Pum Pum!",
    year: "2019",
    category: "Objetos",
    venue: "Honduras",
    director: "Ishtar Paz Pineda",
    author: "Darío Fo (adaptación: Ishtar Paz Pineda)",
    description:
      "Adaptación de la obra satírica de Darío Fo. La producción expone la corrupción y la manipulación de información dentro del Ministerio del Interior de un estado latinoamericano, empleando el lenguaje del payaso, los títeres y el teatro de sombras.",
    longDescription:
      "A través de historias de farsa sobre conspiraciones y acciones policiales, la obra adaptada arroja luz sobre la impunidad sistémica y la malversación política, manteniendo el ingenio agudo y la urgencia política de la obra original.",
    image: "/assets/images/works/pum-pum/1.png",
    gallery: [
      "/assets/images/works/pum-pum/1.png",
      "/assets/images/works/pum-pum/2.png",
      "/assets/images/works/pum-pum/3.png",
    ],
    credits: [
      { role: "Dirección y Producción", name: "Ishtar Paz Pineda" },
      { role: "Dramaturgia original", name: "Darío Fo" },
      { role: "Adaptación", name: "Ishtar Paz Pineda" },
      { role: "Colectiva", name: "Etéreas" },
    ],
  },
]

export function getWorkBySlug(slug: string): Work | undefined {
  return works.find((work) => work.slug === slug)
}

export function getWorksByCategory(category: string): Work[] {
  return works.filter((work) => work.category === category)
}

export const categories = [
  { id: "Escena", label: "Escena" },
  { id: "Artes Visuales", label: "Artes Visuales" },
  { id: "Objetos", label: "Objetos" },
]
