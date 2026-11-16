import {
  Activity,
  ArrowRight,
  Bot,
  CalendarClock,
  CheckCircle2,
  Gauge,
  MessageSquareText,
} from 'lucide-react';
import { useState } from 'react';
import { AI_CAPABILITIES, AI_TIERS, AiCapability } from '../data/portfolioData';

interface AiVisionSectionProps {
  onScheduleAiAdvisory: () => void;
}

function renderAiIcon(name: AiCapability['iconName']) {
  const cls = 'h-4 w-4 text-[#D4A843]';
  switch (name) {
    case 'activity':
      return <Activity className={cls} aria-hidden="true" />;
    case 'bot':
      return <Bot className={cls} aria-hidden="true" />;
    case 'gauge':
      return <Gauge className={cls} aria-hidden="true" />;
    case 'calendar':
      return <CalendarClock className={cls} aria-hidden="true" />;
    case 'message':
      return <MessageSquareText className={cls} aria-hidden="true" />;
  }
}

export function AiVisionSection({ onScheduleAiAdvisory }: AiVisionSectionProps) {
  const [activeTierId, setActiveTierId] = useState<string>(AI_TIERS[1].id);
  const selectedTier = AI_TIERS.find((t) => t.id === activeTierId) ?? AI_TIERS[1];

  return (
    <section id="ai-vision" className="border-b border-white/10 bg-[#060B16] py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.14em] text-[#E5BE62] uppercase">
            Next-Gen Operating Models
          </p>
          <h2 className="mt-2 text-balance text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Building the Future of Operations Through{' '}
            <span className="text-[#D4A843]">AI &amp; Digital Transformation</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
            Moving beyond legacy workflows toward AI-grounded, high-velocity architectures that
            augment human capabilities and optimize financial performance.
          </p>
        </div>

        {/* Interactive 3-Tier Transformation Architecture Framework */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-[#0D1528] p-6 sm:p-8">
          <p className="text-center text-xs font-semibold tracking-[0.12em] text-slate-300 uppercase">
            3-Tier Transformation Architecture Framework
          </p>

          <div
            role="tablist"
            aria-label="3-Tier Transformation Architecture"
            className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3"
          >
            {AI_TIERS.map((tier) => {
              const isActive = tier.id === activeTierId;
              return (
                <button
                  key={tier.id}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  onClick={() => setActiveTierId(tier.id)}
                  className={`flex flex-col items-center rounded-xl border p-5 text-center transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A843] ${
                    isActive
                      ? 'border-[#D4A843] bg-[#131F3A]'
                      : 'border-white/10 bg-[#080F1E] hover:border-[#D4A843]/40'
                  }`}
                >
                  <span className="font-mono text-xs font-semibold text-[#E5BE62]">
                    {tier.step}
                  </span>
                  <span className="mt-2 text-sm font-bold text-white">{tier.title}</span>
                  <span className="mt-1 text-xs leading-relaxed text-slate-400">
                    {tier.subtitle}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Tier Operational Detail Panel */}
          <div className="mt-6 rounded-xl border border-white/10 bg-[#080F1E] p-5">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <p className="text-xs font-semibold tracking-[0.1em] text-[#E5BE62] uppercase">
                  Tier {selectedTier.step} · Execution Levers
                </p>
                <ul className="mt-3 space-y-2">
                  {selectedTier.levers.map((lever) => (
                    <li key={lever} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <CheckCircle2
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#D4A843]"
                        aria-hidden="true"
                      />
                      <span>{lever}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-white/10 pt-4 lg:col-span-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-6">
                <p className="text-xs font-semibold tracking-[0.1em] text-slate-400 uppercase">
                  Enterprise Outcome
                </p>
                <p className="mt-2 text-sm font-medium leading-relaxed text-white">
                  {selectedTier.outcome}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 border-t border-white/10 pt-5 text-xs text-slate-300 sm:flex-row sm:gap-6">
            <span className="font-medium text-emerald-300">
              People Empowerment &amp; Upskilling
            </span>
            <span aria-hidden="true" className="hidden text-slate-500 sm:inline">
              +
            </span>
            <span className="font-medium text-[#E5BE62]">
              Measurable Business &amp; Financial Outcomes
            </span>
          </div>
        </div>

        {/* 5 AI Capability Cards + Executive Advisory Focus CTA Card */}
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {AI_CAPABILITIES.map((cap) => (
            <article
              key={cap.id}
              className="rounded-xl border border-white/10 bg-[#0D1528] p-6 transition-colors duration-150 hover:border-[#D4A843]/40"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#D4A843]/25 bg-[#D4A843]/10">
                {renderAiIcon(cap.iconName)}
              </div>
              <h3 className="mt-4 text-sm font-bold text-white">{cap.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">{cap.description}</p>
            </article>
          ))}

          {/* Card 6: Executive Advisory Focus */}
          <article className="flex flex-col justify-between rounded-xl border border-[#D4A843]/40 bg-[linear-gradient(145deg,#121D36_0%,#0B1222_100%)] p-6">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.12em] text-[#E5BE62] uppercase">
                Advisory Engagement
              </p>
              <h3 className="mt-2 text-base font-bold text-white">Executive Advisory Focus</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Focused on enterprise readiness, unit-economics ROI, and human-centered change
                management for GenAI operational deployment.
              </p>
            </div>
            <div className="mt-6">
              <button
                type="button"
                onClick={onScheduleAiAdvisory}
                className="inline-flex min-h-[40px] w-full items-center justify-center gap-2 rounded-lg bg-[#D4A843] px-4 py-2 text-xs font-semibold text-[#060B16] whitespace-nowrap transition-colors duration-150 hover:bg-[#E5BE62] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A843]"
              >
                Schedule Dialogue
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
