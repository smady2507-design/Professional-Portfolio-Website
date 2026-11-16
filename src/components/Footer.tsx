import { CONTACT_INFO } from '../data/portfolioData';

export function Footer() {
  return (
    <footer className="no-print border-t border-white/10 bg-[#050912] py-8">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#D4A843] text-xs font-extrabold text-[#060B16]">
            SD
          </span>
          <div>
            <p className="text-xs font-bold tracking-[0.06em] text-white uppercase">
              Sumana Dey
            </p>
            <p className="text-[11px] text-slate-400">
              Global Operations &amp; Business Transformation Leader
            </p>
          </div>
        </div>

        <nav aria-label="Footer Navigation" className="flex flex-wrap items-center justify-center gap-5 text-xs text-slate-400">
          <a href="#about" className="hover:text-[#E5BE62]">
            About
          </a>
          <a href="#expertise" className="hover:text-[#E5BE62]">
            Expertise
          </a>
          <a href="#impact" className="hover:text-[#E5BE62]">
            Impact
          </a>
          <a href="#journey" className="hover:text-[#E5BE62]">
            Journey
          </a>
          <a href="#ai-vision" className="hover:text-[#E5BE62]">
            AI Vision
          </a>
          <a href="#contact" className="hover:text-[#E5BE62]">
            Contact
          </a>
        </nav>

        <p className="text-[11px] text-slate-500">
          &copy; {new Date().getFullYear()} {CONTACT_INFO.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
