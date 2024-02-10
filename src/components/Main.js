import Highlights from './Highlights'
import Hero from './Hero'
import Testimonials from './Testimonials'
import About from './About'

const Main = () => {
  return (
    <main className="mainItem">
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
      {/* <section className="mainCol" style={{gridRow: '3/ span 1'}}>
        <div className="mainCol" style={{gridRow: '3/ span 1'}}></div>
      </section>
      <section className="fullCol" style={{gridRow: '4/ span 1', backgroundColor: '#495E57'}}>
      </section> */}
    </main>
  )
}

export default Main
