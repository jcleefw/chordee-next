import React, { PropsWithChildren, ReactElement } from 'react'
import styled from 'styled-components'
import cx from 'classnames'
import styles from './fretboard.module.scss'
import { useAppContext } from 'src/context/state'

interface Props extends PropsWithChildren {}

const Row = styled.div`
  display: flex;
  align-items: center;
`

const FretRow = ({ children }: Props): ReactElement => {
  const { store } = useAppContext()
  const { noOfStrings } = store.tuning

  const rowHeight = store.boardHeight / noOfStrings

  return (
    <Row
      className={cx('fret-row', styles.fretRow)}
      style={{ height: `${rowHeight}px` }}
    >
      {children}
    </Row>
  )
}

export default FretRow
