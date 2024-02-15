import Header from '../components/Header'
import ReserveTop from '../components/reserve/ReserveTop'
import Verified from '../components/Verified'
import Footer from '../components/Footer'
import { useGlobalContext } from '../providers/GlobalProvider'
import { useEffect } from 'react'

const Verify = () => {

  const { clearForm } = useGlobalContext()

  useEffect (() => {
    clearForm()
  }, [])

  return (
    <>
      <Header />
      <ReserveTop step={3} title="All Done!"/>
      <Verified />
      <Footer />
    </>
  )
}

export default Verify
