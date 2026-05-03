import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FacebookIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const TwitterIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-brand-deep text-white pt-20 pb-10" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div>
            <div className="flex flex-col leading-tight mb-8">
              <span className="text-4xl font-black font-serif tracking-tight text-white">IRM</span>
              <span className="text-sm font-serif font-medium text-brand-primary">
                Inclusive Resource Management
              </span>
            </div>
            <p className="text-slate-400 mb-8 text-[13px] leading-relaxed">
              {t('footer.desc')}
            </p>
            <div className="flex gap-4">
              {[FacebookIcon, TwitterIcon, LinkedinIcon, InstagramIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:bg-brand-primary hover:text-white transition-all transform hover:-translate-y-1"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-[14px] font-bold mb-6 font-serif uppercase tracking-wider text-brand-primary">{t('footer.quickLinks')}</h4>
            <ul className="space-y-4">
              {[
                { name: t('nav.home'), href: '#' },
                { name: t('nav.about'), href: '#about' },
                { name: t('nav.services'), href: '#services' },
                { name: t('nav.experience'), href: '#experience' },
                { name: t('nav.verticals'), href: '#verticals' },
                { name: t('nav.insights'), href: '#insights' }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-brand-primary transition-colors flex items-center gap-2 group text-[13px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-brand-primary transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-[14px] font-bold mb-6 font-serif uppercase tracking-wider text-brand-primary">{t('footer.getInTouch')}</h4>
            <div className="space-y-6">
              {/* Headquarters */}
              <div>
                <h5 className="text-white text-[13px] font-bold mb-1">{t('footer.headquarters')}</h5>
                <p className="text-slate-400 text-[13px]">{t('footer.hq_address')}</p>
              </div>

              {/* Representative Offices */}
              <div>
                <h5 className="text-white text-[13px] font-bold mb-1">{t('footer.rep_offices')}</h5>
                <p className="text-slate-400 text-[13px]">{t('footer.uae_rak')}</p>
                <p className="text-slate-400 text-[13px]">{t('footer.uk_london')}</p>
              </div>

              {/* Contact Us */}
              <div>
                <h5 className="text-white text-[13px] font-bold mb-1">{t('footer.contact_us')}</h5>
                <p className="text-brand-primary text-[13px] font-medium hover:underline cursor-pointer mb-1">
                  {t('footer.inst_enquiries')}
                </p>
                <a href={`mailto:${t('footer.email')}`} className="text-slate-400 text-[13px] hover:text-brand-primary transition-colors">
                  {t('footer.email')}
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-[14px] font-bold mb-6 font-serif uppercase tracking-wider text-brand-primary">{t('footer.newsletter')}</h4>
            <p className="text-slate-400 mb-6 text-[13px] leading-relaxed">{t('footer.newsletter_desc')}</p>
            <form className="relative">
              <input
                type="email"
                placeholder={t('footer.placeholder')}
                className="w-full bg-slate-800 border-none rounded-full px-6 py-4 text-white focus:ring-2 focus:ring-brand-primary transition-all outline-none text-[13px]"
              />
              <button className="absolute right-2 top-2 p-2 bg-brand-primary rounded-full hover:bg-brand-primary/80 transition-all">
                <Send className="w-5 h-5 text-white" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 text-slate-400 text-[13px]">
            <p className="hover:text-white transition-colors cursor-default">{t('footer.rights_full')}</p>
            <span className="hidden md:block w-px h-4 bg-slate-800" />
            <p className="font-medium text-brand-primary hover:text-brand-primary/80 transition-colors cursor-default">{t('footer.powered_by')}</p>
          </div>
          <div className="flex gap-8 text-[13px] text-slate-400">
            <a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer.terms')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer.cookies')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
