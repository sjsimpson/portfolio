import './Resume.scss'

import PageHeader from '../PageHeader'
import TechItem from './TechItem'
import Role from './Role'
import { ReactElement, useState } from 'react'

interface Technology {
  name: string
  icon: string
  description: ReactElement
}

const Resume = () => {
  const emptyTech: Technology = {
    name: '',
    icon: '',
    description: <></>,
  }

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [currentTech, setCurrentTech] = useState<Technology>(emptyTech)

  const handleOpen = (event: any) => {
    event.preventDefault()
    setIsOpen(true)
  }

  const handleClose = (event: any) => {
    event.preventDefault()
    setIsOpen(false)
    setCurrentTech(emptyTech)
  }

  const technologies: Technology[] = [
    {
      name: 'React',
      icon: 'react',
      description: (
        <>
          I first started working with React at Qualtrics, through my own study
          and adding to their core products via Hackathons.
          <br />
          <br />
          My primary avenue for developing my React skills has been working on
          personal projects like this one.
          <br />
          <br />
          React has fueled my passion for front-end development, and I am very
          much looking forward to using React more in a professional
          environment.
        </>
      ),
    },
    {
      name: 'Node.js',
      icon: 'node-js',
      description: (
        <>
          I have worked primarily with Node.js through most of my carrer, in
          varying contexts.
          <br />
          <br />
          All of my personal projects have used Node.js/Express as the primary
          server.
          <br />
          <br />I would like to add Go to my repertoire of backend langauges,
          but have been spending most of my time honing my front-end
          capabilities.
        </>
      ),
    },
    {
      name: 'Javascript',
      icon: 'javascript',
      description: (
        <>
          The language I have worked with most. However, in recent years I
          haven't been working in pure JS quite as much, as I favor Typescript
          for most projects instead.
          <br />
          <br />
          That bieng said, I'm very happy with how my raw JS skills have
          improved over the years, and I still try to learn new things every
          day.
        </>
      ),
    },
    {
      name: 'Typescript',
      icon: 'typescript',
      description: (
        <>
          Simply the best. Every personal project of mine uses TypeScript if I
          can help it. Strong typing and better intellisense make it so much
          easier to catch errors before they sneak into production.
          <br />
          <br />I started using TypeScript at Qualtrics before we migrated our
          tests to Python. Sometimes TS can be a pain, but for the most part:
          mmm... I love it.
          <br />
          <br />
          *CHEF'S KISS*
        </>
      ),
    },
    {
      name: 'Python',
      icon: 'python',
      description: (
        <>
          Python was the language of choice for the web scraping projects I took
          on as a Economics Research Assistant at BYU, primarily using Selenium.
          <br />
          <br />
          I became much more acquianted with Python when we migrated all of our
          E2E testing at Qualtrics to use Python/Pytest instead of TS/Jest.
          <br />
          <br />I really enjoy using Python, but definitely prefer JS for most
          of my use cases, so I don't use it much on my own.
        </>
      ),
    },
    {
      name: 'HTML',
      icon: 'html',
      description: (
        <>
          I wish I had more here to say about HTML, but we all know what it is.
          I've worked with it for like 6 years and it's mad easy... so enjoy
          some "lorem ipsum"...
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </>
      ),
    },
    {
      name: 'CSS',
      icon: 'css',
      description: (
        <>
          So deceptively tricky, in my opinion. I get that it's straight-forward
          stylesheets, but for someone who was learning the design stuff
          simultaneously, it can be a lot to digest.
          <br />
          <br />
          Even having worked with it for a while, there is still new stuff I
          discover. I've spent time working on my projects and building my React
          component library that CSS and I have become well acquianted, friends
          even -- albiet at arms length through Sass.
        </>
      ),
    },
    {
      name: 'Sass',
      icon: 'sass',
      description: (
        <>
          I was in Sass from the beginning of my web development career, but
          only recenly have started using it... and I LOVE IT.
          <br />
          <br />
          Creating variables, mixins, and nesting tags is soooo nice, and has
          been helpful as I try to work on my design chops using CSS.
          <br />
          <br />I have tried using style libraries like bootstrap, but
          ultimately didn't like to surrender the control you get using custom
          Sass files.
        </>
      ),
    },
  ]

  return (
    <>
      <PageHeader title="Resume" />
      <div className="content-container">
        <div className="side-content">
          <div className="tech">
            <div className="subheader" onClick={handleOpen}>
              Technologies
            </div>
            <div className="tech-content">
              <div className="tech-list">
                {technologies.map((tech) => (
                  <TechItem
                    key={tech.icon}
                    name={tech.name}
                    icon={tech.icon}
                    onClick={() => {
                      setIsOpen(true)
                      setCurrentTech(tech)
                    }}
                    active={currentTech.name === tech.name}
                  />
                ))}
              </div>
              {isOpen && (
                <div className="tech-description">
                  <div className="tech-description-header">
                    <div className="header-text">{currentTech?.name}</div>
                    <div className="close-button-container">
                      <div className="close-button" onClick={handleClose}>
                        <span className="material-symbols-outlined">close</span>
                      </div>
                    </div>
                  </div>
                  <span className="tech-description-text">
                    {currentTech?.description}
                  </span>
                </div>
              )}
            </div>
          </div>
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
          <Role
            title="Full Stack Developer"
            company="Atomic Fi"
            website="https://atomic.financial/"
            startDate="02.22"
            endDate="10.22"
            bulletPoints={[
              'Implemented and standardized unit tests across the organization, leading to higher quality code pushes and fewer code reviews.',
              'Integrated with external systems using combinations of reverse engineered APIs and headless UI navigation.',
            ]}
          />
          <Role
            title="Software Test Engineer"
            company="Qualtrics"
            website="https://qualtrics.com/"
            startDate="05.19"
            endDate="02.22"
            bulletPoints={[
              'Migrated existing tests to a new testing framework as standard-bearer for coding guidelines and best practices in merge request reviews across 5 different code repositories.',
              'Developed and integrated Slack test reporting software with existing reporting tools, and drove adoption across both quality engineering and software development organizations.',
              'Won 2021 Qualtrics Hackathon by developing PayPal extension for Qualtrics, which allowed for compensating survey takers using PayPal and Venmo.',
              'Enabled quicker release timelines by decreasing total E2E test run time by 75% through containerized and parallelized runs.',
              'Coordinated with multiple development teams to thoroughly test and release new product features from design stages to final delivery.',
            ]}
          />
        </div>
      </div>
    </>
  )
}

export default Resume
