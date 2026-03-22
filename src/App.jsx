import { Router, Route } from '@solidjs/router'
import Home from './pages/Home'
import Soundscapes from './pages/Soundscapes'
import Journal from './pages/Journal'
import Encyclopedia from './pages/Encyclopedia'

function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/encyclopedia" component={Encyclopedia} />
      <Route path="/soundscapes" component={Soundscapes} />
      <Route path="/journal" component={Journal} />
    </Router>
  )
}

export default App
