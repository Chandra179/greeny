function Footer() {
  return (
    <footer class="w-full rounded-t-[3rem] mt-20 bg-emerald-900 dark:bg-emerald-950 text-emerald-50 dark:text-emerald-100 p-8 md:p-12 flex flex-col md:flex-row justify-between items-start gap-8">
      {/* Brand */}
      <div class="max-w-sm">
        <div class="font-serif text-2xl italic text-emerald-50 mb-6">Sylvan Ethos</div>
        <p class="font-serif text-base font-light opacity-80 leading-relaxed">
          Dedicated to the preservation and documentation of primary forests worldwide.
          The Digital Arboretum is a tribute to the giants that came before us.
        </p>
      </div>

      {/* Links */}
      <div class="grid grid-cols-2 gap-12 md:gap-16">
        <div class="flex flex-col gap-4 font-serif text-base font-light">
          <h4 class="text-emerald-400 font-bold uppercase tracking-widest text-xs">Community</h4>
          <a class="text-emerald-200/80 hover:text-white transition-colors" href="#">Conservation Efforts</a>
          <a class="text-emerald-200/80 hover:text-white transition-colors" href="#">Forest Photography</a>
          <a class="text-emerald-200/80 hover:text-white transition-colors" href="#">Forest Whispers Newsletter</a>
        </div>
        <div class="flex flex-col gap-4 font-serif text-base font-light">
          <h4 class="text-emerald-400 font-bold uppercase tracking-widest text-xs">Social</h4>
          <a class="text-emerald-200/80 hover:text-white transition-colors underline decoration-emerald-500" href="#">Instagram</a>
          <a class="text-emerald-200/80 hover:text-white transition-colors" href="#">Vimeo</a>
          <a class="text-emerald-200/80 hover:text-white transition-colors" href="#">Twitter</a>
        </div>
      </div>

      {/* Copyright */}
      <div class="w-full md:w-auto mt-4 md:mt-0 text-xs opacity-60">
        © 2024 Sylvan Ethos. Protecting the Ancient Growth.
      </div>
    </footer>
  )
}

export default Footer
