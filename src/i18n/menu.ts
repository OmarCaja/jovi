import drinks from "@/data/drinks.json"
import food from "@/data/food.json"
import type { Lang } from "./ui"

type Item = { title: string; desc?: string; allergens?: string; price: string }
export type MenuGroup = {
  id: string
  label: string
  note?: string
  sections: { title?: string; items: Item[] }[]
}

// English for the menu data. The JSON stays the Spanish source of truth; anything not
// listed here (brand names, cocktail names) is the same in both languages.
const en: Record<string, string> = {
  // Food groups, sections and notes
  Raciones: "Plates",
  Tostas: "Toasts",
  "Sándwiches": "Sandwiches",
  Montados: "Montados",
  Comparte: "To share",
  Crujientes: "Crispy",
  Irresistibles: "Irresistible",
  "De barra": "From the bar",
  "Servimos medias raciones. Consulten las sugerencias del día.": "Half portions available. Ask about today's specials.",
  "Suplementos (queso, tomate, mayonesa...) 0,50 €": "Extras (cheese, tomato, mayonnaise...) €0.50",
  // Food items
  "Bonito en escabeche con tomate": "Pickled bonito with tomato",
  "Boquerones en vinagre": "White anchovies in vinegar",
  "Boquerones en vinagre y anchoas de Santoña": "White anchovies in vinegar with Santoña anchovies",
  Croquetas: "Croquettes",
  "Salchichas con bacon": "Sausages wrapped in bacon",
  "Dátiles con bacon": "Dates wrapped in bacon",
  "Pisto con magro": "Pisto (Spanish ratatouille) with lean pork",
  "Revuelto de setas": "Scrambled eggs with mushrooms",
  "Con jamón, queso, huevo y verduras salteadas con setas shiitake": "With ham, cheese, egg and sautéed vegetables with shiitake mushrooms",
  "Salmón ahumado": "Smoked salmon",
  "Queso azul con anchoa": "Blue cheese with anchovy",
  "Boquerón y anchoa": "White anchovy and anchovy",
  Mixto: "Ham and cheese",
  "Queso y jamón york": "Cheese and cooked ham",
  "Queso, jamón york y huevo revuelto": "Cheese, cooked ham and scrambled egg",
  "Pollo, salsa rosa y tomate": "Chicken, cocktail sauce and tomato",
  "Salmón": "Salmon",
  "Salmón ahumado, huevo revuelto y queso": "Smoked salmon, scrambled egg and cheese",
  "Tomate con queso y anchoas": "Tomato with cheese and anchovies",
  Lomo: "Pork loin",
  "Jamón con tomate": "Cured ham with tomato",
  "Bacon con queso": "Bacon and cheese",
  "Boquerón y anchoa con tomate": "White anchovy and anchovy with tomato",

  // Drink groups and sections
  "Cócteles": "Cocktails",
  "Cafés": "Coffees",
  Vinos: "Wines",
  Cervezas: "Beers",
  Licores: "Spirits",
  "Aperitivos y refrescos": "Aperitifs and soft drinks",
  Aperitivos: "Aperitifs",
  "Refrescos y zumos": "Soft drinks and juices",
  "Brandy y Coñac": "Brandy and cognac",
  Ginebras: "Gins",
  Rones: "Rums",
  Whiskies: "Whiskies",
  "Bebidas calientes": "Hot drinks",
  "Cócteles sin alcohol": "Alcohol-free cocktails",
  "Cafés calientes": "Hot coffees",
  "Cafés fríos": "Cold coffees",
  "Cafés con helado": "Coffees with ice cream",
  "Pedro Jiménez": "Sherry, port and sweet wines",
  "Vinos botella": "Wine by the bottle",
  "Vinos copa": "Wine by the glass",
  // Drink items with generic Spanish names
  "Cóctel aperitivo": "Aperitif cocktail",
  Vermut: "Vermouth",
  Refresco: "Soft drink",
  "Zumo de tomate": "Tomato juice",
  "Zumo de naranja natural": "Fresh orange juice",
  "Refresco premium": "Premium soft drink",
  Mosto: "Grape juice",
  "Agua con gas": "Sparkling water",
  Agua: "Still water",
  "Chupito premium": "Premium shot",
  Ron: "Rum",
  "Leche Jamaicana": "Jamaican milk",
  "Irlandés": "Irish coffee",
  "Vienés": "Viennese coffee",
  Jamaicano: "Jamaican coffee",
  Antillano: "Antillean coffee",
  "Francés": "French coffee",
  Mejicano: "Mexican coffee",
  "Brasileño": "Brazilian coffee",
  "Boadas frío": "Iced Boadas",
  "Blanco y negro": "Black and white",
  "Jovi frío": "Iced Jovi",
  "Escocés": "Scotch coffee",
  Moscatel: "Muscat",
  "Sandeman Oporto": "Sandeman Port",
  "Oporto Grahams": "Graham's Port",
  "Viña Charcón fermentado en barrica, uva Sauvignon": "Viña Charcón barrel-fermented Sauvignon",
  "Vino Pago de la Jaraba": "Pago de la Jaraba",
}

const tr = (lang: Lang, s?: string) => (s && lang === "en" ? (en[s] ?? s) : s)

const drinkOrder = ["cocktails", "coffees", "wines", "beers", "liquors", "refreshments"]
const drinkLabels: Record<string, string> = {
  cocktails: "Cócteles",
  coffees: "Cafés",
  wines: "Vinos",
  beers: "Cervezas",
  liquors: "Licores",
  refreshments: "Aperitivos y refrescos",
}

export function foodGroups(lang: Lang): MenuGroup[] {
  return food.map((g) => ({
    id: g.id,
    label: tr(lang, g.label)!,
    note: tr(lang, g.note),
    sections: g.sections.map((s) => ({
      title: tr(lang, s.title),
      items: s.items.map((i) => ({ ...i, title: tr(lang, i.title)!, desc: tr(lang, i.desc) })),
    })),
  }))
}

export function drinkGroups(lang: Lang): MenuGroup[] {
  return drinkOrder.map((id) => {
    const sections = drinks.find((d) => d.drink === id)!.drinksSectionWrapper.drinksSection
    return {
      id,
      label: tr(lang, drinkLabels[id])!,
      sections: sections.map((s) => ({
        // A single sub-list would only repeat the tab label.
        title: sections.length > 1 ? tr(lang, s.tittle) : undefined,
        items: s.drinks.map((d) => ({ ...d, title: tr(lang, d.title)! })),
      })),
    }
  })
}
