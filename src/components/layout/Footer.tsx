import React from 'react';
import { HeartPulse, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { clinicInfo } from '@/data/content';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand & About */}
          <div className="space-y-4">
            <a href="#" className="flex items-center gap-2 text-white">
              <HeartPulse className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold tracking-tight">{clinicInfo.name}</span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Providing compassionate, expert medical care with state-of-the-art facilities. Your health is our priority.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Our Services</a></li>
              <li><a href="#specialists" className="hover:text-blue-400 transition-colors">Our Specialists</a></li>
              <li><a href="#testimonials" className="hover:text-blue-400 transition-colors">Patient Stories</a></li>
              <li><a href="#faq" className="hover:text-blue-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Top Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">General Consultation</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Cardiology</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Pediatrics</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Dermatology</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Orthopedics</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-500 shrink-0" />
                <span>{clinicInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-500 shrink-0" />
                <a href={`tel:${clinicInfo.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition-colors">
                  {clinicInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-500 shrink-0" />
                <a href={`mailto:${clinicInfo.email}`} className="hover:text-white transition-colors">
                  {clinicInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-blue-500 shrink-0" />
                <span>{clinicInfo.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} {clinicInfo.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
