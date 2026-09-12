import React, { useState } from 'react';
import { OngoingProject, ComingSoonProject, SoldOutProject, ContactMessage, CareerApplication } from '../types';

interface AdminViewProps {
  ongoingProjects: OngoingProject[];
  comingSoonProjects: ComingSoonProject[];
  soldOutProjects: SoldOutProject[];
  messages: ContactMessage[];
  applications: CareerApplication[];
  onUpdateOngoing: (projects: OngoingProject[]) => void;
  onUpdateComingSoon: (projects: ComingSoonProject[]) => void;
  onUpdateSoldOut: (projects: SoldOutProject[]) => void;
  onUpdateMessages: (messages: ContactMessage[]) => void;
  onUpdateApplications: (apps: CareerApplication[]) => void;
  onResetData: () => void;
  onExitAdmin: () => void;
}

type AdminTab = 'messages' | 'applications' | 'ongoing' | 'comingSoon' | 'soldOut' | 'settings';

export const AdminView: React.FC<AdminViewProps> = ({
  ongoingProjects,
  comingSoonProjects,
  soldOutProjects,
  messages,
  applications,
  onUpdateOngoing,
  onUpdateComingSoon,
  onUpdateSoldOut,
  onUpdateMessages,
  onUpdateApplications,
  onResetData,
  onExitAdmin,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [currentTab, setCurrentTab] = useState<AdminTab>('messages');

  // Ongoing Project Form State
  const [newOngoingName, setNewOngoingName] = useState('');
  const [newOngoingLocation, setNewOngoingLocation] = useState('');
  const [newOngoingPrice, setNewOngoingPrice] = useState('');
  const [newOngoingImage, setNewOngoingImage] = useState('/images/banner-pasyala.jpg');

  // Coming Soon Form State
  const [newSoonLocation, setNewSoonLocation] = useState('');
  const [newSoonNote, setNewSoonNote] = useState('');

  // Sold Out Form State
  const [newSoldName, setNewSoldName] = useState('');
  const [newSoldLocation, setNewSoldLocation] = useState('');
  const [newSoldHighlights, setNewSoldHighlights] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin12345' || password === 'admin' || password === '') {
      setIsAuthenticated(true);
      setLoginError('');
    } else {
      setLoginError('Invalid password. (Default is admin12345)');
    }
  };

  const handleAddOngoing = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newOngoingName || !newOngoingLocation) return;
    const newProj: OngoingProject = {
      id: 'ongoing-' + Date.now(),
      name: newOngoingName,
      location: newOngoingLocation,
      pricePerPerch: newOngoingPrice || 'Rs. 250,000',
      image: newOngoingImage || '/images/banner-pasyala.jpg',
      link: 'https://www.facebook.com/unioncitydevelopers',
      amenities: ['⚡ 3-Phase Electricity', '💧 Pipe Water', '📜 Clear Deed'],
    };
    onUpdateOngoing([newProj, ...ongoingProjects]);
    setNewOngoingName('');
    setNewOngoingLocation('');
    setNewOngoingPrice('');
  };

  const handleDeleteOngoing = (id: string) => {
    onUpdateOngoing(ongoingProjects.filter((p) => p.id !== id));
  };

  const handleAddSoon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSoonLocation) return;
    const newSoon: ComingSoonProject = {
      id: 'soon-' + Date.now(),
      location: newSoonLocation,
      note: newSoonNote || 'New land project launching soon. Stay tuned!',
    };
    onUpdateComingSoon([...comingSoonProjects, newSoon]);
    setNewSoonLocation('');
    setNewSoonNote('');
  };

  const handleDeleteSoon = (id: string) => {
    onUpdateComingSoon(comingSoonProjects.filter((p) => p.id !== id));
  };

  const handleAddSold = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSoldName || !newSoldLocation) return;
    const newSold: SoldOutProject = {
      id: 'sold-' + Date.now(),
      name: newSoldName,
      location: newSoldLocation,
      highlights: newSoldHighlights || '100% Sold & Handed Over',
      image: '/images/banner-union25-homagama.svg',
    };
    onUpdateSoldOut([newSold, ...soldOutProjects]);
    setNewSoldName('');
    setNewSoldLocation('');
    setNewSoldHighlights('');
  };

  const handleDeleteSold = (id: string) => {
    onUpdateSoldOut(soldOutProjects.filter((p) => p.id !== id));
  };

  const handleToggleMessageStatus = (id: string) => {
    onUpdateMessages(
      messages.map((m) =>
        m.id === id ? { ...m, status: m.status === 'read' ? 'unread' : 'read' } : m
      )
    );
  };

  const handleDeleteMessage = (id: string) => {
    onUpdateMessages(messages.filter((m) => m.id !== id));
  };

  const handleDeleteApp = (id: string) => {
    onUpdateApplications(applications.filter((a) => a.id !== id));
  };

  const unreadMessagesCount = messages.filter((m) => m.status === 'unread').length;
  const newAppsCount = applications.filter((a) => a.status === 'new').length;

  // ----------------------------------------------------
  // LOGIN SCREEN
  // ----------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="admin-login-screen" id="adminLoginScreen">
        <div className="admin-login-card">
          <img
            src="/images/transparent_logo.svg"
            alt="Union City Developers logo"
            className="admin-login-logo"
            style={{ margin: '0 auto 16px', display: 'block', height: '60px' }}
          />
          <h1>Admin Portal</h1>
          <p className="admin-login-sub">Union City Developers (Pvt) Ltd</p>

          <form onSubmit={handleLogin}>
            <label>
              Username
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
              />
            </label>
            <label>
              Password
              <input
                type="password"
                placeholder="Enter password (default: admin12345)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </label>

            {loginError && <div className="admin-error">{loginError}</div>}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
              <button type="submit" className="admin-btn admin-btn-primary">
                Sign In
              </button>
              <button
                type="button"
                className="admin-btn"
                style={{ background: '#f1f5f9', color: '#334155' }}
                onClick={() => {
                  setPassword('admin12345');
                  setIsAuthenticated(true);
                }}
              >
                1-Click Demo Login
              </button>
              <button
                type="button"
                className="admin-btn admin-btn-outline"
                onClick={onExitAdmin}
              >
                &larr; Return to Website
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // MAIN ADMIN DASHBOARD
  // ----------------------------------------------------
  return (
    <div className="admin-body" style={{ minHeight: '100vh', display: 'flex' }}>
      {/* Admin Sidebar */}
      <aside
        style={{
          width: '260px',
          background: '#0a1728',
          color: '#e2e8f0',
          padding: '24px 16px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          flexShrink: 0,
        }}
      >
        <div>
          {/* Logo & Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '0 8px 24px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            <img src="/images/transparent_logo.svg" alt="Logo" style={{ height: '38px' }} />
            <div>
              <div style={{ fontWeight: 800, fontSize: '1rem', color: '#fff' }}>Union City</div>
              <div style={{ fontSize: '0.65rem', color: '#38bdf8', fontWeight: 700 }}>ADMIN PORTAL</div>
            </div>
          </div>

          {/* Navigation Links */}
          <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <button
              type="button"
              onClick={() => setCurrentTab('messages')}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                padding: '12px 14px',
                borderRadius: '8px',
                background: currentTab === 'messages' ? 'rgba(56, 189, 248, 0.16)' : 'transparent',
                color: currentTab === 'messages' ? '#38bdf8' : '#cbd5e1',
                border: 'none',
                cursor: 'pointer',
                fontWeight: currentTab === 'messages' ? 700 : 500,
                fontSize: '0.9rem',
                textAlign: 'left',
              }}
            >
              <span>📩 Inquiries &amp; Messages</span>
              {unreadMessagesCount > 0 && (
                <span style={{ background: '#ef4444', color: '#fff', fontSize: '0.72rem', padding: '2px 7px', borderRadius: '10px', fontWeight: 700 }}>
                  {unreadMessagesCount}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() => setCurrentTab('applications')}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                padding: '12px 14px',
                borderRadius: '8px',
                background: currentTab === 'applications' ? 'rgba(56, 189, 248, 0.16)' : 'transparent',
                color: currentTab === 'applications' ? '#38bdf8' : '#cbd5e1',
                border: 'none',
                cursor: 'pointer',
                fontWeight: currentTab === 'applications' ? 700 : 500,
                fontSize: '0.9rem',
                textAlign: 'left',
              }}
            >
              <span>🧑‍💼 Job Applications</span>
              {newAppsCount > 0 && (
                <span style={{ background: '#10b981', color: '#fff', fontSize: '0.72rem', padding: '2px 7px', borderRadius: '10px', fontWeight: 700 }}>
                  {newAppsCount}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() => setCurrentTab('ongoing')}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                padding: '12px 14px',
                borderRadius: '8px',
                background: currentTab === 'ongoing' ? 'rgba(56, 189, 248, 0.16)' : 'transparent',
                color: currentTab === 'ongoing' ? '#38bdf8' : '#cbd5e1',
                border: 'none',
                cursor: 'pointer',
                fontWeight: currentTab === 'ongoing' ? 700 : 500,
                fontSize: '0.9rem',
                textAlign: 'left',
              }}
            >
              <span>🏗️ Ongoing Projects</span>
              <span style={{ color: '#94a3b8', fontSize: '0.8rem' }}>{ongoingProjects.length}</span>
            </button>

            <button
              type="button"
              onClick={() => setCurrentTab('comingSoon')}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                padding: '12px 14px',
                borderRadius: '8px',
                background: currentTab === 'comingSoon' ? 'rgba(56, 189, 248, 0.16)' : 'transparent',
                color: currentTab === 'comingSoon' ? '#38bdf8' : '#cbd5e1',
                border: 'none',
                cursor: 'pointer',
                fontWeight: currentTab === 'comingSoon' ? 700 : 500,
                fontSize: '0.9rem',
                textAlign: 'left',
              }}
            >
              <span>⏳ Coming Soon</span>
              <span style={{ color: '#94a3b8', fontSize: '0.8rem' }}>{comingSoonProjects.length}</span>
            </button>

            <button
              type="button"
              onClick={() => setCurrentTab('soldOut')}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                padding: '12px 14px',
                borderRadius: '8px',
                background: currentTab === 'soldOut' ? 'rgba(56, 189, 248, 0.16)' : 'transparent',
                color: currentTab === 'soldOut' ? '#38bdf8' : '#cbd5e1',
                border: 'none',
                cursor: 'pointer',
                fontWeight: currentTab === 'soldOut' ? 700 : 500,
                fontSize: '0.9rem',
                textAlign: 'left',
              }}
            >
              <span>✅ Sold Out Projects</span>
              <span style={{ color: '#94a3b8', fontSize: '0.8rem' }}>{soldOutProjects.length}</span>
            </button>

            <button
              type="button"
              onClick={() => setCurrentTab('settings')}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                padding: '12px 14px',
                borderRadius: '8px',
                background: currentTab === 'settings' ? 'rgba(56, 189, 248, 0.16)' : 'transparent',
                color: currentTab === 'settings' ? '#38bdf8' : '#cbd5e1',
                border: 'none',
                cursor: 'pointer',
                fontWeight: currentTab === 'settings' ? 700 : 500,
                fontSize: '0.9rem',
                textAlign: 'left',
              }}
            >
              <span>⚙️ Data &amp; Settings</span>
            </button>
          </div>
        </div>

        {/* Sidebar Footer */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <button
            type="button"
            onClick={onExitAdmin}
            style={{
              padding: '10px',
              borderRadius: '8px',
              background: 'rgba(255,255,255,0.06)',
              color: '#38bdf8',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.85rem',
            }}
          >
            &larr; View Live Website
          </button>
          <button
            type="button"
            onClick={() => setIsAuthenticated(false)}
            style={{
              padding: '8px',
              borderRadius: '8px',
              background: 'transparent',
              color: '#94a3b8',
              border: 'none',
              cursor: 'pointer',
              fontSize: '0.8rem',
            }}
          >
            Log Out (admin)
          </button>
        </div>
      </aside>

      {/* Admin Content Area */}
      <main style={{ flex: 1, padding: '32px 40px', overflowY: 'auto', background: '#f8fafc', color: '#1e293b' }}>
        {/* Header bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
          <div>
            <h1 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
              {currentTab === 'messages' && 'Client Inquiries & Messages'}
              {currentTab === 'applications' && 'Career Job Applications'}
              {currentTab === 'ongoing' && 'Manage Ongoing Projects'}
              {currentTab === 'comingSoon' && 'Manage Coming Soon Locations'}
              {currentTab === 'soldOut' && 'Sold Out Portfolio (100% Handed Over)'}
              {currentTab === 'settings' && 'System Settings & Data Recovery'}
            </h1>
            <p style={{ margin: '4px 0 0', color: '#64748b', fontSize: '0.9rem' }}>
              Real-time frontend state management. All changes are stored locally in browser storage.
            </p>
          </div>
          <button
            type="button"
            onClick={onExitAdmin}
            className="admin-btn admin-btn-primary"
            style={{ width: 'auto', padding: '8px 18px', fontSize: '0.85rem' }}
          >
            Live Website &rarr;
          </button>
        </div>

        {/* ================= TAB 1: MESSAGES ================= */}
        {currentTab === 'messages' && (
          <div>
            {messages.length === 0 ? (
              <div style={{ background: '#fff', padding: '40px', borderRadius: '12px', textAlign: 'center', color: '#64748b', border: '1px solid #e2e8f0' }}>
                No messages received yet. Submit a message via the Contact Us form to test!
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    style={{
                      background: '#fff',
                      padding: '20px 24px',
                      borderRadius: '12px',
                      border: msg.status === 'unread' ? '2px solid #38bdf8' : '1px solid #e2e8f0',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                      <div>
                        <span style={{ fontWeight: 700, fontSize: '1.05rem', color: '#0f172a', marginRight: '10px' }}>
                          {msg.name}
                        </span>
                        {msg.status === 'unread' && (
                          <span style={{ background: '#e0f2fe', color: '#0284c7', fontSize: '0.75rem', padding: '2px 8px', borderRadius: '12px', fontWeight: 700 }}>
                            NEW
                          </span>
                        )}
                        <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '2px' }}>
                          ✉️ <a href={`mailto:${msg.email}`} style={{ color: '#0284c7' }}>{msg.email}</a>
                          {msg.phone && <span> &bull; 📞 <a href={`tel:${msg.phone}`} style={{ color: '#0284c7' }}>{msg.phone}</a></span>}
                        </div>
                      </div>
                      <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{msg.date}</span>
                    </div>

                    <div style={{ background: '#f8fafc', padding: '14px', borderRadius: '8px', fontSize: '0.92rem', color: '#334155', lineHeight: '1.5', margin: '12px 0' }}>
                      "{msg.message}"
                    </div>

                    <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                      <button
                        type="button"
                        onClick={() => handleToggleMessageStatus(msg.id)}
                        style={{
                          background: 'transparent',
                          border: '1px solid #cbd5e1',
                          padding: '6px 14px',
                          borderRadius: '6px',
                          fontSize: '0.8rem',
                          cursor: 'pointer',
                        }}
                      >
                        {msg.status === 'unread' ? 'Mark as Read' : 'Mark Unread'}
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDeleteMessage(msg.id)}
                        style={{
                          background: '#fee2e2',
                          color: '#dc2626',
                          border: 'none',
                          padding: '6px 14px',
                          borderRadius: '6px',
                          fontSize: '0.8rem',
                          cursor: 'pointer',
                          fontWeight: 600,
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ================= TAB 2: APPLICATIONS ================= */}
        {currentTab === 'applications' && (
          <div>
            {applications.length === 0 ? (
              <div style={{ background: '#fff', padding: '40px', borderRadius: '12px', textAlign: 'center', color: '#64748b', border: '1px solid #e2e8f0' }}>
                No career job applications received yet. Click "Apply for Role" on the Careers page to test!
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {applications.map((app) => (
                  <div
                    key={app.id}
                    style={{
                      background: '#fff',
                      padding: '20px 24px',
                      borderRadius: '12px',
                      border: '1px solid #e2e8f0',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div>
                        <span style={{ background: '#dcfce7', color: '#15803d', fontSize: '0.75rem', fontWeight: 700, padding: '3px 8px', borderRadius: '4px', textTransform: 'uppercase' }}>
                          {app.position}
                        </span>
                        <h3 style={{ margin: '6px 0 2px', fontSize: '1.1rem', color: '#0f172a' }}>{app.name}</h3>
                        <div style={{ fontSize: '0.85rem', color: '#64748b' }}>
                          ✉️ {app.email} {app.phone && `• 📞 ${app.phone}`}
                        </div>
                      </div>
                      <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{app.date}</span>
                    </div>

                    {app.resumeFileName && (
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#f1f5f9', padding: '6px 12px', borderRadius: '6px', fontSize: '0.82rem', marginTop: '12px', color: '#334155' }}>
                        📄 <strong>Attached CV:</strong> {app.resumeFileName}
                      </div>
                    )}

                    {app.message && (
                      <div style={{ background: '#f8fafc', padding: '12px', borderRadius: '6px', fontSize: '0.88rem', color: '#475569', marginTop: '10px' }}>
                        Note: {app.message}
                      </div>
                    )}

                    <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', marginTop: '14px' }}>
                      <a
                        href={`mailto:${app.email}?subject=Union City Developers Application - ${app.position}`}
                        style={{
                          background: '#0284c7',
                          color: '#fff',
                          textDecoration: 'none',
                          padding: '6px 14px',
                          borderRadius: '6px',
                          fontSize: '0.8rem',
                          fontWeight: 600,
                        }}
                      >
                        Contact Candidate
                      </a>
                      <button
                        type="button"
                        onClick={() => handleDeleteApp(app.id)}
                        style={{
                          background: '#fee2e2',
                          color: '#dc2626',
                          border: 'none',
                          padding: '6px 14px',
                          borderRadius: '6px',
                          fontSize: '0.8rem',
                          cursor: 'pointer',
                          fontWeight: 600,
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ================= TAB 3: ONGOING PROJECTS ================= */}
        {currentTab === 'ongoing' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '28px' }}>
            {/* Add Project Form */}
            <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0', height: 'fit-content' }}>
              <h3 style={{ margin: '0 0 16px', fontSize: '1.1rem' }}>+ Add New Ongoing Project</h3>
              <form onSubmit={handleAddOngoing} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569' }}>Project Name *</label>
                  <input
                    type="text"
                    placeholder="e.g. City View Homagama"
                    value={newOngoingName}
                    onChange={(e) => setNewOngoingName(e.target.value)}
                    required
                    style={{ width: '100%', padding: '9px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', marginTop: '4px' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569' }}>Location *</label>
                  <input
                    type="text"
                    placeholder="e.g. Homagama"
                    value={newOngoingLocation}
                    onChange={(e) => setNewOngoingLocation(e.target.value)}
                    required
                    style={{ width: '100%', padding: '9px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', marginTop: '4px' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569' }}>Price Per Perch</label>
                  <input
                    type="text"
                    placeholder="e.g. Rs. 275,000"
                    value={newOngoingPrice}
                    onChange={(e) => setNewOngoingPrice(e.target.value)}
                    style={{ width: '100%', padding: '9px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', marginTop: '4px' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569' }}>Banner Image</label>
                  <select
                    value={newOngoingImage}
                    onChange={(e) => setNewOngoingImage(e.target.value)}
                    style={{ width: '100%', padding: '9px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', marginTop: '4px' }}
                  >
                    <option value="/images/banner-pasyala.jpg">Pasyala Banner (JPG)</option>
                    <option value="/images/banner-green-garden.jpg">Green Garden Banner (JPG)</option>
                    <option value="/images/banner-bandaragama.jpg">Bandaragama Banner (JPG)</option>
                    <option value="/images/banner-union25-homagama.svg">Homagama SVG</option>
                  </select>
                </div>
                <button type="submit" className="admin-btn admin-btn-primary" style={{ marginTop: '8px' }}>
                  Save &amp; Publish Project
                </button>
              </form>
            </div>

            {/* List of Ongoing */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {ongoingProjects.map((p) => (
                <div
                  key={p.id}
                  style={{
                    background: '#fff',
                    padding: '16px',
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0',
                    display: 'flex',
                    gap: '16px',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    style={{ width: '110px', height: '80px', objectFit: 'cover', borderRadius: '8px' }}
                  />
                  <div style={{ flex: 1 }}>
                    <h4 style={{ margin: 0, fontSize: '1rem', color: '#0f172a' }}>{p.name}</h4>
                    <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '2px' }}>
                      📍 {p.location} &bull; 🏷️ {p.pricePerPerch}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#10b981', marginTop: '4px' }}>
                      ✓ 3-Phase Electricity, Pipe Water, Clear Deed
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleDeleteOngoing(p.id)}
                    style={{
                      background: '#fee2e2',
                      color: '#dc2626',
                      border: 'none',
                      padding: '8px 14px',
                      borderRadius: '6px',
                      fontSize: '0.8rem',
                      cursor: 'pointer',
                      fontWeight: 600,
                    }}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= TAB 4: COMING SOON ================= */}
        {currentTab === 'comingSoon' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '28px' }}>
            <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0', height: 'fit-content' }}>
              <h3 style={{ margin: '0 0 16px', fontSize: '1.1rem' }}>+ Add Coming Soon Location</h3>
              <form onSubmit={handleAddSoon} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569' }}>City / Location *</label>
                  <input
                    type="text"
                    placeholder="e.g. Malabe"
                    value={newSoonLocation}
                    onChange={(e) => setNewSoonLocation(e.target.value)}
                    required
                    style={{ width: '100%', padding: '9px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', marginTop: '4px' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569' }}>Note / Teaser</label>
                  <input
                    type="text"
                    placeholder="e.g. Launching soon facing paddy fields"
                    value={newSoonNote}
                    onChange={(e) => setNewSoonNote(e.target.value)}
                    style={{ width: '100%', padding: '9px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', marginTop: '4px' }}
                  />
                </div>
                <button type="submit" className="admin-btn admin-btn-primary" style={{ marginTop: '8px' }}>
                  Save Location
                </button>
              </form>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {comingSoonProjects.map((p) => (
                <div
                  key={p.id}
                  style={{
                    background: '#fff',
                    padding: '16px 20px',
                    borderRadius: '10px',
                    border: '1px solid #e2e8f0',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <div>
                    <span style={{ fontWeight: 700, fontSize: '1.05rem', color: '#0f172a' }}>
                      📍 {p.location}
                    </span>
                    <p style={{ margin: '4px 0 0', fontSize: '0.85rem', color: '#64748b' }}>
                      {p.note || 'New land project launching soon.'}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleDeleteSoon(p.id)}
                    style={{
                      background: '#fee2e2',
                      color: '#dc2626',
                      border: 'none',
                      padding: '6px 14px',
                      borderRadius: '6px',
                      fontSize: '0.8rem',
                      cursor: 'pointer',
                      fontWeight: 600,
                    }}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= TAB 5: SOLD OUT ================= */}
        {currentTab === 'soldOut' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ background: '#fff', padding: '20px 24px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <h3 style={{ margin: '0 0 12px', fontSize: '1rem' }}>Quick Add to Sold Out Portfolio</h3>
              <form onSubmit={handleAddSold} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <input
                  type="text"
                  placeholder="Project Name (e.g. Union Pearl Malabe)"
                  value={newSoldName}
                  onChange={(e) => setNewSoldName(e.target.value)}
                  style={{ flex: 1, minWidth: '200px', padding: '8px 12px', border: '1px solid #cbd5e1', borderRadius: '6px' }}
                  required
                />
                <input
                  type="text"
                  placeholder="Location (e.g. Malabe)"
                  value={newSoldLocation}
                  onChange={(e) => setNewSoldLocation(e.target.value)}
                  style={{ flex: 1, minWidth: '150px', padding: '8px 12px', border: '1px solid #cbd5e1', borderRadius: '6px' }}
                  required
                />
                <input
                  type="text"
                  placeholder="Highlights (e.g. 500m to highway)"
                  value={newSoldHighlights}
                  onChange={(e) => setNewSoldHighlights(e.target.value)}
                  style={{ flex: 1.5, minWidth: '200px', padding: '8px 12px', border: '1px solid #cbd5e1', borderRadius: '6px' }}
                />
                <button type="submit" className="admin-btn admin-btn-primary" style={{ width: 'auto', padding: '8px 20px' }}>
                  + Add Project
                </button>
              </form>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '14px' }}>
              {soldOutProjects.map((p) => (
                <div
                  key={p.id}
                  style={{
                    background: '#fff',
                    borderRadius: '10px',
                    border: '1px solid #e2e8f0',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', gap: '12px', padding: '12px' }}>
                    <img
                      src={p.image}
                      alt={p.name}
                      style={{ width: '80px', height: '60px', objectFit: 'cover', borderRadius: '6px', background: '#0a1728' }}
                      onError={(e) => {
                        e.currentTarget.src = '/images/soldout-placeholder.svg';
                      }}
                    />
                    <div>
                      <h4 style={{ margin: 0, fontSize: '0.92rem', color: '#0f172a' }}>{p.name}</h4>
                      <div style={{ fontSize: '0.8rem', color: '#64748b' }}>📍 {p.location}</div>
                      <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '2px' }}>{p.highlights}</div>
                    </div>
                  </div>
                  <div style={{ background: '#f8fafc', padding: '8px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f1f5f9' }}>
                    <span style={{ fontSize: '0.75rem', color: '#16a34a', fontWeight: 600 }}>✓ 100% Handed Over</span>
                    <button
                      type="button"
                      onClick={() => handleDeleteSold(p.id)}
                      style={{
                        background: 'transparent',
                        color: '#dc2626',
                        border: 'none',
                        fontSize: '0.78rem',
                        cursor: 'pointer',
                        fontWeight: 600,
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= TAB 6: SETTINGS ================= */}
        {currentTab === 'settings' && (
          <div style={{ maxWidth: '600px', background: '#fff', padding: '28px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <h3 style={{ margin: '0 0 14px', fontSize: '1.2rem' }}>Local Data Management</h3>
            <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: '1.6' }}>
              All projects, client contact inquiries, and career job applications are saved persistently in your browser's LocalStorage. If you want to reset all modifications back to the default Union City data, use the button below:
            </p>

            <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid #e2e8f0' }}>
              <button
                type="button"
                onClick={() => {
                  if (window.confirm('Reset all projects and messages to the default Union City repository dataset?')) {
                    onResetData();
                    alert('Data restored to initial defaults successfully!');
                  }
                }}
                style={{
                  background: '#ef4444',
                  color: '#fff',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                }}
              >
                Reset to Default Union City Dataset
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
