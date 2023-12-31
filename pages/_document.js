import { Html, Head, Main, NextScript } from 'next/document'
import Footer from '@/components/Footer';
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <Script
          id="fontAwesome"
          strategy="lazyOnload" 
          src="https://kit.fontawesome.com/4ca6929630.js" 
          crossorigin="anonymous">
        </Script>
      </Head>
      <body>
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  )
}
