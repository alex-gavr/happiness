import { DefaultTheme, ThemeProvider } from 'styled-components';
import GlobalStyle from '@/styles/globals';
import type { AppProps } from 'next/app';
import { LazyMotion } from 'framer-motion';
import { Provider } from 'react-redux';
// import { store } from '@/services/store';
import { Inter } from '@next/font/google';
import Head from 'next/head';
import { StyledMain } from '@/styles/styled';
import { store } from '@/services/store';

const inter = Inter({ subsets: ['latin'] });

const light: DefaultTheme = {
    colors: {
        background: 'rgba(255, 255, 255, 1)',
        title: 'rgba(0, 0, 0, 1)',
        paragraph: 'rgba(0, 0, 0, 0.7)',
        green: 'rgb(67, 175, 17)',
        red: 'rgb(204, 0, 0)',
        primary: '#FFFF9F',
        secondary: '#799cb9',
        black: '#000',
        white: '#fff',
    },
    fontSize: {
        heading: 'clamp(2.75rem, 2.6442rem + 0.5128vw, 3.125rem)',
        subHeading: 'clamp(1.5rem, 1.2179rem + 1.3675vw, 2.5rem)',
        body: 'clamp(1rem, 0.9295rem + 0.3419vw, 1.25rem)',
        button: 'clamp(1rem, 0.9295rem + 0.3419vw, 1.25rem)',
    },
};

const dark: DefaultTheme = {
    colors: {
        background: 'rgba(0, 0, 0, 1)',
        title: 'rgba(255, 255, 255, 1)',
        paragraph: 'rgba(255, 255, 255, 0.7)',
        green: 'rgb(67, 175, 17)',
        red: 'rgb(204, 0, 0)',
        primary: '#FFFF9F',
        secondary: '#799cb9',
        black: '#000',
        white: '#fff',
    },
    fontSize: {
        body: 'clamp(1rem, 0.9295rem + 0.3419vw, 1.25rem)',
        button: 'clamp(1rem, 0.9295rem + 0.3419vw, 1.25rem)',
        subHeading: 'clamp(1.5rem, 1.2179rem + 1.3675vw, 2.5rem)',
        heading: 'clamp(2.75rem, 2.6442rem + 0.5128vw, 3.125rem)',
    },
};

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Happiness</title>
                <meta name='description' content='Generated by create next app' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Provider store={store}>
                <LazyMotion features={async () => (await import('../utils/domMax')).default}>
                    <ThemeProvider theme={light}>
                        <GlobalStyle />
                        <StyledMain>
                            <Component {...pageProps} />
                        </StyledMain>
                    </ThemeProvider>
                </LazyMotion>
            </Provider>
        </>
    );
}
