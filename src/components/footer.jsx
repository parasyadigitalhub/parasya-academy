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
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
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
              <li>Home</li>
              <li>Courses</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="footer-third">
            <h3>Popular Courses</h3>
            <ul>
              <li>Performance Marketing Mastery</li>
              <li>Agency Integrated Marketing</li>
              <li>Digital Strategy</li>
              <li>Coming Soon</li>
            </ul>
          </div>

          <div className="footer-fourth">
            <h3>Contact Info</h3>
            <ul>
              <li>📧 hello@parasyaacademy.com</li>
              <li>📞 +1 (555) 123-4567</li>
              <li>📍 123 Education St, Learning City, LC 12345</li>
            </ul>
          </div>
        </div>

        <div className="footer-border"></div>

        <p className="footer-bottom-text">© 2025 Parasya Academy. All rights reserved. Built with ❤️ for learners everywhere.</p>
      </div>
    </footer>
  );
}
