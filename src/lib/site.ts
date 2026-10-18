export const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Taberna+Jovi+Cuenca"

// Source: Google Maps listing for Taberna Jovi (checked 2026-10-18).
export const address = { street: "C. Colmillo, 10", city: "16001 Cuenca" }

// `days` are JS weekday numbers (0 = domingo) so the page can mark today.
export const hours = [
  { label: "Lunes y martes", time: "Cerrado", days: [1, 2] },
  { label: "Miércoles y jueves", time: "19:00 a 2:00", days: [3, 4] },
  { label: "Viernes", time: "19:00 a 3:00", days: [5] },
  { label: "Sábado", time: "16:00 a 3:00", days: [6] },
  { label: "Domingo", time: "16:00 a 2:00", days: [0] },
]
