import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, ExternalLink, Calendar, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const LinkedInFeed = () => {
  const { t } = useTranslation();

  const mockPosts = [
    {
      id: 1,
      date: "Oct 24, 2023",
      author: "IRM Global",
      text: "We are proud to announce our latest partnership in the CIS region, focusing on developing inclusive financial frameworks for emerging markets.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2071",
      likes: 124,
      comments: 18
    },
    {
      id: 2,
      date: "Oct 15, 2023",
      author: "IRM Global",
      text: "Our new Islamic Microfinance Toolkit is now being piloted across 3 continents. Transforming lives through ethical financial inclusion.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015",
      likes: 89,
      comments: 12
    },
    {
      id: 3,
      date: "Sep 28, 2023",
      author: "IRM Global",
      text: "The future of finance is digital. Read our latest insights on how FinTech is reshaping Shari'ah governance for the next decade.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
      likes: 215,
      comments: 34
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Linkedin className="w-5 h-5 text-white" />
              </div>
              <span className="text-blue-600 font-bold uppercase tracking-widest text-[11px]">
                LinkedIn Updates
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-brand-deep">
              Latest Insights & News
            </h2>
          </div>
          <a 
            href="https://www.linkedin.com/company/inclusiveresourcemanagement/posts/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-brand-deep text-white rounded-full font-medium transition-all hover:bg-blue-700 shadow-xl hover:shadow-blue-200/50"
          >
            Follow on LinkedIn
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-brand-ash rounded-3xl overflow-hidden border border-slate-100 group hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt="Post preview" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 p-2 bg-white/90 backdrop-blur-md rounded-xl text-[10px] font-bold text-brand-deep uppercase tracking-tighter">
                  New Update
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6 text-slate-400 text-[11px] font-medium uppercase tracking-wider">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5" />
                    {post.author}
                  </div>
                </div>
                <p className="text-slate-600 mb-8 leading-relaxed line-clamp-3 font-medium">
                  "{post.text}"
                </p>
                <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                  <div className="flex gap-4 text-slate-400 text-xs font-semibold">
                    <span>{post.likes} Likes</span>
                    <span>{post.comments} Comments</span>
                  </div>
                  <a 
                    href="https://www.linkedin.com/company/inclusiveresourcemanagement/posts/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-bold text-xs uppercase tracking-wider flex items-center gap-1 group/link"
                  >
                    Read More
                    <ExternalLink className="w-3 h-3 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LinkedInFeed;
