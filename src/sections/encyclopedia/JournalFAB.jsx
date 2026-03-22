function JournalFAB() {
  return (
    <button
      class="fixed bottom-8 right-8 w-16 h-16 bg-secondary dark:bg-earthy-green text-on-secondary dark:text-primary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40 dark:border dark:border-white/20"
      aria-label="New journal entry"
    >
      <span class="material-symbols-outlined text-3xl">edit_note</span>
    </button>
  )
}

export default JournalFAB
