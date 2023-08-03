import './About.scss'
import { useEffect, useState } from 'react'

const About = () => {
  const [greeting, setGreeting] = useState<string>('')

  const greetings: string[] = [
    'Hello',
    'Hola',
    'こんにちは',
    'Hej',
    'Bonjour',
    'Howdy',
    'Olá',
    'Привет',
    'Ahoj',
    '你好',
  ]

  useEffect(() => {
    setGreeting(greetings[0])
  }, [])

  const updateGreeting = () => {
    const index = greetings.indexOf(greeting)
    const nextIndex = index < greetings.length - 1 ? index + 1 : 0
    setGreeting(greetings[nextIndex])
  }

  return (
    <>
      <div className="about-header">
        <div className="intro">
          <div className="hi" onClick={updateGreeting}>
            <div className="state-layer">{greeting}</div>
          </div>
          I am <span className="name">SPENCER SIMPSON</span>
        </div>
      </div>
      <div className="primary-content">
        <div className="left-side">
          <div className="section-header">A little about me...</div>
          <div className="summary">
            I'm a Software Developer who loves to create pleasing and
            user-friendly Front-End interfaces.
            <br />
            <br />
            A background in Software Testing has made me passionate about
            creating thoroughly tested, quality products.
            <br />
            <br />I work primarily with React and Node.js, but have also worked
            in Python, Java, and C++.
            <br />
            <br />
            When I'm not coding I enjoy playing Magic: The Gathering, Escape
            From Tarkov, or any other game with friends.
          </div>
        </div>
        <div className="right-side">
          <div className="svg-image" />
        </div>
      </div>
      <div className="bottom-banner"></div>
    </>
  )
}

export default About
