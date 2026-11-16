import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { HERO_KPIS } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenProfileModal: () => void;
}

export function HeroSection({ onOpenProfileModal }: HeroSectionProps) {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,168,67,0.09),_transparent_55%),linear-gradient(180deg,#060B16_0%,#080F1E_100%)] py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Top Row: Name + Executive Introduction (Left) & Compact Photo (Right) */}
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center lg:gap-12">
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold tracking-[0.14em] text-[#E5BE62] uppercase">
              25+ Years Experience · Business Transformation Leader
            </p>

            <h1 className="mt-4 text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              SUMANA <span className="text-[#D4A843]">DEY</span>
            </h1>

            <blockquote className="mt-5 max-w-2xl font-serif text-lg leading-relaxed italic text-slate-200 sm:text-xl">
              &ldquo;AI Adoption and Acceleration. Empowering People. Enhancing Performance.
              Transforming Businesses.&rdquo;
            </blockquote>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300">
              A distinguished business transformation and operations executive with{' '}
              <strong className="font-semibold text-white">25+ years</strong> of leadership
              experience across E-Commerce, Retail, BFSI, Telecom, Shared Services, and Global
              Operations. Managing{' '}
              <strong className="font-semibold text-[#E5BE62]">$45M+</strong> business portfolios
              and leading <strong className="font-semibold text-white">2,500+</strong> global
              teams.
            </p>
          </div>

          {/* Right Side: Compact Executive Portrait Card aligned solely with Name & Intro */}
          <div className="w-full max-w-[220px] shrink-0 self-center rounded-2xl border border-white/10 bg-[#0D1528] p-3.5 shadow-2xl lg:self-auto">
            <div className="mx-auto aspect-square w-36 overflow-hidden rounded-xl border border-[#D4A843]/30 bg-[#080F1E] sm:w-40">
              <img
                src="/assets/sumana-portrait.png"
                alt="Sumana Dey — Business Transformation and Operations Executive"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover object-top"
              />
            </div>

            <div className="mt-3 border-t border-white/10 pt-3 text-center">
              <div className="inline-flex items-center justify-center gap-1.5 text-[10px] font-semibold tracking-[0.1em] text-[#E5BE62] uppercase">
                <Sparkles className="h-3 w-3 text-[#D4A843]" aria-hidden="true" />
                <span>AI-Led Transformation</span>
              </div>
              <p className="mt-1 text-xs font-semibold text-white">
                Operations &amp; Transformation Leader
              </p>
              <p className="mt-0.5 text-[11px] text-slate-400">
                Multi-Sector Scale · P&amp;L Delivery
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons Row */}
        <div className="mt-8 flex flex-wrap items-center gap-3.5">
          <a
            href="#journey"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#D4A843] px-5 py-2.5 text-sm font-semibold text-[#060B16] whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#E5BE62] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A843]"
          >
            Explore Leadership Journey
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>

          <a
            href="#contact"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-white/15 bg-[#0D1528] px-5 py-2.5 text-sm font-semibold text-slate-100 whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-[#D4A843]/50 hover:text-[#E5BE62] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A843]"
          >
            Let&apos;s Connect
          </a>

          <button
            type="button"
            onClick={onOpenProfileModal}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-300 whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#E5BE62] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A843]"
          >
            <Download className="h-4 w-4 text-[#D4A843]" aria-hidden="true" />
            Download Executive Profile
          </button>
        </div>

        {/* Full-Width 4-Column Executive KPI Strip */}
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {HERO_KPIS.map((kpi) => (
            <div
              key={kpi.label}
              className="rounded-xl border border-white/10 bg-[#0D1528]/90 px-5 py-4 transition-colors duration-150 hover:border-[#D4A843]/35"
            >
              <p className="tabular-nums text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                {kpi.value}
              </p>
              <p className="mt-1 text-xs font-medium text-slate-400">{kpi.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
