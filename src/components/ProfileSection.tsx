import { Cpu, Globe, Layers, Target, Users } from 'lucide-react';
import { PROFILE_PILLARS, ProfilePillar } from '../data/portfolioData';

function renderPillarIcon(name: ProfilePillar['iconName']) {
  const cls = 'h-4 w-4 text-[#D4A843]';
  switch (name) {
    case 'target':
      return <Target className={cls} aria-hidden="true" />;
    case 'cpu':
      return <Cpu className={cls} aria-hidden="true" />;
    case 'layers':
      return <Layers className={cls} aria-hidden="true" />;
    case 'users':
      return <Users className={cls} aria-hidden="true" />;
  }
}

export function ProfileSection() {
  return (
    <section id="about" className="border-b border-white/10 bg-[#060B16] py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.14em] text-[#E5BE62] uppercase">
            Executive Profile
          </p>
          <h2 className="mt-2 text-balance text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Driving Business Transformation Through{' '}
            <span className="text-[#D4A843]">Strategy, Analytics, Technology</span> and People.
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Narrative */}
          <div className="space-y-5 text-[15px] leading-relaxed text-slate-300 lg:col-span-6">
            <p>
              Sumana Dey is a distinguished Business Transformation and Operations Executive with
              over 25 years of cross-functional leadership experience across E-Commerce, Retail,
              BFSI, Telecom, Shared Services, and Global Operations. Known for spearheading
              mission-critical mandates across high-growth and turnaround environments, she builds
              scalable operating models that turn underperforming business units into profitable,
              resilient enterprise engines.
            </p>
            <p>
              Throughout her tenure leading Tier-1 enterprises including{' '}
              <strong className="font-semibold text-white">
                Tata Digital (TataNeu), [24]7.ai, Tech Mahindra, Tata Consultancy Services (TCS),
              </strong>{' '}
              and <strong className="font-semibold text-white">Standard Chartered Bank</strong>,
              Sumana has maintained accountability for $45M+ revenue portfolios while orchestrating
              multi-thousand-member workforces spanning India, the Middle East, UK, APAC, and
              North America.
            </p>
            <p>
              Her leadership ethos bridges rigorous financial discipline with people-first culture
              building. By institutionalizing data-driven governance, predictive analytics, and
              automation across customer journeys, she has consistently delivered 20–35% operational
              cost reductions, rapid margin turnarounds within a single quarter, and sustained 100%
              KPI compliance across flagship enterprise accounts.
            </p>

            {/* Executive Signature Block */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
              <div>
                <p className="text-sm font-bold text-white">Sumana Dey</p>
                <p className="text-xs text-slate-400">
                  Ex-Director E-Commerce &amp; VP Operations · Strategic Transformation
                </p>
              </div>
              <p className="font-serif text-xl tracking-wide italic text-[#E5BE62]">
                Sumana Dey
              </p>
            </div>
          </div>

          {/* Right 2x2 Capability Grid + Global Execution Card */}
          <div className="space-y-4 lg:col-span-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {PROFILE_PILLARS.map((pillar) => (
                <div
                  key={pillar.id}
                  className="rounded-xl border border-white/10 bg-[#0D1528] p-5 transition-colors duration-150 hover:border-[#D4A843]/40"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#D4A843]/25 bg-[#D4A843]/10">
                    {renderPillarIcon(pillar.iconName)}
                  </div>
                  <h3 className="mt-4 text-sm font-bold text-white">{pillar.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-[#0D1528] p-5">
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-[#D4A843]/40 bg-[#080F1E]">
                <img
                  src="/assets/sumana-portrait.png"
                  alt="Sumana Dey"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <Globe className="h-3.5 w-3.5 shrink-0 text-[#D4A843]" aria-hidden="true" />
                  <h3 className="text-sm font-bold text-white">Global Execution Capability</h3>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">
                  Proven track record scaling enterprise delivery across multicultural networks in
                  India, UAE, UK, APAC, and North America.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
