import React from 'react';
import { motion } from 'motion/react';
import { testimonials } from '@/data/content';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            What Our Patients Say
          </h2>
          <p className="text-lg text-slate-600">
            Real stories from individuals and families who trust us with their health and well-being.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-slate-200 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                <Quote className="absolute top-4 right-4 h-12 w-12 text-slate-100 group-hover:text-blue-50 transition-colors duration-300 z-0" />
                <CardContent className="p-8 relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 italic mb-8 flex-grow leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="mt-auto">
                    <p className="font-bold text-slate-900">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
