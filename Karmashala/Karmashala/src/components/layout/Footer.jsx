
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h2 className="logo-text">
              <span>Karma</span>
              <span className="accent">sathi</span>
            </h2>
            <p>Empowering artisans across West Bengal through technology, financial inclusion, and market access.</p>
            <div className="contact">
              <span>
                <i className="fas fa-phone"></i> &nbsp; 123-456-789
              </span>
              <span>
                <i className="fas fa-envelope"></i> &nbsp; info@karmasathi.org
              </span>
            </div>
            <div className="socials">
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div className="footer-section links">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/marketplace">Marketplace</Link>
              </li>
              <li>
                <Link to="/artisans">Artisans</Link>
              </li>
              <li>
                <Link to="/micro-loans">Micro-Loans</Link>
              </li>
              <li>
                <Link to="/skill-development">Skill Development</Link>
              </li>
              <li>
                <Link to="/tourism">Tourism</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section contact-form">
            <h2>Contact Us</h2>
            <form>
              <input
                type="email"
                name="email"
                className="text-input contact-input"
                placeholder="Your email address..."
              />
              <textarea name="message" className="text-input contact-input" placeholder="Your message..."></textarea>
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Karmasathi | Designed with ❤️ for West Bengal's Artisans
        </div>
      </div>
    </footer>
  )
}

export default Footer

