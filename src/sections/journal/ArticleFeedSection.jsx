const ARTICLE_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIwQX8aNIQkisyeXs5qXD2iPQChQzJyx0rW_p_ck8V0jNewe4tSDQV1oqB4wL8lJLRQkp3-6rdkhuXnoLw4QFyJAKOuPWbBBFCs5Vw0Cb__YjVEhXV5A9dfSg1QqEpa5s9O_F3ju525OvWxjpgZ0tUaEcixCoaXmABSsxrMTWnJ5K0lQmFYLACMsibJoOFn1V7IC45ItWMPhwUYwrSapSsWpRwkUeC-urGPZfPLDZI_CleOnC8lrXxrv0uaWSAygx4IJY-whuGX3A'

const journalEntries = [
  {
    category: 'Ecology',
    title: 'The Resilience of Old Growth Ferns',
    excerpt: 'How prehistoric plant species adapt to the changing microclimates of the valley floor.',
  },
  {
    category: 'Trekking',
    title: 'Mapping the Untracked Northern Ridge',
    excerpt: 'A 14-day solo journey through the most remote cedar groves in the province.',
  },
  {
    category: 'Photography',
    title: 'Macro Secrets: The World of Lichen',
    excerpt: "Close-up studies of the symbiotic organisms that define the forest's color palette.",
  },
]

function ArticleFeedSection() {
  return (
    <section class="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-10">
      {/* Long-Form Article Card */}
      <div class="md:col-span-8 group cursor-pointer">
        <div class="rounded-xl overflow-hidden bg-surface-container-low mb-6 aspect-[16/9]">
          <img
            alt="Misty morning in a coniferous forest"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            src={ARTICLE_IMG}
          />
        </div>
        <div class="max-w-3xl">
          <div class="flex items-center gap-4 text-sm text-secondary font-bold mb-3">
            <span>Photography</span>
            <span class="w-1 h-1 rounded-full bg-outline-variant" />
            <span class="text-on-surface-variant/70 font-normal italic">Published Oct 24</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-headline mb-4 group-hover:text-primary transition-colors">
            Capturing the Morning Mist: A Photography Guide
          </h2>
          <p class="text-on-surface-variant text-lg leading-relaxed mb-6">
            Techniques for balancing exposure and capturing the ethereal diffusion of light during
            the golden hour in dense woodland environments.
          </p>
          <a
            href="#"
            class="inline-flex items-center gap-2 text-primary font-bold border-b-2 border-primary-fixed hover:border-primary transition-all pb-1"
          >
            View Field Guide <span class="material-symbols-outlined text-sm">open_in_new</span>
          </a>
        </div>
      </div>

      {/* Sidebar */}
      <div class="md:col-span-4 space-y-12">
        {/* Journal Entries */}
        <div>
          <h3 class="text-xl font-headline font-bold border-l-4 border-secondary pl-4 mb-8">
            Journal Entries
          </h3>
          <div class="space-y-8">
            {journalEntries.map(entry => (
              <div class="group cursor-pointer">
                <span class="text-secondary font-bold text-xs uppercase tracking-tighter">
                  {entry.category}
                </span>
                <h4 class="text-lg font-bold mt-1 group-hover:text-primary transition-colors">
                  {entry.title}
                </h4>
                <p class="text-sm text-on-surface-variant mt-2 line-clamp-2">{entry.excerpt}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Callout */}
        <div class="bg-surface-container p-8 rounded-xl">
          <h3 class="text-xl font-headline font-bold mb-4">Forest Whispers</h3>
          <p class="text-sm text-on-surface-variant mb-6 leading-relaxed">
            Join 12,000+ explorers. Receive monthly dispatches on conservation, gear reviews, and
            new journal entries.
          </p>
          <div class="space-y-4">
            <input
              class="w-full bg-surface-container-lowest border-none focus:ring-2 focus:ring-primary rounded-lg px-4 py-3 text-sm"
              placeholder="Your email address"
              type="email"
            />
            <button class="w-full bg-primary text-on-primary py-3 rounded-lg font-bold hover:shadow-lg transition-shadow">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ArticleFeedSection
