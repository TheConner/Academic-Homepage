// Hacky icon shim: react edition
import './Icon.scss';

export const RIcon = ({faIcon, style}) => {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      className='svg-inline--fa'
      role='img'
      xmlns='http://www.w3.org/2000/svg'
      viewBox={`0 0 ${faIcon.icon[0]} ${faIcon.icon[1]}`}
      style={style}
    >
      <path fill='currentColor' d={faIcon.icon[4]}></path>
    </svg>

  )
}