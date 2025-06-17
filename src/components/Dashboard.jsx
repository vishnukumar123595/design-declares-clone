import React, { Suspense, lazy } from 'react';

const HeroSection = lazy(() => import('./HeroSection'));
const InfoSection = lazy(() => import('./InfoSection'));
const Donation = lazy(() => import('./Donation'));
const ActsSection = lazy(() => import('./ActsSection'));
const Declaration = lazy(() => import('./Declaration'));
const LatestNews = lazy(() => import('./LatestNews'));
const NewsLetterToolkit = lazy(() => import('./NewsletterAndToolkit'));
const Signatories = lazy(() => import('./Signatories'));
const GlobalSupporters = lazy(() => import('./GlobalSupporters'));

// Optional: You can create a better custom spinner or skeleton loader.
const LoadingFallback = () => <div className="loading">Loading...</div>;

const Dashboard = () => {
  return (
    <main className="dashboard">
      <Suspense fallback={<LoadingFallback />}>
        <HeroSection />
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
      </Suspense>
    </main>
  );
};

export default Dashboard;
