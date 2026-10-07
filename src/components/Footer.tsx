// import { Phone, Mail } from 'lucide-react';
// import { footerLinks, companyInfo } from '@/lib/data';

// export default function Footer() {
//   return (
//     <footer className="border-t border-ink-800 bg-ink-950 text-ink-300">
//       <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
//         <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr]">
//           {/* brand */}
//           <div className="flex flex-col gap-4">
//             <div className="flex items-center gap-2">
//               <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 font-display text-sm font-extrabold text-white shadow-glow">
//                 iQ
//               </span>
//               <span className="font-display text-lg font-extrabold text-white">iiiQBets</span>
//             </div>
//             <p className="max-w-xs text-sm leading-relaxed text-ink-400">
//               Integrate. Automate. Accelerate Business Growth. One integrated ERP platform for all your business operations.
//             </p>
//             <p className="text-xs text-ink-500">{companyInfo.legalName}</p>
//           </div>

//           {/* link columns */}
//           {Object.entries(footerLinks).map(([heading, links]) => (
//             <div key={heading}>
//               <h4 className="mb-4 font-display text-sm font-bold text-white">{heading}</h4>
//               <ul className="flex flex-col gap-2.5">
//                 {links.map((link) => (
//                   <li key={link.label}>
//                     <a
//                       href={link.href}
//                       className="text-sm text-ink-400 transition-colors hover:text-brand-300"
//                     >
//                       {link.label}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}

//           {/* contact */}
//           <div>
//             <h4 className="mb-4 font-display text-sm font-bold text-white">Contact</h4>
//             <ul className="flex flex-col gap-3">
//               <li className="flex items-center gap-2 text-sm text-ink-400">
//                 <Phone className="h-4 w-4 text-brand-400" />
//                 <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`} className="transition-colors hover:text-brand-300">
//                   {companyInfo.phone}
//                 </a>
//               </li>
//               <li className="flex items-center gap-2 text-sm text-ink-400">
//                 <Mail className="h-4 w-4 text-brand-400" />
//                 <a href={`mailto:${companyInfo.email}`} className="transition-colors hover:text-brand-300">
//                   {companyInfo.email}
//                 </a>
//               </li>
//               <li className="text-sm leading-relaxed text-ink-400 pt-1">
//                 {companyInfo.address.join(' ')}
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-800 pt-6 sm:flex-row">
//           <p className="text-xs text-ink-500">© 2026 iiiQBets. All Rights Reserved.</p>
//           <div className="flex items-center gap-5">
//             <a href="#" className="text-xs text-ink-500 transition-colors hover:text-brand-300">Privacy Policy</a>
//             <a href="#" className="text-xs text-ink-500 transition-colors hover:text-brand-300">Terms of Service</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }


import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';
import { footerLinks, companyInfo } from '@/lib/data';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (path: string, sectionId: string) => {
    const isSectionRoute = [
      '/home',
      '/features',
      '/modules',
      '/why',
      '/analytics',
      '/contact',
    ].includes(location.pathname);

    if (location.pathname !== path) {
      navigate(path);
    }

    setTimeout(
      () => {
        const el = document.getElementById(sectionId);
        if (!el) return;
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      },
      isSectionRoute ? 0 : 80
    );
  };

  return (
    <footer className="border-t border-ink-800 bg-ink-950 text-ink-300">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr]">
          {/* brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 font-display text-sm font-extrabold text-white shadow-glow">
                iQ
              </span>
              <span className="font-display text-lg font-extrabold text-white">
                iiiQBets
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-ink-400">
              Integrate. Automate. Accelerate Business Growth. One integrated
              ERP platform for all your business operations.
            </p>
            <p className="text-xs text-ink-500">{companyInfo.legalName}</p>
          </div>

          {/* link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="mb-4 font-display text-sm font-bold text-white">
                {heading}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.path}
                      onClick={(e) => {
                        e.preventDefault();
                        goToSection(link.path, link.sectionId);
                      }}
                      className="cursor-pointer text-sm text-ink-400 transition-colors hover:text-brand-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* contact */}
          <div>
            <h4 className="mb-4 font-display text-sm font-bold text-white">
              Contact
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2 text-sm text-ink-400">
                <Phone className="h-4 w-4 text-brand-400" />
                <a
                  href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
                  className="transition-colors hover:text-brand-300"
                >
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-ink-400">
                <Mail className="h-4 w-4 text-brand-400" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="transition-colors hover:text-brand-300"
                >
                  {companyInfo.email}
                </a>
              </li>
              <li className="pt-1 text-sm leading-relaxed text-ink-400">
                {companyInfo.address.join(' ')}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-800 pt-6 sm:flex-row">
          <p className="text-xs text-ink-500">
            © 2026 iiiQBets. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              to="/privacy-policy"
              className="text-xs text-ink-500 transition-colors hover:text-brand-300"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="text-xs text-ink-500 transition-colors hover:text-brand-300"
            >
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}