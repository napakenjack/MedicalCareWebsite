import React from 'react';
import { trustMetrics } from '@/data/content';
import { ShieldCheck, Clock, Award, Users } from 'lucide-react';

export function TrustBar() {
  const icons = [Award, Users, ShieldCheck, Clock];

  return (
    <section className="bg-blue-600 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-blue-500/50">
          {trustMetrics.map((metric, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div key={index} className="flex flex-col items-center text-center px-4">
                <Icon className="h-8 w-8 text-blue-200 mb-3" />
                <span className="text-3xl md:text-4xl font-bold tracking-tight mb-1">
                  {metric.value}
                </span>
                <span className="text-sm md:text-base text-blue-100 font-medium">
                  {metric.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
