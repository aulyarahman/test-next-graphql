import React from 'react'
import styled from '@emotion/styled'

type StyledProps = {
  h?: number
  w?: number
  bg?: number
  px?: number
  py?: number
}

const RootStyle = styled('div')<StyledProps>(
  {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    background: '#fff',
    padding: '20px',
    // alignItems: 'center',
    // justifyContent: 'center',
    gap: 10,
  },
  (props) => ({
    height: props.h,
    width: props.w,
    background: props.bg,
    paddingLeft: props.px,
    paddingRight: props.px,
    paddingTop: props.py,
    paddingBottom: props.py,
  })
)

type RootProps = {
  children: React.ReactNode
} & StyledProps

const Root: React.FC<RootProps> = (props) => {
  return <RootStyle {...props}>{props.children}</RootStyle>
}

export default Root
