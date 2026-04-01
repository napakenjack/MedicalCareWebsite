import React from 'react';
import { motion } from 'motion/react';
import { processSteps } from '@/data/content';
import { CalendarCheck, Stethoscope, ClipboardList, HeartHandshake } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  CalendarCheck,
  Stethoscope,
  ClipboardList,
  HeartHandshake,
};

export function Process() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            How It Works
          </h2>
          <p className="text-lg text-slate-600">
            We've streamlined our patient journey to ensure you receive the care you need with minimal stress and maximum efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-slate-200 z-0" />

          {processSteps.map((step, index) => {
            const Icon = iconMap[step.icon] || CalendarCheck;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full bg-white border-4 border-blue-50 shadow-xl flex items-center justify-center mb-6 relative group hover:border-blue-100 transition-colors duration-300">
                  <div className="absolute inset-2 rounded-full bg-blue-600 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-blue-600 font-bold border border-slate-100">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 max-w-[250px]">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
