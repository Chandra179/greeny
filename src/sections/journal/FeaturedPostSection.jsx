const FEATURED_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOcS3QlQsgLJKB1YaVz2DtwmPOzj_jPq5BLZcTWMvhXGmXVvxVER-TrEhA68-lnVyo0eACvN0TRCITNCkaNWh-nWlXY6-8eIXGET8hS7ZPjHXbTtGBoxWve9wXGDP5x0YKTmFaGMLI2rSiBz83cXI8QMfkuBqCeo_hn9w99xSmka-8azAt8z7l0zsGEstzZkypp0eoRNH5XLfgP-AOZFvQFD7Ca2rGsCucbu8ec2W0VP6b1eZk8hdgMKkyaKGWr5CQaWH-veOk8tQ'

function FeaturedPostSection() {
  return (
    <section class="max-w-screen-2xl mx-auto px-8 mb-20">
      <div class="relative group overflow-hidden rounded-xl bg-surface-container-low h-[716px] flex items-end">
        <img
          alt="Sunlight filtering through ancient forest canopy"
          class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          src={FEATURED_IMG}
        />
        <div class="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
        <div class="relative p-12 lg:p-20 max-w-4xl">
          <span class="inline-block px-4 py-1 rounded-full bg-secondary-container text-on-secondary-container font-medium text-sm mb-6">
            Featured Exploration
          </span>
          <h1 class="text-5xl md:text-7xl text-white font-headline font-bold leading-tight mb-6">
            The Secret Language of Mycelium
          </h1>
          <p class="text-xl text-emerald-50/90 font-body mb-8 max-w-2xl leading-relaxed">
            Beneath every footstep in the ancient growth lies a complex, sentient network. Discover
            how the forest communicates through the underground fungal web.
          </p>
          <div class="flex items-center gap-6">
            <button class="bg-primary text-on-primary px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all flex items-center gap-2">
              Read Article <span class="material-symbols-outlined">arrow_right_alt</span>
            </button>
            <span class="text-emerald-100 font-medium">12 min read</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedPostSection
