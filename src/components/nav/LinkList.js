import { useNavContext } from '../../providers/NavProvider'
import { Link } from 'react-router-dom'

const LinkList = () => {

  const { links } = useNavContext()

  return (
    <>
      {links.map(link => {
        return (
          <li key={link.name}>
            <Link
              className="leading"
              to={link.href}
              alt={`${link.name} link`}
              role="button">{link.name}</Link>
          </li>
        )
      })}
    </>
  )
}

export default LinkList