function SoundLibraryGrid() {
  return (
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24">
      {/* Large card — Distant Thunder */}
      <div class="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-low h-[450px]">
        <img
          alt="Mist rising from dark green valley floor"
          class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBS_XeBzbRGM31PYOCzXNjmRKjJDbBUTohBn2KYUYAa7tKFIOFJ19MFj2Kuxxpntg2_2vUUUiNkxFLLLf0DktqfXddyh4gZEI-tnRe_zgj-CHMpYoxn6ufUO6gIp8fyerU_VTfu8hjCHNP2htoIADdxRO9-S3ABgvPR3se8blsK3ciQ6X25Ah3GDZCE3FznTw4WtLoZN2tvTagACDLJ194Fconh5SyIHfyJEJ3sqPDEWpHFcw4AHruOjgx-zroT3czaoEvWQSWlsws"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent p-8 flex flex-col justify-end">
          <div class="flex justify-between items-end">
            <div>
              <h3 class="font-headline text-3xl text-white mb-2">Distant Thunder</h3>
              <p class="text-on-primary-container max-w-md">
                Low frequency rumbles echoing through the valley. Ideal for deep sleep and focus.
              </p>
            </div>
            <button class="w-14 h-14 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shadow-lg">
              <span class="material-symbols-outlined">play_arrow</span>
            </button>
          </div>
        </div>
      </div>

      {/* Right column — two small cards */}
      <div class="md:col-span-4 flex flex-col gap-6">
        {/* Soft Drizzle */}
        <div class="flex-1 group relative overflow-hidden rounded-xl bg-surface-container-low min-h-[200px]">
          <img
            alt="Extreme close up of water on pine needles"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPOq0lmZpC7MlPu6k2oG80kdxM7-2ycDpzV4X77IkPEUZr01kOUMmbJjov9IHp-CSx-q96C9XuF-7QjKr9S2oSVIH5XNJYf7VFBd1d6sc7yI46YF-2uXj4ns8FExfZSGCTuNAu1nU5vH8mBXjIO98rbrv1Om3ENgCyM8al-eu8gOlu70yeIYTG8ZCa9xFwlklJS4ZELCLxwMlzYOCAAgRgkafa30Lt0ReA1o6WQxKkABQzSWr_Y6DZEixU5iDXA8MUwMd0OBWGSeg"
          />
          <div class="absolute inset-0 bg-primary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <button class="bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-2 text-white font-medium">
              Listen: Soft Drizzle
            </button>
          </div>
          <div class="absolute bottom-4 left-4 text-white">
            <h4 class="font-headline text-xl">Soft Drizzle</h4>
          </div>
        </div>

        {/* Rain on Mossy Rocks */}
        <div class="flex-1 group relative overflow-hidden rounded-xl bg-surface-container-low min-h-[200px]">
          <img
            alt="Rain hitting a mossy rock in a stream"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDIJ7VAgYP8-uGHoVpt_sICBBZ8UPDfD7xLQoyHCLPn-nf-2L4W83hifBcDZ61me-9XQ0QSkSAobU0petPe2r_v-Z9DP92ehrjPe2WVFfniIz8XUJpD_YeoVdSTjSzbGcFTaAGxIGTrD8Q5IdQg-EQksgy-OgAK-KkgC_EetaPPYdeaDAHVZrONacfDmPdc35CdFtvuWe7727G2uUcKpqQh5qU6mQEGJjs1OZ_3yZxN-rlvhh9uUTSwQEqxljmwe2LQvXQ7OF-JUg"
          />
          <div class="absolute inset-0 bg-primary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <button class="bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-2 text-white font-medium">
              Listen: Mossy Rocks
            </button>
          </div>
          <div class="absolute bottom-4 left-4 text-white">
            <h4 class="font-headline text-xl">Rain on Mossy Rocks</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SoundLibraryGrid
