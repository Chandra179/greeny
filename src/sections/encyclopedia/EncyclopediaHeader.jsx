function EncyclopediaHeader() {
  return (
    <header class="mb-16">
      <h1 class="text-5xl font-serif text-primary mb-6 tracking-tight">The Ancient Canopy</h1>
      <p class="text-on-surface-variant text-lg max-w-2xl font-body leading-relaxed mb-10 dark:opacity-90">
        Explore the intricate biology and spiritual significance of the Pacific Northwest flora.
        From the towering conifers to the hidden mycelial networks.
      </p>

      <div class="flex flex-col md:flex-row gap-6 items-end">
        <div class="relative flex-1 group w-full">
          <span class="absolute left-4 top-1/2 -translate-y-1/2 text-outline material-symbols-outlined group-focus-within:text-primary transition-colors">
            search
          </span>
          <input
            type="text"
            placeholder="Search by common or scientific name..."
            class="w-full pl-12 pr-4 py-4 bg-surface-container-low dark:bg-forest-muted border-none border-b-2 border-outline-variant dark:border-outline-variant/30 focus:border-primary focus:ring-0 transition-all font-body text-on-surface dark:rounded-xl"
          />
        </div>
        <div class="flex gap-2">
          <button class="px-6 py-4 bg-secondary-container dark:bg-earthy-green text-on-secondary-container dark:text-primary dark:border dark:border-white/10 rounded-full font-bold text-sm flex items-center gap-2 hover:brightness-95 dark:hover:bg-forest-accent transition-all dark:shadow-lg">
            <span class="material-symbols-outlined text-base">filter_list</span>
            Filter
          </button>
        </div>
      </div>
    </header>
  )
}

export default EncyclopediaHeader
