import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MyProducts from './pages/MyProducts'
import RecommendProducts from './pages/RecommendProducts'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-products" element={<MyProducts />} />
        <Route path="/recommend-products" element={<RecommendProducts />} />
      </Routes>
    </Router>
  )
}

export default App
