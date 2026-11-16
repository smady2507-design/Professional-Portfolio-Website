import { IMPACT_METRICS, SectorFilter } from '../data/portfolioData';

interface ImpactSectionProps {
  selectedSector: SectorFilter;
  onSelectSector: (sector: SectorFilter) => void;
}

const SECTOR_TABS: { id: SectorFilter; label: string }[] = [
  { id: 'all', label: 'All Programs' },
  { id: 'ecommerce', label: 'E-Commerce & Retail' },
  { id: 'bfsi', label: 'BFSI & Shared Services' },
  { id: 'telecom', label: 'Telecom & Tech' },
];

export function ImpactSection({ selectedSector, onSelectSector }: ImpactSectionProps) {
  const filteredMetrics =
    selectedSector === 'all'
      ? IMPACT_METRICS
      : IMPACT_METRICS.filter((m) => m.sector === selectedSector);

  return (
    <section id="impact" className="border-b border-white/10 bg-[#060B16] py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.14em] text-[#E5BE62] uppercase">
            Proven Track Record
          </p>
          <h2 className="mt-2 text-balance text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Transformation Impact &amp; <span className="text-[#D4A843]">Results</span> Dashboard
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
            Quantified business outcomes and financial results delivered across major global
            enterprise programs.
          </p>
        </div>

        {/* Interactive Sector Filter Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          <div
            role="tablist"
            aria-label="Filter impact metrics by industry sector"
            className="inline-flex flex-wrap items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-[#0D1528] p-1.5"
          >
            {SECTOR_TABS.map((tab) => {
              const active = selectedSector === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  type="button"
                  aria-selected={active}
                  onClick={() => onSelectSector(tab.id)}
                  className={`min-h-[36px] rounded-lg px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A843] ${
                    active
                      ? 'bg-[#D4A843] text-[#060B16]'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredMetrics.map((item) => (
            <article
              key={item.id}
              className="flex flex-col justify-between rounded-xl border border-white/10 bg-[#0D1528] p-6 transition-colors duration-150 hover:border-[#D4A843]/40"
            >
              <div>
                <p className="text-[11px] font-semibold tracking-[0.12em] text-[#E5BE62] uppercase">
                  {item.context}
                </p>
                <p className="tabular-nums mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  {item.metric}
                </p>
                <h3 className="mt-2 text-sm font-bold text-slate-100">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
