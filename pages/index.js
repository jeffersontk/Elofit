import Toolbar from '../components/toolbar'
import Hero from '../components/hero'
import UnidadesCard from '../components/unidadesCard'
import EquipeCard from '../components/equipeCard'
import Atividades from '../components/atividades'
import Contato from '../components/contato'
import Depoimento from '../components/depoimento'
import Footer from '../components/footer'

function Home() {
  return (
    <div className="container-fluid">
      <Toolbar />
      <Hero />
      <UnidadesCard/>
      <EquipeCard />
      <Atividades />
      <Contato />
      <Depoimento />
      <Footer/>
    </div>
  )
}

export default Home
