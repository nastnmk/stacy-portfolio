import { motion } from 'motion/react';
import stacyPhoto from '../../assets/image 7 (1).png';
import heroBg from '../../assets/background.png';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex flex-col items-center justify-start md:justify-center pt-28 md:pt-20 overflow-hidden">
      {/* Background Image */}
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 z-0 w-full h-full object-cover"
      />

      {/* Mobile: Photo pinned to the bottom edge of the hero */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 w-[440px] max-w-[95vw] z-20 pointer-events-none"
      >
        <img
          src={stacyPhoto}
          alt="Stacy Naumkina"
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </motion.div>

      {/* Desktop: Photo pinned to the bottom edge of the background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 w-[560px] z-20 pointer-events-none"
      >
        <img
          src={stacyPhoto}
          alt="Stacy Naumkina"
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </motion.div>

      {/* Mobile: Button riding onto the photo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="md:hidden absolute bottom-16 left-1/2 -translate-x-1/2 z-30"
      >
        <a
          href="https://t.me/neestyy"
          target="_blank"
          className="bg-[#5247FF] text-white px-16 py-5 rounded-full font-bold text-sm tracking-[0.2em] shadow-[0_10px_40px_rgba(82,71,255,0.3)] inline-block uppercase whitespace-nowrap"
        >
          LET'S CHAT!
        </a>
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl px-6 flex flex-col items-center translate-y-0 md:-translate-y-16">
        {/* Massive Title Section */}
        <div className="relative w-full text-center flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[12.5vw] md:text-[192px] font-serif leading-[0.8] tracking-tighter text-dark select-none relative z-10 translate-y-6 md:translate-y-24"
          >
            <span className="whitespace-nowrap">I'm <span className="italic ml-1 md:ml-4 inline-block">Product</span></span><br />
            <span className="whitespace-nowrap">Designer <span className="not-italic">·</span> <span className="italic ml-3 md:ml-8 inline-block">Manager</span></span>
          </motion.h1>
        </div>

        {/* Mobile: Hey text + stats under the title */}
        <div className="md:hidden mt-10 flex flex-col items-center gap-3 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-[360px] text-base font-medium leading-tight text-dark/90"
          >
            Hey, I'm Stacy Naumkina, I believe visuals can change how people perceive any project.
          </motion.div>
          <div className="max-w-[360px] text-base font-medium leading-tight text-dark/70">
            10+ projects successfully completed
          </div>
        </div>

        {/* Bottom Section with Button and Side Texts (desktop) */}
        <div className="hidden mt-72 md:mt-[26rem] w-full relative z-30 max-w-7xl md:flex md:flex-row items-center justify-center min-h-[120px]">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="md:absolute left-0 top-1/2 md:[transform:translateY(calc(-50%+5rem))] text-left max-w-[280px] text-base md:text-xl font-medium leading-tight text-dark/90"
          >
            Hey, I'm Stacy Naumkina, I believe visuals can change how people perceive any project.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="z-10 translate-y-6 md:translate-y-14"
          >
            <a 
              href="https://t.me/neestyy" 
              target="_blank"
              className="bg-[#5247FF] text-white px-20 py-6 rounded-full font-bold text-base tracking-[0.2em] hover:scale-105 transition-all shadow-[0_10px_40px_rgba(82,71,255,0.3)] inline-block uppercase whitespace-nowrap"
            >
              LET'S CHAT!
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="md:absolute right-0 top-1/2 md:[transform:translateY(calc(-50%+5rem))] text-right max-w-[280px] text-base md:text-xl font-medium leading-tight text-dark/90"
          >
            10+ projects successfully completed
          </motion.div>
        </div>
      </div>
    </section>
  );
}
