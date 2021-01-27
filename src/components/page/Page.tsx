import React, { ReactNode } from 'react'
import { TopBar } from '../top'

interface Props {
  children: ReactNode
}

export function Page({ children }: Props) {
  return (
    <>
      <TopBar />
      {children}
    </>
  )
}
