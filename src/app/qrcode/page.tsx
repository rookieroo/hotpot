'use client'

import React, { useState, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";
import {useTranslation} from "@/locales/client";
import { debounce } from "lodash";
import TextField from "@mui/material/TextField";

export default function QrCode() {
  const { t } = useTranslation();
  const [val, setVal] = useState("");
  const [url, setUrl] = useState("");

  const debouncedSearch = React.useRef(
    debounce(async (val) => {
      setUrl(val);
    }, 1000)
  ).current;

  const onChange = (e) => {
    setVal(e.target.value);
  };

  useEffect(() => {
    debouncedSearch(val);
  }, [val]);

  return (
    <div className="h-screen relative z-1 flex flex-col items-center mt-[10%] mx-5">
      <TextField
        id="left"
        label={t("your link")}
        fullWidth
        multiline
        value={val}
        rows={2}
        InputLabelProps={{ shrink: true }}
        onChange={onChange}
      />
      {url && <QRCodeSVG className="mt-[30px]" value={url} />}
    </div>
  );
}
