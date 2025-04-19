"use client"

import Link from "next/link"
import { useState } from "react"

type NavLink = {
  name: string
  href: string
}

const Nav_Links: NavLink[] = [
  { name: "About", href: "/about" },
  { name: "Courses", href: "/admission" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-gray-800 text-white py-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl text-[#d3b15a] font-bold font-serif tracking-wide">
          Ryanella Academy
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          {Nav_Links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="hover:text-[#d3b15a] transition-colors duration-300 text-sm uppercase tracking-wider font-medium"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Button */}
        <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 shadow-lg">
          <ul className="flex flex-col py-4 px-4 space-y-4">
            {Nav_Links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="block hover:text-[#d3b15a] transition-colors duration-300 text-sm uppercase tracking-wider font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
