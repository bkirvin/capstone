import Highlights from '../components/Highlights'
import Hero from '../components/Hero'

const Main = () => {
  return (
    <main className="mainItem">
      <Hero />
      <Highlights />
      <section className="mainCol" style={{gridRow: '3/ span 1'}}>
        <div className="mainCol" style={{gridRow: '3/ span 1'}}></div>
      </section>
      <section className="fullCol" style={{gridRow: '4/ span 1', backgroundColor: '#495E57'}}>
      </section>
    </main>
  )
}

export default Main
