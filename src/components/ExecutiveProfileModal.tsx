import { Download, Printer, X } from 'lucide-react';
import { useEffect } from 'react';
import {
  CAREER_MILESTONES,
  CERTIFICATIONS,
  CONTACT_INFO,
  HERO_KPIS,
  IMPACT_METRICS,
} from '../data/portfolioData';

interface ExecutiveProfileModalProps {
  open: boolean;
  onClose: () => void;
}

export function ExecutiveProfileModal({ open, onClose }: ExecutiveProfileModalProps) {
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const handleDownloadText = () => {
    const lines = [
      'SUMANA DEY — EXECUTIVE PROFILE',
      'Business Transformation & Operations Leader',
      `${CONTACT_INFO.location} | ${CONTACT_INFO.email} | ${CONTACT_INFO.phone} | ${CONTACT_INFO.linkedinLabel}`,
      '',
      'EXECUTIVE SUMMARY',
      'Distinguished Business Transformation and Operations Executive with 25+ years of cross-functional leadership across E-Commerce, Retail, BFSI, Telecom, Shared Services, and Global Operations. Accountable for $45M+ P&L portfolios and 2,500+ global professionals.',
      '',
      'KEY METRICS',
      ...HERO_KPIS.map((k) => `- ${k.value} — ${k.label}`),
      '',
      'CAREER CHRONOLOGY',
      ...CAREER_MILESTONES.flatMap((c) => [
        `${c.role} | ${c.company} (${c.period} · ${c.location})`,
        `  ${c.summary}`,
        ...c.expandedOutcomes.map((o) => `  * ${o}`),
        '',
      ]),
      'TRANSFORMATION IMPACT',
      ...IMPACT_METRICS.map((m) => `- ${m.metric} ${m.title} (${m.context}): ${m.description}`),
      '',
      'EDUCATION & CERTIFICATIONS',
      '- Master of Arts in Economics (M.A.), Dibrugarh University (1996 – 1998)',
      ...CERTIFICATIONS.map((c) => `- ${c.title}: ${c.detail}`),
    ];

    const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Sumana-Dey-Executive-Profile.txt';
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="exec-profile-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
    >
      <div className="print-only-sheet relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#0A1120] shadow-2xl">
        {/* Modal Header */}
        <div className="no-print flex items-center justify-between gap-4 border-b border-white/10 bg-[#060B16] px-6 py-4">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.12em] text-[#E5BE62] uppercase">
              Executive Summary Sheet
            </p>
            <h2 id="exec-profile-title" className="text-base font-bold text-white">
              Sumana Dey — Curriculum Vitae Overview
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleDownloadText}
              className="inline-flex min-h-[36px] items-center gap-1.5 rounded-lg border border-white/15 bg-[#0D1528] px-3 py-1.5 text-xs font-semibold text-slate-200 transition-colors hover:border-[#D4A843]/40 hover:text-[#E5BE62]"
            >
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
              Download .txt
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex min-h-[36px] items-center gap-1.5 rounded-lg bg-[#D4A843] px-3 py-1.5 text-xs font-semibold text-[#060B16] transition-colors hover:bg-[#E5BE62]"
            >
              <Printer className="h-3.5 w-3.5" aria-hidden="true" />
              Print / Save PDF
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close executive profile modal"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition-colors hover:text-white"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Scrollable Executive Profile Sheet */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 text-slate-200">
          <div className="border-b border-white/10 pb-5">
            <h3 className="text-2xl font-extrabold text-white">SUMANA DEY</h3>
            <p className="mt-1 text-sm font-semibold text-[#E5BE62]">
              Business Transformation &amp; Operations Leader
            </p>
            <p className="mt-2 text-xs text-slate-400">
              {CONTACT_INFO.location} · {CONTACT_INFO.email} · {CONTACT_INFO.phone} ·{' '}
              {CONTACT_INFO.linkedinLabel}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.12em] text-[#E5BE62] uppercase">
              Executive Mandate
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-slate-300">
              25+ years leading large-scale digital transformation, omnichannel customer experience,
              and global P&amp;L delivery ($45M+ portfolios, 2,500+ professionals) across Tata
              Digital (TataNeu), [24]7.ai, Tech Mahindra, Tata Consultancy Services (TCS), and
              Standard Chartered Bank.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.12em] text-[#E5BE62] uppercase">
              Career Chronology
            </h4>
            <div className="mt-3 space-y-3">
              {CAREER_MILESTONES.map((role) => (
                <div key={role.id} className="rounded-lg border border-white/10 bg-[#080F1E] p-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="text-sm font-bold text-white">
                      {role.role} — <span className="text-[#E5BE62]">{role.company}</span>
                    </p>
                    <p className="font-mono text-[11px] text-slate-400">
                      {role.period} · {role.location}
                    </p>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-300">{role.summary}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <h4 className="text-xs font-semibold tracking-[0.12em] text-[#E5BE62] uppercase">
                Education
              </h4>
              <p className="mt-2 text-xs font-semibold text-white">
                Master of Arts in Economics (M.A.)
              </p>
              <p className="text-xs text-slate-400">Dibrugarh University · 1996 – 1998</p>
            </div>
            <div>
              <h4 className="text-xs font-semibold tracking-[0.12em] text-[#E5BE62] uppercase">
                Certifications
              </h4>
              <ul className="mt-2 space-y-1 text-xs text-slate-300">
                {CERTIFICATIONS.map((c) => (
                  <li key={c.title}>· {c.title}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
