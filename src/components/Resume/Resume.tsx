import './Resume.scss'

import PageHeader from '../PageHeader'
import Technologies from './Technologies'
import Role from './Role'

import { roles } from '../../constants/roles'

const Resume = () => {
  return (
    <>
      <PageHeader title="Resume" />
      <div className="content-container">
        <div className="side-content">
          <Technologies />
          <div className="education">
            <div className="subheader">Education</div>
            <div className="education-content">
              <div className="school">Brigham Young University</div>
              <div className="gpa">3.9 GPA</div>
              <div className="fields">
                <div className="field">Economics</div>
                <div className="field">Computer Science</div>
                <div className="field">Business Strategy</div>
              </div>
            </div>
          </div>
        </div>
        <div className="experience-content">
          <div className="subheader">Experience</div>
          {roles.map((role) => (
            <Role
              title={role.title}
              company={role.company}
              website={role.website}
              startDate={role.startDate}
              endDate={role.endDate}
              bulletPoints={role.bulletPoints}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Resume
