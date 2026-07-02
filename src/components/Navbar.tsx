import { motion } from 'motion/react';
import { Home, Grid, Send } from 'lucide-react';

export default function Navbar() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 p-6 md:p-10 pointer-events-none">
      <div className="max-w-[1800px] mx-auto flex justify-between items-center">
        {/* Brand - Left */}
        <div className="pointer-events-auto font-serif text-4xl md:text-5xl font-bold tracking-tighter text-dark cursor-pointer" onClick={() => scrollTo('top')}>
          St•
        </div>

        {/* Navigation Pill - Center */}
        <div className="pointer-events-auto bg-white/70 backdrop-blur-2xl border border-white/20 rounded-full px-5 py-2 flex items-center gap-4 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
          <button 
            onClick={() => scrollTo('top')}
            className="p-2 hover:bg-gray-100 rounded-full transition-all text-dark"
          >
            <Home className="w-5 h-5" />
          </button>
          <button 
            onClick={() => scrollTo('projects')}
            className="p-2 hover:bg-gray-100 rounded-full transition-all text-dark"
          >
            <Grid className="w-5 h-5" />
          </button>
          <button 
            onClick={() => scrollTo('contacts')}
            className="p-2 hover:bg-gray-100 rounded-full transition-all text-dark"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>

        {/* Contact Info - Right */}
        <div className="pointer-events-auto text-right hidden md:block text-[10px] font-bold text-dark/80 space-y-1 leading-none uppercase tracking-[0.2em]">
          <div>tg: <a href="https://t.me/neestyy" target="_blank" className="hover:text-primary transition-colors">@neestyy</a></div>
          <div>+7 910 450 56 23</div>
          <div>naumkana22@gmail.com</div>
        </div>
      </div>
    </header>
  );
}
