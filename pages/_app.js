import * as React from 'react';
import Head from 'next/head';
import { CacheProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Footer from 'components/Footer';
import createEmotionCache from 'styles/createEmotionCache';
import theme from 'styles/theme';
import '../styles/globals.css';

const clientSideEmotionCache = createEmotionCache();

const MyApp = ({ Component, emotionCache = clientSideEmotionCache, pageProps }) => (
  <CacheProvider value={emotionCache}>
    <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  </CacheProvider>
);

export default MyApp;
