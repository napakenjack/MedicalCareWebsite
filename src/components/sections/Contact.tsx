import React, { useState } from 'react';
import { motion } from 'motion/react';
import { clinicInfo } from '@/data/content';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, AlertCircle } from 'lucide-react';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-slate-50 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Get in Touch & Book Your Visit
            </h2>
            <p className="text-lg text-slate-600 mb-10">
              We are here to help you. Schedule an appointment or reach out with any questions about our services.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">Call Us</h3>
                  <p className="text-slate-600 mb-1">For appointments and general inquiries</p>
                  <a href={`tel:${clinicInfo.phone.replace(/[^0-9+]/g, '')}`} className="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
                    {clinicInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">Visit Us</h3>
                  <p className="text-slate-600">{clinicInfo.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">Working Hours</h3>
                  <p className="text-slate-600">{clinicInfo.workingHours}</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-100 rounded-xl p-6 flex gap-4 items-start">
              <AlertCircle className="h-6 w-6 text-red-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-red-900 mb-1">Medical Emergency?</h4>
                <p className="text-red-800 text-sm mb-2">If you are experiencing a life-threatening emergency, please call 911 immediately.</p>
                <p className="text-red-900 font-bold">Urgent Care: {clinicInfo.emergencyPhone}</p>
              </div>
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Request an Appointment</h3>
              
              {isSuccess ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-green-900 mb-2">Request Received!</h4>
                  <p className="text-green-800">
                    Thank you for reaching out. Our team will contact you shortly to confirm your appointment details.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-slate-700">First Name</label>
                      <Input id="firstName" required placeholder="John" className="h-12" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-slate-700">Last Name</label>
                      <Input id="lastName" required placeholder="Doe" className="h-12" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone Number</label>
                      <Input id="phone" type="tel" required placeholder="+1 (555) 000-0000" className="h-12" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address</label>
                      <Input id="email" type="email" required placeholder="john@example.com" className="h-12" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-slate-700">Department / Service</label>
                    <select 
                      id="service" 
                      className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      required
                    >
                      <option value="">Select a service...</option>
                      <option value="general">General Consultation</option>
                      <option value="cardiology">Cardiology</option>
                      <option value="pediatrics">Pediatrics</option>
                      <option value="dermatology">Dermatology</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="date" className="text-sm font-medium text-slate-700">Preferred Date</label>
                    <Input id="date" type="date" required className="h-12" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-700">Additional Notes (Optional)</label>
                    <Textarea id="message" placeholder="Please briefly describe your symptoms or reason for visit..." className="min-h-[120px] resize-y" />
                  </div>

                  <Button type="submit" size="lg" className="w-full h-14 text-base" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Request Appointment'}
                  </Button>
                  
                  <p className="text-xs text-center text-slate-500 mt-4">
                    By submitting this form, you agree to our privacy policy regarding the handling of your medical information.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
