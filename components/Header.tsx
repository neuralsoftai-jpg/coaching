'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X, ChevronDown, Globe, Search } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#061d2c] border-b border-white/10 shadow-lg py-6'
          : 'bg-[#082436] border-b border-white/5 shadow-md py-9'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* Logo only */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center gap-2.5">
              {/* UNICO stylized U Logo SVG */}
              <svg viewBox="0 0 120 120" className="w-10 h-10 flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M35 30V65C35 78.8 46.2 90 60 90C73.8 90 85 78.8 85 65V45" stroke="#4ba3c3" strokeWidth="10" strokeLinecap="round" />
                <path d="M85 45L85 30" stroke="#e2a54a" strokeWidth="10" strokeLinecap="round" />
                <path d="M75 40L85 30L95 40" stroke="#e2a54a" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="60" cy="52" r="8" fill="#e2a54a" />
              </svg>
              {/* Logo Text */}
              <div className="flex flex-col text-left">
                <span className="text-xl font-black tracking-widest text-white leading-none">UNICO</span>
                <span className="text-[8px] font-bold text-[#e2a54a] tracking-wider leading-none mt-1 uppercase">COACHING INTERNATIONAL</span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav Items - Structured in a Single Row */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6 flex-shrink-0">
            <Link href="/courses" className="flex items-center gap-1 text-sm font-semibold text-white/95 hover:text-[#e2a54a] transition-all whitespace-nowrap">
              Coaching Programs <ChevronDown className="w-3.5 h-3.5 text-white/50" />
            </Link>
            <Link href="/courses" className="flex items-center gap-1 text-sm font-semibold text-white/95 hover:text-[#e2a54a] transition-all whitespace-nowrap">
              Global Course Finder <ChevronDown className="w-3.5 h-3.5 text-white/50" />
            </Link>
            <Link href="/about" className="flex items-center gap-1 text-sm font-semibold text-white/95 hover:text-[#e2a54a] transition-all whitespace-nowrap">
              About Us <ChevronDown className="w-3.5 h-3.5 text-white/50" />
            </Link>
            <Link href="/blog" className="flex items-center gap-1 text-sm font-semibold text-white/95 hover:text-[#e2a54a] transition-all whitespace-nowrap">
              Resource Center <ChevronDown className="w-3.5 h-3.5 text-white/50" />
            </Link>
            <Link href="/courses" className="flex items-center gap-1 text-sm font-semibold text-white/95 hover:text-[#e2a54a] transition-all whitespace-nowrap">
              Log In <ChevronDown className="w-3.5 h-3.5 text-white/50" />
            </Link>
          </div>

          {/* Desktop CTA & Controls (English Selector Removed) */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4 flex-shrink-0">
            {/* CTA Button */}
            <Link
              href="/contact"
              className="px-4 lg:px-5 py-2.5 rounded-lg bg-[#e2a54a] text-[#0b2b40] font-bold text-xs tracking-wider hover:bg-[#d49439] transition-all transform hover:scale-105 shadow-md uppercase whitespace-nowrap"
            >
              Speak to an Advisor
            </Link>

            {/* Search Icon */}
            <button className="text-white/80 hover:text-[#e2a54a] transition-colors p-2 cursor-pointer flex-shrink-0">
              <Search className="w-4.5 h-4.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 flex-shrink-0 text-white"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 pt-4 border-t border-white/10 space-y-3 pb-4"
          >
            <Link
              href="/courses"
              className="block px-4 py-2 text-sm font-semibold text-white/90 hover:text-[#e2a54a]"
              onClick={() => setIsOpen(false)}
            >
              Coaching Programs
            </Link>
            <Link
              href="/courses"
              className="block px-4 py-2 text-sm font-semibold text-white/90 hover:text-[#e2a54a]"
              onClick={() => setIsOpen(false)}
            >
              Global Course Finder
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 text-sm font-semibold text-white/90 hover:text-[#e2a54a]"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/blog"
              className="block px-4 py-2 text-sm font-semibold text-white/90 hover:text-[#e2a54a]"
              onClick={() => setIsOpen(false)}
            >
              Resource Center
            </Link>
            <Link
              href="/courses"
              className="block px-4 py-2 text-sm font-semibold text-white/70 hover:text-[#e2a54a]"
              onClick={() => setIsOpen(false)}
            >
              Log In
            </Link>

            <div className="flex flex-col gap-3 pt-4 border-t border-white/5 px-4">
              <Link
                href="/contact"
                className="w-full text-center px-4 py-3 rounded-lg bg-[#e2a54a] text-[#0b2b40] font-bold text-xs uppercase"
                onClick={() => setIsOpen(false)}
              >
                Speak to an Advisor
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}
