import { Link } from 'react-router-dom';
import './styles/footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-links">
          <div className="footer-first">
            <img src="/logo.png" alt="logo" />
            <p>Transforming careers through practical education and expert mentorship since 2020.</p>
            <div className="footer-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/company/parasya-academy" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.instagram.com/parasya.academy?igsh=MThmOXhzeTVlY3lzcA==" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
            </div>

          </div>

          <div className="footer-second">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-third">
            <h3>Popular Courses</h3>
            <ul>
              <li><Link to="/courses">Performance Marketing Mastery</Link></li>
              <li><Link to="/courses">Agency Integrated Marketing</Link></li>
              <li><Link to="/courses">Digital Strategy</Link></li>
              <li><span>Coming Soon</span></li>
            </ul>
          </div>

          <div className="footer-fourth">
            <h3>Contact Info</h3>
            <ul>
              <li>
                📧 <a href="mailto:hello@parasyaacademy.com">hello@parasyaacademy.com</a>
              </li>
              <li>
                📞 <a href="tel:+919447985763">+91 9447985763</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-border"></div>

        <p className="footer-bottom-text">© 2025 Parasya Academy. All rights reserved. Built with ❤️ for learners everywhere.</p>
      </div>
    </footer>
  );
}
