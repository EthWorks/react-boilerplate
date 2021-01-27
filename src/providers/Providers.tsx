import React, { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './GlobalStyle'

interface Props {
  children: ReactNode
}
export function Providers(props: Props) {
  return (
    <BrowserRouter>
      <GlobalStyle />
      {props.children}
    </BrowserRouter>
  )
}
