import { FC, PropsWithChildren } from 'react'
import style from '../atoms.module.scss'
import cx from 'classnames'
import { AnyObject } from 'types/generic'

export const PageContainer: FC<React.PropsWithChildren> = ({ children }) => {
  return <div className={cx('container', style.pageContainer)}>{children}</div>
}

interface WrapperProp extends AnyObject {
  children: React.ReactNode
}
export const Wrapper = ({ children, style }: WrapperProp) => {
  return (
    <div className="paper" style={style}>
      {children}
    </div>
  )
}
interface SectionProps extends PropsWithChildren {
  className?: string
}

export const Section: FC<SectionProps> = ({ children, className }) => {
  return <div className={cx(className, 'section')}>{children}</div>
}
