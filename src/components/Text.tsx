import styled from '@emotion/styled'
import React from 'react'

type StyleProps = {
  children?: React.ReactNode
  fontWeight?: 'normal' | 'bold' | 'semibold'
  fontSize?: string
  color?: string
}

const Textstyles = styled('p')<StyleProps>(
  {
    color: 'grey',
    fontSize: '1em',
    fontWeight: 'normal',
  },
  (props) => ({
    fontWeight: props.fontWeight,
    color: props.color,
    fontSize: props.fontSize,
  })
)

const Texts: React.FC<StyleProps> = (props) => {
  return <Textstyles {...props}>{props.children}</Textstyles>
}

export default Texts
