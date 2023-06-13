import { Cards } from "./components/Cards"
import { Contact } from "./components/Contact"
import { Header } from "./components/Header"
import { Nav } from "./components/Nav"
import { Skills } from "./components/Skills"


export default function Home() {
  return (
    <main>
      <section className='bg-gradient-to-b from-amber-200 via-violet-600 to-sky-900 min-h-screen'>
      

      <Header />
      <Skills />
      <Cards />
      <Contact />
      <Nav />

      
      </section>
    </main>
  )
}
