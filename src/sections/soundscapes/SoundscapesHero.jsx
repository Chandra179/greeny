import { createSignal } from 'solid-js'

function SoundscapesHero() {
  const [playing, setPlaying] = createSignal(false)

  return (
    <section class="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div class="absolute inset-0 z-0">
        <img
          alt="Moody dark green forest floor with heavy rain"
          class="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZHXTKeah391ZZl6iDeoV9sGOuqBa_DdOHiZEWiD01selwBMVl6Ha48IJ44i1yT9J_ojrhf-l1GmmdMs3sjdTIGSY8SslPNmqLMJujVZnth4ZdjFsciBwG2nsrFNhRcbskNTC6KR1mqXOM6CdfJiCqlBFBQszDNHNkj4G2AOP4q7-6lD5isLV1D74mIr0fzbOlDidhNCUmXA3OrQ22V1cpFuRKG2vgq4byJMOAuepeNBd8ZR1jMhXophWLH9U0IoGKhfXw9Nf2_bs"
        />
        <div class="absolute inset-0 rain-overlay" />
      </div>

      {/* Content */}
      <div class="relative z-10 text-center px-6 max-w-3xl">
        <span class="text-secondary-fixed font-label tracking-[0.3em] uppercase text-sm mb-4 block">
          Atmospheric Immersions
        </span>
        <h1 class="font-headline text-5xl md:text-7xl text-white mb-6 leading-tight">
          Rainy Forest Soundscapes
        </h1>
        <p class="text-surface-container-highest text-lg md:text-xl font-light mb-10 leading-relaxed italic">
          Lose yourself in the rhythmic cadence of water meeting earth. Every drop tells a story of the ancient canopy.
        </p>

        {/* Global Play Controller */}
        <div class="flex items-center justify-center gap-6">
          <button
            class="w-16 h-16 rounded-full bg-white flex items-center justify-center text-primary hover:scale-105 transition-transform"
            onClick={() => setPlaying(p => !p)}
          >
            <span class="material-symbols-outlined text-3xl" style="font-variation-settings: 'FILL' 1;">
              {playing() ? 'pause' : 'play_arrow'}
            </span>
          </button>
          <div class="text-left hidden md:block">
            <span class="text-white font-medium block">Currently Curating</span>
            <span class="text-surface-container-highest text-sm opacity-80 italic">A Symphony of Wet Leaves</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce">
        <span class="material-symbols-outlined">expand_more</span>
      </div>
    </section>
  )
}

export default SoundscapesHero
