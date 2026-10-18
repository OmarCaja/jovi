import { useState, useSyncExternalStore } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type Item = { title: string; desc?: string; allergens?: string; price: string }
export type MenuGroup = {
  id: string
  label: string
  note?: string
  sections: { title?: string; items: Item[] }[]
}

export function Menu({ groups }: { groups: MenuGroup[] }) {
  // Deep link from the landing page: /carta?tab=coffees opens that tab.
  const urlTab = useSyncExternalStore(
    () => () => {},
    () => new URLSearchParams(location.search).get("tab"),
    () => null
  )
  const [picked, setPicked] = useState<string | null>(null)
  const tab =
    picked ?? (groups.some((g) => g.id === urlTab) ? urlTab! : groups[0].id)
  return (
    <Tabs value={tab} onValueChange={(v) => setPicked(v as string)} className="gap-10">
      <TabsList
        variant="line"
        className="-mx-4 h-auto! w-[calc(100%+2rem)] flex-nowrap justify-start gap-x-6 overflow-x-auto border-b border-border px-4 pb-2 [scrollbar-width:none] md:mx-0 md:w-full md:flex-wrap md:gap-y-2 md:overflow-visible md:px-0 md:pb-3 [&::-webkit-scrollbar]:hidden"
      >
        {groups.map((g) => (
          <TabsTrigger
            key={g.id}
            value={g.id}
            className="min-h-11 flex-none px-0 text-base text-muted-foreground after:bg-primary! data-active:text-foreground md:min-h-0"
          >
            {g.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {groups.map((g) => (
        <TabsContent key={g.id} value={g.id} className="grid gap-12">
          {g.sections.map((s, i) => (
            <div key={i}>
              {s.title && (
                <h3 className="mb-5 text-2xl text-primary">{s.title}</h3>
              )}
              <ul className="columns-1 gap-x-12 sm:columns-2 lg:columns-3">
                {s.items.map((d) => (
                  <li key={d.title} className="break-inside-avoid py-1.5 text-base">
                    <div className="flex items-baseline gap-3">
                      <span>{d.title}</span>
                      <span
                        aria-hidden
                        className="min-w-4 flex-1 translate-y-[-3px] border-b border-dotted border-border"
                      />
                      <span className="whitespace-nowrap text-muted-foreground tabular-nums">
                        {d.price} €
                      </span>
                    </div>
                    {(d.desc || d.allergens) && (
                      <p className="mt-0.5 text-sm text-muted-foreground">
                        {d.desc}
                        {d.desc && d.allergens && ". "}
                        {d.allergens && (
                          <span>
                            Alérgenos {d.allergens}
                          </span>
                        )}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {g.note && <p className="text-muted-foreground">{g.note}</p>}
        </TabsContent>
      ))}
    </Tabs>
  )
}
