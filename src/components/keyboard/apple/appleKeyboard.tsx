import React, {
  FunctionComponent,
  useState,
  MutableRefObject,
  useEffect,
} from "react";
import Keyboard, { KeyboardButtonTheme } from "react-simple-keyboard";
import { HexColorPicker } from "react-colorful";
import Stack from "@mui/material/Stack";
import Popover from "@mui/material/Popover";
import "react-simple-keyboard/build/css/index.css";
import "./index.css";
import blue from "@/assets/audio/blue.MP3";
import red from "@/assets/audio/red.MP3";
import brown from "@/assets/audio/brown.MP3";
import blue_space from "@/assets/audio/blue_space.MP3";
import red_space from "@/assets/audio/red_space.MP3";
import brown_space from "@/assets/audio/brown_space.MP3";
import { Boarding } from "boarding.js";
import "boarding.js/styles/main.css";
// optionally include the base theme
import "boarding.js/styles/themes/basic.css";
import { ls } from "@/utils/storage";
import {useTranslation} from "@/locales/client";
import {useTheme} from "next-themes";

// const boarding = new Boarding();
interface IProps {
  onChange: (input: string) => void;
  keyboardRef: MutableRefObject<typeof Keyboard>;
  keySwitch: string;
  mode: string;
  img: string;
}

const commonKeyboardOptions = {
  // onChange: input => this.onChange(input),
  // onKeyPress: button => this.onKeyPress(butto n),
  theme: "simple-keyboard hg-theme-default hg-layout-default",
  physicalKeyboardHighlight: true,
  syncInstanceInputs: true,
  mergeDisplay: true,
  debug: true,
};

const keyboardOptions = {
  ...commonKeyboardOptions,
  /**
   * Layout by:
   * Sterling Butters (https://github.com/SterlingButters)
   */
  layoutName: "default",
  layout: {
    default: [
      "{escape} {f1} {f2} {f3} {f4} {f5} {f6} {f7} {f8} {f9} {f10} {f11} {f12}",
      "` 1 2 3 4 5 6 7 8 9 0 - = {backspace}",
      "{tab} q w e r t y u i o p [ ] \\",
      "{capslock} a s d f g h j k l ; ' {enter}",
      "{shiftleft} z x c v b n m , . / {shiftright}",
      "{controlleft} {altleft} {metaleft} {space} {metaright} {altright}",
    ],
    shift: [
      "{escape} {f1} {f2} {f3} {f4} {f5} {f6} {f7} {f8} {f9} {f10} {f11} {f12}",
      "~ ! @ # $ % ^ & * ( ) _ + {backspace}",
      "{tab} Q W E R T Y U I O P { } |",
      '{capslock} A S D F G H J K L : " {enter}',
      "{shiftleft} Z X C V B N M < > ? {shiftright}",
      "{controlleft} {altleft} {metaleft} {space} {metaright} {altright}",
    ],
  },
  display: {
    "{escape}": "esc ⎋",
    "{tab}": "tab ⇥",
    "{backspace}": "backspace ⌫",
    "{enter}": "enter ↵",
    "{capslock}": "caps lock ⇪",
    "{shiftleft}": "shift ⇧",
    "{shiftright}": "shift ⇧",
    "{controlleft}": "ctrl ⌃",
    "{controlright}": "ctrl ⌃",
    "{altleft}": "alt ⌥",
    "{altright}": "alt ⌥",
    "{metaleft}": "cmd ⌘",
    "{metaright}": "cmd ⌘",
  },
};

const keyboardControlPadOptions = {
  ...commonKeyboardOptions,
  layout: {
    default: [
      "{prtscr} {scrolllock} {pause}",
      "{insert} {home} {pageup}",
      "{delete} {end} {pagedown}",
    ],
  },
};

const keyboardArrowsOptions = {
  ...commonKeyboardOptions,
  layout: {
    default: ["{arrowup}", "{arrowleft} {arrowdown} {arrowright}"],
  },
};

const keyboardNumPadOptions = {
  ...commonKeyboardOptions,
  layout: {
    default: [
      "{numlock} {numpaddivide} {numpadmultiply}",
      "{numpad7} {numpad8} {numpad9}",
      "{numpad4} {numpad5} {numpad6}",
      "{numpad1} {numpad2} {numpad3}",
      "{numpad0} {numpaddecimal}",
    ],
  },
};

const keyboardNumPadEndOptions = {
  ...commonKeyboardOptions,
  layout: {
    default: ["{numpadsubtract}", "{numpadadd}", "{numpadenter}"],
  },
};

