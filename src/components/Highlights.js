const Highlights = () => {
  return (
    <section id="highlights">
      <div className="row justify-content-center">
        <div className="col-8">
          <div className="row promo">
            <div className="hFrameWrap auto-spread center">
              <h3>This Week's Specials!</h3>
              <button>
                Online Menu
              </button>
            </div>
          </div>
          <div className="row">
            <div className="hFrame flx-left sm-gap">
              <article>
                <div className="scard">
                  <div className="hero">
                    <img
                      src={require('../assets/greek salad.jpg')}
                      alt="greek salad" />
                  </div>
                  <div className="content">
                    <div className="hFrame auto-space center">
                      <div className="title">Greek Salad</div>
                      <div className="price">$12.99</div>
                    </div>
                    <p>
                      The famous Greek salad of crispy lettuce, peppers, olives and our
                      Chicago style feta cheese, garnished with  crunchy garlic and rosemary croutons.</p>
                    <div className="hFrame auto-space">
                      <div className="highlight">Order a Delivery</div>
                      <img
                        className="icon"
                        src={require('../assets/bike.png')}
                        alt="bicycle" />
                    </div>
                  </div>
                </div>
              </article>
              <article>
                <div className="scard">
                  <div className="hero">
                    <img
                      src={require('../assets/Bruschetta.png')}
                      alt="greek salad" />
                  </div>
                  <div className="content">
                    <div className="hFrame auto-space center">
                      <div className="title">Bruschetta</div>
                      <div className="price">$5.99</div>
                    </div>
                    <p>
                      Our Bruschetta is made from grilled bread that has been smeared 
                      with garlic and seasoned with salt and olive oil.</p>
                    <div className="hFrame auto-space">
                      <div className="highlight">Order a Delivery</div>
                      <img
                        className="icon"
                        src={require('../assets/bike.png')}
                        alt="bicycle" />
                    </div>
                  </div>
                </div>
              </article>
              <article>
                <div className="scard">
                  <div className="hero">
                    <img
                      src={require('../assets/lemon dessert.jpg')}
                      alt="greek salad" />
                  </div>
                  <div className="content">
                    <div className="hFrame auto-space center">
                      <div className="title">Lemon Dessert</div>
                      <div className="price">$5.00</div>
                    </div>
                    <p>
                      This comes straight from Grandma’s recipe book, every ingredient
                      has been sourced and is as authentic as can be imagined.</p>
                    <div className="hFrame auto-space">
                      <div className="highlight">Order a Delivery</div>
                      <img
                        className="icon"
                        src={require('../assets/bike.png')}
                        alt="bicycle" />
                    </div>
                  </div>
                </div>
              </article>
              <article>
                <div className="scard">
                  <div className="hero">
                    <img
                      src={require('../assets/greek salad.jpg')}
                      alt="greek salad" />
                  </div>
                  <div className="content">
                    <div className="hFrame auto-space center">
                      <div className="title">Greek Salad</div>
                      <div className="price">$12.99</div>
                    </div>
                    <p>
                      The famous Greek salad of crispy lettuce, peppers, olives and our
                      Chicago style feta cheese, garnished with  crunchy garlic and rosemary croutons.</p>
                    <div className="hFrame auto-space">
                      <div className="highlight">Order a Delivery</div>
                      <img
                        className="icon"
                        src={require('../assets/bike.png')}
                        alt="bicycle" />
                    </div>
                  </div>
                </div>
              </article>
              <article>
                <div className="scard">
                  <div className="hero">
                    <img
                      src={require('../assets/Bruschetta.png')}
                      alt="greek salad" />
                  </div>
                  <div className="content">
                    <div className="hFrame auto-space center">
                      <div className="title">Bruschetta</div>
                      <div className="price">$5.99</div>
                    </div>
                    <p>
                      Our Bruschetta is made from grilled bread that has been smeared 
                      with garlic and seasoned with salt and olive oil.</p>
                    <div className="hFrame auto-space">
                      <div className="highlight">Order a Delivery</div>
                      <img
                        className="icon"
                        src={require('../assets/bike.png')}
                        alt="bicycle" />
                    </div>
                  </div>
                </div>
              </article>
              <article>
                <div className="scard">
                  <div className="hero">
                    <img
                      src={require('../assets/lemon dessert.jpg')}
                      alt="greek salad" />
                  </div>
                  <div className="content">
                    <div className="hFrame auto-space center">
                      <div className="title">Lemon Dessert</div>
                      <div className="price">$5.00</div>
                    </div>
                    <p>
                      This comes straight from Grandma’s recipe book, every ingredient
                      has been sourced and is as authentic as can be imagined.</p>
                    <div className="hFrame auto-space">
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default Highlights
