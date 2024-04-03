import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react"

import {Button} from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {PLATFORMS} from "@/components/widgets-diy/config";
import {Switch} from "@/ui/switch";
import {useState} from "react";

export function SocialMenu({social, socialList, onSocialItemClick, onCheckedSocialChange}) {

  const [open, setOpen] = useState(false)
  const onOpenChange = (open) => {
    setOpen(open)
  }

  return (
    <DropdownMenu open={open} onOpenChange={onOpenChange} modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {social && social.icon && <social.icon className="mr-2 h-4 w-4" />}
          {!social.icon && <PlusCircle className="mr-2 h-4 w-4"/>}
          Open Social Menu
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Social List</DropdownMenuLabel>
        <DropdownMenuSeparator/>
        <DropdownMenuGroup>
          {socialList.map(p =>
            <DropdownMenuItem
              onClick={() => {
                onSocialItemClick(p);
              }}
            >
              <p.icon
                className="mr-2 h-4 w-4"
              />
              <span>{}</span>
              <DropdownMenuShortcut>
                <Switch
                  checked={p.show}
                  onCheckedChange={(v, event) => {
                    setOpen(true)
                    onCheckedSocialChange(v, p);
                    event.preventDefault;
                  }}
                />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          )}
        </DropdownMenuGroup>
        <DropdownMenuSeparator/>
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <UserPlus className="mr-2 h-4 w-4"/>
              <span>Invite users</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <Mail className="mr-2 h-4 w-4"/>
                  <span>Email</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MessageSquare className="mr-2 h-4 w-4"/>
                  <span>Message</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator/>
                <DropdownMenuItem>
                  <PlusCircle className="mr-2 h-4 w-4"/>
                  <span>More...</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
