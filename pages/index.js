import Image from 'next/image'
import Hero from '@/components/Hero'
import Banner from '@/components/Banner'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'
import emailjs from '@emailjs/browser';
export default function Home() {
  return (
    <main>
      <Hero />
      <Banner />
      <Portfolio />
      <Contact />
    </main>
  )
}
