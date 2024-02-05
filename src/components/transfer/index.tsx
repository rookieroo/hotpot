import React, { useState } from "react";
import { tify, sify } from "chinese-conv";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import {useTranslation} from "@/locales/client";

export function Transfer() {
  const [text, setText] = useState("发财");
  const [txt, setTxt] = useState("");
  const {t} = useTranslation();

  const onChange = (event) => {
    setText(event.target.value);
  };

  const toTify = () => {
    setTxt(tify(text));
  };
  const toSify = () => {
    setTxt(sify(text));
  };
  const onClear = () =>() => {
    setTxt('');
    setText('');
  };
  const onCopy = () =>() => {
    navigator.clipboard.writeText(txt);
  };
  const onCut = () =>() => {
    navigator.clipboard.writeText(txt);
    setTxt('');
    setText('');
  };

  return (
    <div className="h-screen relative z-1 flex flex-col items-center">
      <div className="mx-20 my-10 w-2/3">
        <TextField
          id="left"
          label={t("your text")}
          fullWidth
          multiline
          value={text}
          rows={4}
          InputLabelProps={{ shrink: true }}
          onChange={onChange}
        />
        <div className="mt-20"></div>
        <TextField
          id="right"
          label={t("conversion")}
          fullWidth
          multiline
          value={txt}
          rows={4}
          InputLabelProps={{ shrink: true }}
        />
      </div>
      <Stack spacing={2} direction="row">
        <Button onClick={onCopy('success')} variant="text">{t("Copy")}</Button>
        <Button onClick={onCut('success')} variant="text">{t("Cut")}</Button>
        <Button onClick={onClear('success')} variant="text">{t("Clear")}</Button>
        <Button onClick={toTify} variant="contained">
          {t("Traditional")}
        </Button>
        <Button onClick={toSify} variant="outlined">
          {t("Simplified")}
        </Button>
      </Stack>
    </div>
  );
}
