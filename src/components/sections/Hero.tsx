import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, CalendarCheck } from 'lucide-react';
import { clinicInfo } from '@/data/content';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&q=80&w=2000"
          alt="Modern Medical Center"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
              Advanced Medical Care
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight mb-6">
              Expert Healthcare for You and Your Family
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl">
              Experience world-class medical treatment with our team of renowned specialists. We combine compassionate care with cutting-edge technology to ensure your optimal health.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base h-14 px-8" asChild>
                <a href="#contact">
                  <CalendarCheck className="mr-2 h-5 w-5" />
                  Book Appointment
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-base h-14 px-8 bg-white/50 backdrop-blur-sm" asChild>
                <a href="#services">
                  View Treatments
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-4 text-sm text-slate-500">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="Patient"
                  />
                ))}
              </div>
              <div>
                <p className="font-semibold text-slate-900">Trusted by 50,000+ patients</p>
                <p>Rated 4.9/5 on Google Reviews</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
