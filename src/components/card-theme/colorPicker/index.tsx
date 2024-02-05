import React, {useCallback, useRef, useState} from "react"

import useClickOutside from "@/hooks/useClickOutside"
import {Input} from "@/ui/input";

const ColorPicker = ({color, onChange, presetColors}) => {
  const popover = useRef()
  const [isOpen, toggle] = useState(false)

  const close = useCallback(() => toggle(false), [])
  useClickOutside(popover, close)

  return (
    <div className="picker">
      <div
        className="swatch"
        style={{backgroundColor: color}}
        onClick={() => toggle(true)}
      />

      {isOpen && (
        <div className="popover" ref={popover}>
          <Input
            type="color"
            id="background-fill"
            title="Background color"
            value={color}
            onChange={event => onChange(event.target.value)}
          ></Input>
          <div className="picker__swatches">
            {presetColors.map((presetColor: string) => (
              <button
                key={presetColor}
                className="picker__swatch"
                style={{backgroundColor: presetColor}}
                onClick={() => onChange(presetColor)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
export default ColorPicker
