import { createGlobalStyle, DefaultTheme, ThemeProvider } from 'styled-components';
import GlobalStyle from '@/styles/globals';
import type { AppProps } from 'next/app';
import { LazyMotion } from 'framer-motion';
import { Provider } from 'react-redux';
import { Rubik } from '@next/font/google';
import Head from 'next/head';
import { StyledMain } from '@/styles/styled';
import { store } from '@/services/store';
import { YMInitializer } from 'react-yandex-metrika';
import { useDarkMode } from '@/utils/useDarkMode';
import { Analytics } from '@vercel/analytics/react';

const inter = Rubik({ subsets: ['latin'] });

const light: DefaultTheme = {
    colors: {
        background: 'rgba(255, 255, 255, 1)',
        title: 'rgba(0, 0, 0, 1)',
        paragraph: 'rgba(0, 0, 0, 0.7)',
        green: 'rgb(67, 175, 17)',
        red: 'rgb(204, 0, 0)',
        primary: '#013057',
        secondary: '#799cb9',
        black: '#000',
        white: '#fff',
        componentBackground: 'rgba(0, 0, 0, 0.1)',
    },
    fontSize: {
        heading: 'clamp(2rem, 1.6250rem + 2.0000vw, 3.5rem);',
        subHeading: 'clamp(1.5rem, 1.2179rem + 1.3675vw, 2.5rem)',
        body: 'clamp(0.8rem, 0.6875rem + 0.6000vw, 1.25rem)',
        button: 'clamp(1rem, 0.9295rem + 0.3419vw, 1.25rem)',
        emoji: 'clamp(1.2rem, 1.0000rem + 1.0667vw, 2rem)'
    },
};

const dark: DefaultTheme = {
    colors: {
        background: 'rgba(0, 0, 0, 1)',
        title: 'rgba(255, 255, 255, 1)',
        paragraph: 'rgba(255, 255, 255, 0.7)',
        green: 'rgb(67, 175, 17)',
        red: 'rgb(204, 0, 0)',
        primary: '#f8d664',
        secondary: '#799cb9',
        black: '#000',
        white: '#fff',
        componentBackground: 'rgba(255, 255, 255, 0.1)',
    },
    fontSize: {
        heading: 'clamp(2rem, 1.6250rem + 2.0000vw, 3.5rem);',
        subHeading: 'clamp(1.5rem, 1.2179rem + 1.3675vw, 2.5rem)',
        body: 'clamp(1rem, 0.9500rem + 0.2667vw, 1.2rem)',
        button: 'clamp(1rem, 0.9295rem + 0.3419vw, 1.25rem)',
        emoji: 'clamp(1.2rem, 1.0000rem + 1.0667vw, 2rem)'
    },
};

export type TData = {
    question: string;
    answers: {
        answer: string;
        emoji: string;
        to: string;
        ym: string;
        exit: string;
    }[];
}[];

