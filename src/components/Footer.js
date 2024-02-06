import iconLogo from '../assets/iconLogo.png'

const Footer = () => {
  return (
    <footer>
      <div className="horizontalFrame lg-gap center">
        <img
          src={iconLogo}
          alt="footer logo" />
        <section className="verticalFrame">
          <h3>Navigation</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/home">About</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/reservations">Reservations</a>
            </li>
            <li>
              <a href="/order">Order Online</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </section>
        <section className="verticalFrame">
          <h3>Contact</h3>
          <ul>
            <li>
              <a href="/address">Address</a>
            </li>
            <li>
              <a href="/phone">Phone</a>
            </li>
            <li>
              <a href="/email">Enmail</a>
            </li>
          </ul>
        </section>
        <section className="verticalFrame">
          <h3>Social Media</h3>
          <ul>
            <li>
              <a href="/facebook">Facebook</a>
            </li>
            <li>
              <a href="/x">X</a>
            </li>
            <li>
              <a href="/instagram">Instagram</a>
            </li>
            <li>
              <a href="/reddit">Reddit</a>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  )
}

export default Footer
