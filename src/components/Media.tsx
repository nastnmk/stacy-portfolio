import { MediaItem } from '../types';
import ellipse3 from '../../assets/elipse 3.png';
import ellipse4 from '../../assets/elipse 4.png';
import ellipse5 from '../../assets/elipse 5.png';

const MEDIA: MediaItem[] = [
  {
    id: 'tg-stacy',
    title: 'Telegram channel',
    image: ellipse3,
    accounts: [
      { handle: '@stacynaumkina', link: 'https://t.me/stacynaumkina' }
    ]
  },
  {
    id: 'instagram',
    title: 'Instagram*',
    image: ellipse4,
    accounts: [
      { handle: '@nastnmkk', link: 'https://instagram.com/nastnmkk' },
      { handle: '@stacy_naumkina', link: 'https://instagram.com/stacy_naumkina' }
    ]
  },
  {
    id: 'tg-nastnmkk',
    title: 'Telegram channel',
    image: ellipse5,
    accounts: [
      { handle: '@nastnmkk', link: 'https://t.me/nastnmkk' }
    ]
  }
];

export default function Media() {
  return (
    <section className="section-container">
      <div className="flex items-center gap-3 mb-12">
        <div className="w-2 h-2 bg-primary rounded-full" />
        <span className="uppercase text-xs font-bold tracking-widest text-gray-500">Media</span>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {MEDIA.map((item) => (
          <div
            key={item.id}
            className="group flex flex-col items-center text-center space-y-4"
          >
            <a
              href={item.accounts[0].link}
              target="_blank"
              className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-50 group-hover:border-primary/20 transition-all"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </a>
            <div className="space-y-1">
              <h4 className="text-xl font-medium">{item.title}</h4>
              {item.accounts.map((account) => (
                <a
                  key={account.link}
                  href={account.link}
                  target="_blank"
                  className="block text-gray-500 font-mono text-sm hover:text-primary transition-colors"
                >
                  {account.handle}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
