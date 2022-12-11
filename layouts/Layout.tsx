import { FC, ReactNode } from 'react'
import Header from '../components/header/Header'
import Head from 'next/head'
import { HeaderContent } from '../content'
import LayoutStyles from './Layout.module.scss'

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const { title } = HeaderContent

  return (
    <div className={LayoutStyles.container}>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  )
}

export default Layout
