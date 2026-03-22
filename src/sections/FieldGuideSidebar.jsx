const navItems = [
  { icon: 'nature_people', label: 'Conifers', active: true },
  { icon: 'park',          label: 'Broadleaf' },
  { icon: 'eco',           label: 'Ferns & Mosses' },
  { icon: 'psychiatry',    label: 'Mycelium' },
]

function FieldGuideSidebar() {
  return (
    <aside class="hidden xl:flex fixed left-0 top-1/2 -translate-y-1/2 flex-col p-4 gap-2 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-100 font-sans font-medium text-sm rounded-r-3xl z-40">
      <div class="mb-4">
        <h4 class="font-bold text-xs uppercase tracking-widest opacity-60">Field Guide</h4>
      </div>
      {navItems.map(item => (
        <a
          href="#"
          class={
            item.active
              ? 'flex items-center gap-3 p-3 bg-emerald-100 dark:bg-emerald-800 text-emerald-900 dark:text-white rounded-lg transition-all'
              : 'flex items-center gap-3 p-3 text-emerald-700/80 dark:text-emerald-300/80 hover:bg-emerald-100/50 transition-all'
          }
        >
          <span class="material-symbols-outlined">{item.icon}</span>
          <span>{item.label}</span>
        </a>
      ))}
    </aside>
  )
}

export default FieldGuideSidebar
