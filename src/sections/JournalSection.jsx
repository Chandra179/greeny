const posts = [
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1J7lywGfahOCov3IggFwhzJ6XahIKyuaoQkh7DwgsAYPLjQHTvBU-w1BssFuWbOm6jb1wMeVQ295stfp3CXkb9rpugkOIm1gUQi0zdB47ImckVniNWfHXgJwuQLHKjfe7xnc3WrvZdZsRNvObvRm7L1cz9gV436He4KP8ott2q0UuGHAeNOr33C_Bvj5puH3iVo6aesSPH9broaYJtHtaW2unRFTEm_Z85WxxYuxVsh5sbqeDv1l-EvlMm_YM4wRqf15kwGB1GpQ',
    alt: 'Trekker walking through high altitude forest',
    tag: 'Trekking',
    title: 'Chasing the Fog: A Guide to High-Altitude Photography',
    excerpt: 'How to capture the elusive atmospheric perspective when the canopy is heavy with mist.',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGIGo9scnQ2J7reS71J3A2neglWRyyvBiKrxWKUCiiP240Q7db1Mk2cCG-lgZYztJ_K6V23jzUC3Zja0MXBjzsbMy4am8M7UVxw0ZUc3OZU3ie05lURwbySXmX2HWb8tiJVbIArCkRIELvOsrxGYVWO2ftds-sN4O6DhF5BJtAWQQeRC-uOWvW9K8Q0tcXQjdbdLHQJIiOwbJQN9vO-cnoUjGFzoMbYKHCZtH5IOyc4Blhml3IuZDFzXandidhqTcfIIgTWc3LRwY',
    alt: 'Close up of a rare forest flower',
    tag: 'Conservation',
    title: 'The Wood Wide Web: Mycelial Communication',
    excerpt: 'Understanding how the forest floors of the Pacific Northwest talk to one another.',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaAgPS7_uxVrne9XypwiKitBp59ODKTT3lDOBG7UN1uqhKgsBsOz7NS_kltRN537rDFeLzXAn6zYsWdy-mnIG9hNzID7JZzHU5zIqVGa0xpGhCwP5rGt7MjlK67fSkgskhNMuf_fQofzy4GyF4fYXh8Kl1hubQLvrhihfLuTX23_-EBDbXS8klQKrM_ahUPKwQG80c6FseLIghDY0bkpp8AhTDNVTPZxgXrGxSMOa8OxMhuDwWCCqJaJ7qf-tZH5QLoIxObFRKy8M',
    alt: 'Detailed forest path with ferns',
    tag: 'Philosophy',
    title: 'Shinrin-yoku: The Art of Forest Bathing',
    excerpt: 'Immersing the senses in the organic rhythms of the wild to restore the modern mind.',
  },
]

function JournalSection() {
  return (
    <section class="py-20 md:py-32 bg-surface-container-low">
      <div class="max-w-screen-2xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div class="text-center mb-12 md:mb-20">
          <h2 class="text-4xl md:text-5xl text-primary font-headline italic mb-4">The Sylvan Journal</h2>
          <div class="w-24 h-px bg-primary/20 mx-auto" />
        </div>

        {/* Posts Grid */}
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {posts.map(post => (
            <article class="flex flex-col">
              <div class="rounded-xl overflow-hidden mb-8 aspect-[4/5]">
                <img
                  alt={post.alt}
                  class="w-full h-full object-cover"
                  src={post.img}
                />
              </div>
              <span class="text-on-tertiary-container font-bold text-xs uppercase tracking-widest mb-3">
                {post.tag}
              </span>
              <h3 class="text-xl md:text-2xl font-headline text-primary mb-4 leading-snug">
                {post.title}
              </h3>
              <p class="text-on-surface-variant font-body mb-6 flex-grow leading-relaxed">
                {post.excerpt}
              </p>
              <a class="text-primary font-bold inline-flex items-center gap-2 group" href="#">
                Read Story
                <span class="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default JournalSection
