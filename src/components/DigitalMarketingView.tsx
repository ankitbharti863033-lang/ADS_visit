import React from 'react';
import { motion } from 'motion/react';
import { Instagram, ArrowLeft, Facebook, Search, Mail } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface DigitalMarketingViewProps {
  onBack: () => void;
}

export default function DigitalMarketingView({ onBack }: DigitalMarketingViewProps) {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-amber-500/30 relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop")',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/90 to-zinc-950" />

      {/* Navigation */}
      <nav className="relative z-50 border-b border-white/5 bg-zinc-950/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-zinc-400 hover:text-zinc-50 transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
          <ThemeToggle />
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-24 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-24"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-amber-500 uppercase">
              Digital Marketing
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Data-driven campaigns that target your ideal audience and convert clicks into loyal customers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Instagram Ads */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="p-10 rounded-3xl bg-zinc-900 border border-amber-500/50 shadow-[0_0_30px_rgba(245,158,11,0.05)] flex flex-col"
            >
              <div className="mb-8">
                <Instagram className="w-12 h-12 text-amber-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Instagram Ads</h3>
              <p className="text-zinc-400 leading-relaxed">
                Highly targeted visual campaigns designed to capture attention and drive engagement in the feed and stories.
              </p>
            </motion.div>

            {/* Facebook Ads */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-10 rounded-3xl bg-zinc-900 border border-white/5 hover:border-amber-500/30 transition-colors flex flex-col"
            >
              <div className="mb-8">
                <Facebook className="w-12 h-12 text-amber-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Facebook Ads</h3>
              <p className="text-zinc-400 leading-relaxed">
                Comprehensive ad strategies leveraging Facebook's powerful demographic targeting for maximum ROI.
              </p>
            </motion.div>

            {/* Google Ads */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-10 rounded-3xl bg-zinc-900 border border-white/5 hover:border-amber-500/30 transition-colors flex flex-col"
            >
              <div className="mb-8">
                <Search className="w-12 h-12 text-amber-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Google Ads</h3>
              <p className="text-zinc-400 leading-relaxed">
                Search and display campaigns that put your brand directly in front of customers actively looking for your services.
              </p>
            </motion.div>

            {/* Email Marketing */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="p-10 rounded-3xl bg-zinc-900 border border-white/5 hover:border-amber-500/30 transition-colors flex flex-col"
            >
              <div className="mb-8">
                <Mail className="w-12 h-12 text-amber-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Email Marketing</h3>
              <p className="text-zinc-400 leading-relaxed">
                Automated sequences and newsletters that nurture leads and turn one-time buyers into repeat customers.
              </p>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
