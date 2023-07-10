import store from '@/redux/store';
import '@/styles/globals.scss'
import { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  ); 
}
