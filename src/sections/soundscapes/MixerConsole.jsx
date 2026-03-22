import { createSignal } from 'solid-js'

const sliders = [
  { label: 'Rain Intensity', initial: 80, minLabel: 'Mist', maxLabel: 'Storm', status: 'Heavy Downpour' },
  { label: 'Wind & Canopy', initial: 45, minLabel: 'Still', maxLabel: 'Gusty', status: 'Steady Breeze' },
  { label: 'Wildlife Activity', initial: 20, minLabel: 'Silent', maxLabel: 'Vibrant', status: 'Distant Birds' },
  { label: 'Sub-Bass Thunder', initial: 60, minLabel: 'None', maxLabel: 'Deep', status: 'Vibrational' },
]

function SliderCard(props) {
  const [value, setValue] = createSignal(props.initial)

  return (
    <div class="bg-surface-container-lowest p-6 rounded-2xl shadow-sm">
      <div class="flex justify-between items-center mb-4">
        <span class="font-label font-bold text-primary">{props.label}</span>
        <span class="text-sm text-on-surface-variant italic">{props.status}</span>
      </div>
      <input
        class="w-full h-1 bg-surface-container-high rounded-full appearance-none cursor-pointer accent-primary"
        type="range"
        min="0"
        max="100"
        value={value()}
        onInput={e => setValue(e.target.value)}
      />
      <div class="flex justify-between mt-4 text-xs text-on-surface-variant">
        <span>{props.minLabel}</span>
        <span>{props.maxLabel}</span>
      </div>
    </div>
  )
}

function MixerConsole() {
  return (
    <div class="bg-surface-container-low rounded-[3rem] p-12 relative overflow-hidden">
      <div class="relative z-10 flex flex-col md:flex-row gap-16 items-center">
        {/* Left — description */}
        <div class="w-full md:w-1/3 text-center md:text-left">
          <h2 class="font-headline text-4xl text-primary mb-6">Mixer Console</h2>
          <p class="text-on-surface-variant mb-8 leading-relaxed">
            Adjust the levels of different forest elements to create your perfect sanctuary.
          </p>
          <button class="bg-primary text-on-primary px-8 py-3 rounded-full font-medium hover:bg-primary-container transition-colors">
            Save Atmosphere
          </button>
        </div>

        {/* Right — sliders grid */}
        <div class="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {sliders.map(s => (
            <SliderCard
              label={s.label}
              initial={s.initial}
              minLabel={s.minLabel}
              maxLabel={s.maxLabel}
              status={s.status}
            />
          ))}
        </div>
      </div>

      {/* Decorative blobs */}
      <div class="absolute top-0 right-0 w-64 h-64 bg-secondary-container/30 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
      <div class="absolute bottom-0 left-0 w-64 h-64 bg-primary-container/20 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none" />
    </div>
  )
}

export default MixerConsole
