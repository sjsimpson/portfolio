// import './styles/base.scss'
import './styles/App.scss'

import { Route, Routes } from 'react-router-dom'

import { PrimaryNav } from './components/PrimaryNav'
import { MainContent } from './components/common/MainContent'
import About from './components/About/About'
import Projects from './components/Projects'
import Resume from './components/Resume'

export const App = () => {
  return (
    <div>
      <PrimaryNav />
      <div className="app-container">
        <div className="app-content">
          <MainContent>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="projects" element={<Projects />} />
              <Route path="resume" element={<Resume />} />
              {/* <Route path="contact" element={<Contact />} /> */}
            </Routes>
          </MainContent>
        </div>
      </div>
    </div>
  )
}
