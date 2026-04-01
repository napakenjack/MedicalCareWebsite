import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { CalendarCheck, Phone } from 'lucide-react';
import { clinicInfo } from '@/data/content';

export function FinalCTA() {
  return (
    <section className="py-24 bg-blue-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="medical-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M20 0L40 20L20 40L0 20L20 0Z" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#medical-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Prioritize Your Health?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Don't wait to get the care you deserve. Our specialists are ready to provide you with personalized, world-class medical attention.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto h-14 px-8 text-base font-bold" asChild>
              <a href="#contact">
                <CalendarCheck className="mr-2 h-5 w-5" />
                Schedule Consultation
              </a>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base font-bold bg-transparent text-white border-white hover:bg-white/10 hover:text-white" asChild>
              <a href={`tel:${clinicInfo.phone.replace(/[^0-9+]/g, '')}`}>
                <Phone className="mr-2 h-5 w-5" />
                Call {clinicInfo.phone}
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
