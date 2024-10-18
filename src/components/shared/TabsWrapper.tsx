import { useSwipeTabs } from "@/hooks/useSwipeTabs";
import { useEffect, type PropsWithChildren } from "react";
import { Tabs, type TTabItem } from "./Tabs";

type TTabsWrapperProps = {
  tabs: TTabItem[];
  initialActiveTab?: string;
  onTabChange?: (tabId: string) => void;
} & PropsWithChildren;

const TabsWrapper = ({
  tabs,
  initialActiveTab,
  children,
  onTabChange,
}: TTabsWrapperProps) => {
  const { activeTab, bind, setActiveTab } = useSwipeTabs({
    tabs,
    initialActiveTab,
  });

  useEffect(() => {
    onTabChange?.(activeTab);
  }, [activeTab]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    onTabChange?.(tabId);
  };

  return (
    <div {...bind()} className="h-full w-full ">
      <Tabs tabs={tabs} activeTab={activeTab} onTabClick={handleTabChange} />
      {children}
    </div>
  );
};

export { TabsWrapper };
