import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SoundscapesHero from '../sections/soundscapes/SoundscapesHero'
import SoundLibraryGrid from '../sections/soundscapes/SoundLibraryGrid'
import MixerConsole from '../sections/soundscapes/MixerConsole'
import FloatingMiniPlayer from '../sections/soundscapes/FloatingMiniPlayer'

function Soundscapes() {
  return (
    <div class="bg-surface text-on-surface min-h-screen">
      <Navbar />
      <SoundscapesHero />
      <main class="max-w-screen-2xl mx-auto px-8 py-24">
        <SoundLibraryGrid />
        <MixerConsole />
      </main>
      <Footer />
      <FloatingMiniPlayer />
    </div>
  )
}

export default Soundscapes
