import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { fretboardHeight } from 'types/enums'
import cx from 'classnames'

interface Props {
  boardHeight: fretboardHeight
  children?: ReactElement[]
  noOfStrings: number
}

const FretsRow = styled.div`
  display: flex;
  align-items: center;
`

export default ({
  noOfStrings,
  boardHeight,
  children,
}: Props): ReactElement => {
  const rowHeight = boardHeight / noOfStrings

  return (
    <FretsRow className={cx('fret-row')} style={{ height: `${rowHeight}px` }}>
      {children}
    </FretsRow>
  )
}
