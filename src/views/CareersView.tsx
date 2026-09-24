import React from 'react';

interface CareersViewProps {
  onOpenApplyModal: (position: string) => void;
}

const WHATSAPP_NUMBER = '+94 0xxxxxxxxx';
const FORMATTED_PHONE = '+94 0xxxxxxxxx';

const WHATSAPP_SVG = (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.26-1.5-1.4-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.71 4.3 3.8 2.53 1.09 2.53.73 2.99.69.45-.04 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.29z" />
  </svg>
);

export const CareersView: React.FC<CareersViewProps> = ({ onOpenApplyModal }) => {
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
    'Hello Union Home, I would like to apply for the Site Officer position. Please find my CV attached.'
  )}`;

  return (
    <div className="content-page" id="careersPage" style={{ maxWidth: '880px', margin: '0 auto', padding: '40px 20px' }}>
      <h1 className="page-title" style={{ textAlign: 'center' }}>Careers at Union Home</h1>
      <p className="content-subtitle" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 36px' }}>
        Join our team delivering trusted residential land developments across Sri Lanka.
      </p>

      {/* WhatsApp Quick Info Banner */}
      <div
        style={{
          background: 'rgba(37, 211, 102, 0.08)',
          border: '1px solid rgba(37, 211, 102, 0.3)',
          borderRadius: '16px',
          padding: '20px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          marginBottom: '32px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              background: '#25D366',
              color: '#062013',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            {WHATSAPP_SVG}
          </div>
          <div>
            <div style={{ fontWeight: 700, color: '#fff', fontSize: '1rem', marginBottom: '2px' }}>
              Put your CV to our WhatsApp
            </div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.86rem' }}>
              Send your CV directly to <strong style={{ color: '#4ade80' }}>{FORMATTED_PHONE}</strong>
            </div>
          </div>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: '#25D366',
            color: '#062013',
            fontWeight: 700,
            fontSize: '0.88rem',
            padding: '10px 20px',
            borderRadius: '10px',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 4px 14px rgba(37, 211, 102, 0.3)',
            transition: 'all 0.2s ease',
          }}
        >
          {WHATSAPP_SVG}
          WhatsApp Us
        </a>
      </div>

      {/* Only One Role: Site Officer */}
      <div className="job-list" id="jobList" style={{ maxWidth: '100%' }}>
        <div
          className="job-item reveal reveal-visible"
          data-position="Site Officer"
          style={{
            cursor: 'default',
            padding: '28px',
            borderRadius: '20px',
            background: 'var(--glass-bg)',
            border: '1px solid var(--glass-border)',
          }}
        >
          <div className="job-item-info" style={{ width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '10px' }}>
              <span className="job-item-badge" style={{ background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8' }}>
                Field Operations
              </span>
              <span style={{ fontSize: '0.82rem', color: '#4ade80', fontWeight: 600 }}>
                ● Actively Recruiting
              </span>
            </div>

            <h3 style={{ fontSize: '1.45rem', marginBottom: '8px', color: '#fff' }}>Site Officer</h3>
            <span className="job-meta" style={{ display: 'block', marginBottom: '14px' }}>
              Colombo &amp; Western Province Projects • Full-time • Immediate Opening
            </span>

            <p className="job-summary" style={{ fontSize: '0.94rem', lineHeight: '1.6', marginBottom: '18px' }}>
              Coordinate on-site customer property visits, supervise infrastructure progress, verify survey boundaries, and assist prospective buyers during land viewings.
            </p>

            {/* Key Responsibilities & Requirements */}
            <div style={{ marginBottom: '22px' }}>
              <div style={{ fontWeight: 700, color: '#e2e8f0', fontSize: '0.88rem', marginBottom: '8px' }}>
                Key Responsibilities &amp; Requirements:
              </div>
              <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: '1.6' }}>
                <li>Coordinate prospective land buyers on-site and present parcel features</li>
                <li>Inspect land infrastructure development including road clearing, drainage, and boundary posts</li>
                <li>Liaise with licensed surveyors for site boundary pegging and plan verifications</li>
                <li>Valid riding/driving license with strong familiarity across Western Province roadways</li>
                <li>Responsible, reliable, and equipped with strong interpersonal communication skills</li>
              </ul>
            </div>

            {/* Action Buttons: Apply for Role & Direct WhatsApp */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                alignItems: 'center',
                paddingTop: '16px',
                borderTop: '1px solid var(--glass-border)',
              }}
            >
              <button
                type="button"
                className="apply-btn"
                onClick={() => onOpenApplyModal('Site Officer')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                Apply for Role
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-direct-btn"
                style={{
                  background: 'rgba(37, 211, 102, 0.15)',
                  border: '1px solid rgba(37, 211, 102, 0.4)',
                  color: '#4ade80',
                  padding: '9px 18px',
                  borderRadius: '10px',
                  fontSize: '0.86rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.2s ease',
                }}
              >
                {WHATSAPP_SVG}
                Put your CV to {FORMATTED_PHONE}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
