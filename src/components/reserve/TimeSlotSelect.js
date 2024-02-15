import { useGlobalContext } from '../../providers/GlobalProvider'
import TimeSlot from './TimeSlot'

const TimeSlotSelect = (props) => {

  const { formData } = useGlobalContext()

  return (props.timeSlots && props.timeSlots.length ? (
    <fieldset>
      <div className="hFrame auto-spread center">
        <h6>SELECT TIME SLOT</h6>
        <input id="timeslot" data-testid="timeslot" type="text" value={formData.timeSlot} required onChange={e => e.preventDefault()}/>
      </div>
      <div className="hFrame auto-spread">
        <div className="vFrame slotbox">
          {props.timeSlots.map(slot => {
            return (
              <TimeSlot key={slot.time} slot={slot}/>
            )
          })}
        </div>
      </div>
    </fieldset>
    ) : <></>
  )
}

export default TimeSlotSelect
