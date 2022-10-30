import React from 'react'
// TYPES
import type { AppProps } from 'next/app'
// COMPONENTS
import Navbar from '../components/Navbar'
import '../styles/App.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return( 
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
