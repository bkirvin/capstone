import ItineraryItems from '../components/ItineraryItems'

const Itinerary = () => {

  return (
    <section id="itinerary">
      <div className="row justify-content-center">
        <div className="col-sm-8 col-md-4">
          <ItineraryItems />
        </div>
      </div>
    </section>
  )
}

export default Itinerary
