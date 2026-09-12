import React from 'react';
import { ActivePage } from '../types';

interface FooterProps {
  onNavigate: (page: ActivePage) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="footer" id="mainFooter">
      <div className="footer-content">
        <div className="footer-top-grid">
          {/* Col 1: Brand info */}
          <div className="footer-col">
            <div
              className="logo cursor-pointer"
              style={{ marginBottom: '12px' }}
              onClick={() => onNavigate('home')}
            >
              <img src="/images/transparent_logo.svg" alt="Union City Developers logo" />
              <div className="logo-text">
                <span className="brand">Union City</span>
                <span className="tagline">DEVELOPERS (PVT) LTD</span>
              </div>
            </div>
            <p className="footer-desc">
              Sri Lanka's most trusted land development partner. Delivering undisputed clear deeds,
              strategic locations, and complete modern infrastructure since 2015.
            </p>
          </div>

          {/* Col 2: Navigation links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Navigation</h4>
            <ul className="footer-links">
              <li>
                <button type="button" onClick={() => onNavigate('home')}>
                  Home
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('lands')}>
                  Property Listings &amp; Lands
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('about')}>
                  About Union City
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('careers')}>
                  Careers
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('contact')}>
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact details */}
          <div className="footer-col">
            <h4 className="footer-heading">Head Office</h4>
            <p className="footer-contact-line">
              📍 267, Borella Road, Depanama, Pannipitiya, Sri Lanka
            </p>
            <p className="footer-contact-line">
              📞 <a href="tel:+94112847842">+94 112 847 842</a>
            </p>
            <p className="footer-contact-line">
              ✉️ <a href="mailto:info@unioncity.lk">info@unioncity.lk</a>
            </p>
            <div style={{ marginTop: '12px' }}>
              <a
                href="https://www.facebook.com/unioncitydevelopers"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-fb-badge"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Official Facebook Page
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Union City Developers (Pvt) Ltd. All rights reserved.
            <span style={{ margin: '0 8px', opacity: 0.35 }}>•</span>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', opacity: 0.85 }}>
              Created by <span style={{ color: '#94a3b8', fontWeight: 600 }}>Exist</span>
            </span>
          </p>
          <div className="footer-bottom-links">
            <button
              type="button"
              className="admin-portal-link"
              onClick={() => onNavigate('admin')}
              id="footerAdminLink"
            >
              🔒 Admin Portal
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
