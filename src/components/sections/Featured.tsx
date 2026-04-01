import React from 'react';
import { motion } from 'motion/react';
import { featuredPrograms } from '@/data/content';
import { Button } from '@/components/ui/button';

export function Featured() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4 block">
              Specialized Care
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Featured Health Programs
            </h2>
            <p className="text-lg text-slate-600">
              Discover our comprehensive treatment packages designed for proactive health management and specialized recovery.
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex" asChild>
            <a href="#contact">View All Programs</a>
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {featuredPrograms.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 bg-white flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {program.title}
                </h3>
                <p className="text-slate-600 mb-8 flex-grow">
                  {program.description}
                </p>
                <Button variant="secondary" className="w-full" asChild>
                  <a href="#contact">Learn More</a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" className="w-full" asChild>
            <a href="#contact">View All Programs</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
