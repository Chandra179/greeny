import { createSignal } from 'solid-js'

const categories = ['All Stories', 'Ecology', 'Trekking', 'Photography', 'Conservation']

function CategoryNavSection() {
  const [active, setActive] = createSignal('All Stories')

  return (
    <section class="max-w-screen-2xl mx-auto px-8 mb-16">
      <div class="flex flex-wrap items-center gap-4 border-b border-outline-variant/20 pb-6">
        <span class="text-on-surface-variant font-bold uppercase tracking-widest text-xs mr-4">
          Filter by Theme:
        </span>
        {categories.map(cat => (
          <button
            onClick={() => setActive(cat)}
            class={
              active() === cat
                ? 'px-6 py-2 rounded-full bg-primary text-on-primary text-sm font-semibold transition-all'
                : 'px-6 py-2 rounded-full bg-surface-container-high text-on-surface-variant text-sm font-medium hover:bg-surface-container-highest transition-all'
            }
          >
            {cat}
          </button>
        ))}
      </div>
    </section>
  )
}

export default CategoryNavSection
