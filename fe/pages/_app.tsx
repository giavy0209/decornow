import type { AppProps } from 'next/app'
import 'assets/scss/styles.scss'
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import store from 'store';
import { useEffect } from 'react';
import storage from 'helpers/storage';
function MyApp({ Component, pageProps }: AppProps) {

  return <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
}

export default MyApp
