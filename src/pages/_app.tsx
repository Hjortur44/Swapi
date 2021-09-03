/**
 * This app uses a Star Wars API to display
 * data about the movies and their respectgive characters.
 */

import { AppProps } from 'next/app';
import { NextPage } from 'next';

import '../styles/global.scss';

// eslint-disable-next-line arrow-body-style
const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
