import { FlexCCC, StyledMain } from '@/styles/core';
import GlobalStyle from '@/styles/globals';
import { Analytics } from '@vercel/analytics/react';
import React, { ReactNode, useEffect } from 'react';
import { YMInitializer } from 'react-yandex-metrika';
import { Rubik } from '@next/font/google';
import { NextRouter } from 'next/router';
import dynamic from 'next/dynamic';
import AutoExit from './AutoExit';
import { hasCookie, setCookie } from 'cookies-next';

const ProgressBar = dynamic(() => import('./ProgressBar'));
const CountDown = dynamic(() => import('./CountDown'));
const MemoizedCommentSection = dynamic(() => import('./CommentSection/CommentSection'));

const inter = Rubik({ subsets: ['latin'] });

interface IProps {
    children: ReactNode;
    router: NextRouter;
}

const Layout = ({ children, router }: IProps) => {

    // NonUnique Block
    const nonUnique = hasCookie('nonUnique');
    const path = router.pathname === '/' ? true : false;
    useEffect(() => {
        if (!nonUnique) {
            setCookie('nonUnique', 'true', { path: '/', maxAge: 60 * 60 * 24 * 7, secure: true });
        } else if (path && nonUnique) {
            console.log('hello from dev');
            // NonUnique exit (middleware costs too fucking much)
            // router.push('https://whoursie.com/4/5729771');
        }
    }, [nonUnique, path]);

    return (
        <>
            <YMInitializer accounts={[92326829]} options={{ webvisor: true }} version='2' />
            <Analytics />
            <GlobalStyle />
            <AutoExit />
            <StyledMain className={inter.className}>
                <ProgressBar />
                <FlexCCC gap='1rem'>
                    {router.pathname === '/' && <CountDown />}
                    {children}
                    <MemoizedCommentSection />
                </FlexCCC>
            </StyledMain>
        </>
    );
};

export default Layout;
