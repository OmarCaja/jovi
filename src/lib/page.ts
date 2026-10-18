// With <ClientRouter />, bundled scripts run once per visit, not once per page.
// Run page code on every navigation (astro:page-load) and tear it down before the
// next page is swapped in (astro:before-swap), so GSAP triggers and listeners never leak.
// https://docs.astro.build/en/guides/view-transitions/#script-behavior-with-view-transitions
export function onPage(setup: () => void | (() => void)) {
  let cleanup: void | (() => void)
  document.addEventListener("astro:page-load", () => {
    cleanup = setup()
  })
  document.addEventListener("astro:before-swap", () => {
    cleanup?.()
    cleanup = undefined
  })
}
