"use client";
import { useState } from 'react';
import { Montserrat } from 'next/font/google';
import Link from 'next/link';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['200'] });

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full flex md:flex-row items-center justify-between p-4  md:px-20 md:py-5 bg-white shadow-[0_4px_15px_0_rgba(71,85,105,0.5)] z-[100]" style={{ background: "var(--foreground)" }}>

      <Link href="/" className={`${montserrat.className} text-lg md:text-[1.25rem] font-[200] tracking-[0.1rem] uppercase no-underline text-inherit mb-2 md:mb-0`}>
        SHUBHAM RAWAT
      </Link>

      <nav aria-label="Main navigation">
        <ul className="flex list-none gap-3 md:gap-[10px] items-center text-sm md:text-base">
          <li className="hover:text-gray-500 transition-colors">
            <a href="https://lnky.short.gy/resume" target="_blank" rel="noreferrer">Resume</a>
          </li>
          <span className="text-gray-300">|</span>
          <li className="relative">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="hover:text-gray-500 transition-colors focus:outline-none"
            >
              Contact
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute right-[-20px] md:right-0 mt-6 w-64 rounded-lg p-4 shadow-[0_4px_15px_0_rgba(71,85,105,0.5)] z-[110]" style={{ background: "var(--foreground)" }}>
                <p className="text-[10px] md:text-xs font-semibold text-gray-400 tracking-widest mb-2">GET IN TOUCH</p>
                <a href="mailto:shubham8456@outlook.com" className="block text-xs md:text-sm py-2 border-b border-gray-500 hover:text-gray-500 transition-colors">
                  shubham8456@outlook.com
                </a>
                <a href="tel:+919639304451" className="block text-xs md:text-sm py-2 hover:text-gray-500 transition-colors">
                  +(91) 963-930-4451
                </a>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
