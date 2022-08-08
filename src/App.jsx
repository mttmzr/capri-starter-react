import './styles.css'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { About } from './pages/About.jsx'
import { Home } from './pages/Home.jsx'
import { Preview } from './Preview.jsx'

export function App() {
  return (
    <Suspense>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/preview" element={<Preview />} />
      </Routes>
    </Suspense>
  )
}
