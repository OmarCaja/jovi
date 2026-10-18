// UI strings per language. Spanish is the source; English mirrors every key.
// Pattern from the Astro docs i18n recipe: https://docs.astro.build/en/recipes/i18n/

export const languages = { es: "Español", en: "English" } as const
export const defaultLang = "es"
export type Lang = keyof typeof languages

export const ui = {
  es: {
    "meta.title": "Taberna Jovi | Coctelería y café en Cuenca desde 1977",
    "meta.description":
      "Pub de estilo británico en el casco antiguo de Cuenca. Coctelería clásica, cafés de autor y montaditos tradicionales desde 1977.",
    "meta.menuTitle": "La carta | Taberna Jovi, Cuenca",
    "meta.menuDescription":
      "Raciones, tostas, sándwiches y montados, más cócteles, cafés, vinos y licores de Taberna Jovi en Cuenca.",
    "meta.galleryTitle": "Galería | Taberna Jovi, Cuenca",
    "meta.galleryDescription": "Fotos del pub y la terraza de Taberna Jovi en el casco antiguo de Cuenca.",

    "nav.primary": "Principal",
    "nav.footer": "Pie",
    "nav.mobile": "Menú",
    "nav.home": "Inicio",
    "nav.house": "La casa",
    "nav.menu": "Carta",
    "nav.gallery": "Galería",
    "nav.open": "Abrir menú",
    "nav.close": "Cerrar menú",
    "lang.switch": "Read in English",

    "cta.menu": "Ver la carta",
    "cta.directions": "Cómo llegar",
    "cta.gallery": "Ver galería",
    "instagram": "Instagram de Taberna Jovi",
    "today": "Hoy",
    "closed": "Cerrado",
    "time.to": "a",

    "hero.eyebrow": "Casco antiguo de Cuenca",
    "hero.title": "Cócteles y café",
    "hero.since": "desde 1977",
    "hero.body": "Un pub de estilo británico con coctelería clásica, cafés de autor y montaditos tradicionales.",
    "hero.alt": "Interior del pub: barra curva de madera, taburetes de cuero y lámparas de vidriera",

    "house.title": "Un rincón británico en Cuenca",
    "house.body":
      "Madera, vidrieras y una barra curva. Desde 1977 servimos los clásicos de siempre, bien hechos y sin prisa.",
    "house.alt":
      "Cuadro de un caballo blanco con marco negro bajo una lámpara de cuadro, sobre el papel pintado a rayas verdes del pub",

    "bento.title": "Del primer café a la última copa",
    "bento.cocktails.title": "Cócteles clásicos y de la casa",
    "bento.cocktails.body": "Del Dry Martini al Jovini, preparados a la vista en la barra.",
    "bento.cocktails.cta": "Ver cócteles",
    "bento.coffee.alt": "Bebida oscura con espuma sobre la barra de madera",
    "bento.coffee.title": "Cafés de autor",
    "bento.coffee.body": "Irlandés, vienés o el café Jovi. Calientes, fríos o con helado.",
    "bento.coffee.cta": "Ver cafés",
    "bento.terrace.alt": "Mesas de terraza bajo un árbol junto a una iglesia de piedra",
    "bento.terrace.title": "Terraza en el casco antiguo",
    "bento.terrace.body": "Mesas al sol y a la sombra, en pleno casco antiguo.",
    "bento.food.alt": "Sándwiches y tostas recién hechos servidos sobre la barra de madera",
    "bento.food.title": "Para comer",
    "bento.food.body": "Raciones para compartir, tostas, sándwiches y montados de barra.",
    "bento.food.cta": "Ver la comida",

    "press.title": "Hablan de nosotros",
    "press.quote": "La mejor coctelería del interior de España está en Cuenca y no lo sabías",
    "press.guides": "Guías",
    "press.reviews": "Opiniones y redes",
    "press.repsol": "Distinción Solete",
    "press.visitCuenca": "Turismo oficial de Cuenca",
    "press.toppings": "Ficha de bar de tapas",
    "press.tripadvisor": "Opiniones de clientes",
    "press.guru": "Reseñas y valoraciones",

    "visit.title": "Te esperamos en el casco antiguo",
    "visit.body": "Para la tarde, la cena o la última copa.",
    "visit.address": "Dirección",
    "visit.hours": "Horario",
    "days.monTue": "Lunes y martes",
    "days.wedThu": "Miércoles y jueves",
    "days.fri": "Viernes",
    "days.sat": "Sábado",
    "days.sun": "Domingo",

    "menu.title": "La carta",
    "menu.eat": "Para comer",
    "menu.drink": "Para beber",
    "menu.prices": "Precios con IVA incluido. Ración de pan 0,50 € por persona.",
    "menu.allergens": "Alérgenos",

    "gallery.title": "Galería",
    "gallery.dialog": "Foto a pantalla completa",
    "gallery.open": "Ver a pantalla completa",
    "gallery.close": "Cerrar",
    "gallery.prev": "Foto anterior",
    "gallery.next": "Foto siguiente",
    "gallery.bar": "Barra curva de madera con lámparas de vidriera",
    "gallery.terrace": "Terraza con vistas a las casas del casco antiguo",
    "gallery.horse": "Cuadro de un caballo blanco sobre papel pintado a rayas",
    "gallery.courtyard": "Mesas a la sombra de un árbol en la plaza",
    "gallery.pint": "Copa de cerveza negra sobre la barra",
    "gallery.sandwiches": "Sándwiches y tostas servidos sobre la barra de madera",
  },
  en: {
    "meta.title": "Taberna Jovi | Cocktail bar and café in Cuenca since 1977",
    "meta.description":
      "A British-style pub in Cuenca's old town. Classic cocktails, signature coffees and traditional montaditos since 1977.",
    "meta.menuTitle": "Menu | Taberna Jovi, Cuenca",
    "meta.menuDescription":
      "Sharing plates, toasts, sandwiches and montados, plus cocktails, coffees, wines and spirits at Taberna Jovi in Cuenca.",
    "meta.galleryTitle": "Gallery | Taberna Jovi, Cuenca",
    "meta.galleryDescription": "Photos of the pub and the terrace at Taberna Jovi in Cuenca's old town.",

    "nav.primary": "Main",
    "nav.footer": "Footer",
    "nav.mobile": "Menu",
    "nav.home": "Home",
    "nav.house": "The house",
    "nav.menu": "Menu",
    "nav.gallery": "Gallery",
    "nav.open": "Open menu",
    "nav.close": "Close menu",
    "lang.switch": "Leer en español",

    "cta.menu": "See the menu",
    "cta.directions": "Get directions",
    "cta.gallery": "See the gallery",
    "instagram": "Taberna Jovi on Instagram",
    "today": "Today",
    "closed": "Closed",
    "time.to": "to",

    "hero.eyebrow": "Cuenca old town",
    "hero.title": "Cocktails and coffee",
    "hero.since": "since 1977",
    "hero.body": "A British-style pub with classic cocktails, signature coffees and traditional montaditos.",
    "hero.alt": "Inside the pub: a curved wooden bar, leather stools and stained-glass lamps",

    "house.title": "A British corner in Cuenca",
    "house.body":
      "Wood, stained glass and a curved bar. Since 1977 we have served the classics, done well and never rushed.",
    "house.alt":
      "Painting of a white horse in a black frame under a picture light, on the pub's green striped wallpaper",

    "bento.title": "From the first coffee to the last drink",
    "bento.cocktails.title": "Classic and house cocktails",
    "bento.cocktails.body": "From the Dry Martini to the Jovini, made in front of you at the bar.",
    "bento.cocktails.cta": "See cocktails",
    "bento.coffee.alt": "A dark drink with a foamy head on the wooden bar",
    "bento.coffee.title": "Signature coffees",
    "bento.coffee.body": "Irish, Viennese or the Jovi coffee. Hot, cold or with ice cream.",
    "bento.coffee.cta": "See coffees",
    "bento.terrace.alt": "Terrace tables under a tree beside a stone church",
    "bento.terrace.title": "A terrace in the old town",
    "bento.terrace.body": "Tables in the sun and in the shade, right in the old town.",
    "bento.food.alt": "Freshly made sandwiches and toasts served on the wooden bar",
    "bento.food.title": "To eat",
    "bento.food.body": "Plates to share, toasts, sandwiches and bar montados.",
    "bento.food.cta": "See the food",

    "press.title": "What they say about us",
    "press.quote": "The best cocktail bar in inland Spain is in Cuenca, and you didn't know it",
    "press.guides": "Guides",
    "press.reviews": "Reviews and social",
    "press.repsol": "Solete award",
    "press.visitCuenca": "Cuenca's official tourism site",
    "press.toppings": "Tapas bar listing",
    "press.tripadvisor": "Customer reviews",
    "press.guru": "Reviews and ratings",

    "visit.title": "See you in the old town",
    "visit.body": "For the afternoon, dinner or a last drink.",
    "visit.address": "Address",
    "visit.hours": "Opening hours",
    "days.monTue": "Monday and Tuesday",
    "days.wedThu": "Wednesday and Thursday",
    "days.fri": "Friday",
    "days.sat": "Saturday",
    "days.sun": "Sunday",

    "menu.title": "The menu",
    "menu.eat": "To eat",
    "menu.drink": "To drink",
    "menu.prices": "Prices include VAT. Bread €0.50 per person.",
    "menu.allergens": "Allergens",

    "gallery.title": "Gallery",
    "gallery.dialog": "Full-screen photo",
    "gallery.open": "View full screen",
    "gallery.close": "Close",
    "gallery.prev": "Previous photo",
    "gallery.next": "Next photo",
    "gallery.bar": "Curved wooden bar with stained-glass lamps",
    "gallery.terrace": "Terrace overlooking the houses of the old town",
    "gallery.horse": "Painting of a white horse on striped wallpaper",
    "gallery.courtyard": "Tables in the shade of a tree on the square",
    "gallery.pint": "A glass of dark beer on the bar",
    "gallery.sandwiches": "Sandwiches and toasts served on the wooden bar",
  },
} as const satisfies Record<Lang, Record<string, string>>

export type UiKey = keyof (typeof ui)["es"]

export const allergenNames: Record<Lang, string[]> = {
  es: ["Gluten", "Crustáceos", "Huevos", "Pescado", "Cacahuetes", "Soja", "Lácteos", "Frutos de cáscara", "Apio", "Mostaza", "Sésamo", "Moluscos", "Altramuces", "Sulfitos"],
  en: ["Gluten", "Crustaceans", "Eggs", "Fish", "Peanuts", "Soy", "Milk", "Tree nuts", "Celery", "Mustard", "Sesame", "Molluscs", "Lupin", "Sulphites"],
}
