import { FC } from 'react'
import style from '../atoms.module.scss'
import cx from 'classnames'

export const PageContainer: FC = ({ children }) => {
  return (
    <div
      className={cx(
        style.pageContainer,
        'paper',
        'container container-lg container-xl'
      )}
    >
      {children}
    </div>
  )
}

export const Container: FC = ({ children }) => {
  return <div>{children}</div>
}
