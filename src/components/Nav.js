const Nav = () => {
  return (
    <nav className="nav">
      <ul className="horizontalFrame md-gap">
        <li>
          <a
            href='/'
            alt="Home link"
            role="button">
              Home
          </a>
        </li>
        <li><a
            href='/about'
            alt="About link"
            role="button">
              About
          </a>
        </li>
        <li><a
            href='/menu'
            alt="Menu link"
            role="button">
              Menu
          </a>
        </li>
        <li><a
            href='/reservations'
            alt="Reservations link"
            role="button">
              Reservations
          </a>
        </li>
        <li><a
            href='/'
            alt="Order Online link"
            role="button">
              Order Online
          </a>
        </li>
        <li><a
            href='/Login'
            alt="Login link"
            role="button">
              Login
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
