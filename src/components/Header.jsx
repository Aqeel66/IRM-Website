import React, { useState, useEffect } from 'react';
import { Globe, ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { cn } from '../utils/cn';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileActiveSub, setMobileActiveSub] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lng;
    setLangOpen(false);
  };

  const languages = [
    { name: 'English', code: 'en' },
    { name: 'Arabic', code: 'ar' },
    { name: 'Spanish', code: 'es' },
    { name: 'French', code: 'fr' },
  ];

  const navLinks = [
    { name: t('nav.home'), href: '#' },
    { 
      name: t('nav.about'), 
      href: '#about',
      submenu: [
        { name: t('nav.sub.who'), href: '#who-we-are' },
        { name: t('nav.sub.mandate'), href: '#mandate' },
        { name: t('nav.sub.how'), href: '#how-we-work' },
        { name: t('nav.sub.team'), href: '#leadership' },
        { name: t('nav.sub.offices'), href: '#presence' },
      ]
    },
    { 
      name: t('nav.services'), 
      href: '#services',
      submenu: [
        { name: t('services.items.governance'), href: '#financial-governance' },
        { name: t('services.items.shariah'), href: '#shariah-governance' },
        { name: t('services.items.transformation'), href: '#transformation' },
        { name: t('services.items.inclusion'), href: '#inclusion' },
        { name: t('services.items.risk'), href: '#risk-reporting' },
      ]
    },
    { 
      name: t('nav.experience'), 
      href: '#experience',
      isMega: true,
      groups: [
        {
          title: t('nav.mega.public_title'),
          items: [
            { name: t('nav.mega.public_inst'), href: '#public-institutions' },
            { name: t('nav.mega.ministries'), href: '#ministries' },
            { name: t('nav.mega.banks'), href: '#central-banks' },
            { name: t('nav.mega.multilateral'), href: '#multilateral' },
          ]
        },
        {
          title: t('nav.mega.finance_title'),
          items: [
            { name: t('nav.mega.finance_inst'), href: '#financial-institutions' },
            { name: t('nav.mega.banking'), href: '#banking' },
            { name: t('nav.mega.insurance'), href: '#insurance' },
            { name: t('nav.mega.wealth'), href: '#wealth' },
          ]
        },
        {
          title: t('nav.mega.markets_title'),
          items: [
            { name: t('nav.mega.markets'), href: '#markets' },
            { name: t('nav.mega.fintech'), href: '#fintech' },
            { name: t('nav.mega.esg'), href: '#esg' },
            { name: t('nav.mega.capacity'), href: '#capacity' },
          ]
        }
      ]
    },
    { 
      name: t('nav.verticals'), 
      href: '#verticals',
      submenu: [
        { name: t('nav.sub.partnerships'), href: '#partnerships' },
      ]
    },
    { 
      name: t('nav.insights'), 
      href: '#insights',
      submenu: [
        { name: t('nav.sub.publications'), href: '#publications' },
        { name: t('nav.sub.news'), href: '#news' },
      ]
    },
  ];

  const toggleMobileSub = (name) => {
    setMobileActiveSub(mobileActiveSub === name ? null : name);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'glass py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col leading-tight">
            <span className="text-4xl font-black font-serif tracking-tight text-brand-primary">
              IRM
            </span>
            <span className="text-[11px] font-serif font-medium text-brand-primary">
              {t('brand.full')}
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative group"
              onMouseEnter={() => setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a 
                href={link.href} 
                className={cn(
                  "nav-link flex items-center gap-1 py-2 text-[13px] font-medium uppercase tracking-wide",
                  activeDropdown === link.name && (link.submenu || link.isMega) && "text-brand-primary"
                )}
              >
                {link.name}
                {(link.submenu || link.isMega) && (
                  <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", activeDropdown === link.name && "rotate-180")} />
                )}
              </a>

              {/* Standard Submenu */}
              {link.submenu && (
                <AnimatePresence>
                  {activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className={cn(
                        "absolute top-full w-[300px] bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden py-4 px-2",
                        i18n.dir() === 'rtl' ? 'right-0' : 'left-0'
                      )}
                    >
                      {link.submenu.map((sub) => (
                        <a
                          key={sub.name}
                          href={sub.href}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-brand-ash group/sub transition-all"
                        >
                          <span className="text-[13px] font-medium text-slate-600 group-hover/sub:text-brand-primary leading-tight">
                            {sub.name}
                          </span>
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}

              {/* Mega Menu */}
              {link.isMega && (
                <AnimatePresence>
                  {activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className={cn(
                        "absolute top-full w-[800px] bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden p-8",
                        i18n.dir() === 'rtl' ? '-right-48' : '-left-48'
                      )}
                    >
                      <div className="grid grid-cols-3 gap-8">
                        {link.groups.map((group) => (
                          <div key={group.title}>
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                              {group.title}
                            </h4>
                            <div className="flex flex-col gap-1">
                              {group.items.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="flex items-center p-2 rounded-lg hover:bg-brand-ash group/mega transition-all"
                                >
                                  <span className="text-[13px] font-medium text-slate-600 group-hover/mega:text-brand-primary leading-tight">
                                    {item.name}
                                  </span>
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors uppercase"
            >
              <Globe className="w-4 h-4" />
              <span>{i18n.language}</span>
              <ChevronDown className={cn("w-4 h-4 transition-transform", langOpen && "rotate-180")} />
            </button>
            
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className={cn(
                    "absolute mt-2 w-32 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden",
                    i18n.dir() === 'rtl' ? 'left-0' : 'right-0'
                  )}
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className="w-full text-left px-4 py-2 text-sm text-slate-600 hover:bg-brand-ash hover:text-brand-primary transition-colors"
                    >
                      {lang.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t mt-4 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col gap-2 p-6 max-h-[80vh] overflow-y-auto">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.submenu || link.isMega ? (
                    <div>
                      <button 
                        onClick={() => toggleMobileSub(link.name)}
                        className="flex items-center justify-between w-full py-3 text-lg font-semibold text-slate-700"
                      >
                        {link.name}
                        <ChevronDown className={cn("w-5 h-5 transition-transform", mobileActiveSub === link.name && "rotate-180")} />
                      </button>
                      <AnimatePresence>
                        {mobileActiveSub === link.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="bg-brand-ash/50 rounded-2xl overflow-hidden mb-2"
                          >
                            {link.submenu ? (
                              link.submenu.map((sub) => (
                                <a
                                  key={sub.name}
                                  href={sub.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="block p-4 text-sm font-medium text-slate-600 hover:text-brand-primary border-b border-white last:border-0"
                                >
                                  {sub.name}
                                </a>
                              ))
                            ) : (
                              <div className="p-2">
                                {link.groups.map((group) => (
                                  <div key={group.title} className="mb-4">
                                    <h5 className="px-4 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">{group.title}</h5>
                                    {group.items.map((item) => (
                                      <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="flex items-center gap-3 p-3 text-sm font-medium text-slate-600 hover:text-brand-primary"
                                      >
                                        {item.name}
                                      </a>
                                    ))}
                                  </div>
                                ))}
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-3 text-lg font-semibold text-slate-700 hover:text-brand-primary"
                    >
                      {link.name}
                    </a>
                  )}
                </div>
              ))}
              <button className="btn-primary w-full mt-4 py-4">{t('nav.getStarted')}</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
