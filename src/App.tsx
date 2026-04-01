/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { TrustBar } from '@/components/sections/TrustBar';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { Featured } from '@/components/sections/Featured';
import { Doctors } from '@/components/sections/Doctors';
import { Process } from '@/components/sections/Process';
import { Benefits } from '@/components/sections/Benefits';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { Contact } from '@/components/sections/Contact';
import { FinalCTA } from '@/components/sections/FinalCTA';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <Featured />
        <Doctors />
        <Process />
        <Benefits />
        <Testimonials />
        <FAQ />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
