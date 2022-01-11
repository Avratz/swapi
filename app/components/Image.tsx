import React from 'react'
import NextImg, { ImageProps } from 'next/image'

const Image = (props : ImageProps) => {
  return (
    <NextImg {...props}/>
  )
}

export default Image
