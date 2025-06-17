// import ActsSection from "./ActsSection";
// import Declaration from "./Declaration";
// import Donation from "./Donation";
// import GlobalSupporters from "./GlobalSupporters";
// import HeroSection from "./HeroSection";
// import InfoSection from "./InfoSection";
// import LatestNews from "./LatestNews";
// import NewsLetterToolkit from "./NewsletterAndToolkit";
// import Signatories from "./Signatories";

// const Dashboard = () => {
//   return (
//     <div className="dashboard">

//       <HeroSection />
//       <InfoSection />
//       <Donation />
//       <ActsSection />
//       <Declaration />
//       <LatestNews />
//       <NewsLetterToolkit />
//       <Signatories />
//       {/* <GlobalSupporters /> */}
//       <div className="footer-aware-wrapper">
//         <GlobalSupporters />
//       </div>
//     </div>

//   );

// };

// export default Dashboard



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
