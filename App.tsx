
import React, { useState } from 'react';
import Header from './components/Header';
import ContentCard from './components/ContentCard';
import BottomNav from './components/BottomNav';
import { CardData } from './types';
import { HomeIcon, HeartIcon, BookOpenIcon, LinkIcon } from './components/icons';

const mockCardData: CardData[] = [
  {
    id: 1,
    type: 'banner',
    image1: 'https://picsum.photos/seed/anime/600/200',
    title: 'বাচ্চাদের ৪ টি ভিডিও একসাথে',
    unlockAds: 3,
  },
  {
    id: 2,
    type: 'split',
    image1: 'https://picsum.photos/seed/girl1/300/400',
    image2: 'https://picsum.photos/seed/girl2/300/400',
    title: 'Full Video',
    unlockAds: 5,
  },
  {
    id: 3,
    type: 'single',
    image1: 'https://picsum.photos/seed/girl3/600/400',
    title: 'বিস্তারিত কমেন্টে',
    unlockAds: 0,
    isLiked: false,
  },
    {
    id: 4,
    type: 'single',
    image1: 'https://picsum.photos/seed/girl4/600/400',
    title: 'নতুন ভিডিও',
    unlockAds: 0,
    isLiked: true,
  }
];

const navItems = [
    { id: 'home', label: 'হোম', icon: HomeIcon },
    { id: 'favorites', label: 'পছন্দের', icon: HeartIcon },
    { id: 'tutorial', label: 'টিউটোরিয়াল', icon: BookOpenIcon },
    { id: 'link', label: 'লিংক', icon: LinkIcon },
];

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="bg-slate-900 min-h-screen font-sans text-white">
      <Header />
      <main className="p-3 pt-20 pb-28 space-y-4">
        {mockCardData.map(card => (
          <ContentCard key={card.id} card={card} />
        ))}
      </main>
      <BottomNav navItems={navItems} activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default App;
