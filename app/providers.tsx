/* eslint-disable react/react-in-jsx-scope */
// app/providers.tsx
'use client'

import {NextUIProvider} from '@nextui-org/react'
import {ThemeProvider as NextThemesProvider} from 'next-themes'

export function NextUiProviders({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
    <NextThemesProvider>
      {children}
    </NextThemesProvider>
    </NextUIProvider>
  )
}