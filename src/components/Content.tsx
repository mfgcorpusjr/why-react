import Tabs from "@/components/Tabs";

import TOPICS from "@/data";

export default function Content() {
  const tabs = TOPICS.map((topic) => {
    const content = (
      <ul className="space-y-4">
        {topic.items.map((item) => (
          <li key={item} className="text-white text-sm">
            &#8226; {item}
          </li>
        ))}
      </ul>
    );

    return {
      label: topic.title,
      content,
    };
  });

  return <Tabs tabs={tabs} />;
}
