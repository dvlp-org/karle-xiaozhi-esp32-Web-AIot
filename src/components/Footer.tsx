"use client";

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bestblue-dark text-white">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="mb-10 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <Image
                src="/images/logo.svg"
                alt="Best Wallet Token"
                width={40}
                height={40}
                className="h-8 w-auto"
              />
              <span className="ml-2 text-white font-semibold text-lg">
                Best Wallet
              </span>
            </Link>
            <p className="text-sm text-gray-300 mb-4">
              A fast and secure non-custodial wallet for managing your crypto portfolio.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/bestwallethq"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Image
                  src="/images/icons/twitter.svg"
                  alt="Twitter"
                  width={20}
                  height={20}
                />
              </a>
              <a
                href="https://discord.gg/bestwallet"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Image
                  src="/images/icons/discord.svg"
                  alt="Discord"
                  width={20}
                  height={20}
                />
              </a>
              <a
                href="https://t.me/Best_Wallet_Announcements"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Image
                  src="/images/icons/telegram.svg"
                  alt="Telegram"
                  width={20}
                  height={20}
                />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#benefits" className="text-gray-300 hover:text-white transition-colors">
                  Benefits
                </Link>
              </li>
              <li>
                <Link href="#ecosystem" className="text-gray-300 hover:text-white transition-colors">
                  Ecosystem
                </Link>
              </li>
              <li>
                <Link href="#roadmap" className="text-gray-300 hover:text-white transition-colors">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://bestwallet.com/documents/litepaper.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Litepaper
                </a>
              </li>
              <li>
                <a
                  href="https://coinsult.net/projects/best-wallet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Audit
                </a>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <p className="text-sm text-gray-300 mb-2">
              For support, please visit our help center:
            </p>
            <a
              href="https://support.bestwallet.com/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bestblue hover:underline transition-colors inline-block mb-4"
            >
              support.bestwallet.com
            </a>
            <p className="text-sm text-gray-300">
              For general inquiries:
              <a
                href="mailto:info@bestwallet.com"
                className="text-bestblue hover:underline transition-colors ml-1"
              >
                info@bestwallet.com
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              &copy; {currentYear} Best Wallet. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center">
              <span className="text-xs text-gray-400 px-2">
                Proudly partnering with:
              </span>
              <a href="#" className="text-xs text-gray-400 hover:text-gray-300 transition-colors px-2">Coinbase Venture</a>
              <a href="#" className="text-xs text-gray-400 hover:text-gray-300 transition-colors px-2">Kraken</a>
              <a href="#" className="text-xs text-gray-400 hover:text-gray-300 transition-colors px-2">Ledger</a>
              <a href="#" className="text-xs text-gray-400 hover:text-gray-300 transition-colors px-2">Crypto.com</a>
              <a href="#" className="text-xs text-gray-400 hover:text-gray-300 transition-colors px-2">Binance</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
