import './Projects.scss'

import { useState, useEffect, useRef } from 'react'

import PageHeader from '../PageHeader'
import ProjectItem from './ProjectItem'
import SubNavItem from './SubNavItem'
import { concat, difference, transform } from 'lodash'

const Projects = () => {
  const [hide, setHide] = useState<boolean>(true)
  const [indicatorOffset, setIndicatorOffset] = useState<number>(0)

  const indicatorRef = useRef(null)

  useEffect(() => {
    if (indicatorRef.current !== null) {
      const indicator: HTMLElement = indicatorRef.current
      indicator.addEventListener('scroll', handleScroll)
    }

    document
      .getElementById('article-content')!
      .addEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = (event: any) => {
    // Notes
    /*
      likely the best solution here is to calculate the difference for each
      content section, and move the icon to whichever has the lowest abs(difference)

      Or add check for when their difference is 0 or something? not sure
    */
    const headerOffset = 200
    const scrollTop = document.getElementById('article-content')!.scrollTop
    const offsetTop = document.getElementById('nacho-stocks')!.offsetTop
    const difference = offsetTop - scrollTop

    if (difference < 0) {
      setIndicatorOffset(1)
    } else {
      setIndicatorOffset(0)
    }
  }

  return (
    <>
      <PageHeader title="Projects" />
      <div className="content-container">
        <div className="subnav-container">
          <nav className="subnav">
            <div className="subnav-header">Projects</div>
            <div
              className={hide ? 'indicator hide' : 'indicator'}
              style={{ transform: `translateY(${36 * indicatorOffset}px)` }}
              ref={indicatorRef}
            />
            <SubNavItem to="#nacho-stocks" label="Nacho Stocks"></SubNavItem>
            <SubNavItem to="#m3-react" label="M3 React"></SubNavItem>
          </nav>
        </div>
        <div className="projects-content">
          <ProjectItem
            id="nacho-stocks"
            header="Nacho Stocks"
            image={require('../../assets/nachostocks.png')}
            description={
              <span>
                Nacho Stocks is a Paper Trading application designed to help
                people overcome their anxieties about trading on the market. In
                addition, the users will learn from experience the best trading
                techniques.
                <br />
                <br />
                This project is still in progress, and I will be continuing to
                add functionality to it. For now, it contunues to serve as a
                great vehicle for improving my React skills and working on the
                M3 React npm library.
              </span>
            }
            githubLink="https://github.com/sjsimpson/nacho-stocks"
            websiteLink="https://nachostocks.com/"
          />
          <ProjectItem
            id="m3-react"
            header="M3 React"
            image={require('../../assets/m3-react.png')}
            description={
              <span>
                M3 React started because I wanted to create an easy solution for
                implementing React components styled after Google Material 3.
                Publishing and maintaining open-source software has always been
                a goal of mine, and this project was my first steps toward it.
                <br />
                <br />
                It has grown and improved as I've used those components across
                various other projects. I hope to continue to add new components
                and improve those as they are available. Feel free to add it to
                your own project to get aquyce start with styling.
              </span>
            }
            githubLink="https://github.com/sjsimpson/m3-react"
            // websiteLink="https://nachostocks.com/"
            npmLink="https://www.npmjs.com/package/m3-react"
          />
        </div>
      </div>
    </>
  )
}

export default Projects
