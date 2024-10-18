import { useState } from "react";

export const useTabs =  <T extends string>(initialTab: T) => {
  const [selectedTab, setSelectedTab] = useState<string>(initialTab);
  const [currentPages, setCurrentPages] = useState<{ [key: string]: number }>({
    [initialTab]: 1,
  });

  const handleTabChange = (tabId: string) => {
    setSelectedTab(tabId);
    if (!currentPages[tabId]) {
      setCurrentPages((prev) => ({ ...prev, [tabId]: 1 }));
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPages((prev) => ({ ...prev, [selectedTab]: page }));
  };

  return { selectedTab, currentPages, handleTabChange, handlePageChange };
};
