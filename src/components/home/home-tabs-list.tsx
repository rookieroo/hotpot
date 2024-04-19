"use client"

import * as React from "react"
import {Card, CardContent, CardHeader, CardTitle} from "@/ui/card";
import Link from "next/link";
import {useRouter} from 'next/navigation'
import {Button} from "@/ui/button";
import {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/ui/dialog";
import {Label} from "@/ui/label";
import {Input} from "@/ui/input";
import {Copy} from "lucide-react";


const prehandle_url = ['jina.ai', 'web-check']

export function HomeTabsList({list}) {
  const [container, setContainer] = React.useState(null);
  const router = useRouter()

  const handleClick = (e, m) => {
    if (prehandle_url.indexOf(m.code) > -1) {
      setContainer(e)
    } else {
      router.push(m.href)
    }
  };

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {list.map(m =>
          <div key={m.href}>
            {
              m.href.indexOf('html') > -1 &&
              <a href={m.href}>
                <CardItem m={m}/>
              </a>
            }
            {
              m.href.indexOf('html') === -1 &&
              <div onClick={(e) => handleClick(e, m)}>
                <CardItem m={m}/>
              </div>
            }
          </div>
        )}
        <Dialog>
          <DialogPortal container={container}>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Share link</DialogTitle>
                <DialogDescription>
                  Anyone who has this link will be able to view this.
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center space-x-2">
                <div className="grid flex-1 gap-2">
                  <Label htmlFor="link" className="sr-only">
                    Link
                  </Label>
                  <Input
                    id="link"
                    defaultValue="https://ui.shadcn.com/docs/installation"
                    readOnly
                  />
                </div>
                <Button type="submit" size="sm" className="px-3">
                  <span className="sr-only">Copy</span>
                  <Copy className="h-4 w-4"/>
                </Button>
              </div>
              <DialogFooter className="sm:justify-start">
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Close
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </DialogPortal>
        </Dialog>
      </div>
    </>
  )
};

function CardItem({m}) {

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {m.code}
        </CardTitle>
        <m.icon className="h-5 w-5"/>
      </CardHeader>
      <CardContent>
        {/*<div className="text-2xl font-bold"></div>*/}
        <p className="text-xs text-muted-foreground">
          {m.description}
        </p>
      </CardContent>
    </Card>
  )
}
