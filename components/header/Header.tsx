import { FC } from 'react'
import { HeaderContent } from '../../content'
import HeaderStyles from './Header.module.scss'

const Header: FC = () => {
  const { title } = HeaderContent

  return (
    <header className={HeaderStyles.container}>
      <h1 className={HeaderStyles.title}>{title}</h1>
    </header>
  )
}

export default Header
