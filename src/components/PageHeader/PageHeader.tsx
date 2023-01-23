import './PageHeader.scss'

import { PageHeaderProps } from './PageHeader.types'

const PageHeader = (props: PageHeaderProps) => {
  return (
    <div className="page-header">
      <div className="page-header-text">{props.title}</div>
      <hr className="page-header-divider" />
    </div>
  )
}

export default PageHeader
