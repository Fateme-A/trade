import { useState } from 'react';
import { useSwipe } from './useSwipe'; // Assuming you have the swipe hook

type TTabItem = {
  label: string;
  id: string;
};

type TUseSwipeTabsProps = {
  tabs: TTabItem[];
  initialActiveTab?: string;
};

export const useSwipeTabs = ({ tabs, initialActiveTab }: TUseSwipeTabsProps) => {
  const [activeTab, setActiveTab] = useState(initialActiveTab || tabs[0].id);

  const switchTab = (direction: 'left' | 'right') => {
    const currentIndex = tabs.findIndex((tab) => tab.id === activeTab);
    
    if (direction === 'left' && currentIndex > 0) {
      setActiveTab(tabs[currentIndex - 1].id);
    } else if (direction === 'right' && currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1].id);
    }
  };

  // Bind swipe event using the swipe hook
  const { bind } = useSwipe((direction) => {
    if (direction === 'left' || direction === 'right') {
      switchTab(direction);
    }
  });

  return {
    activeTab,
    bind,
    setActiveTab,
  };
};
