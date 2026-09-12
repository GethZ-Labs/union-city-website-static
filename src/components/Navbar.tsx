import React, { useState, useEffect } from 'react';
import { ActivePage, AppTheme } from '../types';

interface NavbarProps {
  currentPage: ActivePage;
  onNavigate: (page: ActivePage) => void;
  theme: AppTheme;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  theme,
  onToggleTheme,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: ActivePage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Trust & Facebook Banner */}
      <div className="top-banner" id="topBanner">
        <span>Years of Unbroken Trust. Thousands of Property Dreams. | Since 2015.</span>{' '}
        <a
          href="https://www.facebook.com/unioncitydevelopers"
          target="_blank"
          rel="noopener noreferrer"
          className="top-fb-link"
          id="topFbLink"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>{' '}
          Official Facebook Page
        </a>
      </div>

      {/* Main Navbar Wrapper */}
      <div className="navbar-wrapper">
        {/* Backdrop for mobile navigation drawer */}
        {mobileMenuOpen && (
          <div
            className="mobile-nav-backdrop"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="mainNavbar">
          <div
            className="logo cursor-pointer"
            id="navLogoBtn"
            onClick={() => handleNavClick('home')}
            role="button"
            tabIndex={0}
          >
            <img src="/images/transparent_logo.svg" alt="Union City Developers logo" />
            <div className="logo-text">
              <span className="brand">Union City</span>
              <span className="tagline">DEVELOPERS (PVT) LTD</span>
            </div>
          </div>

          <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`} id="navLinksList">
            <li>
              <button
                type="button"
                className={`nav-link-btn ${currentPage === 'home' ? 'active' : ''}`}
                onClick={() => handleNavClick('home')}
                id="navBtnHome"
              >
                HOME
              </button>
            </li>
            <li>
              <button
                type="button"
                className={`nav-link-btn ${currentPage === 'lands' ? 'active' : ''}`}
                onClick={() => handleNavClick('lands')}
                id="navBtnLands"
              >
                &#9776; LANDS
              </button>
            </li>
            <li>
              <button
                type="button"
                className={`nav-link-btn ${currentPage === 'about' ? 'active' : ''}`}
                onClick={() => handleNavClick('about')}
                id="navBtnAbout"
              >
                ABOUT
              </button>
            </li>
            <li>
              <button
                type="button"
                className={`nav-link-btn ${currentPage === 'careers' ? 'active' : ''}`}
                onClick={() => handleNavClick('careers')}
                id="navBtnCareers"
              >
                CAREERS
              </button>
            </li>
            <li>
              <button
                type="button"
                className={`nav-link-btn ${currentPage === 'contact' ? 'active' : ''}`}
                onClick={() => handleNavClick('contact')}
                id="navBtnContact"
              >
                CONTACT US
              </button>
            </li>
          </ul>

          <div className="nav-actions">
            {/* Theme Switcher Button */}
            <button
              className="theme-toggle-btn"
              id="themeToggleBtn"
              type="button"
              onClick={onToggleTheme}
              aria-label={`Toggle Color Theme (Current: ${theme})`}
            >
              <span className="theme-toggle-track">
                <span className="theme-icon theme-icon-green">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="6" />
                  </svg>
                </span>
                <span className="theme-icon theme-icon-blue">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="6" />
                  </svg>
                </span>
                <span className={`theme-toggle-thumb ${theme === 'blue' ? 'active-blue' : ''}`} />
              </span>
              <span className="theme-toggle-label">{theme === 'blue' ? 'Blue' : 'Green'}</span>
            </button>

            {/* Mobile Nav Toggle */}
            <button
              className="nav-toggle"
              id="navToggleBtn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};
