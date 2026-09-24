import React from 'react';
import { OngoingProject, ComingSoonProject, SoldOutProject } from '../types';

const PIN_SVG = (
  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
  </svg>
);

const FB_SVG = (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export const OngoingCard: React.FC<{
  project: OngoingProject;
}> = ({ project }) => {
  const fbUrl = project.link || 'https://www.facebook.com';

  return (
    <div className="listing-card" id={`project-${project.id}`}>
      <div className="listing-photo">
        <a
          href={fbUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="listing-photo-link"
          aria-label={`View ${project.name} on Facebook`}
        >
          <img
            src={project.image}
            alt={project.name}
            onError={(e) => {
              const target = e.currentTarget;
              target.src = '/images/ongoing-pasyala.jpg';
            }}
          />
        </a>
      </div>
      <div className="listing-body">
        <div className="listing-title">{project.name}</div>
        <div className="listing-location">
          {PIN_SVG} {project.location}
        </div>
        <div className="listing-price">{project.pricePerPerch}</div>
        <div className="listing-price-note">Per Perch Upwards</div>

        <div className="listing-amenities">
          <span className="amenity-chip">⚡ 3-Phase Electricity</span>
          <span className="amenity-chip">💧 Pipe Water</span>
          <span className="amenity-chip">📜 Clear Deed</span>
        </div>

        <div style={{ marginTop: '14px' }}>
          <a
            href={fbUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="listing-fb-btn"
            style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
          >
            {FB_SVG}
            View on Facebook
          </a>
        </div>
      </div>
    </div>
  );
};

export const ComingSoonCard: React.FC<{ project: ComingSoonProject }> = ({ project }) => {
  return (
    <div className="coming-soon-card" id={`soon-${project.id}`}>
      <div className="coming-soon-ribbon">Coming Soon</div>
      <svg
        className="coming-soon-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="4" />
      </svg>
      <div className="coming-soon-location">{project.location}</div>
      <p className="coming-soon-note">{project.note || 'New land project launching soon. Stay tuned!'}</p>
    </div>
  );
};

export const SoldOutCard: React.FC<{ project: SoldOutProject }> = ({ project }) => {
  return (
    <div className="sold-out-card" id={`sold-${project.id}`}>
      <div className="sold-out-ribbon">Sold Out</div>
      <div className="sold-out-photo-wrap">
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = '/images/soldout-placeholder.svg';
          }}
        />
      </div>
      <div className="sold-out-body">
        <div>
          <div className="sold-out-name">{project.name}</div>
          <div className="sold-out-location">
            {PIN_SVG} {project.location || 'Western Province'}
          </div>
          {project.highlights && (
            <div className="sold-out-highlights">{project.highlights}</div>
          )}
        </div>
        <div className="sold-out-meta-tag">
          <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
          </svg>
          100% Sold &amp; Handed Over
        </div>
      </div>
    </div>
  );
};

export const PrimeFacilities: React.FC = () => {
  return (
    <section className="prime-facility-section reveal reveal-visible" id="primeFacilitySection">
      <div className="facility-showcase-card">
        <div className="facility-showcase-header">
          <div className="facility-pill">
            <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
            </svg>
            Prime Location Infrastructure &amp; Trust Assurance
          </div>
          <h2>Every Plot Selected for Strategic Value &amp; Unquestioned Legality</h2>
          <p className="facility-subtitle">
            At Union Home, every project undergoes strict legal vetting and urban planning compliance before release.
          </p>
        </div>

        <div className="facility-grid">
          <div className="facility-item">
            <div className="facility-icon">🛣️</div>
            <h3>Prime Highway &amp; Expressway Access</h3>
            <p>
              Strategically situated within minutes of southern expressway interchanges, bypass roads, and public transit terminals for effortless daily commuting.
            </p>
          </div>

          <div className="facility-item">
            <div className="facility-icon">📜</div>
            <h3>100% Clear Freehold Deeds</h3>
            <p>
              Thoroughly verified, undisputed freehold titles vetted by top legal attorneys. Guaranteed ownership with absolute peace of mind for your family's future.
            </p>
          </div>

          <div className="facility-item">
            <div className="facility-icon">⚡</div>
            <h3>Three-Phase Electricity &amp; Water</h3>
            <p>
              Fully installed utility connections including three-phase electricity, pipe-borne water supply, wide carpeted access roads, and stormwater drainage systems.
            </p>
          </div>

          <div className="facility-item">
            <div className="facility-icon">🏥</div>
            <h3>Top-Tier Facilities</h3>
            <p>
              Strategically situated within immediate reach of modern hospitals, leading schools, and esteemed universities for total convenience and quality living.
            </p>
          </div>

          <div className="facility-item">
            <div className="facility-icon">🛡️</div>
            <h3>Years of Unbroken Trust Since 2020</h3>
            <p>
              Over 700+ satisfied families and investors have built their homes on Union Home developments since 2020 without a single legal contestation.
            </p>
          </div>

          <div className="facility-item">
            <div className="facility-icon">🤝</div>
            <h3>Flexible Repayment &amp; Bank Loans</h3>
            <p>
              Enjoy customized interest-free installment schemes up to 24 months, or seamless mortgage loan approvals arranged through all leading commercial banks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
