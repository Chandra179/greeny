import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from '../sections/HeroSection'
import LivingGiantsSection from '../sections/LivingGiantsSection'
import FieldGuideSidebar from '../sections/FieldGuideSidebar'
import JournalSection from '../sections/JournalSection'
import NewsletterSection from '../sections/NewsletterSection'

function Home() {
  return (
    <div class="bg-surface text-on-surface min-h-screen">
      <Navbar />
      <FieldGuideSidebar />
      <main>
        <HeroSection />
        <LivingGiantsSection />
        <JournalSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  )
}

export default Home
