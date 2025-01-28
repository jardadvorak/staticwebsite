import { useState } from 'react';
import reactLogo from '../../assets/react.svg';
import viteLogo from '/vite.svg';
import { useLanguage } from '../../localization/LanguageContext';
import { useTheme } from '../../theme/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentLanguage, setLanguage } = useLanguage();
  const { isDarkMode, toggleTheme } = useTheme();

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'cs', label: 'Čeština' },
    { code: 'de', label: 'Deutsch' }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logos">
        <img src={viteLogo} className="navbar-logo" alt="Vite logo" />
        <img src={reactLogo} className="navbar-logo" alt="React logo" />
      </div>
      
      <div className="navbar-controls">
        <button 
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
        <div className="language-switcher">
          <select 
            value={currentLanguage}
            onChange={(e) => setLanguage(e.target.value)}
            className="language-select"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.label}
              </option>
            ))}
          </select>
        </div>

        <button 
          className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {isMenuOpen && (
          <div className="menu-overlay">
            <div className="menu-content">
              {/* Menu items will go here */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
