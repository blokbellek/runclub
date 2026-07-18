"use client";

import Link from "next/link";
import { useState } from "react";
import { HamburgerIcon } from "./icons";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full px-8 py-5 text-[rgb(81,81,81)] sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-black hover:opacity-80 transition-opacity">
          CAPPADOCIA RUN CLUB
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-[rgb(81,81,81)] hover:text-[rgb(229,32,52)] transition-all duration-300 ease-in-out text-base font-normal">
            Home
          </Link>
          <Link href="/hakkimizda" className="text-[rgb(81,81,81)] hover:text-[rgb(229,32,52)] transition-all duration-300 ease-in-out text-base font-normal">
            Hakkımızda
          </Link>
          <Link href="/program" className="text-[rgb(81,81,81)] hover:text-[rgb(229,32,52)] transition-all duration-300 ease-in-out text-base font-normal">
            Program
          </Link>
          <Link href="/galeri" className="text-[rgb(81,81,81)] hover:text-[rgb(229,32,52)] transition-all duration-300 ease-in-out text-base font-normal">
            Galeri
          </Link>
          <Link href="/bize-katilin" className="text-[rgb(81,81,81)] hover:text-[rgb(229,32,52)] transition-all duration-300 ease-in-out text-base font-normal">
            Bize Katılın
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 cursor-pointer hover:opacity-70 transition-opacity"
          aria-label="Menüyü aç"
        >
          <HamburgerIcon className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200">
          <div className="flex flex-col py-4">
            <Link 
              href="/" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-8 py-3 text-[rgb(81,81,81)] hover:text-[rgb(229,32,52)] hover:bg-gray-50 transition-all text-base font-normal"
            >
              Home
            </Link>
            <Link 
              href="/hakkimizda"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-8 py-3 text-[rgb(81,81,81)] hover:text-[rgb(229,32,52)] hover:bg-gray-50 transition-all text-base font-normal"
            >
              Hakkımızda
            </Link>
            <Link 
              href="/program"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-8 py-3 text-[rgb(81,81,81)] hover:text-[rgb(229,32,52)] hover:bg-gray-50 transition-all text-base font-normal"
            >
              Program
            </Link>
            <Link 
              href="/galeri"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-8 py-3 text-[rgb(81,81,81)] hover:text-[rgb(229,32,52)] hover:bg-gray-50 transition-all text-base font-normal"
            >
              Galeri
            </Link>
            <Link 
              href="/bize-katilin"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-8 py-3 text-[rgb(81,81,81)] hover:text-[rgb(229,32,52)] hover:bg-gray-50 transition-all text-base font-normal"
            >
              Bize Katılın
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
