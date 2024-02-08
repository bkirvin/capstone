const Nav = () => {
  return (
    <nav>
      <ul className="horizontalFrame sm-gap">
        <li>
          <a
            className="leading"
            href='/'
            alt="Home link"
            role="button">
              Home
          </a>
        </li>
        <li><a
            className="leading"
            href='/about'
            alt="About link"
            role="button">
              About
          </a>
        </li>
        <li><a
            className="leading"
            href='/menu'
            alt="Menu link"
            role="button">
              Menu
          </a>
        </li>
        <li><a
            className="leading"
            href='/reservations'
            alt="Reservations link"
            role="button">
              Reservations
          </a>
        </li>
        <li><a
            className="leading"
            href='/'
            alt="Order Online link"
            role="button">
              Order Online
          </a>
        </li>
        <li><a
            className="leading"
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
