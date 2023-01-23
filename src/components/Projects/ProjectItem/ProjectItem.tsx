import './ProjectItem.scss'

import { ProjectItemProps } from './ProjectItem.types'

const ProjectItem = (props: ProjectItemProps) => {
  return (
    <>
      <div id={props.id} className="project-item">
        <div className="project-item-header">{props.header}</div>
        <div className="project-item-content">
          <div className="project-image-container">
            <img className="project-image" src={props.image} />
          </div>
          <div className="project-text-container">
            <div className="project-text">
              <div className="project-description">{props.description}</div>
              <div className="project-links">
                <div className="link-list">
                  {props.githubLink && (
                    <a href={props.githubLink} target="_blank">
                      <div className="svg-icon-container">
                        <span className={'svg-icon github'} />
                      </div>
                    </a>
                  )}
                  {props.websiteLink && (
                    <a href={props.websiteLink} target="_blank">
                      <div className="material-symbols-outlined">public</div>
                    </a>
                  )}{' '}
                  {props.npmLink && (
                    <a href={props.npmLink} target="_blank">
                      <div className="svg-icon-container">
                        <span className={'svg-icon npm'} />
                      </div>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectItem
