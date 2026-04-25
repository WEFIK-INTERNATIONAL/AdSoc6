'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/constants/navigation';
import { SITE_CONFIG } from '@/constants/site';
import { useScroll } from '@/hooks/useScroll';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileSub, setActiveMobileSub] = useState(null);
  const pathname = usePathname();
  const isScrolled = useScroll(50);

  // Robust Body Scroll Lock
  useBodyScrollLock(isMobileMenuOpen);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setIsMobileMenuOpen(false);
    setPrevPathname(pathname);
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-100 transition-all duration-500 px-6 border-b h-20 flex items-center ${
        isScrolled && !isMobileMenuOpen
          ? 'bg-background backdrop-blur-3xl border-white/8 shadow-xl shadow-black/30'
          : 'bg-transparent border-transparent'
      }`}>
        <div className="container mx-auto max-w-7xl flex items-center justify-between h-full">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group relative z-110">
            <div className="w-12 h-12 relative shrink-0">
              <Image
                src={SITE_CONFIG.logo}
                fill
                alt={SITE_CONFIG.name}
                sizes="48px"
                className="object-contain"
              />
            </div>
            <span className="font-heading text-[24px] font-medium text-white leading-none group-hover:text-primary transition-colors tracking-tight">
              {SITE_CONFIG.name}
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group/nav">
                <Link
                  href={link.href}
                  className={`text-lg tracking-wide py-1 px-3 flex items-center gap-1.5 transition-all duration-300 font-medium rounded-lg ${
                    pathname.startsWith(link.href) && link.href !== '/'
                      ? 'text-primary bg-primary/8'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {link.subLinks && (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover/nav:rotate-180 opacity-60">
                      <path d="m6 9 6 6 6-6"/>
                    </svg>
                  )}
                </Link>

                {link.subLinks && (
                  <div className="absolute top-[80%] pt-3 left-0 invisible opacity-0 group-hover/nav:visible group-hover/nav:opacity-100 group-hover/nav:top-full transition-all duration-200 z-100">
                    <div className="bg-black shadow-2xl rounded-xl py-2 min-w-[250px] border border-white/10">
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className={`block px-5 py-2 text-lg transition-all ${
                            pathname === sub.href
                              ? 'text-primary bg-primary/8 font-semibold'
                              : 'text-slate-400 hover:text-white hover:bg-background/5'
                          }`}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA & Hamburger */}
          <div className="flex items-center gap-3 relative z-110">
            <div className="hidden sm:flex items-center gap-6">
              <Image src="/jisgroup.png" alt="JIS Group Logo" width={50} height={50} className="object-contain" />
              <Image src="/GNIT.png" alt="GNIT Logo" width={55} height={55} className="object-contain" />
            </div>

            <button
              className="lg:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px] text-white focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <span className={`w-5 h-0.5 bg-current transition-all duration-300 origin-center ${isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 scale-x-0' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-current transition-all duration-300 origin-center ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Solid Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-1000 bg-background transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <div className="flex flex-col h-full bg-background relative">
          {/* Internal Header for the Menu */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
            <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="w-8 h-8 relative">
                <Image 
                  src={SITE_CONFIG.logo} 
                  fill 
                  alt={SITE_CONFIG.name} 
                  sizes="32px"
                  className="object-contain" 
                />
              </div>
              <span className="font-heading text-xl text-white">{SITE_CONFIG.name}</span>
            </Link>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center text-white bg-background/5 rounded-full"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6 6 18M6 6l12 12"/></svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-6 pb-24">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-white/5 py-3">
                  <div className="flex items-center justify-between">
                    <Link 
                      href={link.href} 
                      className={`text-xl font-heading ${pathname.startsWith(link.href) && link.href !== '/' ? 'text-primary' : 'text-white'}`}
                      onClick={() => !link.subLinks && setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                    {link.subLinks && (
                      <button 
                        onClick={() => setActiveMobileSub(activeMobileSub === link.name ? null : link.name)}
                        className="w-10 h-10 flex items-center justify-center bg-background/5 rounded-full transition-colors"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`transition-transform duration-300 ${activeMobileSub === link.name ? 'rotate-180' : ''}`}>
                          <path d="m6 9 6 6 6-6"/>
                        </svg>
                      </button>
                    )}
                  </div>
                  
                  {link.subLinks && activeMobileSub === link.name && (
                    <div className="mt-4 ml-4 flex flex-col gap-4 border-l-2 border-primary/20 pl-6 animate-fade-in">
                      {link.subLinks.map((sub) => (
                        <Link 
                          key={sub.name} 
                          href={sub.href} 
                          className={`mono text-[10px] tracking-wider py-1 ${pathname === sub.href ? 'text-primary font-bold' : 'text-slate-500'}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="mt-8 flex justify-center items-center gap-8 py-6 bg-background/50 rounded-2xl border border-white/5">
                <Image src="/jisgroup.png" alt="JIS Group Logo" width={60} height={60} className="object-contain" />
                <Image src="/GNIT.png" alt="GNIT Logo" width={60} height={60} className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

