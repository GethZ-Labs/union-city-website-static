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
              style={{ marginBottom: '14px' }}
              onClick={() => onNavigate('home')}
            >
              <img src="/images/transparent_logo.svg" alt="Union Home logo" />
              <div className="logo-text">
                <span className="brand">Union Home</span>
                <span className="tagline">PROPERTIES & DEVELOPMENTS</span>
              </div>
            </div>
            <p className="footer-desc">
              Sri Lanka's trusted property &amp; land development partner. Delivering undisputed clear deeds,
              strategic locations, and complete modern infrastructure.
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
                <button type="button" onClick={() => onNavigate('samples')}>
                  Sample Plans &amp; Plots
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('about')}>
                  About Union Home
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
            <h4 className="footer-heading">Contact &amp; Inquiries</h4>
            <p className="footer-contact-line">
              <span>📞</span> <a href="tel:+940xxxxxxxxx">+94 0xxxxxxxxx</a>
            </p>
            <div style={{ marginTop: '14px' }}>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-fb-badge"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Union Home (Pvt) Ltd. All rights reserved.
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
