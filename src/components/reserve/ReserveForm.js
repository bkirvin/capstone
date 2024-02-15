import { useGlobalContext } from '../../providers/GlobalProvider'
import TimeSlotSelect from './TimeSlotSelect'
import Accommodations from './Accommodations'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Slots from '../../json/timeSlots.json'

const ReserveForm = () => {

  const navigate = useNavigate()

  const { formData, setFormData, dispatch } = useGlobalContext()
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

  // const isValid = () => {
  //   console.log('formData', formData)
  //   return (
  //     formData.firstName &&
  //     formData.lastName &&
  //     formData.email &&
  //     formData.date &&
  //     formData.timeSlot &&
  //     formData.partyNum
  //   )
  // }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submitting', formData)
    navigate('/confirm')
  }

  const fetchData = date => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const schedule = localStorage.getItem(date)
        if (schedule) {
          console.log('local exists', schedule)
          resolve(schedule)
        } else {
          console.log('no local getting remote')
          const slots = Slots.timeSlots
          slots.forEach(slot => {
            slot.reserved = Math.random() < 0.4 ? true : false
          })
          const result = JSON.stringify(slots)
          console.log('result', result)
          localStorage.setItem(date, result)
          resolve(result)
        }
      }, Math.random() * 1000)
    })
  }
  const todayDate = () => {
    const date = new Date(Date.now())
    const year = date.toLocaleString('default', { year: 'numeric' })
    const month = date.toLocaleString('default', { month: '2-digit' })
    const day = date.toLocaleString('default', { day: '2-digit' })
    return [year, month, day].join('-')
  }

  useEffect(() => {
    fetchData(formData.date || todayDate())
      .then(response => JSON.parse(response))
      .then(formatted => dispatch({type: 'set', data: formatted}))
  }, [dispatch, formData.date])

  return (
    <article id="input-section">
      <form data-testid="frm" className="row justify-content-center" onSubmit={handleSubmit}>
        <div className="col-10 col-md-8">
          <fieldset>
            <h3>When will you be dining with us?</h3>
            <input
              data-testid="date"
              type="date"
              required
              value={formData.date}
              min={formData.date}
              onChange={handleDate}></input>
          </fieldset>
          <TimeSlotSelect timeSlots={timeSlots}/>
          <fieldset>
            <h3>How many will be dining?</h3>
            <input data-testid="dining" required type="number" min="2" max="10" value={formData.partyNum} onChange={changeDining}></input>
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
            <h3>Please provide your contact information</h3>
            <div className="hFrameWrap auto-spread center">
              <div>
                <label htmlFor="firstName">First Name</label>
                <input data-testid="firstName" id="firstName" required type="text" value={formData.firstName} onChange={changeFirstName}></input>
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>
                <input data-testid="lastName" id="lastName" required type="text" value={formData.lastName} onChange={changeLastName}></input>
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input data-testid="email" id="email" required type="email" value={formData.email} onChange={changeEmail}></input>
              </div>
            </div>
          </fieldset>
            <button data-testid="formbtn" type="submit">CONTINUE</button>
        </div>
      </form>
    </article>
  )
}

export default ReserveForm
