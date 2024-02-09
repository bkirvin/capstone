const TNav = () => {
  return (
      <ul className="hFrame auto-spread center topNav">
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
              Order
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
  )
}

export default TNav
