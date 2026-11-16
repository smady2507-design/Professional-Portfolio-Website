import { Check, Copy, ExternalLink, Linkedin, Mail, Phone, Send } from 'lucide-react';
import { FormEvent, useEffect, useState } from 'react';
import { CONTACT_INFO, ENGAGEMENT_SUBJECTS } from '../data/portfolioData';

interface ContactSectionProps {
  preselectedSubject: string;
}

export function ContactSection({ preselectedSubject }: ContactSectionProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [subject, setSubject] = useState(preselectedSubject || ENGAGEMENT_SUBJECTS[0]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);

  useEffect(() => {
    if (preselectedSubject) {
      setSubject(preselectedSubject);
    }
  }, [preselectedSubject]);

  const handleCopy = async (value: string, field: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch {
      // Fallback: ignore if clipboard API unavailable
    }
  };

  const buildMailtoHref = () => {
    const mailSubject = encodeURIComponent(
      `[Executive Inquiry] ${subject}${organization ? ` — ${organization}` : ''}`
    );
    const mailBody = encodeURIComponent(
      `Name: ${fullName}\nCorporate Email: ${email}\nOrganization: ${organization || 'N/A'}\nEngagement Topic: ${subject}\n\n${message}`
    );
    return `mailto:${CONTACT_INFO.email}?subject=${mailSubject}&body=${mailBody}`;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!fullName.trim()) {
      setError('Please enter your full name.');
      return;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid corporate email address.');
      return;
    }
    if (!message.trim() || message.trim().length < 10) {
      setError('Please include a brief overview of your executive inquiry.');
      return;
    }

    setSubmitted(true);
  };

  const handleReset = () => {
    setFullName('');
    setEmail('');
    setOrganization('');
    setMessage('');
    setSubmitted(false);
    setError(null);
  };

  return (
    <section id="contact" className="bg-[#080F1E] py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.14em] text-[#E5BE62] uppercase">
            Executive Dialogue
          </p>
          <h2 className="mt-2 text-balance text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            &ldquo;Let&apos;s Connect. Let&apos;s Transform.{' '}
            <span className="text-[#D4A843]">Let&apos;s Create Impact.</span>&rdquo;
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            Open for Board Advisory, C-Level Strategy, Consultation, and Enterprise Transformation
            Engagements.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Left Direct Contact Card */}
          <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0D1528] p-6 sm:p-7 lg:col-span-5">
            <div>
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full border border-[#D4A843]/50 bg-[#080F1E]">
                  <img
                    src="/assets/sumana-portrait.png"
                    alt="Sumana Dey"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-bold text-white">{CONTACT_INFO.name}</h3>
                  <p className="text-xs font-medium text-[#E5BE62]">{CONTACT_INFO.role}</p>
                  <p className="mt-0.5 text-xs text-slate-400">{CONTACT_INFO.location}</p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {/* Email */}
                <div className="flex items-center justify-between gap-3 rounded-xl border border-white/8 bg-[#080F1E] p-3.5">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#D4A843]/15 text-[#D4A843]">
                      <Mail className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                        Direct Email
                      </p>
                      <a
                        href={`mailto:${CONTACT_INFO.email}`}
                        className="block truncate text-xs font-medium text-white hover:text-[#E5BE62]"
                      >
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(CONTACT_INFO.email, 'email')}
                    aria-label="Copy email address"
                    className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-white/10 text-slate-300 transition-colors hover:border-[#D4A843]/40 hover:text-[#E5BE62]"
                  >
                    {copiedField === 'email' ? (
                      <Check className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                    )}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-center justify-between gap-3 rounded-xl border border-white/8 bg-[#080F1E] p-3.5">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#D4A843]/15 text-[#D4A843]">
                      <Phone className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                        Direct Phone
                      </p>
                      <a
                        href={CONTACT_INFO.phoneHref}
                        className="tabular-nums block truncate text-xs font-medium text-white hover:text-[#E5BE62]"
                      >
                        {CONTACT_INFO.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(CONTACT_INFO.phone, 'phone')}
                    aria-label="Copy phone number"
                    className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-white/10 text-slate-300 transition-colors hover:border-[#D4A843]/40 hover:text-[#E5BE62]"
                  >
                    {copiedField === 'phone' ? (
                      <Check className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                    )}
                  </button>
                </div>

                {/* LinkedIn */}
                <a
                  href={CONTACT_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 rounded-xl border border-white/8 bg-[#080F1E] p-3.5 transition-colors hover:border-[#D4A843]/40"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#D4A843]/15 text-[#D4A843]">
                      <Linkedin className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                        LinkedIn Profile
                      </p>
                      <span className="block truncate text-xs font-medium text-white">
                        {CONTACT_INFO.linkedinLabel}
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="h-3.5 w-3.5 shrink-0 text-slate-400" aria-hidden="true" />
                </a>
              </div>
            </div>

            <p className="mt-6 border-t border-white/8 pt-4 text-xs leading-relaxed text-slate-400">
              Available for Board Advisory, Interim COO / Transformation mandates, GCC setup
              counsel, and executive keynote engagements globally.
            </p>
          </div>

          {/* Right Inquiry Form Card */}
          <div className="rounded-2xl border border-white/10 bg-[#0D1528] p-6 sm:p-7 lg:col-span-7">
            <h3 className="text-lg font-bold text-white">Send an Executive Message</h3>
            <p className="mt-1 text-xs text-slate-400">
              Inquire about executive leadership, strategic advisory, or speaking engagements.
            </p>

            {submitted ? (
              <div className="mt-6 rounded-xl border border-emerald-500/30 bg-emerald-950/25 p-6">
                <div className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" aria-hidden="true" />
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      Executive Brief Prepared for {fullName}
                    </h4>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
                      Your inquiry regarding <strong className="text-white">{subject}</strong> is
                      ready. Click below to dispatch directly via your email client, or copy the
                      direct address <span className="text-[#E5BE62]">{CONTACT_INFO.email}</span>.
                    </p>

                    <div className="mt-5 flex flex-wrap items-center gap-3">
                      <a
                        href={buildMailtoHref()}
                        className="inline-flex min-h-[40px] items-center gap-2 rounded-lg bg-[#D4A843] px-4 py-2 text-xs font-semibold text-[#060B16] transition-colors hover:bg-[#E5BE62]"
                      >
                        <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                        Send via Email App
                      </a>
                      <button
                        type="button"
                        onClick={handleReset}
                        className="inline-flex min-h-[40px] items-center rounded-lg border border-white/15 px-4 py-2 text-xs font-semibold text-slate-200 transition-colors hover:border-[#D4A843]/40"
                      >
                        Compose Another Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
                {error && (
                  <div
                    role="alert"
                    className="rounded-lg border border-rose-500/40 bg-rose-950/30 px-4 py-2.5 text-xs text-rose-200"
                  >
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-medium text-slate-300"
                    >
                      Full Name <span className="text-[#D4A843]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Eleanor Vance"
                      className="mt-1.5 w-full rounded-lg border border-white/10 bg-[#080F1E] px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-[#D4A843] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-medium text-slate-300"
                    >
                      Corporate Email <span className="text-[#D4A843]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="mt-1.5 w-full rounded-lg border border-white/10 bg-[#080F1E] px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-[#D4A843] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-org"
                      className="block text-xs font-medium text-slate-300"
                    >
                      Organization / Entity
                    </label>
                    <input
                      id="contact-org"
                      type="text"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      placeholder="e.g. Enterprise Global Services"
                      className="mt-1.5 w-full rounded-lg border border-white/10 bg-[#080F1E] px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-[#D4A843] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-medium text-slate-300"
                    >
                      Subject of Engagement <span className="text-[#D4A843]">*</span>
                    </label>
                    <select
                      id="contact-subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="mt-1.5 w-full rounded-lg border border-white/10 bg-[#080F1E] px-3.5 py-2.5 text-sm text-white focus:border-[#D4A843] focus:outline-none"
                    >
                      {ENGAGEMENT_SUBJECTS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-medium text-slate-300"
                  >
                    Message / Executive Brief <span className="text-[#D4A843]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Outline the strategic objectives, organizational scale, or discussion scope..."
                    className="mt-1.5 w-full rounded-lg border border-white/10 bg-[#080F1E] px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-[#D4A843] focus:outline-none"
                  />
                </div>

                <div className="flex justify-end pt-1">
                  <button
                    type="submit"
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#D4A843] px-6 py-2.5 text-sm font-semibold text-[#060B16] whitespace-nowrap transition-colors duration-150 hover:bg-[#E5BE62] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A843]"
                  >
                    Submit Message
                    <Send className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
