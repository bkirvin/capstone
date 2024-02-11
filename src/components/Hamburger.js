import { ReactComponent as Ham } from '../assets/🦆 icon _hamburger menu.svg'
import { useNavContext } from '../providers/NavProvider'

const Hamburger = (props) => {

  const { burgerToggle, setBurgerToggle } = useNavContext()

  const handleClick = () => {
    console.log('handle click', burgerToggle)
    setBurgerToggle(!burgerToggle)
  }

  return (
    <Ham
      onClick={handleClick}
      className="hamburger" />
  )
}

export default Hamburger
