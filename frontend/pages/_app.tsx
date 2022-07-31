import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../src/footer'
import Header from '../src/header'
import { Provider } from 'react-redux';
import createRootReduser from "../redux/reducers";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import cerateSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";

const sagaMiddaleware = cerateSagaMiddleware();

const middlewares = [sagaMiddaleware, thunk];

const store = createStore(
  createRootReduser(),
  composeWithDevTools(applyMiddleware(...middlewares))
)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Header link='header-links' />
      <Component {...pageProps} />
      <Footer link='footer-links' />
    </Provider>
  )
}

export default MyApp
