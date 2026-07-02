export default function Services() {
  const services = [
    "UX/UI Design",
    "Landing page",
    "Mobile app",
    "Business analysis"
  ];

  return (
    <section className="section-container">
      <div className="bg-dark rounded-[40px] p-8 md:p-16 text-white">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-2 h-2 bg-primary rounded-full" />
          <span className="uppercase text-xs font-bold tracking-widest text-gray-400">My Services</span>
        </div>
        
        <div className="flex flex-wrap gap-4">
          {services.map((service) => (
            <div 
              key={service}
              className="bg-white/10 hover:bg-white/20 transition-colors border border-white/10 px-8 py-4 rounded-2xl text-lg md:text-xl font-medium"
            >
              {service}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
