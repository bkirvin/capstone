import Nav from './Nav'
import Logo from '../assets/Logo.svg'

const Header = () => {
  return (
    <header className="mainCol" style={{gridRow: '1/ span 1'}}>
      <div className="horizontalFrameWrap sm-gap center">
        <img
          src={Logo}
          alt="Little Lemon logo" />
        <Nav />
      </div>
    </header>
  )
}

export default Header
