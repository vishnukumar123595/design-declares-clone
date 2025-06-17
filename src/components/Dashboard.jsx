
import React, { Suspense, lazy, useState, useEffect } from 'react';

const HeroSection = lazy(() => import('./HeroSection'));
const InfoSection = lazy(() => import('./InfoSection'));
const Donation = lazy(() => import('./Donation'));
const ActsSection = lazy(() => import('./ActsSection'));
const Declaration = lazy(() => import('./Declaration'));
const LatestNews = lazy(() => import('./LatestNews'));
const NewsLetterToolkit = lazy(() => import('./NewsletterAndToolkit'));
const Signatories = lazy(() => import('./Signatories'));
const GlobalSupporters = lazy(() => import('./GlobalSupporters'));

const LoadingFallback = () => <div className="loading">Loading...</div>;

const Dashboard = () => {
  const [showHero, setShowHero] = useState(false);
  const [showRest, setShowRest] = useState(false);

  useEffect(() => {
    // Show HeroSection after 1s delay (simulate header typing done)
    const heroTimer = setTimeout(() => {
      setShowHero(true);

      // Show the rest 2s after HeroSection appears (adjust timing as needed)
      const restTimer = setTimeout(() => {
        setShowRest(true);
      }, 2000);

      return () => clearTimeout(restTimer);
    }, 1000);

    return () => clearTimeout(heroTimer);
  }, []);

  return (
    <main className="dashboard">
      <Suspense fallback={<LoadingFallback />}>
        {showHero && <HeroSection />}
        {showRest && (
          <>
            <InfoSection />
            <Donation />
            <ActsSection />
            <Declaration />
            <LatestNews />
            <NewsLetterToolkit />
            <Signatories />
            <div className="footer-aware-wrapper">
              <GlobalSupporters />
            </div>
          </>
        )}
      </Suspense>
    </main>
  );
};

export default Dashboard;
