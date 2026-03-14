import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import './App.scss'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Ewok from './pages/Ewok'
import Pikachu from './pages/Pikachu'
import Stargate from './pages/Stargate'

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/pikachu">Pikachu</NavLink>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ewok" element={<Ewok />} />
          <Route path="/pikachu" element={<Pikachu />} />
          <Route path="/stargate" element={<Stargate />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
