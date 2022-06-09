import React, { ReactNode } from 'react'
import Navbar from '../navigation/Navbar'
import Footer from '../footer/Footer'
import Head from 'next/head'

type MainLayoutProps = {
  title?: string
  children: ReactNode
}

const Layout = (props: MainLayoutProps) => {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>{props.title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </div>
  )
}

export default Layout
