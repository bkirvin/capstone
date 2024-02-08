const Highlights = () => {
  return (
    <section className="mainCol" style={{marginTop: '100px'}}>
      <div className="horizontalFrame">
        <h3>This Week's Specials!</h3>
      </div>
      <div className="horizontalFrame md-gap">
        <article className="card cardGrid">
          <div className="card-hero">
            <div className="imgFrame">
              <img
                src={require('../assets/greek salad.jpg')}
                alt="greek salad" />
            </div>
          </div>
          <div className="card-content">
            <div className="verticalFrame auto-space">
              <div className="horizontalFrame auto-spread">
                <div className="cardTitle">Greek Salad</div>
                <div className="highlight alert">$12.99</div>
              </div>
              <p>
                The famous Greek salad of crispy lettuce, peppers, olives and our
                Chicago style feta cheese, garnished with  crunchy garlic and rosemary croutons.</p>
              <div className="horizontalFrame auto-spread">
                <div className="highlight">Order a Delivery</div>
                <img
                  className="icon"
                  src={require('../assets/bike.png')}
                  alt="bicycle" />
              </div>
            </div>
          </div>
        </article>
        <article className="card cardGrid">
          <div className="card-hero">
            <div className="imgFrame">
              <img
                src={require('../assets/Bruschetta.png')}
                alt="greek salad" />
            </div>
          </div>
          <div className="card-content">
            <div className="verticalFrame auto-space">
              <div className="horizontalFrame auto-spread">
                <div className="cardTitle">Bruschetta</div>
                <div className="highlight alert">$5.99</div>
              </div>
              <p>
                Our Bruschetta is made from grilled bread that has been smeared with garlic
                and seasoned with salt and olive oil.</p>
              <div className="horizontalFrame auto-spread">
                <div className="highlight">Order a Delivery</div>
                <img
                  className="icon"
                  src={require('../assets/bike.png')}
                  alt="bicycle" />
              </div>
            </div>
          </div>
        </article>
        <article className="card cardGrid">
          <div className="card-hero">
            <div className="imgFrame">
              <img
                src={require('../assets/lemon dessert.jpg')}
                alt="greek salad" />
            </div>
          </div>
          <div className="card-content">
            <div className="verticalFrame auto-space">
              <div className="horizontalFrame auto-spread">
                <div className="cardTitle">Lemon Dessert</div>
                <div className="highlight alert">$5.00</div>
              </div>
              <p>
              This comes straight from Grandma’s recipe book,
              every ingredient has been sourced and is as authentic as can be imagined.
              </p>
              <div className="horizontalFrame auto-spread">
                <div className="highlight">Order a Delivery</div>
                <img
                  className="icon"
                  src={require('../assets/bike.png')}
                  alt="bicycle" />
              </div>
            </div>
          </div>
        </article>
        <article className="card cardGrid">
          <div className="card-hero">
            <div className="imgFrame">
              <img
                src={require('../assets/greek salad.jpg')}
                alt="greek salad" />
            </div>
          </div>
          <div className="card-content">
            <div className="verticalFrame auto-space">
              <div className="horizontalFrame auto-spread">
                <div className="cardTitle">Greek Salad</div>
                <div className="highlight alert">$12.99</div>
              </div>
              <p>
                The famous Greek salad of crispy lettuce, peppers, olives and our
                Chicago style feta cheese, garnished with  crunchy garlic and rosemary croutons.</p>
              <div className="horizontalFrame auto-spread">
                <div className="highlight">Order a Delivery</div>
                <img
                  className="icon"
                  src={require('../assets/bike.png')}
                  alt="bicycle" />
              </div>
            </div>
          </div>
        </article>
        <article className="card cardGrid">
          <div className="card-hero">
            <div className="imgFrame">
              <img
                src={require('../assets/Bruschetta.png')}
                alt="greek salad" />
            </div>
          </div>
          <div className="card-content">
            <div className="verticalFrame auto-space">
              <div className="horizontalFrame auto-spread">
                <div className="cardTitle">Bruschetta</div>
                <div className="highlight alert">$5.99</div>
              </div>
              <p>
                Our Bruschetta is made from grilled bread that has been smeared with garlic
                and seasoned with salt and olive oil.</p>
              <div className="horizontalFrame auto-spread">
                <div className="highlight">Order a Delivery</div>
                <img
                  className="icon"
                  src={require('../assets/bike.png')}
                  alt="bicycle" />
              </div>
            </div>
          </div>
        </article>
        <article className="card cardGrid">
          <div className="card-hero">
            <div className="imgFrame">
              <img
                src={require('../assets/lemon dessert.jpg')}
                alt="greek salad" />
            </div>
          </div>
          <div className="card-content">
            <div className="verticalFrame auto-space">
              <div className="horizontalFrame auto-spread">
                <div className="cardTitle">Lemon Dessert</div>
                <div className="highlight alert">$5.00</div>
              </div>
              <p>
              This comes straight from Grandma’s recipe book,
              every ingredient has been sourced and is as authentic as can be imagined.
              </p>
              <div className="horizontalFrame auto-spread">
                <div className="highlight">Order a Delivery</div>
                <img
                  className="icon"
                  src={require('../assets/bike.png')}
                  alt="bicycle" />
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Highlights
