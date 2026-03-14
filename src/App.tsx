import { BrowserRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './App.scss'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Ewok from './pages/Ewok'
import Pikachu from './pages/Pikachu'
import Stargate from './pages/Stargate'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <TransitionGroup component={null}>
      <CSSTransition key={location.key} classNames="page" timeout={400} unmountOnExit>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/ewok" element={<Ewok />} />
          <Route path="/pikachu" element={<Pikachu />} />
          <Route path="/stargate" element={<Stargate />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  )
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/pikachu">Pikachu</NavLink>
      </nav>
      <main>
        <AnimatedRoutes />
      </main>
    </BrowserRouter>
  )
}

export default App
