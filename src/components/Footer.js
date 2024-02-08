import iconLogo from '../assets/iconLogo.png'

const Footer = () => {
  return (
    <footer className="fullCol" style={{gridRow: '6/7'}}>
      <div className="fullCol horizontalFrameWrap lg-gap center">
        <div className="imgFrame">
        <img
          src={iconLogo}
          alt="footer logo" />
        </div>
        <section className="verticalFrame">
          <div className="cardTitle neutral-txt">Navigation</div>
          <ul className="highlight">
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
          <div className="cardTitle neutral-txt">Contact</div>
          <ul className="highlight">
            <li>
              <a href="/address">Address</a>
            </li>
            <li>
              <a href="/phone">Phone</a>
            </li>
            <li>
              <a href="/email">Email</a>
            </li>
          </ul>
        </section>
        <section className="verticalFrame">
          <div className="cardTitle neutral-txt">Social Media</div>
          <ul className="highlight">
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
    // <footer style={{gridRow: '6/ span '}}>

    // </footer>
  )
}

export default Footer
