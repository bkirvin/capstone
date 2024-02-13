import Header from '../components/Header'
import ReserveTable from '../components/ReserveTable'
import ReserveForm from '../components/ReserveForm'
import Footer from '../components/Footer'

const Reservation = () => {


  return (
    <>
      <Header />
      <main>
        <ReserveTable />
        <ReserveForm />
        <Footer />
      </main>
    </>
  )
}

export default Reservation
