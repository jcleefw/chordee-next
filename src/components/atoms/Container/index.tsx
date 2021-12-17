import { FC } from 'react'
import style from '../atoms.module.scss'

export const PageContainer: FC = ({ children }) => {
  return <div className={style.pageContainer}>{children}</div>
}

export const Container: FC = ({ children }) => {
  return <div>{children}</div>
}
