import React from 'react';
import { motion } from 'motion/react';
import { faqs } from '@/data/content';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="sticky top-32"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Find answers to common questions about our services, appointments, and insurance policies.
              </p>
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h3 className="font-bold text-blue-900 mb-2">Still have questions?</h3>
                <p className="text-blue-800 text-sm mb-4">
                  Our support team is ready to help you with any specific inquiries.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2 w-full"
                >
                  Contact Support
                </a>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-slate-200">
                    <AccordionTrigger className="text-left text-lg font-semibold text-slate-800 hover:text-blue-600">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 text-base leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
