import React from 'react';
import { motion } from 'motion/react';
import { Video, SlidersHorizontal, Camera, ArrowLeft } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface VideoProductionViewProps {
  onBack: () => void;
}

export default function VideoProductionView({ onBack }: VideoProductionViewProps) {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-amber-500/30 relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1589859762194-eaae75c61f64?q=80&w=2000&auto=format&fit=crop")',
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
              Video Production
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Professional cinematography, expert editing, and premium model shoots for high-impact brands.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Video Shooting */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="p-10 rounded-3xl bg-zinc-950 border border-white/5 hover:border-white/10 transition-colors flex flex-col"
            >
              <div className="mb-8">
                <Video className="w-12 h-12 text-amber-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Video Shooting</h3>
              <p className="text-zinc-400 leading-relaxed">
                Professional camera work using 4k cinema gear. We capture every detail with creative energy.
              </p>
            </motion.div>

            {/* Video Editing */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-10 rounded-3xl bg-zinc-950 border border-amber-500/50 shadow-[0_0_30px_rgba(245,158,11,0.1)] flex flex-col relative"
            >
              <div className="mb-8">
                <SlidersHorizontal className="w-12 h-12 text-amber-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Video Editing</h3>
              <p className="text-zinc-400 leading-relaxed">
                Advanced post-production, color grading, and dynamic motion graphics to make your content pop.
              </p>
            </motion.div>

            {/* Model Shoots */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-10 rounded-3xl bg-zinc-950 border border-white/5 hover:border-white/10 transition-colors flex flex-col"
            >
              <div className="mb-8">
                <Camera className="w-12 h-12 text-amber-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Model Shoots</h3>
              <p className="text-zinc-400 leading-relaxed">
                High-end fashion and lifestyle shoots with professional models and studio lighting setups.
              </p>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
