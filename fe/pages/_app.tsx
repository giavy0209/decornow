import type { AppProps } from 'next/app'
import 'assets/scss/styles.scss'
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import store from 'store';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

import AOS from 'aos'
import 'aos/dist/aos.css'

import 'antd/dist/antd.css';
import { useEffect } from 'react';
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init()
  }, [])
  return <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
}

export default MyApp
