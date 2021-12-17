import { FC } from 'react'
import style from '../atoms.module.scss'
import cx from 'classnames'

export const PageContainer: FC = ({ children }) => {
  return <div className={cx('container', style.pageContainer)}>{children}</div>
}

export const Wrapper: FC = ({ children }) => {
  return <div className="paper">{children}</div>
}

export const Section: FC<{ className?: string }> = ({
  children,
  className,
}) => {
  return <div className={cx(className, 'section')}>{children}</div>
}
