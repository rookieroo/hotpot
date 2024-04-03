import React, {useCallback, useRef, useState} from "react"

import useClickOutside from "@/hooks/useClickOutside"
import {Popover, PopoverTrigger, PopoverContent} from "@/ui/popover";
import {Input} from "@/ui/input";
import {Button} from "@/ui/button";
import {Pipette} from "lucide-react";

const ColorPicker = ({color, onChange, presetColors}) => {
  const popover = useRef()
  const [isOpen, toggle] = useState(false)

  const close = useCallback(() => toggle(false), [])
  useClickOutside(popover, close)

  return (
    <div className="picker">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => toggle(true)}
          >
            <Pipette
              style={{color: color}}
              className="mr-2 h-4 w-4"
            />
            Open Color
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[90px]">
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
        </PopoverContent>
      </Popover>
    </div>
  )
}
export default ColorPicker
