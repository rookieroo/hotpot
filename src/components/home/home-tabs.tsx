"use client"

import * as React from "react"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/ui/tabs";
import {HomeTabsList} from "@/components/home/home-tabs-list";
import {Tools_Menu, Tools_Category, Widgets_Category, Widgets_Menu} from "@/components/layout/header/menu";
import {ScrollArea, ScrollBar} from "@/ui/scroll-area";

export function HomeTabs() {
  const [toolTab, setToolTab] = React.useState("all")
  const [widgetsTab, setWidgetsTab] = React.useState("all")
  const [toolTabList, setToolTabList] = React.useState(Tools_Menu)
  const [widgetsTabList, setWidgetsTabList] = React.useState(Widgets_Menu)

  React.useEffect(() => {
    let list = Tools_Menu
    if (toolTab !== 'all') {
      list = Tools_Menu.filter(t => t.cate === toolTab)
    }
    setToolTabList(list)
  }, [toolTab])

  React.useEffect(() => {
    let list = Widgets_Menu
    if (widgetsTab !== 'all') {
      list = Widgets_Menu.filter(w => {
        if (Array.isArray(w.cate)) {
          return w.cate.indexOf(widgetsTab) > -1
        } else {
          return w.cate === widgetsTab
        }
      })
    }
    setWidgetsTabList(list)
  }, [widgetsTab])

  return (
    <div className="flex-1 space-y-4 p-16 pt-6">
      <h2 className="text-3xl font-bold tracking-tight">Tools List</h2>
      <Tabs defaultValue={toolTab} onValueChange={setToolTab} className="space-y-4">
        <ScrollArea className="w-full">
          <TabsList>
            {Tools_Category.map(cate =>
              <TabsTrigger value={cate.name} disabled={!cate.active}>
                <cate.icon className="h-4 w-4" />&nbsp;
                {cate.name}
              </TabsTrigger>
            )}
          </TabsList>
          <ScrollBar orientation="horizontal"></ScrollBar>
        </ScrollArea>
        <TabsContent value={toolTab} className="space-y-4">
          <HomeTabsList list={toolTabList} />
        </TabsContent>
      </Tabs>
      <h2 className="text-3xl font-bold tracking-tight">Widgets List</h2>
      <Tabs defaultValue={widgetsTab} onValueChange={setWidgetsTab} className="space-y-4">
        <ScrollArea className="w-full">
          <TabsList>
            {Widgets_Category.map(cate =>
              <TabsTrigger value={cate.name} disabled={!cate.active}>
                <cate.icon className="h-4 w-4" />&nbsp;
                {cate.name}
              </TabsTrigger>
            )}
          </TabsList>
          <ScrollBar orientation="horizontal"></ScrollBar>
        </ScrollArea>
        <TabsContent value={widgetsTab} className="space-y-4">
          <HomeTabsList list={widgetsTabList} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
