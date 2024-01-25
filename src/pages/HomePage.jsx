import Home from '../components/Home'
import { Skills } from '../components/Skills/Skills'
import { Portfolio } from '../components/Portfolio'
// import { ContactForm } from '../components/ContactForm'
import { Navbar } from '../components/Navbar'


export const HomePage = () => {
  return (
    <main className='mainContainer'>
      <Navbar />
      <Home />
      <Skills />
      <Portfolio />
    </main>
  )
}
