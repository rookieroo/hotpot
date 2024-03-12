'use client'

import React, { useState } from "react";
import {Button} from "@/ui/button";
import {useTranslation} from "@/locales/client";
import {Tab, Tabs} from "@mui/material";

export interface IStarMap {
  name?: string;
  en?: string;
  zh?: string;
}

const Demos = [
  {
    name: "altstars",
    en: "Alternative Stars",
    zh: "不同方式展示星座",
  },
  {
    name: "chinese",
    en: "Traditional Chinese Constellations",
    zh: "中国传统星座",
  },
  {
    name: "language",
    en: "Language Options",
    zh: "语言选项",
  },
  {
    name: "location",
    en: "Star Map(location)",
    zh: "星图（行星）",
  },
  {
    name: "map",
    en: "Star Map(map)",
    zh: "星图（全）",
  },
  {
    name: "planets-animation",
    en: "Star Map(planets animation)",
    zh: "星图（行星动画）",
  },
  {
    name: "sky",
    en: "Starry Sky Map",
    zh: "星图（满天繁星）",
  },
  {
    name: "skyview",
    en: " Presets",
    zh: "预设",
  },
  {
    name: "snr",
    en: "Supernova Remnants",
    zh: "超新星残骸",
  },
  {
    name: "triangle",
    en: "Summer Triangle",
    zh: "夏季大三角",
  },
  {
    name: "viewer",
    en: "Star Map",
    zh: "星图（术语）",
  },
  {
    name: "wallmap",
    en: "Wall Map",
    zh: "挂图",
  },
];

export default function Celestial() {
  const [index, setIndex] = useState(0);
  // const [starMap, setStarMap] = useState<IStarMap | undefined>(undefined);
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="container flex flex-col h-screen max-w-screen-xl items-center">
        <Tabs
          value={index}
          onChange={(e, val) => setIndex(val)}
          TabScrollButtonProps={{
            sx: {
              color: "primary"
            }
          }}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable tab"
        >
          {Demos.map((s, index) => (
            <Tab
              key={s.name}
              label={i18n.language == "en" ? s.en : s.zh}
            >
            </Tab>
          ))}
        </Tabs>
        {index > -1 && (
          <iframe
            style={{
              display: "block",
              marginTop: "15px",
              border: 0,
              width: "100%",
              height: "100%",
            }}
            src={`/celestial/demo/${Demos[index].name}.html`}
          ></iframe>
        )}
      </div>
    </>
  );
}
