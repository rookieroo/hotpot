import React, { FunctionComponent, useState, MutableRefObject } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import blue from '@/assets/audio/blue.MP3';
import blue_space from '@/assets/audio/blue_space.MP3';
interface IProps {
  onChange: (input: string) => void;
  keyboardRef: MutableRefObject<typeof Keyboard>;
}

const initDisplay = () => {
  const alphabetMap: {[key: string]: string} = {}
  for (let i = 0; i < 26; i++) {
    // {'a': 'A'}
    alphabetMap[String.fromCharCode(97+i)] = String.fromCharCode(65+i)
  }
  alphabetMap['{shift}'] = 'Shift'
  alphabetMap[`{caps}`] = 'Caps'
  alphabetMap['{tab}'] = 'Tab'
  alphabetMap[`{bksp}`] = 'Backspace'
  alphabetMap['{enter}'] = 'Enter'
  return alphabetMap
}

const KeyboardWrapper: FunctionComponent<IProps> = ({
  onChange,
  keyboardRef
}) => {
  const [layoutName, setLayoutName] = useState("default");
  const [display, setDisplay] = useState(initDisplay());

  const onKeyPress = (button: string) => {
    if (button === "{shift}" || button === "{lock}") {
      setLayoutName(layoutName === "default" ? "shift" : "default");
    }

    let src = blue
    if (button == '{space}') {
      src = blue_space
    }
    const audioElement = new Audio(src);
    audioElement.play()
  };

  return (
    <Keyboard
      keyboardRef={r => (keyboardRef.current = r)}
      layoutName={layoutName}
      onChange={onChange}
      onKeyPress={onKeyPress}
      onRender={() => console.log("Rendered")}
      display={display}
      mergeDisplay={true}
    />
  );
};

export default KeyboardWrapper;
