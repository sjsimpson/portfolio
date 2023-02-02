import './MainContent.scss'

import { Footer } from './Footer'

export const MainContent = ({ children }: { children: any }) => {
  return (
    <div className="main-content" id="article-content">
      {children}
      <Footer></Footer>
    </div>
  )
}
