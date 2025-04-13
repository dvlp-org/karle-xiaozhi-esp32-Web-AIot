"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, translations, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-bestblue-dark py-3 shadow-md" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.svg"
            alt="Best Wallet Token"
            width={40}
            height={40}
            className="h-8 w-auto"
          />
          <span className="ml-2 text-white font-semibold text-lg hidden md:block">
          {translations.nav.appName}

          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#benefits" className="nav-link">
            {translations.nav.benefits}
          </Link>
          <Link href="#ecosystem" className="nav-link">
            {translations.nav.ecosystem}
          </Link>
          <Link href="#roadmap" className="nav-link">
            {translations.nav.roadmap}
          </Link>
          <a
            href="https://bestwallet.com/documents/litepaper.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            {translations.nav.litepaper}
          </a>
          <a
            href="https://coinsult.net/projects/best-wallet"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            {translations.nav.audit}
          </a>
          <a
            href="https://support.bestwallet.com/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            {translations.nav.support}
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="https://twitter.com/bestwallethq"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <Image
                src="/images/icons/twitter.svg"
                alt="Twitter"
                width={24}
                height={24}
                className="text-white hover:text-bestgold transition-colors"
              />
            </a>
            <a
              href="https://discord.gg/bestwallet"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
            >
              <Image
                src="/images/icons/discord.svg"
                alt="Discord"
                width={24}
                height={24}
                className="text-white hover:text-bestgold transition-colors"
              />
            </a>
            <a
              href="https://t.me/Best_Wallet_Announcements"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <Image
                src="/images/icons/telegram.svg"
                alt="Telegram"
                width={24}
                height={24}
                className="text-white hover:text-bestgold transition-colors"
              />
            </a>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-white px-3 py-1.5 rounded-md hover:bg-bestblue/20 transition">
              <span className="mr-1">{language.toUpperCase()}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-bestblue-dark text-white border-bestblue">
              <DropdownMenuItem className="hover:bg-bestblue/20" onClick={() => setLanguage('en')}>
                {translations.language.en}
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-bestblue/20" onClick={() => setLanguage('zh')}>
                {translations.language.zh}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <button 
            className="bg-white text-bestblue rounded-md px-4 py-1.5 text-sm font-semibold hover:bg-opacity-90 transition"
            onClick={() => router.push('/home')}
          >
            {translations.nav.connectWallet}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : (
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute w-full bg-bestblue-dark transition-all duration-300 overflow-hidden",
          isMenuOpen ? "max-h-screen py-4" : "max-h-0"
        )}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <Link href="#benefits" className="nav-link py-2" onClick={toggleMenu}>
            {translations.nav.benefits}
          </Link>
          <Link href="#ecosystem" className="nav-link py-2" onClick={toggleMenu}>
            {translations.nav.ecosystem}
          </Link>
          <Link href="#roadmap" className="nav-link py-2" onClick={toggleMenu}>
            {translations.nav.roadmap}
          </Link>
          <a
            href="https://bestwallet.com/documents/litepaper.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link py-2"
            onClick={toggleMenu}
          >
            {translations.nav.litepaper}
          </a>
          <a
            href="https://coinsult.net/projects/best-wallet"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link py-2"
            onClick={toggleMenu}
          >
            {translations.nav.audit}
          </a>
          <a
            href="https://support.bestwallet.com/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link py-2"
            onClick={toggleMenu}
          >
            {translations.nav.support}
          </a>
          <div className="flex items-center space-x-4 py-2">
            <a
              href="https://twitter.com/bestwallethq"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <Image
                src="/images/icons/twitter.svg"
                alt="Twitter"
                width={24}
                height={24}
                className="text-white hover:text-bestgold transition-colors"
              />
            </a>
            <a
              href="https://discord.gg/bestwallet"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
            >
              <Image
                src="/images/icons/discord.svg"
                alt="Discord"
                width={24}
                height={24}
                className="text-white hover:text-bestgold transition-colors"
              />
            </a>
            <a
              href="https://t.me/Best_Wallet_Announcements"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <Image
                src="/images/icons/telegram.svg"
                alt="Telegram"
                width={24}
                height={24}
                className="text-white hover:text-bestgold transition-colors"
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
