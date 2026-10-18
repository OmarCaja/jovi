export const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Taberna+Jovi+Cuenca"

// Source: Google Maps listing for Taberna Jovi (checked 2026-10-18).
export const address = { street: "C. Colmillo, 10", city: "16001 Cuenca" }

// `days` are JS weekday numbers (0 = Sunday) so the page can mark today.
// `label` is a key in src/i18n/ui.ts; `time` is [opens, closes] or null when closed.
export const hours = [
  { label: "days.monTue", time: null, days: [1, 2] },
  { label: "days.wedThu", time: ["19:00", "2:00"], days: [3, 4] },
  { label: "days.fri", time: ["19:00", "3:00"], days: [5] },
  { label: "days.sat", time: ["16:00", "3:00"], days: [6] },
  { label: "days.sun", time: ["16:00", "2:00"], days: [0] },
] as const
