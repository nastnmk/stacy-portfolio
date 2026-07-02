import { motion } from 'motion/react';
import ellipse1 from '../../assets/elipse 1.png';
import ellipse2 from '../../assets/elipse 2.png';

export default function About() {
  return (
    <section className="section-container bg-white pb-0">
      <div className="border-t border-b border-gray-200 py-8 flex flex-col md:flex-row gap-6 justify-between md:items-start mb-24">
        <div className="flex items-center gap-3 shrink-0 md:mt-2">
          <div className="w-2.5 h-2.5 bg-primary rounded-full" />
          <span className="uppercase text-[10px] font-bold tracking-[0.2em] text-gray-400">About</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-medium max-w-2xl leading-snug text-dark/90 text-left md:text-right">
          I transform business requirements into clear, functional digital products — from abstract ideas to presentations, websites, and apps.
        </h2>
      </div>

      <div className="space-y-32 max-w-6xl mx-auto">
        {/* Row 1: Text Left, Image Right */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
          <div className="flex-1 order-2 md:order-1 max-md:text-center">
            <p className="text-2xl md:text-[32px] leading-[1.2] font-medium text-dark tracking-tight">
              I started programming in 5th grade and discovered <span className="font-bold">UX/UI design</span> in 9th grade. At first, I wanted to focus mainly on design, but then I realized that <span className="font-bold">programming allows me to turn my own prototypes into real products.</span>
            </p>
          </div>
          <div className="w-64 h-64 md:w-[380px] md:h-[380px] shrink-0 order-1 md:order-2">
            <img 
              src={ellipse1}
              alt="Programming context" 
              className="w-full h-full object-cover rounded-full shadow-xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Row 2: Image Left, Text Right */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
          <div className="w-64 h-64 md:w-[380px] md:h-[380px] shrink-0">
            <img 
              src={ellipse2}
              alt="Analysis and design" 
              className="w-full h-full object-cover rounded-full shadow-xl"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex-1 text-right max-md:text-center">
            <p className="text-2xl md:text-[32px] leading-[1.2] font-medium text-dark tracking-tight">
              After many <span className="font-bold">case championships</span> and my experience at MOEX, I saw that my strength is not only in design, but also in analysis, idea generation, and transforming vague problems into useful products that solve <span className="font-bold">real user needs.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
