import './styles/header.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <img src="/logo.png" alt="Logo" />
        </div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <nav className={menuOpen ? 'open' : ''}>
          <ul>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to="/courses" onClick={() => setMenuOpen(false)}>Courses</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
