import { createSignal } from 'solid-js'

function NewsletterSection() {
  const [email, setEmail] = createSignal('')

  function handleSubmit(e) {
    e.preventDefault()
    // handle subscription
  }

  return (
    <section class="relative py-16 md:py-24 px-6 md:px-8 overflow-hidden">
      <div class="max-w-5xl mx-auto bg-primary rounded-[3rem] p-8 md:p-24 relative z-10 text-center overflow-hidden">
        {/* Decorative gradient */}
        <div class="absolute inset-0 bg-gradient-to-br from-primary via-primary-container to-secondary opacity-40" />

        <div class="relative z-10">
          <span class="material-symbols-outlined text-emerald-300 text-5xl mb-6 block">mail</span>
          <h2 class="text-4xl md:text-6xl text-white font-headline italic mb-6">
            Forest Whispers Newsletter
          </h2>
          <p class="text-emerald-100/70 max-w-lg mx-auto mb-10 md:mb-12 text-base md:text-lg">
            Monthly dispatches of ancient growth documentation, conservation updates, and ethereal photography.
          </p>
          <form
            class="max-w-md mx-auto flex flex-col sm:flex-row gap-4"
            onSubmit={handleSubmit}
          >
            <input
              class="flex-grow bg-white/10 border-b-2 border-emerald-700 text-white placeholder:text-emerald-100/50 px-6 py-4 rounded-xl focus:outline-none focus:border-emerald-400 transition-all"
              placeholder="Your essence (email)"
              type="email"
              value={email()}
              onInput={e => setEmail(e.currentTarget.value)}
              required
            />
            <button
              type="submit"
              class="bg-secondary-fixed text-on-secondary-fixed px-8 py-4 rounded-full font-bold hover:bg-white transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection
