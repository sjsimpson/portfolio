import './Footer.scss'

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-links-container">
          {/* <div className="footer-link-header">Links</div> */}
          <div className="footer-links">
            <a
              href="https://www.linkedin.com/in/spencer-simpson-0b38299b/"
              target={'_blank'}
              className="footer-link"
            >
              <span className="svg-icon-container">
                <span className="svg-icon linkedin" />
              </span>
              <span className="link-text">LinkedIn</span>
            </a>
            <a
              href="https://github.com/sjsimpson"
              target={'_blank'}
              className="footer-link"
            >
              <span className="svg-icon-container">
                <span className="svg-icon github" />
              </span>
              <span className="link-text">GitHub</span>
            </a>
          </div>
        </div>
        {/* <div className="contact-information"></div> */}
        <div className="footer-disclaimer">
          <div>This Website was originally created by me: Spencer Simpson</div>
        </div>
      </div>
    </>
  )
}
