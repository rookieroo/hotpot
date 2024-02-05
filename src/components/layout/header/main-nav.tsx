"use client"

import * as React from "react"
import Link from "next/link"

import {siteConfig} from "@/config/site"
import {Icons} from "@/components/customize-ui/Icons"

export function MainNav() {

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/trending" className="mr-6 flex items-center space-x-2">
        <Icons.triangle className="h-6 w-6"/>
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
    </div>
  )
}
