import { motion } from 'motion/react';
import { Project } from '../types';
import marmeladeImg from '../../assets/marmelade.png';
import renovaImg from '../../assets/renova.png';
import crimeaImg from '../../assets/crimea.png';
import lawImg from '../../assets/law.png';
import presentationImg from '../../assets/presentation.png';
import stockImg from '../../assets/stock.png';

const PROJECTS: Project[] = [
  {
    id: 'samokat',
    title: 'Gamification for a brand launch on the Samokat platform',
    subtitle: '',
    description: '',
    image: marmeladeImg,
    tags: ['Gamification', 'Figma'],
    link: '', // No link button in screenshot
    isDark: false
  },
  {
    id: 'renova',
    title: 'Designed the UX/UI for RENOVA: user flow, mobile screens, navigation, and visual style',
    subtitle: '',
    description: '',
    image: renovaImg,
    tags: ['Figma', '3rd place', '30+ screens'],
    link: 'https://drive.google.com/file/d/1njN1KUv4wpsidL-_3FPq4Duc5raV2xpH/view?usp=sharing',
    isDark: false
  },
  {
    id: 'real-estate',
    title: 'Website design for a premium real estate agency in Southern Russia',
    subtitle: '',
    description: '',
    image: crimeaImg,
    tags: ['Tilda'],
    link: 'https://крым-притяжения.рф/',
    isDark: false
  },
  {
    id: 'legal',
    title: 'Landing for a legal agency',
    subtitle: '',
    description: '',
    image: lawImg,
    tags: ['Tilda'],
    link: 'http://pravovoyvector.ru/',
    isDark: false
  },
  {
    id: 'presentation',
    title: 'Presentation for a national case championship',
    subtitle: '',
    description: '',
    image: presentationImg,
    tags: ['3rd place', '30+ slides'],
    link: 'https://drive.google.com/file/d/1OjCBogMHDvSV8CkmDeBDvrpkA473O4CO/view?usp=sharing',
    isDark: false
  },
  {
    id: 'invest',
    title: 'Clickable website for invest simulator',
    subtitle: '',
    description: '',
    image: stockImg,
    tags: ['Frontend'],
    link: 'https://drive.google.com/file/d/1fkIW5bmekQXxOe8uYAVCUQyD1heFYijq/view?usp=sharing',
    isDark: false
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-container">
      <div className="flex items-center gap-3 mb-16">
        <div className="w-2 h-2 bg-primary rounded-full" />
        <span className="uppercase text-xs font-bold tracking-widest text-gray-500">Projects</span>
      </div>

      <div>
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center py-16 md:py-20 ${index !== 0 ? 'border-t border-gray-200' : ''}`}
          >
            <div className="flex-1 space-y-8 max-md:w-full max-md:text-center">
              <h3 className="text-3xl md:text-5xl font-serif leading-tight">
                {project.title}
              </h3>
              
              {project.subtitle && (
                <div className="bg-lavender p-6 rounded-2xl text-lg font-medium max-w-md">
                  {project.subtitle}
                </div>
              )}

              <div className="flex flex-wrap gap-3 max-md:justify-center">
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank"
                    className="border border-dark px-6 py-2 rounded-full font-medium hover:bg-dark hover:text-white transition-colors uppercase text-xs tracking-wider"
                  >
                    Link
                  </a>
                )}
                {project.tags.map(tag => (
                  <div key={tag} className="border border-gray-200 bg-gray-50 px-6 py-2 rounded-full font-medium text-xs uppercase tracking-wider text-gray-600">
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 w-full">
              <div className="rounded-[40px] overflow-hidden bg-gray-100 aspect-[1.2/1] border-[1mm] border-dark">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
