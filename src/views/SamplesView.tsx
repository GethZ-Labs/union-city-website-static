import React, { useState } from 'react';
import { ActivePage } from '../types';

interface SamplesViewProps {
  onNavigate: (page: ActivePage) => void;
  onInquirePlot?: (plotInfo: string) => void;
}

interface SamplePlot {
  id: number;
  lotNo: string;
  perches: number;
  pricePerPerch: number;
  status: 'Available' | 'Reserved';
  features: string;
}

export const SamplesView: React.FC<SamplesViewProps> = ({ onNavigate, onInquirePlot }) => {
  const [selectedPlot, setSelectedPlot] = useState<SamplePlot | null>(null);
  const [activeTab, setActiveTab] = useState<'blockout' | 'legal' | 'infrastructure'>('blockout');

  const samplePlots: SamplePlot[] = [
    { id: 1, lotNo: 'Plot 01', perches: 10.0, pricePerPerch: 350000, status: 'Available', features: 'Corner plot, 30ft road frontage' },
    { id: 2, lotNo: 'Plot 02', perches: 8.5, pricePerPerch: 350000, status: 'Available', features: 'Facing morning sunrise, carpeted road' },
    { id: 3, lotNo: 'Plot 03', perches: 8.5, pricePerPerch: 350000, status: 'Reserved', features: 'Rectangular plot, level ground' },
    { id: 4, lotNo: 'Plot 04', perches: 10.2, pricePerPerch: 350000, status: 'Available', features: 'Close to main entrance gate' },
    { id: 5, lotNo: 'Plot 05', perches: 12.0, pricePerPerch: 340000, status: 'Available', features: 'Extra wide frontage, ideal for 2-story home' },
    { id: 6, lotNo: 'Plot 06', perches: 9.0, pricePerPerch: 350000, status: 'Reserved', features: 'Bordering landscaped natural green buffer' },
    { id: 7, lotNo: 'Plot 07', perches: 10.0, pricePerPerch: 350000, status: 'Available', features: 'Near tap water & 3-phase electricity post' },
    { id: 8, lotNo: 'Plot 08', perches: 15.0, pricePerPerch: 335000, status: 'Available', features: 'Spacious estate plot with lush coconut trees' },
  ];

  const handleInquire = (plot: SamplePlot) => {
    if (onInquirePlot) {
      onInquirePlot(`${plot.lotNo} (${plot.perches} Perches - Rs. ${plot.pricePerPerch.toLocaleString()}/perch)`);
    } else {
      onNavigate('contact');
    }
  };

  const whatsappSampleUrl = `https://wa.me/?text=${encodeURIComponent(
    'Hello Union Home, I would like to request sample block-out plans, survey layouts, and title deed specifications for your ongoing developments.'
  )}`;

  return (
    <div className="content-page" id="samplesPage" style={{ maxWidth: '1180px', margin: '0 auto', padding: '36px 20px' }}>
      {/* Header Banner */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(56, 189, 248, 0.12)',
            color: '#38bdf8',
            padding: '6px 16px',
            borderRadius: '20px',
            fontSize: '0.84rem',
            fontWeight: 700,
            marginBottom: '12px',
          }}
        >
          📐 DEVELOPMENT PORTFOLIO &amp; SPECIFICATIONS
        </div>
        <h1 className="page-title" style={{ marginBottom: '8px' }}>Sample Land Plans &amp; Plots</h1>
        <p className="content-subtitle" style={{ maxWidth: '720px', margin: '0 auto' }}>
          Explore our sample subdivision plans, cadastral block-out designs, clear title deed standards,
          and complete modern infrastructure delivered with every Union Home development since 2020.
        </p>
      </div>

      {/* Tabs */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          marginBottom: '32px',
          flexWrap: 'wrap',
        }}
      >
        <button
          type="button"
          onClick={() => setActiveTab('blockout')}
          style={{
            padding: '10px 22px',
            borderRadius: '30px',
            fontWeight: 700,
            fontSize: '0.9rem',
            cursor: 'pointer',
            border: activeTab === 'blockout' ? '1px solid #38bdf8' : '1px solid var(--glass-border)',
            background: activeTab === 'blockout' ? 'rgba(56, 189, 248, 0.2)' : 'rgba(255,255,255,0.04)',
            color: activeTab === 'blockout' ? '#fff' : 'var(--text-muted)',
            transition: 'all 0.2s ease',
          }}
        >
          🗺️ Sample Block-Out Plan
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('legal')}
          style={{
            padding: '10px 22px',
            borderRadius: '30px',
            fontWeight: 700,
            fontSize: '0.9rem',
            cursor: 'pointer',
            border: activeTab === 'legal' ? '1px solid #38bdf8' : '1px solid var(--glass-border)',
            background: activeTab === 'legal' ? 'rgba(56, 189, 248, 0.2)' : 'rgba(255,255,255,0.04)',
            color: activeTab === 'legal' ? '#fff' : 'var(--text-muted)',
            transition: 'all 0.2s ease',
          }}
        >
          📜 Legal Clear Deeds Assurance
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('infrastructure')}
          style={{
            padding: '10px 22px',
            borderRadius: '30px',
            fontWeight: 700,
            fontSize: '0.9rem',
            cursor: 'pointer',
            border: activeTab === 'infrastructure' ? '1px solid #38bdf8' : '1px solid var(--glass-border)',
            background: activeTab === 'infrastructure' ? 'rgba(56, 189, 248, 0.2)' : 'rgba(255,255,255,0.04)',
            color: activeTab === 'infrastructure' ? '#fff' : 'var(--text-muted)',
            transition: 'all 0.2s ease',
          }}
        >
          🏗️ Infrastructure Quality Standards
        </button>
      </div>

      {/* Tab 1: Interactive Sample Block-Out Plan */}
      {activeTab === 'blockout' && (
        <div className="reveal reveal-visible">
          <div
            style={{
              background: 'var(--glass-bg)',
              border: '1px solid var(--glass-border)',
              borderRadius: '20px',
              padding: '28px',
              marginBottom: '32px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '4px' }}>
                  Interactive Sample Subdivision Layout (Standard 8–15 Perch Parcels)
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                  Click on any sample plot below to inspect perch dimensions, estimated investment, and features.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', fontSize: '0.84rem' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#4ade80' }}>
                  <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: '#22c55e', display: 'inline-block' }} />
                  Available Sample
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#f87171' }}>
                  <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: '#ef4444', display: 'inline-block' }} />
                  Reserved
                </span>
              </div>
            </div>

            {/* Roadway indicator */}
            <div
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px dashed rgba(255,255,255,0.2)',
                borderRadius: '8px',
                padding: '8px 16px',
                textAlign: 'center',
                color: '#cbd5e1',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '1px',
                marginBottom: '16px',
              }}
            >
              🚗 20-FOOT CARPETED ACCESS ROADWAY RESERVATION WITH CONCRETE GUTTERS 🚗
            </div>

            {/* Grid of sample plots */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                gap: '16px',
                marginBottom: '24px',
              }}
            >
              {samplePlots.map((plot) => {
                const isSelected = selectedPlot?.id === plot.id;
                const isAvail = plot.status === 'Available';
                const totalPrice = plot.perches * plot.pricePerPerch;

                return (
                  <div
                    key={plot.id}
                    onClick={() => setSelectedPlot(plot)}
                    style={{
                      border: isSelected
                        ? '2px solid #38bdf8'
                        : isAvail
                        ? '1px solid rgba(34, 197, 94, 0.4)'
                        : '1px solid rgba(239, 68, 68, 0.4)',
                      background: isSelected
                        ? 'rgba(56, 189, 248, 0.12)'
                        : isAvail
                        ? 'rgba(34, 197, 94, 0.05)'
                        : 'rgba(239, 68, 68, 0.05)',
                      borderRadius: '14px',
                      padding: '16px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <span style={{ fontWeight: 800, fontSize: '1.05rem', color: '#fff' }}>{plot.lotNo}</span>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          padding: '3px 8px',
                          borderRadius: '12px',
                          background: isAvail ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                          color: isAvail ? '#4ade80' : '#f87171',
                        }}
                      >
                        {plot.status}
                      </span>
                    </div>

                    <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#38bdf8', marginBottom: '4px' }}>
                      {plot.perches} Perches
                    </div>

                    <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginBottom: '10px' }}>
                      Rs. {plot.pricePerPerch.toLocaleString()} / perch
                    </div>

                    <div style={{ fontSize: '0.82rem', color: '#e2e8f0', background: 'rgba(0,0,0,0.2)', padding: '6px 10px', borderRadius: '6px', marginBottom: '8px' }}>
                      Est. Total: <strong>Rs. {totalPrice.toLocaleString()}</strong>
                    </div>

                    <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>
                      {plot.features}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Selected Plot Detail Card */}
            {selectedPlot ? (
              <div
                style={{
                  background: 'rgba(2, 132, 199, 0.1)',
                  border: '1px solid rgba(56, 189, 248, 0.35)',
                  borderRadius: '16px',
                  padding: '20px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '16px',
                }}
              >
                <div>
                  <div style={{ fontSize: '0.84rem', color: '#38bdf8', fontWeight: 700 }}>
                    SELECTED SAMPLE PLOT: {selectedPlot.lotNo}
                  </div>
                  <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff' }}>
                    {selectedPlot.perches} Perches • Rs. {(selectedPlot.perches * selectedPlot.pricePerPerch).toLocaleString()} Total
                  </div>
                  <div style={{ fontSize: '0.86rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                    {selectedPlot.features} • 100% Freehold Bim Saviya Title Deed Guaranteed
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    onClick={() => handleInquire(selectedPlot)}
                    style={{
                      background: '#0284c7',
                      color: '#fff',
                      fontWeight: 700,
                      padding: '10px 20px',
                      borderRadius: '10px',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '0.88rem',
                    }}
                  >
                    Inquire for this Sample Plot
                  </button>
                  <a
                    href={whatsappSampleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: '#25D366',
                      color: '#062013',
                      fontWeight: 700,
                      padding: '10px 18px',
                      borderRadius: '10px',
                      textDecoration: 'none',
                      fontSize: '0.88rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    WhatsApp Plan
                  </a>
                </div>
              </div>
            ) : (
              <div style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.86rem', fontStyle: 'italic' }}>
                Tip: Click any plot above to view sample investment details and arrange a site inspection.
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tab 2: Legal Clear Deeds Assurance */}
      {activeTab === 'legal' && (
        <div className="reveal reveal-visible">
          <div
            style={{
              background: 'var(--glass-bg)',
              border: '1px solid var(--glass-border)',
              borderRadius: '20px',
              padding: '32px',
              marginBottom: '32px',
            }}
          >
            <h3 style={{ fontSize: '1.3rem', marginBottom: '8px', color: '#fff' }}>
              Sample Legal Clear Deed Verification Process (Since 2020)
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '24px', lineHeight: '1.6' }}>
              Union Home guarantees zero title contestation. Every parcel is screened by senior legal counsel
              and authorized surveyors before launch.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
              <div style={{ background: 'rgba(255,255,255,0.04)', padding: '20px', borderRadius: '14px', border: '1px solid var(--glass-border)' }}>
                <div style={{ fontSize: '1.8rem', marginBottom: '8px' }}>📜</div>
                <h4 style={{ color: '#38bdf8', marginBottom: '6px' }}>First-Class Title (Bim Saviya)</h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: '1.55' }}>
                  Undisputed freehold ownership certificates certified under the Registration of Title Act. Clean ownership with bank-acceptable deeds.
                </p>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.04)', padding: '20px', borderRadius: '14px', border: '1px solid var(--glass-border)' }}>
                <div style={{ fontSize: '1.8rem', marginBottom: '8px' }}>📐</div>
                <h4 style={{ color: '#38bdf8', marginBottom: '6px' }}>Approved Survey Plans</h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: '1.55' }}>
                  Every lot is precisely pegged with concrete survey boundary stones and certified by licensed surveyors and local councils.
                </p>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.04)', padding: '20px', borderRadius: '14px', border: '1px solid var(--glass-border)' }}>
                <div style={{ fontSize: '1.8rem', marginBottom: '8px' }}>🏛️</div>
                <h4 style={{ color: '#38bdf8', marginBottom: '6px' }}>Pradeshiya Sabha Approvals</h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: '1.55' }}>
                  Preliminary planning clearances obtained from local municipal authorities, ensuring smooth building approvals for your future home.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Infrastructure Standards */}
      {activeTab === 'infrastructure' && (
        <div className="reveal reveal-visible">
          <div
            style={{
              background: 'var(--glass-bg)',
              border: '1px solid var(--glass-border)',
              borderRadius: '20px',
              padding: '32px',
              marginBottom: '32px',
            }}
          >
            <h3 style={{ fontSize: '1.3rem', marginBottom: '8px', color: '#fff' }}>
              Sample Site Infrastructure Checklist
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '24px', lineHeight: '1.6' }}>
              All Union Home projects are handed over with complete ready-to-build facilities.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
              <div style={{ padding: '16px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', borderLeft: '4px solid #22c55e' }}>
                <h4 style={{ color: '#fff', fontSize: '0.95rem', marginBottom: '4px' }}>⚡ 3-Phase Electricity</h4>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>CEB high-capacity supply cables and step-down transformers ready at your boundary.</p>
              </div>

              <div style={{ padding: '16px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', borderLeft: '4px solid #38bdf8' }}>
                <h4 style={{ color: '#fff', fontSize: '0.95rem', marginBottom: '4px' }}>💧 Pipe-Borne Water Supply</h4>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>Main water line connections certified by the National Water Supply &amp; Drainage Board.</p>
              </div>

              <div style={{ padding: '16px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', borderLeft: '4px solid #f59e0b' }}>
                <h4 style={{ color: '#fff', fontSize: '0.95rem', marginBottom: '4px' }}>🛣️ 20ft &amp; 30ft Carpeted Roads</h4>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>Engineered heavy-duty tarred roadways allowing easy two-way vehicle access.</p>
              </div>

              <div style={{ padding: '16px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', borderLeft: '4px solid #a855f7' }}>
                <h4 style={{ color: '#fff', fontSize: '0.95rem', marginBottom: '4px' }}>🌊 Concrete Stormwater Drains</h4>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>Precast concrete drainage system ensuring flood-free living year-round.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to action */}
      <div
        style={{
          background: 'linear-gradient(135deg, rgba(2, 132, 199, 0.15) 0%, rgba(37, 211, 102, 0.1) 100%)',
          border: '1px solid var(--glass-border)',
          borderRadius: '20px',
          padding: '30px',
          textAlign: 'center',
        }}
      >
        <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '8px' }}>
          Need a Custom Sample Plan or Private Site Visit?
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', maxWidth: '580px', margin: '0 auto 20px' }}>
          Speak directly with our property advisors or contact our hotline for complete project dossiers, deed abstracts, and site viewing schedules.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
          <a
            href="tel:+940xxxxxxxxx"
            style={{
              background: '#0284c7',
              color: '#fff',
              fontWeight: 700,
              padding: '10px 22px',
              borderRadius: '10px',
              textDecoration: 'none',
              fontSize: '0.9rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            📞 Call +94 0xxxxxxxxx
          </a>
          <a
            href={whatsappSampleUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#25D366',
              color: '#062013',
              fontWeight: 700,
              padding: '10px 22px',
              borderRadius: '10px',
              textDecoration: 'none',
              fontSize: '0.9rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            💬 WhatsApp Sample Plans
          </a>
          <button
            type="button"
            onClick={() => onNavigate('lands')}
            style={{
              background: 'rgba(255,255,255,0.08)',
              color: '#fff',
              fontWeight: 600,
              padding: '10px 20px',
              borderRadius: '10px',
              border: '1px solid var(--glass-border)',
              cursor: 'pointer',
              fontSize: '0.9rem',
            }}
          >
            Browse All Lands
          </button>
        </div>
      </div>
    </div>
  );
};
