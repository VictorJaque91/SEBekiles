import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import Cats from './pages/Cats.jsx'
import Kittens from './pages/Kittens.jsx'
import Shows from './pages/Shows.jsx'
import Health from './pages/Health.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Links from './pages/Links.jsx'
import Breed from './pages/Breed.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/katter" element={<Cats />} />
          <Route path="/kattungar" element={<Kittens />} />
          <Route path="/utstallning" element={<Shows />} />
          <Route path="/halsa" element={<Health />} />
          <Route path="/om-oss" element={<About />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/lankar" element={<Links />} />
          <Route path="/om-rasen" element={<Breed />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}