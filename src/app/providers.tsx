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
import React, {useState, Suspense} from "react";

interface ProvidersProps {
  children: ReactNode
}

const Providers: FC<ProvidersProps> = ({children}) => {
  const [config] = useConfig()
  const defaultTheme = createTheme();

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
    <Suspense fallback={<span>loading..</span>}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryStreamedHydration>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <MuiThemeProvider theme={defaultTheme}>
              <SessionProvider>
                <TooltipProvider>{children}</TooltipProvider>
              </SessionProvider>
            </MuiThemeProvider>
          </ThemeProvider>
        </ReactQueryStreamedHydration>
        <ReactQueryDevtools initialIsOpen={false}/>
      </QueryClientProvider>
    </Suspense>
  )
}

export default Providers
