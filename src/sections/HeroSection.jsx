const HERO_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuByT-Z_CBUXHrY1DBVHI3i4QL9hLNY37DIioEDXO3lG_ComSjHvqKsGlWsmCbcbk0U12HRW9pphNYCgSCJMHnBJrJ18mYieroquNxXLevliDrLCJzhswX10TOkrNg47dy7G4ESJ6DidgIVkTH_p0o5Tdo2q5VXb3gi1x-yv0cB2K_DQTuuJSnMomQ0yLd33asseCMfTnArLU0XIv6Pm6BkQt8WJAMQjB7Lly4R8vT0un46UlK10deo3Pd-H6tVgO1HePNf9DtHD2Ws'

function HeroSection() {
  return (
    <header class="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div class="absolute inset-0 z-0">
        <img
          alt="Misty temperate rainforest with ancient cedar trees"
          class="w-full h-full object-cover scale-105"
          src={HERO_IMG}
        />
        <div class="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-surface" />
      </div>

      {/* Content */}
      <div class="relative z-10 text-center px-6 max-w-4xl">
        <h1 class="text-5xl md:text-8xl text-white font-headline font-light italic leading-tight mb-6 drop-shadow-2xl">
          The Breath of the <br />Ancient Canopy
        </h1>
        <p class="text-emerald-50/90 font-body mb-8 max-w-xl mx-auto leading-relaxed text-base md:text-lg">
          Step into a digital arboretum where time slows down. Explore the intricate connection
          between mycelium networks and the giants that reach for the sun.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button class="bg-primary text-on-primary px-10 py-4 rounded-full font-bold hover:bg-primary-container transition-all duration-500 shadow-xl">
            Begin Exploration
          </button>
          <button class="bg-secondary-container/20 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all duration-500">
            Listen to Soundscapes
          </button>
        </div>
      </div>
    </header>
  )
}

export default HeroSection
