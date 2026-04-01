import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, HeartPulse } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { clinicInfo } from '@/data/content';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Specialists', href: '#specialists' },
    { name: 'About Us', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-white py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 text-blue-700">
            <HeartPulse className="h-8 w-8" />
            <span className="text-xl font-bold tracking-tight">{clinicInfo.name}</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a href={`tel:${clinicInfo.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">
              <Phone className="h-4 w-4" />
              {clinicInfo.phone}
            </a>
            <Button asChild>
              <a href="#contact">Book Appointment</a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-lg py-4 px-4 flex flex-col gap-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-slate-700 hover:text-blue-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="h-px bg-slate-100 my-2" />
          <a href={`tel:${clinicInfo.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-2 text-base font-medium text-slate-700">
            <Phone className="h-5 w-5 text-blue-600" />
            {clinicInfo.phone}
          </a>
          <Button className="w-full mt-2" asChild onClick={() => setIsMobileMenuOpen(false)}>
            <a href="#contact">Book Appointment</a>
          </Button>
        </div>
      )}
    </header>
  );
}
