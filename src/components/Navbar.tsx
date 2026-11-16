import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  activeSection: string;
}

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'impact', label: 'Impact' },
  { id: 'journey', label: 'Journey' },
  { id: 'ai-vision', label: 'AI Vision' },
];

export function Navbar({ activeSection }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="no-print sticky top-0 z-40 border-b border-white/10 bg-[#060B16]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#top"
          className="flex items-center gap-2.5 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4A843]"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#D4A843] text-xs font-extrabold tracking-tight text-[#060B16]">
            SD
          </span>
          <span className="text-sm font-bold tracking-[0.06em] text-slate-100 uppercase">
            Sumana Dey
          </span>
        </a>

        {/* Zone 2: 5 Concise Single-Line Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4A843] ${
                  isActive ? 'text-[#E5BE62]' : 'hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-[#D4A843]"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action + Mobile Drawer Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center rounded-lg bg-[#D4A843] px-4 py-2 text-xs font-semibold text-[#060B16] whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#E5BE62] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A843]"
          >
            Let&apos;s Connect
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-[#0D1528] text-slate-200 transition-colors hover:border-[#D4A843]/40 hover:text-white md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#080F1E] px-4 py-4 md:hidden">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={handleLinkClick}
                className="flex min-h-[44px] items-center rounded-lg px-3 text-sm font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-[#E5BE62]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="mt-2 flex min-h-[44px] items-center justify-center rounded-lg bg-[#D4A843] px-4 text-sm font-semibold text-[#060B16] transition-colors hover:bg-[#E5BE62]"
            >
              Let&apos;s Connect
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
