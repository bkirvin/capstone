const Hero = () => {
  return (
    <section className="fullCol" style={{gridRow: '1/ span 1', backgroundColor: '#495E57'}}>
      <div className="mainCol" style={{gridRow: '1/ span 1'}}>
      <section className="mainHero">
        <article className="horizontalFrame left-items">
          <div className="signage">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis</p>
            <button>
              <h5>Reserve a Table</h5>
            </button>
          </div>
          <div style={{display: 'relative'}}>
            <img
                src={require('../assets/restauranfood.jpg')}
                alt="restaurant"></img>
          </div>
        </article>
      </section>
      </div>
    </section>
  )
}

export default Hero
