
import React, { useState } from 'react';
import type { CardData } from '../types';
import { HeartIcon as HeartIconSolid } from './icons';

interface ContentCardProps {
  card: CardData;
}

const UnlockButton: React.FC<{ ads: number; total: number }> = ({ ads, total }) => {
  return (
    <div className="flex items-center space-x-3 w-full">
      <button className="flex-grow bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:opacity-90 transition-opacity duration-200">
        Unlock — {total} ads
      </button>
      <div className="bg-slate-700 text-white text-sm font-bold w-14 h-11 flex items-center justify-center rounded-xl">
        {ads}/{total}
      </div>
    </div>
  );
};

const ContentCard: React.FC<ContentCardProps> = ({ card }) => {
  const { type, image1, image2, title, unlockAds, isLiked: initialIsLiked } = card;
  const [isLiked, setIsLiked] = useState(initialIsLiked);

  const renderImages = () => {
    switch (type) {
      case 'banner':
        return (
          <div className="relative w-full h-32 rounded-t-xl overflow-hidden">
            <img src={image1} alt="Banner" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="text-red-500 font-bold text-2xl tracking-widest" style={{textShadow: '0 0 5px black'}}>NO PREVIEW</span>
            </div>
          </div>
        );
      case 'split':
        return (
          <div className="flex space-x-1">
            <img src={image1} alt="Content 1" className="w-1/2 h-64 object-cover" />
            <img src={image2} alt="Content 2" className="w-1/2 h-64 object-cover" />
          </div>
        );
      case 'single':
        return (
             <div className="relative">
                <img src={image1} alt={title} className="w-full h-auto object-cover" />
                 <button onClick={() => setIsLiked(!isLiked)} className="absolute top-3 right-3 p-2 bg-black/30 rounded-full">
                    <HeartIconSolid className={`w-6 h-6 ${isLiked ? 'text-red-500 fill-current' : 'text-white'}`} />
                </button>
             </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg shadow-black/30">
      {renderImages()}
      <div className="p-4 space-y-3">
        <h2 className="text-lg font-semibold text-gray-100 flex items-center">
            {title} {type !== 'banner' && <span className="ml-2">👇</span>}
        </h2>
        { type === 'banner' && <p className="text-sm text-gray-400">দেখতে Unlock এ ক্লিক করুন 👇</p> }
        {unlockAds > 0 && <UnlockButton ads={0} total={unlockAds} />}
      </div>
    </div>
  );
};

export default ContentCard;
