import React, { useState, useRef, ChangeEvent } from "react";
import Radio from "@mui/material/Radio";
import html2canvas from "html2canvas";
import RadioGroup from "@mui/material/RadioGroup";
import { Button } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import AppleKeyboard from "./apple/appleKeyboard";
import MobileKeyboard from "./mobile/index";
import TextField from "@mui/material/TextField";
import DownloadIcon from "@mui/icons-material/Download";
import {useTranslation} from "@/locales/client";
import useHtmlCanvas from "@/hooks/use-html-canvas";
import {CustomImgUpload} from "@/components/customize-ui/upload";

const SWITCH_LIST = ["blue", "red", "brown", "other"];
const KEYBOARD_TYPE = ["mobile", "apple", "other"];
const KEYBOARD_MODE = ["typing", "customize"];

export default function MyKeyBoard() {
  const [input, setInput] = useState("");
  const [img, setImg] = useState("");
  const [keySwitch, setKeySwitch] = useState("blue");
  const [keyboardType, setKeyBoardType] = useState("apple");
  const [keyboardMode, setKeyBoardMode] = useState("typing");
  const { t, i18n } = useTranslation();
  const [id, setId] = useState<string>("AppleKeyboardContainer");
  const [url, download] = useHtmlCanvas();
  const keyboardApple = useRef(null);
  const keyboardMobile = useRef(null);


  const onChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const input = event.target.value;
    setInput(input);
    keyboard.current?.setInput(input);
  };
  const handleMobileKeyboardChange = (val) => {
    setInput(val);
    // keyboardMobile.current?.setInput(input);
  };
  const handleAppleKeyboardChange = (val) => {
    setInput(val);
    // keyboardApple.current?.setInput(input);
  };
  const onImgUpload = (url: string) => {
    setImg(url);
  };

  const RadioWrapper = (props) => {
    const v = props.v;
    return (
      <FormControlLabel
        value={v}
        control={<Radio />}
        label={t(v, { ns: "keyboard" })}
        disabled={v === "other"}
      />
    );
  };

  const handleDownload = () => {
    download(id)
  };

  return (
    <div className="h-screen relative z-1 mx-[20px]">
      <div className="text-center mt-5">
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            {t("Switch", { ns: "keyboard" })}
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={keySwitch}
            onChange={(event: React.ChangeEvent, value: string) => {
              setKeySwitch(value);
            }}
          >
            {SWITCH_LIST.map((s) => (
              <RadioWrapper key={s} v={s} />
            ))}
          </RadioGroup>
        </FormControl>
        <span className="border-2 inline-block h-[60px] mx-2 border-slate-300"></span>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            {t("KeyBoard Type", { ns: "keyboard" })}
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={keyboardType}
            onChange={(event: React.ChangeEvent, value: string) => {
              setKeyBoardType(value);
            }}
          >
            {KEYBOARD_TYPE.map((s) => (
              <RadioWrapper key={s} v={s} />
            ))}
          </RadioGroup>
        </FormControl>
        <span className="border-2 inline-block h-[60px] mx-2 border-slate-300"></span>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            {t("KeyBoard Mode", { ns: "keyboard" })}
          </FormLabel>
          <RadioGroup
            row
            value={keyboardMode}
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onChange={(event: React.ChangeEvent, value: string) => {
              setKeyBoardMode(value);
              setInput("");
            }}
          >
            {KEYBOARD_MODE.map((s) => (
              <RadioWrapper key={s} v={s} />
            ))}
          </RadioGroup>
        </FormControl>
      </div>
      {keyboardMode !== "customize" && (
        <TextField
          id="outlined-multiline-static"
          label={t("Tap on the virtual keyboard to start", {
            ns: "keyboard",
          })}
          fullWidth
          multiline
          rows={4}
          value={input}
          onChange={(e) => onChangeInput(e)}
        />
      )}
      {keyboardType === "apple" && (
        <AppleKeyboard
          keyboardRef={keyboardApple}
          onChange={(val) => handleMobileKeyboardChange(val)}
          keySwitch={keySwitch}
          mode={keyboardMode}
          img={img}
        ></AppleKeyboard>
      )}
      {keyboardType === "mobile" && (
        <MobileKeyboard
          keyboardRef={keyboardMobile}
          onChange={(val) => handleAppleKeyboardChange(val)}
          keySwitch={keySwitch}
          mode={keyboardMode}
        ></MobileKeyboard>
      )}
      {keyboardMode === "customize" && (
        <div>
          <CustomImgUpload
            max={999}
            onImgUpload={onImgUpload}
            ns="keyboard"
            uploadText="Choose Background Image"
          ></CustomImgUpload>
        </div>
      )}
      {keyboardMode === "customize" && (
        <Button
          onClick={handleDownload}
          variant="contained"
          endIcon={<DownloadIcon />}
        >
          {t("download", { ns: "keyboard" })}
        </Button>
      )}
    </div>
  );
}