const AppleKeyboard: FunctionComponent<IProps> = ({
  onChange,
  keyboardRef,
  keySwitch,
  mode,
  img,
}) => {
  const [boarding, setBoarding] = useState<Boarding>(
    new Boarding({
      allowClose: true,
    })
  );
  const [color, setColor] = useState("#b32aa9");
  const [fontColor, setFontColor] = useState("#FFF");
  const [op, setOp] = useState(keyboardOptions);
  const [button, setButton] = useState("");
  const [keydown, setKeyDown] = useState("");
  const [keyboardTheme, setKeyboardTheme] = useState("hg-theme-default");
  const { resolvedTheme: theme } = useTheme();
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  useEffect(() => {
    setKeyboardTheme(
      theme == "dark" ? "" : "hg-theme-default hg-layout-default myTheme"
    );
  }, [theme]);

  useEffect(() => {
    if (mode == "customize") {
      // Define the steps for introduction
      boarding.defineSteps([
        {
          element: "#AppleKeyboardContainer",
          popover: {
            className: "first-step-popover-class",
            title: t("Apple Keyboard Container", { ns: "keyboard" }),
            description: t("This is all of 104-key keyboard", {
              ns: "keyboard",
            }),
            prefferedSide: "top",
          },
        },
        {
          element: "div[data-skbtn=q]",
          popover: {
            title: t("Single Key Customize", {
              ns: "keyboard",
            }),
            description: t("Try to click the button [q]", {
              ns: "keyboard",
            }),
            prefferedSide: "top",
          },
        },
      ]);
      // Start the introduction
      if (!ls.get("keyboard_boarding_cache_oninit")) boarding.start();
      ls.set("keyboard_boarding_cache_oninit", "1");
    }
  }, [mode]);

  const onKeyPress = (button: string, e?: MouseEvent | undefined) => {
    if (mode == "customize") {
      if (boarding.isActivated) {
        boarding.reset();
      }

      setAnchorEl(e?.currentTarget as HTMLButtonElement);
      // Define the steps for introduction
      const b = new Boarding({
        opacity: 0,
      });
      b.defineSteps([
        {
          element: "#BackgroundColor",
          popover: {
            title: t("Background Color", { ns: "keyboard" }),
            description: t("Drag the color picker to select background color", {
              ns: "keyboard",
            }),
            alignment: "start",
            prefferedSide: "bottom",
          },
        },
        {
          element: "#FontColor",
          popover: {
            title: t("Font Color", { ns: "keyboard" }),
            description: t("Drag the color picker to select font color", {
              ns: "keyboard",
            }),
            alignment: "start",
            prefferedSide: "bottom",
          },
        },
      ]);
      // Start the introduction
      if (!ls.get("keyboard_boarding_cache_onkeypress")) {
        setTimeout(() => {
          b.start();
        }, 500);
      }
      ls.set("keyboard_boarding_cache_onkeypress", "1");
      return;
    }

    setButton(button);
    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (
      button === "{shift}" ||
      button === "{shiftleft}" ||
      button === "{shiftright}" ||
      button === "{capslock}"
    ) {
      handleShift();
    }

    let src = blue;
    if (keySwitch == "brown") {
      src = brown;
    } else if (keySwitch == "red") {
      src = red;
    }
    if (button == "{space}") {
      src = blue_space;
      if (keySwitch == "brown") {
        src = brown_space;
      } else if (keySwitch == "red") {
        src = red_space;
      }
    }
    const audioElement = new Audio(src);
    audioElement.play();
  };

  const handleShift = () => {
    const layoutName = op.layoutName;

    setOp({
      ...op,
      layoutName: layoutName === "default" ? "shift" : "default",
    });
  };
  const onColorChange = (color: string) => {
    setColor(color);

    anchorEl.style.background = color;
  };
  const onFontColorChange = (color: string) => {
    setFontColor(color);

    anchorEl.style.color = color;
  };

  return (
    <div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Stack direction="row" spacing={2}>
          <HexColorPicker
            id="BackgroundColor"
            title={t("background color", { ns: "keyboard" })}
            color={color}
            onChange={onColorChange}
          ></HexColorPicker>
          <HexColorPicker
            id="FontColor"
            title={t("font color", { ns: "keyboard" })}
            color={fontColor}
            onChange={onFontColorChange}
          ></HexColorPicker>
        </Stack>
      </Popover>
      <div
        id="AppleKeyboardContainer"
        style={{
          background: `url(${img}) 100% center / cover no-repeat`,
          margin: "20px auto",
        }}
        className={"keyboardContainer"}
      >
        <Keyboard
          onKeyPress={onKeyPress}
          baseClass={"simple-keyboard-main"}
          keyboardRef={(r) => (keyboardRef.current = r)}
          {...keyboardOptions}
          onChange={onChange}
          theme={keyboardTheme}
        />

        <div className="controlArrows">
          <Keyboard
            onKeyPress={onKeyPress}
            onChange={onChange}
            baseClass={"simple-keyboard-control"}
            {...keyboardControlPadOptions}
            theme={keyboardTheme}
          />
          <Keyboard
            baseClass={"simple-keyboard-arrows"}
            {...keyboardArrowsOptions}
            onChange={onChange}
            onKeyPress={onKeyPress}
            theme={keyboardTheme}
          />
        </div>

        <div className="numPad">
          <Keyboard
            baseClass={"simple-keyboard-numpad"}
            {...keyboardNumPadOptions}
            onChange={onChange}
            onKeyPress={onKeyPress}
            theme={keyboardTheme}
          />
          <Keyboard
            baseClass={"simple-keyboard-numpadEnd"}
            {...keyboardNumPadEndOptions}
            onChange={onChange}
            onKeyPress={onKeyPress}
            theme={keyboardTheme}
          />
        </div>
      </div>
    </div>
  );
};

export default AppleKeyboard;
