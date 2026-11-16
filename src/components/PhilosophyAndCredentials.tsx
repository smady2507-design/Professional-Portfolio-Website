import {
  ArrowRight,
  Award,
  Briefcase,
  Compass,
  GraduationCap,
  RefreshCw,
  ShieldCheck,
  Smile,
  Users,
} from 'lucide-react';
import {
  CERTIFICATIONS,
  LEADERSHIP_TENETS,
  LeadershipTenet,
  SectorFilter,
  TARGET_VERTICALS,
} from '../data/portfolioData';

interface PhilosophyAndCredentialsProps {
  onSelectVerticalSector: (sector: SectorFilter) => void;
}

function renderTenetIcon(name: LeadershipTenet['iconName']) {
  const cls = 'h-4 w-4 text-[#D4A843]';
  switch (name) {
    case 'compass':
      return <Compass className={cls} aria-hidden="true" />;
    case 'users':
      return <Users className={cls} aria-hidden="true" />;
    case 'smile':
      return <Smile className={cls} aria-hidden="true" />;
    case 'refresh':
      return <RefreshCw className={cls} aria-hidden="true" />;
    case 'shield':
      return <ShieldCheck className={cls} aria-hidden="true" />;
  }
}

export function PhilosophyAndCredentials({
  onSelectVerticalSector,
}: PhilosophyAndCredentialsProps) {
  return (
    <>
      {/* Leadership Guiding Philosophy */}
      <section id="leadership" className="border-b border-white/10 bg-[#080F1E] py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold tracking-[0.14em] text-[#E5BE62] uppercase">
              Leadership Guiding Philosophy
            </p>
            <h2 className="mt-3 text-balance text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
              &ldquo;Great Leadership Is About Adapting to Continuous Changes and yet{' '}
              <span className="text-[#D4A843]">Creating Sustainable Impact.</span>&rdquo;
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Five core executive tenets honed through 25+ years of leading high-stakes global
              organizations.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {LEADERSHIP_TENETS.map((tenet) => (
              <article
                key={tenet.id}
                className="flex flex-col items-center rounded-xl border border-white/10 bg-[#0D1528] p-5 text-center transition-colors duration-150 hover:border-[#D4A843]/40"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#D4A843]/25 bg-[#D4A843]/10">
                  {renderTenetIcon(tenet.iconName)}
                </div>
                <h3 className="mt-4 text-sm font-bold text-white">{tenet.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">{tenet.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Focus & Executive Credentials */}
      <section id="credentials" className="border-b border-white/10 bg-[#060B16] py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold tracking-[0.14em] text-[#E5BE62] uppercase">
              Credentials &amp; Verticals
            </p>
            <h2 className="mt-2 text-balance text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
              Industry Focus &amp; <span className="text-[#D4A843]">Executive Credentials</span>
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Column 1: Target Verticals */}
            <div className="rounded-xl border border-white/10 bg-[#0D1528] p-6">
              <div className="flex items-center gap-2.5">
                <Briefcase className="h-4 w-4 text-[#D4A843]" aria-hidden="true" />
                <h3 className="text-base font-bold text-white">Target Verticals</h3>
              </div>
              <p className="mt-1.5 text-xs text-slate-400">
                Select a vertical to view quantified results in the dashboard above.
              </p>

              <div className="mt-5 space-y-2.5">
                {TARGET_VERTICALS.map((vertical) => (
                  <button
                    key={vertical.id}
                    type="button"
                    onClick={() => onSelectVerticalSector(vertical.sector)}
                    className="group flex w-full items-center justify-between gap-3 rounded-lg border border-white/8 bg-[#080F1E] px-4 py-3 text-left transition-colors duration-150 hover:border-[#D4A843]/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A843]"
                  >
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-slate-100 group-hover:text-[#E5BE62]">
                        {vertical.name}
                      </p>
                      <p className="mt-0.5 text-[11px] text-slate-400 line-clamp-1">
                        {vertical.summary}
                      </p>
                    </div>
                    <ArrowRight
                      className="h-3.5 w-3.5 shrink-0 text-slate-400 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:text-[#D4A843]"
                      aria-hidden="true"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Column 2: Academic Foundation */}
            <div className="flex flex-col justify-between rounded-xl border border-white/10 bg-[#0D1528] p-6">
              <div>
                <div className="flex items-center gap-2.5">
                  <GraduationCap className="h-4 w-4 text-[#D4A843]" aria-hidden="true" />
                  <h3 className="text-base font-bold text-white">Academic Foundation</h3>
                </div>

                <div className="mt-5 rounded-xl border border-white/8 bg-[#080F1E] p-5">
                  <p className="text-[11px] font-semibold tracking-[0.12em] text-[#E5BE62] uppercase">
                    Postgraduate Degree
                  </p>
                  <h4 className="mt-2 text-lg font-bold text-white">
                    Master of Arts in Economics (M.A.)
                  </h4>
                  <p className="mt-1 text-sm font-medium text-slate-300">Dibrugarh University</p>
                  <p className="mt-1 font-mono text-xs text-slate-400">1996 – 1998</p>
                </div>

                <p className="mt-5 text-xs leading-relaxed text-slate-400">
                  Provides the analytical backbone for commercial unit-economics modeling,
                  macroeconomic trend sensitivity, and P&amp;L optimization across executive
                  mandates.
                </p>
              </div>
            </div>

            {/* Column 3: Key Certifications */}
            <div className="rounded-xl border border-white/10 bg-[#0D1528] p-6">
              <div className="flex items-center gap-2.5">
                <Award className="h-4 w-4 text-[#D4A843]" aria-hidden="true" />
                <h3 className="text-base font-bold text-white">Key Certifications</h3>
              </div>

              <div className="mt-5 space-y-2.5">
                {CERTIFICATIONS.map((cert) => (
                  <div
                    key={cert.title}
                    className="rounded-lg border border-white/8 bg-[#080F1E] px-4 py-3"
                  >
                    <p className="text-xs font-semibold text-white">{cert.title}</p>
                    <p className="mt-0.5 text-[11px] text-slate-400">{cert.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
