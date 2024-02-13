import BigCheck from './BigCheck'
import { useEffect } from 'react'
import { useGlobalContext } from '../providers/GlobalProvider'

const Verified = () => {

  const { formData, highchair, booster, clearForm } = useGlobalContext()

  useEffect (() => {
    clearForm()
    console.log('formData', formData)
    console.log('highchair', highchair)
    console.log('booster', booster)

  }, [])
  return (
    <div className="checked">
      <BigCheck />
      <h3>You're reservations are confirmed!</h3>
      <p>If you do not receive an email confirmation within the hour, please contact us at (555) 555-5555</p>
    </div>
  )
}

export default Verified
