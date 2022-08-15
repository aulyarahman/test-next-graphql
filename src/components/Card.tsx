/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import React from 'react'

const cardStyle = css({
  boxSizing: 'border-box',
  display: 'flex',
  width: 500,
  height: '100%',
  gap: 10,
  borderRadius: '10px',
  background: '#fff',
  padding: 20,
  boxShadow: '5px 2px 2px #888888',
  letterSpacing: '0.2px',
  lineHeight: 1.6,
})

type Props = {
  children: React.ReactNode
}

const Card: React.FC<Props> = ({ children }) => {
  return <div css={cardStyle}>{children}</div>
}

export default Card
