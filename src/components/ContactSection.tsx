// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Phone, Mail, Globe, MapPin, Building2, ArrowRight, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
// import { SectionWrap, Container, SectionHeading } from './primitives';
// import { companyInfo } from '@/lib/data';
// import { slideInLeft, slideInRight, staggerChild, staggerParent, viewportOnce } from '@/lib/anim';

// const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// interface FormErrors {
//   name?: string;
//   company?: string;
//   email?: string;
//   phone?: string;
//   businessType?: string;
//   message?: string;
//   general?: string;
// }

// export default function ContactSection() {
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [errors, setErrors] = useState<FormErrors>({});

//   const validate = (payload: Record<string, string>): FormErrors => {
//     const errs: FormErrors = {};

//     if (!payload.name || payload.name.trim().length < 2) {
//       errs.name = 'Please enter your full name';
//     }

//     if (!payload.company || payload.company.trim().length < 2) {
//       errs.company = 'Please enter your company name';
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!payload.email || !emailRegex.test(payload.email)) {
//       errs.email = 'Please enter a valid email address';
//     }

//     const phoneRegex = /^[+\d][\d\s\-()]{7,20}$/;
//     if (!payload.phone || !phoneRegex.test(payload.phone)) {
//       errs.phone = 'Please enter a valid phone number';
//     }

//     if (!payload.businessType) {
//       errs.businessType = 'Please select a business type';
//     }

//     return errs;
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setErrors({});

//     const formData = new FormData(e.currentTarget);
//     const payload = {
//       name: (formData.get('name') as string) || '',
//       company: (formData.get('company') as string) || '',
//       email: (formData.get('email') as string) || '',
//       phone: (formData.get('phone') as string) || '',
//       businessType: (formData.get('businessType') as string) || '',
//       message: (formData.get('message') as string) || '',
//     };

//     // Client-side validation
//     const validationErrors = validate(payload);
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     setLoading(true);

//     try {
//       const res = await fetch(`${API_URL}/api/contact`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         // Handle server validation errors
//         if (data.errors && Array.isArray(data.errors)) {
//           setErrors({ general: data.errors.join(', ') });
//         } else {
//           setErrors({ general: data.message || 'Something went wrong. Please try again.' });
//         }
//         return;
//       }

//       // Success
//       setSubmitted(true);
//       (e.target as HTMLFormElement).reset();
//       setTimeout(() => setSubmitted(false), 5000);
//     } catch (err: any) {
//       console.error('Contact form error:', err);
//       setErrors({
//         general: 'Network error. Please check your connection and try again.',
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <SectionWrap id="contact">
//       <Container>
//         <SectionHeading
//           eyebrow="Get Started"
//           title="Let's Transform Your Business Together."
//           desc="Request a personalized demo and see how iiiQBets ERP can streamline your operations."
//         />

//         <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
//           {/* form */}
//           <motion.div
//             variants={slideInLeft}
//             initial="hidden"
//             whileInView="visible"
//             viewport={viewportOnce}
//             className="rounded-3xl border border-ink-100 bg-white p-6 shadow-card sm:p-8"
//           >
//             {submitted ? (
//               <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
//                 <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
//                   <CheckCircle2 className="h-8 w-8" />
//                 </span>
//                 <h3 className="font-display text-xl font-bold text-ink-900">Thank You!</h3>
//                 <p className="max-w-sm text-sm text-ink-500">
//                   Your demo request has been received. Our team will reach out to you shortly.
//                 </p>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
//                 <div className="grid gap-4 sm:grid-cols-2">
//                   <Field
//                     label="Full Name"
//                     name="name"
//                     type="text"
//                     placeholder="John Doe"
//                     required
//                     error={errors.name}
//                   />
//                   <Field
//                     label="Company Name"
//                     name="company"
//                     type="text"
//                     placeholder="Your Company"
//                     required
//                     error={errors.company}
//                   />
//                 </div>
//                 <div className="grid gap-4 sm:grid-cols-2">
//                   <Field
//                     label="Email"
//                     name="email"
//                     type="email"
//                     placeholder="john@company.com"
//                     required
//                     error={errors.email}
//                   />
//                   <Field
//                     label="Phone Number"
//                     name="phone"
//                     type="tel"
//                     placeholder="+91 99999 99999"
//                     required
//                     error={errors.phone}
//                   />
//                 </div>
//                 <div>
//                   <label className="mb-1.5 block text-sm font-semibold text-ink-700">
//                     Business Type <span className="text-red-500">*</span>
//                   </label>
//                   <select
//                     name="businessType"
//                     required
//                     className={`w-full rounded-xl border bg-ink-50/40 px-4 py-3 text-sm text-ink-800 outline-none transition-colors focus:bg-white focus:ring-2 ${
//                       errors.businessType
//                         ? 'border-red-400 focus:border-red-400 focus:ring-red-100'
//                         : 'border-ink-200 focus:border-brand-400 focus:ring-brand-100'
//                     }`}
//                   >
//                     <option value="">Select business type</option>
//                     <option value="Retail">Retail</option>
//                     <option value="Manufacturing">Manufacturing</option>
//                     <option value="Wholesale / Distribution">Wholesale / Distribution</option>
//                     <option value="Services">Services</option>
//                     <option value="Other">Other</option>
//                   </select>
//                   {errors.businessType && (
//                     <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
//                       <AlertCircle className="h-3.5 w-3.5" />
//                       {errors.businessType}
//                     </p>
//                   )}
//                 </div>
//                 <div>
//                   <label className="mb-1.5 block text-sm font-semibold text-ink-700">Message</label>
//                   <textarea
//                     name="message"
//                     rows={4}
//                     placeholder="Tell us about your requirements..."
//                     className="w-full resize-none rounded-xl border border-ink-200 bg-ink-50/40 px-4 py-3 text-sm text-ink-800 outline-none transition-colors focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100"
//                   />
//                 </div>

//                 {errors.general && (
//                   <div className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-3">
//                     <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
//                     <p className="text-sm text-red-700">{errors.general}</p>
//                   </div>
//                 )}

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="group mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-all hover:bg-brand-700 hover:shadow-premium disabled:cursor-not-allowed disabled:opacity-60"
//                 >
//                   {loading ? (
//                     <>
//                       <Loader2 className="h-4 w-4 animate-spin" />
//                       Submitting...
//                     </>
//                   ) : (
//                     <>
//                       Request a Demo
//                       <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
//                     </>
//                   )}
//                 </button>
//               </form>
//             )}
//           </motion.div>

//           {/* company info */}
//           <motion.div
//             variants={slideInRight}
//             initial="hidden"
//             whileInView="visible"
//             viewport={viewportOnce}
//             className="flex flex-col gap-5"
//           >
//             <div className="rounded-3xl border border-ink-100 bg-gradient-to-br from-ink-950 to-ink-800 p-6 shadow-card text-white sm:p-8">
//               <div className="mb-5 flex items-center gap-3">
//                 <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 font-display text-sm font-extrabold text-white shadow-glow">
//                   iQ
//                 </span>
//                 <div>
//                   <div className="font-display text-lg font-bold">{companyInfo.legalName}</div>
//                   <div className="text-xs text-ink-400">{companyInfo.registeredAs}</div>
//                 </div>
//               </div>

//               <motion.ul
//                 variants={staggerParent}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={viewportOnce}
//                 className="flex flex-col gap-4"
//               >
//                 <InfoRow
//                   icon={Phone}
//                   label="Phone"
//                   value={companyInfo.phone}
//                   href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
//                 />
//                 <InfoRow
//                   icon={Mail}
//                   label="Email"
//                   value={companyInfo.email}
//                   href={`mailto:${companyInfo.email}`}
//                 />
//                 <InfoRow
//                   icon={Globe}
//                   label="Website"
//                   value={companyInfo.website}
//                   href={`https://${companyInfo.website}`}
//                 />
//                 <motion.li variants={staggerChild} className="flex gap-3">
//                   <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-300">
//                     <MapPin className="h-5 w-5" />
//                   </span>
//                   <div>
//                     <div className="text-xs text-ink-400">Address</div>
//                     <div className="text-sm text-ink-100 leading-relaxed">
//                       {companyInfo.address.map((line, i) => (
//                         <span key={i} className="block">
//                           {line}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </motion.li>
//               </motion.ul>
//             </div>

//             <div className="flex items-center gap-3 rounded-2xl border border-brand-100 bg-brand-50/50 p-5">
//               <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white">
//                 <Building2 className="h-5 w-5" />
//               </span>
//               <p className="text-sm text-ink-600">
//                 <span className="font-semibold text-ink-800">Enterprise-ready.</span> Built for
//                 businesses that want centralized control and real-time visibility.
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </Container>
//     </SectionWrap>
//   );
// }

// function Field({
//   label,
//   name,
//   type,
//   placeholder,
//   required,
//   error,
// }: {
//   label: string;
//   name: string;
//   type: string;
//   placeholder: string;
//   required?: boolean;
//   error?: string;
// }) {
//   return (
//     <div>
//       <label className="mb-1.5 block text-sm font-semibold text-ink-700">
//         {label} {required && <span className="text-red-500">*</span>}
//       </label>
//       <input
//         type={type}
//         name={name}
//         placeholder={placeholder}
//         required={required}
//         className={`w-full rounded-xl border bg-ink-50/40 px-4 py-3 text-sm text-ink-800 outline-none transition-colors placeholder:text-ink-300 focus:bg-white focus:ring-2 ${
//           error
//             ? 'border-red-400 focus:border-red-400 focus:ring-red-100'
//             : 'border-ink-200 focus:border-brand-400 focus:ring-brand-100'
//         }`}
//       />
//       {error && (
//         <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
//           <AlertCircle className="h-3.5 w-3.5" />
//           {error}
//         </p>
//       )}
//     </div>
//   );
// }

// function InfoRow({
//   icon: Icon,
//   label,
//   value,
//   href,
// }: {
//   icon: typeof Phone;
//   label: string;
//   value: string;
//   href: string;
// }) {
//   return (
//     <motion.li variants={staggerChild} className="flex gap-3">
//       <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-300">
//         <Icon className="h-5 w-5" />
//       </span>
//       <div>
//         <div className="text-xs text-ink-400">{label}</div>
//         <a
//           href={href}
//           className="text-sm font-medium text-ink-100 transition-colors hover:text-brand-300"
//         >
//           {value}
//         </a>
//       </div>
//     </motion.li>
//   );
// }



import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  Globe,
  MapPin,
  Building2,
  ArrowRight,
  CheckCircle2,
  Loader2,
  AlertCircle,
} from 'lucide-react';
import { SectionWrap, Container, SectionHeading } from './primitives';
import { companyInfo } from '@/lib/data';
import {
  slideInLeft,
  slideInRight,
  staggerChild,
  staggerParent,
  viewportOnce,
} from '@/lib/anim';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

