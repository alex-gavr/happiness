import { FlexCCC, StyledMain } from '@/styles/core';
import GlobalStyle from '@/styles/globals';
import { Analytics } from '@vercel/analytics/react';
import React, { ReactNode } from 'react';
import { YMInitializer } from 'react-yandex-metrika';
import { Rubik } from '@next/font/google';
// import ProgressBar from './ProgressBar';
// import CountDown from './CountDown';
// import CommentSection from './CommentSection/CommentSection';
import { NextRouter } from 'next/router';
import dynamic from 'next/dynamic';
import AutoExit from './AutoExit';

const ProgressBar = dynamic(() => import('./ProgressBar'));
const CountDown = dynamic(() => import('./CountDown'));
const MemoizedCommentSection = dynamic(() => import('./CommentSection/CommentSection'));

const inter = Rubik({ subsets: ['latin'] });

interface IProps{
    children: ReactNode;
    router: NextRouter;

}

const Layout = ({ children, router }: IProps) => {
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
