import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FieldGuideSidebar from '../sections/FieldGuideSidebar'
import FeaturedPostSection from '../sections/journal/FeaturedPostSection'
import CategoryNavSection from '../sections/journal/CategoryNavSection'
import ArticleFeedSection from '../sections/journal/ArticleFeedSection'
import SeasonalDispatchesSection from '../sections/journal/SeasonalDispatchesSection'

function Journal() {
  return (
    <div class="bg-surface text-on-surface min-h-screen">
      <Navbar />
      <FieldGuideSidebar />
      <main class="pt-24">
        <FeaturedPostSection />
        <CategoryNavSection />
        <ArticleFeedSection />
        <SeasonalDispatchesSection />
      </main>
      <Footer />
    </div>
  )
}

export default Journal
