/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import React from 'react'
import NextImage from 'next/image'

type ImageProps = {
  src: string
  w?: number
  h?: number
  alt?: string
}

const imageStyle = css({
  boxSizing: 'border-box',
  width: 300,
  height: 200,
  borderRadius: '10px',
})

const Image: React.FC<ImageProps> = ({ src, h, w, alt }) => {
  return (
    <NextImage
      alt={alt}
      src={src}
      width={`${w}px`}
      height={`${h}px`}
      css={imageStyle}
      objectFit={'cover'}
    />
  )
}

export default Image
