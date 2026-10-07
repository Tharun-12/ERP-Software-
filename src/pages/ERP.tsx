// import Navbar from '@/components/Navbar';
// import Hero from '@/components/Hero';
// import TrustStrip from '@/components/TrustStrip';
// import Features from '@/components/Features';
// import BusinessModules from '@/components/BusinessModules';
// import InventorySection from '@/components/InventorySection';
// import FinanceSection from '@/components/FinanceSection';
// import HRSection from '@/components/HRSection';
// import AnalyticsSection from '@/components/AnalyticsSection';
// import TransactionsSection from '@/components/TransactionsSection';
// import WhyChooseUs from '@/components/WhyChooseUs';
// import BusinessImpact from '@/components/BusinessImpact';
// import MobileDashboard from '@/components/MobileDashboard';
// import CTASection from '@/components/CTASection';
// import ContactSection from '@/components/ContactSection';
// import Footer from '@/components/Footer';

// export default function ERP() {
//   return (
//     <div className="min-h-screen bg-white">
//       <Navbar />
//       <main>
//         <Hero />
//         <TrustStrip />
//         <Features />
//         <BusinessModules />
//         <InventorySection />
//         <FinanceSection />
//         <HRSection />
//         <AnalyticsSection />
//         <TransactionsSection />
//         <WhyChooseUs />
//         <BusinessImpact />
//         <MobileDashboard />
//         <CTASection />
//         <ContactSection />
//       </main>
//       <Footer />
//     </div>
//   );
// }



import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import Features from '@/components/Features';
import BusinessModules from '@/components/BusinessModules';
import InventorySection from '@/components/InventorySection';
import FinanceSection from '@/components/FinanceSection';
import HRSection from '@/components/HRSection';
import AnalyticsSection from '@/components/AnalyticsSection';
import TransactionsSection from '@/components/TransactionsSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import BusinessImpact from '@/components/BusinessImpact';
import MobileDashboard from '@/components/MobileDashboard';
import CTASection from '@/components/CTASection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function ERP() {
  return (
    <div className="min-h-screen w-full max-w-full overflow-x-clip bg-white">
      <Navbar />
      <main className="w-full max-w-full overflow-x-clip">
        <Hero />
        <TrustStrip />
        <Features />
        <BusinessModules />
        <InventorySection />
        <FinanceSection />
        <HRSection />
        <AnalyticsSection />
        <TransactionsSection />
        <WhyChooseUs />
        <BusinessImpact />
        <MobileDashboard />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}