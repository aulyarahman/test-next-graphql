import React from 'react'
import styled from '@emotion/styled'

type ButtonProps = {
  h?: number
  w?: number
  bg?: string
  label?: string
}

const ButtonStyled = styled('button')(({ h, w, bg }: ButtonProps) => ({
  height: h,
  width: w,
  background: bg,
  borderRadius: '20px',
}))

export const Button: React.FC<ButtonProps> = (props) => {
  return <ButtonStyled {...props}>{props.label}</ButtonStyled>
}
