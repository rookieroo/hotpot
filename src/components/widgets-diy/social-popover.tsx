import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {Popover, PopoverTrigger} from "@radix-ui/react-popover";
import {PopoverContent} from "@/ui/popover";
import {PlusCircle} from "lucide-react";
import {Button} from "@/ui/button";
import {Switch} from "@/ui/switch";

export function SocialPopover({social, socialList, onSocialItemClick, onCheckedSocialChange}) {

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          {social && social.icon && <social.icon className="mr-2 h-4 w-4" />}
          {!social.icon && <PlusCircle className="mr-2 h-4 w-4"/>}
          {social.name}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        {socialList.map(p =>
          <div
            key={p.name}
            value={p.name}
            onClick={() => {
              onSocialItemClick(p);
            }}
            className="p-2 border-primary"
          >
            <div className="flex items-center justify-between">
              <p.icon
                className="mr-2 h-4 w-4"
              />
              <Switch
                checked={p.show}
                onCheckedChange={(v, event) => {
                  onCheckedSocialChange(v, p);
                }}
              />
            </div>
          </div>
        )}
      </PopoverContent>
    </Popover>
  )
}
