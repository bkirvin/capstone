import NavProvider from '../providers/NavProvider'
import TNav from './nav/TNav'
import Hamburger from './Hamburger'
import SNav from './nav/SNav'

const Header = () => {
  return (
    <header>
      <section className="row justify-content-center">
        <div className="col-8">
          <img
            src={require('../assets/Logo x.png')}
            alt="Lemon logo"></img>
          <nav>
              <div className="hFrame auto-space center">
                  <NavProvider>
                    <TNav />
                    <SNav />
                    <Hamburger />
                  </NavProvider>
              </div>
          </nav>
        </div>
      </section>
    </header>
  )
}

export default Header
