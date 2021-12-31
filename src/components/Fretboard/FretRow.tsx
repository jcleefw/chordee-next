import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { fretboardHeight } from 'types/enums'
import cx from 'classnames'

interface Props {
  boardHeight: fretboardHeight
  children?: ReactElement[]
  noOfStrings: number
}

const Row = styled.div`
  display: flex;
  align-items: center;
`

const FretRow = ({
  noOfStrings,
  boardHeight,
  children,
}: Props): ReactElement => {
  const rowHeight = boardHeight / noOfStrings

  return (
    <Row className={cx('fret-row')} style={{ height: `${rowHeight}px` }}>
      {children}
    </Row>
  )
}

export default FretRow
