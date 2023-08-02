import './Technologies.scss'

import TechItem from './TechItem'
import { useEffect, useRef, useState } from 'react'
import { Technology } from '../../../types/technology'

import { technologies } from '../../../constants/technologies'

const Technologies = () => {
  const [maxHeight, setMaxHeight] = useState(0)
  const [currentTech, setCurrentTech] = useState<Technology | null>(null)

  const collapseRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (collapseRef.current) {
      if (currentTech) {
        setMaxHeight(collapseRef.current.scrollHeight)
      }
    }
  }, [currentTech])

  return (
    <>
      <div className="tech">
        <div className="subheader">Technologies</div>
        <div className="tech-list">
          {technologies.map((tech) => (
            <TechItem
              key={tech.icon}
              name={tech.name}
              icon={tech.icon}
              onClick={(e: any) => {
                e.preventDefault()
                setCurrentTech(tech)
              }}
              active={currentTech?.name === tech.name}
            />
          ))}
        </div>
        <div className="collapse" ref={collapseRef} style={{ maxHeight }}>
          <div className="tech-description">
            <div className="tech-description-header">
              <div className="header-text">{currentTech?.name}</div>
              <div className="close-button-container">
                <div
                  className="close-button"
                  onClick={(e: any) => {
                    e.preventDefault()
                    setMaxHeight(0)
                    setTimeout(() => setCurrentTech(null), 200)
                  }}
                >
                  <span className="material-symbols-outlined">close</span>
                </div>
              </div>
            </div>
            <div className="tech-description-text">
              {currentTech?.description}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Technologies
