import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ArrowRight, ArrowLeft, Shield, Landmark, Scale, Users, FileText, Globe, BarChart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SplitContent = () => {
  const { t } = useTranslation();
  
  const services = [
    { 
      icon: <Scale className="w-8 h-8" />, 
      title: t('services.items.governance'), 
      desc: t('services.items.governance_desc') 
    },
    { 
      icon: <Shield className="w-8 h-8" />, 
      title: t('services.items.shariah'), 
      desc: t('services.items.shariah_desc') 
    },
    { 
      icon: <Landmark className="w-8 h-8" />, 
      title: t('services.items.transformation'), 
      desc: t('services.items.transformation_desc') 
    },
    { 
      icon: <Users className="w-8 h-8" />, 
      title: t('services.items.inclusion'), 
      desc: t('services.items.inclusion_desc') 
    },
    { 
      icon: <FileText className="w-8 h-8" />, 
      title: t('services.items.risk'), 
      desc: t('services.items.risk_desc') 
    },
    { 
      icon: <Globe className="w-8 h-8" />, 
      title: t('services.items.capacity'), 
      desc: t('services.items.capacity_desc') 
    },
    { 
      icon: <BarChart className="w-8 h-8" />, 
      title: t('services.items.risk'), 
      desc: t('services.items.risk_desc') 
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-brand-primary/10 rounded-3xl blur-2xl group-hover:bg-brand-primary/20 transition-all duration-500" />
              <img
                src="https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&q=80&w=2070"
                alt="Institutional Support"
                className="relative rounded-3xl shadow-2xl z-10 w-full h-[600px] object-cover"
              />
            </div>
          </motion.div>

          {/* Right Side: Boxes Slider */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-5xl md:text-6xl font-bold font-serif text-brand-deep mb-6 leading-tight">
              {t('services.title')}
            </h2>
            <p className="text-slate-600 text-[13px] leading-relaxed">
              {t('services.subtitle')}
            </p>

            <div className="relative">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={12}
                slidesPerView={2}
                breakpoints={{
                  640: { slidesPerView: 2, spaceBetween: 20 },
                  1024: { slidesPerView: 3, spaceBetween: 20 },
                }}
                navigation={{
                  nextEl: '.swiper-next',
                  prevEl: '.swiper-prev',
                }}
                className="pb-12"
              >
                {services.map((service, index) => (
                  <SwiperSlide key={index} className="!h-auto">
                    <div className="bg-brand-ash p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col min-h-[220px] sm:min-h-[280px] group/card hover:bg-white">
                      <div className="text-brand-primary mb-4 bg-white w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                        {React.cloneElement(service.icon, { className: "w-6 h-6" })}
                      </div>
                      <h3 className="text-[12px] sm:text-[14px] font-bold text-brand-deep mb-2 sm:mb-3 leading-tight">{service.title}</h3>
                      <p className="text-slate-500 text-[11px] sm:text-[13px] leading-relaxed mb-4 flex-grow">
                        {service.desc}
                      </p>
                      <button className="flex items-center gap-2 text-brand-primary font-semibold text-[13px] hover:gap-4 transition-all mt-auto">
                        {t('services.learnMore')} <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation */}
              <div className="flex gap-4 mt-4">
                <button className="swiper-prev p-3 rounded-full border border-slate-200 text-slate-400 hover:border-brand-primary hover:text-brand-primary transition-all">
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button className="swiper-next p-3 rounded-full border border-slate-200 text-slate-400 hover:border-brand-primary hover:text-brand-primary transition-all">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitContent;
