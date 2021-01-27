import Head from 'next/head'
import Toolbar from '../src/components/toolbar'
import Hero from '../src/components/hero'
import UnidadesCard from '../src/components/unidadesCard'
import EquipeCard from '../src/components/equipeCard'
import Atividades from '../src/components/atividades'
import Contato from '../src/components/contato'
import Depoimento from '../src/components/depoimento'
import Footer from '../src/components/footer'

function Home() {
  return (
    <div className="container-fluid w-screen h-screen">
      <Head>
        <title>Rede Elofit</title>
      </Head>
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
