"use client";

import React, { FC } from "react";
import Logo from "@/public/images/logo.svg";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Tabs } from "antd";
import "./Tabs.scss";

const Header: FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab") || "1";

  const items = [
    { key: "1", label: <span className="tab-label">Главная</span> },
    { key: "2", label: <span className="tab-label">Поиск по слову</span> },
    { key: "3", label: <span className="tab-label">Поиск по сказу</span> },
    { key: "4", label: <span className="tab-label">Поиск по алфавиту</span> },
    { key: "5", label: <span className="tab-label">О проекте</span> },
  ];

  const onChangeTabs = (key: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("tab", key);
    router.push(`?${params.toString()}`, { scroll: false });
  };
  return (
    <header className="h-16 flex justify-center ">
      <div className="flex-shrink-0">
        <Image
          src={Logo.src}
          width={160}
          height={40}
          alt="Логотип сайта Бажов Цифровой"
          priority
        />
      </div>

      <div className="flex-grow flex justify-center">
        <Tabs
          className="custom-tabs"
          activeKey={activeTab}
          items={items}
          onChange={onChangeTabs}
        />
      </div>
      <div className="flex-shrink-0 w-[160px]" />
    </header>
  );
};

export default Header;
