'use client'

import Link from 'next/link'
import Image from 'next/image'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'

import Drawer from '../drawer'

export default function MainHeader() {
  const [isMenuClose, setIsMenuClose] = useState(true)

  const toggleMenu = () => {
    setIsMenuClose(!isMenuClose)
  }

  return (
    <div className="sm:sticky top-0 z-20 bg-gray-50 flex justify-between items-center p-4 sm:shadow-md">
      {/* Logo and title */}
      <div className="flex flex-col sm:flex-row items-center">
        <div className="image-container">
          <Link href="/">
            <Image
              src="/assets/img-profile.webp"
              width={70}
              height={70}
              alt="website logo and picture of the psychologist"
            />
          </Link>
        </div>
        <div className="ml-4 text-center mt-3 sm:mt-0 sm:text-left">
          <h3 className="font-bold sm:font-normal">
            Klinik Psikolog Ülkü Mutlu Akdeniz
          </h3>
          <p>
            Psikolojik destek almak sağlığınıza yatırım yapmanın cesur bir
            adımıdır.
          </p>
        </div>
      </div>

      {/* Navbar Links and Menu */}
      <div className="relative">
        {/* Mobile menu toggle button */}
        <div className="sm:hidden -mt-14">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuClose ? <MenuIcon /> : <CloseIcon />}
          </button>
        </div>

        {/* Full-screen Mobile Menu */}
        <div
          className={`fixed inset-0 z-30 bg-gray-900 bg-opacity-95 text-white flex flex-col items-center justify-center space-y-6 transform transition-transform duration-300 ${
            isMenuClose ? 'translate-x-full' : 'translate-x-0'
          } sm:hidden`}
        >
          <ul className="text-center space-y-4 text-lg">
            <li>
              <Link href="/" onClick={toggleMenu}>
                Ana Sayfa
              </Link>
            </li>
            <li>
              <Drawer />
            </li>
            <li>
              <a
                href="https://tr.linkedin.com/in/ulkumutlu"
                target="_blank"
                rel="noopener noreferrer"
                onClick={toggleMenu}
              >
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/pskulkumutlu/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={toggleMenu}
              >
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/66927828779"
                target="_blank"
                rel="noopener noreferrer"
                onClick={toggleMenu}
              >
                <WhatsAppIcon />
              </a>
            </li>
          </ul>
          <button
            className="absolute top-4 right-4 text-3xl"
            onClick={toggleMenu}
          >
            <CloseIcon />
          </button>
        </div>

        {/* Desktop links */}
        <ul className="hidden sm:flex space-x-4">
          <li>
            <Link href="/">Ana Sayfa</Link>
          </li>
          <li>
            <Drawer />
          </li>
          <li>
            <a
              href="https://tr.linkedin.com/in/ulkumutlu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/pskulkumutlu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/66927828779"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
