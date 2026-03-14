import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  Video, 
  MonitorSmartphone, 
  Megaphone, 
  Instagram, 
  Phone, 
  ArrowRight,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import TestimonialSliderDemo from './components/TestimonialSliderDemo';
import VideoProductionView from './components/VideoProductionView';
import DigitalMarketingView from './components/DigitalMarketingView';

import { ThemeToggle } from './components/ThemeToggle';

export default function App() {
  const [activeView, setActiveView] = React.useState<'home' | 'video-production' | 'digital-marketing'>('home');

  const handlePackageSelect = (packageName: string, price: string, features: string[]) => {
    const subject = encodeURIComponent(`Inquiry: ${packageName} Package`);
    const body = encodeURIComponent(`Hello Harshal Digital Solution Team,\n\nI am interested in the ${packageName} Package (${price}) for my brand.\n\nFeatures:\n${features.map(f => `- ${f}`).join('\n')}\n\n`);
    window.location.href = `mailto:hello@harshaldigitalsolution.com?subject=${subject}&body=${body}`;
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const packageSelect = formData.get('package') as string;
    const brandDetails = formData.get('brandDetails') as string;

    let packageName = 'Custom';
    let price = 'Custom Pricing';
    let features: string[] = [];

    if (packageSelect === 'basic') {
      packageName = 'Basic';
      price = '₹5,000';
      features = ["5 Edited Reels", "3 Creatives", "Basic Support"];
    } else if (packageSelect === 'standard') {
      packageName = 'Standard';
      price = '₹15,000';
      features = ["10 Edited Reels", "5 Creatives", "Logo Design", "Priority Support"];
    } else if (packageSelect === 'premium') {
      packageName = 'Premium';
      price = '₹50,000';
      features = ["15 Edited Reels", "Logo & Website Design", "Full Social Media Handling", "24/7 Premium Support", "Monthly Strategy Call"];
    }

    const subject = encodeURIComponent(`Inquiry: ${packageName} Package - ${name || 'New Client'}`);
    const body = encodeURIComponent(`Hello Harshal Digital Solution Team,\n\nI am interested in the ${packageName} Package (${price}) for my brand.\n\nFeatures:\n${features.map(f => `- ${f}`).join('\n')}\n\nBrand Details:\n${brandDetails}\n\nContact Info:\nName: ${name}\nEmail: ${email}`);
    
    window.location.href = `mailto:hello@harshaldigitalsolution.com?subject=${subject}&body=${body}`;
  };

  if (activeView === 'video-production') {
    return <VideoProductionView onBack={() => setActiveView('home')} />;
  }

  if (activeView === 'digital-marketing') {
    return <DigitalMarketingView onBack={() => setActiveView('home')} />;
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-amber-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-zinc-950" />
            </div>
            <span className="font-bold text-xl tracking-tight">HDS</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#services" className="hover:text-zinc-50 transition-colors">Services</a>
            <a href="#pricing" className="hover:text-zinc-50 transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-zinc-50 transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a 
              href="#contact"
              className="px-5 py-2.5 rounded-full bg-zinc-100 text-zinc-900 text-sm font-semibold hover:bg-white transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium mb-8 border border-amber-500/20">
              <Sparkles className="w-4 h-4" />
              Harshal Digital Solution
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[1.1]">
              We Turn Attention <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-300">
                Into Sales.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              Expert digital marketing, promotional videos, and website creation tailored to scale your brand and maximize ROI.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#pricing"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-amber-500 text-zinc-950 font-semibold hover:bg-amber-400 transition-colors flex items-center justify-center gap-2"
              >
                View Packages <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-zinc-900 border border-zinc-800 font-semibold hover:bg-zinc-800 transition-colors flex items-center justify-center"
              >
                Book a Call
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-zinc-900/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Core Services</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Everything you need to establish a dominant online presence.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Megaphone className="w-6 h-6 text-amber-400" />,
                title: "Digital Marketing",
                description: "Data-driven campaigns that target your ideal audience and convert clicks into loyal customers.",
                onClick: () => setActiveView('digital-marketing')
              },
              {
                icon: <Video className="w-6 h-6 text-amber-400" />,
                title: "Video Production",
                description: "High-quality, engaging video content including Reels and Creatives that tell your brand's story.",
                onClick: () => setActiveView('video-production')
              },
              {
                icon: <MonitorSmartphone className="w-6 h-6 text-amber-400" />,
                title: "Website Creation",
                description: "Modern, responsive, and conversion-optimized websites that serve as your digital storefront."
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                onClick={service.onClick}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-8 rounded-3xl bg-zinc-950 border border-white/5 hover:border-amber-500/30 transition-colors group ${service.onClick ? 'cursor-pointer' : ''}`}
              >
                <div className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Transparent Pricing</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Choose the perfect package to accelerate your growth.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Package */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 flex flex-col"
            >
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Basic Package</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">₹5,000</span>
                  <span className="text-zinc-500">/mo</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {[
                  "5 Edited Reels",
                  "3 Creatives",
                  "Basic Support"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => handlePackageSelect('Basic', '₹5,000', ["5 Edited Reels", "3 Creatives", "Basic Support"])}
                className="w-full py-3 rounded-xl bg-zinc-800 font-medium hover:bg-zinc-700 transition-colors"
              >
                Choose Basic
              </button>
            </motion.div>

            {/* Standard Package */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-3xl bg-zinc-900 border border-amber-500/50 relative flex flex-col shadow-2xl shadow-amber-500/10"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-500 text-zinc-950 text-xs font-bold uppercase tracking-wider rounded-full">
                Most Popular
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Standard Package</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">₹15,000</span>
                  <span className="text-zinc-500">/mo</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {[
                  "10 Edited Reels",
                  "5 Creatives",
                  "Logo Design",
                  "Priority Support"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => handlePackageSelect('Standard', '₹15,000', ["10 Edited Reels", "5 Creatives", "Logo Design", "Priority Support"])}
                className="w-full py-3 rounded-xl bg-amber-500 text-zinc-950 font-semibold hover:bg-amber-400 transition-colors"
              >
                Choose Standard
              </button>
            </motion.div>

            {/* Premium Package */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 flex flex-col"
            >
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Premium Package</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">₹50,000</span>
                  <span className="text-zinc-500">/mo</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {[
                  "15 Edited Reels",
                  "Logo & Website Design",
                  "Full Social Media Handling",
                  "24/7 Premium Support",
                  "Monthly Strategy Call"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => handlePackageSelect('Premium', '₹50,000', ["15 Edited Reels", "Logo & Website Design", "Full Social Media Handling", "24/7 Premium Support", "Monthly Strategy Call"])}
                className="w-full py-3 rounded-xl bg-zinc-800 font-medium hover:bg-zinc-700 transition-colors"
              >
                Choose Premium
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What Our Clients Say</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Don't just take our word for it. Hear from the brands we've helped grow.</p>
          </div>
          <TestimonialSliderDemo />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-amber-950/20 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          {/* Contact Form */}
          <div className="max-w-xl mx-auto mb-24 bg-zinc-950 border border-white/5 rounded-[2rem] p-6 md:p-8 shadow-2xl">
            <form className="space-y-4" onSubmit={handleFormSubmit}>
              <div>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  className="w-full bg-black border border-white/5 rounded-2xl px-6 py-4 text-zinc-300 placeholder:text-zinc-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all"
                  required
                />
              </div>
              <div>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email Address" 
                  className="w-full bg-black border border-white/5 rounded-2xl px-6 py-4 text-zinc-300 placeholder:text-zinc-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all"
                  required
                />
              </div>
              <div className="relative">
                <select 
                  name="package"
                  className="w-full bg-black border border-white/5 rounded-2xl px-6 py-4 text-zinc-300 appearance-none focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all"
                  defaultValue=""
                  required
                >
                  <option value="" disabled className="text-zinc-600">Select Package</option>
                  <option value="basic">Basic Package (₹5,000)</option>
                  <option value="standard">Standard Package (₹15,000)</option>
                  <option value="premium">Premium Package (₹50,000)</option>
                </select>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center shadow-[0_0_15px_rgba(251,191,36,0.4)]">
                    <div className="w-2 h-2 rounded-full bg-black"></div>
                  </div>
                  <ChevronDown className="w-4 h-4 text-zinc-500" />
                </div>
              </div>
              <div>
                <textarea 
                  name="brandDetails"
                  placeholder="Tell us about your brand" 
                  rows={4}
                  className="w-full bg-black border border-white/5 rounded-2xl px-6 py-4 text-zinc-300 placeholder:text-zinc-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all resize-none"
                  required
                ></textarea>
              </div>
              <button type="submit" className="w-full py-4 rounded-2xl bg-amber-500 text-zinc-950 font-bold text-lg hover:bg-amber-400 transition-colors mt-2">
                Submit Request
              </button>
            </form>
          </div>

          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Ready to scale your business?</h2>
            <p className="text-zinc-400 mb-12 text-lg">
              Let's discuss how we can turn attention into sales for your brand.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="tel:+919876543210" 
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-zinc-900 border border-white/10 hover:border-amber-500/50 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                <Phone className="w-5 h-5 text-amber-400" />
              </div>
              <div className="text-left">
                <div className="text-sm text-zinc-500">Call Us Directly</div>
                <div className="font-semibold">+91 98765 43210</div>
              </div>
            </a>
            
            <a 
              href="https://instagram.com/harshal_digital_solution" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-zinc-900 border border-white/10 hover:border-amber-500/50 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                <Instagram className="w-5 h-5 text-amber-400" />
              </div>
              <div className="text-left">
                <div className="text-sm text-zinc-500">Follow on Instagram</div>
                <div className="font-semibold">@harshal_digital_solution</div>
              </div>
            </a>
          </div>
        </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-zinc-500 text-sm border-t border-white/5">
        <p>© {new Date().getFullYear()} Harshal Digital Solution. All rights reserved.</p>
      </footer>
    </div>
  );
}
