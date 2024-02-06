import Nav from './Nav'
import Logo from '../assets/Logo.svg'

const Header = () => {
  return (
    <header>
      <div className="horizontalFrame md-gap center">
        <img
          src={Logo}
          alt="Little Lemon logo" />
        <Nav />
      </div>
      
    </header>
  )
}

export default Header
