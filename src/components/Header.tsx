"use client";

import Link from "next/link";
import { useState } from "react";
import { HamburgerIcon } from "./icons";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full px-4 py-5 sticky top-0 z-50 shadow-sm" style={{ backgroundColor: '#F5E6D3' }}>
      <div className="w-full flex items-center justify-between relative">
        <Link href="/" className="text-xl font-bold hover:opacity-80 transition-opacity" style={{ color: '#8B4513' }}>
          CAPPADOCIA RUN CLUB
        </Link>
        
        {/* Centered logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <img src="/images/header-logo.png" alt="Logo" className="h-12 w-auto object-contain" />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="hover:opacity-70 transition-all duration-300 ease-in-out text-base font-normal" style={{ color: '#8B4513' }}>
            Home
          </Link>
          <Link href="/hakkimizda" className="hover:opacity-70 transition-all duration-300 ease-in-out text-base font-normal" style={{ color: '#8B4513' }}>
            Hakkımızda
          </Link>
          <Link href="/program" className="hover:opacity-70 transition-all duration-300 ease-in-out text-base font-normal" style={{ color: '#8B4513' }}>
            Program
          </Link>
          <Link href="/galeri" className="hover:opacity-70 transition-all duration-300 ease-in-out text-base font-normal" style={{ color: '#8B4513' }}>
            Galeri
          </Link>
          <Link href="/bize-katilin" className="hover:opacity-70 transition-all duration-300 ease-in-out text-base font-normal" style={{ color: '#8B4513' }}>
            Bize Katılın
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 cursor-pointer hover:opacity-70 transition-opacity"
          aria-label="Menüyü aç"
          style={{ color: '#8B4513' }}
        >
          <HamburgerIcon className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full shadow-lg border-t" style={{ backgroundColor: '#F5E6D3', borderColor: '#D68910' }}>
          <div className="flex flex-col py-4">
            <Link 
              href="/" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-8 py-3 hover:opacity-70 transition-all text-base font-normal"
              style={{ color: '#8B4513' }}
            >
              Home
            </Link>
            <Link 
              href="/hakkimizda"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-8 py-3 hover:opacity-70 transition-all text-base font-normal"
              style={{ color: '#8B4513' }}
            >
              Hakkımızda
            </Link>
            <Link 
              href="/program"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-8 py-3 hover:opacity-70 transition-all text-base font-normal"
              style={{ color: '#8B4513' }}
            >
              Program
            </Link>
            <Link 
              href="/galeri"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-8 py-3 hover:opacity-70 transition-all text-base font-normal"
              style={{ color: '#8B4513' }}
            >
              Galeri
            </Link>
            <Link 
              href="/bize-katilin"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-8 py-3 hover:opacity-70 transition-all text-base font-normal"
              style={{ color: '#8B4513' }}
            >
              Bize Katılın
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
