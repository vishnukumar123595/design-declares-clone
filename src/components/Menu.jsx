
import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { LiaExclamationSolid } from "react-icons/lia";
import { MdOutlineLibraryBooks, MdOutlineEmail } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import AOS from 'aos';
import 'aos/dist/aos.css';

import GlobalChapter from './GlobalChapter';

const Header = ({ onTypingComplete }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isGlobalChapterOpen, setIsGlobalChapterOpen] = useState(false);
  const [showTyping, setShowTyping] = useState(isHome); // only for "/"

  const menuRef = useRef(null);

  const toggleDropdown = () => setIsDropdownOpen(prev => !prev);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDropdownOpen]);

  // Handle typing animation completion
  useEffect(() => {
    if (isHome) {
      const timer = setTimeout(() => {
        setShowTyping(false);
        onTypingComplete?.();
      }, 1600); // match animation duration
      return () => clearTimeout(timer);
    } else {
      onTypingComplete?.();
    }
  }, [isHome, onTypingComplete]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* Large animated D! only on home page during typing */}
      {isHome && showTyping && (
        <header className="d-flex align-items-center justify-content-center p-5 bg-light border-bottom">
          <h1 className="typing">D!</h1>
        </header>
      )}

      {/* Small static D! on all non-home routes */}
      {!isHome && (
        <header className="d-flex align-items-center p-3 bg-light border-bottom">
          <div
            className="logo"
            style={{
              fontSize: '4rem',
              fontWeight: 'bold',
              fontFamily: 'impact, "Arial Black", "Franklin Gothic Bold", sans-serif',
            }}
          >
            D!
          </div>
        </header>
      )}

      {/* Floating Menu */}
      {!showTyping && (
        <div className="floating-menu-box" ref={menuRef}>
          <div
            onClick={toggleDropdown}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              cursor: 'pointer',
              fontWeight: '400',
              fontSize: '1.7rem',
            }}
          >
            <span>Menu</span>
            <span style={{ fontSize: '1.7rem' }}>{isDropdownOpen ? '−' : '+'}</span>
          </div>

          {isDropdownOpen && (
            <div className="dropdown-menu-items mt-3">
              <button onClick={() => window.open('/', '_blank', 'noopener,noreferrer')}>
                <span className="icon-text"><IoHomeOutline /> Home</span>
              </button>
              <button onClick={() => window.open('/about', '_blank', 'noopener,noreferrer')}>
                <span className="icon-text"><LiaExclamationSolid /> About</span>
              </button>
              <button onClick={() => window.open('/latest', '_blank', 'noopener,noreferrer')}>
                <span className="icon-text"><MdOutlineLibraryBooks /> Latest</span>
              </button>
              <button onClick={() => window.open('/contactform', '_blank', 'noopener,noreferrer')}>
                <span className="icon-text"><MdOutlineEmail /> Contact</span>
              </button>
              <button
                onClick={() => {
                  setIsGlobalChapterOpen(true);
                  setIsDropdownOpen(false);
                }}
              >
                <span className="icon-text"><CiGlobe /> Choose Global Chapter</span>
              </button>
            </div>
          )}

          <hr />

          <button
            className="btn header-button w-100"
            onClick={() => window.open('/', '_blank', 'noopener,noreferrer')}
          >
            Declare Now
          </button>
        </div>
      )}

      {/* Global Chapter Modal */}
      {isGlobalChapterOpen && (
        <div className="global-chapter-modal">
          <button
            className="close-button"
            onClick={() => setIsGlobalChapterOpen(false)}
            aria-label="Close Global Chapter"
          >
            ×
          </button>
          <GlobalChapter />
        </div>
      )}
    </>
  );
};

export default Header;

