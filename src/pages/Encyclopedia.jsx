import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import EncyclopediaSidebar from '../sections/encyclopedia/EncyclopediaSidebar'
import EncyclopediaHeader from '../sections/encyclopedia/EncyclopediaHeader'
import PlantGrid from '../sections/encyclopedia/PlantGrid'
import JournalFAB from '../sections/encyclopedia/JournalFAB'

function Encyclopedia() {
  return (
    <div class="bg-surface text-on-surface min-h-screen">
      <Navbar />
      <div class="flex min-h-screen pt-20">
        <EncyclopediaSidebar />
        <main class="flex-1 px-8 py-12 max-w-7xl">
          <EncyclopediaHeader />
          <PlantGrid />
        </main>
      </div>
      <Footer />
      <JournalFAB />
    </div>
  )
}

export default Encyclopedia
