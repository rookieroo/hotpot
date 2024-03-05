'use client'

import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";
import RadioGroup from "@mui/material/RadioGroup";
import {useTranslation} from "@/locales/client";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { minify } from "terser";
import { minify as cssMinify } from "csso";
import { minify as htmlMinify } from "./htmlminifier.esm.bundle.js";
import "./index.css";
import Checkbox from "@mui/material/Checkbox";
import { Options } from "./ops.ts";

const SWITCH_LIST = ["HTML", "JS", "CSS", "other"];

export default function Minify() {
  const [ops, setOps] = useState(Options);
  const [minifyOps, setMinifyOps] = useState({});
  const [stats, setStats] = useState({
    result: "",
    text: "",
  });
  const [type, setType] = useState("JS");
  const [error, setError] = useState("");
  const [text, setText] = useState(
    "function add(first, second) { return first + second; }"
  );
  const [txt, setTxt] = useState("");
  const { t, i18n } = useTranslation();

  const trans = (key: string) => {
    return t(key, { ns: "minify" });
  };

  useEffect(() => {
    toggleText();
  }, [type]);

  useEffect(() => {
    const options = getOptions();
    setMinifyOps(options);
  }, [ops]);

  useEffect(() => {
    if (!text || !txt) {
      setStats({
        result: "",
        text: "",
      });
      return;
    }
    const diff = text.length - txt.length;
    const savings = text.length ? ((100 * diff) / text.length).toFixed(2) : 0;
    const res = "success";
    const t = `${trans("Original Size")}: ${text.length}, ${trans(
      "Minfied Size"
    )}: ${txt.length}, ${trans("Savings")}: ${diff} (${savings}%)`;
    setStats({
      result: res,
      text: t,
    });
  }, [text, txt, i18n.language]);

  const getOptions = () => {
    const minifierOptions = {};
    const key = type;
    ops[key].forEach((option) => {
      let value = null;

      if (option.type === "checkbox") {
        value = Boolean(option.checked);
      } else if (!option.value) {
        return;
      } else if (option.type === "number") {
        value = parseInt(option.value);
      } else {
        value = option.value;
      }

      if (option.id === "processScripts") {
        value = value.split(/\s*,\s*/);
      }

      minifierOptions[option.id] = value;
    });

    return minifierOptions;
  };

  const onChange = (event) => {
    setText(event.target.value);
  };

  const toggleText = () => {
    if (type === "JS") {
      setText("function add(first, second) { return first + second; }");
    } else if (type === "CSS") {
      setText(".test { color: #ff0000; }");
    } else if (type === "HTML") {
      setText(`<p title="blah" id="moo">foo</p>`);
    }
  };

  const toSify = async () => {
    try {
      let result = "";
      if (type === "JS") {
        const r = await minify(text, minifyOps);
        result = r && r.code;
      } else if (type === "CSS") {
        result = cssMinify(text, minifyOps).css;
      } else if (type === "HTML") {
        result = await htmlMinify(text, minifyOps);
      }
      setTxt(result as string);
      setError("");
    } catch (err) {
      setError(JSON.stringify(err));
      console.error(err);
    }
  };
  const onClear = (variant: VariantType) => () => {
    setTxt("");
    setText("");
  };
  const onCopy = (variant: VariantType) => () => {
    navigator.clipboard.writeText(txt);
  };
  const onCut = (variant: VariantType) => () => {
    navigator.clipboard.writeText(txt);
    setTxt("");
    setText("");
  };
  const onCheck = (e, op) => {
    const options = ops[type].map((option) => {
      if (option.id === op.id) {
        return {
          ...option,
          checked: Boolean(e.target.checked),
        };
      } else {
        return option;
      }
    });
    setOps({
      ...ops,
      [type]: options
    });
  };

  const onInputChange = (e, op) => {
    const options = ops[type].map((option) => {
      if (option.id === op.id) {
        return {
          ...option,
          value: e.target.value,
        };
      } else {
        return option;
      }
    });
    setOps({
      ...ops,
      [type]: options
    });
  };

  const selectAllOptions = (yes = true) => {
    const options = ops[type].map((option) => {
      if (option.type !== "checkbox") {
        return option;
      }

      return {
        ...option,
        checked: Boolean(yes),
      };
    });
    setOps({
      ...ops,
      [type]: options
    });
  };

  const resetOptions = () => {
    setOps(Options);
  };

  const RadioWrapper = (props) => {
    const v = props.v;
    return (
      <FormControlLabel
        value={v}
        control={<Radio />}
        label={v}
        disabled={v === "other"}
      />
    );
  };

  return (
    <div className="main mt-[30px]">
      <div className="workspace m-5">
        <TextField
          id="left"
          label={t("your javascript code")}
          fullWidth
          multiline
          value={text}
          rows={8}
          InputLabelProps={{ shrink: true }}
          onChange={onChange}
        />
        <div className="mt-5"></div>
        <TextField
          id="right"
          label={t("conversion")}
          fullWidth
          multiline
          value={txt}
          rows={8}
          InputLabelProps={{ shrink: true }}
        />
        <p className={stats.result}>{stats.text}</p>
        {error && <p className="text-red">{error}</p>}
        <Stack className="m-5" spacing={2} direction="row">
          <FormControl>
            {/* <FormLabel id="demo-row-radio-buttons-group-label">
              {t("Code Type")}
            </FormLabel> */}
            <RadioGroup
              row
              aria-labelledby="code-type-buttons-group-label"
              name="row-radio-buttons-group"
              value={type}
              onChange={(event: React.ChangeEvent, value: string) => {
                setType(value);
                setTxt("");
              }}
            >
              {SWITCH_LIST.map((s) => (
                <RadioWrapper key={s} v={s} />
              ))}
            </RadioGroup>
          </FormControl>
          <Button size="small" onClick={onCopy("success")} variant="text">
            {t("Copy")}
          </Button>
          <Button size="small" onClick={onCut("success")} variant="text">
            {t("Cut")}
          </Button>
          <Button size="small" onClick={onClear("success")} variant="text">
            {t("Clear")}
          </Button>
          <Button size="small" onClick={toSify} variant="contained">
            {t("Minify")}
          </Button>
        </Stack>
      </div>
      <div className="options mt-5">
        <form className="mr-1">
          {ops[type].map((o) => (
            <div key={o.id} className="form-group">
              {o.type === "checkbox" && (
                <Checkbox
                  size="small"
                  onChange={(e) => onCheck(e, o)}
                  checked={o.checked || false}
                />
              )}
              {o.type === "text" && (
                <TextField
                  id="standard-basic"
                  onChange={(e) => onInputChange(e, o)}
                  value={o.value || ""}
                  label={o.label}
                  variant="standard"
                />
              )}
              {o.type === "number" && (
                <TextField
                  type="number"
                  id="standard-basic"
                  onChange={(e) => onInputChange(e, o)}
                  value={o.value || ""}
                  label={o.label}
                  variant="standard"
                />
              )}
              {o.type === "radio" && (
                <FormControl>
                  {/* <FormLabel id="radio-label">{o.label}</FormLabel> */}
                  <RadioGroup
                    row
                    aria-labelledby="minify-ops-radio-label"
                    name="row-radio-buttons-group"
                    value={o.value || o.options[0]}
                    onChange={(e) => onInputChange(e, o)}
                  >
                    {o.options && o.options.map((op) => (
                      <FormControlLabel
                        key={op}
                        value={op}
                        control={<Radio />}
                        label={op}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              )}
              <label
                title={o.label}
                className={o.unsafe ? "unsafe" : ""}
              >
                {o.label}
              </label>
              {o.helpText && (
                <span className="quiet short">{o.helpText}</span>
              )}
            </div>
          ))}
        </form>
        <div>
          <span>Select:</span>
          <a href="#" onClick={() => selectAllOptions(true)}>
            All
          </a>
          ,
          <a href="#" onClick={() => selectAllOptions(false)}>
            None
          </a>
          ,
          <a href="#" onClick={resetOptions}>
            Reset
          </a>
        </div>
      </div>
    </div>
  );
}
