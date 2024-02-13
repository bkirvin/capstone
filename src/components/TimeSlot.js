import { useGlobalContext } from '../providers/GlobalProvider'
import { useEffect, useRef } from 'react'

const TimeSlot = (props) => {

  let button = useRef()

  const { timeSlots, setTimeSlots, setFormData } = useGlobalContext()

  const select = (e) => {
    setTimeSlots(prevState => {
      const state = [...prevState]
      const slot = state.find(x => x.time === props.slot.time)
      slot.selected = true
      return state
    })
    setFormData(prevState => {
      const state = {...prevState}
      state.timeSlot = props.slot.time
      return state
    })
  }

  const undoSelect = (e) => {
    e.preventDefault()
    setTimeSlots(prevState => {
      const state = [...prevState]
      const slot = state.find(x => x.time === props.slot.time)
      slot.selected = false
      return state
    })
  }

  const Unavailable = () => {
    return props.slot.reserved ? <span className="unavailable">UNAVAILABLE</span> : <></>
  }

  const Selected = () => {
    return props.slot.selected ? <span className="selected">SELECTED</span> : <></>
  }

  const Button = () => {
    return !props.slot.reserved && !props.slot.selected ? <button onClick={select} ref={button}>SELECT</button> : <button disabled style={{display: props.slot.selected ? 'none' : 'inline'}}>SELECT</button>
  }

  const Undo = () => {
    return props.slot.selected ? <button onClick={undoSelect}>UNDO</button> : <></>
  }

  useEffect(() => {
    if (button.current) button.current.disabled = timeSlots.some(x => x.selected)
  }, [timeSlots])
  return (
      <div className="hFrame auto-spread center">
        <span>{props.slot.time}</span>
        <Unavailable />
        <Selected />
        <Button />
        <Undo />
      </div>
  )
}

export default TimeSlot
