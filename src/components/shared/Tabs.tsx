export type TTabItem = {
  label: string;
  id: string;
};

type TTabsProps = {
  tabs: TTabItem[];
  activeTab?: string;
  onTabClick?: (tabId: string) => void;
};

export const Tabs = ({ tabs, activeTab , onTabClick }: TTabsProps) => {
  const handleTabClick = (tabId: string) => {
    onTabClick?.(tabId);
  };

  return (
    <ul className="flex border border-neutral-normal rounded-md justify-around text-sm md:text-base my-4">
      {tabs.map((tab, index) => (
        <li
          key={`tabs-${index}`}
          className={`cursor-pointer font-medium transition-all duration-300 w-full bg-opacity-25 py-2 md:py-3 ${
            activeTab === tab.id
              ? " bg-primary"
              : " "
          }    
            `}
          onClick={() => handleTabClick(tab.id)}
        >
          {tab.label}
        </li>
      ))}
    </ul>
  );
};

