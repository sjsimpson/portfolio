import './SubNavItem.scss'

import { HashLink } from 'react-router-hash-link'

import { SubNavItemProps } from './SubNavItem.types'

const SubNavItem = (props: SubNavItemProps) => {
  return (
    <div
      className={
        props.match == undefined
          ? 'subnav-item'
          : props.match
          ? 'subnav-item active'
          : 'subnav-item'
      }
      // onClick={handleClick}
    >
      <HashLink className="subnav-link" smooth to={props.to}>
        <span className="state-layer">
          {props.label && <div className="subnav-label">{props.label}</div>}
        </span>
      </HashLink>
    </div>
  )
}

export default SubNavItem
