const dispatches = [
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhFcp_56mfLK3i5zdbKO6XPZsKe9BbLJlNaMqVo_KJGuTnR7sVrV-T7fIeLagCNn0brH787pSBPKHUh9yFUsQrvg4eJ1xG807aezYBSOJI0eLKB-5_nnVO0XRaEzNGOvrgQjzmiXuOyyTjXI_5v8UKoE7KQMA1fdfxg30lAgEWVeGI5rwxnJy_OWalnAoJH_GvsXiP_XDDtqrnSIkmHvIescF9_8uVOs7ppC_hAUjsbUhhY6V0pkF8BekpXiilfOOCqISpRA0Wn3o',
    alt: 'Dense evergreen forest floor',
    category: 'ECOLOGY',
    title: 'Silent Sentinels: The Role of Deadwood',
    excerpt:
      "Understanding the 'Nurse Log' phenomenon and how fallen giants sustain future generations.",
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8aT7RsGv7lPz1tYEjVi0P1-uPgn6Hi97WYKbkmCRbBIo_y7jmJEiM9Sj7hxN2ieB6tMgOTaToqF8-uJ6znfAW7kAdEo5X9hQ8DMPwTajaX2njLAdfj7fDp2qg0U1QtLXMYHQKriqHpsZIpBgWgM_w6-fykk0Aqig_53yhsxeDZ65aJdgwNY04i0ABQ5WPGhm91JDSSYzepsT8CjyuCy3pKdOr37__b6QHt9Y5MxcelQFMcqhIfwglBsYdUOENBlxldcwXcJTjioo',
    alt: 'Mist rolling over mountain valley forest',
    category: 'TREKKING',
    title: 'Navigating by the Moss: Myth vs Reality',
    excerpt:
      'Ancient navigation techniques tested against modern GPS in deep canopy environments.',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLafBwnqCtyvwyNflz8BBWbms5VEw3nD5O1assKJA8i2VgJMy_got9eviNvj74UJhUUWb5D6L0X6oGialRo2Td5Pf-6c3pA-kL9RmsYj3Rbqr3MO1XDqGIzTFjx-QzSSxvtFir2dIG6eC2GjuCHL1EwAxU2TRuLhkHupN9ZBCaVf4u9-EwPlOabiAHxQJQrIaSGkb0psQD3ALqi9OeaXJJiXYk_hMLhH2nT0DKXDbGWEsUKB7KC_jnmsQVb4z5GCwOL_AoJJUNbJo',
    alt: 'Sunbeams hitting forest moss',
    category: 'CONSERVATION',
    title: 'Protecting the Ancient Watersheds',
    excerpt:
      'A look at the current legislation protecting the riparian zones of the Pacific Northwest.',
  },
]

function SeasonalDispatchesSection() {
  return (
    <section class="max-w-screen-2xl mx-auto px-8 mt-24 mb-32">
      <h2 class="text-4xl font-headline mb-12">Seasonal Dispatches</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {dispatches.map(d => (
          <div class="bg-surface-container-lowest rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
            <div class="rounded-lg overflow-hidden h-48 mb-6">
              <img
                alt={d.alt}
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                src={d.img}
              />
            </div>
            <span class="text-tertiary font-bold text-xs">{d.category}</span>
            <h3 class="text-xl font-headline mt-2 mb-3">{d.title}</h3>
            <p class="text-sm text-on-surface-variant leading-relaxed">{d.excerpt}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SeasonalDispatchesSection
