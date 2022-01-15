import React from 'react'
import NextImg, { ImageProps } from 'next/image'

const Image = ({className, ...otherProps} : ImageProps) => {
  return (
    <span className={className}>
      <NextImg {...otherProps}/>
    </span>
    
  )
}

export default Image
