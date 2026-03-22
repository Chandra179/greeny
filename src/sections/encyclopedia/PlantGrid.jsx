const plants = [
  {
    id: 'sitka-spruce',
    name: 'Sitka Spruce',
    scientific: 'Picea sitchensis',
    category: 'Conifer',
    description: 'The largest species of spruce, often growing near the coastline. Known for its distinct, sharp needles and papery cones.',
    stat: { icon: 'height', label: '100m+' },
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCh9ccI5ebidlc_Ke2ptqL143RHtbrUSjY3HVYhWly7A4fSTRTkkMFzkXgGNJgPSWDpBFta9Ye6pwF0HBGUtifotYmC1K_IjQBJ9A4VQPNfvFosVXh9R7o-kLvTO9RgPqrfEIJilhUu9wvtqYQV-vvb2bAecF8tM9jQJlfYwX6I6YMIog00vHQ5VzGoDQClITJzlGZBjqJFxn0qapFpGNq7LDdK2AUNnVQ8sJDM6TPCcx7SxPMC50np5ntOvXNTAzYLkNO9BfDqdKs',
    statColor: 'text-secondary dark:text-moss-light',
  },
  {
    id: 'douglas-fir',
    name: 'Douglas Fir',
    scientific: 'Pseudotsuga menziesii',
    category: 'Conifer',
    description: 'An iconic giant of the Northwest. Its thick bark makes it remarkably resistant to low-intensity forest fires.',
    stat: { icon: 'history', label: '1000y+' },
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsNhhTdACa2gTlfzRfcMd4JE-lASa43xWCmswCJRmQK-FSvYXxPBplJQOrhMaqpPl5YZplqJZpilY6iB8IfRUGhhxq4V_-SMDLXL14e_3fySa8NERhxTcq3KDB4Wv1-PZUeP70rtC2MP-zwwqphcWVZ8_H8YXeTv1KY4_cvohX96E71GtK9OlJGHtBRtzzSgBAlMCp8wjBKyVx1cOdmWCfUKyV2ee_4Urh5xzjq2T0VSPdtjT9buCUU4bHe9jyneNJ6F9asAELlkY',
    statColor: 'text-secondary dark:text-moss-light',
  },
  {
    id: 'sword-fern',
    name: 'Western Sword Fern',
    scientific: 'Polystichum munitum',
    category: 'Fern',
    description: 'One of the most robust ferns, forming huge clumps on the forest floor. A symbol of resilience in shaded habitats.',
    stat: { icon: 'wb_sunny', label: 'Low Light' },
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACH03Z3awotjYJrrCStoubqduA9DcLud02JSyt7EVyoTTDnZNs0L0feI8c1miJltb38Wa2C-ccufU7U-LIYjNvSZYcqJHqmY12Dsr34ERLpdcBS_yC999lsZHDu5sObQZt84jE7v4KiLNFlCaaxtI-PcfrVVvkGG3Vik7hCHQPkrVQEP8UNoFVbTpICqTJFj95wdGzyKMjhmxFe_1XFvUeRMiizqcIQNf9hmrBHpTivEC_r3iFTyDiMCxHgqTHZ1BU5Ux5vo6OJD8',
    statColor: 'text-secondary dark:text-moss-light',
  },
  {
    id: 'fly-agaric',
    name: 'Fly Agaric',
    scientific: 'Amanita muscaria',
    category: 'Mycelium',
    description: 'Famed for its red cap and white spots. It forms symbiotic relationships with the roots of various tree species.',
    stat: { icon: 'warning', label: 'Toxic' },
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrubp6iKdMfagjopRMLfkzE8fOvr4ndtAMXon75PUbRlbmnsH-ZMevLvp8dlZNj6oGJP6JwGRtVFgy_gsQGWwBtfCdqbYAoY-LdfcCHPudOiIwmZzO5xo6IccgMEPFZQ3souMhomSiJBMY8-Fa3TkPR6pTEUlhblqJ9037r2CmoKfOIECEsp_3l5fuzzLjka-cPhxJkDQlIO1H_I651NgKxrZKAvxOKDihK58QQbjvpYhRaDozKkM5J-HhmS_zHy5rFnVs-kzF0wU',
    statColor: 'text-tertiary',
    colSpan: 'lg:col-span-2 xl:col-span-1',
  },
]

