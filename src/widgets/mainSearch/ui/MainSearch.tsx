import { TypewriterBlock } from "@/src/features/typeWriter";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import { useRouter } from "next/navigation";
import React, { FC, useState } from "react";

const MainSearch: FC = () => {
  const router = useRouter();
  const [query, setQuery] = useState<string>("");

  const handleSearch = (q: string) => {
    if (!q.trim()) return;
    router.push(`/?tab=2&q=${encodeURIComponent(q.trim())}`);
  };

  return (
    <section className="m-24 flex flex-col items-center">
      <h1 className="text-[86px] font-bukvoglot">
        Словарь <span className="font-druzhok text-greenPrimary">Бажова</span>
      </h1>
      <TypewriterBlock />
      <div className="flex gap-4 mt-16">
        <Input
          placeholder="Поиск по слову"
          style={{ width: 520 }}
          suffix={<SearchOutlined />}
          size="large"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onPressEnter={() => handleSearch(query)}
        />
        <Button size="large" type="primary" onClick={() => handleSearch(query)}>
          Найти
        </Button>
      </div>
    </section>
  );
};

export default MainSearch;
