import './TechItem.scss'

export interface TechItemProps {
  name: string
  icon: string
  onClick: Function
  active: boolean
}

const TechItem = (props: TechItemProps) => {
  const handleClick = (e: any) => {
    props.onClick(e)
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
