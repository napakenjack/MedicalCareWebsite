import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export function About() {
  const points = [
    "State-of-the-art medical technology",
    "Internationally trained specialists",
    "Patient-first compassionate approach",
    "Comprehensive diagnostic center",
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200"
                alt="Medical Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-8 rounded-2xl shadow-xl hidden md:block max-w-[280px]">
              <p className="text-2xl font-bold mb-2">24/7 Care</p>
              <p className="text-blue-100 text-sm">Dedicated emergency and urgent care support when you need it most.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Setting the Standard for Modern Healthcare
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              At NovaCare Medical Center, we believe that healthcare should be personal, precise, and proactive. Our multidisciplinary team works together to provide accurate diagnoses and effective treatment plans tailored to your unique needs.
            </p>
            
            <ul className="space-y-4 mb-10">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0" />
                  <span className="text-slate-700 font-medium">{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-6 pt-6 border-t border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=150"
                alt="Chief Medical Officer"
                className="w-16 h-16 rounded-full object-cover border-2 border-slate-100"
              />
              <div>
                <p className="font-bold text-slate-900">Dr. Michael Chen</p>
                <p className="text-sm text-slate-500">Chief Medical Officer</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
