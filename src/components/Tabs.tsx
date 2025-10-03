import { useState, type ReactNode } from "react";

import TabButton from "@/components/TabButton";

type TabsProps = {
  defaultIndex?: number;
  tabs: { label: string; content: ReactNode }[];
};

export default function Tabs({ defaultIndex = 0, tabs }: TabsProps) {
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex);

  return (
    <section>
      <div className="flex flex-wrap gap-1">
        {tabs.map((tab, index) => (
          <TabButton
            key={tab.label}
            isActive={index === selectedIndex}
            onClick={() => setSelectedIndex(index)}
          >
            {tab.label}
          </TabButton>
        ))}
      </div>

      <div className="bg-slate-800 p-8 rounded-b-md rounded-tr-md">
        {tabs[selectedIndex].content}
      </div>
    </section>
  );
}
