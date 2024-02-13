import Header from '../components/Header'
import Itinerary from '../components/Itinerary'
import ReserveTop from '../components/ReserveTop'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Confirm = () => {

  return (
    <>
      <Header />
      <ReserveTop step={2} title="Please Review and Confirm Your Itinerary"/>
      <Itinerary />
      <div className="row justify-content-center">
        <div className="col-8">
          <div className="hFrame auto-spread">
            <Link to="/reservations"><button>EDIT</button></Link>
            <Link to="/verify"><button>CONFIRM</button></Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Confirm
