import { useState } from "react";

import Button from "@/components/Button";

import data from "@/data";

export default function Content() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div>
      <div className="flex flex-wrap gap-1">
        {data.map((d, index) => (
          <Button
            key={index}
            isActive={index === selectedIndex}
            onClick={() => setSelectedIndex(index)}
          >
            {d.title}
          </Button>
        ))}
      </div>

      <div className="bg-slate-800 p-8 rounded-b-md">
        <ul className="space-y-4">
          {data[selectedIndex].items.map((item) => (
            <li key={item} className="text-white">
              &#8226; {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
