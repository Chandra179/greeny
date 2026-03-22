import { createSignal, onMount } from 'solid-js'
import { A } from '@solidjs/router'

function Navbar() {
  const [menuOpen, setMenuOpen] = createSignal(false)
  const [isDark, setIsDark] = createSignal(false)

  onMount(() => {
    setIsDark(document.documentElement.classList.contains('dark'))
  })

  const toggleDark = () => {
    const next = !isDark()
    setIsDark(next)
    document.documentElement.classList.toggle('dark', next)
  }

  const linkBase = "transition-colors duration-500"
  const active = "text-emerald-900 dark:text-emerald-200 border-b-2 border-emerald-800 pb-1"
  const inactive = "text-emerald-800/70 dark:text-emerald-100/70 hover:text-emerald-600 dark:hover:text-emerald-300"

  return (
    <nav class="fixed top-0 w-full z-50 bg-white/70 dark:bg-emerald-950/70 backdrop-blur-md shadow-[0px_20px_40px_rgba(13,29,42,0.06)]">
      <div class="flex justify-between items-center px-6 md:px-8 py-4 max-w-screen-2xl mx-auto">
        {/* Logo */}
        <A href="/" class="font-serif text-2xl italic font-light text-emerald-900 dark:text-emerald-50">
          Sylvan Ethos
        </A>

        {/* Desktop Nav Links */}
        <div class="hidden md:flex items-center gap-8 font-serif text-lg tracking-tight">
          <A href="/" class={`${linkBase}`} activeClass={active} inactiveClass={inactive} end>Home</A>
          <A href="/encyclopedia" class={`${linkBase}`} activeClass={active} inactiveClass={inactive}>Flora Encyclopedia</A>
          <A href="/soundscapes" class={`${linkBase}`} activeClass={active} inactiveClass={inactive}>Soundscapes</A>
          <A href="/journal" class={`${linkBase}`} activeClass={active} inactiveClass={inactive}>Journal</A>
        </div>

        {/* Icons + Mobile Toggle */}
        <div class="flex items-center gap-4 text-emerald-900 dark:text-emerald-100">
          <button
            onClick={toggleDark}
            class="material-symbols-outlined cursor-pointer hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark() ? 'light_mode' : 'dark_mode'}
          </button>
          <span class="material-symbols-outlined cursor-pointer hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors">search</span>
          <span class="material-symbols-outlined cursor-pointer hover:text-emerald-600 transition-colors hidden md:inline">account_circle</span>
          <button
            class="md:hidden material-symbols-outlined cursor-pointer hover:text-emerald-600 transition-colors"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen() ? 'close' : 'menu'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen() && (
        <div class="md:hidden bg-white/95 dark:bg-emerald-950/95 backdrop-blur-md px-6 pb-6 flex flex-col gap-4 font-serif text-lg">
          <A href="/" class="text-emerald-900 dark:text-emerald-200 border-b border-emerald-100 dark:border-emerald-800 py-3" onClick={() => setMenuOpen(false)}>Home</A>
          <A href="/encyclopedia" class="text-emerald-800/80 dark:text-emerald-100/80 border-b border-emerald-100 dark:border-emerald-800 py-3" onClick={() => setMenuOpen(false)}>Flora Encyclopedia</A>
          <A href="/soundscapes" class="text-emerald-800/80 dark:text-emerald-100/80 border-b border-emerald-100 dark:border-emerald-800 py-3" onClick={() => setMenuOpen(false)}>Soundscapes</A>
          <A href="/journal" class="text-emerald-800/80 dark:text-emerald-100/80 py-3" onClick={() => setMenuOpen(false)}>Journal</A>
        </div>
      )}
    </nav>
  )
}

export default Navbar
