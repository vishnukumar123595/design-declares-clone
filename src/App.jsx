
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy, useState } from 'react';

import Header from './components/Menu';
import Footer from './components/Footer';
import ScrollProgressBar from './components/ScrollProgressBar';
import CaseStudy1 from './casestudies/CaseStudy1';
import CaseStudy2 from './casestudies/Casestudy2';

// Lazy load all major route components
const Dashboard = lazy(() => import('./components/Dashboard'));
const ContactForm = lazy(() => import('./components/ContactForm'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const AboutDashboard = lazy(() => import('./about/AboutDashboard'));
const LatestMenu = lazy(() => import('./components/Latest'));



const Spinner = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '40vh'
  }}>
    <div style={{
      border: '6px solid #f3f3f3',
      borderTop: '6px solid orange',
      borderRadius: '50%',
      width: '60px',
      height: '60px',
      animation: 'spin 1s linear infinite'
    }} />
    {/* Spinner animation keyframes */}
    <style>
      {`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}
    </style>
  </div>
);
function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [showContent, setShowContent] = useState(false);
  return (
    <Router>
      <ScrollProgressBar />
      <Header onTypingComplete={() => setShowContent(true)} isDropdownOpen={isDropdownOpen}
        setIsDropdownOpen={setIsDropdownOpen} />
      {showContent && (
        <main id="main-content" className={isDropdownOpen ? 'blurred' : ''}>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/about" element={<AboutDashboard />} />
              <Route path="/contactform" element={<ContactForm />} />

              <Route path="/latest" element={<LatestMenu />} />
              <Route path="/casestudy1" element={<CaseStudy1 />} />
              <Route path="/casestudy2" element={<CaseStudy2 />} />
              <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            </Routes>
          </Suspense>
        </main>
      )}

      <Footer />
    </Router>
  );
}

export default App;
