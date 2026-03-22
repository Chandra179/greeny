import { createSignal } from 'solid-js'

const navItems = [
  { icon: 'nature_people', label: 'Conifers' },
  { icon: 'park',          label: 'Broadleaf' },
  { icon: 'eco',           label: 'Ferns & Mosses' },
  { icon: 'psychiatry',    label: 'Mycelium' },
]

function EncyclopediaSidebar() {
  const [active, setActive] = createSignal('Conifers')

  return (
    <aside class="hidden lg:flex flex-col w-64 p-4 gap-2 bg-emerald-50/50 dark:bg-forest-muted/20 h-[calc(100vh-120px)] mt-12 rounded-r-3xl sticky top-24 dark:border-r dark:border-white/5">
      <div class="mb-6 px-4">
        <h2 class="text-emerald-800 dark:text-primary font-serif text-xl font-bold">Field Guide</h2>
        <p class="text-emerald-700/80 dark:text-on-surface-variant/60 font-sans text-xs uppercase tracking-widest font-bold">Tree Species</p>
      </div>

      <nav class="space-y-1">
        {navItems.map(item => (
          <a
            href="#"
            onClick={e => { e.preventDefault(); setActive(item.label) }}
            class={
              active() === item.label
                ? 'flex items-center gap-3 px-4 py-3 bg-emerald-100 dark:bg-forest-accent text-emerald-900 dark:text-primary rounded-lg font-sans font-medium text-sm transition-all duration-300'
                : 'flex items-center gap-3 px-4 py-3 text-emerald-700/80 dark:text-on-surface-variant hover:bg-emerald-100/50 dark:hover:bg-forest-accent/50 rounded-lg font-sans font-medium text-sm transition-all duration-300'
            }
          >
            <span class="material-symbols-outlined">{item.icon}</span>
            {item.label}
          </a>
        ))}
      </nav>

      <div class="mt-auto p-4 bg-primary dark:bg-forest-accent text-on-primary dark:text-primary rounded-2xl dark:border dark:border-white/5">
        <p class="text-xs font-label opacity-80 dark:opacity-60 mb-2">Current Region</p>
        <div class="flex items-center gap-2">
          <span class="material-symbols-outlined text-sm">location_on</span>
          <span class="text-sm font-bold">Olympic Peninsula</span>
        </div>
      </div>
    </aside>
  )
}

export default EncyclopediaSidebar
