import { createSignal } from 'solid-js'

function FloatingMiniPlayer() {
  const [playing, setPlaying] = createSignal(true)

  return (
    <div class="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-xl px-6 py-4 rounded-full shadow-2xl z-50 flex items-center gap-6 border border-emerald-100">
      {/* Track info */}
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-full bg-primary overflow-hidden shrink-0">
          <img
            alt="Small thumbnail of raindrops"
            class="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKkvP-y_9KuYG_QUM4fkrMZPfr9kFn-feypQ8v_bALzh_8CGeSVabmYsC5Fh5kl-OfACtQ5YBz1Qb_w8Ou5NjHM9iO9_aMYO1coZonh7LPuRaoJYwm4EKw-UKAAjCApoDfrNmeUsjSW6XpPE61_5D0Co2ub6fIh44BexOz95Y7U38c9AZvt7tWs_ZxXtX2mehFRSuBIO6E7mAVnqHOyzTEfreED0E4dpXJ1ea4LLm_pViMaO9m1TyqIiJwo1PR-pn8pF25iaVrknM"
          />
        </div>
        <div class="hidden sm:block">
          <p class="text-sm font-bold text-primary leading-none">Distant Thunder</p>
          <p class="text-xs text-on-surface-variant">Highlands Region</p>
        </div>
      </div>

      {/* Controls */}
      <div class="flex items-center gap-4">
        <button class="text-primary hover:text-emerald-600 transition-colors">
          <span class="material-symbols-outlined">skip_previous</span>
        </button>
        <button
          class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:scale-105 transition-transform"
          onClick={() => setPlaying(p => !p)}
        >
          <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">
            {playing() ? 'pause' : 'play_arrow'}
          </span>
        </button>
        <button class="text-primary hover:text-emerald-600 transition-colors">
          <span class="material-symbols-outlined">skip_next</span>
        </button>
      </div>

      {/* Volume */}
      <div class="hidden md:flex items-center gap-2">
        <span class="material-symbols-outlined text-sm text-on-surface-variant">volume_up</span>
        <div class="w-24 h-1 bg-surface-container-high rounded-full overflow-hidden">
          <div class="w-2/3 h-full bg-primary" />
        </div>
      </div>
    </div>
  )
}

export default FloatingMiniPlayer
