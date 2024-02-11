import LemonSign from './LemonSign'
import { Link } from 'react-router-dom'

const Hero = () => {
  const heroPic = {
    backgroundImage: `url(${require('../assets/restauranfood.jpg')})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  return (
    <section id="little-lemon-hero" className="container-fluid">
      <div className="row text-center justify-content-center">
        <article className="col-8">
          <div className="hFrame auto-spread">
            <LemonSign />
            <div>
              <div className="imgFrame" style={heroPic}></div>
              {/* <img
                className="hero"
                src={require('../../assets/restauranfood.jpg')}
                alt="restaurant food"></img> */}
            </div>
          </div>
        </article>
      </div>
      <div className="row justify-content-center">
        <div className="col-8">
          <Link
            to="/reservations">
              <button>Reserve a Table</button></Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
