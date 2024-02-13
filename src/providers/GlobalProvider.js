import { createContext, useContext, useState, useRef } from 'react'

const GlobalContext = createContext()

const GlobalProvider = ({children}) => {

  const todayDate = () => {
    const date = new Date(Date.now())
    const year = date.toLocaleString('default', { year: 'numeric' })
    const month = date.toLocaleString('default', { month: '2-digit' })
    const day = date.toLocaleString('default', { day: '2-digit' })
    console.log('date', [month, day, year].join('/'))
    return [year, month, day].join('-')
  }

  const initData = {
    date: todayDate(),
    timeSlot: '',
    firstName: '',
    lastName: '',
    partyNum: 2,
    email: '',
    occasion: 'none',
    wheelchair: false
  }

  const initSlots = [
    {
      time: '6:00 PM',
      reserved: false,
      selected: false
    },
    {
      time: '6:30 PM',
      reserved: true,
      selected: false
    },
    {
      time: '7:00 PM',
      reserved: false,
      selected: false
    },
    {
      time: '7:30 PM',
      reserved: false,
      selected: false
    },
    {
      time: '8:00 PM',
      reserved: true,
      selected: false
    },
    {
      time: '8:30 PM',
      reserved: false,
      selected: false
    },
    {
      time: '9:00 PM',
      reserved: false,
      selected: false
    }
  ]

  const initBooster = {
    requested: false,
    num: 1
  }

  const initHighchair = {
    requested: false,
    num: 1
  }

  const clearForm = () => {
    setTimeSlots(prevState => {
      console.log("time slot verified", prevState)
      const state = [...prevState]
      const found = state.find(x => x.selected)
      if (found) {
        found.reserved = true
        found.selected = false
      }
      console.log('found', found)
      return state
    })
    setFormData({...initData})
    setHighchair({...initHighchair})
    setBooster({...initBooster})
  }

  const [ timeSlots, setTimeSlots ] = useState([...initSlots])

  const occasions = useRef([
    'Anniversary',
    'Birthday',
    'Engagement',
    'Reception'
  ])

  const [ formData, setFormData ] = useState({...initData})

  const [ booster, setBooster ] = useState({...initBooster})

  const [ highchair, setHighchair ] = useState({...initHighchair})


  const props = {
    timeSlots,
    setTimeSlots,
    occasions,
    formData,
    setFormData,
    booster,
    setBooster,
    highchair,
    setHighchair,
    clearForm
  }

  return (
    <GlobalContext.Provider value={props}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext)

export default GlobalProvider
