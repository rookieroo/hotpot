import { tify, sify } from "chinese-conv";
import { Button } from "@mui/material";
import React, { useState } from "react";
import all from "./data.json";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
export interface IShi {
  title?: string;
  author?: string;
  desc?: string;
  name?: string;
  section?: string;
  chapter?: string;
  rhythmic?: string;
  type?: string;
  id?: string;
  paragraphs?: string[];
  content?: string[];
}

interface ISubFile {
  name?: string;
  author?: string;
  path?: string;
  zh?: string;
  files?: string[];
}

export function ShiJi() {
  const [cate, setCate] = useState<ISubFile>({});
  const [subCont, setSubCont] = useState<IShi>({});
  const [subList, setSubList] = useState<ISubFile[]>([]);
  const [jsonList, setJsonList] = useState<IShi | IShi[]>([]);
  const [sc, setShiCi] = useState<IShi>({});
  const [simplified, setSimplified] = useState<"sify" | "tify">("sify");

  const getList = (i) => () => {
    const files: ISubFile[] = [];
    for (let f of i.files) {
      if (!f.max) {
        files.push({
          path: `${f.name}`,
          zh: f.zh,
        });
      } else {
        for (let n = f.min; n <= f.max; n += 1000) {
          files.push({
            path: `${f.name}${n}`,
            zh: `${f.name}-${n}`,
          });
        }
      }
    }
    setCate(i);
    setSubList(files);
    setJsonList([]);
    setShiCi({});
    setSubCont({});
  };

  const loadShiCi = (f: ISubFile) => async () => {
    const modules = await import(`./chinese-poetry/${f.path}.json`);
    if (Array.isArray(modules.default.content)) {
      setJsonList(modules.default.content);
    } else {
      setJsonList(modules.default);
    }
    setSubCont({});
    setShiCi({});
  };

  const setCurrentShiCi = (s: IShi) => async () => {
    setShiCi(s);
    setSubCont({});
  };
  const setSubContent = (s: IShi) => async () => {
    setSubCont(s);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, val) => {
    setSimplified(val);
  };
  const sifyOrTify = (s: string | undefined) => {
    if (simplified === "sify") {
      return sify(s);
    } else {
      return tify(s);
    }
  };

  return (
    <div className="flex py-5">
      <div className="inline-block px-6 pl-10 overflow-auto w-[12rem]">
        {all.map((i) => (
          <Button onClick={getList(i)} key={i.path}>
            {i.name}
          </Button>
        ))}
        <FormControl>
          {/* <FormLabel id="conv-zh">切换</FormLabel> */}
          <RadioGroup
            aria-labelledby="conv-zh"
            name="controlled-radio-buttons-group"
            value={simplified}
            onChange={handleChange}
          >
            <FormControlLabel value="sify" control={<Radio />} label="简体" />
            <FormControlLabel value="tify" control={<Radio />} label="繁体" />
          </RadioGroup>
        </FormControl>
      </div>
      <div className="inline-block px-6 h-screen overflow-y-auto w-1/6">
        {subList.map((i) => (
          <Button onClick={loadShiCi(i)} key={i.path}>
            {i.zh}
          </Button>
        ))}
      </div>
      {jsonList && (
        <div className="inline-block px-6 h-screen overflow-y-auto w-2/6">
          {Array.isArray(jsonList) &&
            jsonList.map((i) => (
              <Button
                key={i.rhythmic || i.title || i.chapter || i.type}
                style={{ color: i === sc ? "red" : "" }}
                onClick={setCurrentShiCi(i)}
              >
                {sifyOrTify(i.rhythmic || i.title || i.chapter || i.type)}
              </Button>
            ))}
          {!Array.isArray(jsonList) && (
            <Button
              style={{ color: jsonList === sc ? "red" : "" }}
              onClick={setCurrentShiCi(jsonList)}
            >
              {sifyOrTify(
                jsonList.rhythmic ||
                  jsonList.title ||
                  jsonList.chapter ||
                  jsonList.type
              )}
            </Button>
          )}
        </div>
      )}
      <div className="inline-block px-6 h-screen overflow-y-auto w-2/6 text-base tracking-wide leading-10 text-center">
        {Array.isArray(sc.paragraphs) && (
          <div>
            <h2 className="text-lg leading-12 font-bold">
              {sifyOrTify(sc.title || sc.rhythmic || sc.chapter)}
            </h2>
            {sc.author && <h3>{sifyOrTify(sc.author)}</h3>}
            {sc.chapter && sc.section && (
              <h3>
                {sifyOrTify(sc.chapter)}-{sifyOrTify(sc.section)}
              </h3>
            )}
          </div>
        )}
        {Array.isArray(sc.paragraphs) &&
          sc.paragraphs?.map((i) => <p key={i}>{sifyOrTify(i)}</p>)}
        {Array.isArray(sc.content) &&
          sc.content?.map((i) => (
            <Button onClick={setSubContent(i)}>{sifyOrTify(i.chapter)}</Button>
          ))}
      </div>
      <div className="inline-block px-6 h-screen overflow-y-auto w-2/6 text-base tracking-wide leading-10">
        {subCont.author && <h3>{sifyOrTify(subCont.author)}</h3>}
        {subCont.chapter && <h3>{sifyOrTify(subCont.chapter)}</h3>}
        {Array.isArray(subCont.paragraphs) &&
          subCont.paragraphs?.map((i) => <p key={i}>{sifyOrTify(i)}</p>)}
      </div>
    </div>
  );
}
