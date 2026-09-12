import React from 'react';
import { Hero3D } from '../components/Hero3D';
import { SearchBar } from '../components/SearchBar';
import { StatsCounter } from '../components/StatsCounter';
import { OngoingCard, PrimeFacilities } from '../components/ProjectCards';
import { OngoingProject, AppTheme } from '../types';

interface HomeViewProps {
  ongoingProjects: OngoingProject[];
  theme: AppTheme;
  onSearch: (filters: { location: string; type: string; budget: string }) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  ongoingProjects,
  theme,
  onSearch,
}) => {
  return (
    <div className="home-view-wrapper">
      {/* Hero Section with 3D Background */}
      <section className="hero" id="homeHeroSection">
        {/* 3D Animation Placed in Background */}
        <Hero3D theme={theme} />

        {/* Ambient Radial Vignette for Contrast & Readability */}
        <div className="hero-atmosphere-overlay" aria-hidden="true" />

        {/* Hero Content Staked Above 3D Model - All Centered */}
        <div className="hero-content">
          <div className="hero-eyebrow">SRI LANKA'S MOST TRUSTED LAND PARTNER</div>
          <h1 className="hero-title">A UNION OF TRUST.</h1>
          <p className="hero-subtitle">
            Union City Developers — Dedicated to unwavering trust, clear legal deeds, and lasting value
            across prime residential locations.
          </p>

          <div className="hero-trust-badge">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
            </svg>
            <span>Trusted by Over 700+ Families Since 2015</span>
          </div>

          {/* Centered Property Search Bar */}
          <div className="hero-search-wrapper">
            <SearchBar onSearch={onSearch} />
          </div>

          {/* Centered Stats Counter Strip: Sold-Out Projects & Trustful Clients */}
          <div className="hero-stats-wrapper">
            <StatsCounter />
          </div>
        </div>
      </section>

      {/* Best Ongoing Projects Section - Centered */}
      <section className="section reveal reveal-visible" id="bestOngoingSection" style={{ textAlign: 'center' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '8px' }}>Best On Going Projects</h2>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '32px', fontSize: '0.95rem' }}>
          Explore our premier residential land developments with ready infrastructure and undisputed legal deeds.
        </p>
        <div id="ongoingGrid" className="project-grid" style={{ justifyContent: 'center' }}>
          {ongoingProjects.map((project) => (
            <OngoingCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </section>

      {/* Prime Facilities & Trust Showcase */}
      <PrimeFacilities />
    </div>
  );
};