const data: TData = [
    {
        question: 'are you happy?',
        answers: [
            {
                answer: 'yes',
                emoji: '🥰',
                to: 'do you think that genetics 🧬 can impact happiness?',
                ym: 'happy',
                exit: ''
            },
            {
                answer: 'no',
                emoji: '😭',
                to: 'do you think that genetics 🧬 can impact happiness?',
                ym: 'unhappy',
                exit: ''
            },
        ],
    },
    {
        question: 'do you think that genetics 🧬 can impact happiness?',
        answers: [
            {
                answer: 'maybe yes',
                emoji: '😄',
                to: 'what makes you feel the happiest?',
                ym: 'genetics?yes',
                exit: ''
            },
            {
                answer: "i don't know",
                emoji: '🤔',
                to: 'what makes you feel the happiest?',
                ym: 'genetics?donno',
                exit: ''
            },
            {
                answer: 'no',
                emoji: '😑',
                to: 'what makes you feel the happiest?',
                ym: 'genetics?no',
                exit: ''
            },
        ],
    },
    {
        question: 'what makes you feel the happiest?',
        answers: [
            {
                answer: 'income',
                emoji: '💰',
                to: 'will more money make you even happier?',
                ym: 'happy/income',
                exit: ''
            },
            {
                answer: 'health state',
                emoji: '💪',
                to: 'do you stay socially connected?',
                ym: 'happy/health',
                exit: ''
            },
            {
                answer: 'new technologies',
                emoji: '📱',
                to: 'do you like exploring new mobile apps?',
                ym: 'happy/tech',
                exit: ''
            },
            {
                answer: 'relationships',
                emoji: '❤️',
                to: 'will more money make you even happier?',
                ym: 'happy/relationships',
                exit: ''
            },
        ],
    },
    {
        question: 'what will make you feel happier?',
        answers: [
            {
                answer: 'higher income',
                emoji: '💰',
                to: 'what would you rather do?',
                ym: 'unhappy/income',
                exit: ''
            },
            {
                answer: 'better health state',
                emoji: '💪',
                to: 'do you stay socially connected?',
                ym: 'unhappy/health',
                exit: ''
            },
            {
                answer: 'new technologies',
                emoji: '📱',
                to: 'do you like exploring new mobile apps?',
                ym: 'unhappy/tech',
                exit: ''
            },
            {
                answer: 'meaningful relationships',
                emoji: '❤️',
                to: 'do you date someone?',
                ym: 'unhappy/relationships',
                exit: ''
            },
        ],
    },
    {
        question: 'will more money make you even happier?',
        answers: [
            {
                answer: 'yes',
                emoji: '🤑',
                to: 'what would you rather do?',
                ym: 'moreMoney?yes',
                exit: ''
            },
            {
                answer: 'no',
                emoji: '😑',
                to: 'will more meaningful relationships make you happier?',
                ym: 'moreMoney?no',
                exit: ''
            },
        ],
    },
    {
        question: 'what would you rather do?',
        answers: [
            {
                answer: 'invest money',
                emoji: '📈',
                to: '/age',
                ym: 'investMoney',
                exit: 'FinanceExit'
            },
            {
                answer: 'win Money',
                emoji: '🍀',
                to: 'do you follow sport events?',
                ym: 'winMoney',
                exit: ''
            },
        ],
    },
    {
        question: 'do you follow sport events?',
        answers: [
            {
                answer: 'Yes',
                emoji: '🏅',
                to: '/age',
                ym: 'sportEvents?yes',
                exit: 'BettingExit'
            },
            {
                answer: 'No',
                emoji: '😑',
                to: '/age',
                ym: 'sportEvents?no',
                exit: 'GamblingExit'
            },
        ],
    },
    {
        question: 'will more meaningful relationships make you happier?',
        answers: [
            {
                answer: 'yes',
                emoji: '🥰',
                to: 'do you date someone?',
                ym: 'moreRelationships?yes',
                exit: ''
            },
            {
                answer: 'no',
                emoji: '😕',
                to: 'do you like exploring new mobile apps?',
                ym: 'moreRelationships?no',
                exit: ''
            },
        ],
    },
    {
        question: 'do you date someone?',
        answers: [
            {
                answer: 'yes',
                emoji: '😍',
                to: 'would you like to meet someone else?',
                ym: 'dateNow?yes',
                exit: ''
            },
            {
                answer: 'no',
                emoji: '😕',
                to: 'would you like to date someone?',
                ym: 'dateNow?no',
                exit: ''
            },
        ],
    },
    {
        question: 'would you like to date someone?',
        answers: [
            {
                answer: 'yes',
                emoji: '😍',
                to: '/age',
                ym: 'wannaData?yes',
                exit: 'DatingExit'
            },
            {
                answer: 'no',
                emoji: '😕',
                to: 'why not? it will help if you find someone! you will be more joyful. don not be scared, okay?',
                ym: 'wannaData?no',
                exit: ''
            },
        ],
    },
    {
        question: 'why not? it will help if you find someone! you will be more joyful. don not be scared, okay?',
        answers: [
            {
                answer: 'okay',
                emoji: '😌',
                to: '/age',
                ym: 'findSomeone/okay',
                exit: 'DatingExit'
            },
        ],
    },
    {
        question: 'would you like to meet someone else?',
        answers: [
            {
                answer: 'yes',
                emoji: '😏',
                to: '/age',
                ym: 'dateSomeoneElse?yes',
                exit: 'DatingExit'
            },
            {
                answer: 'no',
                emoji: '😕',
                to: 'try something new with your partner, okay?',
                ym: 'dateSomeoneElse?no',
                exit: ''
            },
        ],
    },
    {
        question: 'try something new with your partner, okay?',
        answers: [
            {
                answer: 'Alright',
                emoji: '😌',
                to: '/age',
                ym: 'tryNewWithPartner/yes',
                exit: 'DatingExit'
            },
        ],
    },
    {
        question: 'do you like exploring new mobile apps?',
        answers: [
            {
                answer: 'yes',
                emoji: '👍',
                to: 'do you consider yourself a mobile app geek?',
                ym: 'newApps?yes',
                exit: ''
            },
            {
                answer: 'no',
                emoji: '😕',
                to: 'do you want to laugh?',
                ym: 'newApps?no',
                exit: ''
            },
        ],
    },
    {
        question: 'do you consider yourself a mobile app geek?',
        answers: [
            {
                answer: 'yes',
                emoji: '🤓',
                to: 'do you care about internet privacy?',
                ym: 'geek?yes',
                exit: ''
            },
            {
                answer: 'no',
                emoji: '😑',
                to: 'do you care about internet privacy?',
                ym: 'geek?no',
                exit: ''
            },
        ],
    },
    {
        question: 'do you care about internet privacy?',
        answers: [
            {
                answer: 'yes',
                emoji: '😎',
                to: '/age',
                ym: 'careAboutPrivacy?yes',
                exit: 'VPNExit'
            },
            {
                answer: 'no',
                emoji: '😕',
                to: '/age',
                ym: 'careAboutPrivacy?no',
                exit: 'MobileAppsExit'
            },
        ],
    },
    {
        question: 'do you want to laugh?',
        answers: [
            {
                answer: 'yes',
                emoji: '😏',
                to: 'do you find this meme funny?',
                ym: 'wannaLaugh?yes',
                exit: ''
            },
            {
                answer: 'no',
                emoji: '😔',
                to: 'you seem sad. is everything alright? tell me what is wrong. it is anonymous',
                ym: 'wannaLaugh?no',
                exit: ''
            },
        ],
    },
    {
        question: 'do you find this meme funny?',
        answers: [
            {
                answer: 'yes',
                emoji: '😂',
                to: '/age',
                ym: 'firstMemeFunny?yes',
                exit: 'OtherExit'
            },
            {
                answer: 'no',
                emoji: '😬',
                to: 'what about this one? did you laugh?',
                ym: 'firstMemeFunny?no',
                exit: ''
            },
        ],
    },
    {
        question: 'what about this one? did you laugh?',
        answers: [
            {
                answer: 'this time yes',
                emoji: '😂',
                to: '/age',
                ym: 'secondMemeFunny?yes',
                exit: 'OtherExit'
            },
            {
                answer: 'no, stop',
                emoji: '😑',
                to: '/age',
                ym: 'secondMemeFunny?no',
                exit: 'OtherExit'
            },
        ],
    },
    {
        question: 'you seem sad. is everything alright? tell me what is wrong. it is anonymous',
        answers: [
            {
                answer: 'Family problems',
                emoji: '😔',
                to: '/age',
                ym: 'problem/family',
                exit: 'OtherExit'
            },
            {
                answer: 'Friends problems',
                emoji: '😕',
                to: '/age',
                ym: 'problem/friends',
                exit: 'OtherExit'
            },
            {
                answer: 'Health problems',
                emoji: '😣',
                to: '/age',
                ym: 'problem/health',
                exit: 'OtherExit'
            },
            {
                answer: 'Money Problems',
                emoji: '😬',
                to: '/age',
                ym: 'problem/money',
                exit: 'OtherExit'
            },
            {
                answer: 'Other',
                emoji: '😢',
                to: '/age',
                ym: 'problem/other',
                exit: 'OtherExit'
            },
        ],
    },
    {
        question: 'do you stay socially connected?',
        answers: [
            {
                answer: 'yes',
                emoji: '😌',
                to: 'do you spend a lot of time in your phone?',
                ym: 'sociallyConnected?yes',
                exit: ''
            },
            {
                answer: 'no',
                emoji: '😢',
                to: 'do you date someone?',
                ym: 'sociallyConnected?no',
                exit: ''
            },
        ],
    },
    {
        question: 'do you spend a lot of time in your phone?',
        answers: [
            {
                answer: 'yes',
                emoji: '😅',
                to: 'do you like exploring new mobile apps?',
                ym: 'phoneAddict?yes',
                exit: ''
            },
            {
                answer: 'no',
                emoji: '🙂',
                to: 'do you laugh enough?',
                ym: 'phoneAddict?no',
                exit: ''
            },
        ],
    },
    {
        question: 'do you laugh enough?',
        answers: [
            {
                answer: 'yes',
                emoji: '🤣',
                to: 'do you eat a lot of carbohydrates (sugar, bread, etc.)?',
                ym: 'laughEnough?yes',
                exit: ''
            },
            {
                answer: 'no',
                emoji: '😭',
                to: 'do you want to laugh?',
                ym: 'laughEnough?no',
                exit: ''
            },
        ],
    },
    {
        question: 'do you eat a lot of carbohydrates (sugar, bread, etc.)?',
        answers: [
            {
                answer: 'yes',
                emoji: '🥖 👉 ❤️',
                to: 'stop it and you will have dramatic health improvements! i promise. got it?',
                ym: 'eatMuchSugar?yes',
                exit: ''
            },
            {
                answer: 'no',
                emoji: '🙂',
                to: 'good job! i am proud of you 🤗',
                ym: 'eatMuchSugar?no',
                exit: ''
            },
        ],
    },
    {
        question: 'stop it and you will have dramatic health improvements! i promise. got it?',
        answers: [
            {
                answer: 'got It!',
                emoji: '😅',
                to: '/age',
                ym: 'stopSugar/ok',
                exit: 'OtherExit'
            },
        ],
    },
    {
        question: 'good job! i am proud of you 🤗',
        answers: [
            {
                answer: 'thank you!',
                emoji: '😅',
                to: '/age',
                ym: 'proudOfYou/ok',
                exit: 'OtherExit'
            },
        ],
    },
];

export default function App({ Component, pageProps }: AppProps) {
    const { theme, toggleTheme, componentMounted } = useDarkMode();
    const themeMode = theme === 'light' ? light : dark;

    if (!componentMounted) {
        return <div style={{ width: '100vw', height: '100vh' }} />;
    }
    
    return (
        <>
            <Head>
                <title>Happiness</title>
                <meta name="monetag" content="9b3282e0c05773a5e761474d67e1b1f6" />
                <meta name="monetag" content="d82419bef87a5d899d417b44326cf61a" />
                <meta name="pushsdk" content="4b56e4173da530d3f2cdd7709ea8e218" />
                <meta name='description' content='Take survey' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Provider store={store}>
                <LazyMotion features={async () => (await import('../utils/domMax')).default}>
                    <ThemeProvider theme={themeMode}>
                        <YMInitializer accounts={[92326829]} options={{ webvisor: true }} version='2' />
                        <Analytics />
                        <GlobalStyle />
                        <StyledMain className={inter.className}>
                            <Component {...pageProps} data={data} />
                        </StyledMain>
                    </ThemeProvider>
                </LazyMotion>
            </Provider>
        </>
    );
}
