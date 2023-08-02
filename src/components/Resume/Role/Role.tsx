import './Role.scss'

import { RoleProps } from './Role.types'

const Role = (props: RoleProps) => {
  return (
    <div className="role">
      <div className="role-header">
        <div className="role-description">
          {`${props.title} at `}
          <a href={props.website} target="_blank">
            <span>{props.company}</span>
          </a>
        </div>
        <div className="date-range">
          {props.startDate} - {props.endDate}
        </div>
      </div>
      {props.bulletPoints.map((description, index) => (
        <div key={index} className="bullet-point">
          <span className="material-symbols-outlined">chevron_right</span>
          <span className="bullet-text">{description}</span>
        </div>
      ))}
    </div>
  )
}

export default Role
