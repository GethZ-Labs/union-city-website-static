import React, { useState } from 'react';
import { OngoingProject, ComingSoonProject, SoldOutProject } from '../types';
import { OngoingCard, ComingSoonCard, SoldOutCard } from '../components/ProjectCards';

interface LandsViewProps {
  ongoingProjects: OngoingProject[];
  comingSoonProjects: ComingSoonProject[];
  soldOutProjects: SoldOutProject[];
  initialFilterLocation?: string;
  onInquire: (projectName: string) => void;
  onViewSamples?: () => void;
}

export const LandsView: React.FC<LandsViewProps> = ({
  ongoingProjects,
  comingSoonProjects,
  soldOutProjects,
  initialFilterLocation = '',
  onInquire,
  onViewSamples,
}) => {
  const [filterLocation, setFilterLocation] = useState(initialFilterLocation);
  const [searchTerm, setSearchTerm] = useState('');

  const loc = filterLocation.trim().toLowerCase();
  const search = searchTerm.trim().toLowerCase();

  const filterItem = (text: string) => {
    const t = text.toLowerCase();
    if (loc && !t.includes(loc)) return false;
    if (search && !t.includes(search)) return false;
    return true;
  };

  const filteredOngoing = ongoingProjects.filter(
    (p) => filterItem(p.name) || filterItem(p.location)
  );

  const filteredComingSoon = comingSoonProjects.filter((p) =>
    filterItem(p.location)
  );

  const filteredSoldOut = soldOutProjects.filter(
    (p) => filterItem(p.name) || filterItem(p.location) || filterItem(p.highlights)
  );

  return (
    <div>
      <h1 className="page-title">Lands</h1>

      {/* Filter Toolbar */}
      <div
        className="lands-filter-toolbar"
        style={{
          maxWidth: '1240px',
          margin: '0 auto 30px',
          padding: '0 20px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div
          className="lands-filter-controls"
          style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap', width: '100%', maxWidth: '780px' }}
        >
          <div style={{ flex: '1 1 220px', minWidth: '180px' }}>
            <input
              type="text"
              placeholder="Search by city or project..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid var(--glass-border)',
                borderRadius: '30px',
                padding: '10px 18px',
                color: '#fff',
                fontSize: '0.9rem',
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
          </div>

          <select
            value={filterLocation}
            onChange={(e) => setFilterLocation(e.target.value)}
            style={{
              flex: '1 1 180px',
              minWidth: '160px',
              background: 'rgba(12, 27, 48, 0.9)',
              border: '1px solid var(--glass-border)',
              borderRadius: '30px',
              padding: '10px 16px',
              color: '#fff',
              fontSize: '0.88rem',
              outline: 'none',
              cursor: 'pointer',
              boxSizing: 'border-box',
            }}
          >
            <option value="">All Locations (18+ Cities)</option>
            <option value="Pasyala">Pasyala</option>
            <option value="Kiriwattuduwa">Kiriwattuduwa</option>
            <option value="Bandaragama">Bandaragama</option>
            <option value="Athurugiriya">Athurugiriya</option>
            <option value="Diyagama">Diyagama</option>
            <option value="Godagama">Godagama</option>
            <option value="Gonapala">Gonapala</option>
            <option value="Homagama">Homagama</option>
            <option value="Kahatuduwa">Kahatuduwa</option>
            <option value="Kalutara">Kalutara</option>
            <option value="Kottawa">Kottawa</option>
            <option value="Makumbura">Makumbura</option>
            <option value="Meegoda">Meegoda</option>
            <option value="Panadura">Panadura</option>
            <option value="Pitipana">Pitipana</option>
            <option value="Polgasowita">Polgasowita</option>
            <option value="Siddamulla">Siddamulla</option>
            <option value="Watareka">Watareka</option>
          </select>

          {(filterLocation || searchTerm) && (
            <button
              type="button"
              onClick={() => {
                setFilterLocation('');
                setSearchTerm('');
              }}
              style={{
                background: 'rgba(239, 68, 68, 0.15)',
                border: '1px solid rgba(239, 68, 68, 0.4)',
                color: '#f87171',
                borderRadius: '30px',
                padding: '8px 16px',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              ✕ Clear Filters
            </button>
          )}
        </div>

        <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          Showing {filteredOngoing.length} ongoing &bull; {filteredSoldOut.length} completed
        </div>
      </div>

      {/* Samples & Block-Out Plans Banner */}
      {onViewSamples && (
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto 28px',
            padding: '16px 20px',
            background: 'linear-gradient(90deg, rgba(2, 132, 199, 0.15) 0%, rgba(37, 211, 102, 0.08) 100%)',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '14px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '1.6rem' }}>📐</span>
            <div>
              <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.98rem' }}>
                Looking for Sample Block-Out Plans &amp; Legal Title Specs?
              </div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.84rem' }}>
                View our interactive 8–15 perch sample layouts, clear deed standards, and site utilities.
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={onViewSamples}
            style={{
              background: '#0284c7',
              color: '#fff',
              fontWeight: 700,
              fontSize: '0.86rem',
              padding: '8px 18px',
              borderRadius: '24px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            Explore Samples &amp; Plans &rarr;
          </button>
        </div>
      )}

      {/* ============ ON GOING PROJECTS ============ */}
      <section className="section reveal reveal-visible" id="landsOngoingSection">
        <h2>On Going Projects</h2>
        {filteredOngoing.length > 0 ? (
          <div id="ongoingGrid" className="project-grid">
            {filteredOngoing.map((project) => (
              <OngoingCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        ) : (
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '24px 0' }}>
            No ongoing projects match the current filter.
          </p>
        )}
      </section>

      {/* ============ COMING SOON ============ */}
      <section className="section reveal reveal-visible" id="landsComingSoonSection">
        <h2>Coming Soon</h2>
        {filteredComingSoon.length > 0 ? (
          <div id="comingSoonGrid" className="project-grid">
            {filteredComingSoon.map((project) => (
              <ComingSoonCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '24px 0' }}>
            No upcoming locations match the current filter.
          </p>
        )}
      </section>

      {/* ============ SOLD OUT PROJECTS ============ */}
      <section className="section reveal reveal-visible" id="landsSoldOutSection">
        <h2>Sold Out Projects ({soldOutProjects.length}+ Completed)</h2>
        {filteredSoldOut.length > 0 ? (
          <div id="soldOutGrid" className="project-grid sold-out-grid">
            {filteredSoldOut.map((project) => (
              <SoldOutCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '24px 0' }}>
            No sold out projects match the current filter.
          </p>
        )}
      </section>
    </div>
  );
};
