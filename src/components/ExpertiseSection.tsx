import { Award, Building2, Check, HeartHandshake, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react';
import { COMPETENCIES, CompetencyItem } from '../data/portfolioData';

function renderCompetencyIcon(name: CompetencyItem['iconName']) {
  const cls = 'h-5 w-5 text-[#D4A843]';
  switch (name) {
    case 'sparkles':
      return <Sparkles className={cls} aria-hidden="true" />;
    case 'building':
      return <Building2 className={cls} aria-hidden="true" />;
    case 'trending':
      return <TrendingUp className={cls} aria-hidden="true" />;
    case 'heart':
      return <HeartHandshake className={cls} aria-hidden="true" />;
    case 'award':
      return <Award className={cls} aria-hidden="true" />;
    case 'shield':
      return <ShieldCheck className={cls} aria-hidden="true" />;
  }
}

export function ExpertiseSection() {
  return (
    <section id="expertise" className="border-b border-white/10 bg-[#080F1E] py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.14em] text-[#E5BE62] uppercase">
            Core Competencies
          </p>
          <h2 className="mt-2 text-balance text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Leadership &amp; Executive <span className="text-[#D4A843]">Expertise</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
            Comprehensive executive domain mastery spanning digital transformation, operational
            scaling, and P&amp;L optimization.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {COMPETENCIES.map((item) => (
            <article
              key={item.id}
              className="flex flex-col rounded-xl border border-white/10 bg-[#0D1528] p-6 transition-colors duration-150 hover:border-[#D4A843]/40"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#D4A843]/25 bg-[#D4A843]/10">
                {renderCompetencyIcon(item.iconName)}
              </div>

              <h3 className="mt-5 text-base font-bold text-white">{item.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">{item.description}</p>

              <ul className="mt-5 space-y-2.5 border-t border-white/8 pt-4">
                {item.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <Check
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#D4A843]"
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
