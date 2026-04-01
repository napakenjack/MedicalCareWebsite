import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Stethoscope, HeartPulse, Baby, Sparkles, Brain, Bone } from 'lucide-react';
import { services } from '@/data/content';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const iconMap: Record<string, React.ElementType> = {
  Stethoscope,
  HeartPulse,
  Baby,
  Sparkles,
  Brain,
  Bone,
};

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Comprehensive Medical Services
          </h2>
          <p className="text-lg text-slate-600">
            From preventive care to complex surgical procedures, our specialized departments provide world-class treatment under one roof.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Stethoscope;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-slate-200 group">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                      <Icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-6">
                      {service.description}
                    </CardDescription>
                    <a
                      href="#contact"
                      className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 group-hover:underline"
                    >
                      Book Consultation
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
