import { ChevronDown, ChevronUp, MapPin } from 'lucide-react';
import { useState } from 'react';
import { CAREER_MILESTONES } from '../data/portfolioData';

export function CareerSection() {
  const [expandedId, setExpandedId] = useState<string | null>('tata-digital');

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="journey" className="border-b border-white/10 bg-[#080F1E] py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.14em] text-[#E5BE62] uppercase">
            Executive Chronology
          </p>
          <h2 className="mt-2 text-balance text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Career Journey &amp; <span className="text-[#D4A843]">Milestones</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
            Over two decades of progressive executive and senior operational leadership across the
            global enterprise landscape.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative mx-auto mt-12 max-w-4xl">
          {/* Vertical Spine */}
          <div
            aria-hidden="true"
            className="absolute top-6 bottom-6 left-3.5 hidden w-px bg-white/10 sm:block"
          />

          <div className="space-y-6">
            {CAREER_MILESTONES.map((item, idx) => {
              const isExpanded = expandedId === item.id;
              const isLatest = idx === 0;

              return (
                <div key={item.id} className="relative sm:pl-12">
                  {/* Timeline Marker */}
                  <div
                    aria-hidden="true"
                    className={`absolute top-7 left-1.5 hidden h-4 w-4 rounded-full border-2 sm:block ${
                      isLatest
                        ? 'border-[#D4A843] bg-[#D4A843]'
                        : 'border-slate-500 bg-[#080F1E]'
                    }`}
                  />

                  <article className="rounded-xl border border-white/10 bg-[#0D1528] p-6 transition-colors duration-150 hover:border-[#D4A843]/40">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div className="min-w-0">
                        <p className="font-mono text-xs font-medium text-[#E5BE62]">
                          {item.period}
                        </p>
                        <h3 className="mt-1.5 text-lg font-bold tracking-tight text-white">
                          {item.role}
                        </h3>
                        <p className="mt-0.5 text-sm font-semibold text-slate-300">
                          {item.company}
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs text-slate-400 shrink-0">
                        <MapPin className="h-3.5 w-3.5 text-[#D4A843]" aria-hidden="true" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-slate-300">{item.summary}</p>

                    {/* Unboxed Metadata Highlights (Zero-Pill Discipline) */}
                    <div className="mt-4 flex flex-wrap items-center gap-x-2.5 gap-y-1 border-t border-white/8 pt-4 text-xs text-slate-400">
                      {item.highlights.map((highlight, hIdx) => (
                        <span key={highlight} className="inline-flex items-center gap-2.5">
                          <span className="font-medium text-slate-200">{highlight}</span>
                          {hIdx < item.highlights.length - 1 && (
                            <span aria-hidden="true" className="text-[#D4A843]">
                              ·
                            </span>
                          )}
                        </span>
                      ))}
                    </div>

                    {/* Expandable Deeper Outcomes */}
                    <div className="mt-4">
                      <button
                        type="button"
                        onClick={() => toggleExpand(item.id)}
                        aria-expanded={isExpanded}
                        className="inline-flex min-h-[36px] items-center gap-1.5 text-xs font-semibold text-[#E5BE62] transition-colors hover:text-[#F5D680] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A843]"
                      >
                        {isExpanded ? (
                          <>
                            Hide Key Outcomes
                            <ChevronUp className="h-3.5 w-3.5" aria-hidden="true" />
                          </>
                        ) : (
                          <>
                            View Key Outcomes
                            <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                          </>
                        )}
                      </button>

                      {isExpanded && (
                        <ul className="mt-3 space-y-2 border-t border-white/8 pt-3">
                          {item.expandedOutcomes.map((outcome) => (
                            <li
                              key={outcome}
                              className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-300"
                            >
                              <span
                                aria-hidden="true"
                                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4A843]"
                              />
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
