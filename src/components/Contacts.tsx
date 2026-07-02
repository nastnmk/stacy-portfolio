export default function Contacts() {
  return (
    <section id="contacts" className="section-container pb-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Email */}
        <div className="bg-gray-50 p-8 rounded-3xl flex justify-between items-center group cursor-pointer hover:bg-gray-100 transition-colors">
          <span className="text-xl font-medium text-gray-500">Email</span>
          <a href="mailto:naumkana22@gmail.com" className="text-xl font-medium">naumkana22@gmail.com</a>
        </div>
        
        {/* Phone */}
        <div className="bg-gray-50 p-8 rounded-3xl flex justify-between items-center group cursor-pointer hover:bg-gray-100 transition-colors">
          <span className="text-xl font-medium text-gray-500">Phone</span>
          <a href="tel:+79104505623" className="text-xl font-medium">+7 910 450 56 23</a>
        </div>

        {/* TG */}
        <div className="bg-gray-50 p-8 rounded-3xl flex justify-between items-center group cursor-pointer hover:bg-gray-100 transition-colors">
          <span className="text-xl font-medium text-gray-500">TG</span>
          <a href="https://t.me/neestyy" target="_blank" className="text-xl font-medium">@neestyy</a>
        </div>

        {/* Behance */}
        <div className="bg-gray-50 p-8 rounded-3xl flex justify-between items-center group cursor-pointer hover:bg-gray-100 transition-colors">
          <span className="text-xl font-medium text-gray-500">Behance</span>
          <a href="https://www.behance.net/panda96" target="_blank" className="text-xl font-medium">@panda96</a>
        </div>
      </div>
      
      <div className="mt-16 text-center text-gray-400 text-xs font-mono">
        © 2026 Stacy Naumkina. All rights reserved.
      </div>
    </section>
  );
}
