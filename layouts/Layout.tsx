import { FC, ReactNode } from 'react'
import Header from '../components/header/Header'
import Head from 'next/head'
import { HeaderContent } from '../content'

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const { title } = HeaderContent

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main>{children}</main>
      <footer>footer</footer>
    </>
  )
}

export default Layout
