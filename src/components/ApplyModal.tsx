import React, { useState } from 'react';

interface ApplyModalProps {
  position: string;
  isOpen: boolean;
  onClose: () => void;
}

const WHATSAPP_NUMBER = '+94 0xxxxxxxxx';
const FORMATTED_PHONE = '+94 0xxxxxxxxx';

const WHATSAPP_SVG = (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.26-1.5-1.4-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.71 4.3 3.8 2.53 1.09 2.53.73 2.99.69.45-.04 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.29z" />
  </svg>
);

export const ApplyModal: React.FC<ApplyModalProps> = ({
  position,
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const roleName = position || 'Site Officer';
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
    `Hello Union Home, I would like to apply for the ${roleName} position. Please find my CV attached.`
  )}`;

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(FORMATTED_PHONE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div
      id="applyModal"
      className="modal-overlay open"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="modal-box"
        role="dialog"
        aria-modal="true"
        aria-labelledby="applyModalHeading"
        style={{ maxWidth: '480px', textAlign: 'center', padding: '32px 28px' }}
      >
        <button
          type="button"
          id="applyModalClose"
          className="modal-close"
          aria-label="Close modal"
          onClick={onClose}
        >
          &times;
        </button>

        {/* WhatsApp Icon Circle */}
        <div
          style={{
            width: '68px',
            height: '68px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 18px',
            boxShadow: '0 8px 24px rgba(37, 211, 102, 0.35)',
            color: '#fff',
          }}
        >
          <svg viewBox="0 0 24 24" width="38" height="38" fill="currentColor">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.26-1.5-1.4-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.71 4.3 3.8 2.53 1.09 2.53.73 2.99.69.45-.04 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.29z" />
          </svg>
        </div>

        <span className="modal-role-pill" style={{ marginBottom: '8px', display: 'inline-block' }}>
          Recruitment Desk
        </span>
        <h3 id="applyModalHeading" style={{ fontSize: '1.45rem', marginBottom: '8px' }}>
          Apply for <span>{roleName}</span>
        </h3>

        <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.55', marginBottom: '22px' }}>
          Please send your CV and credentials directly to our recruitment WhatsApp number to apply:
        </p>

        {/* WhatsApp Phone Card */}
        <div
          style={{
            background: 'rgba(37, 211, 102, 0.08)',
            border: '1px solid rgba(37, 211, 102, 0.35)',
            borderRadius: '16px',
            padding: '16px 20px',
            marginBottom: '20px',
          }}
        >
          <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '1px', color: '#4ade80', textTransform: 'uppercase', marginBottom: '4px' }}>
            Official WhatsApp Number
          </div>
          <div
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: '1.5rem',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '0.5px',
            }}
          >
            {FORMATTED_PHONE}
          </div>
        </div>

        {/* Action Button: Direct Link to WhatsApp */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '18px' }}>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              background: '#25D366',
              color: '#062013',
              fontWeight: 800,
              fontSize: '0.95rem',
              padding: '14px 24px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              textDecoration: 'none',
              boxShadow: '0 6px 20px rgba(37, 211, 102, 0.4)',
              transition: 'all 0.2s ease',
            }}
          >
            {WHATSAPP_SVG}
            Send CV via WhatsApp
          </a>

          <button
            type="button"
            onClick={handleCopyNumber}
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid var(--glass-border)',
              color: copied ? '#4ade80' : '#e2e8f0',
              padding: '10px 16px',
              borderRadius: '10px',
              fontSize: '0.86rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            {copied ? '✓ Phone Number Copied!' : '📋 Copy Phone Number'}
          </button>
        </div>

        <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: '1.5', margin: 0 }}>
          💡 When sending your message on WhatsApp, please attach your CV document (PDF or DOC) with your full name and prior site experience.
        </p>
      </div>
    </div>
  );
};
