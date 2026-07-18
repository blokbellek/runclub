import Link from "next/link";
import { HamburgerIcon } from "./icons";

export default function Header() {
  return (
    <header className="w-full px-8 py-5 text-[rgb(81,81,81)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-black hover:opacity-80 transition-opacity">
          CAPPADOCIA RUN CLUB
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-[rgb(81,81,81)] hover:text-black transition-colors text-base font-normal">
            Home
          </Link>
          <Link href="/#about" className="text-[rgb(81,81,81)] hover:text-black transition-colors text-base font-normal">
            Hakkımızda
          </Link>
          <Link href="#gallery" className="text-[rgb(81,81,81)] hover:text-black transition-colors text-base font-normal">
            Galeri
          </Link>
          <Link href="#contact-form" className="text-[rgb(81,81,81)] hover:text-black transition-colors text-base font-normal">
            Bize Katılın
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 cursor-pointer hover:opacity-70 transition-opacity"
          aria-label="Menüyü aç"
        >
          <HamburgerIcon className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
