import { createContext, useContext, useState, useRef, useReducer } from 'react'

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
    dispatch({type: 'clear'})
    setFormData({...initData})
    setHighchair({...initHighchair})
    setBooster({...initBooster})
  }

  const reducer = (state, action) => {
    console.log('state', state)
    console.log('action', action)
    let slot
    const nState = [...state]
    switch(action.type) {
      case 'clear':
        const found = nState.find(x => x.selected)
        if (found) {
          found.reserved = true
          found.selected = false
        }
        console.log('found', found)
        return nState
      case 'undo':
        slot = nState.find(x => x.time === action.time)
        slot.selected = false
        return nState
      default :
        slot = nState.find(x => x.time === action.time)
        slot.selected = true
        return nState
    }
  }

  const [ timeSlots, dispatch ] = useReducer(reducer, [...initSlots])

  const occasions = useRef([
    'Anniversary',
    'Birthday',
    'Engagement',
    'Reception'
  ])

  const [ formData, setFormData ] = useState({...initData})

  const [ booster, setBooster ] = useState({...initBooster})

  const [ highchair, setHighchair ] = useState({...initHighchair})

  const icon = require('../assets/bike.png')

  const featureDishes = [
    {
      key: 1,
      heroImagePath: require('../assets/greek salad.jpg'),
      title: 'Greek Salad',
      price: '$12.99',
      description: `The famous Greek salad of crispy lettuce, peppers, olives and our
      Chicago style feta cheese, garnished with  crunchy garlic and rosemary croutons.`,
      iconPath: icon
    },
    {
      key: 2,
      heroImagePath: require('../assets/Bruschetta.png'),
      title: 'Bruschetta',
      price: '$5.99',
      description: `Our Bruschetta is made from grilled bread that has been smeared 
      with garlic and seasoned with salt and olive oil.`,
      iconPath: icon
    },
    {
      key: 3,
      heroImagePath: require('../assets/lemon dessert.jpg'),
      title: 'Lemon Dessert',
      price: '$5.00',
      description: `This comes straight from Grandma’s recipe book, every ingredient
      has been sourced and is as authentic as can be imagined.`,
      iconPath: icon
    },
    {
      key: 4,
      heroImagePath: require('../assets/greek salad.jpg'),
      title: 'Greek Salad',
      price: '$12.99',
      description: `The famous Greek salad of crispy lettuce, peppers, olives and our
      Chicago style feta cheese, garnished with  crunchy garlic and rosemary croutons.`,
      iconPath: icon
    },
    {
      key: 5,
      heroImagePath: require('../assets/Bruschetta.png'),
      title: 'Bruschetta',
      price: '$5.99',
      description: `Our Bruschetta is made from grilled bread that has been smeared 
      with garlic and seasoned with salt and olive oil.`,
      iconPath: icon
    },
    {
      key: 6,
      heroImagePath: require('../assets/lemon dessert.jpg'),
      title: 'Lemon Dessert',
      price: '$5.00',
      description: `This comes straight from Grandma’s recipe book, every ingredient
      has been sourced and is as authentic as can be imagined.`,
      iconPath: icon
    }
  ]

  const goldStar = require('../assets/Star 1.png')
  const greyStar = require('../assets/Star 2.png')

  const testimonies = [
    {
      key: 1,
      avatar: require('../assets/headshot1.png'),
      name: 'John',
      rating: 3,
      goldStar,
      greyStar,
      quote: `Grid items can also span across multiple row tracks 
      by setting grid-row-end to more than one row track away.`
    },
    {
      key: 2,
      avatar: require('../assets/headshot2.png'),
      name: 'Susie',
      rating: 4,
      goldStar,
      greyStar,
      quote: `(I think you could actually omit any argument to fill(), but I'm not 100% on that.)`
    },
    {
      key: 3,
      avatar: require('../assets/headshot3.png'),
      name: 'Gail',
      rating: 4,
      goldStar,
      greyStar,
      quote: `If you aren't satisfied with the build tool and 
        configuration choices, you can eject at any time.`
    },
    {
      key: 4,
      avatar: require('../assets/headshot4.png'),
      name: 'Jackie',
      rating: 5,
      goldStar,
      greyStar,
      quote: `A perceivable section of content that typically 
        contains a graphical document, images, code snippets.`
    }
  ]


  const props = {
    timeSlots,
    dispatch,
    occasions,
    formData,
    setFormData,
    booster,
    setBooster,
    highchair,
    setHighchair,
    clearForm,
    featureDishes,
    testimonies
  }

  return (
    <GlobalContext.Provider value={props}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext)

export default GlobalProvider
