import './MainContent.scss'

export const MainContent = ({ children }: { children: any }) => {
  return (
    <div className="main-content" id="article-content">
      {children}
    </div>
  )
}
