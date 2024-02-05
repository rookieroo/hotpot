import React, { FunctionComponent, useState, MutableRefObject } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import "./index.css";

interface IProps {
  onChange: (input: string) => void;
  keyboardRef: MutableRefObject<typeof Keyboard>;
}

const options = {
  // onChange: input => onChange(input),
  // onKeyPress: button => onKeyPress(butto n),
  mergeDisplay: true,
  layoutName: "default",
  layout: {
    default: [
      "q w e r t y u i o p",
      "a s d f g h j k l",
      "{shift} z x c v b n m {backspace}",
      "{numbers} {space} {ent}",
    ],
    shift: [
      "Q W E R T Y U I O P",
      "A S D F G H J K L",
      "{shift} Z X C V B N M {backspace}",
      "{numbers} {space} {ent}",
    ],
    numbers: ["1 2 3", "4 5 6", "7 8 9", "{abc} 0 {backspace}"],
  },
  display: {
    "{numbers}": "123",
    "{ent}": "return",
    "{escape}": "esc ⎋",
    "{tab}": "tab ⇥",
    "{backspace}": "⌫",
    "{capslock}": "caps lock ⇪",
    "{shift}": "⇧",
    "{controlleft}": "ctrl ⌃",
    "{controlright}": "ctrl ⌃",
    "{altleft}": "alt ⌥",
    "{altright}": "alt ⌥",
    "{metaleft}": "cmd ⌘",
    "{metaright}": "cmd ⌘",
    "{abc}": "ABC",
  },
};

const MobileKeyboard: FunctionComponent<IProps> = ({
  onChange,
  keyboardRef,
}) => {
  const [op, setOp] = useState(options);
  const [input, setInput] = useState("");

  const onKeyPress = (button: string) => {
    if (button === "{shift}" || button === "{lock}") handleShift();
    if (button === "{numbers}" || button === "{abc}") handleNumbers();
  };

  function handleShift() {
    const currentLayout = op.layoutName;
    const shiftToggle = currentLayout === "default" ? "shift" : "default";

    setOp({
      ...op,
      layoutName: shiftToggle,
    });
  }

  function handleNumbers() {
    const currentLayout = op.layoutName;
    const numbersToggle = currentLayout !== "numbers" ? "numbers" : "default";
    setOp({
      ...op,
      layoutName: numbersToggle,
    });
  }

  const onChangeInput = (event) => {
    const input = event.target.value;
    setInput(input);
  };

  return (
    <>
      <Keyboard
        keyboardRef={(r) => (keyboardRef.current = r)}
        onChange={onChange}
        onKeyPress={onKeyPress}
        onRender={() => console.log("Rendered")}
        {...op}
      />
    </>
  );
};

export default MobileKeyboard;
