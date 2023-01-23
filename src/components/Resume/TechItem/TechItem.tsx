import './TechItem.scss'

import { TechItemProps } from './TechItem.types'

const TechItem = (props: TechItemProps) => {
  const handleClick = () => {
    props.onClick()
  }

  return (
    <div
      className={props.active ? 'tech-item active' : 'tech-item'}
      onClick={handleClick}
    >
      <div className="state-layer">
        <div className="svg-icon-container">
          <span className={`svg-icon ${props.icon}`} />
        </div>
        <div className="tech-item-text">{props.name}</div>
      </div>
    </div>
  )
}

export default TechItem
