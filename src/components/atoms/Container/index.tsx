import { FC } from 'react'
import style from '../atoms.module.scss'
import cx from 'classnames'
import { AnyObject } from 'types/generic'

export const PageContainer: FC = ({ children }) => {
  return <div className={cx('container', style.pageContainer)}>{children}</div>
}

interface WrapperProp extends AnyObject {
  children: React.ReactNode
}
export const Wrapper = ({ children, height }: WrapperProp) => {
  return (
    <div className="paper" style={{ height }}>
      {children}
    </div>
  )
}

export const Section: FC<{ className?: string }> = ({
  children,
  className,
}) => {
  return <div className={cx(className, 'section')}>{children}</div>
}
