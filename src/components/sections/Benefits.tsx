import React from 'react';
import { motion } from 'motion/react';
import { benefits } from '@/data/content';
import { CheckCircle } from 'lucide-react';

export function Benefits() {
  return (
    <section className="py-20 lg:py-32 bg-slate-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Why Choose NovaCare for Your Health?
            </h2>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed">
              We combine medical excellence with a deeply human approach. Our commitment is to provide a safe, comfortable, and highly effective healing environment for every patient who walks through our doors.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-400 shrink-0" />
                  <span className="text-slate-200 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-full overflow-hidden border-8 border-slate-800 shadow-2xl relative z-10">
              <img
                src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=1000"
                alt="Medical Equipment"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute top-10 -right-10 w-32 h-32 bg-blue-600 rounded-full blur-3xl opacity-50 z-0" />
            <div className="absolute bottom-10 -left-10 w-40 h-40 bg-teal-500 rounded-full blur-3xl opacity-30 z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
