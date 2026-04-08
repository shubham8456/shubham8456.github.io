"use client";
import { useState } from 'react';
import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({ subsets: ['latin'] });


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
        <div className={montserrat.className} style={{ fontSize: "1.25rem", fontWeight: 200, letterSpacing: "0.1rem" }}>SHUBHAM RAWAT</div>

      <nav aria-label="Main navigation">
        <ul style={{ display: "flex", listStyle: "none", gap: "10px" }}>
          <li className="hover:text-gray-500"><a href="https://lnky.short.gy/resume" target="_blank" rel="noreferrer">Resume</a></li>
          <span>|</span>
          <li>
            {/* Toggle Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="hover:text-gray-500">Contact</button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="dropdown absolute right-10 mt-3 w-52 rounded-lg p-4 z-50">
                <p className="text-sm font-semibold text-gray-500 mb-2">GET IN TOUCH</p>
                <a href="mailto:shubham8456@outlook.com" className="block text-sm py-1 hover:text-gray-500">
                  shubham8456@outlook.com
                </a>
                <a href="tel:+919639304451" className="block text-sm py-1 hover:text-gray-500">
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
