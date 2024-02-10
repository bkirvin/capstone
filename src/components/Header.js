import TNav from './TNav'
import Hamburger from './Hamburger'

const Header = () => {
  return (
    <header>
      <div className="row justify-content-center">
        <div className="col-8">
          <nav>
            <div className="hFrame auto-space center">
              <img
                src={require('../assets/Logo x.png')}
                alt="Lemon logo"></img>
              <TNav />
              <Hamburger />
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
