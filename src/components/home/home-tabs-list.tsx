"use client"

import * as React from "react"
import {Card, CardContent, CardHeader, CardTitle} from "@/ui/card";
import Link from "next/link";

export function HomeTabsList({list}) {

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {list.map(m =>
          <Link href={m.href}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {m.code}
                </CardTitle>
                <m.icon className="h-5 w-5" />
              </CardHeader>
              <CardContent>
                {/*<div className="text-2xl font-bold"></div>*/}
                <p className="text-xs text-muted-foreground">
                  {m.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        )}
      </div>
    </>
  )
}
