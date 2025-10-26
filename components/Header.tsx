
import React from 'react';
import { XIcon, ChevronDownIcon, MoreVerticalIcon } from './icons';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-900/80 backdrop-blur-sm z-10 p-4 flex items-center justify-between shadow-md shadow-black/20">
      <button className="p-2">
        <XIcon className="w-6 h-6 text-gray-300" />
      </button>
      <div className="flex items-center space-x-2">
        <h1 className="text-xl font-bold text-gray-100">বাংলাদেশী ভাইরাল.</h1>
        <ChevronDownIcon className="w-5 h-5 text-gray-300" />
      </div>
      <button className="p-2">
        <MoreVerticalIcon className="w-6 h-6 text-gray-300" />
      </button>
    </header>
  );
};

export default Header;