const BIGLEAF_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUc0uWTXwAebHnUdyb4viLRIcFenNlIZyYQFBqRzBm00pHDIh7QQMDcHclJJo3pvY33A7k__rniqO68qG4grhcC-aQOveKpPijqXesOqWPkqMZHLkdUEPRnZCycAmQ-2SATgPUXHBhrZQ2mxfu5KpiobkzZtq7AUDTWG4SLnbYwmpmEV2oPyfpPp-r_ayKcJrA8Wow7WIxCH4Fv7GdhIPPTWLidFZ-JyfYsekXQyMtGeQyPBNg60S8uyt4NEnjMXEEBaru7mcklSU'

function PlantCard({ plant }) {
  return (
    <div class={`group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm dark:shadow-2xl hover:shadow-xl dark:hover:translate-y-[-4px] transition-all duration-500 border border-outline-variant/10 dark:border-white/5 ${plant.colSpan ?? ''}`}>
      <div class="relative h-72 overflow-hidden">
        <img
          alt={plant.name}
          src={plant.img}
          class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 dark:opacity-80 dark:group-hover:opacity-100"
        />
        <div class="absolute top-4 right-4 px-3 py-1 bg-white/80 dark:bg-forest-deep/80 backdrop-blur-sm rounded-full text-[10px] font-bold tracking-widest uppercase text-emerald-900 dark:text-primary dark:border dark:border-white/10">
          {plant.category}
        </div>
      </div>
      <div class="p-8">
        <h3 class="text-2xl font-serif text-primary mb-1">{plant.name}</h3>
        <p class="italic text-sm text-on-surface-variant dark:text-secondary mb-4 font-body">{plant.scientific}</p>
        <p class="text-on-surface-variant text-sm font-body leading-relaxed mb-6">{plant.description}</p>
        <div class="flex items-center justify-between pt-6 border-t border-outline-variant/15 dark:border-white/10">
          <span class={`text-xs font-bold flex items-center gap-1 ${plant.statColor}`}>
            <span class="material-symbols-outlined text-sm">{plant.stat.icon}</span>
            {plant.stat.label}
          </span>
          <button class="text-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
            View Details <span class="material-symbols-outlined text-base">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  )
}

function BigleafMapleCard() {
  return (
    <div class="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm dark:shadow-2xl hover:shadow-xl dark:hover:translate-y-[-4px] transition-all duration-500 border border-outline-variant/10 dark:border-white/5 md:col-span-2">
      <div class="flex flex-col lg:flex-row h-full">
        <div class="lg:w-1/2 overflow-hidden">
          <img
            alt="Bigleaf Maple in fall"
            src={BIGLEAF_IMG}
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 dark:opacity-80 dark:group-hover:opacity-100"
          />
        </div>
        <div class="lg:w-1/2 p-10 flex flex-col">
          <div class="px-3 py-1 bg-emerald-100/50 dark:bg-forest-accent w-fit rounded-full text-[10px] font-bold tracking-widest uppercase text-emerald-900 dark:text-primary mb-6 dark:border dark:border-white/10">
            Broadleaf
          </div>
          <h3 class="text-3xl font-serif text-primary mb-2">Bigleaf Maple</h3>
          <p class="italic text-sm text-on-surface-variant dark:text-secondary mb-6 font-body">Acer macrophyllum</p>
          <p class="text-on-surface-variant text-base font-body leading-relaxed mb-8">
            Boasting the largest leaves of any maple, this species is often draped in moss and ferns,
            creating its own vertical ecosystem within the canopy. Its wood is highly prized for instrument making.
          </p>
          <div class="mt-auto space-y-4">
            <div class="flex gap-4">
              <div class="bg-surface-container-low dark:bg-forest-muted p-3 rounded-xl flex-1 text-center dark:border dark:border-white/5">
                <p class="text-[10px] font-bold text-outline uppercase">Leaf Width</p>
                <p class="text-lg font-bold text-primary">30-60cm</p>
              </div>
              <div class="bg-surface-container-low dark:bg-forest-muted p-3 rounded-xl flex-1 text-center dark:border dark:border-white/5">
                <p class="text-[10px] font-bold text-outline uppercase">Lifespan</p>
                <p class="text-lg font-bold text-primary">300y</p>
              </div>
            </div>
            <button class="w-full py-4 bg-primary dark:bg-earthy-green text-on-primary dark:text-primary dark:border dark:border-white/10 rounded-full font-bold hover:bg-primary-container dark:hover:bg-forest-accent transition-all dark:shadow-lg dark:uppercase dark:tracking-widest dark:text-sm">
              Explore Ecosystem
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function PlantGrid() {
  return (
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {plants.map(plant => <PlantCard plant={plant} />)}
      <BigleafMapleCard />
    </div>
  )
}

export default PlantGrid
