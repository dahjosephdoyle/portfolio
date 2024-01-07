import '@/styles/globals.scss';
import Head from 'next/head';
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  <Head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </Head>
  return <Component {...pageProps} />
}
