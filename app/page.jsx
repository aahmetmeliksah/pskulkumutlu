'use client'

import { usePathname } from 'next/navigation'

import MainHeader from '@/components/header/main-header'
import Hero from '@/components/hero'
import Aboutme from '@/components/aboutme'
import SessionsWrapper from '@/components/sessions/sessionswrapper'
import Quote from '@/components/quote'
import FooterComp from '@/components/footerComp'
import Drawer from '@/components/drawer'

export default function Home() {
  const pathname = usePathname()

  return (
    <div className="container-lg mx-auto px-4">
      <MainHeader />
      {pathname === '/iletişim' ? (
        <Drawer />
      ) : (
        <>
          <Hero />
          <Aboutme />
          <SessionsWrapper />
          <Quote />
          <FooterComp />
        </>
      )}
    </div>
  )
}
