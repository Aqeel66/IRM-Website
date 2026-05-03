import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

const StatsCounter = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const stats = [
    { label: t('stats.projects'), value: '1,250+', color: 'text-blue-400' },
    { label: t('stats.clients'), value: '98%', color: 'text-emerald-400' },
    { label: t('stats.countries'), value: '45', color: 'text-amber-400' },
    { label: t('stats.awards'), value: '12', color: 'text-rose-400' },
  ];

  return (
    <section id="experience" ref={ref} className="py-20 bg-brand-deep text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={`text-4xl md:text-6xl font-bold mb-2 ${stat.color}`}>
                {stat.value}
              </div>
              <p className="text-slate-400 font-medium uppercase tracking-wider text-[13px]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
