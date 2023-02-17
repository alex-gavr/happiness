import { DefaultTheme } from 'styled-components';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import ym from 'react-yandex-metrika';
import { useDarkMode } from '@/utils/useDarkMode';
import { data } from '@/components/Data';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useEventListener } from 'usehooks-ts';
import Providers from '@/components/Providers';
import Layout from '@/components/Layout';

const light: DefaultTheme = {
    colors: {
        background: 'rgba(255, 255, 255, 1)',
        title: 'rgba(0, 0, 0, 1)',
        paragraph: 'rgba(0, 0, 0, 0.7)',
        green: 'rgba(0, 150, 0, 1)',
        red: 'rgb(204, 0, 0)',
        primary: 'rgba(0, 0, 255, 1)',
        secondary: '#5E00CF',
        black: '#000',
        white: '#fff',
        componentBackground: 'rgba(150, 150, 200, 0.2)',
        accentBG: 'rgba(0, 0, 0, 0.1)',
        gradientBW: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',
        border: 'rgba(0, 0, 0, 0.3)',
    },
    fontSize: {
        heading: 'clamp(1.6rem, 1.2500rem + 1.8667vw, 3rem)',
        subHeading: 'clamp(1.5rem, 1.2179rem + 1.3675vw, 2.5rem)',
        body: 'clamp(0.8rem, 0.6875rem + 0.6000vw, 1.25rem)',
        button: 'clamp(1rem, 0.9295rem + 0.3419vw, 1.25rem)',
        emoji: 'clamp(1.2rem, 1.0000rem + 1.0667vw, 2rem)',
    },
};

const dark: DefaultTheme = {
    colors: {
        background: 'rgba(0, 0, 0, 1)',
        title: 'rgba(255, 255, 255, 1)',
        paragraph: 'rgba(255, 255, 255, 0.7)',
        green: 'rgb(67, 175, 17)',
        red: 'rgb(204, 0, 0)',
        primary: 'rgba(0, 255, 255, 1)',
        secondary: '#5E00CF',
        black: '#000',
        white: '#fff',
        componentBackground: 'rgba(255, 255, 255, 0.1)',
        accentBG: 'rgba(200, 200, 200, 0.1)',
        gradientBW: 'radial-gradient(circle at 44.1% 18.8%, rgb(30, 30, 30) 0%, rgb(5, 5, 5) 99.4%)',
        border: 'rgba(255, 255, 255, 0.2)',
    },
    fontSize: {
        heading: 'clamp(1.6rem, 1.2500rem + 1.8667vw, 3rem)',
        subHeading: 'clamp(1.5rem, 1.2179rem + 1.3675vw, 2.5rem)',
        body: 'clamp(1rem, 0.9500rem + 0.2667vw, 1.2rem)',
        button: 'clamp(1rem, 0.9295rem + 0.3419vw, 1.25rem)',
        emoji: 'clamp(1.2rem, 1.0000rem + 1.0667vw, 2rem)',
    },
};

export default function App({ Component, pageProps }: AppProps) {
    // const ym1 =  data.map(i => i.answers.map(b => b.ym))
    // console.table(ym1);
    const router = useRouter();
    const [count, setCount] = useState(30);
    const { theme, toggleTheme, componentMounted } = useDarkMode();
    const themeMode = theme === 'light' ? light : dark;

    // AUTO-EXIT
    const updateCount = () => {
        setCount(30);
    };

    useEventListener('mousemove', updateCount);
    useEventListener('click', updateCount);
    useEventListener('scroll', updateCount);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         // update the state after 1000ms
    //         setCount((currentCount) => currentCount - 1);
    //     }, 1000);
    //     // when count is 0, Auto-Exit happens
    //     if (count === 0) {
    //         ym('reachGoal', 'autoExit');
    //         router.push('https://intorterraon.com/4/5708884');
    //     }

    //     // clean up the interval
    //     return () => clearInterval(interval);
    // }, [count, router]);

    // REVERSE
    // It will work only after at the age question :(
    useEffect(() => {
        router.beforePopState(({ as }) => {
            // Reverse exit
            ym('reachGoal', 'reverseExit');
            router.push('https://woafoame.net/4/5708374');
            return false;
        });
        return () => {
            router.beforePopState(() => true);
        };
    }, [router]);

    if (!componentMounted) {
        return <div style={{ width: '100vw', height: '100vh' }} />;
    }

    return (
        <>
            <Head>
                <title>Happiness</title>
                <meta name='description' content='Take survey' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Providers themeMode={themeMode}>
                <Layout router={router}>
                    <Component {...pageProps} data={data} />
                </Layout>
            </Providers>
        </>
    );
}
