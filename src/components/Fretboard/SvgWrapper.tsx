import React, { FC } from 'react'

const SvgWrapper: FC = ({ children }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    width="100%"
    height="100%"
    stroke="black"
    strokeWidth="1"
    fill="white"
    shapeRendering="geometricPrecision"
    style={{ overflow: 'visible' }}
  >
    {children}
  </svg>
)

export default SvgWrapper
