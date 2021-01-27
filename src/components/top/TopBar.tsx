import React from 'react'
import styled from 'styled-components'
import { Colors } from '../../constants'
import { Logo } from './Logo'

export function TopBar() {
  return (
    <Bar>
      <Logo />
    </Bar>
  )
}

const Bar = styled.header`
  background-color: ${Colors.White};
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
`
