import React from 'react';

export const AboutView: React.FC = () => {
  return (
    <div className="content-page" id="aboutPage">
      <h1>About Union Home</h1>
      <p>
        Since 2020, Union Home has helped thousands of families and investors
        find land they can build their futures on. We specialize in identifying, developing, and
        delivering trusted land properties across residential, commercial, and agricultural categories.
      </p>

      <div className="content-card reveal reveal-visible" id="missionCard">
        <h3>Our Mission</h3>
        <p>
          To make land ownership simple, transparent, and accessible — connecting people with property
          opportunities backed by verified documentation and dedicated support from search to settlement.
        </p>
      </div>

      <div className="content-card reveal reveal-visible" id="whyChooseUsCard">
        <h3>Why Choose Us</h3>
        <p style={{ lineHeight: '1.9' }}>
          ✔ Years of trusted service since 2020
          <br />
          ✔ Hundreds of completed property transactions
          <br />
          ✔ Verified and legally cleared land titles
          <br />
          ✔ Dedicated support team throughout the buying process
        </p>
      </div>

      <div
        className="content-card reveal reveal-visible"
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid var(--glass-border)',
          borderRadius: '16px',
          padding: '24px 28px',
          marginTop: '20px',
        }}
      >
        <h3>Our Core Values</h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px',
            marginTop: '16px',
          }}
        >
          <div>
            <h4 style={{ color: 'var(--brand-blue-light)', marginBottom: '4px', fontSize: '1rem' }}>
              🛡️ Uncompromising Legality
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-body)' }}>
              100% first-class clear title deeds vetted by leading independent attorneys before any project launch.
            </p>
          </div>

          <div>
            <h4 style={{ color: 'var(--brand-blue-light)', marginBottom: '4px', fontSize: '1rem' }}>
              🏗️ Complete Infrastructure
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-body)' }}>
              Carpeted access roads, 3-phase electricity, pipe-borne water, and drainage systems ready upon handover.
            </p>
          </div>

          <div>
            <h4 style={{ color: 'var(--brand-blue-light)', marginBottom: '4px', fontSize: '1rem' }}>
              🤝 Long-Term Trust
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-body)' }}>
              Years of standing by our buyers, providing continuous guidance through deed transfers and banking since 2020.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
