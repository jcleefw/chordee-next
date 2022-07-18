import React, { FC, PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  width?: number
  offset?: number
}

const ViewPort: FC<Props> = ({ width, offset, children }) => (
  <svg width={`${width}%`} height="100%" x={`${offset}%`} y="0">
    {children}
  </svg>
)

export default ViewPort
