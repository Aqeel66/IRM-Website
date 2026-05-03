import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, User, Heart, MessageSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const LinkedinIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const LinkedInFeed = () => {
  const { t } = useTranslation();
  const linkedInUrl = "https://www.linkedin.com/company/inclusiveresourcemanagement/posts/?feedView=all";

  const posts = [
    {
      id: 1,
      date: "Oct 24, 2023",
      text: "We are proud to announce our latest partnership in the CIS region, focusing on developing inclusive financial frameworks for emerging markets.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2071",
      likes: 124,
      comments: 18
    },
    {
      id: 2,
      date: "Oct 15, 2023",
      text: "Our new Islamic Microfinance Toolkit is now being piloted across 3 continents. Transforming lives through ethical financial inclusion.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015",
      likes: 89,
      comments: 12
    },
    {
      id: 3,
      date: "Sep 28, 2023",
      text: "The future of finance is digital. Read our latest insights on how FinTech is reshaping Shari'ah governance for the next decade.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
      likes: 215,
      comments: 34
    },
    {
      id: 4,
      date: "Sep 12, 2023",
      text: "Strategic consulting for Islamic capital markets. Helping regulators build robust Sukuk frameworks for sustainable growth.",
      image: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=2070",
      likes: 156,
      comments: 21
    },
    {
      id: 5,
      date: "Aug 30, 2023",
      text: "Digital transformation is not just about technology; it's about people and inclusive systems. Proud to be leading this change.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2070",
      likes: 312,
      comments: 45
    }
  ];

  // Double the posts for seamless loop
  const displayPosts = [...posts, ...posts];

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-[#0077B5] rounded-lg">
                <LinkedinIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-[#0077B5] font-bold uppercase tracking-widest text-[11px]">
                LinkedIn Live Feed
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-brand-deep">
              Latest Insights from IRM
            </h2>
          </div>
          <a 
            href={linkedInUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 bg-[#0077B5] text-white rounded-full font-bold transition-all hover:bg-[#005582] shadow-xl hover:shadow-blue-200/50"
          >
            Visit Our Company Page
            <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-hidden">
        <motion.div 
          className="flex gap-8 whitespace-nowrap py-4"
          animate={{ x: [0, "-50%"] }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          whileHover={{ transition: { duration: 60 } }} // Slow down on hover
        >
          {displayPosts.map((post, index) => (
            <div 
              key={`${post.id}-${index}`}
              className="inline-block w-[400px] bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt="Post preview" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-6 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-bold border border-white/30 uppercase tracking-widest">
                    View Post
                  </span>
                </div>
              </div>
              <div className="p-8 whitespace-normal">
                <div className="flex items-center gap-4 mb-6 text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <LinkedinIcon className="w-3 h-3 text-[#0077B5]" />
                    LinkedIn
                  </div>
                </div>
                <p className="text-slate-600 mb-8 leading-relaxed line-clamp-3 font-medium h-[72px]">
                  {post.text}
                </p>
                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex gap-6">
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <Heart className="w-4 h-4" />
                      <span className="text-xs font-bold">{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <MessageSquare className="w-4 h-4" />
                      <span className="text-xs font-bold">{post.comments}</span>
                    </div>
                  </div>
                  <a 
                    href={linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0077B5] font-bold text-[11px] uppercase tracking-wider flex items-center gap-1 group/link"
                  >
                    Read on LinkedIn
                    <ExternalLink className="w-3 h-3 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Decorative gradient edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default LinkedInFeed;
