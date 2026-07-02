import { motion } from 'motion/react';
import { ExperienceItem } from '../types';

const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'hse-2026',
    period: 'November - December 2026',
    title: 'HSE Case Championship',
    description: 'Conducted market and competitor analysis, identified user needs, defined product features, contributed to the project’s value proposition, and designed the presentation layout and visuals.',
    badge: '1st place',
    badgeColor: 'blue'
  },
  {
    id: 'deadline-2026',
    period: 'May 2026',
    title: 'DEADLINE Case Championship',
    description: 'Worked on product development: ideated and refined the concept, collected statistics, improved the CJM, visualized the solution, tested hypotheses, and contributed to product positioning.',
    badge: '3rd place',
    badgeColor: 'indigo'
  },
  {
    id: 'deadline-2025',
    period: 'May 2025',
    title: 'DEADLINE Case Championship',
    description: 'Conducted product and business analysis: built the user journey, tested hypotheses, analyzed data, planned promotion strategy, and translated user needs into product improvements.',
    badge: '1st place',
    badgeColor: 'blue'
  },
  {
    id: 'moex-2025',
    period: 'August - November 2025',
    title: 'Business Analyst at MOEX',
    description: 'Conducted product and business analysis: built a metrics tree, segmented the target audience into cohorts, evaluated product initiatives using RICE, analyzed product efficiency, defined the user CJM, tested hypotheses, and collaborated in a cross-functional team.',
    badge: 'Internship',
    badgeColor: 'purple'
  },
  {
    id: 'central-2025',
    period: 'August - May 2025',
    title: 'Central University Case Championship',
    description: 'Built the product end-to-end: from CJM and internal architecture to the mobile app design. Conducted in-depth interviews, communicated with stakeholders, calculated the financial model, and designed the RENOVA mobile app interface.',
    badge: '3rd place',
    badgeColor: 'indigo'
  },
  {
    id: 'ideathon-2025',
    period: 'December 2025',
    title: 'Ideathon HSE',
    description: 'Developed the service integration logic within a bank’s ecosystem and shaped the marketing strategy for its further growth.',
    badge: '2nd place',
    badgeColor: 'purple'
  }
];

export default function Experience() {
  const getBadgeColor = (color: string) => {
    switch (color) {
      case 'blue': return 'bg-[#5247FF] text-white';
      case 'indigo': return 'bg-[#7B61FF] text-white';
      case 'purple': return 'bg-[#A855F7] text-white';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="section-container">
      <div className="flex items-center gap-3 mb-16">
        <div className="w-2 h-2 bg-primary rounded-full" />
        <span className="uppercase text-xs font-bold tracking-widest text-gray-500">Experience</span>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {EXPERIENCE.map((item) => (
          <div key={item.id} className="bg-white border border-gray-100 rounded-[32px] p-8 space-y-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <span className="text-sm font-medium text-gray-500">{item.period}</span>
              <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide ${getBadgeColor(item.badgeColor)}`}>
                {item.badge}
              </span>
            </div>
            <h4 className="text-2xl font-bold">{item.title}</h4>
            <p className="text-gray-600 leading-relaxed text-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
