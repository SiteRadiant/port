import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useUI } from '../context/UIContext';

const FAB = () => {
  const { openContact } = useUI();

  return (
    <div className="fixed bottom-6 right-6 z-[90]">
      <div className="relative group">
        <div className="absolute -inset-2 bg-red-500 rounded-full blur-md opacity-20 group-hover:opacity-60 transition duration-500 animate-pulse"></div>
        <button
          onClick={() => openContact()}
          className="relative flex items-center justify-center w-14 h-14 bg-red-500 hover:bg-red-400 text-white rounded-full shadow-lg shadow-red-500/30 transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Contact Us"
        >
          <MessageCircle size={24} />
        </button>
      </div>
    </div>
  );
};

export default FAB;
