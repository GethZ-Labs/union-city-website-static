import React, { useState, useEffect } from 'react';
import { ActivePage, AppTheme, OngoingProject, ComingSoonProject, SoldOutProject, ContactMessage, CareerApplication } from './types';
import {
  INITIAL_ONGOING_PROJECTS,
  INITIAL_COMING_SOON,
  INITIAL_SOLD_OUT,
  INITIAL_CONTACT_MESSAGES,
  INITIAL_APPLICATIONS,
} from './data/initialData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ApplyModal } from './components/ApplyModal';
import { HomeView } from './views/HomeView';
import { LandsView } from './views/LandsView';
import { AboutView } from './views/AboutView';
import { CareersView } from './views/CareersView';
import { ContactView } from './views/ContactView';
import { SamplesView } from './views/SamplesView';
import { AdminView } from './views/AdminView';

export default function App() {
  // Theme state
  const [theme, setTheme] = useState<AppTheme>(() => {
    const saved = localStorage.getItem('uc_theme');
    return saved === 'blue' ? 'blue' : 'green';
  });

  // Current page
  const [currentPage, setCurrentPage] = useState<ActivePage>(() => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (['home', 'lands', 'samples', 'about', 'careers', 'contact', 'admin'].includes(hash)) {
      return hash as ActivePage;
    }
    return 'home';
  });

  // Search filter passed from home to lands
  const [searchLocationFilter, setSearchLocationFilter] = useState('');
  const [prefilledInquiryProject, setPrefilledInquiryProject] = useState('');

  // Career application modal
  const [applyModalPosition, setApplyModalPosition] = useState<string | null>(null);

  // Projects & Data in LocalStorage
  const [ongoingProjects, setOngoingProjects] = useState<OngoingProject[]>(() => {
    try {
      const saved = localStorage.getItem('uc_ongoing_projects');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return INITIAL_ONGOING_PROJECTS;
  });

  const [comingSoonProjects, setComingSoonProjects] = useState<ComingSoonProject[]>(() => {
    try {
      const saved = localStorage.getItem('uc_coming_soon');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return INITIAL_COMING_SOON;
  });

  const [soldOutProjects, setSoldOutProjects] = useState<SoldOutProject[]>(() => {
    try {
      const saved = localStorage.getItem('uc_sold_out');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return INITIAL_SOLD_OUT;
  });

  const [messages, setMessages] = useState<ContactMessage[]>(() => {
    try {
      const saved = localStorage.getItem('uc_contact_messages');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return INITIAL_CONTACT_MESSAGES;
  });

  const [applications, setApplications] = useState<CareerApplication[]>(() => {
    try {
      const saved = localStorage.getItem('uc_applications');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return INITIAL_APPLICATIONS;
  });

  // Sync theme attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('uc_theme', theme);
  }, [theme]);

  // Sync window hash
  useEffect(() => {
    window.location.hash = currentPage;
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update document title dynamically
    const titles: Record<ActivePage, string> = {
      home: 'Union Home | Real Estate & Properties',
      lands: 'Properties & Lands | Union Home',
      samples: 'Sample Plans & Plots | Union Home',
      about: 'About Us | Union Home',
      careers: 'Careers | Union Home',
      contact: 'Contact Us | Union Home',
      admin: 'Admin Portal | Union Home',
    };
    document.title = titles[currentPage] || 'Union Home (Pvt) Ltd';
  }, [currentPage]);

  // Listen to hash changes (e.g. browser back/forward)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'lands', 'samples', 'about', 'careers', 'contact', 'admin'].includes(hash)) {
        setCurrentPage(hash as ActivePage);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'green' ? 'blue' : 'green'));
  };

  const handleNavigate = (page: ActivePage) => {
    setCurrentPage(page);
  };

  const handleSearchFromHome = (filters: { location: string; type: string; budget: string }) => {
    setSearchLocationFilter(filters.location);
    setCurrentPage('lands');
  };

  const handleInquireProject = (projectName: string) => {
    setPrefilledInquiryProject(projectName);
    setCurrentPage('contact');
  };

  // State update handlers with localStorage persistence
  const handleUpdateOngoing = (projects: OngoingProject[]) => {
    setOngoingProjects(projects);
    localStorage.setItem('uc_ongoing_projects', JSON.stringify(projects));
  };

  const handleUpdateComingSoon = (projects: ComingSoonProject[]) => {
    setComingSoonProjects(projects);
    localStorage.setItem('uc_coming_soon', JSON.stringify(projects));
  };

  const handleUpdateSoldOut = (projects: SoldOutProject[]) => {
    setSoldOutProjects(projects);
    localStorage.setItem('uc_sold_out', JSON.stringify(projects));
  };

  const handleUpdateMessages = (msgs: ContactMessage[]) => {
    setMessages(msgs);
    localStorage.setItem('uc_contact_messages', JSON.stringify(msgs));
  };

  const handleUpdateApplications = (apps: CareerApplication[]) => {
    setApplications(apps);
    localStorage.setItem('uc_applications', JSON.stringify(apps));
  };

  const handleNewMessage = (msg: ContactMessage) => {
    const updated = [msg, ...messages];
    handleUpdateMessages(updated);
  };

  const handleNewApplication = (app: CareerApplication) => {
    const updated = [app, ...applications];
    handleUpdateApplications(updated);
  };

  const handleResetData = () => {
    localStorage.removeItem('uc_ongoing_projects');
    localStorage.removeItem('uc_coming_soon');
    localStorage.removeItem('uc_sold_out');
    localStorage.removeItem('uc_contact_messages');
    localStorage.removeItem('uc_applications');
    setOngoingProjects(INITIAL_ONGOING_PROJECTS);
    setComingSoonProjects(INITIAL_COMING_SOON);
    setSoldOutProjects(INITIAL_SOLD_OUT);
    setMessages(INITIAL_CONTACT_MESSAGES);
    setApplications(INITIAL_APPLICATIONS);
  };

  // If on Admin page, render dedicated Admin layout
  if (currentPage === 'admin') {
    return (
      <AdminView
        ongoingProjects={ongoingProjects}
        comingSoonProjects={comingSoonProjects}
        soldOutProjects={soldOutProjects}
        messages={messages}
        applications={applications}
        onUpdateOngoing={handleUpdateOngoing}
        onUpdateComingSoon={handleUpdateComingSoon}
        onUpdateSoldOut={handleUpdateSoldOut}
        onUpdateMessages={handleUpdateMessages}
        onUpdateApplications={handleUpdateApplications}
        onResetData={handleResetData}
        onExitAdmin={() => handleNavigate('home')}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Top Banner & Main Navbar */}
      <header>
        <Navbar
          currentPage={currentPage}
          onNavigate={handleNavigate}
          theme={theme}
          onToggleTheme={handleToggleTheme}
        />
      </header>

      {/* Main Content Pages */}
      <main style={{ flex: 1 }}>
        {currentPage === 'home' && (
          <HomeView
            ongoingProjects={ongoingProjects}
            theme={theme}
            onSearch={handleSearchFromHome}
          />
        )}

        {currentPage === 'lands' && (
          <LandsView
            ongoingProjects={ongoingProjects}
            comingSoonProjects={comingSoonProjects}
            soldOutProjects={soldOutProjects}
            initialFilterLocation={searchLocationFilter}
            onInquire={handleInquireProject}
            onViewSamples={() => handleNavigate('samples')}
          />
        )}

        {currentPage === 'samples' && (
          <SamplesView
            onNavigate={handleNavigate}
            onInquirePlot={handleInquireProject}
          />
        )}

        {currentPage === 'about' && <AboutView />}

        {currentPage === 'careers' && (
          <CareersView onOpenApplyModal={(pos) => setApplyModalPosition(pos)} />
        )}

        {currentPage === 'contact' && (
          <ContactView
            prefilledProject={prefilledInquiryProject}
            onNewMessage={handleNewMessage}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Apply Modal */}
      {applyModalPosition && (
        <ApplyModal
          position={applyModalPosition}
          isOpen={Boolean(applyModalPosition)}
          onClose={() => setApplyModalPosition(null)}
        />
      )}
    </div>
  );
}
