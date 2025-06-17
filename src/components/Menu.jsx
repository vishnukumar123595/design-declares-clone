import React, { useEffect, useRef, useState } from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { LiaExclamationSolid } from "react-icons/lia";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import AOS from 'aos';
import 'aos/dist/aos.css';

import GlobalChapter from './GlobalChapter'; // import the popup component

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isGlobalChapterOpen, setIsGlobalChapterOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleDropdown = () => setIsDropdownOpen(prev => !prev);

  // Blur background when dropdown or popup open
  useEffect(() => {
    const appRoot = document.getElementById('main-content'); // Make sure main content has this ID
    if (appRoot) {
      if (isDropdownOpen || isGlobalChapterOpen) {
        appRoot.classList.add('blurred');
      } else {
        appRoot.classList.remove('blurred');
      }
    }
  }, [isDropdownOpen, isGlobalChapterOpen]);

  // Close dropdown on outside click
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

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* Sticky Top Logo */}
      <header className="d-flex align-items-center p-3 bg-light border-bottom">
        <div
          className="logo"
          style={{ fontSize: '7.5rem', fontWeight: 'bold', fontFamily: 'impact, "Arial Black", "Franklin Gothic Bold", sans-serif' }}
          data-aos="fade-right"
          data-aos-anchor-placement="top-bottom"
          data-aos-once="true"
          data-aos-offset="120"
        >
          D!
        </div>
      </header>

      {/* Floating Menu */}
      <div className="floating-menu-box" ref={menuRef}>
        {/* Menu Header */}
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

        {/* Dropdown Items */}
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

        {/* Declare Now Button */}
        <button
          className="btn header-button w-100"
          onClick={() => window.open('/', '_blank', 'noopener,noreferrer')}
        >
          Declare Now
        </button>
      </div>

      {/* GlobalChapter Fullscreen Popup */}
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
