import { defaultLang, languages, ui, type Lang, type UiKey } from "./ui"

// Site base path ("/jovi" on GitHub Pages, "" at a domain root). Every internal link goes
// through getTranslatedPath, so the base is added in one place.
export const base = import.meta.env.BASE_URL.replace(/\/$/, "")
export const withBase = (path: string) => `${base}${path}`

// Path after the base, e.g. "/jovi/en/carta" -> "/en/carta".
const sitePath = (url: URL) => url.pathname.slice(base.length) || "/"

export function getLangFromUrl(url: URL): Lang {
  const [, first] = sitePath(url).split("/")
  return first in languages ? (first as Lang) : defaultLang
}

export function getTranslations(lang: Lang) {
  return (key: UiKey) => ui[lang][key] ?? ui[defaultLang][key]
}

// The default language has no prefix: "/carta" (es) vs "/en/carta" (en). Home is "/" or "/en/".
export function getTranslatedPath(lang: Lang) {
  return (path: string, l: Lang = lang) => withBase(l === defaultLang ? path : `/${l}${path === "/" ? "/" : path}`)
}

// Same page in the other language: strip the current prefix, then add the target one.
export function alternatePath(url: URL, target: Lang) {
  const lang = getLangFromUrl(url)
  const own = sitePath(url)
  const bare = lang === defaultLang ? own : own.slice(lang.length + 1) || "/"
  return getTranslatedPath(target)(bare.replace(/\/$/, "") || "/")
}

// Menu prices are stored as "9,50"; English readers expect "€9.50".
export function formatPrice(price: string, lang: Lang) {
  return lang === "en" ? `€${price.replace(",", ".")}` : `${price} €`
}

export function formatHours(time: readonly [string, string] | null, lang: Lang) {
  const t = getTranslations(lang)
  return time ? `${time[0]} ${t("time.to")} ${time[1]}` : t("closed")
}
