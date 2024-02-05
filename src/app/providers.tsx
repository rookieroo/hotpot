'use client'

import {SessionProvider} from 'next-auth/react'
import {ThemeProvider, useTheme} from 'next-themes'
import type {FC, ReactNode} from 'react'
import {TooltipProvider} from "@/ui/tooltip";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {ThemeProvider as MuiThemeProvider, createTheme} from '@mui/material/styles';
import {ReactQueryStreamedHydration} from '@tanstack/react-query-next-experimental'
import {useConfig} from "@/store/useConfig";
import React, {useState} from "react";

interface ProvidersProps {
  children: ReactNode
}

const Providers: FC<ProvidersProps> = ({children}) => {
  const [config] = useConfig()

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 1000,
          },
        },
      }),
  )

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryStreamedHydration>
        <MuiThemeProvider theme={config?.mergeTheme}>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <SessionProvider>
              <TooltipProvider>{children}</TooltipProvider>
            </SessionProvider>
          </ThemeProvider>
        </MuiThemeProvider>
      </ReactQueryStreamedHydration>
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  )
}

export default Providers
