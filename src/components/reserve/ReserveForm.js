import { useGlobalContext } from '../../providers/GlobalProvider'
import TimeSlot from './TimeSlot'
import Accommodations from './Accommodations'
import { useNavigate } from 'react-router-dom'

const ReserveForm = () => {

  const navigate = useNavigate()

  const { formData, setFormData } = useGlobalContext()
  const { timeSlots } = useGlobalContext()

  const handleDate = (e) => {
    console.log('target date format', e.target.value, typeof e.target.value)
    setFormData(prevState => {
      const state = {...prevState}
      state.date = e.target.value
      return state
    })
  }
  const changeDining = (e) => {
    setFormData(prevState => {
      const state = {...prevState}
      state.partyNum = e.target.value
      return state
    })
  }

  const changeOccasion = (e) => {
    setFormData(prevState => {
      const state = {...prevState}
      state.occasion = e.target.value
      return state
    })
  }

  const changeFirstName = (e) => {
    setFormData(prevState => {
      const state = {...prevState}
      state.firstName = e.target.value
      return state
    })
  }

  const changeLastName = (e) => {
    setFormData(prevState => {
      const state = {...prevState}
      state.lastName = e.target.value
      return state
    })
  }

  const changeEmail = (e) => {
    setFormData(prevState => {
      const state = {...prevState}
      state.email = e.target.value
      return state
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submitting', formData)
    navigate('/confirm')
  }

  return (
    <article>
      <form className="row justify-content-center" onSubmit={handleSubmit}>
        <div className="col-10 col-md-8">
          <fieldset>
            <h3>When will you be dining with us?</h3>
            <input
              type="date"
              required
              value={formData.date}
              onChange={handleDate}></input>
          </fieldset>
          <fieldset>
            <div className="hFrame auto-spread center">
              <h6>SELECT TIME SLOT</h6>
              <input id="timeslot" type="text" value={formData.timeSlot} required readOnly/>
            </div>
            <div className="hFrame auto-spread">
              <div className="vFrame slotbox">
                {timeSlots.map(slot => {
                  return (
                    <TimeSlot key={slot.time} slot={slot}/>
                  )
                })}
              </div>
            </div>
          </fieldset>
          <fieldset>
            <h3>How many will be dining?</h3>
            <input required type="number" min="2" max="10" value={formData.partyNum} onChange={changeDining}></input>
          </fieldset>
          <fieldset>
            <h3>Will this be a special occasion?</h3>
            <select value={formData.occasion} onChange={changeOccasion}>
              <option value="none">None</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Engagement">Engagement</option>
              <option value="Birthday">Birthday</option>
              <option value="Reception">Reception</option>
            </select>
          </fieldset>
          <fieldset id="accommodations">
            <div className="row justify-content-center">
              <div className="col-8 col-md-6">
                  <Accommodations />
              </div>
            </div>
          </fieldset>
          <fieldset className="container">
            <div className="hFrameWrap auto-spread center">
              <div>
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" required type="text" value={formData.firstName} onChange={changeFirstName}></input>
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" required type="text" value={formData.lastName} onChange={changeLastName}></input>
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input id="email" required type="email" value={formData.email} onChange={changeEmail}></input>
              </div>
            </div>
          </fieldset>
            <button type="submit">CONTINUE</button>
        </div>
      </form>
    </article>
  )
}

export default ReserveForm
