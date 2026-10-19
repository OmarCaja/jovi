// Source of the sandwiches photo (src/assets/sandwiches.jpg) and the press quote on Home.
export const travelerUrl =
  "https://www.traveler.es/articulos/la-mejor-cocteleria-del-interior-de-espana-esta-en-cuenca-y-no-lo-sabias"

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

const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number)
  return h * 60 + m
}

// Which `days` entry the bar is serving at `now` (Madrid wall clock): before the previous
// night's after-midnight close (Monday 01:00 under Sunday's 16:00 to 2:00) it is still that night.
export function openingDay(now: Date) {
  const day = now.getDay()
  const yesterday = (day + 6) % 7
  const night = hours.find((h) => (h.days as readonly number[]).includes(yesterday))?.time
  const late =
    night &&
    toMinutes(night[1]) < toMinutes(night[0]) &&
    now.getHours() * 60 + now.getMinutes() < toMinutes(night[1])
  return late ? yesterday : day
}
