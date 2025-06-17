// // import Dashboard from "./components/Dashboard";
// // import Footer from "./components/Footer";
// // import ScrollProgressBar from "./components/ScrollProgressbar";

// // function App() {
// //   return (
// //     <>
// //       <main>
// //         <ScrollProgressBar />
// //         <Dashboard />
// //       </main>
// //       <Footer className='sticky-footer' />
// //     </>
// //   );
// // }
// // export default App;


// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Dashboard from "./components/Dashboard";
// import Footer from "./components/Footer";
// import ContactForm from './components/ContactForm';
// import PrivacyPolicy from './components/PrivacyPolicy';
// import AboutDashboard from './about/AboutDashboard';
// import LatestMenu from './components/Latest';
// import Header from './components/Menu';
// import ScrollProgressBar from './components/ScrollProgressBar';

// function App() {
//   return (
//     <Router>
//       <ScrollProgressBar />
//       <Header />
//       <main id="main-content">
//         <Routes>
//           <Route path="/" element={<Dashboard />} />
//           <Route path='/about' element={<AboutDashboard />} />
//           <Route path="/contactform" element={<ContactForm />} />
//           <Route path="/latest" element={<LatestMenu />} />
//           <Route path="/privacypolicy" element={<PrivacyPolicy />} />
//         </Routes>
//       </main>
//       <Footer  />
//     </Router>
//   );
// }

// export default App;



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

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

function App() {
  return (
    <Router>
      <ScrollProgressBar />
      <Header />

      <main id="main-content">
        <Suspense fallback={<div className="loading">Loading...</div>}>
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

      <Footer />
    </Router>
  );
}

export default App;