interface FormErrors {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  businessType?: string;
  message?: string;
  general?: string;
}

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (payload: Record<string, string>): FormErrors => {
    const errs: FormErrors = {};

    if (!payload.name || payload.name.trim().length < 2) {
      errs.name = 'Please enter your full name';
    }

    if (!payload.company || payload.company.trim().length < 2) {
      errs.company = 'Please enter your company name';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!payload.email || !emailRegex.test(payload.email)) {
      errs.email = 'Please enter a valid email address';
    }

    const phoneRegex = /^[+\d][\d\s\-()]{7,20}$/;
    if (!payload.phone || !phoneRegex.test(payload.phone)) {
      errs.phone = 'Please enter a valid phone number';
    }

    if (!payload.businessType) {
      errs.businessType = 'Please select a business type';
    }

    return errs;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: (formData.get('name') as string) || '',
      company: (formData.get('company') as string) || '',
      email: (formData.get('email') as string) || '',
      phone: (formData.get('phone') as string) || '',
      businessType: (formData.get('businessType') as string) || '',
      message: (formData.get('message') as string) || '',
    };

    // Client-side validation
    const validationErrors = validate(payload);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.errors && Array.isArray(data.errors)) {
          setErrors({ general: data.errors.join(', ') });
        } else {
          setErrors({
            general: data.message || 'Something went wrong. Please try again.',
          });
        }
        return;
      }

      setSubmitted(true);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err: any) {
      console.error('Contact form error:', err);
      setErrors({
        general: 'Network error. Please check your connection and try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionWrap id="contact">
      <Container>
        <SectionHeading
          eyebrow="Get Started"
          title="Let's Transform Your Business Together."
          desc="Request a personalized demo and see how iiiQBets ERP can streamline your operations."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          {/* form — target this with #contact-form */}
          <motion.div
            id="contact-form"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="scroll-mt-24 rounded-3xl border border-ink-100 bg-white p-6 shadow-card sm:p-8"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <CheckCircle2 className="h-8 w-8" />
                </span>
                <h3 className="font-display text-xl font-bold text-ink-900">Thank You!</h3>
                <p className="max-w-sm text-sm text-ink-500">
                  Your demo request has been received. Our team will reach out to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label="Full Name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    required
                    error={errors.name}
                  />
                  <Field
                    label="Company Name"
                    name="company"
                    type="text"
                    placeholder="Your Company"
                    required
                    error={errors.company}
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    required
                    error={errors.email}
                  />
                  <Field
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    placeholder="+91 99999 99999"
                    required
                    error={errors.phone}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-ink-700">
                    Business Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="businessType"
                    required
                    className={`w-full rounded-xl border bg-ink-50/40 px-4 py-3 text-sm text-ink-800 outline-none transition-colors focus:bg-white focus:ring-2 ${
                      errors.businessType
                        ? 'border-red-400 focus:border-red-400 focus:ring-red-100'
                        : 'border-ink-200 focus:border-brand-400 focus:ring-brand-100'
                    }`}
                  >
                    <option value="">Select business type</option>
                    <option value="Retail">Retail</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Wholesale / Distribution">Wholesale / Distribution</option>
                    <option value="Services">Services</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.businessType && (
                    <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.businessType}
                    </p>
                  )}
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-ink-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    className="w-full resize-none rounded-xl border border-ink-200 bg-ink-50/40 px-4 py-3 text-sm text-ink-800 outline-none transition-colors focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100"
                  />
                </div>

                {errors.general && (
                  <div className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-3">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                    <p className="text-sm text-red-700">{errors.general}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="group mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-all hover:bg-brand-700 hover:shadow-premium disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Request a Demo
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* company info */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-5"
          >
            <div className="rounded-3xl border border-ink-100 bg-gradient-to-br from-ink-950 to-ink-800 p-6 shadow-card text-white sm:p-8">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 font-display text-sm font-extrabold text-white shadow-glow">
                  iQ
                </span>
                <div>
                  <div className="font-display text-lg font-bold">{companyInfo.legalName}</div>
                  <div className="text-xs text-ink-400">{companyInfo.registeredAs}</div>
                </div>
              </div>

              <motion.ul
                variants={staggerParent}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="flex flex-col gap-4"
              >
                <InfoRow
                  icon={Phone}
                  label="Phone"
                  value={companyInfo.phone}
                  href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
                />
                <InfoRow
                  icon={Mail}
                  label="Email"
                  value={companyInfo.email}
                  href={`mailto:${companyInfo.email}`}
                />
                <InfoRow
                  icon={Globe}
                  label="Website"
                  value={companyInfo.website}
                  href={`https://${companyInfo.website}`}
                />
                <motion.li variants={staggerChild} className="flex gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-300">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs text-ink-400">Address</div>
                    <div className="text-sm text-ink-100 leading-relaxed">
                      {companyInfo.address.map((line, i) => (
                        <span key={i} className="block">
                          {line}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.li>
              </motion.ul>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-brand-100 bg-brand-50/50 p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white">
                <Building2 className="h-5 w-5" />
              </span>
              <p className="text-sm text-ink-600">
                <span className="font-semibold text-ink-800">Enterprise-ready.</span> Built for
                businesses that want centralized control and real-time visibility.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </SectionWrap>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  required,
  error,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-ink-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className={`w-full rounded-xl border bg-ink-50/40 px-4 py-3 text-sm text-ink-800 outline-none transition-colors placeholder:text-ink-300 focus:bg-white focus:ring-2 ${
          error
            ? 'border-red-400 focus:border-red-400 focus:ring-red-100'
            : 'border-ink-200 focus:border-brand-400 focus:ring-brand-100'
        }`}
      />
      {error && (
        <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
          <AlertCircle className="h-3.5 w-3.5" />
          {error}
        </p>
      )}
    </div>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <motion.li variants={staggerChild} className="flex gap-3">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-300">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <div className="text-xs text-ink-400">{label}</div>
        <a
          href={href}
          className="text-sm font-medium text-ink-100 transition-colors hover:text-brand-300"
        >
          {value}
        </a>
      </div>
    </motion.li>
  );
}