import figmaLogo from '../../assets/figma-sign-logo 1.svg';
import tildaLogo from '../../assets/tilda-icon-logo 1.svg';
import image15 from '../../assets/image 15.svg';

export default function Skills() {
  const skillIcons = [
    { id: 'figma', type: 'image', src: figmaLogo },
    { id: 'tilda', type: 'image', src: tildaLogo },
    { id: 'python', type: 'image', src: image15 },
    { id: 'sql', type: 'text', text: 'SQL' },
    { id: 'metabase', type: 'text', text: 'Metabase' }
  ];

  return (
    <section className="section-container">
      <div className="flex items-center gap-3 mb-12">
        <div className="w-2 h-2 bg-primary rounded-full" />
        <span className="uppercase text-xs font-bold tracking-widest text-gray-500">Skills</span>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
        {skillIcons.map((skill) => (
          <div 
            key={skill.id}
            className="aspect-video bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all cursor-default"
          >
            {skill.type === 'image' ? (
              <img src={skill.src} alt={skill.id} className="h-full object-contain" referrerPolicy="no-referrer" />
            ) : (
              <span className="text-xl font-bold text-gray-800">{skill.text}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
