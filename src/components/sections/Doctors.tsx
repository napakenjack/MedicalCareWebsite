import React from 'react';
import { motion } from 'motion/react';
import { doctors } from '@/data/content';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarCheck } from 'lucide-react';

export function Doctors() {
  return (
    <section id="specialists" className="py-20 lg:py-32 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Meet Our Specialists
          </h2>
          <p className="text-lg text-slate-600">
            Our team of internationally recognized doctors brings decades of experience and a commitment to exceptional patient care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden border-slate-200 hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader className="pb-4">
                  <h3 className="text-xl font-bold text-slate-900">{doctor.name}</h3>
                  <p className="text-blue-600 font-medium">{doctor.specialty}</p>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <div className="flex justify-between text-sm text-slate-500 border-b border-slate-100 pb-4">
                    <span>{doctor.experience}</span>
                    <span className="font-medium text-slate-700">{doctor.credentials}</span>
                  </div>
                  <p className="text-sm text-slate-600 line-clamp-3 mb-4">
                    {doctor.bio}
                  </p>
                  <Button variant="outline" className="w-full mt-auto" asChild>
                    <a href="#contact">
                      <CalendarCheck className="mr-2 h-4 w-4" />
                      Book Visit
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
