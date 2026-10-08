// import ERP from '@/pages/ERP';

// function App() {
//   return <ERP />;
// }

// export default App;


// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import ERP from '@/pages/ERP';
// import PrivacyPolicy from './components/Privacypolicy';
// import TermsOfService from './components/Terms&Conditions';

// function App() {
 
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<ERP />} />
//         <Route path="/home" element={<ERP />} />
//         <Route path="/features" element={<ERP />} />
//         <Route path="/modules" element={<ERP />} />
//         <Route path="/why" element={<ERP />} />
//         <Route path="/analytics" element={<ERP />} />
//         <Route path="/contact" element={<ERP />} />
//         <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//         <Route path="/terms-of-service" element={<TermsOfService />} />
//         <Route path="/terms-and-conditions" element={<TermsOfService />} />
//         {/* catch-all */}
//         <Route path="*" element={<ERP />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


import { BrowserRouter, Routes, Route } from "react-router-dom";

import ERP from "@/pages/ERP";
import PrivacyPolicy from "./components/Privacypolicy";
import TermsOfService from "./components/Terms&Conditions";

import usePageTracking from "./components/usePageTracking";

function PageTracking() {
  usePageTracking();
  return null;
}

function App() {
  return (
    <BrowserRouter>
      {/* Facebook Pixel / Google Analytics page tracking */}
      <PageTracking />

      <Routes>
        {/* Main ERP page */}
        <Route path="/" element={<ERP />} />
        <Route path="/home" element={<ERP />} />

        {/* ERP sections */}
        <Route path="/features" element={<ERP />} />
        <Route path="/modules" element={<ERP />} />
        <Route path="/why" element={<ERP />} />
        <Route path="/analytics" element={<ERP />} />
        <Route path="/contact" element={<ERP />} />

        {/* Legal pages */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route
          path="/terms-and-conditions"
          element={<TermsOfService />}
        />

        {/* Catch-all */}
        <Route path="*" element={<ERP />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;