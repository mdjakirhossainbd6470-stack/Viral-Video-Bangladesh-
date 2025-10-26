
import React from 'react';
import type { NavItem } from '../types';

interface BottomNavProps {
  navItems: NavItem[];
  activeTab: string;
  setActiveTab: (id: string) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ navItems, activeTab, setActiveTab }) => {
  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[95%] max-w-md mx-auto z-10">
      <div className="flex items-center justify-around bg-gray-200/20 backdrop-blur-xl rounded-full p-2 shadow-2xl shadow-black/50">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className="flex flex-col items-center justify-center w-16 h-16 transition-colors duration-200"
            >
              <item.icon className={`w-7 h-7 mb-1 ${isActive ? 'text-cyan-300' : 'text-gray-300'}`} />
              <span className={`text-xs font-medium ${isActive ? 'text-cyan-300' : 'text-gray-300'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
