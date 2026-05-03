import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const InstitutionalMandate = () => {
  const { t } = useTranslation();
  const mandatePoints = t('mandate.points', { returnObjects: true });
  
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-brand-primary font-semibold tracking-widest text-[11px] uppercase mb-4 block">
              {t('mandate.badge')}
            </span>
            <h2 className="text-5xl md:text-6xl font-bold font-serif text-brand-deep mb-8 leading-tight">
              {t('mandate.title')}
            </h2>
            <p className="text-slate-600 text-[13px] leading-relaxed mb-10 max-w-xl">
              {t('mandate.description')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {mandatePoints.map((point, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="text-[14px] font-bold text-brand-deep mb-1">{point.title}</h4>
                    <p className="text-slate-500 text-[13px] leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Image Box */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-brand-primary/5 rounded-[2rem] blur-2xl group-hover:bg-brand-primary/10 transition-all duration-700" />
              <div className="relative overflow-hidden rounded-[2rem] shadow-2xl border-8 border-white">
                <img
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2069"
                  alt="Institutional Mandate"
                  className="w-full h-[500px] object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/40 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                  <p className="text-white text-[13px] font-medium leading-relaxed">
                    {t('mandate.quote')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InstitutionalMandate;
